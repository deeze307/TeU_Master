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
    tips:any;
    jobs:any;

  constructor(public http: Http) {
  }

    testPing(){
        return new Promise(resolve =>{
            this.http.get('http://107.170.12.42/teu_laravel/public/ping').map(res => res.json())
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

    getTips(){
        return new Promise(resolve=>{
            this.http.get('http://107.170.12.42/teu_laravel/public/tips').map(res => res.json())
                .subscribe(
                    data =>{
                        this.tips = data;
                        resolve(this.tips);
                    },
                    err => {
                        console.log("Oops!");
                    }
                );
        });
    }

    getAllEnabledJobs(){
        return new Promise(resolve=>{
            this.http.get('http://107.170.12.42/teu_laravel/public/enabledjobs').map(res=>res.json())
                .subscribe(
                    data =>{
                        this.jobs = data;
                        resolve(this.jobs);
                    },
                    err=>{
                        console.log("No se pudieron obtener los Empleos Disponibles");
                    }
                );
        });
    }

    getStaff(){
        return new Promise(resolve=>{
            this.http.get('http://107.170.12.42/teu_laravel/public/staff').map(res=>res.json())
                .subscribe(
                    data =>{
                        this.jobs = data;
                        resolve(this.jobs);
                    },
                    err=>{
                        console.log("No se pudieron obtener los Datos del Staff");
                    }
                );
        });
    }

}
