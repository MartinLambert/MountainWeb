import { BrowserModule } from '@angular/platform-browser';
import { NgModule      } from '@angular/core';

import { AppRoutingModule   } from './app-routing.module';
import { AppComponent       } from './app.component';
import { BoardComponent     } from './game/board/board.component';
import { PlayerComponent    } from './game/player/player.component';
import { CardsComponent     } from './game/cards/cards.component';
import { CardComponent      } from './game/card/card.component';
import { CardRatioDirective } from './game/card-ratio.directive';
import { CurrentComponent } from './game/current/current.component';
import { StartupComponent } from './game/startup/startup.component';

@NgModule({
	declarations: [
		AppComponent,
		BoardComponent,
		PlayerComponent,
		CardsComponent,
		CardComponent,
		CardRatioDirective,
		CurrentComponent,
		StartupComponent
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
