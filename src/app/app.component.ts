import { Component, OnInit } from '@angular/core';
import { Tile        } from './game/board/tile';
import { Card        } from './game/cards/card';
import { Player      } from './game/player/player';
import { GameService } from './game/game.service';

@Component({
	selector: 'hotm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	currentTile: Tile;
	currentCard: Card;
	characters:  Player[];

	constructor(private gameService: GameService) {}

	ngOnInit(): void {
		this.gameService.getCharacters().subscribe(players => this.characters = players);
	}

	newCard(card: Card): void {
		this.currentCard = card;
	}
}
