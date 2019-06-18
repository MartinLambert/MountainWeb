import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {GameService} from '../game.service';
import {Card, CardType} from '../card/card';
import {Player} from '../player/player';
import {TurnStepType} from '../card/item';

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
	selectedCards = [false, false, false];
	cardType = CardType;
	turnStepType = TurnStepType;

	constructor(public gameService: GameService) {
	}

	ngOnInit() {
	}

	draw3Cards(): void {
		this.drawCards.emit(3);
		this.selectedCards = [true, false, false];
		this.gameService.currentCard = this.cards[0];
		this.gameService.turnStep = TurnStepType.preCombat;
	}

	selectCard(whichCard: number): void {
		this.selectedCards = [];
		this.cards.forEach(() => this.selectedCards.push(false));
		this.selectedCards[whichCard] = true;
	}

	useCard(): void {
		for (let i = 0; i < this.cards.length; i++) {
			if (this.selectedCards[i]) {
				this.cards.splice(i, 1);
				this.selectedCards.splice(i, 1);
				if (this.selectedCards.length) {
					this.gameService.currentCard = this.cards[0];
					this.selectedCards[0] = true;
				} else this.gameService.currentCard = null;
				break;
			}
		}
		if (!this.cards.length) this.gameService.turnStep = TurnStepType.xpEnd;
	}
}
