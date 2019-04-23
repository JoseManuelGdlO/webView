import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebase = {
  apiKey: "AIzaSyC8lmRFfRwS87KkGWkPK_XVQP0Csy_hN2E",
    authDomain: "elreycaps-e0ebc.firebaseapp.com",
    databaseURL: "https://elreycaps-e0ebc.firebaseio.com",
    projectId: "elreycaps-e0ebc",
    storageBucket: "elreycaps-e0ebc.appspot.com",
    messagingSenderId: "657037654742"
}

import { Firebase } from '@ionic-native/firebase/ngx';
import { FcmService } from '../app/fcm.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    InAppBrowser,
    Firebase,
    FcmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
