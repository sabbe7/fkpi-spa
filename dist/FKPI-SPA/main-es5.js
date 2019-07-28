(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loggedIn()\">\n  <app-header></app-header>\n  <div class=\"app-body\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<div *ngIf=\"!loggedIn()\" class=\"login-wrapper\">\n  <div class=\"login-column\" style=\"background-image: url(/assets/login.png)\">\n  </div>\n  <div class=\"login-column\">\n    <div class=\"jumbotron login-message\">\n        <h1 class=\"display-4\">VAO</h1>\n        <p class=\"lead\">Easily manage your financial KPIs</p>\n    </div>\n    <app-login></app-login>\n  </div>\n</div>\n\n<!--<app-footer></app-footer>-->"

/***/ }),

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'FKPI-SPA';
    }
    AppComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.component */ "./src/app/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _kpi_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kpi-edit.component */ "./src/app/kpi-edit.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared */ "./src/app/shared.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _kpi_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kpi-list.component */ "./src/app/kpi-list.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _delete_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./delete-confirmation.component */ "./src/app/delete-confirmation.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _kpi_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./kpi-chart.component */ "./src/app/kpi-chart.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm5/highcharts-angular.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





















function tokenGetter() {
    return localStorage.getItem("token");
}
var AppModule = /** @class */ (function () {
    function AppModule(injector) {
        this.injector = injector;
        _shared__WEBPACK_IMPORTED_MODULE_11__["Shared"].injector = injector;
    }
    AppModule.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _kpi_edit_component__WEBPACK_IMPORTED_MODULE_9__["KPIEditComponent"],
                _kpi_list_component__WEBPACK_IMPORTED_MODULE_13__["KPIListComponent"],
                _kpi_chart_component__WEBPACK_IMPORTED_MODULE_17__["KPIChartComponent"],
                _delete_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["DeleteConfirmationDialog"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__["JwtModule"].forRoot({
                    config: {
                        tokenGetter: tokenGetter,
                        whitelistedDomains: ["localhost:5000"],
                    }
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_7__["AppRoutesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_10__["DxTreeViewModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                highcharts_angular__WEBPACK_IMPORTED_MODULE_18__["HighchartsChartModule"],
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_19__["ContextMenuModule"].forRoot()
            ],
            entryComponents: [
                _delete_confirmation_component__WEBPACK_IMPORTED_MODULE_15__["DeleteConfirmationDialog"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _kpi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kpi-list.component */ "./src/app/kpi-list.component.ts");
/* harmony import */ var _kpi_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kpi-edit.component */ "./src/app/kpi-edit.component.ts");
/* harmony import */ var _kpi_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kpi-chart.component */ "./src/app/kpi-chart.component.ts");






var appRoutes = [
    {
        path: '',
        component: _kpi_list_component__WEBPACK_IMPORTED_MODULE_3__["KPIListComponent"]
    },
    {
        path: 'kpi-edit',
        component: _kpi_edit_component__WEBPACK_IMPORTED_MODULE_4__["KPIEditComponent"]
    },
    {
        path: 'kpi-edit/:id',
        component: _kpi_edit_component__WEBPACK_IMPORTED_MODULE_4__["KPIEditComponent"],
    },
    {
        path: 'kpi-chart/:id',
        component: _kpi_chart_component__WEBPACK_IMPORTED_MODULE_5__["KPIChartComponent"],
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/',
        pathMatch: 'full'
    }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/delete-confirmation.component.ts":
/*!**************************************************!*\
  !*** ./src/app/delete-confirmation.component.ts ***!
  \**************************************************/
/*! exports provided: DeleteConfirmationDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteConfirmationDialog", function() { return DeleteConfirmationDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var DeleteConfirmationDialog = /** @class */ (function () {
    function DeleteConfirmationDialog(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DeleteConfirmationDialog.prototype.confirmDelete = function () {
        this.dialogRef.close(true);
    };
    DeleteConfirmationDialog.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    DeleteConfirmationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n    <h2 mat-dialog-title>Delete confirmation</h2>\n      <mat-dialog-content>\n          <div class=\"form-group\">\n              <label>Are you sure you want to delete the selected record?</label>\n          </div>\n      </mat-dialog-content>\n      <mat-dialog-actions class=\"dialog-actions\">\n          <button class=\"btn btn-secondary dialog-button\" mat-dialog-close>Cancel</button>\n          <button class=\"btn btn-danger dialog-button\" (click)=\"confirmDelete()\" >Yes</button>\n      </mat-dialog-actions>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DeleteConfirmationDialog);
    return DeleteConfirmationDialog;
}());



/***/ }),

/***/ "./src/app/header.component.ts":
/*!*************************************!*\
  !*** ./src/app/header.component.ts ***!
  \*************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.user = this.authService.getLoggedInUser().unique_name;
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('logged out');
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: "\n    \n  <nav class=\"navbar navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"/\">Financial KPI</a>\n    <div class=\"navbar-expand mr-auto\">\n    </div>    \n\n    <div class=\"dropdown\">\n        <a class=\"btn btn-secondary dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n            Welcome {{user | titlecase}}\n        </a>\n\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a>\n        </div>\n    </div>\n\n  </nav>\n\n\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/kpi-chart.component.ts":
/*!****************************************!*\
  !*** ./src/app/kpi-chart.component.ts ***!
  \****************************************/
/*! exports provided: KPIChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KPIChartComponent", function() { return KPIChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kpi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/kpi.service */ "./src/app/services/kpi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_5__);






var KPIChartComponent = /** @class */ (function () {
    function KPIChartComponent(kpiService, router, route) {
        this.kpiService = kpiService;
        this.router = router;
        this.route = route;
        this.chart = highcharts__WEBPACK_IMPORTED_MODULE_4__;
        this.formatter = function () {
            return '<b>' + numeral__WEBPACK_IMPORTED_MODULE_5__(this.y).format('0a') + '</b>';
        };
        this.chartOptions = {
            chart: {
                type: 'line'
            },
            series: [{
                    data: [0],
                    type: 'line'
                }],
            xAxis: {
                categories: ["0"]
            },
            legend: {
                enabled: false
            },
            tooltip: {
                formatter: this.formatter
            }
        };
    }
    KPIChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.kpiService.evaluate(params.id).subscribe(function (kpi) {
                    _this.kpi = kpi;
                    // after getting the KPI list, create the chart instance
                    var div = document.createElement("div");
                    _this.container.nativeElement.appendChild(div);
                    if (!!_this.chartOptions.chart) {
                        _this.chartOptions.chart['renderTo'] = div;
                    }
                    else {
                        _this.chartOptions.chart = {
                            'renderTo': div
                        };
                    }
                    var chart = new highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"](_this.chartOptions);
                    _this.configureChart(chart);
                });
            }
        });
    };
    /**
     * configure chart instance by extracting the x-axis (year) and y-axis (value) data from KPI list
     * @param chart: chart instance to be configured
     */
    KPIChartComponent.prototype.configureChart = function (chart) {
        if (this.kpi) {
            var title = {
                text: this.kpi.name + ' Chart Results'
            };
            var options = {
                series: [{
                        data: this.kpi.values.map(function (x) { return x.value; }),
                        type: 'line',
                    }],
                xAxis: {
                    categories: this.kpi.values.map(function (x) { return x.year; }),
                },
            };
            chart.title.update(title, true);
            chart.update(options, true);
        }
    };
    KPIChartComponent.prototype.close = function () {
        this.router.navigate(['/kpi-list']);
    };
    KPIChartComponent.ctorParameters = function () { return [
        { type: _services_kpi_service__WEBPACK_IMPORTED_MODULE_2__["KPIService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], KPIChartComponent.prototype, "container", void 0);
    KPIChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kpi-chart',
            template: "\n    \n    <div class=\"container-fluid\" #container>            \n    </div>\n    <div *ngIf=\"kpi\" class=\"chart-action\">\n        <button type=\"button\" class=\"btn btn-danger btn-lg close-action\" (click)=\"close()\">Close</button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kpi_service__WEBPACK_IMPORTED_MODULE_2__["KPIService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], KPIChartComponent);
    return KPIChartComponent;
}());



/***/ }),

