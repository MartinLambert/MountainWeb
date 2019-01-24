import { Component, OnInit } from '@angular/core';
import { GameService       } from '../game.service';
import { Card              } from './card';

@Component({
	selector: 'hotm-cards',
	templateUrl: './cards.component.html',
	styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

	decks: Card[][];

	constructor(private gameService: GameService) {
	}

	ngOnInit() {
		this.gameService.getCards().subscribe(cards => this.decks = cards);
	}

}
