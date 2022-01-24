import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntelligentEnergysComponent} from './intelligent-energys.component';
import {AirConditioningComponent} from "./air-conditioning/air-conditioning.component";
import {IntelligentSocketComponent} from "./intelligent-socket/intelligent-socket.component";
import {IntelligentLightingComponent} from "./intelligent-lighting/intelligent-lighting.component";

const routes: Routes = [
  { path: '', component: IntelligentEnergysComponent, children: [
    { path: 'air-conditioning', component:AirConditioningComponent },
    { path: 'intelligent-socket', component:IntelligentSocketComponent },
    { path: 'intelligent-lighting', component:IntelligentLightingComponent },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntelligentEnergysRoutingModule { }
