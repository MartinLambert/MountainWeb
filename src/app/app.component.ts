import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

import { Tile            } from './game/board/tile';
import { Card            } from './game/card/card';
import { Player          } from './game/player/player';
import { GameService     } from './game/game.service';
import { BoardComponent  } from './game/board/board.component';
import { CardsComponent  } from './game/cards/cards.component';
import { PlayerComponent } from './game/player/player.component';
import { ActionComponent } from './game/action/action.component';
import { CardType, Stats, TurnStepType } from './game/types';

@Component({
	selector: 'hotm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@ViewChild(BoardComponent, { static: true }) board: BoardComponent;
	@ViewChild(CardsComponent, { static: true }) cards: CardsComponent;
	@ViewChildren(PlayerComponent) players: QueryList<PlayerComponent>;
	@ViewChild(ActionComponent, { static: false }) action: ActionComponent;
	currentTiles: Tile[] = [];
	currentCards: Card[] = [];
	currentPlayer: number;
	activeCard: Card;
	characters: Player[];
	usingXP = false;
	needToRoll = 0;
	needToHeal = false;
	tempMoveBonus = 0;
	tempXPBonus = 0;
	xpMinOnly = false;
	tilesToDraw = 1;
	cardsToDraw = 1;
	neighborStats: Stats;

	constructor(public gameService: GameService) {}

	ngOnInit(): void {
		this.characters = this.gameService.getCharacters();
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
			this.gameService.turnStep = TurnStepType.preCombat;
		}
	}
	useCard(card: Card): void {
		const index = this.currentCards.indexOf(card);
		if (index >= 0)
			this.currentCards.splice(index, 1);
		if (this.currentCards.length) {
			this.activeCard = this.currentCards[0];
			this.gameService.currentCard = this.activeCard;
		} else {
			this.activeCard = null;
			this.gameService.currentCard = null;
			this.gameService.turnStep = TurnStepType.xpEnd;
		}
	}
	discardCard(card: Card): void {
		this.cards.discardCard(card);
	}

	drawTile(numTiles: number): void {
		if (this.gameService.round === 0) this.characters[this.gameService.currPlayer].avatarStyle = this.board.avatarLocation(this.characters[this.gameService.currPlayer]);
		for (let i = 0; i < numTiles; i++) {
			this.board.drawTile();
			this.currentTiles.push(this.gameService.currentTile);
		}
		this.validateTile(this.gameService.currentTile);
	}
	validateTile(tile): void {
		this.board.validateTilePlacement(tile);
		this.gameService.currentTile = tile;
		this.gameService.turnStep = TurnStepType.placeTile;
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
					this.gameService.turnStep = TurnStepType.move;
					// this.board.validatePlayerMovement(this.characters[this.gameService.currPlayer].movement, this.characters[this.gameService.currPlayer].location);
					this.movePlayer();
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
		const playerComp = this.players.find(player => player.playerNum === this.gameService.currPlayer);
		const playerObj = this.characters[this.gameService.currPlayer];
		switch (cardPower.power) {
			case 1: // heal a Wound
				for (let i = 0; i < cardPower.value; i++)
					playerComp.healWound();
				break;
			case 2: // TODO: move to any portal
				break;
			case 3: // draw an extra tile
				this.gameService.turnStep === TurnStepType.drawTile ? this.tilesToDraw += cardPower.value : this.drawTile(cardPower.value);
				break;
			case 4: // move an extra space
				this.tempMoveBonus += cardPower.value;
				this.movePlayer();
				break;
			case 5: // gain extra XP
				this.gainXPBonus(cardPower.value);
				break;
			case 6: // move to any adjacent or diagonal tile
				this.movePlayer();
				this.board.validateAdjacentMovement(this.characters[this.gameService.currPlayer].location, cardPower.value > 0);
				break;
			case 7: // TODO: move to any occupied space
				break;
			case 8: // increase Brains
				playerObj.nativeStats.Brains += cardPower.value;
				playerComp.calculateDisplayStats();
				break;
			case 9: // increase Brawn
				playerObj.nativeStats.Brawn += cardPower.value;
				playerComp.calculateDisplayStats();
				break;
			case 10: // increase Bravado
				playerObj.nativeStats.Bravado += cardPower.value;
				playerComp.calculateDisplayStats();
				break;
			case 11: // increase lowest stat
				if (playerObj.nativeStats.Brains < playerObj.nativeStats.Brawn && playerObj.nativeStats.Brains < playerObj.nativeStats.Bravado)
					playerObj.nativeStats.Brains += cardPower.value;
				else if (playerObj.nativeStats.Brawn < playerObj.nativeStats.Brains && playerObj.nativeStats.Brawn < playerObj.nativeStats.Bravado)
					playerObj.nativeStats.Brawn += cardPower.value;
				if (playerObj.nativeStats.Bravado < playerObj.nativeStats.Brains && playerObj.nativeStats.Bravado < playerObj.nativeStats.Brawn)
					playerObj.nativeStats.Bravado += cardPower.value;
				else {
					this.gainXPBonus(Math.min(playerObj.nativeStats.Brains, playerObj.nativeStats.Brawn) * cardPower.value);
					this.xpMinOnly = true;
					this.usingXP = true;
				}
				playerComp.calculateDisplayStats();
				break;
			case 12: // move to any space in this row
				this.board.validateRowMovement(this.characters[this.gameService.currPlayer].location);
				break;
			case 13: // discard an Enemy without fighting it
			case 14: // discard a Trap without fighting it
				this.discardCard(this.activeCard);
				this.useCard(this.activeCard);
				break;
			case 15: // defeat an Enemy
			case 16: // defeat a Trap
				this.action.playerWin = true;
				break;
			case 17: // increase your attack vs Enemies
				this.action.modifiers.vsEnemies += cardPower.value;
				this.action.calcStats();
				break;
			case 18: // increase your attack vs Traps
				this.action.modifiers.vsTraps += cardPower.value;
				this.action.calcStats();
				break;
			case 19: // increase your attack roll
				this.action.modifiers.allRolls += cardPower.value;
				this.action.calcStats();
				break;
			case 20: // reduce an Enemy's Brains
				this.action.modifiers.enBrains += cardPower.value;
				this.action.calcStats();
				break;
			case 21: // reduce an Enemy's Brawn
				this.action.modifiers.enBrawn += cardPower.value;
				this.action.calcStats();
				break;
			case 22: // reduce an Enemy's Bravado
				this.action.modifiers.enBravado += cardPower.value;
				this.action.calcStats();
				break;
			// case 23: // reduce an Enemy's die roll  EDIT June 2019: this power will no longer exist
			// 	this.action.modifiers.enemyRoll += cardPower.value;
			// 	if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
			// 	break;
			// case 24: // reduce a Trap's die roll  EDIT June 2019: this power will no longer exist
			// 	this.action.modifiers.trapRoll += cardPower.value;
			// 	if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
			// 	break;
			case 23: // TODO: move a tile
				break;
			case 24: // TODO: move to any portal or occupied space
				break;
			default:
				console.warn(`cardPower ${cardPower.power} not implemented`);
		}
	}

	movePlayer(): void {
		const player = this.characters[this.gameService.currPlayer];
		if (this.board.spaces[player.location].level)
			this.board.validatePlayerMovement(player.movement + this.tempMoveBonus, player.location);
		else
			for (let space = this.board.boardConstants.homeStart; space <= this.board.boardConstants.homeEnd; space++)
				this.board.validatePlayerMovement(player.movement + this.tempMoveBonus, space);
	}
	returnToCamp(): void {
		const player = this.characters[this.gameService.currPlayer];
		this.needToHeal = false;
		for (let i = 0; i < player.wounds.length; i++) {
			this.discardCard(player.wounds[i]);
			player.wounds[i] = new Card();
		}
		player.location = player.startLocation;
		this.board.moveAvatar();
	}

	powerSurge(value: number): void {
		if (!this.gameService.midTurn) return;
		if (value < 2 || (this.needToRoll > 1 && value === 2) || (this.needToRoll === 3 && value === 3)) this.players.find(player => player.playerNum === this.gameService.currPlayer).gainWound();
		if (value > 5 || (this.needToRoll < 3 && value === 5) || (this.needToRoll === 1 && value === 4)) this.players.find(player => player.playerNum === this.gameService.currPlayer).healWound();
		this.gameService.currPlayer++;
		if (this.currentPlayer === this.gameService.currPlayer) {
			this.needToRoll = 0;
			this.gameService.midTurn = false;
			this.discardCard(this.activeCard);
			this.useCard(this.activeCard);
		}
	}

	doEvent(): void {
		if (this.activeCard.cardType !== CardType.event) return;
		if (!this.activeCard.cardTop.power) {
			console.log(`Event "${this.activeCard.cardTop.name}" hasn't been implemented yet`);
			this.discardCard(this.activeCard);
			this.useCard(this.activeCard);
			return;
		}
		this.currentPlayer = this.gameService.currPlayer;
		this.gameService.midTurn = true;

		switch (this.activeCard.cardTop.power) {
			case 1: // Brief Reprieve: heal a wound
				this.players.forEach(player => player.healWound());
				this.gameService.midTurn = false;
				this.discardCard(this.activeCard);
				this.useCard(this.activeCard);
				break;
			case 2: // Cave-In: remove a tile
				this.board.validateTileRemoval();
				break;
			case 3: // The Path Grows Clearer: draw a tile
				this.drawTile(1);
				break;
			case 4: // Power Surge: gain or heal a wound
				this.needToRoll = this.activeCard.level;
				break;
			case 5: // TODO: Flash Flood: disable an item
				break;
			case 6: // Phase Shift: move to any space in your row
				this.board.validateRowMovement(this.characters[this.gameService.currPlayer].location);
				break;
			case 7: // Earthquake: -1 to your next die roll
				this.characters.forEach(character => character.reduceNextRoll = true);
				this.gameService.midTurn = false;
				this.discardCard(this.activeCard);
				this.useCard(this.activeCard);
				break;
		}
	}

	endTurn(): void {
		this.usingXP = false;
		this.xpMinOnly = false;
		this.cardsToDraw = 1;
		this.tilesToDraw = 1;
		this.players.find(player => player.playerNum === this.gameService.currPlayer).expireThisTurnItems();
		this.gameService.turnStep = TurnStepType.drawTile;
		this.neighborStats = this.characters[this.gameService.currPlayer].calculatedStats;
		this.gameService.currPlayer++;
	}
}
