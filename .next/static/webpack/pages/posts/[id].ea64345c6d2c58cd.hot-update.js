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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DivBody\": function() { return /* binding */ DivBody; },\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts */ \"./src/pages/posts.tsx\");\n/* harmony import */ var _createPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createPost */ \"./src/pages/posts/createPost.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 0 auto;\\n  padding: 20px;\\n  width: 26%;\\n  border: 1px solid #ccc;\\n  border-radius: 4px;\\n  background-color: grey;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\ndisplay: flex;\\njustify-content: center;\\nalign-items: center;\\nmargin: 0 auto;\\npadding: 20px;\\nwidth: 26%;\\nborder: 1px solid #ccc;\\nborder-radius: 4px;\\nbackground-color: grey;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction PostPage(param) {\n    let { post , comments  } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [commentsList, setCommentsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(comments);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        const response = await fetch(\"/api/posts/\".concat(post.id, \"/comments\"), {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                name,\n                email,\n                body\n            })\n        });\n        if (response.ok) {\n            const newComment = await response.json();\n            setBody(\"\");\n            setName(\"\");\n            setEmail(\"\");\n            setCommentsList((comments)=>[\n                    ...comments,\n                    newComment\n                ]);\n        }\n    };\n    const handleHome = async ()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\");\n    };\n    const handleBack = async ()=>{\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/posts\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_posts__WEBPACK_IMPORTED_MODULE_4__.Header, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DivBody, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: \"Contenido\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this),\n                    post.body\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleBack,\n                        children: \"Atr\\xe1s\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: handleHome,\n                        children: \"Inicio\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DivComments, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Comentarios (\",\n                        commentsList.length,\n                        \")\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_createPost__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                        children: \"A\\xf1adir comentario\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Nombre:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: name,\n                                    onChange: (event)=>setName(event.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Email:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    type: \"email\",\n                                    value: email,\n                                    onChange: (event)=>setEmail(event.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Comentario:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                                    value: body,\n                                    onChange: (event)=>setBody(event.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"A\\xf1adir\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            commentsList.map((comment)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.body\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 108,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.createdAt\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.updatedAt\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: comment.user.name\n                        }, void 0, false, {\n                            fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        comment.replies.map((reply)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.body\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.createdAt\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.updatedAt\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                        children: reply.user.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, reply.id, true, {\n                                fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this))\n                    ]\n                }, comment.id, true, {\n                    fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sergio/Desktop/PracticaVoluntaria/src/pages/posts/[id].tsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(PostPage, \"PfeECCSl2wxifmhyR9y77LcGDOY=\");\n_c = PostPage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostPage);\nconst DivComments = styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.div(_templateObject());\n_c1 = DivComments;\nconst DivBody = styled_components__WEBPACK_IMPORTED_MODULE_6__.styled.div(_templateObject1());\n_c2 = DivBody;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"PostPage\");\n$RefreshReg$(_c1, \"DivComments\");\n$RefreshReg$(_c2, \"DivBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdELFFBQVF4QyxJQUFJOzs7Ozs7c0NBQ2hCLDhEQUFDeUM7c0NBQUdELFFBQVFFLFNBQVM7Ozs7OztzQ0FDckIsOERBQUNEO3NDQUFHRCxRQUFRRyxTQUFTOzs7Ozs7c0NBQ3JCLDhEQUFDRjtzQ0FBR0QsUUFBUUksSUFBSSxDQUFDaEQsSUFBSTs7Ozs7O3dCQUNwQjRDLFFBQVFLLE9BQU8sQ0FBQ04sR0FBRyxDQUFDLENBQUNPLHNCQUNwQiw4REFBQzFCOztrREFDQyw4REFBQ3FCO2tEQUFHSyxNQUFNOUMsSUFBSTs7Ozs7O2tEQUNkLDhEQUFDeUM7a0RBQUdLLE1BQU1KLFNBQVM7Ozs7OztrREFDbkIsOERBQUNEO2tEQUFHSyxNQUFNSCxTQUFTOzs7Ozs7a0RBQ25CLDhEQUFDRjtrREFBR0ssTUFBTUYsSUFBSSxDQUFDaEQsSUFBSTs7Ozs7OzsrQkFKWGtELE1BQU1yQyxFQUFFOzs7Ozs7bUJBTlorQixRQUFRL0IsRUFBRTs7Ozs7Ozs7Ozs7QUFpQjVCO0dBM0dTaEI7S0FBQUE7O0FBcUpULCtEQUFlQSxRQUFRQSxFQUFDO0FBR3hCLE1BQU1rQyxjQUFjbkMseURBQVU7TUFBeEJtQztBQWFDLE1BQU1KLFVBQVUvQix5REFBVSxxQkFVL0I7TUFWVytCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb3N0cy9baWRdLnRzeD84MjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBncWwgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IFBvc3QsIENvbW1lbnQgfSBmcm9tIFwiQC90eXBlZGVmc1wiO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSBcIkAvdXRpbHMvYXBvbGxvLWNsaWVudFwiO1xuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9wb3N0c1wiO1xuaW1wb3J0IHsgRm9ybSB9IGZyb20gXCIuL2NyZWF0ZVBvc3RcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbnRlcmZhY2UgUG9zdFBhZ2VQcm9wcyB7XG4gIHBvc3Q6IFBvc3Q7XG4gIGNvbW1lbnRzOiBDb21tZW50W107XG59XG5cbmZ1bmN0aW9uIFBvc3RQYWdlKHsgcG9zdCwgY29tbWVudHMgfTogUG9zdFBhZ2VQcm9wcykge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2JvZHksIHNldEJvZHldID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb21tZW50c0xpc3QsIHNldENvbW1lbnRzTGlzdF0gPSB1c2VTdGF0ZShjb21tZW50cyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBhbnkpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9wb3N0cy8ke3Bvc3QuaWR9L2NvbW1lbnRzYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCwgYm9keSB9KSxcbiAgICB9KTtcblxuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgbmV3Q29tbWVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHNldEJvZHkoXCJcIik7XG4gICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgc2V0RW1haWwoXCJcIik7XG4gICAgICBzZXRDb21tZW50c0xpc3QoKGNvbW1lbnRzKSA9PiBbLi4uY29tbWVudHMsIG5ld0NvbW1lbnRdKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSG9tZSA9IGFzeW5jICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9IGFzeW5jICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9wb3N0c1wiKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyPlxuICAgICAgICA8aDE+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgIDwvSGVhZGVyPlxuICAgICAgPERpdkJvZHk+XG4gICAgICA8aDI+Q29udGVuaWRvPC9oMj5cbiAgICAgIHtwb3N0LmJvZHl9XG4gICAgICA8L0RpdkJvZHk+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUJhY2t9PkF0csOhczwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUhvbWV9PkluaWNpbzwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8RGl2Q29tbWVudHM+XG4gICAgICAgIDxoMj5Db21lbnRhcmlvcyAoe2NvbW1lbnRzTGlzdC5sZW5ndGh9KTwvaDI+XG4gICAgICA8L0RpdkNvbW1lbnRzPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgIDxoMz5Bw7FhZGlyIGNvbWVudGFyaW88L2gzPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5vbWJyZTpcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEVtYWlsOlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0RW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ29tZW50YXJpbzpcbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICB2YWx1ZT17Ym9keX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Qm9keShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Bw7FhZGlyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtPlxuXG4gICAgICB7Y29tbWVudHNMaXN0Lm1hcCgoY29tbWVudCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17Y29tbWVudC5pZH0+XG4gICAgICAgICAgPHA+e2NvbW1lbnQuYm9keX08L3A+XG4gICAgICAgICAgPHA+e2NvbW1lbnQuY3JlYXRlZEF0fTwvcD5cbiAgICAgICAgICA8cD57Y29tbWVudC51cGRhdGVkQXR9PC9wPlxuICAgICAgICAgIDxwPntjb21tZW50LnVzZXIubmFtZX08L3A+XG4gICAgICAgICAge2NvbW1lbnQucmVwbGllcy5tYXAoKHJlcGx5KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17cmVwbHkuaWR9PlxuICAgICAgICAgICAgICA8cD57cmVwbHkuYm9keX08L3A+XG4gICAgICAgICAgICAgIDxwPntyZXBseS5jcmVhdGVkQXR9PC9wPlxuICAgICAgICAgICAgICA8cD57cmVwbHkudXBkYXRlZEF0fTwvcD5cbiAgICAgICAgICAgICAgPHA+e3JlcGx5LnVzZXIubmFtZX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IHBhcmFtcyBhcyB7IGlkOiBzdHJpbmcgfTtcblxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgcXVlcnk6IGdxbGBcbiAgICAgIHF1ZXJ5ICgkaWQ6IElEISwgJGxpbWl0OiBJbnQpIHtcbiAgICAgICAgcG9zdChpZDogJGlkKSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICB0aXRsZVxuICAgICAgICAgIGJvZHlcbiAgICAgICAgfVxuICAgICAgICBjb21tZW50cyhsaW1pdDogJGxpbWl0KSB7XG4gICAgICAgICAgaWRcbiAgICAgICAgICBib2R5XG4gICAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgICAgdXBkYXRlZEF0XG4gICAgICAgICAgdXNlciB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgZW1haWxcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVwbGllcyB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgYm9keVxuICAgICAgICAgICAgY3JlYXRlZEF0XG4gICAgICAgICAgICB1cGRhdGVkQXRcbiAgICAgICAgICAgIHVzZXIge1xuICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgIGVtYWlsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgYCxcbiAgICB2YXJpYWJsZXM6IHsgaWQgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHsgcG9zdDogZGF0YS5wb3N0LCBjb21tZW50czogZGF0YS5jb21tZW50cyB9IH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0UGFnZTtcblxuXG5jb25zdCBEaXZDb21tZW50cyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDI2JTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuYDtcblxuXG5leHBvcnQgY29uc3QgRGl2Qm9keSA9IHN0eWxlZC5kaXZgXG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xubWFyZ2luOiAwIGF1dG87XG5wYWRkaW5nOiAyMHB4O1xud2lkdGg6IDI2JTtcbmJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5ib3JkZXItcmFkaXVzOiA0cHg7XG5iYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuYDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJyb3V0ZXIiLCJIZWFkZXIiLCJGb3JtIiwic3R5bGVkIiwiUG9zdFBhZ2UiLCJwb3N0IiwiY29tbWVudHMiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJib2R5Iiwic2V0Qm9keSIsImNvbW1lbnRzTGlzdCIsInNldENvbW1lbnRzTGlzdCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwiaWQiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwibmV3Q29tbWVudCIsImpzb24iLCJoYW5kbGVIb21lIiwicHVzaCIsImhhbmRsZUJhY2siLCJkaXYiLCJoMSIsInRpdGxlIiwiRGl2Qm9keSIsImgyIiwiYnV0dG9uIiwib25DbGljayIsIkRpdkNvbW1lbnRzIiwibGVuZ3RoIiwib25TdWJtaXQiLCJoMyIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJtYXAiLCJjb21tZW50IiwicCIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsInVzZXIiLCJyZXBsaWVzIiwicmVwbHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/[id].tsx\n"));

/***/ })

});