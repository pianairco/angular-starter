import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntelligentSafetyRoutingModule } from './intelligent-safety-routing.module';
import { IntelligentSafetyComponent } from './intelligent-safety.component';
import {SharedModule} from "../../shared/shared.module";
import { SafetyEquipmentComponent } from './safety-equipment/safety-equipment.component';


@NgModule({
  declarations: [
    IntelligentSafetyComponent,
    SafetyEquipmentComponent
  ],
  imports: [
    CommonModule,
    IntelligentSafetyRoutingModule,
    SharedModule,
  ]
})
export class IntelligentSafetyModule { }
