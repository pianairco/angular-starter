import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingManagementsComponent } from './parking-managements.component';
import {AlertManagementComponent} from "./alert-management/alert-management.component";
import {ScenarioConfigurationComponent} from "./scenario-configuration/scenario-configuration.component";
import {EquipmentSchedulingComponent} from "./equipment-scheduling/equipment-scheduling.component";

const routes: Routes = [
  {
    path: '', component: ParkingManagementsComponent, children: [
      { path: 'alert-management', component: AlertManagementComponent },
      { path: 'scenario-configuration', component: ScenarioConfigurationComponent },
      { path: 'equipment-scheduling', component: EquipmentSchedulingComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingManagementsRoutingModule { }
