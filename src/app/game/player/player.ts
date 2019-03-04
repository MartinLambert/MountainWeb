import { DisplayStats, Stats } from '../stats';
import { Card  } from '../cards/card';

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
	displayStats:     DisplayStats;
	movement:         number;
	location:         number;
	campLocation:     number;
	wounds:           Card[];
	items:            Card[];
}
