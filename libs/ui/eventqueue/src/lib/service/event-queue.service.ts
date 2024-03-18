import { Injectable } from '@angular/core';
import { AppEventType } from '../events/event.type';
import { filter, Observable, Subject } from 'rxjs';
import { AppEvent } from '../events/app.event.class';

@Injectable({
  providedIn: 'root'
})
export class EventQueueService {

  private eventBroker = new Subject<AppEvent<any>>();

  on(eventType: AppEventType): Observable<AppEvent<any>> {
    return this.eventBroker.pipe(filter(event => event.type === eventType));
  }

  dispatch<T>(event: AppEvent<T>): void {
    this.eventBroker.next(event);
  }
}
