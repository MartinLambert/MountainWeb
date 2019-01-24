import { Injectable     } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tile           } from './board/tile';
import { SPACES         } from './board/spaces';
import { TILES          } from './board/tiles';
import { Card           } from './cards/card';
import { CARDS          } from './cards/cards';

@Injectable({
	providedIn: 'root'
})
export class GameService {

	private _numPlayers = 4;
	private _currPlayer = 0;
	private _turnStep = 0;

	constructor() {
	}

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
		this._currPlayer = value;
	}

	get turnStep(): number {
		return this._turnStep;
	}

	set turnStep(value: number) {
		this._turnStep = value;
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
}
