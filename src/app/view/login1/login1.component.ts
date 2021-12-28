import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  showModal = true;

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

}
