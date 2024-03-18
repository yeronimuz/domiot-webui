import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../../../libs/dashboard/src/lib/dashboard/dashboard.component';
import { AuthorizationGuard } from '../../../../libs/authentication/src/lib/guard/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        title: 'Dashboard',
        path: 'dashboard',
        canActivate: [AuthorizationGuard],
        loadChildren: () => import('@domiot/dashboard').then(m => m.DashboardModule)
      },
      {
        title: 'Home',
        path: 'site',
        canActivate: [AuthorizationGuard],
        loadChildren: () => import('@domiot/site').then(m => m.SiteModule)
      },
      {
        title: 'Apparatuur',
        path: 'devices',
        canActivate: [AuthorizationGuard],
        loadChildren: () => import('@domiot/devices').then(m => m.DevicesModule)
      },
      {
        title: 'Systeem',
        path: 'system',
        canActivate: [AuthorizationGuard],
        loadChildren: () => import('@domiot/system').then(m => m.SystemModule)
      },
      {
        title: 'login',
        path: 'login',
        loadChildren: () => import('@domiot/authentication').then(m => m.AuthenticationModule)
      },
      {
        title: '',
        path: '',
        canActivate: [AuthorizationGuard],
        component: DashboardComponent
      },
      {
        path: '**',
        canActivate: [AuthorizationGuard],
        redirectTo: ''
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
