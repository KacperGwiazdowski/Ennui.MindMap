(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-playground></app-playground>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/node-editor/node-editor.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/node-editor/node-editor.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\r\n  <div>Title:</div>\r\n  <input type=\"text\" placeholder=\"Title\" [(ngModel)]=\"node.title\"/>\r\n  <div>Text:</div>\r\n  <input type=\"text\" placeholder=\"Text\" [(ngModel)]=\"node.text\"/>\r\n  <div>Color:</div>\r\n  <input type=\"color\" placeholder=\"Color\" [(ngModel)]=\"node.color\"/>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/node-list/node-list.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/node-list/node-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"node-container\" *ngFor=\"let node of nodeList\">\r\n  <app-node [node]=\"node\" \r\n    (change)=\"addChildNode($event)\" \r\n    (editorExpand)=\"editorExpandEventHandler($event)\">\r\n  </app-node>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/node/arrow/arrow.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/node/arrow/arrow.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg\n  height=\"500\"\n  width=\"1000\"\n  style=\"position: absolute\"\n>\n  <defs>\n    <marker\n      id=\"arrow\"\n      markerWidth=\"10\"\n      markerHeight=\"10\"\n      refX=\"7\"\n      refY=\"3\"\n      orient=\"auto\"\n      markerUnits=\"strokeWidth\"\n    >\n      <path d=\"M0,0 L0,6 L9,3 z\" fill=\"#000\" />\n    </marker>\n  </defs>\n  <line\n    [attr.x1]=\"node.x\"\n    [attr.y1]=\"node.y\"\n    [attr.x2]=\"child.x\"\n    [attr.y2]=\"child.y\"\n    style=\"stroke:rgb(0, 0, 0);stroke-width:2\"\n    marker-end=\"url(#arrow)\"\n  />\n</svg>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/node/node.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/node/node.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  #nodeDiv\r\n  class=\"box\"\r\n  cdkDrag\r\n  (cdkDragEnded)=\"onDragEnded($event)\"\r\n  cdkDragBoundary=\".playground\"\r\n  [style.background] = \"node.color\"\r\n>\r\n\r\n<div class=\"drag-handler\" cdkDragHandle>\r\n  <i class=\"material-icons\" >\r\n    drag_indicator\r\n    </i>\r\n</div>\r\n  <div>{{ node.title }}</div>\r\n  <div>{{ node.text }}</div>\r\n\r\n  <button (click)=\"addChildNode()\" class=\"btn btn-primary\">add</button>\r\n  <button (click)=\"expandEditor()\" class=\"btn btn-primary\">></button>\r\n</div>\r\n<app-arrow *ngFor=\"let child of node.childNodes\" [node]=\"node\" [child]=\"child\" [test]=\"node.x\"></app-arrow>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/playground/playground.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/playground/playground.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"custom-container\">\r\n  <div class=\"outer-wrapper\">\r\n    <div class=\"playground\">\r\n      <app-node-list (editorExpand)=\"editorExpandEventHandler($event)\"></app-node-list>\r\n    </div>\r\n    <button (click)=\"cleanPlayground()\" class=\"btn btn-primary\">Clean playground</button>\r\n  </div>\r\n  <app-node-editor [node]=\"editedNode\" class=\"editor\"></app-node-editor>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LnNjc3MifQ== */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'MindMap';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _node_node_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node/node.component */ "./src/app/node/node.component.ts");
/* harmony import */ var _node_list_node_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node-list/node-list.component */ "./src/app/node-list/node-list.component.ts");
/* harmony import */ var _playground_playground_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./playground/playground.component */ "./src/app/playground/playground.component.ts");
/* harmony import */ var _node_editor_node_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node-editor/node-editor.component */ "./src/app/node-editor/node-editor.component.ts");
/* harmony import */ var _node_arrow_arrow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node/arrow/arrow.component */ "./src/app/node/arrow/arrow.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _node_node_component__WEBPACK_IMPORTED_MODULE_8__["NodeComponent"],
            _node_list_node_list_component__WEBPACK_IMPORTED_MODULE_9__["NodeListComponent"],
            _playground_playground_component__WEBPACK_IMPORTED_MODULE_10__["PlaygroundComponent"],
            _node_editor_node_editor_component__WEBPACK_IMPORTED_MODULE_11__["NodeEditorComponent"],
            _node_arrow_arrow_component__WEBPACK_IMPORTED_MODULE_12__["ArrowComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["DragDropModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/node-editor/node-editor.component.scss":
/*!********************************************************!*\
  !*** ./src/app/node-editor/node-editor.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  margin: 5px;\n}\n\ncontent-wrapper {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGUtZWRpdG9yL0M6XFxVc2Vyc1xca2FjcGVyXFxEZXNrdG9wXFxyZXBvc1xcTWluZE1hcFxcTWluZE1hcFxcc3JjXFxhcHBcXG5vZGUvLi5cXG5vZGUtZWRpdG9yXFxub2RlLWVkaXRvci5jb21wb25lbnQuc2NzcyIsIi4uL25vZGUtZWRpdG9yL25vZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKIiwiZmlsZSI6Ii4uL25vZGUtZWRpdG9yL25vZGUtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDVweDtcclxufSIsImlucHV0IHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbmNvbnRlbnQtd3JhcHBlciB7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/node-editor/node-editor.component.ts":
/*!******************************************************!*\
  !*** ./src/app/node-editor/node-editor.component.ts ***!
  \******************************************************/
/*! exports provided: NodeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeEditorComponent", function() { return NodeEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NodeEditorComponent = class NodeEditorComponent {
    constructor() { }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NodeEditorComponent.prototype, "node", void 0);
NodeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-node-editor",
        template: __webpack_require__(/*! raw-loader!./node-editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/node-editor/node-editor.component.html"),
        styles: [__webpack_require__(/*! ./node-editor.component.scss */ "./src/app/node-editor/node-editor.component.scss")]
    })
], NodeEditorComponent);



