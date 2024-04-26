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

/***/ "(app-pages-browser)/./src/store/features/authSlice.ts":
/*!*****************************************!*\
  !*** ./src/store/features/authSlice.ts ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authReducer: function() { return /* binding */ authReducer; },\n/* harmony export */   logOut: function() { return /* binding */ logOut; },\n/* harmony export */   setAuthRefreshToken: function() { return /* binding */ setAuthRefreshToken; },\n/* harmony export */   setAuthState: function() { return /* binding */ setAuthState; },\n/* harmony export */   setAuthUserData: function() { return /* binding */ setAuthUserData; },\n/* harmony export */   setAuthUserToken: function() { return /* binding */ setAuthUserToken; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst userDataFromLocalStorage = JSON.parse(localStorage.getItem(\"userData\") || \"null\");\nconst userTokenFromLocalStorage = localStorage.getItem(\"userToken\") || \"null\";\nconst userRefreshTokenFromLocalStorage = localStorage.getItem(\"refreshToken\") || \"null\";\nconst initialState = {\n    authState: userDataFromLocalStorage !== null,\n    authUserData: userDataFromLocalStorage || {\n        id: null,\n        username: \"\",\n        first_name: \"\",\n        last_name: \"\",\n        email: \"\"\n    },\n    authUserToken: userTokenFromLocalStorage || undefined,\n    authRefreshToken: userRefreshTokenFromLocalStorage || undefined\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        setAuthState: (state)=>{\n            state.authState = true;\n            localStorage.setItem(\"userData\", JSON.stringify(state.authUserData));\n        },\n        logOut: (state)=>{\n            state.authState = false;\n            state.authUserData = {\n                id: null,\n                username: \"\",\n                first_name: \"\",\n                last_name: \"\",\n                email: \"\"\n            };\n            localStorage.removeItem(\"userData\");\n        },\n        setAuthUserData: (state, action)=>{\n            state.authUserData = action.payload;\n            localStorage.setItem(\"userData\", JSON.stringify(action.payload));\n        },\n        setAuthUserToken: (state, action)=>{\n            state.authUserToken = action.payload;\n            localStorage.setItem(\"userToken\", action.payload);\n        },\n        setAuthRefreshToken: (state, action)=>{\n            state.authRefreshToken = action.payload;\n            localStorage.setItem(\"refreshToken\", action.payload);\n        }\n    }\n});\nconst { setAuthState, logOut, setAuthUserData, setAuthUserToken, setAuthRefreshToken } = authSlice.actions;\nconst authReducer = authSlice.reducer;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdG9yZS9mZWF0dXJlcy9hdXRoU2xpY2UudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUE4RDtBQWtCOUQsTUFBTUMsMkJBQTRDQyxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQyxlQUFlO0FBQ2pHLE1BQU1DLDRCQUEyQ0YsYUFBYUMsT0FBTyxDQUFDLGdCQUFnQjtBQUN0RixNQUFNRSxtQ0FBa0RILGFBQWFDLE9BQU8sQ0FBQyxtQkFBbUI7QUFFaEcsTUFBTUcsZUFBOEI7SUFDbENDLFdBQVdSLDZCQUE2QjtJQUN4Q1MsY0FBY1QsNEJBQTRCO1FBQ3hDVSxJQUFJO1FBQ0pDLFVBQVU7UUFDVkMsWUFBWTtRQUNaQyxXQUFXO1FBQ1hDLE9BQU87SUFDVDtJQUNBQyxlQUFlViw2QkFBNkJXO0lBQzVDQyxrQkFBa0JYLG9DQUFvQ1U7QUFDeEQ7QUFFQSxNQUFNRSxZQUFZbkIsNkRBQVdBLENBQUM7SUFDNUJvQixNQUFNO0lBQ05aO0lBQ0FhLFVBQVU7UUFFUkMsY0FBYyxDQUFDQztZQUNiQSxNQUFNZCxTQUFTLEdBQUc7WUFDbEJMLGFBQWFvQixPQUFPLENBQUMsWUFBWXRCLEtBQUt1QixTQUFTLENBQUNGLE1BQU1iLFlBQVk7UUFDcEU7UUFFQWdCLFFBQVEsQ0FBQ0g7WUFDUEEsTUFBTWQsU0FBUyxHQUFHO1lBQ2xCYyxNQUFNYixZQUFZLEdBQUc7Z0JBQ25CQyxJQUFJO2dCQUNKQyxVQUFVO2dCQUNWQyxZQUFZO2dCQUNaQyxXQUFXO2dCQUNYQyxPQUFPO1lBQ1Q7WUFDQVgsYUFBYXVCLFVBQVUsQ0FBQztRQUMxQjtRQUVBQyxpQkFBaUIsQ0FBQ0wsT0FBT007WUFDdkJOLE1BQU1iLFlBQVksR0FBR21CLE9BQU9DLE9BQU87WUFDbkMxQixhQUFhb0IsT0FBTyxDQUFDLFlBQVl0QixLQUFLdUIsU0FBUyxDQUFDSSxPQUFPQyxPQUFPO1FBQ2hFO1FBRUFDLGtCQUFrQixDQUFDUixPQUFPTTtZQUN4Qk4sTUFBTVAsYUFBYSxHQUFHYSxPQUFPQyxPQUFPO1lBQ3BDMUIsYUFBYW9CLE9BQU8sQ0FBQyxhQUFhSyxPQUFPQyxPQUFPO1FBQ2xEO1FBRUFFLHFCQUFxQixDQUFDVCxPQUFPTTtZQUMzQk4sTUFBTUwsZ0JBQWdCLEdBQUdXLE9BQU9DLE9BQU87WUFDdkMxQixhQUFhb0IsT0FBTyxDQUFDLGdCQUFnQkssT0FBT0MsT0FBTztRQUNyRDtJQUNGO0FBQ0Y7QUFHTyxNQUFNLEVBQUVSLFlBQVksRUFBRUksTUFBTSxFQUFFRSxlQUFlLEVBQUVHLGdCQUFnQixFQUFFQyxtQkFBbUIsRUFBRSxHQUFHYixVQUFVYyxPQUFPLENBQUM7QUFDM0csTUFBTUMsY0FBY2YsVUFBVWdCLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3RvcmUvZmVhdHVyZXMvYXV0aFNsaWNlLnRzPzcxY2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIFBheWxvYWRBY3Rpb24gfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxudHlwZSBVc2VyRGF0YSA9IHtcclxuICBpZDogbnVtYmVyIHwgbnVsbCxcclxuICB1c2VybmFtZTogc3RyaW5nLFxyXG4gIGZpcnN0X25hbWU6IHN0cmluZyxcclxuICBsYXN0X25hbWU6IHN0cmluZyxcclxuICBlbWFpbDogc3RyaW5nLFxyXG59O1xyXG5cclxudHlwZSBBdXRoU3RhdGVUeXBlID0ge1xyXG4gIGF1dGhTdGF0ZTogYm9vbGVhbixcclxuICBhdXRoVXNlckRhdGE6IFVzZXJEYXRhO1xyXG4gIGF1dGhVc2VyVG9rZW4/OiBzdHJpbmc7XHJcbiAgYXV0aFJlZnJlc2hUb2tlbj86IHN0cmluZztcclxuICAvLyBub0F1dGhMaWtlOiBib29sZWFuO1xyXG59O1xyXG5cclxuY29uc3QgdXNlckRhdGFGcm9tTG9jYWxTdG9yYWdlOiBVc2VyRGF0YSB8IG51bGwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyRGF0YScpIHx8ICdudWxsJyk7XHJcbmNvbnN0IHVzZXJUb2tlbkZyb21Mb2NhbFN0b3JhZ2U6IHN0cmluZyB8IG51bGwgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlclRva2VuJykgfHwgJ251bGwnO1xyXG5jb25zdCB1c2VyUmVmcmVzaFRva2VuRnJvbUxvY2FsU3RvcmFnZTogc3RyaW5nIHwgbnVsbCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoVG9rZW4nKSB8fCAnbnVsbCc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGU6IEF1dGhTdGF0ZVR5cGUgPSB7XHJcbiAgYXV0aFN0YXRlOiB1c2VyRGF0YUZyb21Mb2NhbFN0b3JhZ2UgIT09IG51bGwsXHJcbiAgYXV0aFVzZXJEYXRhOiB1c2VyRGF0YUZyb21Mb2NhbFN0b3JhZ2UgfHwge1xyXG4gICAgaWQ6IG51bGwsXHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIGZpcnN0X25hbWU6IFwiXCIsXHJcbiAgICBsYXN0X25hbWU6IFwiXCIsXHJcbiAgICBlbWFpbDogXCJcIixcclxuICB9LFxyXG4gIGF1dGhVc2VyVG9rZW46IHVzZXJUb2tlbkZyb21Mb2NhbFN0b3JhZ2UgfHwgdW5kZWZpbmVkLFxyXG4gIGF1dGhSZWZyZXNoVG9rZW46IHVzZXJSZWZyZXNoVG9rZW5Gcm9tTG9jYWxTdG9yYWdlIHx8IHVuZGVmaW5lZCxcclxufTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuXHJcbiAgICBzZXRBdXRoU3RhdGU6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS5hdXRoU3RhdGUgPSB0cnVlO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeShzdGF0ZS5hdXRoVXNlckRhdGEpKTtcclxuICAgIH0sXHJcblxyXG4gICAgbG9nT3V0OiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUuYXV0aFN0YXRlID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmF1dGhVc2VyRGF0YSA9IHtcclxuICAgICAgICBpZDogbnVsbCxcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBmaXJzdF9uYW1lOiBcIlwiLFxyXG4gICAgICAgIGxhc3RfbmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgfTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJEYXRhJyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEF1dGhVc2VyRGF0YTogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248VXNlckRhdGE+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmF1dGhVc2VyRGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckRhdGEnLCBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXRBdXRoVXNlclRva2VuOiAoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxzdHJpbmc+KSA9PiB7XHJcbiAgICAgIHN0YXRlLmF1dGhVc2VyVG9rZW4gPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJUb2tlbicsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0QXV0aFJlZnJlc2hUb2tlbjogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248c3RyaW5nPikgPT4ge1xyXG4gICAgICBzdGF0ZS5hdXRoUmVmcmVzaFRva2VuID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZWZyZXNoVG9rZW4nLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0sXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgeyBzZXRBdXRoU3RhdGUsIGxvZ091dCwgc2V0QXV0aFVzZXJEYXRhLCBzZXRBdXRoVXNlclRva2VuLCBzZXRBdXRoUmVmcmVzaFRva2VuIH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IGF1dGhSZWR1Y2VyID0gYXV0aFNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwidXNlckRhdGFGcm9tTG9jYWxTdG9yYWdlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXJUb2tlbkZyb21Mb2NhbFN0b3JhZ2UiLCJ1c2VyUmVmcmVzaFRva2VuRnJvbUxvY2FsU3RvcmFnZSIsImluaXRpYWxTdGF0ZSIsImF1dGhTdGF0ZSIsImF1dGhVc2VyRGF0YSIsImlkIiwidXNlcm5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJhdXRoVXNlclRva2VuIiwidW5kZWZpbmVkIiwiYXV0aFJlZnJlc2hUb2tlbiIsImF1dGhTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsInNldEF1dGhTdGF0ZSIsInN0YXRlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImxvZ091dCIsInJlbW92ZUl0ZW0iLCJzZXRBdXRoVXNlckRhdGEiLCJhY3Rpb24iLCJwYXlsb2FkIiwic2V0QXV0aFVzZXJUb2tlbiIsInNldEF1dGhSZWZyZXNoVG9rZW4iLCJhY3Rpb25zIiwiYXV0aFJlZHVjZXIiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/store/features/authSlice.ts\n"));

/***/ })

});