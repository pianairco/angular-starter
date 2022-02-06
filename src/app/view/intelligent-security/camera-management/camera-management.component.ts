import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-camera-management',
  templateUrl: './camera-management.component.html',
  styleUrls: ['./camera-management.component.css']
})
export class CameraManagementComponent implements OnInit {
  showModal = true;
  hide = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(CameraDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'camera-dialog',
  templateUrl: 'camera-dialog.component.html',
})
export class CameraDialogComponent {}
