import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'domiot-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
