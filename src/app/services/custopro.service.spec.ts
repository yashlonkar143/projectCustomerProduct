import { TestBed } from '@angular/core/testing';

import { CustoproService } from './custopro.service';

describe('CustoproService', () => {
  let service: CustoproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustoproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
