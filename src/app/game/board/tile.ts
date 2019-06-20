import {TilePower} from '../types';

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
		this.img      = 'blank';
		this.rotation = 0;
		this.isPortal = false;
		this.power    = TilePower.none;
	}
}
