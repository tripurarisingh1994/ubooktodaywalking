import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListDetailsPage } from './list-details';

@NgModule({
  declarations: [
    ListDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListDetailsPage),
  ],
})
export class ListDetailsPageModule {}
