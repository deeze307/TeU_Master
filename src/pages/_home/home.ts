import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TeuServiceProvider} from "../../providers/teu-service/teu-service";




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [TeuServiceProvider]
})
export class HomePage {
  drawerOptions: any;
  posts: any;

  public backgroundImage = "assets/img/background/BG_TeU.jpg";
  constructor(public navCtrl: NavController, private http:Http, public teuServiceProvider: TeuServiceProvider) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };
      this.testPing();
  }

  ionViewDidLoad() {
  }

    // Testeo de ping desde servidor.
  testPing(){
      this.teuServiceProvider.testPing().then(data=>{
          this.posts = data;
          console.log(this.posts);
      })
  }
}
