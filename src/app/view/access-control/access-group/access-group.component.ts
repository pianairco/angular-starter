import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-access-group',
  templateUrl: './access-group.component.html',
  styleUrls: ['./access-group.component.css']
})
export class AccessGroupComponent implements OnInit {
  showModal = true;
  hide = true;
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(GroupDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

export interface PeriodicElement {
  name: string;
  position: number;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen'},
  {position: 2, name: 'Helium'},
  {position: 3, name: 'Lithium'},
  {position: 4, name: 'Beryllium'},

];

@Component({
  selector: 'Group-dialog',
  templateUrl: 'group-dialog.component.html',
})
export class GroupDialogComponent {
}
