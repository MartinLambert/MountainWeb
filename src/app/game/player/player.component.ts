import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {GameService, TurnStepType} from '../game.service';
import { Player } from './player';
import { Card, CardType, GemType, ItemType } from '../cards/card';

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
	gemType  = GemType;
	itemType = ItemType;

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

	itemClickable(item: Card): boolean {
		if (this.playerNum !== this.gameService.currPlayer) return false;
		if (item.itemType % ItemType.permanent === 0) return false;
		if (item.itemUsed) return false;
		if (this.gameService.round <= 0) return false;

		let clickable = true;
		if (item.itemType % ItemType.tile       === 0 && this.gameService.turnStep !== TurnStepType.drawTile
																									&& this.gameService.turnStep !== TurnStepType.placeTile)  clickable = false;
		if (item.itemType % ItemType.move       === 0 && this.gameService.turnStep !== TurnStepType.move)       clickable = false;
		if (item.itemType % ItemType.draw       === 0 && this.gameService.turnStep !== TurnStepType.drawCard)   clickable = false;
		if (item.itemType % ItemType.preCombat  === 0 && this.gameService.turnStep !== TurnStepType.preCombat)  clickable = false;
		if (item.itemType % ItemType.postCombat === 0 && this.gameService.turnStep !== TurnStepType.postCombat) clickable = false;
		if (item.itemType % ItemType.xp         === 0 && this.gameService.turnStep !== TurnStepType.xpEnd)      clickable = false;
		if (item.itemPower === 1 && this.player.wounds[0].cardType === CardType.blank) clickable = false;
		if (item.itemPower === 5 && this.player.XP.length === 0) clickable = false;
		if (item.itemPower > 7 && item.itemPower < 12) clickable = true;
		if ([12, 13, 15, 17, 20, 21, 22, 23].includes(item.itemPower) && this.opposingCard !== CardType.enemy) clickable = false;
		if ([14, 16, 18, 24].includes(item.itemPower) && this.opposingCard !== CardType.trap) clickable = false;
		if (item.itemPower === 19 && (this.opposingCard !== CardType.enemy && this.opposingCard !== CardType.trap)) clickable = false;

		return clickable;
	}
	clickItem(slot: number): void {
		const item = this.player.items[slot];
		if (this.gameService.round < 0 && item.cardType !== CardType.blank) return;
		if (this.gameService.round < 0 || this.gainingItem) { // Clicking to add an item to inventory
			if (this.gameService.currentCard === null) return;
			if (item.cardType !== CardType.blank) {
				if (item.itemType % ItemType.permanent === 0 && item.itemPower === 4) this.player.movement -= item.itemValue;
				if (item.cardType !== CardType.starter)
					this.discardCard.emit(item);
			}
			this.player.items[slot] = this.gameService.currentCard;
			if (this.gameService.currentCard.itemType % ItemType.permanent === 0 && this.gameService.currentCard.itemPower === 4) this.player.movement += this.gameService.currentCard.itemValue;
			this.calculateDisplayStats();
			this.useCard.emit(this.gameService.currentCard);
		} else if (item.itemType % ItemType.permanent !== 0 && !item.itemUsed) { // Clicking to use an item in inventory
			let itemUsed = false;
			if (this.itemClickable(item)) {
				this.cardPower.emit({power: item.itemPower, value: item.itemValue});
				itemUsed = true;
			}
			if (itemUsed)
				if (item.itemType % ItemType.useOnce === 0) {
					this.discardCard.emit(item);
					this.player.items[slot] = new Card();
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
