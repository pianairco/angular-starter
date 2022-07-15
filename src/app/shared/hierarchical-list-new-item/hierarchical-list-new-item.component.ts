import {Component} from "@angular/core";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'hierarchical-list-new-item',
  templateUrl: '../hierarchical-list-new-item/hierarchical-list-new-item.component.html',
})
export class HierarchicalListNewItemComponent {
  public item = {
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
