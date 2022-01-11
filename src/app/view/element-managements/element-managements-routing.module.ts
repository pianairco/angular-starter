import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementManagementsComponent } from './element-managements.component';

import {AlertManagementsComponent} from "../alert-managements/alert-managements.component";
import {AlertManagementComponent} from "../alert-managements/alert-management/alert-management.component";
import {ElementManagementComponent} from "./element-management/element-management.component";
import {ConfigurationComponent} from "./configuration/configuration.component";
import {ViewStatusComponent} from "./view-status/view-status.component";


const routes: Routes = [{ path: '', component: ElementManagementsComponent, children: [
    { path: 'element-management', component:ElementManagementComponent },
    { path: 'configuration', component:ConfigurationComponent},
    { path: 'view-status', component:ViewStatusComponent},
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementManagementsRoutingModule { }
