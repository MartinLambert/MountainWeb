import { Component, OnInit, ViewChild } from '@angular/core';
import { Tile           } from './game/board/tile';
import { Card           } from './game/cards/card';
import { Player         } from './game/player/player';
import { GameService    } from './game/game.service';
import { BoardComponent } from './game/board/board.component';

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

	constructor(public gameService: GameService) {}

	ngOnInit(): void {
		this.gameService.getCharacters().subscribe(players => this.characters = players);
		this.gameService.currentCard.subscribe(card => this.currentCard = card);
		this.gameService.currentTile.subscribe(tile => this.currentTile = tile);
	}

	drawTile(now: Boolean): void {
		this.board.drawTile();
	}
	validateTile(tile): void {
		this.board.validateSpaces(tile);
	}
}
