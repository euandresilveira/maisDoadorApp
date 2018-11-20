import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {


  }

  login(){
    let loading = this.loadingCtrl.create({
      content: 'Por favor, aguarde...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.navCtrl.push(TabsPage);
    }, 2000);
  }

  gosignup(){
    this.navCtrl.push(SignupPage);
  }

  
  goforgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }


}
