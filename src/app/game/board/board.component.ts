import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
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
	@Input() players: Player[];

	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.gameService.getBoard().subscribe(board => this.spaces = board);
		this.gameService.getTiles().subscribe(tiles => this.tiles = tiles);
		this.gameService.currentTile.subscribe(tile => this.currentTile = tile);
		this.tiles = this.shuffle(this.tiles);
		for (let i = 0; i < this.players.length; i++)
			this.players[i].location = this.startLocations[i];
	}

	ngAfterViewInit(): void {
		this.players.forEach(player => player.avatarStyle = this.avatarLocation(player));
	}

	private shuffle(pile: Tile[]): Tile[] {
		const newPile: Tile[] = [];
		while (pile.length)
			newPile.push(pile.splice(Math.floor(Math.random() * pile.length), 1)[0]);
		return newPile;
	}

	drawTile(tile: Tile = this.tiles[0]): void {
		this.gameService.newTile(tile);
		this.tiles.shift();
		this.discard.unshift(tile);
		this.validateSpaces(tile);
	}

	validateSpaces(tile: Tile): void {
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

	selectSpace(space: Tile, currIndex: number): void {
		if (this.currentTile && space.valid) {
			const currLevel = space.level;
			this.spaces[currIndex] = this.currentTile;
			this.spaces[currIndex].level = currLevel;
			this.gameService.newTile(null);
			for (let i = 17; i < this.spaces.length - 17; i++) {
				this.spaces[i].valid = false;
			}
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
