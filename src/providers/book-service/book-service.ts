import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BookServiceProvider {

  public cart= [];
  public cartName = [];
  public x:string='';
  // public cartno:number;
  private url = "https://ubooktoday.com/android/walkin/spasavewalkinbooking?";
  // private url = "http://staging.ubooktoday.com/android/walkin/spasavewalkinbooking?";
  constructor(public http: HttpClient) {
    console.log('Hello BookServiceProvider Provider');
  }
  
  bookingServices(serId,spaId,walkinUserId) {
    for(let i=0;i<serId.length;i++){
      if(i==0){
        this.x+='serviceId%5B%5D='+serId[i];
      }else{
        this.x+='&serviceId%5B%5D='+serId[i];
      }
    }
    // return this.http.get(this.url+'serviceId='+serId+'&'+'spaId='+spaId+'&'+'walkin_user_id='+walkinUserId);
    return this.http.get(this.url+this.x+'&'+'spaId='+spaId+'&'+'walkin_user_id='+walkinUserId);
   
  }
}
