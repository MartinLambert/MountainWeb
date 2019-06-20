import { Tile} from './tile';
import { Space } from './space';
import {TilePower} from '../types';

export const SPACES: Space[] = [
	{ hasTile: true, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile:
			{ doors: {north: false, east: false, south: true, west: false}, img: 'heart1', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile:
			{ doors: {north: false, east: false, south: true, west: false}, img: 'heart2', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile:
			{ doors: {north: false, east: false, south: true, west: false}, img: 'heart3', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile:
			{ doors: {north: false, east: false, south: true, west: false}, img: 'heart4', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile:
			{ doors: {north: false, east: false, south: true, west: false}, img: 'heart5', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile:
			{ doors: {north: false, east: false, south: true, west: false}, img: 'heart6', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile:
			{ doors: {north: false, east: false, south: true, west: false}, img: 'heart7', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile:
			{ doors: {north: false, east: false, south: true, west: false}, img: 'heart8', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile:
			{ doors: {north: false, east: false, south: true, west: false}, img: 'heart9', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  15, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  15, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  12, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  12, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 9, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 9, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 6, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 6, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 3, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 3, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 10, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 10, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 8, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 8, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 6, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 6, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 4, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 4, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 2, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 2, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 5, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 5, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 4, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 4, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 3, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 3, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 2, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 2, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 1, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 1, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile:
			{ doors: {north: true, east: false, south: false, west: false}, img: 'base1', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile:
			{ doors: {north: true, east: false, south: false, west: false}, img: 'base2', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile:
			{ doors: {north: true, east: false, south: false, west: false}, img: 'base3', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile:
			{ doors: {north: true, east: false, south: false, west: false}, img: 'base4', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile:
			{ doors: {north: true, east: false, south: false, west: false}, img: 'base5', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile:
			{ doors: {north: true, east: false, south: false, west: false}, img: 'base6', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile:
			{ doors: {north: true, east: false, south: false, west: false}, img: 'base7', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile:
			{ doors: {north: true, east: false, south: false, west: false}, img: 'base8', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile:
			{ doors: {north: true, east: false, south: false, west: false}, img: 'base9', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank', rotation: 0, isPortal: false, power: TilePower.none } }
];
