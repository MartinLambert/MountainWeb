import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Card        } from './card';

@Component({
	selector: 'hotm-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

	decks: Card[][];
	discards: Card[][] = [new Array<Card>(), new Array<Card>(), new Array<Card>(), new Array<Card>()];

	constructor(private gameService: GameService) {
	}

	ngOnInit() {
		this.gameService.getCards().subscribe(cards => this.decks = cards);
		for (let i = 0; i < this.decks.length; i++)
			this.decks[i] = this.shuffle(this.decks[i]);
	}

	private shuffle(deck: Card[]): Card[] {
		const newDeck: Card[] = [];
		while (deck.length)
			newDeck.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
		return newDeck;
	}

	drawCard(card: Card): void {
		if (!card) return;
		this.gameService.drawCard(card);
		this.decks[card.level].shift();
		this.discards[card.level].unshift(card);
	}
}
