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
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");




var routes = [
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] }
];
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MovieDB';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _modals_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modals/movie/movie.component */ "./src/app/modals/movie/movie.component.ts");
/* harmony import */ var _modals_tvshow_tvshow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modals/tvshow/tvshow.component */ "./src/app/modals/tvshow/tvshow.component.ts");
/* harmony import */ var _modals_person_person_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modals/person/person.component */ "./src/app/modals/person/person.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _modals_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__["MovieComponent"],
                _modals_tvshow_tvshow_component__WEBPACK_IMPORTED_MODULE_9__["TvshowComponent"],
                _modals_person_person_component__WEBPACK_IMPORTED_MODULE_10__["PersonComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModalModule"]
            ],
            entryComponents: [
                _modals_movie_movie_component__WEBPACK_IMPORTED_MODULE_8__["MovieComponent"],
                _modals_tvshow_tvshow_component__WEBPACK_IMPORTED_MODULE_9__["TvshowComponent"],
                _modals_person_person_component__WEBPACK_IMPORTED_MODULE_10__["PersonComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main,\r\n.jumbotron {\r\n  background-color: #12181B;\r\n}\r\n.jumbotron {\r\n  margin-bottom: 0;\r\n}\r\n.headliner {\r\n  font-size: 1.8rem;\r\n}\r\n.card {\r\n  border: none;\r\n}\r\n.card:hover {\r\n  transform: translateY(-2px);\r\n  transition: transform 0.2s ease;\r\n  cursor: pointer;\r\n}\r\n.lead {\r\n  border-bottom: 3px dashed #2a2e35;\r\n  font-size: 0.9rem;\r\n}\r\n#searchResults .card-img-top {\r\n  height: 130vw;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n/*MEDIA QUERIES*/\r\n@media (min-width:20em) {\r\n  /* smartphones width:320px */\r\n}\r\n@media (min-width:30em) {\r\n  /* smaller tablets width:480px */\r\n  .headliner {\r\n    font-size: 2.5rem;\r\n  }\r\n  .lead {\r\n    font-size: 1.25rem;\r\n  }\r\n  #searchResults .card-img-top {\r\n    height: 80vw;\r\n  }\r\n}\r\n@media (min-width:48em) {\r\n  /* portrait tablets width:768px */\r\n  .headliner {\r\n    font-size: 3rem;\r\n  }\r\n  #searchResults .card-img-top {\r\n    height: 60vw;\r\n  }\r\n}\r\n@media (min-width:61.25em) {\r\n  /* tablet, landscape iPad, lo-res laptops ands desktops width:980px */\r\n  .headliner {\r\n    font-size: 3.5rem;\r\n  }\r\n  #searchResults .card-img-top {\r\n    height: 40vw;\r\n  }\r\n}\r\n@media (min-width:75em) {\r\n  /* big landscape tablets, laptops, and desktops width:1200px */\r\n  #searchResults .card-img-top {\r\n    height: 35vw;\r\n  }\r\n}\r\n@media (min-width:120em) {\r\n  /* hi-res laptops and desktops width:1920px */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7QUFDbkI7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQztJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0UsaUNBQWlDO0VBQ2pDO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFLHFFQUFxRTtFQUNyRTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFLDhEQUE4RDtFQUM5RDtJQUNFLFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRSw2Q0FBNkM7QUFDL0MiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbixcclxuLmp1bWJvdHJvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTgxQjtcclxufVxyXG4uanVtYm90cm9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcbi5oZWFkbGluZXIge1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59XHJcbi5jYXJkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmNhcmQ6aG92ZXIge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubGVhZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IGRhc2hlZCAjMmEyZTM1O1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcbiNzZWFyY2hSZXN1bHRzIC5jYXJkLWltZy10b3Age1xyXG4gIGhlaWdodDogMTMwdnc7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuLypNRURJQSBRVUVSSUVTKi9cclxuQG1lZGlhIChtaW4td2lkdGg6MjBlbSkge1xyXG4gIC8qIHNtYXJ0cGhvbmVzIHdpZHRoOjMyMHB4ICovXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6MzBlbSkge1xyXG4gIC8qIHNtYWxsZXIgdGFibGV0cyB3aWR0aDo0ODBweCAqL1xyXG4gIC5oZWFkbGluZXIge1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgfVxyXG4gIC5sZWFkIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB9XHJcbiAgI3NlYXJjaFJlc3VsdHMgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDgwdnc7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjQ4ZW0pIHtcclxuICAvKiBwb3J0cmFpdCB0YWJsZXRzIHdpZHRoOjc2OHB4ICovXHJcbiAgLmhlYWRsaW5lciB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG4gICNzZWFyY2hSZXN1bHRzIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiA2MHZ3O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo2MS4yNWVtKSB7XHJcbiAgLyogdGFibGV0LCBsYW5kc2NhcGUgaVBhZCwgbG8tcmVzIGxhcHRvcHMgYW5kcyBkZXNrdG9wcyB3aWR0aDo5ODBweCAqL1xyXG4gIC5oZWFkbGluZXIge1xyXG4gICAgZm9udC1zaXplOiAzLjVyZW07XHJcbiAgfVxyXG4gICNzZWFyY2hSZXN1bHRzIC5jYXJkLWltZy10b3Age1xyXG4gICAgaGVpZ2h0OiA0MHZ3O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NWVtKSB7XHJcbiAgLyogYmlnIGxhbmRzY2FwZSB0YWJsZXRzLCBsYXB0b3BzLCBhbmQgZGVza3RvcHMgd2lkdGg6MTIwMHB4ICovXHJcbiAgI3NlYXJjaFJlc3VsdHMgLmNhcmQtaW1nLXRvcCB7XHJcbiAgICBoZWlnaHQ6IDM1dnc7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMGVtKSB7XHJcbiAgLyogaGktcmVzIGxhcHRvcHMgYW5kIGRlc2t0b3BzIHdpZHRoOjE5MjBweCAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid px-lg-5\">\r\n  <header class=\"row\">\r\n    <div class=\"col-12\">\r\n      <div class=\"jumbotron text-light row\">\r\n        <h1 class=\"display-4 col-12 headliner\"><b>Cinemaphiles Home - by EZ-ZAROUALY Mohamed</b></h1>\r\n        <p class=\"lead col-12\">Follow with us the latest TV shows and movies !</p>\r\n        <div class=\"col-12 col-xl-4 mb-2 d-flex flex-column flex-sm-row align-items-center\">\r\n          <button [disabled]=\"showMovies\" type=\"button\" class=\"btn btn-light mr-2 mb-1\" (click)=\"getTopMovies()\">Top\r\n                Movies</button>\r\n          <button [disabled]=\"showTvShows\" type=\"button\" class=\"btn btn-light mr-2 mb-1\" (click)=\"getTopShows()\">Top\r\n                Series</button>\r\n          <button [disabled]=\"showPersons\" type=\"button\" class=\"btn btn-light mb-1\" (click)=\"getTopPersons()\">Top\r\n                People</button>\r\n        </div>\r\n        <div class=\"col-12 col-xl-8\">\r\n          <input id=\"nameFilter\" class=\"form-control\" type=\"text\" name=\"search\" (keyup)=\"onSearch($event)\"\r\n            autocomplete=\"off\" placeholder=\"Search\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div class=\"row mx-lg-n5\" *ngIf=\"showMovies && !searchResults\">\r\n    <div class=\"col-12 col-sm-6 col-lg-4 d-flex py-3 px-m-5\" *ngFor=\"let movie of top20Movies; index as i\">\r\n      <div class=\"card\">\r\n        <img *ngIf=\"movie.posterpath\" src=\"{{movie.getBackdrop()}}\" class=\"card-img-top\" alt=\"{{movie.title}}\" (click)=\"getDetails(movie.id, 'movie')\">\r\n        <img *ngIf=\"!movie.posterpath\" src=\"../../assets/film-poster-placeholder.png\" class=\"card-img-top\" alt=\"{{movie.title}}\" (click)=\"getDetails(result.id, 'movie')\">\r\n        <div class=\"card-body d-flex flex-column\">\r\n          <h6><b>{{movie.getYear()}}</b></h6>\r\n          <h3 class=\"card-title\"><b>#{{i+1}} {{movie.title}}</b></h3>\r\n          <p class=\"card-text flex-grow-1\">{{movie.shortOverview()}}</p>\r\n          <button type=\"button\" class=\"btn btn-dark align-self-end\" (click)=\"getDetails(movie.id, 'movie')\">Full\r\n            Details</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mx-lg-n5\" *ngIf=\"showTvShows && !searchResults\">\r\n    <div class=\"col-12 col-sm-6 col-lg-4 d-flex py-3 px-m-5\" *ngFor=\"let show of top20Shows; index as i\">\r\n      <div class=\"card\">\r\n        <img *ngIf=\"show.posterpath\" src=\"{{show.getBackdrop()}}\" class=\"card-img-top\" alt=\"{{show.title}}\" (click)=\"getDetails(show.id, 'tv')\">\r\n        <img *ngIf=\"!show.posterpath\" src=\"../../assets/film-poster-placeholder.png\" class=\"card-img-top\" alt=\"{{show.name}}\" (click)=\"getDetails(result.id, 'tv')\">\r\n        <div class=\"card-body d-flex flex-column\">\r\n          <h3 class=\"card-title\"><b>#{{i+1}} {{show.name}}</b></h3>\r\n          <p class=\"card-text flex-grow-1\">{{show.shortOverview()}}</p>\r\n          <button type=\"button\" class=\"btn btn-dark align-self-end\" (click)=\"getDetails(show.id, 'tv')\">Full\r\n            Details</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row mx-lg-n5\" *ngIf=\"showPersons && !searchResults\">\r\n    <div class=\"col-12 col-sm-6 col-lg-4 col-xl-2 d-flex py-3 px-m-5\" *ngFor=\"let person of top20Persons\">\r\n      <div class=\"card\">\r\n        <img *ngIf=\"person.profilepath\" src=\"{{person.getBackdrop()}}\" class=\"card-img-top\" alt=\"{{person.name}}\" (click)=\"getDetails(person.id, 'person')\">\r\n        <img *ngIf=\"!person.profilepath\" src=\"../../assets/person-poster-placeholder.png\" class=\"card-img-top\" alt=\"{{person.name}}\" (click)=\"getDetails(result.id, 'person')\">\r\n        <div class=\"card-body d-flex flex-column p-1\">\r\n          <h3 class=\"card-title flex-grow-1 text-center\"><b>{{person.name}}</b></h3>\r\n          <button type=\"button\" class=\"btn btn-dark\" (click)=\"getDetails(person.id, 'person')\">Full Details</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"searchResults\" class=\"row mx-lg-n5\" *ngIf=\"searchResults\">\r\n    <div class=\"col-12 col-sm-6 col-lg-4 col-xl-3 d-flex py-3 px-m-5\" *ngFor=\"let result of searchResults\">\r\n      <div class=\"card d-flex flex-column flex-grow-1\" *ngIf=\"result.media_type == 'movie'\">\r\n        <h5 class=\"p-2 text-center\"><b>Movie</b></h5>\r\n        <img *ngIf=\"result.poster_path\" src=\"https://image.tmdb.org/t/p/w500/{{result.poster_path}}\" class=\"card-img-top\" alt=\"{{result.title}}\" (click)=\"getDetails(result.id, 'movie')\">\r\n        <img *ngIf=\"!result.poster_path\" src=\"../../assets/film-poster-placeholder.png\" class=\"card-img-top\" alt=\"{{result.title}}\" (click)=\"getDetails(result.id, 'movie')\">\r\n         <div class=\"card-body\">\r\n           <h3 class=\"card-title\"><b>{{result.title}}</b></h3>\r\n           <button type=\"button\" class=\"btn btn-dark align-self-end\" (click)=\"getDetails(result.id, 'movie')\">Full\r\n                Details</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card d-flex flex-column flex-grow-1\" *ngIf=\"result.media_type == 'tv'\">\r\n        <h5 class=\"p-2 text-center\"><b>TV Show</b></h5>\r\n        <img *ngIf=\"result.poster_path\" src=\"https://image.tmdb.org/t/p/w500/{{result.poster_path}}\" class=\"card-img-top\" alt=\"{{result.name}}\" (click)=\"getDetails(result.id, 'tv')\">\r\n        <img *ngIf=\"!result.poster_path\" src=\"../../assets/film-poster-placeholder.png\" class=\"card-img-top\" alt=\"{{result.name}}\" (click)=\"getDetails(result.id, 'tv')\">\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\"><b>{{result.name}}</b></h3>\r\n          <button type=\"button\" class=\"btn btn-dark align-self-end\" (click)=\"getDetails(result.id, 'tv')\">Full\r\n            Details</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"card d-flex flex-column flex-grow-1\" *ngIf=\"result.media_type == 'person'\">\r\n        <h5 class=\"p-2 text-center\"><b>Person</b></h5>\r\n        <img *ngIf=\"result.profile_path\" src=\"https://image.tmdb.org/t/p/w500/{{result.profile_path}}\" class=\"card-img-top\" alt=\"{{result.name}}\" (click)=\"getDetails(result.id, 'person')\">\r\n        <img *ngIf=\"!result.profile_path\" src=\"../../assets/person-poster-placeholder.png\" class=\"card-img-top\" alt=\"{{result.name}}\" (click)=\"getDetails(result.id, 'person')\">\r\n        <div class=\"card-body\">\r\n          <h3 class=\"card-title\"><b>{{result.name}}</b></h3>\r\n          <button type=\"button\" class=\"btn btn-dark\" (click)=\"getDetails(result.id, 'person')\">Full Details</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modals_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals/movie/movie.component */ "./src/app/modals/movie/movie.component.ts");
/* harmony import */ var _modals_tvshow_tvshow_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modals/tvshow/tvshow.component */ "./src/app/modals/tvshow/tvshow.component.ts");
/* harmony import */ var _modals_person_person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/person/person.component */ "./src/app/modals/person/person.component.ts");







