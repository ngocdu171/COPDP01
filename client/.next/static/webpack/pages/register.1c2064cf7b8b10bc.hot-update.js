"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Register = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), show = ref[0], setShow = ref[1];\n    var handleShow = function() {\n        return setShow(!show);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n        initialValues: {\n            username: '',\n            password: ''\n        },\n        onSubmit: function(values) {\n            return console.log(values);\n        },\n        children: function(param) {\n            var values = param.values, handleChange = param.handleChange;\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                            htmlFor: \"username\",\n                            children: \"Username\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                            lineNumber: 13,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                            id: \"username\",\n                            placeholder: \"Username\",\n                            value: values.username,\n                            onChange: handleChange\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                            lineNumber: 14,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                            htmlFor: \"password\",\n                            children: \"Password\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                            lineNumber: 15,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.InputGroup, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                    id: \"password\",\n                                    placeholder: \"Password\",\n                                    type: show ? 'text' : 'password',\n                                    value: values.password,\n                                    onChange: handleChange\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.InputRightElement, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                        onClick: handleShow,\n                                        children: show ? 'Hide' : 'Show'\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 34\n                                    }, _this1)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 15\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                            colorScheme: \"blue\",\n                            type: \"submit\",\n                            children: \"Button\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 11\n                }, _this1)\n            }, void 0, false, {\n                fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, _this1);\n        }\n    }, void 0, false, {\n        fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, _this));\n};\n_s(Register, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRHO0FBQ3ZFO0FBQ0w7OztBQUVoQyxHQUFLLENBQUNTLFFBQVEsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7O0lBQ3RCLEdBQUssQ0FBbUJELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9CRSxJQUFJLEdBQWFGLEdBQWUsS0FBMUJHLE9BQU8sR0FBSUgsR0FBZTtJQUN2QyxHQUFLLENBQUNJLFVBQVUsR0FBRyxRQUFRO1FBQUZELE1BQU0sQ0FBTkEsT0FBTyxFQUFFRCxJQUFJOztJQUN0QyxNQUFNLDZFQUNESCwwQ0FBTTtRQUFDTSxhQUFhLEVBQUUsQ0FBQ0M7WUFBQUEsUUFBUSxFQUFFLENBQUU7WUFBRUMsUUFBUSxFQUFFLENBQUU7UUFBQSxDQUFDO1FBQUVDLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxNQUFNO1lBQUlDLE1BQU0sQ0FBTkEsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE1BQU07O2tCQUN4RixRQUFRO2dCQUFOQSxNQUFNLFNBQU5BLE1BQU0sRUFBRUcsWUFBWSxTQUFaQSxZQUFZOzBCQUNuQixNQUFNLCtEQUFMZCx3Q0FBSTtzR0FDTkwseURBQVc7O29HQUNUQyx1REFBUzs0QkFBQ21CLE9BQU8sRUFBQyxDQUFVO3NDQUFDLENBQVE7Ozs7OztvR0FDckNsQixtREFBSzs0QkFBQ21CLEVBQUUsRUFBQyxDQUFVOzRCQUFDQyxXQUFXLEVBQUMsQ0FBVTs0QkFBQ0MsS0FBSyxFQUFFUCxNQUFNLENBQUNILFFBQVE7NEJBQUVXLFFBQVEsRUFBRUwsWUFBWTs7Ozs7O29HQUN6RmxCLHVEQUFTOzRCQUFDbUIsT0FBTyxFQUFDLENBQVU7c0NBQUMsQ0FBUTs7Ozs7O29HQUNyQ2pCLHdEQUFVOzs0R0FDUkQsbURBQUs7b0NBQUNtQixFQUFFLEVBQUMsQ0FBVTtvQ0FBQ0MsV0FBVyxFQUFDLENBQVU7b0NBQUNHLElBQUksRUFBRWhCLElBQUksR0FBRyxDQUFNLFFBQUcsQ0FBVTtvQ0FBRWMsS0FBSyxFQUFFUCxNQUFNLENBQUNGLFFBQVE7b0NBQUVVLFFBQVEsRUFBRUwsWUFBWTs7Ozs7OzRHQUMzSGYsK0RBQWlCOzBIQUFFTCxvREFBTTt3Q0FBQzJCLE9BQU8sRUFBRWYsVUFBVTtrREFBR0YsSUFBSSxHQUFHLENBQU0sUUFBRyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztvR0FFeEVWLG9EQUFNOzRCQUFDNEIsV0FBVyxFQUFDLENBQU07NEJBQUNGLElBQUksRUFBQyxDQUFRO3NDQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNELENBQUM7R0FyQktqQixRQUFRO0tBQVJBLFFBQVE7QUF1QmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeD83MDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgSW5wdXRHcm91cCwgSW5wdXRSaWdodEVsZW1lbnQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmltcG9ydCB7IEZvcm0sIEZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyghc2hvdylcclxuICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3t1c2VybmFtZTogJycsIHBhc3N3b3JkOiAnJ319IG9uU3VibWl0PXt2YWx1ZXMgPT4gY29uc29sZS5sb2codmFsdWVzKX0+XHJcbiAgICAgICAgeyh7dmFsdWVzLCBoYW5kbGVDaGFuZ2V9KSA9PiAoXHJcbiAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiPlVzZXJuYW1lPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCBpZD1cInVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiIHZhbHVlPXt2YWx1ZXMudXNlcm5hbWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICA8SW5wdXQgaWQ9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiB0eXBlPXtzaG93ID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ30gdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICA8SW5wdXRSaWdodEVsZW1lbnQ+PEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaG93fT57c2hvdyA/ICdIaWRlJyA6ICdTaG93J308L0J1dHRvbj48L0lucHV0UmlnaHRFbGVtZW50PlxyXG4gICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3JTY2hlbWU9J2JsdWUnIHR5cGU9XCJzdWJtaXRcIj5CdXR0b248L0J1dHRvbj5cclxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvRm9ybWlrPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwibmFtZXMiOlsiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIklucHV0R3JvdXAiLCJJbnB1dFJpZ2h0RWxlbWVudCIsIkZvcm0iLCJGb3JtaWsiLCJ1c2VTdGF0ZSIsIlJlZ2lzdGVyIiwic2hvdyIsInNldFNob3ciLCJoYW5kbGVTaG93IiwiaW5pdGlhbFZhbHVlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJvblN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFuZ2UiLCJodG1sRm9yIiwiaWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0eXBlIiwib25DbGljayIsImNvbG9yU2NoZW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

});