import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-register-inability',
  templateUrl: 'register-inability.html',
})
export class RegisterInabilityPage {
  showDiasInaptidao = true;
  buttonEnabled = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onChangeTipoInaptidao(value) {

    if (value == 0) {
      this.showDiasInaptidao = true;
    }
    if (value == 1){
      this.showDiasInaptidao = false;
    }
  }

  salvar(){
    this.navCtrl.push(TabsPage);
  }
}
