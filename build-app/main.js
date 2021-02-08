(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jeremias/Desktop/file-manager/src/main.ts */"zUnb");


/***/ }),

/***/ "0MPI":
/*!*****************************************************************!*\
  !*** ./src/app/components/banner-user/banner-user.component.ts ***!
  \*****************************************************************/
/*! exports provided: BannerUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerUserComponent", function() { return BannerUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/icon.component */ "WaCx");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class BannerUserComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerUserComponent.ɵfac = function BannerUserComponent_Factory(t) { return new (t || BannerUserComponent)(); };
BannerUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerUserComponent, selectors: [["app-banner-user"]], decls: 18, vars: 0, consts: [[1, "container__banner__user", "animate"], [1, "user_navbar"], [1, "user"], ["width", "30px", "route", "../../../assets/icon/graph.svg"], ["width", "30px", "route", "../../../assets/icon/search.svg"], ["width", "30px", "route", "../../../assets/icon/avatar.svg"], [1, "user", "welcome__text"], [1, "fadeUp"], [1, "navigation"], [1, "links"], ["mat-button", "", 1, "selected"], ["mat-button", "", 1, "disabled"]], template: function BannerUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Hello Jeremias,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Bienvenido de nuevo a tu gestor de archivos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "article", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Internal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "External");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".container__banner__user[_ngcontent-%COMP%]{\n    height: 250px;\n    width: 100%;\n    padding:0;\n    background-color: rgb(68, 29, 209);    \n}\n\n.user_navbar[_ngcontent-%COMP%]{\n    display:flex;\n    justify-content: space-between;\n}\n\n.user[_ngcontent-%COMP%]{\n\n    margin: 8px 6px;\n\n}\n\n.welcome__text[_ngcontent-%COMP%]{\n    color:white;\n    margin:30px 20px;\n}\n\n.welcome__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 24px;\n    margin:0;\n    \n}\n\n.welcome__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-size: 16px;\n}\n\n.navigation[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: -10px;\n}\n\n.links[_ngcontent-%COMP%]{\n    border-top-left-radius: 18px;\n    border-top-right-radius: 15px;\n    position: relative;\n    width: 300px;\n    display:flex;\n    justify-content: space-around;\n    padding: 0px 5px;\n    height:50px;\n    bottom:-20px;\n    background-color:white;\n   \n}\n\n.selected[_ngcontent-%COMP%]{\n    border-bottom: 2px solid rgb(103, 77, 197);\n    border-radius: 0;\n    text-align: center;\n    \n}\n\n.links[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    text-align: center;\n    color:rgb(36, 10, 131);\n}\n\n.disabled[_ngcontent-%COMP%]{\n    color:rgb(164, 143, 241) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFNBQVM7SUFDVCxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLGVBQWU7O0FBRW5COztBQU1BO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsUUFBUTs7QUFFWjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2QyIsImZpbGUiOiJiYW5uZXItdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9fYmFubmVyX191c2Vye1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzowO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgMjksIDIwOSk7ICAgIFxufVxuXG4udXNlcl9uYXZiYXJ7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnVzZXJ7XG5cbiAgICBtYXJnaW46IDhweCA2cHg7XG5cbn1cblxuXG5cblxuXG4ud2VsY29tZV9fdGV4dHtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBtYXJnaW46MzBweCAyMHB4O1xufVxuXG4ud2VsY29tZV9fdGV4dCBoMXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luOjA7XG4gICAgXG59XG5cbi53ZWxjb21lX190ZXh0IHB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5cbi5uYXZpZ2F0aW9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbn1cblxuLmxpbmtze1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE4cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBoZWlnaHQ6NTBweDtcbiAgICBib3R0b206LTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgIFxufVxuXG4uc2VsZWN0ZWR7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxMDMsIDc3LCAxOTcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8qIHdpZHRoOiA3cHg7ICovXG59XG5cbi5saW5rcyBidXR0b257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOnJnYigzNiwgMTAsIDEzMSk7XG59XG5cbi5kaXNhYmxlZHtcbiAgICBjb2xvcjpyZ2IoMTY0LCAxNDMsIDI0MSkgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-user',
                templateUrl: './banner-user.component.html',
                styleUrls: ['./banner-user.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "0MeA":
/*!*******************************************************************!*\
  !*** ./src/app/components/banner-files/banner-files.component.ts ***!
  \*******************************************************************/
/*! exports provided: BannerFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerFilesComponent", function() { return BannerFilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerFilesComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerFilesComponent.ɵfac = function BannerFilesComponent_Factory(t) { return new (t || BannerFilesComponent)(); };
BannerFilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerFilesComponent, selectors: [["app-banner-files"]], decls: 19, vars: 0, consts: [[1, "container__banner__user", "animate"], [1, "user", "welcome__text", "animate"], ["src", "../../../assets/icon/settings.svg", "alt", "logo"], [1, "container__logo__banner", "animate"], ["src", "../../../assets/images/storage-total.svg", "alt", "logo"], [1, "navigation"], [1, "links"]], template: function BannerFilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Detalles de almacenamiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total space");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "256 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Used");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "196 GB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container__banner__user[_ngcontent-%COMP%]{\n    height: 410px;\n    width: 100%;\n    padding-top:30px;\n    margin-top:-35px;\n    background-color: rgb(68, 29, 209);    \n}\n \n \n\n.welcome__text[_ngcontent-%COMP%]{\n    color:white;\n    margin:30px 15px;\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n}\n \n \n\n.welcome__text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 22px;\n    margin:0;\n    \n}\n \n \n\n.welcome__text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width:20px;\n}\n \n \n\n.navigation[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 25px;\n}\n \n \n\n.links[_ngcontent-%COMP%]{\n    border-top-left-radius: 18px;\n    border-top-right-radius: 15px;\n    position: relative;\n    border:none;\n    width: 410px;\n    display:flex;\n    justify-content: space-around;\n    padding: 0px 5px;\n    padding-top:10px;\n    height:60px;\n    bottom:-50px;\n    background-color:white;\n   \n}\n \n \n\n.links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    margin-top:-3px;\n}\n \n \n\n.container__logo__banner[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n}\n \n \n\n.container__logo__banner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width:200px;\n    height: 180px;\n}\n \n \n\n.links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    color:rgb(156, 146, 146);\n    font-family: helvetica;\n}\n \n \n\n.links[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-size:20px;\n    color:rgb(24, 13, 121);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci1maWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGtDQUFrQztBQUN0Qzs7OztBQUlBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixRQUFROztBQUVaOzs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7Ozs7QUFHQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7OztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7O0FBRTFCOzs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7OztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7OztBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJiYW5uZXItZmlsZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfX2Jhbm5lcl9fdXNlcntcbiAgICBoZWlnaHQ6IDQxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOjMwcHg7XG4gICAgbWFyZ2luLXRvcDotMzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDI5LCAyMDkpOyAgICBcbn1cbiBcbiBcblxuLndlbGNvbWVfX3RleHR7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgbWFyZ2luOjMwcHggMTVweDtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53ZWxjb21lX190ZXh0IGgxe1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBtYXJnaW46MDtcbiAgICBcbn1cblxuLndlbGNvbWVfX3RleHQgaW1ne1xuICAgIHdpZHRoOjIwcHg7XG59XG5cblxuLm5hdmlnYXRpb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5saW5rc3tcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxOHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXI6bm9uZTtcbiAgICB3aWR0aDogNDEwcHg7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgcGFkZGluZy10b3A6MTBweDtcbiAgICBoZWlnaHQ6NjBweDtcbiAgICBib3R0b206LTUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgIFxufVxuXG4ubGlua3MgZGl2e1xuICAgIG1hcmdpbi10b3A6LTNweDtcbn0gXG4gXG4uY29udGFpbmVyX19sb2dvX19iYW5uZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcl9fbG9nb19fYmFubmVyIGltZ3tcbiAgICB3aWR0aDoyMDBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xufVxuXG5cbi5saW5rcyBkaXYgcHtcbiAgICBjb2xvcjpyZ2IoMTU2LCAxNDYsIDE0Nik7XG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcbn1cblxuLmxpbmtzIGRpdiBoMXtcbiAgICBmb250LXNpemU6MjBweDtcbiAgICBjb2xvcjpyZ2IoMjQsIDEzLCAxMjEpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerFilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-files',
                templateUrl: './banner-files.component.html',
                styleUrls: ['./banner-files.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3LCs":
/*!*********************************************!*\
  !*** ./src/app/services/service.helpers.ts ***!
  \*********************************************/
/*! exports provided: ServiceHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHelpers", function() { return ServiceHelpers; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ServiceHelpers {
    constructor(router) {
        this.router = router;
    }
    to(route, time = 100) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(time).subscribe(() => {
            this.router.navigate([route]);
        });
    }
}
ServiceHelpers.ɵfac = function ServiceHelpers_Factory(t) { return new (t || ServiceHelpers)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ServiceHelpers.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceHelpers, factory: ServiceHelpers.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceHelpers, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "7qrk":
/*!**************************************************!*\
  !*** ./src/app/services/service.list-storage.ts ***!
  \**************************************************/
/*! exports provided: ListStorage, ListFolders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStorage", function() { return ListStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFolders", function() { return ListFolders; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ListStorage {
    constructor() {
    }
    list() {
        return [
            { name: 'Local', percentage: '98%', img: "../../../assets/images/folder.svg" },
            { name: 'iCloud', percentage: '64%', img: "../../../assets/images/icloud.svg" },
            { name: 'Google Drive', percentage: '46%', img: "../../../assets/images/google-drive.svg" },
            { name: 'Dropbox', percentage: '80%', img: "../../../assets/images/dropbox.svg" },
            { name: 'Mega', percentage: '10%', img: "../../../assets/images/mega.svg" }
        ];
    }
}
ListStorage.ɵfac = function ListStorage_Factory(t) { return new (t || ListStorage)(); };
ListStorage.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListStorage, factory: ListStorage.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListStorage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
class ListFolders {
    constructor() {
    }
    list() {
        return [
            {
                name: 'My favorite',
                created: 'Created 03/2020',
                image: '../../../assets/images/star.svg'
            },
            {
                name: 'Portfolio',
                created: 'Created 08/2021',
                image: '../../../assets/images/loading.svg'
            },
            {
                name: 'Photos',
                created: 'Created 03/2020',
                image: '../../../assets/images/image.svg'
            },
            {
                name: 'My Music',
                created: 'Created 03/2021',
                image: '../../../assets/images/music.svg'
            }
        ];
    }
}


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "FwYz":
/*!**********************************************!*\
  !*** ./src/app/routing/start-app.routing.ts ***!
  \**********************************************/
/*! exports provided: ROUTING_MAIN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTING_MAIN", function() { return ROUTING_MAIN; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_files_files_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/files/files.page */ "Luc2");
/* harmony import */ var _pages_main_main_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/main/main.page */ "TQIn");
/* harmony import */ var _pages_start_start_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/start/start.page */ "x2OB");




