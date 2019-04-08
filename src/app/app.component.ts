import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

import {Tile} from './game/board/tile';
import {Card, CardType, ItemType} from './game/cards/card';
import {Player} from './game/player/player';
import {GameService} from './game/game.service';
import {BoardComponent} from './game/board/board.component';
import {CardsComponent} from './game/cards/cards.component';
import {PlayerComponent} from './game/player/player.component';
import {blankCard} from './game/cards/blankCard';

@Component({
	selector: 'hotm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@ViewChild(BoardComponent) board: BoardComponent;
	@ViewChild(CardsComponent) cards: CardsComponent;
	@ViewChildren(PlayerComponent) players: QueryList<PlayerComponent>;
	currentTiles: Tile[] = [];
	currentCards: Card[] = [];
	currentPlayer: number;
	activeCard: Card;
	characters: Player[];
	usingXP = false;
	needToRoll = false;
	needToHeal = false;
	tempMoveBonus = 0;
	tempXPBonus = 0;
	numToDraw = 1;

	constructor(public gameService: GameService) {}

	ngOnInit(): void {
		this.gameService.getCharacters().subscribe(players => this.characters = players);
	}

	drawTile(numTiles: number): void {
		for (let i = 0; i < numTiles; i++) {
			this.board.drawTile();
			this.currentTiles.push(this.gameService.currentTile);
		}
		if (numTiles === 1) this.validateTile(this.gameService.currentTile);
	}
	validateTile(tile): void {
		this.board.validateTilePlacement(tile);
		this.gameService.currentTile = tile;
	}

	drawCard(numCards: number): void {
		this.tempMoveBonus = 0;
		for (let i = 0; i < numCards; i++) {
			this.cards.drawCard(this.board.spaces[this.characters[this.gameService.currPlayer].location].level);
			this.currentCards.push(this.gameService.currentCard);
		}
		if (this.gameService.round > 0) {
			this.activeCard = this.currentCards[0];
			this.players.find(player => player.playerNum === this.gameService.currPlayer).expireNextTurnItems();
			this.gameService.turnStep = 3;
		}
	}
	useCard(card: Card): void {
		const index = this.currentCards.indexOf(card);
		if (index >= 0)
			this.currentCards.splice(index, 1);
		if (this.currentCards.length)
			this.activeCard = this.currentCards[0];
		else {
			this.activeCard = null;
			this.gameService.turnStep = 5;
		}
	}
	discardCard(card: Card): void {
		this.cards.discardCard(card);
	}

	tilePlaced(): void {
		if (!this.gameService.currentTile) return;
		const index = this.currentTiles.indexOf(this.gameService.currentTile);
		if (index >= 0) {
			this.currentTiles.splice(index, 1);
			this.gameService.currentTile = (this.currentTiles.length ? this.currentTiles[0] : null);
			if (this.currentTiles.length === 0) {
				this.gameService.currentTile = null;
				if (this.gameService.midTurn) { // Path grows clearer event
					this.gameService.currPlayer++;
					if (this.gameService.currPlayer === this.currentPlayer) {
						this.gameService.midTurn = false;
						this.discardCard(this.activeCard);
						this.useCard(this.activeCard);
					} else
						this.drawTile(1);
				} else if (this.gameService.round === 0)
					this.endTurn(); // Round 0 is just setting up the board
				else {
					this.gameService.turnStep = 1;
					this.board.validatePlayerMovement(this.characters[this.gameService.currPlayer].movement, this.characters[this.gameService.currPlayer].location);
				}
			} else {
				this.validateTile(this.currentTiles[0]);
			}
		}
	}
	tileRemoved(): void {
		if (!this.gameService.midTurn) return;
		if (!document.getElementsByClassName('valid').length)
			this.gameService.currPlayer = this.currentPlayer;
		else
			this.gameService.currPlayer++;
		if (this.currentPlayer === this.gameService.currPlayer) {
			this.gameService.midTurn = false;
			this.discardCard(this.activeCard);
			this.useCard(this.activeCard);
		} else {
			this.board.validateTileRemoval();
		}
	}

	gainXPBonus(amount: number): void {
		const player = this.characters[this.gameService.currPlayer];
		if (!player.XP.length) return;
		player.XP.push(new Card);
		player.XP[player.XP.length - 1].cardType = CardType.blank;
		player.XP[player.XP.length - 1].level = amount;
	}
	usedXP(): void {
		this.players.find(player => player.playerNum === this.gameService.currPlayer).calculateDisplayStats();
		this.usingXP = false;
		this.tempXPBonus = 0;
	}

	useCardPower(cardPower: {power: number, value: number}): void {
		switch (cardPower.power) {
			case 2:
				this.numToDraw += cardPower.value;
				break;
			case 3:
				this.drawTile(cardPower.value);
				break;
			case 4:
				this.tempMoveBonus += cardPower.value;
				this.board.validatePlayerMovement(this.characters[this.gameService.currPlayer].movement + this.tempMoveBonus, this.characters[this.gameService.currPlayer].location);
				break;
			case 5:
				this.gainXPBonus(cardPower.value);
				break;
			default:
				console.warn(`cardPower ${cardPower.power} not implemented`);
		}
	}

	moveCamp(): void {
		this.board.moveCamp();
	}
	returnToCamp(): void {
		const player = this.characters[this.gameService.currPlayer];
		this.needToHeal = false;
		for (let i = 0; i < player.wounds.length; i++) {
			this.discardCard(player.wounds[i]);
			player.wounds[i] = blankCard;
		}
		player.location = player.campLocation ? player.campLocation : player.startLocation;
		this.board.moveAvatar();
	}

	powerSurge(value: number): void {
		if (!this.gameService.midTurn) return;
		if (value < 3) this.players.find(player => player.playerNum === this.gameService.currPlayer).gainWound();
		if (value > 4) this.players.find(player => player.playerNum === this.gameService.currPlayer).healWound();
		this.gameService.currPlayer++;
		if (this.currentPlayer === this.gameService.currPlayer) {
			this.needToRoll = false;
			this.gameService.midTurn = false;
			this.discardCard(this.activeCard);
			this.useCard(this.activeCard);
		}
	}

	doEvent(): void {
		if (this.activeCard.cardType !== CardType.event) return;
		if (!this.activeCard.cardPower) {
			console.log(`Event "${this.activeCard.cardName}" hasn't been implemented yet`);
			this.discardCard(this.activeCard);
			this.useCard(this.activeCard);
			return;
		}
		this.currentPlayer = this.gameService.currPlayer;
		this.gameService.midTurn = true;

		switch (this.activeCard.cardPower) {
			case 1: // Brief Reprieve: Heal a wound
				this.players.forEach(player => player.healWound());
				this.gameService.midTurn = false;
				this.discardCard(this.activeCard);
				this.useCard(this.activeCard);
				break;
			case 2: // Cave-In: Remove a tile
				this.board.validateTileRemoval();
				break;
			case 3: // The Path Grows Clearer: Add a tile
				this.drawTile(1);
				break;
			case 4: // Power Surge: gain or heal a wound
				this.needToRoll = true;
				break;
		}
	}

	endTurn(): void {
		this.usingXP = false;
		this.numToDraw = 1;
		this.players.find(player => player.playerNum === this.gameService.currPlayer).expireThisTurnItems();
		this.gameService.turnStep = 0;
		this.gameService.currPlayer++;
	}
}
