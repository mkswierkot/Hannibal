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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Training.service.ts":
/*!*************************************!*\
  !*** ./src/app/Training.service.ts ***!
  \*************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TrainingService = /** @class */ (function () {
    function TrainingService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/trainings/';
        this.trainingSchedules_url = 'http://localhost:8080/api/trainingschedules/';
    }
    TrainingService.prototype.getTrainings = function () {
        return this.http.get(this.url);
    };
    TrainingService.prototype.createTraining = function (training) {
        return this.http.post(this.url, training, { responseType: 'text' });
    };
    TrainingService.prototype.deleteTraining = function (Id) {
        return this.http.delete(this.url + Id);
    };
    TrainingService.prototype.updateTraining = function (id, training) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put(this.url + id, JSON.stringify(training), httpOptions);
    };
    TrainingService.prototype.getTrainingsSchedule = function () {
        return this.http.get(this.trainingSchedules_url);
    };
    TrainingService.prototype.addTrainingToSchedule = function (trainingRow) {
        return this.http.post(this.trainingSchedules_url, trainingRow, { responseType: 'text' });
    };
    TrainingService.prototype.deleteTrainingSchedule = function (Id) {
        return this.http.delete(this.trainingSchedules_url + Id);
    };
    TrainingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrainingService);
    return TrainingService;
}());



/***/ }),

/***/ "./src/app/TrainingEntry.service.ts":
/*!******************************************!*\
  !*** ./src/app/TrainingEntry.service.ts ***!
  \******************************************/
/*! exports provided: TrainingentryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingentryService", function() { return TrainingentryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TrainingentryService = /** @class */ (function () {
    function TrainingentryService(http) {
        this.http = http;
        this.trainingEntries = [];
        this.url = 'http://localhost:8080/api/trainingentries/';
    }
    TrainingentryService.prototype.getTrainingEntries = function () {
        return this.http.get(this.url, { responseType: 'text' });
    };
    TrainingentryService.prototype.addTrainingEntry = function (trainingEntry) {
        return this.http.post(this.url, trainingEntry, { responseType: 'text' });
    };
    TrainingentryService.prototype.updateTrainingEntry = function (id, trainingEntry) {
        console.log(id);
        console.log(trainingEntry);
        trainingEntry.lockerReturned = true;
        return this.http.put(this.url + id, trainingEntry, { responseType: 'text' });
    };
    TrainingentryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrainingentryService);
    return TrainingentryService;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = " \r\n#sideBar {\r\n  height:100%;\r\n  padding-top: 80px;\r\n  display: inline;\r\n  position: relative;\r\n  float: left;\r\n  background-color: #101519; \r\n  padding-left:10px;\r\n  bottom:0;\r\n}\r\n\r\n#dashboard {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: auto;\r\n \r\n}\r\n\r\n.test {\r\n  background-image: url(\"http://crossbox.kaszuby.pl/wp-content/uploads/2018/10/ATC-Fitness-Crossfit-Back.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: cover;\r\n  height:100%;\r\n}\r\n\r\n.dashboard-regular {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 130px;\r\n  display: inline;\r\n  position: relative;\r\n  float: left;\r\n  height: 100%;\r\n  bottom: 0;\r\n   \r\n}\r\n\r\n.dashboard-login {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-top: 150px;\r\n  opacity:0.95;\r\n}\r\n\r\n#navbar{\r\n  background-color:#161010!important;\r\n  padding-left:60px; \r\n}\r\n\r\n.login-display\r\n{\r\n  display:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCOztBQUVsQjs7QUFDQTtFQUNFLDRHQUE0RztFQUM1Ryw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBQzNCLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUzs7QUFFWDs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbiNzaWRlQmFyIHtcclxuICBoZWlnaHQ6MTAwJTtcclxuICBwYWRkaW5nLXRvcDogODBweDtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMDE1MTk7IFxyXG4gIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4gIGJvdHRvbTowO1xyXG59XHJcblxyXG4jZGFzaGJvYXJkIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxuIFxyXG59XHJcbi50ZXN0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwOi8vY3Jvc3Nib3gua2FzenVieS5wbC93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9BVEMtRml0bmVzcy1Dcm9zc2ZpdC1CYWNrLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDoxMDAlO1xyXG59XHJcbi5kYXNoYm9hcmQtcmVndWxhciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEzMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvdHRvbTogMDtcclxuICAgXHJcbn1cclxuLmRhc2hib2FyZC1sb2dpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gIG9wYWNpdHk6MC45NTtcclxufVxyXG4jbmF2YmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzE2MTAxMCFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1sZWZ0OjYwcHg7IFxyXG59XHJcblxyXG4ubG9naW4tZGlzcGxheVxyXG57XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n \r\n  <div *ngIf=\"!login\" class=\"row\">\r\n    <app-navbar id=\"navbar\" class=\"navbar fixed-top shadow\"></app-navbar>\r\n  </div>\r\n\r\n  <div class=\"row\" id=\"mainContent\" [ngClass]=\"{'test': login }\"  >\r\n\r\n    <div id=\"sideBar\" *ngIf=\"!login\" class=\"col col-lg-3 col-sm-0 col-xs-0\">\r\n      <app-sidebar></app-sidebar>\r\n    </div>\r\n\r\n    <div  [ngClass]=\"{'dashboard-login': login , 'dashboard-regular': !login, 'col-lg-9': !login, 'col-lg-5': login }\" class=\"col col-lg-9 col-sm-0 col-xs-0\">\r\n\r\n      <router-outlet #outlet=\"outlet\"></router-outlet>\r\n\r\n    </div>\r\n    \r\n\r\n  </div>\r\n\r\n\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.title = 'Auctor';
        this.login = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _sections_section_clients_section_clients_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/section-clients/section-clients.component */ "./src/app/sections/section-clients/section-clients.component.ts");
/* harmony import */ var _sections_section_trainings_section_trainings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/section-trainings/section-trainings.component */ "./src/app/sections/section-trainings/section-trainings.component.ts");
/* harmony import */ var _sections_section_subscriptions_section_subscriptions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/section-subscriptions/section-subscriptions.component */ "./src/app/sections/section-subscriptions/section-subscriptions.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/routes */ "./src/routes.ts");
/* harmony import */ var _login_2_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login (2)/login.component */ "./src/app/login (2)/login.component.ts");
/* harmony import */ var _sections_section_add_client_section_add_client_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sections/section-add-client/section-add-client.component */ "./src/app/sections/section-add-client/section-add-client.component.ts");
/* harmony import */ var _sections_section_add_subscription_section_add_subscription_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sections/section-add-subscription/section-add-subscription.component */ "./src/app/sections/section-add-subscription/section-add-subscription.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _sections_section_payments_section_payments_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sections/section-payments/section-payments.component */ "./src/app/sections/section-payments/section-payments.component.ts");
/* harmony import */ var _sections_section_accept_payment_section_accept_payment_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sections/section-accept-payment/section-accept-payment.component */ "./src/app/sections/section-accept-payment/section-accept-payment.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _sections_section_add_training_entry_section_add_training_entry_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sections/section-add-training-entry/section-add-training-entry.component */ "./src/app/sections/section-add-training-entry/section-add-training-entry.component.ts");
/* harmony import */ var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-filter-pipe */ "./node_modules/ngx-filter-pipe/esm5/ngx-filter-pipe.js");
/* harmony import */ var _autofocus_directive__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./autofocus.directive */ "./src/app/autofocus.directive.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _sections_section_clients_section_clients_component__WEBPACK_IMPORTED_MODULE_8__["SectionClientsComponent"],
                _sections_section_trainings_section_trainings_component__WEBPACK_IMPORTED_MODULE_9__["SectionTrainingsComponent"],
                _sections_section_subscriptions_section_subscriptions_component__WEBPACK_IMPORTED_MODULE_10__["SectionSubscriptionsComponent"],
                _sections_section_add_client_section_add_client_component__WEBPACK_IMPORTED_MODULE_16__["SectionAddClientComponent"],
                _sections_section_add_subscription_section_add_subscription_component__WEBPACK_IMPORTED_MODULE_17__["SectionAddSubscriptionComponent"],
                _sections_section_payments_section_payments_component__WEBPACK_IMPORTED_MODULE_22__["SectionPaymentsComponent"],
                _sections_section_accept_payment_section_accept_payment_component__WEBPACK_IMPORTED_MODULE_23__["SectionAcceptPaymentComponent"],
                _sections_section_add_training_entry_section_add_training_entry_component__WEBPACK_IMPORTED_MODULE_29__["SectionAddTrainingEntryComponent"],
                _autofocus_directive__WEBPACK_IMPORTED_MODULE_31__["AutofocusDirective"],
                _login_2_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"]
            ],
            imports: [
                ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_30__["FilterPipeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_28__["NgxPaginationModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_13__["Ng2SearchPipeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(src_routes__WEBPACK_IMPORTED_MODULE_14__["appRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_25__["MatCheckboxModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_27__["MatSlideToggleModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/users/authenticate';
    }
    AuthService.prototype.login = function (username, password) {
        return this.http.post(this.url, { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/autofocus.directive.ts":
/*!****************************************!*\
  !*** ./src/app/autofocus.directive.ts ***!
  \****************************************/
/*! exports provided: AutofocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutofocusDirective", function() { return AutofocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AutofocusDirective = /** @class */ (function () {
    function AutofocusDirective(el) {
        this.el = el;
    }
    AutofocusDirective.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.el.nativeElement.focus();
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AutofocusDirective.prototype, "appAutoFocus", void 0);
    AutofocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appAutofocus]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/client.service.ts":
/*!***********************************!*\
  !*** ./src/app/client.service.ts ***!
  \***********************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/clients/';
    }
    ClientService.prototype.getClients = function () {
        return this.http.get(this.url);
    };
    ClientService.prototype.getClientById = function (Id) {
        return this.http.get(this.url + Id, { responseType: 'text' });
    };
    ClientService.prototype.createClient = function (client) {
        return this.http.post(this.url, client, { responseType: 'text' });
    };
    ClientService.prototype.updateClient = function (clientForm, client) {
        var obj = JSON.parse(client);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('content-type', 'application/json');
        if (clientForm.value['cardId'] != null)
            obj['cardId'] = clientForm.value['cardId'];
        if (clientForm.value['name'] != null)
            obj['name'] = clientForm.value['name'];
        if (clientForm.value['surname'] != null)
            obj['surname'] = clientForm.value['surname'];
        if (clientForm.value['phone'] != null)
            obj['phone'] = clientForm.value['phone'];
        if (clientForm.value['email'] != null)
            obj['email'] = clientForm.value['email'];
        if (clientForm.value['group'] != null)
            obj['GroupId'] = clientForm.value['group'];
        if (clientForm.value['group1'] != null)
            obj['Group1Id'] = clientForm.value['group1'];
        if (clientForm.value['group2'] != null)
            obj['Group2Id'] = clientForm.value['group2'];
        if (clientForm.value['gymEntriesLeft'] != null)
            obj['gymEntriesLeft'] = clientForm.value['gymEntriesLeft'];
        if (clientForm.value['martialArtsEntriesLeft'] != null)
            obj['martialArtsEntriesLeft'] = clientForm.value['martialArtsEntriesLeft'];
        //var body = {
        //  id: obj['id'],
        //  cardId: obj['cardId'],
        //  name: clientForm.value['name'],
        //  surname: clientForm.value['surname'],
        //  phone: clientForm.value['phone'],
        //  email: clientForm.value['email'],
        //  gymEntriesLeft: clientForm.value['gymEntriesLeft'], 
        //  martialArtsEntriesLeft: clientForm.value['martialArtsEntriesLeft'],
        //}
        return this.http.put(this.url + obj['id'], JSON.stringify(obj), { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    };
    ClientService.prototype.deleteClient = function (id) {
        return this.http.delete(this.url + id);
    };
    ClientService.prototype.errorHandler = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/information.service.ts":
/*!****************************************!*\
  !*** ./src/app/information.service.ts ***!
  \****************************************/
/*! exports provided: InformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationService", function() { return InformationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var InformationService = /** @class */ (function () {
    function InformationService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/information/';
    }
    InformationService.prototype.getInformations = function () {
        return this.http.get(this.url);
    };
    InformationService.prototype.getInformationByClientId = function (Id) {
        return this.http.get(this.url + Id);
    };
    InformationService.prototype.addInformationToClient = function (information) {
        return this.http.post(this.url, information, { responseType: 'text' });
    };
    InformationService.prototype.updateInformation = function (id, information) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        information.display = false;
        return this.http.put(this.url + id, information, httpOptions);
    };
    InformationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InformationService);
    return InformationService;
}());



/***/ }),

/***/ "./src/app/login (2)/login.component.css":
/*!***********************************************!*\
  !*** ./src/app/login (2)/login.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luICgyKS9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/login (2)/login.component.html":
/*!************************************************!*\
  !*** ./src/app/login (2)/login.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n \r\n\r\n  <form  [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" style=\" background-color:#1f242a; padding:20px; text-align:center;  border-top-left-radius:5px; border-top-right-radius:5px; \" class=\"shadow \">\r\n    <img style=\"width:15%; background-color:inherit;\" src=\"/assets/logo.png\" alt=\"image\">\r\n\r\n    <h2 style=\"margin-top:30px;  \">  <span style=\"color:darkgoldenrod\">CENTRUM SPORTOWE BASTION</span></h2>\r\n\r\n    <mat-form-field style=\"text-align: center; margin-top:20px;\">\r\n      <input formControlName=\"username\" matInput type=\"text\">\r\n      <mat-placeholder class=\"placeholder\">Nazwa użytkownika </mat-placeholder>\r\n    </mat-form-field>\r\n    <br />\r\n\r\n    <mat-form-field style=\"text-align: center;\">\r\n      <input formControlName=\"password\" matInput type=\"password\">\r\n      <mat-placeholder class=\"placeholder\">Hasło </mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <div class=\"form-group\">\r\n      <button class=\"btn shadow\" style=\"border-radius:1px;\">Zaloguj</button>\r\n    </div>\r\n  </form>\r\n  <div style=\"background-color: white; height:50px; text-align:center; border-top:12px solid #5f2e32; border-bottom-left-radius:5px; border-bottom-right-radius:5px;\" class=\"shadow\">\r\n    <span style=\" margin-top:35px; color: #212d37;\">LOGOWANIE DO SYSTEMU</span>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/login (2)/login.component.ts":
/*!**********************************************!*\
  !*** ./src/app/login (2)/login.component.ts ***!
  \**********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authService, appComponent, snackBar) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.appComponent = appComponent;
        this.snackBar = snackBar;
        this.submitted = false;
        this.loading = false;
        this.message = '';
        this.snackbarClass = '';
    }
    LoginComponent.prototype.ngOnDestroy = function () {
        this.appComponent.login = !this.appComponent.login;
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.appComponent.login = !this.appComponent.login;
        setTimeout(function () {
            return null;
        }, 3000);
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // reset login status
        this.authService.logout();
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(this.message, action, {
            duration: 4000,
            panelClass: [this.snackbarClass]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['clients']);
        }, function (error) {
            _this.snackbarClass = 'snackbar-failed';
            _this.message = "Nieudana próba logowania!";
            _this.openSnackBar(_this.message, 'Ok!');
            _this.loginForm.patchValue({ 'username': null });
            _this.loginForm.patchValue({ 'password': null });
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login (2)/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login (2)/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n.logo-left\r\n{\r\n  color:white;\r\n  border-radius:3px;\r\n  padding:3px;\r\n  font-size:30px;\r\n  background-color:firebrick;\r\n}\r\n.logo-right {\r\n  color: whitesmoke;\r\n  padding: 3px;\r\n  font-size:20px;\r\n}\r\n#logo\r\n{\r\n  color:gold;\r\n}\r\nh1{\r\n  float:right;\r\n  padding-left:20px;\r\n  color:white;\r\n  padding-top:8px;\r\n \r\n}\r\nh1:hover{\r\n  color:#ccc;\r\n}\r\n.login-info {\r\n  float: right;\r\n  color: dimgray;\r\n}\r\n.login-info:hover{\r\n   \r\n  cursor:pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiBcclxuLmxvZ28tbGVmdFxyXG57XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czozcHg7XHJcbiAgcGFkZGluZzozcHg7XHJcbiAgZm9udC1zaXplOjMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpmaXJlYnJpY2s7XHJcbn1cclxuLmxvZ28tcmlnaHQge1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICBmb250LXNpemU6MjBweDtcclxufVxyXG4jbG9nb1xyXG57XHJcbiAgY29sb3I6Z29sZDtcclxufVxyXG5oMXtcclxuICBmbG9hdDpyaWdodDtcclxuICBwYWRkaW5nLWxlZnQ6MjBweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDo4cHg7XHJcbiBcclxufVxyXG5oMTpob3ZlcntcclxuICBjb2xvcjojY2NjO1xyXG59XHJcbi5sb2dpbi1pbmZvIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IGRpbWdyYXk7XHJcbn0gXHJcbi5sb2dpbi1pbmZvOmhvdmVye1xyXG4gICBcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"navbar-brand\">\r\n\r\n\r\n  <h1>\r\n    <img style=\"width:5%;\" src=\"https://scontent.fktw1-1.fna.fbcdn.net/v/t1.0-9/37042557_2555514904473974_3340497585688281088_n.jpg?_nc_cat=105&_nc_oc=AQn6L2WKgBFo1bg2rqOgXqb3gxz5I7bnY4vk6fp361Lca0jf-LblwZ-u8O24VBgrOQM&_nc_ht=scontent.fktw1-1.fna&oh=ad0feb6fb585d9b9db34dc3c23955071&oe=5E579D73\"> CENTRUM SPORTOWE BASTION\r\n\r\n    <span style=\"font-size:16px;   color: #2c2929;\" *ngIf=\"currentUser != null\" class=\"login-info\" (click)=\"logout()\">Wyloguj, {{currentUser.username}}!</span>\r\n\r\n\r\n  </h1>\r\n\r\n\r\n</a>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, snackBar) {
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.message = '';
        this.snackbarClass = '';
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(this.message, action, {
            duration: 4000,
            panelClass: [this.snackbarClass]
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.snackbarClass = 'snackbar';
        this.message = "Pomyślnie się wylogowałeś!";
        this.authService.logout();
        this.openSnackBar(this.message, 'Ok!');
        this.router.navigate(['login']);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/payment.service.ts":
/*!************************************!*\
  !*** ./src/app/payment.service.ts ***!
  \************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/payments/';
        this.url_contracts = 'http://localhost:8080/api/contracts/';
    }
    PaymentService.prototype.getPayments = function () {
        return this.http.get(this.url);
    };
    PaymentService.prototype.createPayment = function (payment) {
        return this.http.post(this.url, payment, { responseType: 'text' });
    };
    PaymentService.prototype.createContract = function (contract) {
        return this.http.post(this.url_contracts, contract, { responseType: 'text' });
    };
    PaymentService.prototype.deleteContract = function (Id) {
        return this.http.delete(this.url_contracts + Id);
    };
    PaymentService.prototype.updatePayment = function (id, payment) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put(this.url + id, payment, httpOptions);
    };
    PaymentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/sections/section-accept-payment/section-accept-payment.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/sections/section-accept-payment/section-accept-payment.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\r\n  padding: 10px;\r\n  color: white;\r\n}\r\n.client-info\r\n{\r\n  background-color:#25282f;\r\n  padding:10px;\r\n  margin-top:20px;\r\n  color:#9d9c9c;\r\n  border-radius:5px;\r\n  text-transform:uppercase;\r\n  font-size:20px;\r\n\r\n}\r\n.warning {\r\n  background-color: #c64646;\r\n  border-radius: 3px;\r\n  color: black;\r\n  padding: 10px;\r\n  text-align: center;\r\n  margin:10px;\r\n  margin-bottom:10px;\r\n}\r\n.warning:hover {\r\n    background-color: #cf7f7f;\r\n  }\r\n.disclaimer {\r\n  background-color: #52add7;\r\n  border-radius: 3px;\r\n  color: black;\r\n  padding: 2px;\r\n  text-align: center;\r\n}\r\n.disclaimer:hover {\r\n    background-color: #88c1db;\r\n  }\r\n.add-info\r\n{\r\n  color: indianred;\r\n}\r\ntable{\r\n   border-bottom:1px solid darkgoldenrod;\r\n   border-radius:5px;\r\n   background-color:#222a31;\r\n }\r\n#subscriptionInput {\r\n  width: 250px;\r\n}\r\n#IncomeDate{\r\n  width:250px;\r\n}\r\nform{\r\n   width:100%;\r\n  margin-top:30px;\r\n}\r\nh5 {\r\n  margin-left: 15px;\r\n  margin-bottom: 15px;\r\n  margin-top: 10px;\r\n  color: papayawhip;\r\n}\r\n \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi1hY2NlcHQtcGF5bWVudC9zZWN0aW9uLWFjY2VwdC1wYXltZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBQ0E7O0VBRUUsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsY0FBYzs7QUFFaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUVFO0lBQ0UseUJBQXlCO0VBQzNCO0FBRUY7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUU7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQztHQUNFLHFDQUFxQztHQUNyQyxpQkFBaUI7R0FDakIsd0JBQXdCO0NBQzFCO0FBQ0Q7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0dBQ0csVUFBVTtFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb24tYWNjZXB0LXBheW1lbnQvc2VjdGlvbi1hY2NlcHQtcGF5bWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2xpZW50LWluZm9cclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzI1MjgyZjtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIGNvbG9yOiM5ZDljOWM7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtc2l6ZToyMHB4O1xyXG5cclxufVxyXG4ud2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2NDY0NjtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjoxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG5cclxuICAud2FybmluZzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3ZjdmO1xyXG4gIH1cclxuXHJcbi5kaXNjbGFpbWVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJhZGQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAuZGlzY2xhaW1lcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODhjMWRiO1xyXG4gIH1cclxuLmFkZC1pbmZvXHJcbntcclxuICBjb2xvcjogaW5kaWFucmVkO1xyXG59XHJcbiB0YWJsZXtcclxuICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgZGFya2dvbGRlbnJvZDtcclxuICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IzIyMmEzMTtcclxuIH1cclxuI3N1YnNjcmlwdGlvbklucHV0IHtcclxuICB3aWR0aDogMjUwcHg7XHJcbn1cclxuI0luY29tZURhdGV7XHJcbiAgd2lkdGg6MjUwcHg7XHJcbn1cclxuZm9ybXtcclxuICAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW4tdG9wOjMwcHg7XHJcbn1cclxuaDUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjogcGFwYXlhd2hpcDtcclxufVxyXG4gXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sections/section-accept-payment/section-accept-payment.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/sections/section-accept-payment/section-accept-payment.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"section-container\">\r\n\r\n  <h4>\r\n\r\n    <i class=\"material-icons\">account_balance_wallet</i> PŁATNOŚCI - <span style=\"color:#ced2d9;\">{{object.name}} {{object.surname}} ID: {{object.cardId}} </span>\r\n    <div style=\"margin-top:20px;\" *ngFor=\"let information of disclaimer\" (click)=\"hideInformation(information.id, information)\">\r\n      <p matTooltip=\"Kliknij, aby usunąć uwagę.\" class=\"disclaimer shadow\" *ngIf=\"information.display == true\">  {{information.content}} </p>\r\n    </div>\r\n  </h4>\r\n\r\n  <hr />\r\n\r\n\r\n\r\n\r\n  <form class=\"form shadow\" [formGroup]=\"paymentForm\" (ngSubmit)=\"onFormSubmit()\">\r\n\r\n    <h5 style=\"margin-bottom:10px;\">PRZYJMIJ PŁATNOŚĆ</h5>\r\n\r\n    <div *ngIf=\"object.payments != null\">\r\n      <div style=\"margin-top:20px;\" *ngFor=\"let payment of object.payments\" (click)=\"compensatePayment(payment, payment.subscription.price)\">\r\n        <p matTooltip=\"Kliknij, aby wyrównać płatność.\" class=\"col col-12 warning shadow\" *ngIf=\"payment.paymentCompleted != true\"> Niedopłata w dniu {{payment.paymentRegistered | date:'d/MM/yyyy'}}: przyjęto {{payment.cashRegistered }} zł za  {{payment.subscription.name}} <span style=\"color:#ced1e6;\">[{{payment.subscription.price}} zł]</span></p>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Karnet ważny do\"\r\n             autocomplete=\"off\"\r\n             name=\"date\" formControlName=\"SubscriptionExpires\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker [startAt]=\"ExpireDate\" #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n\r\n\r\n    <mat-form-field id=\"subscriptionInput\">\r\n\r\n      <mat-select style=\"width:120px;\" formControlName=\"SubscriptionId\" placeholder=\"Rodzaj karnetu\">\r\n\r\n        <mat-option *ngFor=\"let subscription of subscriptions\" [value]=\"subscription.id\">\r\n          {{subscription.name}} <span style=\"font-size:12px; color:gray\">({{subscription.price}} zł) - GYM:{{subscription.gymEntries}} - SW: {{subscription.martialArtsEntries}}</span>\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"AdditionalInformation\" matInput type=\"text\">\r\n      <mat-placeholder class=\"placeholder\">Uwagi do płatności  </mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field style=\"width:120px;\" (click)=\"ZerujPrzyjetoDoKasy()\">\r\n      <input id=\"CashRegistered\" formControlName=\"CashRegistered\" matInput type=\"number\">\r\n      <mat-placeholder class=\"placeholder\"> Przyjęto do kasy  </mat-placeholder>\r\n    </mat-form-field>\r\n\r\n\r\n\r\n    <br />\r\n\r\n\r\n    <button class=\"submit-button shadow\" type=\"submit\">PRZYJMIJ</button>\r\n  </form>\r\n\r\n\r\n  <form class=\"form shadow\" [formGroup]=\"contractForm\" (ngSubmit)=\"onContractFormSubmit()\">\r\n\r\n    <h5>DODAJ KLIENTA DO GRUPY</h5>\r\n\r\n\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"EntryDate\" placeholder=\"Dołączono w dniu\"\r\n             autocomplete=\"off\"\r\n             name=\"entryDate\" formControlName=\"EntryDate\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker [startAt]=\"TodysDate\" #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field id=\"groupInput\">\r\n      <mat-select formControlName=\"GroupId\" placeholder=\"Grupa\">\r\n\r\n        <mat-option *ngFor=\"let group of groups\" [value]=\"group.id\" (click)=\"passGroup(group)\">\r\n          {{group.name}}\r\n\r\n        </mat-option>\r\n\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n\r\n\r\n    <br />\r\n\r\n\r\n    <button class=\"submit-button shadow\" type=\"submit\">DODAJ</button>\r\n  </form>\r\n\r\n\r\n  <!--<h4 style=\"margin-top:50px;\">\r\n\r\n    <i class=\"material-icons\">import_contacts</i>  DOTYCHCZASOWE PŁATNOŚCI KLIENTA\r\n\r\n\r\n\r\n  </h4>\r\n  <hr>\r\n  <table class=\"shadow table table-inverse table-hover table-sm\">\r\n\r\n    <thead class=\"thead-dark\">\r\n\r\n      <tr>\r\n        <th>Id płatności</th>\r\n        <th>Karnet</th>\r\n        <th>Przyjęta gotówka</th>\r\n        <th>Dzień wpłaty</th>\r\n        <th>Uwagi do płatności</th>\r\n        <th>Płatność niezakończona?</th>\r\n\r\n      </tr>\r\n\r\n    </thead>\r\n    <tbody *ngIf=\"currentClient.payments != null\">\r\n      <tr *ngFor=\"let item of currentClient.payments | paginate: { itemsPerPage: 5, currentPage: p} \">\r\n\r\n        <td>{{item.id}}</td>\r\n        <td>\r\n          <div *ngIf=\"item.subscriptionId == null\">Inne</div>\r\n          <div *ngIf=\"item.subscriptionId != null\">{{item.subscription.name }}</div>\r\n        </td>\r\n        <td> {{item.cashRegistered }} zł</td>\r\n        <td>{{item.paymentRegistered | date:\"short\"}}</td>\r\n        <td>{{item.additionalInformation}}</td>\r\n        <td>\r\n          <div *ngIf=\"item.paymentCompleted==false\"><i class=\"material-icons\" style=\"color:indianred;\"> error </i></div>\r\n          <div *ngIf=\"item.paymentCompleted==true\"></div>\r\n        </td>\r\n\r\n      </tr>\r\n\r\n    </tbody>\r\n\r\n  </table>\r\n  <pagination-controls previousLabel=\"\" nextLabel=\"\" class=\"my-pagination text-center\" (pageChange)=\"p = $event\"> </pagination-controls>-->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/section-accept-payment/section-accept-payment.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/sections/section-accept-payment/section-accept-payment.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SectionAcceptPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAcceptPaymentComponent", function() { return SectionAcceptPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../payment.service */ "./src/app/payment.service.ts");
