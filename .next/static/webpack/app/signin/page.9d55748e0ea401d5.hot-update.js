"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signin/page",{

/***/ "(app-pages-browser)/./src/app/signin/page.tsx":
/*!*********************************!*\
  !*** ./src/app/signin/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _signin_page_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../signin/page.module.css */ \"(app-pages-browser)/./src/app/signin/page.module.css\");\n/* harmony import */ var _signin_page_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_signin_page_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FormWrapper_FormWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FormWrapper/FormWrapper */ \"(app-pages-browser)/./src/components/FormWrapper/FormWrapper.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/features/authSlice */ \"(app-pages-browser)/./src/store/features/authSlice.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _types_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/types/hooks */ \"(app-pages-browser)/./src/types/hooks.ts\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/api */ \"(app-pages-browser)/./src/api/api.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst SignIn = ()=>{\n    _s();\n    const dispatcher = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppDispatch)();\n    const loginForm = {\n        email: \"\",\n        password: \"\"\n    };\n    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(loginForm);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const authState = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector)((state)=>state.auth.authState);\n    if (authState) {\n        router.push(\"/tracks\");\n        return null;\n    }\n    const handleToken = async (loginData)=>{\n        try {\n            await (0,_api_api__WEBPACK_IMPORTED_MODULE_9__.getToken)(loginData).then((tokenData)=>{\n                dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthUserToken)(tokenData.access));\n                dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthRefreshToken)(tokenData.refresh));\n            });\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            if (loginData.email === \"\" || loginData.password === \"\") {\n                setHasError(true);\n                throw new Error(\"Заполните все поля ввода\");\n            }\n            await (0,_api_api__WEBPACK_IMPORTED_MODULE_9__.login)(loginData).then((userData)=>{\n                dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthUserData)(userData));\n                dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthState)());\n                handleToken(loginData);\n            });\n        } catch (error) {\n            setHasError(error.message);\n            console.error(error);\n            setTimeout(()=>{\n                setHasError(false);\n            }, 3000);\n        }\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setLoginData({\n            ...loginData,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormWrapper_FormWrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_10___default().modalLogo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        width: 140,\n                        height: 21,\n                        src: \"/img/logo_modal.png\",\n                        alt: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"osetr@fish.com\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"abirvalg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_signin_page_module_css__WEBPACK_IMPORTED_MODULE_10___default().modalInput), (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_10___default().login)),\n                type: \"text\",\n                name: \"email\",\n                placeholder: \"Почта\",\n                value: loginData.email,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_signin_page_module_css__WEBPACK_IMPORTED_MODULE_10___default().modalInput), (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_10___default().password)),\n                type: \"password\",\n                name: \"password\",\n                placeholder: \"Пароль\",\n                value: loginData.password,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, undefined),\n            hasError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"btnEnter\",\n                    disabled: true,\n                    className: (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_10___default().modalBtnEnter),\n                    onClick: handleLogin,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: hasError\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                    lineNumber: 109,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"btnEnter\",\n                className: (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_10___default().modalBtnEnter),\n                onClick: handleLogin,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Войти\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                    lineNumber: 124,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/signup\",\n                className: (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_10___default().modalBtnSignup),\n                children: \"Зарегистрироваться\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignIn, \"ewzjL7lAIZopk6EeSrDKc1tVzeM=\", false, function() {\n    return [\n        _types_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_8__.useAppSelector\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn); // \"use client\"\n // import Image from \"next/image\";\n // import Link from \"next/link\";\n // import styles from \"../signin/page.module.css\";\n // import classNames from \"classnames\";\n // import FormWrapper from \"@/components/FormWrapper/FormWrapper\";\n // import { useState } from \"react\";\n // import { setAuthRefreshToken, setAuthState, setAuthUserData, setAuthUserToken } from \"@/store/features/authSlice\";\n // import { useRouter } from \"next/navigation\";\n // import { useAppDispatch, useAppSelector } from \"@/types/hooks\";\n // import { getToken, login } from \"@/api/api\";\n // type userDataType = {\n //   email: string;\n //   password: string;\n // };\n // const SignIn = () => {\n //   const dispatcher = useAppDispatch();\n //   const loginForm = {\n //     email: '',\n //     password: '',\n //   };\n //   const [loginData, setLoginData] = useState(loginForm);\n //   const [hasError, setHasError] = useState(false);\n //   const router = useRouter();\n //   const authState = useAppSelector((state) => state.auth.authState);\n //   if (authState) {\n //     router.push('/tracks');\n //     return null;\n //   }\n //   const handleToken = async (loginData: userDataType) => {\n //     try {\n //       await getToken(loginData).then((tokenData) => {\n //         dispatcher(setAuthUserToken(tokenData.access));\n //         dispatcher(setAuthRefreshToken(tokenData.refresh));\n //       });\n //     } catch (error: any) {\n //       console.error(error);\n //     }\n //   };\n //   const handleLogin = async (e: any) => {\n //     console.log(\"попытка входа: \" + loginData.email + \" \" + loginData.password);\n //     e.preventDefault();\n //     try {\n //       if (loginData.email === \"\" || loginData.password === \"\") {\n //         setHasError(true);\n //         throw new Error('Заполните все поля ввода');\n //       }\n //       await login(loginData).then((userData) => {\n //         dispatcher(setAuthUserData(userData));\n //         dispatcher(setAuthState());\n //         handleToken(loginData);\n //       });\n //     } catch (error: any) {\n //       setHasError(error.message);\n //       console.error(error);\n //       setTimeout(() => {\n //         setHasError(false);\n //       }, 3000);\n //     }\n //   };\n //   const handleInputChange = (e: any) => {\n //     const { name, value } = e.target;\n //     setLoginData({\n //       ...loginData,\n //       [name]: value,\n //     });\n //   };\n //   return (\n //     <FormWrapper>\n //       <div className={styles.modalLogo}>\n //         <Link href=\"/\">\n //           <Image\n //             width={140}\n //             height={21}\n //             src=\"/img/logo_modal.png\"\n //             alt=\"logo\"\n //           />\n //         </Link>\n //       </div>\n //       <input\n //         className={classNames(styles.modalInput, styles.login)}\n //         type=\"text\"\n //         name=\"email\"\n //         placeholder=\"Почта\"\n //         value={loginData.email}\n //         onChange={handleInputChange}\n //       />\n //       <input\n //         className={classNames(styles.modalInput, styles.password)}\n //         type=\"password\"\n //         name=\"password\"\n //         placeholder=\"Пароль\"\n //         value={loginData.password}\n //         onChange={handleInputChange}\n //       />\n //       {hasError ? (\n //         <>\n //           <button\n //             id=\"btnEnter\"\n //             disabled\n //             className={styles.modalBtnEnter}\n //             onClick={handleLogin}\n //           >\n //             <p>{hasError}</p>\n //           </button>\n //         </>\n //       ) : (\n //         <button\n //           id=\"btnEnter\"\n //           className={styles.modalBtnEnter}\n //           onClick={handleLogin}\n //         >\n //           <p>Войти</p>\n //         </button>\n //       )}\n //       <Link href=\"/signup\" className={styles.modalBtnSignup}>\n //         Зарегистрироваться\n //       </Link>\n //     </FormWrapper>\n //   );\n // }\n // export default SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbmluL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ0Y7QUFDa0I7QUFDWDtBQUMyQjtBQUM5QjtBQUNpRjtBQUN0RTtBQUNtQjtBQUNuQjtBQU81QyxNQUFNZSxTQUFTOztJQUViLE1BQU1DLGFBQWFMLDREQUFjQTtJQUNqQyxNQUFNTSxZQUFZO1FBQ2hCQyxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUNBLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBLENBQUNZO0lBQzNDLE1BQU0sQ0FBQ0ssVUFBVUMsWUFBWSxHQUFHbEIsK0NBQVFBLENBQUM7SUFFekMsTUFBTW1CLFNBQVNkLDBEQUFTQTtJQUN4QixNQUFNZSxZQUFZYiw0REFBY0EsQ0FBQyxDQUFDYyxRQUFVQSxNQUFNQyxJQUFJLENBQUNGLFNBQVM7SUFDaEUsSUFBSUEsV0FBVztRQUNiRCxPQUFPSSxJQUFJLENBQUM7UUFDWixPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxjQUFjLE9BQU9UO1FBQ3pCLElBQUk7WUFDRixNQUFNUCxrREFBUUEsQ0FBQ08sV0FBV1UsSUFBSSxDQUFDLENBQUNDO2dCQUM5QmYsV0FBV1AsMkVBQWdCQSxDQUFDc0IsVUFBVUMsTUFBTTtnQkFDNUNoQixXQUFXViw4RUFBbUJBLENBQUN5QixVQUFVRSxPQUFPO1lBQ2xEO1FBQ0YsRUFBRSxPQUFPQyxPQUFZO1lBQ25CQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNRSxjQUFjLE9BQU9DO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRixJQUFJbEIsVUFBVUYsS0FBSyxLQUFLLE1BQU1FLFVBQVVELFFBQVEsS0FBSyxJQUFJO2dCQUN2REksWUFBWTtnQkFDWixNQUFNLElBQUlnQixNQUFNO1lBQ2xCO1lBQ0EsTUFBTXpCLCtDQUFLQSxDQUFDTSxXQUFXVSxJQUFJLENBQUMsQ0FBQ1U7Z0JB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QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zaWduaW4vcGFnZS50c3g/MzcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc2lnbmluL3BhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtV3JhcHBlci9Gb3JtV3JhcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzZXRBdXRoUmVmcmVzaFRva2VuLCBzZXRBdXRoU3RhdGUsIHNldEF1dGhVc2VyRGF0YSwgc2V0QXV0aFVzZXJUb2tlbiB9IGZyb20gXCJAL3N0b3JlL2ZlYXR1cmVzL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3R5cGVzL2hvb2tzXCI7XHJcbmltcG9ydCB7IGdldFRva2VuLCBsb2dpbiB9IGZyb20gXCJAL2FwaS9hcGlcIjtcclxuXHJcbnR5cGUgdXNlckRhdGFUeXBlID0ge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxufTtcclxuXHJcbmNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgbG9naW5Gb3JtID0ge1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gIH07XHJcbiAgY29uc3QgW2xvZ2luRGF0YSwgc2V0TG9naW5EYXRhXSA9IHVzZVN0YXRlKGxvZ2luRm9ybSk7XHJcbiAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGF1dGhTdGF0ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5hdXRoU3RhdGUpO1xyXG4gIGlmIChhdXRoU3RhdGUpIHtcclxuICAgIHJvdXRlci5wdXNoKCcvdHJhY2tzJyk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRva2VuID0gYXN5bmMgKGxvZ2luRGF0YTogdXNlckRhdGFUeXBlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBnZXRUb2tlbihsb2dpbkRhdGEpLnRoZW4oKHRva2VuRGF0YSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoZXIoc2V0QXV0aFVzZXJUb2tlbih0b2tlbkRhdGEuYWNjZXNzKSk7XHJcbiAgICAgICAgZGlzcGF0Y2hlcihzZXRBdXRoUmVmcmVzaFRva2VuKHRva2VuRGF0YS5yZWZyZXNoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChlOiBhbnkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChsb2dpbkRhdGEuZW1haWwgPT09IFwiXCIgfHwgbG9naW5EYXRhLnBhc3N3b3JkID09PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0SGFzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCfQl9Cw0L/QvtC70L3QuNGC0LUg0LLRgdC1INC/0L7Qu9GPINCy0LLQvtC00LAnKTtcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBsb2dpbihsb2dpbkRhdGEpLnRoZW4oKHVzZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hlcihzZXRBdXRoVXNlckRhdGEodXNlckRhdGEpKTtcclxuICAgICAgICBkaXNwYXRjaGVyKHNldEF1dGhTdGF0ZSgpKTtcclxuICAgICAgICBoYW5kbGVUb2tlbihsb2dpbkRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgc2V0SGFzRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRIYXNFcnJvcihmYWxzZSk7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRMb2dpbkRhdGEoe1xyXG4gICAgICAuLi5sb2dpbkRhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1XcmFwcGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTG9nb30+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICB3aWR0aD17MTQwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezIxfVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1nL2xvZ29fbW9kYWwucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+b3NldHJAZmlzaC5jb208L2Rpdj5cclxuICAgICAgPGRpdj5hYmlydmFsZzwvZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1vZGFsSW5wdXQsIHN0eWxlcy5sb2dpbil9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0YfRgtCwXCJcclxuICAgICAgICB2YWx1ZT17bG9naW5EYXRhLmVtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgLz5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tb2RhbElucHV0LCBzdHlsZXMucGFzc3dvcmQpfVxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiXHJcbiAgICAgICAgdmFsdWU9e2xvZ2luRGF0YS5wYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICB7aGFzRXJyb3IgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgaWQ9XCJidG5FbnRlclwiXHJcbiAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQnRuRW50ZXJ9XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cD57aGFzRXJyb3J9PC9wPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgaWQ9XCJidG5FbnRlclwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJ0bkVudGVyfVxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHA+0JLQvtC50YLQuDwvcD5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCdG5TaWdudXB9PlxyXG4gICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgPC9Gb3JtV3JhcHBlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduSW47XHJcblxyXG4vLyBcInVzZSBjbGllbnRcIlxyXG5cclxuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc2lnbmluL3BhZ2UubW9kdWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBpbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtV3JhcHBlci9Gb3JtV3JhcHBlclwiO1xyXG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBzZXRBdXRoUmVmcmVzaFRva2VuLCBzZXRBdXRoU3RhdGUsIHNldEF1dGhVc2VyRGF0YSwgc2V0QXV0aFVzZXJUb2tlbiB9IGZyb20gXCJAL3N0b3JlL2ZlYXR1cmVzL2F1dGhTbGljZVwiO1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbi8vIGltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3R5cGVzL2hvb2tzXCI7XHJcbi8vIGltcG9ydCB7IGdldFRva2VuLCBsb2dpbiB9IGZyb20gXCJAL2FwaS9hcGlcIjtcclxuXHJcbi8vIHR5cGUgdXNlckRhdGFUeXBlID0ge1xyXG4vLyAgIGVtYWlsOiBzdHJpbmc7XHJcbi8vICAgcGFzc3dvcmQ6IHN0cmluZztcclxuLy8gfTtcclxuXHJcbi8vIGNvbnN0IFNpZ25JbiA9ICgpID0+IHtcclxuXHJcbi8vICAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XHJcblxyXG4vLyAgIGNvbnN0IGxvZ2luRm9ybSA9IHtcclxuLy8gICAgIGVtYWlsOiAnJyxcclxuLy8gICAgIHBhc3N3b3JkOiAnJyxcclxuLy8gICB9O1xyXG4vLyAgIGNvbnN0IFtsb2dpbkRhdGEsIHNldExvZ2luRGF0YV0gPSB1c2VTdGF0ZShsb2dpbkZvcm0pO1xyXG4vLyAgIGNvbnN0IFtoYXNFcnJvciwgc2V0SGFzRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuLy8gICBjb25zdCBhdXRoU3RhdGUgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguYXV0aFN0YXRlKTtcclxuLy8gICBpZiAoYXV0aFN0YXRlKSB7XHJcbi8vICAgICByb3V0ZXIucHVzaCgnL3RyYWNrcycpO1xyXG4vLyAgICAgcmV0dXJuIG51bGw7XHJcbi8vICAgfVxyXG5cclxuLy8gICBjb25zdCBoYW5kbGVUb2tlbiA9IGFzeW5jIChsb2dpbkRhdGE6IHVzZXJEYXRhVHlwZSkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgYXdhaXQgZ2V0VG9rZW4obG9naW5EYXRhKS50aGVuKCh0b2tlbkRhdGEpID0+IHtcclxuLy8gICAgICAgICBkaXNwYXRjaGVyKHNldEF1dGhVc2VyVG9rZW4odG9rZW5EYXRhLmFjY2VzcykpO1xyXG4vLyAgICAgICAgIGRpc3BhdGNoZXIoc2V0QXV0aFJlZnJlc2hUb2tlbih0b2tlbkRhdGEucmVmcmVzaCkpO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZTogYW55KSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcItC/0L7Qv9GL0YLQutCwINCy0YXQvtC00LA6IFwiICsgbG9naW5EYXRhLmVtYWlsICsgXCIgXCIgKyBsb2dpbkRhdGEucGFzc3dvcmQpO1xyXG4vLyAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgaWYgKGxvZ2luRGF0YS5lbWFpbCA9PT0gXCJcIiB8fCBsb2dpbkRhdGEucGFzc3dvcmQgPT09IFwiXCIpIHtcclxuLy8gICAgICAgICBzZXRIYXNFcnJvcih0cnVlKTtcclxuLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ9CX0LDQv9C+0LvQvdC40YLQtSDQstGB0LUg0L/QvtC70Y8g0LLQstC+0LTQsCcpO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGF3YWl0IGxvZ2luKGxvZ2luRGF0YSkudGhlbigodXNlckRhdGEpID0+IHtcclxuLy8gICAgICAgICBkaXNwYXRjaGVyKHNldEF1dGhVc2VyRGF0YSh1c2VyRGF0YSkpO1xyXG4vLyAgICAgICAgIGRpc3BhdGNoZXIoc2V0QXV0aFN0YXRlKCkpO1xyXG4vLyAgICAgICAgIGhhbmRsZVRva2VuKGxvZ2luRGF0YSk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4vLyAgICAgICBzZXRIYXNFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4vLyAgICAgICAgIHNldEhhc0Vycm9yKGZhbHNlKTtcclxuLy8gICAgICAgfSwgMzAwMCk7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogYW55KSA9PiB7XHJcbi8vICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuLy8gICAgIHNldExvZ2luRGF0YSh7XHJcbi8vICAgICAgIC4uLmxvZ2luRGF0YSxcclxuLy8gICAgICAgW25hbWVdOiB2YWx1ZSxcclxuLy8gICAgIH0pO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8Rm9ybVdyYXBwZXI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxMb2dvfT5cclxuLy8gICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4vLyAgICAgICAgICAgPEltYWdlXHJcbi8vICAgICAgICAgICAgIHdpZHRoPXsxNDB9XHJcbi8vICAgICAgICAgICAgIGhlaWdodD17MjF9XHJcbi8vICAgICAgICAgICAgIHNyYz1cIi9pbWcvbG9nb19tb2RhbC5wbmdcIlxyXG4vLyAgICAgICAgICAgICBhbHQ9XCJsb2dvXCJcclxuLy8gICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgPC9MaW5rPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tb2RhbElucHV0LCBzdHlsZXMubG9naW4pfVxyXG4vLyAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuLy8gICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4vLyAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtGH0YLQsFwiXHJcbi8vICAgICAgICAgdmFsdWU9e2xvZ2luRGF0YS5lbWFpbH1cclxuLy8gICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbi8vICAgICAgIC8+XHJcbi8vICAgICAgIDxpbnB1dFxyXG4vLyAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMubW9kYWxJbnB1dCwgc3R5bGVzLnBhc3N3b3JkKX1cclxuLy8gICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4vLyAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbi8vICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9Cw0YDQvtC70YxcIlxyXG4vLyAgICAgICAgIHZhbHVlPXtsb2dpbkRhdGEucGFzc3dvcmR9XHJcbi8vICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4vLyAgICAgICAvPlxyXG5cclxuLy8gICAgICAge2hhc0Vycm9yID8gKFxyXG4vLyAgICAgICAgIDw+XHJcbi8vICAgICAgICAgICA8YnV0dG9uXHJcbi8vICAgICAgICAgICAgIGlkPVwiYnRuRW50ZXJcIlxyXG4vLyAgICAgICAgICAgICBkaXNhYmxlZFxyXG4vLyAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJ0bkVudGVyfVxyXG4vLyAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cclxuLy8gICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgPHA+e2hhc0Vycm9yfTwvcD5cclxuLy8gICAgICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICAgICAgIDwvPlxyXG4vLyAgICAgICApIDogKFxyXG4vLyAgICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICAgIGlkPVwiYnRuRW50ZXJcIlxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCdG5FbnRlcn1cclxuLy8gICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgIDxwPtCS0L7QudGC0Lg8L3A+XHJcbi8vICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICl9XHJcblxyXG4vLyAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQnRuU2lnbnVwfT5cclxuLy8gICAgICAgICDQl9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0YLRjNGB0Y9cclxuLy8gICAgICAgPC9MaW5rPlxyXG5cclxuLy8gICAgIDwvRm9ybVdyYXBwZXI+XHJcbi8vICAgKTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgU2lnbkluOyJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJzdHlsZXMiLCJjbGFzc05hbWVzIiwiRm9ybVdyYXBwZXIiLCJ1c2VTdGF0ZSIsInNldEF1dGhSZWZyZXNoVG9rZW4iLCJzZXRBdXRoU3RhdGUiLCJzZXRBdXRoVXNlckRhdGEiLCJzZXRBdXRoVXNlclRva2VuIiwidXNlUm91dGVyIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImdldFRva2VuIiwibG9naW4iLCJTaWduSW4iLCJkaXNwYXRjaGVyIiwibG9naW5Gb3JtIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ2luRGF0YSIsInNldExvZ2luRGF0YSIsImhhc0Vycm9yIiwic2V0SGFzRXJyb3IiLCJyb3V0ZXIiLCJhdXRoU3RhdGUiLCJzdGF0ZSIsImF1dGgiLCJwdXNoIiwiaGFuZGxlVG9rZW4iLCJ0aGVuIiwidG9rZW5EYXRhIiwiYWNjZXNzIiwicmVmcmVzaCIsImVycm9yIiwiY29uc29sZSIsImhhbmRsZUxvZ2luIiwiZSIsInByZXZlbnREZWZhdWx0IiwiRXJyb3IiLCJ1c2VyRGF0YSIsIm1lc3NhZ2UiLCJzZXRUaW1lb3V0IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJtb2RhbExvZ28iLCJocmVmIiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJhbHQiLCJpbnB1dCIsIm1vZGFsSW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsImlkIiwiZGlzYWJsZWQiLCJtb2RhbEJ0bkVudGVyIiwib25DbGljayIsInAiLCJtb2RhbEJ0blNpZ251cCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signin/page.tsx\n"));

/***/ })

});