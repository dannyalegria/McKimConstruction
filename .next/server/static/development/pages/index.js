module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Block.js":
/*!*****************************!*\
  !*** ./components/Block.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button */ "./components/Button.js");
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Block.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Block({
  title,
  subtitle,
  image,
  text,
  link,
  btnText,
  align,
  bgColor,
  log
}) {
  let mainText = text.toString();
  let isLeft;
  align == "left" ? isLeft = true : isLeft = false;
  return __jsx("div", {
    style: {
      backgroundColor: bgColor
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025701260", [isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start"]]]) + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025701260", [isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start"]]]) + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("img", {
    src: image,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025701260", [isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025701260", [isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start"]]]) + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025701260", [isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, title), subtitle ? __jsx("h3", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025701260", [isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start"]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, subtitle) : null, __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    source: mainText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), btnText ? __jsx("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3025701260", [isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start"]]]) + " " + "blockButton",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    goTo: link,
    text: btnText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : null), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3025701260",
    dynamic: [isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start", isLeft ? "row-reverse" : "row", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-start" : "flex-end", isLeft ? "flex-end" : "flex-start"],
    __self: this
  }, `.row.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:5% 2.5%;}.column.__jsx-style-dynamic-selector{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}p.__jsx-style-dynamic-selector{text-align:justify;text-align-last:justify;text-justify:inter-word;}.row.__jsx-style-dynamic-selector .column.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:300px;height:auto;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;}@media (min-width:900px){}@media only screen and (min-width:321px){.row.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{-webkit-align-self:${isLeft ? "flex-start" : "flex-end"};-ms-flex-item-align:${isLeft ? "flex-start" : "flex-end"};align-self:${isLeft ? "flex-start" : "flex-end"};}.row.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{-webkit-align-self:${isLeft ? "flex-start" : "flex-end"};-ms-flex-item-align:${isLeft ? "flex-start" : "flex-end"};align-self:${isLeft ? "flex-start" : "flex-end"};}.blockButton.__jsx-style-dynamic-selector{-webkit-align-self:${isLeft ? "flex-end" : "flex-start"};-ms-flex-item-align:${isLeft ? "flex-end" : "flex-start"};align-self:${isLeft ? "flex-end" : "flex-start"};}.row.__jsx-style-dynamic-selector .column.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:400px;}}@media only screen and (min-device-width:768px) and (max-device-width:1024px){.row.__jsx-style-dynamic-selector .column.__jsx-style-dynamic-selector{padding:5%;}.row.__jsx-style-dynamic-selector .column.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:400px;}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:landscape){.row.__jsx-style-dynamic-selector{-webkit-flex-direction:${isLeft ? "row-reverse" : "row"};-ms-flex-direction:${isLeft ? "row-reverse" : "row"};flex-direction:${isLeft ? "row-reverse" : "row"};-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:5% 10%;}.column.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.row.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px;}.row.__jsx-style-dynamic-selector .column.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:500px;}.row.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{border-radius:5px;}.row.__jsx-style-dynamic-selector .column.__jsx-style-dynamic-selector{padding:5%;}.row.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{-webkit-align-self:${isLeft ? "flex-start" : "flex-end"};-ms-flex-item-align:${isLeft ? "flex-start" : "flex-end"};align-self:${isLeft ? "flex-start" : "flex-end"};}.row.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{-webkit-align-self:${isLeft ? "flex-start" : "flex-end"};-ms-flex-item-align:${isLeft ? "flex-start" : "flex-end"};align-self:${isLeft ? "flex-start" : "flex-end"};}.blockButton.__jsx-style-dynamic-selector{-webkit-align-self:${isLeft ? "flex-end" : "flex-start"};-ms-flex-item-align:${isLeft ? "flex-end" : "flex-start"};align-self:${isLeft ? "flex-end" : "flex-start"};}}@media only screen and (min-width:1224px){.row.__jsx-style-dynamic-selector{-webkit-flex-direction:${isLeft ? "row-reverse" : "row"};-ms-flex-direction:${isLeft ? "row-reverse" : "row"};flex-direction:${isLeft ? "row-reverse" : "row"};-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;padding:5% 10%;}.column.__jsx-style-dynamic-selector{-webkit-flex:1;-ms-flex:1;flex:1;}.row.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:5px;}.row.__jsx-style-dynamic-selector .column.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{width:500px;}.row.__jsx-style-dynamic-selector>*.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{border-radius:5px;}.row.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{-webkit-align-self:${isLeft ? "flex-start" : "flex-end"};-ms-flex-item-align:${isLeft ? "flex-start" : "flex-end"};align-self:${isLeft ? "flex-start" : "flex-end"};}.row.__jsx-style-dynamic-selector h3.__jsx-style-dynamic-selector{-webkit-align-self:${isLeft ? "flex-start" : "flex-end"};-ms-flex-item-align:${isLeft ? "flex-start" : "flex-end"};align-self:${isLeft ? "flex-start" : "flex-end"};}.blockButton.__jsx-style-dynamic-selector{-webkit-align-self:${isLeft ? "flex-end" : "flex-start"};-ms-flex-item-align:${isLeft ? "flex-end" : "flex-start"};align-self:${isLeft ? "flex-end" : "flex-start"};}}@media only screen and (min-width:1824px){}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9CbG9jay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2tCLEFBR3dCLEFBTUcsQUFLRyxBQUtQLEFBVThCLEFBR0EsQUFHQSxBQUc1QixBQU9ELEFBR0MsQUFPZ0MsQUFLckMsQUFHTSxBQU1ELEFBR00sQUFHUCxBQUc2QixBQUdBLEFBR0EsQUFNSSxBQUtyQyxBQUdNLEFBTUQsQUFHTSxBQUdzQixBQUdBLEFBR0MsV0F0RTNDLEFBOEJBLENBeERZLEFBbUJaLEFBVUEsQUFxQkEsQUFtQ0EsTUFoQ0EsQUFtQ0EsQ0E3RndCLEtBTU4sU0F3Q2xCLEFBbUNBLFVBaEZ3Qix3QkFDMUIsRUFQZSxLQU5NLEFBNERNLEFBbUNBLHFCQTdFM0IsMENBUUUsQUFHQSxBQUdBLEFBMkNBLEFBR0EsQUFHQSxBQTBCQSxBQUdBLEdBR0EsR0FoSGUsQUFNTyxDQTZDSCxBQW1DQSw2QkExQkUsQUFtQ0EsMkJBOUZMLE9BbURDLEFBbUNBLFNBckZuQixLQUtBLENBOENFLEFBbUNBLDRDQTNCYyxBQW1DQSxZQWxDZCxBQW1DQSIsImZpbGUiOiIvbW50L2MvVXNlcnMvUnlhbi9EZXNrdG9wL01jS2ltQ29uc3RydWN0aW9uL2NvbXBvbmVudHMvQmxvY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vQnV0dG9uXCI7XG5cbmZ1bmN0aW9uIEJsb2NrKHtcbiAgdGl0bGUsXG4gIHN1YnRpdGxlLFxuICBpbWFnZSxcbiAgdGV4dCxcbiAgbGluayxcbiAgYnRuVGV4dCxcbiAgYWxpZ24sXG4gIGJnQ29sb3IsXG4gIGxvZ1xufSkge1xuICBsZXQgbWFpblRleHQgPSB0ZXh0LnRvU3RyaW5nKCk7XG4gIGxldCBpc0xlZnQ7XG4gIGFsaWduID09IFwibGVmdFwiID8gKGlzTGVmdCA9IHRydWUpIDogKGlzTGVmdCA9IGZhbHNlKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgICB7c3VidGl0bGUgPyA8aDM+e3N1YnRpdGxlfTwvaDM+IDogbnVsbH1cbiAgICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXttYWluVGV4dH0gLz5cbiAgICAgICAge2J0blRleHQgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja0J1dHRvblwiPlxuICAgICAgICAgICAgPEJ1dHRvbiBnb1RvPXtsaW5rfSB0ZXh0PXtidG5UZXh0fSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDUlIDIuNSU7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgcCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICB0ZXh0LWFsaWduLWxhc3Q6IGp1c3RpZnk7XG4gICAgICAgICAgdGV4dC1qdXN0aWZ5OiBpbnRlci13b3JkO1xuICAgICAgICB9XG4gICAgICAgIC5yb3cgLmNvbHVtbiBpbWcge1xuICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU21hcnRwaG9uZXMgKGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjFweCkge1xuICAgICAgICAgIC5yb3cgaDEge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogJHtpc0xlZnQgPyBcImZsZXgtc3RhcnRcIiA6IFwiZmxleC1lbmRcIn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cgaDMge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogJHtpc0xlZnQgPyBcImZsZXgtc3RhcnRcIiA6IFwiZmxleC1lbmRcIn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9ja0J1dHRvbiB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiAke2lzTGVmdCA/IFwiZmxleC1lbmRcIiA6IFwiZmxleC1zdGFydFwifTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyAuY29sdW1uIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNDAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogVGFibGV0cyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSB7XG4gICAgICAgICAgLnJvdyAuY29sdW1uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IC5jb2x1bW4gaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBUYWJsZXRzIChsYW5kc2NhcGUpIC0tLS0tLS0tLS0tICovXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogJHtpc0xlZnQgPyBcInJvdy1yZXZlcnNlXCIgOiBcInJvd1wifTtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgcGFkZGluZzogNSUgMTAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cgPiAqIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cgLmNvbHVtbiBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93ID4gKiBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IC5jb2x1bW4ge1xuICAgICAgICAgICAgcGFkZGluZzogNSU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cgaDEge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogJHtpc0xlZnQgPyBcImZsZXgtc3RhcnRcIiA6IFwiZmxleC1lbmRcIn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cgaDMge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogJHtpc0xlZnQgPyBcImZsZXgtc3RhcnRcIiA6IFwiZmxleC1lbmRcIn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9ja0J1dHRvbiB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiAke2lzTGVmdCA/IFwiZmxleC1lbmRcIiA6IFwiZmxleC1zdGFydFwifTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLyogRGVza3RvcHMgYW5kIGxhcHRvcHMgLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjI0cHgpIHtcbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiAke2lzTGVmdCA/IFwicm93LXJldmVyc2VcIiA6IFwicm93XCJ9O1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBwYWRkaW5nOiA1JSAxMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyA+ICoge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyAuY29sdW1uIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cgPiAqIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cgaDEge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogJHtpc0xlZnQgPyBcImZsZXgtc3RhcnRcIiA6IFwiZmxleC1lbmRcIn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cgaDMge1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogJHtpc0xlZnQgPyBcImZsZXgtc3RhcnRcIiA6IFwiZmxleC1lbmRcIn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ibG9ja0J1dHRvbiB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiAke2lzTGVmdCA/IFwiZmxleC1lbmRcIiA6IFwiZmxleC1zdGFydFwifTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBMYXJnZSBzY3JlZW5zIC0tLS0tLS0tLS0tICovXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTgyNHB4KSB7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2s7XG4iXX0= */
/*@ sourceURL=/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Block.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (Block);

/***/ }),

/***/ "./components/Button.js":
/*!******************************!*\
  !*** ./components/Button.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Button.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Button({
  goTo,
  text
}) {
  return __jsx("div", {
    className: "jsx-2702577185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("button", {
    className: "jsx-2702577185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: goTo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-2702577185",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, text))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2702577185",
    __self: this
  }, "button.jsx-2702577185{border:solid 1px #000;border-radius:5px;padding:0.5rem 1rem;background:#fafafa;color:#000;-webkit-transition:all 200ms ease-in;transition:all 200ms ease-in;}button.jsx-2702577185:hover{cursor:pointer;color:#f1c40f;background-color:#333;box-shadow:2px 2px 0 0 #001f33;-webkit-transform:translate(-2px,-2px);-webkit-transform:translate(-2px,-2px);-ms-transform:translate(-2px,-2px);transform:translate(-2px,-2px);-webkit-transition:all 100ms ease-in-out;transition:all 100ms ease-in-out;}button.jsx-2702577185:hover a.jsx-2702577185{color:#f1c40f;}button.jsx-2702577185:active{box-shadow:0px 0px 0px 0px black;-webkit-transform:translate(0,0);-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0);color:#f7b731;}button.jsx-2702577185:focus{outline:none;}button.jsx-2702577185 a.jsx-2702577185{-webkit-text-decoration:none;text-decoration:none;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9CdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWtCLEFBR2lDLEFBUVAsQUFTRCxBQUdtQixBQU1wQixBQUdRLGFBRnZCLENBVEEsQ0FUZ0IsT0FSSSxPQVNJLElBV1ksT0FuQmQsVUE0QlQsQ0FuQm9CLFNBUlosQ0E0QnJCLEtBVDRCLGFBbEJmLEdBUTZCLFFBUFgsK0JBUUcsZ0NBVWxCLEdBakJoQixXQWtCQSwyREFWbUMsMEVBQ25DIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9CdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIEJ1dHRvbih7IGdvVG8sIHRleHQgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uPlxuICAgICAgICA8TGluayBocmVmPXtnb1RvfT5cbiAgICAgICAgICA8YT57dGV4dH08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMwMDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgY29sb3I6ICNmMWM0MGY7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDAgMCAjMDAxZjMzO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTJweCwgLTJweCk7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDEwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciBhIHtcbiAgICAgICAgICBjb2xvcjogI2YxYzQwZjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246YWN0aXZlIHtcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggYmxhY2s7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcbiAgICAgICAgICBjb2xvcjogI2Y3YjczMTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246Zm9jdXMge1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iXX0= */\n/*@ sourceURL=/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Button.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Footer({}) {
  return __jsx("div", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("footer", {
    className: "jsx-507216922" + " " + "footer row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-507216922" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Directory")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Home")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "About Us")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Services")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Team")))), __jsx("div", {
    className: "jsx-507216922" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Contact")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Info@McKim-Company.com")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "P.O. Box 21328")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "El Sobrante, CA 94820")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("ion-icon", {
    name: "logo-facebook",
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("ion-icon", {
    name: "logo-instagram",
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("ion-icon", {
    name: "logo-twitter",
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))))), __jsx("div", {
    className: "jsx-507216922" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Information")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Lic# 423873 AB")), __jsx("li", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-507216922",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "DIR Reg# 1000012356"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "507216922",
    __self: this
  }, ".footer.jsx-507216922{-webkit-flex-direction:row !important;-ms-flex-direction:row !important;flex-direction:row !important;grid-area:footer;border:solid 3px #4b4b4b;border-radius:5px;list-style-type:none;background:#4b4b4b;color:#ffffff;text-align:center;}.footer.jsx-507216922 ul.jsx-507216922{list-style:none;}.footer.jsx-507216922 h3.jsx-507216922{color:#ffffff;}.footer.jsx-507216922 a.jsx-507216922{color:#ffffff;}.footer.jsx-507216922 a.jsx-507216922:hover{color:#f1c40f;cursor:pointer;}.footer.jsx-507216922 .column.jsx-507216922 ul.jsx-507216922{padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVrQixBQUd5QyxBQVVkLEFBR0YsQUFHQSxBQUdBLEFBSUosVUFDWixJQVZBLEFBR0EsQUFHaUIsRUFUakIsYUFVQSx5RUFwQm1CLGlCQUNRLHlCQUNQLGtCQUNHLHFCQUNGLG1CQUNMLGNBQ0ksa0JBQ3BCIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBGb290ZXIoe30pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXIgcm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aDM+RGlyZWN0b3J5PC9oMz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5BYm91dCBVczwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPlNlcnZpY2VzPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+VGVhbTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8aDM+Q29udGFjdDwvaDM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5JbmZvQE1jS2ltLUNvbXBhbnkuY29tPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGE+UC5PLiBCb3ggMjEzMjg8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5FbCBTb2JyYW50ZSwgQ0EgOTQ4MjA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aW9uLWljb24gbmFtZT1cImxvZ28tZmFjZWJvb2tcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby1pbnN0YWdyYW1cIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxpb24taWNvbiBuYW1lPVwibG9nby10d2l0dGVyXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxoMz5JbmZvcm1hdGlvbjwvaDM+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YT5MaWMjIDQyMzg3MyBBQjwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhPkRJUiBSZWcjIDEwMDAwMTIzNTY8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgICAgICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgM3B4ICM0YjRiNGI7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNGI0YjRiO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVyIHVsIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIgaDMge1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXIgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciBhOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogI2YxYzQwZjtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLmZvb3RlciAuY29sdW1uIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Footer.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function Header(headerImage) {
  const h = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()("https:" + headerImage.headerImage);

  console.log(h);
  return __jsx("header", {
    className: "jsx-1604490018 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2090249925", [h]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1604490018 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2090249925", [h]]]) + " " + "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1604490018 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2090249925", [h]]]) + " " + "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1604490018 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2090249925", [h]]]) + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("img", {
    src: "https://i.imgur.com/vOgBo46.png",
    alt: "white logo",
    className: "jsx-1604490018 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2090249925", [h]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1604490018 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2090249925", [h]]]) + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("h2", {
    className: "jsx-1604490018 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2090249925", [h]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "At Your Service."), __jsx("p", {
    className: "jsx-1604490018 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2090249925", [h]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "McKim & Co provides leading contracting services for Commerical, Residential & Public Works projects in the San Francisco Bay Area. We are General Contarctors who specialize is Site Work, Underground Utilities & Excavation. We pride ourselves on our staff of professional experts that are here for you every step of the way. McKim & Co is available for your next project, providing quality service no matter the demands of our clients."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1604490018",
    __self: this
  }, "header.jsx-1604490018{position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;grid-area:header;height:100%;width:100%;overflow:hidden;background-size:cover;background-position:center center;max-height:500px;padding:5%;z-index:0;}.overlay.jsx-1604490018{z-index:1;height:100%;width:100%;position:absolute;overflow:auto;top:0px;left:0px;background:rgba(0,0,0,0.3);}.banner.jsx-1604490018{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:2;}header.jsx-1604490018 .logo.jsx-1604490018 img.jsx-1604490018{width:100%;max-width:450px;height:auto;}header.jsx-1604490018 .banner.jsx-1604490018 h2.jsx-1604490018{color:#fff;font-size:1.5rem;}header.jsx-1604490018 .banner.jsx-1604490018 p.jsx-1604490018{color:#fff;font-size:1rem;}@media only screen and (min-device-width:320px) and (max-device-width:480px){}@media only screen and (min-width:321px){header.jsx-1604490018 .logo.jsx-1604490018{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}header.jsx-1604490018 .logo.jsx-1604490018 img.jsx-1604490018{width:80%;max-width:450px;height:auto;margin-left:auto;margin-right:auto;}}@media only screen and (max-width:320px){}@media only screen and (min-device-width:768px) and (max-device-width:1024px){header.jsx-1604490018 .logo.jsx-1604490018 img.jsx-1604490018{width:100%;width:550px;margin:0;}header.jsx-1604490018 .banner.jsx-1604490018 h2.jsx-1604490018{color:#fff;font-size:1.8rem;}header.jsx-1604490018 .banner.jsx-1604490018 p.jsx-1604490018{color:#fff;font-size:1.3rem;}}@media only screen and (min-device-width:768px) and (max-device-width:1024px) and (orientation:landscape){.banner.jsx-1604490018{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:825px;margin-right:auto;margin-left:auto;}header.jsx-1604490018 .banner.jsx-1604490018 .text.jsx-1604490018{-webkit-order:0;-ms-flex-order:0;order:0;-webkit-flex:1 0 60%;-ms-flex:1 0 60%;flex:1 0 60%;}header.jsx-1604490018 .banner.jsx-1604490018 .text.jsx-1604490018 h2.jsx-1604490018{font-size:1.9rem;}header.jsx-1604490018 .banner.jsx-1604490018 .text.jsx-1604490018 p.jsx-1604490018{font-size:1.42rem;}header.jsx-1604490018 .banner.jsx-1604490018 .logo.jsx-1604490018{-webkit-flex:0 1 40%;-ms-flex:0 1 40%;flex:0 1 40%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;}}@media only screen and (min-width:1224px){header.jsx-1604490018{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:10% 5%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.banner.jsx-1604490018{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row-reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:825px;margin-right:auto;margin-left:auto;}header.jsx-1604490018 .banner.jsx-1604490018 .text.jsx-1604490018{-webkit-order:0;-ms-flex-order:0;order:0;-webkit-flex:1 0 60%;-ms-flex:1 0 60%;flex:1 0 60%;}header.jsx-1604490018 .banner.jsx-1604490018 .text.jsx-1604490018 h2.jsx-1604490018{font-size:2.25rem;}header.jsx-1604490018 .banner.jsx-1604490018 .text.jsx-1604490018 p.jsx-1604490018{font-size:1.5rem;}header.jsx-1604490018 .logo.jsx-1604490018 img.jsx-1604490018{width:100%;width:750px;margin:0;}}@media only screen and (min-width:1824px){}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJTLEFBRytCLEFBZ0JSLEFBVUcsQUFPRixBQUtBLEFBSUEsQUFZSSxBQUtILEFBZ0JDLEFBS0EsQUFJQSxBQVFFLEFBU0wsQUFJUyxBQUdDLEFBR0wsQUFVQSxBQU1BLEFBU0wsQUFJVSxBQUdELEFBR04sVUFqSUQsQUEyQ00sQ0ExQkYsQUFLQyxBQUlGLEFBaUNELEFBS0ssQUFJQSxBQThETCxNQXpDZCxBQXNDQSxDQS9JYSxBQTRHYixBQWdDQSxJQTNIVyxDQTJEQSxBQXVFQSxHQXhHYixBQWlCZ0IsQ0ExQkYsQ0FLZCxBQTBDRSxBQUlBLElBUkEsQUF1RUEsQ0FsSWtCLEtBMkNDLENBMUJyQixFQWtFaUIsQUFtQ0EsVUFySEQsQUE0RkMsSUFqREssVUExQ1osUUFDQyxBQTBDVCxDQXJDc0IsQUE0QkQsQUFzQ1EsQUE2QlIsQUFNUSxRQXpHQyxVQXJCWCxBQXFHbkIsQUFtQ0EsaUJBbEhGLGdCQXlGdUIsa0JBekRJLEFBbUVSLFNBL0ZNLE1BZ0dGLEdBekhFLE1BMkZGLEFBbUNBLG1EQWZJLHdCQXpEekIsU0E1Qm1CLEFBZ0duQixTQXpIbUIsQUEyRk0sQUFtQ0EseURBZlgsWUFDZCxlQXRGVSxTQXpCTyxDQTBCbkIsS0FpRWdCLEFBbUNBLFdBN0hGLENBMkZRLEFBbUNBLFdBN0hULE9BMkZRLEFBbUNBLElBN0hILGFBMkZoQixBQW1DQSxHQTdIc0Isc0JBQ1ksa0NBQ2pCLGlCQUNOLFdBQ0QsVUFDWiIsImZpbGUiOiIvbW50L2MvVXNlcnMvUnlhbi9EZXNrdG9wL01jS2ltQ29uc3RydWN0aW9uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSGVhZGVyKGhlYWRlckltYWdlKSB7XG4gIGNvbnN0IGggPSBKU09OLnN0cmluZ2lmeShcImh0dHBzOlwiICsgaGVhZGVySW1hZ2UuaGVhZGVySW1hZ2UpO1xuICBjb25zb2xlLmxvZyhoKTtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS92T2dCbzQ2LnBuZ1wiIGFsdD1cIndoaXRlIGxvZ29cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgPGgyPkF0IFlvdXIgU2VydmljZS48L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTWNLaW0gJiBDbyBwcm92aWRlcyBsZWFkaW5nIGNvbnRyYWN0aW5nIHNlcnZpY2VzIGZvciBDb21tZXJpY2FsLFxuICAgICAgICAgICAgUmVzaWRlbnRpYWwgJiBQdWJsaWMgV29ya3MgcHJvamVjdHMgaW4gdGhlIFNhbiBGcmFuY2lzY28gQmF5IEFyZWEuXG4gICAgICAgICAgICBXZSBhcmUgR2VuZXJhbCBDb250YXJjdG9ycyB3aG8gc3BlY2lhbGl6ZSBpcyBTaXRlIFdvcmssIFVuZGVyZ3JvdW5kXG4gICAgICAgICAgICBVdGlsaXRpZXMgJiBFeGNhdmF0aW9uLiBXZSBwcmlkZSBvdXJzZWx2ZXMgb24gb3VyIHN0YWZmIG9mXG4gICAgICAgICAgICBwcm9mZXNzaW9uYWwgZXhwZXJ0cyB0aGF0IGFyZSBoZXJlIGZvciB5b3UgZXZlcnkgc3RlcCBvZiB0aGUgd2F5LlxuICAgICAgICAgICAgTWNLaW0gJiBDbyBpcyBhdmFpbGFibGUgZm9yIHlvdXIgbmV4dCBwcm9qZWN0LCBwcm92aWRpbmcgcXVhbGl0eVxuICAgICAgICAgICAgc2VydmljZSBubyBtYXR0ZXIgdGhlIGRlbWFuZHMgb2Ygb3VyIGNsaWVudHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciAubG9nbyBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgLmJhbm5lciBoMiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgLmJhbm5lciBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBTbWFydHBob25lcyAobGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIxcHgpIHtcbiAgICAgICAgICAgIGhlYWRlciAubG9nbyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5sb2dvIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBTbWFydHBob25lcyAocG9ydHJhaXQpIC0tLS0tLS0tLS0tICovXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICAgICAgICAgLyogU3R5bGVzICovXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVGFibGV0cyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIGhlYWRlciAubG9nbyBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXIgLmJhbm5lciBoMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlciAuYmFubmVyIHAge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVGFibGV0cyAobGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDgyNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5iYW5uZXIgLnRleHQge1xuICAgICAgICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgICAgICAgZmxleDogMSAwIDYwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlciAuYmFubmVyIC50ZXh0IGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXIgLmJhbm5lciAudGV4dCBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5iYW5uZXIgLmxvZ28ge1xuICAgICAgICAgICAgICBmbGV4OiAwIDEgNDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIyNHB4KSB7XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMCUgNSU7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDgyNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5iYW5uZXIgLnRleHQge1xuICAgICAgICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgICAgICAgZmxleDogMSAwIDYwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlciAuYmFubmVyIC50ZXh0IGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5iYW5uZXIgLnRleHQgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5sb2dvIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBMYXJnZSBzY3JlZW5zIC0tLS0tLS0tLS0tICovXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODI0cHgpIHtcbiAgICAgICAgICAgIC8qIFN0eWxlcyAqL1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtofSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Header.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2090249925",
    dynamic: [h],
    __self: this
  }, `header.__jsx-style-dynamic-selector{background-image:url(${h});}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMExTLEFBR2dFLG1EQUNyRCIsImZpbGUiOiIvbW50L2MvVXNlcnMvUnlhbi9EZXNrdG9wL01jS2ltQ29uc3RydWN0aW9uL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gSGVhZGVyKGhlYWRlckltYWdlKSB7XG4gIGNvbnN0IGggPSBKU09OLnN0cmluZ2lmeShcImh0dHBzOlwiICsgaGVhZGVySW1hZ2UuaGVhZGVySW1hZ2UpO1xuICBjb25zb2xlLmxvZyhoKTtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS92T2dCbzQ2LnBuZ1wiIGFsdD1cIndoaXRlIGxvZ29cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgPGgyPkF0IFlvdXIgU2VydmljZS48L2gyPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTWNLaW0gJiBDbyBwcm92aWRlcyBsZWFkaW5nIGNvbnRyYWN0aW5nIHNlcnZpY2VzIGZvciBDb21tZXJpY2FsLFxuICAgICAgICAgICAgUmVzaWRlbnRpYWwgJiBQdWJsaWMgV29ya3MgcHJvamVjdHMgaW4gdGhlIFNhbiBGcmFuY2lzY28gQmF5IEFyZWEuXG4gICAgICAgICAgICBXZSBhcmUgR2VuZXJhbCBDb250YXJjdG9ycyB3aG8gc3BlY2lhbGl6ZSBpcyBTaXRlIFdvcmssIFVuZGVyZ3JvdW5kXG4gICAgICAgICAgICBVdGlsaXRpZXMgJiBFeGNhdmF0aW9uLiBXZSBwcmlkZSBvdXJzZWx2ZXMgb24gb3VyIHN0YWZmIG9mXG4gICAgICAgICAgICBwcm9mZXNzaW9uYWwgZXhwZXJ0cyB0aGF0IGFyZSBoZXJlIGZvciB5b3UgZXZlcnkgc3RlcCBvZiB0aGUgd2F5LlxuICAgICAgICAgICAgTWNLaW0gJiBDbyBpcyBhdmFpbGFibGUgZm9yIHlvdXIgbmV4dCBwcm9qZWN0LCBwcm92aWRpbmcgcXVhbGl0eVxuICAgICAgICAgICAgc2VydmljZSBubyBtYXR0ZXIgdGhlIGRlbWFuZHMgb2Ygb3VyIGNsaWVudHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlO1xuICAgICAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGhlYWRlciAubG9nbyBpbWcge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgLmJhbm5lciBoMiB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoZWFkZXIgLmJhbm5lciBwIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8qIFNtYXJ0cGhvbmVzIChwb3J0cmFpdCBhbmQgbGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDMyMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBTbWFydHBob25lcyAobGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzIxcHgpIHtcbiAgICAgICAgICAgIGhlYWRlciAubG9nbyB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5sb2dvIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBTbWFydHBob25lcyAocG9ydHJhaXQpIC0tLS0tLS0tLS0tICovXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xuICAgICAgICAgICAgLyogU3R5bGVzICovXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVGFibGV0cyAocG9ydHJhaXQgYW5kIGxhbmRzY2FwZSkgLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAgICAgICAgIGhlYWRlciAubG9nbyBpbWcge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDU1MHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXIgLmJhbm5lciBoMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlciAuYmFubmVyIHAge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyogVGFibGV0cyAobGFuZHNjYXBlKSAtLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDgyNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5iYW5uZXIgLnRleHQge1xuICAgICAgICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgICAgICAgZmxleDogMSAwIDYwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlciAuYmFubmVyIC50ZXh0IGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjlyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoZWFkZXIgLmJhbm5lciAudGV4dCBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQycmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5iYW5uZXIgLmxvZ28ge1xuICAgICAgICAgICAgICBmbGV4OiAwIDEgNDAlO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIyNHB4KSB7XG4gICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMCUgNSU7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmFubmVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgd2lkdGg6IDgyNXB4O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5iYW5uZXIgLnRleHQge1xuICAgICAgICAgICAgICBvcmRlcjogMDtcbiAgICAgICAgICAgICAgZmxleDogMSAwIDYwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhlYWRlciAuYmFubmVyIC50ZXh0IGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5iYW5uZXIgLnRleHQgcCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyIC5sb2dvIGltZyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogNzUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKiBMYXJnZSBzY3JlZW5zIC0tLS0tLS0tLS0tICovXG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxODI0cHgpIHtcbiAgICAgICAgICAgIC8qIFN0eWxlcyAqL1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtofSk7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */
/*@ sourceURL=/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Header.js */`));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Navbar(logo) {
  return __jsx("div", {
    id: "mainNavbar",
    className: "jsx-1018313923" + " " + "classic navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("nav", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    value: "selected",
    id: "nav-dropdown-toggle-input",
    className: "jsx-1018313923" + " " + "dropdown-toggle-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1018313923" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1018313923" + " " + "brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("img", {
    src: "https://i.imgur.com/DopBlxW.png",
    alt: "logo",
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })))), __jsx("label", {
    htmlFor: "nav-dropdown-toggle-input",
    id: "nav-dropdown-toggle-label",
    className: "jsx-1018313923" + " " + "dropdown-toggle-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("ul", {
    className: "jsx-1018313923" + " " + "nav-items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("a", {
    title: "About Us",
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "About Us"))), __jsx("li", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("a", {
    title: "Services",
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Services"))), __jsx("li", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    title: "Projects",
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Projects"))), __jsx("li", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    title: "contact",
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Contact"))))), __jsx("ul", {
    className: "jsx-1018313923" + " " + "nav-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("a", {
    title: "About Us",
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "About Us"))), __jsx("li", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("a", {
    title: "Services",
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Services"))), __jsx("li", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("a", {
    title: "Projects",
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Projects"))), __jsx("li", {
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("a", {
    title: "contact",
    className: "jsx-1018313923",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Contact"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1018313923",
    __self: this
  }, ".navbar.jsx-1018313923{z-index:100;grid-area:navbar;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:80px;}.classic.jsx-1018313923{box-shadow:1px 3px #bdc3c7;}.classic.jsx-1018313923 nav.jsx-1018313923{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;background-color:#fff;}.classic.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;margin-left:1.5%;margin-right:1.5%;}.classic.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .brand.jsx-1018313923{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}.classic.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .brand.jsx-1018313923 a.jsx-1018313923{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;width:100%;height:auto;border-radius:5px;}.classic.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .brand.jsx-1018313923 a.jsx-1018313923:hover{cursor:pointer;}.classic.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .brand.jsx-1018313923 img.jsx-1018313923{width:175px;}.classic.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .dropdown-toggle-label.jsx-1018313923{font-size:1.5rem;cursor:pointer;display:block;padding:0.5rem 1rem;box-shadow:0 1px 2px 0 rgba(153,153,153,0.25);border-radius:5px;}.classic.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .dropdown-toggle-label.jsx-1018313923:hover{background-color:#ecf0f1;}.classic.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .dropdown-toggle-label.jsx-1018313923:after{color:#4b4b4b;content:\"\u2630\";float:right;font-weight:bold;-webkit-transition:all 600ms ease-in-out;transition:all 600ms ease-in-out;}@-webkit-keyframes grow-nav-dropdown{from.jsx-1018313923{height:0;}to.jsx-1018313923{height:auto;}}@-webkit-keyframes grow-nav-dropdown-jsx-1018313923{from{height:0;}to{height:auto;}}@keyframes grow-nav-dropdown-jsx-1018313923{from{height:0;}to{height:auto;}}.classic.jsx-1018313923 nav.jsx-1018313923 .nav-items.jsx-1018313923{display:none;}.classic.jsx-1018313923 .nav-dropdown.jsx-1018313923{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:1;width:calc(100% + 5px);border-bottom-left-radius:5px;border-bottom-right-radius:5px;margin:0;-webkit-padding-start:0;padding-inline-start:0;list-style:none;background-color:#ffffff;-webkit-transition:all 600ms ease-in-out;transition:all 600ms ease-in-out;}.classic.jsx-1018313923 .nav-dropdown.jsx-1018313923 li.jsx-1018313923{width:100%;padding:0.5rem 1.5rem;border-radius:5px;text-align:center;}.classic.jsx-1018313923 .nav-dropdown.jsx-1018313923 li.jsx-1018313923:hover{background-color:#bdc3c7;color:#fafafa;cursor:pointer;}.classic.jsx-1018313923 .nav-dropdown.jsx-1018313923 li.jsx-1018313923:hover a.jsx-1018313923{color:#fafafa;}.classic.jsx-1018313923 .nav-dropdown.jsx-1018313923 li.jsx-1018313923:active{background-color:#123851;}.classic.jsx-1018313923 .nav-dropdown.jsx-1018313923 li.jsx-1018313923:last-child{margin-bottom:15px;}.classic.jsx-1018313923 .nav-dropdown.jsx-1018313923 li.jsx-1018313923 .nav-item.jsx-1018313923{display:block;}.classic.jsx-1018313923 .nav-dropdown.jsx-1018313923 a.jsx-1018313923{display:block;width:100%;border-radius:5px;padding-top:0.5rem;padding-bottom:0.5rem;-webkit-text-decoration:none;text-decoration:none;color:#333333;-webkit-transition:all 250ms;transition:all 250ms;}.classic.jsx-1018313923 .nav-dropdown.jsx-1018313923 a.jsx-1018313923:hover{background-color:#bdc3c7;cursor:pointer;color:#fafafa;}.classic.jsx-1018313923 .dropdown-toggle-input.jsx-1018313923{display:none;}.classic.jsx-1018313923 .dropdown-toggle-input.jsx-1018313923:not(checked)~.nav-dropdown.jsx-1018313923{display:none;-webkit-transition:all 600ms ease-in-out;transition:all 600ms ease-in-out;}.classic.jsx-1018313923 .dropdown-toggle-input.jsx-1018313923:checked~.nav-dropdown.jsx-1018313923{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.classic.jsx-1018313923 .dropdown-toggle-input.jsx-1018313923:checked+.container.jsx-1018313923 .dropdown-toggle-label.jsx-1018313923:after{content:\"\xD7\";-webkit-transition:all 600ms ease-in-out;transition:all 600ms ease-in-out;}@media (min-width:900px){.navbar.jsx-1018313923{grid-area:navbar;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:80px;background-color:#ffffff;}.navbar.jsx-1018313923 nav.jsx-1018313923{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;}.navbar.jsx-1018313923 nav.jsx-1018313923 #nav-dropdown-toggle-input.jsx-1018313923{display:none;}.navbar.jsx-1018313923 nav.jsx-1018313923 .nav-dropdown.jsx-1018313923{display:none !important;}.navbar.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;width:100%;margin-left:2.5%;margin-right:2.5%;}.navbar.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 #nav-dropdown-toggle-label.jsx-1018313923{display:none !important;}.navbar.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .brand.jsx-1018313923{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;}.navbar.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .brand.jsx-1018313923 a.jsx-1018313923{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0;width:250px;border-radius:5px;padding-top:15px;padding-bottom:15px;}.navbar.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .brand.jsx-1018313923 a.jsx-1018313923:hover{cursor:pointer;}.navbar.jsx-1018313923 nav.jsx-1018313923 .container.jsx-1018313923 .brand.jsx-1018313923 a.jsx-1018313923 img.jsx-1018313923{height:auto;width:250px;}.navbar.jsx-1018313923 nav.jsx-1018313923 .nav-items.jsx-1018313923{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;padding-left:0;padding-right:0;margin-top:0;margin-bottom:0;list-style:none;}.navbar.jsx-1018313923 nav.jsx-1018313923 .nav-items.jsx-1018313923 li.jsx-1018313923{border-radius:5px;margin-right:1rem;}.navbar.jsx-1018313923 nav.jsx-1018313923 .nav-items.jsx-1018313923 li.jsx-1018313923:active{background-color:#78848c;}.navbar.jsx-1018313923 nav.jsx-1018313923 .nav-items.jsx-1018313923 a.jsx-1018313923{border-radius:5px;-webkit-text-decoration:none;text-decoration:none;color:#333333;padding:10px 25px;-webkit-transition:all 250ms;transition:all 250ms;}.navbar.jsx-1018313923 nav.jsx-1018313923 .nav-items.jsx-1018313923 a.jsx-1018313923:hover{background-color:#bdc3c7;cursor:pointer;color:#fafafa;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUVTLEFBR3lCLEFBVWUsQUFHZCxBQVFBLEFBU0MsQUFLRCxBQVNFLEFBR0gsQUFHSyxBQVFRLEFBR1gsQUFRSCxBQUdHLEFBS0gsQUFHRyxBQUlELEFBR1MsQUFlWCxBQU1jLEFBS1gsQUFHVyxBQUdOLEFBR0wsQUFHQSxBQVVXLEFBS1osQUFHQSxBQUlBLEFBTUQsQUFNTyxBQVFKLEFBTUEsQUFHVyxBQUdYLEFBU1csQUFHVixBQUtELEFBVUUsQUFHSCxBQUlDLEFBYUssQUFJTyxBQUdQLEFBT08sU0ExSzNCLEFBUUEsRUF5QnNCLENBdEdMLEFBK0NuQixBQXlCRSxBQVFBLEFBeUVpQyxBQXdEbkIsQ0E3SGhCLEFBd0RBLEFBR21DLEFBOEJqQyxDQWhIWSxBQW9EZCxBQVNBLEFBR2EsQ0FqRmIsQUFrS0UsRUE1SmUsQUE2R0EsQ0FtRUssQUFPRyxDQWxIekIsS0F5REUsQUFZQSxBQXNCQSxDQXhKRixBQWtEZ0IsQUFRaEIsQUFVb0IsQUFTSCxBQStGZixBQVVpQixDQWxMTCxDQXBEZCxFQVRlLEdBa0RDLENBb0RJLEdBNEhsQixFQXBLaUIsQ0E4Q0YsQ0EyQkQsQUF5R0UsR0FsSEcsR0EzRUMsS0FvREYsR0ExRUwsQUFnRmYsQUEyQkEsQUFzRGlCLEFBbURmLENBbExpQyxPQWdFWCxJQTNFMkIsRUFxTGpDLENBaklsQixLQTVGaUIsQUFRSSxBQWNJLEFBZ0h6QixBQW9CdUIsQUFZQSxBQWlCSSxBQWlCSixJQTlISixJQW9KRyxFQTFHQyxFQXlCdkIsQ0FWQSxJQWdCdUIsU0E0RUUsR0ExT0osU0FvREQsZ0JBdkJOLEFBaUtFLENBL0hoQixDQVZBLENBekNxQixHQW9ITCxNQWxHaEIsQUFpS0UsQ0F6R21CLEVBOEhBLEtBbkZFLEVBMEdyQixpQkF2TjhCLEFBa0pqQixBQVltQixNQWhKYixBQWlLRSxLQTVCUCxNQVJELE1BU2IsS0FSYyxDQS9KSCxFQWlJYixRQW1GaUMsQ0FuTm5CLEFBK0plLFlBOUo3QixLQVVhLFFBcUpYLEVBM0VVLENBekVFLFNBMEVXLEdBekVELG1CQW9CWixBQWlLRSxDQTNHa0IsRUF6RWhDLE9Bb0JhLEFBaUtHLE1BaExGLEFBOEpFLEtBOUlGLENBaUtRLE1BaExULEFBOEpFLEdBMUZrQixFQXBEYixNQWZELEFBOEpFLENBa0JBLFdBaEtyQixLQWZvQixBQThKRSxDQWtCRSxLQTdHYixDQTJIWSxRQTFIRyxHQW5FMUIsQUE4SkUsR0FrQkEsa0JBNUd1Qix1QkFDUCxnQkFDUyxzQkF3SFgsR0F2SG1CLFNBd0hoQixlQUNDLGdCQUNILGFBQ0csZ0JBQ0EsS0EzSHBCLFdBNEhFIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9OYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmZ1bmN0aW9uIE5hdmJhcihsb2dvKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm1haW5OYXZiYXJcIiBjbGFzc05hbWU9XCJjbGFzc2ljIG5hdmJhclwiPlxuICAgICAgPG5hdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICB2YWx1ZT1cInNlbGVjdGVkXCJcbiAgICAgICAgICBpZD1cIm5hdi1kcm9wZG93bi10b2dnbGUtaW5wdXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRvZ2dsZS1pbnB1dFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJicmFuZFwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9pbmRleFwiPlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vRG9wQmx4Vy5wbmdcIiBhbHQ9XCJsb2dvXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICBodG1sRm9yPVwibmF2LWRyb3Bkb3duLXRvZ2dsZS1pbnB1dFwiXG4gICAgICAgICAgICBpZD1cIm5hdi1kcm9wZG93bi10b2dnbGUtbGFiZWxcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tdG9nZ2xlLWxhYmVsXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYtaXRlbXNcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiQWJvdXQgVXNcIj5BYm91dCBVczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiU2VydmljZXNcIj5TZXJ2aWNlczwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgICAgICAgIDxhIHRpdGxlPVwiUHJvamVjdHNcIj5Qcm9qZWN0czwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250YWN0XCI+XG4gICAgICAgICAgICAgICAgPGEgdGl0bGU9XCJjb250YWN0XCI+Q29udGFjdDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdi1kcm9wZG93blwiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgPGEgdGl0bGU9XCJBYm91dCBVc1wiPkFib3V0IFVzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXJ2aWNlc1wiPlxuICAgICAgICAgICAgICA8YSB0aXRsZT1cIlNlcnZpY2VzXCI+U2VydmljZXM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG4gICAgICAgICAgICAgIDxhIHRpdGxlPVwiUHJvamVjdHNcIj5Qcm9qZWN0czwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxuICAgICAgICAgICAgICA8YSB0aXRsZT1cImNvbnRhY3RcIj5Db250YWN0PC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLm5hdmJhciB7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgICAgICBncmlkLWFyZWE6IG5hdmJhcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNsYXNzaWMge1xuICAgICAgICAgICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDNweCAjYmRjM2M3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyBuYXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jbGFzc2ljIG5hdiAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMS41JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsYXNzaWMgbmF2IC5jb250YWluZXIgLmJyYW5kIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsYXNzaWMgbmF2IC5jb250YWluZXIgLmJyYW5kIGEge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsYXNzaWMgbmF2IC5jb250YWluZXIgLmJyYW5kIGE6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyBuYXYgLmNvbnRhaW5lciAuYnJhbmQgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxNzVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsYXNzaWMgbmF2IC5jb250YWluZXIgLmRyb3Bkb3duLXRvZ2dsZS1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDE1MywgMTUzLCAxNTMsIDAuMjUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyBuYXYgLmNvbnRhaW5lciAuZHJvcGRvd24tdG9nZ2xlLWxhYmVsOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jbGFzc2ljIG5hdiAuY29udGFpbmVyIC5kcm9wZG93bi10b2dnbGUtbGFiZWw6YWZ0ZXIge1xuICAgICAgICAgICAgY29sb3I6ICM0YjRiNGI7XG4gICAgICAgICAgICBjb250ZW50OiBcIuKYsFwiO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBncm93LW5hdi1kcm9wZG93biB7XG4gICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgZ3Jvdy1uYXYtZHJvcGRvd24ge1xuICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyBuYXYgLm5hdi1pdGVtcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyAubmF2LWRyb3Bkb3duIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDVweCk7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcyBlYXNlLWluLW91dDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsYXNzaWMgLm5hdi1kcm9wZG93biBsaSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jbGFzc2ljIC5uYXYtZHJvcGRvd24gbGk6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcbiAgICAgICAgICAgIGNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyAubmF2LWRyb3Bkb3duIGxpOmhvdmVyIGEge1xuICAgICAgICAgICAgY29sb3I6ICNmYWZhZmE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jbGFzc2ljIC5uYXYtZHJvcGRvd24gbGk6YWN0aXZlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjM4NTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jbGFzc2ljIC5uYXYtZHJvcGRvd24gbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyAubmF2LWRyb3Bkb3duIGxpIC5uYXYtaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNsYXNzaWMgLm5hdi1kcm9wZG93biBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDI1MG1zO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyAubmF2LWRyb3Bkb3duIGE6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYzNjNztcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyAuZHJvcGRvd24tdG9nZ2xlLWlucHV0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jbGFzc2ljIC5kcm9wZG93bi10b2dnbGUtaW5wdXQ6bm90KGNoZWNrZWQpIH4gLm5hdi1kcm9wZG93biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2xhc3NpYyAuZHJvcGRvd24tdG9nZ2xlLWlucHV0OmNoZWNrZWQgfiAubmF2LWRyb3Bkb3duIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jbGFzc2ljXG4gICAgICAgICAgICAuZHJvcGRvd24tdG9nZ2xlLWlucHV0OmNoZWNrZWRcbiAgICAgICAgICAgICsgLmNvbnRhaW5lclxuICAgICAgICAgICAgLmRyb3Bkb3duLXRvZ2dsZS1sYWJlbDphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIsOXXCI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgICAgICAgICAubmF2YmFyIHtcbiAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBuYXZiYXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFyIG5hdiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFyIG5hdiAjbmF2LWRyb3Bkb3duLXRvZ2dsZS1pbnB1dCB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFyIG5hdiAubmF2LWRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdmJhciBuYXYgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMi41JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZiYXIgbmF2IC5jb250YWluZXIgI25hdi1kcm9wZG93bi10b2dnbGUtbGFiZWwge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFyIG5hdiAuY29udGFpbmVyIC5icmFuZCB7XG4gICAgICAgICAgICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFyIG5hdiAuY29udGFpbmVyIC5icmFuZCBhIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubmF2YmFyIG5hdiAuY29udGFpbmVyIC5icmFuZCBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdmJhciBuYXYgLmNvbnRhaW5lciAuYnJhbmQgYSBpbWcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZiYXIgbmF2IC5uYXYtaXRlbXMge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdmJhciBuYXYgLm5hdi1pdGVtcyBsaSB7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdmJhciBuYXYgLm5hdi1pdGVtcyBsaTphY3RpdmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg4NDhjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5hdmJhciBuYXYgLm5hdi1pdGVtcyBhIHtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uYXZiYXIgbmF2IC5uYXYtaXRlbXMgYTpob3ZlciB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGMzYzc7XG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6ICNmYWZhZmE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl19 */\n/*@ sourceURL=/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/Navbar.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/ServicesGrid.js":
/*!************************************!*\
  !*** ./components/ServicesGrid.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-css-grid */ "styled-css-grid");
/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/ServicesGrid.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function ServicesGrid({
  bgColor
}) {
  return __jsx("div", {
    style: {
      backgroundColor: bgColor
    },
    className: "jsx-382774164" + " " + "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-382774164" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    columns: "repeat(auto-fill, minmax(300px, 1fr))",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-382774164" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("img", {
    src: "https://image.flaticon.com/icons/svg/99/99801.svg",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Underground Utilities"))), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-382774164" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("img", {
    src: "https://image.flaticon.com/icons/svg/99/99850.svg",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Asphalt Paving"))), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-382774164" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("img", {
    src: "https://image.flaticon.com/icons/svg/99/99805.svg",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Site Work"))), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-382774164" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("img", {
    src: "https://image.flaticon.com/icons/svg/99/99826.svg",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Drilling"))), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-382774164" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("img", {
    src: "https://image.flaticon.com/icons/svg/632/632480.svg",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Excavation"))), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-382774164" + " " + "icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("img", {
    src: "https://image.flaticon.com/icons/svg/99/99813.svg",
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx("p", {
    className: "jsx-382774164",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Learn More"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "382774164",
    __self: this
  }, ".wrapper.jsx-382774164{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.container.jsx-382774164{width:100%;max-width:1000px;}p.jsx-382774164{text-align:center !important;}.icons.jsx-382774164{text-align:center;width:100%;height:100%;padding:0 15%;}img.jsx-382774164{width:auto;}.services-grid.jsx-382774164{display:grid;grid-gap:10px;grid-template-rows:auto;grid-template-columns:1fr;grid-template-areas:\"one\" \"two\" \"three\" \"four\" \"five\" \"six\";padding-top:0;padding-bottom:0;}div.jsx-382774164{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.services-grid.jsx-382774164 div.jsx-382774164:nth-child(1){grid-area:\"one\";}.services-grid.jsx-382774164 div.jsx-382774164:nth-child(2){grid-area:\"two\";}.services-grid.jsx-382774164 div.jsx-382774164:nth-child(3){grid-area:\"three\";}.services-grid.jsx-382774164 div.jsx-382774164:nth-child(4){grid-area:\"four\";}.services-grid.jsx-382774164 div.jsx-382774164:nth-child(5){grid-area:\"five\";}.services-grid.jsx-382774164 div.jsx-382774164:nth-child(6){grid-area:\"six\";}img.jsx-382774164{max-width:150px;}@media (min-width:900px){.services-grid.jsx-382774164{grid-template-rows:auto;grid-template-columns:1fr 1fr;grid-template-areas:\"one\" \"two\" \"three\" \"four\" \"five\" \"six\";}}@media (min-width:1200px){.services-grid.jsx-382774164{grid-template-rows:auto;grid-template-columns:1fr 1fr 1fr;grid-template-areas:\"one\" \"two\" \"three\" \"four\" \"five\" \"six\";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9TZXJ2aWNlc0dyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURrQixBQUdzQixBQU1BLEFBSWtCLEFBR1gsQUFNUCxBQUdFLEFBU0EsQUFJRyxBQUdBLEFBR0UsQUFHRCxBQUdBLEFBR0QsQUFHQSxBQUtVLEFBT0EsV0FoRWIsQUFNSSxBQWFuQixFQUdnQixHQWFoQixBQUdBLEFBWUEsQUFHQSxDQVRBLEFBR0EsQ0FsQ2EsQUE0QmIsTUFpQmtDLEFBT0ksR0ExQ1osQ0FoQjFCLENBR0EsQUFJYyxZQUNFLFVBU1ksR0FtQ29DLENBM0NoRSxHQWtEZ0UsZ0JBbkN4QyxHQU5zQyxRQXhCckMsNkJBMkR2QixJQU9BLG1CQXpDYyxjQUNHLENBS25CLGdCQUpBLGdCQTFCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9TZXJ2aWNlc0dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmlkLCBDZWxsIH0gZnJvbSBcInN0eWxlZC1jc3MtZ3JpZFwiO1xuXG5mdW5jdGlvbiBTZXJ2aWNlc0dyaWQoeyBiZ0NvbG9yIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8R3JpZCBjb2x1bW5zPVwicmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKVwiPlxuICAgICAgICAgIDxDZWxsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzk5Lzk5ODAxLnN2Z1wiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHA+VW5kZXJncm91bmQgVXRpbGl0aWVzPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgIDxDZWxsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc1wiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWFnZS5mbGF0aWNvbi5jb20vaWNvbnMvc3ZnLzk5Lzk5ODUwLnN2Z1wiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHA+QXNwaGFsdCBQYXZpbmc8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgPENlbGw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvOTkvOTk4MDUuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8cD5TaXRlIFdvcms8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgPENlbGw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltYWdlLmZsYXRpY29uLmNvbS9pY29ucy9zdmcvOTkvOTk4MjYuc3ZnXCIgLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8cD5EcmlsbGluZzwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICA8Q2VsbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy82MzIvNjMyNDgwLnN2Z1wiIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHA+RXhjYXZhdGlvbjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2VsbD5cbiAgICAgICAgICA8Q2VsbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3N2Zy85OS85OTgxMy5zdmdcIiAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxwPkxlYXJuIE1vcmU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NlbGw+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgICB9XG4gICAgICAgIHAge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5pY29ucyB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE1JTtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC5zZXJ2aWNlcy1ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm9uZVwiIFwidHdvXCIgXCJ0aHJlZVwiIFwiZm91clwiIFwiZml2ZVwiIFwic2l4XCI7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgZGl2IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgLnNlcnZpY2VzLWdyaWQgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBcIm9uZVwiO1xuICAgICAgICB9XG4gICAgICAgIC5zZXJ2aWNlcy1ncmlkIGRpdjpudGgtY2hpbGQoMikge1xuICAgICAgICAgIGdyaWQtYXJlYTogXCJ0d29cIjtcbiAgICAgICAgfVxuICAgICAgICAuc2VydmljZXMtZ3JpZCBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICBncmlkLWFyZWE6IFwidGhyZWVcIjtcbiAgICAgICAgfVxuICAgICAgICAuc2VydmljZXMtZ3JpZCBkaXY6bnRoLWNoaWxkKDQpIHtcbiAgICAgICAgICBncmlkLWFyZWE6IFwiZm91clwiO1xuICAgICAgICB9XG4gICAgICAgIC5zZXJ2aWNlcy1ncmlkIGRpdjpudGgtY2hpbGQoNSkge1xuICAgICAgICAgIGdyaWQtYXJlYTogXCJmaXZlXCI7XG4gICAgICAgIH1cbiAgICAgICAgLnNlcnZpY2VzLWdyaWQgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBcInNpeFwiO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgIC5zZXJ2aWNlcy1ncmlkIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwib25lXCIgXCJ0d29cIiBcInRocmVlXCIgXCJmb3VyXCIgXCJmaXZlXCIgXCJzaXhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgIC5zZXJ2aWNlcy1ncmlkIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcIm9uZVwiIFwidHdvXCIgXCJ0aHJlZVwiIFwiZm91clwiIFwiZml2ZVwiIFwic2l4XCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzR3JpZDtcbiJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/ServicesGrid.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (ServicesGrid);

/***/ }),

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-markdown */ "react-markdown");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/post.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Post({
  title,
  about,
  log
}) {
  console.log(log);
  let aboutSection = about.toString();
  return __jsx("div", {
    className: "jsx-1486862249",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1486862249",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_2___default.a, {
    source: aboutSection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1486862249",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvTWNLaW1Db25zdHJ1Y3Rpb24vY29tcG9uZW50cy9wb3N0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVrQiIsImZpbGUiOiIvbW50L2MvVXNlcnMvUnlhbi9EZXNrdG9wL01jS2ltQ29uc3RydWN0aW9uL2NvbXBvbmVudHMvcG9zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuXG5mdW5jdGlvbiBQb3N0KHsgdGl0bGUsIGFib3V0LCBsb2cgfSkge1xuICBjb25zb2xlLmxvZyhsb2cpO1xuICBsZXQgYWJvdXRTZWN0aW9uID0gYWJvdXQudG9TdHJpbmcoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPFJlYWN0TWFya2Rvd24gc291cmNlPXthYm91dFNlY3Rpb259IC8+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXX0= */\n/*@ sourceURL=/mnt/c/Users/Ryan/Desktop/McKimConstruction/components/post.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state.options && e.state.options.fromExternal) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.nextExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      // marking route changes as a navigation start entry
      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          console.error('The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as');
          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if ( // @ts-ignore workaround for dead-code elimination
    (self.__HAS_SPR || "development" !== 'production') && Component.__NEXT_SPR) {
      let status;
      const url = ctx.asPath ? ctx.asPath : url_1.format({
        pathname: ctx.pathname,
        query: ctx.query
      });
      props = await fetch(url, {
        headers: {
          'content-type': 'application/json'
        }
      }).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).then(pageProps => {
        return {
          pageProps
        };
      }).catch(err => {
        return {
          error: err.message,
          status
        };
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^\/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^\/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1')] = groupIndex++, '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  return (...args) => {
    if (!used) {
      used = true;
      fn.apply(this, args);
    }
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(Component, ctx) {
  if (true) {
    if (Component.prototype && Component.prototype.getInitialProps) {
      const message = `"${getDisplayName(Component)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!Component.getInitialProps) {
    return {};
  }

  const props = await Component.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(Component)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(Component)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic prerendering. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-css-grid */ "styled-css-grid");