const ROUTES = [
    { path: 'start', component: _pages_start_start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"] },
    { path: 'main', component: _pages_main_main_page__WEBPACK_IMPORTED_MODULE_2__["MainPage"] },
    { path: 'main/files', component: _pages_files_files_page__WEBPACK_IMPORTED_MODULE_1__["FilesPage"] },
    { path: '', component: _pages_start_start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"], },
    { path: '**', component: _pages_start_start_page__WEBPACK_IMPORTED_MODULE_3__["StartPage"] }
];
const ROUTING_MAIN = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "HxzI":
/*!*******************************************************************!*\
  !*** ./src/app/components/list-storage/list-storage.component.ts ***!
  \*******************************************************************/
/*! exports provided: ListStorageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListStorageComponent", function() { return ListStorageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service.helpers */ "3LCs");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icon/icon.component */ "WaCx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ListStorageComponent_article_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListStorageComponent_article_3_Template_article_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toFolder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Disponible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.percentage);
} }
class ListStorageComponent {
    constructor(route) {
        this.route = route;
        this.list = [];
    }
    ngOnInit() { }
    toFolder() {
        this.route.to("/main/files");
    }
}
ListStorageComponent.ɵfac = function ListStorageComponent_Factory(t) { return new (t || ListStorageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_helpers__WEBPACK_IMPORTED_MODULE_1__["ServiceHelpers"])); };
ListStorageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListStorageComponent, selectors: [["app-list-storage"]], inputs: { list: "list" }, decls: 4, vars: 1, consts: [[1, "list__storage", "fadeInLeft"], ["matRipple", "", 1, "fab__button"], ["route", "../../../assets/icon/add.svg"], ["matRipple", "", "class", "container__item animate", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "container__item", "animate", 3, "click"], [1, "container__image"], ["alt", "logo", 1, "toIcon", "scale", 3, "src"], [1, "title__item"], [1, "available"], [1, "percentage"], ["route", "../../../assets/icon/more.svg"]], template: function ListStorageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListStorageComponent_article_3_Template, 12, 3, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MatRipple"], _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".container__item[_ngcontent-%COMP%]{\n    display:flex;\n    justify-content: space-between;\n    align-items: center;\n    width:300px;\n    margin: 20px;\n    border-radius:17px;\n    cursor:pointer;\n    background-color: rgb(243, 235, 235);\n    height: 105px;\n    transition:.5s;\n}\n.container__item[_ngcontent-%COMP%]:hover   *[_ngcontent-%COMP%] {\n    opacity:.9;\n    transition:.3s;\n}\n.percentage[_ngcontent-%COMP%]{\n    color: rgb(10, 17, 104);\n    font-size:15px;\n    font-family: sans-serif;\n}\n.title__item[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    color: rgb(10, 17, 104);\n    margin-bottom:-5px;\n}\n.available[_ngcontent-%COMP%]{\n    color: rgb(140, 149, 151);\n}\n.container__image[_ngcontent-%COMP%]{\n    padding-left: 15px; \n}\n.list__storage[_ngcontent-%COMP%]{\n    display:flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-top:25px;\n}\n.fab__button[_ngcontent-%COMP%]{\n    background-color: rgb(25, 25, 133);\n    width: 50px;\n    cursor:pointer;\n    display:flex;\n    position: absolute;\n    bottom: 10px;\n    right: 8px;\n    z-index: 10;\n    padding-bottom:2px;\n    justify-content:flex-end;\n    flex-direction: column;\n    align-items: center;\n    border-radius: 50%;\n    height:46px;\n    animation: scaleIn 1s .8s linear;\n}\n.fab__button[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{\n    margin-top:-13px;\n    transform: scale(.8);\n    transition:1s;\n    \n}\n@keyframes scaleIn{\n    10%{\n        transform: scale(.7);\n    }\n    \n    90%{\n        transform: scale(1.2);\n    }\n    100%{\n        transform: scale(1);\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Qtc3RvcmFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUdBO0lBQ0ksa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsYUFBYTs7QUFFakI7QUFFQTtJQUNJO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJsaXN0LXN0b3JhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJfX2l0ZW17XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOjMwMHB4O1xuICAgIG1hcmdpbjogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOjE3cHg7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjM1LCAyMzUpO1xuICAgIGhlaWdodDogMTA1cHg7XG4gICAgdHJhbnNpdGlvbjouNXM7XG59XG4uY29udGFpbmVyX19pdGVtOmhvdmVyICoge1xuICAgIG9wYWNpdHk6Ljk7XG4gICAgdHJhbnNpdGlvbjouM3M7XG59XG4ucGVyY2VudGFnZXtcbiAgICBjb2xvcjogcmdiKDEwLCAxNywgMTA0KTtcbiAgICBmb250LXNpemU6MTVweDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbi50aXRsZV9faXRlbSBoMXtcbiAgICBjb2xvcjogcmdiKDEwLCAxNywgMTA0KTtcbiAgICBtYXJnaW4tYm90dG9tOi01cHg7XG59XG4uYXZhaWxhYmxle1xuICAgIGNvbG9yOiByZ2IoMTQwLCAxNDksIDE1MSk7XG59XG5cbi5jb250YWluZXJfX2ltYWdle1xuICAgIHBhZGRpbmctbGVmdDogMTVweDsgXG59XG5cbi5saXN0X19zdG9yYWdle1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLXRvcDoyNXB4O1xufVxuXG5cbi5mYWJfX2J1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUsIDI1LCAxMzMpO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiA4cHg7XG4gICAgei1pbmRleDogMTA7XG4gICAgcGFkZGluZy1ib3R0b206MnB4O1xuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGhlaWdodDo0NnB4O1xuICAgIGFuaW1hdGlvbjogc2NhbGVJbiAxcyAuOHMgbGluZWFyO1xufVxuXG4uZmFiX19idXR0b24gKntcbiAgICBtYXJnaW4tdG9wOi0xM3B4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xuICAgIHRyYW5zaXRpb246MXM7XG4gICAgXG59XG5cbkBrZXlmcmFtZXMgc2NhbGVJbntcbiAgICAxMCV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjcpO1xuICAgIH1cbiAgICBcbiAgICA5MCV7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICB9XG4gICAgMTAwJXtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListStorageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-storage',
                templateUrl: './list-storage.component.html',
                styleUrls: ['./list-storage.component.css']
            }]
    }], function () { return [{ type: src_app_services_service_helpers__WEBPACK_IMPORTED_MODULE_1__["ServiceHelpers"] }]; }, { list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Luc2":
/*!*******************************************!*\
  !*** ./src/app/pages/files/files.page.ts ***!
  \*******************************************/
/*! exports provided: FilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesPage", function() { return FilesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_list_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service.list-storage */ "7qrk");
/* harmony import */ var _components_banner_files_banner_files_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/banner-files/banner-files.component */ "0MeA");
/* harmony import */ var _components_list_files_list_files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list-files/list-files.component */ "qyzq");





