import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-conditioning',
  templateUrl: './air-conditioning.component.html',
  styleUrls: ['./air-conditioning.component.css']
})
export class AirConditioningComponent implements OnInit {
  showModal = true;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
