import {ModuleWithProviders, NgModule} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {DrawerRailModule} from "angular-material-rail-drawer";
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {MatRadioModule} from "@angular/material/radio";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HierarchicalListComponent} from "../view/organization-managements/hierarchical-list/hierarchical-list.component";

@NgModule({
  declarations:[
  ],
  imports:[
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    DrawerRailModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MatRadioModule
  ],
  exports: [
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    DrawerRailModule,
    MatDialogModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatTableModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ],
  providers: [
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule
    };
  }
}