class FilesPage {
    constructor(fileList) {
        this.fileList = fileList;
        this.fileListBand = [];
    }
    ngOnInit() {
        this.fileListBand = this.fileList.list();
    }
}
FilesPage.ɵfac = function FilesPage_Factory(t) { return new (t || FilesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_list_storage__WEBPACK_IMPORTED_MODULE_1__["ListFolders"])); };
FilesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FilesPage, selectors: [["files-page"]], decls: 3, vars: 1, consts: [[1, "fadeInLeft"], [3, "listFileLists"]], template: function FilesPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner-files");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-list-files", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listFileLists", ctx.fileListBand);
    } }, directives: [_components_banner_files_banner_files_component__WEBPACK_IMPORTED_MODULE_2__["BannerFilesComponent"], _components_list_files_list_files_component__WEBPACK_IMPORTED_MODULE_3__["ListFilesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlcy5wYWdlLmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'files-page',
                templateUrl: './files.page.html',
                styleUrls: [
                    './files.page.css'
                ]
            }]
    }], function () { return [{ type: src_app_services_service_list_storage__WEBPACK_IMPORTED_MODULE_1__["ListFolders"] }]; }, null); })();


/***/ }),

/***/ "Plzc":
/*!*******************************************************************!*\
  !*** ./src/app/components/start-banner/start-banner.component.ts ***!
  \*******************************************************************/
