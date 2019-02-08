import {Component, OnInit, ViewChild} from '@angular/core';
import { Tile        } from './game/board/tile';
import { Card        } from './game/cards/card';
import { Player      } from './game/player/player';
import { GameService } from './game/game.service';
import {BoardComponent} from './game/board/board.component';

@Component({
	selector: 'hotm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@ViewChild(BoardComponent) board;
	currentTile: Tile;
	currentCard: Card;
	characters:  Player[];

	constructor(private gameService: GameService) {}

	ngOnInit(): void {
		this.gameService.getCharacters().subscribe(players => this.characters = players);
		this.gameService.currentCard.subscribe(card => this.currentCard = card);
		this.gameService.currentTile.subscribe(tile => this.currentTile = tile);
	}

	rotateTile(tile): void {
		const newDoors = {
			north: false,
			east:  false,
			south: false,
			west:  false
		};
		if (tile.doors.north) newDoors.east  = true;
		if (tile.doors.east)  newDoors.south = true;
		if (tile.doors.south) newDoors.west  = true;
		if (tile.doors.west)  newDoors.north = true;
		tile.doors = newDoors;
		tile.rotation += 0.25;
		this.board.validateSpaces(tile);
	}
}
