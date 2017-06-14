import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TeuServiceProvider} from "../../providers/teu-service/teu-service";
import {LoadingController} from "ionic-angular/index";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [TeuServiceProvider]
})
export class HomePage {
  drawerOptions: any;
  posts: any;
    loading: any;

  public backgroundImage = "assets/img/background/BG_TeU.jpg";
  constructor(public navCtrl: NavController, private http:Http, public teuServiceProvider: TeuServiceProvider, public loadingCtrl: LoadingController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
      //this.presentLoading();
  }

  ionViewDidLoad() {
  }

  presentLoading() {
      this.loading = this.loadingCtrl.create({
        content: 'Cargando...',
        duration: 10000,
        dismissOnPageChange: true
      });
      this.loading.present();
  }
}
