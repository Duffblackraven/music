"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/myplaylist/page",{

/***/ "(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx":
/*!****************************************************!*\
  !*** ./src/components/CenterBlock/CenterBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CenterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/SearchBar */ \"(app-pages-browser)/./src/components/SearchBar/index.tsx\");\n/* harmony import */ var _components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ContentTitle */ \"(app-pages-browser)/./src/components/ContentTitle/index.tsx\");\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _types_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/types/hooks */ \"(app-pages-browser)/./src/types/hooks.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction CenterBlock(param) {\n    let { playlistID, isFilter } = param;\n    _s();\n    const dispatcher = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n    dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_6__.setPlaylistNumber)(playlistID));\n    const ContentPlaylistWithCustomLoading = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_components_ContentPlaylist_ContentPlaylist_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ../ContentPlaylist/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\")), {\n        loadableGenerated: {\n            modules: [\n                \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx -> \" + \"../ContentPlaylist/ContentPlaylist\"\n            ]\n        },\n        loading: ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().playlistTitleCol),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 23,\n                columnNumber: 20\n            }, this)\n    });\n    let centerBlockTitle;\n    switch(playlistID){\n        case \"1\":\n            centerBlockTitle = \"Плейлист дня\";\n            break;\n        case \"2\":\n            centerBlockTitle = \"100 танцевальных хитов\";\n            break;\n        case \"3\":\n            centerBlockTitle = \"Инди заряд\";\n            break;\n        case \"liked\":\n            centerBlockTitle = \"My Playlist\";\n            break;\n        default:\n            centerBlockTitle = \"Tracks\";\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().mainCenterBlock),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SearchBar__WEBPACK_IMPORTED_MODULE_4__.SearchBar, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockH2),\n                children: centerBlockTitle\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            isFilter && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__.FilterBlock, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 49,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_8___default().centerBlockContent),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentTitle__WEBPACK_IMPORTED_MODULE_5__.ContentTitle, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContentPlaylistWithCustomLoading, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n} // \"use client\"\n // import styles from \"./CenterBlock.module.css\";\n // import React from \"react\";\n // import dynamic from \"next/dynamic\";\n // import { FilterBlock } from \"@/components/FilterBlock\";\n // import { SearchBar } from \"@/components/SearchBar\";\n // import { ContentTitle } from \"@/components/ContentTitle\";\n // import { setPlaylistNumber } from \"@/store/features/tracksSlice\";\n // import { useAppDispatch } from \"@/types/hooks\";\n // type centerBlockType = {\n //   playlistID: string,\n //   isFilter: boolean,\n // };\n // export default function CenterBlock({ playlistID, isFilter }: centerBlockType) {\n //   const dispatcher = useAppDispatch();\n //   dispatcher(setPlaylistNumber(playlistID));\n //   const ContentPlaylistWithCustomLoading = dynamic(() => import(\"../ContentPlaylist/ContentPlaylist\"), {\n //     loading: () => <p className={styles.playlistTitleCol}>Загрузка...</p>,\n //   })\n //   let centerBlockTitle;\n //   switch (playlistID) {\n //     case \"1\":\n //       centerBlockTitle = \"Плейлист дня\";\n //       break;\n //     case \"2\":\n //       centerBlockTitle = \"100 танцевальных хитов\";\n //       break;\n //     case \"3\":\n //       centerBlockTitle = \"Инди заряд\";\n //       break;\n //     default:\n //       centerBlockTitle = \"Треки\";\n //       break;\n //   }\n //   return (\n //     <div className={styles.mainCenterBlock}>\n //       <SearchBar />\n //       <h2 className={styles.centerBlockH2}>{centerBlockTitle}</h2>\n //       {isFilter && <FilterBlock />}\n //       <div className={styles.centerBlockContent}>\n //         <ContentTitle />\n //         <ContentPlaylistWithCustomLoading />\n //       </div>\n //     </div>\n //   );\n // }\n_s(CenterBlock, \"oxcldd8uK09OFAA60++g7ORnh2o=\", false, function() {\n    return [\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch\n    ];\n});\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUU4QztBQUNwQjtBQUNTO0FBQ29CO0FBQ0o7QUFDTTtBQUNRO0FBQ2xCO0FBT2hDLFNBQVNRLFlBQVksS0FBeUM7UUFBekMsRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQW1CLEdBQXpDOztJQUVsQyxNQUFNQyxhQUFhSiw0REFBY0E7SUFDakNJLFdBQVdMLDhFQUFpQkEsQ0FBQ0c7SUFFN0IsTUFBTUcsbUNBQW1DVix3REFBT0EsQ0FBQyxJQUFNLHdSQUE0Qzs7Ozs7O1FBQ2pHVyxTQUFTLGtCQUFNLDhEQUFDQztnQkFBRUMsV0FBV2YsaUZBQXVCOzBCQUFFOzs7Ozs7O0lBR3hELElBQUlpQjtJQUNKLE9BQVFSO1FBQ04sS0FBSztZQUNIUSxtQkFBbUI7WUFDbkI7UUFDRixLQUFLO1lBQ0hBLG1CQUFtQjtZQUNuQjtRQUNGLEtBQUs7WUFDSEEsbUJBQW1CO1lBQ25CO1FBQ0YsS0FBSztZQUNIQSxtQkFBbUI7WUFDbkI7UUFDRjtZQUNFQSxtQkFBbUI7WUFDbkI7SUFDSjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJSCxXQUFXZixnRkFBc0I7OzBCQUNwQyw4REFBQ0ksNERBQVNBOzs7OzswQkFDViw4REFBQ2dCO2dCQUFHTCxXQUFXZiw4RUFBb0I7MEJBQUdpQjs7Ozs7O1lBQ3JDUCwwQkFBWSw4REFBQ1AsZ0VBQVdBOzs7OzswQkFDekIsOERBQUNlO2dCQUFJSCxXQUFXZixtRkFBeUI7O2tDQUN2Qyw4REFBQ0ssa0VBQVlBOzs7OztrQ0FDYiw4REFBQ087Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVQsRUFFQSxlQUFlO0NBRWYsaURBQWlEO0NBQ2pELDZCQUE2QjtDQUM3QixzQ0FBc0M7Q0FDdEMsMERBQTBEO0NBQzFELHNEQUFzRDtDQUN0RCw0REFBNEQ7Q0FDNUQsb0VBQW9FO0NBQ3BFLGtEQUFrRDtDQUVsRCwyQkFBMkI7Q0FDM0Isd0JBQXdCO0NBQ3hCLHVCQUF1QjtDQUN2QixLQUFLO0NBRUwsbUZBQW1GO0NBRW5GLHlDQUF5QztDQUN6QywrQ0FBK0M7Q0FFL0MsMkdBQTJHO0NBQzNHLDZFQUE2RTtDQUM3RSxPQUFPO0NBRVAsMEJBQTBCO0NBQzFCLDBCQUEwQjtDQUMxQixnQkFBZ0I7Q0FDaEIsMkNBQTJDO0NBQzNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIscURBQXFEO0NBQ3JELGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIseUNBQXlDO0NBQ3pDLGVBQWU7Q0FDZixlQUFlO0NBQ2Ysb0NBQW9DO0NBQ3BDLGVBQWU7Q0FDZixNQUFNO0NBRU4sYUFBYTtDQUNiLCtDQUErQztDQUMvQyxzQkFBc0I7Q0FDdEIscUVBQXFFO0NBQ3JFLHNDQUFzQztDQUN0QyxvREFBb0Q7Q0FDcEQsMkJBQTJCO0NBQzNCLCtDQUErQztDQUMvQyxlQUFlO0NBQ2YsYUFBYTtDQUNiLE9BQU87Q0FDUCxJQUFJO0dBN0ZvQko7O1FBRUhELHdEQUFjQTs7O0tBRlhDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeD8wZmY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NlbnRlckJsb2NrLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbmltcG9ydCB7IEZpbHRlckJsb2NrIH0gZnJvbSBcIkAvY29tcG9uZW50cy9GaWx0ZXJCbG9ja1wiO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgeyBDb250ZW50VGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRlbnRUaXRsZVwiO1xyXG5pbXBvcnQgeyBzZXRQbGF5bGlzdE51bWJlciB9IGZyb20gXCJAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvdHlwZXMvaG9va3NcIjtcclxuXHJcbnR5cGUgY2VudGVyQmxvY2tUeXBlID0ge1xyXG4gIHBsYXlsaXN0SUQ6IHN0cmluZyxcclxuICBpc0ZpbHRlcjogYm9vbGVhbixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlckJsb2NrKHsgcGxheWxpc3RJRCwgaXNGaWx0ZXIgfTogY2VudGVyQmxvY2tUeXBlKSB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGRpc3BhdGNoZXIoc2V0UGxheWxpc3ROdW1iZXIocGxheWxpc3RJRCkpO1xyXG5cclxuICBjb25zdCBDb250ZW50UGxheWxpc3RXaXRoQ3VzdG9tTG9hZGluZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdFwiKSwge1xyXG4gICAgbG9hZGluZzogKCkgPT4gPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+TG9hZGluZy4uLjwvcD4sXHJcbiAgfSlcclxuXHJcbiAgbGV0IGNlbnRlckJsb2NrVGl0bGU7XHJcbiAgc3dpdGNoIChwbGF5bGlzdElEKSB7XHJcbiAgICBjYXNlIFwiMVwiOlxyXG4gICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCLQn9C70LXQudC70LjRgdGCINC00L3Rj1wiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcIjEwMCDRgtCw0L3RhtC10LLQsNC70YzQvdGL0YUg0YXQuNGC0L7QslwiO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgXCIzXCI6XHJcbiAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcItCY0L3QtNC4INC30LDRgNGP0LRcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlIFwibGlrZWRcIjpcclxuICAgICAgY2VudGVyQmxvY2tUaXRsZSA9IFwiTXkgUGxheWxpc3RcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCJUcmFja3NcIjtcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWluQ2VudGVyQmxvY2t9PlxyXG4gICAgICA8U2VhcmNoQmFyIC8+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJCbG9ja0gyfT57Y2VudGVyQmxvY2tUaXRsZX08L2gyPlxyXG4gICAgICB7aXNGaWx0ZXIgJiYgPEZpbHRlckJsb2NrIC8+fVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlckJsb2NrQ29udGVudH0+XHJcbiAgICAgICAgPENvbnRlbnRUaXRsZSAvPlxyXG4gICAgICAgIDxDb250ZW50UGxheWxpc3RXaXRoQ3VzdG9tTG9hZGluZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIFwidXNlIGNsaWVudFwiXHJcblxyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NlbnRlckJsb2NrLm1vZHVsZS5jc3NcIjtcclxuLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcbi8vIGltcG9ydCB7IEZpbHRlckJsb2NrIH0gZnJvbSBcIkAvY29tcG9uZW50cy9GaWx0ZXJCbG9ja1wiO1xyXG4vLyBpbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG4vLyBpbXBvcnQgeyBDb250ZW50VGl0bGUgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NvbnRlbnRUaXRsZVwiO1xyXG4vLyBpbXBvcnQgeyBzZXRQbGF5bGlzdE51bWJlciB9IGZyb20gXCJAL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlXCI7XHJcbi8vIGltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSBcIkAvdHlwZXMvaG9va3NcIjtcclxuXHJcbi8vIHR5cGUgY2VudGVyQmxvY2tUeXBlID0ge1xyXG4vLyAgIHBsYXlsaXN0SUQ6IHN0cmluZyxcclxuLy8gICBpc0ZpbHRlcjogYm9vbGVhbixcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlckJsb2NrKHsgcGxheWxpc3RJRCwgaXNGaWx0ZXIgfTogY2VudGVyQmxvY2tUeXBlKSB7XHJcblxyXG4vLyAgIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4vLyAgIGRpc3BhdGNoZXIoc2V0UGxheWxpc3ROdW1iZXIocGxheWxpc3RJRCkpO1xyXG5cclxuLy8gICBjb25zdCBDb250ZW50UGxheWxpc3RXaXRoQ3VzdG9tTG9hZGluZyA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi4vQ29udGVudFBsYXlsaXN0L0NvbnRlbnRQbGF5bGlzdFwiKSwge1xyXG4vLyAgICAgbG9hZGluZzogKCkgPT4gPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+0JfQsNCz0YDRg9C30LrQsC4uLjwvcD4sXHJcbi8vICAgfSlcclxuXHJcbi8vICAgbGV0IGNlbnRlckJsb2NrVGl0bGU7XHJcbi8vICAgc3dpdGNoIChwbGF5bGlzdElEKSB7XHJcbi8vICAgICBjYXNlIFwiMVwiOlxyXG4vLyAgICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCLQn9C70LXQudC70LjRgdGCINC00L3Rj1wiO1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgXCIyXCI6XHJcbi8vICAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcIjEwMCDRgtCw0L3RhtC10LLQsNC70YzQvdGL0YUg0YXQuNGC0L7QslwiO1xyXG4vLyAgICAgICBicmVhaztcclxuLy8gICAgIGNhc2UgXCIzXCI6XHJcbi8vICAgICAgIGNlbnRlckJsb2NrVGl0bGUgPSBcItCY0L3QtNC4INC30LDRgNGP0LRcIjtcclxuLy8gICAgICAgYnJlYWs7XHJcbi8vICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICBjZW50ZXJCbG9ja1RpdGxlID0gXCLQotGA0LXQutC4XCI7XHJcbi8vICAgICAgIGJyZWFrO1xyXG4vLyAgIH1cclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbkNlbnRlckJsb2NrfT5cclxuLy8gICAgICAgPFNlYXJjaEJhciAvPlxyXG4vLyAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2VudGVyQmxvY2tIMn0+e2NlbnRlckJsb2NrVGl0bGV9PC9oMj5cclxuLy8gICAgICAge2lzRmlsdGVyICYmIDxGaWx0ZXJCbG9jayAvPn1cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJCbG9ja0NvbnRlbnR9PlxyXG4vLyAgICAgICAgIDxDb250ZW50VGl0bGUgLz5cclxuLy8gICAgICAgICA8Q29udGVudFBsYXlsaXN0V2l0aEN1c3RvbUxvYWRpbmcgLz5cclxuLy8gICAgICAgPC9kaXY+XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9Il0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwiZHluYW1pYyIsIkZpbHRlckJsb2NrIiwiU2VhcmNoQmFyIiwiQ29udGVudFRpdGxlIiwic2V0UGxheWxpc3ROdW1iZXIiLCJ1c2VBcHBEaXNwYXRjaCIsIkNlbnRlckJsb2NrIiwicGxheWxpc3RJRCIsImlzRmlsdGVyIiwiZGlzcGF0Y2hlciIsIkNvbnRlbnRQbGF5bGlzdFdpdGhDdXN0b21Mb2FkaW5nIiwibG9hZGluZyIsInAiLCJjbGFzc05hbWUiLCJwbGF5bGlzdFRpdGxlQ29sIiwiY2VudGVyQmxvY2tUaXRsZSIsImRpdiIsIm1haW5DZW50ZXJCbG9jayIsImgyIiwiY2VudGVyQmxvY2tIMiIsImNlbnRlckJsb2NrQ29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});