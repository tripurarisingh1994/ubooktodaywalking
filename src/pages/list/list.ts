import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicesExtCustProvider } from '../../providers/services-ext-cust/services-ext-cust';
import { ListDetailsPage } from '../list-details/list-details';
import { BookServiceProvider } from '../../providers/book-service/book-service';
import { CartSubmitPage } from '../cart-submit/cart-submit';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 
  ex_spa_id;
  ex_id;
  ex_email;
  ex_mob;
  ex_fn;
  ex_ln;
  ex_email_id;

  /**
   * @dataNew is used for storing data of @datanew from response
   * @dataTeat is usedfor storing data of @datateat from response
   */

  dataNew = []
  cart_no:number    // Storing cart number
 
  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    private serExtCust:ServicesExtCustProvider,
    private bookService:BookServiceProvider) {
              this.ex_email    = this.navParams.get('ext_email');
              this.ex_id       = this.navParams.get('ext_id');
              this.ex_spa_id   = this.navParams.get('ext_spa_id');            
              this.ex_mob      = this.navParams.get('ext_mob');            
              this.ex_fn       = this.navParams.get('ext_fn');            
              this.ex_ln       = this.navParams.get('ext_ln');    
              this.ex_email_id = this.navParams.get('ext_email_id');    
              console.log("email "+this.ex_email)        
              console.log(this.ex_id)        
              console.log(this.ex_mob)        
              console.log(this.ex_fn)        
              console.log(this.ex_ln)        
              console.log("email_id "+this.ex_email_id)        
  }

    goToListDetails(val) {
      this.navCtrl.push(ListDetailsPage, {
        id_subtreatement:val,
        email:this.ex_email_id,
        spaid:this.ex_spa_id,
        id:this.ex_id
      })
    }


  ionViewDidLoad() {
  
    this.serExtCust.serviceExtCust(this.ex_id,this.ex_email_id,this.ex_spa_id).subscribe (data=> {
       console.log(data);
      let dataN = data['datanew']
      let dataTreat = data['datatreat']
      let count;
      
      for(let i=0; i<dataN.length; i++) {
        count =0;
        for(let j=0; j<dataTreat.length; j++) {
          if(dataN[i].id_subtreatement == dataTreat[j].id_subtreatement) {
              count++;
          }
        }
        if(count>0){
          this.dataNew.push(dataN[i]);
        }
      }
    })
  }

  ionViewCanEnter() {
    this.cart_no = this.bookService.cart.length;
  }

  goCartSubmit() {
   this.navCtrl.push(CartSubmitPage,{spaId:this.ex_spa_id, walkingId:this.ex_id});
  }
}
