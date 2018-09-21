(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_page1_page1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var src_app_page2_page2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var src_app_pagereview_pagereview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pagereview/pagereview.component */ "./src/app/pagereview/pagereview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{ path: '', component: src_app_page1_page1_component__WEBPACK_IMPORTED_MODULE_2__["Page1Component"] },
    { path: 'part2', component: src_app_page2_page2_component__WEBPACK_IMPORTED_MODULE_3__["Page2Component"] },
    { path: 'feedback', component: src_app_pagereview_pagereview_component__WEBPACK_IMPORTED_MODULE_4__["PagereviewComponent"] }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\r\n    background-color: white;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page1/page1.component */ "./src/app/page1/page1.component.ts");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var _pagereview_pagereview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagereview/pagereview.component */ "./src/app/pagereview/pagereview.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _page1_page1_component__WEBPACK_IMPORTED_MODULE_4__["Page1Component"],
                _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__["Page2Component"],
                _pagereview_pagereview_component__WEBPACK_IMPORTED_MODULE_6__["PagereviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [src_app_http_service__WEBPACK_IMPORTED_MODULE_9__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.form = {};
    }
    HttpService.prototype.setForm = function (form) {
        this.form = form;
        console.log(this.form);
    };
    HttpService.prototype.getForm = function () {
        return this.form;
    };
    HttpService.prototype.postService = function () {
        return this.http.post('/ ', this.form);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_0__["Http"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/page1/page1.component.css":
/*!*******************************************!*\
  !*** ./src/app/page1/page1.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\nborder: 2px solid black;\r\nposition: absolute;\r\nleft: 35%;\r\ntop: 10%;\r\nwidth: 35em;\r\nheight: 22em;\r\npadding: 20px;\r\nbackground-color: white\r\n}\r\n\r\n#submit{\r\n    position: absolute;\r\n    right: 5%;\r\n    bottom: 5%;\r\n}"

/***/ }),

/***/ "./src/app/page1/page1.component.html":
/*!********************************************!*\
  !*** ./src/app/page1/page1.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formpart1=\"ngForm\" (ngSubmit)=\"signin(formpart1)\">\r\n  <div class=\"form-group row col-sm-12\">\r\n    <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Make</label>\r\n    <div class=\"col-sm-6\">\r\n      <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Enter Make\" ngModel name=\"Make\">\r\n    </div>\r\n  </div>\r\n    <div class=\"form-group row col-sm-12\">\r\n        <label class=\"col-sm-2 col-form-label\" for=\"inlineFormCustomSelect\">Model</label>\r\n        <div class=\"col-sm-6\">\r\n          <select class=\"form-control\" id=\"inlineFormCustomSelect\" ngModel name=\"Model\">\r\n            <option value=\"Civic\">Civic</option>\r\n            <option value=\"Odyssey\">Odyssey</option>\r\n            <option value=\"Pilot\">Pilot</option>\r\n            <option value=\"Accord\">Accord</option>\r\n          </select>\r\n        </div>\r\n       \r\n    </div>\r\n  <div class=\"form-group row col-sm-12\">\r\n    <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Year</label>\r\n    <div class=\"col-sm-6\">\r\n      <input type=\"number\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Year\" ngModel name=\"Year\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"form-group row col-sm-12 \"  >\r\n\r\n      <legend class=\"col-form-label col-sm-2\" >Type</legend>\r\n\r\n        <div class=\"col-sm-3\">\r\n          <input class=\"col-sm-3\" type=\"radio\" name=\"Type\" id=\"gridRadios1\" value=\"Sedan\" ngModel checked>\r\n          <label class=\"col-form-label col-sm-9\" for=\"gridRadios1\">\r\n            Sedan\r\n          </label>\r\n        </div>          \r\n        <div class=\"form-check col-sm-3\">\r\n          <input class=\"col-sm-3\" type=\"radio\" name=\"Type\" id=\"gridRadios2\" value=\"Coupe\" ngModel>\r\n          <label class=\"col-form-label col-sm-9\" for=\"gridRadios2\">\r\n            Coupe\r\n          </label>\r\n        </div>\r\n  </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary col-sm-2\" id=\"submit\">Next</button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/page1/page1.component.ts":
/*!******************************************!*\
  !*** ./src/app/page1/page1.component.ts ***!
  \******************************************/
