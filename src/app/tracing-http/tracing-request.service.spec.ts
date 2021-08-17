import { TestBed } from '@angular/core/testing';

import { TracingRequestService } from './tracing-request.service';

describe('TracingRequestService', () => {
  let service: TracingRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracingRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
