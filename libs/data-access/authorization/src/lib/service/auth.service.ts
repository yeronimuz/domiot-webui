import { Injectable } from '@angular/core';
import { DomiotUser } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    // TODO: Configure auth module
  }

  signIn(domiotUser: DomiotUser): Promise<boolean> {
    return Promise.resolve(true);
  }

  isAuthenticated(): Promise<boolean> {
    return Promise.resolve(true);
  }

  signOut(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
