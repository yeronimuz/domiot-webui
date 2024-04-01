import { TestBed } from '@angular/core/testing';

import { AppSensorValueService } from './app-sensor-value.service';

describe('SensorValueService', () => {
  let service: AppSensorValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSensorValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
