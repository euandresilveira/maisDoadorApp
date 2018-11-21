import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RegisterDonationPage } from '../register-donation/register-donation';

@IonicPage()
@Component({
  selector: 'page-my-donations',
  templateUrl: 'my-donations.html',
})

export class MyDonationsPage {

  showItem = [true, true, true];
  local = ["hcssa", "uccaj", "uchsa"];
  localDesc = ["Hemocentro Coordenador - Salvador", "UC Hemoba - Sac Cajazeiras", "UC Hemoba - Obras Sociais Irmã Dulce"];
  data = [new Date("19/11/2018"), new Date("31/06/2018"), new Date("06/12/2017")];

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    var index = navParams.get('index');
    this.local[index] = navParams.get('local');
    this.data[index] = new Date(navParams.get('data'));
  }

  editar(index: number){
    this.navCtrl.push(RegisterDonationPage, { local: this.local[index], data: this.data[index], index: index}, { });
  }

  excluir(index: number){
    this.showItem[index] = false;

    let toast = this.toastCtrl.create({
      message: 'Removido com sucesso!',
      duration: 1500,
      position: 'bottom'
    });
  
    toast.present();
  }

}
