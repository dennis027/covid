import { TestBed } from '@angular/core/testing';

import { DoctorInputService } from './doctor-input.service';

describe('DoctorInputService', () => {
  let service: DoctorInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
