import { Component, OnInit } from '@angular/core';
import {AlertDialogComponent} from "../../alert-managements/alert-management/alert-management.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css']
})
export class GuestComponent implements OnInit {
  showModal = true;
  hide = true;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialog.open(GuestDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
@Component({
  selector: 'Guest-dialog',
  templateUrl: 'Guest-dialog.component.html',
})
export class GuestDialogComponent {}
