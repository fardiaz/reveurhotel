import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MainPage} from '../main/main';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  

  private rootPage;
  private mainPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  		this.rootPage = MainPage;
  		this.mainPage = MainPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openPage(p) {
    this.rootPage = p;
  }

}