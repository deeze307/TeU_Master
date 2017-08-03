//import { SideMenuPage } from '../pages/side-menu/side-menu';
//import { IonicOfficialComponentsPage } from '../pages/ionic-official-components/ionic-official-components';
//import { LoginListPage } from '../pages/login/login';
//import { ThemingPage } from '../pages/theming/theming';
import { AppState } from './app.global';
import { AboutPage } from '../pages/about/about';

import { Component, ViewChild } from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/_home/home';
import { OfertasLaborales } from '../pages/ofertaslaborales/ofertaslaborales';
import { Consejos } from '../pages/consejos/consejos';
import { ContactPage } from '../pages/contact/contact';
import { Sorteos} from '../pages/sorteos/sorteos';

import {Push,PushToken} from '@ionic/cloud-angular';

import { Subject } from 'rxjs';
import {App} from "ionic-angular/index";

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  activePage = new Subject();

  pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
  rightMenuItems: Array<{ icon: string, active: boolean }>;
  state: any;

  constructor(public app:App,public platform: Platform, public statusBar: StatusBar, public splashscreen: SplashScreen, public global: AppState, public push:Push) {
    this.initializeApp();
    this.rightMenuItems = [
      //{ icon: 'home', active: true },
      //{ icon: 'alarm', active: false },
      //{ icon: 'analytics', active: false },
      //{ icon: 'archive', active: false },
      //{ icon: 'basket', active: false },
      //{ icon: 'body', active: false },
      //{ icon: 'bookmarks', active: false },
      //{ icon: 'camera', active: false },
      //{ icon: 'beer', active: false },
      //{ icon: 'power', active: false },
    ];

    this.pages = [
      { title: 'Inicio', component: HomePage, active: true, icon: 'home' },
      { title: 'Ofertas Laborales', component: OfertasLaborales, active: false, icon: 'home' },
      { title: 'Consejos',component: Consejos,active:false,icon:'home'},
      { title: 'Contacto', component: ContactPage, active: false, icon: 'archive' },
      { title: 'Sorteos', component: Sorteos, active: false, icon: 'archive' },
      { title: 'Staff', component: AboutPage, active: false, icon: 'archive' },
    ];

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });

      this.registerToken();
      this.getNotifications();
  }

    //**** Notificaciones ****//
    private registerToken(){
        this.push.register().then((t: PushToken) => {
            return this.push.saveToken(t,{
                ignore_user: true
            });
        }).then((t: PushToken) => {
            console.log('Token saved:', t.token);
        });
    }

    private getNotifications(){
        this.push.rx.notification()
            .subscribe((msg) => {
                alert(msg.title + ': ' + msg.text);
            });
    }
    //************************//

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashscreen.hide();

      //Registration of push in Android and Windows Phone
      this.platform.registerBackButtonAction(() => {
        let nav = this.app.getActiveNav();
        let view = this.nav.getActive();
        if (nav.canGoBack()){ //Can we go back?
          nav.pop();
        }else if (view.component.name != 'HomePage' ){ //Si no estamos en la pagina ppal
          this.nav.setRoot(this.rootPage);
        }
        else{
          //this.platform.exitApp(); //Exit from app
          return navigatior['app'].exitApp();
        }
      });
      //this.platform.registerBackButtonAction(() => {
      //  //returns view controller obj
      //  let view = this.nav.getActive();
      //  //prints out component name as string
      //  if (view.component.name == 'HomePage')
      //  {this.platform.exitApp();}
      //  else if (view.component.name == 'OfertasLaborales' || view.component.name == 'Consejos' || view.component.name == 'ContactPage' || view.component.name == 'Sorteos' || view.component.name == 'Staff')
      //  {this.nav.setRoot(this.rootPage);}
      //});
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage.next(page);
  }

  rightMenuClick(item) {
    this.rightMenuItems.map(menuItem => menuItem.active = false);
    item.active = true;
  }
}
