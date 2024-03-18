import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomiotUser } from '../../../../data-access/authorization/src/lib/model/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventQueueService } from '../../../../ui/eventqueue/src/lib/service/event-queue.service';
import { AuthService } from '../../../../data-access/authorization/src/lib/service/auth.service';
import { AppEvent } from '../../../../ui/eventqueue/src/lib/events/app.event.class';
import { AppEventType } from '../../../../ui/eventqueue/src/lib/events/event.type';

@Component({
  selector: 'domiot-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  user: DomiotUser;
  form!: FormGroup;
  authenticated = false;
  loginFailed = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private eventQueueService: EventQueueService,
    private authService: AuthService
  ) {
    // TODO: Configure auth-pool
    this.user = {} as DomiotUser;
  }

  ngOnInit(): void {
    this.authService.isAuthenticated().then(() => {
      this.authenticated = true;
      this.eventQueueService.dispatch(new AppEvent(AppEventType.EnableMainMenu, true));
      this.router.navigate(['/dashboard']);
      return;
    });

    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public onSignIn(): void {
    this.authService.isAuthenticated().then(() => {
      this.authenticated = true;
      this.router.navigate(['/']);
      this.eventQueueService.dispatch(new AppEvent(AppEventType.EnableMainMenu, true));
    });
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    console.log('Signing in...');
    this.user = {
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value
    };
    this.authService.signIn(this.user)
      .then(userInfo => {
        this.loginFailed = false;
        this.user = userInfo;
        this.eventQueueService.dispatch(new AppEvent(AppEventType.EnableMainMenu, true));
        this.router.navigate(['dashboard']);
      }).catch((reason) => {
      if (reason.name !== 'UserAlreadyAuthenticatedException') {
        this.loginFailed = true;
      } else {
        this.eventQueueService.dispatch(new AppEvent(AppEventType.EnableMainMenu, true));
        this.router.navigate(['dashboard']);
      }
      console.log('Error logging in: ' + reason);
    });
  }
}
