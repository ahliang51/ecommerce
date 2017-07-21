import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  productDetails: any;
  pictureImages : any = [];
  tabBarElement: any;
  
  @ViewChild('description') description: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productDetails = navParams.get("productDetails");
    this.pictureImages = this.productDetails.attrs.images;
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
    console.log(this.productDetails);
    this.description.nativeElement.innerHTML = this.productDetails.attrs.body_html;
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

}