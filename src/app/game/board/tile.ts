export class Tile {
	visible:  boolean;
	locked:   boolean;
	valid:    boolean;
	doors: {
		north:  boolean;
		east:   boolean;
		south:  boolean;
		west:   boolean;
	};
	level:    number;
	img:      string;
	rotation: number;

	constructor(lvl?: number) {
		this.visible =  false;
		this.locked =   false;
		this.valid =    false;
		this.doors = {
			north:        false,
			east:         false,
			south:        false,
			west:         false
		};
		this.level =    lvl || 0;
		this.img =      '';
		this.rotation = 0;
	}
}
