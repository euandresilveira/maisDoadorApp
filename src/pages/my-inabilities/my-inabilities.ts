import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { RegisterInabilityPage } from '../register-inability/register-inability';

@IonicPage()
@Component({
  selector: 'page-my-inabilities',
  templateUrl: 'my-inabilities.html',
})
export class MyInabilitiesPage {

  showItem = [true, true];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  excluir(index: number){
    let toast = this.toastCtrl.create({
      message: 'Removido com sucesso!',
      duration: 1500,
      position: 'bottom'
    });
  
    toast.present();

    this.showItem[index] = false;
  }

}
