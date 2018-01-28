import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sale',
  templateUrl: 'sale.html'
})
export class SalePage {

  sale1Root = 'Sale1Page'
  sale2Root = 'Sale2Page'
  sale3Root = 'Sale3Page'


  constructor(public navCtrl: NavController) {}

}
