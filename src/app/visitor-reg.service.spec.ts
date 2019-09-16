import { TestBed } from '@angular/core/testing';

import { VisitorRegService } from './visitor-reg.service';

describe('VisitorRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitorRegService = TestBed.get(VisitorRegService);
    expect(service).toBeTruthy();
  });
});
