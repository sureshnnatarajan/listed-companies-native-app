import { TestBed } from '@angular/core/testing';

import { VaanigaServiceService } from './vaaniga-service.service';

describe('VaanigaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VaanigaServiceService = TestBed.get(VaanigaServiceService);
    expect(service).toBeTruthy();
  });
});
