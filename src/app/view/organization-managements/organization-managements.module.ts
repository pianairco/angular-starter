import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OrganizationManagementsRoutingModule} from './organization-managements-routing.module';
import {OrganizationManagementsComponent} from './organization-managements.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    OrganizationManagementsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    OrganizationManagementsRoutingModule
  ]
})
export class OrganizationManagementsModule { }
