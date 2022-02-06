import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntelligentSecurityComponent} from './intelligent-security.component';
import {SecurityControlComponent} from "./security-control/security-control.component";
import {CameraManagementComponent} from "./camera-management/camera-management.component";

const routes: Routes = [
  { path: '', component: IntelligentSecurityComponent, children: [
    { path: 'security-control', component: SecurityControlComponent },
    { path: 'camera-management', component: CameraManagementComponent }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntelligentSecurityRoutingModule { }
