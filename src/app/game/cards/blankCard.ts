import { Card, CardType, GemType, ItemType } from './card';

export const blankCard: Card = {
	id: 0,
	level: 0,
	cardType: CardType.starter,
	cardName: 'Blank Card',
	cardImg: '',
	cardText: '',
	cardStats: null,
	itemType: ItemType.permanent,
	itemName: '',
	itemImg: '',
	itemText: 'Placeholder',
	itemStats: null,
	leftGem: GemType.none,
	rightGem: 0
};
