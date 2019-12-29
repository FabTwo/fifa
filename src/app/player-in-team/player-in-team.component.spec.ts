import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerInTeamComponent } from './player-in-team.component';

describe('PlayerInTeamComponent', () => {
  let component: PlayerInTeamComponent;
  let fixture: ComponentFixture<PlayerInTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerInTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerInTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
