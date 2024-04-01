import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSensorValueService, SensorValueModel } from '@domiot/sensorvalue-api';
import { SensorValueListResponse } from '@domiot/data-access/domiot-api';
import { Observable } from 'rxjs';
import { LineChartModule } from '@swimlane/ngx-charts';
import { SensorGraphDataPipe } from '../pipes/sensor-graph-data.pipe';
import { SensorValuesModule } from '@domiot/sensor-values';

@Component({
  selector: 'domiot-sensor-values',
  standalone: true,
  imports: [CommonModule, LineChartModule, SensorValuesModule],
  templateUrl: './sensor-values.component.html',
  styleUrl: './sensor-values.component.scss'
})
export class SensorValuesComponent implements OnInit {
  sensorValues: SensorValueModel[] = [];
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
  xAxisLabel = 'Year';
  yAxisLabel = 'Population';
  timeline = true;

  colorScheme = 'cool';

  constructor(
    private appSensorValueService: AppSensorValueService,
    private sensorGraphDataPipe: SensorGraphDataPipe) {
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

  getSensorValues(sensorId: number, dtStart: string, dtEnd: string, offset: number, limit: number): Observable<SensorValueListResponse> {
    return this.appSensorValueService.getSensorValues(sensorId, dtStart, dtEnd, offset, limit);
  }

  ngOnInit(): void {
    this.getSensorValues(7, '2024-03-30T00:00:00', '2024-03-30T23:59:59', 0, 200)
      .pipe()
      .subscribe({
        next: (sensorValueListResponse: SensorValueListResponse) => {
          this.sensorValues = sensorValueListResponse.result ? sensorValueListResponse.result : [];
          console.log(sensorValueListResponse);
          // this.values = this.mapResponseToGraphData(this.sensorValues);
        },
        error: (error: Error) => {
          console.log(error);
        }
      });
  }

  private mapResponseToGraphData(sensorValues: SensorValueModel[]): any[] {
    return this.sensorGraphDataPipe.transform(sensorValues);
  }
}
