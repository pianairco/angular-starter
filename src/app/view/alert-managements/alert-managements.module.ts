import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertManagementsRoutingModule } from './alert-managements-routing.module';
import { AlertManagementsComponent } from './alert-managements.component';
import {ScenarioConfigurationComponent} from "./scenario-configuration/scenario-configuration.component";
import {EquipmentSchedulingComponent} from "./equipment-scheduling/equipment-scheduling.component";
import {AlertDialogComponent, AlertManagementComponent} from "./alert-management/alert-management.component";
import {ScenarioDialogComponent} from "./scenario-configuration/scenario-configuration.component";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    AlertManagementsComponent,
    ScenarioConfigurationComponent,
    EquipmentSchedulingComponent,
    AlertManagementComponent,
    AlertDialogComponent,
    ScenarioDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlertManagementsRoutingModule
  ]
})
export class AlertManagementsModule { }
