import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CameraDialogComponent} from "../../intelligent-security/camera-management/camera-management.component";
import {max} from "rxjs/operators";

@Component({
  selector: 'app-hierarchical-list',
  templateUrl: './hierarchical-list.component.html',
  styleUrls: ['./hierarchical-list.component.css']
})
export class HierarchicalListComponent implements OnInit {
  // @ts-ignore
  @Input() list: ListDto[] = [];
  @Input() editable: boolean = false;
  selectedLists: ListDto[] = [];
  ids: {} = {};
  // @ts-ignore
  leaf: {} = null;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // @ts-ignore
    this.selectedLists[0] = {id: 0, children: []};
    for (let l of this.list) {
      this.selectedLists[0]['children'].push(l);
    }
    // console.log(this.selectedLists)
  }

  openDialog(selectedList: ListDto[]) {
    const dialogRef = this.dialog.open(HierarchicalListNewItemComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${JSON.stringify(result)}`);
      if (result) {
        this.addNew(selectedList, result['name']);
      }
    });
  }

  addNew(selectedList: ListDto[], name: string) {
    // @ts-ignore
    const maxId = this.getMaxId(selectedList['children']);
    // @ts-ignore
    const parentId = selectedList['id'];
    console.log(parentId, maxId);
    let id = 0;
    if(parentId == 0 || maxId > 10) {
      id = maxId;
    } else {
      console.log((parentId == 0 ? '' : String(parentId)), String(maxId), (parentId == 0 ? '' : String(parentId)) + String(maxId))
      id = Number((parentId == 0 ? '' : String(parentId)) + String(maxId));
      /*let levels = String(parentId).length / 2;
      let level0 = Number(String(parentId).slice(0, 2));*/
    }
    console.log(id)

    const newNode = {
      id: id,
      parentId: parentId,
      title: name,
      _value: 0,
      children: []
    };
    // @ts-ignore
    selectedList['children'].push(newNode);
    // @ts-ignore
    // console.log(selectedList);
    // @ts-ignore
    // console.log(selectedList['children']);

    let partialList = this.list;
    for (let i = 1; i < this.selectedLists.length; i++) {
      for (let j = 0; j < partialList.length; j++) {
        // @ts-ignore
        if(this.selectedLists[i].id == partialList[j]['id']) {
          partialList = partialList[j]['children'];
          break;
        }
      }
    }

    // @ts-ignore
    partialList.push(newNode);

    console.log(this.list)
    console.log(this.selectedLists)
  }

  getMaxId(childs: []) {
    // @ts-ignore
    let max = -1;
    childs.forEach(c => {
      if (c['id'] > max)
        max = c['id'];
    });
    return max == -1 ? 10 : (max + 1);
  }

  select(id: number, parentId: number): void {
    let activeListsSize = this.selectedLists.length;
    let cnt = 1;
    for(let i = 0; i < this.selectedLists.length; i++) {
      if(this.selectedLists[i]['id'] == parentId) {
        this.selectedLists[i]['children'].forEach(f => {
          if((f['id'] == id && f['children'].length == 0) && !this.editable) {
            cnt = 0;
            this.leaf = f;
          }
        });
        activeListsSize = i + cnt;
      }
    }
    if (cnt == 1) {
      // @ts-ignore
      this.leaf = null;
      // @ts-ignore
      this.selectedLists[activeListsSize] = {id: id, children: []};
    }

    if(this.selectedLists.length > activeListsSize + 1) {
      let sl = [];
      for(let i = 0; i <= activeListsSize; i++) {
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
    // console.log(this.ids, id, activeListsSize)
    this.addToSelectedList(id, activeListsSize);
  }

  addToSelectedList(id: number, idx: number) {
    // console.log(this.selectedLists[idx - 1])
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

@Component({
  selector: 'hierarchical-list-new-item',
  templateUrl: 'hierarchical-list-new-item.component.html',
})
export class HierarchicalListNewItemComponent {
  item= {
    name: ''
  };

  constructor(public matDialogRef: MatDialogRef<HierarchicalListNewItemComponent>) {
    /*this.matDialogRef.disableClose = true;
    matDialogRef.backdropClick().subscribe(result => {
      console.log("closed!");
    });*/
  }

  close() {
    //disable default close operation
    this.matDialogRef.close(this.item);
  }
}
