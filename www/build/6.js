webpackJsonp([6],{

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajesPageModule", function() { return MensajesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mensajes__ = __webpack_require__(389);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MensajesPageModule = /** @class */ (function () {
    function MensajesPageModule() {
    }
    MensajesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mensajes__["a" /* MensajesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mensajes__["a" /* MensajesPage */]),
            ],
        })
    ], MensajesPageModule);
    return MensajesPageModule;
}());

//# sourceMappingURL=mensajes.module.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesPage; });
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
 * Generated class for the MensajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MensajesPage = /** @class */ (function () {
    function MensajesPage(navCtrl, navParams, viewCtrl, http, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.mensajes = [];
        this.AccountId = "";
        this.usuario = "";
        this.AccountId = this.navParams.get('accountId');
        this.usuario = this.navParams.get('usuario');
    }
    MensajesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MensajesPage');
        var loader = this.loadingCtrl.create();
        loader.present();
        this.ObtieneMensajes();
        loader.dismiss();
    };
    MensajesPage.prototype.ObtieneMensajes = function () {
        var _this = this;
        var link = "http://mauvalsa.com/CutStore/ObtieneMensajes.php";
        var info = JSON.stringify({ 'accountId': this.AccountId });
        this.http.post(link, info)
            .subscribe(function (data) {
            //alert(JSON.stringify(data));
            _this.mensajes = data.json();
        }, function (error) {
            alert(error);
            console.log(error);
        });
    };
    MensajesPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MensajesPage.prototype.IniciaChat = function (idMensaje) {
        var options = { cssClass: 'modalPage' };
        var modal = this.modalCtrl.create('ChatPage', { idMensaje: idMensaje, accountId: this.AccountId, usuario: this.usuario });
        modal.onDidDismiss(function (data) {
        });
        modal.present();
    };
    MensajesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mensajes',template:/*ion-inline-start:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\mensajes\mensajes.html"*/'<!--\n\n  Generated template for the MensajesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Mensajes</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="close()" class="btnCancelar" end>\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div style="text-align:center; color:grey;" *ngIf="mensajes.length <1">\n\n    <h1>Aun no tienes mensajes</h1>\n\n  </div>\n\n    <ion-list>\n\n        <ion-item *ngFor="let me of mensajes" (click)="IniciaChat(me.idMensaje)">\n\n          <ion-item>\n\n            <ion-avatar item-start>\n\n              <img class="imgMensaje" src="http://mauvalsa.com/CutStore/PhotosAnuncios/{{me.idArticulo}}.jpg">\n\n            </ion-avatar>\n\n            <h2>{{me.nombre}}</h2>\n\n            <h6>{{me.titulo}}</h6>\n\n          </ion-item>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\mensajes\mensajes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], MensajesPage);
    return MensajesPage;
}());

//# sourceMappingURL=mensajes.js.map

/***/ })

});
//# sourceMappingURL=6.js.map