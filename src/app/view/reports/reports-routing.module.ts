import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ReportsComponent} from './reports.component';
import {ReportManagementComponent} from "./report-management/report-management.component";

const routes: Routes = [{ path: '', component: ReportsComponent, children: [
    { path: 'report-management', component: ReportManagementComponent },
    { path: 'duties-management', component: ReportManagementComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
