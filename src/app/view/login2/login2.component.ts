import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  showModal = true;
  hide = true;
  wait = false;

  constructor(public dialog: MatDialog,) {

  }

  // email = new FormControl('', [Validators.required, Validators.email]);
  //
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  ngOnInit(): void {
  }

}
