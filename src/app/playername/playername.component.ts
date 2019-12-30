import { PlayernameService } from './../playername.service';
import { PlayersService } from './../players.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playername',
  templateUrl: './playername.component.html',
  styleUrls: ['./playername.component.css']
})
export class PlayernameComponent implements OnInit {

  get players(): number {
    return this.playersService.playersValue;
  }

  get playername(): any[] {
    return this.playernameService.playernameArray;
  }
  set playername(value: any[]) {
    this.playernameService.playernameArray = [];
  }

  constructor(private playersService: PlayersService,
              private playernameService: PlayernameService) { }

  public addresses: any[] = [{
    address: ''
  }];

  arrayOne(n: number): any[] {
    return Array(n);
  }

  addAddress() {
    this.addresses.push({
      address: ''
    });
  }

  logValue() {
    console.log(this.addresses);
  }

  removeAddress(i: number) {
    this.addresses.splice(i, 1);
  }

  ngOnInit() {
  }

}
