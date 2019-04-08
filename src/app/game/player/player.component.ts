import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {GameService} from '../game.service';
import {Player} from './player';
import {Card, GemType, ItemType} from '../cards/card';
import {blankCard} from '../cards/blankCard';

@Component({
	selector: 'hotm-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

	@Input() player: Player;
	@Input() playerNum: number;
	@Input() zoomed: boolean;
	@Input() gainingItem: boolean;
	@Output() discardCard = new EventEmitter<Card>();
	@Output() cardPower = new EventEmitter<{power: number, value: number}>();
	@Output() wounded = new EventEmitter();
	@Output() useCard = new EventEmitter();
	blank = blankCard;
	gemType = GemType;
	itemType = ItemType;

	constructor(private gameService: GameService) {
	}

	ngOnInit() {
		if (!this.player.wounds.length)
			this.player.wounds = [blankCard, blankCard, blankCard];
		if (!this.player.items.length)
			this.player.items = [blankCard, blankCard, blankCard, blankCard];

		if (this.player.playerPower === 1 && this.player.items.length < 5) this.player.items.push(blankCard); // playerPower 1 grants an extra item slot
		if (this.player.playerPower === 2 && this.player.wounds.length < 4) this.player.wounds.push(blankCard); // playerPower 2 grants an extra wound slot
	}

	gainWound(): void {
		const card = this.gameService.currentCard;
		let numWounds = 0;
		for (let i = 0; i < this.player.wounds.length; i++) {
			if (this.player.wounds[i] === this.blank) {
				this.player.wounds[i] = card;
				break;
			} else numWounds++;
		}
		if (numWounds === this.player.wounds.length - 1)
			this.wounded.emit();
		else
			this.useCard.emit();
	}

	healWound(): void {
		for (let i = this.player.wounds.length - 1; i >= 0; i--) {
			if (this.player.wounds[i] !== this.blank) {
				this.discardCard.emit(this.player.wounds[i]);
				this.player.wounds[i] = this.blank;
				break;
			}
		}
	}

	clickItem(slot: number): void {
		const item = this.player.items[slot];
		let itemUsed = false;
		if (this.gameService.round < 0 && item !== this.blank) return;
		if (this.gameService.round < 0 || this.gainingItem) {
			if (item !== this.blank) this.discardCard.emit(item);
			this.player.items[slot] = this.gameService.currentCard;
			this.calculateDisplayStats();
			this.useCard.emit();
		} else if (item.itemType % ItemType.permanent !== 0 && !item.itemUsed) {
			if ((item.itemType % ItemType.anytime === 0 && this.player.wounds.length) || (item.itemType % ItemType.tile === 0 && this.gameService.turnStep === 0) || (item.itemType % ItemType.move === 0 && this.gameService.turnStep === 1) || (item.itemType % ItemType.draw === 0 && this.gameService.turnStep === 2) || (item.itemType % ItemType.beforeFight === 0 && this.gameService.turnStep === 3) || (item.itemType % ItemType.afterFight === 0 && this.gameService.turnStep === 4) || (item.itemType % ItemType.xp === 0 && this.gameService.turnStep === 5)) {
				this.cardPower.emit({power: item.itemPower, value: 1});
				itemUsed = true;
			}
			if (itemUsed)
				if (item.itemType % ItemType.useOnce === 0) {
					this.discardCard.emit(item);
					this.player.items[slot] = this.blank;
					this.calculateDisplayStats();
					this.useCard.emit();
				} else
					item.itemUsed = true;
		}
	}

	gainXP(): void {
		this.player.XP.push(this.gameService.currentCard);
	}

	expireThisTurnItems(): void {
		for (const item of this.player.items)
			if (item.itemType === ItemType.useNow)
				item.itemUsed = true;
	}
	expireNextTurnItems(): void {
		for (const item of this.player.items)
			if (item.itemType === ItemType.useNext)
				item.itemUsed = true;
	}

	calculateDisplayStats(): void {
		let previousGem = 0;
		let brains  = this.player.nativeStats.Brains;
		let brawn   = this.player.nativeStats.Brawn;
		let bravado = this.player.nativeStats.Bravado;
		for (const item of this.player.items) {
			brains  += (item.itemStats ? item.itemStats.Brains  : 0) + (item.leftGem % GemType.Brains  ? 0 : previousGem);
			brawn   += (item.itemStats ? item.itemStats.Brawn   : 0) + (item.leftGem % GemType.Brawn   ? 0 : previousGem);
			bravado += (item.itemStats ? item.itemStats.Bravado : 0) + (item.leftGem % GemType.Bravado ? 0 : previousGem);
			previousGem = item.rightGem;
		}
		this.player.displayStats.Brains  = (brains  === this.player.nativeStats.Brains  ? '' : '<i>') + (brains  > 0 ? brains  : 0)  + (brains  === this.player.nativeStats.Brains  ? '' : '</i>');
		this.player.displayStats.Brawn   = (brawn   === this.player.nativeStats.Brawn   ? '' : '<i>') + (brawn   > 0 ? brawn   : 0)  + (brawn   === this.player.nativeStats.Brawn   ? '' : '</i>');
		this.player.displayStats.Bravado = (bravado === this.player.nativeStats.Bravado ? '' : '<i>') + (bravado > 0 ? bravado : 0)  + (bravado === this.player.nativeStats.Bravado ? '' : '</i>');
		this.player.calculatedStats.Brains  = brains;
		this.player.calculatedStats.Brawn   = brawn;
		this.player.calculatedStats.Bravado = bravado;
	}
}
