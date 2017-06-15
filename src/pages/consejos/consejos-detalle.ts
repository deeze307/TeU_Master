import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';


@Component({
  selector: 'page-consejos-detalle',
  templateUrl: 'consejos-detalle.html',
})
export class ConsejosDetalle {
  item;
  public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";
  public backgroundCard = "assets/img/background/consejoBG.jpg";

  constructor(params: NavParams) {
    this.item = params.data.item;
  }


}
