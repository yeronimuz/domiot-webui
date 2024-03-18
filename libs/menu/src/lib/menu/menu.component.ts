import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
// import { AuthService } from '@domiot/data-access/authorization';
import { AuthService } from '../../../../data-access/authorization/src/lib/service/auth.service';
import { EventQueueService } from '../../../../ui/eventqueue/src/lib/service/event-queue.service';
import { AppEventType } from '../../../../ui/eventqueue/src/lib/events/event.type';

@Component({
  selector: 'domiot-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  showMenu = false;
  authenticated = false;

  constructor(private authService: AuthService,
              private eventQueueService: EventQueueService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.eventQueueService.on(AppEventType.EnableMainMenu)
      .subscribe((event: { payload: boolean; }) =>
        this.handleEvent(event.payload));
  }

  logout() {
    this.authService.isAuthenticated().then(() => {
      this.authService.signOut().then(() => {
        this.showMenu = false;
        this.router.navigate(['/login']);
      });
    });
  }

  private handleEvent(payload: boolean) {
    this.showMenu = payload;
    this.authenticated = payload;
  }
}