/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../subscription.service */ "./src/app/subscription.service.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client.service */ "./src/app/client.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_information_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/information.service */ "./src/app/information.service.ts");










var SectionAcceptPaymentComponent = /** @class */ (function () {
    function SectionAcceptPaymentComponent(httpService, formbulider, paymentService, clientService, subscriptionService, informationService, router, snackBar) {
        this.httpService = httpService;
        this.formbulider = formbulider;
        this.paymentService = paymentService;
        this.clientService = clientService;
        this.subscriptionService = subscriptionService;
        this.informationService = informationService;
        this.router = router;
        this.snackBar = snackBar;
        this.TodaysDate = new Date((new Date().getTime() + 3600000));
        this.dataSaved = false;
        this.message = null;
        this.disclaimer = [];
        this.today = new Date((new Date()));
        this.createdInformation = null;
        this.subscriptions = [];
        this.groups = [];
        this.object = null;
        this.p = 1; //pagination starting point
        this.compensatedPayment = null;
    }
    SectionAcceptPaymentComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(this.message, action, {
            duration: 4000,
            panelClass: ['snackbar']
        });
    };
    SectionAcceptPaymentComponent.prototype.ngOnInit = function () {
        this.ExpireDate = new Date(this.TodaysDate.getFullYear(), this.TodaysDate.getMonth() + 1, this.TodaysDate.getDate());
        if (this.TodaysDate.getMonth() == 11) {
            this.ExpireDate.setFullYear(this.ExpireDate.getFullYear());
            this.ExpireDate.setMonth(0);
        }
        this.ExpireDate.setDate(this.ExpireDate.getDate() - 1);
        console.log("test");
        console.log(this.ExpireDate);
        this.getSubscriptions();
        this.getGroups();
        this.currentId = this.paymentService.currentId;
        this.GetClientById(this.currentId);
        this.getInformation();
        this.paymentForm = this.formbulider.group({
            SubscriptionExpires: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.ExpireDate),
            PaymentRegistered: [this.TodaysDate],
            ClientId: this.currentId,
            SubscriptionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            AdditionalInformation: [''],
            CashRegistered: [0],
        });
        this.contractForm = this.formbulider.group({
            EntryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.TodaysDate),
            ClientId: this.currentId,
            GroupId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    SectionAcceptPaymentComponent.prototype.ngOnDestroy = function () {
        this.clientService.getClients();
    };
    SectionAcceptPaymentComponent.prototype.passGroup = function (group) {
        this.pickedGroup = group;
    };
    SectionAcceptPaymentComponent.prototype.addInformation = function (additionalInfo) {
        var _this = this;
        this.createdInformation = {
            ClientId: this.currentId,
            display: true,
            Content: additionalInfo
        };
        this.informationService.addInformationToClient(this.createdInformation).subscribe(function () {
            _this.dataSaved = true;
        });
    };
    SectionAcceptPaymentComponent.prototype.hideInformation = function (informationId, information) {
        if (confirm("Czy chcesz usunąć uwagę?")) {
            information.display = false;
            this.informationService.updateInformation(informationId, information).subscribe(function () {
            });
        }
        this.getInformation();
        this.GetClientById(this.currentId);
    };
    SectionAcceptPaymentComponent.prototype.onFormSubmit = function () {
        this.dataSaved = false;
        var payment = this.paymentForm.value;
        if (payment['AdditionalInformation'] != null && payment['AdditionalInformation'].length > 1) {
            this.addInformation(payment['AdditionalInformation']);
        }
        this.CreatePayment(payment);
        this.paymentForm.reset();
    };
    SectionAcceptPaymentComponent.prototype.onContractFormSubmit = function () {
        this.dataSaved = false;
        var contract = this.contractForm.value;
        contract.paymentRequired = this.pickedGroup.contractRelatedGroup;
        this.CreateContract(contract);
    };
    SectionAcceptPaymentComponent.prototype.CreatePayment = function (payment) {
        var _this = this;
        this.paymentService.createPayment(payment).subscribe(function () {
            _this.dataSaved = true;
            _this.message = 'Pomyślnie przypisano nowy karnet klientowi.';
            _this.paymentForm.reset();
            _this.openSnackBar(_this.message, 'Ok!');
            _this.router.navigate(['clients']);
        });
    };
    SectionAcceptPaymentComponent.prototype.CreateContract = function (contract) {
        var _this = this;
        this.paymentService.createContract(contract).subscribe(function () {
            _this.dataSaved = true;
            _this.message = 'Klient został przypisany do grupy.';
            _this.contractForm.reset();
            _this.openSnackBar(_this.message, 'Ok!');
        });
    };
    SectionAcceptPaymentComponent.prototype.getSubscriptions = function () {
        var _this = this;
        this.subscriptionService.getSubscriptions().subscribe(function (subscriptionsData) {
            _this.subscriptions = subscriptionsData;
        });
    };
    SectionAcceptPaymentComponent.prototype.getGroups = function () {
        var _this = this;
        this.subscriptionService.getGroups().subscribe(function (data) {
            _this.groups = data;
        });
    };
    SectionAcceptPaymentComponent.prototype.GetClientById = function (clientId) {
        var _this = this;
        this.clientService.getClientById(clientId).subscribe(function (clientData) {
            _this.currentClient = clientData;
            _this.object = JSON.parse(_this.currentClient.toString());
        });
    };
    SectionAcceptPaymentComponent.prototype.ZerujPrzyjetoDoKasy = function () {
        this.paymentForm['CashRegistered'] = "";
    };
    SectionAcceptPaymentComponent.prototype.getInformation = function () {
        var _this = this;
        this.informationService.getInformationByClientId(this.currentId).subscribe(function (informationData) {
            _this.disclaimer = informationData;
            _this.message = 'Pomyślnie pobrano spis uwag.';
            console.log(informationData);
        });
    };
    SectionAcceptPaymentComponent.prototype.compensatePayment = function (payment, cashRequired) {
        // When clients compensate not completed payment two following things happen:
        // his not completed payment is now completed, cashRegistered doesn't change
        // and new payment is generated with cashRegistered equal to the difference which should've been registered in the first place
        //let paymentObject = JSON.parse(payment.toString());
        //console.log(paymentObject);
        var _this = this;
        this.compensatedPayment = {
            subscriptionExpires: null,
            cashRegistered: (cashRequired - payment.cashRegistered),
            paymentRegistered: this.today,
            clientId: payment.clientId,
            additionalInformation: "Nadpłata za nieopłacony karnet",
            subscriptionId: null,
            paymentCompleted: true
        };
        if (confirm("Czy potwierdzasz, że klient wyrównał płatność?")) {
            payment.paymentCompleted = true;
            this.paymentService.updatePayment(payment.id, payment).subscribe(function () {
                _this.message = "Status nieopłaconej płatności został zmieniony.";
            });
            this.paymentService.createPayment(this.compensatedPayment).subscribe(function () {
                _this.message = "Dodano płatność kompensującą niedopłatę.";
            });
        }
    };
    SectionAcceptPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-accept-payment',
            template: __webpack_require__(/*! ./section-accept-payment.component.html */ "./src/app/sections/section-accept-payment/section-accept-payment.component.html"),
            styles: [__webpack_require__(/*! ./section-accept-payment.component.css */ "./src/app/sections/section-accept-payment/section-accept-payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"],
            _client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
            _subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"],
            src_app_information_service__WEBPACK_IMPORTED_MODULE_9__["InformationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], SectionAcceptPaymentComponent);
    return SectionAcceptPaymentComponent;
}());



/***/ }),

/***/ "./src/app/sections/section-add-client/section-add-client.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/sections/section-add-client/section-add-client.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin: 20px; \r\n}\r\nth {\r\n  border-radius: 5px;\r\n  border: none;\r\n}\r\nform{\r\n  margin-top:30px; \r\n}\r\ntable {\r\n  margin-top: 50px;\r\n  border-radius: 5px;\r\n}\r\n.submit-button {\r\n  margin-left: 10px;\r\n}\r\n.mat-form-field {\r\n  padding: 10px;\r\n  color: white;\r\n}\r\nh5 {\r\n  margin-left: 15px;\r\n  margin-bottom: 0px;\r\n  margin-top: 10px;\r\n  color:papayawhip;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi1hZGQtY2xpZW50L3NlY3Rpb24tYWRkLWNsaWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb24tYWRkLWNsaWVudC9zZWN0aW9uLWFkZC1jbGllbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMjBweDsgXHJcbn1cclxudGgge1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuZm9ybXtcclxuICBtYXJnaW4tdG9wOjMwcHg7IFxyXG59XHJcbnRhYmxlIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmg1IHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBjb2xvcjpwYXBheWF3aGlwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sections/section-add-client/section-add-client.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/sections/section-add-client/section-add-client.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-container\">\r\n\r\n  <h4>\r\n    <i class=\"material-icons\">add_circle_outline</i> NOWY KLIENT  \r\n  </h4>\r\n  <hr />\r\n\r\n  <form class=\"form shadow\" [formGroup]=\"clientForm\" (ngSubmit)=\"onFormSubmit()\">\r\n\r\n    <h5>WPROWADŹ DANE OSOBOWE</h5>\r\n\r\n\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"Name\" matInput type=\"text\">\r\n      <mat-placeholder class=\"placeholder\">Imię</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"Surname\" matInput type=\"text\">\r\n      <mat-placeholder class=\"placeholder\">Nazwisko</mat-placeholder>\r\n    </mat-form-field>\r\n    <br />\r\n    <mat-form-field>\r\n      <input formControlName=\"Phone\" matInput type=\"number\">\r\n      <mat-placeholder class=\"placeholder\">Telefon</mat-placeholder>\r\n\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"Email\" matInput type=\"text\">\r\n      <mat-placeholder class=\"placeholder\">Adres email</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Karta założona w dniu\"\r\n             autocomplete=\"off\"\r\n             name=\"date\" formControlName=\"ClientJoined\">\r\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n      <mat-datepicker [startAt]=\"dateToday\" #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"CardId\" matInput type=\"number\"  pattern=\"[0-9]*\">\r\n      <mat-placeholder class=\"placeholder\">ID karty</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <button class=\"submit-button shadow\" type=\"submit\">DODAJ KLIENTA</button>\r\n  </form>\r\n\r\n\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/section-add-client/section-add-client.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/section-add-client/section-add-client.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SectionAddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAddClientComponent", function() { return SectionAddClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/client.service */ "./src/app/client.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");







var SectionAddClientComponent = /** @class */ (function () {
    function SectionAddClientComponent(httpService, formbulider, clientService, router, snackBar) {
        this.httpService = httpService;
        this.formbulider = formbulider;
        this.clientService = clientService;
        this.router = router;
        this.snackBar = snackBar;
        this.dateToday = new Date((new Date().getTime()));
        this.dataSaved = false;
        this.clientIdUpdate = null;
        this.message = null;
        this.errorMessage = '';
        this.snackbarClass = '';
    }
    SectionAddClientComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(this.message, action, {
            duration: 4000,
            panelClass: [this.snackbarClass]
        });
    };
    SectionAddClientComponent.prototype.getClients = function () {
        var _this = this;
        this.httpService.get('http://localhost:8080/api/clients').subscribe(function (data) {
            _this.clients = data;
        });
    };
    SectionAddClientComponent.prototype.ngOnInit = function () {
        this.getClients();
        this.clientForm = this.formbulider.group({
            CardId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Surname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Phone: [''],
            Email: [''],
            ClientJoined: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.dateToday),
        });
    };
    SectionAddClientComponent.prototype.ngOnDestroy = function () {
        this.clientService.getClients();
    };
    SectionAddClientComponent.prototype.onFormSubmit = function () {
        this.dataSaved = false;
        var client = this.clientForm.value;
        this.CreateClient(client);
    };
    SectionAddClientComponent.prototype.CreateClient = function (client) {
        var _this = this;
        if (this.clientIdUpdate == null) {
            this.clientService.createClient(client).subscribe(function () {
                _this.dataSaved = true;
                _this.message = 'Klient został pomyślnie dodany. Nadaj mu karnet, w panelu klienci.';
                _this.clientIdUpdate = null;
                _this.getClients();
                _this.snackbarClass = 'snackbar';
                _this.openSnackBar(_this.message, 'Ok!');
                _this.router.navigate(['clients']);
            }, function (error) {
                _this.errorMessage = error.message;
                _this.message = 'Nie można dodać klienta o tym Id, ponieważ istnieje ono już w bazie.';
                _this.snackbarClass = 'snackbar-failed';
                _this.openSnackBar(_this.message, 'Ok!');
            });
        }
    };
    SectionAddClientComponent.prototype.resetForm = function () {
        this.clientForm.reset();
        this.message = null;
        this.dataSaved = false;
    };
    SectionAddClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-add-client',
            template: __webpack_require__(/*! ./section-add-client.component.html */ "./src/app/sections/section-add-client/section-add-client.component.html"),
            styles: [__webpack_require__(/*! ./section-add-client.component.css */ "./src/app/sections/section-add-client/section-add-client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], SectionAddClientComponent);
    return SectionAddClientComponent;
}());



