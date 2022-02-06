import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntelligentSecurityRoutingModule } from './intelligent-security-routing.module';
import { IntelligentSecurityComponent } from './intelligent-security.component';
import { SecurityControlComponent } from './security-control/security-control.component';
import {SharedModule} from "../../shared/shared.module";
import {CameraDialogComponent, CameraManagementComponent} from "./camera-management/camera-management.component";
import {AlertDialogComponent} from "../alert-managements/alert-management/alert-management.component";


@NgModule({
  declarations: [
    IntelligentSecurityComponent,
    SecurityControlComponent,
    CameraManagementComponent,
    CameraDialogComponent,
  ],
  imports: [
    CommonModule,
    IntelligentSecurityRoutingModule,
    SharedModule,
  ]
})
export class IntelligentSecurityModule { }
