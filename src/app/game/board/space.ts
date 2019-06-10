import { Tile } from './tile';

export class Space {
	hasTile: boolean;
	locked:  boolean;
	valid:   boolean;
	level:   number;
	bonus:   number;
	tile:    Tile;
}
