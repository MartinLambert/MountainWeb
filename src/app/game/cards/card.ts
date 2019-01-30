import { Stats } from '../stats';

// each card has a maximum of one CardType and one ItemType.
export enum CardType {
	starter = 'starter',
	enemy   = 'enemy',
	trap    = 'trap',
	event   = 'event',
	heart   = 'heart'
}
export enum ItemType {
	none      = 'none',
	usable    = 'usable',
	useOnce   = 'useOnce',
	useNow    = 'useNow',
	useNext   = 'useNext',
	permanent = 'permanent'
}

// One card may have multiple GemTypes (except 'none'). The values are all prime numbers and are multiplied to determine the final GemType value.
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
