import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterDonationPage } from './register-donation';

@NgModule({
  declarations: [
    RegisterDonationPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterDonationPage),
  ],
})
export class RegisterDonationPageModule {}
