import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { Player } from '../player/player';
import { PlayerComponent } from '../player/player.component';
import { Card, CardType} from '../card/card';
import { GameService} from '../game.service';
import {GemType, ItemType, TurnStepType} from '../card/item';

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
		this.player.items.forEach(thisCard => {
			if (thisCard.item.leftGem.includes(GemType.vsEnemies)) this.modifiers.vsEnemies += previousGem;
			if (thisCard.item.leftGem.includes(GemType.vsTraps)) this.modifiers.vsTraps   += previousGem;
			if (thisCard.item.leftGem.includes(GemType.allRolls)) this.modifiers.allRolls  += previousGem;
			if (thisCard.item.leftGem.includes(GemType.enBrains)) this.modifiers.enBrains  += previousGem;
			if (thisCard.item.leftGem.includes(GemType.enBrawn)) this.modifiers.enBrawn   += previousGem;
			if (thisCard.item.leftGem.includes(GemType.enBravado)) this.modifiers.enBravado += previousGem;
			if (thisCard.item.type % ItemType.permanent === 0 && thisCard.item.power === 17) this.modifiers.vsEnemies += thisCard.item.value;
			if (thisCard.item.type % ItemType.permanent === 0 && thisCard.item.power === 18) this.modifiers.vsTraps   += thisCard.item.value;
			if (thisCard.item.type % ItemType.permanent === 0 && thisCard.item.power === 19) this.modifiers.allRolls  += thisCard.item.value;
			if (thisCard.item.type % ItemType.permanent === 0 && thisCard.item.power === 20) this.modifiers.enBrains  += thisCard.item.value;
			if (thisCard.item.type % ItemType.permanent === 0 && thisCard.item.power === 21) this.modifiers.enBrawn   += thisCard.item.value;
			if (thisCard.item.type % ItemType.permanent === 0 && thisCard.item.power === 22) this.modifiers.enBravado += thisCard.item.value;
			previousGem = thisCard.item.rightGem;
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
		if (card.cardTop.stats.Brains !== null) {
			if (this.modifiers.enBrains !== 0) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += this.modifiers.enBrains;
			}
			this.cardStatsString += 'Brains';
			this.playerStatsString += 'Brains';
			this.cardTotal += card.cardTop.stats.Brains;
			this.playerTotal += this.player.calculatedStats.Brains;
			if (!(card.cardTop.stats.Brawn === null && card.cardTop.stats.Bravado === null)) {
				this.cardStatsString += ' + ';
				this.playerStatsString += ' + ';
			}
		}
		if (card.cardTop.stats.Brawn !== null) {
			if (this.modifiers.enBrawn !== 0) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += this.modifiers.enBrawn;
			}
			this.cardStatsString += 'Brawn';
			this.playerStatsString += 'Brawn';
			this.cardTotal += card.cardTop.stats.Brawn;
			this.playerTotal += this.player.calculatedStats.Brawn;
			if (card.cardTop.stats.Bravado !== null) {
				this.cardStatsString += ' + ';
				this.playerStatsString += ' + ';
			}
		}
		if (card.cardTop.stats.Bravado !== null) {
			if (this.modifiers.enBravado !== 0) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += this.modifiers.enBravado;
			}
			this.cardStatsString += 'Bravado';
			this.playerStatsString += 'Bravado';
			this.cardTotal += card.cardTop.stats.Bravado;
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
