import { Injectable } from '@angular/core';

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

}
