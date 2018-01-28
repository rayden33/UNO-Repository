import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@IonicPage()
@Component({
  selector: 'page-sms',
  templateUrl: 'sms.html',
})
export class SmsPage {
  telnum1 : number;
  telnum2 : number;
  receiver : string;
  smsText : string;
  k : number = 0;
  constructor(public navCtrl: NavController, 
     public navParams: NavParams, 
     private toastctrl : ToastController,
     private sms: SMS) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmsPage');
  }

  sendMultipleSms(){
    
    for (let i=this.telnum1 ; i<=this.telnum2;i++){
      this.k++;
      this.receiver = '+';
      this.receiver = this.receiver + i.toString();
      this.sms.send(this.receiver, this.smsText);
      let toast = this.toastctrl.create ({
      message:  this.receiver + "  ga jo'natildi " + this.k,
      duration: 500
      })
      toast.present();
    }
   let toast2 = this.toastctrl.create( {
      message : this.k + " ta maktub jo'natildi",
      duration : 3000,
      position : 'middle'
    })
    toast2.present();
    
  }

}
