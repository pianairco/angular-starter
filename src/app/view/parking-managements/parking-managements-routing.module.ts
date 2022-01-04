import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingManagementsComponent } from './parking-managements.component';
import {IntelligentParkingComponent} from "./intelligent-parking/intelligent-parking.component";

const routes: Routes = [
  {
    path: '', component: ParkingManagementsComponent, children: [
      { path: 'intelligent-parking', component: IntelligentParkingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParkingManagementsRoutingModule { }
