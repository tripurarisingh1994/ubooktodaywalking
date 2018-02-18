import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CartSubmitPage } from './cart-submit';

@NgModule({
  declarations: [
    CartSubmitPage,
  ],
  imports: [
    IonicPageModule.forChild(CartSubmitPage),
  ],
})
export class CartSubmitPageModule {}
