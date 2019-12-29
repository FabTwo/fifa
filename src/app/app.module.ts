import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayersService } from './players.service';
import { CompetitionComponent } from './competition/competition.component';
import { PlaymodeComponent } from './playmode/playmode.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CompetitionComponent,
    PlaymodeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [ PlayersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
