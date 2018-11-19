import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-register-donation',
  templateUrl: 'register-donation.html',
})
export class RegisterDonationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  salvar(){
    this.navCtrl.push(TabsPage);
  }

}
