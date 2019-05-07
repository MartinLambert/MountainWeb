import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GameService, TurnStepType } from '../game.service';
import { Tile } from './tile';
import { Player } from '../player/player';

@Component({
	selector: 'hotm-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewInit {

	spaces: Tile[];
	tiles: Tile[];
	currentTile: Tile;
	discard: Tile[] = [];
	boardConstants = {
		minSpace:   12,
		maxSpace:  185,
		rowWidth:   11,
		colHeight:  17,
		heartStart:  1,
		heartEnd:    9,
		homeStart: 177,
		homeEnd:   185
	};
	startLocations = [178, 180, 182, 184];
	campStarts = [
		{ top: '11.4%', left: '52.25%' },
		{ top: '36.4%', left: '52.25%' },
		{ top: '61.4%', left: '52.5%' },
		{ top: '86.4%', left: '52.25%' }
	];
	tileStyle = {width: '0', height: '0'};
	@Input() players: Player[];
	@Output() tilePlaced = new EventEmitter();
	@Output() tileRemoved = new EventEmitter();

	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.spaces = this.gameService.getBoard();
		this.tiles = this.gameService.getTiles();
		this.tiles = this.shuffle(this.tiles);
		for (let i = 0; i < this.players.length; i++) {
			this.players[i].startLocation = this.startLocations[i];
		}
	}

	ngAfterViewInit(): void {
		this.tileStyle.width = document.getElementsByTagName('hotm-cards')[0].clientWidth + 'px';
		this.tileStyle.height = document.getElementsByTagName('hotm-cards')[0].clientHeight / 2 + 'px';
	}

	private shuffle(pile: Tile[]): Tile[] {
		const newPile: Tile[] = [];
		while (pile.length)
			newPile.push(pile.splice(Math.floor(Math.random() * pile.length), 1)[0]);
		return newPile;
	}

	drawTile(): void {
		if (!this.tiles.length) return;
		const tile = this.tiles[0];
		this.gameService.currentTile = tile;
		this.tiles.shift();
		// TODO: when there are no tiles left to draw
	}

	validateTilePlacement(tile: Tile): void {
		if (!tile.visible) return;
		for (let i = this.boardConstants.minSpace; i < this.boardConstants.maxSpace; i++) {
			this.spaces[i].valid = false;
			if (this.spaces[i].visible || this.spaces[i].locked) continue;
			let hasDoor = false;
			if (tile.doors.north) {
				if (this.spaces[i - this.boardConstants.rowWidth].doors.south) hasDoor = true;
				else if (this.spaces[i - this.boardConstants.rowWidth].visible) continue;
			} else if (this.spaces[i - this.boardConstants.rowWidth].doors.south) continue;
			if (tile.doors.east) {
				if (this.spaces[i + 1].doors.west) hasDoor = true;
				else if (this.spaces[i + 1].visible) continue;
			} else if (this.spaces[i + 1].doors.west) continue;
			if (tile.doors.south) {
				if (this.spaces[i + this.boardConstants.rowWidth].doors.north) hasDoor = true;
				else if (this.spaces[i + this.boardConstants.rowWidth].visible) continue;
			} else if (this.spaces[i + this.boardConstants.rowWidth].doors.north) continue;
			if (tile.doors.west) {
				if (this.spaces[i - 1].doors.east) hasDoor = true;
				else if (this.spaces[i - 1].visible) continue;
			} else if (this.spaces[i - 1].doors.east) continue;
			this.spaces[i].valid = hasDoor;
		}
		// TODO: when there are no valid places to put this tile
	}

	validatePlayerMovement(distance: number, location: number): void {
		if (location < this.boardConstants.minSpace || location > this.boardConstants.maxSpace) return;
		if (distance && this.spaces[location].visible) {
			this.spaces[location - this.boardConstants.rowWidth].valid = this.spaces[location].doors.north && this.spaces[location - this.boardConstants.rowWidth].doors.south;
			this.spaces[location + 1].valid = this.spaces[location].doors.east  && this.spaces[location + 1].doors.west;
			this.spaces[location + this.boardConstants.rowWidth].valid = this.spaces[location].doors.south && this.spaces[location + this.boardConstants.rowWidth].doors.north;
			this.spaces[location - 1].valid = this.spaces[location].doors.west  && this.spaces[location - 1].doors.east;
			this.validatePlayerMovement(distance - 1, location - this.boardConstants.rowWidth);
			this.validatePlayerMovement(distance - 1, location +  1);
			this.validatePlayerMovement(distance - 1, location + this.boardConstants.rowWidth);
			this.validatePlayerMovement(distance - 1, location -  1);
		}
		this.spaces[this.players[this.gameService.currPlayer].location].valid = false;
		// TODO: when there are no valid moves to make
	}
	validateAdjacentMovement(location: number, diagonal: boolean): void {
		if (location < this.boardConstants.minSpace || location > this.boardConstants.maxSpace) return;
		this.spaces[location - this.boardConstants.rowWidth].valid = this.spaces[location - this.boardConstants.rowWidth].visible;
		this.spaces[location + 1].valid = this.spaces[location + 1].visible;
		this.spaces[location + this.boardConstants.rowWidth].valid = this.spaces[location + this.boardConstants.rowWidth].visible;
		this.spaces[location - 1].valid = this.spaces[location - 1].visible;
		if (diagonal) {
			this.spaces[location - this.boardConstants.rowWidth - 1].valid = this.spaces[location - this.boardConstants.rowWidth - 1].visible;
			this.spaces[location - this.boardConstants.rowWidth + 1].valid = this.spaces[location - this.boardConstants.rowWidth + 1].visible;
			this.spaces[location + this.boardConstants.rowWidth - 1].valid = this.spaces[location + this.boardConstants.rowWidth - 1].visible;
			this.spaces[location + this.boardConstants.rowWidth + 1].valid = this.spaces[location + this.boardConstants.rowWidth + 1].visible;
		}
	}

	validateTileRemoval(): void {
		for (let i = this.boardConstants.minSpace; i < this.boardConstants.maxSpace; i++) {
			if (this.spaces[i].locked) continue;
			if (this.players.filter(player => player.location === i).length) continue;
			if (this.spaces[i].visible) this.spaces[i].valid = true;
		}
		// TODO: when there are no valid tiles to remove
	}

	clearValidity(): void {
		this.spaces.forEach(space => space.valid = false);
	}

	selectSpace(space: Tile, currIndex: number): void {
		if (!space.valid) return;
		const currLevel = space.level;
		if (this.gameService.currentTile) {
			this.spaces[currIndex] = this.gameService.currentTile;
			this.spaces[currIndex].level = currLevel;
			this.clearValidity();
			this.tilePlaced.emit();
		} else if (this.gameService.turnStep === TurnStepType.move) {
			this.players[this.gameService.currPlayer].location = currIndex;
			this.moveAvatar();
			this.clearValidity();
			this.gameService.turnStep = (space.level === 0 ? TurnStepType.xpEnd : TurnStepType.drawCard);
		} else if (this.gameService.turnStep === TurnStepType.preCombat) {
			this.clearValidity();
			this.discard.unshift(space);
			this.spaces[currIndex] = new Tile(currLevel);
			for (let i = 0; i < this.players.length; i++) {
				if (this.players[i].campLocation === currIndex) {
					this.players[i].campLocation = 0;
					this.players[i].campStyle = this.campStarts[i];
				}
			}
			this.tileRemoved.emit();
		}
	}

	moveAvatar(): void {
		this.players[this.gameService.currPlayer].avatarStyle = this.avatarLocation(this.players[this.gameService.currPlayer]);
	}
	avatarLocation(player: Player) {
		const space = document.getElementById('s' + ('000' + player.location).slice(-3));
		const avatar = document.getElementsByClassName('avatar')[0];
		return {
			top:  (space.offsetTop  + Math.floor(Math.random() * (space.clientHeight - avatar.clientHeight))) + 'px',
			left: (space.offsetLeft + Math.floor(Math.random() * (space.clientWidth  - avatar.clientWidth ))) + 'px'
		};
	}

	moveCamp(): void {
		const currPlayer = this.players[this.gameService.currPlayer];
		currPlayer.campLocation = currPlayer.location;
		currPlayer.campStyle = this.campLocation(currPlayer);
	}
	campLocation(player: Player) {
		const space = document.getElementById('s' + ('000' + player.campLocation).slice(-3));
		const camp = document.getElementsByClassName('forwardCamp')[0];
		return {
			top:  (space.offsetTop  + (space.clientHeight - camp.clientHeight - 1)) + 'px',
			left: (space.offsetLeft + (space.clientWidth  - camp.clientWidth  - 1)) + 'px'
		};
	}
}
