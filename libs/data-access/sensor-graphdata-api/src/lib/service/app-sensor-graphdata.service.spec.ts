import { TestBed } from '@angular/core/testing';

import { AppSensorGraphDataService } from './app-sensor-graphdata.service';

describe('SensorGraphdataService', () => {
  let service: AppSensorGraphDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSensorGraphDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
