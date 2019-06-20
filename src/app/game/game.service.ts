import { Injectable } from '@angular/core';

import { Tile       } from './board/tile';
import { TILES      } from './board/tiles';
import { Space      } from './board/space';
import { SPACES     } from './board/spaces';
import { Card       } from './card/card';
import { CARDS      } from './cards/cards';
import { Player     } from './player/player';
import { CHARACTERS } from './player/characters';
import { GemType, ItemType, TurnStepType } from './types';

@Injectable({
	providedIn: 'root'
})
export class GameService {

	private _numPlayers = 4;
	private _currPlayer = 0;
	private _turnStep: TurnStepType = TurnStepType.drawTile;
	private _round = -1; // should start at -1: draw Starter cards, draw and place initial tiles, then game begins with Round 1
	private _currentTile: Tile;
	private _currentCard: Card;
	private _midTurn = false;
	// public flags = {
	// 	midTurn: false // rotating through characters during a turn instead of between turns, e.g. with an event
	// };

	constructor() {}

	get numPlayers(): number {
		return this._numPlayers;
	}

	set numPlayers(value: number) {
		this._numPlayers = value;
	}

	get currPlayer(): number {
		return this._currPlayer;
	}

	set currPlayer(value: number) {
		if (value >= this.numPlayers) {
			if (!this.midTurn) this.round++;
			value = 0;
		}
		this._currPlayer = value;
	}

	get turnStep(): number {
		return this._turnStep;
	}

	set turnStep(value: number) {
		this._turnStep = value;
	}

	get round(): number {
		return this._round;
	}

	set round(value: number) {
		this._round = value;
	}

	get currentTile(): Tile {
		return this._currentTile;
	}

	set currentTile(value: Tile) {
		this._currentTile = value;
	}

	get currentCard(): Card {
		return this._currentCard;
	}

	set currentCard(value: Card) {
		this._currentCard = value;
	}

	get midTurn(): boolean {
		return this._midTurn;
	}

	set midTurn(value: boolean) {
		this._midTurn = value;
	}

	getBoard(): Space[] {
		return SPACES;
	}

	getTiles(): Tile[] {
		return TILES;
	}

	getCards(): Card[][] {
		return CARDS;
	}

	getCharacters(): Player[] {
		return CHARACTERS;
	}

	cardTextDisplay(item): string {
		let textDisplay = '';
		if (item && item.type) {
			textDisplay = `<h2 class="itemText">${ item.text }</h2>`;
			if (item.type === ItemType.useOnce) textDisplay += '<p>Use Once</p>';
			if (item.type === ItemType.useNow ) textDisplay += '<p>Use Immediately</p>';
			if (item.type === ItemType.useNext) textDisplay += '<p>Use Next Turn</p>';
			if (item.type === ItemType.disAny ) textDisplay += '<p>Disable Any Item</p>';
			if (item.stats.Brains)  textDisplay += `<h3 class="brains">${  this.attrDisplay(item.stats.Brains)  } Brains</h3>`;
			if (item.stats.Brawn)   textDisplay += `<h3 class="brawn">${   this.attrDisplay(item.stats.Brawn)   } Brawn</h3>`;
			if (item.stats.Bravado) textDisplay += `<h3 class="bravado">${ this.attrDisplay(item.stats.Bravado) } Bravado</h3>`;
		}

		return textDisplay;
	}

	leftGemDisplay(gem: GemType[]): string {
		let gemDisplay = '';
		if (gem.includes(GemType.Brains) || gem.includes(GemType.Brawn) || gem.includes(GemType.Bravado)) {
			gemDisplay = '<div class="leftGemAttr">';
			gemDisplay += '<div'; if (gem.includes(GemType.Brains) ) gemDisplay += ' class="brains"';  gemDisplay += '></div>';
			gemDisplay += '<div'; if (gem.includes(GemType.Brawn)  ) gemDisplay += ' class="brawn"';   gemDisplay += '></div>';
			gemDisplay += '<div'; if (gem.includes(GemType.Bravado)) gemDisplay += ' class="bravado"'; gemDisplay += '></div>';
			gemDisplay += '</div>';
		}
		if (gem.includes(GemType.vsEnemies)) gemDisplay += '<div>vs Enemies</div>';
		if (gem.includes(GemType.vsTraps)  ) gemDisplay += '<div>vs Traps</div>';
		if (gem.includes(GemType.allRolls) ) gemDisplay += '<div>All Rolls</div>';
		if (gem.includes(GemType.enBrains) ) gemDisplay += '<div>Enemy Brains</div>';
		if (gem.includes(GemType.enBrawn)  ) gemDisplay += '<div>Enemy Brawn</div>';
		if (gem.includes(GemType.enBravado)) gemDisplay += '<div>Enemy Bravado</div>';
		if (gem.includes(GemType.enBonus)  ) gemDisplay += '<div>Enemy Bonus</div>';
		if (gem.includes(GemType.trapBonus)) gemDisplay += '<div>Trap Bonus</div>';

		return gemDisplay;
	}

	attrDisplay(attr: number): string {
		let display = '';
		if (attr < 0) display = '−';
		if (attr > 0) display = '+';
		if (attr !== 0) display += Math.abs(attr);

		return display;
	}

	shuffle(deck: any[]): any[] {
		const newDeck = [];
		while (deck.length)
			newDeck.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0]);
		return newDeck;
	}
	dieRoll(): number {
		return Math.floor(Math.random() * 6) + 1;
	}

}
