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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DivBody\": function() { return /* binding */ DivBody; },\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts */ \"./src/pages/posts.tsx\");\n/* harmony import */ var _createPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPost */ \"./src/pages/posts/createPost.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 auto;\\n  padding: 20px;\\n  width: 26%;\\n  border: 1px solid #ccc;\\n  border-radius: 4px;\\n  background-color: grey;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\njustify-content: center;\\nalign-items: center;\\nmargin: 0 auto;\\npadding: 20px;\\nwidth: 26%;\\nborder: 1px solid #ccc;\\nborder-radius: 4px;\\nbackground-color: grey;\\n\\nspan {\\n  font-size: 20px;\\n  font-weight: bold;\\n}\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PostPage(param) {\n    let { post , comments  } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [commentsList, setCommentsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(comments);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"/api/posts/\".concat(post.id, \"/comments\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name,\n                email,\n                body\n            })\n        });\n        if (response.ok) {\n            const newComment = await response.json();\n            setBody(\"\");\n            setName(\"\");\n            setEmail(\"\");\n            setCommentsList((comments)=>[\n                    ...comments,\n                    newComment\n                ]);\n        }\n    };\n    const handleHome = async ()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n    };\n    const handleBack = async ()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/posts\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_posts__WEBPACK_IMPORTED_MODULE_4__.Header, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DivBody, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Contenido\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        children: post.body\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleBack,\n                        children: \"Atr\\xe1s\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleHome,\n                        children: \"Inicio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DivComments, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Comentarios (\",\n                        commentsList.length,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_createPost__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"A\\xf1adir comentario\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Nombre:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: name,\n                                    onChange: (event)=>setName(event.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Email:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    value: email,\n                                    onChange: (event)=>setEmail(event.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Comentario:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                    value: body,\n                                    onChange: (event)=>setBody(event.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"A\\xf1adir\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            commentsList.map((comment)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.body\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.createdAt\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.updatedAt\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.user.name\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        comment.replies.map((reply)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.body\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.createdAt\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.updatedAt\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.user.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, reply.id, true, {\n                                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, comment.id, true, {\n                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(PostPage, \"PfeECCSl2wxifmhyR9y77LcGDOY=\");\n_c = PostPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nconst DivComments = styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.div(_templateObject());\n_c1 = DivComments;\nconst DivBody = styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.div(_templateObject1());\n_c2 = DivBody;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"PostPage\");\n$RefreshReg$(_c1, \"DivComments\");\n$RefreshReg$(_c2, \"DivBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztzQ0FDQyw4REFBQ3NCO3NDQUFHRCxRQUFRekMsSUFBSTs7Ozs7O3NDQUNoQiw4REFBQzBDO3NDQUFHRCxRQUFRRSxTQUFTOzs7Ozs7c0NBQ3JCLDhEQUFDRDtzQ0FBR0QsUUFBUUcsU0FBUzs7Ozs7O3NDQUNyQiw4REFBQ0Y7c0NBQUdELFFBQVFJLElBQUksQ0FBQ2pELElBQUk7Ozs7Ozt3QkFDcEI2QyxRQUFRSyxPQUFPLENBQUNOLEdBQUcsQ0FBQyxDQUFDTyxzQkFDcEIsOERBQUMzQjs7a0RBQ0MsOERBQUNzQjtrREFBR0ssTUFBTS9DLElBQUk7Ozs7OztrREFDZCw4REFBQzBDO2tEQUFHSyxNQUFNSixTQUFTOzs7Ozs7a0RBQ25CLDhEQUFDRDtrREFBR0ssTUFBTUgsU0FBUzs7Ozs7O2tEQUNuQiw4REFBQ0Y7a0RBQUdLLE1BQU1GLElBQUksQ0FBQ2pELElBQUk7Ozs7Ozs7K0JBSlhtRCxNQUFNdEMsRUFBRTs7Ozs7O21CQU5aZ0MsUUFBUWhDLEVBQUU7Ozs7Ozs7Ozs7O0FBaUI1QjtHQTNHU2hCO0tBQUFBOztBQXFKVCwrREFBZUEsUUFBUUEsRUFBQztBQUd4QixNQUFNbUMsY0FBY3BDLHlEQUFVO01BQXhCb0M7QUFhQyxNQUFNTCxVQUFVL0IseURBQVUscUJBZS9CO01BZlcrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcG9zdHMvW2lkXS50c3g/ODIxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBQb3N0LCBDb21tZW50IH0gZnJvbSBcIkAvdHlwZWRlZnNcIjtcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gXCJAL3V0aWxzL2Fwb2xsby1jbGllbnRcIjtcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vcG9zdHNcIjtcbmltcG9ydCB7IEZvcm0gfSBmcm9tIFwiLi9jcmVhdGVQb3N0XCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuaW50ZXJmYWNlIFBvc3RQYWdlUHJvcHMge1xuICBwb3N0OiBQb3N0O1xuICBjb21tZW50czogQ29tbWVudFtdO1xufVxuXG5mdW5jdGlvbiBQb3N0UGFnZSh7IHBvc3QsIGNvbW1lbnRzIH06IFBvc3RQYWdlUHJvcHMpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtib2R5LCBzZXRCb2R5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29tbWVudHNMaXN0LCBzZXRDb21tZW50c0xpc3RdID0gdXNlU3RhdGUoY29tbWVudHMpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudDogYW55KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvcG9zdHMvJHtwb3N0LmlkfS9jb21tZW50c2AsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbmFtZSwgZW1haWwsIGJvZHkgfSksXG4gICAgfSk7XG5cbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRCb2R5KFwiXCIpO1xuICAgICAgc2V0TmFtZShcIlwiKTtcbiAgICAgIHNldEVtYWlsKFwiXCIpO1xuICAgICAgc2V0Q29tbWVudHNMaXN0KChjb21tZW50cykgPT4gWy4uLmNvbW1lbnRzLCBuZXdDb21tZW50XSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUhvbWUgPSBhc3luYyAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvcG9zdHNcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWRlcj5cbiAgICAgICAgPGgxPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICA8L0hlYWRlcj5cbiAgICAgIDxEaXZCb2R5PlxuICAgICAgPGgyPkNvbnRlbmlkbzwvaDI+XG4gICAgICA8c3Bhbj57cG9zdC5ib2R5fTwvc3Bhbj5cbiAgICAgIDwvRGl2Qm9keT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQmFja30+QXRyw6FzPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlSG9tZX0+SW5pY2lvPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEaXZDb21tZW50cz5cbiAgICAgICAgPGgyPkNvbWVudGFyaW9zICh7Y29tbWVudHNMaXN0Lmxlbmd0aH0pPC9oMj5cbiAgICAgIDwvRGl2Q29tbWVudHM+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPGgzPkHDsWFkaXIgY29tZW50YXJpbzwvaDM+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgTm9tYnJlOlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldE5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgRW1haWw6XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBDb21lbnRhcmlvOlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRCb2R5KGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkHDsWFkaXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Zvcm0+XG5cbiAgICAgIHtjb21tZW50c0xpc3QubWFwKChjb21tZW50KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtjb21tZW50LmlkfT5cbiAgICAgICAgICA8cD57Y29tbWVudC5ib2R5fTwvcD5cbiAgICAgICAgICA8cD57Y29tbWVudC5jcmVhdGVkQXR9PC9wPlxuICAgICAgICAgIDxwPntjb21tZW50LnVwZGF0ZWRBdH08L3A+XG4gICAgICAgICAgPHA+e2NvbW1lbnQudXNlci5uYW1lfTwvcD5cbiAgICAgICAgICB7Y29tbWVudC5yZXBsaWVzLm1hcCgocmVwbHkpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtyZXBseS5pZH0+XG4gICAgICAgICAgICAgIDxwPntyZXBseS5ib2R5fTwvcD5cbiAgICAgICAgICAgICAgPHA+e3JlcGx5LmNyZWF0ZWRBdH08L3A+XG4gICAgICAgICAgICAgIDxwPntyZXBseS51cGRhdGVkQXR9PC9wPlxuICAgICAgICAgICAgICA8cD57cmVwbHkudXNlci5uYW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgeyBpZCB9ID0gcGFyYW1zIGFzIHsgaWQ6IHN0cmluZyB9O1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICBxdWVyeTogZ3FsYFxuICAgICAgcXVlcnkgKCRpZDogSUQhLCAkbGltaXQ6IEludCkge1xuICAgICAgICBwb3N0KGlkOiAkaWQpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgYm9keVxuICAgICAgICB9XG4gICAgICAgIGNvbW1lbnRzKGxpbWl0OiAkbGltaXQpIHtcbiAgICAgICAgICBpZFxuICAgICAgICAgIGJvZHlcbiAgICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgICB1cGRhdGVkQXRcbiAgICAgICAgICB1c2VyIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBlbWFpbFxuICAgICAgICAgIH1cbiAgICAgICAgICByZXBsaWVzIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBib2R5XG4gICAgICAgICAgICBjcmVhdGVkQXRcbiAgICAgICAgICAgIHVwZGF0ZWRBdFxuICAgICAgICAgICAgdXNlciB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgLFxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxuICB9KTtcblxuICByZXR1cm4geyBwcm9wczogeyBwb3N0OiBkYXRhLnBvc3QsIGNvbW1lbnRzOiBkYXRhLmNvbW1lbnRzIH0gfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RQYWdlO1xuXG5cbmNvbnN0IERpdkNvbW1lbnRzID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMjYlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBEaXZCb2R5ID0gc3R5bGVkLmRpdmBcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5tYXJnaW46IDAgYXV0bztcbnBhZGRpbmc6IDIwcHg7XG53aWR0aDogMjYlO1xuYm9yZGVyOiAxcHggc29saWQgI2NjYztcbmJvcmRlci1yYWRpdXM6IDRweDtcbmJhY2tncm91bmQtY29sb3I6IGdyZXk7XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuYDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJyb3V0ZXIiLCJIZWFkZXIiLCJGb3JtIiwic3R5bGVkIiwiUG9zdFBhZ2UiLCJwb3N0IiwiY29tbWVudHMiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJib2R5Iiwic2V0Qm9keSIsImNvbW1lbnRzTGlzdCIsInNldENvbW1lbnRzTGlzdCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwiaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwibmV3Q29tbWVudCIsImpzb24iLCJoYW5kbGVIb21lIiwicHVzaCIsImhhbmRsZUJhY2siLCJkaXYiLCJoMSIsInRpdGxlIiwiRGl2Qm9keSIsImgyIiwic3BhbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJEaXZDb21tZW50cyIsImxlbmd0aCIsIm9uU3VibWl0IiwiaDMiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwibWFwIiwiY29tbWVudCIsInAiLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJ1c2VyIiwicmVwbGllcyIsInJlcGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/[id].tsx\n"));

/***/ })

});