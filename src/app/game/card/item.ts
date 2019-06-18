import {Stats} from '../stats';

// each item has one ItemType, and one or more TurnStepTypes and GemTypes
export enum ItemType {
	none      = 0,
	permanent = 1,
	useOnce   = 2,
	useNow    = 3,
	useNext   = 4,
	disAny    = 5,
}

export enum TurnStepType {
	drawTile   = 0,
	placeTile  = 1,
	move       = 2,
	drawCard   = 3,
	preCombat  = 4,
	postCombat = 5,
	xpEnd      = 6
}

export enum GemType {
	none      = 0,
	Brains    = 1,
	Brawn     = 2,
	Bravado   = 3,
	vsEnemies = 4,
	vsTraps   = 5,
	allRolls  = 6,
	enBrains  = 7,
	enBrawn   = 8,
	enBravado = 9,
	enBonus   = 10,
	trapBonus = 11
}

export class Item {
	type:     ItemType;
	name:     string;
	img:      string;
	text:     string;
	stats:    Stats;
	power:    number;
	value:    number;
	usable:   TurnStepType[];
	disabled: boolean;
	leftGem:  GemType[];
	rightGem: number;

	constructor() {
		this.type = ItemType.none;
		this.name = '';
		this.img = '';
		this.text = '';
		this.stats = null;
		this.power = 0;
		this.value = 0;
		this.usable = null;
		this.disabled = false;
		this.leftGem = [];
		this.rightGem = 0;
	}
}
