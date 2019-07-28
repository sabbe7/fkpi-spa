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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



let AppComponent = class AppComponent {
    constructor(authService) {
        this.authService = authService;
        this.title = 'FKPI-SPA';
    }
    loggedIn() {
        return this.authService.loggedIn();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
], AppComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.component */ "./src/app/header.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.component */ "./src/app/login.component.ts");
/* harmony import */ var _kpi_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kpi-edit.component */ "./src/app/kpi-edit.component.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/index.js");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(devextreme_angular__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared */ "./src/app/shared.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _kpi_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./kpi-list.component */ "./src/app/kpi-list.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _delete_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./delete-confirmation.component */ "./src/app/delete-confirmation.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _kpi_chart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./kpi-chart.component */ "./src/app/kpi-chart.component.ts");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm2015/ngx-contextmenu.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





















function tokenGetter() {
    return localStorage.getItem("token");
}
let AppModule = class AppModule {
    constructor(injector) {
        this.injector = injector;
        _shared__WEBPACK_IMPORTED_MODULE_11__["Shared"].injector = injector;
    }
};
AppModule.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _kpi_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kpi-list.component */ "./src/app/kpi-list.component.ts");
/* harmony import */ var _kpi_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kpi-edit.component */ "./src/app/kpi-edit.component.ts");
/* harmony import */ var _kpi_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kpi-chart.component */ "./src/app/kpi-chart.component.ts");






const appRoutes = [
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
let AppRoutesModule = class AppRoutesModule {
};
AppRoutesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], AppRoutesModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DeleteConfirmationDialog = class DeleteConfirmationDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    confirmDelete() {
        this.dialogRef.close(true);
    }
};
DeleteConfirmationDialog.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
DeleteConfirmationDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: `
    <h2 mat-dialog-title>Delete confirmation</h2>
      <mat-dialog-content>
          <div class="form-group">
              <label>Are you sure you want to delete the selected record?</label>
          </div>
      </mat-dialog-content>
      <mat-dialog-actions class="dialog-actions">
          <button class="btn btn-secondary dialog-button" mat-dialog-close>Cancel</button>
          <button class="btn btn-danger dialog-button" (click)="confirmDelete()" >Yes</button>
      </mat-dialog-actions>
    `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], DeleteConfirmationDialog);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(authService, alertify) {
        this.authService = authService;
        this.alertify = alertify;
    }
    ngOnInit() {
        this.user = this.authService.getLoggedInUser().unique_name;
    }
    logout() {
        localStorage.removeItem('token');
        this.alertify.message('logged out');
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: `
    
  <nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Financial KPI</a>
    <div class="navbar-expand mr-auto">
    </div>    

    <div class="dropdown">
        <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Welcome {{user | titlecase}}
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a class="dropdown-item" href="#" (click)="logout()"><i class="fa fa-sign-out"></i> Logout</a>
        </div>
    </div>

  </nav>


  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"]])
], HeaderComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_kpi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/kpi.service */ "./src/app/services/kpi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! numeral */ "./node_modules/numeral/numeral.js");
/* harmony import */ var numeral__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(numeral__WEBPACK_IMPORTED_MODULE_5__);






let KPIChartComponent = class KPIChartComponent {
    constructor(kpiService, router, route) {
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
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.kpiService.evaluate(params.id).subscribe((kpi) => {
                    this.kpi = kpi;
                    // after getting the KPI list, create the chart instance
                    let div = document.createElement("div");
                    this.container.nativeElement.appendChild(div);
                    if (!!this.chartOptions.chart) {
                        this.chartOptions.chart['renderTo'] = div;
                    }
                    else {
                        this.chartOptions.chart = {
                            'renderTo': div
                        };
                    }
                    let chart = new highcharts__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.chartOptions);
                    this.configureChart(chart);
                });
            }
        });
    }
    /**
     * configure chart instance by extracting the x-axis (year) and y-axis (value) data from KPI list
     * @param chart: chart instance to be configured
     */
    configureChart(chart) {
        if (this.kpi) {
            let title = {
                text: this.kpi.name + ' Chart Results'
            };
            let options = {
                series: [{
                        data: this.kpi.values.map(x => x.value),
                        type: 'line',
                    }],
                xAxis: {
                    categories: this.kpi.values.map(x => x.year),
                },
            };
            chart.title.update(title, true);
            chart.update(options, true);
        }
    }
    close() {
        this.router.navigate(['/kpi-list']);
    }
};
KPIChartComponent.ctorParameters = () => [
    { type: _services_kpi_service__WEBPACK_IMPORTED_MODULE_2__["KPIService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], KPIChartComponent.prototype, "container", void 0);
KPIChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kpi-chart',
        template: `
    
    <div class="container-fluid" #container>            
    </div>
    <div *ngIf="kpi" class="chart-action">
        <button type="button" class="btn btn-danger btn-lg close-action" (click)="close()">Close</button>
    </div>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kpi_service__WEBPACK_IMPORTED_MODULE_2__["KPIService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
], KPIChartComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _services_kpi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/kpi.service */ "./src/app/services/kpi.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm2015/ngx-contextmenu.js");









