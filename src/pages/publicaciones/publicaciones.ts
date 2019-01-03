import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import {ArticuloPage} from '../articulo/articulo';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { HomePage } from '../home/home';

/**
 * Generated class for the PublicacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicaciones',
  templateUrl: 'publicaciones.html',
})
export class PublicacionesPage {
  rootPage: any;
  anuncios:any =[];

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
        this.ObtieneAnuncios();
        loader.dismiss();
      }
    
    
    console.log(this.infoPage);
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
