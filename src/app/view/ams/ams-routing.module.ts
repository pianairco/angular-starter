import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AMSComponent } from './ams.component';
import {WorkPlanComponent} from "./work-plan/work-plan.component";
import {TimeSheetComponent} from "./time-sheet/time-sheet.component";
import {LeaveComponent} from "./leave/leave.component";
import {VacationComponent} from "./vacation/vacation.component";

const routes: Routes = [{ path: '', component: AMSComponent, children: [
    { path: 'work-plan', component:WorkPlanComponent },
    { path: 'time-sheet', component:TimeSheetComponent},
    { path: 'leave', component:LeaveComponent},
    { path: 'vacation', component:VacationComponent},
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AMSRoutingModule { }
