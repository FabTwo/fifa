import { Component, OnInit } from '@angular/core';

import { PlayernameService } from './../playername.service';
import { PlayersService } from './../players.service';

@Component({
  selector: 'app-playername',
  templateUrl: './playername.component.html',
  styleUrls: ['./playername.component.css']
})
export class PlayernameComponent implements OnInit {

  test: [];

  get players(): number {
    return this.playersService.playersValue;
  }

  // Irgendwie Array füllen
  set playername(value: []) {
    this.test = value;
    this.playernameService.playernameArray = this.test;
  }

  constructor(private playersService: PlayersService,
              private playernameService: PlayernameService) { }

  arrayBuilder(i: number) {
    return new Array(i);
  }

  ngOnInit() {
  }

}
