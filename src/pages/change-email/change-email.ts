import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-change-email',
  templateUrl: 'change-email.html',
})
export class ChangeEmailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  salvar(){
    let toast = this.toastCtrl.create({
      message: 'Salvo com sucesso!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.present();

    this.navCtrl.setRoot(TabsPage, {tabIndex: 2});
  }

}
