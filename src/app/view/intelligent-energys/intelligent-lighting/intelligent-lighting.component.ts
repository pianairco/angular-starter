import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intelligent-lighting',
  templateUrl: './intelligent-lighting.component.html',
  styleUrls: ['./intelligent-lighting.component.css']
})
export class IntelligentLightingComponent implements OnInit {
  showModal = true;
  hide = true;
  constructor() { }

  ngOnInit(): void {
  }

}
