import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./view/login/login.component";
import {HomeComponent} from "./view/home/home.component";
import {Login1Component} from "./view/login1/login1.component";
import {Login2Component} from "./view/login2/login2.component";

const routes: Routes = [
  {
    path: '', /*canActivate:[AuthGuard],*/ children: [
      { path: '', children: [
          { path: '', redirectTo: '/tile', pathMatch: 'full' },
          { path: 'tile', component: HomeComponent, children:[
              { path: 'parking-managements',
                loadChildren: () => import('./view/parking-managements/parking-managements.module')
                  .then(m => m.ParkingManagementsModule) },
              { path: 'alert-managements',
                loadChildren: () => import('./view/alert-managements/alert-managements.module')
                  .then(m => m.AlertManagementsModule) },
            ]
          },
        ]
      },
      { path: 'login', component: LoginComponent/*, canActivate:[AuthGuard]*/ },
      { path: 'login1', component: Login1Component/*, canActivate:[AuthGuard]*/ },
      { path: 'login2', component: Login2Component/*, canActivate:[AuthGuard]*/ },
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
