import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
	@Input() playerNum: number;
	@Output() useCard = new EventEmitter<Card>();
	@Output() endTurn = new EventEmitter();
	blank = blankCard;

	constructor(private gameService: GameService) {
	}

	ngOnInit() {
		this.player.wounds = [blankCard, blankCard, blankCard];
		this.player.items = [blankCard, blankCard, blankCard, blankCard];

		if (this.player.playerPower === 1) this.player.items.push(blankCard); // playerPower 1 grants an extra item slot
		if (this.player.playerPower === 2) this.player.wounds.push(blankCard); // playerPower 2 grants an extra wound slot
	}

	gainWound(card: Card): void {
		if (!card || card === this.blank || this.playerNum !== this.gameService.currPlayer) return;
		let numWounds = 0;
		for (let i = 0; i < this.player.wounds.length; i++) {
			if (this.player.wounds[i] === this.blank) {
				this.player.wounds[i] = card;
				this.useCard.emit(card);
				break;
			} else numWounds++;
		}
		if (numWounds === this.player.wounds.length - 1) {
			console.log(`${this.player.name} is dead`);
		}
		this.endTurn.emit();
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
		if (!card || card.itemType === ItemType.none || this.playerNum !== this.gameService.currPlayer) return;
		this.player.items[slot] = card;
		this.useCard.emit(card);
		this.calculateDisplayStats();
		this.endTurn.emit();
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
		this.player.displayStats.Brains  = (brains  === this.player.stats.Brains  ? '' : '<i>') + (brains  > 0 ? brains  : 0)  + (brains  === this.player.stats.Brains  ? '' : '</i>');
		this.player.displayStats.Brawn   = (brawn   === this.player.stats.Brawn   ? '' : '<i>') + (brawn   > 0 ? brawn   : 0)  + (brawn   === this.player.stats.Brawn   ? '' : '</i>');
		this.player.displayStats.Bravado = (bravado === this.player.stats.Bravado ? '' : '<i>') + (bravado > 0 ? bravado : 0)  + (bravado === this.player.stats.Bravado ? '' : '</i>');
	}
}
