import { Component, OnInit } from '@angular/core';
import { PlaymodeService } from './../playmode.service';

@Component({
  selector: 'app-playmode',
  templateUrl: './playmode.component.html',
  styleUrls: ['./playmode.component.css']
})
export class PlaymodeComponent implements OnInit {

  get data(): number {
    return this.playmodeService.playmodeValue;
  }
  set data(value: number) {
    this.playmodeService.playmodeValue = value;
  }

  constructor(private playmodeService: PlaymodeService) { }

  ngOnInit() {
  }

}
