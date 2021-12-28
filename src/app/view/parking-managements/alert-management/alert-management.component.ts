import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-management',
  templateUrl: './alert-management.component.html',
  styleUrls: ['./alert-management.component.css']
})
export class AlertManagementComponent implements OnInit {
  showModal = true;
  hide = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
