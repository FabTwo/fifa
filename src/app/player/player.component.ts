import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  set playernumber(value: number) {
    this.playersService.playersValue = value;
  }

  get playernumber(): number {
    return this.playersService.playersValue;
  }
  constructor(private playersService: PlayersService) { }

  ngOnInit() {
  }

}
