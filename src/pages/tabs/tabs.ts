import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { ProfilePage } from '../profile/profile';
import { ListRequestsPage } from '../list-requests/list-requests';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  mySelectedIndex;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  dashboardPage = DashboardPage;
  profilePage = ProfilePage;
  listRequestsPage = ListRequestsPage;
}
