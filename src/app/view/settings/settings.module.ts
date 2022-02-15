import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SpaceSettingComponent } from './space-setting/space-setting.component';
import {RoleDialogComponent, RoleSettingComponent} from './role-setting/role-setting.component';
import { TypeSettingComponent } from './type-setting/type-setting.component';
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    SettingsComponent,
    SpaceSettingComponent,
    RoleSettingComponent,
    TypeSettingComponent,
    RoleDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
