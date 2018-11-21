import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyInabilitiesPage } from './my-inabilities';

@NgModule({
  declarations: [
    MyInabilitiesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyInabilitiesPage),
  ],
})
export class MyInabilitiesPageModule {}
