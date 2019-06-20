import {GemType, ItemType, Stats, TurnStepType} from '../types';

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
