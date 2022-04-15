import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hierarchical-list',
  templateUrl: './hierarchical-list.component.html',
  styleUrls: ['./hierarchical-list.component.css']
})
export class HierarchicalListComponent implements OnInit {
  // @ts-ignore
  @Input() list: ListDto[];
  selectedLists: ListDto[] = [];
  ids: {} = {};
  // @ts-ignore
  leaf: {} = null;

  constructor() { }

  ngOnInit(): void {
    // @ts-ignore
    this.selectedLists[0] = {id: 0, children: []};
    for (let l of this.list) {
      this.selectedLists[0]['children'].push(l);
    }
    console.log(this.selectedLists)
  }

  select(id: number, parentId: number): void {
    let idx = this.selectedLists.length;
    let cnt = 1;
    for(let i = 0; i < this.selectedLists.length; i++) {
      if(this.selectedLists[i]['id'] == parentId) {
        console.log(this.selectedLists[i])
        this.selectedLists[i]['children'].forEach(f => {
          if(f['id'] == id && f['children'].length == 0) {
            cnt = 0;
            this.leaf = f;
          }
        })
        idx = i + cnt;
      }
    }

    if (cnt == 1) {
      // @ts-ignore
      this.leaf = null;
      // @ts-ignore
      this.selectedLists[idx] = {id: id, children: []};
    }

    if(this.selectedLists.length > idx + 1) {
      let sl = [];
      for(let i = 0; i <= idx; i++) {
        sl[i] = this.selectedLists[i];
      }
      this.selectedLists = sl;
    }

    let ids: {} = {};
    this.selectedLists.forEach(function(o) {
      // @ts-ignore
      ids[o['id']] = true;
    });
    if(this.leaf) {
      // @ts-ignore
      ids[this.leaf['id']] = true;
    }
    this.ids = ids;
    console.log(this.ids)
    this.addToSelectedList(id, idx);
  }

  addToSelectedList(id: number, idx: number) {
    for (let l of this.selectedLists[idx - 1]['children']) {
      if(l['id'] == id) {
        for(let l1 of l['children']) {
          this.selectedLists[idx]['children'].push(l1);
        }
        return;
      }
    }
  }
}

export class ListDto {
  // @ts-ignore
  private id: number;
  // @ts-ignore
  private parentId: number;
  // @ts-ignore
  private title: string;
  // @ts-ignore
  private value: number;
  // @ts-ignore
  private children: ListDto[];
}
