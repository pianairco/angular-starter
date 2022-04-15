import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationManagementsRoutingModule } from './organization-managements-routing.module';
import { OrganizationManagementsComponent } from './organization-managements.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {AppModule} from "../../app.module";
import {HierarchicalListComponent} from "./hierarchical-list/hierarchical-list.component";

@NgModule({
  declarations: [
    OrganizationManagementsComponent,
    HierarchicalListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    OrganizationManagementsRoutingModule
  ]
})
export class OrganizationManagementsModule { }
