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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _signin_page_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../signin/page.module.css */ \"(app-pages-browser)/./src/app/signin/page.module.css\");\n/* harmony import */ var _signin_page_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_signin_page_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_FormWrapper_FormWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FormWrapper/FormWrapper */ \"(app-pages-browser)/./src/components/FormWrapper/FormWrapper.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/features/authSlice */ \"(app-pages-browser)/./src/store/features/authSlice.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst SignIn = ()=>{\n    _s();\n    const dispatcher = useAppDispatc();\n    const loginForm = {\n        email: \"\",\n        password: \"\"\n    };\n    const [loginData, setLoginData] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(loginForm);\n    const [hasError, setHasError] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const authState = useAppSelector((state)=>state.auth.authState);\n    if (authState) {\n        router.push(\"/tracks\");\n        return null;\n    }\n    const handleToken = async (loginData)=>{\n        try {\n            await getToken(loginData).then((tokenData)=>{\n                dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthUserToken)(tokenData.access));\n                dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthRefreshToken)(tokenData.refresh));\n            });\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    const handleLogin = async (e)=>{\n        e.preventDefault();\n        try {\n            if (loginData.email === \"\" || loginData.password === \"\") {\n                setHasError(true);\n                throw new Error(\"Please fill in all the inputs.\");\n            }\n            await login(loginData).then((userData)=>{\n                dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthUserData)(userData));\n                dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthState)());\n                handleToken(loginData);\n            });\n        } catch (error) {\n            setHasError(error.message);\n            console.error(error);\n            setTimeout(()=>{\n                setHasError(false);\n            }, 3000);\n        }\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        setLoginData({\n            ...loginData,\n            [name]: value\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FormWrapper_FormWrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalLogo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        width: 140,\n                        height: 21,\n                        src: \"/img/logo_modal.png\",\n                        alt: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"osetr@fish.com\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"abirvalg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_signin_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalInput), (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().login)),\n                type: \"text\",\n                name: \"email\",\n                placeholder: \"e-mail\",\n                value: loginData.email,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_signin_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalInput), (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().password)),\n                type: \"password\",\n                name: \"password\",\n                placeholder: \"password\",\n                value: loginData.password,\n                onChange: handleInputChange\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            hasError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    id: \"btnEnter\",\n                    disabled: true,\n                    className: (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalBtnEnter),\n                    onClick: handleLogin,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: hasError\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                    lineNumber: 107,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"btnEnter\",\n                className: (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalBtnEnter),\n                onClick: handleLogin,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Sign In\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                    lineNumber: 122,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/signup\",\n                className: (_signin_page_module_css__WEBPACK_IMPORTED_MODULE_8___default().modalBtnSignup),\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\app\\\\signin\\\\page.tsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SignIn, \"ilgPPUmGikD5O9XiWXwQpE1GR2g=\", true, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = SignIn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignIn); // \"use client\"\n // import Image from \"next/image\";\n // import Link from \"next/link\";\n // import styles from \"../signin/page.module.css\";\n // import classNames from \"classnames\";\n // import FormWrapper from \"@/components/FormWrapper/FormWrapper\";\n // import { useState } from \"react\";\n // import { setAuthRefreshToken, setAuthState, setAuthUserData, setAuthUserToken } from \"@/store/features/authSlice\";\n // import { useRouter } from \"next/navigation\";\n // import { useAppDispatch, useAppSelector } from \"@/types/hooks\";\n // import { getToken, login } from \"@/api/api\";\n // type userDataType = {\n //   email: string;\n //   password: string;\n // };\n // const SignIn = () => {\n //   const dispatcher = useAppDispatch();\n //   const loginForm = {\n //     email: '',\n //     password: '',\n //   };\n //   const [loginData, setLoginData] = useState(loginForm);\n //   const [hasError, setHasError] = useState(false);\n //   const router = useRouter();\n //   const authState = useAppSelector((state) => state.auth.authState);\n //   if (authState) {\n //     router.push('/tracks');\n //     return null;\n //   }\n //   const handleToken = async (loginData: userDataType) => {\n //     try {\n //       await getToken(loginData).then((tokenData) => {\n //         dispatcher(setAuthUserToken(tokenData.access));\n //         dispatcher(setAuthRefreshToken(tokenData.refresh));\n //       });\n //     } catch (error: any) {\n //       console.error(error);\n //     }\n //   };\n //   const handleLogin = async (e: any) => {\n //     console.log(\"попытка входа: \" + loginData.email + \" \" + loginData.password);\n //     e.preventDefault();\n //     try {\n //       if (loginData.email === \"\" || loginData.password === \"\") {\n //         setHasError(true);\n //         throw new Error('Заполните все поля ввода');\n //       }\n //       await login(loginData).then((userData) => {\n //         dispatcher(setAuthUserData(userData));\n //         dispatcher(setAuthState());\n //         handleToken(loginData);\n //       });\n //     } catch (error: any) {\n //       setHasError(error.message);\n //       console.error(error);\n //       setTimeout(() => {\n //         setHasError(false);\n //       }, 3000);\n //     }\n //   };\n //   const handleInputChange = (e: any) => {\n //     const { name, value } = e.target;\n //     setLoginData({\n //       ...loginData,\n //       [name]: value,\n //     });\n //   };\n //   return (\n //     <FormWrapper>\n //       <div className={styles.modalLogo}>\n //         <Link href=\"/\">\n //           <Image\n //             width={140}\n //             height={21}\n //             src=\"/img/logo_modal.png\"\n //             alt=\"logo\"\n //           />\n //         </Link>\n //       </div>\n //       <input\n //         className={classNames(styles.modalInput, styles.login)}\n //         type=\"text\"\n //         name=\"email\"\n //         placeholder=\"Почта\"\n //         value={loginData.email}\n //         onChange={handleInputChange}\n //       />\n //       <input\n //         className={classNames(styles.modalInput, styles.password)}\n //         type=\"password\"\n //         name=\"password\"\n //         placeholder=\"Пароль\"\n //         value={loginData.password}\n //         onChange={handleInputChange}\n //       />\n //       {hasError ? (\n //         <>\n //           <button\n //             id=\"btnEnter\"\n //             disabled\n //             className={styles.modalBtnEnter}\n //             onClick={handleLogin}\n //           >\n //             <p>{hasError}</p>\n //           </button>\n //         </>\n //       ) : (\n //         <button\n //           id=\"btnEnter\"\n //           className={styles.modalBtnEnter}\n //           onClick={handleLogin}\n //         >\n //           <p>Войти</p>\n //         </button>\n //       )}\n //       <Link href=\"/signup\" className={styles.modalBtnSignup}>\n //         Зарегистрироваться\n //       </Link>\n //     </FormWrapper>\n //   );\n // }\n // export default SignIn;\nvar _c;\n$RefreshReg$(_c, \"SignIn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbmluL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUNGO0FBQ2tCO0FBQ1g7QUFDMkI7QUFDOUI7QUFDaUY7QUFDdEU7QUFPNUMsTUFBTVcsU0FBUzs7SUFFYixNQUFNQyxhQUFhQztJQUNuQixNQUFNQyxZQUFZO1FBQ2hCQyxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUNBLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBQ1M7SUFDM0MsTUFBTSxDQUFDSyxVQUFVQyxZQUFZLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1nQixTQUFTWCwwREFBU0E7SUFDeEIsTUFBTVksWUFBWUMsZUFBZSxDQUFDQyxRQUFVQSxNQUFNQyxJQUFJLENBQUNILFNBQVM7SUFDaEUsSUFBSUEsV0FBVztRQUNiRCxPQUFPSyxJQUFJLENBQUM7UUFDWixPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxjQUFjLE9BQU9WO1FBQ3pCLElBQUk7WUFDRixNQUFNVyxTQUFTWCxXQUFXWSxJQUFJLENBQUMsQ0FBQ0M7Z0JBQzlCbEIsV0FBV0gsMkVBQWdCQSxDQUFDcUIsVUFBVUMsTUFBTTtnQkFDNUNuQixXQUFXTiw4RUFBbUJBLENBQUN3QixVQUFVRSxPQUFPO1lBQ2xEO1FBQ0YsRUFBRSxPQUFPQyxPQUFZO1lBQ25CQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNRSxjQUFjLE9BQU9DO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUk7WUFDRixJQUFJcEIsVUFBVUYsS0FBSyxLQUFLLE1BQU1FLFVBQVVELFFBQVEsS0FBSyxJQUFJO2dCQUN2REksWUFBWTtnQkFDWixNQUFNLElBQUlrQixNQUFNO1lBQ2xCO1lBQ0EsTUFBTUMsTUFBTXRCLFdBQVdZLElBQUksQ0FBQyxDQUFDVztnQkFDM0I1QixXQUFXSiwwRUFBZUEsQ0FBQ2dDO2dCQUMzQjVCLFdBQVdMLHVF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b3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc2lnbmluL3BhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgRm9ybVdyYXBwZXIgZnJvbSBcIkAvY29tcG9uZW50cy9Gb3JtV3JhcHBlci9Gb3JtV3JhcHBlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzZXRBdXRoUmVmcmVzaFRva2VuLCBzZXRBdXRoU3RhdGUsIHNldEF1dGhVc2VyRGF0YSwgc2V0QXV0aFVzZXJUb2tlbiB9IGZyb20gXCJAL3N0b3JlL2ZlYXR1cmVzL2F1dGhTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG50eXBlIHVzZXJEYXRhVHlwZSA9IHtcclxuICBlbWFpbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn07XHJcblxyXG5jb25zdCBTaWduSW4gPSAoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjKCk7XHJcbiAgY29uc3QgbG9naW5Gb3JtID0ge1xyXG4gICAgZW1haWw6ICcnLFxyXG4gICAgcGFzc3dvcmQ6ICcnLFxyXG4gIH07XHJcbiAgY29uc3QgW2xvZ2luRGF0YSwgc2V0TG9naW5EYXRhXSA9IHVzZVN0YXRlKGxvZ2luRm9ybSk7XHJcbiAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGF1dGhTdGF0ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5hdXRoU3RhdGUpO1xyXG4gIGlmIChhdXRoU3RhdGUpIHtcclxuICAgIHJvdXRlci5wdXNoKCcvdHJhY2tzJyk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZVRva2VuID0gYXN5bmMgKGxvZ2luRGF0YTogdXNlckRhdGFUeXBlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBhd2FpdCBnZXRUb2tlbihsb2dpbkRhdGEpLnRoZW4oKHRva2VuRGF0YSkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoZXIoc2V0QXV0aFVzZXJUb2tlbih0b2tlbkRhdGEuYWNjZXNzKSk7XHJcbiAgICAgICAgZGlzcGF0Y2hlcihzZXRBdXRoUmVmcmVzaFRva2VuKHRva2VuRGF0YS5yZWZyZXNoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChlOiBhbnkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChsb2dpbkRhdGEuZW1haWwgPT09IFwiXCIgfHwgbG9naW5EYXRhLnBhc3N3b3JkID09PSBcIlwiKSB7XHJcbiAgICAgICAgc2V0SGFzRXJyb3IodHJ1ZSk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgZmlsbCBpbiBhbGwgdGhlIGlucHV0cy4nKTtcclxuICAgICAgfVxyXG4gICAgICBhd2FpdCBsb2dpbihsb2dpbkRhdGEpLnRoZW4oKHVzZXJEYXRhKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2hlcihzZXRBdXRoVXNlckRhdGEodXNlckRhdGEpKTtcclxuICAgICAgICBkaXNwYXRjaGVyKHNldEF1dGhTdGF0ZSgpKTtcclxuICAgICAgICBoYW5kbGVUb2tlbihsb2dpbkRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgICAgc2V0SGFzRXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBzZXRIYXNFcnJvcihmYWxzZSk7XHJcbiAgICAgIH0sIDMwMDApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGU6IGFueSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRMb2dpbkRhdGEoe1xyXG4gICAgICAuLi5sb2dpbkRhdGEsXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1XcmFwcGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsTG9nb30+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICB3aWR0aD17MTQwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezIxfVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1nL2xvZ29fbW9kYWwucG5nXCJcclxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+b3NldHJAZmlzaC5jb208L2Rpdj5cclxuICAgICAgPGRpdj5hYmlydmFsZzwvZGl2PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1vZGFsSW5wdXQsIHN0eWxlcy5sb2dpbil9XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlLW1haWxcIlxyXG4gICAgICAgIHZhbHVlPXtsb2dpbkRhdGEuZW1haWx9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1vZGFsSW5wdXQsIHN0eWxlcy5wYXNzd29yZCl9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIHZhbHVlPXtsb2dpbkRhdGEucGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAvPlxyXG5cclxuICAgICAge2hhc0Vycm9yID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIGlkPVwiYnRuRW50ZXJcIlxyXG4gICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJ0bkVudGVyfVxyXG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2dpbn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+e2hhc0Vycm9yfTwvcD5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGlkPVwiYnRuRW50ZXJcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCdG5FbnRlcn1cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwPlNpZ24gSW48L3A+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQnRuU2lnbnVwfT5cclxuICAgICAgICBTaWduIFVwXHJcbiAgICAgIDwvTGluaz5cclxuXHJcbiAgICA8L0Zvcm1XcmFwcGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25JbjtcclxuXHJcbi8vIFwidXNlIGNsaWVudFwiXHJcblxyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zaWduaW4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIGltcG9ydCBGb3JtV3JhcHBlciBmcm9tIFwiQC9jb21wb25lbnRzL0Zvcm1XcmFwcGVyL0Zvcm1XcmFwcGVyXCI7XHJcbi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHNldEF1dGhSZWZyZXNoVG9rZW4sIHNldEF1dGhTdGF0ZSwgc2V0QXV0aFVzZXJEYXRhLCBzZXRBdXRoVXNlclRva2VuIH0gZnJvbSBcIkAvc3RvcmUvZmVhdHVyZXMvYXV0aFNsaWNlXCI7XHJcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuLy8gaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvdHlwZXMvaG9va3NcIjtcclxuLy8gaW1wb3J0IHsgZ2V0VG9rZW4sIGxvZ2luIH0gZnJvbSBcIkAvYXBpL2FwaVwiO1xyXG5cclxuLy8gdHlwZSB1c2VyRGF0YVR5cGUgPSB7XHJcbi8vICAgZW1haWw6IHN0cmluZztcclxuLy8gICBwYXNzd29yZDogc3RyaW5nO1xyXG4vLyB9O1xyXG5cclxuLy8gY29uc3QgU2lnbkluID0gKCkgPT4ge1xyXG5cclxuLy8gICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuXHJcbi8vICAgY29uc3QgbG9naW5Gb3JtID0ge1xyXG4vLyAgICAgZW1haWw6ICcnLFxyXG4vLyAgICAgcGFzc3dvcmQ6ICcnLFxyXG4vLyAgIH07XHJcbi8vICAgY29uc3QgW2xvZ2luRGF0YSwgc2V0TG9naW5EYXRhXSA9IHVzZVN0YXRlKGxvZ2luRm9ybSk7XHJcbi8vICAgY29uc3QgW2hhc0Vycm9yLCBzZXRIYXNFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4vLyAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4vLyAgIGNvbnN0IGF1dGhTdGF0ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5hdXRoU3RhdGUpO1xyXG4vLyAgIGlmIChhdXRoU3RhdGUpIHtcclxuLy8gICAgIHJvdXRlci5wdXNoKCcvdHJhY2tzJyk7XHJcbi8vICAgICByZXR1cm4gbnVsbDtcclxuLy8gICB9XHJcblxyXG4vLyAgIGNvbnN0IGhhbmRsZVRva2VuID0gYXN5bmMgKGxvZ2luRGF0YTogdXNlckRhdGFUeXBlKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBhd2FpdCBnZXRUb2tlbihsb2dpbkRhdGEpLnRoZW4oKHRva2VuRGF0YSkgPT4ge1xyXG4vLyAgICAgICAgIGRpc3BhdGNoZXIoc2V0QXV0aFVzZXJUb2tlbih0b2tlbkRhdGEuYWNjZXNzKSk7XHJcbi8vICAgICAgICAgZGlzcGF0Y2hlcihzZXRBdXRoUmVmcmVzaFRva2VuKHRva2VuRGF0YS5yZWZyZXNoKSk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4vLyAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChlOiBhbnkpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwi0L/QvtC/0YvRgtC60LAg0LLRhdC+0LTQsDogXCIgKyBsb2dpbkRhdGEuZW1haWwgKyBcIiBcIiArIGxvZ2luRGF0YS5wYXNzd29yZCk7XHJcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBpZiAobG9naW5EYXRhLmVtYWlsID09PSBcIlwiIHx8IGxvZ2luRGF0YS5wYXNzd29yZCA9PT0gXCJcIikge1xyXG4vLyAgICAgICAgIHNldEhhc0Vycm9yKHRydWUpO1xyXG4vLyAgICAgICAgIHRocm93IG5ldyBFcnJvcign0JfQsNC/0L7Qu9C90LjRgtC1INCy0YHQtSDQv9C+0LvRjyDQstCy0L7QtNCwJyk7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgYXdhaXQgbG9naW4obG9naW5EYXRhKS50aGVuKCh1c2VyRGF0YSkgPT4ge1xyXG4vLyAgICAgICAgIGRpc3BhdGNoZXIoc2V0QXV0aFVzZXJEYXRhKHVzZXJEYXRhKSk7XHJcbi8vICAgICAgICAgZGlzcGF0Y2hlcihzZXRBdXRoU3RhdGUoKSk7XHJcbi8vICAgICAgICAgaGFuZGxlVG9rZW4obG9naW5EYXRhKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XHJcbi8vICAgICAgIHNldEhhc0Vycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4vLyAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICAgICAgc2V0SGFzRXJyb3IoZmFsc2UpO1xyXG4vLyAgICAgICB9LCAzMDAwKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlOiBhbnkpID0+IHtcclxuLy8gICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4vLyAgICAgc2V0TG9naW5EYXRhKHtcclxuLy8gICAgICAgLi4ubG9naW5EYXRhLFxyXG4vLyAgICAgICBbbmFtZV06IHZhbHVlLFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxGb3JtV3JhcHBlcj5cclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbExvZ299PlxyXG4vLyAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbi8vICAgICAgICAgICA8SW1hZ2VcclxuLy8gICAgICAgICAgICAgd2lkdGg9ezE0MH1cclxuLy8gICAgICAgICAgICAgaGVpZ2h0PXsyMX1cclxuLy8gICAgICAgICAgICAgc3JjPVwiL2ltZy9sb2dvX21vZGFsLnBuZ1wiXHJcbi8vICAgICAgICAgICAgIGFsdD1cImxvZ29cIlxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICA8L0xpbms+XHJcbi8vICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8aW5wdXRcclxuLy8gICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLm1vZGFsSW5wdXQsIHN0eWxlcy5sb2dpbil9XHJcbi8vICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4vLyAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbi8vICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0YfRgtCwXCJcclxuLy8gICAgICAgICB2YWx1ZT17bG9naW5EYXRhLmVtYWlsfVxyXG4vLyAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuLy8gICAgICAgLz5cclxuLy8gICAgICAgPGlucHV0XHJcbi8vICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5tb2RhbElucHV0LCBzdHlsZXMucGFzc3dvcmQpfVxyXG4vLyAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbi8vICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuLy8gICAgICAgICBwbGFjZWhvbGRlcj1cItCf0LDRgNC+0LvRjFwiXHJcbi8vICAgICAgICAgdmFsdWU9e2xvZ2luRGF0YS5wYXNzd29yZH1cclxuLy8gICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbi8vICAgICAgIC8+XHJcblxyXG4vLyAgICAgICB7aGFzRXJyb3IgPyAoXHJcbi8vICAgICAgICAgPD5cclxuLy8gICAgICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICAgICAgaWQ9XCJidG5FbnRlclwiXHJcbi8vICAgICAgICAgICAgIGRpc2FibGVkXHJcbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQnRuRW50ZXJ9XHJcbi8vICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufVxyXG4vLyAgICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgICA8cD57aGFzRXJyb3J9PC9wPlxyXG4vLyAgICAgICAgICAgPC9idXR0b24+XHJcbi8vICAgICAgICAgPC8+XHJcbi8vICAgICAgICkgOiAoXHJcbi8vICAgICAgICAgPGJ1dHRvblxyXG4vLyAgICAgICAgICAgaWQ9XCJidG5FbnRlclwiXHJcbi8vICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEJ0bkVudGVyfVxyXG4vLyAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9naW59XHJcbi8vICAgICAgICAgPlxyXG4vLyAgICAgICAgICAgPHA+0JLQvtC50YLQuDwvcD5cclxuLy8gICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgKX1cclxuXHJcbi8vICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbnVwXCIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxCdG5TaWdudXB9PlxyXG4vLyAgICAgICAgINCX0LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDRgtGM0YHRj1xyXG4vLyAgICAgICA8L0xpbms+XHJcblxyXG4vLyAgICAgPC9Gb3JtV3JhcHBlcj5cclxuLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBTaWduSW47Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInN0eWxlcyIsImNsYXNzTmFtZXMiLCJGb3JtV3JhcHBlciIsInVzZVN0YXRlIiwic2V0QXV0aFJlZnJlc2hUb2tlbiIsInNldEF1dGhTdGF0ZSIsInNldEF1dGhVc2VyRGF0YSIsInNldEF1dGhVc2VyVG9rZW4iLCJ1c2VSb3V0ZXIiLCJTaWduSW4iLCJkaXNwYXRjaGVyIiwidXNlQXBwRGlzcGF0YyIsImxvZ2luRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpbkRhdGEiLCJzZXRMb2dpbkRhdGEiLCJoYXNFcnJvciIsInNldEhhc0Vycm9yIiwicm91dGVyIiwiYXV0aFN0YXRlIiwidXNlQXBwU2VsZWN0b3IiLCJzdGF0ZSIsImF1dGgiLCJwdXNoIiwiaGFuZGxlVG9rZW4iLCJnZXRUb2tlbiIsInRoZW4iLCJ0b2tlbkRhdGEiLCJhY2Nlc3MiLCJyZWZyZXNoIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlTG9naW4iLCJlIiwicHJldmVudERlZmF1bHQiLCJFcnJvciIsImxvZ2luIiwidXNlckRhdGEiLCJtZXNzYWdlIiwic2V0VGltZW91dCIsImhhbmRsZUlucHV0Q2hhbmdlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwibW9kYWxMb2dvIiwiaHJlZiIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYWx0IiwiaW5wdXQiLCJtb2RhbElucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJpZCIsImRpc2FibGVkIiwibW9kYWxCdG5FbnRlciIsIm9uQ2xpY2siLCJwIiwibW9kYWxCdG5TaWdudXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signin/page.tsx\n"));

/***/ })

});