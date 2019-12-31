import { Component, OnInit } from '@angular/core';

import { PlaymodeService } from './../playmode.service';
import { PlayersService } from './../players.service';


@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  i: number;
  teams: number;

  get players(): number {
    return this.playersService.playersValue;
  }

  get playmode(): number {
    return this.playmodeService.playmodeValue;
  }

  /* teamsnumber() {
    if (this.teams !== 0) {
      this.teams = 0;
    }
    for (this.i = this.players; this.i > 1; this.i--) {
      this.teams = this.teams + this.i;
      console.log(this.teams);
    }
    return this.teams;
  } */

  constructor(private playersService: PlayersService,
              private playmodeService: PlaymodeService) { }

  arrayBuilder(i: number) {
    return new Array(i);
  }

  ngOnInit() {}

}