var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(movieService, modalService) {
        this.movieService = movieService;
        this.modalService = modalService;
        this.showMovies = false;
        this.showTvShows = false;
        this.showPersons = false;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.getTopMovies();
    };
    HomepageComponent.prototype.getTopMovies = function () {
        var _this = this;
        this.showMovies = true;
        this.showTvShows = false;
        this.showPersons = false;
        if (!this.top20Movies) {
            this.movieService.getMovies();
            // will get initial array of movies from server
            this.movieSub = this.movieService.getMovieUpdateListener()
                .subscribe(function (movieData) { return _this.top20Movies = movieData; });
        }
    };
    HomepageComponent.prototype.getTopShows = function () {
        var _this = this;
        this.showTvShows = true;
        this.showMovies = false;
        this.showPersons = false;
        if (!this.top20Shows) {
            this.movieService.getTvShows();
            // will get initial array of tv shows from server
            this.tvshowSub = this.movieService.getShowUpdateListener()
                .subscribe(function (showsData) { return _this.top20Shows = showsData; });
        }
    };
    HomepageComponent.prototype.getTopPersons = function () {
        var _this = this;
        this.showPersons = true;
        this.showMovies = false;
        this.showTvShows = false;
        if (!this.top20Persons) {
            this.movieService.getPersons();
            // will get initial array of persons from server
            this.personSub = this.movieService.getPersonUpdateListener()
                .subscribe(function (personsData) { return _this.top20Persons = personsData; });
        }
    };
    HomepageComponent.prototype.getDetails = function (id, type) {
        var _this = this;
        this.movieService.getSingleDetails(id, type);
        this.detailsSub = this.movieService.getSingleDetailsUpdateListener()
            .subscribe(function (currentData) {
            _this.openModal(currentData, type);
        });
    };
    HomepageComponent.prototype.openModal = function (currentData, type) {
        // unsubscribe
        this.detailsSub.unsubscribe();
        // set component
        var oComponent;
        switch (type) {
            case 'movie':
                oComponent = _modals_movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"];
                break;
            case 'tv':
                oComponent = _modals_tvshow_tvshow_component__WEBPACK_IMPORTED_MODULE_5__["TvshowComponent"];
                break;
            case 'person':
                oComponent = _modals_person_person_component__WEBPACK_IMPORTED_MODULE_6__["PersonComponent"];
                break;
        }
        // open modal with component as content and pass details
        var modalRef = this.modalService.open(oComponent, { size: 'lg', centered: true, windowClass: 'dark-modal' });
        modalRef.componentInstance.data = currentData;
    };
    HomepageComponent.prototype.onSearch = function (event) {
        var _this = this;
        var searchString = event.target.value;
        if (searchString) {
            this.showPersons = true;
            this.showMovies = true;
            this.showTvShows = true;
            // get value from input
            this.movieService.getSearch(searchString);
            this.searchSub = this.movieService.getSearchUpdateListener()
                .subscribe(function (currentData) {
                _this.searchResults = currentData;
                console.log(_this.searchResults);
                // unsub
                _this.searchSub.unsubscribe();
            });
        }
        else {
            this.searchResults = null;
            this.getTopMovies();
        }
    };
    HomepageComponent.prototype.ngOnDestroy = function () {
        // Called once, before the instance is destroyed.
        // unsubscribe all
        this.movieSub.unsubscribe();
        this.tvshowSub.unsubscribe();
        this.personSub.unsubscribe();
        this.detailsSub.unsubscribe();
        this.searchSub.unsubscribe();
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/modals/movie/movie.component.css":
/*!**************************************************!*\
  !*** ./src/app/modals/movie/movie.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  max-height: 400px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  display: none;\r\n}\r\n.genres {\r\n  display: inline-block;\r\n  margin-bottom: 0;\r\n}\r\n/*MEDIA QUERIES*/\r\n@media (min-width:20em) {\r\n  /* smartphones width:320px */\r\n}\r\n@media (min-width:30em) {\r\n  /* smaller tablets width:480px */\r\n  img {\r\n    display: block;\r\n  }\r\n}\r\n@media (min-width:48em) {\r\n  /* portrait tablets width:768px */\r\n}\r\n@media (min-width:61.25em) {\r\n  /* tablet, landscape iPad, lo-res laptops ands desktops width:980px */\r\n}\r\n@media (min-width:75em) {\r\n  /* big landscape tablets, laptops, and desktops width:1200px */\r\n}\r\n@media (min-width:120em) {\r\n  /* hi-res laptops and desktops width:1920px */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQztJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLDhEQUE4RDtBQUNoRTtBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL21vdmllL21vdmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWcge1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uZ2VucmVzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG4vKk1FRElBIFFVRVJJRVMqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDoyMGVtKSB7XHJcbiAgLyogc21hcnRwaG9uZXMgd2lkdGg6MzIwcHggKi9cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDozMGVtKSB7XHJcbiAgLyogc21hbGxlciB0YWJsZXRzIHdpZHRoOjQ4MHB4ICovXHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo0OGVtKSB7XHJcbiAgLyogcG9ydHJhaXQgdGFibGV0cyB3aWR0aDo3NjhweCAqL1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcclxuICAvKiB0YWJsZXQsIGxhbmRzY2FwZSBpUGFkLCBsby1yZXMgbGFwdG9wcyBhbmRzIGRlc2t0b3BzIHdpZHRoOjk4MHB4ICovXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzVlbSkge1xyXG4gIC8qIGJpZyBsYW5kc2NhcGUgdGFibGV0cywgbGFwdG9wcywgYW5kIGRlc2t0b3BzIHdpZHRoOjEyMDBweCAqL1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMGVtKSB7XHJcbiAgLyogaGktcmVzIGxhcHRvcHMgYW5kIGRlc2t0b3BzIHdpZHRoOjE5MjBweCAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modals/movie/movie.component.html":
/*!***************************************************!*\
  !*** ./src/app/modals/movie/movie.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <div class=\"d-flex flex-column\">\r\n      <h2 class=\"modal-title\"><b>{{data.title}}</b></h2>\r\n      <div class=\"d-flex\">\r\n        <p *ngFor=\"let genre of data.genres\" class=\"genres\"><span class=\"badge badge-secondary mx-1\">{{genre.name}}</span></p>\r\n      </div>\r\n  </div>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body d-flex flex-column\">\r\n  <div class=\"d-flex flex-column flex-lg-row\">\r\n    <img *ngIf=\"data.poster_path\" src=\"https://image.tmdb.org/t/p/w500/{{data.poster_path}}\" alt=\"{{data.title}}\">\r\n    <img *ngIf=\"!data.poster_path\" src=\"../../assets/film-poster-placeholder.png\" alt=\"{{data.title}}\">\r\n    <div class=\"p-2 d-flex flex-column\">\r\n      <div class=\"px-2\" *ngIf=\"data.tagline\">\r\n        <h4>{{data.tagline}}</h4>\r\n      </div>\r\n      <div class=\"p-2\" *ngIf=\"data.overview\">\r\n        <h5><b>Overview</b></h5>\r\n        <p>{{data.overview}}</p>\r\n      </div>\r\n      <div class=\"d-flex flex-row flex-wrap p-1\">\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\">\r\n          <h6 class=\"flex-fill\"><b>Status:</b></h6>\r\n          <p>{{data.status}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.release_date\">\r\n          <h6 class=\"flex-fill\"><b>Release Date:</b></h6>\r\n          <p>{{data.release_date}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.popularity\">\r\n          <h6 class=\"flex-fill\"><b>Popularity:</b></h6>\r\n          <p>{{data.popularity}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.vote_average\">\r\n          <h6 class=\"flex-fill\"><b>Vote Average:</b></h6>\r\n          <p>{{data.vote_average}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.vote_count\">\r\n          <h6 class=\"flex-fill\"><b>Vote Count:</b></h6>\r\n          <p>{{data.vote_count}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.budget > 0 && data.budget\">\r\n          <h6 class=\"flex-fill\"><b>Budget:</b></h6>\r\n          <p>${{data.budget}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.revenue > 0 && data.revenue\">\r\n          <h6 class=\"flex-fill\"><b>Revenue:</b></h6>\r\n          <p>${{data.revenue}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.runtime > 0 && data.runtime\">\r\n          <h6 class=\"flex-fill\"><b>Runtime:</b></h6>\r\n          <p>{{data.runtime}} minutes</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-12\" *ngIf=\"data.production_companies.length > 0 && data.production_companies\">\r\n          <h6 class=\"flex-fill\"><b>Production Companies:</b></h6>\r\n          <div class=\"d-flex flex-wrap\">\r\n            <div *ngFor=\"let company of data.production_companies\" class=\"col-6\">\r\n              <p>{{company.name}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <a *ngIf=\"data.homepage\" class=\"btn btn-info m-2\" href=\"{{data.homepage}}\" target=\"_blank\" role=\"button\"><b>Visit Website</b></a>\r\n        <a *ngIf=\"data.imdb_id\" class=\"btn btn-warning m-2\" href=\"https://www.imdb.com/title/{{data.imdb_id}}\" target=\"_blank\" role=\"button\"><b>IMDB Page</b></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modals/movie/movie.component.ts":
/*!*************************************************!*\
  !*** ./src/app/modals/movie/movie.component.ts ***!
  \*************************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var MovieComponent = /** @class */ (function () {
    function MovieComponent(activeModal) {
        this.activeModal = activeModal;
    }
    MovieComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MovieComponent.prototype, "data", void 0);
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/modals/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/modals/movie/movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/modals/person/person.component.css":
/*!****************************************************!*\
  !*** ./src/app/modals/person/person.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  max-height: 400px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  display: none;\r\n}\r\n\r\n/*MEDIA QUERIES*/\r\n\r\n@media (min-width:20em) {\r\n  /* smartphones width:320px */\r\n}\r\n\r\n@media (min-width:30em) {\r\n  /* smaller tablets width:480px */\r\n  img {\r\n    display: block;\r\n  }\r\n}\r\n\r\n@media (min-width:48em) {\r\n  /* portrait tablets width:768px */\r\n}\r\n\r\n@media (min-width:61.25em) {\r\n  /* tablet, landscape iPad, lo-res laptops ands desktops width:980px */\r\n}\r\n\r\n@media (min-width:75em) {\r\n  /* big landscape tablets, laptops, and desktops width:1200px */\r\n}\r\n\r\n@media (min-width:120em) {\r\n  /* hi-res laptops and desktops width:1920px */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDO0lBQ0UsY0FBYztFQUNoQjtBQUNGOztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UscUVBQXFFO0FBQ3ZFOztBQUNBO0VBQ0UsOERBQThEO0FBQ2hFOztBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKk1FRElBIFFVRVJJRVMqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDoyMGVtKSB7XHJcbiAgLyogc21hcnRwaG9uZXMgd2lkdGg6MzIwcHggKi9cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDozMGVtKSB7XHJcbiAgLyogc21hbGxlciB0YWJsZXRzIHdpZHRoOjQ4MHB4ICovXHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo0OGVtKSB7XHJcbiAgLyogcG9ydHJhaXQgdGFibGV0cyB3aWR0aDo3NjhweCAqL1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcclxuICAvKiB0YWJsZXQsIGxhbmRzY2FwZSBpUGFkLCBsby1yZXMgbGFwdG9wcyBhbmRzIGRlc2t0b3BzIHdpZHRoOjk4MHB4ICovXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzVlbSkge1xyXG4gIC8qIGJpZyBsYW5kc2NhcGUgdGFibGV0cywgbGFwdG9wcywgYW5kIGRlc2t0b3BzIHdpZHRoOjEyMDBweCAqL1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMGVtKSB7XHJcbiAgLyogaGktcmVzIGxhcHRvcHMgYW5kIGRlc2t0b3BzIHdpZHRoOjE5MjBweCAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modals/person/person.component.html":
/*!*****************************************************!*\
  !*** ./src/app/modals/person/person.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h2 class=\"modal-title\"><b>{{data.name}}</b></h2>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body d-flex flex-column\">\r\n  <div class=\"d-flex flex-column flex-lg-row\">\r\n    <div>\r\n      <img *ngIf=\"data.profile_path\" src=\"https://image.tmdb.org/t/p/w500/{{data.profile_path}}\" alt=\"{{data.title}}\">\r\n      <img *ngIf=\"!data.profile_path\" src=\"../../assets/film-poster-placeholder.png\" alt=\"{{data.title}}\">\r\n    </div>\r\n    <div class=\"p-2 d-flex flex-column\">\r\n      <div class=\"p-2\" *ngIf=\"data.biography\">\r\n        <h5><b>Bio</b></h5>\r\n        <p>{{data.biography}}</p>\r\n      </div>\r\n      <div class=\"d-flex flex-row flex-wrap p-1\">\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.place_of_birth\">\r\n          <h6 class=\"flex-fill\"><b>Birthday:</b></h6>\r\n          <p>{{data.birthday}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-9\" *ngIf=\"data.place_of_birth\">\r\n          <h6 class=\"flex-fill\"><b>Place of Birth:</b></h6>\r\n          <p>{{data.place_of_birth}}</p>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <a *ngIf=\"data.imdb_id\" class=\"btn btn-warning m-2\" href=\"https://www.imdb.com/name/{{data.imdb_id}}\" target=\"_blank\" role=\"button\"><b>IMDB Page</b></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modals/person/person.component.ts":
/*!***************************************************!*\
  !*** ./src/app/modals/person/person.component.ts ***!
  \***************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var PersonComponent = /** @class */ (function () {
    function PersonComponent(activeModal) {
        this.activeModal = activeModal;
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PersonComponent.prototype, "data", void 0);
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/modals/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/modals/person/person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/modals/tvshow/tvshow.component.css":
/*!****************************************************!*\
  !*** ./src/app/modals/tvshow/tvshow.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  max-height: 400px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  display: none;\r\n}\r\n.poster {\r\n  background-color: white;\r\n  height: 100%;\r\n  border-radius: 1%;\r\n}\r\n/*MEDIA QUERIES*/\r\n@media (min-width:20em) {\r\n  /* smartphones width:320px */\r\n}\r\n@media (min-width:30em) {\r\n  /* smaller tablets width:480px */\r\n  img {\r\n    display: block;\r\n  }\r\n}\r\n@media (min-width:48em) {\r\n  /* portrait tablets width:768px */\r\n}\r\n@media (min-width:61.25em) {\r\n  /* tablet, landscape iPad, lo-res laptops ands desktops width:980px */\r\n}\r\n@media (min-width:75em) {\r\n  /* big landscape tablets, laptops, and desktops width:1200px */\r\n}\r\n@media (min-width:120em) {\r\n  /* hi-res laptops and desktops width:1920px */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWxzL3R2c2hvdy90dnNob3cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQztJQUNFLGNBQWM7RUFDaEI7QUFDRjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxxRUFBcUU7QUFDdkU7QUFDQTtFQUNFLDhEQUE4RDtBQUNoRTtBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DIiwiZmlsZSI6InNyYy9hcHAvbW9kYWxzL3R2c2hvdy90dnNob3cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5wb3N0ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAxJTtcclxufVxyXG4vKk1FRElBIFFVRVJJRVMqL1xyXG5AbWVkaWEgKG1pbi13aWR0aDoyMGVtKSB7XHJcbiAgLyogc21hcnRwaG9uZXMgd2lkdGg6MzIwcHggKi9cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDozMGVtKSB7XHJcbiAgLyogc21hbGxlciB0YWJsZXRzIHdpZHRoOjQ4MHB4ICovXHJcbiAgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDo0OGVtKSB7XHJcbiAgLyogcG9ydHJhaXQgdGFibGV0cyB3aWR0aDo3NjhweCAqL1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjYxLjI1ZW0pIHtcclxuICAvKiB0YWJsZXQsIGxhbmRzY2FwZSBpUGFkLCBsby1yZXMgbGFwdG9wcyBhbmRzIGRlc2t0b3BzIHdpZHRoOjk4MHB4ICovXHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6NzVlbSkge1xyXG4gIC8qIGJpZyBsYW5kc2NhcGUgdGFibGV0cywgbGFwdG9wcywgYW5kIGRlc2t0b3BzIHdpZHRoOjEyMDBweCAqL1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjEyMGVtKSB7XHJcbiAgLyogaGktcmVzIGxhcHRvcHMgYW5kIGRlc2t0b3BzIHdpZHRoOjE5MjBweCAqL1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modals/tvshow/tvshow.component.html":
/*!*****************************************************!*\
  !*** ./src/app/modals/tvshow/tvshow.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h2 class=\"modal-title\"><b>{{data.name}}</b></h2>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body d-flex flex-column\">\r\n  <div class=\"d-flex flex-column flex-lg-row\">\r\n    <div class=\"d-flex flex-column align-items-center poster\">\r\n      <img *ngIf=\"data.networks.length > 0 && data.networks[0].logo_path\" class=\"network-logo p-2\" src=\"https://image.tmdb.org/t/p/w200{{data.networks[0].logo_path}}\" alt=\"data.networks[0].name\" width=\"100\">\r\n      <img *ngIf=\"data.poster_path\" src=\"https://image.tmdb.org/t/p/w500/{{data.poster_path}}\" alt=\"{{data.name}}\">\r\n      <img *ngIf=\"!data.poster_path\" src=\"../../assets/film-poster-placeholder.png\" alt=\"{{data.name}}\">\r\n    </div>\r\n    <div class=\"p-2 d-flex flex-column\">\r\n      <div class=\"p-2\" *ngIf=\"data.overview\">\r\n        <h5><b>Overview</b></h5>\r\n        <p>{{data.overview}}</p>\r\n      </div>\r\n      <div class=\"d-flex flex-row flex-wrap p-1\">\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-4\" *ngIf=\"data.status\">\r\n          <h6 class=\"flex-fill\"><b>Status:</b></h6>\r\n          <p>{{data.status}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-4\" *ngIf=\"data.type\">\r\n          <h6 class=\"flex-fill\"><b>Type:</b></h6>\r\n          <p>{{data.type}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-4\" *ngIf=\"data.origin_country.length > 0\">\r\n          <h6 class=\"flex-fill\"><b>Origin Country:</b></h6>\r\n          <p>{{data.origin_country[0]}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.number_of_seasons\">\r\n          <h6 class=\"flex-fill\"><b># Seasons:</b></h6>\r\n          <p>{{data.number_of_seasons}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.number_of_episodes\">\r\n          <h6 class=\"flex-fill\"><b># Episodes:</b></h6>\r\n          <p>{{data.number_of_episodes}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.first_air_date\">\r\n          <h6 class=\"flex-fill\"><b>First Air Date:</b></h6>\r\n          <p>{{data.first_air_date}}</p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-3\" *ngIf=\"data.last_air_date\">\r\n          <h6 class=\"flex-fill\"><b>Last Air Date:</b></h6>\r\n          <p>{{data.last_air_date}}</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"p-2 d-flex flex-row flex-wrap\">\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-6\" *ngIf=\"data.last_episode_to_air\">\r\n          <h6 class=\"flex-fill\"><b>Last Episode to Air:</b></h6>\r\n          <p style=\"margin: 0;\">\"{{data.last_episode_to_air.name}}\"</p>\r\n          <p><i>Season {{data.last_episode_to_air.season_number}} - Episode\r\n              {{data.last_episode_to_air.episode_number}}</i></p>\r\n        </div>\r\n        <div class=\"p-2 flex-fill d-flex flex-column col-6\" *ngIf=\"data.next_episode_to_air\">\r\n          <h6 class=\"flex-fill\"><b>Next Episode to Air:</b></h6>\r\n          <p style=\"margin: 0;\">\"{{data.next_episode_to_air.name}}\"</p>\r\n          <p><i>Season {{data.next_episode_to_air.season_number}} - Episode {{data.next_episode_to_air.episode_number}}</i></p>\r\n        </div>\r\n      </div>\r\n      <div class=\"row d-flex flex-column p-2\">\r\n        <div class=\"col-12\">\r\n          <a *ngIf=\"data.homepage\" class=\"btn btn-info\" href=\"{{data.homepage}}\" target=\"_blank\"\r\n            role=\"button\"><b>Visit Website</b></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modals/tvshow/tvshow.component.ts":
/*!***************************************************!*\
  !*** ./src/app/modals/tvshow/tvshow.component.ts ***!
  \***************************************************/
/*! exports provided: TvshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvshowComponent", function() { return TvshowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var TvshowComponent = /** @class */ (function () {
    function TvshowComponent(activeModal) {
        this.activeModal = activeModal;
    }
    TvshowComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TvshowComponent.prototype, "data", void 0);
    TvshowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tvshow',
            template: __webpack_require__(/*! ./tvshow.component.html */ "./src/app/modals/tvshow/tvshow.component.html"),
            styles: [__webpack_require__(/*! ./tvshow.component.css */ "./src/app/modals/tvshow/tvshow.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"]])
    ], TvshowComponent);
    return TvshowComponent;
}());



/***/ }),

/***/ "./src/app/models/movie.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/movie.model.ts ***!
  \***************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie() {
        var _this = this;
        this.getBackdrop = function () { return "https://image.tmdb.org/t/p/original/" + _this.backdroppath; };
        this.shortOverview = function () { return _this.overview.substring(0, 230) + " " + (_this.overview.length > 230 ? '(...)' : ''); };
        this.getYear = function () { return _this.releasedate.getFullYear(); };
    }
    return Movie;
}());



