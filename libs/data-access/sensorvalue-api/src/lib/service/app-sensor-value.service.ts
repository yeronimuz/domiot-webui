import { Inject, Injectable } from '@angular/core';
import { SensorValueService } from '../../../../domiot-api/src/lib/generated';
import { SensorValueListResponse } from '../../../../domiot-api/src/lib/generated/model/sensorValueListResponse';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '@domiot/app-config';

@Injectable({
  providedIn: 'root'
})
export class AppSensorValueService {

  constructor(@Inject(APP_CONFIG) private appConfig: any, private sensorvalueService: SensorValueService) {
    // sensorvalueService.defaultHeaders = sensorvalueService.defaultHeaders.set('Accept', '*/*')
    console.log(appConfig)
    sensorvalueService.configuration.basePath = this.appConfig.domiotApiUrl;
  }

  getSensorValues(sensorId: number, dtStart: string, dtEnd: string, offset: number, limit: number): Observable<SensorValueListResponse> {
    return this.sensorvalueService.getSensorValues(sensorId, dtStart, dtEnd, offset, limit);
  }
}
