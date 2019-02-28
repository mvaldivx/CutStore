webpackJsonp([7],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioSesionPageModule", function() { return InicioSesionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inicio_sesion__ = __webpack_require__(388);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InicioSesionPageModule = /** @class */ (function () {
    function InicioSesionPageModule() {
    }
    InicioSesionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inicio_sesion__["a" /* InicioSesionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inicio_sesion__["a" /* InicioSesionPage */]),
            ],
        })
    ], InicioSesionPageModule);
    return InicioSesionPageModule;
}());

//# sourceMappingURL=inicio-sesion.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InicioSesionPage; });
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




/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InicioSesionPage = /** @class */ (function () {
    function InicioSesionPage(navCtrl, navParams, viewCtrl, http, nativestorage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.nativestorage = nativestorage;
        this.modalCtrl = modalCtrl;
        this.userInfo = {};
        this.response = {};
        this.registrado = false;
    }
    InicioSesionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InicioSesionPage');
    };
    InicioSesionPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    InicioSesionPage.prototype.register = function () {
        var _this = this;
        window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "MX",
            facebookNotificationsEnabled: true,
        }, function (successdata) {
            window.AccountKitPlugin.getAccount(function (user) {
                //alert(JSON.stringify(user));
                _this.userInfo = user;
                _this.registrado = true;
                _this.ValidaUsuario();
            });
        }, function (err) {
            //alert(err);
        });
    };
    InicioSesionPage.prototype.ValidaUsuario = function () {
        var _this = this;
        var link = "http://mauvalsa.com/CutStore/ValidaUsuario.php";
        var info = JSON.stringify({ accountid: this.userInfo.accountId, 'tel': this.userInfo.phoneNumber });
        //alert(JSON.stringify(this.userInfo));
        this.http.post(link, info)
            .subscribe(function (data) {
            _this.response = data.json();
            if (_this.response.success === true) {
                _this.nativestorage.set('Usuario', JSON.stringify({ 'accountId': _this.userInfo.accountId, 'Telefono': _this.userInfo.phoneNumber, 'Nombre': _this.response.nombre })).then(function (success) {
                    _this.nativestorage.get('Usuario').then(function (usr) {
                    });
                });
                _this.viewCtrl.dismiss();
                location.reload();
            }
            else {
                _this.registrado = true;
                var modal = _this.modalCtrl.create('RegistrarUsuarioPage', { userInfo: _this.userInfo });
                modal.present();
                //alert(this.registrado);
            }
        }, function (error) {
            console.log(error);
        });
    };
    InicioSesionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inicio-sesion',template:/*ion-inline-start:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\inicio-sesion\inicio-sesion.html"*/'<!--\n\n  Generated template for the InicioSesionPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <ion-buttons end>\n\n      <button ion-button (click)="close()" class="btnCancelar" end>\n\n          <ion-icon name="close"></ion-icon>\n\n        </button>\n\n    </ion-buttons>\n\n      \n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n<ion-content >\n\n        \n\n  <img src="assets/imgs/Cut1.png"/>\n\n  <div>\n\n    <button ion-button full class="btnIniciar" (click)="register();">Iniciar Sesion</button>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\inicio-sesion\inicio-sesion.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], InicioSesionPage);
    return InicioSesionPage;
}());

//# sourceMappingURL=inicio-sesion.js.map

/***/ })

});
//# sourceMappingURL=7.js.map