import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Alert } from 'ionic-angular';
import { Http } from '@angular/http';
import * as firebase from 'firebase';

/**
 * Generated class for the NuevoMensajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-mensaje',
  templateUrl: 'nuevo-mensaje.html',
})
export class NuevoMensajePage {
idAnuncio:string;
accountId:string;
mensaje="";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public http: Http
     ) {
       this.idAnuncio =this.navParams.get('idAnuncio');
       this.accountId= this.navParams.get('accountId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoMensajePage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  EnviarMensaje(){
    //alert(this.accountId);
    let result: any={};
    var link = "http://mauvalsa.com/CutStore/NuevoMensaje.php";
    var info = JSON.stringify({'idAnuncio':this.idAnuncio,'accountId':this.accountId});
    this.http.post(link, info)
    .subscribe(data =>{
      result = data.json();
      if(result.Existe == 1){
        var Mensajes = firebase.database().ref().child("mensajes");
        Mensajes.push({idMensaje:result.idMensaje,mensaje: this.mensaje,idUsuario: this.accountId,nombreU: result.nombre})
        this.viewCtrl.dismiss();
      }
    },error =>{
        console.log(error);
      });
  }

}
