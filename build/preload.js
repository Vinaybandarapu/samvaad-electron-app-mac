/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/features/utils/openExternalLink.js":
/*!************************************************!*\
  !*** ./app/features/utils/openExternalLink.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openExternalLink\": () => (/* binding */ openExternalLink)\n/* harmony export */ });\nconst { shell } = __webpack_require__(/*! electron */ \"electron\");\r\nconst url = __webpack_require__(/*! url */ \"url\");\r\n\r\n\r\nconst protocolRegex = /^(https?|mailto):/i;\r\n\r\n/**\r\n * Opens the given link in an external browser.\r\n *\r\n * @param {string} link - The link (URL) that should be opened in the external browser.\r\n * @returns {void}\r\n */\r\nfunction openExternalLink(link) {\r\n    let u;\r\n\r\n    try {\r\n        u = url.parse(link);\r\n    } catch (e) {\r\n        return;\r\n    }\r\n\r\n    if (protocolRegex.test(u.protocol)) {\r\n        shell.openExternal(link);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://samvaad-meet-electron/./app/features/utils/openExternalLink.js?");

/***/ }),

/***/ "./app/preload/preload.js":
/*!********************************!*\
  !*** ./app/preload/preload.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { ipcRenderer } = __webpack_require__(/*! electron */ \"electron\");\r\nconst { RemoteControl,\r\n    setupScreenSharingRender,\r\n    setupAlwaysOnTopRender,\r\n    initPopupsConfigurationRender,\r\n    setupWiFiStats,\r\n    setupPowerMonitorRender\r\n} = __webpack_require__(/*! @jitsi/electron-sdk */ \"@jitsi/electron-sdk\");\r\nconst { platform } = __webpack_require__(/*! process */ \"process\");\r\nconst { openExternalLink } = __webpack_require__(/*! ../features/utils/openExternalLink */ \"./app/features/utils/openExternalLink.js\");\r\n// {#Samvaad}\r\nconst whitelistedIpcChannels = [ 'protocol-data-msg', 'renderer-ready', 'ready-to-join' ];\r\n\r\n/**\r\n * Setup the renderer process.\r\n *\r\n * @param {*} api - API object.\r\n * @param {*} options - Options for what to enable.\r\n * @returns {void}\r\n */\r\nfunction setupRenderer(api, options = {}) {\r\n    initPopupsConfigurationRender(api);\r\n\r\n    const iframe = api.getIFrame();\r\n\r\n    setupScreenSharingRender(api);\r\n\r\n    if (options.enableRemoteControl) {\r\n        new RemoteControl(iframe); // eslint-disable-line no-new\r\n    }\r\n\r\n    // Allow window to be on top if enabled in settings\r\n    if (options.enableAlwaysOnTopWindow) {\r\n        setupAlwaysOnTopRender(api, null, { showOnPrejoin: true });\r\n    }\r\n\r\n    // Disable WiFiStats on mac due to jitsi-meet-electron#585\r\n    if (platform !== 'darwin') {\r\n        setupWiFiStats(iframe);\r\n    }\r\n\r\n    setupPowerMonitorRender(api);\r\n}\r\n\r\nwindow.jitsiNodeAPI = {\r\n    openExternalLink,\r\n    setupRenderer,\r\n    ipc: {\r\n        on: (channel, listener) => {\r\n            if (!whitelistedIpcChannels.includes(channel)) {\r\n                return;\r\n            }\r\n\r\n            return ipcRenderer.on(channel, listener);\r\n        },\r\n        send: channel => {\r\n            if (!whitelistedIpcChannels.includes(channel)) {\r\n                return;\r\n            }\r\n\r\n            return ipcRenderer.send(channel);\r\n        },\r\n        removeListener: (channel, listener) => {\r\n            if (!whitelistedIpcChannels.includes(channel)) {\r\n                return;\r\n            }\r\n\r\n            return ipcRenderer.removeListener(channel, listener);\r\n        }\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://samvaad-meet-electron/./app/preload/preload.js?");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "@jitsi/electron-sdk":
/*!*************************************************!*\
  !*** external "require('@jitsi/electron-sdk')" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require('@jitsi/electron-sdk');

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/preload/preload.js");
/******/ 	
/******/ })()
;