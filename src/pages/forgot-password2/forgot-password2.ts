import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-forgot-password2',
  templateUrl: 'forgot-password2.html',
})
export class ForgotPassword2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goSignIn(){
    this.navCtrl.push(HomePage);
  }
}
