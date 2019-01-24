import { Stats } from '../stats';

export enum CardType {
	starter = 0,
	enemy   = 1,
	trap    = 2,
	event   = 3,
	heart   = 4
}

export enum ItemType {
	none      = 0,
	usable    = 1,
	useOnce   = 2,
	useNow    = 3,
	useNext   = 4,
	permanent = 5
}

export enum GemType {
	none      = 0,
	Brains    = 2,
	Brawn     = 3,
	Bravado   = 5,
	vsEnemies = 7,
	vsTraps   = 11,
	allRolls  = 13
}

export class Card {
	id:        number;
	level:     number;
	cardType:  CardType;
	cardName:  string;
	cardImg:   string;
	cardText:  string;
	cardStats: Stats;
	itemType:  ItemType;
	itemName:  string;
	itemImg:   string;
	itemText:  string;
	itemStats: Stats;
	leftGem:   number;
	rightGem:  number;
}
