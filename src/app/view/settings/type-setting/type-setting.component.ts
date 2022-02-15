import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-setting',
  templateUrl: './type-setting.component.html',
  styleUrls: ['./type-setting.component.css']
})
export class TypeSettingComponent implements OnInit {
  showModal = true;
  hide = true;
  displayedColumns: string[] = ['name',  'actions'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Hydrogen'},
  { name: 'Helium', },
  { name: 'Lithium', },
  { name: 'Beryllium', },
  { name: 'Boron',},
  { name: 'Carbon', },
  { name: 'Nitrogen',},

];

