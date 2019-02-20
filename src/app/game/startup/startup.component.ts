import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {GameService} from '../game.service';
import {Card} from '../cards/card';
import {Player} from '../player/player';
import {blankCard} from '../cards/blankCard';

@Component({
	selector: 'hotm-startup',
	templateUrl: './startup.component.html',
	styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {

	@Input() cards: Card[];
	@Input() player: Player;
	@Output() drawCards = new EventEmitter<number>();
	@Output() endTurn = new EventEmitter();
	selectedCards = [false, false, true];
	blankCard = blankCard;

	constructor(public gameService: GameService) {
	}

	ngOnInit() {
		this.gameService.currentCard = this.cards[0];
	}

	draw3Cards(): void {
		this.drawCards.emit(3);
		this.selectedCards = [false, false, true];
		this.gameService.turnStep = 1;
	}

	selectCard(whichCard: number): void {
		this.selectedCards = [];
		this.cards.forEach(() => this.selectedCards.push(false));
		this.selectedCards[whichCard] = true;
	}

	useCard(card: Card): void {
		for (let i = 0; i < this.cards.length; i++) {
			if (this.selectedCards[i]) {
				this.cards.splice(i, 1);
				this.selectedCards.splice(i, 1);
				if (this.selectedCards.length) {
					this.gameService.currentCard = this.cards[0];
					this.selectedCards[0] = true;
				}
				break;
			}
		}
		if (!this.cards.length) this.gameService.turnStep = 2;
	}
}
