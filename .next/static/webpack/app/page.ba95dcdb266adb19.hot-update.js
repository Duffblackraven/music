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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FilterBlock.module.css */ \"(app-pages-browser)/./src/components/FilterBlock/FilterBlock.module.css\");\n/* harmony import */ var _FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _lib_getUniqueValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/getUniqueValues */ \"(app-pages-browser)/./src/lib/getUniqueValues.ts\");\n/* harmony import */ var _types_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/types/hooks */ \"(app-pages-browser)/./src/types/hooks.ts\");\n/* harmony import */ var _FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FilterBlockItem */ \"(app-pages-browser)/./src/components/FilterBlockItem/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst FilterBlock = ()=>{\n    _s();\n    const dispatcher = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch)();\n    const playList = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.tracks.playList);\n    const selectedAuthors = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.tracks.activeFilters.authors);\n    const selectedGenres = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)((state)=>state.tracks.activeFilters.genres);\n    const [localActiveFilter, setLocalActiveFilter] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const sortByYearValues = [\n        \"По умолчанию\",\n        \"сначала новые\",\n        \"сначала старые\"\n    ];\n    const toggleReleaseYearFilter = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((option)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setActiveFilter)({\n            release_dates: option\n        }));\n    }, [\n        dispatcher\n    ]);\n    const toggleSelectedAuthors = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((author)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setActiveFilter)({\n            authors: selectedAuthors.includes(author) ? selectedAuthors.filter((item)=>item !== author) : [\n                ...selectedAuthors,\n                author\n            ]\n        }));\n    }, [\n        dispatcher,\n        selectedAuthors\n    ]);\n    const toggleSelectedGenres = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((genre)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setActiveFilter)({\n            genres: selectedGenres.includes(genre) ? selectedGenres.filter((item)=>item !== genre) : [\n                ...selectedGenres,\n                genre\n            ]\n        }));\n    }, [\n        dispatcher,\n        selectedGenres\n    ]);\n    const discardFilters = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.clearActiveFilters)());\n    }, [\n        dispatcher\n    ]);\n    const memoizedGetUniqueValues = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        if (localActiveFilter) {\n            return (0,_lib_getUniqueValues__WEBPACK_IMPORTED_MODULE_4__.getUniqueValues)(playList, localActiveFilter);\n        }\n        return [];\n    }, [\n        localActiveFilter,\n        playList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().centerBlockFilter), (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().filter)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_FilterBlock_module_css__WEBPACK_IMPORTED_MODULE_7___default().filterTitle),\n                children: \"Искать по:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__.FilterBlockItem, {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"author\" ? null : \"author\"),\n                isOpened: localActiveFilter === \"author\",\n                list: memoizedGetUniqueValues,\n                selectedOptions: selectedAuthors,\n                toggleSelectedOption: toggleSelectedAuthors,\n                children: \"исполнителю\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__.FilterBlockItem, {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"release_date\" ? null : \"release_date\"),\n                isOpened: localActiveFilter === \"release_date\",\n                list: sortByYearValues,\n                selectedOptions: [],\n                toggleSelectedOption: toggleReleaseYearFilter,\n                children: \"году выпуска\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FilterBlockItem__WEBPACK_IMPORTED_MODULE_6__.FilterBlockItem, {\n                onClick: ()=>setLocalActiveFilter(localActiveFilter === \"genre\" ? null : \"genre\"),\n                isOpened: localActiveFilter === \"genre\",\n                list: memoizedGetUniqueValues,\n                selectedOptions: selectedGenres,\n                toggleSelectedOption: toggleSelectedGenres,\n                children: \"жанру\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\music_skypro\\\\music\\\\src\\\\components\\\\FilterBlock\\\\FilterBlock.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(FilterBlock, \"ba9hl4OhBaem+61WZnPp1m0UDd4=\", false, function() {\n    return [\n        _types_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppDispatch,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = FilterBlock;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterBlock);\nvar _c;\n$RefreshReg$(_c, \"FilterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVvQztBQUNVO0FBQ2dCO0FBRXFCO0FBQzNCO0FBQ087QUFDVjtBQUVyRCxNQUFNWSxjQUFjOztJQUNsQixNQUFNQyxhQUFhSiw0REFBY0E7SUFDakMsTUFBTUssV0FBV0osNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUMsTUFBTSxDQUFDRixRQUFRO0lBQ2hFLE1BQU1HLGtCQUFrQlAsNERBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUMsTUFBTSxDQUFDRSxhQUFhLENBQUNDLE9BQU87SUFDcEYsTUFBTUMsaUJBQWlCViw0REFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGFBQWEsQ0FBQ0csTUFBTTtJQUNsRixNQUFNLENBQUNDLG1CQUFtQkMscUJBQXFCLEdBQUdsQiwrQ0FBUUEsQ0FBeUI7SUFDbkYsTUFBTW1CLG1CQUFtQjtRQUFDO1FBQWdCO1FBQWlCO0tBQWlCO0lBRTVFLE1BQU1DLDBCQUEwQnRCLGtEQUFXQSxDQUFDLENBQUN1QjtRQUMzQ2IsV0FBV04sNEVBQWVBLENBQUM7WUFDekJvQixlQUFlRDtRQUNqQjtJQUNGLEdBQUc7UUFBQ2I7S0FBVztJQUVmLE1BQU1lLHdCQUF3QnpCLGtEQUFXQSxDQUFDLENBQUMwQjtRQUN6Q2hCLFdBQVdOLDRFQUFlQSxDQUFDO1lBQ3pCWSxTQUFTRixnQkFBZ0JhLFFBQVEsQ0FBQ0QsVUFBVVosZ0JBQWdCYyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsU0FBU0gsVUFBVTttQkFBSVo7Z0JBQWlCWTthQUFPO1FBQzlIO0lBQ0YsR0FBRztRQUFDaEI7UUFBWUk7S0FBZ0I7SUFFaEMsTUFBTWdCLHVCQUF1QjlCLGtEQUFXQSxDQUFDLENBQUMrQjtRQUN4Q3JCLFdBQVdOLDRFQUFlQSxDQUFDO1lBQ3pCYyxRQUFRRCxlQUFlVSxRQUFRLENBQUNJLFNBQVNkLGVBQWVXLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxTQUFTRSxTQUFTO21CQUFJZDtnQkFBZ0JjO2FBQU07UUFDdkg7SUFDRixHQUFHO1FBQUNyQjtRQUFZTztLQUFlO0lBRS9CLE1BQU1lLGlCQUFpQmhDLGtEQUFXQSxDQUFDO1FBQ2pDVSxXQUFXUCwrRUFBa0JBO0lBQy9CLEdBQUc7UUFBQ087S0FBVztJQUVmLE1BQU11QiwwQkFBMEJoQyw4Q0FBT0EsQ0FBQztRQUN0QyxJQUFJa0IsbUJBQW1CO1lBQ3JCLE9BQU9kLHFFQUFlQSxDQUFDTSxVQUFVUTtRQUNuQztRQUNBLE9BQU8sRUFBRTtJQUNYLEdBQUc7UUFBQ0E7UUFBbUJSO0tBQVM7SUFFaEMscUJBQ0UsOERBQUN1QjtRQUFJQyxXQUFXdEMsaURBQVVBLENBQUNDLGtGQUF3QixFQUFFQSx1RUFBYTs7MEJBQ2hFLDhEQUFDb0M7Z0JBQUlDLFdBQVdyQyw0RUFBa0I7MEJBQUU7Ozs7OzswQkFFcEMsOERBQUNVLDZEQUFlQTtnQkFDZDhCLFNBQVMsSUFBTWxCLHFCQUFxQkQsc0JBQXNCLFdBQVcsT0FBTztnQkFDNUVvQixVQUFVcEIsc0JBQXNCO2dCQUNoQ3FCLE1BQU1QO2dCQUNOUSxpQkFBaUIzQjtnQkFDakI0QixzQkFBc0JqQjswQkFDdkI7Ozs7OzswQkFJRCw4REFBQ2pCLDZEQUFlQTtnQkFDZDhCLFNBQVMsSUFBTWxCLHFCQUFxQkQsc0JBQXNCLGlCQUFpQixPQUFPO2dCQUNsRm9CLFVBQVVwQixzQkFBc0I7Z0JBQ2hDcUIsTUFBTW5CO2dCQUNOb0IsaUJBQWlCLEVBQUU7Z0JBQ25CQyxzQkFBc0JwQjswQkFDdkI7Ozs7OzswQkFJRCw4REFBQ2QsNkRBQWVBO2dCQUNkOEIsU0FBUyxJQUFNbEIscUJBQXFCRCxzQkFBc0IsVUFBVSxPQUFPO2dCQUMzRW9CLFVBQVVwQixzQkFBc0I7Z0JBQ2hDcUIsTUFBTVA7Z0JBQ05RLGlCQUFpQnhCO2dCQUNqQnlCLHNCQUFzQlo7MEJBQ3ZCOzs7Ozs7Ozs7Ozs7QUFZUDtHQS9FTXJCOztRQUNlSCx3REFBY0E7UUFDaEJDLHdEQUFjQTtRQUNQQSx3REFBY0E7UUFDZkEsd0RBQWNBOzs7S0FKakNFO0FBaUZOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJsb2NrL0ZpbHRlckJsb2NrLnRzeD9iNTZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ZpbHRlckJsb2NrLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcyc7XHJcbmltcG9ydCB7IGNsZWFyQWN0aXZlRmlsdGVycywgc2V0QWN0aXZlRmlsdGVyIH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XHJcbmltcG9ydCB7IGdldFVuaXF1ZVZhbHVlcyB9IGZyb20gXCJAL2xpYi9nZXRVbmlxdWVWYWx1ZXNcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvdHlwZXMvaG9va3NcIjtcclxuaW1wb3J0IHsgRmlsdGVyQmxvY2tJdGVtIH0gZnJvbSBcIi4uL0ZpbHRlckJsb2NrSXRlbVwiOyBcclxuXHJcbmNvbnN0IEZpbHRlckJsb2NrID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpO1xyXG4gIGNvbnN0IHNlbGVjdGVkQXV0aG9ycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycyk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRHZW5yZXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzLmdlbnJlcyk7XHJcbiAgY29uc3QgW2xvY2FsQWN0aXZlRmlsdGVyLCBzZXRMb2NhbEFjdGl2ZUZpbHRlcl0gPSB1c2VTdGF0ZTxrZXlvZiB0cmFja1R5cGUgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBzb3J0QnlZZWFyVmFsdWVzID0gW1wi0J/QviDRg9C80L7Qu9GH0LDQvdC40Y5cIiwgXCLRgdC90LDRh9Cw0LvQsCDQvdC+0LLRi9C1XCIsIFwi0YHQvdCw0YfQsNC70LAg0YHRgtCw0YDRi9C1XCJdO1xyXG5cclxuICBjb25zdCB0b2dnbGVSZWxlYXNlWWVhckZpbHRlciA9IHVzZUNhbGxiYWNrKChvcHRpb246IHN0cmluZykgPT4ge1xyXG4gICAgZGlzcGF0Y2hlcihzZXRBY3RpdmVGaWx0ZXIoe1xyXG4gICAgICByZWxlYXNlX2RhdGVzOiBvcHRpb25cclxuICAgIH0pKTtcclxuICB9LCBbZGlzcGF0Y2hlcl0pO1xyXG5cclxuICBjb25zdCB0b2dnbGVTZWxlY3RlZEF1dGhvcnMgPSB1c2VDYWxsYmFjaygoYXV0aG9yOiBzdHJpbmcpID0+IHtcclxuICAgIGRpc3BhdGNoZXIoc2V0QWN0aXZlRmlsdGVyKHtcclxuICAgICAgYXV0aG9yczogc2VsZWN0ZWRBdXRob3JzLmluY2x1ZGVzKGF1dGhvcikgPyBzZWxlY3RlZEF1dGhvcnMuZmlsdGVyKChpdGVtKSA9PiBpdGVtICE9PSBhdXRob3IpIDogWy4uLnNlbGVjdGVkQXV0aG9ycywgYXV0aG9yXSxcclxuICAgIH0pKTtcclxuICB9LCBbZGlzcGF0Y2hlciwgc2VsZWN0ZWRBdXRob3JzXSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNlbGVjdGVkR2VucmVzID0gdXNlQ2FsbGJhY2soKGdlbnJlOiBzdHJpbmcpID0+IHtcclxuICAgIGRpc3BhdGNoZXIoc2V0QWN0aXZlRmlsdGVyKHtcclxuICAgICAgZ2VucmVzOiBzZWxlY3RlZEdlbnJlcy5pbmNsdWRlcyhnZW5yZSkgPyBzZWxlY3RlZEdlbnJlcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IGdlbnJlKSA6IFsuLi5zZWxlY3RlZEdlbnJlcywgZ2VucmVdLFxyXG4gICAgfSkpO1xyXG4gIH0sIFtkaXNwYXRjaGVyLCBzZWxlY3RlZEdlbnJlc10pO1xyXG5cclxuICBjb25zdCBkaXNjYXJkRmlsdGVycyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGRpc3BhdGNoZXIoY2xlYXJBY3RpdmVGaWx0ZXJzKCkpXHJcbiAgfSwgW2Rpc3BhdGNoZXJdKTtcclxuXHJcbiAgY29uc3QgbWVtb2l6ZWRHZXRVbmlxdWVWYWx1ZXMgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChsb2NhbEFjdGl2ZUZpbHRlcikge1xyXG4gICAgICByZXR1cm4gZ2V0VW5pcXVlVmFsdWVzKHBsYXlMaXN0LCBsb2NhbEFjdGl2ZUZpbHRlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW107XHJcbiAgfSwgW2xvY2FsQWN0aXZlRmlsdGVyLCBwbGF5TGlzdF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNlbnRlckJsb2NrRmlsdGVyLCBzdHlsZXMuZmlsdGVyKX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsdGVyVGl0bGV9PtCY0YHQutCw0YLRjCDQv9C+OjwvZGl2PlxyXG5cclxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAnYXV0aG9yJyA/IG51bGwgOiAnYXV0aG9yJyl9XHJcbiAgICAgICAgaXNPcGVuZWQ9e2xvY2FsQWN0aXZlRmlsdGVyID09PSAnYXV0aG9yJ31cclxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cclxuICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3NlbGVjdGVkQXV0aG9yc31cclxuICAgICAgICB0b2dnbGVTZWxlY3RlZE9wdGlvbj17dG9nZ2xlU2VsZWN0ZWRBdXRob3JzfVxyXG4gICAgICA+XHJcbiAgICAgICAg0LjRgdC/0L7Qu9C90LjRgtC10LvRjlxyXG4gICAgICA8L0ZpbHRlckJsb2NrSXRlbT5cclxuXHJcbiAgICAgIDxGaWx0ZXJCbG9ja0l0ZW1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRMb2NhbEFjdGl2ZUZpbHRlcihsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZScgPyBudWxsIDogJ3JlbGVhc2VfZGF0ZScpfVxyXG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ3JlbGVhc2VfZGF0ZSd9XHJcbiAgICAgICAgbGlzdD17c29ydEJ5WWVhclZhbHVlc31cclxuICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e1tdfVxyXG4gICAgICAgIHRvZ2dsZVNlbGVjdGVkT3B0aW9uPXt0b2dnbGVSZWxlYXNlWWVhckZpbHRlcn1cclxuICAgICAgPlxyXG4gICAgICAgINCz0L7QtNGDINCy0YvQv9GD0YHQutCwXHJcbiAgICAgIDwvRmlsdGVyQmxvY2tJdGVtPlxyXG5cclxuICAgICAgPEZpbHRlckJsb2NrSXRlbVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldExvY2FsQWN0aXZlRmlsdGVyKGxvY2FsQWN0aXZlRmlsdGVyID09PSAnZ2VucmUnID8gbnVsbCA6ICdnZW5yZScpfVxyXG4gICAgICAgIGlzT3BlbmVkPXtsb2NhbEFjdGl2ZUZpbHRlciA9PT0gJ2dlbnJlJ31cclxuICAgICAgICBsaXN0PXttZW1vaXplZEdldFVuaXF1ZVZhbHVlc31cclxuICAgICAgICBzZWxlY3RlZE9wdGlvbnM9e3NlbGVjdGVkR2VucmVzfVxyXG4gICAgICAgIHRvZ2dsZVNlbGVjdGVkT3B0aW9uPXt0b2dnbGVTZWxlY3RlZEdlbnJlc31cclxuICAgICAgPlxyXG4gICAgICAgINC20LDQvdGA0YNcclxuICAgICAgPC9GaWx0ZXJCbG9ja0l0ZW0+XHJcblxyXG4gICAgICB7LyogPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRpc2NhcmRCdXR0b259XHJcbiAgICAgICAgb25DbGljaz17ZGlzY2FyZEZpbHRlcnN9PlxyXG4gICAgICAgINGB0LHRgNC+0YHQuNGC0Ywg0YTQuNC70YzRgtGA0YtcclxuICAgICAgPC9idXR0b24+ICovfVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCbG9jazsiXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsInN0eWxlcyIsIlJlYWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VNZW1vIiwidXNlU3RhdGUiLCJjbGVhckFjdGl2ZUZpbHRlcnMiLCJzZXRBY3RpdmVGaWx0ZXIiLCJnZXRVbmlxdWVWYWx1ZXMiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiRmlsdGVyQmxvY2tJdGVtIiwiRmlsdGVyQmxvY2siLCJkaXNwYXRjaGVyIiwicGxheUxpc3QiLCJzdGF0ZSIsInRyYWNrcyIsInNlbGVjdGVkQXV0aG9ycyIsImFjdGl2ZUZpbHRlcnMiLCJhdXRob3JzIiwic2VsZWN0ZWRHZW5yZXMiLCJnZW5yZXMiLCJsb2NhbEFjdGl2ZUZpbHRlciIsInNldExvY2FsQWN0aXZlRmlsdGVyIiwic29ydEJ5WWVhclZhbHVlcyIsInRvZ2dsZVJlbGVhc2VZZWFyRmlsdGVyIiwib3B0aW9uIiwicmVsZWFzZV9kYXRlcyIsInRvZ2dsZVNlbGVjdGVkQXV0aG9ycyIsImF1dGhvciIsImluY2x1ZGVzIiwiZmlsdGVyIiwiaXRlbSIsInRvZ2dsZVNlbGVjdGVkR2VucmVzIiwiZ2VucmUiLCJkaXNjYXJkRmlsdGVycyIsIm1lbW9pemVkR2V0VW5pcXVlVmFsdWVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY2VudGVyQmxvY2tGaWx0ZXIiLCJmaWx0ZXJUaXRsZSIsIm9uQ2xpY2siLCJpc09wZW5lZCIsImxpc3QiLCJzZWxlY3RlZE9wdGlvbnMiLCJ0b2dnbGVTZWxlY3RlZE9wdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilterBlock/FilterBlock.tsx\n"));

/***/ })

});