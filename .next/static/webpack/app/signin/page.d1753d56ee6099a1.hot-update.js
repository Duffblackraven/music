"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./src/types/hooks.ts":
/*!****************************!*\
  !*** ./src/types/hooks.ts ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAppDispatch: function() { return /* binding */ useAppDispatch; },\n/* harmony export */   useAppSelector: function() { return /* binding */ useAppSelector; },\n/* harmony export */   useAppStore: function() { return /* binding */ useAppStore; }\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\nconst useAppStore = react_redux__WEBPACK_IMPORTED_MODULE_0__.useStore;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy90eXBlcy9ob29rcy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVGO0FBR2hGLE1BQU1HLGlCQUFvQ0gsb0RBQVdBLENBQUM7QUFDdEQsTUFBTUksaUJBQWtESCxvREFBV0EsQ0FBQztBQUNwRSxNQUFNSSxjQUE2QkgsaURBQVFBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3R5cGVzL2hvb2tzLnRzPzM2NGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZWRVc2VTZWxlY3Rvckhvb2ssIHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciwgdXNlU3RvcmUgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2g6ICgpID0+IEFwcERpc3BhdGNoID0gdXNlRGlzcGF0Y2g7XHJcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yO1xyXG5leHBvcnQgY29uc3QgdXNlQXBwU3RvcmU6ICgpID0+IEFwcFN0b3IgPSB1c2VTdG9yZTsiXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZVN0b3JlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsInVzZUFwcFN0b3JlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/types/hooks.ts\n"));

/***/ })

});