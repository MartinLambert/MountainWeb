import {Component, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

import {Tile} from './game/board/tile';
import {Card, CardType, ItemType} from './game/cards/card';
import {Player} from './game/player/player';
import {GameService} from './game/game.service';
import {BoardComponent} from './game/board/board.component';
import {CardsComponent} from './game/cards/cards.component';
import {PlayerComponent} from './game/player/player.component';
import {blankCard} from './game/cards/blankCard';
import {ActionComponent} from './game/action/action.component';

@Component({
	selector: 'hotm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	@ViewChild(BoardComponent) board: BoardComponent;
	@ViewChild(CardsComponent) cards: CardsComponent;
	@ViewChildren(PlayerComponent) players: QueryList<PlayerComponent>;
	@ViewChild(ActionComponent) action: ActionComponent;
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
	xpMinOnly = false;
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
		const playerComp = this.players.find(player => player.playerNum === this.gameService.currPlayer);
		const playerObj = this.characters[this.gameService.currPlayer];
		switch (cardPower.power) {
			case 1: // heal a Wound
				for (let i = 0; i < cardPower.value; i++)
					playerComp.healWound();
				break;
			case 2: // draw an extra card
				this.numToDraw += cardPower.value;
				break;
			case 3: // add an extra tile
				this.drawTile(cardPower.value);
				break;
			case 4: // move an extra space
				this.tempMoveBonus += cardPower.value;
				this.board.validatePlayerMovement(this.characters[this.gameService.currPlayer].movement + this.tempMoveBonus, this.characters[this.gameService.currPlayer].location);
				break;
			case 5: // gain extra XP
				this.gainXPBonus(cardPower.value);
				break;
			case 6: // move to any adjacent or diagonal tile
				this.board.validatePlayerMovement(this.characters[this.gameService.currPlayer].movement + this.tempMoveBonus, this.characters[this.gameService.currPlayer].location);
				this.board.validateAdjacentMovement(this.characters[this.gameService.currPlayer].location, cardPower.value > 0);
				break;
			case 7: // unassigned
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
			case 12: // force Enemy to reroll
				this.action.cardRoll = this.action.dieRoll();
				this.action.calcStats(this.activeCard);
				break;
			case 13: // discard an Enemy without fighting it
			case 14: // discard a Trap without fighting it
				this.discardCard(this.activeCard);
				this.useCard(this.activeCard);
				break;
			case 15: // defeat an Enemy before you roll
			case 16: // defeat a Trap before you roll
				this.action.playerWin = true;
				break;
			case 17: // increase your attack vs Enemies
				this.action.modifiers.vsEnemies += cardPower.value;
				if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
				break;
			case 18: // increase your attack vs Traps
				this.action.modifiers.vsTraps += cardPower.value;
				if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
				break;
			case 19: // increase your attack roll
				this.action.modifiers.allRolls += cardPower.value;
				if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
				break;
			case 20: // reduce an Enemy's Brains
				this.action.modifiers.enBrains += cardPower.value;
				if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
				break;
			case 21: // reduce an Enemy's Brawn
				this.action.modifiers.enBrawn += cardPower.value;
				if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
				break;
			case 22: // reduce an Enemy's Bravado
				this.action.modifiers.enBravado += cardPower.value;
				if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
				break;
			case 23: // reduce an Enemy's die roll
				this.action.modifiers.enemyRoll += cardPower.value;
				if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
				break;
			case 24: // reduce a Trap's die roll
				this.action.modifiers.trapRoll += cardPower.value;
				if (this.action.selectedCard !== null) this.action.calcStats(this.action.cards[this.action.selectedCard]);
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
		this.xpMinOnly = false;
		this.numToDraw = 1;
		this.players.find(player => player.playerNum === this.gameService.currPlayer).expireThisTurnItems();
		this.gameService.turnStep = 0;
		this.gameService.currPlayer++;
	}
}
