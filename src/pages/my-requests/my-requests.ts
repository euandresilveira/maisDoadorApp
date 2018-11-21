import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AskDonationPage } from '../ask-donation/ask-donation';

@IonicPage()
@Component({
  selector: 'page-my-requests',
  templateUrl: 'my-requests.html',
})
export class MyRequestsPage {

  showItem = [true, true, true, true, true, true];
  pacienteNome = ["Kevin Manoel Moraes", "Helena Luana da Rocha", "Gustavo Renan Fernandes", "Mariana Helena Rafaela Oliveira", "Osvaldo Arthur Lucca Alves", "Rebeca Louise Eduarda Costa"];
  local = ["hcssa", "uccaj", "uchsa", "hcssa", "uchsa", "uchs"];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
    var index = navParams.get('index');
    this.pacienteNome[index] = navParams.get('nome');
    this.local[index] = navParams.get('local');
  }

  editar(index: number){
    this.navCtrl.push(AskDonationPage, {nome : this.pacienteNome[index], index: index, local: this.local[index]}, { });
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
