import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Player      } from './player';
import { Card        } from '../cards/card';
import { blankCard   } from '../cards/blankCard';

@Component({
	selector: 'hotm-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

	@Input() player: Player;
	@Input() card: Card;
	blank = blankCard;

	constructor(private gameService: GameService) {
	}

	ngOnInit() {
	}

	gainWound(card: Card): void {
		for (let i = 0; i < this.player.wounds.length; i++)
			if (this.player.wounds[i] === this.blank) {
				this.player.wounds[i] = card;
				break;
			}
		if (this.player.wounds[2] !== this.blank)
			console.log('You dead');
	}

	healWound(): void {
		for (let i = this.player.wounds.length - 1; i >= 0; i--)
			if (this.player.wounds[i] !== this.blank) {
				this.player.wounds[i] = this.blank;
				break;
			}
	}
}
