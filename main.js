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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/popcorn-background.jpg */ \"./src/assets/popcorn-background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Snowburst+One&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* 1. Use a more-intuitive box-sizing model */\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n*:not(dialog) {\n  margin: 0;\n}\n\n/* 3. Enable keyword animations */\n@media (prefers-reduced-motion: no-preference) {\n  html {\n    interpolate-size: allow-keywords;\n  }\n}\n\nbody {\n  /* 4. Increase line-height */\n  line-height: 1.5;\n  /* 5. Improve text rendering */\n  -webkit-font-smoothing: antialiased;\n}\n\n/* 6. Improve media defaults */\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n\n/* 7. Inherit fonts for form controls */\ninput, button, textarea, select {\n  font: inherit;\n}\n\n/* 8. Avoid text overflows */\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n\n/* 9. Improve line wrapping */\np {\n  text-wrap: pretty;\n}\nh1, h2, h3, h4, h5, h6 {\n  text-wrap: balance;\n}\n\n/*\n  10. Create a root stacking context\n*/\n#root, #__next {\n  isolation: isolate;\n}\n\n/* Project code begins */\n\nbody {\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  color: maroon;\n}\n\np {\n  max-width: 75ch;\n  font-size: 1.4rem;\n  font-family: \"Sour Gummy\", sans-serif;\n  font-weight: 250;\n}\n\nh1 {\n  font-size: 3rem;\n  font-family: \"Snowburst One\", system-ui;\n  font-weight: bold;\n  font-style: normal;\n  text-align: center;\n}\n\nh2 {\n  text-align: center;\n  font-size: 2rem;\n  font-family: \"Sour Gummy\", sans-serif;\n  font-weight: lighter;\n  font-style: italic;\n}\n\nfigure h2 {\n  font-style: normal;\n  font-weight: 500;\n}\n\n#content {\n  margin: 0 200px 0 200px;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  background-color: #FAFAFA;\n  height: 100vh;\n  overflow-y: auto;\n  width: clamp(700px, 50%, 900px);\n  align-self: center;\n}\n\n#content figure {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#content img {\n  border-radius: 10px;\n  height: auto;\n  width: 500px;\n  box-shadow: 0 2px 6px gray;\n  margin-bottom: 10px;\n}\n\n#content #home-image {\n  height: auto;\n  width: 800px;\n}\n\n#content figcaption {\n  font-style: italic;\n  text-align: center;\n  font-size: 1.1rem;\n}\n\nnav, #footer {\n  background-color: maroon;\n  height: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n}\n\nnav {\n  box-shadow: 3px 3px 10px gray;\n  height: 100px;\n}\n\n#footer {\n  color: palegoldenrod;\n  font-weight: bold;\n  font-family: \"Sour Gummy\", sans-serif;\n}\n\nnav button {\n  background-color: palegoldenrod;\n  border: 2px solid maroon;\n  border-radius: 80px;\n  height: 50px;\n  width: 90px;\n  color: maroon;\n  font-weight: bold;\n  font-size: 1.2rem;\n  font-family: \"Sour Gummy\", sans-serif;\n}\n\nnav button:hover {\n  background-color: #FAFAFA;\n  border: 1px solid #FAFAFA;\n  cursor: pointer;\n  text-decoration: underline;\n}\n\n.menu-item {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: auto;\n  margin-bottom: 25px;\n  border-bottom: 3px dotted maroon;\n  padding-bottom: 30px;\n}\n\n.menu-item figure {\n  grid-row: 1 / 3;\n  justify-self: end;\n  margin-right: 150px;\n}\n\n.menu-item-desc {\n  align-self: end;\n  margin-bottom: 30px;\n}\n\n.menu-prices p {\n  font-weight: bold;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/assets/caramel.jpg"
/*!********************************!*\
  !*** ./src/assets/caramel.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"48dc13da50bae6772f8c.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/caramel.jpg?\n}");

/***/ },

/***/ "./src/assets/cheddar.jpg"
/*!********************************!*\
  !*** ./src/assets/cheddar.jpg ***!
  \********************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b8079c7d4a2b37b30380.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/cheddar.jpg?\n}");

/***/ },

