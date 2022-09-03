import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessControlRoutingModule } from './access-control-routing.module';
import { AccessControlComponent } from './access-control.component';
import {AccessLevelComponent, LevelDialogComponent} from './access-level/access-level.component';
import {AccessGroupComponent, GroupDialogComponent} from './access-group/access-group.component';
import {WorkingGroupComponent, WorkingGroupDialogComponent} from './working-group/working-group.component';
import {GuestComponent, GuestDialogComponent} from './guest/guest.component';
import { AccessCardComponent } from './access-card/access-card.component';
import {SharedModule} from "../../shared/shared.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    AccessControlComponent,
    AccessLevelComponent,
    AccessGroupComponent,
    WorkingGroupComponent,
    GuestComponent,
    AccessCardComponent,
    LevelDialogComponent,
    GroupDialogComponent,
    WorkingGroupDialogComponent,
    GuestDialogComponent
  ],
  imports: [
    CommonModule,
    AccessControlRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AccessControlModule { }
