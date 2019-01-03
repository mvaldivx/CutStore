webpackJsonp([9],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, app, menu) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.menu = menu;
    }
    HomePage.prototype.MostrarInfo = function (tit, i) {
        this.navCtrl.push('PublicacionesPage', { titulo: tit, id: i, imag: "assets/imgs/" + tit + ".jpg" });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n      <ion-buttons start>\n          <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-buttons>\n    <ion-title>\n      <img class="logo" src="assets/imgs/logo1.png">\n    </ion-title>\n    <!-- <ion-buttons end>\n        <button ion-button icon-only (click)="register()">\n          <ion-icon name="notifications"></ion-icon>\n        </button>\n      </ion-buttons>\n      -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="card-background-page">\n  <div class="contenido">\n    <ion-card (click)="MostrarInfo(\'Comida\',1);">\n          <img src="assets/imgs/Comida.jpg"/>\n          <div class="card-title">Comida</div>\n          <!-- <div class="card-subtitle">214 Articulos</div> -->\n        </ion-card>\n        <ion-card (click)="MostrarInfo(\'Accesorios\',2);">\n          <img src="assets/imgs/Accesorios.jpg"/>\n          <div class="card-title">Accesorios</div>\n        </ion-card>\n        <ion-card (click)="MostrarInfo(\'Utiles\',3);">\n          <img src="assets/imgs/Utiles.jpg"/>\n          <div class="card-title">Utiles</div>\n        </ion-card>\n        <ion-card (click)="MostrarInfo(\'Ropa\',4);">\n          <img src="assets/imgs/Ropa.jpg"/>\n          <div class="card-title">Ropa</div>\n        </ion-card>\n        <ion-card (click)="MostrarInfo(\'Anuncios\',5);">\n          <img src="assets/imgs/Anuncios.jpg"/>\n          <div class="card-title">Anuncios</div>\n        </ion-card>\n  </div>\n      \n  \n    </ion-content>\n'/*ion-inline-end:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/anunciar/anunciar.module": [
		433,
		8
	],
	"../pages/articulo/articulo.module": [
		434,
		7
	],
	"../pages/chat/chat.module": [
		435,
		0
	],
	"../pages/inicio-sesion/inicio-sesion.module": [
		436,
		6
	],
	"../pages/mensajes/mensajes.module": [
		437,
		5
	],
	"../pages/mis-anuncios/mis-anuncios.module": [
		438,
		4
	],
	"../pages/nuevo-mensaje/nuevo-mensaje.module": [
		439,
		3
	],
	"../pages/publicaciones/publicaciones.module": [
		440,
		2
	],
	"../pages/registrar-usuario/registrar-usuario.module": [
		441,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 191;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/anunciar/anunciar.module#AnunciarPageModule', name: 'AnunciarPage', segment: 'anunciar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/articulo/articulo.module#ArticuloPageModule', name: 'ArticuloPage', segment: 'articulo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inicio-sesion/inicio-sesion.module#InicioSesionPageModule', name: 'InicioSesionPage', segment: 'inicio-sesion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mensajes/mensajes.module#MensajesPageModule', name: 'MensajesPage', segment: 'mensajes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mis-anuncios/mis-anuncios.module#MisAnunciosPageModule', name: 'MisAnunciosPage', segment: 'mis-anuncios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nuevo-mensaje/nuevo-mensaje.module#NuevoMensajePageModule', name: 'NuevoMensajePage', segment: 'nuevo-mensaje', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/publicaciones/publicaciones.module#PublicacionesPageModule', name: 'PublicacionesPage', segment: 'publicaciones', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registrar-usuario/registrar-usuario.module#RegistrarUsuarioPageModule', name: 'RegistrarUsuarioPage', segment: 'registrar-usuario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_file__["a" /* File */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var modalP = false;
var config = {
    apiKey: "AIzaSyAkl22bWzhgWYIsnoyUAeif0h9sM9UQFbc",
    authDomain: "cutstoreapp.firebaseapp.com",
    databaseURL: "https://cutstoreapp.firebaseio.com",
    projectId: "cutstoreapp",
    storageBucket: "cutstoreapp.appspot.com",
    messagingSenderId: "337606402651"
};
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, modalCtrl, nativestorage, toastCtrl) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.nativestorage = nativestorage;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.Usuario = {};
        this.logeado = false;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.ValidaUsuario();
        });
        __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config);
    }
    MyApp.prototype.ValidaUsuario = function () {
        var _this = this;
        this.nativestorage.getItem('Usuario').then(function (usr) {
            _this.Usuario = JSON.parse(usr);
            _this.logeado = true;
            //alert(JSON.stringify(this.Usuario)); 
        }, function (err) {
            _this.logeado = false;
            //alert(err);
            console.log(err);
        });
    };
    MyApp.prototype.CerrarSesion = function () {
        var _this = this;
        this.nativestorage.remove('Usuario').then(function (success) {
            _this.logeado = false;
            location.reload();
        });
    };
    MyApp.prototype.IniciarSesion = function () {
        if (!modalP) {
            var data = "";
            var options = { cssClass: 'modalPage' };
            var modal = this.modalCtrl.create('InicioSesionPage', data);
            modal.onDidDismiss(function (data) {
                modalP = false;
            });
            modal.present();
            modalP = true;
        }
    };
    MyApp.prototype.Anunciar = function () {
        var _this = this;
        if (!this.logeado) {
            alert("Parece que no estas registrado, es necesario iniciar sesion para publicar un anuncio");
            this.IniciarSesion();
        }
        else {
            var options = { cssClass: 'modalPage' };
            var modal = this.modalCtrl.create('AnunciarPage', { accountId: this.Usuario.accountId, usuario: this.Usuario.Nombre, tipo: 1 });
            modal.onDidDismiss(function (data) {
                //alert(JSON.stringify(data));
                var res = {};
                res = data;
                if (res.response == 1) {
                    _this.mostrarToast();
                }
            });
            modal.present();
        }
    };
    MyApp.prototype.mostrarToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Anuncio registrado correctamente',
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    MyApp.prototype.Mensajes = function () {
        if (!this.logeado) {
            alert("Parece que no estas registrado, es necesario iniciar sesion");
            this.IniciarSesion();
        }
        else {
            var options = { cssClass: 'modalPage' };
            var modal = this.modalCtrl.create('MensajesPage', { accountId: this.Usuario.accountId, usuario: this.Usuario.Nombre });
            modal.onDidDismiss(function (data) {
            });
            modal.present();
        }
    };
    MyApp.prototype.MisAnuncios = function () {
        if (!this.logeado) {
            alert("Parece que no estas registrado, es necesario iniciar sesion");
            this.IniciarSesion();
        }
        else {
            var options = { cssClass: 'modalPage' };
            var modal = this.modalCtrl.create('MisAnunciosPage', { accountId: this.Usuario.accountId, usuario: this.Usuario.Nombre });
            modal.onDidDismiss(function (data) {
            });
            modal.present();
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/app/app.html"*/'<ion-menu [content]="content" >\n    <ion-header>\n      <ion-toolbar>\n            <ion-avatar  [hidden]="!logeado" item-start class="avatar">\n                <img src="assets/imgs/avatar.png">\n            </ion-avatar>\n            <ion-title [hidden]="!logeado">{{Usuario.Nombre}}</ion-title>\n            <ion-buttons end>\n                <button ion-button icon-only color="light" menuClose>\n                    <ion-icon name="close" ></ion-icon>\n                </button>\n            </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list class="menu-buttons">\n        <button [hidden]="logeado" ion-item menuClose (click)="IniciarSesion()">\n              Iniciar sesion\n        </button>\n        <button ion-item menuClose (click)="Anunciar()">\n          Anunciar\n        </button>\n        <button ion-item menuClose (click)="MisAnuncios()">\n          Mis Anuncios\n        </button>\n        <button ion-item menuClose (click)="Mensajes()">\n          Mensajes\n        </button>\n        <button ion-item menuClose>\n          Ayuda\n        </button>\n        <button [hidden]="!logeado" ion-item menuClose (click)="CerrarSesion()">\n            Cerrar sesion\n      </button>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"/Users/mauriciovaldivia/Downloads/Ionic/CutStoreApp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[283]);
//# sourceMappingURL=main.js.map