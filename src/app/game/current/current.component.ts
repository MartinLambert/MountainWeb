import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Player      } from '../player/player';
import { Card        } from '../cards/card';
import { Tile        } from '../board/tile';
import { GameService } from '../game.service';

@Component({
	selector: 'hotm-current',
	templateUrl: './current.component.html',
	styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

	@Input() player: Player;
	@Input() card: Card;
	@Input() tiles: Tile[];
	@Output() drawTile  = new EventEmitter<number>();
	@Output() checkTile = new EventEmitter<Tile>();
	@Output() drawCard  = new EventEmitter<number>();
	// selected = [true, false, false];

	constructor(public gameService: GameService) {
	}

	ngOnInit() {
	}

	draw3Tiles(): void {
		this.drawTile.emit(3);
		this.checkTile.emit(this.tiles[0]);
	}

	clickTile(tileNum: number): void {
		if (this.tiles[tileNum] === this.gameService.currentTile) {
			this.rotateTile(this.tiles[tileNum]);
		} else {
			// this.selected = [];
			// this.tiles.forEach(() => this.selected.push(false));
			// this.selected[tileNum] = true;
			this.gameService.currentTile = this.tiles[tileNum];
		}
		this.checkTile.emit(this.tiles[tileNum]);
	}

	rotateTile(tile): void {
		const newDoors = { north: false, east:  false, south: false, west:  false };
		if (tile.doors.north) newDoors.east  = true;
		if (tile.doors.east)  newDoors.south = true;
		if (tile.doors.south) newDoors.west  = true;
		if (tile.doors.west)  newDoors.north = true;
		tile.doors = newDoors;
		tile.rotation += 0.25;
		this.checkTile.emit(tile);
	}
}
