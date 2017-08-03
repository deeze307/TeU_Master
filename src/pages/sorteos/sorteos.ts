import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {HomePage} from "../_home/home";

/**
 * Generated class for the SorteosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-sorteos',
  templateUrl: 'sorteos.html',
})
export class Sorteos {
  rootPage: any;

  public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";
  constructor(public navCtrl: NavController) {
    this.rootPage = HomePage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SorteosPage');
  }

}
