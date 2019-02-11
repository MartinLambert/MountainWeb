import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Tile        } from './tile';

@Component({
	selector: 'hotm-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	spaces:      Tile[];
	tiles:       Tile[];
	currentTile: Tile;
	discard:     Tile[] = [];

	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.gameService.getBoard().subscribe(board => this.spaces = board);
		this.gameService.getTiles().subscribe(tiles => this.tiles = tiles);
		this.gameService.currentTile.subscribe(tile => this.currentTile = tile);
		this.tiles = this.shuffle(this.tiles);
	}

	private shuffle(pile: Tile[]): Tile[] {
		const newPile: Tile[] = [];
		while (pile.length)
			newPile.push(pile.splice(Math.floor(Math.random() * pile.length), 1)[0]);
		return newPile;
	}

	drawTile(tile: Tile): void {
		if (!tile) return;
		this.gameService.newTile(tile);
		// this.currentTile = tile;
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
			this.spaces[currIndex] = this.currentTile;
			this.gameService.newTile(null);
			for (let i = 17; i < this.spaces.length - 17; i++) {
				this.spaces[i].valid = false;
			}
		}
	}
}
