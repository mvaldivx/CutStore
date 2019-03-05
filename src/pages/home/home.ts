import { Component } from '@angular/core';
import { App, NavController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public app: App,
    public menu: MenuController
    ) {

  }

  MostrarInfo(tit,i){
    this.navCtrl.push('PublicacionesPage',{titulo:tit, id:i, imag:"assets/imgs/" + tit + ".jpg"});
    
}


}
