import { Injectable } from '@angular/core';
import { Tile       } from './board/tile';
import { TILES      } from './board/tiles';
import { Space      } from './board/space';
import { SPACES     } from './board/spaces';
import { Card       } from './cards/card';
import { CARDS      } from './cards/cards';
import { Player     } from './player/player';
import { CHARACTERS } from './player/characters';

export enum TurnStepType {
	drawTile   = 0,
	placeTile  = 1,
	move       = 2,
	drawCard   = 3,
	preCombat  = 4,
	postCombat = 5,
	xpEnd      = 6
}

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
}
