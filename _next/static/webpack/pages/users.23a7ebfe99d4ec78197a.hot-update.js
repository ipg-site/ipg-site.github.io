webpackHotUpdate_N_E("pages/users",{

/***/ "./pages/users/index.tsx":
/*!*******************************!*\
  !*** ./pages/users/index.tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/users/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar UsersIndex = function UsersIndex(_ref) {\n  _s();\n\n  var API_SERVER = _ref.API_SERVER;\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {\n    fetch(API_SERVER + '/auth/check', {\n      credentials: 'include',\n      mode: 'cors',\n      headers: {\n        'Content-Type': 'application/json'\n      }\n    }).then( /*#__PURE__*/function () {\n      var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                return _context.abrupt(\"return\", x.json());\n\n              case 1:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }()).then(function (d) {\n      if (d.status === 'NG') {\n        next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/login');\n      }\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: \"hoge\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UsersIndex, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = UsersIndex;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UsersIndex);\n\nvar _c;\n\n$RefreshReg$(_c, \"UsersIndex\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvaW5kZXgudHN4P2I2NmYiXSwibmFtZXMiOlsiVXNlcnNJbmRleCIsIkFQSV9TRVJWRVIiLCJSZWFjdCIsInVzZUVmZmVjdCIsImZldGNoIiwiY3JlZGVudGlhbHMiLCJtb2RlIiwiaGVhZGVycyIsInRoZW4iLCJ4IiwianNvbiIsImQiLCJzdGF0dXMiLCJSb3V0ZXIiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFrQyxHQUFHLFNBQXJDQSxVQUFxQyxPQUFrQjtBQUFBOztBQUFBLE1BQWhCQyxVQUFnQixRQUFoQkEsVUFBZ0I7QUFDM0RDLDhDQUFLLENBQUNDLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsU0FBSyxDQUFDSCxVQUFVLEdBQUcsYUFBZCxFQUE2QjtBQUNoQ0ksaUJBQVcsRUFBRSxTQURtQjtBQUVoQ0MsVUFBSSxFQUFFLE1BRjBCO0FBR2hDQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUh1QixLQUE3QixDQUFMLENBTUdDLElBTkg7QUFBQSxtVEFNUSxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBQWFBLENBQUMsQ0FBQ0MsSUFBRixFQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTlI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FNK0JGLElBTi9CLENBTW9DLFVBQUNHLENBQUQsRUFBTztBQUN6QyxVQUFJQSxDQUFDLENBQUNDLE1BQUYsS0FBYSxJQUFqQixFQUF1QjtBQUNyQkMsMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDRDtBQUNGLEtBVkQ7QUFXRCxHQVpELEVBWUcsRUFaSDtBQWFBLHNCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQW5CRDs7R0FBTWQsVTs7S0FBQUEsVTs7QUE2QlNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdXNlcnMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFVzZXJzSW5kZXg6IE5leHRQYWdlPHtBUElfU0VSVkVSfT4gPSAoe0FQSV9TRVJWRVJ9KSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goQVBJX1NFUlZFUiArICcvYXV0aC9jaGVjaycsIHtcbiAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oYXN5bmMgKHgpID0+IHguanNvbigpKS50aGVuKChkKSA9PiB7XG4gICAgICBpZiAoZC5zdGF0dXMgPT09ICdORycpIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgICAgIGhvZ2VcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgQVBJX1NFUlZFUjogcHJvY2Vzcy5lbnYuQVBJX1NFUlZFUixcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcnNJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/users/index.tsx\n");

/***/ })

})