/***/ }),

/***/ "./src/app/sections/section-add-subscription/section-add-subscription.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/sections/section-add-subscription/section-add-subscription.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#subscription-form\r\n{\r\n  padding: 20px;\r\n  margin-top: 80px;\r\n  margin-bottom: 40px;\r\n}\r\n.mat-form-field{\r\n  padding:10px;\r\n  color:white;\r\n}\r\n.subscriptions-table\r\n{\r\n  margin-top:20px;\r\n  width:90%;\r\n}\r\nh4 {\r\n  margin-bottom: 30px;\r\n\r\n}\r\nth{\r\n  border-radius:5px;\r\n  border:none;\r\n}\r\ntable{\r\n  \r\n  margin-top:70px;\r\n  border-radius:5px;\r\n}\r\n.submit-button{\r\n margin-left:20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi1hZGQtc3Vic2NyaXB0aW9uL3NlY3Rpb24tYWRkLXN1YnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUNBOztFQUVFLGVBQWU7RUFDZixTQUFTO0FBQ1g7QUFDQTtFQUNFLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9zZWN0aW9uLWFkZC1zdWJzY3JpcHRpb24vc2VjdGlvbi1hZGQtc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3N1YnNjcmlwdGlvbi1mb3JtXHJcbntcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxufVxyXG4ubWF0LWZvcm0tZmllbGR7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcbi5zdWJzY3JpcHRpb25zLXRhYmxlXHJcbntcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgd2lkdGg6OTAlO1xyXG59XHJcbmg0IHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxufVxyXG50aHtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxuICBib3JkZXI6bm9uZTtcclxufVxyXG50YWJsZXtcclxuICBcclxuICBtYXJnaW4tdG9wOjcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbn1cclxuLnN1Ym1pdC1idXR0b257XHJcbiBtYXJnaW4tbGVmdDoyMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sections/section-add-subscription/section-add-subscription.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/sections/section-add-subscription/section-add-subscription.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-container\">\r\n\r\n\r\n\r\n  <h4>\r\n    <i class=\"material-icons\">add_box</i> DODAJ NOWY KARNET\r\n  </h4>\r\n  <hr />\r\n  <form class=\"subscription-form form shadow\" [formGroup]=\"subscriptionForm\" (ngSubmit)=\"onFormSubmit()\">\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"Name\" matInput type=\"text\">\r\n      <mat-placeholder class=\"placeholder\">Nazwa karnetu</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"Price\" matInput type=\"text\">\r\n      <mat-placeholder class=\"placeholder\">Cena</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"GymEntries\" matInput type=\"number\">\r\n\r\n      <mat-placeholder class=\"placeholder\">Wejść na siłownię</mat-placeholder>\r\n\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"MartialArtsEntries\" matInput type=\"number\">\r\n      <mat-placeholder class=\"placeholder\">Wejść na sporty walki</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <button class=\"submit-button shadow\" type=\"submit\">DODAJ</button>\r\n  </form>\r\n\r\n\r\n  <h4 style=\"margin-top:30px;\">\r\n    <i class=\"material-icons\">add_box</i> DODAJ NOWĄ GRUPĘ\r\n  </h4>\r\n  <hr />\r\n  <form class=\"subscription-form form shadow\" [formGroup]=\"groupForm\" (ngSubmit)=\"onGroupFormSubmit()\">\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"Name\" matInput type=\"text\">\r\n      <mat-placeholder class=\"placeholder\">Nazwa grupy</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n\r\n\r\n    <mat-form-field style=\"width:400px;\">\r\n\r\n      <mat-placeholder class=\"placeholder\">Czy od członków grupy, wymagać comiesięcznych płatności?</mat-placeholder>\r\n      <mat-select formControlName=\"ContractRelatedGroup\" placeholder=\"\">\r\n\r\n        <mat-option [value]=\"true\">Tak</mat-option>\r\n        <mat-option [value]=\"false\">Nie</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n    <button class=\"submit-button shadow\" type=\"submit\">DODAJ</button>\r\n  </form>\r\n\r\n  <table class=\" shadow table table-inverse table-hover\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n\r\n        <th>Nazwa</th>\r\n        <th>Cena</th>\r\n        <th>GYM</th>\r\n        <th>SW</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let subscription of subscriptionsData\">\r\n\r\n        <td>{{subscription.name}}</td>\r\n        <td>{{subscription.price}} zł</td>\r\n        <td>\r\n          <span *ngIf=\"subscription.gymEntries < 999\">{{subscription.gymEntries}}</span>\r\n          <span style=\"font-size:26px;\" *ngIf=\"subscription.gymEntries >= 999\">&infin;</span>\r\n        </td>\r\n        <td>\r\n          <span *ngIf=\"subscription.martialArtsEntries < 999\">{{subscription.martialArtsEntries}}</span>\r\n          <span style=\"font-size:26px;\" *ngIf=\"subscription.martialArtsEntries >= 999\">&infin;</span>\r\n        </td>\r\n\r\n\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <table class=\"shadow table table-inverse table-hover\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n\r\n        <th>Nazwa grupy</th> \r\n        <th>Grupa dla umów</th>\r\n\r\n\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let group of groupsData\">\r\n\r\n        <td>{{group.name}}</td>\r\n        \r\n        <td *ngIf=\"group.contractRelatedGroup == true\">Tak</td>\r\n        <td *ngIf=\"group.contractRelatedGroup == false\">Tak</td>\r\n\r\n\r\n      \r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sections/section-add-subscription/section-add-subscription.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/sections/section-add-subscription/section-add-subscription.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: SectionAddSubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAddSubscriptionComponent", function() { return SectionAddSubscriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../subscription.service */ "./src/app/subscription.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var SectionAddSubscriptionComponent = /** @class */ (function () {
    function SectionAddSubscriptionComponent(httpService, formbulider, subscriptionService, snackBar) {
        this.httpService = httpService;
        this.formbulider = formbulider;
        this.subscriptionService = subscriptionService;
        this.snackBar = snackBar;
        this.dataSaved = false;
        this.message = null;
    }
    SectionAddSubscriptionComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(this.message, action, {
            duration: 4000,
            panelClass: ['snackbar']
        });
    };
    SectionAddSubscriptionComponent.prototype.getSubscriptions = function () {
        var _this = this;
        this.subscriptionService.getSubscriptions().subscribe(function (data) {
            _this.subscriptionsData = data;
            _this.message = 'Pomyślnie pobrano spis karnetów.';
        });
    };
    SectionAddSubscriptionComponent.prototype.getGroups = function () {
        var _this = this;
        this.subscriptionService.getGroups().subscribe(function (data) {
            _this.groupsData = data;
            _this.message = 'Pomyślnie pobrano spis karnetów.';
        });
    };
    SectionAddSubscriptionComponent.prototype.ngOnInit = function () {
        this.getSubscriptions();
        this.getGroups();
        this.subscriptionForm = this.formbulider.group({
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            GymEntries: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            MartialArtsEntries: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.groupForm = this.formbulider.group({
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Abreviation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ContractRelatedGroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    };
    SectionAddSubscriptionComponent.prototype.onFormSubmit = function () {
        this.dataSaved = false;
        var subscription = this.subscriptionForm.value;
        this.CreateSubscription(subscription);
        this.subscriptionForm.reset();
        this.getSubscriptions();
    };
    SectionAddSubscriptionComponent.prototype.onGroupFormSubmit = function () {
        this.dataSaved = false;
        var group = this.groupForm.value;
        this.CreateGroup(group);
        this.groupForm.reset();
        this.getGroups();
    };
    SectionAddSubscriptionComponent.prototype.CreateSubscription = function (subscription) {
        var _this = this;
        this.subscriptionService.createSubscription(subscription).subscribe(function () {
            _this.dataSaved = true;
            _this.message = 'Pomyślnie utworzono nowy karnet.';
            _this.subscriptionForm.reset();
            _this.openSnackBar(_this.message, 'Ok!');
        });
    };
    SectionAddSubscriptionComponent.prototype.CreateGroup = function (group) {
        var _this = this;
        this.subscriptionService.createGroup(group).subscribe(function () {
            _this.dataSaved = true;
            _this.message = 'Pomyślnie utworzono nowy karnet.';
            _this.subscriptionForm.reset();
            _this.openSnackBar(_this.message, 'Ok!');
        });
    };
    SectionAddSubscriptionComponent.prototype.resetForm = function () {
        this.subscriptionForm.reset();
        this.message = null;
        this.dataSaved = false;
    };
    SectionAddSubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-add-subscription',
            template: __webpack_require__(/*! ./section-add-subscription.component.html */ "./src/app/sections/section-add-subscription/section-add-subscription.component.html"),
            styles: [__webpack_require__(/*! ./section-add-subscription.component.css */ "./src/app/sections/section-add-subscription/section-add-subscription.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _subscription_service__WEBPACK_IMPORTED_MODULE_3__["SubscriptionService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], SectionAddSubscriptionComponent);
    return SectionAddSubscriptionComponent;
}());



/***/ }),

/***/ "./src/app/sections/section-add-training-entry/section-add-training-entry.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/sections/section-add-training-entry/section-add-training-entry.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form\r\n{\r\n  margin-top:30px;\r\n  width:420px;\r\n  margin-left:15px;\r\n  padding-bottom:30px;\r\n}\r\nmat-form-field{\r\n  padding:5px;\r\n  margin-left:10px;\r\n \r\n}\r\n#client-info {\r\n  background-color: #222a31;\r\n  width: 420px;\r\n  padding:12px;\r\n  margin-top:30px;\r\n  margin-left:15px;\r\n  border-radius:5px;\r\n  border-bottom: 1px solid darkgoldenrod;\r\n  padding-right:20px;\r\n}\r\n#client-info h4{\r\n  color:papayawhip;\r\n}\r\np{\r\n  font-size:18px;\r\n}\r\n#subscription-info{\r\n  background-color:#4e0f0f;\r\n  text-align:center;\r\n  text-transform:uppercase;\r\n  border-radius:2px;\r\n  color:#d9d9d9;\r\n}\r\nmat-checkbox{\r\n  margin-left:10px;\r\n}\r\nh4 {\r\n  margin-left: 15px;\r\n  margin-bottom: 0px;\r\n  margin-top: 10px;\r\n  color: papayawhip;\r\n}\r\n.disclaimer-button\r\n{\r\n  text-align:center;\r\n  color:#a6a6a6;\r\n}\r\n.disclaimer-button:hover\r\n  {\r\n    background-color:#2f3031;\r\n    cursor:pointer;\r\n   }\r\nh6 {\r\n    margin-left: 15px;\r\n    margin-bottom: 0px;\r\n    margin-top: 10px;\r\n    padding: 5px;\r\n    color: #fff;\r\n    border-radius: 3px;\r\n    background-color: #1d2124\r\n  }\r\n#checkbox{\r\n  margin-right:30px;\r\n}\r\n.warning{\r\n  background-color:#c64646;\r\n  border-radius:3px;\r\n  color:black;\r\n  padding:2px;\r\n  text-align:center;\r\n}\r\n.warning:hover {\r\n    background-color: #cf7f7f;\r\n}\r\n.disclaimer {\r\n  background-color: #52add7;\r\n  border-radius: 3px;\r\n  color: black;\r\n  padding: 2px;\r\n  text-align: center;\r\n}\r\n.disclaimer:hover {\r\n    background-color: #88c1db;\r\n  }\r\np{\r\n    margin-left:20px;\r\n  }\r\n/*Jumbotron colors*/\r\n.almost-outdated {\r\n  background-color: #ffb90e;\r\n  color: #222a31;\r\n}\r\n.outdated {\r\n  background-color: #d41c1c;\r\n  color: #222a31;\r\n}\r\n.active {\r\n  background-color: #46b232;\r\n  color: #222a31;\r\n}\r\n.null {\r\n  background-color: #587563;\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi1hZGQtdHJhaW5pbmctZW50cnkvc2VjdGlvbi1hZGQtdHJhaW5pbmctZW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7O0FBRWxCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixzQ0FBc0M7RUFDdEMsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUNFOztJQUVFLHdCQUF3QjtJQUN4QixjQUFjO0dBQ2Y7QUFDRDtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCO0VBQ0Y7QUFDRjtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUU7SUFDRSx5QkFBeUI7RUFDM0I7QUFHQTtJQUNFLGdCQUFnQjtFQUNsQjtBQUdGLG1CQUFtQjtBQUVuQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9ucy9zZWN0aW9uLWFkZC10cmFpbmluZy1lbnRyeS9zZWN0aW9uLWFkZC10cmFpbmluZy1lbnRyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1cclxue1xyXG4gIG1hcmdpbi10b3A6MzBweDtcclxuICB3aWR0aDo0MjBweDtcclxuICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjMwcHg7XHJcbn1cclxubWF0LWZvcm0tZmllbGR7XHJcbiAgcGFkZGluZzo1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6MTBweDtcclxuIFxyXG59XHJcbiNjbGllbnQtaW5mbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMmEzMTtcclxuICB3aWR0aDogNDIwcHg7XHJcbiAgcGFkZGluZzoxMnB4O1xyXG4gIG1hcmdpbi10b3A6MzBweDtcclxuICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ29sZGVucm9kO1xyXG4gIHBhZGRpbmctcmlnaHQ6MjBweDtcclxufVxyXG4jY2xpZW50LWluZm8gaDR7XHJcbiAgY29sb3I6cGFwYXlhd2hpcDtcclxufVxyXG5we1xyXG4gIGZvbnQtc2l6ZToxOHB4O1xyXG59XHJcbiNzdWJzY3JpcHRpb24taW5mb3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiM0ZTBmMGY7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6MnB4O1xyXG4gIGNvbG9yOiNkOWQ5ZDk7XHJcbn1cclxubWF0LWNoZWNrYm94e1xyXG4gIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuaDQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiBwYXBheWF3aGlwO1xyXG59XHJcbi5kaXNjbGFpbWVyLWJ1dHRvblxyXG57XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6I2E2YTZhNjtcclxufVxyXG4gIC5kaXNjbGFpbWVyLWJ1dHRvbjpob3ZlclxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzJmMzAzMTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICB9XHJcbiAgaDYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQyMTI0XHJcbiAgfVxyXG4jY2hlY2tib3h7XHJcbiAgbWFyZ2luLXJpZ2h0OjMwcHg7XHJcbn1cclxuXHJcbi53YXJuaW5ne1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2M2NDY0NjtcclxuICBib3JkZXItcmFkaXVzOjNweDtcclxuICBjb2xvcjpibGFjaztcclxuICBwYWRkaW5nOjJweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4ud2FybmluZzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2Y3ZjdmO1xyXG59XHJcbi5kaXNjbGFpbWVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJhZGQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICAuZGlzY2xhaW1lcjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODhjMWRiO1xyXG4gIH1cclxuXHJcblxyXG4gIHB7XHJcbiAgICBtYXJnaW4tbGVmdDoyMHB4O1xyXG4gIH1cclxuXHJcblxyXG4vKkp1bWJvdHJvbiBjb2xvcnMqL1xyXG4gXHJcbi5hbG1vc3Qtb3V0ZGF0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmI5MGU7XHJcbiAgY29sb3I6ICMyMjJhMzE7XHJcbn1cclxuLm91dGRhdGVkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDQxYzFjO1xyXG4gIGNvbG9yOiAjMjIyYTMxO1xyXG59XHJcbi5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NmIyMzI7XHJcbiAgY29sb3I6ICMyMjJhMzE7XHJcbn1cclxuLm51bGwge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ODc1NjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sections/section-add-training-entry/section-add-training-entry.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/sections/section-add-training-entry/section-add-training-entry.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-container\">\r\n\r\n  <h4>\r\n    <i class=\"material-icons\">input</i> WEJŚCIE NA TRENING\r\n  </h4>\r\n\r\n  <hr />\r\n\r\n  \r\n  <div class=\"jumbotron shadow\" [ngClass]=\"{'outdated': object.SubscriptionExpired == 0 , 'active': object.SubscriptionExpired == 1, 'null': object.subscription == null, 'almost-outdated': object.SubscriptionExpired == 2 }\">\r\n\r\n    <h1 *ngIf=\"object.SubscriptionExpired == 1 && object.subscription != null\">KARNET WAŻNY - UDANEGO TRENINGU ! </h1>\r\n    <h1 *ngIf=\"object.SubscriptionExpired == 2 && object.subscription != null\">{{cardMessage}}</h1>\r\n    <h1 *ngIf=\"object.SubscriptionExpired == 0 && object.subscription != null\">\r\n      KARNET NIEWAŻNY   {{cardMessage}}\r\n\r\n\r\n\r\n    </h1>\r\n\r\n    <h1 *ngIf=\"object.subscription == null\">JEDNORAZOWE WEJŚCIE - UDANEGO TRENINGU ! </h1>\r\n\r\n \r\n    <div *ngFor=\"let contract of object.contracts\">\r\n      <h1 *ngIf=\"object.subscriptionExpires <= TodaysDate && object.subscriptionExpires <= todayIso &&  contract.isDeleted != true && contract.paymentRequired == true && object.subscription != null\">(ZALEGŁOŚĆ {{contract.group.name}})</h1>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div>\r\n\r\n      <form class=\"form shadow \" [formGroup]=\"addTrainingEntryForm\" (ngSubmit)=\"onFormSubmit()\">\r\n\r\n        <h4> <i class=\"material-icons\">  forward </i> DODAJ WEJŚCIE</h4>\r\n\r\n        <mat-form-field id=\"TrainingInput\">\r\n          <mat-select formControlName=\"TrainingId\" placeholder=\"Trening\">\r\n            <ng-container *ngFor=\"let row of trainings\">\r\n              <mat-option *ngIf=\"row.day == dayName\" [value]=\"row.training.id\">\r\n\r\n\r\n                {{row.training.name}}  <span style=\"color:gray;\">{{row.hourStarts | slice:0:5}} </span>\r\n\r\n              </mat-option>\r\n            </ng-container>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n          <input formControlName=\"Locker\" matInput type=\"number\">\r\n          <mat-placeholder class=\"placeholder\">Przydzielony schowek </mat-placeholder>\r\n        </mat-form-field>\r\n\r\n        <button class=\"submit-button shadow\" type=\"submit\">PRZYJMIJ</button>\r\n\r\n        <h5 style=\"margin-left:10px; margin-bottom:5px;padding-bottom:20px; padding-top:10px; border-top:2px dashed gray;\">WEJŚCIA NIESTANDARDOWE</h5>\r\n\r\n        <mat-checkbox formControlName=\"FreeEntry\" [checked]=\"unusualEntry==true || benefitEntry == true\" [disabled]=\"unusualEntry==true || benefitEntry == true\" id=\"checkbox\">GRATIS</mat-checkbox>\r\n        <mat-checkbox style=\"margin-left:-10px;\" (change)=\"setUnusualEntry()\" [disabled]=\"benefitEntry == true\">BEZ KARNETU (Płatne)</mat-checkbox>\r\n        <mat-checkbox (change)=\"setBenefitEntry()\" [disabled]=\"unusualEntry == true\">BENEFIT</mat-checkbox>\r\n\r\n        <br />\r\n        <mat-form-field *ngIf=\"unusualEntry == true\">\r\n          <input formControlName=\"TrainingPayment\" matInput type=\"number\">\r\n          <mat-placeholder class=\"placeholder\">Przyjęto do kasy  </mat-placeholder>\r\n        </mat-form-field>\r\n        <br />\r\n        <mat-form-field *ngIf=\"unusualEntry == true\">\r\n          <input formControlName=\"AdditionalInfo\" matInput type=\"text\">\r\n          <mat-placeholder class=\"placeholder\">Uwagi  </mat-placeholder>\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-form-field *ngIf=\"benefitEntry == true\">\r\n          <mat-select formControlName=\"OtherEntryType\" placeholder=\"Wejście benefit\">\r\n            <mat-option *ngFor=\"let item of benefits\" [value]=\"item\">\r\n              {{item}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n        <br />\r\n\r\n      </form>\r\n    </div>\r\n\r\n    <div id=\"client-info\" class=\"shadow\">\r\n\r\n      <h4 style=\"margin-bottom:10px;\"> <i class=\"material-icons\">perm_identity</i> INFORMACJE O KLIENCIE  </h4>\r\n      <h6 class=\"shadow disclaimer-button\" (click)=\"addInformation()\"><i style=\"font:8px;\" class=\"material-icons\">bookmarks</i>DOPISZ UWAGĘ DOT. KLIENTA</h6>\r\n\r\n      <div style=\"margin-top:20px;\" *ngFor=\"let payment of object.payments\" (click)=\"compensatePayment(payment, payment.subscription.price)\">\r\n        <p matTooltip=\"Kliknij, aby wyrównać płatność.\" class=\"warning shadow\" *ngIf=\"payment.paymentCompleted != true\"> Niedopłata w dniu {{payment.paymentRegistered | date:'d/MM/yyyy'}}: przyjęto {{payment.cashRegistered }} zł za  {{payment.subscription.name}} <span style=\"color:#ced1e6;\">[{{payment.subscription.price}} zł]</span></p>\r\n      </div>\r\n\r\n      <div style=\"margin-top:20px;\" *ngFor=\"let information of disclaimer\" (click)=\"hideInformation(information.id, information)\">\r\n        <p matTooltip=\"Kliknij, aby usunąć uwagę.\" class=\"disclaimer shadow\" *ngIf=\"information.display == true\">  {{information.content}} </p>\r\n      </div>\r\n\r\n\r\n\r\n      <p *ngIf=\"object.gymEntriesLeft==0 && object.martialArtsEntriesLeft==0 && object.subscriptionExpires < today\" class=\"shadow\" id=\"subscription-info\">Karnet wygasł</p>\r\n\r\n\r\n      <h4 style=\"margin-top:20px; margin-bottom:10px;\"><i class=\"material-icons\"> card_membership</i> NUMER KARTY KLIENTA: <span style=\" color:#ffffff; font-weight:bold;\">{{object.cardId}}</span></h4>\r\n      <p style=\"margin-top:20px;\">Imię i nazwisko: <span style=\"color:gray;\">{{object.name}} {{object.surname}}</span></p>\r\n\r\n      <p>\r\n        Karnet:  <span style=\"color:gray;\" *ngIf=\"object.subscription!=null\">\r\n          {{object.subscription.name }}\r\n        </span> - ważny do:<span style=\"color:gray;\" *ngIf=\"object.subscription!=null\"> {{object.subscriptionExpires | date:'d/MM/yyyy'}}</span>\r\n      </p>\r\n      <div style=\"margin-left:20px;\">\r\n        Pozostało wejść: na siłownię <span style=\"color:gray;\" *ngIf=\"object.subscription!=null\">\r\n\r\n          <span *ngIf=\"object.gymEntriesLeft < 999\">{{object.gymEntriesLeft}}</span>\r\n          <span *ngIf=\"object.gymEntriesLeft >= 999\">&infin;</span>\r\n        </span> , na sporty walki <span style=\"color:gray;\" *ngIf=\"object.subscription!=null\">\r\n\r\n          <span *ngIf=\"object.martialArtsEntriesLeft < 999\">{{object.martialArtsEntriesLeft}}</span>\r\n          <span *ngIf=\"object.martialArtsEntriesLeft >= 999\">&infin;</span>\r\n\r\n        </span>\r\n      </div>\r\n\r\n      <div style=\"margin-top:10px; padding:20px;\">\r\n        <span *ngIf=\"object.contracts.length > 0\">GRUPY:</span>\r\n\r\n        <div style=\"text-transform:uppercase;\" *ngFor=\"let contract of object.contracts\">\r\n\r\n\r\n          <span *ngIf=\"contract.isDeleted != true\" style=\"float:left; margin: 2px; color:#fff; background-color:#87681c; border-radius:3px; padding:5px; margin:3px;\" (click)=\"deleteContract(contract.id)\">  {{contract.group.name}}  </span>\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/section-add-training-entry/section-add-training-entry.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/sections/section-add-training-entry/section-add-training-entry.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: SectionAddTrainingEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionAddTrainingEntryComponent", function() { return SectionAddTrainingEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../payment.service */ "./src/app/payment.service.ts");
/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../subscription.service */ "./src/app/subscription.service.ts");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../client.service */ "./src/app/client.service.ts");
/* harmony import */ var _information_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../information.service */ "./src/app/information.service.ts");
/* harmony import */ var _TrainingEntry_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../TrainingEntry.service */ "./src/app/TrainingEntry.service.ts");
/* harmony import */ var _Training_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Training.service */ "./src/app/Training.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");













