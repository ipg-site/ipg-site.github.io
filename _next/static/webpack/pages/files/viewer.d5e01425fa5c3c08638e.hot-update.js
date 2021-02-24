webpackHotUpdate_N_E("pages/files/viewer",{

/***/ "./pages/files/viewer.tsx":
/*!********************************!*\
  !*** ./pages/files/viewer.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/users.module.scss */ \"./styles/users.module.scss\");\n/* harmony import */ var _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/PDFViewer */ \"./components/PDFViewer.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/files/viewer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ViewerPage = function ViewerPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      file = _React$useState2[0],\n      setFile = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('通信中...'),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      status = _React$useState4[0],\n      setStatus = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {\n        var query, file;\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');\n                return _context.abrupt(\"return\");\n\n              case 3:\n                query = querystring__WEBPACK_IMPORTED_MODULE_10__[\"decode\"](location.search.slice(1));\n                _context.next = 6;\n                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getFile\"])(query.type, Number(query.fid));\n\n              case 6:\n                file = _context.sent;\n\n                if (!(file.status === 'NG')) {\n                  _context.next = 10;\n                  break;\n                }\n\n                setStatus('ファイルが見つかりませんでした。');\n                return _context.abrupt(\"return\");\n\n              case 10:\n                console.log(file.data);\n                setFile(file.data);\n                setStatus('');\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  }, []);\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(window.innerWidth > 800 ? 800 : window.innerWidth),\n      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState5, 2),\n      pdfWidth = _React$useState6[0],\n      setWidth = _React$useState6[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A | \\u7BA1\\u7406\\u753B\\u9762\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n        children: status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_users_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fileContainer,\n      children: file === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        file: 'data:application/pdf;base64,' + file,\n        pageNumber: 1,\n        width: pdfWidth\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ViewerPage, \"28AMTwXrYLUthAhgsbPf9jtwcm8=\");\n\n_c = ViewerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ViewerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeD9hYTQzIl0sIm5hbWVzIjpbIlZpZXdlclBhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiZmlsZSIsInNldEZpbGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwidGhlbiIsIngiLCJSb3V0ZXIiLCJwdXNoIiwicXVlcnkiLCJxcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJnZXRGaWxlIiwidHlwZSIsIk51bWJlciIsImZpZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInBkZldpZHRoIiwic2V0V2lkdGgiLCJjbGFzc2VzIiwicm9vdCIsImNvbnRhaW5lciIsImZpbGVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBd0IsR0FBRyxTQUEzQkEsVUFBMkIsR0FBTTtBQUFBOztBQUFBLHdCQUNiQyw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLElBQXZCLENBRGE7QUFBQTtBQUFBLE1BQzlCQyxJQUQ4QjtBQUFBLE1BQ3hCQyxPQUR3Qjs7QUFBQSx5QkFFVEgsNENBQUssQ0FBQ0MsUUFBTixDQUF1QixRQUF2QixDQUZTO0FBQUE7QUFBQSxNQUU5QkcsTUFGOEI7QUFBQSxNQUV0QkMsU0FGc0I7O0FBR3JDTCw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLG1FQUFVLEdBQUdDLElBQWI7QUFBQSxrVEFBa0IsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ1pBLENBQUMsS0FBSyxJQURNO0FBQUE7QUFBQTtBQUFBOztBQUVkQyxrRUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUZjOztBQUFBO0FBS1ZDLHFCQUxVLEdBS0ZDLG1EQUFBLENBQVVDLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBVixDQUxFO0FBQUE7QUFBQSx1QkFNR0MsNERBQU8sQ0FBQ0wsS0FBSyxDQUFDTSxJQUFQLEVBQXNEQyxNQUFNLENBQUNQLEtBQUssQ0FBQ1EsR0FBUCxDQUE1RCxDQU5WOztBQUFBO0FBTVZsQixvQkFOVTs7QUFBQSxzQkFPWkEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLElBUEo7QUFBQTtBQUFBO0FBQUE7O0FBUWRDLHlCQUFTLENBQUMsa0JBQUQsQ0FBVDtBQVJjOztBQUFBO0FBV2hCZ0IsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZcEIsSUFBSSxDQUFDcUIsSUFBakI7QUFDQXBCLHVCQUFPLENBQUNELElBQUksQ0FBQ3FCLElBQU4sQ0FBUDtBQUNBbEIseUJBQVMsQ0FBQyxFQUFELENBQVQ7O0FBYmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUQsR0FoQkQsRUFnQkcsRUFoQkg7O0FBSHFDLHlCQXFCUkwsNENBQUssQ0FBQ0MsUUFBTixDQUFldUIsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXBCLEdBQTBCLEdBQTFCLEdBQWdDRCxNQUFNLENBQUNDLFVBQXRELENBckJRO0FBQUE7QUFBQSxNQXFCOUJDLFFBckI4QjtBQUFBLE1BcUJwQkMsUUFyQm9COztBQXVCckMsc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLGdFQUFPLENBQUNDLElBQXhCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQUssZUFBUyxFQUFFRCxnRUFBTyxDQUFDRSxTQUF4QjtBQUFBLDZCQUNFLHFFQUFDLHVFQUFEO0FBQUEsa0JBQWdCMUI7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQVNFO0FBQUssZUFBUyxFQUFFd0IsZ0VBQU8sQ0FBQ0csYUFBeEI7QUFBQSxnQkFDRzdCLElBQUksS0FBSyxJQUFULGdCQUFnQix1SkFBaEIsZ0JBQ0MscUVBQUMsOERBQUQ7QUFBVyxZQUFJLEVBQUUsaUNBQWlDQSxJQUFsRDtBQUF3RCxrQkFBVSxFQUFFLENBQXBFO0FBQXVFLGFBQUssRUFBRXdCO0FBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0F4Q0Q7O0dBQU0zQixVOztLQUFBQSxVO0FBMkNTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ZpbGVzL3ZpZXdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXNlcnMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtnZXRGaWxlLCBpc0xvZ2dlZElufSBmcm9tICcuLi8uLi91dGlscy9mZXRjaCc7XG5pbXBvcnQge1NlY3Rpb25IZWFkZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQgKiBhcyBxcyBmcm9tICdxdWVyeXN0cmluZyc7XG5pbXBvcnQgUGRmVmlld2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUERGVmlld2VyJztcblxuY29uc3QgVmlld2VyUGFnZTogTmV4dFBhZ2U8e30+ID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KG51bGwpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPign6YCa5L+h5LitLi4uJyk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNMb2dnZWRJbigpLnRoZW4oYXN5bmMgKHgpID0+IHtcbiAgICAgIGlmICh4ID09PSAnTkcnKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcXVlcnkgPSBxcy5kZWNvZGUobG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpKTtcbiAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBnZXRGaWxlKHF1ZXJ5LnR5cGUgYXMgJ2Fic3RyYWN0JyB8ICdwcmVzZW50YXRpb24nIHwgJ3Nob3J0JywgTnVtYmVyKHF1ZXJ5LmZpZCkpO1xuICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAnTkcnKSB7XG4gICAgICAgIHNldFN0YXR1cygn44OV44Kh44Kk44Or44GM6KaL44Gk44GL44KK44G+44Gb44KT44Gn44GX44Gf44CCJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGZpbGUuZGF0YSk7XG4gICAgICBzZXRGaWxlKGZpbGUuZGF0YSk7XG4gICAgICBzZXRTdGF0dXMoJycpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgW3BkZldpZHRoLCBzZXRXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSh3aW5kb3cuaW5uZXJXaWR0aCA+IDgwMCA/IDgwMCA6IHdpbmRvdy5pbm5lcldpZHRoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICDnrKwxNeWbnumWouadseWtpueUn+eglOeptuirluaWh+ism+a8lOS8miB8IOeuoeeQhueUu+mdolxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXI+e3N0YXR1c308L1NlY3Rpb25IZWFkZXI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpbGVDb250YWluZXJ9PlxuICAgICAgICB7ZmlsZSA9PT0gbnVsbCA/IDw+PC8+IDogKFxuICAgICAgICAgIDxQZGZWaWV3ZXIgZmlsZT17J2RhdGE6YXBwbGljYXRpb24vcGRmO2Jhc2U2NCwnICsgZmlsZX0gcGFnZU51bWJlcj17MX0gd2lkdGg9e3BkZldpZHRofS8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlld2VyUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/files/viewer.tsx\n");

/***/ })

})