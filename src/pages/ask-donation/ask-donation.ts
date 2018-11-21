import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-ask-donation',
  templateUrl: 'ask-donation.html',
})
export class AskDonationPage {
  nome = "";
  local = "";
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nome = navParams.get('nome');
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
