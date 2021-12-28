import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ParkingManagementsRoutingModule} from './parking-managements-routing.module';
import {ParkingManagementsComponent} from './parking-managements.component';
import {ScenarioConfigurationComponent} from './scenario-configuration/scenario-configuration.component';
import {EquipmentSchedulingComponent} from './equipment-scheduling/equipment-scheduling.component';
import {AlertManagementComponent} from "./alert-management/alert-management.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ParkingManagementsComponent,
    ScenarioConfigurationComponent,
    EquipmentSchedulingComponent,
    AlertManagementComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    SharedModule,
    ParkingManagementsRoutingModule,
  ]
})
export class ParkingManagementsModule { }
