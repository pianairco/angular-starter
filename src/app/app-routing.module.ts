import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./view/login/login.component";
import {HomeComponent} from "./view/home/home.component";
import {Login1Component} from "./view/login1/login1.component";
import {Login2Component} from "./view/login2/login2.component";
import {ConfirmComponent} from "./view/confirm/confirm.component";

const routes: Routes = [
  {
    path: '', /*canActivate:[AuthGuard],*/ children: [
      { path: '', children: [
          { path: '', redirectTo: '/tile', pathMatch: 'full' },
          { path: 'tile', component: HomeComponent, children:[
              { path: 'intelligent-energys',
                loadChildren: () => import('./view/intelligent-energys/intelligent-energys.module')
                  .then(m => m.IntelligentEnergysModule) },
              { path: 'intelligent-safety',
                loadChildren: () => import('./view/intelligent-safety/intelligent-safety.module')
                  .then(m => m.IntelligentSafetyModule) },
              { path: 'parking-managements',
                loadChildren: () => import('./view/parking-managements/parking-managements.module')
                  .then(m => m.ParkingManagementsModule) },
              { path: 'alert-managements',
                loadChildren: () => import('./view/alert-managements/alert-managements.module')
                  .then(m => m.AlertManagementsModule) },
              { path: 'element-managements',
                loadChildren: () => import('./view/element-managements/element-managements.module')
                  .then(m => m.ElementManagementsModule) },
              { path: 'organization-managements',
                loadChildren: () => import('./view/organization-managements/organization-managements.module')
                  .then(m => m.OrganizationManagementsModule) },
              { path: 'intelligent-security',
                loadChildren: () => import('./view/intelligent-security/intelligent-security.module')
                  .then(m => m.IntelligentSecurityModule) },
              { path: 'reports', loadChildren: () => import('./view/reports/reports.module').then(m => m.ReportsModule) },
              { path: 'settings', loadChildren: () => import('./view/settings/settings.module').then(m => m.SettingsModule) },
              { path: 'access-control', loadChildren: () => import('./view/access-control/access-control.module').then(m => m.AccessControlModule) },
              { path: 'ams', loadChildren: () => import('./view/ams/ams.module').then(m => m.AMSModule) },
            ]
          },
        ]
      },
      { path: 'login', component: LoginComponent/*, canActivate:[AuthGuard]*/ },
      { path: 'login1', component: Login1Component/*, canActivate:[AuthGuard]*/ },
      { path: 'login2', component: Login2Component/*, canActivate:[AuthGuard]*/ },
      { path: 'confirm', component: ConfirmComponent/*, canActivate:[AuthGuard]*/ },
      { path: 'logout', component: LoginComponent/*, canActivate:[AuthGuard]*/ },
    ]
  },
/*  { path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
