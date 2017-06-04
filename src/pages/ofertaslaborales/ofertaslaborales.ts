import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-ofertaslaborales',
  templateUrl: 'ofertaslaborales.html'
})
export class OfertasLaborales {
  cards = [
    {
      imageUrl: 'assets/img/card/nin-live.png',
      title: 'Nine Inch Nails Live',
      description: 'The most popular industrial group ever, and largely responsible for bringing the music to a mass audience.'
    },
    {
      imageUrl: 'assets/img/card/badu-live.png',
      title: 'Erykah Badu',
      description: 'American singer-songwriter, record producer, activist, and actress, Badu\'s style is a prime example of neo-soul.'
    },
    {
      imageUrl: 'assets/img/card/queen-live.png',
      title: 'Queen',
      description: 'The British rock band formed in London in 1970, and is considered one of the biggest stadium rock bands in the world.'
    },
    {
      imageUrl: 'assets/img/card/bjork-live.jpg',
      title: 'Björk',
      description: 'Björk is an Icelandic singer, songwriter and actress.'
    },
    {
      imageUrl: 'assets/img/card/rundmc-live.png',
      title: 'Run-D.M.C.',
      description: 'The American hip hop group widely acknowledged as one of the most influential acts in the history of hip hop.'
    },];

  drawerOptions: any;
  public backgroundImage = "assets/img/background/faro-dark.jpg";
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