/***/ "./src/app/kpi-edit.component.ts":
/*!***************************************!*\
  !*** ./src/app/kpi-edit.component.ts ***!
  \***************************************/
/*! exports provided: KPIEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KPIEditComponent", function() { return KPIEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_kpi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/kpi.service */ "./src/app/services/kpi.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");









var KPIEditComponent = /** @class */ (function () {
    function KPIEditComponent(accountService, kpiService, alertify, router, route, viewportRuler) {
        var _this = this;
        this.accountService = accountService;
        this.kpiService = kpiService;
        this.alertify = alertify;
        this.router = router;
        this.route = route;
        this.viewportRuler = viewportRuler;
        this.items = [];
        this.submitValid = false;
        this.dropListEnterPredicate = function (drag, drop) {
            if (drop == _this.placeholder)
                return true;
            if (drop != _this.activeContainer)
                return false;
            var phElement = _this.placeholder.element.nativeElement;
            var sourceElement = drag.dropContainer.element.nativeElement;
            var dropElement = drop.element.nativeElement;
            var dragIndex = __indexOf(dropElement.parentElement.children, (_this.source ? phElement : sourceElement));
            var dropIndex = __indexOf(dropElement.parentElement.children, dropElement);
            if (!_this.source) {
                _this.sourceIndex = dragIndex;
                _this.source = drag.dropContainer;
                phElement.style.width = sourceElement.clientWidth + 'px';
                phElement.style.height = sourceElement.clientHeight + 'px';
                sourceElement.parentElement.removeChild(sourceElement);
            }
            _this.targetIndex = dropIndex;
            _this.target = drop;
            phElement.style.display = '';
            dropElement.parentElement.insertBefore(phElement, (dropIndex > dragIndex
                ? dropElement.nextSibling : dropElement));
            _this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
            return false;
        };
        this.createChildren = function (parent) {
            var parentId = parent ? parent.itemData.id : "";
            return _this.accountService.children(parentId).toPromise();
        };
        this.target = null;
        this.source = null;
    }
    KPIEditComponent.prototype.ngAfterViewInit = function () {
        var phElement = this.placeholder.element.nativeElement;
        phElement.style.display = 'none';
        phElement.parentElement.removeChild(phElement);
    };
    KPIEditComponent.prototype.dropInList = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.items, event.previousIndex, event.currentIndex);
    };
    KPIEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params.id) {
                _this.kpiService.find(params.id).subscribe(function (item) {
                    _this.modelId = params.id;
                    _this.name = item.name;
                    _this.items = item.tokens;
                });
            }
        });
    };
    KPIEditComponent.prototype.save = function () {
        var _this = this;
        if (!this.name) {
            this.alertify.warning('KPI must have a name');
            return;
        }
        var model = {
            kpiId: this.modelId,
            name: this.name,
            formula: this.items.map(function (x) { return _this.isOperator(x.name) ? x.name : x.id; }).join(';')
        };
        if (this.modelId) {
            this.kpiService.update(model).subscribe(function (x) {
                _this.alertify.success('KPI updated successfully');
                _this.router.navigate(['/kpi-list']);
            }, function (error) {
                _this.alertify.error('Error updating KPI, please contact support');
            });
        }
        else {
            this.kpiService.add(model).subscribe(function (x) {
                _this.alertify.success('KPI added successfully');
                _this.router.navigate(['/kpi-list']);
            }, function (error) {
                _this.alertify.error('Error saving KPI, please contact support');
            });
        }
    };
    KPIEditComponent.prototype.nameChanged = function () {
        this.submitValid = this.validateSubmit();
    };
    KPIEditComponent.prototype.cancel = function () {
        this.router.navigate(['/kpi-list']);
    };
    KPIEditComponent.prototype.drag = function (event) {
        var div = event.target;
        var token = {
            'name': div.innerText.trim(),
            'id': this.isOperator(div.innerText.trim()) ? this.generateId() : div.id
        };
        event.dataTransfer.setData("token", JSON.stringify(token));
    };
    KPIEditComponent.prototype.formulaDrag = function (event) {
        var div = event.target;
        var token = {
            'name': div.innerText.trim(),
            'id': div.id
        };
        event.dataTransfer.setData("token", JSON.stringify(token));
    };
    KPIEditComponent.prototype.deleteToken = function (event) {
        this.items = this.items.filter(function (x) { return x.id !== event.id; });
        this.submitValid = this.validateSubmit();
    };
    KPIEditComponent.prototype.drop = function (event) {
        event.preventDefault();
        var data = JSON.parse(event.dataTransfer.getData("token"));
        if (this.validateFormula(data)) {
            this.items.push(data);
        }
        else {
            this.alertify.warning('Invalid formula, try again!');
        }
        this.submitValid = this.validateSubmit();
    };
    KPIEditComponent.prototype.validateSubmit = function () {
        // Invalid formula if we have less than 3 items
        if (this.items.length < 3) {
            return false;
        }
        // first and last items cannot be operators
        if (this.isOperator(this.items[0].name) || this.isOperator(this.items[this.items.length - 1].name)) {
            return false;
        }
        // even-indexed items must be accounts and odd-indexed items must be operators
        for (var i = 1; i < this.items.length - 1; i++) {
            var isOperator = this.isOperator(this.items[i].name);
            if (i % 2 === 0 && isOperator || i % 2 !== 0 && !isOperator) {
                return false;
            }
        }
        return true;
    };
    /**
     * validate drag operation, consecutive items cannot be of same type
     * @param data: token being dragged to formula area
     */
    KPIEditComponent.prototype.validateFormula = function (data) {
        if (this.items.length == 0 && this.isOperator(data.name)) {
            return false;
        }
        if (this.items.length == 0 && !this.isOperator(data.name)) {
            return true;
        }
        else {
            var lastItem = this.items[this.items.length - 1].name;
            if (this.isOperator(data.name) && this.isOperator(lastItem)) {
                return false;
            }
            if (!this.isOperator(data.name) && !this.isOperator(lastItem)) {
                return false;
            }
            return true;
        }
    };
    KPIEditComponent.prototype.allowDrop = function (event) {
        event.preventDefault();
    };
    KPIEditComponent.prototype.isOperator = function (token) {
        return ['+', '-', '*', '/'].includes(token);
    };
    KPIEditComponent.prototype.generateId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    KPIEditComponent.prototype.dragMoved = function (e) {
        var _this = this;
        var point = this.getPointerPositionOnPage(e.event);
        this.listGroup._items.forEach(function (dropList) {
            if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
                _this.activeContainer = dropList;
                return;
            }
        });
    };
    KPIEditComponent.prototype.dropListDropped = function () {
        if (!this.target)
            return;
        var phElement = this.placeholder.element.nativeElement;
        var parent = phElement.parentElement;
        phElement.style.display = 'none';
        parent.removeChild(phElement);
        parent.appendChild(phElement);
        parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);
        this.target = null;
        this.source = null;
        if (this.sourceIndex != this.targetIndex)
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.items, this.sourceIndex, this.targetIndex);
        this.submitValid = this.validateSubmit();
    };
    /** Determines the point of the page that was touched by the user. */
    KPIEditComponent.prototype.getPointerPositionOnPage = function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        var point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        var scrollPosition = this.viewportRuler.getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    };
    KPIEditComponent.ctorParameters = function () { return [
        { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] },
        { type: _services_kpi_service__WEBPACK_IMPORTED_MODULE_3__["KPIService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropListGroup"])
    ], KPIEditComponent.prototype, "listGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["CdkDropList"])
    ], KPIEditComponent.prototype, "placeholder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__["ContextMenuComponent"], { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__["ContextMenuComponent"])
    ], KPIEditComponent.prototype, "deleteMenu", void 0);
    KPIEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kpi-editor',
            template: "            \n\n    <div class=\"container-fluid\">\n    <div class=\"name\">\n        <input #nameInput=\"ngModel\" (change)=\"nameChanged()\" class=\"form-control form-control-lg\" type=\"text\" [(ngModel)]=\"name\"\n            placeholder=\"KPI Name\" required>\n        <div class=\"validation-error\" *ngIf=\"nameInput.dirty\">\n            <span *ngIf=\"nameInput.errors?.required\">Name is required</span>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    Financial Accounts\n                </div>\n                <div class=\"card-body\">\n                    <dx-tree-view [createChildren]=\"createChildren\" dataStructure=\"plain\" rootValue=\"\"\n                        itemTemplate=\"itemTemplate\">\n                        <div *dxTemplate=\"let itemObj of 'itemTemplate'\">\n                            <div draggable=\"true\" (dragstart)=\"drag($event)\" id=\"{{itemObj.id}}\">\n                                <i class=\"fa fa-credit-card\"></i> {{itemObj.text}}\n                            </div>\n                        </div>\n                    </dx-tree-view>\n                </div>\n            </div>\n            <div class=\"card\" style=\"margin-top:10px;\">\n                <div class=\"card-header\">\n                    Operators\n                </div>\n                <div class=\"card-body card-operators\">\n                    <span class=\"operator\" draggable=\"true\" id=\"+\" (dragstart)=\"drag($event)\">\n                        +\n                    </span>\n                    <span class=\"operator\" draggable=\"true\" id=\"-\" (dragstart)=\"drag($event)\">\n                        -\n                    </span>\n                    <span class=\"operator\" draggable=\"true\" id=\"*\" (dragstart)=\"drag($event)\">\n                        *\n                    </span>\n                    <span class=\"operator\" draggable=\"true\" id=\"/\" (dragstart)=\"drag($event)\">\n                        /\n                    </span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-md-8\">\n            <div class=\"card card-formula\">\n                <div class=\"card-header\">\n                    KPI Formula Definition\n                </div>\n                <div class=\"card-body drop-container\">\n                    <div>\n                        <div class=\"drop\" (drop)=\"drop($event)\" (dragover)=\"allowDrop($event)\" cdkDropListGroup #dropListGorup>\n                            <div cdkDropList [cdkDropListEnterPredicate]=\"dropListEnterPredicate\" (cdkDropListDropped)=\"dropListDropped($event)\"></div>\n                            <div cdkDropList *ngFor=\"let item of items\" [contextMenu]=\"deleteMenu\" [contextMenuSubject]=\"item\"\n                                [cdkDropListEnterPredicate]=\"dropListEnterPredicate\" (cdkDropListDropped)=\"dropListDropped($event)\">\n                            <div cdkDrag class=\"token\" draggable=\"true\" (dragstart)=\"formulaDrag($event)\" [class.operator]=\"isOperator(item.name)\" \n                                (cdkDragMoved)=\"dragMoved($event);\">{{item.name}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-footer text-right\">\n                    <input type=\"button\" value=\"Cancel\" class=\"btn btn-secondary cancel\" (click)=\"cancel()\" />\n                    <input type=\"button\" value=\"Save\" [disabled]=\"!submitValid\" class=\"btn btn-primary\"\n                        (click)=\"save()\" />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>    \n\n<context-menu>\n  <ng-template class=\"dropdown-menu\" contextMenuItem (execute)=\"deleteToken($event.item)\">\n    Delete\n  </ng-template>  \n</context-menu>\n    \n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
            _services_kpi_service__WEBPACK_IMPORTED_MODULE_3__["KPIService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]])
    ], KPIEditComponent);
    return KPIEditComponent;
}());

