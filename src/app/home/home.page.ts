import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FcmService } from '../fcm.service';

import { ToastController } from '@ionic/angular';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url: any;

  constructor(
    private sanitize: DomSanitizer,
    public fcm: FcmService,
    public toastCtrl: ToastController
    ){

    this.url = sanitize.bypassSecurityTrustResourceUrl("http://pruebas.inovatix.com.mx/");

    this.ionViewDidLoad();

  }

  ionViewDidLoad(){

    alert("Entrate al metodo");

    //Traer lo de FCM token
    this.fcm.revisar();

    this.fcm.listenToNotifications().pipe(
      tap(msg => {

        this.presentToast(msg.body);
        
      })
    );
  }

  async presentToast(body:string) {
    const toast = await this.toastCtrl.create({
      message: body,
      duration: 3000
    });
    toast.present();
  }

}