/*! exports provided: StartBannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartBannerComponent", function() { return StartBannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_services_service_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/service.helpers */ "3LCs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loading-page/loading-page.component */ "T23M");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");








function StartBannerComponent_app_loading_page_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-page");
} }
function StartBannerComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "article", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organiza tus archivos en un solo lugar!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "article", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Organiza tus archivos y carpetas, y aprovecha el almacenamiento en la nube ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "article", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StartBannerComponent_section_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toMain(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "EMPEZAR ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class StartBannerComponent {
    constructor(helper) {
        this.helper = helper;
        this.isLoading = false;
    }
    ngOnInit() {
    }
    toMain() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(300).subscribe(() => {
            this.helper.to("/main", 1600);
            this.addTimerForLoading(1600);
        });
    }
    addTimerForLoading(time = 100) {
        this.isLoading = true;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(time).subscribe(() => {
            this.isLoading = false;
        });
    }
}
StartBannerComponent.ɵfac = function StartBannerComponent_Factory(t) { return new (t || StartBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_helpers__WEBPACK_IMPORTED_MODULE_2__["ServiceHelpers"])); };
StartBannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartBannerComponent, selectors: [["app-start-banner"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "container__slide", 4, "ngIf"], [1, "container__slide"], [1, "container__image", "animate"], ["src", "../../../assets/images/start-app.svg", "alt", "start app logo"], [1, "container__content", "animate"], [1, "title__banner"], [1, "container__content", "description", "fadeUp"], ["matRipple", "", 1, "container__content"], ["mat-button", "", 1, "btn__start", "animate", 3, "click"]], template: function StartBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StartBannerComponent_app_loading_page_0_Template, 1, 0, "app-loading-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StartBannerComponent_section_1_Template, 12, 0, "section", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_4__["LoadingPageComponent"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRipple"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".container__slide[_ngcontent-%COMP%] {\n    display: flex;\n    padding-top: 10px;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.container__image[_ngcontent-%COMP%]{\n    width: 410px;\n    height: 420px;\n}\n@media screen and (max-width: 620px){\n    .container__image[_ngcontent-%COMP%]{\n        width: 319px;\n        height: 320px;\n    }\n}\n.container__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: inherit;\n    margin-top:10px;\n}\n.title__banner[_ngcontent-%COMP%]{\n    font-weight: 700;\n    font-size:22px;\n    margin:3px;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    color: rgb(37, 10, 99);\n}\n.container__content[_ngcontent-%COMP%]{\n    padding:8px;\n}\n.description[_ngcontent-%COMP%]{\n    color: #444;\n    font-size:16px;\n    font-family: Arial, Helvetica, sans-serif;\n    width:318px;\n}\n.btn__start[_ngcontent-%COMP%]{\n    width: 290px;\n    color: white;\n    border:none !important;\n    border-radius: 8px !important;\n    font-family: sans-serif;\n    background-color: rgb(39, 16, 119);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LWJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSTtRQUNJLFlBQVk7UUFDWixhQUFhO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixnREFBZ0Q7SUFDaEQsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixrQ0FBa0M7QUFDdEMiLCJmaWxlIjoic3RhcnQtYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyX19zbGlkZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRhaW5lcl9faW1hZ2V7XG4gICAgd2lkdGg6IDQxMHB4O1xuICAgIGhlaWdodDogNDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCl7XG4gICAgLmNvbnRhaW5lcl9faW1hZ2V7XG4gICAgICAgIHdpZHRoOiAzMTlweDtcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcbiAgICB9XG59XG4uY29udGFpbmVyX19pbWFnZSBpbWd7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgbWFyZ2luLXRvcDoxMHB4O1xufVxuLnRpdGxlX19iYW5uZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6MjJweDtcbiAgICBtYXJnaW46M3B4O1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogcmdiKDM3LCAxMCwgOTkpO1xufVxuXG4uY29udGFpbmVyX19jb250ZW50e1xuICAgIHBhZGRpbmc6OHB4O1xufVxuXG4uZGVzY3JpcHRpb257XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgZm9udC1zaXplOjE2cHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgd2lkdGg6MzE4cHg7XG59XG5cbi5idG5fX3N0YXJ0e1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDE2LCAxMTkpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartBannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-start-banner',
                templateUrl: './start-banner.component.html',
                styleUrls: ['./start-banner.component.css']
            }]
    }], function () { return [{ type: src_app_services_service_helpers__WEBPACK_IMPORTED_MODULE_2__["ServiceHelpers"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'file-manager';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "T23M":
/*!*******************************************************************!*\
  !*** ./src/app/components/loading-page/loading-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoadingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageComponent", function() { return LoadingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingPageComponent.ɵfac = function LoadingPageComponent_Factory(t) { return new (t || LoadingPageComponent)(); };
LoadingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingPageComponent, selectors: [["app-loading-page"]], decls: 3, vars: 0, consts: [[1, "container__loading"], [1, "item__image", "animate"], ["src", "../../../assets/images/loading.svg", "alt", "loading", 1, "scale"]], template: function LoadingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container__loading[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n}\n\n\n.item__image[_ngcontent-%COMP%]{\n    height:200px;\n    border-radius: 50%;\n    width: 200px;\n    background-color: rgb(243, 240, 240);\n}\n\n\n.item__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    transform:scale(.6);\n    width:inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCIiwiZmlsZSI6ImxvYWRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcl9fbG9hZGluZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cblxuLml0ZW1fX2ltYWdle1xuICAgIGhlaWdodDoyMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MCwgMjQwKTtcbn1cbi5pdGVtX19pbWFnZSBpbWd7XG4gICAgdHJhbnNmb3JtOnNjYWxlKC42KTtcbiAgICB3aWR0aDppbmhlcml0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-page',
                templateUrl: './loading-page.component.html',
                styleUrls: ['./loading-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TQIn":
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_service_list_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/service.list-storage */ "7qrk");
/* harmony import */ var _components_banner_user_banner_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/banner-user/banner-user.component */ "0MPI");
/* harmony import */ var _components_list_storage_list_storage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/list-storage/list-storage.component */ "HxzI");





class MainPage {
    constructor(storageList) {
        this.storageList = storageList;
        this.listStorage = [];
    }
    ngOnInit() {
        this.listStorage = this.storageList.list();
    }
}
MainPage.ɵfac = function MainPage_Factory(t) { return new (t || MainPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_service_list_storage__WEBPACK_IMPORTED_MODULE_1__["ListStorage"])); };
MainPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPage, selectors: [["main-page"]], decls: 4, vars: 1, consts: [[1, "fadeInLeft"], [3, "list"]], template: function MainPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner-user");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-list-storage", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx.listStorage);
    } }, directives: [_components_banner_user_banner_user_component__WEBPACK_IMPORTED_MODULE_2__["BannerUserComponent"], _components_list_storage_list_storage_component__WEBPACK_IMPORTED_MODULE_3__["ListStorageComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLnBhZ2UuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main-page',
                templateUrl: './main.page.html',
                styleUrls: [
                    './main.page.css'
                ]
            }]
    }], function () { return [{ type: src_app_services_service_list_storage__WEBPACK_IMPORTED_MODULE_1__["ListStorage"] }]; }, null); })();