/***/ "./src/assets/classic-butter.jpg"
/*!***************************************!*\
  !*** ./src/assets/classic-butter.jpg ***!
  \***************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"5bd9e8f450863c02ecef.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/classic-butter.jpg?\n}");

/***/ },

/***/ "./src/assets/pawberry-shortcake.jpg"
/*!*******************************************!*\
  !*** ./src/assets/pawberry-shortcake.jpg ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6d0850498a06eb19ce9d.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/pawberry-shortcake.jpg?\n}");

/***/ },

/***/ "./src/assets/popcorn-background.jpg"
/*!*******************************************!*\
  !*** ./src/assets/popcorn-background.jpg ***!
  \*******************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"9b2f10460a47878f5b92.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/popcorn-background.jpg?\n}");

/***/ },

/***/ "./src/assets/popcorn-cat.jpg"
/*!************************************!*\
  !*** ./src/assets/popcorn-cat.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"6d5b1a42d9e3a2ca5fbf.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/popcorn-cat.jpg?\n}");

/***/ },

/***/ "./src/assets/shelter-cat.jpg"
/*!************************************!*\
  !*** ./src/assets/shelter-cat.jpg ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"132bd17e9de0a360149e.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/shelter-cat.jpg?\n}");

/***/ },

/***/ "./src/assets/shelter-dogs.jpg"
/*!*************************************!*\
  !*** ./src/assets/shelter-dogs.jpg ***!
  \*************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"ff6becdfe1897fce73e7.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/shelter-dogs.jpg?\n}");

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAboutPage: () => (/* binding */ createAboutPage)\n/* harmony export */ });\n/* harmony import */ var _assets_shelter_cat_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/shelter-cat.jpg */ \"./src/assets/shelter-cat.jpg\");\n/* harmony import */ var _assets_shelter_dogs_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/shelter-dogs.jpg */ \"./src/assets/shelter-dogs.jpg\");\n\n\n\nfunction createAboutPage() {\n    const container = document.querySelector(\"#content\");\n\n    // Header //\n    const pageHeader = document.createElement(\"h1\");\n    pageHeader.textContent = \"About Popcorn & Paws\"\n    container.appendChild(pageHeader);\n\n    // About text //\n    const aboutText1 = document.createElement(\"p\");\n    aboutText1.textContent = \"At Popcorn & Paws, we use only the freshest, locally-sourced ingredients to create our outstanding popcorn flavors. Founded in 2026 by Katie Grant, Popcorn & Paws creates delectable gourmet popcorn with a heartfelt cause. We partnered with Kam's Animal Shelter to donate half of our proceeds to their operations, where they rescue and care for abandoned furry friends looking for a new, comfortable life.\"\n    \n    const aboutText2 = document.createElement(\"p\");\n    aboutText2.textContent = \"At the time of writing, we are workshopping new flavors to add to our menu, so please check back in soon to see what we've come up with!\"\n\n    // Append containers and text //\n    container.appendChild(aboutText1);\n    // Figure container for cat image and caption //\n    const catImageContainer = document.createElement(\"figure\");\n    // Figure container for dog image and caption //\n    const dogImageContainer = document.createElement(\"figure\");\n    container.appendChild(catImageContainer);\n    container.appendChild(dogImageContainer);\n    container.appendChild(aboutText2);\n\n    // Cat image and image properties //\n    const shelterCatImage = document.createElement(\"img\");\n    shelterCatImage.src = _assets_shelter_cat_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    shelterCatImage.alt = \"A dark grey cat is meowing behind a crate door, hoping to get a potential adopter's attention.\"\n    shelterCatImage.height = 300; \n    catImageContainer.appendChild(shelterCatImage);\n\n    // Cat image captions //\n    const catImageCaption = document.createElement(\"figcaption\");\n    catImageCaption.textContent = 'Donny excitedly meows at a potential adopter, \"Take me home!!\" (Credit to Nothing Ahead on Pexels.com)';\n    catImageContainer.appendChild(catImageCaption);\n\n    //Dog image and image properties //\n    const shelterDogsImage = document.createElement(\"img\");\n    shelterDogsImage.src = _assets_shelter_dogs_jpg__WEBPACK_IMPORTED_MODULE_1__;\n    shelterDogsImage.alt = \"Two young pups look hopefully out of their kennel, dreaming of being adopted.\"\n    shelterDogsImage.height = 400; \n    dogImageContainer.appendChild(shelterDogsImage);\n\n    // Dog image captions //\n    const dogImageCaption = document.createElement(\"figcaption\");\n    dogImageCaption.textContent = 'Puppy sisters Peanut and Cashew give hopeful looks out their kennel at potential adopters. (Credit to Alin Luna on Pexels.com)'\n    dogImageContainer.appendChild(dogImageCaption);\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/about.js?\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_popcorn_cat_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/popcorn-cat.jpg */ \"./src/assets/popcorn-cat.jpg\");\n\n\nfunction createHomePage() {\n    const homeContainer = document.querySelector(\"#content\");\n    const heading = document.createElement(\"h1\");\n    heading.textContent = \"Popcorn & Paws\";\n    homeContainer.appendChild(heading);\n\n        // P1 & P2 //\n    const tagline = document.createElement(\"h2\");\n    tagline.textContent = \"You'll want to get your paws on our array of salty and sweet popcorns!\"\n    homeContainer.appendChild(tagline);\n\n    // Figure container for image and caption //\n    const imageContainer = document.createElement(\"figure\");\n    homeContainer.appendChild(imageContainer);\n\n    // Image and image properties //\n    const image = document.createElement(\"img\");\n    image.src = _assets_popcorn_cat_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = \"A curious calico cat investigates a spread of honey and popcorn on a sunny outdoor ledge.\"\n    image.setAttribute(\"id\", \"home-image\");\n    imageContainer.appendChild(image);\n\n    // Image caption //\n    const imageCaption = document.createElement(\"figcaption\");\n    imageCaption.textContent = \"Credit to Roman Odintsov on Pexels.com\";\n    imageContainer.appendChild(imageCaption);\n\n    // Footer//\n    const footer = document.querySelector(\"#footer\");\n    footer.textContent = \"Copyright © Popcorn & Paws 2026\";\n}\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();\n\nlet mainContainer = document.querySelector(\"#content\");\n\nconst homeButton = document.querySelector(\"#home\");\nconst menuButton = document.querySelector(\"#menu\");\nconst aboutButton = document.querySelector(\"#about\");\n\nhomeButton.addEventListener(\"click\", () => {\n    mainContainer.replaceChildren();\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.createHomePage)();\n});\n\nmenuButton.addEventListener(\"click\", () => {\n    mainContainer.replaceChildren();\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.createMenuItems)();\n});\n\naboutButton.addEventListener(\"click\", () => {\n    mainContainer.replaceChildren();\n    (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.createAboutPage)();\n})\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenuItems: () => (/* binding */ createMenuItems),\n/* harmony export */   menuContainer: () => (/* binding */ menuContainer)\n/* harmony export */ });\n/* harmony import */ var _assets_classic_butter_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/classic-butter.jpg */ \"./src/assets/classic-butter.jpg\");\n/* harmony import */ var _assets_cheddar_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/cheddar.jpg */ \"./src/assets/cheddar.jpg\");\n/* harmony import */ var _assets_caramel_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/caramel.jpg */ \"./src/assets/caramel.jpg\");\n/* harmony import */ var _assets_pawberry_shortcake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/pawberry-shortcake.jpg */ \"./src/assets/pawberry-shortcake.jpg\");\n\n\n\n\n\nconst menuContainer = document.querySelector(\"#content\");\n\nclass menuItem {\n\n    // Creates menu item objects //\n    constructor(name, image, caption, description, smallPrice, mediumPrice, largePrice) {\n        this.name = name;\n        this.image = image;\n        this.caption = caption;\n        this.description = description;\n        this.sizeSmall = `Small: $${smallPrice}`;\n        this.sizeMedium = `Medium: $${mediumPrice}`;\n        this.sizeLarge = `Large: $${largePrice}`;\n    }\n\n    // Creates the container div, image container (which lets use use figure caption), and menu item container)\n    createDivContainer() {\n        this.menuItemContainer = document.createElement(\"div\");\n        this.menuItemContainer.classList.add(\"menu-item\");\n        this.menuImageContainer = document.createElement(\"figure\");\n        this.menuImageContainer.classList.add(\"image-container\");\n        this.menuItemPrices = document.createElement(\"div\");\n        this.menuItemPrices.classList.add(\"menu-prices\");\n    }\n\n    createContainerItems() {\n        this.menuItemHeader = document.createElement(\"h2\");\n        this.menuItemHeader.textContent = this.name;\n\n        this.menuItemImg = document.createElement(\"img\");\n        this.menuItemImg.src = this.image;\n        this.menuItemImg.style.width = \"250px\";\n\n        this.menuImageCaption = document.createElement(\"figcaption\");\n        this.menuImageCaption.textContent = this.caption;\n\n        this.menuItemDescription = document.createElement(\"p\");\n        this.menuItemDescription.textContent = this.description;\n        this.menuItemDescription.classList.add(\"menu-item-desc\");\n\n        this.sizeSmallPrice = document.createElement(\"p\");\n        this.sizeSmallPrice.textContent = this.sizeSmall;\n        this.sizeMediumPrice = document.createElement(\"p\");\n        this.sizeMediumPrice.textContent = this.sizeMedium;\n        this.sizeLargePrice = document.createElement(\"p\");\n        this.sizeLargePrice.textContent = this.sizeLarge;\n    }\n\n    appendDivs() {\n        menuContainer.appendChild(this.menuItemContainer);\n        this.menuItemContainer.appendChild(this.menuImageContainer);\n        this.menuImageContainer.appendChild(this.menuItemHeader);\n        this.menuImageContainer.appendChild(this.menuItemImg);\n        this.menuImageContainer.appendChild(this.menuImageCaption);\n        this.menuItemContainer.appendChild(this.menuItemDescription);\n        this.menuItemContainer.appendChild(this.menuItemPrices);\n        this.menuItemPrices.appendChild(this.sizeSmallPrice);\n        this.menuItemPrices.appendChild(this.sizeMediumPrice);\n        this.menuItemPrices.appendChild(this.sizeLargePrice);\n    }\n}\n\n//Creates menu items from class & class methods //\nfunction createMenuItems() {\n\n    const menuHeader = document.createElement(\"h1\");\n    menuHeader.textContent = \"Our Menu\";\n    menuContainer.appendChild(menuHeader);\n    \n    const classicButter = new menuItem(\"Classic Butter\", _assets_classic_butter_jpg__WEBPACK_IMPORTED_MODULE_0__, \"Credit to Shameel Mukkath on Pexels.com\", \"A fan favorite! Enjoy a timeless flavor loved by all.\", 6.99, 10.99, 15.99);\n    classicButter.createDivContainer();\n    classicButter.createContainerItems();\n    classicButter.appendDivs();\n\n    const cheddar = new menuItem(\"Cheddar\", _assets_cheddar_jpg__WEBPACK_IMPORTED_MODULE_1__, \"Credit to Terrance Barksdale on Pexels.com\", \"Every bite is a blast of cheesy goodness. Grab a bag today!\", 6.99, 10.99, 15.99);\n    cheddar.createDivContainer();\n    cheddar.createContainerItems();\n    cheddar.appendDivs();\n\n    const caramel = new menuItem(\"Caramel Corn\", _assets_caramel_jpg__WEBPACK_IMPORTED_MODULE_2__, \"Credit to Mikhail Nilov on Pexels.com\", \"Look no further for a sweet and crunchy snack crafted with love!\", 7.99, 11.99, 16.99);\n    caramel.createDivContainer();\n    caramel.createContainerItems();\n    caramel.appendDivs();\n\n    const pawberryShortcake = new menuItem(\"Pawberry Shortcake\", _assets_pawberry_shortcake_jpg__WEBPACK_IMPORTED_MODULE_3__, \"Credit to Mustafa Akin from Pexels.com\", \"Enjoy a fruity explosion with every bite of our Pawberry Shortcake! Strawberry and cream-coated popcorn pieces collide in this tasty, sweet treat!\", 7.99, 11.99, 16.99);\n    pawberryShortcake.createDivContainer();\n    pawberryShortcake.createContainerItems();\n    pawberryShortcake.appendDivs();\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;