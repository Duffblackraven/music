/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Bar/index.tsx":
/*!**************************************!*\
  !*** ./src/components/Bar/index.tsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// export { default as Bar } from \"./Bar\"\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0Jhci9pbmRleC50c3giLCJtYXBwaW5ncyI6IkFBQUEseUNBQXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jhci9pbmRleC50c3g/MWRiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHBvcnQgeyBkZWZhdWx0IGFzIEJhciB9IGZyb20gXCIuL0JhclwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Bar/index.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/Main/Main.tsx":
/*!**************************************!*\
  !*** ./src/components/Main/Main.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Main_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Main.module.css */ \"(app-pages-browser)/./src/components/Main/Main.module.css\");\n/* harmony import */ var _Main_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Main_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Nav */ \"(app-pages-browser)/./src/components/Nav/index.tsx\");\n/* harmony import */ var _components_CenterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/CenterBlock */ \"(app-pages-browser)/./src/components/CenterBlock/index.tsx\");\n/* harmony import */ var _components_MainSlideBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/MainSlideBar */ \"(app-pages-browser)/./src/components/MainSlideBar/index.tsx\");\n/* harmony import */ var _components_Bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @components/Bar */ \"(app-pages-browser)/./src/components/Bar/index.tsx\");\n/* harmony import */ var _components_Bar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_Bar__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const [track, setTrack] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_Main_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Nav__WEBPACK_IMPORTED_MODULE_2__.Nav, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CenterBlock__WEBPACK_IMPORTED_MODULE_3__.CenterBlock, {\n                        setTrack: setTrack\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MainSlideBar__WEBPACK_IMPORTED_MODULE_4__.MainSlideBar, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            track && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Bar__WEBPACK_IMPORTED_MODULE_5__.Bar, {\n                track: track\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"footer\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\Main\\\\Main.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"vPXXWODOnFyAsk1gWM3yO6UgoAM=\");\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01haW4vTWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUN1QztBQUNOO0FBQ0s7QUFDaUI7QUFDQztBQUNsQjtBQUd2QixTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFtQjtJQUNyRCxxQkFDRTs7MEJBQ0UsOERBQUNRO2dCQUFLQyxXQUFXViw4REFBVzs7a0NBQzFCLDhEQUFDRSxnREFBR0E7Ozs7O2tDQUNKLDhEQUFDQyxnRUFBV0E7d0JBQUNLLFVBQVVBOzs7Ozs7a0NBQ3ZCLDhEQUFDSixrRUFBWUE7Ozs7Ozs7Ozs7O1lBRWRHLHVCQUFTLDhEQUFDRixnREFBR0E7Z0JBQUNFLE9BQU9BOzs7Ozs7MEJBQ3RCLDhEQUFDSTtnQkFBT0QsV0FBVTs7Ozs7Ozs7QUFHeEI7R0Fid0JKO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01haW4vTWFpbi50c3g/YTEwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01haW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBOYXYgfSBmcm9tIFwiQGNvbXBvbmVudHMvTmF2XCI7XHJcbmltcG9ydCB7IENlbnRlckJsb2NrIH0gZnJvbSBcIkAvY29tcG9uZW50cy9DZW50ZXJCbG9ja1wiO1xyXG5pbXBvcnQgeyBNYWluU2xpZGVCYXIgfSBmcm9tIFwiQGNvbXBvbmVudHMvTWFpblNsaWRlQmFyXCI7XHJcbmltcG9ydCB7IEJhciB9IGZyb20gXCJAY29tcG9uZW50cy9CYXJcIjtcclxuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgY29uc3QgW3RyYWNrLCBzZXRUcmFja10gPSB1c2VTdGF0ZTx0cmFja1R5cGUgfCBudWxsPihudWxsKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgPE5hdiAvPlxyXG4gICAgICAgIDxDZW50ZXJCbG9jayBzZXRUcmFjaz17c2V0VHJhY2t9IC8+XHJcbiAgICAgICAgPE1haW5TbGlkZUJhciAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIHt0cmFjayAmJiA8QmFyIHRyYWNrPXt0cmFja30gLz59XHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+PC9mb290ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIk5hdiIsIkNlbnRlckJsb2NrIiwiTWFpblNsaWRlQmFyIiwiQmFyIiwiTWFpbiIsInRyYWNrIiwic2V0VHJhY2siLCJtYWluIiwiY2xhc3NOYW1lIiwiZm9vdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Main/Main.tsx\n"));

/***/ })

});