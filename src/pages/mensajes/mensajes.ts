import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ModalOptions, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the MensajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html',
})
export class MensajesPage {
 mensajes=[];
 AccountId="";
 usuario="";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public http: Http,
    private loadingCtrl: LoadingController,
    public modalCtrl: ModalController
    ) {
      this.AccountId= this.navParams.get('accountId');
      this.usuario = this.navParams.get('usuario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajesPage');
    let loader = this.loadingCtrl.create();
    loader.present();
    this.ObtieneMensajes();
    loader.dismiss();
  }

  ObtieneMensajes(){
    var link = "http://mauvalsa.com/CutStore/ObtieneMensajes.php";
    var info = JSON.stringify({'accountId':this.AccountId});
    this.http.post(link, info)
    .subscribe(data =>{
      //alert(JSON.stringify(data));
      this.mensajes = data.json();
      
    },error =>{
      alert(error);
        console.log(error);
      }
      );
  }

  close(){
    this.viewCtrl.dismiss();
  }

  IniciaChat(idMensaje){
    let options: ModalOptions = { cssClass: 'modalPage' } 
     let modal = this.modalCtrl.create('ChatPage',{idMensaje: idMensaje, accountId: this.AccountId, usuario: this.usuario});
     modal.onDidDismiss(data => {
      
    });
    modal.present();
    
  }

}
