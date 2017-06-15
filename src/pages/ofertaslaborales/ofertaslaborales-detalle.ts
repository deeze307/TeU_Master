import { Component } from '@angular/core';
import {NavParams} from "ionic-angular/index";

@Component({
  selector: 'page-ofertaslaborales-detalle',
  templateUrl: 'ofertaslaborales-detalle.html'
})
export class OfertasLaboralesDetalle {
    drawerOptions: any;
    public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";
    public backgroundCard = "assets/img/background/consejoBG.jpg";
    item;
    showMovil;
    showEmail;

  constructor(params: NavParams) {
      this.showMovil = false;
      this.showEmail = false;
      this.item = params.data.item;

      if(this.item.movil == null){
          this.item.movil = "N/A";
      }

      if(this.item.email == null){
          this.item.email = "N/A";
      }
  }

  ionViewDidLoad() {
  }

  cardTapped(card) {
    alert(card.title + " was tapped.");
  }

  share(card) {
    alert(card.title + " was shared.");
  }

}
