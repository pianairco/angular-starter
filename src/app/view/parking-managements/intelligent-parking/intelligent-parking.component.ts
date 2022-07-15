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

  list: object[] = [
    {id: 1, parentId: 0, title: 'ساختمان شماره یک', _value: 0, children: [
        {id: 10, parentId: 1, title: 'a10', _value: 10, children: [
            {id: 100, parentId: 10, title: 'a100', _value: 100, children: [
                {id: 1000, parentId: 100, title: 'a1000', _value: 1000, children: [
                    {id: 1100, parentId: 1000, title: 'a1100', _value: 1100, children: []},
                    {id: 1101, parentId: 1000, title: 'a1101', _value: 1101, children: []},
                    {id: 1102, parentId: 1000, title: 'a1102', _value: 1102, children: []},
                  ]},
                {id: 1001, parentId: 100, title: 'a1001', _value: 1001, children: []},
                {id: 1002, parentId: 100, title: 'a1002', _value: 1002, children: []},
              ]},
            {id: 101, parentId: 10, title: 'a101', _value: 101, children: []},
            {id: 102, parentId: 10, title: 'a102', _value: 102, children: []},
            {id: 103, parentId: 10, title: 'a103', _value: 103, children: []}
          ]},
        {id: 11, parentId: 1, title: 'a11', _value: 11, children: []},
        {id: 12, parentId: 1, title: 'a12', _value: 12, children: []},
        {id: 13, parentId: 1, title: 'a13', _value: 13, children: []}
      ]},
    {id: 2, parentId: 0, title: 'a2', _value: 0, children: [
        {id: 20, parentId: 2, title: 'a20', _value: 20, children: []},
        {id: 21, parentId: 2, title: 'a21', _value: 21, children: []},
        {id: 22, parentId: 2, title: 'a22', _value: 22, children: []}
      ]},
    {id: 3, parentId: 0, title: 'a3', _value: 0, children: [
        {id: 30, parentId: 3, title: 'a31', _value: 31, children: []},
        {id: 31, parentId: 3, title: 'a32', _value: 32, children: []}
      ]}
  ];

  constructor() { }

  ngOnInit(): void {
  }


}
