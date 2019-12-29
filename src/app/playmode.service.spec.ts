import { TestBed } from '@angular/core/testing';

import { PlaymodeService } from './playmode.service';

describe('PlaymodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaymodeService = TestBed.get(PlaymodeService);
    expect(service).toBeTruthy();
  });
});
