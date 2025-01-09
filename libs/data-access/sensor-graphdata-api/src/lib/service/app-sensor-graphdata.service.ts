import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG } from '@domiot/app-config';
import { SensorGraphDataService,  SensorValueGraphResponse} from '@domiot/domiot-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSensorGraphDataService {

  constructor(@Inject(APP_CONFIG) private readonly appConfig: any, private readonly sensorGraphDataService: SensorGraphDataService) {
    sensorGraphDataService.configuration.basePath = this.appConfig.domiotApiUrl;
  }

  public getSensorValueGraphData(sensorIds: Array<number>, start: string, end: string, samplingFactor?: number): Observable<SensorValueGraphResponse> {
    return this.sensorGraphDataService.getSensorValueGraphData(sensorIds, start, end, samplingFactor);
  }
}
