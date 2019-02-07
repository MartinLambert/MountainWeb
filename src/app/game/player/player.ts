import { DisplayStats, Stats } from '../stats';
import { Card  } from '../cards/card';

export class Player {
	id:               number;
	name:             string;
	description:      string;
	playerPower:      number;
	powerName:        string;
	powerDescription: string;
	portrait:         string;
	headshot:         string;
	avatar:           string;
	avatarStyle:      { top: number, left: number };
	stats:            Stats;
	displayStats:     DisplayStats;
	location:         number;
	campLocation:     number;
	wounds:           Card[];
	items:            Card[];
}
