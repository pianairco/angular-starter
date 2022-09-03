import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";
import {map, startWith} from "rxjs/operators";
import {Observable} from "rxjs";

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
  options: string[] = ['One', 'Two', 'Three'];
  myControl = new FormControl('');
  // @ts-ignore
  filteredOptions: Observable<string[]>;

  options2: string[] = ['Yes', 'No', 'Maybe'];
  myControl2 = new FormControl('');
  // @ts-ignore
  filteredOptions2: Observable<string[]>;

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
    this.filteredOptions2 = this.myControl2.valueChanges.pipe(
      startWith(''),
      map(value => this._filter2(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  private _filter2(value: string): string[] {
    const filterValue = value.toLowerCase();

    console.log(this.options2)

    let strings = this.options2.filter(option => option.toLowerCase().includes(filterValue));
    console.log(this.options2)
    return strings;
  }
}
