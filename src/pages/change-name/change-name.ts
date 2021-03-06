import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-change-name',
  templateUrl: 'change-name.html',
})
export class ChangeNamePage {

  name = "Rodrigo";
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  salvar(){
    let toast = this.toastCtrl.create({
      message: 'Salvo com sucesso!',
      duration: 1500,
      position: 'bottom'
    });
  
    toast.present();

    this.navCtrl.setRoot(TabsPage, {tabIndex: 3});
  }

}
