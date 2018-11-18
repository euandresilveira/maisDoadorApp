import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AskDonationPage } from './ask-donation';

@NgModule({
  declarations: [
    AskDonationPage,
  ],
  imports: [
    IonicPageModule.forChild(AskDonationPage),
  ],
})
export class AskDonationPageModule {}
