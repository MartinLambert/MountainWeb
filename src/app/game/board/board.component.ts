import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from '../game.service';
import { Tile        } from './tile';
import { Player      } from '../player/player';

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
	startLocations = [238, 17, 225, 30];
	tileStyle = {width: '0', height: '0'};
	@Input() players: Player[];
	@Output() tilePlaced = new EventEmitter();

	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.gameService.getBoard().subscribe(board => this.spaces = board);
		this.gameService.getTiles().subscribe(tiles => this.tiles = tiles);
		this.tiles = this.shuffle(this.tiles);
		for (let i = 0; i < this.players.length; i++)
			this.players[i].location = this.startLocations[i];
	}

	ngAfterViewInit(): void {
		this.players.forEach(player => player.avatarStyle = this.avatarLocation(player));
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
		// this.discard.unshift(tile);
	}

	validateTilePlacement(tile: Tile): void {
		if (!tile.visible) return;
		for (let i = 17; i < this.spaces.length - 17; i++) {
			this.spaces[i].valid = false;
			if (this.spaces[i].visible || this.spaces[i].locked) continue;
			let hasDoor = false;
			if (tile.doors.north) {
				if (this.spaces[i - 16].doors.south) hasDoor = true;
				else if (this.spaces[i - 16].visible) continue;
			} else if (this.spaces[i - 16].doors.south) continue;
			if (tile.doors.east) {
				if (this.spaces[i + 1].doors.west) hasDoor = true;
				else if (this.spaces[i + 1].visible) continue;
			} else if (this.spaces[i + 1].doors.west) continue;
			if (tile.doors.south) {
				if (this.spaces[i + 16].doors.north) hasDoor = true;
				else if (this.spaces[i + 16].visible) continue;
			} else if (this.spaces[i + 16].doors.north) continue;
			if (tile.doors.west) {
				if (this.spaces[i - 1].doors.east) hasDoor = true;
				else if (this.spaces[i - 1].visible) continue;
			} else if (this.spaces[i - 1].doors.east) continue;
			this.spaces[i].valid = hasDoor;
		}
	}

	validatePlayerMovement(distance: number, location: number): void {
		if (location < 17 || location > 238) return;
		if (distance && this.gameService.turnStep === 1 && this.spaces[location].visible) {
			this.spaces[location - 16].valid = this.spaces[location].doors.north && this.spaces[location - 16].doors.south;
			this.spaces[location +  1].valid = this.spaces[location].doors.east  && this.spaces[location +  1].doors.west;
			this.spaces[location + 16].valid = this.spaces[location].doors.south && this.spaces[location + 16].doors.north;
			this.spaces[location -  1].valid = this.spaces[location].doors.west  && this.spaces[location -  1].doors.east;
			this.validatePlayerMovement(distance - 1, location - 16);
			this.validatePlayerMovement(distance - 1, location +  1);
			this.validatePlayerMovement(distance - 1, location + 16);
			this.validatePlayerMovement(distance - 1, location -  1);
		}
		this.spaces[this.players[this.gameService.currPlayer].location].valid = false;
	}

	clearValidity(): void {
		for (let i = 17; i < this.spaces.length - 17; i++)
			this.spaces[i].valid = false;
	}

	selectSpace(space: Tile, currIndex: number): void {
		if (this.gameService.turnStep === 0 && this.gameService.currentTile && space.valid) {
			const currLevel = space.level;
			this.spaces[currIndex] = this.gameService.currentTile;
			this.spaces[currIndex].level = currLevel;
			this.clearValidity();
			this.tilePlaced.emit();
		} else if (this.gameService.turnStep === 1 && space.valid) {
			this.players[this.gameService.currPlayer].location = currIndex;
			this.players[this.gameService.currPlayer].avatarStyle = this.avatarLocation(this.players[this.gameService.currPlayer]);
			this.clearValidity();
			this.gameService.turnStep = 2;
		}
	}

	avatarLocation(player: Player) {
		const space = document.getElementById('s' + ('000' + player.location).slice(-3));
		const avatar = document.getElementsByClassName('avatar')[0];
		return {
			top:  (space.offsetTop  + Math.floor(Math.random() * (space.clientHeight - avatar.clientHeight))) + 'px',
			left: (space.offsetLeft + Math.floor(Math.random() * (space.clientWidth  - avatar.clientWidth ))) + 'px'
		};
	}
}