var SectionAddTrainingEntryComponent = /** @class */ (function () {
    function SectionAddTrainingEntryComponent(httpService, formbulider, paymentService, trainingService, trainingentryService, clientService, informationService, subscriptionService, router, snackBar, sidebarComponent) {
        this.httpService = httpService;
        this.formbulider = formbulider;
        this.paymentService = paymentService;
        this.trainingService = trainingService;
        this.trainingentryService = trainingentryService;
        this.clientService = clientService;
        this.informationService = informationService;
        this.subscriptionService = subscriptionService;
        this.router = router;
        this.snackBar = snackBar;
        this.sidebarComponent = sidebarComponent;
        this.today = new Date((new Date()));
        this.todayIso = new Date().toISOString();
        this.dataSaved = false;
        this.message = null;
        this.cardMessage = "";
        this.object = null;
        this.trainings = [];
        this.disclaimer = [];
        this.currentClient = null; // current client object
        this.oneTimePayment = null; // payment in case of one time entry
        this.compensatedPayment = null; // payment in case of one time entry
        // compensate payment
        this.unusualEntry = null; // boolean determining wheter entry is not realted with subscription - singular
        this.benefitEntry = null; // boolean determining wheter entry is realted with one of benefits system
        this.benefits = ['Karta Multisport', 'OK System']; // just an array with two choice benefits
        this.TodaysDate = new Date((new Date().getTime() + 3600000)); // todays date 
        this.createdInformation = null;
    }
    SectionAddTrainingEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.today = new Date(this.today.setHours(this.today.getHours() + 1));
        var dayNumber = this.TodaysDate.getDay();
        switch (dayNumber) {
            case 0:
                this.dayName = "Niedziela";
                break;
            case 1:
                this.dayName = "Poniedziałek";
                break;
            case 2:
                this.dayName = "Wtorek";
                break;
            case 3:
                this.dayName = "Środa";
                break;
            case 4:
                this.dayName = "Czwartek";
                break;
            case 5:
                this.dayName = "Piątek";
                break;
            case 6:
                this.dayName = "Sobota";
                break;
        }
        this.getTrainings();
        this.trainings = this.trainings.filter(function (training) { return training.Day == _this.dayName; });
        // so they can be listed as a select list
        this.currentId = this.trainingService.currentId; // id and client values passed from client section
        this.GetClientById(this.currentId);
        this.getInformation();
        this.addTrainingEntryForm = this.formbulider.group({
            ClientId: this.currentId,
            TrainingId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            Locker: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            FreeEntry: [''],
            EntryRegistered: [this.TodaysDate],
            TrainingPayment: [''],
            AdditionalInfo: [''],
            OtherEntryType: [''],
        });
    };
    SectionAddTrainingEntryComponent.prototype.hideInformation = function (informationId, information) {
        if (confirm("Czy chcesz usunąć uwagę?")) {
            information.display = false;
            this.informationService.updateInformation(informationId, information).subscribe(function () {
            });
        }
        this.getInformation();
        this.GetClientById(this.currentId);
    };
    SectionAddTrainingEntryComponent.prototype.compensatePayment = function (payment, cashRequired) {
        // When clients compensate not completed payment two following things happen:
        // his not completed payment is now completed, cashRegistered doesn't change
        // and new payment is generated with cashRegistered equal to the difference which should've been registered in the first place
        //let paymentObject = JSON.parse(payment.toString());
        //console.log(paymentObject);
        var _this = this;
        this.compensatedPayment = {
            subscriptionExpires: null,
            cashRegistered: (cashRequired - payment.cashRegistered),
            paymentRegistered: this.today,
            clientId: payment.clientId,
            additionalInformation: "Nadpłata za nieopłacony karnet",
            subscriptionId: null,
            paymentCompleted: true
        };
        if (confirm("Czy potwierdzasz, że klient wyrównał płatność?")) {
            payment.paymentCompleted = true;
            this.paymentService.updatePayment(payment.id, payment).subscribe(function () {
                _this.message = "Status nieopłaconej płatności został zmieniony.";
            });
            this.paymentService.createPayment(this.compensatedPayment).subscribe(function () {
                _this.message = "Dodano płatność kompensującą niedopłatę.";
            });
        }
    };
    SectionAddTrainingEntryComponent.prototype.AddTrainingEntry = function (trainingEntry) {
        // when client pays for individual entry we have to register payment
        var _this = this;
        if (this.unusualEntry == true) {
            this.oneTimePayment = {
                subscriptionExpires: null,
                cashRegistered: this.addTrainingEntryForm.get('TrainingPayment').value,
                paymentRegistered: this.today,
                clientId: this.currentId,
                additionalInformation: "Wejscie pojedyncze - trening" + this.addTrainingEntryForm.get('TrainingId').value,
                subscriptionId: null,
                paymentCompleted: true
            };
            this.paymentService.createPayment(this.oneTimePayment).subscribe(function () {
            });
        }
        if (this.unusualEntry == true) {
            trainingEntry.otherEntryType = "Wejście pojedyncze";
            trainingEntry.freeEntry = true;
        }
        if (this.benefitEntry == true) {
            trainingEntry.freeEntry = true;
        }
        this.trainingentryService.addTrainingEntry(trainingEntry).subscribe(function () {
            _this.message = 'Pomyślnie dodano wejście na trening.';
            _this.addTrainingEntryForm.reset();
            _this.openSnackBar(_this.message, 'Ok!');
            _this.router.navigate(['clients']);
        });
    };
    SectionAddTrainingEntryComponent.prototype.deleteContract = function (id) {
        if (confirm("Czy jesteś pewien, że chcesz usunąć tego użytkownika z grupy?")) {
            this.paymentService.deleteContract(id).subscribe(function () {
            });
        }
        this.GetClientById(this.currentId);
    };
    SectionAddTrainingEntryComponent.prototype.addInformation = function (additionalInfo) {
        var _this = this;
        if (additionalInfo == null) {
            var Uwaga = prompt("Treść uwagi wyświetlanej przy każdorazym wejściu na trening");
        }
        if (additionalInfo != null) {
            var Uwaga = additionalInfo;
        }
        this.disclaimer = [];
        if (Uwaga != null) {
            this.createdInformation = {
                ClientId: this.currentId,
                display: true,
                Content: Uwaga
            };
            this.informationService.addInformationToClient(this.createdInformation).subscribe(function () {
                _this.dataSaved = true;
            });
            this.getInformation();
        }
    };
    SectionAddTrainingEntryComponent.prototype.getTrainings = function () {
        var _this = this;
        this.trainingService.getTrainingsSchedule().subscribe(function (trainingsData) {
            _this.trainings = trainingsData;
        });
    };
    SectionAddTrainingEntryComponent.prototype.getInformation = function () {
        var _this = this;
        this.informationService.getInformationByClientId(this.currentId).subscribe(function (informationData) {
            _this.disclaimer = informationData;
            _this.message = 'Pomyślnie pobrano spis uwag.';
        });
    };
    SectionAddTrainingEntryComponent.prototype.resetForm = function () {
        this.addTrainingEntryForm.reset();
        this.message = null;
        this.dataSaved = false;
    };
    SectionAddTrainingEntryComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(this.message, action, {
            duration: 4000,
            panelClass: ['snackbar']
        });
    };
    SectionAddTrainingEntryComponent.prototype.setUnusualEntry = function () {
        this.unusualEntry = !this.unusualEntry;
    };
    SectionAddTrainingEntryComponent.prototype.setBenefitEntry = function () {
        this.benefitEntry = !this.benefitEntry;
    };
    SectionAddTrainingEntryComponent.prototype.onFormSubmit = function () {
        var trainingEntry = this.addTrainingEntryForm.value;
        this.AddTrainingEntry(trainingEntry);
        this.addTrainingEntryForm.reset();
    };
    SectionAddTrainingEntryComponent.prototype.GetClientById = function (clientId) {
        var _this = this;
        this.clientService.getClientById(clientId).subscribe(function (clientData) {
            _this.currentClient = clientData;
            // console.log(this.currentClient);
            _this.object = JSON.parse(_this.currentClient.toString());
            //this.currentClient.subscriptionExpires = new Date(this.currentClient['subscriptionExpires'])  // catching users subscription date and transforming so they can be comparable
            _this.object['subscriptionExpires'] = new Date(_this.object['subscriptionExpires']);
            // 0 - wygasla 1 - dziala 2 - zaraz wygasnie
            //this.currentClient.SubscriptionExpired = 1;
            _this.object['SubscriptionExpired'] = 1;
            // Jeżeli 
            if (_this.object['gymEntriesLeft'] == 0 && _this.object['martialArtsEntriesLeft'] == 0) {
                _this.object['SubscriptionExpired'] = 0;
                _this.cardMessage = " - WYKORZYSTANO WYKUPIONE WEJŚCIA";
            }
            else if (_this.object['subscriptionExpires'].getTime() - _this.today.getTime() <= 0) {
                _this.object['SubscriptionExpired'] = 0;
                _this.cardMessage = _this.cardMessage + " - UPŁYNĄŁ TERMIN WAŻNOŚCI ";
            }
            else if (Math.floor((_this.object['subscriptionExpires'].getTime() - _this.today.getTime()) / 86400000) < 7 && _this.object['subscriptionExpires'].getTime() - _this.today.getTime() > 0) {
                _this.object['SubscriptionExpired'] = 2;
                _this.cardMessage = "KARNET WAŻNY - ZBLIŻA SIĘ TERMIN WAŻNOŚCI, POZOSTAŁO " + Math.floor((_this.object['subscriptionExpires'].getTime() - _this.today.getTime()) / 86400000) + " DNI";
            }
        });
    };
    SectionAddTrainingEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            providers: [src_app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"]],
            selector: 'app-section-add-training-entry',
            template: __webpack_require__(/*! ./section-add-training-entry.component.html */ "./src/app/sections/section-add-training-entry/section-add-training-entry.component.html"),
            styles: [__webpack_require__(/*! ./section-add-training-entry.component.css */ "./src/app/sections/section-add-training-entry/section-add-training-entry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"],
            _Training_service__WEBPACK_IMPORTED_MODULE_10__["TrainingService"],
            _TrainingEntry_service__WEBPACK_IMPORTED_MODULE_9__["TrainingentryService"],
            _client_service__WEBPACK_IMPORTED_MODULE_7__["ClientService"],
            _information_service__WEBPACK_IMPORTED_MODULE_8__["InformationService"],
            _subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBar"], src_app_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"]])
    ], SectionAddTrainingEntryComponent);
    return SectionAddTrainingEntryComponent;
}());



/***/ }),

