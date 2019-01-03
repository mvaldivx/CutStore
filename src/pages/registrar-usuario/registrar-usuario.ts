import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Alert } from 'ionic-angular';
import { Http } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the RegistrarUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar-usuario',
  templateUrl: 'registrar-usuario.html',
})
export class RegistrarUsuarioPage {
  response: any={};
  userInf: any={};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http,
    public nativestorage: NativeStorage,
    public viewCtrl: ViewController,
    ) {
      this.userInf = this.navParams.get('userInfo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarUsuarioPage');
  }

  RegistrarUsuario(nom){
    var link = "http://mauvalsa.com/CutStore/RegistrarUsuario.php";
    var info = JSON.stringify({'accountid':this.userInf.accountId, 'tel':this.userInf.phoneNumber,
                               'nombre':nom});
    this.http.post(link, info)
    .subscribe(data =>{
      this.response = data.json();
      if (this.response.success === true){
          this.nativestorage.setItem('Usuario',JSON.stringify({'accountId':this.userInf.accountId, 'Telefono':this.userInf.phoneNumber, 'Nombre':this.response.nombre}));
          this.viewCtrl.dismiss();
          location.reload();
      }else{
        alert("ocurrio un error");
      }
    },error =>{
      console.log(error);
    });
  }
  close(){
    this.viewCtrl.dismiss();
  }
}
