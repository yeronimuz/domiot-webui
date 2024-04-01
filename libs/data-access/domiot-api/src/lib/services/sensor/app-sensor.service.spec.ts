import { TestBed } from '@angular/core/testing';

import { AppSensorService } from './app-sensor.service';

describe('SensorService', () => {
  let service: AppSensorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSensorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
