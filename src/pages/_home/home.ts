import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {TeuServiceProvider} from "../../providers/teu-service/teu-service";
import {LoadingController} from "ionic-angular/index";
import {Push,PushToken} from '@ionic/cloud-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
    providers: [TeuServiceProvider]
})
export class HomePage {
  drawerOptions: any;
  posts: any;
    loading: any;

  public backgroundImage = "assets/img/background/BG_TeU.jpg";
  constructor(public navCtrl: NavController, private http:Http, public teuServiceProvider: TeuServiceProvider, public loadingCtrl: LoadingController, public push:Push) {
    this.drawerOptions = {
      handleHeight: 50,
      thresholdFromBottom: 200,
      thresholdFromTop: 200,
      bounceBack: true
    };

    //Registro el dispositivo para poder recibir notificaciones
    try{
      this.push.register().then((t:PushToken) => {
        return this.push.saveToken(t);
      }).then((t:PushToken) => {
        console.log('Token saved:', t.token);
      });

      this.push.rx.notification()
          .subscribe((msg) => {
            alert(msg.title + ': ' + msg.text);
          });
    }catch(ex){

    }
  }


}
