webpackJsonp([2],{

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(387);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
            ],
        })
    ], ChatPageModule);
    return ChatPageModule;
}());

//# sourceMappingURL=chat.module.js.map

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

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_Firebase__);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.userName = "";
        this.message = "";
        this.messages = [];
        this.idMensaje = -1;
        this.usuario = "";
        this.accountId = "";
        this.idMensaje = this.navParams.get("idMensaje");
        this.usuario = this.navParams.get("usuario");
        this.accountId = this.navParams.get("accountId");
        this.ObtenerMensajes();
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.atras = function () {
        this.viewCtrl.dismiss();
    };
    ChatPage.prototype.ObtenerMensajes = function () {
        var _this = this;
        var Mensajes = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref().child("mensajes");
        Mensajes.on("value", function (snap) {
            var data = snap.val();
            _this.messages = [];
            for (var key in data) {
                if (data[key].idMensaje == _this.idMensaje) {
                    _this.messages.push(data[key]);
                    _this.scrollToBottom();
                }
            }
        });
    };
    ChatPage.prototype.scrollToBottom = function () {
        if (document.getElementById("end") != null) {
            var contentend = document.getElementById("end").offsetTop;
            this.content.scrollTo(0, contentend, 300);
        }
    };
    ChatPage.prototype.EnviarMensaje = function () {
        var Mensajes = __WEBPACK_IMPORTED_MODULE_2_Firebase__["database"]().ref().child("mensajes");
        Mensajes.push({ idMensaje: this.idMensaje, idUsuario: this.accountId, mensaje: this.message, nombreU: this.usuario });
        this.message = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("content"),
        __metadata("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\chat\chat.html"*/'<!--\n\n  Generated template for the ChatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{Usuario}}</ion-title>\n\n    <ion-buttons start>\n\n        <button ion-button icon-only (click)="atras();" class="btnCancelar">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n        </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content #content padding>\n\n    <!-- <ion-card > -->\n\n      <div class="chatBubble" *ngFor="let message of messages">\n\n        <div class="chat-bubble" [ngClass]="(message.idUsuario == accountId) ? \'chat-bubble right\' : \'chat-bubble left\'">\n\n            <span style="font-weight:bold;">{{message.nombreU}} : </span>\n\n          <div class="message"> {{message.mensaje}} </div>\n\n            <div class="message-detail">\n\n                \n\n                <!--<span>{{msg.time}}</span>-->\n\n            </div>\n\n        </div>\n\n      </div>\n\n       <!-- <ion-card-header>\n\n          {{message.nombreU}} dice:\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          {{message.mensaje}}\n\n        </ion-card-content>\n\n      </ion-card>\n\n    -->\n\n      <div id="end"></div>\n\n    \n\n</ion-content>\n\n<ion-footer>\n\n    <ion-toolbar>\n\n      <ion-input placeholder="Escribe algo..." [(ngModel)]="message"></ion-input>\n\n      <ion-buttons end>\n\n        <button ion-button icon-right class="btnCancelar" (click)="EnviarMensaje()">\n\n           \n\n          <ion-icon name="send"></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n  \n\n'/*ion-inline-end:"C:\Users\mavaldivia\Documents\Ionic\CutStore\src\pages\chat\chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=2.js.map