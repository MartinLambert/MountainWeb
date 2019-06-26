export class Stats {
	Brains:  number;
	Brawn:   number;
	Bravado: number;
}

// each item has one ItemType, and zero or more TurnStepTypes and GemTypes
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

// Each card has one CardType
export enum CardType {
	blank   = 'Blank',
	wound   = 'Wound',
	starter = 'Starter',
	enemy   = 'Enemy',
	trap    = 'Trap',
	event   = 'Event',
	heart   = 'Heart'
}

export enum TilePower {
	none       = 0,
	addBrains  = 1,
	addBrawn   = 2,
	addBravado = 3,
	drawTwo    = 4,
	removeTile = 5,
	moveTile   = 6
}