/***/ }),

/***/ "./src/app/node-list/node-list.component.scss":
/*!****************************************************!*\
  !*** ./src/app/node-list/node-list.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#svg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n#line {\n  stroke-width: 2px;\n  stroke: black;\n}\n\n.point {\n  width: 10px;\n  height: 10px;\n  background: red;\n  position: absolute;\n}\n\n#one {\n  top: 20px;\n  left: 50px;\n}\n\n#two {\n  bottom: 20px;\n  right: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL25vZGUtbGlzdC9DOlxcVXNlcnNcXGthY3BlclxcRGVza3RvcFxccmVwb3NcXE1pbmRNYXBcXE1pbmRNYXBcXHNyY1xcYXBwXFxub2RlLy4uXFxub2RlLWxpc3RcXG5vZGUtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uL25vZGUtbGlzdC9ub2RlLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6Ii4uL25vZGUtbGlzdC9ub2RlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc3Zne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAjbGluZXtcclxuICAgIHN0cm9rZS13aWR0aDoycHg7XHJcbiAgICBzdHJva2U6cmdiKDAsMCwwKTtcclxuICB9XHJcbiAgXHJcbiAgLnBvaW50e1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gICNvbmV7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICAjdHdve1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDUwcHg7XHJcbiAgfSIsIiNzdmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2xpbmUge1xuICBzdHJva2Utd2lkdGg6IDJweDtcbiAgc3Ryb2tlOiBibGFjaztcbn1cblxuLnBvaW50IHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZDogcmVkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbiNvbmUge1xuICB0b3A6IDIwcHg7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbiN0d28ge1xuICBib3R0b206IDIwcHg7XG4gIHJpZ2h0OiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/node-list/node-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/node-list/node-list.component.ts ***!
  \**************************************************/
/*! exports provided: NodeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeListComponent", function() { return NodeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NodeListComponent = class NodeListComponent {
    constructor() {
        this.editorExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nodeList = [
            { text: "some text", title: "some title", childNodes: [], x: 0, y: 0, width: null, height: null, color: "#FFFFFF" }
        ];
    }
    ngOnInit() { }
    addChildNode(node) {
        this.nodeList.push(node);
    }
    editorExpandEventHandler(node) {
        this.editorExpand.emit(node);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NodeListComponent.prototype, "editorExpand", void 0);
NodeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-node-list",
        template: __webpack_require__(/*! raw-loader!./node-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/node-list/node-list.component.html"),
        styles: [__webpack_require__(/*! ./node-list.component.scss */ "./src/app/node-list/node-list.component.scss")]
    })
], NodeListComponent);



