import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

username: string;
password: string;
  constructor(public navCtrl: NavController) {


  }

  login(){
    this.navCtrl.push(TabsPage);
  }

  gosignup(){
    this.navCtrl.push(SignupPage);
  }

  
  goforgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }


}
