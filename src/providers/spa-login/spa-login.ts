import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SpaLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpaLoginProvider {

  private url="http://ubooktoday.com/android/walkin/spauserlogin?";
  // url="http://192.168.200.9/ubooktoday/android/walkin/spauserlogin?";
  constructor(public http: HttpClient) {
    console.log('Hello SpaLoginProvider Provider');
  }
  spaLogin(user,pass) {
    return this.http.get(this.url+'login_email='+user+'&'+'login_password='+pass);
  }
 
}
