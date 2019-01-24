import { BrowserModule    } from '@angular/platform-browser';
import { NgModule         } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent     } from './app.component';
import { BoardComponent   } from './game/board/board.component';
import { PlayerComponent  } from './game/player/player.component';
import { CardsComponent   } from './game/cards/cards.component';

@NgModule({
	declarations: [
		AppComponent,
		BoardComponent,
		PlayerComponent,
		CardsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