function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
}
;
/** Determines whether an event is a touch event. */
function __isTouchEvent(event) {
    return event.type.startsWith('touch');
}
function __isInsideDropListClientRect(dropList, x, y) {
    var _a = dropList.element.nativeElement.getBoundingClientRect(), top = _a.top, bottom = _a.bottom, left = _a.left, right = _a.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}


/***/ }),

/***/ "./src/app/kpi-list.component.ts":
/*!***************************************!*\
  !*** ./src/app/kpi-list.component.ts ***!
  \***************************************/
/*! exports provided: KPIListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KPIListComponent", function() { return KPIListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_kpi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/kpi.service */ "./src/app/services/kpi.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _delete_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-confirmation.component */ "./src/app/delete-confirmation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");







var KPIListComponent = /** @class */ (function () {
    function KPIListComponent(kpiService, dialog, router, alertify) {
        this.kpiService = kpiService;
        this.dialog = dialog;
        this.router = router;
        this.alertify = alertify;
        this.kpis = [];
    }
    KPIListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.kpiService.get().subscribe(function (x) {
            _this.kpis = x;
        });
    };
    KPIListComponent.prototype.delete = function (kpiId) {
        var _this = this;
        this.dialog.open(_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["DeleteConfirmationDialog"], {
            width: '500px',
        }).afterClosed().subscribe(function (result) {
            if (result === true) {
                _this.kpiService.delete(kpiId).subscribe(function (x) {
                    _this.alertify.success('KPI deleted successfully');
                    _this.removeItem(kpiId);
                }, function (error) {
                    _this.alertify.error('Error deleting KPI, please contact support');
                });
            }
        });
    };
    KPIListComponent.prototype.removeItem = function (id) {
        this.kpis = this.kpis.filter(function (x) { return x.kpiId !== id; });
    };
    KPIListComponent.prototype.navigateNew = function () {
        this.router.navigate(['/kpi-edit']);
    };
    KPIListComponent.ctorParameters = function () { return [
        { type: _services_kpi_service__WEBPACK_IMPORTED_MODULE_2__["KPIService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
    ]; };
    KPIListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kpi-list',
            template: "\n    \n<div class=\"container-fluid\">\n  <div class=\"new-action\">\n    <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"navigateNew()\">Create New KPI</button>\n  </div>\n  <table class=\"table table-striped table-bordered grid\">\n    <thead class=\"thead-light\">\n        <th>KPI Name</th>\n        <th width=\"200\"></th>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let kpi of kpis\">\n            <td>{{kpi.name}}</td>\n            <td class=\"text-right\">\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-display=\"static\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"fas fa-location-arrow action-menu\"></i>Action\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-lg-right\">\n                        <a class=\"dropdown-item normal-menu\" [routerLink]=\"['/kpi-chart', kpi.kpiId]\">\n                            <i class=\"fa fa-chart-line\"></i> View Chart\n                        </a>\n                        <a class=\"dropdown-item normal-menu\" [routerLink]=\"['/kpi-edit', kpi.kpiId]\">\n                            <i class=\"fa fa-edit\"></i> Edit\n                        </a>\n                        <a class=\"dropdown-item danger-menu\" (click)=\"delete(kpi.kpiId)\">\n                            <i class=\"far fa-trash-alt\"></i> Delete\n                        </a>\n                    </div>\n                </div>            \n            </td>            \n        </tr>\n    </tbody>\n  </table>\n</div>\n\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kpi_service__WEBPACK_IMPORTED_MODULE_2__["KPIService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]])
    ], KPIListComponent);
    return KPIListComponent;
}());



