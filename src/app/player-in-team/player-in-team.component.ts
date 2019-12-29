import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-player-in-team',
  templateUrl: './player-in-team.component.html',
  styleUrls: ['./player-in-team.component.css']
})
export class PlayerInTeamComponent implements OnInit {

  get data(): number {
    return this.playersService.playersValue;
  }
  set data(value: number) {
    this.playersService.playersValue = value;
  }
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
  }

}
