import { SensorModel } from '../../../../domiot-api/src/lib/model/sensor.model';

export class SensorValueModel {
  sensor: SensorModel | null = null;
  /**
   * date-time of occurrence
   */
  timestamp: string | null = null;
  value: number | null = null;

}
