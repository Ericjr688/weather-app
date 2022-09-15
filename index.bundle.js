/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\r\n  box-sizing: border-box;\r\n  --main-font: \"Poppins\", sans-serif;\r\n  --font-color: #272e30;\r\n  --bg-color: whitesmoke;\r\n  --accent-one: #343e40;\r\n  --accent-two: #7DA2A9;\r\n  --accent-three: whitesmoke;\r\n  --accent-four: #A0AECD;\r\n  --large-font: 3.2rem;\r\n  --medium-font: 2rem;\r\n  --small-font: 1.5rem;\r\n  --very-large-font: 4.5rem;\r\n  --very-small-font: 1.2rem;\r\n}\r\n\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody{\r\n  font-family: var(--main-font);\r\n  color: var(--font-color);\r\n  min-height:100vh;\r\n  background-color: var(--bg-color);\r\n  margin: 0;\r\n}\r\n\r\n#content{\r\n  display: grid;\r\n  grid-template-rows: .5fr 3fr 2fr 3fr;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow-y: scroll;\r\n  grid-template-areas:\r\n      \"header\"\r\n      \"summary\"\r\n      \"detail\"\r\n      \"description\";\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n  align-items: center;\r\n  background-color: var(--accent-three);\r\n  color: var(--accent-one);\r\n  grid-area: header;\r\n  font-size: var(--small-font);\r\n  position: relative;\r\n\r\n  height:6rem;\r\n}\r\n\r\n.header .logo-container{\r\n  height: 50%;\r\n  position: absolute;\r\n}\r\n\r\n.header .logo-container img{\r\n  height:100%;\r\n}\r\n\r\n.header .title{\r\n  margin-left: 5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.header .search-bar{\r\n  width: 60%;\r\n}\r\n\r\n.header .search-bar form{\r\n  width:100%;\r\n  display: flex;\r\n}\r\n\r\n.header .search-bar input{\r\n  flex: 1 1 auto;\r\n  font-size: var(--small-font);\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n}\r\n\r\n.header .search-bar form button{\r\n  margin-left: -2px;\r\n  overflow: hidden;\r\n}\r\n\r\n.header #temp-unit{\r\n  width:5%;\r\n}\r\n\r\n\r\n.summary {\r\n  background-color: var(--accent-one);\r\n  color: var(--accent-three);\r\n  font-size: var(--small-font);\r\n  grid-area: summary;\r\n  padding: 2rem;\r\n}\r\n\r\n.summary .summary-main {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.summary .summary-main .summary-main-left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.summary .summary-main .summary-main-left .city {\r\n  font-size: var(--medium-font);\r\n}\r\n\r\n.summary .summary-main .summary-main-left .weather {\r\n\r\n}\r\n\r\n.summary .summary-main .summary-main-left .current-temp {\r\n  font-size: var(--very-large-font);\r\n  font-weight:lighter;\r\n}\r\n\r\n.summary .summary-main .summary-main-left .extreme-temp {\r\n  display: flex;\r\n  font-size: var(--very-small-font);\r\n  gap: .6rem;\r\n}\r\n\r\n\r\n.detail {\r\n  grid-area: detail;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 3rem;\r\n  font-size: var(--very-small-font);\r\n  padding: 2rem;\r\n  justify-content: center;\r\n  justify-items: center;\r\n}\r\n\r\n.detail .detail-container {\r\n\r\n}\r\n\r\n.detail .detail-container .detail-title {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: .8rem;\r\n}\r\n\r\n.detail .detail-container .detail-value {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.description {\r\n  background-color: #343e40;\r\n  grid-area: description;\r\n  color: var(--accent-three);\r\n  font-size: var(--small-font);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.temp::after {\r\n  content: \"\\00b0\";\r\n}\r\n\r\n.min-temp::before {\r\n  content: \"L: \";\r\n}\r\n\r\n.max-temp::before {\r\n  content: \"H: \";\r\n}\r\n\r\n.desc-weather::before {\r\n  content: \"Today: \";\r\n}\r\n\r\n.desc-min-temp::before {\r\n  content: \"\\00b0. The low tonight will be \";\r\n}\r\n\r\n.desc-min-temp::after {\r\n  content: \"\\00b0\";\r\n}\r\n\r\n.desc-max-temp::before {\r\n  content: \". The high will be \";\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nbutton {\r\n  font-size: var(--small-font);\r\n  font-family: inherit;\r\n  padding: 5px 10px;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: var(--accent-one);\r\n  color: var(--accent-three);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,kCAAkC;EAClC,qBAAqB;EACrB,sBAAsB;EACtB,qBAAqB;EACrB,qBAAqB;EACrB,0BAA0B;EAC1B,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,yBAAyB;EACzB,yBAAyB;AAC3B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,wBAAwB;EACxB,gBAAgB;EAChB,iCAAiC;EACjC,SAAS;AACX;;AAEA;EACE,aAAa;EACb,oCAAoC;EACpC,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB;;;;mBAIiB;AACnB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,qCAAqC;EACrC,wBAAwB;EACxB,iBAAiB;EACjB,4BAA4B;EAC5B,kBAAkB;;EAElB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,cAAc;EACd,4BAA4B;EAC5B,iBAAiB;EACjB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,QAAQ;AACV;;;AAGA;EACE,mCAAmC;EACnC,0BAA0B;EAC1B,4BAA4B;EAC5B,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;AAEA;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,iCAAiC;EACjC,UAAU;AACZ;;;AAGA;EACE,iBAAiB;EACjB,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,iCAAiC;EACjC,aAAa;EACb,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;;AAEA;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,yBAAyB;EACzB,sBAAsB;EACtB,0BAA0B;EAC1B,4BAA4B;EAC5B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;AAChC;;;;;;;;;;AAUA;EACE,4BAA4B;EAC5B,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,mCAAmC;EACnC,0BAA0B;AAC5B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');\r\n\r\n:root{\r\n  box-sizing: border-box;\r\n  --main-font: \"Poppins\", sans-serif;\r\n  --font-color: #272e30;\r\n  --bg-color: whitesmoke;\r\n  --accent-one: #343e40;\r\n  --accent-two: #7DA2A9;\r\n  --accent-three: whitesmoke;\r\n  --accent-four: #A0AECD;\r\n  --large-font: 3.2rem;\r\n  --medium-font: 2rem;\r\n  --small-font: 1.5rem;\r\n  --very-large-font: 4.5rem;\r\n  --very-small-font: 1.2rem;\r\n}\r\n\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody{\r\n  font-family: var(--main-font);\r\n  color: var(--font-color);\r\n  min-height:100vh;\r\n  background-color: var(--bg-color);\r\n  margin: 0;\r\n}\r\n\r\n#content{\r\n  display: grid;\r\n  grid-template-rows: .5fr 3fr 2fr 3fr;\r\n  height: 100%;\r\n  position: relative;\r\n  overflow-y: scroll;\r\n  grid-template-areas:\r\n      \"header\"\r\n      \"summary\"\r\n      \"detail\"\r\n      \"description\";\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-left: 2rem;\r\n  padding-right: 2rem;\r\n  align-items: center;\r\n  background-color: var(--accent-three);\r\n  color: var(--accent-one);\r\n  grid-area: header;\r\n  font-size: var(--small-font);\r\n  position: relative;\r\n\r\n  height:6rem;\r\n}\r\n\r\n.header .logo-container{\r\n  height: 50%;\r\n  position: absolute;\r\n}\r\n\r\n.header .logo-container img{\r\n  height:100%;\r\n}\r\n\r\n.header .title{\r\n  margin-left: 5rem;\r\n  font-weight: 600;\r\n}\r\n\r\n.header .search-bar{\r\n  width: 60%;\r\n}\r\n\r\n.header .search-bar form{\r\n  width:100%;\r\n  display: flex;\r\n}\r\n\r\n.header .search-bar input{\r\n  flex: 1 1 auto;\r\n  font-size: var(--small-font);\r\n  padding: 5px 10px;\r\n  cursor: pointer;\r\n  overflow: hidden;\r\n}\r\n\r\n.header .search-bar form button{\r\n  margin-left: -2px;\r\n  overflow: hidden;\r\n}\r\n\r\n.header #temp-unit{\r\n  width:5%;\r\n}\r\n\r\n\r\n.summary {\r\n  background-color: var(--accent-one);\r\n  color: var(--accent-three);\r\n  font-size: var(--small-font);\r\n  grid-area: summary;\r\n  padding: 2rem;\r\n}\r\n\r\n.summary .summary-main {\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 2rem;\r\n}\r\n\r\n.summary .summary-main .summary-main-left {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.summary .summary-main .summary-main-left .city {\r\n  font-size: var(--medium-font);\r\n}\r\n\r\n.summary .summary-main .summary-main-left .weather {\r\n\r\n}\r\n\r\n.summary .summary-main .summary-main-left .current-temp {\r\n  font-size: var(--very-large-font);\r\n  font-weight:lighter;\r\n}\r\n\r\n.summary .summary-main .summary-main-left .extreme-temp {\r\n  display: flex;\r\n  font-size: var(--very-small-font);\r\n  gap: .6rem;\r\n}\r\n\r\n\r\n.detail {\r\n  grid-area: detail;\r\n  display: grid;\r\n  grid-template-columns: repeat(5, 1fr);\r\n  gap: 3rem;\r\n  font-size: var(--very-small-font);\r\n  padding: 2rem;\r\n  justify-content: center;\r\n  justify-items: center;\r\n}\r\n\r\n.detail .detail-container {\r\n\r\n}\r\n\r\n.detail .detail-container .detail-title {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-size: .8rem;\r\n}\r\n\r\n.detail .detail-container .detail-value {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.description {\r\n  background-color: #343e40;\r\n  grid-area: description;\r\n  color: var(--accent-three);\r\n  font-size: var(--small-font);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.temp::after {\r\n  content: \"\\00b0\";\r\n}\r\n\r\n.min-temp::before {\r\n  content: \"L: \";\r\n}\r\n\r\n.max-temp::before {\r\n  content: \"H: \";\r\n}\r\n\r\n.desc-weather::before {\r\n  content: \"Today: \";\r\n}\r\n\r\n.desc-min-temp::before {\r\n  content: \"\\00b0. The low tonight will be \";\r\n}\r\n\r\n.desc-min-temp::after {\r\n  content: \"\\00b0\";\r\n}\r\n\r\n.desc-max-temp::before {\r\n  content: \". The high will be \";\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nbutton {\r\n  font-size: var(--small-font);\r\n  font-family: inherit;\r\n  padding: 5px 10px;\r\n  border-radius: 3px;\r\n  cursor: pointer;\r\n  border: none;\r\n  background-color: var(--accent-one);\r\n  color: var(--accent-three);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/DOMManipulation.js":
/*!********************************!*\
  !*** ./src/DOMManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBox": () => (/* binding */ clearBox),
/* harmony export */   "loadDescription": () => (/* binding */ loadDescription),
/* harmony export */   "loadDetails": () => (/* binding */ loadDetails),
/* harmony export */   "loadSummary": () => (/* binding */ loadSummary)
/* harmony export */ });
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");


// generate the summary section of the website
function loadSummary(weatherData) {
  const summary = document.querySelector('.summary');
  summary.style.visibility = 'visible';
  const summaryMain = document.createElement('div');
  summaryMain.classList.add('summary-main');
  const left = document.createElement('div');
  const leftSections = ['city', 'weather', 'current-temp', 'extreme-temp'];
  leftSections.forEach(section => {
    let element = document.createElement('div');
    element.classList.add(section);
    if (section == 'city') {
      element.textContent = weatherData['name'];
    } else if (section == 'weather') {
      element.textContent = weatherData['weather'][0]['main'];
    } else if (section == 'current-temp') {
      const tempSpan = document.createElement('span')
      tempSpan.textContent = Math.round(weatherData['main']['temp'])
      tempSpan.classList.add('temp')
      element.appendChild(tempSpan)
    } else if (section == 'extreme-temp') {
      const minTemp = document.createElement('div');
      const tempSpan = document.createElement('span')
      tempSpan.textContent =Math.round(weatherData['main']['temp_min'])
      tempSpan.classList.add('temp');
      tempSpan.classList.add('min-temp');
      minTemp.appendChild(tempSpan)
      element.appendChild(minTemp);

      const maxTemp = document.createElement('div');
      const tempSpanTwo = document.createElement('span')
      tempSpanTwo.textContent = Math.round(weatherData['main']['temp_max'])
      tempSpanTwo.classList.add('temp');
      tempSpanTwo.classList.add('max-temp');
      maxTemp.appendChild(tempSpanTwo)
      element.appendChild(maxTemp);
    }
    left.appendChild(element);
  });
  
  left.classList.add('summary-main-left')
  summaryMain.appendChild(left);

  summary.appendChild(summaryMain);
}

// generate the details section of the website
function loadDetails(data){
  const details = document.querySelector('.detail');
  details.style.visibility = 'visible';

  // weather details
  const weatherDetails = [
    {
      name: "SUNRISE",
      data: (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getTimeFromDate)(new Date (data['sys']['sunrise'] * 1000)),
    },
    {
      name: "SUNSET",
      data: (0,_logic_js__WEBPACK_IMPORTED_MODULE_0__.getTimeFromDate)(new Date (data['sys']['sunset'] * 1000)),
    },
    {
      name: 'CHANCE OF RAIN',
      data: "n/a"
    },
    {
      name: 'HUMIDITY',
      data: data['main']['humidity'] + '%'
    },
    {
      name: 'WIND',
      data: data['wind']['speed'] + 'km/hr'
    },
    {
      name: 'FEELS LIKE',
      data: Math.round(data['main']['feels_like'])
    },
    {
      name: 'PRECIPITAITON',
      data: "n/a"
    },
    {
      name: 'PRESSURE',
      data: data['main']['pressure'] + 'hPa'
    },
    {
      name: 'VISIBILITY',
      data: data['visibility']/1000 + 'km'
    },
    {
      name: 'UV INDEX',
      data: "n/a"
    },
  ]

  weatherDetails.forEach(detail => {
    const container = document.createElement('div');
    container.classList.add('detail-container');

    const detailTitle = document.createElement('div');
    detailTitle.classList.add('detail-title');
    detailTitle.id = (`${textToHyphenFormat(detail.name)}-detail-title`);
    detailTitle.textContent = detail.name;
    container.appendChild(detailTitle);

    const detailValue = document.createElement('div');
    detailValue.classList.add('detail-value');
    detailValue.id = (`${textToHyphenFormat(detail.name)}-detail-value`);
    detailValue.textContent = detail.data;
    if ( detail.name == "FEELS LIKE" ) {
      detailValue.classList.add('temp');
    }
    container.appendChild(detailValue)

    details.appendChild(container);
  })
}

// generate description section of the website
function loadDescription(data){
  const description = document.querySelector('.description');
  description.style.visibility = 'visible';

  const weather = document.createElement('span')
  weather.textContent = data['weather'][0]['description'];
  weather.classList.add('desc-weather')
  description.appendChild(weather)

  const minTemp = document.createElement('span')
  minTemp.textContent = Math.round(data['main']['temp_min'])
  minTemp.classList.add('temp');
  minTemp.classList.add('desc-min-temp');
  description.appendChild(minTemp);

  const maxTemp = document.createElement('span')
  maxTemp.textContent = Math.round(data['main']['temp_max'])
  maxTemp.classList.add('temp');
  maxTemp.classList.add('desc-max-temp');
  description.appendChild(maxTemp);
}

function clearBox(elementSelector) {
  const div = document.querySelector(elementSelector);
  while(div.firstChild) {
      div.removeChild(div.firstChild);
  }
}

function textToHyphenFormat(text){
  return text.split(" ").join("-").toLowerCase();
}




/***/ }),

/***/ "./src/apiHandler.js":
/*!***************************!*\
  !*** ./src/apiHandler.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLonLat": () => (/* binding */ getLonLat),
/* harmony export */   "getWeatherData": () => (/* binding */ getWeatherData)
/* harmony export */ });
const APIKEY = 'e612668fcf9ef4f01f0bb2b20bf68b77';

