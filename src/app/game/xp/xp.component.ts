import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Player} from '../player/player';
import {Stats} from '../stats';
import {Card, CardType} from '../cards/card';

@Component({
	selector: 'hotm-xp',
	templateUrl: './xp.component.html',
	styleUrls: ['./xp.component.css']
})
export class XPComponent implements OnInit {

	@Input() player: Player;
	@Output() doneXP = new EventEmitter();
	@Output() discard = new EventEmitter<Card>();
	cardType = CardType;
	itemDisplay = {
		Brains:  '',
		Brawn:   '',
		Bravado: ''
	};
	tempAttributes: Stats;
	selected: Array<boolean>;
	selectedTotal = 0;
	currTotal = 0;

	constructor() {
	}

	ngOnInit() {
		this.tempAttributes = JSON.parse(JSON.stringify(this.player.nativeStats));
		if (this.tempAttributes.Brains !== this.player.calculatedStats.Brains) {
			this.itemDisplay.Brains = this.tempAttributes.Brains > this.player.calculatedStats.Brains ? '−' : '+';
			this.itemDisplay.Brains += Math.abs(this.player.calculatedStats.Brains - this.tempAttributes.Brains);
			this.itemDisplay.Brains += ' from items and gems';
		}
		if (this.tempAttributes.Brawn !== this.player.calculatedStats.Brawn) {
			this.itemDisplay.Brawn = this.tempAttributes.Brawn > this.player.calculatedStats.Brawn ? '−' : '+';
			this.itemDisplay.Brawn += Math.abs(this.player.calculatedStats.Brawn - this.tempAttributes.Brawn);
			this.itemDisplay.Brawn += ' from items and gems';
		}
		if (this.tempAttributes.Bravado !== this.player.calculatedStats.Bravado) {
			this.itemDisplay.Bravado = this.tempAttributes.Bravado > this.player.calculatedStats.Bravado ? '−' : '+';
			this.itemDisplay.Bravado += Math.abs(this.player.calculatedStats.Bravado - this.tempAttributes.Bravado);
			this.itemDisplay.Bravado += ' from items and gems';
		}
		this.selected = Array.from(new Array(this.player.XP.length), () => false);
	}

	selectCard(cardNum: number): void {
		if (this.selected[cardNum]) {
			this.selected[cardNum] = false;
			this.selectedTotal -= this.player.XP[cardNum].level;
			this.currTotal -= this.player.XP[cardNum].level;
		} else {
			this.selected[cardNum] = true;
			this.selectedTotal += this.player.XP[cardNum].level;
			this.currTotal += this.player.XP[cardNum].level;
		}
	}

	increment(stat: string): void {
		this.currTotal -= this.tempAttributes[stat];
		this.tempAttributes[stat]++;
	}
	decrement(stat: string): void {
		this.tempAttributes[stat]--;
		this.currTotal += this.tempAttributes[stat];
	}

	confirm(): void {
		const newXP = new Array<Card>();
		for (let i = 0; i < this.selected.length; i++)
			if (this.selected[i]) {
				if (this.player.XP[i].cardType !== CardType.blank)
					this.discard.emit(this.player.XP[i]);
			} else newXP.push(this.player.XP[i]);
		this.player.XP = newXP;
		this.player.nativeStats = JSON.parse(JSON.stringify(this.tempAttributes));
		this.doneXP.emit();
	}
}
