import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild("usernameInput") mUsername;
  @ViewChild("passwordInput") mPassword;
  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }
  onClickLoginBtn(){
    // alert(""+this.mUsername.value+"|"+this.mPassword.value);
    this.alertCtrl.create({
      title:"Result",
      subTitle:this.mUsername.value+"|"+this.mPassword.value,
      buttons:['OK']
    }).present();
  }

}
