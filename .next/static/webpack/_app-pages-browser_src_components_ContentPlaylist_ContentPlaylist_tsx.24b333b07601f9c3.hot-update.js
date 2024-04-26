"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_ContentPlaylist_ContentPlaylist_tsx",{

/***/ "(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx":
/*!************************************************************!*\
  !*** ./src/components/ContentPlaylist/ContentPlaylist.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/sortTracksByReleaseDate */ \"(app-pages-browser)/./src/lib/sortTracksByReleaseDate.ts\");\n/* harmony import */ var _store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/features/authSlice */ \"(app-pages-browser)/./src/store/features/authSlice.ts\");\n/* harmony import */ var _types_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/types/hooks */ \"(app-pages-browser)/./src/types/hooks.ts\");\n/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/api */ \"(app-pages-browser)/./src/api/api.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch)();\n    const playList = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.tracks.playList);\n    const searchPlayList = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.tracks.searchPlaylist);\n    const { track } = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.tracks);\n    const userToken = localStorage.getItem(\"userToken\");\n    const isSearch = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.tracks.isSearch);\n    const activeFilters = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.tracks.activeFilters);\n    // get a new access token using the refresh token\n    const [tokenRefreshInterval, setTokenRefreshInterval] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleRefreshToken = async ()=>{\n        try {\n            const token = localStorage.getItem(\"refreshToken\");\n            if (!token) return;\n            const refreshedToken = await (0,_api_api__WEBPACK_IMPORTED_MODULE_8__.refreshToken)(token);\n            dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthUserToken)(refreshedToken.access));\n        } catch (error) {\n            console.error(\"Error refreshing token:\", error);\n        }\n    };\n    // timer to refresh the token every 180 seconds\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            handleRefreshToken();\n        }, 180000);\n        setTokenRefreshInterval(interval);\n        return ()=>{\n            if (tokenRefreshInterval) clearInterval(tokenRefreshInterval);\n        };\n    }, []);\n    // check playlist number 1/2/3\n    const playlistID = (0,_types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector)((state)=>state.tracks.playlistNumber);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (userToken !== null) {\n            if (String(playlistID) === \"liked\") {\n                (0,_api_api__WEBPACK_IMPORTED_MODULE_8__.getLikedTracks)(userToken).then((data)=>{\n                    dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setPlayList)(data));\n                });\n            } else {\n                (0,_api_api__WEBPACK_IMPORTED_MODULE_8__.getTracks)(playlistID).then((data)=>{\n                    data.items ? dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setPlayList)(data.items)) : dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setPlayList)(data));\n                });\n            }\n        }\n    }, [\n        dispatcher,\n        playlistID\n    ]);\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentTrack)(trackR));\n    };\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    const filterTracks = (tracks)=>{\n        return tracks.filter((track)=>{\n            const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n            const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n            return isAuthorsMatch && isGenresMatch;\n        });\n    };\n    const filteredAndSortedPlaylist = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const filteredTracks = filterTracks(tracksToRender);\n        if (activeFilters.release_dates) {\n            return (0,_lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_5__.sortTracksByReleaseDate)(filteredTracks, activeFilters.release_dates);\n        } else {\n            return filteredTracks;\n        }\n    }, [\n        tracksToRender,\n        activeFilters\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9___default().playlist)),\n        children: isSearch && tracksToRender.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_9___default().playlistTitleCol),\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 114,\n            columnNumber: 9\n        }, undefined) : filteredAndSortedPlaylist.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_4__.PlayListItem, {\n                id: trackR.id,\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id),\n                stared_user: trackR.stared_user,\n                // @ts-ignore\n                playlistID: playlistID\n            }, trackR.id, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 117,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"fe7HF2i0C4pWsrnuDQdIhTWhSpg=\", false, function() {\n    return [\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppDispatch,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector,\n        _types_hooks__WEBPACK_IMPORTED_MODULE_7__.useAppSelector\n    ];\n});\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist); // \"use client\"\n // import styles from \"./ContentPlaylist.module.css\";\n // import classNames from \"classnames\";\n // import React, { useEffect, useMemo, useRef, useState } from 'react';\n // import { trackType } from '@/types/types';\n // import { setCurrentTrack, setPlayList } from '@/store/features/tracksSlice';\n // import { PlayListItem } from '@components/PlayListItem';\n // import { useAppDispatch, useAppSelector } from \"@/types/hooks\";\n // import { getTracks } from \"@/api/api\";\n // import { sortTracksByReleaseDate } from \"@/lib/sortTracksByReleaseDate\";\n // const ContentPlaylist = () => {\n //   const dispatcher = useAppDispatch();\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);\n //   const { track } = useAppSelector((state) => state.tracks);\n //   const isSearch = useAppSelector((state) => state.tracks.isSearch);\n //   const activeFilters = useAppSelector((state) => state.tracks.activeFilters);\n //   const playlistNumber = useAppSelector((state) => state.tracks.playlistNumber);\n //   useEffect(() => {\n //     getTracks(playlistNumber).then((data) => {\n //       data.items ? dispatcher(setPlayList(data.items)) : dispatcher(setPlayList(data));\n //     });\n //   }, [dispatcher, playlistNumber]);\n //   const handleTrack = (trackR: trackType) => {\n //     dispatcher(setCurrentTrack(trackR));\n //   };\n //   const [trackDurations, setTrackDurations] = useState<{ [key: string]: number }>({});\n //   const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});\n //   useEffect(() => {\n //     const durations: { [key: string]: number } = {};\n //     playList?.forEach((track: trackType) => {\n //       const audio = new Audio(track.track_file);\n //       audio.addEventListener('loadedmetadata', () => {\n //         durations[track.id] = audio.duration;\n //         setTrackDurations({ ...durations });\n //       });\n //       audioRefs.current[track.id] = audio;\n //     });\n //     return () => {\n //       Object.values(audioRefs.current).forEach((audio) => {\n //         audio.pause();\n //         audio.removeAttribute('src');\n //         audio.load();\n //       });\n //     };\n //   }, [playList]);\n //   const tracksToRender = isSearch ? searchPlayList : playList;\n //   const filterTracks = (tracks: trackType[]) => {\n //     return tracks.filter((track) => {\n //       const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n //       const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n //       return isAuthorsMatch && isGenresMatch;\n //     });\n //   };\n //   const filteredAndSortedPlaylist = useMemo(() => {\n //     const filteredTracks = filterTracks(tracksToRender);\n //     if (activeFilters.release_dates) {\n //       return sortTracksByReleaseDate(filteredTracks, activeFilters.release_dates);\n //     } else {\n //       return filteredTracks;\n //     }\n //   }, [tracksToRender, activeFilters]);\n //   return (\n //     <div className={classNames(styles.contentPlaylist, styles.playlist)}>\n //       {isSearch && tracksToRender.length === 0 ? (\n //         <p className={styles.playlistTitleCol}>No tracks found</p>\n //       ) : (\n //         filteredAndSortedPlaylist.map((trackR: trackType) => (\n //           <PlayListItem\n //             key={trackR.id}\n //             name={trackR.name}\n //             author={trackR.author}\n //             album={trackR.album}\n //             duration={trackDurations[trackR.id]}\n //             setTrack={() => handleTrack(trackR)}\n //             isSetTrack={trackR.id === track?.id}\n //           />\n //         ))\n //       )}\n //     </div>\n //   );\n // };\n // export default ContentPlaylist;\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFa0Q7QUFDZDtBQUNnQztBQUVRO0FBQ3BCO0FBQ2dCO0FBQ1Y7QUFDQztBQUNLO0FBRXBFLE1BQU1pQixrQkFBa0I7O0lBRXRCLE1BQU1DLGFBQWFOLDREQUFjQTtJQUNqQyxNQUFNTyxXQUFXTiw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNQyxNQUFNLENBQUNGLFFBQVE7SUFDaEUsTUFBTUcsaUJBQWlCVCw0REFBY0EsQ0FBQyxDQUFDTyxRQUFVQSxNQUFNQyxNQUFNLENBQUNFLGNBQWM7SUFDNUUsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR1gsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsTUFBTTtJQUN4RCxNQUFNSSxZQUFZQyxhQUFhQyxPQUFPLENBQUM7SUFDdkMsTUFBTUMsV0FBV2YsNERBQWNBLENBQUMsQ0FBQ08sUUFBVUEsTUFBTUMsTUFBTSxDQUFDTyxRQUFRO0lBQ2hFLE1BQU1DLGdCQUFnQmhCLDREQUFjQSxDQUFDLENBQUNPLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ1EsYUFBYTtJQUUxRSxpREFBaUQ7SUFDakQsTUFBTSxDQUFDQyxzQkFBc0JDLHdCQUF3QixHQUFHekIsK0NBQVFBLENBQXdCO0lBQ3hGLE1BQU0wQixxQkFBcUI7UUFDekIsSUFBSTtZQUNGLE1BQU1DLFFBQVFQLGFBQWFDLE9BQU8sQ0FBQztZQUNuQyxJQUFJLENBQUNNLE9BQU87WUFDWixNQUFNQyxpQkFBaUIsTUFBTWxCLHNEQUFZQSxDQUFDaUI7WUFDMUNmLFdBQVdQLDJFQUFnQkEsQ0FBQ3VCLGVBQWVDLE1BQU07UUFDbkQsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQywyQkFBMkJBO1FBQzNDO0lBQ0Y7SUFDQSwrQ0FBK0M7SUFDL0NqQyxnREFBU0Es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QUN0Qix1REFBdUQ7Q0FDdkQsZ0RBQWdEO0NBQ2hELG1EQUFtRDtDQUNuRCx5REFBeUQ7Q0FDekQsZ0RBQWdEO0NBQ2hELCtDQUErQztDQUMvQyxZQUFZO0NBQ1osNkNBQTZDO0NBQzdDLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsOERBQThEO0NBQzlELHlCQUF5QjtDQUN6Qix3Q0FBd0M7Q0FDeEMsd0JBQXdCO0NBQ3hCLFlBQVk7Q0FDWixTQUFTO0NBQ1Qsb0JBQW9CO0NBRXBCLGlFQUFpRTtDQUdqRSxvREFBb0Q7Q0FDcEQsd0NBQXdDO0NBQ3hDLG1IQUFtSDtDQUNuSCwrR0FBK0c7Q0FDL0csZ0RBQWdEO0NBQ2hELFVBQVU7Q0FDVixPQUFPO0NBRVAsc0RBQXNEO0NBQ3RELDJEQUEyRDtDQUUzRCx5Q0FBeUM7Q0FDekMscUZBQXFGO0NBQ3JGLGVBQWU7Q0FDZiwrQkFBK0I7Q0FDL0IsUUFBUTtDQUNSLHlDQUF5QztDQUV6QyxhQUFhO0NBQ2IsNEVBQTRFO0NBQzVFLHFEQUFxRDtDQUNyRCxxRUFBcUU7Q0FDckUsY0FBYztDQUNkLGlFQUFpRTtDQUNqRSwwQkFBMEI7Q0FDMUIsOEJBQThCO0NBQzlCLGlDQUFpQztDQUNqQyxxQ0FBcUM7Q0FDckMsbUNBQW1DO0NBQ25DLG1EQUFtRDtDQUNuRCxtREFBbUQ7Q0FDbkQsbURBQW1EO0NBQ25ELGVBQWU7Q0FDZixhQUFhO0NBQ2IsV0FBVztDQUNYLGFBQWE7Q0FDYixPQUFPO0NBQ1AsS0FBSztDQUVMLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0LnRzeD8zY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XHJcbmltcG9ydCB7IFBsYXlMaXN0SXRlbSB9IGZyb20gJ0Bjb21wb25lbnRzL1BsYXlMaXN0SXRlbSc7XHJcbmltcG9ydCB7IHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIH0gZnJvbSBcIkAvbGliL3NvcnRUcmFja3NCeVJlbGVhc2VEYXRlXCI7XHJcbmltcG9ydCB7IHNldEF1dGhVc2VyVG9rZW4gfSBmcm9tIFwiQC9zdG9yZS9mZWF0dXJlcy9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvdHlwZXMvaG9va3NcIjtcclxuaW1wb3J0IHsgZ2V0TGlrZWRUcmFja3MsIGdldFRyYWNrcywgcmVmcmVzaFRva2VuIH0gZnJvbSBcIkAvYXBpL2FwaVwiO1xyXG5cclxuY29uc3QgQ29udGVudFBsYXlsaXN0ID0gKCkgPT4ge1xyXG5cclxuICBjb25zdCBkaXNwYXRjaGVyID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCBwbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlMaXN0KTtcclxuICBjb25zdCBzZWFyY2hQbGF5TGlzdCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnNlYXJjaFBsYXlsaXN0KTtcclxuICBjb25zdCB7IHRyYWNrIH0gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcyk7XHJcbiAgY29uc3QgdXNlclRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJUb2tlbicpO1xyXG4gIGNvbnN0IGlzU2VhcmNoID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuaXNTZWFyY2gpO1xyXG4gIGNvbnN0IGFjdGl2ZUZpbHRlcnMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5hY3RpdmVGaWx0ZXJzKTtcclxuXHJcbiAgLy8gZ2V0IGEgbmV3IGFjY2VzcyB0b2tlbiB1c2luZyB0aGUgcmVmcmVzaCB0b2tlblxyXG4gIGNvbnN0IFt0b2tlblJlZnJlc2hJbnRlcnZhbCwgc2V0VG9rZW5SZWZyZXNoSW50ZXJ2YWxdID0gdXNlU3RhdGU8Tm9kZUpTLlRpbWVvdXQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBoYW5kbGVSZWZyZXNoVG9rZW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoVG9rZW4nKTtcclxuICAgICAgaWYgKCF0b2tlbikgcmV0dXJuO1xyXG4gICAgICBjb25zdCByZWZyZXNoZWRUb2tlbiA9IGF3YWl0IHJlZnJlc2hUb2tlbih0b2tlbik7XHJcbiAgICAgIGRpc3BhdGNoZXIoc2V0QXV0aFVzZXJUb2tlbihyZWZyZXNoZWRUb2tlbi5hY2Nlc3MpKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJlZnJlc2hpbmcgdG9rZW46JywgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgLy8gdGltZXIgdG8gcmVmcmVzaCB0aGUgdG9rZW4gZXZlcnkgMTgwIHNlY29uZHNcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlZnJlc2hUb2tlbigpO1xyXG4gICAgfSwgMTgwMDAwKTtcclxuICAgIHNldFRva2VuUmVmcmVzaEludGVydmFsKGludGVydmFsKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGlmICh0b2tlblJlZnJlc2hJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbCh0b2tlblJlZnJlc2hJbnRlcnZhbCk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gY2hlY2sgcGxheWxpc3QgbnVtYmVyIDEvMi8zXHJcbiAgY29uc3QgcGxheWxpc3RJRCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlsaXN0TnVtYmVyKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyVG9rZW4gIT09IG51bGwpIHtcclxuICAgICAgaWYgKFN0cmluZyhwbGF5bGlzdElEKSA9PT0gXCJsaWtlZFwiKSB7XHJcbiAgICAgICAgZ2V0TGlrZWRUcmFja3ModXNlclRva2VuKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRUcmFja3MocGxheWxpc3RJRCkudGhlbigoZGF0YSkgPT4ge1xyXG5cclxuICAgICAgICAgIGRhdGEuaXRlbXMgPyBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEuaXRlbXMpKSA6IGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9LCBbZGlzcGF0Y2hlciwgcGxheWxpc3RJRF0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUcmFjayA9ICh0cmFja1I6IHRyYWNrVHlwZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2hlcihzZXRDdXJyZW50VHJhY2sodHJhY2tSKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3RyYWNrRHVyYXRpb25zLCBzZXRUcmFja0R1cmF0aW9uc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSk7XHJcbiAgY29uc3QgYXVkaW9SZWZzID0gdXNlUmVmPHsgW2tleTogc3RyaW5nXTogSFRNTEF1ZGlvRWxlbWVudCB9Pih7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGR1cmF0aW9uczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgcGxheUxpc3Q/LmZvckVhY2goKHRyYWNrOiB0cmFja1R5cGUpID0+IHtcclxuICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8odHJhY2sudHJhY2tfZmlsZSk7XHJcbiAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xyXG4gICAgICAgIGR1cmF0aW9uc1t0cmFjay5pZF0gPSBhdWRpby5kdXJhdGlvbjtcclxuICAgICAgICBzZXRUcmFja0R1cmF0aW9ucyh7IC4uLmR1cmF0aW9ucyB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGF1ZGlvUmVmcy5jdXJyZW50W3RyYWNrLmlkXSA9IGF1ZGlvO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBPYmplY3QudmFsdWVzKGF1ZGlvUmVmcy5jdXJyZW50KS5mb3JFYWNoKChhdWRpbykgPT4ge1xyXG4gICAgICAgIGF1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgYXVkaW8ucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcclxuICAgICAgICBhdWRpby5sb2FkKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9LCBbcGxheUxpc3RdKTtcclxuXHJcbiAgY29uc3QgdHJhY2tzVG9SZW5kZXIgPSBpc1NlYXJjaCA/IHNlYXJjaFBsYXlMaXN0IDogcGxheUxpc3Q7XHJcblxyXG5cclxuICBjb25zdCBmaWx0ZXJUcmFja3MgPSAodHJhY2tzOiB0cmFja1R5cGVbXSkgPT4ge1xyXG4gICAgcmV0dXJuIHRyYWNrcy5maWx0ZXIoKHRyYWNrKSA9PiB7XHJcbiAgICAgIGNvbnN0IGlzQXV0aG9yc01hdGNoID0gYWN0aXZlRmlsdGVycy5hdXRob3JzLmxlbmd0aCA9PT0gMCB8fCBhY3RpdmVGaWx0ZXJzLmF1dGhvcnMuaW5jbHVkZXModHJhY2suYXV0aG9yKTtcclxuICAgICAgY29uc3QgaXNHZW5yZXNNYXRjaCA9IGFjdGl2ZUZpbHRlcnMuZ2VucmVzLmxlbmd0aCA9PT0gMCB8fCBhY3RpdmVGaWx0ZXJzLmdlbnJlcy5pbmNsdWRlcyh0cmFjay5nZW5yZSk7XHJcbiAgICAgIHJldHVybiBpc0F1dGhvcnNNYXRjaCAmJiBpc0dlbnJlc01hdGNoO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZmlsdGVyZWRUcmFja3MgPSBmaWx0ZXJUcmFja3ModHJhY2tzVG9SZW5kZXIpO1xyXG5cclxuICAgIGlmIChhY3RpdmVGaWx0ZXJzLnJlbGVhc2VfZGF0ZXMpIHtcclxuICAgICAgcmV0dXJuIHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlKGZpbHRlcmVkVHJhY2tzLCBhY3RpdmVGaWx0ZXJzLnJlbGVhc2VfZGF0ZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGZpbHRlcmVkVHJhY2tzO1xyXG4gICAgfVxyXG4gIH0sIFt0cmFja3NUb1JlbmRlciwgYWN0aXZlRmlsdGVyc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XHJcbiAgICAgIHtpc1NlYXJjaCAmJiB0cmFja3NUb1JlbmRlci5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gdHJhY2tzIGZvdW5kPC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIGZpbHRlcmVkQW5kU29ydGVkUGxheWxpc3QubWFwKCh0cmFja1I6IHRyYWNrVHlwZSkgPT4gKFxyXG4gICAgICAgICAgPFBsYXlMaXN0SXRlbVxyXG4gICAgICAgICAgICBrZXk9e3RyYWNrUi5pZH1cclxuICAgICAgICAgICAgaWQ9e3RyYWNrUi5pZH1cclxuICAgICAgICAgICAgbmFtZT17dHJhY2tSLm5hbWV9XHJcbiAgICAgICAgICAgIGF1dGhvcj17dHJhY2tSLmF1dGhvcn1cclxuICAgICAgICAgICAgYWxidW09e3RyYWNrUi5hbGJ1bX1cclxuICAgICAgICAgICAgZHVyYXRpb249e3RyYWNrRHVyYXRpb25zW3RyYWNrUi5pZF19XHJcbiAgICAgICAgICAgIHNldFRyYWNrPXsoKSA9PiBoYW5kbGVUcmFjayh0cmFja1IpfVxyXG4gICAgICAgICAgICBpc1NldFRyYWNrPXt0cmFja1IuaWQgPT09IHRyYWNrPy5pZH1cclxuICAgICAgICAgICAgc3RhcmVkX3VzZXI9e3RyYWNrUi5zdGFyZWRfdXNlcn1cclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBwbGF5bGlzdElEPXtwbGF5bGlzdElEfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDtcclxuXHJcbi8vIFwidXNlIGNsaWVudFwiXHJcblxyXG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XHJcbi8vIGltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbi8vIGltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG4vLyBpbXBvcnQgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XHJcbi8vIGltcG9ydCB7IFBsYXlMaXN0SXRlbSB9IGZyb20gJ0Bjb21wb25lbnRzL1BsYXlMaXN0SXRlbSc7XHJcbi8vIGltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL3R5cGVzL2hvb2tzXCI7XHJcbi8vIGltcG9ydCB7IGdldFRyYWNrcyB9IGZyb20gXCJAL2FwaS9hcGlcIjtcclxuLy8gaW1wb3J0IHsgc29ydFRyYWNrc0J5UmVsZWFzZURhdGUgfSBmcm9tIFwiQC9saWIvc29ydFRyYWNrc0J5UmVsZWFzZURhdGVcIjtcclxuXHJcbi8vIGNvbnN0IENvbnRlbnRQbGF5bGlzdCA9ICgpID0+IHtcclxuXHJcbi8vICAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbi8vICAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XHJcbi8vICAgY29uc3Qgc2VhcmNoUGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5zZWFyY2hQbGF5bGlzdCk7XHJcbi8vICAgY29uc3QgeyB0cmFjayB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MpO1xyXG4vLyAgIGNvbnN0IGlzU2VhcmNoID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuaXNTZWFyY2gpO1xyXG5cclxuLy8gICBjb25zdCBhY3RpdmVGaWx0ZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycyk7XHJcblxyXG5cclxuLy8gICBjb25zdCBwbGF5bGlzdE51bWJlciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLnBsYXlsaXN0TnVtYmVyKTtcclxuIFxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBnZXRUcmFja3MocGxheWxpc3ROdW1iZXIpLnRoZW4oKGRhdGEpID0+IHtcclxuXHJcbi8vICAgICAgIGRhdGEuaXRlbXMgPyBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEuaXRlbXMpKSA6IGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YSkpO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgfSwgW2Rpc3BhdGNoZXIsIHBsYXlsaXN0TnVtYmVyXSk7XHJcblxyXG4vLyAgIGNvbnN0IGhhbmRsZVRyYWNrID0gKHRyYWNrUjogdHJhY2tUeXBlKSA9PiB7XHJcbi8vICAgICBkaXNwYXRjaGVyKHNldEN1cnJlbnRUcmFjayh0cmFja1IpKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBbdHJhY2tEdXJhdGlvbnMsIHNldFRyYWNrRHVyYXRpb25zXSA9IHVzZVN0YXRlPHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0+KHt9KTtcclxuLy8gICBjb25zdCBhdWRpb1JlZnMgPSB1c2VSZWY8eyBba2V5OiBzdHJpbmddOiBIVE1MQXVkaW9FbGVtZW50IH0+KHt9KTtcclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgZHVyYXRpb25zOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbi8vICAgICBwbGF5TGlzdD8uZm9yRWFjaCgodHJhY2s6IHRyYWNrVHlwZSkgPT4ge1xyXG4vLyAgICAgICBjb25zdCBhdWRpbyA9IG5ldyBBdWRpbyh0cmFjay50cmFja19maWxlKTtcclxuLy8gICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCAoKSA9PiB7XHJcbi8vICAgICAgICAgZHVyYXRpb25zW3RyYWNrLmlkXSA9IGF1ZGlvLmR1cmF0aW9uO1xyXG4vLyAgICAgICAgIHNldFRyYWNrRHVyYXRpb25zKHsgLi4uZHVyYXRpb25zIH0pO1xyXG4vLyAgICAgICB9KTtcclxuLy8gICAgICAgYXVkaW9SZWZzLmN1cnJlbnRbdHJhY2suaWRdID0gYXVkaW87XHJcbi8vICAgICB9KTtcclxuLy8gICAgIHJldHVybiAoKSA9PiB7XHJcbi8vICAgICAgIE9iamVjdC52YWx1ZXMoYXVkaW9SZWZzLmN1cnJlbnQpLmZvckVhY2goKGF1ZGlvKSA9PiB7XHJcbi8vICAgICAgICAgYXVkaW8ucGF1c2UoKTtcclxuLy8gICAgICAgICBhdWRpby5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xyXG4vLyAgICAgICAgIGF1ZGlvLmxvYWQoKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICB9O1xyXG4vLyAgIH0sIFtwbGF5TGlzdF0pO1xyXG5cclxuLy8gICBjb25zdCB0cmFja3NUb1JlbmRlciA9IGlzU2VhcmNoID8gc2VhcmNoUGxheUxpc3QgOiBwbGF5TGlzdDtcclxuXHJcblxyXG4vLyAgIGNvbnN0IGZpbHRlclRyYWNrcyA9ICh0cmFja3M6IHRyYWNrVHlwZVtdKSA9PiB7XHJcbi8vICAgICByZXR1cm4gdHJhY2tzLmZpbHRlcigodHJhY2spID0+IHtcclxuLy8gICAgICAgY29uc3QgaXNBdXRob3JzTWF0Y2ggPSBhY3RpdmVGaWx0ZXJzLmF1dGhvcnMubGVuZ3RoID09PSAwIHx8IGFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5pbmNsdWRlcyh0cmFjay5hdXRob3IpO1xyXG4vLyAgICAgICBjb25zdCBpc0dlbnJlc01hdGNoID0gYWN0aXZlRmlsdGVycy5nZW5yZXMubGVuZ3RoID09PSAwIHx8IGFjdGl2ZUZpbHRlcnMuZ2VucmVzLmluY2x1ZGVzKHRyYWNrLmdlbnJlKTtcclxuLy8gICAgICAgcmV0dXJuIGlzQXV0aG9yc01hdGNoICYmIGlzR2VucmVzTWF0Y2g7XHJcbi8vICAgICB9KTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBmaWx0ZXJlZEFuZFNvcnRlZFBsYXlsaXN0ID0gdXNlTWVtbygoKSA9PiB7XHJcbi8vICAgICBjb25zdCBmaWx0ZXJlZFRyYWNrcyA9IGZpbHRlclRyYWNrcyh0cmFja3NUb1JlbmRlcik7XHJcblxyXG4vLyAgICAgaWYgKGFjdGl2ZUZpbHRlcnMucmVsZWFzZV9kYXRlcykge1xyXG4vLyAgICAgICByZXR1cm4gc29ydFRyYWNrc0J5UmVsZWFzZURhdGUoZmlsdGVyZWRUcmFja3MsIGFjdGl2ZUZpbHRlcnMucmVsZWFzZV9kYXRlcyk7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICByZXR1cm4gZmlsdGVyZWRUcmFja3M7XHJcbi8vICAgICB9XHJcbi8vICAgfSwgW3RyYWNrc1RvUmVuZGVyLCBhY3RpdmVGaWx0ZXJzXSk7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuY29udGVudFBsYXlsaXN0LCBzdHlsZXMucGxheWxpc3QpfT5cclxuLy8gICAgICAge2lzU2VhcmNoICYmIHRyYWNrc1RvUmVuZGVyLmxlbmd0aCA9PT0gMCA/IChcclxuLy8gICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbGF5bGlzdFRpdGxlQ29sfT5ObyB0cmFja3MgZm91bmQ8L3A+XHJcbi8vICAgICAgICkgOiAoXHJcbi8vICAgICAgICAgZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdC5tYXAoKHRyYWNrUjogdHJhY2tUeXBlKSA9PiAoXHJcbi8vICAgICAgICAgICA8UGxheUxpc3RJdGVtXHJcbi8vICAgICAgICAgICAgIGtleT17dHJhY2tSLmlkfVxyXG4vLyAgICAgICAgICAgICBuYW1lPXt0cmFja1IubmFtZX1cclxuLy8gICAgICAgICAgICAgYXV0aG9yPXt0cmFja1IuYXV0aG9yfVxyXG4vLyAgICAgICAgICAgICBhbGJ1bT17dHJhY2tSLmFsYnVtfVxyXG4vLyAgICAgICAgICAgICBkdXJhdGlvbj17dHJhY2tEdXJhdGlvbnNbdHJhY2tSLmlkXX1cclxuLy8gICAgICAgICAgICAgc2V0VHJhY2s9eygpID0+IGhhbmRsZVRyYWNrKHRyYWNrUil9XHJcbi8vICAgICAgICAgICAgIGlzU2V0VHJhY2s9e3RyYWNrUi5pZCA9PT0gdHJhY2s/LmlkfVxyXG4vLyAgICAgICAgICAgLz5cclxuLy8gICAgICAgICApKVxyXG4vLyAgICAgICApfVxyXG4vLyAgICAgPC9kaXY+XHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IENvbnRlbnRQbGF5bGlzdDsiXSwibmFtZXMiOlsic3R5bGVzIiwiY2xhc3NOYW1lcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlTWVtbyIsInVzZVJlZiIsInVzZVN0YXRlIiwic2V0Q3VycmVudFRyYWNrIiwic2V0UGxheUxpc3QiLCJQbGF5TGlzdEl0ZW0iLCJzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZSIsInNldEF1dGhVc2VyVG9rZW4iLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiZ2V0TGlrZWRUcmFja3MiLCJnZXRUcmFja3MiLCJyZWZyZXNoVG9rZW4iLCJDb250ZW50UGxheWxpc3QiLCJkaXNwYXRjaGVyIiwicGxheUxpc3QiLCJzdGF0ZSIsInRyYWNrcyIsInNlYXJjaFBsYXlMaXN0Iiwic2VhcmNoUGxheWxpc3QiLCJ0cmFjayIsInVzZXJUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpc1NlYXJjaCIsImFjdGl2ZUZpbHRlcnMiLCJ0b2tlblJlZnJlc2hJbnRlcnZhbCIsInNldFRva2VuUmVmcmVzaEludGVydmFsIiwiaGFuZGxlUmVmcmVzaFRva2VuIiwidG9rZW4iLCJyZWZyZXNoZWRUb2tlbiIsImFjY2VzcyIsImVycm9yIiwiY29uc29sZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGxheWxpc3RJRCIsInBsYXlsaXN0TnVtYmVyIiwiU3RyaW5nIiwidGhlbiIsImRhdGEiLCJpdGVtcyIsImhhbmRsZVRyYWNrIiwidHJhY2tSIiwidHJhY2tEdXJhdGlvbnMiLCJzZXRUcmFja0R1cmF0aW9ucyIsImF1ZGlvUmVmcyIsImR1cmF0aW9ucyIsImZvckVhY2giLCJhdWRpbyIsIkF1ZGlvIiwidHJhY2tfZmlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJpZCIsImR1cmF0aW9uIiwiY3VycmVudCIsIk9iamVjdCIsInZhbHVlcyIsInBhdXNlIiwicmVtb3ZlQXR0cmlidXRlIiwibG9hZCIsInRyYWNrc1RvUmVuZGVyIiwiZmlsdGVyVHJhY2tzIiwiZmlsdGVyIiwiaXNBdXRob3JzTWF0Y2giLCJhdXRob3JzIiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJhdXRob3IiLCJpc0dlbnJlc01hdGNoIiwiZ2VucmVzIiwiZ2VucmUiLCJmaWx0ZXJlZEFuZFNvcnRlZFBsYXlsaXN0IiwiZmlsdGVyZWRUcmFja3MiLCJyZWxlYXNlX2RhdGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudFBsYXlsaXN0IiwicGxheWxpc3QiLCJwIiwicGxheWxpc3RUaXRsZUNvbCIsIm1hcCIsIm5hbWUiLCJhbGJ1bSIsInNldFRyYWNrIiwiaXNTZXRUcmFjayIsInN0YXJlZF91c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});