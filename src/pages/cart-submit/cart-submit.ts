import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { BookServiceProvider } from '../../providers/book-service/book-service';
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-cart-submit',
  templateUrl: 'cart-submit.html',
})
export class CartSubmitPage {
  cartData = []
  spaId
  walkingUserId
  cartDisplay:boolean
  serviceID = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private bookService:BookServiceProvider,
  private alrtCtrl: AlertController) {

    this.spaId = this.navParams.get('spaId')
    this.walkingUserId = this.navParams.get('walkingId')
   
    if(this.bookService.cart.length==0) {
      this.cartDisplay=false
    }else {
      this.cartDisplay=true
    }
  }

  ionViewDidLoad() {
    this.cartDeatils();
  }

  deleteItem(key) {
    let index = this.bookService.cartName.indexOf(key, 0);
      if (index > -1) {
        this.bookService.cart.splice(index, 1);
        this.bookService.cartName.splice(index, 1);
      }
    // this.bookService.cart.pop();
    // this.bookService.cartName.pop();
    if(this.bookService.cart.length==0) {
      this.cartDisplay=false
    }
    this.cartData = [];
    this.serviceID = []
    this.cartDeatils();
  }

  submit() {
    this.bookService.bookingServices(this.serviceID,this.spaId,this.walkingUserId).subscribe(data=> {
          if(data['message']=='Successfully Booked') {
            this.bookService.cart=[];
            this.presentAlert('UbookToday',"Booking successfully.Please have a sit!")
          }else if(data['message']=='Staff not available for all the services! Please remove some service and try again.'){
            console.log('Booking Failed')
            this.presentAlert('UbookToday','Booking Failed')
          }
        })

        this.bookService.x='';
  }

     presentAlert(title:string,msg:string) {
        let alert = this.alrtCtrl.create({
          title: title,
          message: msg,
          buttons: [ {
            text:'OK',
            handler: () => { 
             this.navCtrl.setRoot(HomePage);
            }
          }]
        });
        alert.present();
      }
    
      cartDeatils() {
          for(let i=0; i<this.bookService.cart.length; i++) {
            this.cartData.push(this.bookService.cartName[i])
            this.serviceID.push(this.bookService.cart[i])
          }
      }
}
