export enum TilePower {
	none = 0,
	addBrains = 1,
	addBrawn = 2,
	addBravado = 3,
	drawTwo = 4,
	removeTile = 5,
	moveTile = 6
}

export class Tile {
	doors: {
		north:  boolean;
		east:   boolean;
		south:  boolean;
		west:   boolean;
	};
	img:      string;
	rotation: number;
	isPortal: boolean;
	power:    TilePower;

	constructor() { // builds a blank tile for empty spaces
		this.doors = {
			north: false,
			east:  false,
			south: false,
			west:  false
		};
		this.img      = '';
		this.rotation = 0;
		this.isPortal = false;
		this.power    = TilePower.none;
	}
}
