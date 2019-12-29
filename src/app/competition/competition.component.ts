import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../players.service';
import { PlaymodeService } from './../playmode.service';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit {

  get players(): number {
    return this.playersService.playersValue;
  }

  get playmode(): number {
    return this.playmodeService.playmodeValue;
  }
  constructor(private playersService: PlayersService, private playmodeService: PlaymodeService) { }

  ngOnInit() {
  }

}
