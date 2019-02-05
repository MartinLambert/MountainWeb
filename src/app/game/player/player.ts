import { Stats } from '../stats';
import { Card  } from '../cards/card';

export class Player {
	id:               number;
	name:             string;
	description:      string;
	powerName:        string;
	powerDescription: string;
	portrait:         string;
	headshot:         string;
	avatar:           string;
	avatarStyle:      { top: number, left: number };
	stats:            Stats;
	displayStats:     Stats;
	location:         number;
	campLocation:     number;
	wounds:           Card[];
	items:            Card[];
}
