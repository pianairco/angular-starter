import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-alert-management',
  templateUrl: './alert-management.component.html',
  styleUrls: ['./alert-management.component.css']
})
export class AlertManagementComponent implements OnInit {
  showModal = true;
  hide = true;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(AlertDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'alert-dialog',
  templateUrl: 'alert-dialog.component.html',
})
export class AlertDialogComponent {}
