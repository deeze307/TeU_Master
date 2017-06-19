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
    item: Array<{ titulo: string, descripcion: any, movil:string, email: any, id_categoria: number, created_at: string }>;
    showMovil;
    showEmail;

  constructor(params: NavParams) {
      this.showMovil = false;
      this.showEmail = false;
      this.item = [{
          titulo: params.data.item.titulo,
          descripcion: params.data.item.descripcion.split('\\n'),
          movil: params.data.item.movil,
          email: params.data.item.email,
          id_categoria: params.data.item.id_categoria,
          created_at: params.data.item.created_at
      }];

      if(this.item[0].movil == null || this.item[0].movil == ''){
          this.item[0].movil = "N/A";
      }

      if(this.item[0].email == null || this.item[0].email == ''){
          this.item[0].email = "N/A";
      }
      console.log(this.item);
  }

}
