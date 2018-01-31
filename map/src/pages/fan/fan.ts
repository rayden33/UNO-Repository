import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';


@IonicPage()
@Component({
  selector: 'page-fan',
  templateUrl: 'fan.html',
})
export class FanPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fileOpener: FileOpener) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FanPage');
    
  }

}
