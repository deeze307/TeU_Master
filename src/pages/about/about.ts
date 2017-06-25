import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LoadingController} from "ionic-angular/index";
import {TeuServiceProvider} from "../../providers/teu-service/teu-service";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
    loading:any;
    staff: any;
    preStaff:Array<{nombre:string,apellido:string,telefono:string,email:string,id_rol:string,descripcion:string}>;
  public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";

  constructor(public navCtrl: NavController, public teuServiceProvider: TeuServiceProvider, public loadingCtrl: LoadingController) {
      this.presentLoading();
      this.getStaff();
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...',
      duration: 10000
    });
    this.loading.present();
  }

  getStaff(){
      this.teuServiceProvider.getStaff().then(dataObject=>{
          this.staff=dataObject;
          console.log(this.staff);
          this.loading.dismiss();
      })
  }
}
