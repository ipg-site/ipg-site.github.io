webpackHotUpdate_N_E("pages/users",{

/***/ "./utils/fetch.ts":
/*!************************!*\
  !*** ./utils/fetch.ts ***!
  \************************/
/*! exports provided: login, loginWithNewPassword, isLoggedIn, isAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"login\", function() { return login; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginWithNewPassword\", function() { return loginWithNewPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isLoggedIn\", function() { return isLoggedIn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isAdmin\", function() { return isAdmin; });\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n\n\nvar login = /*#__PURE__*/function () {\n  var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(apiServer, username, password) {\n    var res;\n    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch(apiServer + '/auth/login', {\n              method: 'POST',\n              body: JSON.stringify({\n                username: username,\n                password: password\n              }),\n              credentials: 'include',\n              mode: 'cors',\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            }).then( /*#__PURE__*/function () {\n              var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(x) {\n                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n                  while (1) {\n                    switch (_context.prev = _context.next) {\n                      case 0:\n                        return _context.abrupt(\"return\", x.json());\n\n                      case 1:\n                      case \"end\":\n                        return _context.stop();\n                    }\n                  }\n                }, _callee);\n              }));\n\n              return function (_x4) {\n                return _ref2.apply(this, arguments);\n              };\n            }());\n\n          case 2:\n            res = _context2.sent;\n\n            if (!(res.status === 'CHANGE_PASSWORD_REQUEST')) {\n              _context2.next = 5;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", 'CHANGE');\n\n          case 5:\n            if (!(res.status === 'success')) {\n              _context2.next = 7;\n              break;\n            }\n\n            return _context2.abrupt(\"return\", 'OK');\n\n          case 7:\n            return _context2.abrupt(\"return\", 'NG');\n\n          case 8:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function login(_x, _x2, _x3) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar loginWithNewPassword = /*#__PURE__*/function () {\n  var _ref3 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(apiServer, username, password, newPassword) {\n    var res;\n    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return fetch(apiServer + '/auth/login', {\n              method: 'POST',\n              body: JSON.stringify({\n                username: username,\n                password: password,\n                newPassword: newPassword\n              }),\n              credentials: 'include',\n              mode: 'cors',\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            }).then( /*#__PURE__*/function () {\n              var _ref4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(x) {\n                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {\n                  while (1) {\n                    switch (_context3.prev = _context3.next) {\n                      case 0:\n                        return _context3.abrupt(\"return\", x.json());\n\n                      case 1:\n                      case \"end\":\n                        return _context3.stop();\n                    }\n                  }\n                }, _callee3);\n              }));\n\n              return function (_x9) {\n                return _ref4.apply(this, arguments);\n              };\n            }());\n\n          case 2:\n            res = _context4.sent;\n\n            if (!(res.status === 'CHANGE_PASSWORD_REQUEST')) {\n              _context4.next = 5;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", 'CHANGE');\n\n          case 5:\n            if (!(res.status === 'success')) {\n              _context4.next = 7;\n              break;\n            }\n\n            return _context4.abrupt(\"return\", 'OK');\n\n          case 7:\n            return _context4.abrupt(\"return\", 'NG');\n\n          case 8:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function loginWithNewPassword(_x5, _x6, _x7, _x8) {\n    return _ref3.apply(this, arguments);\n  };\n}();\nvar isLoggedIn = /*#__PURE__*/function () {\n  var _ref5 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(apiServer) {\n    var res;\n    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {\n      while (1) {\n        switch (_context6.prev = _context6.next) {\n          case 0:\n            _context6.next = 2;\n            return fetch(apiServer + '/auth/check', {\n              credentials: 'include',\n              mode: 'cors',\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            }).then( /*#__PURE__*/function () {\n              var _ref6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(x) {\n                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {\n                  while (1) {\n                    switch (_context5.prev = _context5.next) {\n                      case 0:\n                        return _context5.abrupt(\"return\", x.json());\n\n                      case 1:\n                      case \"end\":\n                        return _context5.stop();\n                    }\n                  }\n                }, _callee5);\n              }));\n\n              return function (_x11) {\n                return _ref6.apply(this, arguments);\n              };\n            }());\n\n          case 2:\n            res = _context6.sent;\n\n            if (!(res.status === 'OK')) {\n              _context6.next = 5;\n              break;\n            }\n\n            return _context6.abrupt(\"return\", 'OK');\n\n          case 5:\n            return _context6.abrupt(\"return\", 'NG');\n\n          case 6:\n          case \"end\":\n            return _context6.stop();\n        }\n      }\n    }, _callee6);\n  }));\n\n  return function isLoggedIn(_x10) {\n    return _ref5.apply(this, arguments);\n  };\n}();\nvar isAdmin = /*#__PURE__*/function () {\n  var _ref7 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8(apiServer) {\n    var res;\n    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {\n      while (1) {\n        switch (_context8.prev = _context8.next) {\n          case 0:\n            _context8.next = 2;\n            return fetch(apiServer + '/auth/check', {\n              credentials: 'include',\n              mode: 'cors',\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            }).then( /*#__PURE__*/function () {\n              var _ref8 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(x) {\n                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {\n                  while (1) {\n                    switch (_context7.prev = _context7.next) {\n                      case 0:\n                        return _context7.abrupt(\"return\", x.json());\n\n                      case 1:\n                      case \"end\":\n                        return _context7.stop();\n                    }\n                  }\n                }, _callee7);\n              }));\n\n              return function (_x13) {\n                return _ref8.apply(this, arguments);\n              };\n            }());\n\n          case 2:\n            res = _context8.sent;\n\n            if (!(res.status === 'OK' && res.isAdmin === true)) {\n              _context8.next = 5;\n              break;\n            }\n\n            return _context8.abrupt(\"return\", 'OK');\n\n          case 5:\n            return _context8.abrupt(\"return\", 'NG');\n\n          case 6:\n          case \"end\":\n            return _context8.stop();\n        }\n      }\n    }, _callee8);\n  }));\n\n  return function isAdmin(_x12) {\n    return _ref7.apply(this, arguments);\n  };\n}();\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2gudHM/NTJhOCJdLCJuYW1lcyI6WyJsb2dpbiIsImFwaVNlcnZlciIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiY3JlZGVudGlhbHMiLCJtb2RlIiwiaGVhZGVycyIsInRoZW4iLCJ4IiwianNvbiIsInJlcyIsInN0YXR1cyIsImxvZ2luV2l0aE5ld1Bhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJpc0xvZ2dlZEluIiwiaXNBZG1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLElBQU1BLEtBQUs7QUFBQSw4U0FBRyxrQkFBT0MsU0FBUCxFQUEwQkMsUUFBMUIsRUFBNENDLFFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0RDLEtBQUssQ0FBQ0gsU0FBUyxHQUFHLGFBQWIsRUFBNEI7QUFDakRJLG9CQUFNLEVBQUUsTUFEeUM7QUFFakRDLGtCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CTix3QkFBUSxFQUFSQSxRQURtQjtBQUNUQyx3QkFBUSxFQUFSQTtBQURTLGVBQWYsQ0FGMkM7QUFLakRNLHlCQUFXLEVBQUUsU0FMb0M7QUFNakRDLGtCQUFJLEVBQUUsTUFOMkM7QUFPakRDLHFCQUFPLEVBQUU7QUFDUCxnQ0FBZ0I7QUFEVDtBQVB3QyxhQUE1QixDQUFMLENBVWZDLElBVmU7QUFBQSwyVEFVVixpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseURBQWFBLENBQUMsQ0FBQ0MsSUFBRixFQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVlU7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREM7O0FBQUE7QUFDYkMsZUFEYTs7QUFBQSxrQkFZZkEsR0FBRyxDQUFDQyxNQUFKLEtBQWUseUJBWkE7QUFBQTtBQUFBO0FBQUE7O0FBQUEs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QUh3QyxhQUE1QixDQUFMLENBTWZDLElBTmU7QUFBQSwyVEFNVixrQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBQWFBLENBQUMsQ0FBQ0MsSUFBRixFQUFiOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTlU7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREc7O0FBQUE7QUFDZkMsZUFEZTs7QUFBQSxrQkFRakJBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLElBQWYsSUFBdUJELEdBQUcsQ0FBQ0ssT0FBSixLQUFnQixJQVJ0QjtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FRbUMsSUFSbkM7O0FBQUE7QUFBQSw4Q0FTZCxJQVRjOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVBBLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYiIsImZpbGUiOiIuL3V0aWxzL2ZldGNoLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKGFwaVNlcnZlcjogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTwnT0snIHwgJ05HJyB8ICdDSEFOR0UnPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvYXV0aC9sb2dpbicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VybmFtZSwgcGFzc3dvcmQsXG4gICAgfSksXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIGlmIChyZXMuc3RhdHVzID09PSAnQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1QnKSB7XG4gICAgcmV0dXJuICdDSEFOR0UnO1xuICB9XG4gIGlmIChyZXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICByZXR1cm4gJ09LJztcbiAgfVxuICByZXR1cm4gJ05HJztcbn1cbjtcblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aE5ld1Bhc3N3b3JkID0gYXN5bmMgKGFwaVNlcnZlcjogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTwnT0snIHwgJ05HJyB8ICdDSEFOR0UnPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvYXV0aC9sb2dpbicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VybmFtZSwgcGFzc3dvcmQsIG5ld1Bhc3N3b3JkLFxuICAgIH0pLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSkudGhlbihhc3luYyAoeCkgPT4geC5qc29uKCkpO1xuICBpZiAocmVzLnN0YXR1cyA9PT0gJ0NIQU5HRV9QQVNTV09SRF9SRVFVRVNUJykge1xuICAgIHJldHVybiAnQ0hBTkdFJztcbiAgfVxuICBpZiAocmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgcmV0dXJuICdPSyc7XG4gIH1cbiAgcmV0dXJuICdORyc7XG59XG4gIDtcblxuZXhwb3J0IGNvbnN0IGlzTG9nZ2VkSW4gPSBhc3luYyAoYXBpU2VydmVyOiBzdHJpbmcpOiBQcm9taXNlPCdPSycgfCAnTkcnPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvYXV0aC9jaGVjaycsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pLnRoZW4oYXN5bmMgKHgpID0+IHguanNvbigpKTtcbiAgaWYgKHJlcy5zdGF0dXMgPT09ICdPSycpIHJldHVybiAnT0snO1xuICByZXR1cm4gJ05HJztcbn1cbjtcblxuXG5leHBvcnQgY29uc3QgaXNBZG1pbiA9IGFzeW5jIChhcGlTZXJ2ZXI6IHN0cmluZyk6IFByb21pc2U8J09LJyB8ICdORyc+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpU2VydmVyICsgJy9hdXRoL2NoZWNrJywge1xuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSkudGhlbihhc3luYyAoeCkgPT4geC5qc29uKCkpO1xuICBpZiAocmVzLnN0YXR1cyA9PT0gJ09LJyAmJiByZXMuaXNBZG1pbiA9PT0gdHJ1ZSkgcmV0dXJuICdPSyc7XG4gIHJldHVybiAnTkcnO1xufVxuICA7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/fetch.ts\n");

/***/ })

})