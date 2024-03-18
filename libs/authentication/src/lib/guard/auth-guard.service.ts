import {inject, Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import { AuthService } from '../../../../data-access/authorization/src/lib/service/auth.service';

/**
 * Authorization guard
 */
@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(authenticated => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      })
      .catch(e => {
        console.log("[AuthenticationGuard] " + e)
        this.router.navigate(['/login']);
        return false;
      });
  }
}

export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return <boolean>inject(AuthGuard).canActivate(next, state);
}
