import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListRequestsPage } from './list-requests';

@NgModule({
  declarations: [
    ListRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListRequestsPage),
  ],
})
export class ListRequestsPageModule {}