/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Block */ "./components/Block.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/McKimConstruction/pages/about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: "kx9ztdbtk5cq",
  accessToken: "UNfXdUa6_vpvne7S_kCNkSdlCo-mI4GZSCKuLGJy-7A"
});

function AboutPage() {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allPosts = await fetchEntriesForContentType(contentTypes[0]);
      setPosts([...allPosts]);
    }

    getPosts();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "McKim - About Us"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, `
          html,
          body {
            height: 100%;
          }
          body {
            margin-left: 0px;
            margin-bottom: 0px;
            margin-top: 0px;
            margin-right: 0px;
          }
          @charset "UTF-8";
          * {
            box-sizing: border-box;
          }

          ::-moz-selection {
            background: #2980b9;
            color: #fafafa;
          }

          ::selection {
            background: #2980b9;
            color: #fafafa;
          }

          html {
            font-size: 1.25rem;
          }

          body {
            background-color: #fafafa;
          }

          html {
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 15px;
          }

          h1 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 2rem;
            color: #333333;
          }

          h2 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.75rem;
            color: #333333;
          }

          h3 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.5rem;
            color: #333333;
          }

          p {
            margin-top: 0.5rem;
            font-family: "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.25rem;
            color: #333333;
          }

          a {
            text-decoration: none;
            color: #3498db;
          }
          a:hover {
            color: #2980b9;
          }
          a:visited {
            color: #9b59b6;
          }

          .flex {
            display: flex;
          }

          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 10% 2.5%;
          }

          .col {
            flex-direction: column;
          }

          .column {
            flex-basis: 100%;
          }

          @media (min-width: 1200px) {
            .row {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
            }

            .column {
              flex: 1;
            }
          }
          .wrap {
            flex: row-wrap;
          }

          .justify-content-start {
            justify-content: start;
          }

          .justify-content-end {
            justify-content: end;
          }

          .justify-content-center {
            justify-content: center;
          }

          .justify-content-between {
            justify-content: space-between;
          }

          .justify-content-around {
            justify-content: space-around;
          }

          .align-items-start {
            align-items: start;
          }

          .align-items-end {
            align-items: end;
          }

          .align-items-center {
            align-items: center;
          }

          .align-items-baseline {
            align-items: baseline;
          }

          .align-items-stretch {
            align-items: stretch;
          }

          .align-self-start {
            align-self: start;
          }

          .align-self-end {
            align-self: end;
          }

          .align-self-center {
            align-self: end;
          }

          .align-self-baseline {
            align-self: baseline;
          }

          .align-self-stretch {
            align-self: stretch;
          }

          .white-1 {
            background: #ffffff;
          }

          .grey-1 {
            background: #ecf0f1;
          }

          a {
            color: #ffffff;
          }
          a:hover {
            color: #f1c40f;
          }
        `)), __jsx("div", {
    style: {
      marginLleft: 0,
      marginBottom: 0,
      marginTop: 0,
      marginRight: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, posts.length > 0 ? posts.map(p => __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    key: 1,
    height: "100%",
    columns: "1fr",
    rows: "82px 1fr 50px",
    areas: ["navbar", "content", "footer"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    area: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  })), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    area: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "About Us",
    subtitle: null,
    image: p.fields.aboutPageImage.fields.file.url,
    text: p.fields.aboutPageText,
    link: "#",
    btnText: null,
    align: "left",
    bgColor: "#ffffff",
    log: p,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  })), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    area: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  })))) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (AboutPage);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-css-grid */ "styled-css-grid");
