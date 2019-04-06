import { TestBed } from '@angular/core/testing';

import { RouteGuradeService } from './route-gurade.service';

describe('RouteGuradeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteGuradeService = TestBed.get(RouteGuradeService);
    expect(service).toBeTruthy();
  });
});
