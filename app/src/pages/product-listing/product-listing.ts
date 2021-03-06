import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from "../product-detail/product-detail";

/**
 * Generated class for the ProductListingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-product-listing',
  templateUrl: 'product-listing.html',
})
export class ProductListingPage {

  listings: any = [];
  tabBarElement: any;
  title;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listings = navParams.get("listing");
    this.title = navParams.get("title");
    console.log(this.listings)
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  viewDetails(listing) {
    this.navCtrl.push(ProductDetailPage, {
      productDetails: listing
    })
  }

}
