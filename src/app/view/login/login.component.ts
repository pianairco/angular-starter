import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showModal = true;
  hide = true;
  wait = false;

  loginInfo: {
    username: string,
    password: string,
    captcha: string
  } = {
    username: '',
    password: '',
    captcha: ''
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
