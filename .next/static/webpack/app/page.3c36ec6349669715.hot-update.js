/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx":
/*!************************************************************!*\
  !*** ./src/components/ContentPlaylist/ContentPlaylist.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst ContentPlaylist = (param)=>{\n    let { trackList, setTrack } = param;\n    _s();\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        trackList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        trackList\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_4___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_4___default().playlist)),\n        children: trackList.map((track)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_3__.PlayListItem, {\n                setTrack: ()=>setTrack(track),\n                name: track.name,\n                author: track.author,\n                album: track.album,\n                duration: trackDurations[track.id]\n            }, track.id, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"CsRIDxPshso9m5DY92ZgkrSYL6Y=\");\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist);\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNkO0FBQ3VCO0FBQ0g7QUFTeEQsTUFBTU8sa0JBQWtCO1FBQUMsRUFDdkJDLFNBQVMsRUFDVEMsUUFBUSxFQUNhOztJQUVyQixNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUE0QixDQUFDO0lBQ2pGLE1BQU1PLFlBQVlSLDZDQUFNQSxDQUFzQyxDQUFDO0lBRS9ERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1VLFlBQXVDLENBQUM7UUFDOUNMLFVBQVVNLE9BQU8sQ0FBQyxDQUFDQztZQUNqQixNQUFNQyxRQUFRLElBQUlDLE1BQU1GLE1BQU1HLFVBQVU7WUFDeENGLE1BQU1HLGdCQUFnQixDQUFDLGtCQUFrQjtnQkFDdkNOLFNBQVMsQ0FBQ0UsTUFBTUssRUFBRSxDQUFDLEdBQUdKLE1BQU1LLFFBQVE7Z0JBQ3BDVixrQkFBa0I7b0JBQUUsR0FBR0UsU0FBUztnQkFBQztZQUNuQztZQUNBRCxVQUFVVSxPQUFPLENBQUNQLE1BQU1LLEVBQUUsQ0FBQyxHQUFHSjtRQUNoQztRQUVBLE9BQU87WUFDTE8sT0FBT0MsTUFBTSxDQUFDWixVQUFVVSxPQUFPLEVBQUVSLE9BQU8sQ0FBQyxDQUFDRTtnQkFDeENBLE1BQU1TLEtBQUs7Z0JBQ1hULE1BQU1VLGVBQWUsQ0FBQztnQkFDdEJWLE1BQU1XLElBQUk7WUFDWjtRQUNGO0lBQ0YsR0FBRztRQUFDbkI7S0FBVTtJQUVkLHFCQUNFLDhEQUFDb0I7UUFBSUMsV0FBVzVCLGlEQUFVQSxDQUFDRCxvRkFBc0IsRUFBRUEsNkVBQWU7a0JBQy9EUSxVQUFVd0IsR0FBRyxDQUFDLENBQUNqQixzQkFDZCw4REFBQ1Qsa0VBQVlBO2dCQUVYRyxVQUFVLElBQU1BLFNBQVNNO2dCQUN6QmtCLE1BQU1sQixNQUFNa0IsSUFBSTtnQkFDaEJDLFFBQVFuQixNQUFNbUIsTUFBTTtnQkFDcEJDLE9BQU9wQixNQUFNb0IsS0FBSztnQkFDbEJkLFVBQVVYLGNBQWMsQ0FBQ0ssTUFBTUssRUFBRSxDQUFDO2VBTDdCTCxNQUFNSyxFQUFFOzs7Ozs7Ozs7O0FBV3ZCO0dBM0NNYjtLQUFBQTtBQTZDTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0LnRzeD8zY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ29udGVudFBsYXlsaXN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tIFwiQGNvbXBvbmVudHMvUGxheUxpc3RJdGVtXCI7XHJcbmltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XHJcblxyXG5cclxudHlwZSBDb250ZW50UGxheUxpc3RQcm9wcyA9IHtcclxuICB0cmFja0xpc3Q6IHRyYWNrVHlwZVtdO1xyXG4gIHNldFRyYWNrOiAocGFyYW06IHRyYWNrVHlwZSkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IENvbnRlbnRQbGF5bGlzdCA9ICh7XHJcbiAgdHJhY2tMaXN0LFxyXG4gIHNldFRyYWNrLFxyXG59OiBDb250ZW50UGxheUxpc3RQcm9wcykgPT4ge1xyXG5cclxuICBjb25zdCBbdHJhY2tEdXJhdGlvbnMsIHNldFRyYWNrRHVyYXRpb25zXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0+KHt9KTtcclxuICBjb25zdCBhdWRpb1JlZnMgPSB1c2VSZWY8eyBba2V5OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50IH0+KHt9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGR1cmF0aW9uczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgdHJhY2tMaXN0LmZvckVhY2goKHRyYWNrKSA9PiB7XHJcbiAgICAgIGNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKHRyYWNrLnRyYWNrX2ZpbGUpO1xyXG4gICAgICBhdWRpby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsICgpID0+IHtcclxuICAgICAgICBkdXJhdGlvbnNbdHJhY2suaWRdID0gYXVkaW8uZHVyYXRpb247XHJcbiAgICAgICAgc2V0VHJhY2tEdXJhdGlvbnMoeyAuLi5kdXJhdGlvbnMgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBhdWRpb1JlZnMuY3VycmVudFt0cmFjay5pZF0gPSBhdWRpbztcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIE9iamVjdC52YWx1ZXMoYXVkaW9SZWZzLmN1cnJlbnQpLmZvckVhY2goKGF1ZGlvKSA9PiB7XHJcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICBhdWRpby5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xyXG4gICAgICAgIGF1ZGlvLmxvYWQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIH0sIFt0cmFja0xpc3RdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250ZW50UGxheWxpc3QsIHN0eWxlcy5wbGF5bGlzdCl9PlxyXG4gICAgICB7dHJhY2tMaXN0Lm1hcCgodHJhY2spID0+IChcclxuICAgICAgICA8UGxheUxpc3RJdGVtXHJcbiAgICAgICAgICBrZXk9e3RyYWNrLmlkfVxyXG4gICAgICAgICAgc2V0VHJhY2s9eygpID0+IHNldFRyYWNrKHRyYWNrKX1cclxuICAgICAgICAgIG5hbWU9e3RyYWNrLm5hbWV9XHJcbiAgICAgICAgICBhdXRob3I9e3RyYWNrLmF1dGhvcn1cclxuICAgICAgICAgIGFsYnVtPXt0cmFjay5hbGJ1bX1cclxuICAgICAgICAgIGR1cmF0aW9uPXt0cmFja0R1cmF0aW9uc1t0cmFjay5pZF19XHJcbiAgICAgICAgLz5cclxuICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJQbGF5TGlzdEl0ZW0iLCJDb250ZW50UGxheWxpc3QiLCJ0cmFja0xpc3QiLCJzZXRUcmFjayIsInRyYWNrRHVyYXRpb25zIiwic2V0VHJhY2tEdXJhdGlvbnMiLCJhdWRpb1JlZnMiLCJkdXJhdGlvbnMiLCJmb3JFYWNoIiwidHJhY2siLCJhdWRpbyIsIkF1ZGlvIiwidHJhY2tfZmlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImR1cmF0aW9uIiwiY3VycmVudCIsIk9iamVjdCIsInZhbHVlcyIsInBhdXNlIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnRQbGF5bGlzdCIsInBsYXlsaXN0IiwibWFwIiwibmFtZSIsImF1dGhvciIsImFsYnVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/PlayListItem/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/PlayListItem/index.tsx ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});