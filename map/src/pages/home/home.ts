import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  telnum : string;
  smstext : string;
  telnum1 : string;
  public items : any = [
    {
       name: 'Angular'
    },
    {
       name: 'Apache Cordova'
    },
    {
       name: 'HTML5'
    },
    {
       name: 'Ionic Native'
    },
    {
       name: 'npm'
    },
    {
       name: 'Sass'
    },
    {
       name: 'TypeScript'
    }];
  constructor(public navCtrl: NavController, private sms: SMS, private toastCtrl :ToastController, private _DRAG 	: DragulaService) {
       // Subscribe to the drag event for the list component being dragged
      // by the user
      this._DRAG.drag.subscribe((val) =>
      {
         // Log the retrieved HTML element ID value
         console.log('Is dragging: ' + val[1].id);
      });



      // Subscribe to the drop event for the list component once it has
      // been dropped into location by the user
      this._DRAG.drop.subscribe((val) =>
      {
         // Log the retrieved HTML ID value and the re-ordered list value
         console.log('Is dropped: ' + val[1].id);
         this.onDrop(val[2]);
      });
  }
  
  sendSms(){
    this.telnum1 = "+";
    this.telnum1 = this.telnum1 + this.telnum;
    console.log(this.telnum1);
    
    this.sms.send(this.telnum1, this.smstext);
    let toast = this.toastCtrl.create({
      message: 'Maktub muvaffaqiyatli yuborildi!',
      duration: 2000
    });
    toast.present();

    this.navCtrl.setRoot(this.navCtrl.getActive().component)
  }

  onDrop(val : any) : void
  {

     // Reset the items array
     this.items = [];


     // Iterate through the retrieved list data
     val.childNodes.forEach((item) =>
     {
        // Do we have data?
        if(item.id !== undefined)
        {
           // Re-populate the items array with new list order
           this.items.push({name: item.id});
        }
     });

     // Here we console log the directory structure of the array
     // but we could add functionality to save the re-populated
     // array items (and new list order) to a database for 'session'
     //persistence
     console.dir(this.items);
  }
}