/***/ }),

/***/ "WaCx":
/*!***************************************************!*\
  !*** ./src/app/components/icon/icon.component.ts ***!
  \***************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IconComponent {
    constructor() {
        this.route = '';
        this.width = '';
    }
    ngOnInit() {
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["app-icon"]], inputs: { route: "route", width: "width" }, decls: 1, vars: 1, consts: [["alt", "icon", 1, "icon", "animate", 3, "src"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.route, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["img[_ngcontent-%COMP%]{\n    width:27px;\n    margin:5px 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCIiwiZmlsZSI6Imljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcbiAgICB3aWR0aDoyN3B4O1xuICAgIG1hcmdpbjo1cHggOHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icon',
                templateUrl: './icon.component.html',
                styleUrls: ['./icon.component.css']
            }]
    }], function () { return []; }, { route: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _routing_start_app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/start-app.routing */ "FwYz");
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/pages.module */ "dgmN");
/* harmony import */ var _services_service_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/service.helpers */ "3LCs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");



// import { ComponentsModule } from './components/components.module';







// import { BannerFilesComponent } from './components/banner-files/banner-files.component';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_service_helpers__WEBPACK_IMPORTED_MODULE_7__["ServiceHelpers"]
    ], imports: [[
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
            _routing_start_app_routing__WEBPACK_IMPORTED_MODULE_5__["ROUTING_MAIN"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _pages_pages_module__WEBPACK_IMPORTED_MODULE_6__["PageModule"],
                    _routing_start_app_routing__WEBPACK_IMPORTED_MODULE_5__["ROUTING_MAIN"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
                ],
                providers: [
                    _services_service_helpers__WEBPACK_IMPORTED_MODULE_7__["ServiceHelpers"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");
/* harmony import */ var _routing_start_app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../routing/start-app.routing */ "FwYz");
/* harmony import */ var _services_service_list_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/service.list-storage */ "7qrk");
/* harmony import */ var _files_files_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files/files.page */ "Luc2");
/* harmony import */ var _main_main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.page */ "TQIn");
/* harmony import */ var _start_start_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start/start.page */ "x2OB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");