/***/ "./src/app/sections/section-clients/section-clients.component.css":
/*!************************************************************************!*\
  !*** ./src/app/sections/section-clients/section-clients.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n.material-icons {\r\n  font-size: 22px;\r\n \r\n  vertical-align: middle;\r\n}\r\n \r\n  th {\r\n    border: none;\r\n  }\r\n \r\n  table {\r\n  border-radius: 10px;\r\n  margin-top:50px;\r\n  margin-bottom:50px; \r\n}\r\n \r\n  .apply-button {\r\n  background-color: #cc5050;\r\n  padding: 5px 15px 5px 15px;\r\n  border: 0px;\r\n  margin: 30px 0 20px 5px;\r\n  border-radius: 5px;\r\n  transition-duration: 0.2s;\r\n  color: white;\r\n  outline: none;\r\n}\r\n \r\n  .apply-button:hover {\r\n    color: #111111;\r\n    background-color: #cc5050;\r\n  }\r\n \r\n  input {\r\n  width: 70px;\r\n  background-color: #3b4045;\r\n  color: #cbcbcb;\r\n  border: none;\r\n  border-radius: 2px;\r\n  box-shadow: 0 8px 12px rgba(0,0,0,0.2), 0 5px 6px rgba(0,0,0,0.2);\r\n  padding-left:3px;\r\n}\r\n \r\n  .submit-button {\r\n  margin-left: 50px;\r\n}\r\n \r\n  .subscription-info {\r\n  border-left: 3px dashed #2e2e2e;\r\n}\r\n \r\n  .insert-button-payment {\r\n  background-color: #cc5050;\r\n  padding: 5px 15px 5px 15px;\r\n  border: 0px;\r\n  margin: 10px 0 20px 5px;\r\n  border-radius: 5px;\r\n  transition-duration: 0.2s;\r\n  color: white;\r\n  outline: none;\r\n}\r\n \r\n  .insert-button-payment[disabled] {\r\n    background-color: #cb9c9c;\r\n    color: white;\r\n  }\r\n \r\n  .insert-button-payment:hover {\r\n    color: #111111;\r\n    background-color: #cc5050;\r\n  }\r\n \r\n  .insert-button-payment:hover[disabled] {\r\n      background-color: #cb9c9c;\r\n      color: white;\r\n      cursor: not-allowed;\r\n    }\r\n \r\n  .enter-training-button {\r\n  background-color: #9c9653;\r\n  padding: 5px 15px 5px 15px;\r\n  border: 0px;\r\n  margin: 10px 0 20px 5px;\r\n  border-radius: 5px;\r\n  transition-duration: 0.2s;\r\n  color: white;\r\n  outline: none;\r\n}\r\n \r\n  .enter-training-button[disabled] {\r\n    background-color: #a4a287; \r\n    color: white;\r\n  }\r\n \r\n  .enter-training-button:hover {\r\n    color: #111111;\r\n    background-color: olive;\r\n    cursor: -webkit-grab;\r\n    cursor: grab;\r\n  }\r\n \r\n  .enter-training-button:hover[disabled] {\r\n      background-color: #a4a287;\r\n      color: white;\r\n      cursor: not-allowed;\r\n    }\r\n \r\n  .table {\r\n\r\n  border-radius: 2px;\r\n  margin-top:50px;\r\n}\r\n \r\n  .table th {\r\n    color: #808080;\r\n    background-color:#292b2e;\r\n     \r\n  }\r\n \r\n  .table th:hover {\r\n      color: white;\r\n    }\r\n \r\n  .table tr:hover {\r\n    cursor: -webkit-grab;\r\n    cursor: grab;\r\n  }\r\n \r\n  .selected {\r\n  background-color: #323539;\r\n}\r\n \r\n  /* Subscription colors */\r\n \r\n  .active {\r\n   color: rgba(48, 139, 50 );\r\n  \r\n}\r\n \r\n  .outdated{\r\n    color:rgba(204, 80, 80 );\r\n }\r\n \r\n  .notactive{\r\n   color:#808080;\r\n }\r\n \r\n  #id{\r\n   color:#9a8b8b;\r\n }\r\n \r\n  #clientSearchField {\r\n  padding-left:15px;\r\n  background-color: #393838;\r\n  font-size: 16px;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  height: 35px;\r\n  outline: none;\r\n  width: 200px;\r\n  color: white;\r\n  margin: 0px 0px 20px 0px;\r\n}\r\n \r\n  #clientSearchField:hover {\r\n    background-color: #302f2f;\r\n  }\r\n \r\n  #clientSearch:active\r\n{\r\n  outline:none;\r\n}\r\n \r\n  .my-pagination /deep/ .ngx-pagination .current {\r\n  background: indianred;  \r\n  \r\n}\r\n \r\n  .my-pagination\r\n {\r\n   color:white;\r\n }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi1jbGllbnRzL3NlY3Rpb24tY2xpZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWU7O0VBRWYsc0JBQXNCO0FBQ3hCOztFQUVFO0lBQ0UsWUFBWTtFQUNkOztFQUVGO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmOztFQUVFO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7RUFDRjtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUVBQWlFO0VBQ2pFLGdCQUFnQjtBQUNsQjs7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0VBRUU7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLHlCQUF5QjtFQUMzQjs7RUFFRTtNQUNFLHlCQUF5QjtNQUN6QixZQUFZO01BQ1osbUJBQW1CO0lBQ3JCOztFQUVKO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLG9CQUFZO0lBQVosWUFBWTtFQUNkOztFQUNFO01BQ0UseUJBQXlCO01BQ3pCLFlBQVk7TUFDWixtQkFBbUI7SUFDckI7O0VBQ0o7O0VBRUUsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0VBRUU7SUFDRSxjQUFjO0lBQ2Qsd0JBQXdCOztFQUUxQjs7RUFFRTtNQUNFLFlBQVk7SUFDZDs7RUFFRjtJQUNFLG9CQUFZO0lBQVosWUFBWTtFQUNkOztFQUlGO0VBQ0UseUJBQXlCO0FBQzNCOztFQUVBLHdCQUF3Qjs7RUFDeEI7R0FDRyx5QkFBeUI7O0FBRTVCOztFQUNDO0lBQ0csd0JBQXdCO0NBQzNCOztFQUNBO0dBQ0UsYUFBYTtDQUNmOztFQUNBO0dBQ0UsYUFBYTtDQUNmOztFQUVEO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztFQUNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVGOztFQUVFLFlBQVk7QUFDZDs7RUFDQTtFQUNFLHFCQUFxQjs7QUFFdkI7O0VBRUM7O0dBRUUsV0FBVztDQUNiIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi1jbGllbnRzL3NlY3Rpb24tY2xpZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIFxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuIFxyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuIFxyXG4gIHRoIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTo1MHB4OyBcclxufVxyXG5cclxuLmFwcGx5LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjNTA1MDtcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcclxuICBib3JkZXI6IDBweDtcclxuICBtYXJnaW46IDMwcHggMCAyMHB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuICAuYXBwbHktYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjNTA1MDtcclxuICB9XHJcbmlucHV0IHtcclxuICB3aWR0aDogNzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I0MDQ1O1xyXG4gIGNvbG9yOiAjY2JjYmNiO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTJweCByZ2JhKDAsMCwwLDAuMiksIDAgNXB4IDZweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgcGFkZGluZy1sZWZ0OjNweDtcclxufVxyXG4uc3VibWl0LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpcHRpb24taW5mbyB7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBkYXNoZWQgIzJlMmUyZTtcclxufVxyXG5cclxuLmluc2VydC1idXR0b24tcGF5bWVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjNTA1MDtcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcclxuICBib3JkZXI6IDBweDtcclxuICBtYXJnaW46IDEwcHggMCAyMHB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuICAuaW5zZXJ0LWJ1dHRvbi1wYXltZW50W2Rpc2FibGVkXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2I5YzljO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmluc2VydC1idXR0b24tcGF5bWVudDpob3ZlciB7XHJcbiAgICBjb2xvcjogIzExMTExMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYzUwNTA7XHJcbiAgfVxyXG5cclxuICAgIC5pbnNlcnQtYnV0dG9uLXBheW1lbnQ6aG92ZXJbZGlzYWJsZWRdIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NiOWM5YztcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgfVxyXG5cclxuLmVudGVyLXRyYWluaW5nLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljOTY1MztcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcclxuICBib3JkZXI6IDBweDtcclxuICBtYXJnaW46IDEwcHggMCAyMHB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4gIC5lbnRlci10cmFpbmluZy1idXR0b25bZGlzYWJsZWRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNGEyODc7IFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuZW50ZXItdHJhaW5pbmctYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMTExMTExO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb2xpdmU7XHJcbiAgICBjdXJzb3I6IGdyYWI7XHJcbiAgfVxyXG4gICAgLmVudGVyLXRyYWluaW5nLWJ1dHRvbjpob3ZlcltkaXNhYmxlZF0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTRhMjg3O1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbi50YWJsZSB7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBtYXJnaW4tdG9wOjUwcHg7XHJcbn1cclxuXHJcbiAgLnRhYmxlIHRoIHtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjkyYjJlO1xyXG4gICAgIFxyXG4gIH1cclxuXHJcbiAgICAudGFibGUgdGg6aG92ZXIge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gIC50YWJsZSB0cjpob3ZlciB7XHJcbiAgICBjdXJzb3I6IGdyYWI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4uc2VsZWN0ZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjM1Mzk7XHJcbn1cclxuXHJcbi8qIFN1YnNjcmlwdGlvbiBjb2xvcnMgKi9cclxuLmFjdGl2ZSB7XHJcbiAgIGNvbG9yOiByZ2JhKDQ4LCAxMzksIDUwICk7XHJcbiAgXHJcbn1cclxuIC5vdXRkYXRlZHtcclxuICAgIGNvbG9yOnJnYmEoMjA0LCA4MCwgODAgKTtcclxuIH1cclxuIC5ub3RhY3RpdmV7XHJcbiAgIGNvbG9yOiM4MDgwODA7XHJcbiB9XHJcbiAjaWR7XHJcbiAgIGNvbG9yOiM5YThiOGI7XHJcbiB9XHJcbiBcclxuI2NsaWVudFNlYXJjaEZpZWxkIHtcclxuICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzODM4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XHJcbn1cclxuICAjY2xpZW50U2VhcmNoRmllbGQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMmYyZjtcclxuICB9XHJcbiBcclxuI2NsaWVudFNlYXJjaDphY3RpdmVcclxue1xyXG4gIG91dGxpbmU6bm9uZTtcclxufVxyXG4ubXktcGFnaW5hdGlvbiAvZGVlcC8gLm5neC1wYWdpbmF0aW9uIC5jdXJyZW50IHtcclxuICBiYWNrZ3JvdW5kOiBpbmRpYW5yZWQ7ICBcclxuICBcclxufVxyXG5cclxuIC5teS1wYWdpbmF0aW9uXHJcbiB7XHJcbiAgIGNvbG9yOndoaXRlO1xyXG4gfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sections/section-clients/section-clients.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/sections/section-clients/section-clients.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-container\" style=\"padding: 30px 30px 30px 0px;\">\r\n\r\n  <h4>\r\n    <i class=\"material-icons\">supervisor_account</i> PANEL OBSŁUGI KLIENTÓW\r\n  </h4>\r\n\r\n  <hr />\r\n\r\n  <button class=\"insert-button shadow\" routerLink=\"/add-client\"> NOWY KLIENT</button>\r\n  <button class=\"enter-training-button shadow\" routerLink=\"/add-training-entry\" [disabled]=\"currentId==null\">WEJŚCIE NA TRENING</button>\r\n  <button class=\"insert-button-payment shadow\" routerLink=\"/accept-payment\" [disabled]=\"currentId==null\">PRZYJMIJ PŁATNOŚĆ</button>\r\n  <mat-slide-toggle (click)=\"toggleDetailInfo()\" style=\"margin-left:10px; color: #ffffff;\">\r\n\r\n    <div *ngIf=\"showDetails==true\">UKRYJ DANE</div>\r\n    <div *ngIf=\"showDetails==false\">POKAŻ DANE</div>\r\n\r\n  </mat-slide-toggle>\r\n   <br />\r\n    <input id=\"clientSearchField\" class=\" shadow\" type=\"text\" name=\"search\" [(ngModel)]=\"searchClient\" autocomplete=\"off\" placeholder=\"WYSZUKAJ KLIENTA ...\" appAutofocus>\r\n\r\n    <form  [formGroup]=\"filterClientsForm\">\r\n\r\n\r\n      <mat-form-field style=\"width:150px;\" (click)=\"resetujFiltr()\">\r\n\r\n        <mat-select formControlName=\"GroupId\" placeholder=\"Grupa\">\r\n\r\n          <mat-option *ngFor=\"let group of groups\" [value]=\"group.id\">\r\n            {{group.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <button class=\"apply-button shadow\" (click)=\"applyFilter()\">Filtruj</button>\r\n\r\n\r\n    </form>\r\n \r\n\r\n\r\n  <table class=\"shadow table table-inverse table-hover\">\r\n\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th>ID</th>\r\n        <th>Imię</th>\r\n        <th>Nazwisko</th>\r\n        <th>Telefon</th>\r\n        <th>Email</th>\r\n        <th matTooltip=\"Data rejestracji i rekord wejść\">Rekord</th>\r\n        <th matTooltip=\"Aktywny karnet i ostatni dzień z ważnym wejściem\">Karnet</th>\r\n     \r\n        <th matTooltip=\"Liczba pozostałych wejść na Siłownię\">GYM</th>\r\n        <th matTooltip=\"Liczba pozostałych wejść na Sporty Walki\">SW</th>\r\n        <th></th>\r\n        <th></th>\r\n     \r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n\r\n      <tr [formGroup]=\"clientForm\" (ngSubmit)=\"onFormSubmit(clientForm.value)\" *ngFor=\"let client of (clients | filter:searchClient  | paginate: { itemsPerPage: 5, currentPage: p }); let rowIndex = index\"\r\n          (click)=\"getId(client.id)\" [ngClass]=\"{selected: client.id == currentId, normal:  client.id != currentId || currentId == null}\">\r\n\r\n         \r\n\r\n        <td id=\"id\">\r\n\r\n          <div *ngIf=\"client.id != editRowId\">\r\n            <p>{{client.cardId}}</p>\r\n          </div>\r\n\r\n          <div *ngIf=\"client.id == editRowId\">\r\n            <input formControlName=\"cardId\" type=\"text\" [value]=\"client.cardId\">\r\n          </div>\r\n\r\n        </td>\r\n\r\n        <td>\r\n\r\n          <div *ngIf=\"client.id != editRowId\">\r\n            <p>{{client.name}}</p>\r\n          </div>\r\n\r\n          <div *ngIf=\"client.id == editRowId\">\r\n            <input formControlName=\"name\" type=\"text\" [value]=\"client.name\">\r\n          </div>\r\n\r\n        </td>\r\n\r\n        <td>\r\n          <div *ngIf=\"client.id != editRowId\">\r\n            <p *ngIf=\"showDetails==true\">{{client.surname}}</p>\r\n            <p *ngIf=\"showDetails==false\" style=\"color:gray;\">---</p>\r\n          </div>\r\n\r\n          <div *ngIf=\"client.id == editRowId\">\r\n            <input formControlName=\"surname\" type=\"text\" [value]=\"client.surname\">\r\n          </div>\r\n        </td>\r\n\r\n        <td>\r\n          <div *ngIf=\"client.id != editRowId\">\r\n            <p *ngIf=\"showDetails==true\">{{client.phone}}</p>\r\n            <p *ngIf=\"showDetails==false\" style=\"color:gray;\">---</p>\r\n          </div>\r\n\r\n          <div *ngIf=\"client.id == editRowId\">\r\n            <input formControlName=\"phone\" type=\"text\" [value]=\"client.phone\">\r\n          </div>\r\n        </td>\r\n\r\n        <td>\r\n          <div *ngIf=\"client.id != editRowId\">\r\n            <p *ngIf=\"showDetails==true\">{{client.email}}</p>\r\n            <p *ngIf=\"showDetails==false\" style=\"color:gray;\">---</p>\r\n          </div>\r\n\r\n          <div *ngIf=\"client.id == editRowId\">\r\n            <input formControlName=\"email\" type=\"text\" [value]=\"client.email\">\r\n          </div>\r\n        </td>\r\n\r\n        <td>\r\n          <p *ngIf=\"showDetails==true\">{{client.clientJoined | date:'d/MM/yyyy'}} G:{{client.gymEntries}}/SW:{{client.martialArtsEntries}}</p>\r\n          <p *ngIf=\"showDetails==false\" style=\"color:gray;\">---</p>\r\n        </td>\r\n\r\n\r\n\r\n        <td [ngClass]=\"{ outdated: today >= client.subscriptionExpires || ( client.gymEntriesLeft == 0  && client.martialArtsEntriesLeft == 0 ),\r\n          active: (today < client.subscriptionExpires || ( client.gymEntriesLeft != 0  && client.martialArtsEntriesLeft != 0 )), notactive: client.subscription == null}\">\r\n          <div *ngIf=\"client.subscription==null\"> Brak karnetu</div>\r\n          <div *ngIf=\"client.subscription!=null\">{{client.subscription.name}} do {{client.subscriptionExpires | date:'d/MM/yyyy' }}</div>\r\n\r\n\r\n        </td>\r\n\r\n\r\n\r\n\r\n\r\n        <td>\r\n          <div *ngIf=\"client.id != editRowId\">\r\n            <span *ngIf=\"client.gymEntriesLeft < 999\"> {{client.gymEntriesLeft }}</span>\r\n            <span style=\"font-size:24px;\" *ngIf=\"client.gymEntriesLeft >= 999\">\r\n\r\n              &infin;\r\n            </span>\r\n\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"client.id == editRowId\">\r\n            <input style=\"width:26px;\" formControlName=\"gymEntriesLeft\" type=\"number\" [value]=\"client.gymEntriesLeft\">\r\n          </div>\r\n        </td>\r\n        <td>\r\n          <div *ngIf=\"client.id != editRowId\">\r\n            <span *ngIf=\"client.martialArtsEntriesLeft < 999\"> {{client.martialArtsEntriesLeft }}</span>\r\n            <span style=\"font-size:26px;\" *ngIf=\"client.martialArtsEntriesLeft >= 999\">\t&infin;</span>\r\n\r\n          </div>\r\n\r\n          <div *ngIf=\"client.id == editRowId\">\r\n            <input style=\"width:25px;\" formControlName=\"martialArtsEntriesLeft\" type=\"number\" [value]=\"client.martialArtsEntriesLeft\">\r\n          </div>\r\n        </td>\r\n\r\n\r\n\r\n\r\n        <td>\r\n          <div *ngFor=\"let contract of client.contracts\">\r\n            <i *ngIf=\"contract.isDeleted != true && contract.paymentRequired == true && today >= client.subscriptionExpires\" style=\"color:red;\" class=\"material-icons\">  verified_user</i>\r\n            <i *ngIf=\"contract.isDeleted != true && contract.paymentRequired == true && today < client.subscriptionExpires\" style=\"color:forestgreen;\" class=\"material-icons\">  verified_user</i>\r\n          </div>\r\n\r\n        </td>\r\n\r\n\r\n        <td>\r\n\r\n\r\n          <button *ngIf=\"client.id != editRowId\" class=\"edit-icon\" (click)=\"editClient(client.id)\">\r\n            <i class=\"material-icons\">  edit</i>\r\n          </button>\r\n          <button *ngIf=\"client.id == editRowId\" class=\"edit-icon\" type=\"submit\" (click)=\"onFormSubmit(clientForm.value)\">\r\n            <i class=\"material-icons\">   done_all</i>\r\n          </button>\r\n\r\n\r\n\r\n\r\n          <button *ngIf=\"role == 'admin'\" class=\"delete-icon\" (click)=\"deleteClient(client.id)\"><i class=\"material-icons\">  delete_forever </i></button>\r\n\r\n        </td>\r\n\r\n      </tr>\r\n\r\n    </tbody>\r\n\r\n  </table>\r\n\r\n  <pagination-controls previousLabel=\"\" nextLabel=\"\" class=\"my-pagination text-center\" (pageChange)=\"p = $event\"> </pagination-controls>\r\n  <hr />\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sections/section-clients/section-clients.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/sections/section-clients/section-clients.component.ts ***!
  \***********************************************************************/
/*! exports provided: SectionClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionClientsComponent", function() { return SectionClientsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client.service */ "./src/app/client.service.ts");
/* harmony import */ var _Training_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Training.service */ "./src/app/Training.service.ts");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../payment.service */ "./src/app/payment.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_subscription_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/subscription.service */ "./src/app/subscription.service.ts");









var SectionClientsComponent = /** @class */ (function () {
    function SectionClientsComponent(router, formbulider, subscriptionService, httpService, clientService, paymentService, trainingService) {
        this.router = router;
        this.formbulider = formbulider;
        this.subscriptionService = subscriptionService;
        this.httpService = httpService;
        this.clientService = clientService;
        this.paymentService = paymentService;
        this.trainingService = trainingService;
        this.showDetails = false;
        this.message = null; // displayed in console just for my information whats going on and where
        this.clients = []; // array used for storing, clients received from API calls
        this.filteredClients = [];
        this.currentId = null; // when row is clicked, user assigned to this row (user's id) is stored in this variable, and parsed through ngOnDestroy to payment             
        this.editRowId = null; // when row is edited, user assigned to this row (user's id) is stored in this variable, and parsed through ngOnDestroy to payment             
        this.groups = [];
        this.today = new Date().toISOString();
        this.edit = true;
        this.p = 1; //pagination starting point
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.getClients(); // using ClientService I simply get all the clients through API, and list them in table
        this.clientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            cardId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            group: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            gymEntriesLeft: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
            martialArtsEntriesLeft: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](),
        });
    }
    SectionClientsComponent.prototype.ngOnInit = function () {
        this.filterClientsForm = this.formbulider.group({
            GroupId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
        });
        this.getGroups();
        if (this.currentUser != null) {
            this.role = this.currentUser.role;
        }
        this.getGroups();
    };
    SectionClientsComponent.prototype.resetujFiltr = function () {
        this.getClients();
    };
    SectionClientsComponent.prototype.applyFilter = function () {
        var groupId = this.filterClientsForm.get('GroupId').value;
        for (var _i = 0, _a = this.clients; _i < _a.length; _i++) {
            var object = _a[_i];
            for (var _b = 0, _c = object.contracts; _b < _c.length; _b++) {
                var contract = _c[_b];
                if (contract.groupId == groupId && contract.isDeleted != true) {
                    this.filteredClients.push(object);
                }
            }
        }
        this.clients = this.filteredClients;
    };
    SectionClientsComponent.prototype.ngOnDestroy = function () {
        this.paymentService.currentId = this.currentId; // a way of sending clicked user id to training or payment component
        this.trainingService.currentId = this.currentId;
    };
    SectionClientsComponent.prototype.getGroups = function () {
        var _this = this;
        this.subscriptionService.getGroups().subscribe(function (data) {
            _this.groups = data;
            _this.message = 'Pomyślnie pobrano spis grup.';
        });
    };
    SectionClientsComponent.prototype.getClients = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (data) {
            _this.clients = data;
        });
    };
    SectionClientsComponent.prototype.deleteClient = function (id) {
        var _this = this;
        if (confirm("Czy jesteś pewien, że chcesz usunąć tego użytkownika?")) {
            this.clientService.deleteClient(id).subscribe(function () {
                _this.getClients();
            });
        }
    };
    SectionClientsComponent.prototype.editClient = function (id) {
        var _this = this;
        if (this.editRowId == null) {
            // When edit icon clicked, and so far it wasn't clicked (form is not open => editRowId == null), I set the editRowId to current row's user Id,
            // and retrive that single user from api, and save him in ClientById variable
            this.editRowId = id;
            this.clientService.getClientById(this.editRowId).subscribe(function (clientData) {
                _this.clientById = clientData;
            });
        }
        else if (this.editRowId != null) {
            this.editRowId = null;
            if (this.edit == true || this.edit == null) {
                this.edit = false;
            }
            else if (this.edit == false || this.edit == null) {
                this.edit = true;
            }
        }
    };
    // Function that catches event of clicking on user record, and saves his Id in variable currentId
    SectionClientsComponent.prototype.getId = function (Id) {
        // If row hasn't been clicked yet..
        if (this.currentId == null || this.currentId != Id) {
            this.currentId = Id;
        }
        // .. if already was clicked, set to null (unclick )
        else if (this.currentId == Id) {
            this.currentId = null;
        }
    };
    SectionClientsComponent.prototype.onFormSubmit = function (clientForm) {
        var _this = this;
        this.clientService.updateClient(this.clientForm, this.clientById).subscribe(function () {
            _this.message = "Zaktualizowano dane klienta.";
            _this.getClients();
            _this.edit = false;
            _this.editRowId = null;
        });
    };
    SectionClientsComponent.prototype.toggleDetailInfo = function () {
        this.showDetails = !this.showDetails;
    };
    SectionClientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-clients',
            template: __webpack_require__(/*! ./section-clients.component.html */ "./src/app/sections/section-clients/section-clients.component.html"),
            styles: [__webpack_require__(/*! ./section-clients.component.css */ "./src/app/sections/section-clients/section-clients.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], src_app_subscription_service__WEBPACK_IMPORTED_MODULE_8__["SubscriptionService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _payment_service__WEBPACK_IMPORTED_MODULE_5__["PaymentService"], _Training_service__WEBPACK_IMPORTED_MODULE_4__["TrainingService"]])
    ], SectionClientsComponent);
    return SectionClientsComponent;
}());



/***/ }),

