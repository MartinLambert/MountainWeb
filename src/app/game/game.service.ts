import { Injectable     } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Tile       } from './board/tile';
import { SPACES     } from './board/spaces';
import { TILES      } from './board/tiles';
import { Card       } from './cards/card';
import { CARDS      } from './cards/cards';
import { Player     } from './player/player';
import { CHARACTERS } from './player/characters';

@Injectable({
	providedIn: 'root'
})
export class GameService {

	private _numPlayers = 4;
	private _currPlayer = 0;
	private _turnStep = 0;
	private _round = -1; // should start at -1
	private _currentTile: Tile;
	private _currentCard: Card;

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
			this.round++;
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

	getBoard(): Observable<Tile[]> {
		return of(SPACES);
	}

	getTiles(): Observable<Tile[]> {
		return of(TILES);
	}

	getCards(): Observable<Card[][]> {
		return of(CARDS);
	}

	getCharacters(): Observable<Player[]> {
		return of(CHARACTERS);
	}

	drawCard(newCard: Card) {
		// this.currentCardSource.next(newCard);
	}
}
