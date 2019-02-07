import { Stats } from '../stats';

// each card has a maximum of one CardType and one ItemType.
export enum CardType {
	starter = 'Starter',
	enemy   = 'Enemy',
	trap    = 'Trap',
	event   = 'Event',
	heart   = 'Heart'
}
export enum ItemType {
	none      = 'None',
	usable    = 'Usable',
	useOnce   = 'Use Once',
	useNow    = 'Use Now',
	useNext   = 'Use Next',
	discAny   = 'Discard Any',
	discTwo   = 'Discard Two',
	permanent = 'Permanent'
}

// One card may have multiple GemTypes (except 'none'). The values are all prime numbers and are multiplied to determine the final GemType value.
export enum GemType {
	none      = 2,
	Brains    = 3,
	Brawn     = 5,
	Bravado   = 7,
	vsEnemies = 11,
	vsTraps   = 13,
	allRolls  = 17,
	enBrains  = 19,
	enBrawn   = 23,
	enBravado = 29,
	enemyRoll = 31,
	trapRoll  = 37
}

export class Card {
	id:        number;
	level:     number;
	cardType:  CardType;
	cardName:  string;
	cardImg:   string;
	cardText:  string;
	cardStats: Stats;
	cardPower: number;
	itemType:  ItemType;
	itemName:  string;
	itemImg:   string;
	itemText:  string;
	itemStats: Stats;
	itemPower: number;
	leftGem:   number;
	rightGem:  number;
}
