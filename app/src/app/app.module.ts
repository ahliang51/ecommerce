import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CheckoutPage } from "../pages/checkout/checkout";
import { HomePage } from '../pages/home/home';
import { ProfilePage } from "../pages/profile/profile";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListingProvider } from '../providers/listing/listing';
import { HttpModule } from '@angular/http';
import { ProductListingPage } from "../pages/product-listing/product-listing";
import { ProductDetailPage } from "../pages/product-detail/product-detail";

@NgModule({
  declarations: [
    MyApp,
    CheckoutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    ProductListingPage,
    ProductDetailPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CheckoutPage,
    ProfilePage,
    HomePage,
    TabsPage,
    ProductListingPage,
    ProductDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ListingProvider
  ]
})
export class AppModule { }
