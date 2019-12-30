import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule, MatFormFieldModule, MatRadioModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { PlayersService } from './players.service';
import { CompetitionComponent } from './competition/competition.component';
import { PlaymodeComponent } from './playmode/playmode.component';
import { PlayernameComponent } from './playername/playername.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    CompetitionComponent,
    PlaymodeComponent,
    PlayernameComponent
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
  providers: [ PlayersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
