"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./src/pages/posts/[id].tsx":
/*!**********************************!*\
  !*** ./src/pages/posts/[id].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DivBody\": function() { return /* binding */ DivBody; },\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts */ \"./src/pages/posts.tsx\");\n/* harmony import */ var _createPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPost */ \"./src/pages/posts/createPost.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 auto;\\n  padding: 20px;\\n  width: 26%;\\n  border: 1px solid #ccc;\\n  border-radius: 4px;\\n  background-color: grey;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\njustify-content: center;\\nalign-items: center;\\nmargin: 0 auto;\\npadding: 20px;\\nwidth: 26%;\\nborder: 1px solid #ccc;\\nborder-radius: 4px;\\nbackground-color: grey;\\n\\nspan {\\n  font-size: 20px;\\n  font-weight: bold;\\n  white-space: pre-wrap;\\n}\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PostPage(param) {\n    let { post , comments  } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [commentsList, setCommentsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(comments);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"/api/posts/\".concat(post.id, \"/comments\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name,\n                email,\n                body\n            })\n        });\n        if (response.ok) {\n            const newComment = await response.json();\n            setBody(\"\");\n            setName(\"\");\n            setEmail(\"\");\n            setCommentsList((comments)=>[\n                    ...comments,\n                    newComment\n                ]);\n        }\n    };\n    const handleHome = async ()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n    };\n    const handleBack = async ()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/posts\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_posts__WEBPACK_IMPORTED_MODULE_4__.Header, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DivBody, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Contenido\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: post.body\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleBack,\n                        children: \"Atr\\xe1s\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleHome,\n                        children: \"Inicio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DivComments, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Comentarios (\",\n                        commentsList.length,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_createPost__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"A\\xf1adir comentario\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Nombre:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: name,\n                                    onChange: (event)=>setName(event.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Email:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    value: email,\n                                    onChange: (event)=>setEmail(event.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Comentario:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                    value: body,\n                                    onChange: (event)=>setBody(event.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"A\\xf1adir\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            commentsList.map((comment)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.body\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.createdAt\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.updatedAt\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.user.name\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        comment.replies.map((reply)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.body\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.createdAt\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.updatedAt\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.user.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, reply.id, true, {\n                                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, comment.id, true, {\n                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(PostPage, \"PfeECCSl2wxifmhyR9y77LcGDOY=\");\n_c = PostPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nconst DivComments = styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.div(_templateObject());\n_c1 = DivComments;\nconst DivBody = styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.div(_templateObject1());\n_c2 = DivBody;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"PostPage\");\n$RefreshReg$(_c1, \"DivComments\");\n$RefreshReg$(_c2, \"DivBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztzQ0FDQyw4REFBQ3NCO3NDQUFHRCxRQUFRekMsSUFBSTs7Ozs7O3NDQUNoQiw4REFBQzBDO3NDQUFHRCxRQUFRRSxTQUFTOzs7Ozs7c0NBQ3JCLDhEQUFDRDtzQ0FBR0QsUUFBUUcsU0FBUzs7Ozs7O3NDQUNyQiw4REFBQ0Y7c0NBQUdELFFBQVFJLElBQUksQ0FBQ2pELElBQUk7Ozs7Ozt3QkFDcEI2QyxRQUFRSyxPQUFPLENBQUNOLEdBQUcsQ0FBQyxDQUFDTyxzQkFDcEIsOERBQUMzQjs7a0RBQ0MsOERBQUNzQjtrREFBR0ssTUFBTS9DLElBQUk7Ozs7OztrREFDZCw4REFBQzBDO2tEQUFHSyxNQUFNSixTQUFTOzs7Ozs7a0RBQ25CLDhEQUFDRDtrREFBR0ssTUFBTUgsU0FBUzs7Ozs7O2tEQUNuQiw4REFBQ0Y7a0RBQUdLLE1BQU1GLElBQUksQ0FBQ2pELElBQUk7Ozs7Ozs7K0JBSlhtRCxNQUFNdEMsRUFBRTs7Ozs7O21CQU5aZ0MsUUFBUWhDLEVBQUU7Ozs7Ozs7Ozs7O0FBaUI1QjtHQTNHU2hCO0tBQUFBOztBQXFKVCwrREFBZUEsUUFBUUEsRUFBQztBQUd4QixNQUFNbUMsY0FBY3BDLHlEQUFVO01BQXhCb0M7QUFhQyxNQUFNTCxVQUFVL0IseURBQVUscUJBZ0IvQjtNQWhCVytCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb3N0cy9baWRdLnRzeD84MjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IFBvc3QsIENvbW1lbnQgfSBmcm9tIFwiQC90eXBlZGVmc1wiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIkAvdXRpbHMvYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9wb3N0c1wiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2NyZWF0ZVBvc3RcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbnRlcmZhY2UgUG9zdFBhZ2VQcm9wcyB7XG4gIHBvc3Q6IFBvc3Q7XG4gIGNvbW1lbnRzOiBDb21tZW50W107XG59XG5cbmZ1bmN0aW9uIFBvc3RQYWdlKHsgcG9zdCwgY29tbWVudHMgfTogUG9zdFBhZ2VQcm9wcykge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb21tZW50c0xpc3QsIHNldENvbW1lbnRzTGlzdF0gPSB1c2VTdGF0ZShjb21tZW50cyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wb3N0cy8ke3Bvc3QuaWR9L2NvbW1lbnRzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgYm9keSB9KSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgbmV3Q29tbWVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldEJvZHkoXCJcIik7XG4gICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgc2V0RW1haWwoXCJcIik7XG4gICAgICBzZXRDb21tZW50c0xpc3QoKGNvbW1lbnRzKSA9PiBbLi4uY29tbWVudHMsIG5ld0NvbW1lbnRdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSG9tZSA9IGFzeW5jICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9IGFzeW5jICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9wb3N0c1wiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPERpdkJvZHk+XG4gICAgICA8aDI+Q29udGVuaWRvPC9oMj5cbiAgICAgIDxzcGFuPntwb3N0LmJvZHl9PC9zcGFuPlxuICAgICAgPC9EaXZCb2R5PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVCYWNrfT5BdHLDoXM8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVIb21lfT5JbmljaW88L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPERpdkNvbW1lbnRzPlxuICAgICAgICA8aDI+Q29tZW50YXJpb3MgKHtjb21tZW50c0xpc3QubGVuZ3RofSk8L2gyPlxuICAgICAgPC9EaXZDb21tZW50cz5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8aDM+QcOxYWRpciBjb21lbnRhcmlvPC9oMz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOb21icmU6XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBFbWFpbDpcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEVtYWlsKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIENvbWVudGFyaW86XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEJvZHkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QcOxYWRpcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRm9ybT5cblxuICAgICAge2NvbW1lbnRzTGlzdC5tYXAoKGNvbW1lbnQpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2NvbW1lbnQuaWR9PlxuICAgICAgICAgIDxwPntjb21tZW50LmJvZHl9PC9wPlxuICAgICAgICAgIDxwPntjb21tZW50LmNyZWF0ZWRBdH08L3A+XG4gICAgICAgICAgPHA+e2NvbW1lbnQudXBkYXRlZEF0fTwvcD5cbiAgICAgICAgICA8cD57Y29tbWVudC51c2VyLm5hbWV9PC9wPlxuICAgICAgICAgIHtjb21tZW50LnJlcGxpZXMubWFwKChyZXBseSkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3JlcGx5LmlkfT5cbiAgICAgICAgICAgICAgPHA+e3JlcGx5LmJvZHl9PC9wPlxuICAgICAgICAgICAgICA8cD57cmVwbHkuY3JlYXRlZEF0fTwvcD5cbiAgICAgICAgICAgICAgPHA+e3JlcGx5LnVwZGF0ZWRBdH08L3A+XG4gICAgICAgICAgICAgIDxwPntyZXBseS51c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBjb25zdCB7IGlkIH0gPSBwYXJhbXMgYXMgeyBpZDogc3RyaW5nIH07XG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgIHF1ZXJ5OiBncWxgXG4gICAgICBxdWVyeSAoJGlkOiBJRCEsICRsaW1pdDogSW50KSB7XG4gICAgICAgIHBvc3QoaWQ6ICRpZCkge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgdGl0bGVcbiAgICAgICAgICBib2R5XG4gICAgICAgIH1cbiAgICAgICAgY29tbWVudHMobGltaXQ6ICRsaW1pdCkge1xuICAgICAgICAgIGlkXG4gICAgICAgICAgYm9keVxuICAgICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICAgIHVwZGF0ZWRBdFxuICAgICAgICAgIHVzZXIge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgfVxuICAgICAgICAgIHJlcGxpZXMge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIGJvZHlcbiAgICAgICAgICAgIGNyZWF0ZWRBdFxuICAgICAgICAgICAgdXBkYXRlZEF0XG4gICAgICAgICAgICB1c2VyIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICBlbWFpbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIGAsXG4gICAgdmFyaWFibGVzOiB7IGlkIH0sXG4gIH0pO1xuXG4gIHJldHVybiB7IHByb3BzOiB7IHBvc3Q6IGRhdGEucG9zdCwgY29tbWVudHM6IGRhdGEuY29tbWVudHMgfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdFBhZ2U7XG5cblxuY29uc3QgRGl2Q29tbWVudHMgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAyNiU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbmA7XG5cblxuZXhwb3J0IGNvbnN0IERpdkJvZHkgPSBzdHlsZWQuZGl2YFxuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbm1hcmdpbjogMCBhdXRvO1xucGFkZGluZzogMjBweDtcbndpZHRoOiAyNiU7XG5ib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuYm9yZGVyLXJhZGl1czogNHB4O1xuYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbn1cbmA7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwicm91dGVyIiwiSGVhZGVyIiwiRm9ybSIsInN0eWxlZCIsIlBvc3RQYWdlIiwicG9zdCIsImNvbW1lbnRzIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiYm9keSIsInNldEJvZHkiLCJjb21tZW50c0xpc3QiLCJzZXRDb21tZW50c0xpc3QiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsImlkIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsIm5ld0NvbW1lbnQiLCJqc29uIiwiaGFuZGxlSG9tZSIsInB1c2giLCJoYW5kbGVCYWNrIiwiZGl2IiwiaDEiLCJ0aXRsZSIsIkRpdkJvZHkiLCJoMiIsInNwYW4iLCJidXR0b24iLCJvbkNsaWNrIiwiRGl2Q29tbWVudHMiLCJsZW5ndGgiLCJvblN1Ym1pdCIsImgzIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsIm1hcCIsImNvbW1lbnQiLCJwIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwidXNlciIsInJlcGxpZXMiLCJyZXBseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/posts/[id].tsx\n"));

/***/ })

});