async function getLonLat(cityName){
  try{
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${APIKEY}`, {mode: 'cors'});
    const data = await response.json();
    const coordinates = {
      lon: data[0]['lon'],
      lat: data[0]['lat'],
    }
    return coordinates;
  }catch(error){
    console.log('Error with getting coordinate data: ', error )
  } 
}

async function getWeatherData(coordinates, tempUnit){
  try {
    const lon = coordinates['lon'];
    const lat = coordinates['lat'];
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=${tempUnit}`, {mode: 'cors'});
    const data = await response.json();
    return data;
  }catch (error) {
    console.log('Error with getting weather information: ', error )
  }
  
}




/***/ }),

/***/ "./src/generateHeader.js":
/*!*******************************!*\
  !*** ./src/generateHeader.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");
/* harmony import */ var _searchBar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchBar.js */ "./src/searchBar.js");



const content = document.querySelector('#content');

function loadHeader() {
  const header = document.createElement('div');
  header.classList.add('header');

  const logoContainer = document.createElement('div');
  logoContainer.classList.add('logo-container');
  const myLogo = new Image();
  myLogo.src = _logo_png__WEBPACK_IMPORTED_MODULE_0__["default"];
  logoContainer.appendChild(myLogo);
  header.appendChild(logoContainer);

  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = "Weather App";
  header.appendChild(title);

  const searchBar = (0,_searchBar_js__WEBPACK_IMPORTED_MODULE_1__.generateSearchBar)();
  searchBar.classList.add('search-bar');
  header.appendChild(searchBar);

  const tempUnit = document.createElement('button');
  tempUnit.textContent = "C";
  tempUnit.addEventListener('click', event => {
    event.preventDefault();

    let temps = document.querySelectorAll('.temp')
    if (tempUnit.textContent == "C"){
      tempUnit.textContent = 'F';
      temps.forEach(temp => {
        let tempValue = temp.textContent * 1;
        tempValue = (tempValue * (9/5)) + 32;
        temp.textContent = Math.round(tempValue);
        console.log(8)
      })
    } else {
      tempUnit.textContent = "C";
      temps.forEach(temp => {
        let tempValue = temp.textContent * 1;
        tempValue = (tempValue - 32) * (5/9)
        temp.textContent = Math.round(tempValue);
      })
    }
    
    
  })
  tempUnit.id = 'temp-unit';
  header.appendChild(tempUnit);

  content.appendChild(header);
}



/***/ }),

/***/ "./src/initialPageLoad.js":
/*!********************************!*\
  !*** ./src/initialPageLoad.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
const content = document.querySelector('#content');

function loadPage(){
  const sections = ['summary', 'detail', 'description'];
  sections.forEach(section => {
    let element = document.createElement('div');
    element.classList.add(section);
    element.style.visibility = 'hidden';
    content.appendChild(element);
  })

}







/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTimeFromDate": () => (/* binding */ getTimeFromDate)
/* harmony export */ });
function getTimeFromDate(currentDate){
  let time = currentDate.getHours() + ":" + currentDate.getMinutes();
  return time;
}



/***/ }),

/***/ "./src/searchBar.js":
/*!**************************!*\
  !*** ./src/searchBar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateSearchBar": () => (/* binding */ generateSearchBar)
/* harmony export */ });
/* harmony import */ var _apiHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiHandler.js */ "./src/apiHandler.js");
/* harmony import */ var _DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMManipulation.js */ "./src/DOMManipulation.js");



function generateSearchBar(){
  const searchBarContainer = document.createElement('div');
  const searchForm = document.createElement('form');
  const searchInput = document.createElement('input');
  const searchButton = document.createElement('button');

  searchInput.type = "search";
  searchInput.id = 'search-bar';
  searchInput.placeholder = 'Enter a city';
  searchForm.appendChild(searchInput);

  searchButton.textContent = "Search";
  searchButton.addEventListener('click', (event)=>{
    event.preventDefault();
    let cityName = searchInput.value;
    searchButtonEvent(cityName);
    searchInput.value = ''
  })
  searchForm.appendChild(searchButton);

  searchBarContainer.appendChild(searchForm);
  return searchBarContainer;
}

async function searchButtonEvent(cityName){
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.clearBox)('.summary');
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.clearBox)('.detail');
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.clearBox)('.description');

  let coordinates = await (0,_apiHandler_js__WEBPACK_IMPORTED_MODULE_0__.getLonLat)(cityName);
  const tempControl = document.querySelector('#temp-unit');
  let tempUnit = "";

  if (tempControl.textContent == "C"){
    tempUnit = 'metric';
  } else {
    tempUnit = "imperial";
  }

  let weatherData = await (0,_apiHandler_js__WEBPACK_IMPORTED_MODULE_0__.getWeatherData)(coordinates, tempUnit);
  console.log(weatherData);


  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.loadSummary)(weatherData);
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.loadDetails)(weatherData);
  (0,_DOMManipulation_js__WEBPACK_IMPORTED_MODULE_1__.loadDescription)(weatherData);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initialPageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialPageLoad.js */ "./src/initialPageLoad.js");
/* harmony import */ var _generateHeader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateHeader.js */ "./src/generateHeader.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




