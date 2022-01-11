import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-status',
  templateUrl: './view-status.component.html',
  styleUrls: ['./view-status.component.css']
})
export class ViewStatusComponent implements OnInit {

  showModal = true;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
