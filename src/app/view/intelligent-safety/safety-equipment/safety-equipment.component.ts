import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-safety-equipment',
  templateUrl: './safety-equipment.component.html',
  styleUrls: ['./safety-equipment.component.css']
})
export class SafetyEquipmentComponent implements OnInit {

  showModal = true;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
