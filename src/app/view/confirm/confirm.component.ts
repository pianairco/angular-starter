import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
  showModal = true;
  hide = true;
  wait = false;
  time = 0;

  constructor(public dialog: MatDialog,) {

  }

  startTimer() {
    this.time = 120;
    setInterval(() => {
      if(this.time > 0) {
        this.time--;
      }
    },1000)
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
