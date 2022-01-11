import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementManagementsRoutingModule } from './element-managements-routing.module';
import { ElementManagementsComponent } from './element-managements.component';
import {ElementDialogComponent, ElementManagementComponent} from "./element-management/element-management.component";
import {SharedModule} from "../../shared/shared.module";
import {AlertManagementsRoutingModule} from "../alert-managements/alert-managements-routing.module";
import {AlertDialogComponent} from "../alert-managements/alert-management/alert-management.component";
import { ConfigurationComponent } from './configuration/configuration.component';
import { ViewStatusComponent } from './view-status/view-status.component';





@NgModule({
  declarations: [
    ElementManagementsComponent,
    ElementManagementComponent,
    ElementDialogComponent,
    ConfigurationComponent,
    ViewStatusComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ElementManagementsRoutingModule,
  ]
})
export class ElementManagementsModule { }
