import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment-scheduling',
  templateUrl: './equipment-scheduling.component.html',
  styleUrls: ['./equipment-scheduling.component.css']
})
export class EquipmentSchedulingComponent implements OnInit {
  showModal = true;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
