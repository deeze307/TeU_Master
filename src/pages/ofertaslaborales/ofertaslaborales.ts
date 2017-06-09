import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ofertaslaborales',
  templateUrl: 'ofertaslaborales.html'
})
export class OfertasLaborales {
  cards = [
    {
      imageUrl: 'assets/img/card/TeU2.jpg',
      title: '#EmpleosTeU',
      description: 'Administrativo Contable'
    },
    {
      imageUrl: 'assets/img/card/TeU3.jpg',
      title: '#EmpleosTeU',
      description: 'Profesor de Inglés'
    },
    {
      imageUrl: 'assets/img/card/TeU4.jpg',
      title: '#EmpleosTeU',
      description: 'Vendedor / Distribuidor'
    },
    {
      imageUrl: 'assets/img/card/TeU5.jpg',
      title: '#EmpleosTeU',
      description: 'Secretaria Administrativa'
    },];

  drawerOptions: any;
  public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
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
