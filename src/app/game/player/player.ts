import { Stats } from '../types';
import { Card  } from '../card/card';

export class Player {
	id:               number;
	name:             string;
	shortName:        string;
	description:      string;
	playerPower:      number;
	powerName:        string;
	powerDescription: string;
	portrait:         string;
	headshot:         string;
	avatar:           string;
	avatarStyle:      { top: string, left: string };
	nativeStats:      Stats;
	calculatedStats:  Stats;
	movement:         number;
	location:         number;
	currRowBonus:     number;
	startLocation:    number;
	reduceNextRoll:   boolean;
	wounds:           Card[];
	items:            Card[];
	XP:               Card[];
}
