import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsComponent} from './settings.component';
import {RoleSettingComponent} from "./role-setting/role-setting.component";
import {SpaceSettingComponent} from "./space-setting/space-setting.component";
import {TypeSettingComponent} from "./type-setting/type-setting.component";

const routes: Routes = [{ path: '', component: SettingsComponent, children: [
    { path: 'role-settings', component: RoleSettingComponent },
    { path: 'space-settings', component: SpaceSettingComponent },
    { path: 'type-settings', component: TypeSettingComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