/*! exports provided: Page1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1Component", function() { return Page1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Page1Component = /** @class */ (function () {
    function Page1Component(router, http) {
        this.router = router;
        this.http = http;
    }
    Page1Component.prototype.ngOnInit = function () {
    };
    Page1Component.prototype.signin = function (form) {
        this.http.setForm(form.value);
        console.log(Object.keys(form.value));
        for (var _i = 0, _a = Object.keys(form.value); _i < _a.length; _i++) {
            var val = _a[_i];
            console.log(val);
            if (form.value['' + val + ''].length === 0) {
                window.alert("enter all required fields");
                return;
            }
        }
        this.router.navigateByUrl('/part2');
    };
    Page1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page1',
            template: __webpack_require__(/*! ./page1.component.html */ "./src/app/page1/page1.component.html"),
            styles: [__webpack_require__(/*! ./page1.component.css */ "./src/app/page1/page1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "./src/app/page2/page2.component.css":
/*!*******************************************!*\
  !*** ./src/app/page2/page2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form{\r\n    border: 2px solid black;\r\n    position: absolute;\r\n    left: 35%;\r\n    top: 10%;\r\n    width: 35em;\r\n    height: 22em;\r\n    padding: 20px;\r\n    background-color: white\r\n    }\r\n\r\n#submit{\r\n    position: absolute;\r\n    right: 5%;\r\n    bottom: 5%;\r\n}"

/***/ }),

/***/ "./src/app/page2/page2.component.html":
/*!********************************************!*\
  !*** ./src/app/page2/page2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formpart2=\"ngForm\" (ngSubmit)=\"signin(formpart2)\">\r\n\r\n  <div class=\"form-group col-sm-12 row\">\r\n      <legend class=\"col-form-label col-sm-2\">Features</legend>\r\n\r\n      <div class=\"col-sm-2\">\r\n        <input type=\"checkbox\" id=\"GPS\" name=\"GPS\" value=\"GPS\" ngModel class=\"col-sm-3\">\r\n        <label for=\"GPS\" class=\"col-form-label col-sm-9\">GPS</label>\r\n      </div>\r\n\r\n      <div class=\"col-sm-5\">\r\n        <input type=\"checkbox\" id=\"SecurityLock\" name=\"SecurityLock\" value=\"SecurityLock\" class=\"col-sm-2\" ngModel>\r\n        <label for=\"SecurityLock\" class=\"col-form-label col-sm-10\">Security Lock</label>\r\n      </div>\r\n      <div class=\"col-sm-3\">\r\n        <input type=\"checkbox\" id=\"CargoMat\" name=\"CargoMat\" value=\"CargoMat\" ngModel class=\"col-sm-2\">\r\n        <label for=\"CargoMat\" class=\"col-form-label col-sm-10\">CargoMat</label>\r\n      </div>\r\n    \r\n  </div>\r\n   \r\n  <div class=\"form-group row col-sm-12\">\r\n    <label for=\"inputEmail3\" class=\"col-sm-4 col-form-label\">Purchase Date</label>\r\n    <div class=\"col-sm-6\">\r\n      <input type=\"date\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"PurchaseDate\" ngModel name=\"PurchaseDate\">\r\n    </div>\r\n  </div>\r\n  \r\n      <button type=\"submit\" class=\"btn btn-primary\" id=\"submit\">Submit</button>\r\n  \r\n</form>"

/***/ }),

/***/ "./src/app/page2/page2.component.ts":
/*!******************************************!*\
  !*** ./src/app/page2/page2.component.ts ***!
  \******************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Page2Component = /** @class */ (function () {
    function Page2Component(router, http) {
        this.router = router;
        this.http = http;
    }
    Page2Component.prototype.ngOnInit = function () {
    };
    Page2Component.prototype.signin = function (form) {
        var _this = this;
        var formpart1 = this.http.getForm();
        form.value['features'] = [];
        for (var _i = 0, _a = ['GPS', "SecurityLock", "CargoMat"]; _i < _a.length; _i++) {
            var ele = _a[_i];
            if (form.value[ele]) {
                console.log(ele);
                form.value['features'].push(ele);
                console.log(form.value['features']);
            }
        }
        this.router.navigateByUrl('/feedback');
        this.http.setForm(__assign({}, formpart1, form.value));
        this.http.postService().subscribe(function (res) {
            console.log(res);
            _this.router.navigateByUrl('/feedback');
        }, function (err) {
            console.log(err);
        });
    };
    Page2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page2',
            template: __webpack_require__(/*! ./page2.component.html */ "./src/app/page2/page2.component.html"),
            styles: [__webpack_require__(/*! ./page2.component.css */ "./src/app/page2/page2.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "./src/app/pagereview/pagereview.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagereview/pagereview.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    border: 2px solid black;\r\n    position: absolute;\r\n    left: 35%;\r\n    top: 10%;\r\n    width: 35em;\r\n    height: 22em;\r\n    padding: 20px;\r\n    background-color: white\r\n}"

/***/ }),

/***/ "./src/app/pagereview/pagereview.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagereview/pagereview.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"resultpagereview\">\r\n    The user selected the following input:  \r\n    <ul>\r\n      <li>{{ formData.Make }}  {{ formData.Model }}  {{ formData.Year }}  {{ formData.type}}</li>\r\n      <li>with {{formData.features }}</li>\r\n      <li>accessories on {{formData.PurchaseDate}}</li>\r\n      The user will get {{discount}}% discount.\r\n    </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pagereview/pagereview.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagereview/pagereview.component.ts ***!
  \****************************************************/
/*! exports provided: PagereviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagereviewComponent", function() { return PagereviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PagereviewComponent = /** @class */ (function () {
    function PagereviewComponent(http) {
        this.http = http;
        this.formData = {};
        this.discount = 0;
    }
    PagereviewComponent.prototype.ngOnInit = function () {
        this.formData = this.http.getForm();
        var date = new Date(this.formData['PurchaseDate']);
        console.log(date.getUTCDate());
        this.discount = date.getUTCDate() % 2 === 0 ? 40 : 30;
        console.log(this.formData);
    };
    PagereviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagereview',
            template: __webpack_require__(/*! ./pagereview.component.html */ "./src/app/pagereview/pagereview.component.html"),
            styles: [__webpack_require__(/*! ./pagereview.component.css */ "./src/app/pagereview/pagereview.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], PagereviewComponent);
    return PagereviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\S530711\Desktop\GdpExam-1\gdpexam\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map