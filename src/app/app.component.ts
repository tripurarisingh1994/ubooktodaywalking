import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage'
import { SpaloginPage } from '../pages/spalogin/spalogin';
import { HomePage } from '../pages/home/home';
import { LogoutPage } from '../pages/logout/logout';
// import { CartSubmitPage } from '../pages/cart-submit/cart-submit';
// import { BookServiceProvider } from '../providers/book-service/book-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SpaloginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private storage: Storage,
    // private menuCtrl: MenuController,
    // private bookService:BookServiceProvider
  ) {
    this.initializeApp();

    this.storage.get('email').then((val)=> {
      this.rootPage = val ? HomePage : SpaloginPage;
    })
    //  if(this.bookService.cart.length==0) {
    //    this.menuCtrl.enable(false,'Cart');
    //  }
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      // { title: 'Cart', component: CartSubmitPage },
      { title: 'Logout', component: LogoutPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
