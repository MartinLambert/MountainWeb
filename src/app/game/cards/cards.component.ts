import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Card        } from './card';

@Component({
	selector: 'hotm-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, AfterViewInit {

	decks: Card[][];
	discards: Card[][] = [new Array<Card>(), new Array<Card>(), new Array<Card>(), new Array<Card>()];

	constructor(public gameService: GameService) {
	}

	ngOnInit() {
		this.gameService.getCards().subscribe(cards => this.decks = cards);
		for (let i = 0; i < this.decks.length; i++)
			this.decks[i] = this.shuffle(this.decks[i]);
	}

	ngAfterViewInit(): void {
		const cardRef = document.getElementById('cardRef');
		const discardPiles = document.getElementsByClassName('discard');
		for (let i = 0; i < discardPiles.length; i++) {
			// @ts-ignore
			discardPiles[i].style.width = cardRef.clientWidth + 'px';
			// @ts-ignore
			discardPiles[i].style.height = cardRef.clientHeight + 'px';
		}
	}

	private shuffle(deck: Card[]): Card[] {
		const newDeck: Card[] = [];
		while (deck.length)
			newDeck.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
		return newDeck;
	}

	drawCard(deckNum: number): void {
		if ((deckNum < 0 || deckNum > 4) || !this.decks[deckNum] || !this.decks[deckNum].length) return;
		const card = this.decks[deckNum][0];
		this.gameService.currentCard = card;
		this.decks[deckNum].shift();
		// this.discards[deckNum].unshift(card);
	}

	discardCard(card: Card): void {
		this.discards[card.level].push(card);
	}
}
