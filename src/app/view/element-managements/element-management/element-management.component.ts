import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-element-management',
  templateUrl: './element-management.component.html',
  styleUrls: ['./element-management.component.css']
})
export class ElementManagementComponent implements OnInit {

  showModal = true;
  hide = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ElementDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'element-dialog',
  templateUrl: 'element-dialog.component.html',
})
export class ElementDialogComponent {}
