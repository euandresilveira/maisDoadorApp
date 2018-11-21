import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterDonationPage } from '../register-donation/register-donation';
import { AskDonationPage } from '../ask-donation/ask-donation';
import { RegisterInabilityPage } from '../register-inability/register-inability';

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  registerDonation(){
    this.navCtrl.push(RegisterDonationPage);
  }

  askDonation(){
    this.navCtrl.push(AskDonationPage);
  }

  registerInability(){
    this.navCtrl.push(RegisterInabilityPage);
  }

  
}
