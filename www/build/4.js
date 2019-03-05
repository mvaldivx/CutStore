webpackJsonp([4],{

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarUsuarioPageModule", function() { return RegistrarUsuarioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registrar_usuario__ = __webpack_require__(393);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistrarUsuarioPageModule = /** @class */ (function () {
    function RegistrarUsuarioPageModule() {
    }
    RegistrarUsuarioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registrar_usuario__["a" /* RegistrarUsuarioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registrar_usuario__["a" /* RegistrarUsuarioPage */]),
            ],
        })
    ], RegistrarUsuarioPageModule);
    return RegistrarUsuarioPageModule;
}());

//# sourceMappingURL=registrar-usuario.module.js.map

/***/ }),

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrarUsuarioPage = /** @class */ (function () {
    function RegistrarUsuarioPage(navCtrl, navParams, http, nativestorage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.nativestorage = nativestorage;
        this.viewCtrl = viewCtrl;
        this.response = {};
        this.userInf = {};
        this.userInf = this.navParams.get('userInfo');
    }
    RegistrarUsuarioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrarUsuarioPage');
    };
    RegistrarUsuarioPage.prototype.RegistrarUsuario = function (nom) {
        var _this = this;
        var link = "http://mauvalsa.com/CutStore/RegistrarUsuario.php";
        var info = JSON.stringify({ 'accountid': this.userInf.accountId, 'tel': this.userInf.phoneNumber,
            'nombre': nom });
        this.http.post(link, info)
            .subscribe(function (data) {
            _this.response = data.json();
            if (_this.response.success === true) {
                _this.nativestorage.set('Usuario', JSON.stringify({ 'accountId': _this.userInf.accountId, 'Telefono': _this.userInf.phoneNumber, 'Nombre': _this.response.nombre }));
                _this.viewCtrl.dismiss();
                location.reload();
            }
            else {
                alert("ocurrio un error");
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegistrarUsuarioPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    RegistrarUsuarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registrar-usuario',template:/*ion-inline-start:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\registrar-usuario\registrar-usuario.html"*/'<!--\n\n  Generated template for the RegistrarUsuarioPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n    <ion-navbar transparent>\n\n      <ion-buttons end>\n\n        <button ion-button (click)="close()" class="btnCancelar" end>\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n      </ion-buttons>\n\n        \n\n    </ion-navbar>\n\n    \n\n  </ion-header>\n\n<ion-content >\n\n        \n\n  <img src="assets/imgs/Cut1.png"/>\n\n    <div>\n\n        <ion-item>\n\n            <ion-label>Ingrese su nombre</ion-label>\n\n            <ion-input type="text" #nombre name="nombre" id="nombre"></ion-input>\n\n          </ion-item>\n\n      <button ion-button full class="btnIniciar" (click)="RegistrarUsuario(nombre.value);">Registrarse</button>\n\n    </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\registrar-usuario\registrar-usuario.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], RegistrarUsuarioPage);
    return RegistrarUsuarioPage;
}());

//# sourceMappingURL=registrar-usuario.js.map

/***/ })

});
//# sourceMappingURL=4.js.map