import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {Consejo1Page} from '../consejos/consejo1/consejo1';

/**
 * Generated class for the ConsejosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-consejos',
  templateUrl: 'consejos.html',
})
export class Consejos {

  consejo1Page = Consejo1Page;

  constructor(public navCtrl: NavController) {
  }
}
