webpackHotUpdate_N_E("pages/files/viewer",{

/***/ "./pages/files/viewer.tsx":
/*!********************************!*\
  !*** ./pages/files/viewer.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/users.module.scss */ \"./styles/users.module.scss\");\n/* harmony import */ var _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-pdf */ \"./node_modules/react-pdf/dist/esm/entry.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/files/viewer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ViewerPage = function ViewerPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      file = _React$useState2[0],\n      setFile = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('通信中...'),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      status = _React$useState4[0],\n      setStatus = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {\n        var query, file;\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');\n                return _context.abrupt(\"return\");\n\n              case 3:\n                query = querystring__WEBPACK_IMPORTED_MODULE_10__[\"decode\"](location.search.slice(1));\n                _context.next = 6;\n                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getFile\"])(query.type, Number(query.fid));\n\n              case 6:\n                file = _context.sent;\n\n                if (!(file.status === 'NG')) {\n                  _context.next = 10;\n                  break;\n                }\n\n                setStatus('ファイルが見つかりませんでした。');\n                return _context.abrupt(\"return\");\n\n              case 10:\n                setFile(file.link);\n                setStatus('');\n\n              case 12:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  }, []);\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState5, 2),\n      numPages = _React$useState6[0],\n      setNumPages = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1),\n      _React$useState8 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState7, 2),\n      pageNumber = _React$useState8[0],\n      setPageNumber = _React$useState8[1];\n\n  function onDocumentLoadSuccess(_ref2) {\n    var numPages = _ref2.numPages;\n    setNumPages(numPages);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A | \\u7BA1\\u7406\\u753B\\u9762\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n        children: status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, _this), file === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_pdf__WEBPACK_IMPORTED_MODULE_11__[\"Document\"], {\n          file: file,\n          onLoadSuccess: onDocumentLoadSuccess,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_pdf__WEBPACK_IMPORTED_MODULE_11__[\"Page\"], {\n            pageNumber: pageNumber\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: [\"Page \", pageNumber, \" of \", numPages]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ViewerPage, \"RKm9ewoUnWICMhd0SR4iP6M+tww=\");\n\n_c = ViewerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ViewerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeD9hYTQzIl0sIm5hbWVzIjpbIlZpZXdlclBhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiZmlsZSIsInNldEZpbGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwidGhlbiIsIngiLCJSb3V0ZXIiLCJwdXNoIiwicXVlcnkiLCJxcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJnZXRGaWxlIiwidHlwZSIsIk51bWJlciIsImZpZCIsImxpbmsiLCJudW1QYWdlcyIsInNldE51bVBhZ2VzIiwicGFnZU51bWJlciIsInNldFBhZ2VOdW1iZXIiLCJvbkRvY3VtZW50TG9hZFN1Y2Nlc3MiLCJjbGFzc2VzIiwicm9vdCIsImNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUF3QixHQUFHLFNBQTNCQSxVQUEyQixHQUFNO0FBQUE7O0FBQUEsd0JBQ2JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBdUIsSUFBdkIsQ0FEYTtBQUFBO0FBQUEsTUFDOUJDLElBRDhCO0FBQUEsTUFDeEJDLE9BRHdCOztBQUFBLHlCQUVUSCw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLFFBQXZCLENBRlM7QUFBQTtBQUFBLE1BRTlCRyxNQUY4QjtBQUFBLE1BRXRCQyxTQUZzQjs7QUFHckNMLDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsbUVBQVUsR0FBR0MsSUFBYjtBQUFBLGtUQUFrQixpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDWkEsQ0FBQyxLQUFLLElBRE07QUFBQTtBQUFBO0FBQUE7O0FBRWRDLGtFQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBRmM7O0FBQUE7QUFLVkMscUJBTFUsR0FLRkMsbURBQUEsQ0FBVUMsUUFBUSxDQUFDQyxNQUFULENBQWdCQyxLQUFoQixDQUFzQixDQUF0QixDQUFWLENBTEU7QUFBQTtBQUFBLHVCQU1HQyw0REFBTyxDQUFDTCxLQUFLLENBQUNNLElBQVAsRUFBc0RDLE1BQU0sQ0FBQ1AsS0FBSyxDQUFDUSxHQUFQLENBQTVELENBTlY7O0FBQUE7QUFNVmxCLG9CQU5VOztBQUFBLHNCQU9aQSxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsSUFQSjtBQUFBO0FBQUE7QUFBQTs7QUFRZEMseUJBQVMsQ0FBQyxrQkFBRCxDQUFUO0FBUmM7O0FBQUE7QUFXaEJGLHVCQUFPLENBQUNELElBQUksQ0FBQ21CLElBQU4sQ0FBUDtBQUNBaEIseUJBQVMsQ0FBQyxFQUFELENBQVQ7O0FBWmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0QsR0FmRCxFQWVHLEVBZkg7O0FBSHFDLHlCQW9CTEwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FwQks7QUFBQTtBQUFBLE1Bb0I5QnFCLFFBcEI4QjtBQUFBLE1Bb0JwQkMsV0FwQm9COztBQUFBLHlCQXFCRHZCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBckJDO0FBQUE7QUFBQSxNQXFCOUJ1QixVQXJCOEI7QUFBQSxNQXFCbEJDLGFBckJrQjs7QUF1QnJDLFdBQVNDLHFCQUFULFFBQTJDO0FBQUEsUUFBWEosUUFBVyxTQUFYQSxRQUFXO0FBQ3pDQyxlQUFXLENBQUNELFFBQUQsQ0FBWDtBQUNEOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFSyxnRUFBTyxDQUFDQyxJQUF4QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLGVBQVMsRUFBRUQsZ0VBQU8sQ0FBQ0UsU0FBeEI7QUFBQSw4QkFDRSxxRUFBQyx1RUFBRDtBQUFBLGtCQUFnQnpCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVHRixJQUFJLEtBQUssSUFBVCxnQkFBZ0IsdUpBQWhCLGdCQUNDO0FBQUEsZ0NBQ0UscUVBQUMsbURBQUQ7QUFDRSxjQUFJLEVBQUVBLElBRFI7QUFFRSx1QkFBYSxFQUFFd0IscUJBRmpCO0FBQUEsaUNBSUUscUVBQUMsK0NBQUQ7QUFBTSxzQkFBVSxFQUFFRjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQUEsOEJBQVNBLFVBQVQsVUFBeUJGLFFBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRjtBQUFBLHNCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBbEREOztHQUFNdkIsVTs7S0FBQUEsVTtBQXFEU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9maWxlcy92aWV3ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXJzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Z2V0RmlsZSwgaXNMb2dnZWRJbn0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2gnO1xuaW1wb3J0IHtTZWN0aW9uSGVhZGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXInO1xuaW1wb3J0ICogYXMgcXMgZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IHtEb2N1bWVudCwgUGFnZX0gZnJvbSAncmVhY3QtcGRmJztcblxuY29uc3QgVmlld2VyUGFnZTogTmV4dFBhZ2U8e30+ID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KG51bGwpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPign6YCa5L+h5LitLi4uJyk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNMb2dnZWRJbigpLnRoZW4oYXN5bmMgKHgpID0+IHtcbiAgICAgIGlmICh4ID09PSAnTkcnKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcXVlcnkgPSBxcy5kZWNvZGUobG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpKTtcbiAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBnZXRGaWxlKHF1ZXJ5LnR5cGUgYXMgJ2Fic3RyYWN0JyB8ICdwcmVzZW50YXRpb24nIHwgJ3Nob3J0JywgTnVtYmVyKHF1ZXJ5LmZpZCkpO1xuICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAnTkcnKSB7XG4gICAgICAgIHNldFN0YXR1cygn44OV44Kh44Kk44Or44GM6KaL44Gk44GL44KK44G+44Gb44KT44Gn44GX44Gf44CCJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldEZpbGUoZmlsZS5saW5rKTtcbiAgICAgIHNldFN0YXR1cygnJyk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBbbnVtUGFnZXMsIHNldE51bVBhZ2VzXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcGFnZU51bWJlciwgc2V0UGFnZU51bWJlcl0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcblxuICBmdW5jdGlvbiBvbkRvY3VtZW50TG9hZFN1Y2Nlc3Moe251bVBhZ2VzfSkge1xuICAgIHNldE51bVBhZ2VzKG51bVBhZ2VzKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIOesrDE15Zue6Zai5p2x5a2m55Sf56CU56m26KuW5paH6Kyb5ryU5LyaIHwg566h55CG55S76Z2iXG4gICAgICAgIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlcj57c3RhdHVzfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAge2ZpbGUgPT09IG51bGwgPyA8PjwvPiA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPERvY3VtZW50XG4gICAgICAgICAgICAgIGZpbGU9e2ZpbGV9XG4gICAgICAgICAgICAgIG9uTG9hZFN1Y2Nlc3M9e29uRG9jdW1lbnRMb2FkU3VjY2Vzc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFBhZ2UgcGFnZU51bWJlcj17cGFnZU51bWJlcn0gLz5cbiAgICAgICAgICAgIDwvRG9jdW1lbnQ+XG4gICAgICAgICAgICA8cD5QYWdlIHtwYWdlTnVtYmVyfSBvZiB7bnVtUGFnZXN9PC9wPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/files/viewer.tsx\n");

/***/ })

})