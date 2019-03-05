import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController,  LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

import * as firebase from 'Firebase';


@IonicPage()
@Component({
  selector: 'page-mis-anuncios',
  templateUrl: 'mis-anuncios.html',
})
export class MisAnunciosPage {
  anuncios:any=[];
  accountid="";
  ref = firebase.database().ref('Anuncios/');
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public http: Http,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController
    ) {
      this.accountid = this.navParams.get("accountId");

      this.ref.on('value', resp => {
        this.anuncios = [];
        this.anuncios = GetAnuncios(resp);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisAnunciosPage');
    this.ObtieneAnuncios();
  }

  close(){
    this.viewCtrl.dismiss();
  }

  ObtieneAnuncios(){
    let loader = this.loadingCtrl.create();
    loader.present();
    var link = "http://mauvalsa.com/CutStore/ObtieneMisAnuncios.php";
    var info = JSON.stringify({'accountId':this.accountid});
    this.http.post(link, info)
    .subscribe(data =>{
        this.anuncios= data.json();
      
    },err =>{
        console.log(err);
      }
      );
      loader.dismiss();
  }

  Editar(idAnuncio){
     let modal = this.modalCtrl.create('AnunciarPage',{accountId: this.accountid, tipo: 2, idAnuncio: idAnuncio});
     modal.onDidDismiss(data => {
    });
    modal.present();
  }
}
export const GetAnuncios = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
          let item = childSnapshot.val();
          item.key = childSnapshot.key;
          returnArr.push(item);
      });

      return returnArr;
  };
