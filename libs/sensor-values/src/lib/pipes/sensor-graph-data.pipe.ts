import { Pipe, PipeTransform } from '@angular/core';
import { SensorValueModel } from '@domiot/sensorvalue-api';
import { SingleSeries } from '@swimlane/ngx-charts';

@Pipe({
  name: 'sensorGraphData',
})
export class SensorGraphDataPipe implements PipeTransform {
  transform(sensorValues: SensorValueModel[]): any[] {
    if (!sensorValues || sensorValues.length === 0) {
      return [];
    }

    const transformedData: any[] = [];

    sensorValues.forEach(sensorValue => {
      const sensorType = sensorValue.sensor?.type || 'Unknown';
      const timestamp = sensorValue.timestamp || '';
      const value = sensorValue.value || 0;

      // Check if this sensor type already exists in transformedData
      const existingSensor = transformedData.find(item => item.name === sensorType);

      if (existingSensor) {
        // Add a new data point to the existing series
        existingSensor.series.push({ name: timestamp, value: value });
      } else {
        // Create a new sensor entry
        transformedData.push({
          name: sensorType,
          series: [{ name: timestamp, value: value, min:2835, max:2837, label: 'yo!' }]
        });
      }
    });
    console.log(transformedData);

    return transformedData;
  }
}
