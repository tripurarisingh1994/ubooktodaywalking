import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesExtCustProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesExtCustProvider {

  private url="http://ubooktoday.com/android/walkin/showServicesExtCust?"
  // private url="http://192.168.200.9/ubooktoday/android/walkin/showServicesExtCust?"
  constructor(public http: HttpClient) {
    console.log('Hello ServicesExtCustProvider Provider');
  }
 
  serviceExtCust(id,email,spa_id) {
    console.log("in ServiceExisting Cust Provider");
    console.log(id);
    console.log(email);
    console.log(spa_id);
    return this.http.get(this.url+'id='+id+'&'+'spa_id='+spa_id+'&'+'email='+email);
  }
}
