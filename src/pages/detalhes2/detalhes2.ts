import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Detalhes2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhes2',
  templateUrl: 'detalhes2.html',
})
export class Detalhes2Page {

  item1 = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

 this.item1 = this.navParams.get ('dados');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detalhes2Page');
  }

}
