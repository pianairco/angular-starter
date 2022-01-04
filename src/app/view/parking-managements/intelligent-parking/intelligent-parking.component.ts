import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-intelligent-parking',
  templateUrl: './intelligent-parking.component.html',
  styleUrls: ['./intelligent-parking.component.css']
})
export class IntelligentParkingComponent implements OnInit {
  showModal = true;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }


}
