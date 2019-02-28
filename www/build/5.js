webpackJsonp([5],{

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MisAnunciosPageModule", function() { return MisAnunciosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mis_anuncios__ = __webpack_require__(390);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MisAnunciosPageModule = /** @class */ (function () {
    function MisAnunciosPageModule() {
    }
    MisAnunciosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mis_anuncios__["a" /* MisAnunciosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mis_anuncios__["a" /* MisAnunciosPage */]),
            ],
        })
    ], MisAnunciosPageModule);
    return MisAnunciosPageModule;
}());

//# sourceMappingURL=mis-anuncios.module.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MisAnunciosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(243);
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
 * Generated class for the MisAnunciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MisAnunciosPage = /** @class */ (function () {
    function MisAnunciosPage(navCtrl, navParams, viewCtrl, http, modalCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.anuncios = [];
        this.accountid = "";
        this.accountid = this.navParams.get("accountId");
    }
    MisAnunciosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MisAnunciosPage');
        this.ObtieneAnuncios();
    };
    MisAnunciosPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MisAnunciosPage.prototype.ObtieneAnuncios = function () {
        var _this = this;
        var loader = this.loadingCtrl.create();
        loader.present();
        var link = "http://mauvalsa.com/CutStore/ObtieneMisAnuncios.php";
        var info = JSON.stringify({ 'accountId': this.accountid });
        this.http.post(link, info)
            .subscribe(function (data) {
            _this.anuncios = data.json();
        }, function (err) {
            console.log(err);
        });
        loader.dismiss();
    };
    MisAnunciosPage.prototype.Editar = function (idAnuncio) {
        var modal = this.modalCtrl.create('AnunciarPage', { accountId: this.accountid, tipo: 2, idAnuncio: idAnuncio });
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    MisAnunciosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mis-anuncios',template:/*ion-inline-start:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\mis-anuncios\mis-anuncios.html"*/'<!--\n\n  Generated template for the MisAnunciosPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mis Anuncios</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="close()" class="btnCancelar" end>\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item *ngFor="let an of anuncios" >\n\n       <ion-thumbnail item-start >\n\n         <img class="imgAnuncio" src="http://mauvalsa.com/CutStore/PhotosAnuncios/{{an.idAnuncio}}.jpg">\n\n       </ion-thumbnail>\n\n       <h2>{{an.Titulo}}</h2>\n\n       <p>{{an.Descripcion}}</p>\n\n       <button ion-button clear item-end (click)="Editar(an.idAnuncio)" >Editar</button>\n\n     </ion-item>\n\n   \n\n   </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\mis-anuncios\mis-anuncios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MisAnunciosPage);
    return MisAnunciosPage;
}());

//# sourceMappingURL=mis-anuncios.js.map

/***/ })

});
//# sourceMappingURL=5.js.map