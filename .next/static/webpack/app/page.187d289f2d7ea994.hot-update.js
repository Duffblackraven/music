"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx":
/*!****************************************************!*\
  !*** ./src/components/FilterBlock/FilterBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FilterBlockItem/FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/FilterBlockItem.tsx\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ \"(app-pages-browser)/./src/components/FilterBlock/data.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { trackType } from \"@/types/types\";\n// type FilterBlockProps = {\n//   trackList: trackType[];\n// };\nconst FilterBlock = ()=>{\n    _s();\n    const playList = useAppSelector((state)=>state.tracks.playList);\n    const [activeFilter, setActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleFilterClick = (newFilter)=>{\n        setActiveFilter((prev)=>newFilter === prev ? null : newFilter);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_5___default().filterTitle),\n                children: \"Искать по:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"artists\"),\n                isOpened: activeFilter === \"artists\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.artists,\n                children: \"исполнителю\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"years\"),\n                isOpened: activeFilter === \"years\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.years,\n                children: \"году выпуска\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem_FilterBlockItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: ()=>handleFilterClick(\"genres\"),\n                isOpened: activeFilter === \"genres\",\n                list: _data__WEBPACK_IMPORTED_MODULE_4__.genres,\n                children: \"жанру\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"en3hVn7Y4Xe0swpYr5Ocbz1JAbo=\", true);\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFOEM7QUFDVjtBQUNIO0FBQ2dDO0FBQ2pCO0FBQ2hELDZDQUE2QztBQUU3Qyw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLEtBQUs7QUFFTCxNQUFNTyxjQUFjOztJQUVsQixNQUFNQyxXQUFXQyxlQUFlLENBQUNDLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0gsUUFBUTtJQUVoRSxNQUFNLENBQUNJLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBZ0I7SUFDaEUsTUFBTVksb0JBQW9CLENBQUNDO1FBQ3pCRixnQkFBZ0IsQ0FBQ0csT0FBU0QsY0FBY0MsT0FBTyxPQUFPRDtJQUN4RDtJQUdBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXakIsaURBQVVBLENBQUNELGtGQUF3QixFQUFFQSx1RUFBYTs7MEJBQ2hFLDhEQUFDaUI7Z0JBQUlDLFdBQVdsQiw0RUFBa0I7MEJBQUU7Ozs7OzswQkFFcEMsOERBQUNHLHdFQUFlQTtnQkFBQ21CLFNBQVMsSUFBTVIsa0JBQWtCO2dCQUFZUyxVQUFVWCxpQkFBaUI7Z0JBQVdZLE1BQU1wQiwwQ0FBT0E7MEJBQUU7Ozs7OzswQkFDbkgsOERBQUNELHdFQUFlQTtnQkFBQ21CLFNBQVMsSUFBTVIsa0JBQWtCO2dCQUFVUyxVQUFVWCxpQkFBaUI7Z0JBQVNZLE1BQU1sQix3Q0FBS0E7MEJBQUU7Ozs7OzswQkFDN0csOERBQUNILHdFQUFlQTtnQkFBQ21CLFNBQVMsSUFBTVIsa0JBQWtCO2dCQUFXUyxVQUFVWCxpQkFBaUI7Z0JBQVVZLE1BQU1uQix5Q0FBTUE7MEJBQUU7Ozs7Ozs7Ozs7OztBQUl0SDtHQXBCTUU7S0FBQUE7QUFzQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmxvY2svRmlsdGVyQmxvY2sudHN4P2I1NmMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vRmlsdGVyQmxvY2subW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgRmlsdGVyQmxvY2tJdGVtIGZyb20gXCIuLi9GaWx0ZXJCbG9ja0l0ZW0vRmlsdGVyQmxvY2tJdGVtXCI7XHJcbmltcG9ydCB7IGFydGlzdHMsIGdlbnJlcywgeWVhcnMgfSBmcm9tIFwiLi9kYXRhXCI7XHJcbi8vIGltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XHJcblxyXG4vLyB0eXBlIEZpbHRlckJsb2NrUHJvcHMgPSB7XHJcbi8vICAgdHJhY2tMaXN0OiB0cmFja1R5cGVbXTtcclxuLy8gfTtcclxuXHJcbmNvbnN0IEZpbHRlckJsb2NrID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KVxyXG5cclxuICBjb25zdCBbYWN0aXZlRmlsdGVyLCBzZXRBY3RpdmVGaWx0ZXJdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgaGFuZGxlRmlsdGVyQ2xpY2sgPSAobmV3RmlsdGVyOiBzdHJpbmcpID0+IHtcclxuICAgIHNldEFjdGl2ZUZpbHRlcigocHJldikgPT4gbmV3RmlsdGVyID09PSBwcmV2ID8gbnVsbCA6IG5ld0ZpbHRlcik7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jZW50ZXJCbG9ja0ZpbHRlciwgc3R5bGVzLmZpbHRlcil9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlclRpdGxlfT7QmNGB0LrQsNGC0Ywg0L/Qvjo8L2Rpdj5cclxuXHJcbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJhcnRpc3RzXCIpfSBpc09wZW5lZD17YWN0aXZlRmlsdGVyID09PSBcImFydGlzdHNcIn0gbGlzdD17YXJ0aXN0c30+0LjRgdC/0L7Qu9C90LjRgtC10LvRjjwvRmlsdGVyQmxvY2tJdGVtPlxyXG4gICAgICA8RmlsdGVyQmxvY2tJdGVtIG9uQ2xpY2s9eygpID0+IGhhbmRsZUZpbHRlckNsaWNrKFwieWVhcnNcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwieWVhcnNcIn0gbGlzdD17eWVhcnN9PtCz0L7QtNGDINCy0YvQv9GD0YHQutCwPC9GaWx0ZXJCbG9ja0l0ZW0+XHJcbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW0gb25DbGljaz17KCkgPT4gaGFuZGxlRmlsdGVyQ2xpY2soXCJnZW5yZXNcIil9IGlzT3BlbmVkPXthY3RpdmVGaWx0ZXIgPT09IFwiZ2VucmVzXCJ9IGxpc3Q9e2dlbnJlc30+0LbQsNC90YDRgzwvRmlsdGVyQmxvY2tJdGVtPlxyXG5cclxuICAgIDwvZGl2ID5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jazsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZVN0YXRlIiwiRmlsdGVyQmxvY2tJdGVtIiwiYXJ0aXN0cyIsImdlbnJlcyIsInllYXJzIiwiRmlsdGVyQmxvY2siLCJwbGF5TGlzdCIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJ0cmFja3MiLCJhY3RpdmVGaWx0ZXIiLCJzZXRBY3RpdmVGaWx0ZXIiLCJoYW5kbGVGaWx0ZXJDbGljayIsIm5ld0ZpbHRlciIsInByZXYiLCJkaXYiLCJjbGFzc05hbWUiLCJjZW50ZXJCbG9ja0ZpbHRlciIsImZpbHRlciIsImZpbHRlclRpdGxlIiwib25DbGljayIsImlzT3BlbmVkIiwibGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});