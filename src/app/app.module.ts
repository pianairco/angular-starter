import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LoginComponent} from './view/login/login.component';
// import { Login1Component } from './view/login1/login1.component';
// import { Login2Component } from './view/login2/login2.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {HomeComponent} from './view/home/home.component';
import {Login1Component} from "./view/login1/login1.component";
import {Login2Component} from "./view/login2/login2.component";
import {SharedModule} from "./shared/shared.module";
import { AttendanceComponent } from './view/attendance/attendance.component';
import {ConfirmComponent} from "./view/confirm/confirm.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Login1Component,
    Login2Component,
    HomeComponent,
    AttendanceComponent,
    ConfirmComponent,
    // Login1Component,
    // Login2Component
  ],
  providers: [],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
