import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FacebookGraphProvider {

  private url='http://ubooktoday.com/android/walkin/fbnewcustomer?';
  private url1='http://ubooktoday.com/android/walkin/customerph?';
  constructor(public http: HttpClient) {
    console.log('Hello FacebookGraphProvider Provider');
  }
   send_facebookDetails(spaid,fname,lname,email) {
      return this.http.get(this.url+'spa_id='+spaid+'&'+'fname='+fname+'&'+'lname='+lname+'&'+'email='+email);
   }

   send_mobile(id,mobile) {
     return this.http.get(this.url1+'id='+id+'&'+'mobile='+mobile)
   }
}
