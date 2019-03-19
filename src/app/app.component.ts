import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

import { Tile            } from './game/board/tile';
import { Card            } from './game/cards/card';
import { Player          } from './game/player/player';
import { GameService     } from './game/game.service';
import { BoardComponent  } from './game/board/board.component';
import { CardsComponent  } from './game/cards/cards.component';
import { PlayerComponent } from './game/player/player.component';

@Component({
	selector: 'hotm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@ViewChild(BoardComponent) board;
	@ViewChild(CardsComponent) cards;
	@ViewChildren(PlayerComponent) players: QueryList<PlayerComponent>;
	currentTiles: Tile[] = [];
	currentCards: Card[] = [];
	activeCard:   Card;
	characters:   Player[];
	usingXP = false;

	constructor(public gameService: GameService) {}

	ngOnInit(): void {
		this.gameService.getCharacters().subscribe(players => this.characters = players);
	}

	drawTile(numTiles: number): void {
		for (let i = 0; i < numTiles; i++) {
			this.board.drawTile();
			this.currentTiles.push(this.gameService.currentTile);
		}
		if (numTiles === 1) this.validateTile(this.gameService.currentTile);
	}
	validateTile(tile): void {
		this.board.validateTilePlacement(tile);
		this.gameService.currentTile = tile;
	}
	clearBoard(): void {
		this.board.clearValidity();
	}

	drawCard(numCards: number): void {
		for (let i = 0; i < numCards; i++) {
			this.cards.drawCard(this.board.spaces[this.characters[this.gameService.currPlayer].location].level);
			this.currentCards.push(this.gameService.currentCard);
		}
		if (this.gameService.round > 0)
			this.activeCard = this.currentCards[0];
	}
	useCard(card: Card): void {
		const index = this.currentCards.indexOf(card);
		if (index >= 0)
			this.currentCards.splice(index, 1);
		if (this.currentCards.length)
			this.activeCard = this.currentCards[0];
		else {
			this.activeCard = null;
			this.gameService.turnStep = 3;
		}
	}
	discardCard(card: Card): void {
		this.cards.discardCard(card);
	}

	tilePlaced(): void {
		if (!this.gameService.currentTile) return;
		const index = this.currentTiles.indexOf(this.gameService.currentTile);
		if (index >= 0) {
			this.currentTiles.splice(index, 1);
			this.gameService.currentTile = (this.currentTiles.length ? this.currentTiles[0] : null);
			if (this.currentTiles.length === 0) {
				this.gameService.currentTile = null;
				if (this.gameService.round === 0)
					this.endTurn(); // Round 0 is just setting up the board
				else {
					this.gameService.turnStep = 1;
					this.board.validatePlayerMovement(this.characters[this.gameService.currPlayer].movement, this.characters[this.gameService.currPlayer].location);
				}
			} else {
				this.validateTile(this.currentTiles[0]);
			}
		}
	}

	usedXP(): void {
		this.players.find(el => el.playerNum === this.gameService.currPlayer).calculateDisplayStats();
		this.usingXP = false;
	}

	endTurn(): void {
		this.usingXP = false;
		this.gameService.turnStep = 0;
		this.gameService.currPlayer++;
	}
}
