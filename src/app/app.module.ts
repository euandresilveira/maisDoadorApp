import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { ForgotPassword2Page } from '../pages/forgot-password2/forgot-password2';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { RegisterDonationPage } from '../pages/register-donation/register-donation';
import { AskDonationPage } from '../pages/ask-donation/ask-donation';
import { RegisterInabilityPage } from '../pages/register-inability/register-inability';
import { ChangeNamePage } from '../pages/change-name/change-name';
import { ChangeEmailPage } from '../pages/change-email/change-email';
import { ChangePasswordPage } from '../pages/change-password/change-password';
import { ListRequestsPage } from '../pages/list-requests/list-requests';
import { DonationLocationsPage } from '../pages/donation-locations/donation-locations';

import { GoogleMapComponent } from '../components/google-map/google-map';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    ForgotPasswordPage,
    ForgotPassword2Page,
    DashboardPage,
    ProfilePage,
    TabsPage,
    RegisterDonationPage,
    AskDonationPage,
    RegisterInabilityPage,
    ChangeNamePage,
    ChangeEmailPage,
    ChangePasswordPage,
    ListRequestsPage,
    DonationLocationsPage,
    GoogleMapComponent
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
    ForgotPasswordPage,
    ForgotPassword2Page,
    DashboardPage,
    ProfilePage,
    TabsPage,
    RegisterDonationPage,
    AskDonationPage,
    RegisterInabilityPage,
    ChangeNamePage,
    ChangeEmailPage,
    ChangePasswordPage,
    ListRequestsPage,
    DonationLocationsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
