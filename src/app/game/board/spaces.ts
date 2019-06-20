import { Tile} from './tile';
import { Space } from './space';
import {TilePower} from '../types';

export const SPACES: Space[] = [
	{ hasTile: true, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile: { doors: {north: false, east: false, south: true, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile: { doors: {north: false, east: false, south: true, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile: { doors: {north: false, east: false, south: true, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile: { doors: {north: false, east: false, south: true, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile: { doors: {north: false, east: false, south: true, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile: { doors: {north: false, east: false, south: true, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile: { doors: {north: false, east: false, south: true, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile: { doors: {north: false, east: false, south: true, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true,  locked: true, valid: false, level:  4, bonus: 0, tile: { doors: {north: false, east: false, south: true, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus15.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 15, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus15.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus12.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 12, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus12.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus9.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 9, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus9.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus6.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 6, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus6.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus3.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  3, bonus: 3, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus3.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus10.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 10, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus:  0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus10.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus8.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 8, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus8.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus6.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 6, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus6.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus4.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 4, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus4.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus2.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  2, bonus: 2, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus2.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus5.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 5, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus5.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus4.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 4, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus4.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus3.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 3, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus3.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus2.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 2, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus2.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus1.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: false, locked: false, valid: false, level:  1, bonus: 1, tile: new Tile() },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'plus1.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile: { doors: {north: true, east: false, south: false, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile: { doors: {north: true, east: false, south: false, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile: { doors: {north: true, east: false, south: false, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile: { doors: {north: true, east: false, south: false, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile: { doors: {north: true, east: false, south: false, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile: { doors: {north: true, east: false, south: false, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile: { doors: {north: true, east: false, south: false, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile: { doors: {north: true, east: false, south: false, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked: false, valid: false, level:  0, bonus: 0, tile: { doors: {north: true, east: false, south: false, west: false}, img: '', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: true, locked:  true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },

	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } },
	{ hasTile: false, locked: true, valid: false, level: -1, bonus: 0, tile:
			{ doors: {north: false, east: false, south: false, west: false}, img: 'blank.png', rotation: 0, isPortal: false, power: TilePower.none } }
];