/***/ }),

/***/ "./src/app/node/arrow/arrow.component.scss":
/*!*************************************************!*\
  !*** ./src/app/node/arrow/arrow.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnJvdy9hcnJvdy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/node/arrow/arrow.component.ts":
/*!***********************************************!*\
  !*** ./src/app/node/arrow/arrow.component.ts ***!
  \***********************************************/
/*! exports provided: ArrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowComponent", function() { return ArrowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArrowComponent = class ArrowComponent {
    constructor() { }
    ngOnChanges(changes) {
        this.findShortestArrowWay();
    }
    findShortestArrowWay() {
        console.log("finding shortest way");
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArrowComponent.prototype, "node", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArrowComponent.prototype, "child", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArrowComponent.prototype, "test", void 0);
ArrowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-arrow',
        template: __webpack_require__(/*! raw-loader!./arrow.component.html */ "./node_modules/raw-loader/index.js!./src/app/node/arrow/arrow.component.html"),
        styles: [__webpack_require__(/*! ./arrow.component.scss */ "./src/app/node/arrow/arrow.component.scss")]
    })
], ArrowComponent);



/***/ }),

/***/ "./src/app/node/node.component.scss":
/*!******************************************!*\
  !*** ./src/app/node/node.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box {\n  padding: 10px;\n  border: solid 1px #ccc;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: absolute;\n  z-index: 1;\n}\n\n@-webkit-keyframes example {\n  from {\n    width: 100px;\n  }\n  to {\n    width: 200px;\n  }\n}\n\n@keyframes example {\n  from {\n    width: 100px;\n  }\n  to {\n    width: 200px;\n  }\n}\n\n.drag-handler {\n  height: 24px;\n  width: 24px;\n}\n\n.btn {\n  width: 45px;\n  height: 30px;\n  font-size: 12px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2FjcGVyXFxEZXNrdG9wXFxyZXBvc1xcTWluZE1hcFxcTWluZE1hcFxcc3JjXFxhcHBcXG5vZGUvbm9kZS5jb21wb25lbnQuc2NzcyIsIm5vZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNERjs7QURVQTtFQUNFO0lBQ0UsWUFBQTtFQ1BGO0VEU0E7SUFDRSxZQUFBO0VDUEY7QUFDRjs7QURDQTtFQUNFO0lBQ0UsWUFBQTtFQ1BGO0VEU0E7SUFDRSxZQUFBO0VDUEY7QUFDRjs7QURVQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FDUkY7O0FEV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDUkYiLCJmaWxlIjoibm9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gIC8vIHdpZHRoOiAxMDBweDtcclxuICAvLyBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5ib3g6aG92ZXIge1xyXG4gIC8vIHdpZHRoOiAyMDBweDtcclxuICAvLyBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcclxuICAvLyBhbmltYXRpb24tZHVyYXRpb246IDAuNXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXhhbXBsZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5kcmFnLWhhbmRsZXIge1xyXG4gIGhlaWdodDogMjRweDtcclxuICB3aWR0aDogMjRweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6ICA0NXB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbiIsIi5ib3gge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xuICBmcm9tIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLmRyYWctaGFuZGxlciB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG59XG5cbi5idG4ge1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/node/node.component.ts":
/*!****************************************!*\
  !*** ./src/app/node/node.component.ts ***!
  \****************************************/
