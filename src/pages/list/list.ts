//import { SlidingItemListPage } from './sliding-item/sliding-item';
//import { SettingsListPage } from './settings/settings';
import { Component } from '@angular/core';
import { Consejos } from '../consejos/consejos';

import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListsPage {
  rootPage: any;
  selectedItem:any;
  items: Array<{ title: string, desc: string }>;

  constructor(public navCtrl: NavController) {
    this.rootPage = ListsPage;
    this.items = [
      //{
      //  title: 'Settings',
      //  page: SettingsListPage
      //},
      //{
      //  title: 'Sliding Item',
      //  page: SlidingItemListPage
      //},
      {
        title: 'Consejo 1',
        desc: 'Desc 1'
      },
      {
        title: 'Consejo 2',
        desc: 'Desc 2'
      },
    ]
  }

  itemTapped(event, item) {
    console.log(item);
    this.navCtrl.push(Consejos,{
      item:item
    });
  }
}
