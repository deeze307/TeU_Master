import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ConsejosDetalle } from '../consejos/consejos-detalle';
import {LoadingController} from "ionic-angular/index";
import {TeuServiceProvider} from "../../providers/teu-service/teu-service";
import {HomePage} from "../_home/home";

@Component({
  selector: 'page-consejos',
  templateUrl: 'consejos.html',
  providers: [TeuServiceProvider]
})
export class Consejos {
  rootPage: any;
  selectedItem:any;
  loading: any;
  items: any;

  public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";

  constructor(public navCtrl: NavController,public teuServiceProvider: TeuServiceProvider, public loadingCtrl: LoadingController) {
    this.rootPage = HomePage;
    this.presentLoading();
    this.getTips();
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...',
      duration: 10000
    });
    this.loading.present();
  }

  itemTapped(event, item) {
    this.navCtrl.push(ConsejosDetalle,{
      item:item
    });
  }

  getTips(){
    this.teuServiceProvider.getTips().then(data=>{
      this.items = data;
      console.log(this.items);
      this.loading.dismiss();
    })
  }
}
