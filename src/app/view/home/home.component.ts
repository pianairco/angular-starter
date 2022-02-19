import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PersianCalendarService} from "../../services/persian-calendar-service.service";
import {MatSidenavContainer} from "@angular/material/sidenav";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  farsiDate: any;

  constructor(public persianCalendarService: PersianCalendarService) { }

  ngOnInit(): void {
  }

  openedChange(val: any) {
    console.log('openedChange: ', val);
  }

  ngAfterViewInit() {
  }

  getJalaliDate(date: Date) {
    var date1 = this.persianCalendarService.PersianCalendar(date);
    this.farsiDate = date1;
    return this.farsiDate;
  }

  getTime() {
    return new Date();
  }

  getJalaliNowDate() {
    return this.persianCalendarService.PersianCalendar(new Date());
  }
}
