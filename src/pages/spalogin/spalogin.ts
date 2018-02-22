import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SpaLoginProvider } from '../../providers/spa-login/spa-login';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-spalogin',
  templateUrl: 'spalogin.html',
})
export class SpaloginPage {
  private spatodo: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private sPaLogin: SpaLoginProvider,
    private alrtCtrl: AlertController,
    private storage: Storage) {
      
    this.spatodo = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
  }

  loginSpa() {
    this.sPaLogin.spaLogin(this.spatodo.value.user, this.spatodo.value.pass).subscribe(data => {
       console.log(data);
      if (data['message'] == 'Your username/password combination was incorrect') {
        this.presentAlert('Spa Login', 'Incorrect username or password');
      }
      else if(data['message'] == 'Successfully login'){
        this.navCtrl.setRoot(HomePage);
        this.storage.set('fname', data['data'].firstname)
        this.storage.set('lname', data['data'].lastname)
        this.storage.set('email', data['data'].email)
        this.storage.set('spa_id', data['data'].id)
      }
      else {
        this.presentAlert('Spa Login', 'Incorrect username or password'); 
      }
    })
  }

  presentAlert(title: string, msg: string) {
    let alert = this.alrtCtrl.create({
      title: title,
      message: msg,
      buttons: [{
        text: 'OK',
        handler: () => {
        }
      }]
    });
    alert.present();
  }
}
