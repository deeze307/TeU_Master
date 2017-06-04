import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare const facebookConnectPlugin: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  drawerOptions: any;

  public backgroundImage = "assets/img/background/faro-dark.jpg";
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };

    console.log ("Logueo de Facebook");
    //facebookConnectPlugin.login(['email'], function(response) {
    //  alert('Logged in');
    //  alert(JSON.stringify(response.authResponse));
    //}, function(error){
    //  alert(error);
    //});
  }

  ionViewDidLoad() {
  }
}
