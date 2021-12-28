import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-parking-managements',
  templateUrl: './parking-managements.component.html',
  styleUrls: ['./parking-managements.component.css']
})
export class ParkingManagementsComponent implements OnInit {
  showModal = true;
  hide = true;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  changeTab(e: any) {
    console.log(e)
    if (e.index == 0) {
      this.router.navigate(['./alert-management'], {relativeTo: this.activatedRoute})
    } else if (e.index == 1) {
      this.router.navigate(["./scenario-configuration"], {relativeTo: this.activatedRoute})
    } else if (e.index == 2) {
      this.router.navigate(["./equipment-scheduling"], {relativeTo: this.activatedRoute})
    }
  }
}
