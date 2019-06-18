import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Player } from '../player/player';
import { Card } from '../card/card';
import { Tile } from '../board/tile';
import { GameService} from '../game.service';
import {TurnStepType} from '../card/item';

@Component({
	selector: 'hotm-current',
	templateUrl: './current.component.html',
	styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

	@Input() player: Player;
	@Input() card: Card;
	@Input() tiles: Tile[];
	@Input() tilesToDraw: number;
	@Input() cardsToDraw: number;
	@Input() needToRoll: boolean;
	@Input() needToHeal: boolean;
	@Output() drawTile  = new EventEmitter<number>();
	@Output() checkTile = new EventEmitter<Tile>();
	@Output() drawCard  = new EventEmitter<number>();
	@Output() useXP     = new EventEmitter();
	@Output() rolledDie = new EventEmitter<number>();
	@Output() healing   = new EventEmitter();
	@Output() endTurn   = new EventEmitter();
	dieValue: number;
	turnStepType = TurnStepType;

	constructor(public gameService: GameService) {
	}

	ngOnInit() {
	}

	draw3Tiles(): void {
		this.player.location = this.player.startLocation;
		this.drawTile.emit(3);
	}

	clickTile(tileNum: number): void {
		if (this.tiles[tileNum] === this.gameService.currentTile) {
			this.rotateTile(this.tiles[tileNum]);
		} else {
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

	dieRoll(): number {
		return Math.floor(Math.random() * 6) + 1;
	}
}
