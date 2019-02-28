webpackJsonp([4],{

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NuevoMensajePageModule", function() { return NuevoMensajePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nuevo_mensaje__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NuevoMensajePageModule = /** @class */ (function () {
    function NuevoMensajePageModule() {
    }
    NuevoMensajePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__nuevo_mensaje__["a" /* NuevoMensajePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__nuevo_mensaje__["a" /* NuevoMensajePage */]),
            ],
        })
    ], NuevoMensajePageModule);
    return NuevoMensajePageModule;
}());

//# sourceMappingURL=nuevo-mensaje.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoMensajePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
 * Generated class for the NuevoMensajePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NuevoMensajePage = /** @class */ (function () {
    function NuevoMensajePage(navCtrl, navParams, viewCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.mensaje = "";
        this.idAnuncio = this.navParams.get('idAnuncio');
        this.accountId = this.navParams.get('accountId');
    }
    NuevoMensajePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NuevoMensajePage');
    };
    NuevoMensajePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    NuevoMensajePage.prototype.EnviarMensaje = function () {
        var _this = this;
        //alert(this.accountId);
        var result = {};
        var link = "http://mauvalsa.com/CutStore/NuevoMensaje.php";
        var info = JSON.stringify({ 'idAnuncio': this.idAnuncio, 'accountId': this.accountId });
        this.http.post(link, info)
            .subscribe(function (data) {
            result = data.json();
            if (result.Existe == 1) {
                var Mensajes = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref().child("mensajes");
                Mensajes.push({ idMensaje: result.idMensaje, mensaje: _this.mensaje, idUsuario: _this.accountId, nombreU: result.nombre });
                _this.viewCtrl.dismiss();
            }
        }, function (error) {
            console.log(error);
        });
    };
    NuevoMensajePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-nuevo-mensaje',template:/*ion-inline-start:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\nuevo-mensaje\nuevo-mensaje.html"*/'<!--\n\n  Generated template for the NuevoMensajePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Escribir Mensaje</ion-title>\n\n    <ion-buttons end>\n\n        <button ion-button (click)="close()" class="btnCancelar" end>\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <ion-toolbar>\n\n      <ion-input placeholder="Escribe algo..." [(ngModel)]="mensaje"></ion-input>\n\n      <ion-buttons end>\n\n        <button ion-button icon-right (click)="EnviarMensaje()" class="btnCancelar">\n\n          <ion-icon name="send"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n  \n\n'/*ion-inline-end:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\nuevo-mensaje\nuevo-mensaje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], NuevoMensajePage);
    return NuevoMensajePage;
}());

//# sourceMappingURL=nuevo-mensaje.js.map

/***/ })

});
//# sourceMappingURL=4.js.map