webpackJsonp([8],{

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnunciarPageModule", function() { return AnunciarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__anunciar__ = __webpack_require__(442);
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

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnunciarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(273);
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
    function AnunciarPage(navCtrl, navParams, viewCtrl, camera, transfer, file, loadingCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.transfer = transfer;
        this.file = file;
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
            destinationType: this.camera.DestinationType.DATA_URL,
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
            console.log(err);
            // Handle error
        });
    };
    AnunciarPage.prototype.publicar = function (tipo) {
        var _this = this;
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
        var link = "http://mauvalsa.com/CutStore/RegistrarPublicacion.php";
        var info = JSON.stringify({ 'accountid': this.accountId, 'titulo': this.titulo, 'desc': this.desc, 'ubicacion': this.ubicacion,
            'dom': domi, 'precio': this.precio, 'activo': activ, 'cat': this.categoria, 'tipo': tipo, 'idAnuncio': this.idAnuncio });
        this.http.post(link, info)
            .subscribe(function (data) {
            response = data.json();
            if (response.success === true) {
                if (tipo == 1) {
                    //Guardar foto
                    photoName = response.id;
                    var FileTransfer_1 = _this.transfer.create();
                    var options = {
                        fileKey: 'photo',
                        fileName: photoName,
                        chunkedMode: false,
                        httpMethod: 'post',
                        mimeType: 'image/jpeg',
                        headers: {}
                    };
                    FileTransfer_1.upload(_this.imagesrc, 'http://mauvalsa.com/CutStore/subirfoto.php', options)
                        .then(function (data) {
                        var res = {};
                        res = data;
                        loader.dismiss();
                        if (res.response = 1) {
                            _this.viewCtrl.dismiss({ 'response': 1 });
                        }
                        else {
                            _this.viewCtrl.dismiss({ 'response': 0 });
                        }
                        // success
                        loader.dismiss;
                    }, function (err) {
                        // error
                        alert(err);
                        loader.dismiss();
                        //this.presentToast(err);
                    });
                }
                else {
                    _this.viewCtrl.dismiss({ 'response': 1 });
                    loader.dismiss();
                }
            }
            else {
                alert(JSON.stringify(response));
                alert("Ocurrio un error");
                loader.dismiss();
            }
        }, function (error) {
            console.log(error);
            loader.dismiss();
        });
    };
    AnunciarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-anunciar',template:/*ion-inline-start:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/pages/anunciar/anunciar.html"*/'<!--\n  Generated template for the AnunciarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n    <ion-navbar transparent>\n      <ion-buttons end>\n        <button ion-button (click)="close()" class="btnCancelar" end>\n            <ion-icon name="close"></ion-icon>\n          </button>\n      </ion-buttons>\n        \n    </ion-navbar>\n    \n  </ion-header>\n  <ion-content >\n          \n    <img  [hidden]="imagesrc" class="imgsubir" src="assets/imgs/subirfoto.png" (click)="deGaleria()"/>\n    <img  src="{{imagesrc}}" class="loaded" />\n    <div>\n      <ion-list>\n          <ion-item>\n              <ion-label floating>Titulo</ion-label>\n              <ion-input type="text"  [(ngModel)]="titulo" name="titulo" id="titulo"></ion-input>\n          </ion-item>\n          <ion-item>\n                <ion-label floating>Descripcion</ion-label>\n                <ion-textarea [(ngModel)]="desc"  name="desc" id="desc"></ion-textarea>\n          </ion-item>\n          <ion-item>\n              <ion-label floating>Categoria</ion-label>\n              <ion-select [(ngModel)]="categoria" >\n                  <ion-option value="comida">Comida</ion-option>\n                  <ion-option value="accesorios">Accesorios</ion-option>\n                  <ion-option value="utiles">Utiles</ion-option>\n                  <ion-option value="ropa">Ropa</ion-option>\n                  <ion-option value="anuncios">Anuncios</ion-option>\n                </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label floating>Ubicación</ion-label>\n              <ion-input type="text" [(ngModel)]="ubicacion"  name="ubicacion" id="ubicacion"></ion-input>\n          </ion-item><br>\n          <ion-item>\n              <ion-label >Entregas a domicilio?</ion-label>\n              <ion-toggle  checked="false" [(ngModel)]="dom"  name="dom" id="dom"></ion-toggle>\n          </ion-item>\n          <ion-item>\n              <ion-label floating>Precio</ion-label>\n              <ion-input type="number" [(ngModel)]="precio"  name="precio" id="precio"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label >Estaras activo desde este momento?</ion-label>\n              <ion-toggle  checked="false" [(ngModel)]="activo"  name="activo" id="activo"></ion-toggle>\n          </ion-item>\n          <button *ngIf="tipo == 1" ion-button full class="btnIniciar" (click)="publicar(1);">Publicar</button>\n          <button *ngIf="tipo == 2" ion-button full class="btnIniciar" (click)="publicar(2);">Guardar</button>\n      </ion-list>\n      \n    </div>\n  </ion-content>\n'/*ion-inline-end:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/pages/anunciar/anunciar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], AnunciarPage);
    return AnunciarPage;
}());

//# sourceMappingURL=anunciar.js.map

/***/ })

});
//# sourceMappingURL=8.js.map