/***/ }),

/***/ "./src/app/models/person.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/person.model.ts ***!
  \****************************************/
/*! exports provided: Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return Person; });
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.getBackdrop = function () { return "https://image.tmdb.org/t/p/original/" + _this.profilepath; };
    }
    return Person;
}());



/***/ }),

/***/ "./src/app/models/tvshow.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/tvshow.model.ts ***!
  \****************************************/
/*! exports provided: TvShow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TvShow", function() { return TvShow; });
var TvShow = /** @class */ (function () {
    function TvShow() {
        var _this = this;
        this.getBackdrop = function () { return "https://image.tmdb.org/t/p/original/" + _this.backdroppath; };
        this.shortOverview = function () { return _this.overview.substring(0, 230) + " " + (_this.overview.length > 230 ? '(...)' : ''); };
    }
    return TvShow;
}());



/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _models_movie_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/movie.model */ "./src/app/models/movie.model.ts");
/* harmony import */ var _models_tvshow_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/tvshow.model */ "./src/app/models/tvshow.model.ts");
/* harmony import */ var _models_person_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./models/person.model */ "./src/app/models/person.model.ts");







var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.apiUrl = 'https://api.themoviedb.org/3';
        this.apiKey = 'cf21725ea4e9cc528e863ee2adf59678';
        // subjects
        this.topMoviesUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.topShowsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.topPersonsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.singleDetailsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchDetailsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    /** GET top 20 movies from the server */
    MovieService.prototype.getMovies = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.http.get(this.apiUrl + "/movie/popular?api_key=" + this.apiKey + "&language=en-US&page=1")
            .subscribe(function (moviesData) {
            var finalMovies = [];
            moviesData.results.forEach(function (entry) {
                var movie = new _models_movie_model__WEBPACK_IMPORTED_MODULE_4__["Movie"]();
                movie.votecount = entry.vote_count;
                movie.id = entry.id;
                movie.video = entry.video;
                movie.voteaverage = entry.vote_average;
                movie.title = entry.title;
                movie.popularity = entry.popularity;
                movie.posterpath = entry.poster_path;
                movie.originallanguage = entry.original_language;
                movie.originaltitle = entry.original_title;
                movie.genreids = entry.genre_ids;
                movie.backdroppath = entry.backdrop_path;
                movie.adult = entry.adult;
                movie.overview = entry.overview;
                movie.releasedate = new Date(entry.release_date);
                finalMovies.push(movie);
            });
            console.log(finalMovies);
            _this.topMoviesUpdated.next(finalMovies);
        });
    };
    MovieService.prototype.getMovieUpdateListener = function () {
        return this.topMoviesUpdated.asObservable();
        // listen to the subject
    };
    /** GET top 20 tv shows from the server */
    MovieService.prototype.getTvShows = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.http.get(this.apiUrl + "/tv/popular?api_key=" + this.apiKey + "&language=en-US&page=1")
            .subscribe(function (tvData) {
            var finalShows = [];
            tvData.results.forEach(function (entry) {
                var show = new _models_tvshow_model__WEBPACK_IMPORTED_MODULE_5__["TvShow"]();
                show.originalname = entry.original_name;
                show.genreids = entry.genre_ids;
                show.name = entry.name;
                show.popularity = entry.popularity;
                show.origincountry = entry.origin_country;
                show.votecount = entry.vote_count;
                show.firstairdate = entry.first_air_date;
                show.backdroppath = entry.backdrop_path;
                show.originallanguage = entry.original_language;
                show.id = entry.id;
                show.voteaverage = entry.vote_average;
                show.overview = entry.overview;
                show.posterpath = entry.poster_path;
                finalShows.push(show);
            });
            console.log(finalShows);
            _this.topShowsUpdated.next(finalShows);
        });
    };
    MovieService.prototype.getShowUpdateListener = function () {
        return this.topShowsUpdated.asObservable();
        // listen to the subject
    };
    MovieService.prototype.getPersons = function () {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.http.get(this.apiUrl + "/person/popular?api_key=" + this.apiKey + "&language=en-US&page=1")
            .subscribe(function (personData) {
            var finalPersons = [];
            personData.results.forEach(function (entry) {
                var person = new _models_person_model__WEBPACK_IMPORTED_MODULE_6__["Person"]();
                person.id = entry.id;
                person.profilepath = entry.profile_path;
                person.name = entry.name;
                person.popularity = entry.popularity;
                person.adult = entry.adult;
                person.knownfor = entry.known_for;
                finalPersons.push(person);
            });
            console.log(finalPersons);
            _this.topPersonsUpdated.next(finalPersons);
        });
    };
    MovieService.prototype.getPersonUpdateListener = function () {
        return this.topPersonsUpdated.asObservable();
        // listen to the subject
    };
    MovieService.prototype.getSingleDetails = function (currentId, currentType) {
        var _this = this;
        this.http.get(this.apiUrl + "/" + currentType + "/" + currentId + "?api_key=" + this.apiKey + "&language=en-US&page=1")
            .subscribe(function (currentData) {
            console.log(currentData);
            _this.singleDetailsUpdated.next(currentData);
        });
    };
    MovieService.prototype.getSingleDetailsUpdateListener = function () {
        return this.singleDetailsUpdated.asObservable();
        // listen to the subject
    };
    MovieService.prototype.getSearch = function (currentSearch) {
        var _this = this;
        // tslint:disable-next-line: max-line-length
        this.http.get(this.apiUrl + "/search/multi?api_key=" + this.apiKey + "&language=en-US&page=1&include_adult=false&query=" + currentSearch.split(' ').join('+'))
            .subscribe(function (currentData) {
            _this.searchDetailsUpdated.next(currentData.results);
        });
    };
    MovieService.prototype.getSearchUpdateListener = function () {
        return this.searchDetailsUpdated.asObservable();
        // listen to the subject
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ezzar\OneDrive\Bureau\MovieDB\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map