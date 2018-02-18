import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { ServicesExtCustProvider } from '../../providers/services-ext-cust/services-ext-cust';
import { BookServiceProvider } from '../../providers/book-service/book-service';
import { CartSubmitPage } from '../cart-submit/cart-submit'

@IonicPage()
@Component({
  selector: 'page-list-details',
  templateUrl: 'list-details.html',
})
export class ListDetailsPage {

  exist_spa_id;
  exist_id;       // This used for walking user id
  exist_email;
  id_subtreatement;

  dataT = []
  
  // cart_item = {
  //   serviceId:0,
  //   serviceName:''
  // }
  cart_no:number 

  constructor(public navCtrl: NavController, public navParams: NavParams,
        private serExtCust:ServicesExtCustProvider,
        private bookSer:BookServiceProvider,
        private toastCtrl: ToastController) {

        this.exist_email = this.navParams.get('email')
        this.exist_spa_id = this.navParams.get('spaid')
        this.exist_id = this.navParams.get('id')
        this.id_subtreatement = this.navParams.get('id_subtreatement')
  }

  ionViewDidLoad() {
    this.serExtCust.serviceExtCust(this.exist_id,this.exist_email,this.exist_spa_id).subscribe (data=> {
        let dataTreat = data['datatreat']

        for(let i=0; i < dataTreat.length; ++i) {
          // console.log(dataTreat[i].upload_image);
          if(dataTreat[i].id_subtreatement == this.id_subtreatement) {
            this.dataT.push(dataTreat[i]);  
            // if(this.dataT[i].upload_image == "" ){
            //       this.dataT[i].upload_image = "profile.jpg";
            //   }
              // console.log(this.dataT);
          }
        }
        for(let i=0; i < this.dataT.length; ++i){
            // console.log(this.dataT[i].upload_image);
            if(this.dataT[i].upload_image == "" || this.dataT[i].upload_image == null ){
                    this.dataT[i].upload_image = "profile.jpg";
                }
                // console.log(this.dataT[i].upload_image);
        }
    })

  }

  // Booking Service

      bookService(serviceId,serviceName) { 
        let count=0;
        console.log(this.bookSer.cart);

        if(this.bookSer.cart.length > 0) {
        for(let i=0;i<this.bookSer.cart.length; i++){
            if(this.bookSer.cart[i] == serviceId) {
                count++
            }
        }
        if(count > 0) {
          this.presentToast('service already in cart');
        }
        else {
          // this.bookSer.x+='&serviceId%5B%5D='+serviceId;
          this.bookSer.cart.push(serviceId);
          this.bookSer.cartName.push(serviceName);
          this.presentToast('service add successfully');
        }
      } else {
        // this.bookSer.x+='serviceId%5B%5D='+serviceId;
        this.bookSer.cartName.push(serviceName);
        this.bookSer.cart.push(serviceId);
        this.presentToast('service add successfully');
      }
      this.cart_no = this.bookSer.cart.length;
    }

      presentToast(msg:string) {
        let toast = this.toastCtrl.create({
          message: msg,
          duration: 2000,
          position: 'bottom'
        });
        toast.present();
      }

      ionViewCanEnter() {
        this.cart_no = this.bookSer.cart.length;
      }

      goCartSubmit() {
        this.navCtrl.push(CartSubmitPage,{spaId:this.exist_spa_id, walkingId:this.exist_id});
      }
}
