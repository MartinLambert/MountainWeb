import {Card} from '../card/card';
import {CardType, GemType, ItemType, TurnStepType} from '../types';

export const CARDS: Card[][] = [[
	{
		id:     101,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Metal Detector',
			img:     '',
			text:    '+1 XP when<br>trading in cards',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    5,
			value:    1,
			usable:   [TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Bag of Breadcrumbs',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     102,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.permanent,
			name:    'Rollerblades',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Ball of Twine',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     103,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: -1
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Chalk',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     104,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Dummy',
			img:     '',
			text:    'Defeat a trap',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    16,
			value:    1,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'A Fine Hat',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     105,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Divining Rod',
			img:     '',
			text:    'Move to any portal',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    2,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Flask',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     106,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:    ItemType.useOnce,
			name:    'Firecracker',
			img:     '',
			text:    'Move to any<br>adjacent space',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    6,
			value:    0,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Fragrant Herbs',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     107,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Glasses',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     108,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    2,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.enBonus],
			rightGem: 2
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Jewelry',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     109,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Rubber Ball',
			img:     '',
			text:    'Discard an enemy<br>before you roll',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    13,
			value:    1,
			usable:   [TurnStepType.preCombat],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Parchment &amp; Quill',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     110,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Bandage',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    1,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Pocket Calculator',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     111,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Textbook',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     201,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.enBonus],
			rightGem: 2
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Boxing Gloves',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     202,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Can of Spinach',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     203,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Bell',
			img:     '',
			text:    'Discard an enemy<br>before you roll',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    13,
			value:    1,
			usable:   [TurnStepType.preCombat],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Cleaver',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     204,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Gardening Gloves',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     205,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Field Guide',
			img:     '',
			text:    '+1 XP when<br>trading in cards',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    5,
			value:    1,
			usable:   [TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Glowing Pebble',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     206,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: -1
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Hardtack',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     207,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Bag of Sand',
			img:     '',
			text:    'Defeat a trap',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    16,
			value:    1,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Hiking Boots',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     208,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Sledgehammer',
			img:     '',
			text:    'Move to any<br>adjacent space',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    6,
			value:    0,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Padded Jacket',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     209,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Gauze',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    1,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Plastic Bat',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     210,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Geiger Counter',
			img:     '',
			text:    'Move to any portal',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    2,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Potted Meat Food Product',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     211,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.permanent,
			name:    'Toboggan',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Slingshot',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: 1, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     301,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Long Pole',
			img:     '',
			text:    'Defeat a trap',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    16,
			value:    1,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Fancy Vest',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     302,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Tracking Device',
			img:     '',
			text:    'Move to any portal',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    2,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Flare',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     303,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Moss',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    1,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Flashlight',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     304,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Flint and Steel',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     305,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Harmonica',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     306,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Shiny Bauble',
			img:     '',
			text:    'Discard an enemy<br>before you roll',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    13,
			value:    1,
			usable:   [TurnStepType.preCombat],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Inspirational Quotes',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     307,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Magnifying Glass',
			img:     '',
			text:    '+1 XP when<br>trading in cards',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    5,
			value:    1,
			usable:   [TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Leather Gloves',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     308,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.enBonus],
			rightGem: 2
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Pictures from Home',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     309,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.useOnce,
			name:    'Shovel',
			img:     '',
			text:    'Move to any<br>adjacent space',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Pocket Knife',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     310,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: -1
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Towel',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	},
	{
		id:     311,
		level:    0,
		cardType: CardType.starter,
		cardTop:  null,
		item: {
			type:     ItemType.permanent,
			name:    'Rope Ladder',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: {
			type:     ItemType.permanent,
			name:    'Vial of Quicksilver',
			img:     '',
			text:    '',
			stats:    { Brains: null, Brawn: null, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		}
	}

	], [

	{
		id:    1001,
		level:    1,
		cardType: CardType.event,
		cardTop: {
			name: 'Brief Reprieve',
			img:  '',
			text: 'Heal a wound',
			stats: null,
			power: 1
		},
		item:  null,
		item2: null
	},
	{
		id:    1002,
		level:    1,
		cardType: CardType.event,
		cardTop: {
			name: 'Cave-In',
			img:  '',
			text: 'Remove a tile',
			stats: null,
			power: 2
		},
		item:  null,
		item2: null
	},
	{
		id:    1003,
		level:    1,
		cardType: CardType.event,
		cardTop: {
			name: 'Flash Flood',
			img:  '',
			text: 'Disable an item',
			stats: null,
			power: 5
		},
		item:  null,
		item2: null
	},
	{
		id:    1004,
		level:    1,
		cardType: CardType.event,
		cardTop: {
			name: 'The Path Grows Clearer…',
			img:  '',
			text: 'Add a tile',
			stats: null,
			power: 3
		},
		item:  null,
		item2: null
	},
	{
		id:    1005,
		level:    1,
		cardType: CardType.event,
		cardTop: {
			name: 'Surge of Power',
			img:  '',
			text: 'Roll a die<ul><li>1: gain a wound</li><li>2–3: nothing happens</li><li>4+: heal a wound</li></ul>',
			stats: null,
			power: 4
		},
		item:  null,
		item2: null
	},

	{
		id:    1101,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Carefully Laid Trap',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 1, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Cheese!',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: null, Brawn: null, Bravado: null },
			power:    1,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: null
	},
	{
		id:    1102,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Collapsing Wall',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: null, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Open Passage',
			img:     '',
			text:    'Move to any adjacent tile',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    6,
			value:    0,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1103,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Cunning Trap',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 1, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Carrots!',
			img:     '',
			text:    'Heal one wound',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: null
	},
	{
		id:    1104,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Dart Trap',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: null, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Spring Mechanism',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1105,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Deafening Echoes',
			img:  '',
			text: '✕ = your Brains',
			stats: { Brains: -1, Brawn: null, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: -1
		},
		item2: null
	},
	{
		id:    1106,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Debris Pile',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 2, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Runestone',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1107,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Dense Smoke',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 1, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Guttering Torch',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 0
		},
		item2: null
	},
	{
		id:    1108,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Falling Rocks',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 2, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Big, Pointy Rock',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1109,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Falling Sand',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: null, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Fulgurite',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1110,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Lightning Sand',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 2, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Sand in Your Shoes',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1111,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Oubliette',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 2, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Discarded Rope',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1112,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Pit Trap',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 2, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Bullwhip',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1113,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Reflective Haze',
			img:  '',
			text: '✕ = your Bravado',
			stats: { Brains: null, Brawn: null, Bravado: -1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 1, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: null
	},
	{
		id:    1114,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Rolling Boulder',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 3, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Memory of Your Truly Epic Escape',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1115,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Scattered Pebbles',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 2, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Small Glowing Stone',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 0
		},
		item2: null
	},
	{
		id:    1116,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Slab of Rock',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 2, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Abrasive Powder',
			img:     '',
			text:    '+1 to all rolls',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    19,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1117,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Spear Trap',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: null, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Silvered Spear Tip',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1118,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Spike Trap',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 2, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Dismantled Trigger',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1119,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Wall of Force',
			img: '',
			text: '✕ = your Brawn',
			stats: {Brains: null, Brawn: -1, Bravado: null},
			power: 0,
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.trapBonus],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    1120,
		level:    1,
		cardType: CardType.trap,
		cardTop: {
			name: 'Water-filled Pit',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 1, Bravado: 2 },
			power: 0,
		},
		item: {
			type: ItemType.useOnce,
			name: 'Clear Lens',
			img: '',
			text: 'Defeat a trap',
			stats: {Brains: 0, Brawn: 0, Bravado: 0},
			power: 0,
			value: 1,
			usable: [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem: [GemType.vsEnemies],
			rightGem: 1
		},
		item2: null
	},

	{
		id:    1301,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Anaconda',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 1, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Regurgitated Capybara',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1302,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Angry Gibbon',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: 1, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Crude Spear',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1303,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Baboon',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 2, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Stone Knife',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1304,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Badger',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 3, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Honeycomb',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1305,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Bats',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 1, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name:    'Fast Food',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1306,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Boar',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 2, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Bacon!',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.enBravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1307,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Cave Octopus',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 1, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'A Very Fancy Hat',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1308,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Centipedes',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 1, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'That Creepy Crawly Feeling All Over…',
			img:     '',
			text:    'Discard an enemy<br>before you roll',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    3,
			value:    1,
			usable:   [TurnStepType.preCombat],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1309,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Chickcharney',
			img:  '',
			text: 'Owl monster of the Bahamas',
			stats: { Brains: 4, Brawn: 1, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Magic Feather',
			img:     '',
			text:    'Move to any occupied space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    7,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1310,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Coconut Crab',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 3, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Coconut',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.enBrawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1311,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Cougar',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 2, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.vsTraps],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    1312,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Crocodile',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 5, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Tough Hide',
			img:     '',
			text:    'Move to any occupied space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    7,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1313,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Dart Frog',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 1, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Poison Dart',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1314,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Drop Bear',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 3, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Where did that come from?',
			img:     '',
			text:    'Move to any occupied space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    7,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1315,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Fire Ants',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 1, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'A Great Source of Protein',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1316,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Gnomes',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 1, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Alchemical Elixir',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1317,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Grizzly',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 5, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Bear Pelt',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1318,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Hyenas',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 3, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.vsEnemies],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    1319,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Imp',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 1, Bravado: 1 },
			power: 0,
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Brimstone',
			img:     '',
			text:    'Discard an enemy<br>before you roll',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    13,
			value:    0,
			usable:   [TurnStepType.preCombat],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 0
		},
		item2: null
	},
	{
		id: 1320,
		level: 1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Jackalope',
			img:  '',
			text: 'Ferocious antlered rabbit of North America',
			stats: { Brains: 3, Brawn: 2, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Antlers',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1321,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Kangaroo',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 3, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Boomerang',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1322,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'King Cobra',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 2, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Cobra Fangs',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1323,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Komodo Dragon',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 4, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Scale Armor',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1324,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Koolakamba',
			img:  '',
			text: 'Legendary African ape',
			stats: { Brains: 1, Brawn: 4, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: -1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    1325,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Kumi Lizard',
			img:  '',
			text: 'Giant tree lizard of New Zealand',
			stats: { Brains: 2, Brawn: 1, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name: 'Heightened Awareness',
			img:  '',
			text: 'Draw a tile',
			stats: { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1326,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Menehune',
			img:  '',
			text: 'Tiny builders and tricksters of Hawaii',
			stats: { Brains: 5, Brawn: 1, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Enchanted Hammer',
			img:     '',
			text:    'Defeat a trap',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    16,
			value:    1,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1327,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Moles',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 2, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'A Convenient Hole',
			img:     '',
			text:    'Move to any adjacent space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    6,
			value:    0,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1328,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Mongoose',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 2, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Cobra Venom',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.enBrains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1329,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Mothman',
			img:  '',
			text: 'Bird-man of West Virginia',
			stats: { Brains: 2, Brawn: 4, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Tattered Wings',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1330,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Mountain Fennec',
			img:  '',
			text: 'Legendary fox of the Sahara',
			stats: { Brains: 2, Brawn: 3, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Foxtail',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1331,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Mountain Goat',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 3, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Impossible Passage',
			img:     '',
			text:    'Move to any space in this row',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    12,
			value:    0,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1332,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Musk Deer',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 1, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Fangs',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1333,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Onza',
			img:  '',
			text: 'Legendary South American jaguar',
			stats: { Brains: 1, Brawn: 3, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Claws',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1334,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Panther',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 3, Bravado: 3 },
			power: 0,
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Black Fur',
			img:     '',
			text:    'Discard an enemy<br>before you roll',
			stats:    {Brains: 0, Brawn: 0, Bravado: 0},
			power:    13,
			value:    1,
			usable:   [TurnStepType.preCombat],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1335,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Puma',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 2, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.allRolls],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    1336,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Python',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 2, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Shed Skin',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1337,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Rats',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 2, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name:    'A Less-than-Satisfying Meal',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1338,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Rattlesnake',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 2, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Rattle',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1339,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Recluse Spider',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 2, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name:    'Map in the Web',
			img:     '',
			text:    'Draw a tile',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    3,
			value:    1,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1340,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Scorpions',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 1, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name:    'Anti-Venom',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1341,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Skunk',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 1, Bravado: 4 },
			power: 0,
		},
		item: {
			type:     ItemType.permanent,
			name:    'Scent Gland',
			img:     '',
			text:    '',
			stats:    { Brains: -1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    1342,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Squirrels',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 2, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Pointy Stick',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1343,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Tasmanian Devil',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 2, Bravado: 1 },
			power: 0,
		},
		item: {
			type:     ItemType.useNow,
			name:    'Centripetal Force',
			img:     '',
			text:    'Move a tile',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    23,
			value:    1,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1344,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Tiger',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 4, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Tiger Claw',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1345,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Wandering Spider',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 1, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Carapace',
			img:     '',
			text:    'Defeat a trap',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    16,
			value:    1,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1346,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Wasps',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 1, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Teeny Tiny Wings',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1347,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Wolf',
			img:  '',
			text: '',
			stats: { Brains: 2, Brawn: 4, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Learn to Howl',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1348,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Wolpertinger',
			img:  '',
			text: 'German chimera',
			stats: { Brains: 1, Brawn: 3, Bravado: 2 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Tiny Wings',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    1349,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Young Bear',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 4, Bravado: 1 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Bear Pelt',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: -1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    1350,
		level:    1,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Zombie',
			img:  '',
			text: '',
			stats: { Brains: 1, Brawn: 1, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Rags',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	}

	], [

	{
		id:    2001,
		level:    2,
		cardType: CardType.event,
		cardTop: {
			name: 'Brief Reprieve',
			img:  '',
			text: 'Heal a wound',
			stats: { Brains: null, Brawn: null, Bravado: null },
			power: 1
		},
		item:  null,
		item2: null
	},
	{
		id:    2002,
		level:    2,
		cardType: CardType.event,
		cardTop: {
			name: 'Cave-In',
			img:  '',
			text: 'Remove a tile',
			stats: { Brains: null, Brawn: null, Bravado: null },
			power: 2
		},
		item:  null,
		item2: null
	},
	// { TODO: -1 to your next roll
	// 	id:    2003,
	// 	level:    2,
	// 	cardType: CardType.event,
	// 	cardTop: {
	// 		name: 'Earthquake',
	// 		img:  '',
	// 		text: '−1 to your next die roll',
	// 		stats: { Brains: null, Brawn: null, Bravado: null },
	// 		power: 0,
	// 	},
	// 	item:  null,
	// 	item2: null
	// },
	{
		id:    2004,
		level:    2,
		cardType: CardType.event,
		cardTop: {
			name: 'The path grows clearer',
			img:  '',
			text: 'Draw a tile',
			stats: { Brains: null, Brawn: null, Bravado: null },
			power: 3
		},
		item:  null,
		item2: null
	},
	{
		id:    2005,
		level:    2,
		cardType: CardType.event,
		cardTop: {
			name: 'Surge of Power',
			img:  '',
			text: 'Roll a die<ul><li>1–2: gain a wound</li><li>3–4: nothing happens</li><li>5+: heal a wound</li></ul>',
			stats: { Brains: null, Brawn: null, Bravado: null },
			power: 4
		},
		item:  null,
		item2: null
	},

	{
		id:    2101,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Crushing Walls',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 5, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2102,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Fire Pit',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 5, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Ever-Burning Torch',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: -1
		},
		item2: null
	},
	{
		id:    2103,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Giant Spider Web',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: null, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Silk Armor',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2104,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Hypnotic Cave Art',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: null, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Painted Spiral',
			img:     '',
			text:    'Discard an enemy',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2105,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Locked Chest',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: null, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Cursed Treasure',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: -2, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2106,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Razor Wire',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 4, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2107,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Tripwire Maze',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: null, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Lariat',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.vsEnemies],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2108,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Wall of Brambles',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 4, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Thorny Branch',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.vsTraps],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2109,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Wall of Flame',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: null, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Cleansing Fire',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2110,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Well-Hidden Trap',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 3, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'TBD',
			img:     '',
			text:    'Heal two wounds',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    2,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.allRolls],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2111,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Well-Placed Trap',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 3, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'A Protein-Rich Snack',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.vsEnemies],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2112,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Whirling Blades',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: null, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Gap Sliced Through Wall',
			img:     '',
			text:    'Move to any adjacent space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    6,
			value:    0,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2113,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Will o’ the Wisp',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: null, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name:    'Unexplored Pathways',
			img:     '',
			text:    'Draw 2 tiles',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    3,
			value:    2,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2114,
		level:    2,
		cardType: CardType.trap,
		cardTop: {
			name: 'Writhing Vines',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: null, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},

	{
		id:    2301,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Agogwe',
			img:  '',
			text: 'Legendary African Ape',
			stats: { Brains: 4, Brawn: 4, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2302,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Angry Mushrooms',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 4, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Cloud of Spores',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2303,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Banshee',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: null, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2304,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Bunyip',
			img:  '',
			text: 'Australian swamp monster',
			stats: { Brains: null, Brawn: 4, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2305,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Chuchunya',
			img:  '',
			text: 'Russian sasquatch',
			stats: { Brains: 4, Brawn: 5, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2306,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Chupacabra',
			img:  '',
			text: 'American dog-lizard',
			stats: { Brains: null, Brawn: 3, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2307,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Faun',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: null, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Pan Flute',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2308,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Ghoul',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 4, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2309,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Giant Sloth',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 4, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'A Sense of <u>Wrong</u>ness',
			img:     '',
			text:    'Defeat an enemy',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    15,
			value:    1,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2310,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Gibbon Ambush Party',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 6, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2311,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Gibbon Patrol',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 3, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Alarum',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2312,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Gibbon Scout',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 3, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name:    'Crude Map',
			img:     '',
			text:    'Draw a tile',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    3,
			value:    1,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2313,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Gnoll',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 4, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2314,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Goblin',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: null, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2315,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Kobold',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: null, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Pickaxe',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.vsTraps],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2316,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Kongamato',
			img:  '',
			text: 'African pterosaur',
			stats: { Brains: null, Brawn: 4, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.vsEnemies],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2317,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Kung-Fu Tortoise',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 4, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2318,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Land Shark',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 5, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Sharkskin Crampons',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.enBonus],
			rightGem: -1
		},
		item2: null
	},
	{
		id:    2319,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Lava Bear',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 4, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2320,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Lugat',
			img:  '',
			text: 'Albanian vampire',
			stats: { Brains: 5, Brawn: null, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2321,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Mapinguari',
			img:  '',
			text: 'South American sloth-ape',
			stats: { Brains: null, Brawn: 4, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2322,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Momo',
			img:  '',
			text: 'Missouri sasquatch',
			stats: { Brains: 5, Brawn: 5, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 3, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2323,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Nephilim',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 4, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Mighty Lance',
			img:     '',
			text:    'Discard an enemy<br>before you roll',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    13,
			value:    1,
			usable:   [TurnStepType.preCombat],
			disabled: false,
			leftGem:  [GemType.enBonus],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    2324,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Ogre',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 5, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 3, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2325,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Olitiau',
			img:  '',
			text: 'African giant bat',
			stats: { Brains: 5, Brawn: null, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 3 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2326,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Orang-bati',
			img:  '',
			text: 'Flying monkey of Indonesia',
			stats: { Brains: 4, Brawn: null, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2327,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Orang Pendek',
			img:  '',
			text: 'Ape-man of Sumatra',
			stats: { Brains: 5, Brawn: 5, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 3, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2328,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Ozark Howler',
			img:  '',
			text: 'North American antlered bear',
			stats: { Brains: null, Brawn: 4, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2329,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Pogeyan',
			img:  '',
			text: 'Legendary black tiger of India',
			stats: { Brains: null, Brawn: 5, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 3 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2330,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Poukai',
			img:  '',
			text: 'Māori giant eagle',
			stats: { Brains: 4, Brawn: 5, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Golden Feather',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2331,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Radioactive Moles',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: 4, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'A Glowing Hole',
			img:     '',
			text:    'Move to any portal',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    2,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2332,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Rat King',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: 4, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2333,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Redcap',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 5, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'A Red Cap',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2334,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Revenant',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 4, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.allRolls],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2335,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Rock Ants',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: null, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2336,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Salamander',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 4, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Eternal Flame',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [],
			rightGem: -2
		},
		item2: null
	},
	{
		id:    2337,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Sasquatch',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 5, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2338,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Sigbin',
			img:  '',
			text: 'Goat-like vampire of the Philippines',
			stats: { Brains: 4, Brawn: null, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2339,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Skunk Ape',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 3, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2340,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Small Giant',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 4, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Huge Shield',
			img:     '',
			text:    'Discard an enemy<br>before you roll',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    13,
			value:    1,
			usable:   [TurnStepType.preCombat],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn, GemType.Bravado],
			rightGem: -1
		},
		item2: null
	},
	{
		id:    2341,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Stollenwurm',
			img:  '',
			text: 'Swiss tunnel dragon',
			stats: { Brains: 4, Brawn: null, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Tunnel Through the Wall',
			img:     '',
			text:    'Move to any space in this row',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    12,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2342,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Tatzelwurm',
			img:  '',
			text: 'Giant cat-faced lizard of Austria',
			stats: { Brains: 4, Brawn: null, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2343,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Tsuchinoko',
			img:  '',
			text: 'Intelligent Japanese flying snake',
			stats: { Brains: 5, Brawn: null, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 3, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2344,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Urayuli',
			img:  '',
			text: 'Alaskan yeti',
			stats: { Brains: 5, Brawn: 3, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2345,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Waheela',
			img:  '',
			text: 'Canadian dog-bear',
			stats: { Brains: 4, Brawn: 4, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2346,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Warg',
			img:  '',
			text: '',
			stats: { Brains: 4, Brawn: 5, Bravado: 3 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2347,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Yateveo',
			img:  '',
			text: 'Murderous African tree',
			stats: { Brains: null, Brawn: 3, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Questionable Fruit',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    2348,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Yeren',
			img:  '',
			text: 'Chinese ape-man',
			stats: { Brains: 4, Brawn: 3, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2349,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Yeti',
			img:  '',
			text: '',
			stats: { Brains: 3, Brawn: 5, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    2350,
		level:    2,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Yowie',
			img:  '',
			text: 'Legendary Australian ape',
			stats: { Brains: 5, Brawn: 3, Bravado: 4 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 2
		},
		item2: null
	}

	], [

	{
		id:    3001,
		level:    3,
		cardType: CardType.event,
		cardTop: {
			name: 'Brief Reprieve',
			img:  '',
			text: 'Heal a wound',
			stats: { Brains: null, Brawn: null, Bravado: null },
			power: 1
		},
		item:  null,
		item2: null
	},
	{
		id:    3002,
		level:    3,
		cardType: CardType.event,
		cardTop: {
			name: 'Cave-In',
			img:  '',
			text: 'Remove a tile',
			stats: { Brains: null, Brawn: null, Bravado: null },
			power: 2
		},
		item:  null,
		item2: null
	},
	{
		id:    3003,
		level:    1,
		cardType: CardType.event,
		cardTop: {
			name: 'The Path Grows Clearer…',
			img:  '',
			text: 'Add a tile',
			stats: null,
			power: 3
		},
		item:  null,
		item2: null
	},
	{
		id:    3004,
		level:    1,
		cardType: CardType.event,
		cardTop: {
			name: 'Phase Shift',
			img:  '',
			text: 'Move to any space in your row',
			stats: null,
			power: 3
		},
		item:  null,
		item2: null
	},
	{
		id:    3005,
		level:    1,
		cardType: CardType.event,
		cardTop: {
			name: 'Surge of Power',
			img:  '',
			text: 'Roll a die<ul><li>1–3: gain a wound</li><li>4–5: nothing happens</li><li>6+: heal a wound</li></ul>',
			stats: null,
			power: 4
		},
		item:  null,
		item2: null
	},

	{
		id:    3101,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Acid Spray',
			img:  '',
			text: '',
			stats: { Brains: 7, Brawn: null, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3102,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Bladed Pendulums',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 8, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Very Large, Light Blade',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3103,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Crashing Boulder',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 8, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useNext,
			name:    'Hole Smashed in Wall',
			img:     '',
			text:    'Move to any space in this row',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    12,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3104,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Distorted Gravity',
			img:  '',
			text: '',
			stats: { Brains: 8, Brawn: null, Bravado: null },
			power: 0,
		},
		item: {
			type: ItemType.useOnce,
			name: 'Delayed Head Rush',
			img: '',
			text: 'Heal a wound',
			stats: {Brains: null, Brawn: null, Bravado: null},
			power: 1,
			value: 1,
			usable: [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem: [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3105,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Electrified Floor',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 7, Bravado: null },
			power: 0,
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 0, Bravado: 1 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3106,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Illusionary Floor',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: null, Bravado: 8 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 2, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3107,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Impenetrable Darkness',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: null, Bravado: 8 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Echolocation',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.enBonus],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    3108,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Insidious Trap',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: 5, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Free Gift',
			img:     '',
			text:    'Increase your lowest attribute by 1',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    11,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.enBonus],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3109,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Loose Stalactites',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 7, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Stone Lance',
			img:     '',
			text:    'Defeat a trap',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    16,
			value:    1,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3110,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Masterful Trap',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: 5, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Nicely Wrapped Present',
			img:     '',
			text:    'Increase your lowest attribute by 1',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    11,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.enBonus],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3111,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Maze of Mirrors',
			img:  '',
			text: '',
			stats: { Brains: 7, Brawn: null, Bravado: null },
			power: 0,
		},
		item: {
			type:     ItemType.useNow,
			name:    'Periscope',
			img:     '',
			text:    'Draw two tiles',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    3,
			value:    2,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3112,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Rope Bridge',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: null, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 1, Brawn: 1, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3113,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Slimy, Glowing Pit',
			img:  '',
			text: '',
			stats: { Brains: 8, Brawn: null, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Luminous Moss',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 1, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3114,
		level:    3,
		cardType: CardType.trap,
		cardTop: {
			name: 'Swarm of Bugs',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: null, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name:    'Yum',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},

	{
		id:    3301,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Asanbosam',
			img:  '',
			text: 'Asante vampire',
			stats: { Brains: 7, Brawn: null, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 3, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3302,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Baobhan Sith',
			img:  '',
			text: 'Scottish vampire',
			stats: { Brains: 6, Brawn: 6, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    'Increase your <b>Brawn</b> by 1',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    9,
			value:    1,
			usable:   [TurnStepType.postCombat],
			disabled: false,
			leftGem:  [GemType.enBravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    3303,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Basilisk',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 6, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn, GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    3304,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Bluecap',
			img:  '',
			text: 'English mine ghost',
			stats: { Brains: 7, Brawn: null, Bravado: 6 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Spectral Luminescence',
			img:     '',
			text:    'Move to any portal',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    2,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3305,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Cerberus',
			img:  '',
			text: '',
			stats: { Brains: 7, Brawn: 7, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 2, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.allRolls],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3306,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Chimera',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 7, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 3, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3307,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Cockatrice',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 6, Bravado: 6 },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name:    'TBD',
			img:     '',
			text:    'Increase your <b>Bravado</b> by 1',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    10,
			value:    1,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.enBrains],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    3308,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Dingonek',
			img:  '',
			text: 'Kenyan lake monster',
			stats: { Brains: null, Brawn: 7, Bravado: 6 },
			power: 0
		},
		item: {
			type:    ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    'Heal a wound',
			stats:    {Brains: 0, Brawn: 0, Bravado: 2},
			power:    1,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.vsEnemies],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3309,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Dokkaebi',
			img:  '',
			text: 'Korean goblins',
			stats: { Brains: 6, Brawn: 6, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'TBD',
			img:     '',
			text:    'Defeat a trap',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    14,
			value:    1,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3310,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Doppelgänger',
			img:  '',
			text: '✕ = current <b>Bravado</b> of player to your right',
			stats: { Brains: null, Brawn: null, Bravado: -1 },
			power: 0,
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 4 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Bravado],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3311,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Firebird',
			img:  '',
			text: '',
			stats: { Brains: 7, Brawn: null, Bravado: 6 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 3, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3312,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Griffin',
			img:  '',
			text: '',
			stats: { Brains: 8, Brawn: null, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 3, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3313,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Hellhound',
			img:  '',
			text: '',
			stats: { Brains: 7, Brawn: 7, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 2, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.vsEnemies],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3314,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Hibagon',
			img:  '',
			text: 'Japanese sasquatch',
			stats: { Brains: 6, Brawn: null, Bravado: 6 },
			power: 0
		},
		item: {
			type:     ItemType.useNow,
			name:    'TBD',
			img:     '',
			text:    'Increase your <b>Brains</b> by 1',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    8,
			value:    1,
			usable:   [TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.enBrawn],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    3315,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'J’ba Fofi',
			img:  '',
			text: 'Giant spider of the Congo',
			stats: { Brains: null, Brawn: 5, Bravado: 8 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 3 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3316,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Krasue',
			img:  '',
			text: 'Disembodied vampiric head of SE Asia',
			stats: { Brains: 5, Brawn: null, Bravado: 8 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 2, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3317,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Living Shadow',
			img:  '',
			text: '',
			stats: { Brains: 8, Brawn: null, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Shadowstep',
			img:     '',
			text:    'Move to any portal',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    2,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.vsTraps],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3318,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Mahamba',
			img:  '',
			text: 'Giant crocodile of the Congo',
			stats: { Brains: null, Brawn: 7, Bravado: 6 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Armored Hide',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 3, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3319,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Megaconda',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 6, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 3 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3320,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Mimic',
			img:  '',
			text: '✕ = current <b>Brawn</b> of player to your right',
			stats: { Brains: null, Brawn: -1, Bravado: null },
			power: 0,
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 4, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3321,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Minhocão',
			img:  '',
			text: 'South American giant serpent',
			stats: { Brains: 7, Brawn: 6, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 3, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3322,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Mngwa',
			img:  '',
			text: 'Giant black lion of Tanzania',
			stats: { Brains: null, Brawn: 7, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 3 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3323,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Mongolian Death Worm',
			img:  '',
			text: '',
			stats: { Brains: 7, Brawn: 7, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 3, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3324,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Namahage',
			img:  '',
			text: 'Japanese ogre',
			stats: { Brains: 7, Brawn: null, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 3 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3325,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Nandi Bear',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 8, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    'Heal a wound',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    1,
			value:    1,
			usable:   [TurnStepType.drawTile, TurnStepType.placeTile, TurnStepType.move, TurnStepType.drawCard, TurnStepType.preCombat, TurnStepType.postCombat, TurnStepType.xpEnd],
			disabled: false,
			leftGem:  [GemType.vsEnemies],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3326,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Nightstalker',
			img:  '',
			text: '',
			stats: { Brains: 8, Brawn: 8, Bravado: 8 },
			power: 0
		},
		item: {
			type:     ItemType.disAny,
			name:    'TBD',
			img:     '',
			text:    'Defeat an Enemy',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    15,
			value:    1,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [],
			rightGem: 0
		},
		item2: null
	},
	{
		id:    3327,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Ōmukade',
			img:  '',
			text: 'Giant Japanese centipede',
			stats: { Brains: 5, Brawn: null, Bravado: 8 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn, GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    3328,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Oni',
			img:  '',
			text: 'Japanese troll',
			stats: { Brains: 7, Brawn: 7, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 3, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3329,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Peluda',
			img:  '',
			text: 'Giant venomous porcupine of France',
			stats: { Brains: null, Brawn: 6, Bravado: 6 },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'TBD',
			img:     '',
			text:    'Move to any portal',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3330,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Ponaturi',
			img:  '',
			text: 'Māori goblins',
			stats: { Brains: 6, Brawn: null, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 3 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3331,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Pukwudgie',
			img:  '',
			text: 'Wampanoag goblin',
			stats: { Brains: 6, Brawn: null, Bravado: 6 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '+2 to all rolls',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    19,
			value:    2,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3332,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Quantum Moles',
			img:  '',
			text: '',
			stats: { Brains: 9, Brawn: null, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Portable Hole',
			img:     '',
			text:    'Move to any portal or occupied space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    24,
			value:    1,
			usable:   [TurnStepType.move],
			disabled: false,
			leftGem:  [GemType.allRolls],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3333,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Satori',
			img:  '',
			text: '✕ = current <b>Brains</b> of player to your right',
			stats: { Brains: -1, Brawn: null, Bravado: null },
			power: 0,
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    {Brains: 4, Brawn: 0, Bravado: 0},
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3334,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Shunka Warakin',
			img:  '',
			text: 'American dire wolf',
			stats: { Brains: null, Brawn: 5, Bravado: 8 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn, GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    3335,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Sirrush',
			img:  '',
			text: 'Babylonian hydra',
			stats: { Brains: 6, Brawn: 6, Bravado: 6 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.allRolls],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3336,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Snallygaster',
			img:  '',
			text: 'Giant bird-lizard of Maryland',
			stats: { Brains: 6, Brawn: 7, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 3, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3337,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Sphinx',
			img:  '',
			text: '',
			stats: { Brains: 8, Brawn: 5, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'TBD',
			img:     '',
			text:    'Defeat a trap',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [TurnStepType.preCombat, TurnStepType.postCombat],
			disabled: false,
			leftGem:  [GemType.allRolls],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3338,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Surma',
			img:  '',
			text: 'Finnish devil-dog',
			stats: { Brains: 6, Brawn: 6, Bravado: 6 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3339,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Troll',
			img:  '',
			text: '',
			stats: { Brains: null, Brawn: 8, Bravado: 5 },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'Petrified Club',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 3, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3340,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Vampire',
			img:  '',
			text: '',
			stats: { Brains: 8, Brawn: 5, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.useOnce,
			name:    'Mesmerism',
			img:     '',
			text:    'Discard an enemy',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    13,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3341,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Vilkati',
			img:  '',
			text: 'Latvian werewolf',
			stats: { Brains: 7, Brawn: 6, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    'Move an extra space',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    4,
			value:    1,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.vsTraps],
			rightGem: 3
		},
		item2: null
	},
	{
		id:    3342,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Vrykolakas',
			img:  '',
			text: 'Greek undead',
			stats: { Brains: 6, Brawn: null, Bravado: 7 },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn, GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    3343,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Wendigo',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: 8, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn, GemType.Bravado],
			rightGem: 1
		},
		item2: null
	},
	{
		id:    3344,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Werewolf',
			img:  '',
			text: '',
			stats: { Brains: 5, Brawn: 8, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.permanent,
			name:    'TBD',
			img:     '',
			text:    '',
			stats:    { Brains: 2, Brawn: 0, Bravado: 2 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brawn, GemType.Bravado],
			rightGem: 2
		},
		item2: null
	},
	{
		id:    3345,
		level:    3,
		cardType: CardType.enemy,
		cardTop: {
			name: 'Wyvern',
			img:  '',
			text: '',
			stats: { Brains: 6, Brawn: 7, Bravado: null },
			power: 0
		},
		item: {
			type:     ItemType.none,
			name:    '',
			img:     '',
			text:    '',
			stats:    { Brains: 0, Brawn: 0, Bravado: 0 },
			power:    0,
			value:    0,
			usable:   [],
			disabled: false,
			leftGem:  [GemType.Brains, GemType.Brawn, GemType.Bravado],
			rightGem: 1
		},
		item2: null
	}
],
[
	{
		id: 4001,
		level: 4,
		cardType: CardType.heart,
		cardTop: {
			name: 'Dragon',
			img:  '',
			text: 'In the heart of the mountain, a mighty dragon waits in its lair<br><br><br>Counts as both an Enemy and a Trap',
			stats: { Brains: 10, Brawn: 10, Bravado: 10 },
			power: 0
		},
		item: null,
		item2: null
	}
]];