/*! exports provided: NodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeComponent", function() { return NodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NodeComponent = class NodeComponent {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editorExpand = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isEditorExpanded = false;
    }
    ngOnInit() {
        this.position = { x: this.node.x, y: this.node.y };
        this.node.width = this.elementView.nativeElement.offsetWidth;
        this.node.height = this.elementView.nativeElement.offsetHeight;
        console.log(this.node);
    }
    onDragEnded(event) {
        let position = event.source.getFreeDragPosition();
        this.node.x = position.x;
        this.node.y = position.y;
    }
    addChildNode() {
        let node = {
            text: "new node",
            title: "new node",
            childNodes: [],
            x: 0,
            y: 0,
            width: null,
            height: null,
            color: "#FFF"
        };
        this.node.childNodes.push(node);
        this.change.emit(node);
        console.log(this.node.x + " " + this.node.y);
    }
    expandEditor() {
        this.editorExpand.emit(this.node);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NodeComponent.prototype, "node", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NodeComponent.prototype, "change", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NodeComponent.prototype, "editorExpand", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nodeDiv', null)
], NodeComponent.prototype, "elementView", void 0);
NodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-node",
        template: __webpack_require__(/*! raw-loader!./node.component.html */ "./node_modules/raw-loader/index.js!./src/app/node/node.component.html"),
        styles: [__webpack_require__(/*! ./node.component.scss */ "./src/app/node/node.component.scss")]
    })
], NodeComponent);



/***/ }),

/***/ "./src/app/playground/playground.component.scss":
/*!******************************************************!*\
  !*** ./src/app/playground/playground.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".playground {\n  width: 1000px;\n  height: 500px;\n  border-width: 1px;\n  border-style: dotted;\n  background-color: #80A1D4;\n}\n\n.btn {\n  margin: 5px;\n}\n\n.custom-container {\n  margin: 5px;\n}\n\n.outer-wrapper {\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BsYXlncm91bmQvQzpcXFVzZXJzXFxrYWNwZXJcXERlc2t0b3BcXHJlcG9zXFxNaW5kTWFwXFxNaW5kTWFwXFxzcmNcXGFwcFxcbm9kZS8uLlxccGxheWdyb3VuZFxccGxheWdyb3VuZC5jb21wb25lbnQuc2NzcyIsIi4uL3BsYXlncm91bmQvcGxheWdyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoiLi4vcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBsYXlncm91bmQge1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBib3JkZXItd2lkdGg6IDFweDtcclxuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBBMUQ0O1xyXG59XHJcblxyXG4uYnRue1xyXG4gIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5vdXRlci13cmFwcGVye1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG5cclxufVxyXG4iLCIucGxheWdyb3VuZCB7XG4gIHdpZHRoOiAxMDAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IGRvdHRlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgwQTFENDtcbn1cblxuLmJ0biB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uY3VzdG9tLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4ub3V0ZXItd3JhcHBlciB7XG4gIGZsb2F0OiBsZWZ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/playground/playground.component.ts":
/*!****************************************************!*\
  !*** ./src/app/playground/playground.component.ts ***!
  \****************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_list_node_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node-list/node-list.component */ "./src/app/node-list/node-list.component.ts");



let PlaygroundComponent = class PlaygroundComponent {
    constructor() {
        this.editedNode = {
            text: "",
            title: "",
            childNodes: [],
            x: 0,
            y: 0,
            width: null,
            height: null,
            color: ""
        };
    }
    editorExpandEventHandler(node) {
        console.log(node);
        this.editedNode = node;
    }
    cleanPlayground() {
        let node = {
            text: "some text",
            title: "some title",
            childNodes: [],
            x: 0,
            y: 0,
            width: null,
            height: null,
            color: "#FFFFFF"
        };
        this.nodeListComponent.nodeList = [];
        this.nodeListComponent.nodeList.push(node);
        this.editedNode = node;
    }
    ngOnInit() { }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_node_list_node_list_component__WEBPACK_IMPORTED_MODULE_2__["NodeListComponent"], null)
], PlaygroundComponent.prototype, "nodeListComponent", void 0);
PlaygroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-playground",
        template: __webpack_require__(/*! raw-loader!./playground.component.html */ "./node_modules/raw-loader/index.js!./src/app/playground/playground.component.html"),
        styles: [__webpack_require__(/*! ./playground.component.scss */ "./src/app/playground/playground.component.scss")]
    })
], PlaygroundComponent);



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
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kacper\Desktop\repos\MindMap\MindMap\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map