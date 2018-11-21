import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App } from 'ionic-angular';
import { ChangeNamePage } from '../change-name/change-name';
import { ChangeEmailPage } from '../change-email/change-email';
import { ChangePasswordPage } from '../change-password/change-password';
import { HomePage } from '../home/home';
import { MyRequestsPage } from '../my-requests/my-requests';
import { MyDonationsPage } from '../my-donations/my-donations';
import { MyInabilitiesPage } from '../my-inabilities/my-inabilities';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private app: App) {
  }

  changeName(){
    this.navCtrl.push(ChangeNamePage);
  }

  changeEmail(){
    this.navCtrl.push(ChangeEmailPage);
  }

  changePassword(){
    this.navCtrl.push(ChangePasswordPage);
  }

  myRequests(){
    this.navCtrl.push(MyRequestsPage);
  }

  myDonations(){
    this.navCtrl.push(MyDonationsPage);
  }

  myInabilities(){
    this.navCtrl.push(MyInabilitiesPage);
  }

  signOut(){
    let loading = this.loadingCtrl.create({
      content: 'Por favor, aguarde...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
      this.app.getRootNav().setRoot(HomePage, {}, {animate: true, direction: 'forward'});
    }, 2000);
  }
}
