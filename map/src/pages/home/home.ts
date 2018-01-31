import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ContactPage } from './../contact/contact';
import { NewsPage } from './../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
 
  constructor(public navCtrl: NavController, private toastCtrl :ToastController) {
    
  }
  
  goToContactPage(){
    this.navCtrl.push(NewsPage);
  }
  
}
