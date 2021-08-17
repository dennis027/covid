import { TestBed } from '@angular/core/testing';

import { PatientInputService } from './patient-input.service';

describe('PatientInputService', () => {
  let service: PatientInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
