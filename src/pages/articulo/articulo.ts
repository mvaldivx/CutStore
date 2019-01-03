import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions, App } from 'ionic-angular';
import { Http } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { HomePage } from '../home/home';

/**
 * Generated class for the ArticuloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-articulo',
  templateUrl: 'articulo.html',
})
export class ArticuloPage {
  anuncio: any={};
  idAnuncio= "";
  Usuario:any={};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public nativestorage: NativeStorage,
    public modalCtrl: ModalController,
    public http: Http,
    public appCtrl: App
    ) {
      if (navParams.get("idAnuncio") === undefined){
        this.appCtrl.getRootNav().setRoot(HomePage);
      }else{
        this.idAnuncio =navParams.get("idAnuncio");
        this.ValidaUsuario();
        this.ObtieneInfo();
      }

      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticuloPage');
    
  }

  ObtieneInfo(){
    var link = "http://mauvalsa.com/CutStore/ObtieneAnuncioInfo.php";
    var info = JSON.stringify({'idAnuncio':this.idAnuncio});
    this.http.post(link, info)
    .subscribe(data =>{
      this.anuncio = data.json();
    },error =>{
        console.log(error);
      }
      )
  }

  atras(){
    this.navCtrl.pop();
  }

  IniciarSesion(){
      let data = "";
      let options: ModalOptions = { cssClass: 'modalPage' } 
     let modal = this.modalCtrl.create('InicioSesionPage',data);
     modal.onDidDismiss(data => {
      
    });
    modal.present();
  }


   ValidaUsuario(){
    this.nativestorage.getItem('Usuario').then(usr => {
      //alert(JSON.stringify(usr));
      this.Usuario = JSON.parse(usr);
      //alert(this.Usuario); 
    },err =>{
      //alert(err);
      console.log(err);
    });
    
  }

  enviarMensaje(){
    
    //alert(this.Usuario.accountId);
    if(!this.Usuario.accountId){
      alert("Parece que no estas registrado, es necesario iniciar sesion");
      this.IniciarSesion();
    }else{
     let options: ModalOptions = { cssClass: 'modalPage' } 
     
     let modal = this.modalCtrl.create('NuevoMensajePage',{accountId: this.Usuario.accountId, idAnuncio: this.idAnuncio});
     modal.onDidDismiss(data => {
       //alert(JSON.stringify(data));
       
      
    });
    modal.present();
    }
  }

}
