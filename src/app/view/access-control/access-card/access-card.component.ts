import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-card',
  templateUrl: './access-card.component.html',
  styleUrls: ['./access-card.component.css']
})
export class AccessCardComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'actions'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
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
