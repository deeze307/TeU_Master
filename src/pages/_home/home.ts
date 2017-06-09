import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  drawerOptions: any;



  public backgroundImage = "assets/img/background/BG_TeU.jpg";
  constructor(public navCtrl: NavController) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };

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
