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

/***/ "(app-pages-browser)/./src/api/api.tsx":
/*!*************************!*\
  !*** ./src/api/api.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getTracks: function() { return /* binding */ getTracks; }\n/* harmony export */ });\nconst API_URL = \"https://skypro-music-api.skyeng.tech/catalog/\";\nasync function getTracks() {\n    try {\n        const response = await fetch(API_URL + \"track/all/\");\n        if (!response.ok) {\n            if (response.status === 401) {\n                throw new Error(\"No authorization\");\n            } else {\n                throw new Error(\"HTTP error! Status: \".concat(response.status));\n            }\n        }\n        const data = await response.json();\n        console.log(data);\n        return data;\n    } catch (error) {\n        console.warn(error);\n        throw error;\n    }\n} // import { TrackList } from \"@/components/TrackList/trackList\";\n // const API_URL = \"https://skypro-music-api.skyeng.tech/catalog/\";\n // export async function getTracks(): Promise<TrackList[]> {\n //     try {\n //         const response = await fetch(API_URL + \"track/all/\");\n //         if (!response.ok) {\n //             if (response.status === 401) {\n //                 throw new Error(\"Нет авторизации\");\n //             } else {\n //                 throw new Error(`Ошибка! Статус: ${response.status}`);\n //             }\n //         }\n //         const data = await response.json();\n //         console.log(data);\n //         return data as TrackList[];\n //     } catch (error) {\n //         console.warn(error);\n //         throw error;\n //     }\n // }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkvYXBpLnRzeCIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsVUFBVTtBQUVULGVBQWVDO0lBQ2xCLElBQUk7UUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU1ILFVBQVU7UUFDdkMsSUFBSSxDQUFDRSxTQUFTRSxFQUFFLEVBQUU7WUFDZCxJQUFJRixTQUFTRyxNQUFNLEtBQUssS0FBSztnQkFDekIsTUFBTSxJQUFJQyxNQUFNO1lBQ3BCLE9BQU87Z0JBQ0gsTUFBTSxJQUFJQSxNQUFNLHVCQUF1QyxPQUFoQkosU0FBU0csTUFBTTtZQUMxRDtRQUNKO1FBQ0EsTUFBTUUsT0FBTyxNQUFNTCxTQUFTTSxJQUFJO1FBQ2hDQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osT0FBT0E7SUFDWCxFQUFFLE9BQU9JLE9BQU87UUFDWkYsUUFBUUcsSUFBSSxDQUFDRDtRQUNiLE1BQU1BO0lBQ1Y7QUFDSixFQUNBLGdFQUFnRTtDQUVoRSxtRUFBbUU7Q0FFbkUsNERBQTREO0NBQzVELFlBQVk7Q0FDWixnRUFBZ0U7Q0FDaEUsOEJBQThCO0NBQzlCLDZDQUE2QztDQUM3QyxzREFBc0Q7Q0FDdEQsdUJBQXVCO0NBQ3ZCLHlFQUF5RTtDQUN6RSxnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLDhDQUE4QztDQUM5Qyw2QkFBNkI7Q0FDN0Isc0NBQXNDO0NBQ3RDLHdCQUF3QjtDQUN4QiwrQkFBK0I7Q0FDL0IsdUJBQXVCO0NBQ3ZCLFFBQVE7Q0FDUixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvYXBpLnRzeD8wOGZiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9VUkwgPSBcImh0dHBzOi8vc2t5cHJvLW11c2ljLWFwaS5za3llbmcudGVjaC9jYXRhbG9nL1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYWNrcygpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChBUElfVVJMICsgXCJ0cmFjay9hbGwvXCIpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhdXRob3JpemF0aW9uXCIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBTdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcik7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuLy8gaW1wb3J0IHsgVHJhY2tMaXN0IH0gZnJvbSBcIkAvY29tcG9uZW50cy9UcmFja0xpc3QvdHJhY2tMaXN0XCI7XHJcblxyXG4vLyBjb25zdCBBUElfVVJMID0gXCJodHRwczovL3NreXByby1tdXNpYy1hcGkuc2t5ZW5nLnRlY2gvY2F0YWxvZy9cIjtcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRUcmFja3MoKTogUHJvbWlzZTxUcmFja0xpc3RbXT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEFQSV9VUkwgKyBcInRyYWNrL2FsbC9cIik7XHJcbi8vICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4vLyAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcclxuLy8gICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcItCd0LXRgiDQsNCy0YLQvtGA0LjQt9Cw0YbQuNC4XCIpO1xyXG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGDQntGI0LjQsdC60LAhINCh0YLQsNGC0YPRgTogJHtyZXNwb25zZS5zdGF0dXN9YCk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgICAgICByZXR1cm4gZGF0YSBhcyBUcmFja0xpc3RbXTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKTtcclxuLy8gICAgICAgICB0aHJvdyBlcnJvcjtcclxuLy8gICAgIH1cclxuLy8gfSJdLCJuYW1lcyI6WyJBUElfVVJMIiwiZ2V0VHJhY2tzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwic3RhdHVzIiwiRXJyb3IiLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIndhcm4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api/api.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx":
