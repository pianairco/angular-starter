import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ParkingManagementsRoutingModule} from './parking-managements-routing.module';
import {ParkingManagementsComponent} from './parking-managements.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {IntelligentParkingComponent} from "./intelligent-parking/intelligent-parking.component";

@NgModule({
  declarations: [
    ParkingManagementsComponent,
    IntelligentParkingComponent
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
