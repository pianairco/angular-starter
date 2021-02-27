import {Component, OnInit, ViewChild} from '@angular/core';
import axios from 'axios';
import {ConstantService} from "../../services/constant.service";
import {LoadingService} from "../../services/loading.service";
import {CategoryComponent} from "./category/category.component";
import {AjaxCallService} from "../../services/ajax-call.service";
import {NotificationService} from "../../services/notification.service";
import {ShareStateService} from "../../services/share-state.service";
import {AuthenticationService} from "../../services/authentication-service.service";
import {Router} from "@angular/router";
import {ProductCategoryService} from "../../services/product-category.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  categories: object[] = null;
  @ViewChild('insert') insertComponent: CategoryComponent;


  constructor(private constantService: ConstantService,
              public router: Router,
              private categoryService: ProductCategoryService,
              public shareStateService: ShareStateService,
              public authService: AuthenticationService,
              private ajaxCallService: AjaxCallService,
              private notificationService: NotificationService,
              private loadingService: LoadingService) { }

  async ngOnInit(): Promise<void> {
    try {
      this.loadingService.changeState(true);
      await this.categoryService.renew();
      this.loadingService.changeState(false);
      // let res = await this.ajaxCallService.categoryList();
      // console.log(res)
      // let res = await axios.get(this.constantService.getRemoteServer() + "/api/modules/shop/category/list");
      // this.categories = res.data;
      // console.log(res.data)
      // this.loadingService.changeState(false);
    } catch (err) {
      this.loadingService.changeState(false);
      // this.insertComponent.fail();
    }
    this.categoryService.categoriesSubject.subscribe(categories => {
      this.categories = categories;
    });
  }

  // insertNewCategory(productCategory: ProductCategory) {
  //   console.log("insert:", productCategory)
  //   this.loadingService.changeState(true);
  //   this.ajaxCallService.save("api/modules/shop/category/product-categorization", productCategory).then(
  //     res => {
  //       this.insertComponent.success();
  //       this.categorization.push(res.data);
  //       this.notificationService.changeMessage("success", "ثبت موفق");
  //       this.loadingService.changeState(false);
  //     }, err => {
  //       this.notificationService.changeMessage("error", "خطا رخ داده");
  //       this.loadingService.changeState(false);
  //     }
  //   );
  // }

  // updateCategory(event: {category: ProductCategory, component: CategoryComponent}) {
  //   let productCategory: ProductCategory = event.category;
  //   let updateComponent: CategoryComponent = event.component;
  //   console.log("edit:", productCategory)
  //   this.loadingService.changeState(true);
  //   this.ajaxCallService.update("api/modules/shop/category/product-categorization", productCategory).then(
  //     res => {
  //       let index = -1;
  //       this.categorization.forEach((cat, idx) => {
  //         if(cat['id'] = res.data['id'])
  //           index = idx;
  //       });
  //       this.categorization[index] = res.data;
  //       this.notificationService.changeMessage("success", "ثبت موفق");
  //       this.loadingService.changeState(false);
  //       updateComponent.success();
  //     }, err => {
  //       this.notificationService.changeMessage("error", "خطا رخ داده");
  //       this.loadingService.changeState(false);
  //     }
  //   );
  // }
}