/*!****************************************************!*\
  !*** ./src/components/CenterBlock/CenterBlock.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CenterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CenterBlock.module.css */ \"(app-pages-browser)/./src/components/CenterBlock/CenterBlock.module.css\");\n/* harmony import */ var _CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilterBlock */ \"(app-pages-browser)/./src/components/FilterBlock/index.tsx\");\n/* harmony import */ var _components_ContentPlaylist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/ContentPlaylist */ \"(app-pages-browser)/./src/components/ContentPlaylist/index.tsx\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/api */ \"(app-pages-browser)/./src/api/api.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction CenterBlock(param) {\n    let { setTrack } = param;\n    _s();\n    const [trackList, setTrackList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    // const [trackList, setTrackList] = useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (0,_api_api__WEBPACK_IMPORTED_MODULE_5__.getTracks)().then((data)=>setTrackList(data));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().mainCenterBlock), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlock)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockSearch), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().search)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchSvg),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                            href: \"/img/icon/sprite.svg#icon-search\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().searchText),\n                        type: \"search\",\n                        placeholder: \"Search\",\n                        name: \"search\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockH2),\n                children: \"Tracks\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FilterBlock__WEBPACK_IMPORTED_MODULE_3__.FilterBlock, {\n                trackList: trackList\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().centerBlockContent), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistContent)),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().contentTitle), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitle)),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col01)),\n                                children: \"Track\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col02)),\n                                children: \"Artist\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col03)),\n                                children: \"Album\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleCol), (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().col04)),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                    className: (_CenterBlock_module_css__WEBPACK_IMPORTED_MODULE_6___default().playlistTitleSvg),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"use\", {\n                                        href: \"img/icon/sprite.svg#icon-watch\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentPlaylist__WEBPACK_IMPORTED_MODULE_4__.ContentPlaylist, {\n                        trackList: trackList,\n                        setTrack: setTrack\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\skypro_music\\\\music\\\\src\\\\components\\\\CenterBlock\\\\CenterBlock.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(CenterBlock, \"QzuAtCVusbjDrl/mwYq5Q1WY+Kk=\");\n_c = CenterBlock;\nvar _c;\n$RefreshReg$(_c, \"CenterBlock\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NlbnRlckJsb2NrL0NlbnRlckJsb2NrLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW9DO0FBQ1U7QUFDSztBQUNJO0FBQ087QUFDeEI7QUFPdkIsU0FBU1EsWUFBWSxLQUE4QjtRQUE5QixFQUFFQyxRQUFRLEVBQW9CLEdBQTlCOztJQUVsQyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQWMsRUFBRTtJQUMxRCxrREFBa0Q7SUFFbERELGdEQUFTQSxDQUFDO1FBQ1JJLG1EQUFTQSxHQUFHSyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0YsYUFBYUU7SUFDMUMsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdmLGlEQUFVQSxDQUFDQyxnRkFBc0IsRUFBRUEsNEVBQWtCOzswQkFDbkUsOERBQUNhO2dCQUFJQyxXQUFXZixpREFBVUEsQ0FBQ0Msa0ZBQXdCLEVBQUVBLHVFQUFhOztrQ0FDaEUsOERBQUNtQjt3QkFBSUwsV0FBV2QsMEVBQWdCO2tDQUM5Qiw0RUFBQ3FCOzRCQUFJQyxNQUFLOzs7Ozs7Ozs7OztrQ0FFWiw4REFBQ0M7d0JBQ0NULFdBQVdkLDJFQUFpQjt3QkFDNUJ5QixNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDO2dCQUFHZCxXQUFXZCw4RUFBb0I7MEJBQUU7Ozs7OzswQkFDckMsOERBQUNJLGdFQUFXQTtnQkFBQ0ssV0FBV0E7Ozs7OzswQkFDeEIsOERBQUNJO2dCQUNDQyxXQUFXZixpREFBVUEsQ0FDbkJDLG1GQUF5QixFQUN6QkEsZ0ZBQXNCOztrQ0FHeEIsOERBQUNhO3dCQUFJQyxXQUFXZixpREFBVUEsQ0FBQ0MsNkVBQW1CLEVBQUVBLDhFQUFvQjs7MENBQ2xFLDhEQUFDYTtnQ0FBSUMsV0FBV2YsaURBQVVBLENBQUNDLGlGQUF1QixFQUFFQSxzRUFBWTswQ0FBRzs7Ozs7OzBDQUduRSw4REFBQ2E7Z0NBQUlDLFdBQVdmLGlEQUFVQSxDQUFDQyxpRkFBdUIsRUFBRUEsc0VBQVk7MENBQUc7Ozs7OzswQ0FHbkUsOERBQUNhO2dDQUFJQyxXQUFXZixpREFBVUEsQ0FBQ0MsaUZBQXVCLEVBQUVBLHNFQUFZOzBDQUFHOzs7Ozs7MENBR25FLDhEQUFDYTtnQ0FBSUMsV0FBV2YsaURBQVVBLENBQUNDLGlGQUF1QixFQUFFQSxzRUFBWTswQ0FDOUQsNEVBQUNtQjtvQ0FBSUwsV0FBV2QsaUZBQXVCOzhDQUNyQyw0RUFBQ3FCO3dDQUFJQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDVDs7Ozs7Ozs7Ozs7a0NBRUgsOERBQUNSLHdFQUFlQTt3QkFBQ0ksV0FBV0E7d0JBQVdELFVBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekQ7R0FuRHdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DZW50ZXJCbG9jay9DZW50ZXJCbG9jay50c3g/MGZmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NlbnRlckJsb2NrLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRmlsdGVyQmxvY2sgfSBmcm9tIFwiQC9jb21wb25lbnRzL0ZpbHRlckJsb2NrXCI7XHJcbmltcG9ydCB7IENvbnRlbnRQbGF5bGlzdCB9IGZyb20gXCJAY29tcG9uZW50cy9Db250ZW50UGxheWxpc3RcIjtcclxuaW1wb3J0IHsgZ2V0VHJhY2tzIH0gZnJvbSBcIkAvYXBpL2FwaVwiO1xyXG5pbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xyXG5cclxudHlwZSBDZW50ZXJCbG9ja1Byb3BzID0ge1xyXG4gIHNldFRyYWNrOiAocGFyYW06IHRyYWNrVHlwZSkgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENlbnRlckJsb2NrKHsgc2V0VHJhY2sgfTogQ2VudGVyQmxvY2tQcm9wcykge1xyXG4gIFxyXG4gIGNvbnN0IFt0cmFja0xpc3QsIHNldFRyYWNrTGlzdF0gPSB1c2VTdGF0ZTx0cmFja1R5cGVbXT4oW10pO1xyXG4gIC8vIGNvbnN0IFt0cmFja0xpc3QsIHNldFRyYWNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRUcmFja3MoKS50aGVuKChkYXRhKSA9PiBzZXRUcmFja0xpc3QoZGF0YSkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tYWluQ2VudGVyQmxvY2ssIHN0eWxlcy5jZW50ZXJCbG9jayl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY2VudGVyQmxvY2tTZWFyY2gsIHN0eWxlcy5zZWFyY2gpfT5cclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFN2Z30+XHJcbiAgICAgICAgICA8dXNlIGhyZWY9XCIvaW1nL2ljb24vc3ByaXRlLnN2ZyNpY29uLXNlYXJjaFwiPjwvdXNlPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoVGV4dH1cclxuICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxyXG4gICAgICAgICAgbmFtZT1cInNlYXJjaFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5jZW50ZXJCbG9ja0gyfT5UcmFja3M8L2gyPlxyXG4gICAgICA8RmlsdGVyQmxvY2sgdHJhY2tMaXN0PXt0cmFja0xpc3R9IC8+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXHJcbiAgICAgICAgICBzdHlsZXMuY2VudGVyQmxvY2tDb250ZW50LFxyXG4gICAgICAgICAgc3R5bGVzLnBsYXlsaXN0Q29udGVudFxyXG4gICAgICAgICl9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFRpdGxlLCBzdHlsZXMucGxheWxpc3RUaXRsZSl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLnBsYXlsaXN0VGl0bGVDb2wsIHN0eWxlcy5jb2wwMSl9PlxyXG4gICAgICAgICAgICBUcmFja1xyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMucGxheWxpc3RUaXRsZUNvbCwgc3R5bGVzLmNvbDAyKX0+XHJcbiAgICAgICAgICAgIEFydGlzdFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMucGxheWxpc3RUaXRsZUNvbCwgc3R5bGVzLmNvbDAzKX0+XHJcbiAgICAgICAgICAgIEFsYnVtXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5wbGF5bGlzdFRpdGxlQ29sLCBzdHlsZXMuY29sMDQpfT5cclxuICAgICAgICAgICAgPHN2ZyBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlU3ZnfT5cclxuICAgICAgICAgICAgICA8dXNlIGhyZWY9XCJpbWcvaWNvbi9zcHJpdGUuc3ZnI2ljb24td2F0Y2hcIj48L3VzZT5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPENvbnRlbnRQbGF5bGlzdCB0cmFja0xpc3Q9e3RyYWNrTGlzdH0gc2V0VHJhY2s9e3NldFRyYWNrfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRmlsdGVyQmxvY2siLCJDb250ZW50UGxheWxpc3QiLCJnZXRUcmFja3MiLCJDZW50ZXJCbG9jayIsInNldFRyYWNrIiwidHJhY2tMaXN0Iiwic2V0VHJhY2tMaXN0IiwidGhlbiIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJtYWluQ2VudGVyQmxvY2siLCJjZW50ZXJCbG9jayIsImNlbnRlckJsb2NrU2VhcmNoIiwic2VhcmNoIiwic3ZnIiwic2VhcmNoU3ZnIiwidXNlIiwiaHJlZiIsImlucHV0Iiwic2VhcmNoVGV4dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm5hbWUiLCJoMiIsImNlbnRlckJsb2NrSDIiLCJjZW50ZXJCbG9ja0NvbnRlbnQiLCJwbGF5bGlzdENvbnRlbnQiLCJjb250ZW50VGl0bGUiLCJwbGF5bGlzdFRpdGxlIiwicGxheWxpc3RUaXRsZUNvbCIsImNvbDAxIiwiY29sMDIiLCJjb2wwMyIsImNvbDA0IiwicGxheWxpc3RUaXRsZVN2ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/CenterBlock/CenterBlock.tsx\n"));

/***/ })

});