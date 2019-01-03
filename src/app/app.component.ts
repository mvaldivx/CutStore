import { Component } from '@angular/core';
import { Platform, ModalController, ModalOptions, ToastController, Alert } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

import { HomePage } from '../pages/home/home';
import * as firebase from 'firebase';


var modalP: boolean = false; 

var config = {
  apiKey: "AIzaSyAkl22bWzhgWYIsnoyUAeif0h9sM9UQFbc",
  authDomain: "cutstoreapp.firebaseapp.com",
  databaseURL: "https://cutstoreapp.firebaseio.com",
  projectId: "cutstoreapp",
  storageBucket: "cutstoreapp.appspot.com",
  messagingSenderId: "337606402651"
};

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  Usuario: any={};
  logeado= false;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public modalCtrl: ModalController,
    public nativestorage: NativeStorage,
    public toastCtrl: ToastController
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.ValidaUsuario();
    });
    
    firebase.initializeApp(config);
  }

  ValidaUsuario(){
    this.nativestorage.getItem('Usuario').then(usr => {
      this.Usuario = JSON.parse(usr);
      this.logeado= true;
      //alert(JSON.stringify(this.Usuario)); 
    },err =>{
      this.logeado= false;
      //alert(err);
      console.log(err);
    });
    
  }

  CerrarSesion(){
    this.nativestorage.remove('Usuario').then(success =>{
      this.logeado= false;
      location.reload();
    });
  }

  IniciarSesion(){
    if (!modalP){
      let data = "";
      let options: ModalOptions = { cssClass: 'modalPage' } 
     let modal = this.modalCtrl.create('InicioSesionPage',data);
     modal.onDidDismiss(data => {
      modalP=false;
    });
    modal.present();
     modalP= true;
    }
  }

  Anunciar(){
    if(!this.logeado){
      alert("Parece que no estas registrado, es necesario iniciar sesion para publicar un anuncio");
      this.IniciarSesion();
    }else{
      let options: ModalOptions = { cssClass: 'modalPage' } 
      
     let modal = this.modalCtrl.create('AnunciarPage',{accountId: this.Usuario.accountId, usuario: this.Usuario.Nombre, tipo: 1});
     modal.onDidDismiss(data => {
       //alert(JSON.stringify(data));
       let res: any={};
        res =data;

        if(res.response == 1){
          this.mostrarToast();
        }
      
    });
    modal.present();
  }
  }

  mostrarToast(){
    let toast = this.toastCtrl.create({
      message: 'Anuncio registrado correctamente',
      duration: 3000,
      position: 'bottom'
    });
  
  
    toast.present();
  }

  Mensajes(){
    if(!this.logeado){
      alert("Parece que no estas registrado, es necesario iniciar sesion");
      this.IniciarSesion();
    }else{
     let options: ModalOptions = { cssClass: 'modalPage' } 
     let modal = this.modalCtrl.create('MensajesPage',{accountId: this.Usuario.accountId, usuario: this.Usuario.Nombre});
     modal.onDidDismiss(data => {
    });
    modal.present();
    }
  }

  MisAnuncios(){
    if(!this.logeado){
      alert("Parece que no estas registrado, es necesario iniciar sesion");
      this.IniciarSesion();
    }else{
     let options: ModalOptions = { cssClass: 'modalPage' } 
     let modal = this.modalCtrl.create('MisAnunciosPage',{accountId: this.Usuario.accountId, usuario: this.Usuario.Nombre});
     modal.onDidDismiss(data => {
    });
    modal.present();
    }
  }
}

