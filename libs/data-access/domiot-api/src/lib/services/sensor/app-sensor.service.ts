import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Device, DeviceService, Sensor } from '../../generated';

@Injectable({
  providedIn: 'root'
})
export class AppSensorService {

  constructor(private deviceService: DeviceService) { }

  /**
   * Get sensors of a device
   * @param siteId The siteId
   */
  public getSensors(deviceId: number): Observable<Array<Sensor>> {
    return this.deviceService.getDevice(deviceId)
      .pipe()
      .subscribe((devices: Array<Device>) => { return devices[0].sensors});

  }
}
