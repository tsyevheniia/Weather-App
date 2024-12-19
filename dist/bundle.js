/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss ***!
  \*************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  width: 100%;\n}\n\n.dark {\n  background: linear-gradient(60deg, #443D64, #6582C6);\n}\n\n.darkMode {\n  background: linear-gradient(45deg, #1c2326, #353d43, #4a5359, #2f363a);\n  color: floralwhite;\n}\n\n.darkMode .section1, .darkMode .section2, .darkMode .section3, .darkMode .section4 {\n  background: linear-gradient(45deg, #2f353b, #4e5d63, #6b6f75, #363e43);\n}\n\n.details {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 8rem);\n  margin: 1.5%;\n  width: 30%;\n}\n\n.light {\n  background: linear-gradient(60deg, #f6fad9, #f88508);\n}\n\n.lightMode {\n  background: linear-gradient(135deg, #FFFFFF, grey);\n  color: black;\n}\n\n.lightMode .section1, .lightMode .section2, .lightMode .section3, .lightMode .section4 {\n  background: linear-gradient(90deg, #D9D9D9, #F5F5F5);\n}\n\n.main-details {\n  margin: 2%;\n  width: 25%;\n}\n\n.main-details h1 {\n  margin: 0;\n  margin-left: 10%;\n  font-size: 4rem;\n  text-align: left;\n}\n\n.main-details img {\n  height: 2rem;\n}\n\n.main-details p {\n  margin: 0;\n  margin-left: 10%;\n  width: 100%;\n  text-align: left;\n}\n\n.navbar {\n  height: 20vh;\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n}\n\n.search-container {\n  position: relative;\n  width: 40%;\n}\n\n.search-container i {\n  position: absolute;\n  left: 1.5%;\n  top: 30%;\n  color: grey;\n}\n\n.section1 {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 30%;\n}\n\n.section2 {\n  display: flex;\n  align-items: center;\n  gap: 5%;\n  width: 55%;\n}\n\n.section3 {\n  display: flex;\n  flex-direction: column;\n  gap: 5%;\n  width: 20%;\n}\n\n.section3 h1 {\n  margin: 1.3rem 0 0;\n  width: 100%;\n  font-size: x-large;\n  text-align: center;\n}\n\n.section3 img {\n  height: 2rem;\n}\n\n.section4 {\n  width: 65%;\n}\n\n.section4 h1 {\n  width: 100%;\n  font-size: 2rem;\n  text-align: center;\n}\n\n.section4 img {\n  height: 4rem;\n}\n\n.section4-container {\n  display: flex;\n  flex-direction: row;\n  height: 79%;\n  padding: 0 10%;\n}\n\n.section4-column {\n  margin-left: 2%;\n  width: 20%;\n  border-radius: 30px;\n  text-align: center;\n}\n\n.section4-column p {\n  margin: 8%;\n}\n\n.section-down {\n  height: 34vh;\n  border-radius: 30px;\n  box-shadow: 12px 12px 10px gray;\n}\n\n.section-up {\n  height: 35vh;\n  border-radius: 30px;\n  box-shadow: 12px 12px 10px gray;\n  font-size: 1.2rem;\n  text-align: center;\n}\n\n.sections {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10%;\n  height: 80vh;\n  padding: 1% 5%;\n}\n\n.toggle-container {\n  height: 30%;\n  width: 7rem;\n}\n\n.weather {\n  margin: 1.5%;\n  width: 25%;\n  font-weight: bold;\n}\n\n.weather img {\n  height: 10rem;\n}\n\n.weather p {\n  margin-top: 0;\n}\n\n#click {\n  position: absolute;\n  margin-bottom: 5%;\n  background-color: grey;\n  border-radius: 34px;\n  inset: 0;\n}\n\n#click::before {\n  position: absolute;\n  width: 25%;\n  height: 80%;\n  left: 4%;\n  top: 10%;\n  background-color: white;\n  border-radius: 50%;\n  content: \"\";\n}\n\n#humidity img, #wind img, #pressure img, #uv img {\n  height: 4rem;\n}\n\n#humidity p, #wind p, #pressure p, #uv p {\n  margin: 0;\n  font-size: 15px;\n}\n\n#searchButton {\n  padding: 10px;\n  width: 20%;\n  border: 2px solid black;\n  border-radius: 30px;\n}\n\n#searchInput {\n  padding: 10px 10px 10px 40px;\n  width: 75%;\n  border: 2px solid black;\n  border-radius: 30px;\n  box-sizing: border-box;\n  outline: none;\n}\n\n#section3-row1, #section3-row2, #section3-row3 {\n  display: flex;\n  flex-direction: row;\n  gap: 10%;\n  height: 2rem;\n  justify-content: center;\n  margin-top: 6%;\n}\n\n.hidden {\n  display: none;\n}\n\n#sunrise, #sunset {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin: 10%;\n}\n\n#sunrise-text, #sunset-text {\n  display: flex;\n  flex-direction: column;\n  margin-left: 10%;\n}\n\n@media (max-width: 600px) {\n  .details {\n    grid-template-rows: repeat(2, 6.5rem);\n    gap: 0.5rem;\n  }\n  #humidity p, #wind p, #pressure p, #uv p {\n    font-size: 11px;\n  }\n  #humidity img, #wind img, #pressure img, #uv img {\n    height: 3rem;\n  }\n  .main-details {\n    font-size: 12px;\n  }\n  .main-details h1 {\n    font-size: 2rem;\n  }\n  #mode {\n    font-size: 0.7rem;\n  }\n  .sections {\n    gap: 0;\n    padding: 0;\n    height: auto;\n  }\n  .section1, .section2, .section3, .section4 {\n    width: 90%;\n    margin-bottom: 5%;\n  }\n  .section3 {\n    gap: 0;\n  }\n  .section4-container {\n    padding: 0;\n  }\n  .section4-column {\n    font-size: 12px;\n    width: 25%;\n  }\n  .section-up, .section-down {\n    height: 30vh;\n  }\n  .section4 img {\n    width: 3rem;\n  }\n  #searchInput {\n    width: 61%;\n    padding: 5px 5px 5px 20px;\n  }\n  #searchButton {\n    width: 35%;\n    padding: 5px;\n  }\n  .search-container {\n    width: 55%;\n    margin: 0.5rem auto;\n  }\n  .toggle-container {\n    width: 15%;\n  }\n  .weather img {\n    height: 5rem;\n  }\n}\n@media (min-width: 601px) and (max-width: 705px) {\n  .details {\n    width: 38%;\n    grid-template-rows: repeat(2, 5rem);\n  }\n  #humidity p, #wind p, #pressure p, #uv p {\n    font-size: 10px;\n  }\n  #humidity img, #wind img, #pressure img, #uv img {\n    height: 2rem;\n  }\n  .main-details {\n    width: 40%;\n    font-size: x-small;\n  }\n  .sections {\n    gap: 0;\n    padding: 5vh 0 0;\n  }\n  .section1, .section2 {\n    font-size: 10px;\n  }\n  .section-up {\n    height: 25vh;\n    margin-bottom: 5%;\n  }\n  .section-down {\n    height: 30vh;\n    margin-bottom: 5%;\n  }\n  .section3 {\n    width: 25%;\n  }\n  .section4-container {\n    padding: 0;\n  }\n  .section4 {\n    width: 70%;\n  }\n  .section4-column {\n    font-size: small;\n    width: 15%;\n  }\n  #section3-row1, #section3-row2, #section3-row3 {\n    font-size: 12px;\n  }\n  .section4-container {\n    padding: 0;\n  }\n  .section4-column {\n    font-size: small;\n  }\n  .search-container {\n    width: 60%;\n  }\n  .weather {\n    width: 10%;\n  }\n  .weather img {\n    height: 3rem;\n  }\n}\n@media (min-width: 705px) and (max-width: 849px) {\n  .sections {\n    gap: 0;\n    padding: 0;\n  }\n  .section1 {\n    font-size: 12px;\n    width: 20%;\n  }\n  .section2 {\n    width: 70%;\n  }\n  .section-up {\n    height: 30vh;\n  }\n  #humidity p, #wind p, #pressure p, #uv p {\n    font-size: 10px;\n  }\n  #humidity img, #wind img, #pressure img, #uv img {\n    height: 3rem;\n  }\n  .weather img {\n    height: 8rem;\n  }\n  #searchInput {\n    width: 70%;\n  }\n  #searchButton {\n    width: 27%;\n  }\n  .main-details {\n    font-size: x-small;\n  }\n  .details {\n    grid-template-rows: repeat(2, 6rem);\n  }\n  .section3 {\n    width: 25%;\n  }\n  .section4-container {\n    padding: 0;\n  }\n  .section4-column {\n    font-size: small;\n  }\n  .search-container {\n    width: 60%;\n  }\n}\n@media (min-width: 850px) and (max-width: 1012px) {\n  .details {\n    grid-template-rows: repeat(2, 7rem);\n    font-size: small;\n    width: 35%;\n  }\n  #humidity p, #wind p, #pressure p, #uv p {\n    font-size: 12px;\n  }\n  #humidity img, #wind img, #pressure img, #uv img {\n    height: 3.5rem;\n  }\n  .main-details {\n    font-size: small;\n    width: 30%;\n  }\n  .sections {\n    gap: 4%;\n    padding: 0;\n  }\n  .section1, .section2 {\n    font-size: 14px;\n  }\n  .section3 {\n    width: 25%;\n  }\n  .section4-container {\n    padding: 0;\n  }\n  .section-up {\n    height: 30vh;\n  }\n  .section-down {\n    height: 30vh;\n  }\n  .weather {\n    width: 16%;\n  }\n  .weather img {\n    height: 5rem;\n  }\n}\n@media (min-width: 1013px) {\n  .main-details {\n    font-size: medium;\n  }\n  .section1 {\n    width: 25%;\n  }\n  .section2 {\n    width: 65%;\n  }\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./style.js":
/*!******************!*\
  !*** ./style.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./style.scss\");\n// style.js\nconsole.log(\"Webpack is working!\");\n\nconst apiKey = '7c5b7c16c8ec4f44a45105749243110'\nconst textMode = document.getElementsByClassName('form-check-label')[0];\nconst btnLocation = document.getElementById('btn-location');\nconst searchInput = document.getElementById('searchInput');\nconst searchButton = document.getElementById('searchButton');\nconst sections = document.getElementsByClassName('sections')[0];\n\nconst exampleModal = new bootstrap.Modal(document.getElementById('exampleModal'));\n\nconst hideModal = ()=> {\n    if (exampleModal) {\n        exampleModal.dispose(); // Повністю видаляє інстанс модального вікна\n    }\n    document.getElementsByClassName('modal')[0].style.display = 'none';\n}\n\nbtnLocation.addEventListener('click', async () => {\n    try {\n        btnLocation.classList.add('disabled');\n        exampleModal.show();\n        await getUserLocation();\n        await getWeatherByPosition();\n    } catch (error) {\n        alert('Error: ' + error);\n    }\n});\n\nlet lat, lng;\ndocument.body.classList.add('lightMode');\n\n\nconst toggleDarkMode = ()=> {\n    document.body.classList.toggle('lightMode');\n    document.body.classList.toggle('darkMode');\n\n    if (document.body.classList.contains('lightMode')) {\n        textMode.textContent = 'To Dark Mode';\n    } else {\n        textMode.textContent = 'To Light Mode';\n    }\n}\ndocument.addEventListener('DOMContentLoaded', function() {\n    const darkModeSwitch = document.getElementById('darkModeSwitch');\n    darkModeSwitch.addEventListener('change', toggleDarkMode);\n});\n\nsearchInput.addEventListener('keydown', async (e) => {\n    if (e.key === 'Enter' && searchInput.value !== '') {\n        e.preventDefault();\n        await getWeatherByCity()\n        sections.classList.remove('hidden')\n        searchInput.value = '';\n    }\n})\n\nsearchButton.addEventListener('click', async (e) => {\n    e.preventDefault();\n    await getWeatherByCity()\n    sections.classList.remove('hidden')\n    searchInput.value = '';\n})\n\nconst getUserLocation = () => new Promise((resolve, reject) => {\n    navigator.geolocation.getCurrentPosition(\n         (position) => {\n            lat = position.coords.latitude;\n            lng = position.coords.longitude;\n\n            resolve();\n        },\n         (positionError)=> {\n            reject(positionError);\n        }\n    );\n});\nconst errorMessage = ()=> {\n    alert('Wrong name of city! Try again!')\n}\nconst getWeatherByPosition = async () => {\n    const value = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${lat},${lng}&days=10&aqi=no&alerts=no`)\n    console.log(value.ok)\n    const response = await value.json()\n    console.log(response)\n    if (value.ok){\n        hideModal()\n        innerHtml(response)\n    }\n}\nconst getWeatherByCity = async () => {\n    await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchInput.value}&days=10&aqi=no&alerts=no`)\n        .then(value => value.json())\n        .then(val => innerHtml(val))\n        .catch(error => errorMessage())\n}\n\nconst createWeatherDetails = (id, iconSrc, value, label) => {\n    return `\n        <div id=\"${id}\">\n            <img src=\"${iconSrc}\" alt=\"${label}\">\n            <p style=\"font-weight: bold\">${value}</p>\n            <p>${label}</p>\n        </div>\n    `;\n}\nconst createMainDetails = (id, src, alt, secondId, label, value) => {\n    return `<div id=\"${id}\">\n        <img src=\"${src}\" alt=\"${alt}\">\n            <div id=\"${secondId}\">\n                <p style=\"font-weight: bold\">${label}</p>\n                <p>${value}</p>\n            </div>\n    </div>`\n}\nconst createForecastFor3Days = (id, src, temp, date) => {\n     return `<div id=\"${id}\">\n        <img src=\"${src}\">\n            <p>${temp}</p>\n            <p>${date}</p>\n    </div>`\n}\n\nconst innerHtml =  (value) => {\n    sections.innerHTML = `\n    <div class=\"section-up section1 container\">\n        <h1>${value.location.name}</h1>\n        <h1>${value.location.localtime.split(' ')[1]}</h1>\n        <p>${value.location.localtime.split(' ')[0].split(\"-\").reverse().join(\"-\")}</p>\n    </div>\n    <div class=\"section-up section2 container\">\n        <div class=\"main-details\">\n            <h1> ${value.current.temp_c}</h1>\n            <p> Feels like: <span style=\"font-weight: bold\">${value.current.feelslike_c}</span></p>\n            ${createMainDetails(\"sunrise\", \"images/img.png\", \"sunrise\", \"sunrise-text\", \"Sunrise\", `${value.forecast.forecastday[0].astro.sunrise}`)}\n            ${createMainDetails(\"sunset\", \"images/img_1.png\", \"sunset\", \"sunset-text\", \"Sunset\", `${value.forecast.forecastday[0].astro.sunset}`)}\n        </div>\n        <div class=\"weather\">\n            <img src=${value.current.condition.icon} alt=\"weather\">\n            <p>${value.current.condition.text}</p>\n        </div>\n        <div class=\"details\">\n            ${createWeatherDetails('humidity', 'images/img_2.png', `${value.current.humidity}%`, 'Humidity')}\n            ${createWeatherDetails('wind', 'images/img_3.png', `${value.current.wind_kph}km/h`, 'Wind Speed')}\n            ${createWeatherDetails('pressure', 'images/img_4.png', `${value.current.pressure_mb}phPa`, 'Pressure')}\n            ${createWeatherDetails('uv', 'images/img_5.png', value.current.uv, 'UV')}\n        </div>\n    </div>\n    <div class=\"section-down section3 container\">\n        <h1>3 Days Forecast</h1>\n        ${createForecastFor3Days('section3-row1', `${value.forecast.forecastday[0].day.condition.icon}`, `${value.forecast.forecastday[0].day.avgtemp_c}°C`, `${value.forecast.forecastday[0].date.split(\"-\").reverse().join('.')}`)}\n        ${createForecastFor3Days('section3-row2', `${value.forecast.forecastday[1].day.condition.icon}`, `${value.forecast.forecastday[1].day.avgtemp_c}°C`, `${value.forecast.forecastday[1].date.split(\"-\").reverse().join('.')}`)}\n        ${createForecastFor3Days('section3-row3', `${value.forecast.forecastday[2].day.condition.icon}`, `${value.forecast.forecastday[2].day.avgtemp_c}°C`, `${value.forecast.forecastday[2].date.split(\"-\").reverse().join('.')}`)}\n    </div>\n     <div class=\"section-down section4 container\">\n        <h1>Hourly Forecast</h1>\n        <div class=\"section4-container\">\n        ${createHoursForecast(value)} \n        </div>\n    </div>\n    `\n}\nconst createHoursForecast =  (value) => {\n    let dailyHours = [9, 12, 15, 18]\n    let forecastHtml = '';\n\n    dailyHours.forEach(hour => {\n        forecastHtml +=\n            `<div class=\"section4-column light\">\n                    <p>${hour}:00</p>\n                    <img src=${value.forecast.forecastday[0].hour[hour].condition.icon} alt=\"sun\">\n                        <p>${value.forecast.forecastday[0].hour[hour].temp_c}</p>\n                        <i class=\"fa-solid fa-wind\"></i>\n                        <p>${value.forecast.forecastday[0].hour[hour].wind_kph}km/h</p>\n                </div>`\n    })\n\n    let nightHours = [21, 0]\n\n    nightHours.forEach(hour => {\n        forecastHtml += `<div class=\"section4-column dark\">\n            <p>${hour}:00</p>\n            <img src=${value.forecast.forecastday[0].hour[hour].condition.icon} alt=\"sun\">\n                <p>${value.forecast.forecastday[0].hour[hour].temp_c}</p>\n                <i class=\"fa-solid fa-wind\"></i>\n                <p>${value.forecast.forecastday[0].hour[hour].wind_kph}km/h</p>\n        </div>`\n    })\n    return forecastHtml;\n}\n\n\n//# sourceURL=webpack://weather-app/./style.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./style.js");
/******/ 	
/******/ })()
;