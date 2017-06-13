import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TeuServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TeuServiceProvider {
    ping:any;

  constructor(public http: Http) {
    console.log('Hello TeuServiceProvider Provider');
  }

  testPing(){
      return new Promise(resolve =>{
          this.http.get('http://107.170.12.42/teu_laravel/public/teu/ping').map(res => res.json())
              .subscribe(
                  data => {
                      this.ping = data;
                      resolve(this.ping);
                  },
                  err => {
                      console.log("Oops!");
                  }
              );
    });
  }

}
