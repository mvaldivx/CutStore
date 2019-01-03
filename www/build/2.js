webpackJsonp([2],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicacionesPageModule", function() { return PublicacionesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publicaciones__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PublicacionesPageModule = /** @class */ (function () {
    function PublicacionesPageModule() {
    }
    PublicacionesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__publicaciones__["a" /* PublicacionesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__publicaciones__["a" /* PublicacionesPage */]),
            ],
        })
    ], PublicacionesPageModule);
    return PublicacionesPageModule;
}());

//# sourceMappingURL=publicaciones.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicacionesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(141);
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
 * Generated class for the PublicacionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicacionesPage = /** @class */ (function () {
    function PublicacionesPage(navCtrl, navParams, http, loadingCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.appCtrl = appCtrl;
        this.anuncios = [];
        this.infoPage = { titulo: String, img: String };
        if (navParams.get("titulo") === undefined) {
            this.appCtrl.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }
        else {
            this.infoPage = { titulo: navParams.get("titulo"), img: navParams.get("imag") };
            var loader = this.loadingCtrl.create();
            loader.present();
            this.ObtieneAnuncios();
            loader.dismiss();
        }
        console.log(this.infoPage);
    }
    PublicacionesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublicacionesPage');
    };
    PublicacionesPage.prototype.atras = function () {
        this.navCtrl.pop();
    };
    PublicacionesPage.prototype.ObtieneAnuncios = function () {
        var _this = this;
        var link = "http://mauvalsa.com/CutStore/ObtieneAnuncios.php";
        var info = JSON.stringify({ 'tipo': this.infoPage.titulo });
        this.http.post(link, info)
            .subscribe(function (data) {
            _this.anuncios = data.json();
        }, function (err) {
            console.log(err);
        });
    };
    PublicacionesPage.prototype.MasInfo = function (idAnuncio) {
        this.navCtrl.push('ArticuloPage', { idAnuncio: idAnuncio });
    };
    PublicacionesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-publicaciones',template:/*ion-inline-start:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/pages/publicaciones/publicaciones.html"*/'<!--\n  Generated template for the PublicacionesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header class="has-header">\n  <ion-toolbar class="card-background-page">\n        <ion-card>\n          <img src={{infoPage.img}}/>\n        </ion-card>\n        <div class="titulo" >{{infoPage.titulo}}</div>\n  </ion-toolbar>\n</ion-header>\n<ion-header>\n<ion-toolbar>\n    <ion-buttons start>\n        <button ion-button icon-only (click)="atras();">\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n        </ion-buttons>\n  <ion-title>\n      <img class="logo" src="assets/imgs/logo1.png">\n  </ion-title>\n  \n</ion-toolbar>\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n<ion-list>\n <ion-item *ngFor="let an of anuncios" >\n    <ion-thumbnail item-start >\n      <img class="imgAnuncio" src="http://mauvalsa.com/CutStore/PhotosAnuncios/{{an.idAnuncio}}.jpg">\n    </ion-thumbnail>\n    <h2>{{an.Titulo}}</h2>\n    <p>{{an.Descripcion}}</p>\n    <button ion-button clear item-end (click)="MasInfo(an.idAnuncio)" >Mas Info</button>\n  </ion-item>\n\n</ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/pages/publicaciones/publicaciones.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], PublicacionesPage);
    return PublicacionesPage;
}());

//# sourceMappingURL=publicaciones.js.map

/***/ })

});
//# sourceMappingURL=2.js.map