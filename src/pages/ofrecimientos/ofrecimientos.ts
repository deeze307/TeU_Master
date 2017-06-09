import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';

/**
 * Generated class for the OfrecimientosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-ofrecimientos',
  templateUrl: 'ofrecimientos.html',
})
export class Ofrecimientos {

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfrecimientosPage');
  }

}
