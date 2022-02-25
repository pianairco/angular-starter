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

  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(RoleDialogComponent);

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
  selector: 'level-dialog',
  templateUrl: 'working-group-dialog.component.html',
})
export class WorkingGroupDialogComponent {
}
