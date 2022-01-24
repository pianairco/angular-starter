import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntelligentSafetyComponent } from './intelligent-safety.component';
import {IntelligentEnergysComponent} from "../intelligent-energys/intelligent-energys.component";
import {AirConditioningComponent} from "../intelligent-energys/air-conditioning/air-conditioning.component";
import {IntelligentSocketComponent} from "../intelligent-energys/intelligent-socket/intelligent-socket.component";
import {IntelligentLightingComponent} from "../intelligent-energys/intelligent-lighting/intelligent-lighting.component";
import {SafetyEquipmentComponent} from "./safety-equipment/safety-equipment.component";

const routes: Routes = [
  { path: '', component: IntelligentSafetyComponent, children: [
      { path: 'safety-equipment', component: SafetyEquipmentComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntelligentSafetyRoutingModule { }
