import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSensorValueService } from '@domiot/sensorvalue-api';
import { SensorValueGraphResponse, SensorValueListResponse } from '@domiot/domiot-api';
import { Observable } from 'rxjs';
import { LineChartModule } from '@swimlane/ngx-charts';
import { SensorValuesModule } from '@domiot/sensor-values';
import { AppSensorGraphDataService } from '@domiot/sensor-graphdata-api';

@Component({
  selector: 'domiot-sensor-values',
  standalone: true,
  imports: [CommonModule, LineChartModule, SensorValuesModule],
  templateUrl: './sensor-values.component.html',
  styleUrl: './sensor-values.component.scss'
})
export class SensorValuesComponent implements OnInit {
  sensorValues: any[] = [];
  values: any[] = [];
  view: [number, number] = [700, 300];

  // options
  legend = true;
  showLabels = true;
  animations = true;
  xAxis = true;
  yAxis = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  yAxisLabel = 'kWh';
  timeline = true;
  yAxisMin: number | undefined = 0;
  yAxisMax: number | undefined = 0;

  colorScheme = 'cool';

  constructor(
    private readonly appSensorValueService: AppSensorValueService,
    private readonly sensorGraphdataService: AppSensorGraphDataService) {
  }


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getSensorValuesBySensorIds(sensorId: number, dtStart: string, dtEnd: string, samplingFactor: number): Observable<SensorValueListResponse> {
    return this.appSensorValueService.getSensorValuesBySensorIds(new Array<number>(sensorId), dtStart, dtEnd, samplingFactor);
  }

  getGraphDataBySensorIds(sensorIds: Array<number>, dtStart: string, dtEnd: string, samplingFactor: number): Observable<SensorValueGraphResponse> {
    return this.sensorGraphdataService.getSensorValueGraphData(sensorIds, dtStart, dtEnd, samplingFactor);
  }

  ngOnInit(): void {
    // FIXME: single sensorId not working
    this.getGraphDataBySensorIds(new Array<number>(7, 7), '2025-01-03T00:00:00', '2025-01-05T23:59:00', 1)
      .pipe()
      .subscribe({
        next: (response: SensorValueGraphResponse) => {

          if (response.metaData) {
            const keys = Object.keys(response.metaData);
            this.yAxisMin = response.metaData[`${keys[0]}`].min;
            this.yAxisMax = response.metaData[`${keys[0]}`].max;
          }
          this.sensorValues = response.values!;
        },
        error: (error: Error) => {
          console.log(error);
        }
      });
  }
}
