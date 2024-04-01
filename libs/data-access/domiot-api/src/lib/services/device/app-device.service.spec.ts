import { TestBed } from '@angular/core/testing';

import { AppDeviceService } from './app-device.service';

describe('DeviceService', () => {
  let service: AppDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
