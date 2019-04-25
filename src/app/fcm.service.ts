import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    public firebaseNative: Firebase,
    public afs: AngularFirestore,
    private platform: Platform
  ) { }

  revisar(){
    
    this.platform.ready().then(()=>{
      this.getToken();
    })
  }

  async getToken() {


    

    let token;
    
    alert ("get Token");
    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
    } else if(this.platform.is('ios')) {
      
      alert("ios");
      this.firebaseNative.getToken()
      .then(tokenpreuba => alert('The token is '+tokenpreuba)) // save the token server-side and use it to push notifications to this device
      .catch(error => alert('Error getting token'+error));
      
      await this.firebaseNative.grantPermission();
    } 
    
    return this.saveTokenToFirestore(token)
  }


  private saveTokenToFirestore(token) {
    if (!token) return;

    alert(token+"   Toke!");
  
    const devicesRef = this.afs.collection('devices')
  
    const docData = { 
      token,
      userId: 'testUser',
    }
  
    return devicesRef.doc(token).set(docData)
  }

  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }
}
