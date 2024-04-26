"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/tracks/[id]/page",{

/***/ "(app-pages-browser)/./src/store/features/tracksSlice.ts":
/*!*******************************************!*\
  !*** ./src/store/features/tracksSlice.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearActiveFilters: function() { return /* binding */ clearActiveFilters; },\n/* harmony export */   setActiveFilter: function() { return /* binding */ setActiveFilter; },\n/* harmony export */   setCurrentTrack: function() { return /* binding */ setCurrentTrack; },\n/* harmony export */   setIsSearchFalse: function() { return /* binding */ setIsSearchFalse; },\n/* harmony export */   setIsSearchTrue: function() { return /* binding */ setIsSearchTrue; },\n/* harmony export */   setNextTrack: function() { return /* binding */ setNextTrack; },\n/* harmony export */   setPause: function() { return /* binding */ setPause; },\n/* harmony export */   setPlay: function() { return /* binding */ setPlay; },\n/* harmony export */   setPlayList: function() { return /* binding */ setPlayList; },\n/* harmony export */   setPlaylistNumber: function() { return /* binding */ setPlaylistNumber; },\n/* harmony export */   setPrevTrack: function() { return /* binding */ setPrevTrack; },\n/* harmony export */   setSearchPlayList: function() { return /* binding */ setSearchPlayList; },\n/* harmony export */   setShuffle: function() { return /* binding */ setShuffle; },\n/* harmony export */   tracksReducer: function() { return /* binding */ tracksReducer; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    track: null,\n    playList: [],\n    isPlaying: false,\n    isShuffle: false,\n    shufflePlayList: [],\n    searchPlaylist: [],\n    isSearch: false,\n    filteredPlaylist: [],\n    activeFilters: {\n        authors: [],\n        release_dates: \"default\",\n        genres: [],\n        searchValue: \"\"\n    },\n    playlistNumber: null\n};\nconst switchTrack = (direction)=>{\n    return (state)=>{\n        const currentTracks = state.isShuffle ? state.shufflePlayList : state.playList;\n        let newIndex = currentTracks.findIndex((item)=>{\n            var _state_track;\n            return item.id === ((_state_track = state.track) === null || _state_track === void 0 ? void 0 : _state_track.id);\n        }) + direction;\n        newIndex = (newIndex + currentTracks.length) % currentTracks.length;\n        state.track = currentTracks[newIndex];\n        state.isPlaying = true;\n    };\n};\nconst tracksSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"tracks\",\n    initialState,\n    reducers: {\n        // playlist\n        setCurrentTrack: (state, action)=>{\n            state.track = action.payload;\n            state.isPlaying = true;\n        },\n        setPlayList: (state, action)=>{\n            state.playList = action.payload;\n        },\n        // controls\n        setPlay: (state)=>{\n            state.isPlaying = true;\n        },\n        setPause: (state)=>{\n            state.isPlaying = false;\n        },\n        setNextTrack: switchTrack(1),\n        setPrevTrack: switchTrack(-1),\n        // features\n        setShuffle: (state, action)=>{\n            state.isShuffle = action.payload;\n            if (action.payload) {\n                const playList = [\n                    ...state.playList\n                ];\n                playList.sort(()=>Math.random() - 0.5);\n                state.shufflePlayList = playList;\n            }\n        },\n        // search bar\n        setSearchPlayList: (state, action)=>{\n            state.searchPlaylist = action.payload;\n        },\n        setIsSearchTrue: (state)=>{\n            state.isSearch = true;\n        },\n        setIsSearchFalse: (state)=>{\n            state.isSearch = false;\n        },\n        // filters\n        setActiveFilter: (state, action)=>{\n            state.activeFilters = {\n                authors: action.payload.authors || state.activeFilters.authors,\n                release_dates: action.payload.release_dates || null,\n                genres: action.payload.genres || state.activeFilters.genres,\n                searchValue: action.payload.searchValue || state.activeFilters.searchValue\n            };\n            state.filteredPlaylist = state.playList.filter((track)=>{\n                const isAuthors = state.activeFilters.authors.length > 0 ? state.activeFilters.authors.includes(track.author) : true;\n                const isGenres = state.activeFilters.genres.length > 0 ? state.activeFilters.genres.includes(track.genre) : true;\n                return isAuthors && isGenres;\n            });\n        },\n        clearActiveFilters: (state)=>{\n            state.activeFilters = {\n                authors: [],\n                release_dates: \"default\",\n                genres: [],\n                searchValue: \"\"\n            };\n        },\n        setPlaylistNumber: (state, action)=>{\n            state.playlistNumber = action.payload;\n        }\n    }\n});\nconst { // playlist\nsetCurrentTrack, setPlayList, // controls\nsetPlay, setPause, setNextTrack, setPrevTrack, // features\nsetShuffle, // search bat\nsetSearchPlayList, setIsSearchTrue, setIsSearchFalse, // filters\nsetActiveFilter, clearActiveFilters, // set chosen playlist\nsetPlaylistNumber } = tracksSlice.actions;\nconst tracksReducer = tracksSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkQ7QUF3QjdELE1BQU1DLGVBQWdDO0lBQ2xDQyxPQUFPO0lBQ1BDLFVBQVUsRUFBRTtJQUNaQyxXQUFXO0lBQ1hDLFdBQVc7SUFDWEMsaUJBQWlCLEVBQUU7SUFFbkJDLGdCQUFnQixFQUFFO0lBQ2xCQyxVQUFVO0lBRVZDLGtCQUFrQixFQUFFO0lBRXBCQyxlQUFlO1FBQ1hDLFNBQVMsRUFBRTtRQUNYQyxlQUFlO1FBQ2ZDLFFBQVEsRUFBRTtRQUNWQyxhQUFhO0lBQ2pCO0lBRUFDLGdCQUFnQjtBQUNwQjtBQUVBLE1BQU1DLGNBQWMsQ0FBQ0M7SUFDakIsT0FBTyxDQUFDQztRQUNKLE1BQU1DLGdCQUFnQkQsTUFBTWIsU0FBUyxHQUFHYSxNQUFNWixlQUFlLEdBQUdZLE1BQU1mLFFBQVE7UUFDOUUsSUFBSWlCLFdBQVdELGNBQWNFLFNBQVMsQ0FBQ0MsQ0FBQUE7Z0JBQW9CSjttQkFBWkksS0FBS0MsRUFBRSxPQUFLTCxlQUFBQSxNQUFNaEIsS0FBSyxjQUFYZ0IsbUNBQUFBLGFBQWFLLEVBQUU7YUFBSU47UUFFOUVHLFdBQVcsQ0FBQ0EsV0FBV0QsY0FBY0ssTUFBTSxJQUFJTCxjQUFjSyxNQUFNO1FBRW5FTixNQUFNaEIsS0FBSyxHQUFHaUIsYUFBYSxDQUFDQyxTQUFTO1FBQ3JDRixNQUFNZCxTQUFTLEdBQUc7SUFDdEI7QUFDSjtBQUVBLE1BQU1xQixjQUFjekIsNkRBQVdBLENBQUM7SUFDNUIwQixNQUFNO0lBRU56QjtJQUVBMEIsVUFBVTtRQUNOLFdBQVc7UUFDWEMsaUJBQWlCLENBQUNWLE9BQU9XO1lBQ3JCWCxNQUFNaEIsS0FBSyxHQUFHMkIsT0FBT0MsT0FBTztZQUM1QlosTUFBTWQsU0FBUyxHQUFHO1FBQ3RCO1FBQ0EyQixhQUFhLENBQUNiLE9BQU9XO1lBQ2pCWCxNQUFNZixRQUFRLEdBQUcwQixPQUFPQyxPQUFPO1FBQ25DO1FBQ0EsV0FBVztRQUNYRSxTQUFTLENBQUNkO1lBQ05BLE1BQU1kLFNBQVMsR0FBRztRQUN0QjtRQUNBNkIsVUFBVSxDQUFDZjtZQUNQQSxNQUFNZCxTQUFTLEdBQUc7UUFDdEI7UUFDQThCLGNBQWNsQixZQUFZO1FBQzFCbUIsY0FBY25CLFlBQVksQ0FBQztRQUMzQixXQUFXO1FBQ1hvQixZQUFZLENBQUNsQixPQUFPVztZQUNoQlgsTUFBTWIsU0FBUyxHQUFHd0IsT0FBT0MsT0FBTztZQUNoQyxJQUFJRCxPQUFPQyxPQUFPLEVBQUU7Z0JBQ2hCLE1BQU0zQixXQUFXO3VCQUFJZSxNQUFNZixRQUFRO2lCQUFDO2dCQUNwQ0EsU0FBU2tDLElBQUksQ0FBQyxJQUFNQyxLQUFLQyxNQUFNLEtBQUs7Z0JBQ3BDckIsTUFBTVosZUFBZSxHQUFHSDtZQUM1QjtRQUNKO1FBQ0EsYUFBYTtRQUNicUMsbUJBQW1CLENBQUN0QixPQUFPVztZQUN2QlgsTUFBTVgsY0FBYyxHQUFHc0IsT0FBT0MsT0FBTztRQUN6QztRQUNBVyxpQkFBaUIsQ0FBQ3ZCO1lBQ2RBLE1BQU1WLFFBQVEsR0FBRztRQUNyQjtRQUNBa0Msa0JBQWtCLENBQUN4QjtZQUNmQSxNQUFNVixRQUFRLEdBQUc7UUFDckI7UUFDQSxVQUFVO1FBQ1ZtQyxpQkFBaUIsQ0FBQ3pCLE9BQU9XO1lBQ3JCWCxNQUFNUixhQUFhLEdBQUc7Z0JBQ2xCQyxTQUFTa0IsT0FBT0MsT0FBTyxDQUFDbkIsT0FBTyxJQUFJTyxNQUFNUixhQUFhLENBQUNDLE9BQU87Z0JBQzlEQyxlQUFlaUIsT0FBT0MsT0FBTyxDQUFDbEIsYUFBYSxJQUFJO2dCQUMvQ0MsUUFBUWdCLE9BQU9DLE9BQU8sQ0FBQ2pCLE1BQU0sSUFBSUssTUFBTVIsYUFBYSxDQUFDRyxNQUFNO2dCQUMzREMsYUFBYWUsT0FBT0MsT0FBTyxDQUFDaEIsV0FBVyxJQUFJSSxNQUFNUixhQUFhLENBQUNJLFdBQVc7WUFDOUU7WUFDQUksTUFBTVQsZ0JBQWdCLEdBQUdTLE1BQU1mLFFBQVEsQ0FBQ3lDLE1BQU0sQ0FBQyxDQUFDMUM7Z0JBQzVDLE1BQU0yQyxZQUFZM0IsTUFBTVIsYUFBYSxDQUFDQyxPQUFPLENBQUNhLE1BQU0sR0FBRyxJQUFJTixNQUFNUixhQUFhLENBQUNDLE9BQU8sQ0FBQ21DLFFBQVEsQ0FBQzVDLE1BQU02QyxNQUFNLElBQUk7Z0JBQ2hILE1BQU1DLFdBQVc5QixNQUFNUixhQUFhLENBQUNHLE1BQU0sQ0FBQ1csTUFBTSxHQUFHLElBQUlOLE1BQU1SLGFBQWEsQ0FBQ0csTUFBTSxDQUFDaUMsUUFBUSxDQUFDNUMsTUFBTStDLEtBQUssSUFBSTtnQkFDNUcsT0FBT0osYUFBYUc7WUFDeEI7UUFDSjtRQUNBRSxvQkFBb0IsQ0FBQ2hDO1lBQ2pCQSxNQUFNUixhQUFhLEdBQUc7Z0JBQ2xCQyxTQUFTLEVBQUU7Z0JBQ1hDLGVBQWU7Z0JBQ2ZDLFFBQVEsRUFBRTtnQkFDVkMsYUFBYTtZQUNqQjtRQUNKO1FBRUFxQyxtQkFBbUIsQ0FBQ2pDLE9BQU9XO1lBQ3ZCWCxNQUFNSCxjQUFjLEdBQUdjLE9BQU9DLE9BQU87UUFDekM7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUNULFdBQVc7QUFDWEYsZUFBZSxFQUFFRyxXQUFXLEVBQzVCLFdBQVc7QUFDWEMsT0FBTyxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUM3QyxXQUFXO0FBQ1hDLFVBQVUsRUFDVixhQUFhO0FBQ2JJLGlCQUFpQixFQUFFQyxlQUFlLEVBQUVDLGdCQUFnQixFQUNwRCxVQUFVO0FBQ1ZDLGVBQWUsRUFBRU8sa0JBQWtCLEVBQ25DLHNCQUFzQjtBQUN0QkMsaUJBQWlCLEVBQ3BCLEdBQUcxQixZQUFZMkIsT0FBTyxDQUFDO0FBQ2pCLE1BQU1DLGdCQUFnQjVCLFlBQVk2QixPQUFPLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0b3JlL2ZlYXR1cmVzL3RyYWNrc1NsaWNlLnRzPzE2YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdHJhY2tUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIlxyXG5pbXBvcnQgeyBQYXlsb2FkQWN0aW9uLCBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcclxuXHJcbnR5cGUgVHJhY2tzU3RhdGVUeXBlID0ge1xyXG4gICAgdHJhY2s6IG51bGwgfCB0cmFja1R5cGUsXHJcbiAgICBwbGF5TGlzdDogdHJhY2tUeXBlW11cclxuICAgIGlzUGxheWluZzogYm9vbGVhbixcclxuICAgIGlzU2h1ZmZsZTogYm9vbGVhbixcclxuICAgIHNodWZmbGVQbGF5TGlzdDogdHJhY2tUeXBlW10sXHJcblxyXG4gICAgc2VhcmNoUGxheWxpc3Q6IHRyYWNrVHlwZVtdLFxyXG4gICAgaXNTZWFyY2g6IGJvb2xlYW4sXHJcblxyXG4gICAgZmlsdGVyZWRQbGF5bGlzdDogdHJhY2tUeXBlW10sXHJcblxyXG4gICAgYWN0aXZlRmlsdGVyczoge1xyXG4gICAgICAgIGF1dGhvcnM6IEFycmF5PHN0cmluZz4sXHJcbiAgICAgICAgcmVsZWFzZV9kYXRlczogbnVsbCB8IHN0cmluZyxcclxuICAgICAgICBnZW5yZXM6IEFycmF5PHN0cmluZz4sXHJcbiAgICAgICAgc2VhcmNoVmFsdWU6IHN0cmluZyxcclxuICAgIH0sXHJcblxyXG4gICAgcGxheWxpc3ROdW1iZXI6IG51bWJlciB8IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IFRyYWNrc1N0YXRlVHlwZSA9IHtcclxuICAgIHRyYWNrOiBudWxsLFxyXG4gICAgcGxheUxpc3Q6IFtdLFxyXG4gICAgaXNQbGF5aW5nOiBmYWxzZSxcclxuICAgIGlzU2h1ZmZsZTogZmFsc2UsXHJcbiAgICBzaHVmZmxlUGxheUxpc3Q6IFtdLFxyXG5cclxuICAgIHNlYXJjaFBsYXlsaXN0OiBbXSxcclxuICAgIGlzU2VhcmNoOiBmYWxzZSxcclxuXHJcbiAgICBmaWx0ZXJlZFBsYXlsaXN0OiBbXSxcclxuXHJcbiAgICBhY3RpdmVGaWx0ZXJzOiB7XHJcbiAgICAgICAgYXV0aG9yczogW10sXHJcbiAgICAgICAgcmVsZWFzZV9kYXRlczogXCJkZWZhdWx0XCIsXHJcbiAgICAgICAgZ2VucmVzOiBbXSxcclxuICAgICAgICBzZWFyY2hWYWx1ZTogXCJcIixcclxuICAgIH0sXHJcblxyXG4gICAgcGxheWxpc3ROdW1iZXI6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBzd2l0Y2hUcmFjayA9IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xyXG4gICAgcmV0dXJuIChzdGF0ZTogVHJhY2tzU3RhdGVUeXBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRyYWNrcyA9IHN0YXRlLmlzU2h1ZmZsZSA/IHN0YXRlLnNodWZmbGVQbGF5TGlzdCA6IHN0YXRlLnBsYXlMaXN0O1xyXG4gICAgICAgIGxldCBuZXdJbmRleCA9IGN1cnJlbnRUcmFja3MuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gc3RhdGUudHJhY2s/LmlkKSArIGRpcmVjdGlvbjtcclxuXHJcbiAgICAgICAgbmV3SW5kZXggPSAobmV3SW5kZXggKyBjdXJyZW50VHJhY2tzLmxlbmd0aCkgJSBjdXJyZW50VHJhY2tzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgc3RhdGUudHJhY2sgPSBjdXJyZW50VHJhY2tzW25ld0luZGV4XTtcclxuICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3QgdHJhY2tzU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAndHJhY2tzJyxcclxuXHJcbiAgICBpbml0aWFsU3RhdGUsXHJcblxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICAvLyBwbGF5bGlzdFxyXG4gICAgICAgIHNldEN1cnJlbnRUcmFjazogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUudHJhY2sgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldFBsYXlMaXN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5wbGF5TGlzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gY29udHJvbHNcclxuICAgICAgICBzZXRQbGF5OiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNQbGF5aW5nID0gdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0UGF1c2U6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5pc1BsYXlpbmcgPSBmYWxzZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0TmV4dFRyYWNrOiBzd2l0Y2hUcmFjaygxKSxcclxuICAgICAgICBzZXRQcmV2VHJhY2s6IHN3aXRjaFRyYWNrKC0xKSxcclxuICAgICAgICAvLyBmZWF0dXJlc1xyXG4gICAgICAgIHNldFNodWZmbGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2h1ZmZsZSA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ucGF5bG9hZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxheUxpc3QgPSBbLi4uc3RhdGUucGxheUxpc3RdXHJcbiAgICAgICAgICAgICAgICBwbGF5TGlzdC5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuc2h1ZmZsZVBsYXlMaXN0ID0gcGxheUxpc3RcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gc2VhcmNoIGJhclxyXG4gICAgICAgIHNldFNlYXJjaFBsYXlMaXN0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5zZWFyY2hQbGF5bGlzdCA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SXNTZWFyY2hUcnVlOiAoc3RhdGUpID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuaXNTZWFyY2ggPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2V0SXNTZWFyY2hGYWxzZTogKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmlzU2VhcmNoID0gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBmaWx0ZXJzXHJcbiAgICAgICAgc2V0QWN0aXZlRmlsdGVyOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjx7IGF1dGhvcnM/OiBzdHJpbmdbXSwgcmVsZWFzZV9kYXRlcz86IHN0cmluZywgZ2VucmVzPzogc3RyaW5nW10sIHNlYXJjaFZhbHVlPzogc3RyaW5nIH0+KSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmFjdGl2ZUZpbHRlcnMgPSB7XHJcbiAgICAgICAgICAgICAgICBhdXRob3JzOiBhY3Rpb24ucGF5bG9hZC5hdXRob3JzIHx8IHN0YXRlLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycyxcclxuICAgICAgICAgICAgICAgIHJlbGVhc2VfZGF0ZXM6IGFjdGlvbi5wYXlsb2FkLnJlbGVhc2VfZGF0ZXMgfHwgbnVsbCxcclxuICAgICAgICAgICAgICAgIGdlbnJlczogYWN0aW9uLnBheWxvYWQuZ2VucmVzIHx8IHN0YXRlLmFjdGl2ZUZpbHRlcnMuZ2VucmVzLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVmFsdWU6IGFjdGlvbi5wYXlsb2FkLnNlYXJjaFZhbHVlIHx8IHN0YXRlLmFjdGl2ZUZpbHRlcnMuc2VhcmNoVmFsdWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHN0YXRlLmZpbHRlcmVkUGxheWxpc3QgPSBzdGF0ZS5wbGF5TGlzdC5maWx0ZXIoKHRyYWNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc0F1dGhvcnMgPSBzdGF0ZS5hY3RpdmVGaWx0ZXJzLmF1dGhvcnMubGVuZ3RoID4gMCA/IHN0YXRlLmFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5pbmNsdWRlcyh0cmFjay5hdXRob3IpIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzR2VucmVzID0gc3RhdGUuYWN0aXZlRmlsdGVycy5nZW5yZXMubGVuZ3RoID4gMCA/IHN0YXRlLmFjdGl2ZUZpbHRlcnMuZ2VucmVzLmluY2x1ZGVzKHRyYWNrLmdlbnJlKSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNBdXRob3JzICYmIGlzR2VucmVzXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGVhckFjdGl2ZUZpbHRlcnM6IChzdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5hY3RpdmVGaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICAgICAgYXV0aG9yczogW10sXHJcbiAgICAgICAgICAgICAgICByZWxlYXNlX2RhdGVzOiBcImRlZmF1bHRcIixcclxuICAgICAgICAgICAgICAgIGdlbnJlczogW10sXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hWYWx1ZTogXCJcIixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBzZXRQbGF5bGlzdE51bWJlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUucGxheWxpc3ROdW1iZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IHtcclxuICAgIC8vIHBsYXlsaXN0XHJcbiAgICBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0LFxyXG4gICAgLy8gY29udHJvbHNcclxuICAgIHNldFBsYXksIHNldFBhdXNlLCBzZXROZXh0VHJhY2ssIHNldFByZXZUcmFjayxcclxuICAgIC8vIGZlYXR1cmVzXHJcbiAgICBzZXRTaHVmZmxlLFxyXG4gICAgLy8gc2VhcmNoIGJhdFxyXG4gICAgc2V0U2VhcmNoUGxheUxpc3QsIHNldElzU2VhcmNoVHJ1ZSwgc2V0SXNTZWFyY2hGYWxzZSxcclxuICAgIC8vIGZpbHRlcnNcclxuICAgIHNldEFjdGl2ZUZpbHRlciwgY2xlYXJBY3RpdmVGaWx0ZXJzLFxyXG4gICAgLy8gc2V0IGNob3NlbiBwbGF5bGlzdFxyXG4gICAgc2V0UGxheWxpc3ROdW1iZXIsXHJcbn0gPSB0cmFja3NTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3QgdHJhY2tzUmVkdWNlciA9IHRyYWNrc1NsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidHJhY2siLCJwbGF5TGlzdCIsImlzUGxheWluZyIsImlzU2h1ZmZsZSIsInNodWZmbGVQbGF5TGlzdCIsInNlYXJjaFBsYXlsaXN0IiwiaXNTZWFyY2giLCJmaWx0ZXJlZFBsYXlsaXN0IiwiYWN0aXZlRmlsdGVycyIsImF1dGhvcnMiLCJyZWxlYXNlX2RhdGVzIiwiZ2VucmVzIiwic2VhcmNoVmFsdWUiLCJwbGF5bGlzdE51bWJlciIsInN3aXRjaFRyYWNrIiwiZGlyZWN0aW9uIiwic3RhdGUiLCJjdXJyZW50VHJhY2tzIiwibmV3SW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtIiwiaWQiLCJsZW5ndGgiLCJ0cmFja3NTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEN1cnJlbnRUcmFjayIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRQbGF5TGlzdCIsInNldFBsYXkiLCJzZXRQYXVzZSIsInNldE5leHRUcmFjayIsInNldFByZXZUcmFjayIsInNldFNodWZmbGUiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInNldFNlYXJjaFBsYXlMaXN0Iiwic2V0SXNTZWFyY2hUcnVlIiwic2V0SXNTZWFyY2hGYWxzZSIsInNldEFjdGl2ZUZpbHRlciIsImZpbHRlciIsImlzQXV0aG9ycyIsImluY2x1ZGVzIiwiYXV0aG9yIiwiaXNHZW5yZXMiLCJnZW5yZSIsImNsZWFyQWN0aXZlRmlsdGVycyIsInNldFBsYXlsaXN0TnVtYmVyIiwiYWN0aW9ucyIsInRyYWNrc1JlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/tracksSlice.ts\n"));

/***/ })

});