(0,_generateHeader_js__WEBPACK_IMPORTED_MODULE_1__.loadHeader)();
(0,_initialPageLoad_js__WEBPACK_IMPORTED_MODULE_0__.loadPage)();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YsZ0hBQWdILElBQUksa0JBQWtCO0FBQ3RJO0FBQ0EsZ0RBQWdELDZCQUE2QiwyQ0FBMkMsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLGlDQUFpQyw2QkFBNkIsMkJBQTJCLDBCQUEwQiwyQkFBMkIsZ0NBQWdDLGdDQUFnQyxLQUFLLFVBQVUsZ0JBQWdCLGlCQUFpQixLQUFLLGFBQWEsb0NBQW9DLCtCQUErQix1QkFBdUIsd0NBQXdDLGdCQUFnQixLQUFLLGlCQUFpQixvQkFBb0IsMkNBQTJDLG1CQUFtQix5QkFBeUIseUJBQXlCLGlIQUFpSCxLQUFLLGlCQUFpQixvQkFBb0IscUNBQXFDLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDRDQUE0QywrQkFBK0Isd0JBQXdCLG1DQUFtQyx5QkFBeUIsc0JBQXNCLEtBQUssZ0NBQWdDLGtCQUFrQix5QkFBeUIsS0FBSyxvQ0FBb0Msa0JBQWtCLEtBQUssdUJBQXVCLHdCQUF3Qix1QkFBdUIsS0FBSyw0QkFBNEIsaUJBQWlCLEtBQUssaUNBQWlDLGlCQUFpQixvQkFBb0IsS0FBSyxrQ0FBa0MscUJBQXFCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLHVCQUF1QixLQUFLLHdDQUF3Qyx3QkFBd0IsdUJBQXVCLEtBQUssMkJBQTJCLGVBQWUsS0FBSyxzQkFBc0IsMENBQTBDLGlDQUFpQyxtQ0FBbUMseUJBQXlCLG9CQUFvQixLQUFLLGdDQUFnQyxvQkFBb0IsOEJBQThCLGdCQUFnQixLQUFLLG1EQUFtRCxvQkFBb0IsNkJBQTZCLDBCQUEwQixLQUFLLHlEQUF5RCxvQ0FBb0MsS0FBSyw0REFBNEQsU0FBUyxpRUFBaUUsd0NBQXdDLDBCQUEwQixLQUFLLGlFQUFpRSxvQkFBb0Isd0NBQXdDLGlCQUFpQixLQUFLLHFCQUFxQix3QkFBd0Isb0JBQW9CLDRDQUE0QyxnQkFBZ0Isd0NBQXdDLG9CQUFvQiw4QkFBOEIsNEJBQTRCLEtBQUssbUNBQW1DLFNBQVMsaURBQWlELG9CQUFvQiw4QkFBOEIsdUJBQXVCLEtBQUssaURBQWlELG9CQUFvQiw4QkFBOEIsS0FBSyxzQkFBc0IsZ0NBQWdDLDZCQUE2QixpQ0FBaUMsbUNBQW1DLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssc0JBQXNCLDBCQUEwQixLQUFLLDJCQUEyQix1QkFBdUIsS0FBSywyQkFBMkIsdUJBQXVCLEtBQUssK0JBQStCLDJCQUEyQixLQUFLLGdDQUFnQyxvREFBb0QsS0FBSywrQkFBK0IsMEJBQTBCLEtBQUssZ0NBQWdDLHVDQUF1QyxLQUFLLGdEQUFnRCxtQ0FBbUMsMkJBQTJCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLG1CQUFtQiwwQ0FBMEMsaUNBQWlDLEtBQUssT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxTQUFTLE9BQU8sT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxlQUFlLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGlHQUFpRyxJQUFJLG1CQUFtQixjQUFjLDZCQUE2QiwyQ0FBMkMsNEJBQTRCLDZCQUE2Qiw0QkFBNEIsNEJBQTRCLGlDQUFpQyw2QkFBNkIsMkJBQTJCLDBCQUEwQiwyQkFBMkIsZ0NBQWdDLGdDQUFnQyxLQUFLLFVBQVUsZ0JBQWdCLGlCQUFpQixLQUFLLGFBQWEsb0NBQW9DLCtCQUErQix1QkFBdUIsd0NBQXdDLGdCQUFnQixLQUFLLGlCQUFpQixvQkFBb0IsMkNBQTJDLG1CQUFtQix5QkFBeUIseUJBQXlCLGlIQUFpSCxLQUFLLGlCQUFpQixvQkFBb0IscUNBQXFDLHlCQUF5QiwwQkFBMEIsMEJBQTBCLDRDQUE0QywrQkFBK0Isd0JBQXdCLG1DQUFtQyx5QkFBeUIsc0JBQXNCLEtBQUssZ0NBQWdDLGtCQUFrQix5QkFBeUIsS0FBSyxvQ0FBb0Msa0JBQWtCLEtBQUssdUJBQXVCLHdCQUF3Qix1QkFBdUIsS0FBSyw0QkFBNEIsaUJBQWlCLEtBQUssaUNBQWlDLGlCQUFpQixvQkFBb0IsS0FBSyxrQ0FBa0MscUJBQXFCLG1DQUFtQyx3QkFBd0Isc0JBQXNCLHVCQUF1QixLQUFLLHdDQUF3Qyx3QkFBd0IsdUJBQXVCLEtBQUssMkJBQTJCLGVBQWUsS0FBSyxzQkFBc0IsMENBQTBDLGlDQUFpQyxtQ0FBbUMseUJBQXlCLG9CQUFvQixLQUFLLGdDQUFnQyxvQkFBb0IsOEJBQThCLGdCQUFnQixLQUFLLG1EQUFtRCxvQkFBb0IsNkJBQTZCLDBCQUEwQixLQUFLLHlEQUF5RCxvQ0FBb0MsS0FBSyw0REFBNEQsU0FBUyxpRUFBaUUsd0NBQXdDLDBCQUEwQixLQUFLLGlFQUFpRSxvQkFBb0Isd0NBQXdDLGlCQUFpQixLQUFLLHFCQUFxQix3QkFBd0Isb0JBQW9CLDRDQUE0QyxnQkFBZ0Isd0NBQXdDLG9CQUFvQiw4QkFBOEIsNEJBQTRCLEtBQUssbUNBQW1DLFNBQVMsaURBQWlELG9CQUFvQiw4QkFBOEIsdUJBQXVCLEtBQUssaURBQWlELG9CQUFvQiw4QkFBOEIsS0FBSyxzQkFBc0IsZ0NBQWdDLDZCQUE2QixpQ0FBaUMsbUNBQW1DLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssc0JBQXNCLDBCQUEwQixLQUFLLDJCQUEyQix1QkFBdUIsS0FBSywyQkFBMkIsdUJBQXVCLEtBQUssK0JBQStCLDJCQUEyQixLQUFLLGdDQUFnQyxvREFBb0QsS0FBSywrQkFBK0IsMEJBQTBCLEtBQUssZ0NBQWdDLHVDQUF1QyxLQUFLLGdEQUFnRCxtQ0FBbUMsMkJBQTJCLHdCQUF3Qix5QkFBeUIsc0JBQXNCLG1CQUFtQiwwQ0FBMEMsaUNBQWlDLEtBQUssbUJBQW1CO0FBQ3ptVTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBZTtBQUMzQixLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVksMERBQWU7QUFDM0IsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnQ0FBZ0M7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsU0FBUyxpQkFBaUIsT0FBTyxJQUFJLGFBQWE7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RkFBd0YsSUFBSSxPQUFPLElBQUksU0FBUyxPQUFPLFNBQVMsU0FBUyxJQUFJLGFBQWE7QUFDMUo7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ29DOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCTjtBQUNxQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaURBQUk7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnRUFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNvQjtBQUNwQjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKNEQ7QUFDOEI7QUFDMUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw2REFBUTtBQUNWLEVBQUUsNkRBQVE7QUFDVixFQUFFLDZEQUFRO0FBQ1Y7QUFDQSwwQkFBMEIseURBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsOERBQWM7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsRUFBRSxnRUFBVztBQUNiLEVBQUUsZ0VBQVc7QUFDYixFQUFFLG9FQUFlO0FBQ2pCO0FBQ0E7Ozs7Ozs7VUNsREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQ0M7QUFDNUI7QUFDckI7QUFDQSw4REFBVTtBQUNWLDZEQUFRO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9ET01NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9hcGlIYW5kbGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZ2VuZXJhdGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbml0aWFsUGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs2MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIC0tbWFpbi1mb250OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWZvbnQtY29sb3I6ICMyNzJlMzA7XFxyXFxuICAtLWJnLWNvbG9yOiB3aGl0ZXNtb2tlO1xcclxcbiAgLS1hY2NlbnQtb25lOiAjMzQzZTQwO1xcclxcbiAgLS1hY2NlbnQtdHdvOiAjN0RBMkE5O1xcclxcbiAgLS1hY2NlbnQtdGhyZWU6IHdoaXRlc21va2U7XFxyXFxuICAtLWFjY2VudC1mb3VyOiAjQTBBRUNEO1xcclxcbiAgLS1sYXJnZS1mb250OiAzLjJyZW07XFxyXFxuICAtLW1lZGl1bS1mb250OiAycmVtO1xcclxcbiAgLS1zbWFsbC1mb250OiAxLjVyZW07XFxyXFxuICAtLXZlcnktbGFyZ2UtZm9udDogNC41cmVtO1xcclxcbiAgLS12ZXJ5LXNtYWxsLWZvbnQ6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuKntcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tbWFpbi1mb250KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIG1pbi1oZWlnaHQ6MTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogLjVmciAzZnIgMmZyIDNmcjtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICAgXFxcImhlYWRlclxcXCJcXHJcXG4gICAgICBcXFwic3VtbWFyeVxcXCJcXHJcXG4gICAgICBcXFwiZGV0YWlsXFxcIlxcclxcbiAgICAgIFxcXCJkZXNjcmlwdGlvblxcXCI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtb25lKTtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gIGhlaWdodDo2cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5sb2dvLWNvbnRhaW5lcntcXHJcXG4gIGhlaWdodDogNTAlO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5sb2dvLWNvbnRhaW5lciBpbWd7XFxyXFxuICBoZWlnaHQ6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAudGl0bGV7XFxyXFxuICBtYXJnaW4tbGVmdDogNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLnNlYXJjaC1iYXJ7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5zZWFyY2gtYmFyIGZvcm17XFxyXFxuICB3aWR0aDoxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuc2VhcmNoLWJhciBpbnB1dHtcXHJcXG4gIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuc2VhcmNoLWJhciBmb3JtIGJ1dHRvbntcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAjdGVtcC11bml0e1xcclxcbiAgd2lkdGg6NSU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5zdW1tYXJ5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1vbmUpO1xcclxcbiAgY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xcclxcbiAgZ3JpZC1hcmVhOiBzdW1tYXJ5O1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkgLnN1bW1hcnktbWFpbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IC5zdW1tYXJ5LW1haW4gLnN1bW1hcnktbWFpbi1sZWZ0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkgLnN1bW1hcnktbWFpbiAuc3VtbWFyeS1tYWluLWxlZnQgLmNpdHkge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1tZWRpdW0tZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IC5zdW1tYXJ5LW1haW4gLnN1bW1hcnktbWFpbi1sZWZ0IC53ZWF0aGVyIHtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkgLnN1bW1hcnktbWFpbiAuc3VtbWFyeS1tYWluLWxlZnQgLmN1cnJlbnQtdGVtcCB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXZlcnktbGFyZ2UtZm9udCk7XFxyXFxuICBmb250LXdlaWdodDpsaWdodGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSAuc3VtbWFyeS1tYWluIC5zdW1tYXJ5LW1haW4tbGVmdCAuZXh0cmVtZS10ZW1wIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXZlcnktc21hbGwtZm9udCk7XFxyXFxuICBnYXA6IC42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uZGV0YWlsIHtcXHJcXG4gIGdyaWQtYXJlYTogZGV0YWlsO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxyXFxuICBnYXA6IDNyZW07XFxyXFxuICBmb250LXNpemU6IHZhcigtLXZlcnktc21hbGwtZm9udCk7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwgLmRldGFpbC1jb250YWluZXIge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsIC5kZXRhaWwtY29udGFpbmVyIC5kZXRhaWwtdGl0bGUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCAuZGV0YWlsLWNvbnRhaW5lciAuZGV0YWlsLXZhbHVlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNlNDA7XFxyXFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcclxcbiAgY29sb3I6IHZhcigtLWFjY2VudC10aHJlZSk7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRlbXA6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBiMFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5taW4tdGVtcDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJMOiBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4ubWF4LXRlbXA6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiSDogXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2Mtd2VhdGhlcjo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJUb2RheTogXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MtbWluLXRlbXA6OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXDAwYjAuIFRoZSBsb3cgdG9uaWdodCB3aWxsIGJlIFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5kZXNjLW1pbi10ZW1wOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXDAwYjBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzYy1tYXgtdGVtcDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCIuIFRoZSBoaWdoIHdpbGwgYmUgXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuYnV0dG9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LW9uZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQjs7OzttQkFJaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixrQkFBa0I7O0VBRWxCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOzs7QUFHQTtFQUNFLG1DQUFtQztFQUNuQywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOztBQUVBOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsVUFBVTtBQUNaOzs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLFNBQVM7RUFDVCxpQ0FBaUM7RUFDakMsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7Ozs7Ozs7OztBQVVBO0VBQ0UsNEJBQTRCO0VBQzVCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osbUNBQW1DO0VBQ25DLDBCQUEwQjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOndnaHRANDAwOzYwMDs4MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgLS1tYWluLWZvbnQ6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tZm9udC1jb2xvcjogIzI3MmUzMDtcXHJcXG4gIC0tYmctY29sb3I6IHdoaXRlc21va2U7XFxyXFxuICAtLWFjY2VudC1vbmU6ICMzNDNlNDA7XFxyXFxuICAtLWFjY2VudC10d286ICM3REEyQTk7XFxyXFxuICAtLWFjY2VudC10aHJlZTogd2hpdGVzbW9rZTtcXHJcXG4gIC0tYWNjZW50LWZvdXI6ICNBMEFFQ0Q7XFxyXFxuICAtLWxhcmdlLWZvbnQ6IDMuMnJlbTtcXHJcXG4gIC0tbWVkaXVtLWZvbnQ6IDJyZW07XFxyXFxuICAtLXNtYWxsLWZvbnQ6IDEuNXJlbTtcXHJcXG4gIC0tdmVyeS1sYXJnZS1mb250OiA0LjVyZW07XFxyXFxuICAtLXZlcnktc21hbGwtZm9udDogMS4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4qe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1tYWluLWZvbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgbWluLWhlaWdodDoxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAuNWZyIDNmciAyZnIgM2ZyO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgICBcXFwiaGVhZGVyXFxcIlxcclxcbiAgICAgIFxcXCJzdW1tYXJ5XFxcIlxcclxcbiAgICAgIFxcXCJkZXRhaWxcXFwiXFxyXFxuICAgICAgXFxcImRlc2NyaXB0aW9uXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xcclxcbiAgY29sb3I6IHZhcigtLWFjY2VudC1vbmUpO1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgaGVpZ2h0OjZyZW07XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28tY29udGFpbmVye1xcclxcbiAgaGVpZ2h0OiA1MCU7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLmxvZ28tY29udGFpbmVyIGltZ3tcXHJcXG4gIGhlaWdodDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC50aXRsZXtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciAuc2VhcmNoLWJhcntcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIgLnNlYXJjaC1iYXIgZm9ybXtcXHJcXG4gIHdpZHRoOjEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5zZWFyY2gtYmFyIGlucHV0e1xcclxcbiAgZmxleDogMSAxIGF1dG87XFxyXFxuICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQpO1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIC5zZWFyY2gtYmFyIGZvcm0gYnV0dG9ue1xcclxcbiAgbWFyZ2luLWxlZnQ6IC0ycHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyICN0ZW1wLXVuaXR7XFxyXFxuICB3aWR0aDo1JTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnN1bW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LW9uZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XFxyXFxuICBncmlkLWFyZWE6IHN1bW1hcnk7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSAuc3VtbWFyeS1tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkgLnN1bW1hcnktbWFpbiAuc3VtbWFyeS1tYWluLWxlZnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSAuc3VtbWFyeS1tYWluIC5zdW1tYXJ5LW1haW4tbGVmdCAuY2l0eSB7XFxyXFxuICBmb250LXNpemU6IHZhcigtLW1lZGl1bS1mb250KTtcXHJcXG59XFxyXFxuXFxyXFxuLnN1bW1hcnkgLnN1bW1hcnktbWFpbiAuc3VtbWFyeS1tYWluLWxlZnQgLndlYXRoZXIge1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uc3VtbWFyeSAuc3VtbWFyeS1tYWluIC5zdW1tYXJ5LW1haW4tbGVmdCAuY3VycmVudC10ZW1wIHtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdmVyeS1sYXJnZS1mb250KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OmxpZ2h0ZXI7XFxyXFxufVxcclxcblxcclxcbi5zdW1tYXJ5IC5zdW1tYXJ5LW1haW4gLnN1bW1hcnktbWFpbi1sZWZ0IC5leHRyZW1lLXRlbXAge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdmVyeS1zbWFsbC1mb250KTtcXHJcXG4gIGdhcDogLjZyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5kZXRhaWwge1xcclxcbiAgZ3JpZC1hcmVhOiBkZXRhaWw7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXHJcXG4gIGdhcDogM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tdmVyeS1zbWFsbC1mb250KTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbCAuZGV0YWlsLWNvbnRhaW5lciB7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwgLmRldGFpbC1jb250YWluZXIgLmRldGFpbC10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsIC5kZXRhaWwtY29udGFpbmVyIC5kZXRhaWwtdmFsdWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2U0MDtcXHJcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LXRocmVlKTtcXHJcXG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGVtcDo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXFwwMGIwXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1pbi10ZW1wOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIkw6IFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tYXgtdGVtcDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJIOiBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzYy13ZWF0aGVyOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlRvZGF5OiBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzYy1taW4tdGVtcDo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBiMC4gVGhlIGxvdyB0b25pZ2h0IHdpbGwgYmUgXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2MtbWluLXRlbXA6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMDBiMFxcXCI7XFxyXFxufVxcclxcblxcclxcbi5kZXNjLW1heC10ZW1wOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIi4gVGhlIGhpZ2ggd2lsbCBiZSBcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbC1mb250KTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtb25lKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtdGhyZWUpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFVQUFBQUZBQ0FZQUFBRE5rS1dxQUFBZ0FFbEVRVlI0bk8yOWY1UmMxWFhuKy9rMi9UUnlSNlBSOFBUMHBBb2hSRTlMSVFvaCtCNkNpZXd3R0dPTWJmd0RHLy9HRHJiQlArTFlHRHVZS0g0OGh2QllQSVpnUWpCMmdPQmYyQmhqeHo4d3hwaGxFOHdRUWhqdURXRjR4Q1l5b3pCYWxFWlBTNk1vaXF6cFVYcS9QODZ0OWxWMWRhdXErdDZxVzlYN3M1YVdxcjlWM1hYdXZYVjM3WFAyMlh1RDR6aU80emlPNHppTzR6aU80emlPNHpqT0dLSmhEOERwamhEQ01qTTdVOUlXWUQyd3lzd21KVzAxc3h1QWg3SXNlM3pJdzNTY2tjSU40QWdRUW1pWTJTV1N6Z1dPQkRBenBObkxOMk5tejBxNkRMZzlUZE9Ed3hxcjQ0d1NrOE1lZ0xNd0lZUko0TnVTa3BabVp1MHZtd0NPQWE0QjlnTGZITlQ0SEdlVW1SajJBSno1U1pKa0F2aGRNMHZhbnl0NGYwWFdtTmwxSVlRNXIzY2NaeTV1QUd1TXBQWEFCWklPOGZwYXhxK1RCaHhqWm1lSEVQemFPczVoOEp1azNyd2EyTlJoeXR0cEdselV6Z0JXVlRrd3h4a0gzQURXbTkrQTZOMjFUM2tYMGlSdE1yTVZneHVtNDR3bWJnRHJ6VkZtTnNmYjYwSmJBU3dmeUFnZFo0VHhLSENOTWJPSm9wZlgydnJTallaZlc4YzVMTzRCMXBoaThLTzQ3NjhiYlo0b3NlTTRCZHdBMXBpV01XdWY3bmFyT1k2ek1ENU5xakV0TDY2VE45ZXQ1ampPL0xnSFdIUDZESUk0anRNRlM4SUR6QXNKbkNycDVjQUp3RnBpL3V4ZGtyNERQSldtNmU3aGpuSXViZm0rdlFaQmFra0k0U2pnWERON21hUVZaallGN0FGdWxQU2dtVzNQc216SW8zU1dDbU52QUVNSVU4QVdTUjh5czVYRm9JR2tUY0NIZ2J0RENCZWxhYnA5bUdOdHA3V3VWL3dmNkZxckd5R0VWd09YQUpzN2pQVmtJSk4wSy9Dbnd4cWpzN1FZYXdNWVF0Z0EzR1ptSndQekdZM2xabmFPcEVZSTRTMXBtajQ3ekRFWEdaY2dTQWhodVpsdE1iUC9DK1pkMjV3QVRnUk9EQ0hzQXI2ZXB1bk1vTWZxTEMzR2VnM1F6QzR5czVNS1A4OHhGQVh0SkRPN0lZU3dlaWlEbllkT0hsMjNXbzA0QS9oUXB6SFBzNVo1YmV0THkzR3FaR3dOWUFqaEtFbm5BeE9GRkxIWjV6dG9rNUplRFp3MytOSE9UNzhSNExwNGd5R0VJNEdySk0zSlRWNGduZTlvU2RjTWFvek8wbVVzRFdBSUFUTzcwTXlXdGJTV3Q5SHUvWFhRM2h0Q09INndJKzVNeTF2dFlzeHp0RHA0Z3lHRVNUUDdYVFBiT04rWVc0L2JOZUNZRU1LYUFRL1pXV0tNcFFFa2VuMXJXeDVHY1hyWWhiYkJ6RDQ0ek1HMzArNjVkcVBWaElhazkwcWFoTTVqTGo1dTh3aFhBclBMRjQ1VEJlTnFBR2VJMjF4bWhjT3MvN1ZyNTRjUWhuN3pqWElRSklTd0RMZ0thTUQ4WTE2QTVjREdxc2JuT0RDbUJqQk5VOHhzcGdlRE4wY0R0b1FRaGw1VGIxU0RJR1oybXBtZFVmaTU0NWdYMk5COTBNeDJEbUtzenRKbExBMWd6b0hXZ3k2RElPM2FXY0JyQnpqZWpveHdFT1F5WURhaVB0K1k1NnRwYUdhN0pOMWIrU2lkSmMzWUdrQkpYKzRuZUZEUUpzM3NrbUV1eEk5aUVDU0VNQkZDT0kvQyt0MUNZMjQ5YnRja1BaV202YTdCamR4WmlveXRBVXpUOUVGaVprR3ZRWkNpdGdFNEwyOU9ORFJHTEFoeUZQQkJTYlBuYktFeHR6K2ZQejRJZkhZUWczV1dObU5yQUFFa1hRenNncDZESUMxdEV0Z0NiQnJvd0JjWUg5UStDUElCSU9sMnpQUHdUVE83cDVMUk9VNkJzVGFBd0VQRkc2a2ZJMmhtcTRDUDVsSE5nVE1xUVpBUUF2bit5WE43R1hNSG96ME5YSlZsMmQ0cXgrczRNT1lHTUUzVGFlQUtTVHY3Q0lJVXRWY0RwdzF3NkllOGZ6L2FFTHpCS2VBU00ydjBNdWFpbm8vNUMybWFlamtZWnlDTXRRRUVrTFFOdUk2NHJhS3ZnSUtaSFFsY09XZ3ZjTVNDSUM4eXMzT0s0MWxvZkoyQ0lKS2VCcTRmNEppZEpjN1lHOEEwVFE4Q253RzJRYzlCa09KME9BSGVPSXhqcUhzUUpJU3dFcmhFMHJKdXh6ZlA0MXZTTkgyeTZ2RTZUb3V4TjRBQWFacnVKTllFUExDSTdCQ0ltNk0zREdyY0l4UUVlUTl3eWtKak9Wd1F4TXdlSVg1Uk9jN0FXQklHTU9mN1puYnZJck5EampXekMwSUlBeHQwM1lNZ0lZUlZadlpSTTV1dExkbEhFR1NmcE91QjJsWGxkc2FiSldNQTB6VGRBMXhCM0dQV2IzYkloS1IzQWNtZ3hsM25JRWhlN2VYamt0WXVOSmFGdEZ4L0FMZ3pUZE5xQnVvNDg3QmtEQ0NBcE16TVBrTXNsdEJQZGdqQWtXWjJjVjVxdityeDFqMElzbG5TTy9vTUxMWCs3UUN1OU9yUHpqQllVZ1l3VFZNazNTQnBXNy9aSVVRdjhIWEE1a0dOdThaQmtJdk1iRTAvNHl0b1h3TjgyNHN6RkphVUFRVElvNHpYOXp1MXpGbG1abGNtU1RLd1BPRkZqcmRVa2lRaFNaSzNXcUhhUzUvajIyRm1GK2Y3TlIxbjRDdzVBNWh6aDVrOUJqKzdJWXRUdEM2MUV5UlZ2aTJtVG9hdjhGNXJKRjBvYVdvUjQ1dVdkRldXWlFmbXZOaHhCc1NTTklCcG11NlVkSldaN1N2cVBTN2VMd011VDVMa3lLckcyU0VLUGUvejdWckZRWkMzMGxhdHVZL3hQV0ptWDZ4bWVJN1RIVXZTQU9iY0RkeS95TDl4SkhEcHNQS0VGNklxanpDRWNCencva1grbVFQQTVWbVcrYllYWjZnc1dRT1lwdW0wcEd2TmJQZGk5dHBKZWl0d1hCVmpMRTY3aTQrNzBTcmtBOENHWHNiU1Fmc204RWpWQTNXY3c3RmtEV0RPUThDZjltdjg4aHQ3RFhCTlJWN2dzKzN2Mng2Wm5rK2pVQkc3TEpJa09kSE0za2YrdWVsMkxHM2FEdURLTE12Mmx6MCt4K21WSlcwQTB6U2RrWFFkc0t1UElFaFJPd2w0YlFpaDFQTnBadC91TThpd24zekRkMWtrU2JLS21FN1k2MWhtTlRPYkFUN24rYjVPWFZqU0JoQWdMN3QrQlRFcU9lZjVMclVWWm5ZeFVHb1RKVW5QQVB1Zyt5QkRyajlvWm52S0hBdXhSOHBadll5bFErN3ZFOEJOSlkvTGNmcG15UnRBZ0R3YStmQmkvb2FreE16T0x6TlAyTXllSVU3VGUyR1BwT3NrbFZaUU5JU3dSdEtXUFBMZEY3a3h2TmJNbmkxclhJNnpXTndBQWxtVzdaWjBUVDVGQS9vcVFqQUJ2SnNTeXVjblNiSXNoSENzcE0zRU5iT1pib01Nd0U1aWRQcjBFTUt4aTUyVzU3Ly9EdklldmYwRVpISXRBMjdQc3N4VDNwemFNSG40bHl3WkhwRDBSV0pKOTRsK0FpT1NOcHJaQmNCRjNieGhuays4M3N5T2xmUUM0RmhnazVrZFRYNXQrZ2d5YkFTK1hQamRQU0dFeDgzc1VVbC9Rd3lzUENOcFo1ZjV0MnVCaTRISmZnTXlrbllCRjN1K3IxTTNodGRFb29hRUVCSXorNDd5NmlidHdZNzV0Q0ptdGx2U3V2YjBybnhxdkp6b25SMXZacjhGbkNLcEFUVHk1eXJGektZbDdUYXpIWksyQS84UnVOdk10a3ZhMjZrYVN3amhGT0F2V01Sc3djdytKK205bnZMbTFBMDNnRzBrU1hLVnBOK0hSZFhpKzdWaXBET3ZtZmNLU1M4enM5T0IyYjRaaTltRFdJWm1adnNrUFFKOGk3Z3gvS21pSVF3aDNBS2MzKzk3QURzbHZUQk4wNjA0VHMyb2ZBb2NRcGpJSzRic1RkTzA5bnUvSk4wS25BbWMwTy9mTUxQbFNaSWNLZWs0NFBYQW1aS09BanJtemc0VFNTdUEwNGtWblhlYldaWWt5WmNsUFFZOFE3N3B1YysvUFcxbTE1SzNJNmc3dVpmZXVpY09lbjNDOGFlU3V6RXZsUGtpU1M4bFR1ODJBRHZON0crSkMrRzE5UVpDQ0pqWitjQXR2WHBYaGNkL0NKeEliQlMwc24xZHJPQjkxVklqN2lIY1JzellPQjA0b1orL0IyeVY5SnY1VnFOYWt2Y3pPUi80dFh6dHQ3WDIrajFKdCtjOVpad3hwWFFER0VKWWEyYVhTdnFkZVc2dUdlQUpNL3VvcElmVE5LMWxOWkFrU2Y0eWo4SUN3NStxanBvR0hKRDB0alJOdjA0TkNTRWNaV2JuU2JvRVdOSHBOV2IycktTUG10bTlXWmJ0Ni9RYVo3UTVvc3cvbGlUSld1QXJrbDV0WmtmQW9ZVkZjeVJwcmFSWG10bXg2OWF0ZTZyUmFQeGpzOW1zVllTdzBXanNBbDVtWnM5ckhRTWNHZ1RwTkoxMWJmYmMzRzFtZjl4c05tdjFCWmNreWNwR28vRktNN3RaMGh1QTVjVU4yMjNYK2Q4QXI1RDBYeHVOeHQ4MG04MWhETm1wa05JTVlKSWt5eVhkQUx3S09LS0xtMlVLK0hWSmJ3SW0xNjFiOStObXMvblBaWTFuc1RRYWpaOEF2eURwTjlxZnE1T25WVk50R2pnM3k3SnQxSVFRd2tTajBYaWhwRStZMlJaSjZ5amtOTGQvb1JXMFpXYjJtNUllYURhYnp3MXIvRTQxbExZUld0SUp4T0RCN0FlcC9RTTFqN1lHdUZ6U1g0WVF6c2x6VG9kT3Z2WnpPWEFuSmVmVmpqbjdnUzNBNDhNZVNJc1F3aVl6dTlITXZrMU01NXNUL0N0NmdlMmFwRFZtZGswSW9SYWZUYWM4eXN3RWVaT1pyUzVPZDR2VHhjTm9rMmEyQWJoTjBtZVRKRWtHMlhweVB2Sit3aGNCRDBKM1FaQWxydTB6czh1QVA2dERCRFdFTUJWQ2VCL3diZUI5a2xaQmY5UDdmRDE0WlZWamRZWkRhVUdRRU1LUGdZMGxSU0lQQXA4eHN4dXlMQnQ2NVpEOG0vOFM0R01VdmpScU10MnNpL1k0OFBvMFRaOWh5SVFRbGx2Y2Qza2xNYnVtdEQrZHBxazNjQm9qU2xzRGJEUWE3d1hXdEFVOE9nVkJ1dEVtZ09jREwyODBHalFhamY4eXJQWEJmRXZQQ2NEYkphMzNJTWlDMnZTNmRlditydEZvL1BNd0FnWWhoTWxHbzVFQTEwajZQZURuaTljTG1QT1o2MFVEc21hek9YelgxaW1OTXFmQSs4MFdWVk92WFpzZzVzbGViMmJmQ1NHOGJ0Q2w1NU1rV1FhOFM5S2ZTenF0cFhmeWd0cFpndHBhNGxydWJXWjIvSndYVkV3STRTamdNalA3SWZCRzh1bnFBc0dObmpWaWNNY1pJMHFiQWlkSjhsWGdIRGg4N213dldzRkE3Z08rcjFqQTlLR3FFK3VUSkZrajZUS0xlOFZtbTZEWFlLcFpkMjNHWXJHRnR3RFpBSzdUYWtubkFCOEZqcUV0d0ZIaWNlNEJucCttNmJZU2grOE1tVEtqd0orWHRML1BJTWk4V3VHNUZaSmVDM3dEdUR5RXNMcXNzYmNUUXBpUzlHbmcvRjZNWDQyQ0VjUFVKaVJ0QUw0RW5MclFlVjRzSVlSVEpYMEp1SkdZYlRRbnVsdmk5UDUrb0xZWkxVNS9sQmtFbVNRV3ZQelFBc0dObnJWMkN2cE80RXJnQzJtYWxsYjlPSVN3MGN4dWxIVDZQTy9yV3ZmYUh1QkNNN3NqeTdMU3BvOGhoSk9BQzRudE9RZkJYdUNkZGMxcWNmcW5OQU1JRUVKb0FLbVpyYUd3eVJRV3QvaTh3SlI1V3RLRHdMWEFBNHRKcTB1U1pFTFNzV1oyRTdCWjBrUzNVM1duTTdraDNBMThuTmdMcE8vcmt4ZG1YVXZNMjMwM2NIUW5ieFJLLzh6dE5iT1BTN3JaeTNtTkg2V213aldielg5YXQyN2RENEJma1hSTSsvUDlURDFhaitkNTNSSEFlcUluOEF1TlJ1TWZtczNtam43RzNtZzBmb1ZZU1BRM1ZIaXpic1pjQTArcmxocUFwT2VaMmFuQVZLUFIrSXRtczlsengvYmMrSjBQM0FDOGlaaWlWbHB3WXdGdG1taHN2NUJsMmYvc2RkeE8vU25WQUFJMG04MGRqVWJqTzJiMi93SHJGVGVmenRxVXd4bTNkdTB3Qm5EMkliSEk2Tm1OUnVQSVJxT3hyZEZvL1BkdXQyS0VFRFlDdHhDTjMzenY0VnFmbXFSbGtrNHlzMy9PYzJxN3lxd0pJU3hidDI3ZFN5VGRhR2J2VXl3ZUMxUnV3QThBOXdMdkE3NmJaZG0vZEROZVovUW8zUUFDTkp2Ti9jMW04K0ZHby9GRFlGSlNLSzd6d2M4Q0hvZlRXbnFSZVQ3QVVxeHQ5MXY1dndQTlp2TnZEemZXRU1LVW1kMUdyTTQ4KzBmN3VYSEtXUE1jWSswSXhienFwNXZONWxOZFhKYzF3RldTL2hENFZlVmxxbHBVYUx5ZkpXNTQvOE0wVGYrK0g0L1ZHUjBHc3BBVlFqakp6TFlBcndDVzlYSWp0ZE9qWVhvUXVBYTRwOU4yakh5cnk2ZUIxeTNpUFZ6clRkdEZuTVkrME9tYWhCRFc1TjdlaGNUMkFaV1RqMjJIbVYybnVOWlhka3RScDZZTWJDVS9UeWQ3dGNWS0hCdkltK3pNRHFSZytPYlRpamRWRDlwdVNYY0FWd0hiV3ptcVNaSXNVOXhUZUQ2d2JESHY0WFJQZnY2ZVZLd0NORnQrUDY4Y2ZvcWtLOHhzczZTSnd1dUJjb01iQlgwdmNEZHduWms5bG1XZTZiYVVHUGhkbkU5dHpnTzJtTm1xOXVrdUhMb2ZzTjB6Yk5HSDlnanc3alJObjhxMzdMd3IvOGFmNnZQdnViWTQ3WDdndDlNMDNaNEhPVTRqN2gxY3cyQ1lJZlpjdmdyNHZsZCtYcG9NeFkzSnYrMDNTZm9vOEZwZzFYemVWb2tHRU9EN3hDS25Kd04vcnJ6NzJ5TCsza0EwTTl1ZmV5cjd6T3lnWW5UeUlISGo3ekppUjdsbFpqYWx1QTVhVlRaRW1kcEJvdWYxTnFMeCs2eVpyWWJLbyt3endGYmdhdUNiYVpydXhsbXlESFVlbCtmMm5tNW1Wd0JKMGRoMW1yNjBXTXdOQWJ6ZnpONmdRbTV2V1RkWWljR0RHVE43Q25nWStEdEoyNGdidi9jQUJ5eTJ0enhnWnN1SWhXVlhTSm95c3hXS2tkTG5tOWxKa283THRiTEhWNXBHckxKek5uQnkrNFdxZ0dreit4TkpOM21YT2dlR2JBQmI1T3R4Yjh6WEI0OEZKdVl4WG5Yd1hLclFab0NuaWRQMGJ3TVBwMm5hMTM3R0l2bFV2MVdvOW1WQWtudUpWUjFIUDlvQm9zZGFXWWZDM0lPK0c3Z3NUZE1mVmZVK3p1aFJDd1BZSWttU0RjQjdKWjFuWmtlcWJTRzhmWHBjRjIwUjdBRWVNN1BiRkh2emJxc2kyeUJmWTFzREhBZTgwc3hlbDAvL0IxcGRweFB0WG1HTGtyUnBTVnVCaTgzc29Tekw5bFp6Rk02b1Vpc0RDTE0zNnduQXhjVHRLY3RxNHFXVnBsbHNSbjZ2bWQwQVBGSm1ubXczSkVseUZIQ3VwQXZNYkgySGFlbWNNVmVwVmNSMk03dFcwaGQ4bmMrWmo5b1p3QlloaENsaVg5MHJnZU1sSGVLdEROdUk5YW50SXdaaXJwYjB4REFieFNkSk1wbDdnZWNSQXhISDFzRUFsdkMzZHdCM0VhTzd6MVpkanNzWmJXcHJBRnZrMjJiZURGeEd2akcyWmthdDJ3REFNOFRNaGp2VE5LM05WQ3ozdURlWTJkV1N6aUxmbnpuQUlFaFp6QkNEUmx1QVI3MXdnZE1OdFRlQUxmTDZmNWNScS8wZXNsZXNEc1p2QVcwL3NiUGNCOU0wclcxejdiejAveHNsWFU0MGlFUDNCcnRrQnNoeUEvNjFPalJqY2thSGtUR0FNTnQ3K0RnenV3WTRDYWhOUkhNZWRwclpaWkp1cjVQWE54LzUvc3pqZ1NzVjZ5RU9Ja2l5ai9nbDBjOEc2TzFtZG91a3oxREk4bkdjYmhrcEE5Z2kzejk0RGpHNmQzd3JXdHlpSmtid1I4QUZ4QzB0STdVT2xTVEprWkkrRG55azRyZmFTcHl5YmlOVytqNnE5Y1JoZ2tqN0pYME51REpOMDZjckhxTXp4bFJTRGFacW1zM212elFhamY4WCtCcXdWOUl2MHJZK09JajFxd1cwaDh6c0F1Q3ZzeXdidVdvaXpXYnpwNDFHNDBGaVVkdGZON04vVmZLNTJnTjhSdEx2RXRQUmR1VC9mdDNNWnN1bkZYK1hLQjR3c3djbHZSdTRPVTNUL3phNHMrS01JeVBwQVJiSkYvRTNtZGxiRkRkVHIxZGgvK0NnZ3lEQTQ1SmViMmJQakhwaWZWNHE3RDJTcmphem5xcjR6S2NCVzNQdjhxNzJDdEVoaE9PSmxXSStRa3p2SzVJQm56YXpyMlZaNXRWYW5GSVllUVBZVGdoaExYQ1dtZjJhcEE4Vm54dUFRWHlJbU9BLzlPYmdaWkVIUjg0bnRoM29lODBWMkd0bW41UjA3ZUgyNVlVUWpnUTI1VDhlQUhha2FicDlFWWRST2ttU1FKNkxyVmlyOElDWlRZLzZsOTVTWSt3TUlNeXVZZDFHckQ4NHFQVy9Id0Z2TTdOczNHNkNmRS9tVmNRS3lUMEZSc3pzSU5GN3UxTFN2WFhlbnBMUEpwWURLNGpIdVpMWWN1RW80QmVCUnY3Y1ZQNjZTZUsyb1FuOXJFREZQbUlUcGRiLy8waGM0M3dhMkpHdlgwNmIyUUZKMHg2NEdTNWphUUJEQ0tjUWMycFh0clNLamVCTzRQVVcwNjFLT29wNmtYdGxOOUJiSjdZOVp2WXA0TG9zeTJyWFVqS0VBTERDekRaSzJwalBHbzRGamlVYXZaVlE2dWRrSC9BTU1YcjlyS1QvUXA0RGJtWTdzeXdicVdEWk9GQlpBdnFRZWIyWnJSeFF3R00vY1gvaXcrTnEvSEoyQXg4RU5nSW5IdWE4SEpUMGZlTEc3MGZxNHZYbG5mOVdFejI1emNCTGlGV0lWaENuOTRmVWhpd0VYOHJTVmhDem1vN1AzMmNtLy96c0JYNFVRdmlCbVQwaTZWbGdPM0RBUGNScUdUc1BNSzg4L2RmQXhnRk5mVDhIWERnSysvektJSVJ3Qm5BYnNLYVRFU1FXZVBnVWNOaTF2a0dSYjVzNjJjeGVKZWxFNHZyaW9BcXY5c29CWUp1WlBTbnBoOENkdVhjNDdIR05KV05sQUVNSW1ObGJKZDFpZ3luNzlJeWtYNjl6aGtmWjVOUEdQeUEycFMrZWwybmdQbUJMbXFaUERtMkFPU0dFRmNUeVh5OGg1anNmM2VITHEvYmthNFgzbWRrM0pOMVAzUER0VStXU0dMMVB4QUtFRUpZRE53SHZLT29WZVlMN3pPeWlMTXYrckx3akdBMUNDQTNncThScEpHYTJUZElOd0JmTWJOZXd2SlU4WW4yVXBGY0FyeWVXLzFwTjNNODQ2aHdnYmh4LzJNeStKT2tKWUs4Ync4VXhibXVBUnhJclRCOWl0RHBNMDhyUXZpL3B6bW9QcDU2WTJYUEFaWksrQkR3cTZSSUtEWTZHUVFqaE9PQk5rczZqa0ZIU1l0QjdRaXZRbGdQSG1kbHhrdDRGUEFqY0ZrSzRvMzAvcGRNOTQrWUJubWxtMzYwdzROSFM5Z0V2emJMc2tjRWZaVDNJdmEwVEpEMDlyUFhQSkVtbUpKMEF2SnU0NVdtMW1VMldHTFNvclpaeklQY0VieUkyY3QvaEhtRnZqSlVCVEpMa1NrbC8wUHE1d20va3J4RTNQQSt0bnQ5U0o0UndOREg2ZmhiMURXZ01pb1BBWThCTkZqTmxsc3lhOUdJWkd3T1liOWI5SHZBaXFOVDQ3VEd6MTJSWjltRFp4K0FzVEw1UmVUMnhzZFc3SkswYTlwanFScjRlZXpGdzcxSUt6dlhMT0N3T3QxZ1BOSXBUaFJZbGE0OFJteGM1QXlUZjN2UWU0RnZBaDkzNGRVYlNNY0N0d0MxSmtoeWZKTW00cmZPWHl0Z1lRRE03Rm1pMHJaRUFjOVpORnFQTkFMY051b2ZIVWlhRU1CRkNTSUEvSjJhaWJLTHd1VzIvWHE0QnNOTE0zaXpwZThEdkpVbXllczR2T2NBWVJZRWx2UUJZWGtIQW82aTFXbGM2RlpQdk4xeGpadStUOUY0emEyaUJvSUJySGJXMWloVyszeEpDdUFSNHdDUEdoekkySGlBeGYzUFdjTFYvR01yUWlNWnZXK1ZING1DeE12V1hnRXZKUFhzNDlIcTQxcFcyREdpZHl5MzVYbGtuWjV5Q0lEOGhyZ01DbFFWQlhwK202ZGRMSHJwVElOOWU4enZBcFlwNXUwNTV6QUFQQUI4MXM4Yzl2VzVNUE1Ba1NaWUJSMFBwQVkraTF1bzY1bFJFbm1GeUpiR0lnaHUvOHBrQVRnTStMK21jUEVkNlNUTVdCbERTZXZMMXpLcUNJR2IyVkpxbU95b1kvcEluaEVBSTRYZ3p1dzM0bUtTcEdnVVV4bEU3SHZpU21YMHNqNjR2V1E0YkJBa2hMSmUwWVdabXBnRzhtSmovT2RUZ2lhUzl3Sk5tOWowemU1aDgvUStxSzMyRmUzK1ZFRUtZSkhvbE53THJheEk4V0FyYU1rbVhBaUZKa2c5S1dwSmQ5UlkwWkc5NHd4c21mdktUbjF3R3ZGWFNVY0JFTjRhanpJdlcwb3ZrcnpsVDB2dUFyNW5aZE90MXhRWGcxdDhxUXpPenYrdnZGRHVINGRYQWRYU28xdEsrd085YTZkb3k0Tlc1eC8xTzREbVdHUE1HUVVJSWE4M3NSa212cGMzd3dlRU5HSlRtZVIxQ1JjR05CVFdMWmN6ZmxxYnBOK2M3WDA1djVKazc3eUR1N1J1YjdWZ2p6T1BBZTlNMGZYVFlBeGtrSGRjQW4vLzg1NjhBcm0wWlAranRHeVpmTXl0RmExRmhjT093bXVLVWUrZWNRVGw5RVVKWWJtYS9CMXlORzcrNmNEeXh1a3lTcHh3dUNUb2U2TVRFeENuRUpQTytUMFJ4K2xpVzFrdlFva3lOMk12Qld6R1dRTDRQN1NQRWh1aXpQVGZhY1czZzJnU3gzY0ZYZ1RQbnZIQk1tYy9BdllGQ1F5RTQ5T1IxNDcyMUhpOVdLNzUvdTRFYWxFYXNkdXc3NkJkSlB1MzlYZUllditXdGExdzg1NjROWFZzUGZEcUVjT3BTOEFUbk84QnpPaGs0bUdzSTU5UEtXclJ0bjVhMnJ6a09Rak96ZzJibUJuRHh2SXVZMlRHYnN0aCt6VjBidm1abVJ3TTNtdGxHeHB6NTFsK21paDVkNjNIUjRIV2p3ZHpBU0s5YU8rMnZHWVFtNmFEbGtXYW5kL0lOdCs4d3N4dmF2MlE2WGVPYU1rTnM3cjRIMkNQcEFIRm1NQTFnWnNzbExTZFdibDVPN0IyOG1oNzdLTmVCL0pwc2t2VGxFTUxiMGpSOWF0aGpxb3I1RE9CK00xc3huM2ZXaGNkMHlCOWJqTmFpM1dNWXNMWXMvM0E3UFpJM3FqcFQwaFh0eHE2bXhtOEcyR2V4NnZkMlNZOENmMnV4enQ1ZVNmdUlhOElIZ1lNV0c3OUROSFNUK2YrdGYwY1NNNVIrMmN5T2xkVHFSdGRxdkY1M2pnZHVDaUdjRGV3YXgzMkM4eG5BWFlxOVV2dW0wNGQ3c1ZyWjNtVVBYdWd5NG9mVzZZRzhvc3NKa3E0SDFzNzN1bUY0OWUyYW1lMlI5SkNaL1RYd2lLUW56V3hubVNYbVF3akx6T3dFNGpsNWdabWRCQndyYWJJTzU2Q0ROa0VzTVB4cDRBT000VTZJK1F6ZzNjRHYwRlozclZzdnNQWDZkdnJSZXAxMlY2Uk5XV3hxN2ZUR2V1TE5jL1I4NXhrT3Y2ZTBJbTFHMGs3Z0NlQXJraDR3czUyUzlsZlZWeU52RVA5b0NPRlI0QXVTVmhJanI3OE5uQXhzSUY4ZkhlSjU2YVM5VnRLdUVNSkY0MVpPcStNY0pFbVM5Y0MzaWVzQWh6elhqZUVvODJLMDlFNWpHS0MyRTNoRG1xWmVCcjlMUWdncmladWMzN0hRWjJaSTdDWTJiLytlbVdWWmxnMjF0MHNJWWNKaTRHR3pwTGNUVXdQck5rWGVCN3dYdUdPY0dpOTE5QUN6TEhzbVNaS0xKZjE1dnJpN3BJTWcrVGs0WkZ1UXN6Qm1kZ2t4aGJMcjYxMHhCNEhIek96endCMVpsdFZtWDJkdVVMWUIyNUlrdVVQU0pqUGJJdWwwNnRQd2FRVXhaWEVyTURiWklrZk05OFRhdFd2L1FkTE8vR0w4YTBsek1rS0tqNHRhdS9lMkdLMUY2MlpwMTRqNzg1NlF0RzZoMXkxU0UzQnZzOW44ei9PZEx5Y1NRcGhvTkJxL0tlbFBKRDJ2cFhjeWRJTXdmbVoyVUxHUzk1Vm05dThsL1RETHNwOVcvc1o5MG13MnJkbHM3bXcwR3ZjQ1B6U3pmeVhwYUdKa2VkajhIUENMalViai9tYXorVS9ESGt3WnpHc0FkK3pZOFMvTlp2T3huLy81bi8rNnhWellYek96LzZYZEVCWnAvNFp2ZjgxaXRZS1hlUkRZSnVrYndDZUJIMGg2VS92ck92MXVuOW9Sd0Q4MG04Mzc1anRmVHFUUmFQd0NjQXZ3ZjNUN094VjY4RHNsZlJwNFg1cW1QMmcybS8vVWJEWTdiek9vR2MxbTgzODJtODMvMm1nMHZtVm1Ud0RySlAzU01HWkFiZG92bXRtL2JqYWIzMW5VQWRhRXJyNkNUenp4eEVreld3dE1IbkhFRWExdy85Q1lucDdlUHpFeGNVRFNucC8rOUtjSG52ZTg1NTBFL0RWVUZ4Z0JIa3ZUOURjR2ZyQWpSSjdqZXlOd1h1dUw4bkRuR1NwWnhEOWdaZzhBbDBsNlBBOCtqQ3g1UnNaS00zc1BzUW44eG9yUDM0SWFjZS9qMjRHdmpmcDZZQzAzWXZWS0NHR0RtZjE5eGQrQ0I4enNmeDMyZ25sZHlmZjduU1BwczhDS0hyNVl5bVlQY0Mzd3FUUk5kMWZ4QnNNaU40UW5FSXRJbk1ZUUN4cWIyZU9Tems3VGROdXd4bEFHODA2QlI0bEdvN0ZmMHU5UjhFd3JtQUpNU25xZzJXdytVL0x3eDRKMTY5WWRMZWt6NUwyWisxbHVXQXhtTmlQcGI4M3M3Q3pMN213Mm03VmQ1K3VYZkgydzJXZzB2Z0w4VCtKRzVhbGhqRVhTV21CNW85SDQ3cWdzSzNSaUxKS2Q4NzFKajhQYzNPR1N0Wk9YUW9KNHI0UVFKaVZkUU56VDFuWEFvMFFQY0ZyU0hjQ2JzaXg3dkt3L1dsZnlLZjBmbWRuYmdXZUkyU3ZENEJ6Z2xIekQrMGd5Tmplem1UMEU1YWZpdFdrdkplWjNqalY1ajQ3SkVNSlVraVNIWGU4MXM1T0poUTc2K2p5MW4vTWV0UVBBSjRBTDBqUjl1cC8zSDBYU05EMlFaZG05d0d1QWg5cWZYK1E1N1ZaYkRYeWN0c3BSbzhUWUZLT1U5Si95bTZIdmZZdGRMTmlmQ0NUQXZRTS93RVdTSk1tRVlucmpTbUtPNmlyZ0dPQlhnS1B5bjF2UHJ5RGZkaUZwSm9Sd0FOakx6K29pUGdmOHZabHRsYlFMdU16TUd2bnJlejJuaTFtYzN5M3BTdUo2MzFobEtQVEFrOEJ2V3l3MGNhYVpIZEljck9yQUNIQXE4TllRd3MyakdCQVpHd05JbkFyc1V1eGRjc2dGYTkxNEpXaFRpdHR0UnNZQWhoQldtZGxtU1M4aE5vOWFBelRJSzVVczVzdEIwb3laN1pPMGNyN1h0ZDg0N1ZxTDRubnVVanRvWmhjQmR5NWg0MGRlb0dCYkNPRzlRS3VGQmREWE9lMVpJOXFRRHdEZkoyNlNIaW5HSWdvTWtDVEpTdUI3a2s2R2F2ZVdBUzlNMDMyUkdrc0FBQ0FBU1VSQlZMUjJGenRmbnp3S1NNenNCWkpPQVU2aTJ1QlFxVnFYN0Rhemk3TXMrMHcvdnp5dTVDMHVyd2JlTThqM3phL2pINlZwZXZFZzM3Y014c1lBNWd1eHQ1clp1eXErU2FjdHBpbjljUjFjL3R6b3JiSllidW1keEtUNll4amY2alg3emV4aVNaOVp5cDdmZkNSSnNsclNseG44TnBtZHdLK00ydGFqc1FtQzVGT0IvMWh4RUFSZ21hUjNXOXdZUGpSQ0NCTWhoQk9BUHdDK0srbUh3UG5BY1l5WThldGgwWDNheks0Qy9zeU5YMmV5TE5zRlhHQm1jd3AzVkJ3WVdRTzhaOVIyU1l6VVlMdmdVVE9iYmpkYTdZdTNKV2pIU3ZwQTN0UjdvSVFRVm9RUVRnYStBbndQdUF3NHFiWDQzUnB6OGY4NmErM25kd0h0b0tRdlN2cEVsbVVqbmRreEFMWVJLN2M4M2pxZlBaem52alhnYmNRU2FDUER1Qm5BblpLZWdzUFhMRnlrTmdHY1M5eUlPaEJ5ais4a1lwN3R0ODNzSE9LMzdtVDdoM0ZRRWNBeXRQYUY5UVcwaDRETDBqVDFUSnpEa0tZcGtyYWEyUlppK2Y1ZXpuUGZtcGx0QWw1Ui9SR1d4MWhrZ3JSb05Cb0hpTnM0WG14bUV4V3ZCZjRiNEJjYWpjWWRWZTZFejZ1cnZJeTQxKzFxNE5jc1JxTm5Yek5mVkhYVXRBWFlBYndxVGRObnUzbXhNNXMxc3JYUmFQd1A0bGFWeW1jcmloZnpsL043NHArcmZyOHlHQ3NEMkd3MmJkMjZkZjhvNlkyU2ZxNmx0M3NiWlduQUx3Si8zV2cwZnRKc05rczlsdHp3L1JKd0NYQUZNUWRVc0xoTWk3cHI3WmpaWGtuL1o1cW0zei9zaTUwNU5CcU5wNG1mMDBITlZwNEhQTk5vTkxLeTc0a3FHTGNwTUpLZXBHMW5mSVdCa2IxbXRvYVN6Mk9TSk12TjdCM0FkNENQTWViWkp3c3RzRXU2M2N3K04rQWhqUTE1VlBaaVlGdkZRWkNXdHB5WW5USVNnYml4TTRCNU5QanpGQnFaVnhBRTJTM3BjOEJMSkpWYUlqeEprczJTdmlycFJ1RFl1Z1V0eXRZV1dtQUhuamF6cTdNczg0anZJa2pUZEFleE5OamVLb01naGV0MktuRXJWdTBacDB5UUlobndoSm1kMUw1ZzIybnh2UmNOZUV6U0ZjQjlaVzdGU0pKa1VqR1Y2UWJ5RDAveFE5WWF5N2hwTGRvWDFZbGZZRGRJOG5XL2N2Z204SHBKcjRiS3MwTldFSU1oVDVZNC9rb1ltNDNRUmZMYWRCK1RkSFZSN3pmZ1liSFUwbGFMZTlEdUxMTW1ZRDdXdFpJdU5iUHpKUjNTREtma3dFM3R0UUwzQXE4WjlXS21kU0tFc0FuNEN3YlRaK1JSNEpWcG11NGF3SHYxelZoNGdJVVVzRmNETHdFbUpjMWU1SDRESHJuaDJ5UHBDMloyaTZTbnltd09uU1RKQkhIajhqWEFhWkxtWEk4NkJTZ0dHQVRaQTF6bnhxOTB0cHJabjBuNkdOWGYreHVJeFVOcW5UYy84Z1l3aExBR2VBZHdpWm10bm05NjFZYzJMZWtlNHRhVFI3TXNLejN0VGRKWndIV1NSbXJ6YU5sMDhBVHZBUjRlMG5ER2xqUk5wME1JdHhMdmw2T2dVcS8rU0RON0pUVTNnQ003QmM2cm5Kd0ZiSkcwa2R5WXQ2ODM5YUZOQTA4Uk15d2VTTk4wYndWalh3YThGcmlKbU1lNzJER1ByQVp6Tmt0UEF5K1U5RmlaM3JZVHlaZGNycGIwc2Zack04LzE2RnNEbmdWK3FRNDU4L014a2xIZ0pFbE9OTE5iZ1ZzbGJTTFBob0JGWjNqc0FhNHdzMWVsYVhwWEZjWVB3TXpPQTI0MHMxWEZNVlR4SWF5N1Zyd09PZmU3OGF1T1BFdmtLOEQyOW5QZjZYb3NSak96bzgzc21PcVBxbjlHYWdvY1FqZ08rSUNadmEvb2VpL1daUWQyQTE4SHJxZ3kyeUNFTUdXeGtzenZXZDV3dmtXSlUvZVIxWWhGVnovdHhxOXluakN6T3lWOXBNbzN5YS90bWNDbnFueWZ4VkQ3S1hDU0pDZ0dOTTRGM2s5TXRqNms1V0tSSHJVRFpwWXBSbUFmcWJMalc1SWt5eFVYbnk5aFNJMXM2bzZaUFF5OEpxOW80bFJJWGtrb3BmcFo0QmVCZDljMW9EVUtVK0MzQXQ4R3JqV3pEUlRHWEp4VzlhTGx4dTlwNEVKSkwwL1Q5UDZxMjExSytqQnhSNzRidnpZS1UrTXZ1L0ViREdtYVBrNzBCT2M4VjdLMnlZWmNPbTRoYWprRnpzdE1iUVl1TXJNenpHd0s1azZiRnJFUWY3T1pYU2xwZTlVTHRIbkE0NDNBcGNCVUhRSVBkZEpnOXJvK0srbXVTaTZDTXgrM1NUck9Zc3ZYU3RaOEpXMlVkRFF4SUZJN2FtY0FreVJaWldZZkI4NGp6NEdkYisyb3VPamFyVVpzSWZqbExNc0dkVUhPQUs2eHZJSkxody9Ja3RZSzEvVnVZdFVYWjNBOENPeFFvWTlPaTdaN1pqSGFDbUloanptZDYrcEFiUXhndnEzbFBaSXVBdFoyV3JlRFV0YjlucGEwdmZRRGFDUGZibkFLOEZuTDl5ZTJtTWNBTEdWdE4zQmJYZGVKeHBqSGdTZkk5d1JXeUF1QlQxYjhIbjB4MURYQUVBSkpra3lGRU00RS9selNsV2EyZHFHMWhlSk4xSStXTDdSdksvbFFPdEdRZEJWd2lQRnI0ZG9oV3BiL2N3WkltcVlIZ2I4YXdGdHRTSkprQUcvVE84UDJBRStRZEFud09tQTJCM2ErbTZVRWIrT2dwQy9sRjc0eWtpU1pNck5MSlcydThuMUtaaCt3M2N6MkFQc2xIU0EyZ0ZwT0ROeXNsTFRXWXQ1eW1lOTdFTGpWdmIraGNiK1pYYTVZNVJ5b0pMOTdMYkZRY1NYN2FoZkRNSHBhVEFCSEUzdUpudHNwUWxUMEFGc25zNFJGOTEzRUxTZ1BWSGg0TGM2WGRHNGRnZ3dkdEdsSk84eHN1NlNNdUJYaWFlSWk5YlNrZzhSMTBobGdKcjh4Sm9pZmxXV1NWcG5aQmtrdk5MTVQ4L1dqbzRIbGZZNHZNN05hcmc4dEVaNlJ0QTFZWDBVUUpOZVdTenFHT04ydUZjUHdBTThEUGdpYzBNM0pXMHpBbzZBZEFDNENiaDlBMUhlVG1WMEtyR2cvbnRiNGhxRVJ2Ym43SkgwTHlDUnQ3VFBUNVRsaXF1QmRTWklzQjQ3T0RlRkxGWE9iVi9jeVB1QmVTYytWZFBxZEhySFkyUDV4WUgzN3JLbjQveUsxNWNRdnlhVnBBSk1rV1NicGRETzcxR0tOdm9sdXA2N3Q5T0tLQXdmeW0vNEtvUEwwcWhEQ1dqTzdTZEpzQmVmNWptc1FHbkJRc1puUXR5WGRBVHhYNWpuSUM1VStuZis3UGQveWN5cndjdUJGd0xHMGZSRzBqVzgvTWZPanRybWk0NDZrZmNEZkVuUFRxNG9KTEtlbTNlSXF6UVFKSVV5YVdVT3hMdDhaWm5Za0hEcXRuUjNJQWxwTDc5Ync1ZE80WjRFdHdQY0gwYXc1Yjh6K0VlQXFDdXVaUTJLL21UMHU2UlppWlpWZGd6UXloZkprNjRHWEVZdGpIZ1dzNHRDYjdNNDBUZDgwcUhFNW5Ra2huQWQ4bW1pb0tzSE0va2pTbHFyWDMzdWxNZzh3aExEYXpENG82VDBzc0sybEY2MUx6MmNYY0Izd21id1UrS0E0bGpqTkhyYnhlOUxNcnBIMHRXRzFrTXlON2JQNXZ3ZENDSmViMmZIRVBaRy9KV216eFQ2L3R3MWpmTTRjdGhFcmNDK0hha3Bra2M4R2lMVWVhMFBwSG1EdTlaMEJYRXNzaXJnb0k5dkRZdnB1TTdzbm4rNCtNOGh2bWhEQ0ZQRWI5RndydE9NY1pIQUQyQVhjVE93Yi9Hd2RwNVc1WjdqQ1lpUjVFM0IvVlJWM25PNEpJUndEL0pYbEFjbjJkZHN5TktLQmZReTR5Y3p1bGJTckRrVXZxakNBcnlVYWc3VmxuTHlXWHFUOVc4Yk1IZ2N1bHZSUW1YMDZ1aVdFY0Ryd0xjdXpQUVpoOE5yT3dkUEU2ZjQzNjJqNG5IcVRyOTMrSFlOWnB6dEkzSW54V2VCcnc5NytWSm9CekQyLzF3SmZVYjZucUNUUDVoQUsrZ3d4R25rdDhNVmhyUzJFRUZZVGl6V2MzRGErV1NyVXBvRTdnWXNIUE4xM3hvd1F3bDhTOCs4SFF2NFpmcExZOC9xZU5FMzNEZXE5aTVRWjlWa3Y2WXBXaExmZGcrdFhhOUhtSmU0RVBrSHNQL3FGSVMrc25rSHM2d0VNTG9QQ3pQWUJmMFRjVXVUR3oxa3NBelZBK2VmNk9HSlY5TStIRURZbFNUTHc5Zk15Z3lESEFSdGJQMVIwMHg4QTdwWjBKZkQ0c05jUThqV3RpeGg4RStocFltbXR6dzFqeXUrTUpiTUdjTUN6bUZYRVRMQVhTYm81aEhEOUlEdkpsV2tBMzJsbWg2VFR0Tk9QVnBqcVBTYnBjdUNoWVVVM2krVGJYczRDRWhob3dHTVhzUS9LNStxMnBjQVphZmEyemJKS0RZSjBvYTJSOVB2QWFVbVNiSkgweUNEV0I4dWNBbStDMG5lUUErdzBzeTFtOXBvMFRlK3JnL0VETUxOVlp2YnVsdEVmMElmbUlIQWx3NS8yTytQSGZxbmNuaUI5YUpQQVprbGZNck1QNVU1R3BaUnBBUGVXZkZKMlN2b1U4RXRabG4yaWJwV0NKYjBJT0tNc1E5K0Zkb0FZNmYzVXNDTm56bGh5WlB2NmUrdm5JV2hIRVh0bGZ6dnZBMVFacFJsQU0zdTI3ZWRPcitsRzIwL01YamdidUtndUhsK1J2TFRQR3lUTjdwd3ZhOG8vanpaalpsODBNemQrVGxVY1VwUmt3T3VBODJtdkFENmZKTW5tZkwyOWRFcjdvNUptNjRvdDRnUThDcndYZUZXYXBnL1g5V1pYcklCeVdwdlc2WFZsYVE4RGwxZmR0OFJabXVURmV4dXRtVmp4dmh5bUJreVlXU0xwcTJiMnhpUkpTczljSzlPcWZwMjJhZy9kZUR1NSs3c1YyR0ptTDJjQUZWc1dRNzR1OFFyeWN2MHRLdlFBOXdBZjFBQ3FXRHRMbGxYay9XcmExNTFyb2pXQUc0RkxRd2lsNWl1WFpsSFROSDA2aEhBeDhEM296dU9UTkcxbVg1UjBYWnFtVDVZMWxvcVpBbDVxZytucmUxRFNKL01PWG81VEZhdUp0UjVuaFlyWHMvdlJqZ1QrQVBocENPR1B5OXIrVmVxOE9rM1QrNGhiTkhhMUc3OWlvSU9ZeGZGMTRMZXlMSHYzQ0JrL2lQWHZ6dXowUkFYVDRJZUFHL29ZbytOMGpabXRBU1pyRkFTWlQ1c2s3b0s0Sm9SUXl0N2JLaFlXL3dSNGpabmRTVXpRUDBDc3kzZkFZcm4xUjh6c25jQTcwelI5dElMM3I1clR5V3ZjRlNsN0NrdzhiOWVrYWJxenYyRTZUdGVzbG5SSUZrWk5naUJ6Tkl2YnpzNEhMZ3Nock96dThPYW45RVhGUEdyN01QQndDT0ZrNHY3QUdmMnNSdC9EV1phTjVCNjJQQkwxMHZtbXJPMzBxK1YvK3k0R1U3N2ZXZUpJV2tOaEN0d2hHRkUzYmJta2p3QXpTWkpjbGhmbTdZdEtLMEtuYWZvSThFaVY3ekZnanJIWUQ2UFNiejFKZTh6c0Zra2U5WFVxSlVrU0xMWnRuV3pOUklwZjhEWFdKaVQ5anFSL0RDSDhQLzBHVG9mYUZuTUUyU0NwMGI0K0FSeHlnUmFybWRsandJUER6blYyeGg5Sms1TCtOMkNpK01WZS9ML0cyZ3BpY3NDWi9XYU51QUhzalpPQVZaMm1zVkRhTlBpQXBPdXpMS3ZsSGtobkxQbXhtVDFtWnZ0cUZQRG9WbHRoWnJjU3Q2YjFUT2M3MldtdDkwM2tpNjZ0cFlKdktUWjNxbklLbkpuWjJWbVdIWkpaNHpoVmtTVEpwS1Mxd0RIRUhpNW5tTmw2U1N2TmJCa01mYnJiamZZRThIb3oyNXBsV2RmSDdnWVFTSkprbFdKMnh6SDV2MVhBejVuWkZEQWxhU3AvNld1Sit3QTdHcktTK0E5bXRpWExzdHB1Qm5mR214RENKREY0ZVlxWnZWRFNxUmJiR0J6eXVqcEVoUXUwdHRhOXM1Zmlxa3ZLQU9ZcFAydnliN3ROd0l1QjQ0a2R5NVlYL2sxQ1R5ZS96QXNhMGpUdC9pdk1jU29pWDFlYkltNUNUc3pzVlpKT05MT2pnU05yNWdFQ0hEU3pMWkwrdU50cVNVdkNBT2JUMmMzRS9Za25VUWhtdEF4UGNXMmhWNjFGQ1Vad0Y3RE9TMTA1ZFNWSmtnYlJlWGlwcEhPb1diOWZNM3RPMGx2U05IMndtOWVQclFITWN3WlBOTFBUSkwwOVg5TTRKT2hUZ1J1K1dHNVAwL1J0WmY5Ung2bUNmS3A4dXBuOXRxUXp6T3pJTWh5S3hXcVNmbVJtTDhpeTdMQWRCOGZLQU9ZdSswcmdSY0FGUks5dnRSVmFWYmFvMC9wRnJzMEFIMGpUOUUrN09GVEhxUTFKa3F3QWpwZDBNWENxbWEwYTlyUTRIOHRocDhKanN3MG1oTERDek40SWZCWDRGakZnc1laOGYxUHgyd0xLM2JmWDB0cnBVZHR0WmorYTUvQWNwN1prV2JZdnk3S0hnVGNBYjVMMElIQlFHbDRwTFRPN0VEamhjR00vb3R4VE1YaENDRlByMXEzN2Q1SStENXd2NlZjb0dQYldpU2thbnJLMW90NnZCandIM05Kc05tdFYrZHB4dXFYWmJNNnNXN2Z1SjVLK0NmdzM0SmZON044T3lRTmNDYXh1TkJwM05adk5lYjNBa1o0Q2h4RFdBcGNDYnlZdjZkMWlrT3NPTFJhNWZ2Z1k4TEkwVFhkM1BsckhHUjN5d09NSndLZk43S1FLMXN1N1lWKytQdm4xK2JLcUtzMEZyb29Rd2tvek85Zk1MZ1ZtOXljTmF3RzIvYmwrTkdBbjRNYlBHUXZ5M053c2hQQVNZcnJhaHkzdXF3VUdkcSt1a1BSUllsR1JqdmZXU0UyQlF3Z1RqVWJqZndjK1NXd0kvbTlyRnNoWWpQWlhhWnArYzg1Qk84NEkwMncycDlldFcvZUlwSCtTRk1nVENkclg3YXJTZ0hWQTFtZzBubW8ybTNQR04ycEJrTk9CN3dCdmxqUTFxT0RHSUlJZ1puYllrTDNqakNKWmx1MVAwL1FUd0VXU2Rnd3lNRUtjNVg2UXRoWVdMVVppQ3B3a3lSVHdIcUlydlFZR0U5d1laQkJFVXRmcE80NHppcGpaSFlxbDNqNHJhZlVBQXlNbkFtY0JuMnNmVSswOXdCRENja2tmbG5TbHhkTGRzNWpOTFVzMUxLMXM3OUZ4eG8wc3l3Nm1hWHEzcEV1QVBlMGVXK3R4QmRxVW1iMjcwNWhxYlFEemt0YzNBWmVUcngyMDZPU0ZEVXNyUHRldkJqUTYvbEhIR1RQTTdETm1kZ213ditWTUZKMkNLalRnUlNHRUU5dkhVbHNER0VKb0FOY0M1NUkzYktsWjBHS08xazZQMnBwK2l6bzZ6aWlSWlJtU3ZnamNyTmdxWTVZcTcxVXplM3VldmpkTExRMWdudFZ4TmZBdThqSFdMZUJSZGhDRVdJS3JsRTVYamxOMzh0NUJWNWpaUTFVR1FkcTBNMmdyM2xBN0E1aTN1N3NLZUNQNStJcUxtaTNxcEJYMVJXZ3JpRWJRY1pZRSthYi9TOHpzbWZZQVJtc2FXNllHYkFST0s0NmhWZ1l3U1pJSjRIZk03RDNxMEthdkxnR1Bpb0lnVTdnQmRKWVlrakpKMTFjY0JHbjlQd0djWFh6L1dobEFvdkc3ck4zNDFTbmdVV0VRWkFXeDhLVGpMQm55YWkyZk5MT0hXMXJGZ1pFVGtpVFoySHF1RmdZd1NSS1NKRGxPMHFXU3B1YWJKdFlwNEZIQkZIaUtXTXJMY1pZVWFack9TTHFhV0JHcDZudDFKYkM1RlhDc2hRRWtiZ0c1QVZqVDZTQ2dmZ0dQc29NZ0Z2TWszUU4wbGlSbWRoOXdmOFZCRU14c09mRHZpSzB2aG04QVF3akxjcy92UlVXOTNZV0ZlZ1E4cWdxQ0tGYXJYanZuU2NkWkFtUlpkZ0M0M3N6MlF6VkJrSlltNlJReld3VkROb0M1RzNvRzhGWUthWG56dWJKMUNYaFVFUVRKdFovSGNaWXVUMGg2QUtyTkRnR09rZFNBNFh1QURUTzdnc0xhVjUyQ0c0TU1ndVJHOE9pT2Y5aHhsZ0JwbXU0RmJqT3ovZTFPUnNtQmtRa3oyd3hETElZUVFwZzBzL09JYlNrUFljakJqUmxnR2ppUS8xL2NxVDRCTE9ObjdUUG5WSjVlekZoYTMwcU9zNFM1VDlKelpyYWhKYlJQWjB2U2ZpT0VNTlJxTUltazk5UG1oUjR1Q0ZKOHJtUnRqNlRIaUpXWmZ3dzhBK3dBOWttYXpzYzVaV2FySlIyaldOdnNST0JrWU1WaXZiLzgySSthODZUakxDSFNOTjJkSk1rOWtqNEVoOXFEd24xU2huWXNzS3J6WEs1aThyVy9yd0t2STdxamN3YllTU3RTa3JZSGVOTE12aVRwKzhTcXpQdnlhcmFITzRaSjR0YVZOY0JKWnZaeVNjY1RJOXFyK3htUG1SMlU5RHp2Qyt3c1paSWtPUlA0QnJDOGFBdUtBY2dTdEczQTJjUHlBRGNDWjVuWmJKNXZrZm1NUlB0cis5VWtIVFN6K3lYZENEelFUZi9RZG5JanRUZi90elZKa3R1Snh1OVlNOXNzNmNXU05wdlo4aDY4MFVtTEpiK2U2M1U4ampNdVNIb2EyQW9jbC85TThmK1N0SlhBbW9FYndMeGgrU1hrMXIyZHcwd1J5OUFlQXE3SnN1eXUvbzlpTGxtV1FUUmN6d0gzQS85M0NHR2xwRk9CRndNbkVRMy82b1dPVWRMUnVBRjBsamJQQVUrWjJYRWwzL3RGK3pJY0EwaTA2bWUyZmhoZ2NHTWZjSWZGVkxzZEpSekhZY21qV25jbFNYSzNwRFhBVVVBQ3ZKellNV3UxeFEzUXhjYnR2aGZRV2VvY01MUC9UQ3lJVWxVUVpCSm9ETndBbXRuYlc5SE9iZzBZTERyZ3NZTllUdi8yTE11bVN6Nmt3NUpsMlF3eG9MSURlQ3lFY0xPWkhTbHBNL0FDU1NlYjJZbVNWaEdOcE9Nc1dkSTBKWVR3TUZRYUJNSE1mbW1nQmpDRXNKcFltLzhRRG1jSUM5dEU1angvT0ExNG10Z1U1ZnZkQkRjR1FkNmpkRGR3ZHdqaEhtSVVlVFhSTy9UbVNJNFRnNU5sQlR3NmFwTFdEOVFBbXRtcGt0YTJhWlVGUWN4c08zQmhsbVgzbFhjVTVaSWI1Vll3NVpraEQ4ZHg2c0l1U2Z1QnFZcUNJQUNyQjVZSkVrS1lrblEyaGQ0ZUhieTFNclU5a3Q2V1pkbTlwUjJFNHpnRElVM1RHVFBiMnZyWnlzMEVhVDFlTWNoVXVOVm1kbHE3V0J6VTRiUWVBaDc3Z2F2TTdNRkZqdGx4bkNFaGFUZFVHaWlkR3VRVStPUitwNy9RY3hEa1RrbWZ5cmVtT0k0em11eXJNZ2pDb0R6QUpFa0FYdElhUUR1SDAzcFovOHZkNWl2VE5QVkc0NDR6d3BqWnZtSUFveldOTFV0alVCNmdwSlZtZG56KytKRG5TZzZDVEN0bWQyd3JiL1NPNHd5RGR1K3RnaURJNUtDbXdKc1VNeHdPWWI2cDdueGFGN3U4bndUK3pITnBIV2YwTWJNVlBkejdQV3VTOWcwcUNMTEJ6RmIzTS8wdGFvZnhGR2ZNN0ZhZitqck8yTEFTS2cyQzdCdVVCL2lyd0xKK0J3eGRCVUdlbGxUYi9YNk80L1JHdm5SV1pSQmtZQjdnc2EwSEZRWkJIZ0NlWGZ4UUhjY1pObm5KdkxWVkJrSE1iTytnUE1DTnJVRlVGUVF4cys4T0k4L1hjWnhLV0VHc3RWbFpFRVJTOVZQZ0VNSXlZR092QVk5TzJueUxtV1oyUUxHZ3FlTTQ0OEVtTTVzNDNMMi9HRTNTbmtGTWdZOGk3ejFTVlJCRTB1TnBtdTR2YWJ5TzR3eWZRNWJOS2dxQ1BET0lLZkNxUGdkM0NJY0pnanhaeGNBZHh4azhTWkpNQUwvWmZzK1hHUVF4c3huZ3g0UHdBRmNVZjZnb0NQTGpNZ2JxT003d1VTd2VmRnpKQVk5RE5FbjdKRDFYdVFmWXZwbXg3Q0NJWWh2TG5SVU0zWEdjNGJDV1F0eWdpaUNJbWUyVnRMTnlBNmhZNWJqbmdFY25iWjdGeklQRUhyNk80NHdISjF0c0RsWmF3S05kSTNhRWZLN3lLYkNaTFNzODd2UjgxOW84bnVKQnhiNjlqdU9NT0VtU1RBSnZLR29WQlVGMkFic0c0UUZPOXpHNFRuOW52aURJcEtSbGMzN0JjWnlSUTdHMzl2RmxaMzEwMEI1TDAvVEFJSUlnaC9TNHFDQUlNZ2tzTDJXa2p1TU1qUkRDSkhDMm1hMnFJT3VqWGZzQjVQdnpxc1R5bWw2dFFWU1FDVElCSEZuNndCM0hHVFNyZ1RmbVRzMHNGUVJCZHB2WlV6QUFBeWhwYi9zQTJnZlhyYmJBanU1ZkxXZTBqdU1NQ3pON2g2U05WV1I5dEdtUFNOb0QwWHVxRkRQYlczamM2Zm11dFFVOHhXUG4vSUxqT0NORENPRm9TVytxTU91anhZeVpaY0ErR0lBQmxQUXNjTENzSU1nOFdoSkNtSnJ6UzQ3ampBb1hVQWgrS0thNHpnbGtMRllEOWtuNnExYVA4TW9OWUpxbTB4VDYzVmFVQ1RKbFppOHFhY2lPNHd5UUVNS3h3SWVBeVlvQ0hyT2F4VjdoczkwaUIxVVBjR3RyRUl0eFpkc05aVkdUOVBJUXdpRGJmRHFPczBoQ0NDdk1iQXQ1OWVjT0hsdXBtcVI3aWxYakIyVXduaXdPcWtXWm1wbWRBYXd2ZDlpTzQxUkZDQUV6ZXgvdzF2WVpYN3ZEVTRZRzdBYStXaHpEb0F6Z2o4M3NZSVZCRUNSdEFFNHBaN2lPNDFSSkNHSEN6RTZSZENHRjNTZ1ZCMEVlSTUrTnRoaVVBZnlScEowVkJrRUFsZ0h2RHlHc2FQOWR4M0ZxeDFHU3JzMy9yeVRnMFNFVDVEdHBtdTR1RG1KZ0J0RE1ub1BLZ2lBdGpqT3p0L3Bhb09QVWx4RENVY0NOUUFMVkJUemF0TjNBN2UxakdaU2gyQTA4VldVUUpQOTVPWENobWEwdGRmU080NVJDWHV6Z1dqTTdrOXorVkJYd2FEM083Y2tYMGpUZDFUNmVnUmpBTkUyUjlOMHFneUFGYlpPa3kzeGZvT1BVaXhEQ2FrazNtZGxzdWx0VkFZK2lKbWtyY0d1bk1RMXNxbWhtajVyWkhBdGNWaENrN1hmZmJHWnZUcEprY1lOMkhHZlJoQkFJSWF3QnJnZk9iZWtWQnp4bU5lQWVNL3RScDdFTnpBQksyZ0VjMHJtdDVDQklVVnNwNlJwSm0vUCtvbzdqREk4TlpuYWJtYjBaV0RhSWdFZkJOdXdHYnNxeTdHQ25nUTB5V0xCZjBuZUFPZDNieWdxQ3RHbEhFdDNlVXhjOWNzZHhlaWFFTUJsQ2VCM3dEVW1uUzVvWVVNQ2o5WGhHMHUxbTlrejcyRnJNZGJVcUpJU3dGdmhQeEZhWlBSdTJvdDZ0Qmp3SnZOUE1Ic3V5ckt4RGNSeG5BZkkxK1BPQnk4azdRdzRhTTlzdTZTVnBtajQ5MzJ1T0dPU0FtczNtdmthanNSNDRDZm9MZVBRYUVRTFdtTm1ySmYxRG85SFkybXcyLzZXS1kzTWNCMElJeXhxTnhzdUF6NXZadTRIbHZUb3RKV25Ud085bldYYmZRdU1kUkYvZ2RyNlNSNEhXd0dBV1FvbGRwbTRFZmoyRWNBMndOMDNURWc3RmNSeUlobys0MXZkK1NXOG1GamVkcFgyYU9nRHRBVW5mUE55NEIrb0JBalFhalYyU05nSW45Qk1FS1Q3WG8vWnprazRCQXJDcjBXZzgwMncyNXk0K09vN1RFeUdFRTh6c3c1S3VCMDZWTkFYVkJqY09vMDFMZXZ0Q1U5OFdBMTBEYkpFa1NTTHByOHhzVGtTb2FNWGJ0U0tMOUFoM205bDlSSy93OFN6TDlyVy93SEdjenVTWlZrZWIyWEhBV3lTZFJseHFtaWpldThYMS9BRnFCODNzVHlWZDJLcjV0eEJETVlENTFwVHZXdHdOWG1rUVpDRk5zVFhlUThDWGdQdlNORDJrZ1pQak9EOGpMMTIxV2RKTGdET0lsZGpyMXBEc0VUTjdRNVpsMjd0NThWQU1JRUNTSkp1QnIwcHFkUHM3RmE4WDdqT3pCeVg5d015MkFqc1Urd2JzQnc2WTJjRk9VM1BIR1JNbThoblpjcUpSVzBGY08yOEF2MHJNMnozUllyb3BNSkJBUnEvYWR1Q1ZhWm8rMGUxQkR5TUlBb0NreDREYnpld2prZzdaanppSXdFZ0hiUVh3Q3VCTVNRZUlHeWozRTZOSjAwREhqWlNPTXlaTVNKck1qZUFrTUFXc01yT3AvTGxoQkRKNjBmYVoyUlhBVTcwYzlGQmRtaERDVVdiMlhVbkh0YlQ1Z2lEelBWY256ZW1QT2wxRDEwWld1MW5TQjlJMDdjbFJHWGJacU9lQXE4ZzdOQlZwdC9iUWN5Ykl3TFQyOGJyV3ZkYitUVzQydUV3QjE4WkRBKzRCcnV6VitNR1FQVUNBRU1KeU0vdXM0dDZoQlkxT1VhK1RWaHluYSs1Qk93TmxxNW05TE11eWVkUGRGcUlXbjhDOFFPS1hnUVU3dTlYcFp2VWJ1QnlLNTdGT1gycXUxVjhEbmpDenQyZFoxblhRbzUxaFQ0RmJiQWN1QnZiQy9OT211aGk2K2JST1kzYXRlNjFPMTlLMSttcjU1MmU3bVYwSTlHMzhvQ1llWUlza1NUNENYS0Y4SjNrN2Ria0E4MmxPZjlUcEdycFdmdzNZYVdidmxIUnZONXVkRjZJdUhpQUFrdjRVK0tTWlRSZTloTmJqRHQ4Q3RkQ0t1bXU5YWEwUGVFc3pxOWNDdTJ1MTAzNWtacjlkaHZHRG1ubUFBQ0dFVmNDbmdUZVNHK2ppRFRQc2RZZE9Xb3M2ZlV1T291WTRoMkU3Y0RhUWxXSDhvSVlHRUdMS0RiR1k2VGtVdk5RNjNheCtBNWREOFR6VzZVdk50ZHBwRDBoNmY1cW1IVXZiOTB1dHBzQXQwalRkQjF4aVpuY0JNMUF2UXplZjFvNXJ2V2wxdXBhdTFVWTdhR2IzVldIOG9LWWVZSXNRd2tvenV4VjRyV0thVGwwdWludUFKVktuYStoYXJiUjlGak04cmtqVGRBOFZNUEI2Z0wzUWJEYi9SNlBSK0FId1BPQUU1YTMwNEdjbnEzakNocVVWZGRkNjAxcVBpLy9Ed0Vzb3VWWXZiY2JNL2tIU2U0R2JxeXhYTnhJdVRMNG11QVg0Q0huNW5kWkpnK0d2VDdTb2cwRVpaYzF4QUN5dTkxMlNwdW1qVmIvWFNIMENRd2huRVhPSEZ5eWU0RGZ3Nk5EdURiWndiVWxxMjRrN1FQNDRUZE01M1NPcm9KWkJrQVc0eDh4ZVQrd3ZQRjBuNDFlOGtLNzFwOVhwV3JvMjBIdG12NlN2bTltYmdQOHdLT01ISStZQnRzajNDcjRIdU1qTTF0YmxnanI5VWJlYjByV0JhazhBMXdOZjZLZWF5MklaMlRzNFNaSkpZSk9rTGNSQ3BpdUhhZmhxOEVFYVNhMzF1UGcvMUdJaDNyV0tORWtIZ2FmTjdNdVNQZ1BzS0d0amM2K01yQUZza1FkSXpqQ3phNEQxTGIxNGcxV3R0YWlEUVJsbHpWa1M3QVN1QWU3cXBtdGIxWXpOSnpDRU1HVm01MGk2d014T2tyU3MrTHpmd1BXazNSdHM0ZHBZYWRQQTQ4Qm56ZXlPTE1zcTJkUFhEMk4xQitmdCt0WVFPMVpkQUJ3UHJMQzhYVitST25rK1MxbHJteHJWYnJybVduOGFjQURZSStrKzRCdkFvd3h4cWpzZlkyVUFpK1NkNms4RlhnYWNaV1liVkhIekphYy82bUNJWFN0SEk5YjBmQUQ0anBuZGwyWFo1OTd6SmdBQUFaSkpSRUZVdHZZWDFJbXh2NE56UTdpS1dHMzZWY0FKWnJZV1dGTTBpSXMxZkhYNkVJNlM1aDdnU0dzSGdSM0VLaTFQRW50OVB5NXBwNW50eTdLTXVqUDJCckNkSkVuV1N0cGdac2RMZWpHeDMra3haalpyRElzM1p6ZGFpem9ZbEZIV25Ob3pRMnhrdHRYTW5wVDBOMFREOTNSVnVicFY0NTlBSUVtU0tVbnJnWTFtdGhGWUI2eVV0TnpNbGlzV1lwaUErUTFoamI2VlIxWXI0dHJndGR5ak93QWNNTFA5eEc2Ti8xM1NWbUFyOERTd0wwMVR4Z1UzZ1BNUVFvRFlPSDRaTU5uK3dYSEtvZjBMcGVnVnVqWndiWWFZWVhVd3k3SmFCU3NjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWN4M0VjeDNFY3gzRWNaNVQ0L3dITWxoUUFBNVZENmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCB7IGdldFRpbWVGcm9tRGF0ZSB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XHJcblxyXG4vLyBnZW5lcmF0ZSB0aGUgc3VtbWFyeSBzZWN0aW9uIG9mIHRoZSB3ZWJzaXRlXHJcbmZ1bmN0aW9uIGxvYWRTdW1tYXJ5KHdlYXRoZXJEYXRhKSB7XHJcbiAgY29uc3Qgc3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW1tYXJ5Jyk7XHJcbiAgc3VtbWFyeS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gIGNvbnN0IHN1bW1hcnlNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgc3VtbWFyeU1haW4uY2xhc3NMaXN0LmFkZCgnc3VtbWFyeS1tYWluJyk7XHJcbiAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxlZnRTZWN0aW9ucyA9IFsnY2l0eScsICd3ZWF0aGVyJywgJ2N1cnJlbnQtdGVtcCcsICdleHRyZW1lLXRlbXAnXTtcclxuICBsZWZ0U2VjdGlvbnMuZm9yRWFjaChzZWN0aW9uID0+IHtcclxuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc2VjdGlvbik7XHJcbiAgICBpZiAoc2VjdGlvbiA9PSAnY2l0eScpIHtcclxuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhWyduYW1lJ107XHJcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24gPT0gJ3dlYXRoZXInKSB7XHJcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YVsnd2VhdGhlciddWzBdWydtYWluJ107XHJcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24gPT0gJ2N1cnJlbnQtdGVtcCcpIHtcclxuICAgICAgY29uc3QgdGVtcFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgICAgdGVtcFNwYW4udGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHdlYXRoZXJEYXRhWydtYWluJ11bJ3RlbXAnXSlcclxuICAgICAgdGVtcFNwYW4uY2xhc3NMaXN0LmFkZCgndGVtcCcpXHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGVtcFNwYW4pXHJcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24gPT0gJ2V4dHJlbWUtdGVtcCcpIHtcclxuICAgICAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCB0ZW1wU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgICB0ZW1wU3Bhbi50ZXh0Q29udGVudCA9TWF0aC5yb3VuZCh3ZWF0aGVyRGF0YVsnbWFpbiddWyd0ZW1wX21pbiddKVxyXG4gICAgICB0ZW1wU3Bhbi5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgICAgIHRlbXBTcGFuLmNsYXNzTGlzdC5hZGQoJ21pbi10ZW1wJyk7XHJcbiAgICAgIG1pblRlbXAuYXBwZW5kQ2hpbGQodGVtcFNwYW4pXHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWluVGVtcCk7XHJcblxyXG4gICAgICBjb25zdCBtYXhUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IHRlbXBTcGFuVHdvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICAgIHRlbXBTcGFuVHdvLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh3ZWF0aGVyRGF0YVsnbWFpbiddWyd0ZW1wX21heCddKVxyXG4gICAgICB0ZW1wU3BhblR3by5jbGFzc0xpc3QuYWRkKCd0ZW1wJyk7XHJcbiAgICAgIHRlbXBTcGFuVHdvLmNsYXNzTGlzdC5hZGQoJ21heC10ZW1wJyk7XHJcbiAgICAgIG1heFRlbXAuYXBwZW5kQ2hpbGQodGVtcFNwYW5Ud28pXHJcbiAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQobWF4VGVtcCk7XHJcbiAgICB9XHJcbiAgICBsZWZ0LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGxlZnQuY2xhc3NMaXN0LmFkZCgnc3VtbWFyeS1tYWluLWxlZnQnKVxyXG4gIHN1bW1hcnlNYWluLmFwcGVuZENoaWxkKGxlZnQpO1xyXG5cclxuICBzdW1tYXJ5LmFwcGVuZENoaWxkKHN1bW1hcnlNYWluKTtcclxufVxyXG5cclxuLy8gZ2VuZXJhdGUgdGhlIGRldGFpbHMgc2VjdGlvbiBvZiB0aGUgd2Vic2l0ZVxyXG5mdW5jdGlvbiBsb2FkRGV0YWlscyhkYXRhKXtcclxuICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRldGFpbCcpO1xyXG4gIGRldGFpbHMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuXHJcbiAgLy8gd2VhdGhlciBkZXRhaWxzXHJcbiAgY29uc3Qgd2VhdGhlckRldGFpbHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiU1VOUklTRVwiLFxyXG4gICAgICBkYXRhOiBnZXRUaW1lRnJvbURhdGUobmV3IERhdGUgKGRhdGFbJ3N5cyddWydzdW5yaXNlJ10gKiAxMDAwKSksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcIlNVTlNFVFwiLFxyXG4gICAgICBkYXRhOiBnZXRUaW1lRnJvbURhdGUobmV3IERhdGUgKGRhdGFbJ3N5cyddWydzdW5zZXQnXSAqIDEwMDApKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdDSEFOQ0UgT0YgUkFJTicsXHJcbiAgICAgIGRhdGE6IFwibi9hXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdIVU1JRElUWScsXHJcbiAgICAgIGRhdGE6IGRhdGFbJ21haW4nXVsnaHVtaWRpdHknXSArICclJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1dJTkQnLFxyXG4gICAgICBkYXRhOiBkYXRhWyd3aW5kJ11bJ3NwZWVkJ10gKyAna20vaHInXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnRkVFTFMgTElLRScsXHJcbiAgICAgIGRhdGE6IE1hdGgucm91bmQoZGF0YVsnbWFpbiddWydmZWVsc19saWtlJ10pXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUFJFQ0lQSVRBSVRPTicsXHJcbiAgICAgIGRhdGE6IFwibi9hXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdQUkVTU1VSRScsXHJcbiAgICAgIGRhdGE6IGRhdGFbJ21haW4nXVsncHJlc3N1cmUnXSArICdoUGEnXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVklTSUJJTElUWScsXHJcbiAgICAgIGRhdGE6IGRhdGFbJ3Zpc2liaWxpdHknXS8xMDAwICsgJ2ttJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1VWIElOREVYJyxcclxuICAgICAgZGF0YTogXCJuL2FcIlxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIHdlYXRoZXJEZXRhaWxzLmZvckVhY2goZGV0YWlsID0+IHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2RldGFpbC1jb250YWluZXInKTtcclxuXHJcbiAgICBjb25zdCBkZXRhaWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGV0YWlsVGl0bGUuY2xhc3NMaXN0LmFkZCgnZGV0YWlsLXRpdGxlJyk7XHJcbiAgICBkZXRhaWxUaXRsZS5pZCA9IChgJHt0ZXh0VG9IeXBoZW5Gb3JtYXQoZGV0YWlsLm5hbWUpfS1kZXRhaWwtdGl0bGVgKTtcclxuICAgIGRldGFpbFRpdGxlLnRleHRDb250ZW50ID0gZGV0YWlsLm5hbWU7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGV0YWlsVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGRldGFpbFZhbHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXRhaWxWYWx1ZS5jbGFzc0xpc3QuYWRkKCdkZXRhaWwtdmFsdWUnKTtcclxuICAgIGRldGFpbFZhbHVlLmlkID0gKGAke3RleHRUb0h5cGhlbkZvcm1hdChkZXRhaWwubmFtZSl9LWRldGFpbC12YWx1ZWApO1xyXG4gICAgZGV0YWlsVmFsdWUudGV4dENvbnRlbnQgPSBkZXRhaWwuZGF0YTtcclxuICAgIGlmICggZGV0YWlsLm5hbWUgPT0gXCJGRUVMUyBMSUtFXCIgKSB7XHJcbiAgICAgIGRldGFpbFZhbHVlLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcclxuICAgIH1cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXRhaWxWYWx1ZSlcclxuXHJcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgfSlcclxufVxyXG5cclxuLy8gZ2VuZXJhdGUgZGVzY3JpcHRpb24gc2VjdGlvbiBvZiB0aGUgd2Vic2l0ZVxyXG5mdW5jdGlvbiBsb2FkRGVzY3JpcHRpb24oZGF0YSl7XHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKTtcclxuICBkZXNjcmlwdGlvbi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG5cclxuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgd2VhdGhlci50ZXh0Q29udGVudCA9IGRhdGFbJ3dlYXRoZXInXVswXVsnZGVzY3JpcHRpb24nXTtcclxuICB3ZWF0aGVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2Mtd2VhdGhlcicpXHJcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQod2VhdGhlcilcclxuXHJcbiAgY29uc3QgbWluVGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gIG1pblRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGFbJ21haW4nXVsndGVtcF9taW4nXSlcclxuICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcclxuICBtaW5UZW1wLmNsYXNzTGlzdC5hZGQoJ2Rlc2MtbWluLXRlbXAnKTtcclxuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChtaW5UZW1wKTtcclxuXHJcbiAgY29uc3QgbWF4VGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gIG1heFRlbXAudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKGRhdGFbJ21haW4nXVsndGVtcF9tYXgnXSlcclxuICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ3RlbXAnKTtcclxuICBtYXhUZW1wLmNsYXNzTGlzdC5hZGQoJ2Rlc2MtbWF4LXRlbXAnKTtcclxuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChtYXhUZW1wKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJCb3goZWxlbWVudFNlbGVjdG9yKSB7XHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50U2VsZWN0b3IpO1xyXG4gIHdoaWxlKGRpdi5maXJzdENoaWxkKSB7XHJcbiAgICAgIGRpdi5yZW1vdmVDaGlsZChkaXYuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXh0VG9IeXBoZW5Gb3JtYXQodGV4dCl7XHJcbiAgcmV0dXJuIHRleHQuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBsb2FkU3VtbWFyeSwgY2xlYXJCb3gsIGxvYWREZXRhaWxzLCBsb2FkRGVzY3JpcHRpb24gfSIsImNvbnN0IEFQSUtFWSA9ICdlNjEyNjY4ZmNmOWVmNGYwMWYwYmIyYjIwYmY2OGI3Nyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRMb25MYXQoY2l0eU5hbWUpe1xyXG4gIHRyeXtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5TmFtZX0mbGltaXQ9MSZhcHBpZD0ke0FQSUtFWX1gLCB7bW9kZTogJ2NvcnMnfSk7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSB7XHJcbiAgICAgIGxvbjogZGF0YVswXVsnbG9uJ10sXHJcbiAgICAgIGxhdDogZGF0YVswXVsnbGF0J10sXHJcbiAgICB9XHJcbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XHJcbiAgfWNhdGNoKGVycm9yKXtcclxuICAgIGNvbnNvbGUubG9nKCdFcnJvciB3aXRoIGdldHRpbmcgY29vcmRpbmF0ZSBkYXRhOiAnLCBlcnJvciApXHJcbiAgfSBcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEoY29vcmRpbmF0ZXMsIHRlbXBVbml0KXtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbG9uID0gY29vcmRpbmF0ZXNbJ2xvbiddO1xyXG4gICAgY29uc3QgbGF0ID0gY29vcmRpbmF0ZXNbJ2xhdCddO1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7QVBJS0VZfSZ1bml0cz0ke3RlbXBVbml0fWAsIHttb2RlOiAnY29ycyd9KTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9Y2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZygnRXJyb3Igd2l0aCBnZXR0aW5nIHdlYXRoZXIgaW5mb3JtYXRpb246ICcsIGVycm9yIClcclxuICB9XHJcbiAgXHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldExvbkxhdCwgZ2V0V2VhdGhlckRhdGEgfVxyXG4iLCJpbXBvcnQgbG9nbyBmcm9tICcuL2xvZ28ucG5nJztcclxuaW1wb3J0IHsgZ2VuZXJhdGVTZWFyY2hCYXIgfSBmcm9tICcuL3NlYXJjaEJhci5qcyc7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRIZWFkZXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG5cclxuICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xyXG4gIGNvbnN0IG15TG9nbyA9IG5ldyBJbWFnZSgpO1xyXG4gIG15TG9nby5zcmMgPSBsb2dvO1xyXG4gIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQobXlMb2dvKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XHJcblxyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV2VhdGhlciBBcHBcIjtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICBjb25zdCBzZWFyY2hCYXIgPSBnZW5lcmF0ZVNlYXJjaEJhcigpO1xyXG4gIHNlYXJjaEJhci5jbGFzc0xpc3QuYWRkKCdzZWFyY2gtYmFyJyk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHNlYXJjaEJhcik7XHJcblxyXG4gIGNvbnN0IHRlbXBVbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgdGVtcFVuaXQudGV4dENvbnRlbnQgPSBcIkNcIjtcclxuICB0ZW1wVW5pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHRlbXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXAnKVxyXG4gICAgaWYgKHRlbXBVbml0LnRleHRDb250ZW50ID09IFwiQ1wiKXtcclxuICAgICAgdGVtcFVuaXQudGV4dENvbnRlbnQgPSAnRic7XHJcbiAgICAgIHRlbXBzLmZvckVhY2godGVtcCA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXBWYWx1ZSA9IHRlbXAudGV4dENvbnRlbnQgKiAxO1xyXG4gICAgICAgIHRlbXBWYWx1ZSA9ICh0ZW1wVmFsdWUgKiAoOS81KSkgKyAzMjtcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh0ZW1wVmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDgpXHJcbiAgICAgIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0ZW1wVW5pdC50ZXh0Q29udGVudCA9IFwiQ1wiO1xyXG4gICAgICB0ZW1wcy5mb3JFYWNoKHRlbXAgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wVmFsdWUgPSB0ZW1wLnRleHRDb250ZW50ICogMTtcclxuICAgICAgICB0ZW1wVmFsdWUgPSAodGVtcFZhbHVlIC0gMzIpICogKDUvOSlcclxuICAgICAgICB0ZW1wLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh0ZW1wVmFsdWUpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICB9KVxyXG4gIHRlbXBVbml0LmlkID0gJ3RlbXAtdW5pdCc7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRlbXBVbml0KTtcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2xvYWRIZWFkZXJ9OyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuZnVuY3Rpb24gbG9hZFBhZ2UoKXtcclxuICBjb25zdCBzZWN0aW9ucyA9IFsnc3VtbWFyeScsICdkZXRhaWwnLCAnZGVzY3JpcHRpb24nXTtcclxuICBzZWN0aW9ucy5mb3JFYWNoKHNlY3Rpb24gPT4ge1xyXG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzZWN0aW9uKTtcclxuICAgIGVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICB9KVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IGxvYWRQYWdlIH07XHJcblxyXG5cclxuIiwiZnVuY3Rpb24gZ2V0VGltZUZyb21EYXRlKGN1cnJlbnREYXRlKXtcclxuICBsZXQgdGltZSA9IGN1cnJlbnREYXRlLmdldEhvdXJzKCkgKyBcIjpcIiArIGN1cnJlbnREYXRlLmdldE1pbnV0ZXMoKTtcclxuICByZXR1cm4gdGltZTtcclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0VGltZUZyb21EYXRlIH07IiwiaW1wb3J0IHsgZ2V0V2VhdGhlckRhdGEsIGdldExvbkxhdCB9IGZyb20gJy4vYXBpSGFuZGxlci5qcyc7XHJcbmltcG9ydCB7IGxvYWRTdW1tYXJ5LCBsb2FkRGV0YWlscywgY2xlYXJCb3gsIGxvYWREZXNjcmlwdGlvbiB9IGZyb20gJy4vRE9NTWFuaXB1bGF0aW9uLmpzJ1xyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVTZWFyY2hCYXIoKXtcclxuICBjb25zdCBzZWFyY2hCYXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBzZWFyY2hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuXHJcbiAgc2VhcmNoSW5wdXQudHlwZSA9IFwic2VhcmNoXCI7XHJcbiAgc2VhcmNoSW5wdXQuaWQgPSAnc2VhcmNoLWJhcic7XHJcbiAgc2VhcmNoSW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBjaXR5JztcclxuICBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaElucHV0KTtcclxuXHJcbiAgc2VhcmNoQnV0dG9uLnRleHRDb250ZW50ID0gXCJTZWFyY2hcIjtcclxuICBzZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpPT57XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNpdHlOYW1lID0gc2VhcmNoSW5wdXQudmFsdWU7XHJcbiAgICBzZWFyY2hCdXR0b25FdmVudChjaXR5TmFtZSk7XHJcbiAgICBzZWFyY2hJbnB1dC52YWx1ZSA9ICcnXHJcbiAgfSlcclxuICBzZWFyY2hGb3JtLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XHJcblxyXG4gIHNlYXJjaEJhckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hGb3JtKTtcclxuICByZXR1cm4gc2VhcmNoQmFyQ29udGFpbmVyO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzZWFyY2hCdXR0b25FdmVudChjaXR5TmFtZSl7XHJcbiAgY2xlYXJCb3goJy5zdW1tYXJ5Jyk7XHJcbiAgY2xlYXJCb3goJy5kZXRhaWwnKTtcclxuICBjbGVhckJveCgnLmRlc2NyaXB0aW9uJyk7XHJcblxyXG4gIGxldCBjb29yZGluYXRlcyA9IGF3YWl0IGdldExvbkxhdChjaXR5TmFtZSk7XHJcbiAgY29uc3QgdGVtcENvbnRyb2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVtcC11bml0Jyk7XHJcbiAgbGV0IHRlbXBVbml0ID0gXCJcIjtcclxuXHJcbiAgaWYgKHRlbXBDb250cm9sLnRleHRDb250ZW50ID09IFwiQ1wiKXtcclxuICAgIHRlbXBVbml0ID0gJ21ldHJpYyc7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRlbXBVbml0ID0gXCJpbXBlcmlhbFwiO1xyXG4gIH1cclxuXHJcbiAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgZ2V0V2VhdGhlckRhdGEoY29vcmRpbmF0ZXMsIHRlbXBVbml0KTtcclxuICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YSk7XHJcblxyXG5cclxuICBsb2FkU3VtbWFyeSh3ZWF0aGVyRGF0YSk7XHJcbiAgbG9hZERldGFpbHMod2VhdGhlckRhdGEpO1xyXG4gIGxvYWREZXNjcmlwdGlvbih3ZWF0aGVyRGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCB7Z2VuZXJhdGVTZWFyY2hCYXJ9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbG9hZFBhZ2UgfSBmcm9tICcuL2luaXRpYWxQYWdlTG9hZC5qcyc7XHJcbmltcG9ydCB7IGxvYWRIZWFkZXIgfSBmcm9tICcuL2dlbmVyYXRlSGVhZGVyLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5sb2FkSGVhZGVyKCk7XHJcbmxvYWRQYWdlKCk7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=