let KPIEditComponent = class KPIEditComponent {
    constructor(accountService, kpiService, alertify, router, route, viewportRuler) {
        this.accountService = accountService;
        this.kpiService = kpiService;
        this.alertify = alertify;
        this.router = router;
        this.route = route;
        this.viewportRuler = viewportRuler;
        this.items = [];
        this.submitValid = false;
        this.dropListEnterPredicate = (drag, drop) => {
            if (drop == this.placeholder)
                return true;
            if (drop != this.activeContainer)
                return false;
            let phElement = this.placeholder.element.nativeElement;
            let sourceElement = drag.dropContainer.element.nativeElement;
            let dropElement = drop.element.nativeElement;
            let dragIndex = __indexOf(dropElement.parentElement.children, (this.source ? phElement : sourceElement));
            let dropIndex = __indexOf(dropElement.parentElement.children, dropElement);
            if (!this.source) {
                this.sourceIndex = dragIndex;
                this.source = drag.dropContainer;
                phElement.style.width = sourceElement.clientWidth + 'px';
                phElement.style.height = sourceElement.clientHeight + 'px';
                sourceElement.parentElement.removeChild(sourceElement);
            }
            this.targetIndex = dropIndex;
            this.target = drop;
            phElement.style.display = '';
            dropElement.parentElement.insertBefore(phElement, (dropIndex > dragIndex
                ? dropElement.nextSibling : dropElement));
            this.placeholder.enter(drag, drag.element.nativeElement.offsetLeft, drag.element.nativeElement.offsetTop);
            return false;
        };
        this.createChildren = (parent) => {
            let parentId = parent ? parent.itemData.id : "";
            return this.accountService.children(parentId).toPromise();
        };
        this.target = null;
        this.source = null;
    }
    ngAfterViewInit() {
        let phElement = this.placeholder.element.nativeElement;
        phElement.style.display = 'none';
        phElement.parentElement.removeChild(phElement);
    }
    dropInList(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.items, event.previousIndex, event.currentIndex);
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.kpiService.find(params.id).subscribe((item) => {
                    this.modelId = params.id;
                    this.name = item.name;
                    this.items = item.tokens;
                });
            }
        });
    }
    save() {
        if (!this.name) {
            this.alertify.warning('KPI must have a name');
            return;
        }
        let model = {
            kpiId: this.modelId,
            name: this.name,
            formula: this.items.map(x => this.isOperator(x.name) ? x.name : x.id).join(';')
        };
        if (this.modelId) {
            this.kpiService.update(model).subscribe(x => {
                this.alertify.success('KPI updated successfully');
                this.router.navigate(['/kpi-list']);
            }, error => {
                this.alertify.error('Error updating KPI, please contact support');
            });
        }
        else {
            this.kpiService.add(model).subscribe(x => {
                this.alertify.success('KPI added successfully');
                this.router.navigate(['/kpi-list']);
            }, error => {
                this.alertify.error('Error saving KPI, please contact support');
            });
        }
    }
    nameChanged() {
        this.submitValid = this.validateSubmit();
    }
    cancel() {
        this.router.navigate(['/kpi-list']);
    }
    drag(event) {
        let div = event.target;
        let token = {
            'name': div.innerText.trim(),
            'id': this.isOperator(div.innerText.trim()) ? this.generateId() : div.id
        };
        event.dataTransfer.setData("token", JSON.stringify(token));
    }
    formulaDrag(event) {
        let div = event.target;
        let token = {
            'name': div.innerText.trim(),
            'id': div.id
        };
        event.dataTransfer.setData("token", JSON.stringify(token));
    }
    deleteToken(event) {
        this.items = this.items.filter(x => x.id !== event.id);
        this.submitValid = this.validateSubmit();
    }
    drop(event) {
        event.preventDefault();
        var data = JSON.parse(event.dataTransfer.getData("token"));
        if (this.validateFormula(data)) {
            this.items.push(data);
        }
        else {
            this.alertify.warning('Invalid formula, try again!');
        }
        this.submitValid = this.validateSubmit();
    }
    validateSubmit() {
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
            const isOperator = this.isOperator(this.items[i].name);
            if (i % 2 === 0 && isOperator || i % 2 !== 0 && !isOperator) {
                return false;
            }
        }
        return true;
    }
    /**
     * validate drag operation, consecutive items cannot be of same type
     * @param data: token being dragged to formula area
     */
    validateFormula(data) {
        if (this.items.length == 0 && this.isOperator(data.name)) {
            return false;
        }
        if (this.items.length == 0 && !this.isOperator(data.name)) {
            return true;
        }
        else {
            let lastItem = this.items[this.items.length - 1].name;
            if (this.isOperator(data.name) && this.isOperator(lastItem)) {
                return false;
            }
            if (!this.isOperator(data.name) && !this.isOperator(lastItem)) {
                return false;
            }
            return true;
        }
    }
    allowDrop(event) {
        event.preventDefault();
    }
    isOperator(token) {
        return ['+', '-', '*', '/'].includes(token);
    }
    generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    dragMoved(e) {
        let point = this.getPointerPositionOnPage(e.event);
        this.listGroup._items.forEach(dropList => {
            if (__isInsideDropListClientRect(dropList, point.x, point.y)) {
                this.activeContainer = dropList;
                return;
            }
        });
    }
    dropListDropped() {
        if (!this.target)
            return;
        let phElement = this.placeholder.element.nativeElement;
        let parent = phElement.parentElement;
        phElement.style.display = 'none';
        parent.removeChild(phElement);
        parent.appendChild(phElement);
        parent.insertBefore(this.source.element.nativeElement, parent.children[this.sourceIndex]);
        this.target = null;
        this.source = null;
        if (this.sourceIndex != this.targetIndex)
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.items, this.sourceIndex, this.targetIndex);
        this.submitValid = this.validateSubmit();
    }
    /** Determines the point of the page that was touched by the user. */
    getPointerPositionOnPage(event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        const point = __isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        const scrollPosition = this.viewportRuler.getViewportScrollPosition();
        return {
            x: point.pageX - scrollPosition.left,
            y: point.pageY - scrollPosition.top
        };
    }
};
KPIEditComponent.ctorParameters = () => [
    { type: _services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"] },
    { type: _services_kpi_service__WEBPACK_IMPORTED_MODULE_3__["KPIService"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"] }
];
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
        template: `            

    <div class="container-fluid">
    <div class="name">
        <input #nameInput="ngModel" (change)="nameChanged()" class="form-control form-control-lg" type="text" [(ngModel)]="name"
            placeholder="KPI Name" required>
        <div class="validation-error" *ngIf="nameInput.dirty">
            <span *ngIf="nameInput.errors?.required">Name is required</span>
        </div>
    </div>
    <div class="row">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">
                    Financial Accounts
                </div>
                <div class="card-body">
                    <dx-tree-view [createChildren]="createChildren" dataStructure="plain" rootValue=""
                        itemTemplate="itemTemplate">
                        <div *dxTemplate="let itemObj of 'itemTemplate'">
                            <div draggable="true" (dragstart)="drag($event)" id="{{itemObj.id}}">
                                <i class="fa fa-credit-card"></i> {{itemObj.text}}
                            </div>
                        </div>
                    </dx-tree-view>
                </div>
            </div>
            <div class="card" style="margin-top:10px;">
                <div class="card-header">
                    Operators
                </div>
                <div class="card-body card-operators">
                    <span class="operator" draggable="true" id="+" (dragstart)="drag($event)">
                        +
                    </span>
                    <span class="operator" draggable="true" id="-" (dragstart)="drag($event)">
                        -
                    </span>
                    <span class="operator" draggable="true" id="*" (dragstart)="drag($event)">
                        *
                    </span>
                    <span class="operator" draggable="true" id="/" (dragstart)="drag($event)">
                        /
                    </span>
                </div>
            </div>
        </div>

        <div class="col-md-8">
            <div class="card card-formula">
                <div class="card-header">
                    KPI Formula Definition
                </div>
                <div class="card-body drop-container">
                    <div>
                        <div class="drop" (drop)="drop($event)" (dragover)="allowDrop($event)" cdkDropListGroup #dropListGorup>
                            <div cdkDropList [cdkDropListEnterPredicate]="dropListEnterPredicate" (cdkDropListDropped)="dropListDropped($event)"></div>
                            <div cdkDropList *ngFor="let item of items" [contextMenu]="deleteMenu" [contextMenuSubject]="item"
                                [cdkDropListEnterPredicate]="dropListEnterPredicate" (cdkDropListDropped)="dropListDropped($event)">
                            <div cdkDrag class="token" draggable="true" (dragstart)="formulaDrag($event)" [class.operator]="isOperator(item.name)" 
                                (cdkDragMoved)="dragMoved($event);">{{item.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <input type="button" value="Cancel" class="btn btn-secondary cancel" (click)="cancel()" />
                    <input type="button" value="Save" [disabled]="!submitValid" class="btn btn-primary"
                        (click)="save()" />
                </div>
            </div>
        </div>
    </div>
</div>    

<context-menu>
  <ng-template class="dropdown-menu" contextMenuItem (execute)="deleteToken($event.item)">
    Delete
  </ng-template>  
</context-menu>
    
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"],
        _services_kpi_service__WEBPACK_IMPORTED_MODULE_3__["KPIService"],
        _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["ViewportRuler"]])
], KPIEditComponent);

function __indexOf(collection, node) {
    return Array.prototype.indexOf.call(collection, node);
}
;
/** Determines whether an event is a touch event. */
function __isTouchEvent(event) {
    return event.type.startsWith('touch');
}
function __isInsideDropListClientRect(dropList, x, y) {
    const { top, bottom, left, right } = dropList.element.nativeElement.getBoundingClientRect();
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_kpi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/kpi.service */ "./src/app/services/kpi.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _delete_confirmation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delete-confirmation.component */ "./src/app/delete-confirmation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");







let KPIListComponent = class KPIListComponent {
    constructor(kpiService, dialog, router, alertify) {
        this.kpiService = kpiService;
        this.dialog = dialog;
        this.router = router;
        this.alertify = alertify;
        this.kpis = [];
    }
    ngOnInit() {
        this.kpiService.get().subscribe((x) => {
            this.kpis = x;
        });
    }
    delete(kpiId) {
        this.dialog.open(_delete_confirmation_component__WEBPACK_IMPORTED_MODULE_4__["DeleteConfirmationDialog"], {
            width: '500px',
        }).afterClosed().subscribe(result => {
            if (result === true) {
                this.kpiService.delete(kpiId).subscribe(x => {
                    this.alertify.success('KPI deleted successfully');
                    this.removeItem(kpiId);
                }, error => {
                    this.alertify.error('Error deleting KPI, please contact support');
                });
            }
        });
    }
    removeItem(id) {
        this.kpis = this.kpis.filter(x => x.kpiId !== id);
    }
    navigateNew() {
        this.router.navigate(['/kpi-edit']);
    }
};
KPIListComponent.ctorParameters = () => [
    { type: _services_kpi_service__WEBPACK_IMPORTED_MODULE_2__["KPIService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"] }
];
KPIListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'kpi-list',
        template: `
    
<div class="container-fluid">
  <div class="new-action">
    <button type="button" class="btn btn-primary btn-lg" (click)="navigateNew()">Create New KPI</button>
  </div>
  <table class="table table-striped table-bordered grid">
    <thead class="thead-light">
        <th>KPI Name</th>
        <th width="200"></th>
    </thead>
    <tbody>
        <tr *ngFor="let kpi of kpis">
            <td>{{kpi.name}}</td>
            <td class="text-right">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary dropdown-toggle" data-display="static" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-location-arrow action-menu"></i>Action
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg-right">
                        <a class="dropdown-item normal-menu" [routerLink]="['/kpi-chart', kpi.kpiId]">
                            <i class="fa fa-chart-line"></i> View Chart
                        </a>
                        <a class="dropdown-item normal-menu" [routerLink]="['/kpi-edit', kpi.kpiId]">
                            <i class="fa fa-edit"></i> Edit
                        </a>
                        <a class="dropdown-item danger-menu" (click)="delete(kpi.kpiId)">
                            <i class="far fa-trash-alt"></i> Delete
                        </a>
                    </div>
                </div>            
            </td>            
        </tr>
    </tbody>
  </table>
</div>

  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_kpi_service__WEBPACK_IMPORTED_MODULE_2__["KPIService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        _services_alertify_service__WEBPACK_IMPORTED_MODULE_6__["AlertifyService"]])
], KPIListComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let LoginComponent = class LoginComponent {
    constructor(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        this.model = {};
    }
    loggedIn() {
        return this.authService.loggedIn();
    }
    login() {
        this.authService.login(this.model).subscribe(next => {
            this.alertify.success('Logged in successfully');
            this.router.navigate(['/']);
        }, error => {
            this.alertify.error('Invalid username/password!');
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: `
    
    <form #loginForm="ngForm" class="text-center" (ngSubmit)="login()">
      <div class="form-group">
        <input class="form-control" type="text" name="username" placeholder="Username" required [(ngModel)]="model.username">
      </div>      
      <div class="form-group">
        <input class="form-control" type="password" name="password" placeholder="Password" required [(ngModel)]="model.password">
      </div>
      <button [disabled]="!loginForm.valid" class="btn btn-primary btn-block" type="submit">Login</button>
    </form>

  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AccountService = class AccountService extends _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] {
    constructor() {
        super(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'account');
    }
    get() {
        return this.http.get(this.baseUrl);
    }
    children(id) {
        return this.http.get(this.joinUrl('children?id=' + id));
    }
};
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AccountService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AlertifyService = class AlertifyService {
    constructor() {
        alertify.set('notifier', 'position', 'bottom-right');
    }
    confirm(message, okCallBack) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallBack();
            }
            else {
            }
        });
    }
    success(message) {
        alertify.success(message);
    }
    error(message) {
        alertify.error(message);
    }
    warning(message) {
        alertify.warning(message);
    }
    message(message) {
        alertify.message(message);
    }
};
AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AlertifyService);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'auth/';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
    }
    login(model) {
        return this.http.post(this.baseUrl + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            const user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                this.decodedToken = this.jwtHelper.decodeToken(user.token);
            }
        }));
    }
    getLoggedInUser() {
        let token = localStorage.getItem('token');
        return this.jwtHelper.decodeToken(token);
    }
    register(model) {
        return this.http.post(this.baseUrl + 'register', model);
    }
    loggedIn() {
        const token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared */ "./src/app/shared.ts");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");





class HttpService {
    constructor(baseUrl = '') {
        this.http = _shared__WEBPACK_IMPORTED_MODULE_3__["Shared"].injector.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]);
        this.local = _shared__WEBPACK_IMPORTED_MODULE_3__["Shared"].injector.get(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]);
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.baseUrl = baseUrl;
    }
    joinUrl(url) {
        if (/^http(s)*:\/\//.test(url)) {
            return url;
        }
        return this.baseUrl + '/' + Object(lodash__WEBPACK_IMPORTED_MODULE_2__["trim"])(url, '/');
    }
}
HttpService.ctorParameters = () => [
    { type: String }
];


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let KPIService = class KPIService extends _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] {
    constructor() {
        super(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'kpi');
    }
    get() {
        return this.http.get(this.joinUrl('get'));
    }
    find(id) {
        return this.http.get(this.joinUrl('find?id=' + id));
    }
    add(kpi) {
        return this.http.post(this.joinUrl('add'), kpi);
    }
    update(kpi) {
        return this.http.post(this.joinUrl('update'), kpi);
    }
    delete(id) {
        return this.http.delete(this.joinUrl('delete?id=' + id));
    }
    evaluate(id) {
        return this.http.get(this.joinUrl('evaluate?id=' + id));
    }
};
KPIService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], KPIService);



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
class Shared {
}


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


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
//# sourceMappingURL=main-es2015.js.map