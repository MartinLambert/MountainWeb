import { Tile } from './tile';

export const blankTile: Tile = {
	visible: false,
	doors: {
		north: false,
		east: false,
		south: false,
		west: false
	},
	locked: false,
	valid: false,
	level: 0,
	img: '',
	rotation: 0
};
