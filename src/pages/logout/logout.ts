import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SpaloginPage } from '../spalogin/spalogin';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  fname
  lname
  email
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage) {

    this.storage.get('fname').then((val) => {
      this.fname = val;
    });
    this.storage.get('lname').then((val) => {
      this.lname = val;
    });
    this.storage.get('email').then((val) => {
      this.email = val;
    });
  }

  ionViewDidLoad() {
   
  }

    spaLogout() {
      this.storage.clear();
      this.navCtrl.setRoot(SpaloginPage);
    }

}
