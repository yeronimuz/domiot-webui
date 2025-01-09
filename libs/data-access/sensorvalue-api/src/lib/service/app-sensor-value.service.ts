import { Inject, Injectable } from '@angular/core';
import { SensorValueService } from '../../../../domiot-api/src/lib/generated';
import { SensorValueListResponse } from '../../../../domiot-api/src/lib/generated/model/sensorValueListResponse';
import { Observable } from 'rxjs';
import { APP_CONFIG } from '@domiot/app-config';

@Injectable({
  providedIn: 'root'
})
export class AppSensorValueService {

  constructor(@Inject(APP_CONFIG) private readonly appConfig: any, private readonly sensorvalueService: SensorValueService) {
    console.log(appConfig)
    sensorvalueService.configuration.basePath = this.appConfig.domiotApiUrl;
  }

  getSensorValuesBySensorIds(sensorIds: Array<number>, dtStart: string, dtEnd: string, samplingFactor: number): Observable<SensorValueListResponse> {
    return this.sensorvalueService.getSensorValues(sensorIds, dtStart, dtEnd, samplingFactor);
  }
}
