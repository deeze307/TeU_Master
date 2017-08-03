import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from "../_home/home";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  rootPage : any;

  public backgroundImage = "assets/img/background/BG_TeU_SIN_TEXTO.jpg";

  constructor(public navCtrl: NavController) {
    this.rootPage = HomePage;
  }

itemTapped(url){
  window.open(url, "_system");
}

}
