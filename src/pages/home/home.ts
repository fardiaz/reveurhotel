import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignupPage} from '../signup/signup';
import {LoginPage} from '../login/login';
import {MenuPage} from '../menu/menu';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


   signupPage = SignupPage;
   loginPage = LoginPage;
   menuPage = MenuPage;

  constructor(public navCtrl: NavController) {

  }

}
