import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Card, CardType, GemType, ItemType} from '../cards/card';
import {GameService} from '../game.service';

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
	itemType = ItemType;
	gemType = GemType;
	rotated = false;
	starterCard: Card = new Card();

	constructor(private gameService: GameService) {
	}

	ngOnInit() {
		this.starterCard = {
			id: 0,
			level: 0,
			cardType:  CardType.starter,
			cardName:  '',
			cardImg:   '',
			cardText:  '',
			cardStats: null,
			cardPower: 0,
			itemType:  ItemType.none,
			itemName:  '',
			itemImg:   '',
			itemText:  '',
			itemStats: null,
			itemPower: 0,
			itemValue: 0,
			itemUsed:  false,
			leftGem:   GemType.none,
			rightGem:  0
		};
	}

	clickCard(): void {
		if (this.card.cardType === this.cardType.starter)
			if (this.selected) this.rotated = !this.rotated;
			else this.selectMe.emit(this.cardNum);
			if (this.rotated) {
				this.starterCard.id        = this.card.id;
				this.starterCard.itemType  = ItemType.permanent;
				this.starterCard.itemName  = this.card.cardName;
				this.starterCard.itemImg   = this.card.cardImg;
				this.starterCard.itemText  = '';
				this.starterCard.itemStats = this.card.cardStats;
				this.starterCard.itemPower = this.card.cardPower;
				this.starterCard.itemValue = 0;
				this.starterCard.leftGem   = GemType.none;
				this.starterCard.rightGem  = 0;
			} else {
				this.starterCard.id        = this.card.id;
				this.starterCard.itemType  = this.card.itemType;
				this.starterCard.itemName  = this.card.itemName;
				this.starterCard.itemImg   = this.card.itemImg;
				this.starterCard.itemText  = this.card.itemText;
				this.starterCard.itemStats = this.card.itemStats;
				this.starterCard.itemPower = this.card.itemPower;
				this.starterCard.itemValue = this.card.itemValue;
				this.starterCard.leftGem   = this.card.leftGem;
				this.starterCard.rightGem  = this.card.rightGem;
			}
			this.gameService.currentCard = this.starterCard;
	}
}
