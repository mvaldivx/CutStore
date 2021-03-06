webpackJsonp([7],{

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticuloPageModule", function() { return ArticuloPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__articulo__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ArticuloPageModule = /** @class */ (function () {
    function ArticuloPageModule() {
    }
    ArticuloPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__articulo__["a" /* ArticuloPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__articulo__["a" /* ArticuloPage */]),
            ]
        })
    ], ArticuloPageModule);
    return ArticuloPageModule;
}());

//# sourceMappingURL=articulo.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticuloPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(141);
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
 * Generated class for the ArticuloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArticuloPage = /** @class */ (function () {
    function ArticuloPage(navCtrl, navParams, nativestorage, modalCtrl, http, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativestorage = nativestorage;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.appCtrl = appCtrl;
        this.anuncio = {};
        this.idAnuncio = "";
        this.Usuario = {};
        if (navParams.get("idAnuncio") === undefined) {
            this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        else {
            this.idAnuncio = navParams.get("idAnuncio");
            this.ValidaUsuario();
            this.ObtieneInfo();
        }
    }
    ArticuloPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ArticuloPage');
    };
    ArticuloPage.prototype.ObtieneInfo = function () {
        var _this = this;
        var link = "http://mauvalsa.com/CutStore/ObtieneAnuncioInfo.php";
        var info = JSON.stringify({ 'idAnuncio': this.idAnuncio });
        this.http.post(link, info)
            .subscribe(function (data) {
            _this.anuncio = data.json();
        }, function (error) {
            console.log(error);
        });
    };
    ArticuloPage.prototype.atras = function () {
        this.navCtrl.pop();
    };
    ArticuloPage.prototype.IniciarSesion = function () {
        var data = "";
        var options = { cssClass: 'modalPage' };
        var modal = this.modalCtrl.create('InicioSesionPage', data);
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    ArticuloPage.prototype.ValidaUsuario = function () {
        var _this = this;
        this.nativestorage.getItem('Usuario').then(function (usr) {
            //alert(JSON.stringify(usr));
            _this.Usuario = JSON.parse(usr);
            //alert(this.Usuario); 
        }, function (err) {
            //alert(err);
            console.log(err);
        });
    };
    ArticuloPage.prototype.enviarMensaje = function () {
        //alert(this.Usuario.accountId);
        if (!this.Usuario.accountId) {
            alert("Parece que no estas registrado, es necesario iniciar sesion");
            this.IniciarSesion();
        }
        else {
            var options = { cssClass: 'modalPage' };
            var modal = this.modalCtrl.create('NuevoMensajePage', { accountId: this.Usuario.accountId, idAnuncio: this.idAnuncio });
            modal.onDidDismiss(function (data) {
                //alert(JSON.stringify(data));
            });
            modal.present();
        }
    };
    ArticuloPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-articulo',template:/*ion-inline-start:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/pages/articulo/articulo.html"*/'<!--\n  Generated template for the ArticuloPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header no-border>\n  <ion-toolbar transparent>\n    <ion-buttons start>\n      <button ion-button icon-only (click)="atras();">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n      </ion-buttons>\n      \n  </ion-toolbar>\n  \n</ion-header>\n<ion-content >\n        \n  <img  class="loaded" src="http://mauvalsa.com/CutStore/PhotosAnuncios/{{anuncio.idAnuncio}}.jpg"/>\n\n  <div class="titulo">\n    <h1>{{anuncio.Titulo}}</h1>\n  </div>\n  <div class="descripcion">\n    <h5>{{anuncio.Descripcion}}</h5>\n  </div>\n  \n  <div class="ubicacion" >\n    <h6 *ngIf="anuncio.Ubicacion != \'\'">Ubicacion: {{anuncio.Ubicacion}}</h6>\n  </div>\n  <div class="entregaDom" >\n    <h6 *ngIf="anuncio.EntregaDom == 1">Entrega a Domicilio: SI</h6>\n    <h6 *ngIf="anuncio.EntregaDom == 0">Entrega a Domicilio: NO</h6>\n  </div><br>\n  <div class="activo" [hidden]="anuncio.Estatus < 1" >\n    <h3>Activo ahora!!</h3>\n  </div><br>\n  <div class="precio" >\n    <h4>Precio: ${{anuncio.Precio}}</h4>\n  </div>\n\n \n</ion-content>\n<ion-footer>\n  <button ion-button full class="btnIniciar" (click)="enviarMensaje()" >Contactar al vendedor</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/pages/articulo/articulo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], ArticuloPage);
    return ArticuloPage;
}());

//# sourceMappingURL=articulo.js.map

/***/ })

});
//# sourceMappingURL=7.js.map