import { SensorTypeModel } from './sensorType.model';
import { DomiotParameterModel } from './domiotParameter.model';
import { MqttTopicModel } from './mqttTopic.model';

export class SensorModel {
  /**
   * unique identification
   */
  readonly id: number | undefined;
  type: SensorTypeModel | undefined;
  name?: string;
  description?: string;
  parameters?: Array<DomiotParameterModel>;
  mqttTopic: MqttTopicModel | undefined;
}
