import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.icons = ['nutrition', 'pizza', 'nutrition', 'pizza', 'ice-cream', 'nutrition',
    'nutrition', 'pizza', 'nutrition', 'ice-cream'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Ingredient' + i,
        note: 'This is ingredient #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
