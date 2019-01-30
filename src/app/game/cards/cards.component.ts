import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { GameService } from '../game.service';
import { Card        } from './card';

@Component({
	selector: 'hotm-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

	@Output() changeCard = new EventEmitter<Card>();
	decks: Card[][];
	currentCard: Card;

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
		this.currentCard = card;
		this.changeCard.emit(this.currentCard);
	}
}

// TODO: create directive to maintain aspect ratio of decks