/***/ }),

/***/ "./src/app/login.component.ts":
/*!************************************!*\
  !*** ./src/app/login.component.ts ***!
  \************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    LoginComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (next) {
            _this.alertify.success('Logged in successfully');
            _this.router.navigate(['/']);
        }, function (error) {
            _this.alertify.error('Invalid username/password!');
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: "\n    \n    <form #loginForm=\"ngForm\" class=\"text-center\" (ngSubmit)=\"login()\">\n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"text\" name=\"username\" placeholder=\"Username\" required [(ngModel)]=\"model.username\">\n      </div>      \n      <div class=\"form-group\">\n        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"Password\" required [(ngModel)]=\"model.password\">\n      </div>\n      <button [disabled]=\"!loginForm.valid\" class=\"btn btn-primary btn-block\" type=\"submit\">Login</button>\n    </form>\n\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var AccountService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AccountService, _super);
    function AccountService() {
        return _super.call(this, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'account') || this;
    }
    AccountService.prototype.get = function () {
        return this.http.get(this.baseUrl);
    };
    AccountService.prototype.children = function (id) {
        return this.http.get(this.joinUrl('children?id=' + id));
    };
    AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AccountService);
    return AccountService;
}(_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]));



/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
        alertify.set('notifier', 'position', 'bottom-right');
    }
    AlertifyService.prototype.confirm = function (message, okCallBack) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallBack();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                _this.decodedToken = _this.jwtHelper.decodeToken(user.token);
            }
        }));
    };
    AuthService.prototype.getLoggedInUser = function () {
        var token = localStorage.getItem('token');
        return this.jwtHelper.decodeToken(token);
    };
    AuthService.prototype.register = function (model) {
        return this.http.post(this.baseUrl + 'register', model);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





var HttpService = /** @class */ (function () {
    function HttpService(baseUrl) {
        if (baseUrl === void 0) { baseUrl = ''; }
        this.http = _shared__WEBPACK_IMPORTED_MODULE_3__["Shared"].injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]);
        this.local = _shared__WEBPACK_IMPORTED_MODULE_3__["Shared"].injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]);
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.baseUrl = baseUrl;
    }
    HttpService.prototype.joinUrl = function (url) {
        if (/^http(s)*:\/\//.test(url)) {
            return url;
        }
        return this.baseUrl + '/' + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["trim"])(url, '/');
    };
    HttpService.ctorParameters = function () { return [
        { type: String }
    ]; };
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/kpi.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/kpi.service.ts ***!
  \*****************************************/
