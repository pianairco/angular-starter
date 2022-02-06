import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-control',
  templateUrl: './security-control.component.html',
  styleUrls: ['./security-control.component.css']
})
export class SecurityControlComponent implements OnInit {
  showModal = true;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
