import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the NewCustProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewCustProvider {

  private url ="http://ubooktoday.com/android/walkin/newcustomer?";
  // private url ="http://192.168.200.9/ubooktoday/android/walkin/newcustomer?";
  constructor(public http: HttpClient) {
    console.log('Hello NewCustProvider Provider');
  }

  newCustReg(fname,lname,email,mobile,spaid) {
    return this.http.get(this.url+'email='+email+'&'+'fname='+fname+'&'+'lname='+lname+'&'+'mobile='+mobile+'&'+'spa_id='+spaid);
  }
}
