import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

username: string;
password: string;
  constructor(public navCtrl: NavController) {


  }

  login(){
    console.log("Username: " + this.username)
    console.log("Password: " + this.password)
  }

  gosignup(){
    this.navCtrl.push(SignupPage);
  }

}