// import { BannerFilesComponent } from '../components/banner-files/banner-files.component';








class PageModule {
}
PageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageModule });
PageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageModule_Factory(t) { return new (t || PageModule)(); }, providers: [
        _services_service_list_storage__WEBPACK_IMPORTED_MODULE_4__["ListStorage"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _routing_start_app_routing__WEBPACK_IMPORTED_MODULE_3__["ROUTING_MAIN"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
        ], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageModule, { declarations: [_start_start_page__WEBPACK_IMPORTED_MODULE_7__["StartPage"],
        _main_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"],
        _files_files_page__WEBPACK_IMPORTED_MODULE_5__["FilesPage"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]], exports: [_start_start_page__WEBPACK_IMPORTED_MODULE_7__["StartPage"],
        _main_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"],
        _files_files_page__WEBPACK_IMPORTED_MODULE_5__["FilesPage"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _start_start_page__WEBPACK_IMPORTED_MODULE_7__["StartPage"],
                    _main_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"],
                    _files_files_page__WEBPACK_IMPORTED_MODULE_5__["FilesPage"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _routing_start_app_routing__WEBPACK_IMPORTED_MODULE_3__["ROUTING_MAIN"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
                ],
                exports: [
                    _start_start_page__WEBPACK_IMPORTED_MODULE_7__["StartPage"],
                    _main_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"],
                    _files_files_page__WEBPACK_IMPORTED_MODULE_5__["FilesPage"],
                    _routing_start_app_routing__WEBPACK_IMPORTED_MODULE_3__["ROUTING_MAIN"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
                ],
                providers: [
                    _services_service_list_storage__WEBPACK_IMPORTED_MODULE_4__["ListStorage"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _start_banner_start_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start-banner/start-banner.component */ "Plzc");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading-page/loading-page.component */ "T23M");
/* harmony import */ var _banner_user_banner_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./banner-user/banner-user.component */ "0MPI");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon/icon.component */ "WaCx");
/* harmony import */ var _list_storage_list_storage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-storage/list-storage.component */ "HxzI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _banner_files_banner_files_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner-files/banner-files.component */ "0MeA");
/* harmony import */ var _list_files_list_files_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-files/list-files.component */ "qyzq");
/* harmony import */ var _services_service_list_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/service.list-storage */ "7qrk");













class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, providers: [
        _services_service_list_storage__WEBPACK_IMPORTED_MODULE_11__["ListFolders"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_start_banner_start_banner_component__WEBPACK_IMPORTED_MODULE_2__["StartBannerComponent"],
        _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_4__["LoadingPageComponent"],
        _banner_user_banner_user_component__WEBPACK_IMPORTED_MODULE_5__["BannerUserComponent"],
        _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"],
        _list_storage_list_storage_component__WEBPACK_IMPORTED_MODULE_7__["ListStorageComponent"],
        _banner_files_banner_files_component__WEBPACK_IMPORTED_MODULE_9__["BannerFilesComponent"],
        _list_files_list_files_component__WEBPACK_IMPORTED_MODULE_10__["ListFilesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"]], exports: [_start_banner_start_banner_component__WEBPACK_IMPORTED_MODULE_2__["StartBannerComponent"],
        _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_4__["LoadingPageComponent"],
        _banner_user_banner_user_component__WEBPACK_IMPORTED_MODULE_5__["BannerUserComponent"],
        _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"],
        _list_storage_list_storage_component__WEBPACK_IMPORTED_MODULE_7__["ListStorageComponent"],
        _banner_files_banner_files_component__WEBPACK_IMPORTED_MODULE_9__["BannerFilesComponent"],
        _list_files_list_files_component__WEBPACK_IMPORTED_MODULE_10__["ListFilesComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _start_banner_start_banner_component__WEBPACK_IMPORTED_MODULE_2__["StartBannerComponent"],
                    _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_4__["LoadingPageComponent"],
                    _banner_user_banner_user_component__WEBPACK_IMPORTED_MODULE_5__["BannerUserComponent"],
                    _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"],
                    _list_storage_list_storage_component__WEBPACK_IMPORTED_MODULE_7__["ListStorageComponent"],
                    _banner_files_banner_files_component__WEBPACK_IMPORTED_MODULE_9__["BannerFilesComponent"],
                    _list_files_list_files_component__WEBPACK_IMPORTED_MODULE_10__["ListFilesComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"]
                ],
                exports: [
                    _start_banner_start_banner_component__WEBPACK_IMPORTED_MODULE_2__["StartBannerComponent"],
                    _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_4__["LoadingPageComponent"],
                    _banner_user_banner_user_component__WEBPACK_IMPORTED_MODULE_5__["BannerUserComponent"],
                    _icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"],
                    _list_storage_list_storage_component__WEBPACK_IMPORTED_MODULE_7__["ListStorageComponent"],
                    _banner_files_banner_files_component__WEBPACK_IMPORTED_MODULE_9__["BannerFilesComponent"],
                    _list_files_list_files_component__WEBPACK_IMPORTED_MODULE_10__["ListFilesComponent"]
                ],
                providers: [
                    _services_service_list_storage__WEBPACK_IMPORTED_MODULE_11__["ListFolders"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qyzq":
/*!***************************************************************!*\
  !*** ./src/app/components/list-files/list-files.component.ts ***!
  \***************************************************************/
/*! exports provided: ListFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListFilesComponent", function() { return ListFilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icon/icon.component */ "WaCx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





function ListFilesComponent_article_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const folder_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", folder_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](folder_r1.created);
} }
class ListFilesComponent {
    constructor() {
        this.listFileLists = [];
    }
    ngOnInit() { }
}
ListFilesComponent.ɵfac = function ListFilesComponent_Factory(t) { return new (t || ListFilesComponent)(); };
ListFilesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListFilesComponent, selectors: [["app-list-files"]], inputs: { listFileLists: "listFileLists" }, decls: 6, vars: 1, consts: [[1, "container__folders"], [1, "container__title"], ["route", "../../../assets/icon/more-file.svg"], ["class", "container__folders__item animate", 4, "ngFor", "ngForOf"], [1, "container__folders__item", "animate"], ["matRipple", "", 1, "folder"], [1, "container__1"], ["alt", "folder image", 1, "image__name", 3, "src"], ["route", "../../../assets/icon/more.svg"], [1, "container__2"]], template: function ListFilesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mis archivos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ListFilesComponent_article_5_Template, 10, 3, "article", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listFileLists);
    } }, directives: [_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatRipple"]], styles: [".container__title[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 15px;\n}\n\n.container__title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-family: ubuntu;\n    color: rgb(7, 9, 97);\n}\n\n.container__folders__item[_ngcontent-%COMP%]{\n    justify-content: center;\n    justify-items: center;\n    text-align: center;\n    display: inline-flex !important;\n    justify-content: center !important; \n    align-items: center !important;\n    flex-wrap: wrap !important;\n    flex-direction: row;\n}\n\n.folder[_ngcontent-%COMP%]{\n    width: 170px;\n    height: 170px;\n    border-radius: 14px;\n    margin: 12px;\n    cursor:pointer;\n    background-color: rgb(231, 224, 224);\n}\n\n.container__1[_ngcontent-%COMP%] {\n    display:flex;\n    padding:9px;\n    justify-content: space-between;\n    \n}\n\n.image__name[_ngcontent-%COMP%]{\n    width:70px;\n    height:70px;\n}\n\n.container__2[_ngcontent-%COMP%]{\n    padding-left: 20px;\n\n}\n\n.container__2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    margin-bottom: 0;\n    margin-top:10px;\n    color: rgb(11, 10, 87);\n    font-weight: 700;\n    font-family: Arial;\n}\n\n.container__2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\n    font-family: ubuntu;\n    font-size:14px;\n    color: rgb(119, 101, 101);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtZmlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBSUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCOztBQUlBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDhCQUE4Qjs7QUFFbEM7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUlBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJsaXN0LWZpbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG4uY29udGFpbmVyX190aXRsZXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbn1cblxuLmNvbnRhaW5lcl9fdGl0bGUgaDF7XG4gICAgZm9udC1mYW1pbHk6IHVidW50dTtcbiAgICBjb2xvcjogcmdiKDcsIDksIDk3KTtcbn1cblxuXG5cbi5jb250YWluZXJfX2ZvbGRlcnNfX2l0ZW17XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5cblxuLmZvbGRlcntcbiAgICB3aWR0aDogMTcwcHg7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgIG1hcmdpbjogMTJweDtcbiAgICBjdXJzb3I6cG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMjQsIDIyNCk7XG59XG5cbi5jb250YWluZXJfXzEge1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBwYWRkaW5nOjlweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgXG59XG4uaW1hZ2VfX25hbWV7XG4gICAgd2lkdGg6NzBweDtcbiAgICBoZWlnaHQ6NzBweDtcbn1cblxuXG5cbi5jb250YWluZXJfXzJ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuXG59XG5cbi5jb250YWluZXJfXzIgaDF7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOjEwcHg7XG4gICAgY29sb3I6IHJnYigxMSwgMTAsIDg3KTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLmNvbnRhaW5lcl9fMiBwe1xuICAgIGZvbnQtZmFtaWx5OiB1YnVudHU7XG4gICAgZm9udC1zaXplOjE0cHg7XG4gICAgY29sb3I6IHJnYigxMTksIDEwMSwgMTAxKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListFilesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-files',
                templateUrl: './list-files.component.html',
                styleUrls: ['./list-files.component.css']
            }]
    }], function () { return []; }, { listFileLists: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "x2OB":
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/*! exports provided: StartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartPage", function() { return StartPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_start_banner_start_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/start-banner/start-banner.component */ "Plzc");



class StartPage {
    constructor() { }
}
StartPage.ɵfac = function StartPage_Factory(t) { return new (t || StartPage)(); };
StartPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StartPage, selectors: [["start-page"]], decls: 1, vars: 0, template: function StartPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-start-banner");
    } }, directives: [_components_start_banner_start_banner_component__WEBPACK_IMPORTED_MODULE_1__["StartBannerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGFydC5wYWdlLmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StartPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'start-page',
                templateUrl: './start.page.html',
                styleUrls: [
                    './start.page.css'
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map