import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild("content") content: any;
  userName: string="";
  message: string ="";
  messages= [];
  idMensaje=-1;
  usuario ="";
  accountId="";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController
    ) {
      this.idMensaje = this.navParams.get("idMensaje");
      this.usuario = this.navParams.get("usuario");
      this.accountId = this.navParams.get("accountId");
    this.ObtenerMensajes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  atras(){
    this.viewCtrl.dismiss();
  }
  ObtenerMensajes(){
    var Mensajes = firebase.database().ref().child("mensajes");
    Mensajes.on("value", (snap)=>{
      var data = snap.val();
      this.messages =[];
      for(var key in data){
        if (data[key].idMensaje == this.idMensaje){
            this.messages.push(data[key]);
            this.scrollToBottom();
        }
        
      }
      
    });
  }

  scrollToBottom(){
    if (document.getElementById("end") != null){
    var contentend = document.getElementById("end").offsetTop;
    this.content.scrollTo(0,contentend,300);
    }
    
  }

  EnviarMensaje(){
    var Mensajes = firebase.database().ref().child("mensajes");
    Mensajes.push({idMensaje:this.idMensaje,idUsuario: this.accountId,mensaje: this.message,nombreU: this.usuario});
    this.message="";
  }

}
