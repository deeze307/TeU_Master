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
    item:any;
    showMovil;
    showEmail;

  constructor(params: NavParams) {
      this.showMovil = false;
      this.showEmail = false;
      this.item = params.data;
      if(this.item.item.movil == null || this.item.item.movil == ''){
          this.item.item.movil = "N/A";
      }
      if(this.item.item.email == null || this.item.item.email == ''){
          this.item.item.email = "N/A";
      }
  }

}
