import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorGraphDataPipe } from './pipes/sensor-graph-data.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [SensorGraphDataPipe],
  providers: [SensorGraphDataPipe],
  exports: [SensorGraphDataPipe]
})
export class SensorValuesModule {
}
