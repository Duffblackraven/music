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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CenterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SearchBar */ \"(app-pages-browser)/./src/components/SearchBar/index.tsx\");\n/* harmony import */ var _components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContentTitle */ \"(app-pages-browser)/./src/components/ContentTitle/index.tsx\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _types_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/types/hooks */ \"(app-pages-browser)/./src/types/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CenterBlock(param) {\n    let { playlistID, isFilter } = param;\n    _s();\n    const dispatcher = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n    dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_6__.setPlaylistNumber)(playlistID));\n    const ContentPlaylistWithCustomLoading = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_components_ContentPlaylist_ContentPlaylist_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../ContentPlaylist/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\")), {\n        loadableGenerated: {\n            modules: [\n                \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx -> \" + \"../ContentPlaylist/ContentPlaylist\"\n            ]\n        },\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlistTitleCol),\n                children: \"Загрузка...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 23,\n                columnNumber: 20\n            }, this)\n    });\n    let centerBlockTitle;\n    switch(playlistID){\n        case \"1\":\n            centerBlockTitle = \"Плейлист дня\";\n            break;\n        case \"2\":\n            centerBlockTitle = \"100 танцевальных хитов\";\n            break;\n        case \"3\":\n            centerBlockTitle = \"Инди заряд\";\n            break;\n        case \"liked\":\n            centerBlockTitle = \"Мой плейлист\";\n            break;\n        default:\n            centerBlockTitle = \"Треки\";\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainCenterBlock),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockH2),\n                children: centerBlockTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            isFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__.FilterBlock, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 49,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__.ContentTitle, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentPlaylistWithCustomLoading, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(CenterBlock, \"oxcldd8uK09OFAA60++g7ORnh2o=\", false, function() {\n    return [\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch\n    ];\n});\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU4QztBQUNwQjtBQUNTO0FBQ29CO0FBQ0o7QUFDTTtBQUNRO0FBQ2xCO0FBT2hDLFNBQVNRLFlBQVksS0FBeUM7UUFBekMsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQW1CLEdBQXpDOztJQUVsQyxNQUFNQyxhQUFhSiw0REFBY0E7SUFDakNJLFdBQVdMLDhFQUFpQkEsQ0FBQ0c7SUFFN0IsTUFBTUcsbUNBQW1DVix3REFBT0EsQ0FBQyxJQUFNLHdSQUE0Qzs7Ozs7O1FBQ2pHVyxTQUFTLGtCQUFNLDhEQUFDQztnQkFBRUMsV0FBV2YsaUZBQXVCOzBCQUFFOzs7Ozs7O0lBR3hELElBQUlpQjtJQUNKLE9BQVFSO1FBQ04sS0FBSztZQUNIUSxtQkFBbUI7WUFDbkI7UUFDRixLQUFLO1lBQ0hBLG1CQUFtQjtZQUNuQjtRQUNGLEtBQUs7WUFDSEEsbUJBQW1CO1lBQ25CO1FBQ0YsS0FBSztZQUNIQSxtQkFBbUI7WUFDbkI7UUFDRjtZQUNFQSxtQkFBbUI7WUFDbkI7SUFDSjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJSCxXQUFXZixnRkFBc0I7OzBCQUNwQyw4REFBQ0ksNERBQVNBOzs7OzswQkFDViw4REFBQ2dCO2dCQUFHTCxXQUFXZiw4RUFBb0I7MEJBQUdpQjs7Ozs7O1lBQ3JDUCwwQkFBWSw4REFBQ1AsZ0VBQVdBOzs7OzswQkFDekIsOERBQUNlO2dCQUFJSCxXQUFXZixtRkFBeUI7O2tDQUN2Qyw4REFBQ0ssa0VBQVlBOzs7OztrQ0FDYiw4REFBQ087Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7R0F2Q3dCSjs7UUFFSEQsd0RBQWNBOzs7S0FGWEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2VudGVyQmxvY2svQ2VudGVyQmxvY2sudHN4PzBmZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2VudGVyQmxvY2subW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgRmlsdGVyQmxvY2sgfSBmcm9tIFwiQC9jb21wb25lbnRzL0ZpbHRlckJsb2NrXCI7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJAL2NvbXBvbmVudHMvU2VhcmNoQmFyXCI7XHJcbmltcG9ydCB7IENvbnRlbnRUaXRsZSB9IGZyb20gXCJAL2NvbXBvbmVudHMvQ29udGVudFRpdGxlXCI7XHJcbmltcG9ydCB7IHNldFBsYXlsaXN0TnVtYmVyIH0gZnJvbSBcIkAvc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiQC90eXBlcy9ob29rc1wiO1xyXG5cclxudHlwZSBjZW50ZXJCbG9ja1R5cGUgPSB7XHJcbiAgcGxheWxpc3RJRDogc3RyaW5nLFxyXG4gIGlzRmlsdGVyOiBib29sZWFuLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2VudGVyQmxvY2soeyBwbGF5bGlzdElELCBpc0ZpbHRlciB9OiBjZW50ZXJCbG9ja1R5cGUpIHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgZGlzcGF0Y2hlcihzZXRQbGF5bGlzdE51bWJlcihwbGF5bGlzdElEKSk7XHJcblxyXG4gIGNvbnN0IENvbnRlbnRQbGF5bGlzdFdpdGhDdXN0b21Mb2FkaW5nID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0XCIpLCB7XHJcbiAgICBsb2FkaW5nOiAoKSA9PiA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT7Ql9Cw0LPRgNGD0LfQutCwLi4uPC9wPixcclxuICB9KVxyXG5cclxuICBsZXQgY2VudGVyQmxvY2tUaXRsZTtcclxuICBzd2l0Y2ggKHBsYXlsaXN0SUQpIHtcclxuICAgIGNhc2UgXCIxXCI6XHJcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcItCf0LvQtdC50LvQuNGB0YIg0LTQvdGPXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIjJcIjpcclxuICAgICAgY2VudGVyQmxvY2tUaXRsZSA9IFwiMTAwINGC0LDQvdGG0LXQstCw0LvRjNC90YvRhSDRhdC40YLQvtCyXCI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSBcIjNcIjpcclxuICAgICAgY2VudGVyQmxvY2tUaXRsZSA9IFwi0JjQvdC00Lgg0LfQsNGA0Y/QtFwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCJsaWtlZFwiOlxyXG4gICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCLQnNC+0Lkg0L/Qu9C10LnQu9C40YHRglwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcItCi0YDQtdC60LhcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ2VudGVyQmxvY2t9PlxyXG4gICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJCbG9ja0gyfT57Y2VudGVyQmxvY2tUaXRsZX08L2gyPlxyXG4gICAgICB7aXNGaWx0ZXIgJiYgPEZpbHRlckJsb2NrIC8+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlckJsb2NrQ29udGVudH0+XHJcbiAgICAgICAgPENvbnRlbnRUaXRsZSAvPlxyXG4gICAgICAgIDxDb250ZW50UGxheWxpc3RXaXRoQ3VzdG9tTG9hZGluZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiUmVhY3QiLCJkeW5hbWljIiwiRmlsdGVyQmxvY2siLCJTZWFyY2hCYXIiLCJDb250ZW50VGl0bGUiLCJzZXRQbGF5bGlzdE51bWJlciIsInVzZUFwcERpc3BhdGNoIiwiQ2VudGVyQmxvY2siLCJwbGF5bGlzdElEIiwiaXNGaWx0ZXIiLCJkaXNwYXRjaGVyIiwiQ29udGVudFBsYXlsaXN0V2l0aEN1c3RvbUxvYWRpbmciLCJsb2FkaW5nIiwicCIsImNsYXNzTmFtZSIsInBsYXlsaXN0VGl0bGVDb2wiLCJjZW50ZXJCbG9ja1RpdGxlIiwiZGl2IiwibWFpbkNlbnRlckJsb2NrIiwiaDIiLCJjZW50ZXJCbG9ja0gyIiwiY2VudGVyQmxvY2tDb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});