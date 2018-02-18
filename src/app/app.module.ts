import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { SpaloginPage } from '../pages/spalogin/spalogin';
import { LogoutPage } from '../pages/logout/logout';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListDetailsPage } from '../pages/list-details/list-details';
import { CartSubmitPage } from '../pages/cart-submit/cart-submit'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CheckingExistingCustProvider } from '../providers/checking-existing-cust/checking-existing-cust';

import { HttpClientModule } from '@angular/common/http';
import { ServicesExtCustProvider } from '../providers/services-ext-cust/services-ext-cust';
import { NewCustProvider } from '../providers/new-cust/new-cust';
import { SpaLoginProvider } from '../providers/spa-login/spa-login';
import { BookServiceProvider } from '../providers/book-service/book-service';
import { FacebookGraphProvider } from '../providers/facebook-graph/facebook-graph';



@NgModule({
  declarations: [
    MyApp,
    SpaloginPage,
    LogoutPage,
    HomePage,
    ListPage,
    ListDetailsPage,
    CartSubmitPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule, 
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SpaloginPage,
    LogoutPage,
    HomePage,
    ListPage,
    ListDetailsPage,
    CartSubmitPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CheckingExistingCustProvider,
    ServicesExtCustProvider,
    NewCustProvider,
    SpaLoginProvider,
    BookServiceProvider,
    Facebook,
    FacebookGraphProvider
  ]
})
export class AppModule {}