/* harmony import */ var styled_css_grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/post */ "./components/post.js");
/* harmony import */ var _components_Block__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Block */ "./components/Block.js");
/* harmony import */ var _components_ServicesGrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ServicesGrid */ "./components/ServicesGrid.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about */ "./pages/about.js");
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/McKimConstruction/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











__webpack_require__(/*! dotenv */ "dotenv").config();

const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: "MCKIM_SPACE_ID",
  accessToken: "MCKIM_ACCESS_TOKEN"
});

function HomePage() {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allPosts = await fetchEntriesForContentType(contentTypes[0]);
      setPosts([...allPosts]);
    }

    getPosts();
  }, []);
  console.log(posts);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "McKim Construction"), __jsx("style", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, `
          html,
          body {
            height: 100%;
          }
          body {
            margin-left: 0px;
            margin-bottom: 0px;
            margin-top: 0px;
            margin-right: 0px;
          }
          @charset "UTF-8";
          * {
            box-sizing: border-box;
          }

          ::-moz-selection {
            background: #2980b9;
            color: #fafafa;
          }

          ::selection {
            background: #2980b9;
            color: #fafafa;
          }

          html {
            font-size: 1.25rem;
          }

          body {
            background-color: #fafafa;
          }

          html {
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 15px;
          }

          h1 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 2rem;
            color: #333333;
          }

          h2 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.75rem;
            color: #333333;
          }

          h3 {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.5rem;
            color: #333333;
          }

          p {
            margin-top: 0.5rem;
            font-family: "Candara", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial,
              sans-serif;
            font-size: 1.25rem;
            color: #333333;
            text-align: justify;
          }

          a {
            text-decoration: none;
            color: #3498db;
          }
          a:hover {
            color: #2980b9;
          }
          a:visited {
            color: #9b59b6;
          }

          .flex {
            display: flex;
          }

          .row {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 2.5% 2.5%;
          }

          .col {
            flex-direction: column;
          }

          .column {
            flex-basis: 100%;
          }

          @media (min-width: 1200px) {
            .row {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
            }

            .column {
              flex: 1;
            }
          }
          .wrap {
            flex: row-wrap;
          }

          .justify-content-start {
            justify-content: start;
          }

          .justify-content-end {
            justify-content: end;
          }

          .justify-content-center {
            justify-content: center;
          }

          .justify-content-between {
            justify-content: space-between;
          }

          .justify-content-around {
            justify-content: space-around;
          }

          .align-items-start {
            align-items: start;
          }

          .align-items-end {
            align-items: end;
          }

          .align-items-center {
            align-items: center;
          }

          .align-items-baseline {
            align-items: baseline;
          }

          .align-items-stretch {
            align-items: stretch;
          }

          .align-self-start {
            align-self: start;
          }

          .align-self-end {
            align-self: end;
          }

          .align-self-center {
            align-self: end;
          }

          .align-self-baseline {
            align-self: baseline;
          }

          .align-self-stretch {
            align-self: stretch;
          }

          .white-1 {
            background: #ffffff;
          }

          .grey-1 {
            background: #ecf0f1;
          }

          a {
            color: #ffffff;
          }
          a:hover {
            color: #f1c40f;
          }
        `)), __jsx("div", {
    style: {
      marginLleft: 0,
      marginBottom: 0,
      marginTop: 0,
      marginRight: 0
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, posts.length > 0 ? posts.map(p => __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    key: 1,
    height: "100%",
    columns: "1fr",
    gap: "0",
    rows: "82px 500px 1fr 50px",
    areas: ["navbar", "header", "content", "footer"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    key: 2,
    area: "navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"] // logo={JSON.stringify(p.fields.logo.fields.file.url)}
  , {
    logo: "../public/images/logo.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  })), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    key: 3,
    area: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    headerImage: p.fields.homePageHeader.fields.file.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  })), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    area: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "About Us",
    subtitle: null,
    image: p.fields.homePageAboutUsImage.fields.file.url,
    text: p.fields.homePageAboutUsText,
    link: "/about",
    btnText: "Get In Touch",
    align: "left",
    bgColor: "#ffffff",
    log: p.fields.logo.fields.file.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }), __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Our Services",
    subtitle: null,
    image: p.fields.homePageServicesImage.fields.file.url,
    text: p.fields.homePageServicesText,
    link: "/services",
    btnText: "Explore",
    align: "right",
    bgColor: "whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }), __jsx(_components_ServicesGrid__WEBPACK_IMPORTED_MODULE_8__["default"], {
    bgColor: "whitesmoke",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), __jsx(_components_Block__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Projects",
    subtitle: null,
    image: p.fields.homePageProjectsImage.fields.file.url,
    text: p.fields.homePageProjectsText1,
    link: "/projects",
    btnText: "Explore",
    align: "left",
    bgColor: "#ffffff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  })), __jsx(styled_css_grid__WEBPACK_IMPORTED_MODULE_1__["Cell"], {
    area: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312
    },
    __self: this
  })))) : null));
}

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Ryan/Desktop/McKimConstruction/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-markdown":
/*!*********************************!*\
  !*** external "react-markdown" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "styled-css-grid":
/*!**********************************!*\
  !*** external "styled-css-grid" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-css-grid");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map