import { SensorGraphDataPipe } from './sensor-graph-data.pipe';
import { SensorValueModel } from '@domiot/sensorvalue-api';

describe('SensorGraphDataPipe', () => {
  const pipe = new SensorGraphDataPipe();
  it('create an instance', () => {
    const pipe = new SensorGraphDataPipe();
    expect(pipe).toBeTruthy();
  });

  it('converts one sensor to graph data', () => {
    const sensorData: SensorValueModel[] = [
      {
        sensor: { id: 1, mqttTopic: {}, type: 'GAS_SENSOR' },
        timestamp: '2024-01-01T00:00:00',
        value: 123.6
      },
      {
        sensor: { id: 2, mqttTopic: {}, type: 'GAS_SENSOR' },
        timestamp: '2024-01-01T01:00:00',
        value: 124.6
      }
    ];

    const result = pipe.transform(sensorData);
    expect(result).toEqual([{
      'name': 'GAS_SENSOR',
      'series': [
        {
          'name': '2024-01-01T00:00:00',
          'value': 123.6
        },
        {
          'name': '2024-01-01T01:00:00',
          'value': 124.6
        }
      ]
    }]);
  });

  it('converts more sensors to graph data', () => {
    const sensorData: SensorValueModel[] = [
      {
        sensor: { id: 2, mqttTopic: {}, type: 'POWER_AC' },
        timestamp: '2024-01-01T00:00:00',
        value: 123.6
      },
      {
        sensor: { id: 2, mqttTopic: {}, type: 'GAS_SENSOR' },
        timestamp: '2024-01-01T01:00:00',
        value: 124.6
      }
    ];

    const result = pipe.transform(sensorData);
    expect(result).toEqual([
      {
        'name': 'POWER_AC',
        'series': [
          {
            'name': '2024-01-01T00:00:00',
            'value': 123.6
          }
        ]
      },
      {
        "name": "GAS_SENSOR",
        "series": [
        {
          'name': '2024-01-01T01:00:00',
          'value': 124.6
        }
      ]
  }])
  });
});
