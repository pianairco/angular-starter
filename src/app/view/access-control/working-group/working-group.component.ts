import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {RoleDialogComponent} from "../../settings/role-setting/role-setting.component";

@Component({
  selector: 'app-working-group',
  templateUrl: './working-group.component.html',
  styleUrls: ['./working-group.component.css']
})
export class WorkingGroupComponent implements OnInit {

  showModal = true;
  hide = true;

  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'unit', 'date', 'endOfContract', 'status', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(WorkingGroupDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

export interface PeriodicElement {
  position: number;
  firstName: string;
  lastName:string;
  unit: number;
  date: number;
  endOfContract: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, firstName: 'Hydrogen', lastName: 'hh', unit: 1, date:2, endOfContract: 23, status: 'gg'  },
  {position: 2, firstName: 'Helium' , lastName: 'hh', unit: 1, date:2, endOfContract: 23, status: 'gg'},
  {position: 3, firstName: 'Lithium' , lastName: 'hh', unit: 1, date:2, endOfContract: 23, status: 'gg'},
  {position: 4, firstName: 'Beryllium' , lastName: 'hh', unit: 1, date:2, endOfContract: 23, status: 'gg'}

];

@Component({
  selector: 'level-dialog',
  templateUrl: 'working-group-dialog.component.html',
})
export class WorkingGroupDialogComponent {
}
