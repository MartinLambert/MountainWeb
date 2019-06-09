import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { Player } from '../player/player';
import { PlayerComponent } from '../player/player.component';
import { Card, CardType, GemType, ItemType } from '../cards/card';
import { GameService, TurnStepType } from '../game.service';

@Component({
	selector: 'hotm-action',
	templateUrl: './action.component.html',
	styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

	@Input() cards: Card[];
	@Input() player: Player;
	@Input() playerNum: number;
	@Output() drawCard = new EventEmitter<number>();
	@Output() useCard = new EventEmitter<Card>();
	@Output() discardCard = new EventEmitter<Card>();
	@Output() doEvent = new EventEmitter();
	@Output() wounded = new EventEmitter();
	@ViewChild(PlayerComponent, { static: true }) playerComp;
	cardType = CardType;
	selectedCard: number;
	cardStatsString: string;
	playerStatsString = 'Your ';
	cardRollString = '​';
	playerRollString = 'Your Roll: ';
	cardTotal = 0;
	playerTotal = 0;
	cardRoll: number;
	playerRoll: number;
	cardRollModifier = 0;
	playerRollModifier = 0;
	newItem = false;
	playerWin = false;
	modifiers = {
		vsEnemies: 0,
		vsTraps:   0,
		allRolls:  0,
		enBrains:  0,
		enBrawn:   0,
		enBravado: 0,
		enemyRoll: 0,
		trapRoll:  0
	};

	constructor(public gameService: GameService) {
	}

	ngOnInit() {
		if (this.cards.length === 1) {
			this.selectedCard = 0;
			this.calcStats(this.cards[0]);
		}
	}

	calcStats(card: Card): void {
		let previousGem = 0;
		this.player.items.forEach(item => {
			if (item.leftGem % GemType.vsEnemies === 0) this.modifiers.vsEnemies += previousGem;
			if (item.leftGem % GemType.vsTraps   === 0) this.modifiers.vsTraps   += previousGem;
			if (item.leftGem % GemType.allRolls  === 0) this.modifiers.allRolls  += previousGem;
			if (item.leftGem % GemType.enBrains  === 0) this.modifiers.enBrains  += previousGem;
			if (item.leftGem % GemType.enBrawn   === 0) this.modifiers.enBrawn   += previousGem;
			if (item.leftGem % GemType.enBravado === 0) this.modifiers.enBravado += previousGem;
			if (item.leftGem % GemType.enemyRoll === 0) this.modifiers.enemyRoll += previousGem;
			if (item.leftGem % GemType.trapRoll  === 0) this.modifiers.trapRoll  += previousGem;
			if (item.itemType % ItemType.permanent === 0 && item.itemPower === 17) this.modifiers.vsEnemies += item.itemValue;
			if (item.itemType % ItemType.permanent === 0 && item.itemPower === 18) this.modifiers.vsTraps   += item.itemValue;
			if (item.itemType % ItemType.permanent === 0 && item.itemPower === 19) this.modifiers.allRolls  += item.itemValue;
			if (item.itemType % ItemType.permanent === 0 && item.itemPower === 20) this.modifiers.enBrains  += item.itemValue;
			if (item.itemType % ItemType.permanent === 0 && item.itemPower === 21) this.modifiers.enBrawn   += item.itemValue;
			if (item.itemType % ItemType.permanent === 0 && item.itemPower === 22) this.modifiers.enBravado += item.itemValue;
			if (item.itemType % ItemType.permanent === 0 && item.itemPower === 23) this.modifiers.enemyRoll += item.itemValue;
			if (item.itemType % ItemType.permanent === 0 && item.itemPower === 24) this.modifiers.trapRoll  += item.itemValue;
			previousGem = item.rightGem;
		});
		this.playerRollModifier += this.modifiers.allRolls;
		if (card.cardType === CardType.enemy) {
			this.cardStatsString = 'Enemy’s ';
			this.cardRollModifier += this.modifiers.enemyRoll;
			this.playerRollModifier += this.modifiers.vsEnemies;
		} else if (card.cardType === CardType.trap) {
			this.cardStatsString = 'Trap’s ';
			this.cardRollModifier += this.modifiers.trapRoll;
			this.playerRollModifier += this.modifiers.vsTraps;
		} else if (card.cardType === CardType.heart) {
			this.cardStatsString = 'Dragon’s ';
			this.cardRollModifier += this.modifiers.enemyRoll + this.modifiers.trapRoll;
			this.playerRollModifier += this.modifiers.vsEnemies + this.modifiers.vsTraps;
		}
		if (card.cardStats.Brains !== null) {
			if (this.modifiers.enBrains !== 0) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += this.modifiers.enBrains;
			}
			this.cardStatsString += 'Brains';
			this.playerStatsString += 'Brains';
			this.cardTotal += card.cardStats.Brains;
			this.playerTotal += this.player.calculatedStats.Brains;
			if (!(card.cardStats.Brawn === null && card.cardStats.Bravado === null)) {
				this.cardStatsString += ' + ';
				this.playerStatsString += ' + ';
			}
		}
		if (card.cardStats.Brawn !== null) {
			if (this.modifiers.enBrawn !== 0) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += this.modifiers.enBrawn;
			}
			this.cardStatsString += 'Brawn';
			this.playerStatsString += 'Brawn';
			this.cardTotal += card.cardStats.Brawn;
			this.playerTotal += this.player.calculatedStats.Brawn;
			if (card.cardStats.Bravado !== null) {
				this.cardStatsString += ' + ';
				this.playerStatsString += ' + ';
			}
		}
		if (card.cardStats.Bravado !== null) {
			if (this.modifiers.enBravado !== 0) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += this.modifiers.enBravado;
			}
			this.cardStatsString += 'Bravado';
			this.playerStatsString += 'Bravado';
			this.cardTotal += card.cardStats.Bravado;
			this.playerTotal += this.player.calculatedStats.Bravado;
		}
		this.cardStatsString += ':';
		this.playerStatsString += ':';
	}

	useItemPower(itemPower: {power: number, value: number}): void {
		if (this.gameService.turnStep === TurnStepType.drawCard && itemPower.power === 2) {
			this.drawCard.emit(itemPower.value);
		}
	}

	selectCard(which: number): void {
		if (this.selectedCard === which)
			this.selectedCard = null;
		else {
			this.selectedCard = which;
			this.cardStatsString = '';
			this.playerStatsString = 'Your ';
			this.cardRollString = '​';
			this.playerRollString = 'Your Roll: ';
			this.cardTotal = 0;
			this.playerTotal = 0;
			this.cardRollModifier = 0;
			this.playerRollModifier = 0;
			this.calcStats(this.cards[this.selectedCard]);
		}
	}
	proceedWithCard(): void {
		const chosenCard = this.cards[this.selectedCard];
		const unchosenCards = this.cards.filter(card => card !== chosenCard);
		while (unchosenCards.length) {
			this.discardCard.emit(unchosenCards[0]);
			this.useCard.emit(unchosenCards[0]);
			unchosenCards.shift();
		}
		this.selectedCard = 0;
	}

	fightCard(): void {
		this.cardRoll = this.dieRoll();
		this.cardRollString = (this.cards[0].cardType === CardType.enemy) ? 'Enemy’s Roll: ' : 'Trap’s Roll: ';
		this.cardRollString += this.cardRoll;
		if (this.cardRollModifier > 0) this.cardRollString += ' + ' + this.cardRollModifier;
		else if (this.cardRollModifier < 0) this.cardRollString += ' − ' + Math.abs(this.cardRollModifier);

		this.playerRoll = this.dieRoll();
		this.playerRollString += this.playerRoll;
		if (this.playerRollModifier > 0) this.playerRollString += ' + ' + this.playerRollModifier;
		else if (this.playerRollModifier < 0) this.playerRollString += ' − ' + Math.abs(this.playerRollModifier);
		this.playerWin = (this.playerTotal + this.playerRoll + this.playerRollModifier) >= (this.cardTotal + this.cardRoll + this.cardRollModifier);
		this.gameService.turnStep = TurnStepType.postCombat;
	}

	dieRoll(): number {
		return Math.floor(Math.random() * 6) + 1;
	}

	lostFight(): void {
		this.playerComp.gainWound();
		this.useCard.emit(this.cards[0]);
	}

	saveForXP(): void {
		this.playerComp.gainXP();
		this.useCard.emit(this.cards[0]);
	}
}
