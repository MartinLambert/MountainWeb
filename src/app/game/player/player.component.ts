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

		if (this.player.playerPower === 1) this.player.items.push(blankCard); // playerPower 1 grants an extra item slot
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
		let brains  = this.player.stats.Brains;
		let brawn   = this.player.stats.Brawn;
		let bravado = this.player.stats.Bravado;
		for (const item of this.player.items) {
			brains  += (item.itemStats ? item.itemStats.Brains  : 0) + (item.leftGem % GemType.Brains  ? 0 : previousGem);
			brawn   += (item.itemStats ? item.itemStats.Brawn   : 0) + (item.leftGem % GemType.Brawn   ? 0 : previousGem);
			bravado += (item.itemStats ? item.itemStats.Bravado : 0) + (item.leftGem % GemType.Bravado ? 0 : previousGem);
			previousGem = item.rightGem;
		}
		// this.player.displayStats.Brains  = (this.player.stats.Brains  + brains  < 0) ? '0' : this.player.stats.Brains  + (brains  === 0 ? '' : (brains  > 0 ? ' + ' : ' − ') + Math.abs(brains));
		// this.player.displayStats.Brawn   = (this.player.stats.Brawn   + brawn   < 0) ? '0' : this.player.stats.Brawn   + (brawn   === 0 ? '' : (brawn   > 0 ? ' + ' : ' − ') + Math.abs(brawn));
		// this.player.displayStats.Bravado = (this.player.stats.Bravado + bravado < 0) ? '0' : this.player.stats.Bravado + (bravado === 0 ? '' : (bravado > 0 ? ' + ' : ' − ') + Math.abs(bravado));
		this.player.displayStats.Brains  = (brains  === this.player.stats.Brains  ? '' : '<i>') + (brains  > 0 ? brains  : 0)  + (brains  === this.player.stats.Brains  ? '' : '</i>');
		this.player.displayStats.Brawn   = (brawn   === this.player.stats.Brawn   ? '' : '<i>') + (brawn   > 0 ? brawn   : 0)  + (brawn   === this.player.stats.Brawn   ? '' : '</i>');
		this.player.displayStats.Bravado = (bravado === this.player.stats.Bravado ? '' : '<i>') + (bravado > 0 ? bravado : 0)  + (bravado === this.player.stats.Bravado ? '' : '</i>');
	}
}
