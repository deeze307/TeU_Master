import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public backgroundImage = "assets/img/background/faro-dark.jpg";

  constructor(public navCtrl: NavController) {

  }

}
