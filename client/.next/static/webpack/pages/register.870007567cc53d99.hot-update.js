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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Register = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), show = ref[0], setShow = ref[1];\n    var handleShow = function() {\n        return setShow(!show);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        maxW: \"400px\",\n        w: \"100%\",\n        mt: 10,\n        mx: \"auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n            initialValues: {\n                username: '',\n                password: ''\n            },\n            onSubmit: function(values) {\n                return console.log(values);\n            },\n            children: function(param) {\n                var values = param.values, handleChange = param.handleChange;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormControl, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                htmlFor: \"username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                id: \"username\",\n                                placeholder: \"Username\",\n                                value: values.username,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.FormLabel, {\n                                htmlFor: \"password\",\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                                id: \"password\",\n                                placeholder: \"Password\",\n                                type: show ? 'text' : 'password',\n                                value: values.password,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.InputRightElement, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                    onClick: handleShow,\n                                    children: show ? 'Hide' : 'Show'\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 32\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                                colorScheme: \"blue\",\n                                type: \"submit\",\n                                children: \"Button\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 13\n                }, _this1);\n            }\n        }, void 0, false, {\n            fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this));\n};\n_s(Register, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdHO0FBQzNEO0FBQ0w7OztBQUVoQyxHQUFLLENBQUNTLFFBQVEsR0FBRyxRQUFRLEdBQUYsQ0FBQzs7O0lBQ3RCLEdBQUssQ0FBbUJELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQS9CRSxJQUFJLEdBQWFGLEdBQWUsS0FBMUJHLE9BQU8sR0FBSUgsR0FBZTtJQUN2QyxHQUFLLENBQUNJLFVBQVUsR0FBRyxRQUFRO1FBQUZELE1BQU0sQ0FBTkEsT0FBTyxFQUFFRCxJQUFJOztJQUN0QyxNQUFNLDZFQUNIVixpREFBRztRQUFDYSxJQUFJLEVBQUMsQ0FBTztRQUFDQyxDQUFDLEVBQUMsQ0FBTTtRQUFDQyxFQUFFLEVBQUUsRUFBRTtRQUFFQyxFQUFFLEVBQUMsQ0FBTTs4RkFDekNULDBDQUFNO1lBQUNVLGFBQWEsRUFBRSxDQUFDQztnQkFBQUEsUUFBUSxFQUFFLENBQUU7Z0JBQUVDLFFBQVEsRUFBRSxDQUFFO1lBQUEsQ0FBQztZQUFFQyxRQUFRLEVBQUVDLFFBQVEsQ0FBUkEsTUFBTTtnQkFBSUMsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTTs7c0JBQ3hGLFFBQVE7b0JBQU5BLE1BQU0sU0FBTkEsTUFBTSxFQUFFRyxZQUFZLFNBQVpBLFlBQVk7OEJBQ25CLE1BQU0sK0RBQUxsQix3Q0FBSTswR0FDTkoseURBQVc7O3dHQUNUQyx1REFBUztnQ0FBQ3NCLE9BQU8sRUFBQyxDQUFVOzBDQUFDLENBQVE7Ozs7Ozt3R0FDckNyQixtREFBSztnQ0FBQ3NCLEVBQUUsRUFBQyxDQUFVO2dDQUFDQyxXQUFXLEVBQUMsQ0FBVTtnQ0FBQ0MsS0FBSyxFQUFFUCxNQUFNLENBQUNILFFBQVE7Z0NBQUVXLFFBQVEsRUFBRUwsWUFBWTs7Ozs7O3dHQUN6RnJCLHVEQUFTO2dDQUFDc0IsT0FBTyxFQUFDLENBQVU7MENBQUMsQ0FBUTs7Ozs7O3dHQUNyQ3JCLG1EQUFLO2dDQUFDc0IsRUFBRSxFQUFDLENBQVU7Z0NBQUNDLFdBQVcsRUFBQyxDQUFVO2dDQUFDRyxJQUFJLEVBQUVwQixJQUFJLEdBQUcsQ0FBTSxRQUFHLENBQVU7Z0NBQUVrQixLQUFLLEVBQUVQLE1BQU0sQ0FBQ0YsUUFBUTtnQ0FBRVUsUUFBUSxFQUFFTCxZQUFZOzs7Ozs7d0dBQzNIbkIsK0RBQWlCO3NIQUFFSixvREFBTTtvQ0FBQzhCLE9BQU8sRUFBRW5CLFVBQVU7OENBQUdGLElBQUksR0FBRyxDQUFNLFFBQUcsQ0FBTTs7Ozs7Ozs7Ozs7d0dBQ3RFVCxvREFBTTtnQ0FBQytCLFdBQVcsRUFBQyxDQUFNO2dDQUFDRixJQUFJLEVBQUMsQ0FBUTswQ0FBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzNELENBQUM7R0FyQktyQixRQUFRO0tBQVJBLFFBQVE7QUF1QmQsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3JlZ2lzdGVyLnRzeD83MDUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQnV0dG9uLCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgSW5wdXRSaWdodEVsZW1lbnQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiXHJcbmltcG9ydCB7IEZvcm0sIEZvcm1payB9IGZyb20gXCJmb3JtaWtcIlxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBoYW5kbGVTaG93ID0gKCkgPT4gc2V0U2hvdyghc2hvdylcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBtYXhXPSc0MDBweCcgdz0nMTAwJScgbXQ9ezEwfSBteD0nYXV0byc+XHJcbiAgICAgIDxGb3JtaWsgaW5pdGlhbFZhbHVlcz17e3VzZXJuYW1lOiAnJywgcGFzc3dvcmQ6ICcnfX0gb25TdWJtaXQ9e3ZhbHVlcyA9PiBjb25zb2xlLmxvZyh2YWx1ZXMpfT5cclxuICAgICAgICB7KHt2YWx1ZXMsIGhhbmRsZUNoYW5nZX0pID0+IChcclxuICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lXCI+VXNlcm5hbWU8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgPElucHV0IGlkPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCIgdmFsdWU9e3ZhbHVlcy51c2VybmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0vPlxyXG4gICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgIDxJbnB1dCBpZD1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHR5cGU9e3Nob3cgPyAndGV4dCcgOiAncGFzc3dvcmQnfSB2YWx1ZT17dmFsdWVzLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICA8SW5wdXRSaWdodEVsZW1lbnQ+PEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTaG93fT57c2hvdyA/ICdIaWRlJyA6ICdTaG93J308L0J1dHRvbj48L0lucHV0UmlnaHRFbGVtZW50PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yU2NoZW1lPSdibHVlJyB0eXBlPVwic3VibWl0XCI+QnV0dG9uPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIklucHV0UmlnaHRFbGVtZW50IiwiRm9ybSIsIkZvcm1payIsInVzZVN0YXRlIiwiUmVnaXN0ZXIiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZVNob3ciLCJtYXhXIiwidyIsIm10IiwibXgiLCJpbml0aWFsVmFsdWVzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsImh0bWxGb3IiLCJpZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInR5cGUiLCJvbkNsaWNrIiwiY29sb3JTY2hlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

});