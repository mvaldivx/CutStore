webpackJsonp([3],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnunciarPageModule", function() { return AnunciarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anunciar__ = __webpack_require__(385);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AnunciarPageModule = /** @class */ (function () {
    function AnunciarPageModule() {
    }
    AnunciarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__anunciar__["a" /* AnunciarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__anunciar__["a" /* AnunciarPage */]),
            ],
        })
    ], AnunciarPageModule);
    return AnunciarPageModule;
}());

//# sourceMappingURL=anunciar.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

__webpack_require__(244);
var firebase = _interopDefault(__webpack_require__(29));
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
console.warn("\nIt looks like you're using the development build of the Firebase JS SDK.\nWhen deploying Firebase apps to production, it is advisable to only import\nthe individual SDK components you intend to use.\n\nFor the module builds, these are available in the following manner\n(replace <PACKAGE> with the name of a component - i.e. auth, database, etc):\n\nCommonJS Modules:\nconst firebase = require('firebase/app');\nrequire('firebase/<PACKAGE>');\n\nES Modules:\nimport firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n\nTypescript:\nimport * as firebase from 'firebase/app';\nimport 'firebase/<PACKAGE>';\n");

module.exports = firebase;


/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnunciarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_ngx__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer_ngx__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_Firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AnunciarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnunciarPage = /** @class */ (function () {
    function AnunciarPage(navCtrl, navParams, viewCtrl, camera, transfer, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.desc = "";
        this.activo = false;
        this.ubicacion = "";
        this.dom = false;
        this.precio = 0;
        this.tipo = 1;
        this.idAnuncio = 0;
        this.accountId = this.navParams.get('accountId');
        this.tipo = this.navParams.get('tipo');
        if (this.tipo == 2) {
            this.idAnuncio = this.navParams.get('idAnuncio');
            this.ObtieneInfoAnuncio(this.idAnuncio);
        }
    }
    AnunciarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnunciarPage');
    };
    AnunciarPage.prototype.ObtieneInfoAnuncio = function (idAnuncio) {
        var _this = this;
        var link = "http://mauvalsa.com/CutStore/ObtieneAnuncioInfo.php";
        var info = JSON.stringify({ 'idAnuncio': idAnuncio });
        this.http.post(link, info)
            .subscribe(function (data) {
            var anuncio = data.json();
            _this.titulo = anuncio.Titulo;
            _this.categoria = anuncio.Tipo;
            _this.desc = anuncio.Descripcion;
            _this.activo = false;
            if (anuncio.Estatus == 1) {
                _this.activo = true;
            }
            _this.ubicacion = anuncio.Ubicacion;
            _this.dom = false;
            if (anuncio.EntregaDom == 1) {
                _this.dom = true;
            }
            _this.imagesrc = "http://mauvalsa.com/CutStore/PhotosAnuncios/" + anuncio.idAnuncio + ".jpg";
            _this.precio = anuncio.Precio;
            //alert(JSON.stringify(anuncio));
        }, function (error) {
            console.log(error);
        });
    };
    AnunciarPage.prototype.close = function () {
        this.viewCtrl.dismiss({ 'response': 0 });
    };
    AnunciarPage.prototype.LoadPhoto = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.imagesrc = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    AnunciarPage.prototype.deGaleria = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            saveToPhotoAlbum: false,
            allowEdit: true,
            targetWidth: 375,
            targetHeight: 375
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            _this.imagesrc = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            alert(err);
            // Handle error
        });
    };
    AnunciarPage.prototype.publicar = function (tipo) {
        var loader = this.loadingCtrl.create();
        loader.present();
        var photoName;
        var response = {};
        var domi = 0;
        if (this.dom === true) {
            domi = 1;
        }
        var activ = 0;
        if (this.activo === true) {
            activ = 1;
        }
        /*Comienza firebase*/
        var idAnuncio = new Date();
        var Nuevoanuncio = __WEBPACK_IMPORTED_MODULE_5_Firebase__["database"]().ref().child("Anuncios");
        Nuevoanuncio.push({ idUsuario: this.accountId, Titulo: this.titulo, Descripcion: this.desc,
            Ubicacion: this.ubicacion, EntregaDom: domi, Precio: this.precio, Estatus: activ, Categoria: this.categoria,
            Tipo: tipo, idAnuncio: idAnuncio.getTime() });
        var fileName = idAnuncio.getTime() + '.jpg';
        var storage = __WEBPACK_IMPORTED_MODULE_5_Firebase__["storage"]().ref('images/' + fileName);
        // Upload file and metadata to the object 'images/mountains.jpg'
        var uploadTask = storage.put(this.imagesrc);
        uploadTask.on("state_changed", function (_snap) {
            console.log("progess " +
                (_snap.bytesTransferred / _snap.totalBytes) * 100);
        }, function (_error) {
            console.log(_error);
        }, function () {
            // completion...
            //resolve(uploadTask.snapshot);
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
    };
    AnunciarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anunciar',template:/*ion-inline-start:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\anunciar\anunciar.html"*/'<!--\n\n  Generated template for the AnunciarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n    <ion-navbar transparent>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="close()" class="btnCancelar" end>\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n        \n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n  <ion-content >\n\n          \n\n    <img  [hidden]="imagesrc" class="imgsubir" src="assets/imgs/subirfoto.png" (click)="deGaleria()"/>\n\n    <img  src="{{imagesrc}}" class="loaded" />\n\n    <div>\n\n      <ion-list>\n\n          <ion-item>\n\n              <ion-label floating>Titulo</ion-label>\n\n              <ion-input type="text"  [(ngModel)]="titulo" name="titulo" id="titulo"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n                <ion-label floating>Descripcion</ion-label>\n\n                <ion-textarea [(ngModel)]="desc"  name="desc" id="desc"></ion-textarea>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Categoria</ion-label>\n\n              <ion-select [(ngModel)]="categoria" >\n\n                  <ion-option value="comida">Comida</ion-option>\n\n                  <ion-option value="accesorios">Accesorios</ion-option>\n\n                  <ion-option value="utiles">Utiles</ion-option>\n\n                  <ion-option value="ropa">Ropa</ion-option>\n\n                  <ion-option value="anuncios">Anuncios</ion-option>\n\n                </ion-select>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Ubicación</ion-label>\n\n              <ion-input type="text" [(ngModel)]="ubicacion"  name="ubicacion" id="ubicacion"></ion-input>\n\n          </ion-item><br>\n\n          <ion-item>\n\n              <ion-label >Entregas a domicilio?</ion-label>\n\n              <ion-toggle  checked="false" [(ngModel)]="dom"  name="dom" id="dom"></ion-toggle>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label floating>Precio</ion-label>\n\n              <ion-input type="number" [(ngModel)]="precio"  name="precio" id="precio"></ion-input>\n\n          </ion-item>\n\n          <ion-item>\n\n              <ion-label >Estaras activo desde este momento?</ion-label>\n\n              <ion-toggle  checked="false" [(ngModel)]="activo"  name="activo" id="activo"></ion-toggle>\n\n          </ion-item>\n\n          <button *ngIf="tipo == 1" ion-button full class="btnIniciar" (click)="publicar(1);">Publicar</button>\n\n          <button *ngIf="tipo == 2" ion-button full class="btnIniciar" (click)="publicar(2);">Guardar</button>\n\n      </ion-list>\n\n      \n\n    </div>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\anunciar\anunciar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera_ngx__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer_ngx__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], AnunciarPage);
    return AnunciarPage;
}());

//# sourceMappingURL=anunciar.js.map

/***/ })

});
//# sourceMappingURL=3.js.map