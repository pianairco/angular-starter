import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationManagementsComponent } from './organization-managements.component';
import {IntelligentEnergysComponent} from "../intelligent-energys/intelligent-energys.component";
import {AirConditioningComponent} from "../intelligent-energys/air-conditioning/air-conditioning.component";
import {IntelligentSocketComponent} from "../intelligent-energys/intelligent-socket/intelligent-socket.component";
import {IntelligentLightingComponent} from "../intelligent-energys/intelligent-lighting/intelligent-lighting.component";

const routes: Routes = [
  { path: '', component: OrganizationManagementsComponent, children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationManagementsRoutingModule { }
