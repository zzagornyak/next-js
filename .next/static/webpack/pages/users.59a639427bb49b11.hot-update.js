"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_A__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/A */ \"./pages/components/A.js\");\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar users = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            name: \"petya\"\n        },\n        {\n            id: 2,\n            name: \"vasya\"\n        }\n    ]), users = ref[0], setUsers = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(/*#__PURE__*/ (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n        var response, data;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"https://jsonplaceholder.typicode.com/users\")\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    console.log(data);\n                    return [\n                        2\n                    ];\n            }\n        });\n    }), []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Список пользователей\"\n            }, void 0, false, {\n                fileName: \"/Users/zahorniak/Documents/vsCodeProjects/next-js-project/pages/users.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: users.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_A__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            text: item.name,\n                            href: \"/users/\".concat(item.id)\n                        }, void 0, false, {\n                            fileName: \"/Users/zahorniak/Documents/vsCodeProjects/next-js-project/pages/users.js\",\n                            lineNumber: 27,\n                            columnNumber: 29\n                        }, _this)\n                    }, item.id, false, {\n                        fileName: \"/Users/zahorniak/Documents/vsCodeProjects/next-js-project/pages/users.js\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/zahorniak/Documents/vsCodeProjects/next-js-project/pages/users.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_s(users, \"Je1Qtb70SpFdqCYZtoyJrZ8EY+s=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (users);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQTRCO0FBRWU7QUFFYjtBQUM5QixJQUFNSSxLQUFLLEdBQUcsV0FBTTs7SUFFaEIsSUFBMEJILEdBR3hCLEdBSHdCQSwrQ0FBUSxDQUFDO1FBQy9CO1lBQUVJLEVBQUUsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBRSxPQUFPO1NBQUU7UUFDeEI7WUFBRUQsRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFLE9BQU87U0FBRTtLQUMzQixDQUFDLEVBSEtGLEtBQUssR0FBY0gsR0FHeEIsR0FIVSxFQUFFTSxRQUFRLEdBQUlOLEdBR3hCLEdBSG9CO0lBSXRCQyxnREFBUyxlQUFFLCtGQUFXO1lBQ1pNLFFBQVEsRUFDUkMsSUFBSTs7OztvQkFETzs7d0JBQU1DLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQztzQkFBQTs7b0JBQXBFRixRQUFRLEdBQUcsYUFBeUQ7b0JBQzdEOzt3QkFBTUEsUUFBUSxDQUFDRyxJQUFJLEVBQUU7c0JBQUE7O29CQUE1QkYsSUFBSSxHQUFHLGFBQXFCO29CQUNsQ0csT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQzs7Ozs7O0lBRXJCLENBQUMsR0FBRSxFQUFFLENBQUM7SUFHTixxQkFDSTs7MEJBQ0ksOERBQUNLLElBQUU7MEJBQUMsc0JBQW9COzs7OztxQkFBSzswQkFDN0IsOERBQUNDLElBQUU7MEJBQ0VYLEtBQUssQ0FBQ1ksR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBSztvQkFDakIscUJBQ0ksOERBQUNDLElBQUU7a0NBQ0MsNEVBQUNmLHFEQUFDOzRCQUFDZ0IsSUFBSSxFQUFFRixJQUFJLENBQUNYLElBQUk7NEJBQUVjLElBQUksRUFBRSxTQUFRLENBQVUsT0FBUkgsSUFBSSxDQUFDWixFQUFFLENBQUU7Ozs7O2lDQUFJO3VCQUQ1Q1ksSUFBSSxDQUFDWixFQUFFOzs7OzZCQUVYLENBQ1I7Z0JBQ0wsQ0FBQyxDQUFDOzs7OztxQkFDRDs7b0JBQ04sQ0FFTjtBQUNMLENBQUM7R0E3QktELEtBQUs7QUErQlgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMuanM/MDA2MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXG5cbmltcG9ydCBBIGZyb20gXCIuL2NvbXBvbmVudHMvQVwiXG5jb25zdCB1c2VycyA9ICgpID0+IHtcblxuICAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcInBldHlhXCIgfSxcbiAgICAgICAgeyBpZDogMiwgbmFtZTogXCJ2YXN5YVwiIH1cbiAgICBdKVxuICAgIHVzZUVmZmVjdCggYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnNcIikgXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxPtCh0L/QuNGB0L7QuiDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQuTwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge3VzZXJzLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBIHRleHQ9e2l0ZW0ubmFtZX0gaHJlZj17YC91c2Vycy8ke2l0ZW0uaWR9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2Vyc1xuXG4iXSwibmFtZXMiOlsiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQSIsInVzZXJzIiwiaWQiLCJuYW1lIiwic2V0VXNlcnMiLCJyZXNwb25zZSIsImRhdGEiLCJmZXRjaCIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiaDEiLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSIsInRleHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});