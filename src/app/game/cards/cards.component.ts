import { Component, OnInit } from '@angular/core';

import { GameService } from '../game.service';
import { Card        } from '../card/card';

@Component({
	selector: 'hotm-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

	decks: Card[][];
	discards: Card[][] = [new Array<Card>(), new Array<Card>(), new Array<Card>(), new Array<Card>(), new Array<Card>()];

	constructor(public gameService: GameService) {
	}

	ngOnInit() {
		this.decks = this.gameService.getCards();
		for (let i = 0; i < this.decks.length; i++)
			this.decks[i] = this.gameService.shuffle(this.decks[i]);
	}

	drawCard(deckNum: number): void {
		if (deckNum < 0) deckNum = 0; // if you're currently off the board then you're drawing Starter cards
		if (deckNum > 4 || !this.decks[deckNum] || !this.decks[deckNum].length) return;
		this.gameService.currentCard = this.decks[deckNum][0];
		if (deckNum < 4) // only ever use the top Heart card
			this.decks[deckNum].shift();
	}

	discardCard(card: Card): void {
		this.discards[card.level].unshift(card);
	}
}
