import { TestBed } from '@angular/core/testing';

import { AppActuatorService } from './app-actuator.service';

describe('ActuatorService', () => {
  let service: AppActuatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppActuatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
