import { Component, Input, OnInit } from '@angular/core';
import { Card, CardType, ItemType, GemType } from '../cards/card';

@Component({
	selector: 'hotm-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input() card: Card;
	cardType = CardType;
	itemType = ItemType;
	gemType = GemType;

	constructor() {
	}

	ngOnInit() {
	}

}
