import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ReportManagementComponent } from './report-management/report-management.component';
import { DutiesManagementComponent } from './duties-management/duties-management.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ReportsComponent,
    ReportManagementComponent,
    DutiesManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
