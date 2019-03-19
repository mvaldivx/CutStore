import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, Platform, ToastController, Toast  } from 'ionic-angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Http } from '@angular/http';
import * as firebase from 'Firebase';
import { FilePath } from '@ionic-native/file-path/ngx';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { Storage } from '@ionic/storage';
import { WebView } from '@ionic-native/ionic-webview/ngx';


const STORAGE_KEY = 'my_images';
/**
 * Generated class for the AnunciarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-anunciar',
  templateUrl: 'anunciar.html',
})

export class AnunciarPage {
  imagesrc:any;
  accountId: any;
  categoria:"";
  titulo:"";
  desc="";
  activo=false;
  ubicacion="";
  dom=false;
  precio=0;
  tipo=1;
  idAnuncio=0;
  images = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    private transfer: FileTransfer,
    private loadingCtrl: LoadingController,
    private http: Http,
    private platform : Platform,
    private filePath: FilePath,
    private file: File,
    private toastCtrl: ToastController,
    private storage : Storage,
    private webView: WebView
    ) {
      this.accountId = this.navParams.get('accountId');
      this.tipo = this.navParams.get('tipo');
      if (this.tipo ==2){
        this.idAnuncio = this.navParams.get('idAnuncio');
        this.ObtieneInfoAnuncio(this.idAnuncio);
      }
  }
  

 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnunciarPage');
  }

  ObtieneInfoAnuncio(idAnuncio){
    var link = "http://mauvalsa.com/CutStore/ObtieneAnuncioInfo.php";
    var info = JSON.stringify({'idAnuncio':idAnuncio});
    this.http.post(link, info)
    .subscribe(data =>{
      let anuncio = data.json();
      this.titulo = anuncio.Titulo;
      this.categoria = anuncio.Tipo;
      this.desc = anuncio.Descripcion;
      this.activo = false;
      if (anuncio.Estatus==1){
        this.activo = true;
      }
      this.ubicacion = anuncio.Ubicacion;
      this.dom = false;
      if(anuncio.EntregaDom ==1){
        this.dom = true;
      }
      this.imagesrc = "http://mauvalsa.com/CutStore/PhotosAnuncios/" + anuncio.idAnuncio + ".jpg";
      this.precio= anuncio.Precio;
      
      //alert(JSON.stringify(anuncio));
    },error =>{
        console.log(error);
      }
      )
  }

  close(){
    this.viewCtrl.dismiss({'response':0});
  }

  LoadPhoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.imagesrc = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }
 
  
  deGaleria(sourceType: PictureSourceType){
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true,
      targetWidth: 375,
      targetHeight: 375

    }

    
    
    this.camera.getPicture(options).then(imageData => {
      if (this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imageData)
            .then(filePath => {
                let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                let currentName = imageData.substring(imageData.lastIndexOf('/') + 1, imageData.lastIndexOf('?'));
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            });
    } else {
        var currentName = imageData.substr(imageData.lastIndexOf('/') + 1);
        var correctPath = imageData.substr(0, imageData.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
    }
    }, (err) => {
      alert(err);
     // Handle error
    });

  }

  
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
        this.updateStoredImages(newFileName);
    }, error => {
        this.presentToast('Error while storing file.');
    });
}

createFileName() {
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
  return newFileName;
}

pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    let converted = this.webView.convertFileSrc(img);
    return converted;
  }
}

updateStoredImages(name) {
  this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
          let newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      //this.ref.detectChanges(); // trigger change detection cycle
  });
}

  publicar(tipo){
    let loader = this.loadingCtrl.create();
    loader.present();
    var photoName:any;
    var response:any={};
    var domi = 0;
    if(this.dom === true){
      domi = 1;
    }
    var activ= 0;
    if(this.activo ===true){
      activ =1;
    }

    /*Comienza firebase*/
    var idAnuncio = new Date();
    var Nuevoanuncio = firebase.database().ref().child("Anuncios");
    Nuevoanuncio.push({idUsuario: this.accountId,Titulo: this.titulo,Descripcion: this.desc,
                      Ubicacion: this.ubicacion,EntregaDom: domi,Precio: this.precio, Estatus: activ, Categoria: this.categoria,
                    Tipo: tipo,idAnuncio: idAnuncio.getTime()});
    
    var fileName = idAnuncio.getTime() + '.jpg'
    var storage = firebase.storage().ref('images/' + fileName);

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storage.put(this.imagesrc);

    uploadTask.on(
      "state_changed",
      (_snap: any) => {
        console.log(
          "progess " +
            (_snap.bytesTransferred / _snap.totalBytes) * 100
        );
      },
      _error => {
        console.log(_error);
      },
      () => {
        // completion...
        //resolve(uploadTask.snapshot);
      }
    );


    /*Termina Firebase */
    /*var link = "http://mauvalsa.com/CutStore/RegistrarPublicacion.php";
    var info = JSON.stringify({'accountid':this.accountId, 'titulo':this.titulo,'desc':this.desc,'ubicacion': this.ubicacion,
                              'dom': domi, 'precio':this.precio, 'activo':activ, 'cat': this.categoria, 'tipo': tipo, 'idAnuncio':this.idAnuncio});
    this.http.post(link, info)
    .subscribe(data =>{
      response = data.json();
      if (response.success === true ){
        if (tipo == 1){
          */
           //Guardar foto
        /* photoName = response.id;
         const FileTransfer: FileTransferObject = this.transfer.create();
         
         let options: FileUploadOptions = {
           fileKey: 'photo',
           fileName: photoName ,
           chunkedMode: false,
           httpMethod: 'post',
           mimeType: 'image/jpeg',
           headers: {}
         }
         FileTransfer.upload(this.imagesrc, 'http://mauvalsa.com/CutStore/subirfoto.php', options)
           .then((data) => {
             let res: any ={};
             res = data;
             loader.dismiss();
             if (res.response = 1){
                 this.viewCtrl.dismiss({'response':1});
             }else{
               this.viewCtrl.dismiss({'response':0});
             }
           // success
           loader.dismiss;
           }, (err) => {
           // error
           alert(err);
           loader.dismiss();
           //this.presentToast(err);
         });*/
       /* }else{
          this.viewCtrl.dismiss({'response':1});
          loader.dismiss();
        }
        
      }else{
        alert(JSON.stringify(response));
        alert("Ocurrio un error");
        loader.dismiss();
      }
    },error =>{
      console.log(error);
      loader.dismiss();
    });*/

    
  }
}
