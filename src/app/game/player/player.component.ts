import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Player      } from './player';

@Component({
	selector: 'hotm-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

	@Input() player: Player;

	constructor(private gameService: GameService) {
	}

	ngOnInit() {
	}

}
