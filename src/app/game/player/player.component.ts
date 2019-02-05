import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Player } from './player';
import { Card, GemType, ItemType } from '../cards/card';
import { blankCard } from '../cards/blankCard';

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
		this.player.wounds = [blankCard, blankCard, blankCard];
		this.player.items = [blankCard, blankCard, blankCard, blankCard];
	}

	gainWound(card: Card): void {
		for (let i = 0; i < this.player.wounds.length; i++) {
			if (this.player.wounds[i] === this.blank) {
				this.player.wounds[i] = card;
				break;
			}
		}
		if (this.player.wounds[2] !== this.blank) {
			console.log('You dead');
		}
	}

	healWound(): void {
		for (let i = this.player.wounds.length - 1; i >= 0; i--) {
			if (this.player.wounds[i] !== this.blank) {
				this.player.wounds[i] = this.blank;
				break;
			}
		}
	}

	gainItem(card: Card, slot: number): void {
		if (card.itemType === ItemType.none) return;
		this.player.items[slot] = card;
		this.calculateDisplayStats();
	}

	calculateDisplayStats(): void {
		let previousGem = 0;
		this.player.displayStats.Brains  = this.player.stats.Brains;
		this.player.displayStats.Brawn   = this.player.stats.Brawn;
		this.player.displayStats.Bravado = this.player.stats.Bravado;
		for (const item of this.player.items) {
			this.player.displayStats.Brains  += (item.itemStats ? item.itemStats.Brains  : 0) + (item.leftGem % GemType.Brains  ? 0 : previousGem);
			this.player.displayStats.Brawn   += (item.itemStats ? item.itemStats.Brawn   : 0) + (item.leftGem % GemType.Brawn   ? 0 : previousGem);
			this.player.displayStats.Bravado += (item.itemStats ? item.itemStats.Bravado : 0) + (item.leftGem % GemType.Bravado ? 0 : previousGem);
			previousGem = item.rightGem;
		}
	}
}