/*! exports provided: KPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KPIService", function() { return KPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var KPIService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](KPIService, _super);
    function KPIService() {
        return _super.call(this, src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'kpi') || this;
    }
    KPIService.prototype.get = function () {
        return this.http.get(this.joinUrl('get'));
    };
    KPIService.prototype.find = function (id) {
        return this.http.get(this.joinUrl('find?id=' + id));
    };
    KPIService.prototype.add = function (kpi) {
        return this.http.post(this.joinUrl('add'), kpi);
    };
    KPIService.prototype.update = function (kpi) {
        return this.http.post(this.joinUrl('update'), kpi);
    };
    KPIService.prototype.delete = function (id) {
        return this.http.delete(this.joinUrl('delete?id=' + id));
    };
    KPIService.prototype.evaluate = function (id) {
        return this.http.get(this.joinUrl('evaluate?id=' + id));
    };
    KPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KPIService);
    return KPIService;
}(_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]));



/***/ }),

/***/ "./src/app/shared.ts":
/*!***************************!*\
  !*** ./src/app/shared.ts ***!
  \***************************/
/*! exports provided: Shared */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shared", function() { return Shared; });
var Shared = /** @class */ (function () {
    function Shared() {
    }
    return Shared;
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
    production: false,
    apiUrl: 'http://localhost:5000/api/'
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

module.exports = __webpack_require__(/*! C:\Users\Hussein\projects\FinancialKPI\FKPI-SPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map