import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterDonationPage } from '../pages/register-donation/register-donation';
import { AskDonationPage } from '../pages/ask-donation/ask-donation';
import { RegisterInabilityPage } from '../pages/register-inability/register-inability';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    DashboardPage,
    ProfilePage,
    TabsPage,
    RegisterDonationPage,
    AskDonationPage,
    RegisterInabilityPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    DashboardPage,
    ProfilePage,
    TabsPage,
    RegisterDonationPage,
    AskDonationPage,
    RegisterInabilityPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
