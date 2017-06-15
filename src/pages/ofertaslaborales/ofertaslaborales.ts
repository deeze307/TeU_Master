import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TeuServiceProvider} from "../../providers/teu-service/teu-service";

@Component({
  selector: 'page-ofertaslaborales',
  templateUrl: 'ofertaslaborales.html',
  providers: [TeuServiceProvider]
})
export class OfertasLaborales {
  cards : any;
  //cards = [
  //  {
  //    imageUrl: 'assets/img/card/TeU2.jpg',
  //    title: '#EmpleosTeU',
  //    description: 'Administrativo Contable'
  //  },
  //  {
  //    imageUrl: 'assets/img/card/TeU3.jpg',
  //    title: '#EmpleosTeU',
  //    description: 'Profesor de Inglés'
  //  },
  //  {
  //    imageUrl: 'assets/img/card/TeU4.jpg',
  //    title: '#EmpleosTeU',
  //    description: 'Vendedor / Distribuidor'
  //  },
  //  {
  //    imageUrl: 'assets/img/card/TeU5.jpg',
  //    title: '#EmpleosTeU',
  //    description: 'Secretaria Administrativa'
  //  },];

  drawerOptions: any;
  public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";
  public cardBG = "assets/img/card/teuBGSquare.jpg";

  constructor(public navCtrl: NavController,public teuServiceProvider: TeuServiceProvider) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
    this.enabledJobs();
  }

  enabledJobs(){
    this.teuServiceProvider.getAllEnabledJobs().then(data=>{
      this.cards = data;
      console.log(this.cards);
      //this.loading.dismiss();
    })
  }

  ionViewDidLoad() {
  }

  cardTapped(card) {
    alert(card.title + " was tapped.");
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
