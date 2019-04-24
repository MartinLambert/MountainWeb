import { Stats } from '../stats';

// Each card has one CardType
export enum CardType {
	blank   = 'Blank',
	starter = 'Starter',
	enemy   = 'Enemy',
	trap    = 'Trap',
	event   = 'Event',
	heart   = 'Heart'
}

// One card may have multiple ItemTypes and GemTypes (except 'none'). The values are all prime numbers and are multiplied to determine the final GemType value.
export enum ItemType {
	none       =  0,
	permanent  =  2,
	useOnce    =  3,
	useNow     =  5,
	useNext    =  7,
	discAny    = 11,
	discTwo    = 13,
	tile       = 17,
	move       = 19,
	draw       = 23,
	preCombat  = 29,
	postCombat = 31,
	xp         = 37,
	anytime    = 41
}
export enum GemType {
	none      =  2,
	Brains    =  3,
	Brawn     =  5,
	Bravado   =  7,
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
	itemValue: number;
	itemUsed:  boolean;
	leftGem:   number;
	rightGem:  number;

	constructor() {
		this.id        = 0;
		this.level     = 0;
		this.cardType  = CardType.blank;
		this.cardName  = 'Blank Card';
		this.cardImg   = '';
		this.cardText  = '';
		this.cardStats = null;
		this.cardPower = 0;
		this.itemType  = ItemType.permanent;
		this.itemName  = '';
		this.itemImg   = '';
		this.itemText  = 'Placeholder';
		this.itemStats = null;
		this.itemPower = 0;
		this.itemValue = 0;
		this.itemUsed  = false;
		this.leftGem   = GemType.none;
		this.rightGem  = 0;
	}
}
