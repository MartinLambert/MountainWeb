import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Card} from './card';
import { GameService    } from '../game.service';
import {CardType} from '../types';

@Component({
	selector: 'hotm-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input() card: Card;
	@Input() cardNum: number;
	@Input() selected: boolean;
	@Output() selectMe = new EventEmitter<number>();
	cardType = CardType;
	rotated = false;
	starterCard: Card = new Card();

	constructor(private gameService: GameService) {
	}

	ngOnInit() {
	}

	clickCard(): void {
		if (this.card.cardType === this.cardType.starter) {
			if (this.selected) this.rotated = !this.rotated;
			else this.selectMe.emit(this.cardNum);
			if (this.rotated) {
				this.starterCard.id       = this.card.id;
				this.starterCard.cardType = CardType.starter;
				this.starterCard.item     = this.card.item2;
				this.starterCard.item2    = this.card.item;
				this.gameService.currentCard = this.starterCard;
			} else
				this.gameService.currentCard = this.card;
		}
	}

}
