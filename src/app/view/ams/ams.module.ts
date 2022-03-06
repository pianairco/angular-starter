import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AMSRoutingModule } from './ams-routing.module';
import { AMSComponent } from './ams.component';
import { WorkPlanComponent } from './work-plan/work-plan.component';
import {TimeSheetComponent} from "./time-sheet/time-sheet.component";
import {LeaveComponent} from "./leave/leave.component";
import {VacationComponent} from "./vacation/vacation.component";


@NgModule({
  declarations: [
    AMSComponent,
    WorkPlanComponent,
    TimeSheetComponent,
    LeaveComponent,
    VacationComponent
  ],
  imports: [
    CommonModule,
    AMSRoutingModule
  ]
})
export class AMSModule { }
