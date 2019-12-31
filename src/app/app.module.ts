import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule, MatFormFieldModule, MatRadioModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { CompetitionComponent } from './competition/competition.component';
import { PlayerComponent } from './player/player.component';
import { PlayernameComponent } from './playername/playername.component';
import { PlaymodeComponent } from './playmode/playmode.component';

import { PlayernameService } from './playername.service';
import { PlaymodeService } from './playmode.service';
import { PlayersService } from './players.service';
import { TeamsComponent } from './teams/teams.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CompetitionComponent,
    PlaymodeComponent,
    PlayernameComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [ PlayersService,
              PlaymodeService,
              PlayernameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
