import { CardType, Stats } from '../types';
import { Item } from './item';

export class Card {
	id:       number;
	level:    number;
	cardType: CardType;
	cardTop: {
		name:   string;
		img:    string;
		text:   string;
		stats:  Stats;
		power:  number;
	};
	item:     Item;
	item2:    Item;

	constructor(isWound = false) {
		this.id       = 0;
		this.level    = 0;
		this.cardType = isWound ? CardType.wound : CardType.blank;
		this.cardTop  = {
			name:  isWound ? 'Wound' : 'Blank Card',
			img:  '',
			text: '',
			stats: null,
			power: 0
		};
		this.item     = new Item();
		this.item2    = null;
	}
}
