"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/store/features/tracksSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/features/tracksSlice.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearActiveFilters: function() { return /* binding */ clearActiveFilters; },\n/* harmony export */   setActiveFilter: function() { return /* binding */ setActiveFilter; },\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setIsSearchFalse: function() { return /* binding */ setIsSearchFalse; },\n/* harmony export */   setIsSearchTrue: function() { return /* binding */ setIsSearchTrue; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPlaylistNumber: function() { return /* binding */ setPlaylistNumber; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setSearchPlayList: function() { return /* binding */ setSearchPlayList; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: [],\n    searchPlaylist: [],\n    isSearch: false,\n    filteredPlaylist: [],\n    activeFilters: {\n        authors: [],\n        release_dates: \"default\",\n        genres: [],\n        searchValue: \"\"\n    },\n    playlistNumber: null\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        // playlist\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: switchTrack(1),\n        setPrevTrack: switchTrack(-1),\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        },\n        // search bar\n        setSearchPlayList: (state, action)=>{\n            state.searchPlaylist = action.payload;\n        },\n        setIsSearchTrue: (state)=>{\n            state.isSearch = true;\n        },\n        setIsSearchFalse: (state)=>{\n            state.isSearch = false;\n        },\n        setActiveFilter: (state, action)=>{\n            state.activeFilters = {\n                authors: action.payload.authors || state.activeFilters.authors,\n                release_dates: action.payload.release_dates || null,\n                genres: action.payload.genres || state.activeFilters.genres,\n                searchValue: action.payload.searchValue || state.activeFilters.searchValue\n            };\n            state.filteredPlaylist = state.playList.filter((track)=>{\n                const isAuthors = state.activeFilters.authors.length > 0 ? state.activeFilters.authors.includes(track.author) : true;\n                const isGenres = state.activeFilters.genres.length > 0 ? state.activeFilters.genres.includes(track.genre) : true;\n                return isAuthors && isGenres;\n            });\n        },\n        clearActiveFilters: (state)=>{\n            state.activeFilters = {\n                authors: [],\n                release_dates: \"default\",\n                genres: [],\n                searchValue: \"\"\n            };\n        },\n        setPlaylistNumber: (state, action)=>{\n            state.playlistNumber = action.payload;\n        }\n    }\n});\nconst { setCurrentTrack, setPlayList, setPlay, setPause, setNextTrack, setPrevTrack, setShuffle, setSearchPlayList, setIsSearchTrue, setIsSearchFalse, setActiveFilter, clearActiveFilters, setPlaylistNumber } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkQ7QUF3QjdELE1BQU1DLGVBQWdDO0lBQ2xDQyxPQUFPO0lBQ1BDLFVBQVUsRUFBRTtJQUNaQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsaUJBQWlCLEVBQUU7SUFFbkJDLGdCQUFnQixFQUFFO0lBQ2xCQyxVQUFVO0lBRVZDLGtCQUFrQixFQUFFO0lBRXBCQyxlQUFlO1FBQ1hDLFNBQVMsRUFBRTtRQUNYQyxlQUFlO1FBQ2ZDLFFBQVEsRUFBRTtRQUNWQyxhQUFhO0lBQ2pCO0lBRUFDLGdCQUFnQjtBQUNwQjtBQUVBLE1BQU1DLGNBQWMsQ0FBQ0M7SUFDakIsT0FBTyxDQUFDQztRQUNKLE1BQU1DLGdCQUFnQkQsTUFBTWIsU0FBUyxHQUFHYSxNQUFNWixlQUFlLEdBQUdZLE1BQU1mLFFBQVE7UUFDOUUsSUFBSWlCLFdBQVdELGNBQWNFLFNBQVMsQ0FBQ0MsQ0FBQUE7Z0JBQW9CSjttQkFBWkksS0FBS0MsRUFBRSxPQUFLTCxlQUFBQSxNQUFNaEIsS0FBSyxjQUFYZ0IsbUNBQUFBLGFBQWFLLEVBQUU7YUFBSU47UUFFOUVHLFdBQVcsQ0FBQ0EsV0FBV0QsY0FBY0ssTUFBTSxJQUFJTCxjQUFjSyxNQUFNO1FBRW5FTixNQUFNaEIsS0FBSyxHQUFHaUIsYUFBYSxDQUFDQyxTQUFTO1FBQ3JDRixNQUFNZCxTQUFTLEdBQUc7SUFDdEI7QUFDSjtBQUVBLE1BQU1xQixjQUFjekIsNkRBQVdBLENBQUM7SUFDNUIwQixNQUFNO0lBRU56QjtJQUVBMEIsVUFBVTtRQUNOLFdBQVc7UUFDWEMsaUJBQWlCLENBQUNWLE9BQU9XO1lBQ3JCWCxNQUFNaEIsS0FBSyxHQUFHMkIsT0FBT0MsT0FBTztZQUM1QlosTUFBTWQsU0FBUyxHQUFHO1FBQ3RCO1FBQ0EyQixhQUFhLENBQUNiLE9BQU9XO1lBQ2pCWCxNQUFNZixRQUFRLEdBQUcwQixPQUFPQyxPQUFPO1FBQ25DO1FBQ0EsV0FBVztRQUNYRSxTQUFTLENBQUNkO1lBQ05BLE1BQU1kLFNBQVMsR0FBRztRQUN0QjtRQUNBNkIsVUFBVSxDQUFDZjtZQUNQQSxNQUFNZCxTQUFTLEdBQUc7UUFDdEI7UUFDQThCLGNBQWNsQixZQUFZO1FBQzFCbUIsY0FBY25CLFlBQVksQ0FBQztRQUMzQixXQUFXO1FBQ1hvQixZQUFZLENBQUNsQixPQUFPVztZQUNoQlgsTUFBTWIsU0FBUyxHQUFHd0IsT0FBT0MsT0FBTztZQUNoQyxJQUFJRCxPQUFPQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0zQixXQUFXO3VCQUFJZSxNQUFNZixRQUFRO2lCQUFDO2dCQUNwQ0EsU0FBU2tDLElBQUksQ0FBQyxJQUFNQyxLQUFLQyxNQUFNLEtBQUs7Z0JBQ3BDckIsTUFBTVosZUFBZSxHQUFHSDtZQUM1QjtRQUNKO1FBQ0EsYUFBYTtRQUNicUMsbUJBQW1CLENBQUN0QixPQUFPVztZQUN2QlgsTUFBTVgsY0FBYyxHQUFHc0IsT0FBT0MsT0FBTztRQUN6QztRQUNBVyxpQkFBaUIsQ0FBQ3ZCO1lBQ2RBLE1BQU1WLFFBQVEsR0FBRztRQUNyQjtRQUNBa0Msa0JBQWtCLENBQUN4QjtZQUNmQSxNQUFNVixRQUFRLEdBQUc7UUFDckI7UUFFQW1DLGlCQUFpQixDQUFDekIsT0FBT1c7WUFDckJYLE1BQU1SLGFBQWEsR0FBRztnQkFDbEJDLFNBQVNrQixPQUFPQyxPQUFPLENBQUNuQixPQUFPLElBQUlPLE1BQU1SLGFBQWEsQ0FBQ0MsT0FBTztnQkFDOURDLGVBQWVpQixPQUFPQyxPQUFPLENBQUNsQixhQUFhLElBQUk7Z0JBQy9DQyxRQUFRZ0IsT0FBT0MsT0FBTyxDQUFDakIsTUFBTSxJQUFJSyxNQUFNUixhQUFhLENBQUNHLE1BQU07Z0JBQzNEQyxhQUFhZSxPQUFPQyxPQUFPLENBQUNoQixXQUFXLElBQUlJLE1BQU1SLGFBQWEsQ0FBQ0ksV0FBVztZQUM5RTtZQUNBSSxNQUFNVCxnQkFBZ0IsR0FBR1MsTUFBTWYsUUFBUSxDQUFDeUMsTUFBTSxDQUFDLENBQUMxQztnQkFDNUMsTUFBTTJDLFlBQVkzQixNQUFNUixhQUFhLENBQUNDLE9BQU8sQ0FBQ2EsTUFBTSxHQUFHLElBQUlOLE1BQU1SLGFBQWEsQ0FBQ0MsT0FBTyxDQUFDbUMsUUFBUSxDQUFDNUMsTUFBTTZDLE1BQU0sSUFBSTtnQkFDaEgsTUFBTUMsV0FBVzlCLE1BQU1SLGFBQWEsQ0FBQ0csTUFBTSxDQUFDVyxNQUFNLEdBQUcsSUFBSU4sTUFBTVIsYUFBYSxDQUFDRyxNQUFNLENBQUNpQyxRQUFRLENBQUM1QyxNQUFNK0MsS0FBSyxJQUFJO2dCQUM1RyxPQUFPSixhQUFhRztZQUN4QjtRQUNKO1FBQ0FFLG9CQUFvQixDQUFDaEM7WUFDakJBLE1BQU1SLGFBQWEsR0FBRztnQkFDbEJDLFNBQVMsRUFBRTtnQkFDWEMsZUFBZTtnQkFDZkMsUUFBUSxFQUFFO2dCQUNWQyxhQUFhO1lBQ2pCO1FBQ0o7UUFFQXFDLG1CQUFtQixDQUFDakMsT0FBT1c7WUFDdkJYLE1BQU1ILGNBQWMsR0FBR2MsT0FBT0MsT0FBTztRQUN6QztJQUNKO0FBQ0o7QUFFTyxNQUFNLEVBRVRGLGVBQWUsRUFBRUcsV0FBVyxFQUU1QkMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUU3Q0MsVUFBVSxFQUVWSSxpQkFBaUIsRUFBRUMsZUFBZSxFQUFFQyxnQkFBZ0IsRUFFcERDLGVBQWUsRUFBRU8sa0JBQWtCLEVBRW5DQyxpQkFBaUIsRUFDcEIsR0FBRzFCLFlBQVkyQixPQUFPLENBQUM7QUFDakIsTUFBTUMsZ0JBQWdCNUIsWUFBWTZCLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UudHM/MTZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiXHJcbmltcG9ydCB7IFBheWxvYWRBY3Rpb24sIGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIlxyXG5cclxudHlwZSBUcmFja3NTdGF0ZVR5cGUgPSB7XHJcbiAgICB0cmFjazogbnVsbCB8IHRyYWNrVHlwZSxcclxuICAgIHBsYXlMaXN0OiB0cmFja1R5cGVbXVxyXG4gICAgaXNQbGF5aW5nOiBib29sZWFuLFxyXG4gICAgaXNTaHVmZmxlOiBib29sZWFuLFxyXG4gICAgc2h1ZmZsZVBsYXlMaXN0OiB0cmFja1R5cGVbXSxcclxuXHJcbiAgICBzZWFyY2hQbGF5bGlzdDogdHJhY2tUeXBlW10sXHJcbiAgICBpc1NlYXJjaDogYm9vbGVhbixcclxuXHJcbiAgICBmaWx0ZXJlZFBsYXlsaXN0OiB0cmFja1R5cGVbXSxcclxuXHJcbiAgICBhY3RpdmVGaWx0ZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yczogQXJyYXk8c3RyaW5nPixcclxuICAgICAgICByZWxlYXNlX2RhdGVzOiBudWxsIHwgc3RyaW5nLFxyXG4gICAgICAgIGdlbnJlczogQXJyYXk8c3RyaW5nPixcclxuICAgICAgICBzZWFyY2hWYWx1ZTogc3RyaW5nLFxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5bGlzdE51bWJlcjogbnVtYmVyIHwgbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZTogVHJhY2tzU3RhdGVUeXBlID0ge1xyXG4gICAgdHJhY2s6IG51bGwsXHJcbiAgICBwbGF5TGlzdDogW10sXHJcbiAgICBpc1BsYXlpbmc6IGZhbHNlLFxyXG4gICAgaXNTaHVmZmxlOiBmYWxzZSxcclxuICAgIHNodWZmbGVQbGF5TGlzdDogW10sXHJcblxyXG4gICAgc2VhcmNoUGxheWxpc3Q6IFtdLFxyXG4gICAgaXNTZWFyY2g6IGZhbHNlLFxyXG5cclxuICAgIGZpbHRlcmVkUGxheWxpc3Q6IFtdLFxyXG5cclxuICAgIGFjdGl2ZUZpbHRlcnM6IHtcclxuICAgICAgICBhdXRob3JzOiBbXSxcclxuICAgICAgICByZWxlYXNlX2RhdGVzOiBcImRlZmF1bHRcIixcclxuICAgICAgICBnZW5yZXM6IFtdLFxyXG4gICAgICAgIHNlYXJjaFZhbHVlOiBcIlwiLFxyXG4gICAgfSxcclxuXHJcbiAgICBwbGF5bGlzdE51bWJlcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IHN3aXRjaFRyYWNrID0gKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XHJcbiAgICByZXR1cm4gKHN0YXRlOiBUcmFja3NTdGF0ZVR5cGUpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VHJhY2tzID0gc3RhdGUuaXNTaHVmZmxlID8gc3RhdGUuc2h1ZmZsZVBsYXlMaXN0IDogc3RhdGUucGxheUxpc3Q7XHJcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gY3VycmVudFRyYWNrcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSBzdGF0ZS50cmFjaz8uaWQpICsgZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBuZXdJbmRleCA9IChuZXdJbmRleCArIGN1cnJlbnRUcmFja3MubGVuZ3RoKSAlIGN1cnJlbnRUcmFja3MubGVuZ3RoO1xyXG5cclxuICAgICAgICBzdGF0ZS50cmFjayA9IGN1cnJlbnRUcmFja3NbbmV3SW5kZXhdO1xyXG4gICAgICAgIHN0YXRlLmlzUGxheWluZyA9IHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCB0cmFja3NTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICd0cmFja3MnLFxyXG5cclxuICAgIGluaXRpYWxTdGF0ZSxcclxuXHJcbiAgICByZWR1Y2Vyczoge1xyXG4gICAgICAgIC8vIHBsYXlsaXN0XHJcbiAgICAgICAgc2V0Q3VycmVudFRyYWNrOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS50cmFjayA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGxheUxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnBsYXlMaXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBjb250cm9sc1xyXG4gICAgICAgIHNldFBsYXk6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRQYXVzZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzUGxheWluZyA9IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXROZXh0VHJhY2s6IHN3aXRjaFRyYWNrKDEpLFxyXG4gICAgICAgIHNldFByZXZUcmFjazogc3dpdGNoVHJhY2soLTEpLFxyXG4gICAgICAgIC8vIGZlYXR1cmVzXHJcbiAgICAgICAgc2V0U2h1ZmZsZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNTaHVmZmxlID0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgaWYgKGFjdGlvbi5wYXlsb2FkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGF5TGlzdCA9IFsuLi5zdGF0ZS5wbGF5TGlzdF1cclxuICAgICAgICAgICAgICAgIHBsYXlMaXN0LnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5zaHVmZmxlUGxheUxpc3QgPSBwbGF5TGlzdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBzZWFyY2ggYmFyXHJcbiAgICAgICAgc2V0U2VhcmNoUGxheUxpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLnNlYXJjaFBsYXlsaXN0ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJc1NlYXJjaFRydWU6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1NlYXJjaCA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXRJc1NlYXJjaEZhbHNlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXRBY3RpdmVGaWx0ZXI6IChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPHsgYXV0aG9ycz86IHN0cmluZ1tdLCByZWxlYXNlX2RhdGVzPzogc3RyaW5nLCBnZW5yZXM/OiBzdHJpbmdbXSwgc2VhcmNoVmFsdWU/OiBzdHJpbmcgfT4pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuYWN0aXZlRmlsdGVycyA9IHtcclxuICAgICAgICAgICAgICAgIGF1dGhvcnM6IGFjdGlvbi5wYXlsb2FkLmF1dGhvcnMgfHwgc3RhdGUuYWN0aXZlRmlsdGVycy5hdXRob3JzLFxyXG4gICAgICAgICAgICAgICAgcmVsZWFzZV9kYXRlczogYWN0aW9uLnBheWxvYWQucmVsZWFzZV9kYXRlcyB8fCBudWxsLFxyXG4gICAgICAgICAgICAgICAgZ2VucmVzOiBhY3Rpb24ucGF5bG9hZC5nZW5yZXMgfHwgc3RhdGUuYWN0aXZlRmlsdGVycy5nZW5yZXMsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTogYWN0aW9uLnBheWxvYWQuc2VhcmNoVmFsdWUgfHwgc3RhdGUuYWN0aXZlRmlsdGVycy5zZWFyY2hWYWx1ZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgc3RhdGUuZmlsdGVyZWRQbGF5bGlzdCA9IHN0YXRlLnBsYXlMaXN0LmZpbHRlcigodHJhY2spID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzQXV0aG9ycyA9IHN0YXRlLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5sZW5ndGggPiAwID8gc3RhdGUuYWN0aXZlRmlsdGVycy5hdXRob3JzLmluY2x1ZGVzKHRyYWNrLmF1dGhvcikgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNHZW5yZXMgPSBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmdlbnJlcy5sZW5ndGggPiAwID8gc3RhdGUuYWN0aXZlRmlsdGVycy5nZW5yZXMuaW5jbHVkZXModHJhY2suZ2VucmUpIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpc0F1dGhvcnMgJiYgaXNHZW5yZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNsZWFyQWN0aXZlRmlsdGVyczogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmFjdGl2ZUZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBbXSxcclxuICAgICAgICAgICAgICAgIHJlbGVhc2VfZGF0ZXM6IFwiZGVmYXVsdFwiLFxyXG4gICAgICAgICAgICAgICAgZ2VucmVzOiBbXSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaFZhbHVlOiBcIlwiLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNldFBsYXlsaXN0TnVtYmVyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wbGF5bGlzdE51bWJlciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qge1xyXG5cclxuICAgIHNldEN1cnJlbnRUcmFjaywgc2V0UGxheUxpc3QsXHJcblxyXG4gICAgc2V0UGxheSwgc2V0UGF1c2UsIHNldE5leHRUcmFjaywgc2V0UHJldlRyYWNrLFxyXG5cclxuICAgIHNldFNodWZmbGUsXHJcblxyXG4gICAgc2V0U2VhcmNoUGxheUxpc3QsIHNldElzU2VhcmNoVHJ1ZSwgc2V0SXNTZWFyY2hGYWxzZSxcclxuXHJcbiAgICBzZXRBY3RpdmVGaWx0ZXIsIGNsZWFyQWN0aXZlRmlsdGVycyxcclxuXHJcbiAgICBzZXRQbGF5bGlzdE51bWJlcixcclxufSA9IHRyYWNrc1NsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBjb25zdCB0cmFja3NSZWR1Y2VyID0gdHJhY2tzU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJ0cmFjayIsInBsYXlMaXN0IiwiaXNQbGF5aW5nIiwiaXNTaHVmZmxlIiwic2h1ZmZsZVBsYXlMaXN0Iiwic2VhcmNoUGxheWxpc3QiLCJpc1NlYXJjaCIsImZpbHRlcmVkUGxheWxpc3QiLCJhY3RpdmVGaWx0ZXJzIiwiYXV0aG9ycyIsInJlbGVhc2VfZGF0ZXMiLCJnZW5yZXMiLCJzZWFyY2hWYWx1ZSIsInBsYXlsaXN0TnVtYmVyIiwic3dpdGNoVHJhY2siLCJkaXJlY3Rpb24iLCJzdGF0ZSIsImN1cnJlbnRUcmFja3MiLCJuZXdJbmRleCIsImZpbmRJbmRleCIsIml0ZW0iLCJpZCIsImxlbmd0aCIsInRyYWNrc1NsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwic2V0Q3VycmVudFRyYWNrIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldFBsYXlMaXN0Iiwic2V0UGxheSIsInNldFBhdXNlIiwic2V0TmV4dFRyYWNrIiwic2V0UHJldlRyYWNrIiwic2V0U2h1ZmZsZSIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwic2V0U2VhcmNoUGxheUxpc3QiLCJzZXRJc1NlYXJjaFRydWUiLCJzZXRJc1NlYXJjaEZhbHNlIiwic2V0QWN0aXZlRmlsdGVyIiwiZmlsdGVyIiwiaXNBdXRob3JzIiwiaW5jbHVkZXMiLCJhdXRob3IiLCJpc0dlbnJlcyIsImdlbnJlIiwiY2xlYXJBY3RpdmVGaWx0ZXJzIiwic2V0UGxheWxpc3ROdW1iZXIiLCJhY3Rpb25zIiwidHJhY2tzUmVkdWNlciIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});