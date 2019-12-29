import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerValue: any;

  constructor() { }

  ngOnInit() {
  }

  updateSetting(event) {
    this.playerValue = event.value;
  }

}
