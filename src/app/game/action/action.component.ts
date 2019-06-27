import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {Player} from '../player/player';
import {PlayerComponent} from '../player/player.component';
import {Card} from '../card/card';
import {GameService} from '../game.service';
import {CardType, GemType, ItemType, Stats, TurnStepType} from '../types';

@Component({
	selector: 'hotm-action',
	templateUrl: './action.component.html',
	styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

	@Input() card: Card;
	@Input() player: Player;
	@Input() playerNum: number;
	@Input() neighborStats: Stats;
	@Output() useCard = new EventEmitter<Card>();
	@Output() discardCard = new EventEmitter<Card>();
	@Output() useItemPower = new EventEmitter<{power: number, value: number}>();
	@Output() doEvent = new EventEmitter();
	@Output() wounded = new EventEmitter();
	@ViewChild(PlayerComponent, { static: true }) playerComp;
	cardType = CardType;
	cardStatsString: string;
	cardBonusString = '​Row Bonus: ';
	rowBonusModifier = 0;
	cardTotal = 0;
	playerStatsString = 'Your ';
	playerRollString = 'Your Roll: ';
	playerRoll: number;
	playerRollModifier = 0;
	playerTotal = 0;
	newItem = false;
	playerWin = false;
	modifiers = {
		vsEnemies: 0,
		vsTraps:   0,
		allRolls:  0,
		enBrains:  0,
		enBrawn:   0,
		enBravado: 0,
		enBonus:   0,
		trapBonus: 0
	};

	constructor(public gameService: GameService) {
	}

	ngOnInit() {
		this.calcStats();
	}

	calcStats(): void {
		if (this.card.cardType === CardType.event) return;
		let previousGem = 0;
		this.player.items.forEach(thisCard => {
			if (thisCard.item.leftGem.includes(GemType.vsEnemies)) this.modifiers.vsEnemies += previousGem;
			if (thisCard.item.leftGem.includes(GemType.vsTraps))   this.modifiers.vsTraps   += previousGem;
			if (thisCard.item.leftGem.includes(GemType.allRolls))  this.modifiers.allRolls  += previousGem;
			if (thisCard.item.leftGem.includes(GemType.enBrains))  this.modifiers.enBrains  += previousGem;
			if (thisCard.item.leftGem.includes(GemType.enBrawn))   this.modifiers.enBrawn   += previousGem;
			if (thisCard.item.leftGem.includes(GemType.enBravado)) this.modifiers.enBravado += previousGem;
			if (thisCard.item.leftGem.includes(GemType.enBonus))   this.modifiers.enBonus   += previousGem;
			if (thisCard.item.leftGem.includes(GemType.trapBonus)) this.modifiers.trapBonus += previousGem;
			// if (thisCard.item.type === ItemType.permanent && thisCard.item.power === 17) this.modifiers.vsEnemies += thisCard.item.value; There aren't currently any cards with these powers
			// if (thisCard.item.type === ItemType.permanent && thisCard.item.power === 18) this.modifiers.vsTraps   += thisCard.item.value;
			if (thisCard.item.type === ItemType.permanent && thisCard.item.power === 19) this.modifiers.allRolls += thisCard.item.value;
			// if (thisCard.item.type === ItemType.permanent && thisCard.item.power === 20) this.modifiers.enBrains  += thisCard.item.value;
			// if (thisCard.item.type === ItemType.permanent && thisCard.item.power === 21) this.modifiers.enBrawn   += thisCard.item.value;
			// if (thisCard.item.type === ItemType.permanent && thisCard.item.power === 22) this.modifiers.enBravado += thisCard.item.value;
			previousGem = thisCard.item.rightGem;
		});
		this.playerRollModifier += this.modifiers.allRolls;
		if (this.card.cardType === CardType.enemy) {
			this.cardStatsString = 'Enemy’s ';
			this.rowBonusModifier  += this.modifiers.enBonus;
			this.playerRollModifier += this.modifiers.vsEnemies;
		} else if (this.card.cardType === CardType.trap) {
			this.cardStatsString = 'Trap’s ';
			this.rowBonusModifier  += this.modifiers.trapBonus;
			this.playerRollModifier += this.modifiers.vsTraps;
		} else if (this.card.cardType === CardType.heart) {
			this.cardStatsString = 'Dragon’s ';
			this.rowBonusModifier += this.modifiers.enBonus + this.modifiers.trapBonus;
			this.playerRollModifier += this.modifiers.vsEnemies + this.modifiers.vsTraps;
		}
		if (this.card.cardTop.stats.Brains !== null) {
			if (this.modifiers.enBrains !== 0 && this.card.cardType === CardType.enemy) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += this.modifiers.enBrains;
			}
			this.cardStatsString += 'Brains';
			this.playerStatsString += 'Brains';
			this.cardTotal += (this.card.cardTop.stats.Brains === -1 ? (this.card.level === 1 ? this.player.calculatedStats.Brains : this.neighborStats.Brains) : this.card.cardTop.stats.Brains);
			this.playerTotal += this.player.calculatedStats.Brains;
			if (!(this.card.cardTop.stats.Brawn === null && this.card.cardTop.stats.Bravado === null)) {
				this.cardStatsString += ' + ';
				this.playerStatsString += ' + ';
			}
		}
		if (this.card.cardTop.stats.Brawn !== null) {
			if (this.modifiers.enBrawn !== 0 && this.card.cardType === CardType.enemy) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += this.modifiers.enBrawn;
			}
			this.cardStatsString += 'Brawn';
			this.playerStatsString += 'Brawn';
			this.cardTotal += (this.card.cardTop.stats.Brawn === -1 ? (this.card.level === 1 ? this.player.calculatedStats.Brawn : this.neighborStats.Brawn) : this.card.cardTop.stats.Brawn);
			this.playerTotal += this.player.calculatedStats.Brawn;
			if (this.card.cardTop.stats.Bravado !== null) {
				this.cardStatsString += ' + ';
				this.playerStatsString += ' + ';
			}
		}
		if (this.card.cardTop.stats.Bravado !== null) {
			if (this.modifiers.enBravado !== 0 && this.card.cardType === CardType.enemy) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += this.modifiers.enBravado;
			}
			this.cardStatsString += 'Bravado';
			this.playerStatsString += 'Bravado';
			this.cardTotal += (this.card.cardTop.stats.Bravado === -1 ? (this.card.level === 1 ? this.player.calculatedStats.Bravado : this.neighborStats.Bravado) : this.card.cardTop.stats.Bravado);
			this.playerTotal += this.player.calculatedStats.Bravado;
		}
		this.cardStatsString += ':';
		this.playerStatsString += ':';
		this.cardBonusString += this.player.currRowBonus;
		if (this.rowBonusModifier !== 0)
			this.cardBonusString += (this.rowBonusModifier > 0 ? ' + ' : ' − ') + Math.abs(this.rowBonusModifier);
	}

	// useItemPower(itemPower: {power: number, value: number}): void {
	// }

	fightCard(): void {
		this.playerRoll = this.gameService.dieRoll();
		if (this.player.reduceNextRoll) {
			this.playerRollModifier--;
			this.player.reduceNextRoll = false;
		}
		this.playerRollString += this.playerRoll;
		if (this.playerRollModifier > 0) this.playerRollString += ' + ' + this.playerRollModifier;
		else if (this.playerRollModifier < 0) this.playerRollString += ' − ' + Math.abs(this.playerRollModifier);
		this.playerWin = (this.playerTotal + this.playerRoll + this.playerRollModifier) >= (this.cardTotal + this.player.currRowBonus + this.rowBonusModifier);
		this.gameService.turnStep = TurnStepType.postCombat;
	}

	lostFight(): void {
		this.playerComp.gainWound();
		this.useCard.emit(this.card);
	}

	saveForXP(): void {
		this.playerComp.gainXP();
		this.useCard.emit(this.card);
	}
}
