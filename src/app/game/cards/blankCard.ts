import { Card, CardType, GemType, ItemType } from './card';

export const blankCard: Card = {
	id: 0,
	level: 0,
	cardType:  CardType.blank,
	cardName:  'Blank Card',
	cardImg:   '',
	cardText:  '',
	cardStats: null,
	cardPower: 0,
	itemType:  ItemType.permanent,
	itemName:  '',
	itemImg:   '',
	itemText:  'Placeholder',
	itemStats: null,
	itemPower: 0,
	itemValue: 0,
	itemUsed:  false,
	leftGem:   GemType.none,
	rightGem:  0
};
// TODO: use constructor in card class to eliminate the need for this
