import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario-configuration',
  templateUrl: './scenario-configuration.component.html',
  styleUrls: ['./scenario-configuration.component.css']
})
export class ScenarioConfigurationComponent implements OnInit {
  showModal = true;
  hide = true;

  constructor() { }

  ngOnInit(): void {
  }

}
