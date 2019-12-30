import { TestBed } from '@angular/core/testing';

import { PlayernameService } from './playername.service';

describe('PlayernameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayernameService = TestBed.get(PlayernameService);
    expect(service).toBeTruthy();
  });
});
