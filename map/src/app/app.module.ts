import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SMS } from '@ionic-native/sms';
import { SmsPage } from './../pages/sms/sms';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FanPage } from '../../src/pages/fan/fan';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation} from '@ionic-native/geolocation';
import { Diagnostic} from '@ionic-native/diagnostic';
import { DocumentViewer} from '@ionic-native/document-viewer' ;
import { FileOpener } from '@ionic-native/file-opener';
import { SalePage } from './../pages/sale/sale';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FanPage,
    SalePage,
    SmsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DragulaModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    FanPage,
    SalePage,
    SmsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    Diagnostic,
    DocumentViewer,
    FileOpener,
    SMS
    
  ]
})
export class AppModule {}
