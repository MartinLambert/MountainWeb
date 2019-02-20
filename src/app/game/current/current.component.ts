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

	constructor(public gameService: GameService) {
	}

	ngOnInit() {
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
