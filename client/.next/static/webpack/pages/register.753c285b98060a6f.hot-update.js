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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n\n\n\nvar _this = undefined;\nvar Register = function() {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        maxW: \"400px\",\n        w: \"100%\",\n        mt: 10,\n        mx: \"auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Formik, {\n            initialValues: {\n                username: '',\n                password: ''\n            },\n            onSubmit: function(values) {\n                return console.log(values);\n            },\n            children: function(param) {\n                var values = param.values, handleChange = param.handleChange;\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(formik__WEBPACK_IMPORTED_MODULE_1__.Form, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                htmlFor: \"username\",\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                lineNumber: 11,\n                                columnNumber: 13\n                            }, _this1),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                id: \"username\",\n                                placeholder: \"Username\",\n                                value: values.username,\n                                onChange: handleChange\n                            }, void 0, false, {\n                                fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                                lineNumber: 12,\n                                columnNumber: 13\n                            }, _this1)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                        lineNumber: 10,\n                        columnNumber: 11\n                    }, _this1)\n                }, void 0, false, {\n                    fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, _this1);\n            }\n        }, void 0, false, {\n            fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\NGOC DU\\\\2021\\\\company-oriented-projects\\\\COPDP01\\\\client\\\\src\\\\pages\\\\register.tsx\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this));\n};\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxRTtBQUNoQzs7QUFFckMsR0FBSyxDQUFDTSxRQUFRLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ3RCLE1BQU0sNkVBQ0hOLGlEQUFHO1FBQUNPLElBQUksRUFBQyxDQUFPO1FBQUNDLENBQUMsRUFBQyxDQUFNO1FBQUNDLEVBQUUsRUFBRSxFQUFFO1FBQUVDLEVBQUUsRUFBQyxDQUFNOzhGQUN6Q0wsMENBQU07WUFBQ00sYUFBYSxFQUFFLENBQUNDO2dCQUFBQSxRQUFRLEVBQUUsQ0FBRTtnQkFBRUMsUUFBUSxFQUFFLENBQUU7WUFBQSxDQUFDO1lBQUVDLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxNQUFNO2dCQUFJQyxNQUFNLENBQU5BLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNOztzQkFDeEYsUUFBUTtvQkFBTkEsTUFBTSxTQUFOQSxNQUFNLEVBQUVHLFlBQVksU0FBWkEsWUFBWTs4QkFDbkIsTUFBTSwrREFBTGQsd0NBQUk7MEdBQ05ILHlEQUFXOzt3R0FDVEMsdURBQVM7Z0NBQUNpQixPQUFPLEVBQUMsQ0FBVTswQ0FBQyxDQUFROzs7Ozs7d0dBQ3JDaEIsbURBQUs7Z0NBQUNpQixFQUFFLEVBQUMsQ0FBVTtnQ0FBQ0MsV0FBVyxFQUFDLENBQVU7Z0NBQUNDLEtBQUssRUFBRVAsTUFBTSxDQUFDSCxRQUFRO2dDQUFFVyxRQUFRLEVBQUVMLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdEcsQ0FBQztLQWZLWixRQUFRO0FBaUJkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9yZWdpc3Rlci50c3g/NzA1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEZvcm1Db250cm9sLCBGb3JtTGFiZWwsIElucHV0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxyXG5pbXBvcnQgeyBGb3JtLCBGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCJcclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IG1heFc9JzQwMHB4JyB3PScxMDAlJyBtdD17MTB9IG14PSdhdXRvJz5cclxuICAgICAgPEZvcm1payBpbml0aWFsVmFsdWVzPXt7dXNlcm5hbWU6ICcnLCBwYXNzd29yZDogJyd9fSBvblN1Ym1pdD17dmFsdWVzID0+IGNvbnNvbGUubG9nKHZhbHVlcyl9PlxyXG4gICAgICAgIHsoe3ZhbHVlcywgaGFuZGxlQ2hhbmdlfSkgPT4gKFxyXG4gICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIj5Vc2VybmFtZTwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICA8SW5wdXQgaWQ9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIiB2YWx1ZT17dmFsdWVzLnVzZXJuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfS8+XHJcbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Zvcm1paz5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXIiXSwibmFtZXMiOlsiQm94IiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIkZvcm0iLCJGb3JtaWsiLCJSZWdpc3RlciIsIm1heFciLCJ3IiwibXQiLCJteCIsImluaXRpYWxWYWx1ZXMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2hhbmdlIiwiaHRtbEZvciIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

});