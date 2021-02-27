webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/AppHeader.tsx":
/*!**********************************!*\
  !*** ./components/AppHeader.tsx ***!
  \**********************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AppHeader\", function() { return AppHeader; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/AppHeader.module.scss */ \"./styles/AppHeader.module.scss\");\n/* harmony import */ var _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/fetch */ \"./utils/fetch.ts\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/components/AppHeader.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AppHeader = function AppHeader(_ref) {\n  _s();\n\n  var locale = _ref.locale;\n  var presenterMode = locale === '/login' || (locale === null || locale === void 0 ? void 0 : locale.startsWith('/user'));\n  var programMode = locale === null || locale === void 0 ? void 0 : locale.startsWith('/program');\n  var adminMode = locale === null || locale === void 0 ? void 0 : locale.startsWith('/admin');\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(true),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      hidden = _React$useState2[0],\n      setHidden = _React$useState2[1];\n\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {\n        var adminConfig;\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 2;\n                  break;\n                }\n\n                return _context.abrupt(\"return\");\n\n              case 2:\n                _context.next = 4;\n                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[\"getAdminConfig\"])();\n\n              case 4:\n                adminConfig = _context.sent;\n\n                if (!(adminConfig.status === 'NG')) {\n                  _context.next = 7;\n                  break;\n                }\n\n                return _context.abrupt(\"return\");\n\n              case 7:\n                if (!adminConfig.data.programPage) {\n                  _context.next = 10;\n                  break;\n                }\n\n                setHidden(false);\n                return _context.abrupt(\"return\");\n\n              case 10:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  }, []);\n\n  if (adminMode) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.userRoot,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,\n        children: \"\\u7BA1\\u7406\\u8005\\u30D1\\u30CD\\u30EB\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerLinkContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,\n            children: \"\\u30C8\\u30C3\\u30D7\\u30DA\\u30FC\\u30B8\\u3078\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 26\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this);\n  }\n\n  if (presenterMode) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.userRoot,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,\n        children: \"\\u7BA1\\u7406\\u753B\\u9762\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerLinkContainer,\n        children: [hidden ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/program\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,\n            children: \"\\u7279\\u8A2D\\u30B5\\u30A4\\u30C8\\u3078\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 51\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 29\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,\n            children: \"\\u30C8\\u30C3\\u30D7\\u30DA\\u30FC\\u30B8\\u3078\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 26\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this);\n  }\n\n  if (programMode) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.userRoot,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: \"/\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 26\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 24\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerLinkContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/login\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,\n          children: \"\\u767A\\u8868\\u8005\\u30FB\\u8074\\u8B1B\\u8005\\u30ED\\u30B0\\u30A4\\u30F3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 29\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 65,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AppHeader, \"28oGJ0ZYxAlG0eFG3lN6Mw7gt3A=\");\n\n_c = AppHeader;\n\nvar _c;\n\n$RefreshReg$(_c, \"AppHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBIZWFkZXIudHN4P2I3NDkiXSwibmFtZXMiOlsiQXBwSGVhZGVyIiwibG9jYWxlIiwicHJlc2VudGVyTW9kZSIsInN0YXJ0c1dpdGgiLCJwcm9ncmFtTW9kZSIsImFkbWluTW9kZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJoaWRkZW4iLCJzZXRIaWRkZW4iLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwidGhlbiIsIngiLCJnZXRBZG1pbkNvbmZpZyIsImFkbWluQ29uZmlnIiwic3RhdHVzIiwiZGF0YSIsInByb2dyYW1QYWdlIiwiY2xhc3NlcyIsInVzZXJSb290IiwiaGVhZGVyVGl0bGUiLCJoZWFkZXJMaW5rQ29udGFpbmVyIiwiYXBwSGVhZGVyTGluayIsInJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQXNDLEdBQUcsU0FBekNBLFNBQXlDLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDbEUsTUFBTUMsYUFBYSxHQUFHRCxNQUFNLEtBQUssUUFBWCxLQUF1QkEsTUFBdkIsYUFBdUJBLE1BQXZCLHVCQUF1QkEsTUFBTSxDQUFFRSxVQUFSLENBQW1CLE9BQW5CLENBQXZCLENBQXRCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHSCxNQUFILGFBQUdBLE1BQUgsdUJBQUdBLE1BQU0sQ0FBRUUsVUFBUixDQUFtQixVQUFuQixDQUFwQjtBQUNBLE1BQU1FLFNBQVMsR0FBR0osTUFBSCxhQUFHQSxNQUFILHVCQUFHQSxNQUFNLENBQUVFLFVBQVIsQ0FBbUIsUUFBbkIsQ0FBbEI7O0FBSGtFLHdCQUl0Q0csNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FKc0M7QUFBQTtBQUFBLE1BSTNEQyxNQUoyRDtBQUFBLE1BSW5EQyxTQUptRDs7QUFPbEVILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFB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RUFBQyxHQUFYO0FBQUEsK0JBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVGLG9FQUFPLENBQUNHLG1CQUF4QjtBQUFBLDZCQUNFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQSwrQkFBb0I7QUFBRyxtQkFBUyxFQUFFSCxvRUFBTyxDQUFDSSxhQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FwRU07O0dBQU12QixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BcHBIZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9zdHlsZXMvQXBwSGVhZGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7aXNMb2dnZWRJbiwgZ2V0QWRtaW5Db25maWd9IGZyb20gJy4uL3V0aWxzL2ZldGNoJztcblxuZXhwb3J0IGNvbnN0IEFwcEhlYWRlcjogUmVhY3QuRkM8e2xvY2FsZT86IHN0cmluZ30+ID0gKHtsb2NhbGV9KSA9PiB7XG4gIGNvbnN0IHByZXNlbnRlck1vZGUgPSBsb2NhbGUgPT09ICcvbG9naW4nIHx8IGxvY2FsZT8uc3RhcnRzV2l0aCgnL3VzZXInKTtcbiAgY29uc3QgcHJvZ3JhbU1vZGUgPSBsb2NhbGU/LnN0YXJ0c1dpdGgoJy9wcm9ncmFtJyk7XG4gIGNvbnN0IGFkbWluTW9kZSA9IGxvY2FsZT8uc3RhcnRzV2l0aCgnL2FkbWluJyk7XG4gIGNvbnN0IFtoaWRkZW4sIHNldEhpZGRlbl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNMb2dnZWRJbigpLnRoZW4oYXN5bmMgKHgpID0+IHtcbiAgICAgIGlmICh4ID09PSAnTkcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkbWluQ29uZmlnID0gYXdhaXQgZ2V0QWRtaW5Db25maWcoKTtcbiAgICAgIGlmIChhZG1pbkNvbmZpZy5zdGF0dXMgPT09ICdORycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGFkbWluQ29uZmlnLmRhdGEucHJvZ3JhbVBhZ2UpIHtcbiAgICAgICAgc2V0SGlkZGVuKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cblxuICBpZiAoYWRtaW5Nb2RlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnVzZXJSb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyVGl0bGV9PlxuICAgICAgICAgICAgICDnrqHnkIbogIXjg5Hjg43jg6tcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckxpbmtDb250YWluZXJ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEhlYWRlckxpbmt9PuODiOODg+ODl+ODmuODvOOCuOOBuDwvYT48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICBpZiAocHJlc2VudGVyTW9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyUm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlclRpdGxlfT5cbiAgICAgICAgICAgICAg566h55CG55S76Z2iXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJMaW5rQ29udGFpbmVyfT5cbiAgICAgICAgICB7aGlkZGVuID8gPD48Lz4gOiA8TGluayBocmVmPVwiL3Byb2dyYW1cIj48YSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwSGVhZGVyTGlua30+54m56Kit44K144Kk44OI44G4PC9hPjwvTGluaz59XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwSGVhZGVyTGlua30+44OI44OD44OX44Oa44O844K444G4PC9hPjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGlmIChwcm9ncmFtTW9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyUm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlclRpdGxlfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPuesrDE15Zue6Zai5p2x5a2m55Sf56CU56m26KuW5paH6Kyb5ryU5LyaPC9hPjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJUaXRsZX0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+56ysMTXlm57plqLmnbHlrabnlJ/noJTnqbboq5bmloforJvmvJTkvJo8L2E+PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJMaW5rQ29udGFpbmVyfT5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBIZWFkZXJMaW5rfT7nmbrooajogIXjg7vogbTorJvogIXjg63jgrDjgqTjg7M8L2E+PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/AppHeader.tsx\n");

/***/ })

})