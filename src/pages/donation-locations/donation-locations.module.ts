import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationLocationsPage } from './donation-locations';

@NgModule({
  declarations: [
    DonationLocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationLocationsPage),
  ],
})
export class DonationLocationsPageModule {}
