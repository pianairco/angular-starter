import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessControlRoutingModule } from './access-control-routing.module';
import { AccessControlComponent } from './access-control.component';
import {AccessLevelComponent, LevelDialogComponent} from './access-level/access-level.component';
import { AccessGroupComponent } from './access-group/access-group.component';
import { WorkingGroupComponent } from './working-group/working-group.component';
import { GuestComponent } from './guest/guest.component';
import { AccessCardComponent } from './access-card/access-card.component';
import {RoleDialogComponent} from "../settings/role-setting/role-setting.component";


@NgModule({
  declarations: [
    AccessControlComponent,
    AccessLevelComponent,
    AccessGroupComponent,
    WorkingGroupComponent,
    GuestComponent,
    AccessCardComponent,
    LevelDialogComponent
  ],
  imports: [
    CommonModule,
    AccessControlRoutingModule
  ]
})
export class AccessControlModule { }
