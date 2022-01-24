import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntelligentEnergysRoutingModule } from './intelligent-energys-routing.module';
import { IntelligentEnergysComponent } from './intelligent-energys.component';
import { AirConditioningComponent } from './air-conditioning/air-conditioning.component';
import {SharedModule} from "../../shared/shared.module";
import { IntelligentSocketComponent } from './intelligent-socket/intelligent-socket.component';
import { IntelligentLightingComponent } from './intelligent-lighting/intelligent-lighting.component';


@NgModule({
  declarations: [
    IntelligentEnergysComponent,
    AirConditioningComponent,
    IntelligentSocketComponent,
    IntelligentLightingComponent
  ],
  imports: [
    CommonModule,
    IntelligentEnergysRoutingModule,
    SharedModule,
  ]
})
export class IntelligentEnergysModule { }
