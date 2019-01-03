import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController , Platform} from 'ionic-angular';
import { Http } from '@angular/http';
import { NativeStorage } from '@ionic-native/native-storage';
import { RegistrarUsuarioPage } from '../registrar-usuario/registrar-usuario';

/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})
export class InicioSesionPage {
  userInfo: any = {};
  response: any={};
  registrado =false;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public http: Http,
    public nativestorage: NativeStorage,
    public modalCtrl:ModalController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InicioSesionPage');

  }

  close(){
    this.viewCtrl.dismiss();
  }

  register(){
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
      defaultCountryCode: "MX",
      facebookNotificationsEnabled: true,
    }, (successdata) => {
    (<any>window).AccountKitPlugin.getAccount((user)=>{
      //alert(JSON.stringify(user));
      this.userInfo = user;
      this.registrado=true;
      this.ValidaUsuario();
    })
  },(err)=>{
      //alert(err);
    });
  }

  ValidaUsuario(){
    var link = "http://mauvalsa.com/CutStore/ValidaUsuario.php";
    
    var info = JSON.stringify({accountid:this.userInfo.accountId, 'tel': this.userInfo.phoneNumber});
    //alert(JSON.stringify(this.userInfo));
    this.http.post(link, info)
    .subscribe(data =>{
      this.response = data.json();
      if(this.response.success === true){
        this.nativestorage.setItem('Usuario',JSON.stringify({'accountId':this.userInfo.accountId, 'Telefono':this.userInfo.phoneNumber, 'Nombre':this.response.nombre})).then(
          (success)=>{
          this.nativestorage.getItem('Usuario').then((usr) => {
          });
        });
        this.viewCtrl.dismiss();
        location.reload();
      }else{
        this.registrado =true;
        let modal = this.modalCtrl.create('RegistrarUsuarioPage',{userInfo:this.userInfo});
        modal.present();
        //alert(this.registrado);
      }
    },error => {
      console.log(error);
    })
  }



  

}


