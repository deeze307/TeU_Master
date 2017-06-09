import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";

  constructor(public navCtrl: NavController) {

  }

}
