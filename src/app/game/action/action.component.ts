import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Card, CardType, GemType} from '../cards/card';
import {Player} from '../player/player';
import {PlayerComponent} from '../player/player.component';

@Component({
	selector: 'hotm-action',
	templateUrl: './action.component.html',
	styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

	@Input() card: Card;
	@Input() player: Player;
	@Input() playerNum: number;
	@Output() useCard = new EventEmitter<Card>();
	@Output() doEvent = new EventEmitter();
	@Output() wounded = new EventEmitter();
	@ViewChild(PlayerComponent) playerComp;
	cardType = CardType;
	// gemType = GemType;
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

	constructor() {
	}

	ngOnInit() {
		this.calcStats();
	}

	calcStats(): void {
		let previousGem = 0;
		const modifiers = {
			vsEnemies: 0,
			vsTraps:   0,
			allRolls:  0,
			enBrains:  0,
			enBrawn:   0,
			enBravado: 0,
			enemyRoll: 0,
			trapRoll:  0
		};
		this.player.items.forEach(item => {
			if (item.leftGem % GemType.vsEnemies === 0) modifiers.vsEnemies += previousGem;
			if (item.leftGem % GemType.vsTraps   === 0) modifiers.vsTraps   += previousGem;
			if (item.leftGem % GemType.allRolls  === 0) modifiers.allRolls  += previousGem;
			if (item.leftGem % GemType.enBrains  === 0) modifiers.enBrains  += previousGem;
			if (item.leftGem % GemType.enBrawn   === 0) modifiers.enBrawn   += previousGem;
			if (item.leftGem % GemType.enBravado === 0) modifiers.enBravado += previousGem;
			if (item.leftGem % GemType.enemyRoll === 0) modifiers.enemyRoll += previousGem;
			if (item.leftGem % GemType.trapRoll  === 0) modifiers.trapRoll  += previousGem;
			previousGem = item.rightGem;
		});
		this.playerRollModifier += modifiers.allRolls;
		if (this.card.cardType === CardType.enemy) {
			this.cardStatsString = 'Enemy’s ';
			this.cardRollModifier += modifiers.enemyRoll;
			this.playerRollModifier += modifiers.vsEnemies;
		} else if (this.card.cardType === CardType.trap) {
			this.cardStatsString = 'Trap’s ';
			this.cardRollModifier += modifiers.trapRoll;
			this.playerRollModifier += modifiers.vsTraps;
		}
		if (this.card.cardStats.Brains !== null) {
			if (modifiers.enBrains !== 0) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += modifiers.enBrains;
			}
			this.cardStatsString += 'Brains';
			this.playerStatsString += 'Brains';
			this.cardTotal += this.card.cardStats.Brains;
			this.playerTotal += this.player.calculatedStats.Brains;
			if (!(this.card.cardStats.Brawn === null && this.card.cardStats.Bravado === null)) {
				this.cardStatsString += ' + ';
				this.playerStatsString += ' + ';
			}
		}
		if (this.card.cardStats.Brawn !== null) {
			if (modifiers.enBrawn !== 0) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += modifiers.enBrawn;
			}
			this.cardStatsString += 'Brawn';
			this.playerStatsString += 'Brawn';
			this.cardTotal += this.card.cardStats.Brawn;
			this.playerTotal += this.player.calculatedStats.Brawn;
			if (this.card.cardStats.Bravado !== null) {
				this.cardStatsString += ' + ';
				this.playerStatsString += ' + ';
			}
		}
		if (this.card.cardStats.Bravado !== null) {
			if (modifiers.enBravado !== 0) {
				this.cardStatsString += 'Modified ';
				this.cardTotal += modifiers.enBravado;
			}
			this.cardStatsString += 'Bravado';
			this.playerStatsString += 'Bravado';
			this.cardTotal += this.card.cardStats.Bravado;
			this.playerTotal += this.player.calculatedStats.Bravado;
		}
		this.cardStatsString += ':';
		this.playerStatsString += ':';
	}

	fightCard(): void {
		this.cardRoll = this.dieRoll();
		this.cardRollString = (this.card.cardType === CardType.enemy) ? 'Enemy’s Roll: ' : 'Trap’s Roll: ';
		this.cardRollString += this.cardRoll;
		if (this.cardRollModifier > 0) this.cardRollString += ' + ' + this.cardRollModifier;
		else if (this.cardRollModifier < 0) this.cardRollString += ' − ' + Math.abs(this.cardRollModifier);

		this.playerRoll = this.dieRoll();
		this.playerRollString += this.playerRoll;
		if (this.playerRollModifier > 0) this.playerRollString += ' + ' + this.playerRollModifier;
		else if (this.playerRollModifier < 0) this.playerRollString += ' − ' + Math.abs(this.playerRollModifier);
		this.playerWin = (this.playerTotal + this.playerRoll + this.playerRollModifier) >= (this.cardTotal + this.cardRoll + this.cardRollModifier);
	}

	dieRoll(): number {
		return Math.floor(Math.random() * 6) + 1;
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