/***/ "./src/app/sections/section-payments/section-payments.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/sections/section-payments/section-payments.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  margin-top:50px;\r\n}\r\n#moreImportant\r\n{\r\n  background-color:#212529;\r\n}\r\n#lessImportant {\r\n\r\n}\r\n.warning{\r\n  color:#d48585;\r\n}\r\n#paymentSearchField {\r\n  background-color: #393838;\r\n  font-size: 16px;\r\n  border: 0px;\r\n  border-radius: 5px;\r\n  height: 35px;\r\n  outline: none;\r\n  width: 100%;\r\n  color: white;\r\n  margin: 30px 0px 0px 0px;\r\n}\r\n#paymentSearchField:hover {\r\n    background-color: #302f2f;\r\n  }\r\n#paymentSearch:active {\r\n  outline: none;\r\n}\r\ntable {\r\n  width: 100%;\r\n  color:#b4afaf;\r\n   margin-top: 50px;\r\n}\r\ntable tr:hover{\r\n  color:white;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n  margin-top:20px;\r\n}\r\nform { \r\n width:100%;\r\n margin-top:40px;\r\n}\r\n.date-block {\r\n  display: flex;\r\n  padding-left:20px;\r\n}\r\n.date-block__list {\r\n  flex-basis: 150px;\r\n  margin-right: 15px;\r\n}\r\n.apply-button {\r\n  background-color: #cc5050;\r\n  padding: 5px 15px 5px 15px;\r\n  border: 0px;\r\n  margin: 30px 0 20px 5px;\r\n  border-radius: 5px;\r\n  transition-duration: 0.2s;\r\n  color: white;\r\n  outline: none;\r\n}\r\n.apply-button:hover {\r\n    color: #111111;\r\n    background-color: #cc5050;\r\n  }\r\n.apply-button[disabled] {\r\n    background-color: #cb9c9c;\r\n    color: white;\r\n    cursor: not-allowed;\r\n  }\r\n#sumRow{\r\n    border-top:2px dashed #413b2f;\r\n    background-color:#22262c;\r\n    color:gray;\r\n  }\r\ntable{\r\n    border: none;\r\n    padding:20px;\r\n    }\r\ntable th{\r\n    color:gray;\r\n  }\r\ntable th:hover{\r\n    color:white;\r\n  }\r\n.warning\r\n{\r\n  background-color:#513f3f;\r\n}\r\n.warning-info{\r\n  color:#a1b5f7;\r\n}\r\n.deleted\r\n{\r\n  text-decoration:line-through;\r\n  color:#606060;\r\n}\r\n.deleted:hover {\r\n    text-decoration: none;\r\n    color: #606060;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi1wYXltZW50cy9zZWN0aW9uLXBheW1lbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7O0VBRUUsd0JBQXdCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7QUFFRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVGO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtHQUNaLGdCQUFnQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFFQTtDQUNDLFVBQVU7Q0FDVixlQUFlO0FBQ2hCO0FBR0E7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0U7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0VBQzNCO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtFQUNyQjtBQUNBO0lBQ0UsNkJBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7QUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1o7QUFDRjtJQUNFLFVBQVU7RUFDWjtBQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7O0VBRUUsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSw0QkFBNEI7RUFDNUIsYUFBYTtBQUNmO0FBQ0U7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb24tcGF5bWVudHMvc2VjdGlvbi1wYXltZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgbWFyZ2luLXRvcDo1MHB4O1xyXG59XHJcbiNtb3JlSW1wb3J0YW50XHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyMTI1Mjk7XHJcbn1cclxuI2xlc3NJbXBvcnRhbnQge1xyXG5cclxufVxyXG4ud2FybmluZ3tcclxuICBjb2xvcjojZDQ4NTg1O1xyXG59XHJcbiNwYXltZW50U2VhcmNoRmllbGQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzOTM4Mzg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAzMHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4gICNwYXltZW50U2VhcmNoRmllbGQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwMmYyZjtcclxuICB9XHJcblxyXG4jcGF5bWVudFNlYXJjaDphY3RpdmUge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiNiNGFmYWY7XHJcbiAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxudGFibGUgdHI6aG92ZXJ7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn1cclxuIFxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuXHJcbmZvcm0geyBcclxuIHdpZHRoOjEwMCU7XHJcbiBtYXJnaW4tdG9wOjQwcHg7XHJcbn1cclxuIFxyXG5cclxuLmRhdGUtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1sZWZ0OjIwcHg7XHJcbn1cclxuXHJcbi5kYXRlLWJsb2NrX19saXN0IHtcclxuICBmbGV4LWJhc2lzOiAxNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmFwcGx5LWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjNTA1MDtcclxuICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcclxuICBib3JkZXI6IDBweDtcclxuICBtYXJnaW46IDMwcHggMCAyMHB4IDVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4gIC5hcHBseS1idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M1MDUwO1xyXG4gIH1cclxuICAuYXBwbHktYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2I5YzljO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbiAgI3N1bVJvd3tcclxuICAgIGJvcmRlci10b3A6MnB4IGRhc2hlZCAjNDEzYjJmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMjIyNjJjO1xyXG4gICAgY29sb3I6Z3JheTtcclxuICB9XHJcbiAgdGFibGV7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICB9XHJcbiAgdGFibGUgdGh7XHJcbiAgICBjb2xvcjpncmF5O1xyXG4gIH1cclxuICB0YWJsZSB0aDpob3ZlcntcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gIH1cclxuLndhcm5pbmdcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzUxM2YzZjtcclxufVxyXG4gXHJcbi53YXJuaW5nLWluZm97XHJcbiAgY29sb3I6I2ExYjVmNztcclxufVxyXG4uZGVsZXRlZFxyXG57XHJcbiAgdGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaDtcclxuICBjb2xvcjojNjA2MDYwO1xyXG59XHJcbiAgLmRlbGV0ZWQ6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICM2MDYwNjA7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sections/section-payments/section-payments.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/sections/section-payments/section-payments.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-container\">\r\n\r\n  <h4>\r\n    <i class=\"material-icons\">monetization_on</i> RAPORT PŁATNOŚCI\r\n  </h4>\r\n  <hr />\r\n \r\n  <form class=\"date-block form shadow\" [formGroup]=\"filterForm\">\r\n    <div class=\"date-block__list\">\r\n      <mat-form-field>\r\n        <input matInput\r\n               [matDatepicker]=\"fromDate\"\r\n               placeholder=\"Od daty..\"\r\n               formControlName=\"fromDate\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"fromDate\"></mat-datepicker-toggle>\r\n        <mat-datepicker [startAt]=\"fromDate\" #fromDate></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"date-block__list\">\r\n      <mat-form-field>\r\n        <input matInput\r\n               [matDatepicker]=\"toDate\"\r\n               placeholder=\"Do daty..\"\r\n               formControlName=\"toDate\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"toDate\"></mat-datepicker-toggle>\r\n        <mat-datepicker [startAt]=\"toDate\" #toDate></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"date-block__list\">\r\n      <mat-form-field id=\"subscriptionInput\" style=\"width:100px;\">\r\n\r\n        <mat-select formControlName=\"subscriptionId\" placeholder=\"Karnet\">\r\n\r\n          <mat-option *ngFor=\"let subscription of subscriptions\" [value]=\"subscription.id\">\r\n            {{subscription.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n  \r\n    <br />\r\n    <br />\r\n    <div class=\"date-block__list\">\r\n      <button class=\"apply-button shadow\" (click)=\"applyFilter()\">Filtruj</button>\r\n\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n \r\n   \r\n    <table class=\"shadow table table-inverse table-hover table-sm\" >\r\n\r\n      <thead class=\"thead-dark\">\r\n\r\n        <tr>\r\n          <th>Id</th>\r\n          <th>Klient</th>\r\n   \r\n          <th>Karnet</th>\r\n          <th>Przyjęta gotówka</th>\r\n          <th>Dzień wpłaty</th>\r\n          <th>Uwaga</th> \r\n          <th> </th>\r\n\r\n        </tr>\r\n\r\n      </thead>\r\n      <tbody> \r\n        <tr *ngFor=\"let payment of filteredPayments | filterBy: userFilter\">\r\n\r\n          <td>{{payment.id}}</td>\r\n          <td [ngClass]=\"{ deleted: payment.client.isDeleted == true }\">{{payment.client.name}} {{payment.client.surname}}</td>\r\n       \r\n          <td>\r\n\r\n            <div *ngIf=\"payment.subscription !=null\">{{payment.subscription.name}} <span style=\"color:lightslategray;\">[ {{payment.subscription.price}} zł ]</span></div>\r\n            <div *ngIf=\"payment.subscription == null\">Wejście jednorazowe - {{payment.cashRegistered}} zł </div>\r\n\r\n          </td>\r\n          <td>{{payment.cashRegistered }}  zł</td>\r\n          <td>{{payment.paymentRegistered | date:'short'  }}</td>\r\n          <td>{{payment.additionalInformation }}</td>\r\n          <td (click)=\"compensatePayment(payment, payment.subscription.price)\">\r\n            <div *ngIf=\"payment.paymentCompleted != true\"><i class=\"material-icons\" style=\"color:indianred;\"> error </i></div>\r\n \r\n          </td>\r\n          <td>\r\n            <div *ngFor=\"let object of payment.contracts\">\r\n              {{object.id}}\r\n            </div>\r\n          </td>\r\n\r\n        </tr>\r\n        <tr id=\"sumRow\">\r\n          <td>Ilość przyjętych płatności: {{paymentsAmount}} </td>\r\n          <td> </td>\r\n          <td> </td>\r\n          <td>Suma: {{sum}} zł</td>\r\n          <td> </td>\r\n          <td> </td>\r\n          <td> </td>\r\n        </tr>\r\n      </tbody>\r\n\r\n    </table> \r\n \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sections/section-payments/section-payments.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/sections/section-payments/section-payments.component.ts ***!
  \*************************************************************************/
/*! exports provided: SectionPaymentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionPaymentsComponent", function() { return SectionPaymentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _payment_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../payment.service */ "./src/app/payment.service.ts");
/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../subscription.service */ "./src/app/subscription.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var SectionPaymentsComponent = /** @class */ (function () {
    function SectionPaymentsComponent(router, httpService, paymentService, formbulider, subscriptionService) {
        this.router = router;
        this.httpService = httpService;
        this.paymentService = paymentService;
        this.formbulider = formbulider;
        this.subscriptionService = subscriptionService;
        this.compensatedPayment = null;
        this.today = new Date(new Date().getTime());
        this.fromDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 0, 0, 0);
        this.toDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 23, 59, 59);
        this.payments = [];
        this.subscriptions = [];
        this.groupsData = [];
        this.filteredPayments = [];
        // list for storing payments
        // list for storing payments
        this.sum = 0; // variable for storing sum of currently displayed payments list
        this.paymentsAmount = 0; // variable for storing sum of currently displayed payments list
        this.expectedSum = 0;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    SectionPaymentsComponent.prototype.compensatePayment = function (payment, cashRequired) {
        // When clients compensate not completed payment two following things happen:
        // his not completed payment is now completed, cashRegistered doesn't change
        // and new payment is generated with cashRegistered equal to the difference which should be registered
        var _this = this;
        if (confirm("Czy potwierdzasz, że klient wyrównał płatność?")) {
            this.compensatedPayment = {
                subscriptionExpires: null,
                cashRegistered: (cashRequired - payment.cashRegistered),
                paymentRegistered: this.today,
                clientId: payment.clientId,
                additionalInformation: "Nadpłata za nieopłacony karnet",
                subscriptionId: null,
                paymentCompleted: true
            };
            payment.paymentCompleted = true;
            this.paymentService.updatePayment(payment.id, payment).subscribe(function () {
                _this.message = "Status nieopłaconej płatności został zmieniony.";
                _this.paymentService.createPayment(_this.compensatedPayment).subscribe(function () {
                    _this.message = "Dodano płatność kompensującą niedopłatę.";
                });
            });
        }
    };
    SectionPaymentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.currentUser.role != 'admin' || this.currentUser.role == null || this.currentUser == null) {
            this.router.navigate(['login']);
        }
        this.getSubscriptions();
        this.getGroups();
        this.sum = 0;
        this.paymentsAmount = 0;
        this.filterForm = this.formbulider.group({
            toDate: [this.toDate],
            fromDate: [this.fromDate],
            subscriptionId: [''],
        });
        this.toDate = new Date(this.toDate.getFullYear(), this.toDate.getMonth(), this.toDate.getDate(), 23, 59, 59);
        this.fromDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDate(), 0, 0, 0);
        this.paymentService.getPayments().subscribe(function (paymentsData) {
            _this.payments = paymentsData;
            _this.filteredPayments = _this.payments;
            for (var i = 0; i < _this.payments.length; i++) {
                _this.sum += _this.filteredPayments[i].cashRegistered;
                _this.paymentsAmount++;
            }
            _this.applyFilter();
        });
    };
    SectionPaymentsComponent.prototype.applyFilter = function () {
        var _this = this;
        this.sum = 0;
        this.paymentsAmount = 0;
        this.filteredPayments = this.payments;
        this.fromDate = this.filterForm.get('fromDate').value;
        this.toDate = this.filterForm.get('toDate').value;
        this.subscriptionId = this.filterForm.get('subscriptionId').value;
        this.paymentService.getPayments().subscribe(function (paymentsData) {
            _this.payments = paymentsData;
        });
        this.filteredPayments = this.payments.filter(function (p) { return new Date(p.paymentRegistered).getTime() >= _this.fromDate.getTime() && new Date(p.paymentRegistered).getTime() <= _this.toDate.getTime(); });
        if (this.subscriptionId != 0) {
            this.filteredPayments = this.payments.filter(function (p) { return new Date(p.paymentRegistered).getTime() >= _this.fromDate.getTime() && new Date(p.paymentRegistered).getTime() <= _this.toDate.getTime() && p.subscriptionId == _this.subscriptionId; });
        }
        for (var i = 0; i < this.filteredPayments.length; i++) {
            this.sum += this.filteredPayments[i].cashRegistered;
            this.paymentsAmount++;
        }
    };
    SectionPaymentsComponent.prototype.getSubscriptions = function () {
        var _this = this;
        this.subscriptionService.getSubscriptions().subscribe(function (subscriptionsData) {
            _this.subscriptions = subscriptionsData;
            _this.message = 'Pomyślnie pobrano spis karnetów.';
        });
    };
    SectionPaymentsComponent.prototype.getGroups = function () {
        var _this = this;
        this.subscriptionService.getGroups().subscribe(function (data) {
            _this.groupsData = data;
            _this.message = 'Pomyślnie pobrano spis karnetów.';
        });
    };
    SectionPaymentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-payments',
            template: __webpack_require__(/*! ./section-payments.component.html */ "./src/app/sections/section-payments/section-payments.component.html"),
            styles: [__webpack_require__(/*! ./section-payments.component.css */ "./src/app/sections/section-payments/section-payments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _payment_service__WEBPACK_IMPORTED_MODULE_3__["PaymentService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _subscription_service__WEBPACK_IMPORTED_MODULE_4__["SubscriptionService"]])
    ], SectionPaymentsComponent);
    return SectionPaymentsComponent;
}());



/***/ }),

/***/ "./src/app/sections/section-subscriptions/section-subscriptions.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/sections/section-subscriptions/section-subscriptions.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\r\n  margin-bottom: 20px;\r\n}\r\np {\r\n  padding: 10px;\r\n  background-color: gray;\r\n  border-radius: 5px;\r\n  background-color:#21272c;\r\n}\r\n.material-icons {\r\n  font-size: 30px;\r\n  vertical-align: middle;\r\n}\r\ntable{\r\n  border:none;\r\n  border-radius:5px;\r\n  margin-top:40px;\r\n}\r\nth\r\n{\r\n  border:none;\r\n  border-radius:5px;\r\n}\r\n.material-icons {\r\n  font-size: 22px;\r\n  vertical-align: middle;\r\n \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi1zdWJzY3JpcHRpb25zL3NlY3Rpb24tc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7O0FBRXhCIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi1zdWJzY3JpcHRpb25zL3NlY3Rpb24tc3Vic2NyaXB0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDQge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxucCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyMTI3MmM7XHJcbn1cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxudGFibGV7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgbWFyZ2luLXRvcDo0MHB4O1xyXG59XHJcbnRoXHJcbntcclxuICBib3JkZXI6bm9uZTtcclxuICBib3JkZXItcmFkaXVzOjVweDtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sections/section-subscriptions/section-subscriptions.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/sections/section-subscriptions/section-subscriptions.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-container\">\r\n\r\n  <h4>\r\n    <i class=\"material-icons\">picture_in_picture</i> PRZEGLĄD OFEROWANYCH KARNETÓW\r\n  </h4>\r\n\r\n  <hr />\r\n  <!--*ngIf=\"currentUser.role == 'admin'\"-->\r\n  <button class=\"insert-button shadow\" routerLink=\"/add-subscription\"> WPROWADŹ KARNET LUB GRUPĘ</button>\r\n\r\n\r\n  <table class=\"shadow table table-inverse table-hover\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n\r\n        <th>Nazwa</th>\r\n        <th>Cena</th>\r\n        <th>GYM</th>\r\n        <th>SW</th>\r\n        <th></th>\r\n\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let subscription of subscriptionsData\">\r\n\r\n        <td>{{subscription.name}}</td>\r\n        <td>{{subscription.price}} zł</td>\r\n        <td>\r\n          <span *ngIf=\"subscription.gymEntries < 999\">{{subscription.gymEntries}}</span>\r\n          <span style=\"font-size:26px;\" *ngIf=\"subscription.gymEntries >= 999\">&infin;</span>\r\n        </td>\r\n        <td>\r\n          <span *ngIf=\"subscription.martialArtsEntries < 999\">{{subscription.martialArtsEntries}}</span>\r\n          <span style=\"font-size:26px;\" *ngIf=\"subscription.martialArtsEntries >= 999\">&infin;</span>\r\n        </td>\r\n        <td><button class=\"delete-icon\" (click)=\"deleteSubscription(subscription.id)\"><i class=\"material-icons\">  delete_forever </i></button></td>\r\n        <!--*ngIf=\"currentUser.role == 'admin'\"-->\r\n        <td (click)=\"editSubscription(subscription.id, subscription)\"><i class=\"material-icons\" style=\" color:green;\">  edit</i></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <table class=\"shadow table table-inverse table-hover\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n\r\n        <th>Nazwa grupy</th>\r\n        <th>Grupa dla umów</th>\r\n\r\n\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let group of groupsData\" >\r\n\r\n        <td>{{group.name}}</td>\r\n\r\n        <td *ngIf=\"group.contractRelatedGroup == true\">Tak</td>\r\n        <td *ngIf=\"group.contractRelatedGroup == false\">Nie</td>\r\n\r\n        <td><button class=\"delete-icon\" (click)=\"deleteGroup(group.id)\"><i class=\"material-icons\">  delete_forever </i></button></td>\r\n        <td (click)=\"editGroup(group.id, group)\"><i class=\"material-icons\" style=\" color:green;\">  edit</i></td>\r\n\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/sections/section-subscriptions/section-subscriptions.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/sections/section-subscriptions/section-subscriptions.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SectionSubscriptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionSubscriptionsComponent", function() { return SectionSubscriptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../subscription.service */ "./src/app/subscription.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/client.service */ "./src/app/client.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var SectionSubscriptionsComponent = /** @class */ (function () {
    function SectionSubscriptionsComponent(router, formbulider, httpService, subscriptionService, snackBar, clientService) {
        this.router = router;
        this.formbulider = formbulider;
        this.httpService = httpService;
        this.subscriptionService = subscriptionService;
        this.snackBar = snackBar;
        this.clientService = clientService;
        this.dataSaved = false;
        this.message = null;
        this.errorMessage = '';
        this.snackbarClass = '';
        this.clients = []; // Array storing all types of subscriptions
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    SectionSubscriptionsComponent.prototype.ngOnInit = function () {
        this.getSubscriptions();
        this.getGroups();
        //this.getClients();
    };
    SectionSubscriptionsComponent.prototype.getSubscriptions = function () {
        var _this = this;
        this.subscriptionService.getSubscriptions().subscribe(function (data) {
            _this.subscriptionsData = data;
        });
    };
    SectionSubscriptionsComponent.prototype.getGroups = function () {
        var _this = this;
        this.subscriptionService.getGroups().subscribe(function (data) {
            _this.groupsData = data;
        });
    };
    SectionSubscriptionsComponent.prototype.editSubscription = function (subscriptionId, subscription) {
        if (confirm("Czy chcesz edytować karnet?")) {
            subscription.name = prompt("Podaj nową nazwę karnetu");
            subscription.price = parseInt(prompt("Podaj nową cenę"));
            subscription.gymEntries = parseInt(prompt("Podaj ilość możliwych, miesięcznych wejść na siłownię"));
            subscription.martialArtsEntries = parseInt(prompt("Podaj ilość możliwych, miesięcznych wejść na sporty walki"));
            this.subscriptionService.updateSubscription(subscriptionId, subscription).subscribe(function () {
            });
        }
    };
    SectionSubscriptionsComponent.prototype.editGroup = function (groupId, group) {
        if (confirm("Czy chcesz edytować grupę?")) {
            var name_1 = prompt("Podaj nową nazwę grupy");
            var grupaDlaUmow = prompt("Czy od grupy wymagać płatności ? [tak/nie]");
            group.name = name_1;
            if (grupaDlaUmow.substring(0, 1).toLowerCase() == 't') {
                group.contractRelatedGroup = true;
            }
            else {
                group.contractRelatedGroup = false;
            }
            this.subscriptionService.updateGroup(groupId, group).subscribe(function () {
            });
        }
    };
    SectionSubscriptionsComponent.prototype.deleteSubscription = function (Id) {
        var _this = this;
        this.subscriptionService.deleteSubscription(Id).subscribe(function () {
            _this.dataSaved = true;
            _this.message = 'Pomyślnie usunięto rodzaj karnetu.';
            _this.ngOnInit();
        }, function (error) {
            _this.errorMessage = error.message;
            _this.message = 'Karnet do którego są przypisani klienci, nie może zostać usunięty.';
            _this.snackbarClass = 'snackbar-failed';
            _this.openSnackBar(_this.message, 'Ok!');
        });
    };
    SectionSubscriptionsComponent.prototype.deleteGroup = function (Id) {
        var _this = this;
        console.log(Id);
        this.subscriptionService.deleteGroup(Id).subscribe(function () {
            _this.dataSaved = true;
            _this.message = 'Pomyślnie usunięto grupę.';
            _this.ngOnInit();
        }, function (error) {
            _this.errorMessage = error.message;
            _this.message = 'Grupa do której są przypisani klienci, nie może zostać usunięta.';
            _this.snackbarClass = 'snackbar-failed';
            _this.openSnackBar(_this.message, 'Ok!');
        });
    };
    SectionSubscriptionsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(this.message, action, {
            duration: 4000,
            panelClass: [this.snackbarClass]
        });
    };
    SectionSubscriptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-subscriptions',
            template: __webpack_require__(/*! ./section-subscriptions.component.html */ "./src/app/sections/section-subscriptions/section-subscriptions.component.html"),
            styles: [__webpack_require__(/*! ./section-subscriptions.component.css */ "./src/app/sections/section-subscriptions/section-subscriptions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _subscription_service__WEBPACK_IMPORTED_MODULE_3__["SubscriptionService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"], src_app_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"]])
    ], SectionSubscriptionsComponent);
    return SectionSubscriptionsComponent;
}());



