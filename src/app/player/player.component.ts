import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

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
