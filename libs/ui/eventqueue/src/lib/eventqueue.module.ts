import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventQueueService } from './service/event-queue.service';
import { EventType } from '@angular/router';

@NgModule({
  imports: [CommonModule],
  providers: [EventQueueService],
})
export class EventqueueModule {}