/***/ }),

/***/ "./src/app/sections/section-trainings/section-trainings.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/sections/section-trainings/section-trainings.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\r\n  \r\n}\r\n.trainings-list {\r\n  margin-top: 8px;\r\n  background-color: #262d34;\r\n  border: none;\r\n  border-radius: 5px;\r\n  padding: 5px;\r\n  font-size: 18px;\r\n  color: #cbcbcb;\r\n  text-transform: uppercase;\r\n}\r\n.trainings-list:hover {\r\n    background-color: #2b333e;\r\n  }\r\n.day {\r\n  background-color: #222a31;\r\n  border-radius: 4px;\r\n  padding: 2px;\r\n  width: 10%;\r\n  display: inline;\r\n}\r\n#trainings {\r\n  margin: 10px 0px 0px 40px;\r\n  background-color: #2b333e;\r\n  border-radius: 5px;\r\n  border-bottom: 1px solid goldenrod;\r\n  padding: 20px 20px 20px 0px;\r\n  display:inline;\r\n  width:12%;\r\n}\r\n#type {\r\n  background-color: #363c42;\r\n  padding: 0px 5px 0px 5px;\r\n  color: darkgoldenrod;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  margin: 3px 8px 10px 0px;\r\n  float: right;\r\n}\r\n.training-form\r\n{ \r\n  margin-bottom:50px;\r\n}\r\n.training-form h5{\r\n  margin-left:15px;\r\n  margin-bottom:-10px;\r\n  margin-top:10px;\r\n}\r\nmat-form-field\r\n{\r\n  margin:15px;\r\n \r\n}\r\nh5{\r\n  margin-top:50px;\r\n  margin-bottom:20px;\r\n  \r\n}\r\ntable {\r\n  width: 100%;\r\n  color: #b4afaf;\r\n  margin-top: 50px;\r\n  margin-bottom:40px;\r\n}\r\ntable tr:hover {\r\n    color: white;\r\n  }\r\n.date-block {\r\n  display: flex;\r\n}\r\n.date-block__list {\r\n  flex-basis: 150px;\r\n  margin-right: 15px;\r\n}\r\n.apply-button {\r\n  background-color: #cc5050;\r\n  padding: 5px 15px 5px 15px;\r\n  border: 0px;\r\n  margin: 30px 0 20px 5px;\r\n  border-radius: 5px;\r\n  transition-duration: 0.2s;\r\n  color: white;\r\n  outline: none;\r\n}\r\n.apply-button:hover {\r\n    color: #111111;\r\n    background-color: #cc5050;\r\n  }\r\n.weekDaySchedule {\r\n  margin:3px;\r\n  float: left;\r\n  padding: 8px;\r\n  background-color:#222a31;\r\n  border-radius:3px;\r\n  width:13%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvc2VjdGlvbi10cmFpbmluZ3Mvc2VjdGlvbi10cmFpbmluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztFQUNkLHlCQUF5QjtBQUMzQjtBQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7RUFDRSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsU0FBUztBQUNYO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBOztFQUVFLFdBQVc7O0FBRWI7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7QUFFRTtJQUNFLFlBQVk7RUFDZDtBQUNGO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUU7SUFDRSxjQUFjO0lBQ2QseUJBQXlCO0VBQzNCO0FBRUY7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb24tdHJhaW5pbmdzL3NlY3Rpb24tdHJhaW5pbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcclxuICBcclxufVxyXG4udHJhaW5pbmdzLWxpc3Qge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyZDM0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogI2NiY2JjYjtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiAgLnRyYWluaW5ncy1saXN0OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjMzM2U7XHJcbiAgfVxyXG4uZGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyYTMxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgd2lkdGg6IDEwJTtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuI3RyYWluaW5ncyB7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMzNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ29sZGVucm9kO1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweCAyMHB4IDBweDtcclxuICBkaXNwbGF5OmlubGluZTtcclxuICB3aWR0aDoxMiU7XHJcbn1cclxuI3R5cGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNjNjNDI7XHJcbiAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xyXG4gIGNvbG9yOiBkYXJrZ29sZGVucm9kO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAzcHggOHB4IDEwcHggMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG4udHJhaW5pbmctZm9ybVxyXG57IFxyXG4gIG1hcmdpbi1ib3R0b206NTBweDtcclxufVxyXG4udHJhaW5pbmctZm9ybSBoNXtcclxuICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206LTEwcHg7XHJcbiAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkXHJcbntcclxuICBtYXJnaW46MTVweDtcclxuIFxyXG59XHJcbmg1e1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgXHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjYjRhZmFmO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG59XHJcblxyXG4gIHRhYmxlIHRyOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbi5kYXRlLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGF0ZS1ibG9ja19fbGlzdCB7XHJcbiAgZmxleC1iYXNpczogMTUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uYXBwbHktYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M1MDUwO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4IDVweCAxNXB4O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIG1hcmdpbjogMzBweCAwIDIwcHggNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4gIC5hcHBseS1idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2M1MDUwO1xyXG4gIH1cclxuXHJcbi53ZWVrRGF5U2NoZWR1bGUge1xyXG4gIG1hcmdpbjozcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzIyMmEzMTtcclxuICBib3JkZXItcmFkaXVzOjNweDtcclxuICB3aWR0aDoxMyU7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sections/section-trainings/section-trainings.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/sections/section-trainings/section-trainings.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section-container\">\r\n\r\n  <h4>\r\n    <i class=\"material-icons\">supervisor_account</i> BAZA TRENINGÓW\r\n  </h4>\r\n\r\n\r\n  <h5> <i class=\"material-icons\">  reorder</i> RAPORT WEJŚĆ </h5>\r\n  <br />\r\n  <form class=\"date-block form shadow\" [formGroup]=\"filterForm\">\r\n    <div class=\"date-block__list\">\r\n      <mat-form-field>\r\n        <input matInput\r\n               [matDatepicker]=\"fromDate\"\r\n               placeholder=\"Od daty..\"\r\n               formControlName=\"fromDate\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"fromDate\"></mat-datepicker-toggle>\r\n        <mat-datepicker [startAt]=\"fromDate\" #fromDate></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"date-block__list\">\r\n      <mat-form-field>\r\n        <input matInput\r\n               [matDatepicker]=\"toDate\"\r\n               placeholder=\"Do daty..\"\r\n               formControlName=\"toDate\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"toDate\"></mat-datepicker-toggle>\r\n        <mat-datepicker [startAt]=\"toDate\" #toDate></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"date-block__list\">\r\n      <mat-form-field>\r\n\r\n        <mat-select formControlName=\"trainingId\" placeholder=\"Trening\">\r\n\r\n          <mat-option *ngFor=\"let training of trainings\" [value]=\"training.id\">\r\n            {{training.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n    </div>\r\n    <div class=\"date-block__list\">\r\n      <button class=\"apply-button shadow\" (click)=\"applyFilter()\">Filtruj</button>\r\n    </div>\r\n\r\n  </form>\r\n\r\n\r\n  <table class=\"shadow table table-inverse table-hover table-sm\">\r\n\r\n    <thead class=\"thead-dark\">\r\n\r\n      <tr>\r\n        <th>Klient</th>\r\n        <th>Trening</th>\r\n        <th>Numer schowka</th>\r\n        <th>Czy zwrócono szafkę?</th>\r\n        <th>Data</th>\r\n        <th>Gratis</th>\r\n        <th>Inne wejścia</th>\r\n\r\n      </tr>\r\n\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let training of filteredtrainingEntries\">\r\n        <td>{{training.client.name}} {{training.client.surname}} </td>\r\n        <td>{{training.training.name}}  </td>\r\n        <td>{{training.locker}} </td>\r\n        <td>\r\n          <div *ngIf=\"training.lockerReturned==false\"><i style=\"color:#922525\" class=\"material-icons\">  vpn_key </i> </div>\r\n          <div *ngIf=\"training.lockerReturned==true\">\r\n            <i style=\"color:#2c5c17\" class=\"material-icons\"> done </i>\r\n          </div>\r\n        </td>\r\n        <td>{{training.entryRegistered | date:'short'}} </td>\r\n        <td>\r\n          <div *ngIf=\"training.freeEntry==null && training.freeEntry==false \"> </div>\r\n          <div *ngIf=\"training.freeEntry==true\">\r\n            <i class=\"material-icons\"> done </i>\r\n          </div>\r\n        </td>\r\n        <td>{{training.otherEntryType}} </td>\r\n\r\n      <tr>\r\n        <td>Suma wejść: {{trainingEntriesAmount}} </td>\r\n        <td> </td>\r\n        <td> </td>\r\n        <td> </td>\r\n        <td> </td>\r\n        <td> </td>\r\n        <td> </td>\r\n      </tr>\r\n\r\n    </tbody>\r\n\r\n  </table>\r\n\r\n\r\n  <form style=\"margin-top:25px;\" class=\"training-form form shadow\" [formGroup]=\"trainingForm\" (ngSubmit)=\"onFormSubmit()\">\r\n\r\n    <h5 style=\"color:papayawhip;\">DODAJ TRENING</h5>\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"Name\" matInput type=\"text\">\r\n      <mat-placeholder class=\"placeholder\">Nazwa treningu</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field id=\"Type\">\r\n      <mat-select formControlName=\"Type\" placeholder=\"Siłownia / sporty walki\">\r\n\r\n        <mat-option *ngFor=\"let item of types\" [value]=\"item\">\r\n          {{item}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n\r\n\r\n\r\n    <button class=\"submit-button shadow\" type=\"submit\">DODAJ TRENING</button>\r\n  </form>\r\n\r\n  <hr />\r\n  <h5><i class=\"material-icons\">assignment</i> ORGANIZOWANE TRENINGI</h5>\r\n  <mat-list class=\"trainings-list\" *ngFor=\"let training of trainings\">\r\n    <span style=\"color:gray;\">[{{training.id}}]</span>{{training.name}} <span id=\"type\">{{training.type}} </span>\r\n    <button id=\"type\" style=\"  float: right; color:indianred; background-color:inherit;\" class=\"delete-icon\" (click)=\"deleteTraining(training.id)\"><i class=\"material-icons\">  delete_forever </i></button>\r\n    <button id=\"type\" style=\"  float: right; color:indianred; background-color:inherit; color:green;\" class=\"delete-icon\" (click)=\"editTraining(training.id, training)\"><i class=\"material-icons\">  edit </i></button>\r\n   \r\n  </mat-list>\r\n\r\n  <hr />\r\n\r\n\r\n  <h5> <i class=\"material-icons\"> calendar_today</i> HARMONOGRAM TYGODNIA </h5>\r\n\r\n\r\n  <form class=\"training-form form shadow\" [formGroup]=\"trainingScheduleForm\" (ngSubmit)=\"onScheduleFormSubmit()\">\r\n\r\n    <mat-form-field id=\"Type\">\r\n      <mat-select formControlName=\"Day\" placeholder=\"Dzień tygodnia\">\r\n\r\n        <mat-option *ngFor=\"let day of daysOfWeek\" [value]=\"day\">\r\n          {{day}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"HourStarts\" matInput type=\"time\">\r\n      <mat-placeholder class=\"placeholder\">Rozpoczęcie</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input formControlName=\"HourFinishes\" matInput type=\"time\">\r\n      <mat-placeholder class=\"placeholder\">Zakonczenie (opcjonalne)</mat-placeholder>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field id=\"Type\">\r\n      <mat-select formControlName=\"TrainingId\" placeholder=\"Trening\">\r\n\r\n        <mat-option *ngFor=\"let training of trainings\" [value]=\"training.id\">\r\n          {{training.name}}\r\n        </mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n\r\n\r\n\r\n    <button class=\"submit-button shadow\" type=\"submit\">DODAJ DO KALENDARZA</button>\r\n  </form>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"weekDaySchedule shadow\">\r\n      <p style=\"text-align:center; color:indianred;\">PONIEDZIAŁEK</p>\r\n      <hr />\r\n      <ng-container *ngFor=\"let row of trainingsSchedule\">\r\n        <p *ngIf=\"row.day == 'Poniedziałek'\">\r\n          {{row.training.name}}  <span style=\"color:gray;\">{{row.hourStarts | slice:0:5 }} </span>  <span *ngIf=\"row.hourFinishes != null\" style=\"color:gray;\">do {{row.hourFinishes | slice:0:5 }} </span>\r\n          <i style=\"color:dimgray;\" class=\" delete-icon material-icons\" (click)=\"deleteTrainingSchedule(row.id)\">  delete_forever </i>\r\n        </p>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"weekDaySchedule shadow\">\r\n      <p style=\"text-align:center; color:indianred;\">WTOREK</p>\r\n      <hr />\r\n      <ng-container *ngFor=\"let row of trainingsSchedule\">\r\n        <p *ngIf=\"row.day == 'Wtorek'\">\r\n          {{row.training.name}} <span style=\"color:gray;\">{{row.hourStarts | slice:0:5 }} </span>  <span *ngIf=\"row.hourFinishes != null\" style=\"color:gray;\">do {{row.hourFinishes | slice:0:5 }} </span>\r\n          <i style=\"color:dimgray;\" class=\" delete-icon material-icons\" (click)=\"deleteTrainingSchedule(row.id)\">  delete_forever </i>\r\n        </p>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"weekDaySchedule shadow\">\r\n      <p style=\"text-align:center; color:indianred;\">ŚRODA</p>\r\n      <hr />\r\n      <ng-container *ngFor=\"let row of trainingsSchedule\">\r\n        <p *ngIf=\"row.day == 'Środa'\">\r\n          {{row.training.name}}  <span style=\"color:gray;\">{{row.hourStarts | slice:0:5 }} </span>  <span *ngIf=\"row.hourFinishes != null\" style=\"color:gray;\">do {{row.hourFinishes | slice:0:5 }} </span>\r\n          <i style=\"color:dimgray;\" class=\" delete-icon material-icons\" (click)=\"deleteTrainingSchedule(row.id)\">  delete_forever </i>\r\n        </p>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"weekDaySchedule shadow\">\r\n      <p style=\"text-align:center; color:indianred;\">CZWARTEK</p>\r\n      <hr />\r\n      <ng-container *ngFor=\"let row of trainingsSchedule\">\r\n        <p *ngIf=\"row.day == 'Czwartek'\">\r\n          {{row.training.name}}  <span style=\"color:gray;\">{{row.hourStarts | slice:0:5 }} </span>  <span *ngIf=\"row.hourFinishes != null\" style=\"color:gray;\">do {{row.hourFinishes | slice:0:5 }} </span>\r\n          <i style=\"color:dimgray;\" class=\" delete-icon material-icons\" (click)=\"deleteTrainingSchedule(row.id)\">  delete_forever </i>\r\n        </p>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"weekDaySchedule shadow\">\r\n      <p style=\"text-align:center; color:indianred;\">PIĄTEK</p>\r\n      <hr />\r\n      <ng-container *ngFor=\"let row of trainingsSchedule\">\r\n        <p *ngIf=\"row.day == 'Piątek'\">\r\n          {{row.training.name}} <span style=\"color:gray;\">{{row.hourStarts | slice:0:5 }} </span>  <span *ngIf=\"row.hourFinishes != null\" style=\"color:gray;\">do {{row.hourFinishes | slice:0:5 }} </span>\r\n          <i style=\"color:dimgray;\" class=\" delete-icon material-icons\" (click)=\"deleteTrainingSchedule(row.id)\">  delete_forever </i>\r\n        </p>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"weekDaySchedule shadow\">\r\n      <p style=\"text-align:center; color:indianred;\">SOBOTA</p>\r\n      <hr />\r\n      <ng-container *ngFor=\"let row of trainingsSchedule\">\r\n        <p *ngIf=\"row.day == 'Sobota'\">\r\n          {{row.training.name}}  <span style=\"color:gray;\">{{row.hourStarts | slice:0:5 }} </span>  <span *ngIf=\"row.hourFinishes != null\" style=\"color:gray;\">do {{row.hourFinishes | slice:0:5 }} </span>\r\n          <i style=\"color:dimgray;\" class=\" delete-icon material-icons\" (click)=\"deleteTrainingSchedule(row.id)\">  delete_forever </i>\r\n        </p>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <div class=\"weekDaySchedule shadow\">\r\n      <p style=\"text-align:center; color:indianred;\">NIEDZIELA</p>\r\n      <hr />\r\n      <ng-container *ngFor=\"let row of trainingsSchedule \">\r\n        <p *ngIf=\"row.day == 'Niedziela'\">\r\n          {{row.training.name}} <span style=\"color:gray;\">{{row.hourStarts | slice:0:5 }} </span>  <span *ngIf=\"row.hourFinishes != null\" style=\"color:gray;\">do {{row.hourFinishes | slice:0:5 }} </span>\r\n          <i style=\"color:dimgray;\" class=\" delete-icon material-icons\" (click)=\"deleteTrainingSchedule(row.id)\">  delete_forever </i>\r\n        </p>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sections/section-trainings/section-trainings.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sections/section-trainings/section-trainings.component.ts ***!
  \***************************************************************************/
