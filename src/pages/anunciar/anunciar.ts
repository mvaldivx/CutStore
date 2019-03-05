import { Component, ɵConsole } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController  } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Http } from '@angular/http';
import * as firebase from 'Firebase';

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
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    private transfer: FileTransfer,
    private loadingCtrl: LoadingController,
    private http: Http
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
  
  deGaleria(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetWidth: 375,
      targetHeight: 375

    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.imagesrc = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
     // Handle error
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
    
    var storage = firebase.storage();
    var storageRef = storage.ref();

    
    var imagesRef = storageRef.child('images');
    // Child references can also take paths delimited by '/'
    var spaceRef = storageRef.child('images');
    var fileName = idAnuncio.getTime() + '.jpg'
    var spaceRef = imagesRef.child(fileName);
    var path = spaceRef.fullPath
    var name = spaceRef.name
    var imagesRef = spaceRef.parent;
    var metadata = {
      contentType: 'image/jpeg'
    };

    // Upload file and metadata to the object 'images/mountains.jpg'
    var uploadTask = storageRef.child('images/' + fileName).put(this.imagesrc, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
      function(snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        //var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //console.log('Upload is ' + progress + '% done');
       /* switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }*/
      }, function(error) {
        alert(error)
      }, function() {
        // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
          alert(downloadURL);
        });
      });


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
