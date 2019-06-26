import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {GameService} from '../game.service';
import {Player} from './player';
import {Card} from '../card/card';
import {Item} from '../card/item';
import {CardType, GemType, ItemType} from '../types';

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
	@Input() opposingCard: string;
	@Output() discardCard = new EventEmitter<Card>();
	@Output() cardPower = new EventEmitter<{power: number, value: number}>();
	@Output() wounded = new EventEmitter();
	@Output() useCard = new EventEmitter<Card>();
	cardType = CardType;

	constructor(private gameService: GameService) {
	}

	ngOnInit() {
		if (!this.player.wounds.length)
			this.player.wounds = [new Card(), new Card(), new Card()];
		if (!this.player.items.length)
			this.player.items = [new Card(), new Card(), new Card(), new Card()];

		if (this.player.playerPower === 1 && this.player.items.length < 5) this.player.items.push(new Card()); // playerPower 1 grants an extra item slot
		if (this.player.playerPower === 2 && this.player.wounds.length < 4) this.player.wounds.push(new Card()); // playerPower 2 grants an extra wound slot
	}

	gainWound(): void {
		const card = this.gameService.currentCard;
		let numWounds = 0;
		for (let i = 0; i < this.player.wounds.length; i++) {
			if (this.player.wounds[i].cardType === CardType.blank) {
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
			if (this.player.wounds[i].cardType !== CardType.blank) {
				this.discardCard.emit(this.player.wounds[i]);
				this.player.wounds[i].cardType = CardType.blank;
				break;
			}
		}
	}

	itemClickable(item: Item): boolean {
		if (this.playerNum !== this.gameService.currPlayer) return false;
		if (item.type === ItemType.permanent) return false;
		if (item.disabled) return false;
		if (this.gameService.round <= 0) return false;

		let clickable = true;
		if (!item.usable.includes(this.gameService.turnStep)) clickable = false;
		if (item.power === 1 && this.player.wounds[0].cardType === CardType.blank) clickable = false;
		if (item.power === 5 && this.player.XP.length === 0) clickable = false;
		if ([13, 15, 17, 20, 21, 22].includes(item.power) && this.opposingCard !== CardType.enemy) clickable = false;
		if ([14, 16, 18].includes(item.power) && this.opposingCard !== CardType.trap) clickable = false;

		return clickable;
	}
	clickItem(slot: number): void {
		const card = this.player.items[slot];
		if (this.gameService.round < 0 && card.cardType !== CardType.blank) return;
		const item = card.item;
		if (this.gameService.round < 0 || this.gainingItem) { // Clicking to add an item to inventory
			if (this.gameService.currentCard === null) return;
			if (card.cardType !== CardType.blank) {
				if (item.type === ItemType.permanent && item.power === 4) this.player.movement -= item.value;
				if (card.cardType !== CardType.starter)
					this.discardCard.emit(card);
			}
			this.player.items[slot] = this.gameService.currentCard;
			if (this.gameService.currentCard.item.type % ItemType.permanent === 0 && this.gameService.currentCard.item.power === 4) this.player.movement += this.gameService.currentCard.item.value;
			this.calculateDisplayStats();
			this.useCard.emit(this.gameService.currentCard);
		} else if (item.type !== ItemType.permanent && !item.disabled) { // Clicking to use an item in inventory
			let itemUsed = false;
			if (this.itemClickable(item)) {
				this.cardPower.emit({power: item.power, value: item.value});
				itemUsed = true;
			}
			if (itemUsed)
				if ([ItemType.useOnce, ItemType.useNow, ItemType.useNext].includes(item.type)) {
					item.disabled = true;
				} else {
					// TODO: ItemType.disAny
				}
		}
	}

	gainXP(): void {
		this.player.XP.push(this.gameService.currentCard);
	}

	expireThisTurnItems(): void {
		for (const card of this.player.items)
			if (card.item && card.item.type === ItemType.useNow)
				card.item.disabled = true;
	}
	expireNextTurnItems(): void {
		for (const card of this.player.items)
			if (card.item && card.item.type === ItemType.useNext)
				card.item.disabled = true;
	}

	calculateDisplayStats(): void {
		let previousGem = 0;
		let brains  = this.player.nativeStats.Brains;
		let brawn   = this.player.nativeStats.Brawn;
		let bravado = this.player.nativeStats.Bravado;
		for (const card of this.player.items) {
			if (card.cardType === CardType.blank || !card.item) {
				previousGem = 0;
				continue;
			}
			brains  += (card.item.stats ? card.item.stats.Brains  : 0) + (card.item.leftGem.includes(GemType.Brains)  ? previousGem : 0);
			brawn   += (card.item.stats ? card.item.stats.Brawn   : 0) + (card.item.leftGem.includes(GemType.Brawn)   ? previousGem : 0);
			bravado += (card.item.stats ? card.item.stats.Bravado : 0) + (card.item.leftGem.includes(GemType.Bravado) ? previousGem : 0);
			previousGem = card.item.rightGem;
		}
		this.player.calculatedStats.Brains  = brains;
		this.player.calculatedStats.Brawn   = brawn;
		this.player.calculatedStats.Bravado = bravado;
	}
}
