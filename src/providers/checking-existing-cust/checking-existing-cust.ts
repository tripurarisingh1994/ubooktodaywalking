import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
// import { map, catchError } from 'rxjs/operators';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class CheckingExistingCustProvider  {
  
  private url = 'http://ubooktoday.com/android/walkin/spafetchWalkinCustomerEml?searchKey='
  // _url = "staging.ubooktoday.com/android/walkin?userid=";
  constructor(public http: HttpClient) {
    console.log('Hello CheckingExistingCustProvider Provider');

  }

  searchExistingCust(key,spaid) {
     return this.http.get(this.url+key+'&'+'spa_id='+spaid);
  }
  // existing_cust() {
  //  return this.http.get(this._url);
  //   }

  // existing_cust():Observable<string[]> {
  //  return this.http.get(this._url).pipe(
  //   map(this.extractData),
  //   catchError(this.handleError)
  // );
  //   }

  //   private extractData(res: Response) {
  //     let body = res;
  //     return body || {};
  //   }
    
  //   private handleError (error: Response | any) {
  //     let errMsg: string;
  //     if (error instanceof Response) {
  //       const err = error || '';
  //       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //     } else {
  //       errMsg = error.message ? error.message : error.toString();
  //     }
  //     console.error(errMsg);
  //     return Observable.throw(errMsg);
  //   }
}
