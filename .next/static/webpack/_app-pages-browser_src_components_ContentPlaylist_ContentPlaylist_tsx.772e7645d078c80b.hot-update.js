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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContentPlaylist.module.css */ \"(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.module.css\");\n/* harmony import */ var _ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/features/tracksSlice */ \"(app-pages-browser)/./src/store/features/tracksSlice.ts\");\n/* harmony import */ var _components_PlayListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/PlayListItem */ \"(app-pages-browser)/./src/components/PlayListItem/index.tsx\");\n/* harmony import */ var _lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/sortTracksByReleaseDate */ \"(app-pages-browser)/./src/lib/sortTracksByReleaseDate.ts\");\n/* harmony import */ var _store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/features/authSlice */ \"(app-pages-browser)/./src/store/features/authSlice.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ContentPlaylist = ()=>{\n    _s();\n    const dispatcher = useAppDispatch();\n    const playList = useAppSelector((state)=>state.tracks.playList);\n    const searchPlayList = useAppSelector((state)=>state.tracks.searchPlaylist);\n    const { track } = useAppSelector((state)=>state.tracks);\n    const userToken = localStorage.getItem(\"userToken\");\n    const isSearch = useAppSelector((state)=>state.tracks.isSearch);\n    const activeFilters = useAppSelector((state)=>state.tracks.activeFilters);\n    // get a new access token using the refresh token\n    const [tokenRefreshInterval, setTokenRefreshInterval] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleRefreshToken = async ()=>{\n        try {\n            const token = localStorage.getItem(\"refreshToken\");\n            if (!token) return;\n            const refreshedToken = await refreshToken(token);\n            dispatcher((0,_store_features_authSlice__WEBPACK_IMPORTED_MODULE_6__.setAuthUserToken)(refreshedToken.access));\n        } catch (error) {\n            console.error(\"Error refreshing token:\", error);\n        }\n    };\n    // timer to refresh the token every 180 seconds\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            handleRefreshToken();\n        }, 180000);\n        setTokenRefreshInterval(interval);\n        return ()=>{\n            if (tokenRefreshInterval) clearInterval(tokenRefreshInterval);\n        };\n    }, []);\n    // check playlist number 1/2/3\n    const playlistID = useAppSelector((state)=>state.tracks.playlistNumber);\n    // get the tracklist from API\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (userToken !== null) {\n            if (String(playlistID) === \"liked\") {\n                getLikedTracks(userToken).then((data)=>{\n                    dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setPlayList)(data));\n                });\n            } else {\n                getTracks(playlistID).then((data)=>{\n                    // check if the data is wrapped\n                    data.items ? dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setPlayList)(data.items)) : dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setPlayList)(data));\n                });\n            }\n        }\n    }, [\n        dispatcher,\n        playlistID\n    ]);\n    // Redux tools: set the track playing\n    const handleTrack = (trackR)=>{\n        dispatcher((0,_store_features_tracksSlice__WEBPACK_IMPORTED_MODULE_3__.setCurrentTrack)(trackR));\n    };\n    // add a duration from audio props to each track\n    const [trackDurations, setTrackDurations] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    const audioRefs = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const durations = {};\n        playList === null || playList === void 0 ? void 0 : playList.forEach((track)=>{\n            const audio = new Audio(track.track_file);\n            audio.addEventListener(\"loadedmetadata\", ()=>{\n                durations[track.id] = audio.duration;\n                setTrackDurations({\n                    ...durations\n                });\n            });\n            audioRefs.current[track.id] = audio;\n        });\n        return ()=>{\n            Object.values(audioRefs.current).forEach((audio)=>{\n                audio.pause();\n                audio.removeAttribute(\"src\");\n                audio.load();\n            });\n        };\n    }, [\n        playList\n    ]);\n    // HOW IT WORKS\n    // First, check if the searchbar contains any value. If true, apply other filters to the search result.\n    // Second, check what artists and genres filters are applied.\n    // Third, memorize the result of applied search and filters. Here is the third check of sortTracksByReleaseDate.\n    // If true, apply sortTracksByReleaseDate to filteredTracks object. If false, simply return filteredTracks.\n    // determine which tracklist to render, default or search\n    const tracksToRender = isSearch ? searchPlayList : playList;\n    // filter tracks by artists and genres\n    const filterTracks = (tracks)=>{\n        return tracks.filter((track)=>{\n            const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n            const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n            return isAuthorsMatch && isGenresMatch;\n        });\n    };\n    // useMemo to save the result of applied filters\n    const filteredAndSortedPlaylist = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const filteredTracks = filterTracks(tracksToRender);\n        if (activeFilters.release_dates) {\n            return (0,_lib_sortTracksByReleaseDate__WEBPACK_IMPORTED_MODULE_5__.sortTracksByReleaseDate)(filteredTracks, activeFilters.release_dates);\n        } else {\n            return filteredTracks;\n        }\n    }, [\n        tracksToRender,\n        activeFilters\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().contentPlaylist), (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().playlist)),\n        children: isSearch && tracksToRender.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_ContentPlaylist_module_css__WEBPACK_IMPORTED_MODULE_7___default().playlistTitleCol),\n            children: \"No tracks found\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n            lineNumber: 120,\n            columnNumber: 9\n        }, undefined) : filteredAndSortedPlaylist.map((trackR)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PlayListItem__WEBPACK_IMPORTED_MODULE_4__.PlayListItem, {\n                id: trackR.id,\n                name: trackR.name,\n                author: trackR.author,\n                album: trackR.album,\n                duration: trackDurations[trackR.id],\n                setTrack: ()=>handleTrack(trackR),\n                isSetTrack: trackR.id === (track === null || track === void 0 ? void 0 : track.id),\n                stared_user: trackR.stared_user,\n                // @ts-ignore\n                playlistID: playlistID\n            }, trackR.id, false, {\n                fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n                lineNumber: 123,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\duffb\\\\OneDrive\\\\Рабочий стол\\\\new_music\\\\music\\\\src\\\\components\\\\ContentPlaylist\\\\ContentPlaylist.tsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ContentPlaylist, \"fe7HF2i0C4pWsrnuDQdIhTWhSpg=\", true);\n_c = ContentPlaylist;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentPlaylist); // \"use client\"\n // import styles from \"./ContentPlaylist.module.css\";\n // import classNames from \"classnames\";\n // import React, { useEffect, useMemo, useRef, useState } from 'react';\n // import { trackType } from '@/types/types';\n // import { setCurrentTrack, setPlayList } from '@/store/features/tracksSlice';\n // import { PlayListItem } from '@components/PlayListItem';\n // import { useAppDispatch, useAppSelector } from \"@/types/hooks\";\n // import { getTracks } from \"@/api/api\";\n // import { sortTracksByReleaseDate } from \"@/lib/sortTracksByReleaseDate\";\n // const ContentPlaylist = () => {\n //   const dispatcher = useAppDispatch();\n //   const playList = useAppSelector((state) => state.tracks.playList);\n //   const searchPlayList = useAppSelector((state) => state.tracks.searchPlaylist);\n //   const { track } = useAppSelector((state) => state.tracks);\n //   const isSearch = useAppSelector((state) => state.tracks.isSearch);\n //   const activeFilters = useAppSelector((state) => state.tracks.activeFilters);\n //   const playlistNumber = useAppSelector((state) => state.tracks.playlistNumber);\n //   useEffect(() => {\n //     getTracks(playlistNumber).then((data) => {\n //       data.items ? dispatcher(setPlayList(data.items)) : dispatcher(setPlayList(data));\n //     });\n //   }, [dispatcher, playlistNumber]);\n //   const handleTrack = (trackR: trackType) => {\n //     dispatcher(setCurrentTrack(trackR));\n //   };\n //   const [trackDurations, setTrackDurations] = useState<{ [key: string]: number }>({});\n //   const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});\n //   useEffect(() => {\n //     const durations: { [key: string]: number } = {};\n //     playList?.forEach((track: trackType) => {\n //       const audio = new Audio(track.track_file);\n //       audio.addEventListener('loadedmetadata', () => {\n //         durations[track.id] = audio.duration;\n //         setTrackDurations({ ...durations });\n //       });\n //       audioRefs.current[track.id] = audio;\n //     });\n //     return () => {\n //       Object.values(audioRefs.current).forEach((audio) => {\n //         audio.pause();\n //         audio.removeAttribute('src');\n //         audio.load();\n //       });\n //     };\n //   }, [playList]);\n //   const tracksToRender = isSearch ? searchPlayList : playList;\n //   const filterTracks = (tracks: trackType[]) => {\n //     return tracks.filter((track) => {\n //       const isAuthorsMatch = activeFilters.authors.length === 0 || activeFilters.authors.includes(track.author);\n //       const isGenresMatch = activeFilters.genres.length === 0 || activeFilters.genres.includes(track.genre);\n //       return isAuthorsMatch && isGenresMatch;\n //     });\n //   };\n //   const filteredAndSortedPlaylist = useMemo(() => {\n //     const filteredTracks = filterTracks(tracksToRender);\n //     if (activeFilters.release_dates) {\n //       return sortTracksByReleaseDate(filteredTracks, activeFilters.release_dates);\n //     } else {\n //       return filteredTracks;\n //     }\n //   }, [tracksToRender, activeFilters]);\n //   return (\n //     <div className={classNames(styles.contentPlaylist, styles.playlist)}>\n //       {isSearch && tracksToRender.length === 0 ? (\n //         <p className={styles.playlistTitleCol}>No tracks found</p>\n //       ) : (\n //         filteredAndSortedPlaylist.map((trackR: trackType) => (\n //           <PlayListItem\n //             key={trackR.id}\n //             name={trackR.name}\n //             author={trackR.author}\n //             album={trackR.album}\n //             duration={trackDurations[trackR.id]}\n //             setTrack={() => handleTrack(trackR)}\n //             isSetTrack={trackR.id === track?.id}\n //           />\n //         ))\n //       )}\n //     </div>\n //   );\n // };\n // export default ContentPlaylist;\nvar _c;\n$RefreshReg$(_c, \"ContentPlaylist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbnRlbnRQbGF5bGlzdC9Db250ZW50UGxheWxpc3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWtEO0FBQ2Q7QUFDZ0M7QUFFUTtBQUNwQjtBQUNnQjtBQUNWO0FBRTlELE1BQU1ZLGtCQUFrQjs7SUFFdEIsTUFBTUMsYUFBYUM7SUFDbkIsTUFBTUMsV0FBV0MsZUFBZSxDQUFDQyxRQUFVQSxNQUFNQyxNQUFNLENBQUNILFFBQVE7SUFDaEUsTUFBTUksaUJBQWlCSCxlQUFlLENBQUNDLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ0UsY0FBYztJQUM1RSxNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHTCxlQUFlLENBQUNDLFFBQVVBLE1BQU1DLE1BQU07SUFDeEQsTUFBTUksWUFBWUMsYUFBYUMsT0FBTyxDQUFDO0lBQ3ZDLE1BQU1DLFdBQVdULGVBQWUsQ0FBQ0MsUUFBVUEsTUFBTUMsTUFBTSxDQUFDTyxRQUFRO0lBQ2hFLE1BQU1DLGdCQUFnQlYsZUFBZSxDQUFDQyxRQUFVQSxNQUFNQyxNQUFNLENBQUNRLGFBQWE7SUFFMUUsaURBQWlEO0lBQ2pELE1BQU0sQ0FBQ0Msc0JBQXNCQyx3QkFBd0IsR0FBR3RCLCtDQUFRQSxDQUF3QjtJQUN4RixNQUFNdUIscUJBQXFCO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxRQUFRUCxhQUFhQyxPQUFPLENBQUM7WUFDbkMsSUFBSSxDQUFDTSxPQUFPO1lBQ1osTUFBTUMsaUJBQWlCLE1BQU1DLGFBQWFGO1lBQzFDakIsV0FBV0YsMkVBQWdCQSxDQUFDb0IsZUFBZUUsTUFBTTtRQUNuRCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLDJCQUEyQkE7UUFDM0M7SUFDRjtJQUNBLCtDQUErQztJQUMvQy9CLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlDLFdBQVdDLFlBQVk7WUFDM0JSO1FBQ0YsR0FBRztRQUNIRCx3QkFBd0JRO1FBQ3hCLE9BQU87WUFDTCxJQUFJVCxzQkFBc0JXLGNBQWNYO1FBQzFDO0lBQ0YsR0FBRyxFQUFFO0lBRUwsOEJBQThCO0lBQzlCLE1BQU1ZLGFBQWF2QixlQUFlLENBQUNDLFFBQVVBLE1BQU1DLE1BQU0sQ0FBQ3NCLGNBQWM7SUFDeEUsNkJBQTZCO0lBQzdCckMsZ0RBQVNBLENBQUM7UUFDUixJQUFJbUIsY0FBYyxNQUFNO1lBQ3RCLElBQUltQixPQUFPRixnQkFBZ0IsU0FBUztnQkFDbENHLGVBQWVwQixXQUFXcUIsSUFBSSxDQUFDLENBQUNDO29CQUM5Qi9CLFdBQVdMLHdFQUFXQSxDQUFDb0M7Z0JBQ3pCO1lBQ0YsT0FBTztnQkFDTEMsVUFBVU4sWUFBWUksSUFBSSxDQUFDLENBQUNDO29CQUMxQiwrQkFBK0I7b0JBQy9CQSxLQUFLRSxLQUFLLEdBQUdqQyxXQUFXTCx3RUFBV0EsQ0FBQ29DLEtBQUtFLEtBQUssS0FBS2pDLFdBQVdMLHdFQUFXQSxDQUFDb0M7Z0JBQzVFO1lBQ0Y7UUFDRjtJQUNGLEdBQUc7UUFBQy9CO1FBQVkwQjtLQUFXO0lBQzNCLHFDQUFxQztJQUNyQyxNQUFNUSxjQUFjLENBQUNDO1FBQ25CbkMsV0FBV04sNEVBQWVBLENBQUN5QztJQUM3QjtJQUNBLGdEQUFnRDtJQUNoRCxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUc1QywrQ0FBUUEsQ0FBNEIsQ0FBQztJQUNqRixNQUFNNkMsWUFBWTlDLDZDQUFNQSxDQUFzQyxDQUFDO0lBQy9ERixnREFBU0EsQ0FBQztRQUNSLE1BQU1pRCxZQUF1QyxDQUFDO1FBQzlDckMscUJBQUFBLCtCQUFBQSxTQUFVc0MsT0FBTyxDQUFDLENBQUNoQztZQUNqQixNQUFNaUMsUUFBUSxJQUFJQyxNQUFNbEMsTUFBTW1DLFVBQVU7WUFDeENGLE1BQU1HLGdCQUFnQixDQUFDLGtCQUFrQjtnQkFDdkNMLFNBQVMsQ0FBQy9CLE1BQU1xQyxFQUFFLENBQUMsR0FBR0osTUFBTUssUUFBUTtnQkFDcENULGtCQUFrQjtvQkFBRSxHQUFHRSxTQUFTO2dCQUFDO1lBQ25DO1lBQ0FELFVBQVVTLE9BQU8sQ0FBQ3ZDLE1BQU1xQyxFQUFFLENBQUMsR0FBR0o7UUFDaEM7UUFDQSxPQUFPO1lBQ0xPLE9BQU9DLE1BQU0sQ0FBQ1gsVUFBVVMsT0FBTyxFQUFFUCxPQUFPLENBQUMsQ0FBQ0M7Z0JBQ3hDQSxNQUFNUyxLQUFLO2dCQUNYVCxNQUFNVSxlQUFlLENBQUM7Z0JBQ3RCVixNQUFNVyxJQUFJO1lBQ1o7UUFDRjtJQUNGLEdBQUc7UUFBQ2xEO0tBQVM7SUFFYixlQUFlO0lBQ2YsdUdBQXVHO0lBQ3ZHLDZEQUE2RDtJQUM3RCxnSEFBZ0g7SUFDaEgsMkdBQTJHO0lBRTNHLHlEQUF5RDtJQUN6RCxNQUFNbUQsaUJBQWlCekMsV0FBV04saUJBQWlCSjtJQUVuRCxzQ0FBc0M7SUFDdEMsTUFBTW9ELGVBQWUsQ0FBQ2pEO1FBQ3BCLE9BQU9BLE9BQU9rRCxNQUFNLENBQUMsQ0FBQy9DO1lBQ3BCLE1BQU1nRCxpQkFBaUIzQyxjQUFjNEMsT0FBTyxDQUFDQyxNQUFNLEtBQUssS0FBSzdDLGNBQWM0QyxPQUFPLENBQUNFLFFBQVEsQ0FBQ25ELE1BQU1vRCxNQUFNO1lBQ3hHLE1BQU1DLGdCQUFnQmhELGNBQWNpRCxNQUFNLENBQUNKLE1BQU0sS0FBSyxLQUFLN0MsY0FBY2lELE1BQU0sQ0FBQ0gsUUFBUSxDQUFDbkQsTUFBTXVELEtBQUs7WUFDcEcsT0FBT1Asa0JBQWtCSztRQUMzQjtJQUNGO0lBRUEsZ0RBQWdEO0lBQ2hELE1BQU1HLDRCQUE0QnpFLDhDQUFPQSxDQUFDO1FBQ3hDLE1BQU0wRSxpQkFBaUJYLGFBQWFEO1FBRXBDLElBQUl4QyxjQUFjcUQsYUFBYSxFQUFFO1lBQy9CLE9BQU9yRSxxRkFBdUJBLENBQUNvRSxnQkFBZ0JwRCxjQUFjcUQsYUFBYTtRQUM1RSxPQUFPO1lBQ0wsT0FBT0Q7UUFDVDtJQUNGLEdBQUc7UUFBQ1o7UUFBZ0J4QztLQUFjO0lBRWxDLHFCQUNFLDhEQUFDc0Q7UUFBSUMsV0FBV2hGLGlEQUFVQSxDQUFDRCxvRkFBc0IsRUFBRUEsNkVBQWU7a0JBQy9EeUIsWUFBWXlDLGVBQWVLLE1BQU0sS0FBSyxrQkFDckMsOERBQUNhO1lBQUVILFdBQVdqRixxRkFBdUI7c0JBQUU7Ozs7O3dCQUV2QzZFLDBCQUEwQlMsR0FBRyxDQUFDLENBQUN0Qyx1QkFDN0IsOERBQUN2QyxrRUFBWUE7Z0JBRVhpRCxJQUFJVixPQUFPVSxFQUFFO2dCQUNiNkIsTUFBTXZDLE9BQU91QyxJQUFJO2dCQUNqQmQsUUFBUXpCLE9BQU95QixNQUFNO2dCQUNyQmUsT0FBT3hDLE9BQU93QyxLQUFLO2dCQUNuQjdCLFVBQVVWLGNBQWMsQ0FBQ0QsT0FBT1UsRUFBRSxDQUFDO2dCQUNuQytCLFVBQVUsSUFBTTFDLFlBQVlDO2dCQUM1QjBDLFlBQVkxQyxPQUFPVSxFQUFFLE1BQUtyQyxrQkFBQUEsNEJBQUFBLE1BQU9xQyxFQUFFO2dCQUNuQ2lDLGFBQWEzQyxPQUFPMkMsV0FBVztnQkFDL0IsYUFBYTtnQkFDYnBELFlBQVlBO2VBVlBTLE9BQU9VLEVBQUU7Ozs7Ozs7Ozs7QUFnQjFCO0dBaElNOUM7S0FBQUE7QUFrSU4sK0RBQWVBLGVBQWVBLEVBQUMsQ0FFL0IsZUFBZTtDQUVmLHFEQUFxRDtDQUNyRCx1Q0FBdUM7Q0FDdkMsdUVBQXVFO0NBQ3ZFLDZDQUE2QztDQUM3QywrRUFBK0U7Q0FDL0UsMkRBQTJEO0NBQzNELGtFQUFrRTtDQUNsRSx5Q0FBeUM7Q0FDekMsMkVBQTJFO0NBRTNFLGtDQUFrQztDQUVsQyx5Q0FBeUM7Q0FDekMsdUVBQXVFO0NBQ3ZFLG1GQUFtRjtDQUNuRiwrREFBK0Q7Q0FDL0QsdUVBQXVFO0NBRXZFLGlGQUFpRjtDQUdqRixtRkFBbUY7Q0FFbkYsc0JBQXNCO0NBQ3RCLGlEQUFpRDtDQUVqRCwwRkFBMEY7Q0FDMUYsVUFBVTtDQUNWLHNDQUFzQztDQUV0QyxpREFBaUQ7Q0FDakQsMkNBQTJDO0NBQzNDLE9BQU87Q0FFUCx5RkFBeUY7Q0FDekYsdUVBQXVFO0NBQ3ZFLHNCQUFzQjtDQUN0Qix1REFBdUQ7Q0FDdkQsZ0RBQWdEO0NBQ2hELG1EQUFtRDtDQUNuRCx5REFBeUQ7Q0FDekQsZ0RBQWdEO0NBQ2hELCtDQUErQztDQUMvQyxZQUFZO0NBQ1osNkNBQTZDO0NBQzdDLFVBQVU7Q0FDVixxQkFBcUI7Q0FDckIsOERBQThEO0NBQzlELHlCQUF5QjtDQUN6Qix3Q0FBd0M7Q0FDeEMsd0JBQXdCO0NBQ3hCLFlBQVk7Q0FDWixTQUFTO0NBQ1Qsb0JBQW9CO0NBRXBCLGlFQUFpRTtDQUdqRSxvREFBb0Q7Q0FDcEQsd0NBQXdDO0NBQ3hDLG1IQUFtSDtDQUNuSCwrR0FBK0c7Q0FDL0csZ0RBQWdEO0NBQ2hELFVBQVU7Q0FDVixPQUFPO0NBRVAsc0RBQXNEO0NBQ3RELDJEQUEyRDtDQUUzRCx5Q0FBeUM7Q0FDekMscUZBQXFGO0NBQ3JGLGVBQWU7Q0FDZiwrQkFBK0I7Q0FDL0IsUUFBUTtDQUNSLHlDQUF5QztDQUV6QyxhQUFhO0NBQ2IsNEVBQTRFO0NBQzVFLHFEQUFxRDtDQUNyRCxxRUFBcUU7Q0FDckUsY0FBYztDQUNkLGlFQUFpRTtDQUNqRSwwQkFBMEI7Q0FDMUIsOEJBQThCO0NBQzlCLGlDQUFpQztDQUNqQyxxQ0FBcUM7Q0FDckMsbUNBQW1DO0NBQ25DLG1EQUFtRDtDQUNuRCxtREFBbUQ7Q0FDbkQsbURBQW1EO0NBQ25ELGVBQWU7Q0FDZixhQUFhO0NBQ2IsV0FBVztDQUNYLGFBQWE7Q0FDYixPQUFPO0NBQ1AsS0FBSztDQUVMLGtDQUFrQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250ZW50UGxheWxpc3QvQ29udGVudFBsYXlsaXN0LnRzeD8zY2ZjIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0NvbnRlbnRQbGF5bGlzdC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHRyYWNrVHlwZSB9IGZyb20gJ0AvdHlwZXMvdHlwZXMnO1xyXG5pbXBvcnQgeyBzZXRDdXJyZW50VHJhY2ssIHNldFBsYXlMaXN0IH0gZnJvbSAnQC9zdG9yZS9mZWF0dXJlcy90cmFja3NTbGljZSc7XHJcbmltcG9ydCB7IFBsYXlMaXN0SXRlbSB9IGZyb20gJ0Bjb21wb25lbnRzL1BsYXlMaXN0SXRlbSc7XHJcbmltcG9ydCB7IHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIH0gZnJvbSBcIkAvbGliL3NvcnRUcmFja3NCeVJlbGVhc2VEYXRlXCI7XHJcbmltcG9ydCB7IHNldEF1dGhVc2VyVG9rZW4gfSBmcm9tIFwiQC9zdG9yZS9mZWF0dXJlcy9hdXRoU2xpY2VcIjtcclxuXHJcbmNvbnN0IENvbnRlbnRQbGF5bGlzdCA9ICgpID0+IHtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2hlciA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgcGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5TGlzdCk7XHJcbiAgY29uc3Qgc2VhcmNoUGxheUxpc3QgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5zZWFyY2hQbGF5bGlzdCk7XHJcbiAgY29uc3QgeyB0cmFjayB9ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MpO1xyXG4gIGNvbnN0IHVzZXJUb2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyVG9rZW4nKTtcclxuICBjb25zdCBpc1NlYXJjaCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmlzU2VhcmNoKTtcclxuICBjb25zdCBhY3RpdmVGaWx0ZXJzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MuYWN0aXZlRmlsdGVycyk7XHJcblxyXG4gIC8vIGdldCBhIG5ldyBhY2Nlc3MgdG9rZW4gdXNpbmcgdGhlIHJlZnJlc2ggdG9rZW5cclxuICBjb25zdCBbdG9rZW5SZWZyZXNoSW50ZXJ2YWwsIHNldFRva2VuUmVmcmVzaEludGVydmFsXSA9IHVzZVN0YXRlPE5vZGVKUy5UaW1lb3V0IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgaGFuZGxlUmVmcmVzaFRva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaFRva2VuJyk7XHJcbiAgICAgIGlmICghdG9rZW4pIHJldHVybjtcclxuICAgICAgY29uc3QgcmVmcmVzaGVkVG9rZW4gPSBhd2FpdCByZWZyZXNoVG9rZW4odG9rZW4pO1xyXG4gICAgICBkaXNwYXRjaGVyKHNldEF1dGhVc2VyVG9rZW4ocmVmcmVzaGVkVG9rZW4uYWNjZXNzKSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZWZyZXNoaW5nIHRva2VuOicsIGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIHRpbWVyIHRvIHJlZnJlc2ggdGhlIHRva2VuIGV2ZXJ5IDE4MCBzZWNvbmRzXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBoYW5kbGVSZWZyZXNoVG9rZW4oKTtcclxuICAgIH0sIDE4MDAwMCk7XHJcbiAgICBzZXRUb2tlblJlZnJlc2hJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpZiAodG9rZW5SZWZyZXNoSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodG9rZW5SZWZyZXNoSW50ZXJ2YWwpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIGNoZWNrIHBsYXlsaXN0IG51bWJlciAxLzIvM1xyXG4gIGNvbnN0IHBsYXlsaXN0SUQgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5bGlzdE51bWJlcik7XHJcbiAgLy8gZ2V0IHRoZSB0cmFja2xpc3QgZnJvbSBBUElcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHVzZXJUb2tlbiAhPT0gbnVsbCkge1xyXG4gICAgICBpZiAoU3RyaW5nKHBsYXlsaXN0SUQpID09PSBcImxpa2VkXCIpIHtcclxuICAgICAgICBnZXRMaWtlZFRyYWNrcyh1c2VyVG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGRpc3BhdGNoZXIoc2V0UGxheUxpc3QoZGF0YSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdldFRyYWNrcyhwbGF5bGlzdElEKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgZGF0YSBpcyB3cmFwcGVkXHJcbiAgICAgICAgICBkYXRhLml0ZW1zID8gZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChkYXRhLml0ZW1zKSkgOiBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfSwgW2Rpc3BhdGNoZXIsIHBsYXlsaXN0SURdKTtcclxuICAvLyBSZWR1eCB0b29sczogc2V0IHRoZSB0cmFjayBwbGF5aW5nXHJcbiAgY29uc3QgaGFuZGxlVHJhY2sgPSAodHJhY2tSOiB0cmFja1R5cGUpID0+IHtcclxuICAgIGRpc3BhdGNoZXIoc2V0Q3VycmVudFRyYWNrKHRyYWNrUikpO1xyXG4gIH07XHJcbiAgLy8gYWRkIGEgZHVyYXRpb24gZnJvbSBhdWRpbyBwcm9wcyB0byBlYWNoIHRyYWNrXHJcbiAgY29uc3QgW3RyYWNrRHVyYXRpb25zLCBzZXRUcmFja0R1cmF0aW9uc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSk7XHJcbiAgY29uc3QgYXVkaW9SZWZzID0gdXNlUmVmPHsgW2tleTogc3RyaW5nXTogSFRNTEF1ZGlvRWxlbWVudCB9Pih7fSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGR1cmF0aW9uczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gICAgcGxheUxpc3Q/LmZvckVhY2goKHRyYWNrOiB0cmFja1R5cGUpID0+IHtcclxuICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8odHJhY2sudHJhY2tfZmlsZSk7XHJcbiAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xyXG4gICAgICAgIGR1cmF0aW9uc1t0cmFjay5pZF0gPSBhdWRpby5kdXJhdGlvbjtcclxuICAgICAgICBzZXRUcmFja0R1cmF0aW9ucyh7IC4uLmR1cmF0aW9ucyB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIGF1ZGlvUmVmcy5jdXJyZW50W3RyYWNrLmlkXSA9IGF1ZGlvO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBPYmplY3QudmFsdWVzKGF1ZGlvUmVmcy5jdXJyZW50KS5mb3JFYWNoKChhdWRpbykgPT4ge1xyXG4gICAgICAgIGF1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgYXVkaW8ucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcclxuICAgICAgICBhdWRpby5sb2FkKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICB9LCBbcGxheUxpc3RdKTtcclxuXHJcbiAgLy8gSE9XIElUIFdPUktTXHJcbiAgLy8gRmlyc3QsIGNoZWNrIGlmIHRoZSBzZWFyY2hiYXIgY29udGFpbnMgYW55IHZhbHVlLiBJZiB0cnVlLCBhcHBseSBvdGhlciBmaWx0ZXJzIHRvIHRoZSBzZWFyY2ggcmVzdWx0LlxyXG4gIC8vIFNlY29uZCwgY2hlY2sgd2hhdCBhcnRpc3RzIGFuZCBnZW5yZXMgZmlsdGVycyBhcmUgYXBwbGllZC5cclxuICAvLyBUaGlyZCwgbWVtb3JpemUgdGhlIHJlc3VsdCBvZiBhcHBsaWVkIHNlYXJjaCBhbmQgZmlsdGVycy4gSGVyZSBpcyB0aGUgdGhpcmQgY2hlY2sgb2Ygc29ydFRyYWNrc0J5UmVsZWFzZURhdGUuXHJcbiAgLy8gSWYgdHJ1ZSwgYXBwbHkgc29ydFRyYWNrc0J5UmVsZWFzZURhdGUgdG8gZmlsdGVyZWRUcmFja3Mgb2JqZWN0LiBJZiBmYWxzZSwgc2ltcGx5IHJldHVybiBmaWx0ZXJlZFRyYWNrcy5cclxuXHJcbiAgLy8gZGV0ZXJtaW5lIHdoaWNoIHRyYWNrbGlzdCB0byByZW5kZXIsIGRlZmF1bHQgb3Igc2VhcmNoXHJcbiAgY29uc3QgdHJhY2tzVG9SZW5kZXIgPSBpc1NlYXJjaCA/IHNlYXJjaFBsYXlMaXN0IDogcGxheUxpc3Q7XHJcblxyXG4gIC8vIGZpbHRlciB0cmFja3MgYnkgYXJ0aXN0cyBhbmQgZ2VucmVzXHJcbiAgY29uc3QgZmlsdGVyVHJhY2tzID0gKHRyYWNrczogdHJhY2tUeXBlW10pID0+IHtcclxuICAgIHJldHVybiB0cmFja3MuZmlsdGVyKCh0cmFjaykgPT4ge1xyXG4gICAgICBjb25zdCBpc0F1dGhvcnNNYXRjaCA9IGFjdGl2ZUZpbHRlcnMuYXV0aG9ycy5sZW5ndGggPT09IDAgfHwgYWN0aXZlRmlsdGVycy5hdXRob3JzLmluY2x1ZGVzKHRyYWNrLmF1dGhvcik7XHJcbiAgICAgIGNvbnN0IGlzR2VucmVzTWF0Y2ggPSBhY3RpdmVGaWx0ZXJzLmdlbnJlcy5sZW5ndGggPT09IDAgfHwgYWN0aXZlRmlsdGVycy5nZW5yZXMuaW5jbHVkZXModHJhY2suZ2VucmUpO1xyXG4gICAgICByZXR1cm4gaXNBdXRob3JzTWF0Y2ggJiYgaXNHZW5yZXNNYXRjaDtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIHVzZU1lbW8gdG8gc2F2ZSB0aGUgcmVzdWx0IG9mIGFwcGxpZWQgZmlsdGVyc1xyXG4gIGNvbnN0IGZpbHRlcmVkQW5kU29ydGVkUGxheWxpc3QgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IGZpbHRlcmVkVHJhY2tzID0gZmlsdGVyVHJhY2tzKHRyYWNrc1RvUmVuZGVyKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlRmlsdGVycy5yZWxlYXNlX2RhdGVzKSB7XHJcbiAgICAgIHJldHVybiBzb3J0VHJhY2tzQnlSZWxlYXNlRGF0ZShmaWx0ZXJlZFRyYWNrcywgYWN0aXZlRmlsdGVycy5yZWxlYXNlX2RhdGVzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBmaWx0ZXJlZFRyYWNrcztcclxuICAgIH1cclxuICB9LCBbdHJhY2tzVG9SZW5kZXIsIGFjdGl2ZUZpbHRlcnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250ZW50UGxheWxpc3QsIHN0eWxlcy5wbGF5bGlzdCl9PlxyXG4gICAgICB7aXNTZWFyY2ggJiYgdHJhY2tzVG9SZW5kZXIubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnBsYXlsaXN0VGl0bGVDb2x9Pk5vIHRyYWNrcyBmb3VuZDwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICBmaWx0ZXJlZEFuZFNvcnRlZFBsYXlsaXN0Lm1hcCgodHJhY2tSOiB0cmFja1R5cGUpID0+IChcclxuICAgICAgICAgIDxQbGF5TGlzdEl0ZW1cclxuICAgICAgICAgICAga2V5PXt0cmFja1IuaWR9XHJcbiAgICAgICAgICAgIGlkPXt0cmFja1IuaWR9XHJcbiAgICAgICAgICAgIG5hbWU9e3RyYWNrUi5uYW1lfVxyXG4gICAgICAgICAgICBhdXRob3I9e3RyYWNrUi5hdXRob3J9XHJcbiAgICAgICAgICAgIGFsYnVtPXt0cmFja1IuYWxidW19XHJcbiAgICAgICAgICAgIGR1cmF0aW9uPXt0cmFja0R1cmF0aW9uc1t0cmFja1IuaWRdfVxyXG4gICAgICAgICAgICBzZXRUcmFjaz17KCkgPT4gaGFuZGxlVHJhY2sodHJhY2tSKX1cclxuICAgICAgICAgICAgaXNTZXRUcmFjaz17dHJhY2tSLmlkID09PSB0cmFjaz8uaWR9XHJcbiAgICAgICAgICAgIHN0YXJlZF91c2VyPXt0cmFja1Iuc3RhcmVkX3VzZXJ9XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgcGxheWxpc3RJRD17cGxheWxpc3RJRH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSlcclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7XHJcblxyXG4vLyBcInVzZSBjbGllbnRcIlxyXG5cclxuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Db250ZW50UGxheWxpc3QubW9kdWxlLmNzc1wiO1xyXG4vLyBpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyB0cmFja1R5cGUgfSBmcm9tICdAL3R5cGVzL3R5cGVzJztcclxuLy8gaW1wb3J0IHsgc2V0Q3VycmVudFRyYWNrLCBzZXRQbGF5TGlzdCB9IGZyb20gJ0Avc3RvcmUvZmVhdHVyZXMvdHJhY2tzU2xpY2UnO1xyXG4vLyBpbXBvcnQgeyBQbGF5TGlzdEl0ZW0gfSBmcm9tICdAY29tcG9uZW50cy9QbGF5TGlzdEl0ZW0nO1xyXG4vLyBpbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC90eXBlcy9ob29rc1wiO1xyXG4vLyBpbXBvcnQgeyBnZXRUcmFja3MgfSBmcm9tIFwiQC9hcGkvYXBpXCI7XHJcbi8vIGltcG9ydCB7IHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlIH0gZnJvbSBcIkAvbGliL3NvcnRUcmFja3NCeVJlbGVhc2VEYXRlXCI7XHJcblxyXG4vLyBjb25zdCBDb250ZW50UGxheWxpc3QgPSAoKSA9PiB7XHJcblxyXG4vLyAgIGNvbnN0IGRpc3BhdGNoZXIgPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4vLyAgIGNvbnN0IHBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3MucGxheUxpc3QpO1xyXG4vLyAgIGNvbnN0IHNlYXJjaFBsYXlMaXN0ID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS50cmFja3Muc2VhcmNoUGxheWxpc3QpO1xyXG4vLyAgIGNvbnN0IHsgdHJhY2sgfSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzKTtcclxuLy8gICBjb25zdCBpc1NlYXJjaCA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmlzU2VhcmNoKTtcclxuXHJcbi8vICAgY29uc3QgYWN0aXZlRmlsdGVycyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudHJhY2tzLmFjdGl2ZUZpbHRlcnMpO1xyXG5cclxuXHJcbi8vICAgY29uc3QgcGxheWxpc3ROdW1iZXIgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnRyYWNrcy5wbGF5bGlzdE51bWJlcik7XHJcbiBcclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgZ2V0VHJhY2tzKHBsYXlsaXN0TnVtYmVyKS50aGVuKChkYXRhKSA9PiB7XHJcblxyXG4vLyAgICAgICBkYXRhLml0ZW1zID8gZGlzcGF0Y2hlcihzZXRQbGF5TGlzdChkYXRhLml0ZW1zKSkgOiBkaXNwYXRjaGVyKHNldFBsYXlMaXN0KGRhdGEpKTtcclxuLy8gICAgIH0pO1xyXG4vLyAgIH0sIFtkaXNwYXRjaGVyLCBwbGF5bGlzdE51bWJlcl0pO1xyXG5cclxuLy8gICBjb25zdCBoYW5kbGVUcmFjayA9ICh0cmFja1I6IHRyYWNrVHlwZSkgPT4ge1xyXG4vLyAgICAgZGlzcGF0Y2hlcihzZXRDdXJyZW50VHJhY2sodHJhY2tSKSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgW3RyYWNrRHVyYXRpb25zLCBzZXRUcmFja0R1cmF0aW9uc10gPSB1c2VTdGF0ZTx7IFtrZXk6IHN0cmluZ106IG51bWJlciB9Pih7fSk7XHJcbi8vICAgY29uc3QgYXVkaW9SZWZzID0gdXNlUmVmPHsgW2tleTogc3RyaW5nXTogSFRNTEF1ZGlvRWxlbWVudCB9Pih7fSk7XHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIGNvbnN0IGR1cmF0aW9uczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4vLyAgICAgcGxheUxpc3Q/LmZvckVhY2goKHRyYWNrOiB0cmFja1R5cGUpID0+IHtcclxuLy8gICAgICAgY29uc3QgYXVkaW8gPSBuZXcgQXVkaW8odHJhY2sudHJhY2tfZmlsZSk7XHJcbi8vICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlZG1ldGFkYXRhJywgKCkgPT4ge1xyXG4vLyAgICAgICAgIGR1cmF0aW9uc1t0cmFjay5pZF0gPSBhdWRpby5kdXJhdGlvbjtcclxuLy8gICAgICAgICBzZXRUcmFja0R1cmF0aW9ucyh7IC4uLmR1cmF0aW9ucyB9KTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgICAgIGF1ZGlvUmVmcy5jdXJyZW50W3RyYWNrLmlkXSA9IGF1ZGlvO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICByZXR1cm4gKCkgPT4ge1xyXG4vLyAgICAgICBPYmplY3QudmFsdWVzKGF1ZGlvUmVmcy5jdXJyZW50KS5mb3JFYWNoKChhdWRpbykgPT4ge1xyXG4vLyAgICAgICAgIGF1ZGlvLnBhdXNlKCk7XHJcbi8vICAgICAgICAgYXVkaW8ucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcclxuLy8gICAgICAgICBhdWRpby5sb2FkKCk7XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgfTtcclxuLy8gICB9LCBbcGxheUxpc3RdKTtcclxuXHJcbi8vICAgY29uc3QgdHJhY2tzVG9SZW5kZXIgPSBpc1NlYXJjaCA/IHNlYXJjaFBsYXlMaXN0IDogcGxheUxpc3Q7XHJcblxyXG5cclxuLy8gICBjb25zdCBmaWx0ZXJUcmFja3MgPSAodHJhY2tzOiB0cmFja1R5cGVbXSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHRyYWNrcy5maWx0ZXIoKHRyYWNrKSA9PiB7XHJcbi8vICAgICAgIGNvbnN0IGlzQXV0aG9yc01hdGNoID0gYWN0aXZlRmlsdGVycy5hdXRob3JzLmxlbmd0aCA9PT0gMCB8fCBhY3RpdmVGaWx0ZXJzLmF1dGhvcnMuaW5jbHVkZXModHJhY2suYXV0aG9yKTtcclxuLy8gICAgICAgY29uc3QgaXNHZW5yZXNNYXRjaCA9IGFjdGl2ZUZpbHRlcnMuZ2VucmVzLmxlbmd0aCA9PT0gMCB8fCBhY3RpdmVGaWx0ZXJzLmdlbnJlcy5pbmNsdWRlcyh0cmFjay5nZW5yZSk7XHJcbi8vICAgICAgIHJldHVybiBpc0F1dGhvcnNNYXRjaCAmJiBpc0dlbnJlc01hdGNoO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgZmlsdGVyZWRUcmFja3MgPSBmaWx0ZXJUcmFja3ModHJhY2tzVG9SZW5kZXIpO1xyXG5cclxuLy8gICAgIGlmIChhY3RpdmVGaWx0ZXJzLnJlbGVhc2VfZGF0ZXMpIHtcclxuLy8gICAgICAgcmV0dXJuIHNvcnRUcmFja3NCeVJlbGVhc2VEYXRlKGZpbHRlcmVkVHJhY2tzLCBhY3RpdmVGaWx0ZXJzLnJlbGVhc2VfZGF0ZXMpO1xyXG4vLyAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgcmV0dXJuIGZpbHRlcmVkVHJhY2tzO1xyXG4vLyAgICAgfVxyXG4vLyAgIH0sIFt0cmFja3NUb1JlbmRlciwgYWN0aXZlRmlsdGVyc10pO1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMoc3R5bGVzLmNvbnRlbnRQbGF5bGlzdCwgc3R5bGVzLnBsYXlsaXN0KX0+XHJcbi8vICAgICAgIHtpc1NlYXJjaCAmJiB0cmFja3NUb1JlbmRlci5sZW5ndGggPT09IDAgPyAoXHJcbi8vICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMucGxheWxpc3RUaXRsZUNvbH0+Tm8gdHJhY2tzIGZvdW5kPC9wPlxyXG4vLyAgICAgICApIDogKFxyXG4vLyAgICAgICAgIGZpbHRlcmVkQW5kU29ydGVkUGxheWxpc3QubWFwKCh0cmFja1I6IHRyYWNrVHlwZSkgPT4gKFxyXG4vLyAgICAgICAgICAgPFBsYXlMaXN0SXRlbVxyXG4vLyAgICAgICAgICAgICBrZXk9e3RyYWNrUi5pZH1cclxuLy8gICAgICAgICAgICAgbmFtZT17dHJhY2tSLm5hbWV9XHJcbi8vICAgICAgICAgICAgIGF1dGhvcj17dHJhY2tSLmF1dGhvcn1cclxuLy8gICAgICAgICAgICAgYWxidW09e3RyYWNrUi5hbGJ1bX1cclxuLy8gICAgICAgICAgICAgZHVyYXRpb249e3RyYWNrRHVyYXRpb25zW3RyYWNrUi5pZF19XHJcbi8vICAgICAgICAgICAgIHNldFRyYWNrPXsoKSA9PiBoYW5kbGVUcmFjayh0cmFja1IpfVxyXG4vLyAgICAgICAgICAgICBpc1NldFRyYWNrPXt0cmFja1IuaWQgPT09IHRyYWNrPy5pZH1cclxuLy8gICAgICAgICAgIC8+XHJcbi8vICAgICAgICAgKSlcclxuLy8gICAgICAgKX1cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBDb250ZW50UGxheWxpc3Q7Il0sIm5hbWVzIjpbInN0eWxlcyIsImNsYXNzTmFtZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInNldEN1cnJlbnRUcmFjayIsInNldFBsYXlMaXN0IiwiUGxheUxpc3RJdGVtIiwic29ydFRyYWNrc0J5UmVsZWFzZURhdGUiLCJzZXRBdXRoVXNlclRva2VuIiwiQ29udGVudFBsYXlsaXN0IiwiZGlzcGF0Y2hlciIsInVzZUFwcERpc3BhdGNoIiwicGxheUxpc3QiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwidHJhY2tzIiwic2VhcmNoUGxheUxpc3QiLCJzZWFyY2hQbGF5bGlzdCIsInRyYWNrIiwidXNlclRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlzU2VhcmNoIiwiYWN0aXZlRmlsdGVycyIsInRva2VuUmVmcmVzaEludGVydmFsIiwic2V0VG9rZW5SZWZyZXNoSW50ZXJ2YWwiLCJoYW5kbGVSZWZyZXNoVG9rZW4iLCJ0b2tlbiIsInJlZnJlc2hlZFRva2VuIiwicmVmcmVzaFRva2VuIiwiYWNjZXNzIiwiZXJyb3IiLCJjb25zb2xlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwbGF5bGlzdElEIiwicGxheWxpc3ROdW1iZXIiLCJTdHJpbmciLCJnZXRMaWtlZFRyYWNrcyIsInRoZW4iLCJkYXRhIiwiZ2V0VHJhY2tzIiwiaXRlbXMiLCJoYW5kbGVUcmFjayIsInRyYWNrUiIsInRyYWNrRHVyYXRpb25zIiwic2V0VHJhY2tEdXJhdGlvbnMiLCJhdWRpb1JlZnMiLCJkdXJhdGlvbnMiLCJmb3JFYWNoIiwiYXVkaW8iLCJBdWRpbyIsInRyYWNrX2ZpbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaWQiLCJkdXJhdGlvbiIsImN1cnJlbnQiLCJPYmplY3QiLCJ2YWx1ZXMiLCJwYXVzZSIsInJlbW92ZUF0dHJpYnV0ZSIsImxvYWQiLCJ0cmFja3NUb1JlbmRlciIsImZpbHRlclRyYWNrcyIsImZpbHRlciIsImlzQXV0aG9yc01hdGNoIiwiYXV0aG9ycyIsImxlbmd0aCIsImluY2x1ZGVzIiwiYXV0aG9yIiwiaXNHZW5yZXNNYXRjaCIsImdlbnJlcyIsImdlbnJlIiwiZmlsdGVyZWRBbmRTb3J0ZWRQbGF5bGlzdCIsImZpbHRlcmVkVHJhY2tzIiwicmVsZWFzZV9kYXRlcyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRlbnRQbGF5bGlzdCIsInBsYXlsaXN0IiwicCIsInBsYXlsaXN0VGl0bGVDb2wiLCJtYXAiLCJuYW1lIiwiYWxidW0iLCJzZXRUcmFjayIsImlzU2V0VHJhY2siLCJzdGFyZWRfdXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ContentPlaylist/ContentPlaylist.tsx\n"));

/***/ })

});