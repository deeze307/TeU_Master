import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {TeuServiceProvider} from "../../providers/teu-service/teu-service";
import {OfertasLaboralesDetalle} from "../ofertaslaborales/ofertaslaborales-detalle";
import {LoadingController} from "ionic-angular/index";
import {HomePage} from "../_home/home";


@Component({
  selector: 'page-ofertaslaborales',
  templateUrl: 'ofertaslaborales.html',
  providers: [TeuServiceProvider]
})
export class OfertasLaborales {
    loading: any;
    cards : any;
    rootPage: any;
    drawerOptions: any;
    public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";
    public cardBG = "assets/img/card/teuBGSquare.jpg";

  constructor(public navCtrl: NavController,public teuServiceProvider: TeuServiceProvider, public loadingCtrl: LoadingController) {
      this.rootPage = HomePage;
      this.drawerOptions = {
          handleHeight: 50,
          thresholdFromBottom: 200,
          thresholdFromTop: 200,
          bounceBack: true
      };
      this.presentLoading();
      this.enabledJobs();
  }

    presentLoading() {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...',
            duration: 10000
        });
        this.loading.present();
    }

  enabledJobs(){
    this.teuServiceProvider.getAllEnabledJobs().then(data=>{
      this.cards = data;
        this.loading.dismiss();
    })
  }

  ionViewDidLoad() {
  }

  cardTapped(event, card) {
    this.navCtrl.push(OfertasLaboralesDetalle,{
      item:card
    });
  }

  share(card) {
    alert(card.title + " was shared.");
  }

  listen(card) {
    alert("Listening to " + card.title);
  }

  favorite(card) {
    alert(card.title + " was favorited.");
  }

}
