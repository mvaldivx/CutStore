import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';

import * as firebase from 'Firebase';


@IonicPage()
@Component({
  selector: 'page-publicaciones',
  templateUrl: 'publicaciones.html',
})
export class PublicacionesPage {
  rootPage: any;
  anuncios:any =[];
  ref = firebase.database().ref('Anuncios/');
  public infoPage = {titulo:String, img:String};
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
    private loadingCtrl: LoadingController,
    public appCtrl:App
    ) {
      if (navParams.get("titulo") === undefined){
        this.appCtrl.getRootNav().setRoot(HomePage);
      }else{
        this.infoPage ={titulo:navParams.get("titulo"),img:navParams.get("imag")};
        let loader = this.loadingCtrl.create();
          loader.present();
          this.ref.on('value', resp => {//.orderByChild('categoria').equalTo((navParams.get("titulo")).upperCase)
          
            this.anuncios = [];
            this.anuncios = GetAnuncios(resp);
          });
        //this.ObtieneAnuncios();
        loader.dismiss();
      }
    
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionesPage');
    
    
  }

  atras(){
    this.navCtrl.pop();
  }

  ObtieneAnuncios(){
    var link = "http://mauvalsa.com/CutStore/ObtieneAnuncios.php";
    var info = JSON.stringify({'tipo':this.infoPage.titulo});
    this.http.post(link, info)
    .subscribe(data =>{
        this.anuncios= data.json();
      
    },err =>{
        console.log(err);
      }
      )
      
  
  }

  MasInfo(idAnuncio){
    this.navCtrl.push('ArticuloPage', {idAnuncio:idAnuncio});
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