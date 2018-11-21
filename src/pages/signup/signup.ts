import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
     public loadingCtrl: LoadingController) {
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
}