/*! exports provided: SectionTrainingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTrainingsComponent", function() { return SectionTrainingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../training.service */ "./src/app/training.service.ts");
/* harmony import */ var _trainingentry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../trainingentry.service */ "./src/app/trainingentry.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var SectionTrainingsComponent = /** @class */ (function () {
    function SectionTrainingsComponent(httpService, formbulider, trainingService, trainingentryService) {
        this.httpService = httpService;
        this.formbulider = formbulider;
        this.trainingService = trainingService;
        this.trainingentryService = trainingentryService;
        this.dataSaved = false;
        this.message = null;
        this.trainingEntriesAmount = 0;
        this.trainings = [];
        this.trainingsSchedule = [];
        this.trainingEntries = [];
        this.filteredtrainingEntries = [];
        this.today = new Date(new Date().getTime());
        this.fromDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 0, 0, 0);
        this.toDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate(), 23, 59, 59);
        this.types = ['SPORTY WALKI', 'SIŁOWNIA'];
        this.daysOfWeek = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];
    }
    SectionTrainingsComponent.prototype.getTrainings = function () {
        var _this = this;
        this.trainingService.getTrainings().subscribe(function (data) {
            _this.trainings = data;
            _this.message = 'Pomyślnie pobrano spis treningów.';
        });
    };
    SectionTrainingsComponent.prototype.getTrainingsSchedule = function () {
        var _this = this;
        this.trainingService.getTrainingsSchedule().subscribe(function (data) {
            _this.trainingsSchedule = data;
            _this.message = 'Pomyślnie pobrano spis treningów.';
        });
    };
    SectionTrainingsComponent.prototype.getTrainingEntries = function () {
        var _this = this;
        this.trainingentryService.getTrainingEntries().subscribe(function (trainingentriesData) {
            _this.trainingEntries = trainingentriesData;
            _this.message = 'Pomyślnie pobrano spis treningów.';
        });
    };
    SectionTrainingsComponent.prototype.editTraining = function (trainingId, training) {
        if (confirm("Czy chcesz edytować trening?")) {
            var name_1 = prompt("Podaj nową nazwę treningu");
            training.Name = name_1;
            this.trainingService.updateTraining(trainingId, training).subscribe(function () {
            });
        }
    };
    SectionTrainingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTrainings(); // get data to fill Trainings list and entries table
        this.getTrainingsSchedule();
        this.trainingForm = this.formbulider.group({
            Name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            Type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        this.trainingScheduleForm = this.formbulider.group({
            Day: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            HourStarts: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            HourFinishes: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            TrainingId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        this.filterForm = this.formbulider.group({
            toDate: [this.toDate],
            fromDate: [this.fromDate],
            trainingId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
        });
        this.trainingEntriesAmount = 0;
        this.httpService.get('http://localhost:8080/api/trainingEntries').subscribe(function (trainingEntriesData) {
            _this.trainingEntries = trainingEntriesData;
            _this.filteredtrainingEntries = _this.trainingEntries;
            for (var i = 0; i < _this.trainingEntries.length; i++) {
                _this.trainingEntriesAmount++;
            }
            _this.applyFilter();
        });
    };
    SectionTrainingsComponent.prototype.onFormSubmit = function () {
        this.dataSaved = false;
        var training = this.trainingForm.value;
        this.CreateTraining(training);
        this.trainingForm.reset();
    };
    SectionTrainingsComponent.prototype.onScheduleFormSubmit = function () {
        this.dataSaved = false;
        var trainingScheduleRow = this.trainingScheduleForm.value;
        this.CreateTrainingScheduleRow(trainingScheduleRow);
        this.trainingScheduleForm.reset();
    };
    SectionTrainingsComponent.prototype.CreateTraining = function (training) {
        var _this = this;
        console.log(training);
        this.trainingService.createTraining(training).subscribe(function () {
            _this.dataSaved = true;
            _this.message = 'Pomyślnie utworzono nowy karnet.';
            _this.getTrainings();
        });
    };
    SectionTrainingsComponent.prototype.CreateTrainingScheduleRow = function (trainingScheduleRow) {
        var _this = this;
        this.trainingService.addTrainingToSchedule(trainingScheduleRow).subscribe(function () {
            _this.getTrainingsSchedule();
        });
    };
    SectionTrainingsComponent.prototype.deleteTraining = function (Id) {
        var _this = this;
        if (confirm("Czy jesteś pewien, że chcesz usunąć trening?")) {
            this.trainingService.deleteTraining(Id).subscribe(function () {
                _this.message = 'Pomyślnie usunięto trening.';
                _this.ngOnInit();
            });
        }
    };
    SectionTrainingsComponent.prototype.deleteTrainingSchedule = function (Id) {
        var _this = this;
        if (confirm("Czy jesteś pewien, że chcesz usunąć trening?")) {
            this.trainingService.deleteTrainingSchedule(Id).subscribe(function () {
                _this.message = 'Pomyślnie usunięto trening.';
                _this.ngOnInit();
            });
        }
    };
    SectionTrainingsComponent.prototype.applyFilter = function () {
        var _this = this;
        this.trainingEntriesAmount = 0;
        this.filteredtrainingEntries = this.trainingEntries;
        this.fromDate = this.filterForm.get('fromDate').value;
        this.toDate = this.filterForm.get('toDate').value;
        this.trainingId = this.filterForm.get('trainingId').value;
        this.httpService.get('https://localhost:8080/api/trainingEntries').subscribe(function (trainingEntriesData) {
            _this.trainingEntries = trainingEntriesData;
        });
        this.filteredtrainingEntries = this.trainingEntries.filter(function (p) { return new Date(p.entryRegistered).getTime() >= _this.fromDate.getTime() && new Date(p.entryRegistered).getTime() <= _this.toDate.getTime(); });
        if (this.trainingId != 0) {
            this.filteredtrainingEntries = this.trainingEntries.filter(function (p) { return new Date(p.entryRegistered).getTime() >= _this.fromDate.getTime() && new Date(p.entryRegistered).getTime() <= _this.toDate.getTime() && p.trainingId == _this.trainingId; });
        }
        for (var i = 0; i < this.filteredtrainingEntries.length; i++) {
            this.trainingEntriesAmount++;
        }
        for (var i = 0; i < this.trainings.length; i++) {
            var count = this.filteredtrainingEntries.filter(function (obj) { return obj.trainingId === _this.trainings[i]['id']; }).length;
            var trainingsAnalytics = [count, this.trainings[i]['name']];
        }
    };
    SectionTrainingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section-trainings',
            template: __webpack_require__(/*! ./section-trainings.component.html */ "./src/app/sections/section-trainings/section-trainings.component.html"),
            styles: [__webpack_require__(/*! ./section-trainings.component.css */ "./src/app/sections/section-trainings/section-trainings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"], _trainingentry_service__WEBPACK_IMPORTED_MODULE_4__["TrainingentryService"]])
    ], SectionTrainingsComponent);
    return SectionTrainingsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n*{\r\n \r\n}\r\n.nav-link {\r\n  background-color: #2b333e;\r\n  margin: 2px;\r\n  color: silver;\r\n  padding: 10px;\r\n  font-size: 20px;\r\n  margin-top: 10px;\r\n \r\n}\r\n.nav-link:hover {\r\n    background-color: #3c4858;\r\n    color:white;\r\n  }\r\nul {\r\n  margin-top:50px;\r\n  list-style-type: none;\r\n  width:100%;\r\n}\r\n.material-icons{\r\n  font-size:20px;\r\n  padding:2px;\r\n \r\n\r\n}\r\nh4{\r\n  margin:10px 0px 35px 0px;\r\n  color:#ffffff;\r\n}\r\n#locker-rooms {\r\n  margin: 10px 0px 20px 40px;\r\n  background-color: #2b333e;\r\n  border-radius: 5px;\r\n  border-bottom: 1px solid goldenrod;\r\n  padding: 20px;\r\n  padding-left: -10px; \r\n  overflow-x:hidden;\r\n  height: auto;\r\n  min-height: 200px;\r\n}\r\n#trainings {\r\n  margin: 10px 0px 20px 40px;\r\n  background-color: #2b333e;\r\n  border-radius: 5px;\r\n  border-bottom: 1px solid goldenrod;\r\n  padding: 20px;\r\n  padding-left: -10px;\r\n  \r\n}\r\n#locker-rooms h5{\r\n  color:darkgoldenrod;\r\n  margin-bottom:20px;\r\n  text-align:center;\r\n}\r\n#key {\r\n  font-size: 16px;\r\n  text-align: center;\r\n  color: Whitesmoke;\r\n  margin-right: 10px;\r\n  margin-left: 10px; \r\n}\r\n#key:hover {\r\n color:indianred;\r\n cursor:pointer;\r\n\r\n}\r\n.active-class{\r\n  background-color:#d9a420;\r\n  color:black;\r\n}\r\n.training-gym{\r\n  color:#bb7e7e;\r\n}\r\n.training-sw {\r\n  color: #beae87;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOztBQUVBO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjs7QUFFbEI7QUFDRTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7QUFFRjtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsVUFBVTtBQUNaO0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVzs7O0FBR2I7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7QUFDQTtFQUNFLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsY0FBYzs7QUFFZjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFdBQVc7QUFDYjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBR0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuKntcclxuIFxyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJiMzMzZTtcclxuICBtYXJnaW46IDJweDtcclxuICBjb2xvcjogc2lsdmVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiBcclxufVxyXG4gIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0ODU4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgfVxyXG5cclxudWwge1xyXG4gIG1hcmdpbi10b3A6NTBweDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4gXHJcbi5tYXRlcmlhbC1pY29uc3tcclxuICBmb250LXNpemU6MjBweDtcclxuICBwYWRkaW5nOjJweDtcclxuIFxyXG5cclxufVxyXG5oNHtcclxuICBtYXJnaW46MTBweCAwcHggMzVweCAwcHg7XHJcbiAgY29sb3I6I2ZmZmZmZjtcclxufVxyXG4jbG9ja2VyLXJvb21zIHtcclxuICBtYXJnaW46IDEwcHggMHB4IDIwcHggNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIzMzNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ29sZGVucm9kO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAtMTBweDsgXHJcbiAgb3ZlcmZsb3cteDpoaWRkZW47XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiN0cmFpbmluZ3Mge1xyXG4gIG1hcmdpbjogMTBweCAwcHggMjBweCA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYjMzM2U7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBnb2xkZW5yb2Q7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IC0xMHB4O1xyXG4gIFxyXG59XHJcbiNsb2NrZXItcm9vbXMgaDV7XHJcbiAgY29sb3I6ZGFya2dvbGRlbnJvZDtcclxuICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuI2tleSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogV2hpdGVzbW9rZTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG59XHJcbiNrZXk6aG92ZXIge1xyXG4gY29sb3I6aW5kaWFucmVkO1xyXG4gY3Vyc29yOnBvaW50ZXI7XHJcblxyXG59XHJcbi5hY3RpdmUtY2xhc3N7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZDlhNDIwO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4udHJhaW5pbmctZ3lte1xyXG4gIGNvbG9yOiNiYjdlN2U7XHJcbn1cclxuXHJcblxyXG4udHJhaW5pbmctc3cge1xyXG4gIGNvbG9yOiAjYmVhZTg3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"section-container\" style=\"padding-right:20px;\">\r\n\r\n  <ul class=\"nav-item nav-pills flex-columns\">\r\n\r\n\r\n    <li class=\"nav-item shadow\">\r\n      <a class=\"nav-link\" routerLink=\"/clients\" routerLinkActive=\"active-class\"><i class=\"material-icons\">  people</i> KLIENCI</a>\r\n    </li>\r\n    <li *ngIf=\"role== 'admin'\" class=\"nav-item shadow\" id=\"payments\">\r\n      <a class=\"nav-link\" routerLink=\"/payments\" routerLinkActive=\"active-class\"><i class=\"material-icons\">  payment</i> PŁATNOŚCI</a>\r\n    </li>\r\n    <li class=\"nav-item shadow\">\r\n      <a class=\"nav-link\" routerLink=\"/subscriptions\" routerLinkActive=\"active-class\"> <i class=\"material-icons\">  card_membership</i> KARNETY</a>\r\n    </li>\r\n    <li class=\"nav-item shadow\">\r\n      <a class=\"nav-link\" routerLink=\"/trainings\" routerLinkActive=\"active-class\"> <i class=\"material-icons\">  fitness_center</i>TRENINGI</a>\r\n    </li>\r\n\r\n\r\n  </ul>\r\n\r\n  <div id=\"locker-rooms\" class=\"nav-item shadow  \">\r\n    <h5>SZAFKI  <i id=\"refreshKeys\" class=\"material-icons\" style=\"color:#b8860b; background-color:white; border-radius:10px;\" (click)=\"getTrainingEntries()\">  refresh</i></h5>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"row\" *ngFor=\"let item of trainingEntries\">\r\n\r\n\r\n        <div   matTooltip=\"{{item.client.name}} {{item.client.surname}} {{item.client.phone}}\" class=\"col col-lg-2\" id=\"key\" (click)=\"returnLocker(item.id, item)\">{{item.locker}}</div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div style=\"text-align:center;\" id=\"trainings\" class=\"nav-item shadow  \">\r\n    <h5 style=\" color:#87681c;\"><i class=\"material-icons\">assignment</i> TRENINGI NA DZIŚ</h5>\r\n    \r\n    <mat-list class=\"trainings-list\">\r\n      <div  *ngFor=\"let row of trainingsSchedule \"> \r\n      <div *ngIf=\"row.day == dayName\" style=\"border-bottom:1px solid #515f73; margin-bottom:5px;\"  >\r\n\r\n        <span *ngIf=\"row.training.type == 'SIŁOWNIA'\" style=\"color:#bb7e7e;\"> {{row.training.name}} </span>\r\n        <span *ngIf=\"row.training.type == 'SPORTY WALKI'\" style=\"color:#beae87;\"> {{row.training.name}} </span>\r\n         \r\n\r\n        <span style=\"color:gray;\">{{row.hourStarts | slice:0:5}} </span>\r\n        \r\n\r\n      </div>\r\n      </div>\r\n    </mat-list>\r\n\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _training_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../training.service */ "./src/app/training.service.ts");
/* harmony import */ var _trainingentry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trainingentry.service */ "./src/app/trainingentry.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, httpService, trainingService, trainingentryService) {
        this.router = router;
        this.httpService = httpService;
        this.trainingService = trainingService;
        this.trainingentryService = trainingentryService;
        this.dateToday = new Date((new Date().getTime()));
        this.trainingEntries = [];
        this.trainingsSchedule = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var dayNumber = this.dateToday.getDay();
        switch (dayNumber) {
            case 0:
                this.dayName = "Niedziela";
                break;
            case 1:
                this.dayName = "Poniedziałek";
                break;
            case 2:
                this.dayName = "Wtorek";
                break;
            case 3:
                this.dayName = "Środa";
                break;
            case 4:
                this.dayName = "Czwartek";
                break;
            case 5:
                this.dayName = "Piątek";
                break;
            case 6:
                this.dayName = "Sobota";
                break;
        }
        this.getTrainingEntries();
        this.getTrainingsSchedule();
        if (this.currentUser != null) {
            this.role = this.currentUser.role;
        }
        this.trainingentryService.getTrainingEntries();
    };
    SidebarComponent.prototype.returnLocker = function (Id, trainingEntry) {
        var _this = this;
        this.trainingentryService.updateTrainingEntry(Id, trainingEntry).subscribe(function () {
            trainingEntry.lockerReturned = true;
            _this.ngOnInit();
        });
    };
    SidebarComponent.prototype.getTrainingEntries = function () {
        var _this = this;
        this.trainingentryService.getTrainingEntries().subscribe(function (v) {
            _this.trainingEntries = JSON.parse(v.toString());
            _this.trainingEntries = _this.trainingEntries.filter(function (v) { return v.lockerReturned === false; });
            _this.trainingEntries = _this.trainingEntries.filter(function (v) { return v.locker != null; });
        });
    };
    SidebarComponent.prototype.getTrainingsSchedule = function () {
        var _this = this;
        this.trainingService.getTrainingsSchedule().subscribe(function (data) {
            _this.trainingsSchedule = data;
            _this.message = 'Pomyślnie pobrano spis treningów.';
        });
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            providers: [_trainingentry_service__WEBPACK_IMPORTED_MODULE_4__["TrainingentryService"]],
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _training_service__WEBPACK_IMPORTED_MODULE_3__["TrainingService"], _trainingentry_service__WEBPACK_IMPORTED_MODULE_4__["TrainingentryService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/subscription.service.ts":
/*!*****************************************!*\
  !*** ./src/app/subscription.service.ts ***!
  \*****************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SubscriptionService = /** @class */ (function () {
    function SubscriptionService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/subscriptions/';
        this.group_url = 'http://localhost:8080/api/groups/';
    }
    SubscriptionService.prototype.getSubscriptions = function () {
        return this.http.get(this.url);
    };
    SubscriptionService.prototype.GetSubscriptionById = function (Id) {
        return this.http.get(this.url + Id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response.json(); }));
    };
    SubscriptionService.prototype.createSubscription = function (subscription) {
        return this.http.post(this.url, subscription, { responseType: 'text' });
    };
    SubscriptionService.prototype.deleteSubscription = function (Id) {
        return this.http.delete(this.url + Id);
    };
    SubscriptionService.prototype.getGroups = function () {
        return this.http.get(this.group_url);
    };
    SubscriptionService.prototype.createGroup = function (group) {
        return this.http.post(this.group_url, group, { responseType: 'text' });
    };
    SubscriptionService.prototype.deleteGroup = function (Id) {
        return this.http.delete(this.group_url + Id);
    };
    SubscriptionService.prototype.updateGroup = function (id, group) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put(this.group_url + id, JSON.stringify(group), httpOptions);
    };
    SubscriptionService.prototype.updateSubscription = function (id, subscription) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put(this.url + id, JSON.stringify(subscription), httpOptions);
    };
    SubscriptionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SubscriptionService);
    return SubscriptionService;
}());



/***/ }),

/***/ "./src/app/training.service.ts":
/*!*************************************!*\
  !*** ./src/app/training.service.ts ***!
  \*************************************/
/*! exports provided: TrainingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingService", function() { return TrainingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var TrainingService = /** @class */ (function () {
    function TrainingService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/api/trainings/';
        this.trainingSchedules_url = 'http://localhost:8080/api/trainingschedules/';
    }
    TrainingService.prototype.getTrainings = function () {
        return this.http.get(this.url);
    };
    TrainingService.prototype.createTraining = function (training) {
        return this.http.post(this.url, training, { responseType: 'text' });
    };
    TrainingService.prototype.deleteTraining = function (Id) {
        return this.http.delete(this.url + Id);
    };
    TrainingService.prototype.updateTraining = function (id, training) {
        var httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.put(this.url + id, JSON.stringify(training), httpOptions);
    };
    TrainingService.prototype.getTrainingsSchedule = function () {
        return this.http.get(this.trainingSchedules_url);
    };
    TrainingService.prototype.addTrainingToSchedule = function (trainingRow) {
        return this.http.post(this.trainingSchedules_url, trainingRow, { responseType: 'text' });
    };
    TrainingService.prototype.deleteTrainingSchedule = function (Id) {
        return this.http.delete(this.trainingSchedules_url + Id);
    };
    TrainingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrainingService);
    return TrainingService;
}());



/***/ }),

/***/ "./src/app/trainingentry.service.ts":
/*!******************************************!*\
  !*** ./src/app/trainingentry.service.ts ***!
  \******************************************/
/*! exports provided: TrainingentryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingentryService", function() { return TrainingentryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TrainingentryService = /** @class */ (function () {
    function TrainingentryService(http) {
        this.http = http;
        this.trainingEntries = [];
        this.url = 'http://localhost:8080/api/trainingentries/';
    }
    TrainingentryService.prototype.getTrainingEntries = function () {
        return this.http.get(this.url, { responseType: 'text' });
    };
    TrainingentryService.prototype.addTrainingEntry = function (trainingEntry) {
        return this.http.post(this.url, trainingEntry, { responseType: 'text' });
    };
    TrainingentryService.prototype.updateTrainingEntry = function (id, trainingEntry) {
        console.log(id);
        console.log(trainingEntry);
        trainingEntry.lockerReturned = true;
        return this.http.put(this.url + id, trainingEntry, { responseType: 'text' });
    };
    TrainingentryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TrainingentryService);
    return TrainingentryService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: appRoutes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_sections_section_clients_section_clients_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/sections/section-clients/section-clients.component */ "./src/app/sections/section-clients/section-clients.component.ts");
/* harmony import */ var _app_sections_section_trainings_section_trainings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/sections/section-trainings/section-trainings.component */ "./src/app/sections/section-trainings/section-trainings.component.ts");
/* harmony import */ var _app_sections_section_subscriptions_section_subscriptions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/sections/section-subscriptions/section-subscriptions.component */ "./src/app/sections/section-subscriptions/section-subscriptions.component.ts");
/* harmony import */ var _app_sections_section_add_client_section_add_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/sections/section-add-client/section-add-client.component */ "./src/app/sections/section-add-client/section-add-client.component.ts");
/* harmony import */ var _app_sections_section_add_subscription_section_add_subscription_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/sections/section-add-subscription/section-add-subscription.component */ "./src/app/sections/section-add-subscription/section-add-subscription.component.ts");
/* harmony import */ var _app_sections_section_accept_payment_section_accept_payment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app/sections/section-accept-payment/section-accept-payment.component */ "./src/app/sections/section-accept-payment/section-accept-payment.component.ts");
/* harmony import */ var _app_sections_section_payments_section_payments_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/sections/section-payments/section-payments.component */ "./src/app/sections/section-payments/section-payments.component.ts");
/* harmony import */ var _app_sections_section_add_training_entry_section_add_training_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app/sections/section-add-training-entry/section-add-training-entry.component */ "./src/app/sections/section-add-training-entry/section-add-training-entry.component.ts");
/* harmony import */ var _app_login_2_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app/login (2)/login.component */ "./src/app/login (2)/login.component.ts");










var appRoutes = [
    { path: 'clients', component: _app_sections_section_clients_section_clients_component__WEBPACK_IMPORTED_MODULE_1__["SectionClientsComponent"] },
    { path: 'trainings', component: _app_sections_section_trainings_section_trainings_component__WEBPACK_IMPORTED_MODULE_2__["SectionTrainingsComponent"] },
    { path: 'subscriptions', component: _app_sections_section_subscriptions_section_subscriptions_component__WEBPACK_IMPORTED_MODULE_3__["SectionSubscriptionsComponent"] },
    { path: 'payments', component: _app_sections_section_payments_section_payments_component__WEBPACK_IMPORTED_MODULE_7__["SectionPaymentsComponent"] },
    { path: 'add-client', component: _app_sections_section_add_client_section_add_client_component__WEBPACK_IMPORTED_MODULE_4__["SectionAddClientComponent"] },
    { path: 'add-subscription', component: _app_sections_section_add_subscription_section_add_subscription_component__WEBPACK_IMPORTED_MODULE_5__["SectionAddSubscriptionComponent"] },
    { path: 'add-training-entry', component: _app_sections_section_add_training_entry_section_add_training_entry_component__WEBPACK_IMPORTED_MODULE_8__["SectionAddTrainingEntryComponent"] },
    { path: 'accept-payment', component: _app_sections_section_accept_payment_section_accept_payment_component__WEBPACK_IMPORTED_MODULE_6__["SectionAcceptPaymentComponent"] },
    { path: 'login', component: _app_login_2_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SportCenter\AuctorAPI\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map