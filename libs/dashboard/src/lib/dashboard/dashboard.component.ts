import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorValuesComponent } from '../../../../sensor-values/src/lib/sensor-values/sensor-values.component';

@Component({
  selector: 'domiot-dashboard',
  standalone: true,
  imports: [CommonModule, SensorValuesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
