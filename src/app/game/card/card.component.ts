import { Component, Input, OnInit } from '@angular/core';
import { Card, CardType } from '../cards/card';

@Component({
	selector: 'hotm-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input() card: Card;
	cardType = CardType;

	constructor() {
	}

	ngOnInit() {
	}

}
