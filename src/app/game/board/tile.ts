export class Tile {
	visible: boolean;
	locked: boolean;
	valid: boolean;
	doors: {
		north: boolean;
		east: boolean;
		south: boolean;
		west: boolean;
	};
	level: number;
	img: string;
	rotation: number;
}
