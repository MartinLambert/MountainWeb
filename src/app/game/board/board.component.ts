import { Component, OnInit } from '@angular/core';
import { GameService       } from '../game.service';
import { Tile              } from './tile';

@Component({
	selector: 'hotm-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	spaces: Tile[];
	tiles: Tile[];

	constructor(private gameService: GameService) {}

	ngOnInit() {
		this.gameService.getBoard().subscribe(board => this.spaces = board);
		this.gameService.getTiles().subscribe(tiles => this.tiles = tiles);
	}

}
