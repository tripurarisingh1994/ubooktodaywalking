import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage'
import { SpaloginPage } from '../pages/spalogin/spalogin';
import { HomePage } from '../pages/home/home';
import { LogoutPage } from '../pages/logout/logout';
// import { CartSubmitPage } from '../pages/cart-submit/cart-submit';
// import { BookServiceProvider } from '../providers/book-service/book-service';


// Side Menu Component

import { SideMenuSettings } from '../shared/side-menu-content/models/side-menu-settings';
import { SideMenuOption } from '../shared/side-menu-content/models/side-menu-option';
import { SideMenuContentComponent } from '../shared/side-menu-content/side-menu-content.component';

// RxJS
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ArrayObservable } from 'rxjs/observable/ArrayObservable';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // Get the instance to call the public methods
  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  rootPage: any = 'SpaloginPage';


  // Options to show in the SideMenuContentComponent
  public options: Array<SideMenuOption>;


  // Setting for the SideMenuContentComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: 'active-side-menu-option'
  };


  private unreadCountObservable: any = new ReplaySubject<number>(0);



  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
    private storage: Storage,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    // private bookService:BookServiceProvider
  ) {
    this.initializeApp();

    this.storage.get('email').then((val)=> {
      this.rootPage = val ? 'HomePage' : 'SpaloginPage';
    })
    //  if(this.bookService.cart.length==0) {
    //    this.menuCtrl.enable(false,'Cart');
    //  }
    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   // { title: 'Cart', component: CartSubmitPage },
    //   { title: 'Logout', component: LogoutPage },
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


      // Initialize some options
      this.initializeOptions();
    });

     // Change the value for the batch every 5 seconds

     setInterval(()=> {
      this.unreadCountObservable.next(Math.floor(Math.random() * 10) + 1);
     }, 5000);

  }

  private initializeOptions(): void {
    this.options = new Array<SideMenuOption>();

    // Load simple menu options
    // -----------------------------

    this.options.push({
      iconName: 'home',
      displayText:'Home',
      component:'HomePage'
    });

    this.options.push({
      iconName: 'log-out',
      displayText: 'Logout',
      component:'LogoutPage'
    });


    // Load options with nested items (with icons)

    this.options.push( {
      displayText:'Settings',
      suboptions:[
        {
          iconName:'medical',
          displayText:'Basic',
          component:''
        },
        {
          iconName:'cog',
          displayText:'Advanced',
          component:''
        }
      ]
    })

  }

  public onOptionsSelected(option: SideMenuOption): void {
    this.menuCtrl.close().then(()=> {

      const params = option.custom && option.custom.param;
      this.nav.setRoot(option.component, params);
    })
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }

  public collapseMenuOptions(): void {
    this.sideMenu.collapseAllOptions();
  }
}
