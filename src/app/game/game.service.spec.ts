import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
	beforeEach(() => TestBed.configureTestingModule({}));

	it('should be created', () => {
		const service: GameService = TestBed.get(GameService);
		expect(service).toBeTruthy();
	});

	it('private variables exist and are the right types', () => {
		const service: GameService = TestBed.get(GameService);
		expect(service.numPlayers).not.toBeNaN();
		expect(service.currPlayer).not.toBeNaN();
		expect(service.turnStep).not.toBeNaN();
	});
});
