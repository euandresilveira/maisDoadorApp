import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-register-donation',
  templateUrl: 'register-donation.html',
})
export class RegisterDonationPage {

  data = new Date();
  local = "";
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = navParams.get('data');
    this.local = navParams.get('local');
    this.index = navParams.get('index');
  }

  salvar(){
    if(this.index == null){
      this.navCtrl.push(TabsPage);
    }
    else{
      this.navCtrl.pop();
    }
  }

}
