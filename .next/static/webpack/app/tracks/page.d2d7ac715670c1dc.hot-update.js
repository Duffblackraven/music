"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tracks/page",{

/***/ "(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx":
/*!****************************************************!*\
  !*** ./src/components/CenterBlock/CenterBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CenterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SearchBar */ \"(app-pages-browser)/./src/components/SearchBar/index.tsx\");\n/* harmony import */ var _components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContentTitle */ \"(app-pages-browser)/./src/components/ContentTitle/index.tsx\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _types_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/types/hooks */ \"(app-pages-browser)/./src/types/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CenterBlock(param) {\n    let { playlistID, isFilter } = param;\n    _s();\n    const dispatcher = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n    dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_6__.setPlaylistNumber)(playlistID));\n    const ContentPlaylistWithCustomLoading = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_components_ContentPlaylist_ContentPlaylist_tsx\").then(__webpack_require__.t.bind(__webpack_require__, /*! ../ContentPlaylist/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\", 23)), {\n        loadableGenerated: {\n            modules: [\n                \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx -> \" + \"../ContentPlaylist/ContentPlaylist\"\n            ]\n        },\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlistTitleCol),\n                children: \"Загрузка...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 23,\n                columnNumber: 20\n            }, this)\n    });\n    let centerBlockTitle;\n    switch(playlistID){\n        case \"1\":\n            centerBlockTitle = \"Плейлист дня\";\n            break;\n        case \"2\":\n            centerBlockTitle = \"100 танцевальных хитов\";\n            break;\n        case \"3\":\n            centerBlockTitle = \"Инди заряд\";\n            break;\n        default:\n            centerBlockTitle = \"Треки\";\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainCenterBlock),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockH2),\n                children: centerBlockTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            isFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__.FilterBlock, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 46,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__.ContentTitle, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentPlaylistWithCustomLoading, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(CenterBlock, \"oxcldd8uK09OFAA60++g7ORnh2o=\", false, function() {\n    return [\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch\n    ];\n});\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU4QztBQUNwQjtBQUNTO0FBQ29CO0FBQ0o7QUFDTTtBQUNRO0FBQ2xCO0FBT2hDLFNBQVNRLFlBQVksS0FBeUM7UUFBekMsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQW1CLEdBQXpDOztJQUVsQyxNQUFNQyxhQUFhSiw0REFBY0E7SUFDakNJLFdBQVdMLDhFQUFpQkEsQ0FBQ0c7SUFFN0IsTUFBTUcsbUNBQW1DVix3REFBT0EsQ0FBQyxJQUFNLDhSQUE0Qzs7Ozs7O1FBQ2pHVyxTQUFTLGtCQUFNLDhEQUFDQztnQkFBRUMsV0FBV2YsaUZBQXVCOzBCQUFFOzs7Ozs7O0lBR3hELElBQUlpQjtJQUNKLE9BQVFSO1FBQ04sS0FBSztZQUNIUSxtQkFBbUI7WUFDbkI7UUFDRixLQUFLO1lBQ0hBLG1CQUFtQjtZQUNuQjtRQUNGLEtBQUs7WUFDSEEsbUJBQW1CO1lBQ25CO1FBQ0Y7WUFDRUEsbUJBQW1CO1lBQ25CO0lBQ0o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUgsV0FBV2YsZ0ZBQXNCOzswQkFDcEMsOERBQUNJLDREQUFTQTs7Ozs7MEJBQ1YsOERBQUNnQjtnQkFBR0wsV0FBV2YsOEVBQW9COzBCQUFHaUI7Ozs7OztZQUNyQ1AsMEJBQVksOERBQUNQLGdFQUFXQTs7Ozs7MEJBQ3pCLDhEQUFDZTtnQkFBSUgsV0FBV2YsbUZBQXlCOztrQ0FDdkMsOERBQUNLLGtFQUFZQTs7Ozs7a0NBQ2IsOERBQUNPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlUO0dBcEN3Qko7O1FBRUhELHdEQUFjQTs7O0tBRlhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeD8wZmY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NlbnRlckJsb2NrLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IEZpbHRlckJsb2NrIH0gZnJvbSBcIkAvY29tcG9uZW50cy9GaWx0ZXJCbG9ja1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgeyBDb250ZW50VGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRlbnRUaXRsZVwiO1xyXG5pbXBvcnQgeyBzZXRQbGF5bGlzdE51bWJlciB9IGZyb20gXCJAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvdHlwZXMvaG9va3NcIjtcclxuXHJcbnR5cGUgY2VudGVyQmxvY2tUeXBlID0ge1xyXG4gIHBsYXlsaXN0SUQ6IHN0cmluZyxcclxuICBpc0ZpbHRlcjogYm9vbGVhbixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlckJsb2NrKHsgcGxheWxpc3RJRCwgaXNGaWx0ZXIgfTogY2VudGVyQmxvY2tUeXBlKSB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGRpc3BhdGNoZXIoc2V0UGxheWxpc3ROdW1iZXIocGxheWxpc3RJRCkpO1xyXG5cclxuICBjb25zdCBDb250ZW50UGxheWxpc3RXaXRoQ3VzdG9tTG9hZGluZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdFwiKSwge1xyXG4gICAgbG9hZGluZzogKCkgPT4gPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+0JfQsNCz0YDRg9C30LrQsC4uLjwvcD4sXHJcbiAgfSlcclxuXHJcbiAgbGV0IGNlbnRlckJsb2NrVGl0bGU7XHJcbiAgc3dpdGNoIChwbGF5bGlzdElEKSB7XHJcbiAgICBjYXNlIFwiMVwiOlxyXG4gICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCLQn9C70LXQudC70LjRgdGCINC00L3Rj1wiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcIjEwMCDRgtCw0L3RhtC10LLQsNC70YzQvdGL0YUg0YXQuNGC0L7QslwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcItCY0L3QtNC4INC30LDRgNGP0LRcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCLQotGA0LXQutC4XCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNlbnRlckJsb2NrfT5cclxuICAgICAgPFNlYXJjaEJhciAvPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQmxvY2tIMn0+e2NlbnRlckJsb2NrVGl0bGV9PC9oMj5cclxuICAgICAge2lzRmlsdGVyICYmIDxGaWx0ZXJCbG9jayAvPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJCbG9ja0NvbnRlbnR9PlxyXG4gICAgICAgIDxDb250ZW50VGl0bGUgLz5cclxuICAgICAgICA8Q29udGVudFBsYXlsaXN0V2l0aEN1c3RvbUxvYWRpbmcgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwiZHluYW1pYyIsIkZpbHRlckJsb2NrIiwiU2VhcmNoQmFyIiwiQ29udGVudFRpdGxlIiwic2V0UGxheWxpc3ROdW1iZXIiLCJ1c2VBcHBEaXNwYXRjaCIsIkNlbnRlckJsb2NrIiwicGxheWxpc3RJRCIsImlzRmlsdGVyIiwiZGlzcGF0Y2hlciIsIkNvbnRlbnRQbGF5bGlzdFdpdGhDdXN0b21Mb2FkaW5nIiwibG9hZGluZyIsInAiLCJjbGFzc05hbWUiLCJwbGF5bGlzdFRpdGxlQ29sIiwiY2VudGVyQmxvY2tUaXRsZSIsImRpdiIsIm1haW5DZW50ZXJCbG9jayIsImgyIiwiY2VudGVyQmxvY2tIMiIsImNlbnRlckJsb2NrQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});