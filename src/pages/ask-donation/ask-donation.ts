import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-ask-donation',
  templateUrl: 'ask-donation.html',
})
export class AskDonationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  salvar(){
    this.navCtrl.push(TabsPage);
  }

}
