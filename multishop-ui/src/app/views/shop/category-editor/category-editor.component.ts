import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {CommonUtilService} from "../../../services/common-util.service";
import {NotificationService} from "../../../services/notification.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ShareStateService} from "../../../services/share-state.service";
import {ProductCategory} from "../category/category.component";
import {AjaxCallService} from "../../../services/ajax-call.service";
import {LoadingService} from "../../../services/loading.service";

@Component({
  selector: 'app-category-editor',
  templateUrl: './category-editor.component.html',
  styleUrls: ['./category-editor.component.css']
})
export class CategoryEditorComponent implements OnInit, OnDestroy {
  onInitCalled = false;
  category = null;
  // new ProductCategory(0, null, null, null);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private shareStateService: ShareStateService,
    private ajaxCallService: AjaxCallService,
    private loadingService: LoadingService,
    private commonUtilService: CommonUtilService,
    private notificationService: NotificationService) { }

    ngOnInit(): void {
      this.onInitCalled = true;
      this.category = this.shareStateService.editModeObject.changeable;
      if(!this.category) {
        this.category = new ProductCategory(0, '', '', 0);
      }
  }

  ngOnDestroy(): void {
    if(this.onInitCalled)
      this.shareStateService.clearEditModeObject();
    // if(this.onInitCalled)
      // this.shareStateService.editMode = false;
  }

  registerClick() {
    console.log(this.category)
    this.loadingService.changeState(true);
    this.ajaxCallService.categoryPersist(this.category).then(res => {
      this.loadingService.changeState(false);
      this.shareStateService.navigateReturn();
    }, err => {
      this.loadingService.changeState(false);
      this.notificationService.changeMessage('error', 'خطا رخ داده است')
    });
    // if (!this.commonUtilService.hasStringValue(this.product.title)) {
    //   this.notificationService.changeMessage("error", "عنوان نباید خالی باشد");
    //   return;
    // } else if (!this.commonUtilService.hasStringValue(this.product.description)) {
    //   this.notificationService.changeMessage("error", "توضیحات نباید خالی باشد");
    //   return;
    // }/* else if (!this.commonUtilService.hasStringValue(this.product.image)) {
    //   this.notificationService.changeMessage("error", "تصویر نباید خالی باشد");
    //   return;
    // }*/ else if (!this.commonUtilService.hasNumberValue(this.product.price)) {
    //   this.notificationService.changeMessage("error", "قیمت نباید خالی باشد");
    //   return;
    // } else if (!this.commonUtilService.hasNumberValue(this.product.measurement)) {
    //   this.notificationService.changeMessage("error", "مقدار بر حسب واحد نباید خالی باشد");
    //   return;
    // }

    // console.log("product:", this.product)
    // if(this.insertable && !this.product.id)
    //   this.insertClick.emit(this.product);
    // else if(this.editable && this.product.id) {
    //   this.updateClick.emit({ product: this.product, component: this });
    // }
  }


  public close() {
    this.shareStateService.navigateReturn();
  }
}
