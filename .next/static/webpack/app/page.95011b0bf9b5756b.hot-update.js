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

/***/ "(app-pages-browser)/./src/components/BarVolume/BarVolume.tsx":
/*!************************************************!*\
  !*** ./src/components/BarVolume/BarVolume.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BarVolume; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BarVolume.module.css */ \"(app-pages-browser)/./src/components/BarVolume/BarVolume.module.css\");\n/* harmony import */ var _BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction BarVolume(param) {\n    let { handleVolume } = param;\n    _s();\n    const [volume, setVolume] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const onChange = (e)=>{\n        let newVolume = e.target.value;\n        setVolume(newVolume);\n        handleVolume(+newVolume);\n    };\n    for (let e of document.querySelectorAll('input[type=\"range\"].slider-progress')){\n        e.style.setProperty(\"--value\", e.value);\n        e.style.setProperty(\"--min\", e.min == \"\" ? \"0\" : e.min);\n        e.style.setProperty(\"--max\", e.max == \"\" ? \"100\" : e.max);\n        e.addEventListener(\"input\", ()=>e.style.setProperty(\"--value\", e.value));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().barVolume), (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volume)),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeImage),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeSvg),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                            href: \"/img/icon/sprite.svg#icon-volume\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeProgress),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().volumeProgressLine), (_BarVolume_module_css__WEBPACK_IMPORTED_MODULE_3___default().sliderProgress)),\n                        type: \"range\",\n                        name: \"range\",\n                        min: 0,\n                        value: volume,\n                        max: 100,\n                        onChange: onChange,\n                        step: 1\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\BarVolume\\\\BarVolume.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(BarVolume, \"p306ilFFF9pN4cYlXegW+5jSiws=\");\n_c = BarVolume;\nvar _c;\n$RefreshReg$(_c, \"BarVolume\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JhclZvbHVtZS9CYXJWb2x1bWUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNEM7QUFDUjtBQUNIO0FBTWxCLFNBQVNHLFVBQVUsS0FBZ0M7UUFBaEMsRUFBRUMsWUFBWSxFQUFrQixHQUFoQzs7SUFFaEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1LLFdBQVcsQ0FBQ0M7UUFDaEIsSUFBSUMsWUFBWUQsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1FBQzlCTCxVQUFVRztRQUNWTCxhQUFhLENBQUNLO0lBQ2hCO0lBQ0EsS0FBSyxJQUFJRCxLQUFLSSxTQUFTQyxnQkFBZ0IsQ0FBQyx1Q0FBd0M7UUFDOUVMLEVBQUVNLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLFdBQVdQLEVBQUVHLEtBQUs7UUFDdENILEVBQUVNLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLFNBQVNQLEVBQUVRLEdBQUcsSUFBSSxLQUFLLE1BQU1SLEVBQUVRLEdBQUc7UUFDdERSLEVBQUVNLEtBQUssQ0FBQ0MsV0FBVyxDQUFDLFNBQVNQLEVBQUVTLEdBQUcsSUFBSSxLQUFLLFFBQVFULEVBQUVTLEdBQUc7UUFDeERULEVBQUVVLGdCQUFnQixDQUFDLFNBQVMsSUFBTVYsRUFBRU0sS0FBSyxDQUFDQyxXQUFXLENBQUMsV0FBV1AsRUFBRUcsS0FBSztJQUMxRTtJQUVBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFXbkIsaURBQVVBLENBQUNELHdFQUFnQixFQUFFQSxxRUFBYTtrQkFDeEQsNEVBQUNtQjtZQUFJQyxXQUFXcEIsNEVBQW9COzs4QkFDbEMsOERBQUNtQjtvQkFBSUMsV0FBV3BCLDBFQUFrQjs4QkFDaEMsNEVBQUN3Qjt3QkFBSUosV0FBV3BCLHdFQUFnQjtrQ0FDOUIsNEVBQUMwQjs0QkFBSUMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ1I7b0JBQUlDLFdBQVdwQiw2RUFBcUI7OEJBQ25DLDRFQUFDNkI7d0JBQ0NULFdBQVduQixpREFBVUEsQ0FBQ0QsaUZBQXlCLEVBQUVBLDZFQUFxQjt3QkFDdEVnQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMakIsS0FBSzt3QkFDTEwsT0FBT047d0JBQ1BZLEtBQUs7d0JBQ0xWLFVBQVVBO3dCQUNWMkIsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtHQXRDd0IvQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CYXJWb2x1bWUvQmFyVm9sdW1lLnRzeD81ZDgzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQmFyVm9sdW1lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgQmFyVm9sdW1lUHJvcHMgPSB7XHJcbiAgaGFuZGxlVm9sdW1lOiBhbnk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXJWb2x1bWUoeyBoYW5kbGVWb2x1bWUgfTogQmFyVm9sdW1lUHJvcHMpIHtcclxuXHJcbiAgY29uc3QgW3ZvbHVtZSwgc2V0Vm9sdW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG9uQ2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgbGV0IG5ld1ZvbHVtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0Vm9sdW1lKG5ld1ZvbHVtZSk7XHJcbiAgICBoYW5kbGVWb2x1bWUoK25ld1ZvbHVtZSlcclxuICB9O1xyXG4gIGZvciAobGV0IGUgb2YgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cInJhbmdlXCJdLnNsaWRlci1wcm9ncmVzcycpKSB7XHJcbiAgICBlLnN0eWxlLnNldFByb3BlcnR5KCctLXZhbHVlJywgZS52YWx1ZSk7XHJcbiAgICBlLnN0eWxlLnNldFByb3BlcnR5KCctLW1pbicsIGUubWluID09ICcnID8gJzAnIDogZS5taW4pO1xyXG4gICAgZS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1tYXgnLCBlLm1heCA9PSAnJyA/ICcxMDAnIDogZS5tYXgpO1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IGUuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFsdWUnLCBlLnZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmJhclZvbHVtZSwgc3R5bGVzLnZvbHVtZSl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZvbHVtZUNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudm9sdW1lSW1hZ2V9PlxyXG4gICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy52b2x1bWVTdmd9PlxyXG4gICAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLXZvbHVtZVwiPjwvdXNlPlxyXG4gICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52b2x1bWVQcm9ncmVzc30+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy52b2x1bWVQcm9ncmVzc0xpbmUsIHN0eWxlcy5zbGlkZXJQcm9ncmVzcyl9XHJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJyYW5nZVwiXHJcbiAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgdmFsdWU9e3ZvbHVtZX1cclxuICAgICAgICAgICAgbWF4PXsxMDB9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgc3RlcD17MX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsInVzZVN0YXRlIiwiQmFyVm9sdW1lIiwiaGFuZGxlVm9sdW1lIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwib25DaGFuZ2UiLCJlIiwibmV3Vm9sdW1lIiwidGFyZ2V0IiwidmFsdWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzdHlsZSIsInNldFByb3BlcnR5IiwibWluIiwibWF4IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImJhclZvbHVtZSIsInZvbHVtZUNvbnRlbnQiLCJ2b2x1bWVJbWFnZSIsInN2ZyIsInZvbHVtZVN2ZyIsInVzZSIsImhyZWYiLCJ2b2x1bWVQcm9ncmVzcyIsImlucHV0Iiwidm9sdW1lUHJvZ3Jlc3NMaW5lIiwic2xpZGVyUHJvZ3Jlc3MiLCJ0eXBlIiwibmFtZSIsInN0ZXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BarVolume/BarVolume.tsx\n"));

/***/ })

});