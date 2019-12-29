import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaymodeComponent } from './playmode.component';

describe('PlaymodeComponent', () => {
  let component: PlaymodeComponent;
  let fixture: ComponentFixture<PlaymodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaymodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaymodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
