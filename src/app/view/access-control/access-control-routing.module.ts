import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlComponent } from './access-control.component';
import {AccessCardComponent} from "./access-card/access-card.component";
import {AccessGroupComponent} from "./access-group/access-group.component";
import {AccessLevelComponent} from "./access-level/access-level.component";
import {GuestComponent} from "./guest/guest.component";
import {WorkingGroupComponent} from "./working-group/working-group.component";

const routes: Routes = [{ path: '', component: AccessControlComponent, children: [
    { path: 'access-card', component: AccessCardComponent },
    { path: 'access-group', component: AccessGroupComponent },
    { path: 'access-level', component: AccessLevelComponent },
    { path: 'guest', component: GuestComponent },
    { path: 'working-group', component: WorkingGroupComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessControlRoutingModule { }
