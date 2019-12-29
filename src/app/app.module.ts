import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule, MatRadioModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayerInTeamComponent } from './player-in-team/player-in-team.component';

import { PlayersService } from './players.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerInTeamComponent
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
