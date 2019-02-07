import { Card, CardType, GemType, ItemType } from './card';

export const blankCard: Card = {
	id: 0,
	level: 0,
	cardType:  CardType.starter,
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
	leftGem:   GemType.none,
	rightGem:  0
};
