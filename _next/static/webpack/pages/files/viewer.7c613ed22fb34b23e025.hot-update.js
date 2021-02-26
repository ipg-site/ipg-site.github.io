webpackHotUpdate_N_E("pages/files/viewer",{

/***/ "./pages/files/viewer.tsx":
/*!********************************!*\
  !*** ./pages/files/viewer.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/file.module.scss */ \"./styles/file.module.scss\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/PDFViewer */ \"./components/PDFViewer.tsx\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/files/viewer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar PdfBox = function PdfBox(_ref) {\n  _s();\n\n  var file = _ref.file;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(0),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      pdfWidth = _React$useState2[0],\n      setWidth = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1.0),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      scale = _React$useState4[0],\n      setScale = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1),\n      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState5, 2),\n      page = _React$useState6[0],\n      setPage = _React$useState6[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    setWidth(window.innerWidth > 800 ? 800 : window.innerWidth);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fileContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        file: 'data:application/pdf;base64,' + file,\n        pageNumber: page,\n        width: pdfWidth,\n        scale: scale\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n            onAction: function onAction() {\n              return setPage(function (c) {\n                return c - 1;\n              });\n            },\n            children: \"Prev\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n            onAction: function onAction() {\n              return setPage(function (c) {\n                return c + 1;\n              });\n            },\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n            onAction: function onAction() {\n              return setScale(function (c) {\n                return c / 1.5 <= 1.0 ? 1.0 : c / 1.5;\n              });\n            },\n            children: \"Zoom out\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n            onAction: function onAction() {\n              return setScale(function (c) {\n                return c * 1.5 >= 3.0 ? 3.0 : c * 1.5;\n              });\n            },\n            children: \"Zoom in\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(PdfBox, \"WzzW2Q81ADPSE71FVjdknaPwWQg=\");\n\n_c = PdfBox;\n\nvar ViewerPage = function ViewerPage() {\n  _s2();\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState8 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState7, 2),\n      file = _React$useState8[0],\n      setFile = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('通信中...'),\n      _React$useState10 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState9, 2),\n      status = _React$useState10[0],\n      setStatus = _React$useState10[1];\n\n  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('abstract'),\n      _React$useState12 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState11, 2),\n      type = _React$useState12[0],\n      setType = _React$useState12[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(x) {\n        var query, file;\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');\n                return _context.abrupt(\"return\");\n\n              case 3:\n                query = querystring__WEBPACK_IMPORTED_MODULE_10__[\"decode\"](location.search.slice(1));\n                _context.next = 6;\n                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getFile\"])(query.type, Number(query.fid));\n\n              case 6:\n                file = _context.sent;\n                setType(query.type);\n\n                if (!(file.status === 'NG')) {\n                  _context.next = 11;\n                  break;\n                }\n\n                setStatus('ファイルが見つかりませんでした。');\n                return _context.abrupt(\"return\");\n\n              case 11:\n                console.log(file.data);\n                setFile(file.data);\n                setStatus('');\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  }, []);\n\n  if (type !== 'short') {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n          children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n          children: status\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PdfBox, {\n        file: file\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A | \\u7BA1\\u7406\\u753B\\u9762\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n        children: status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(ViewerPage, \"a2tmCbvrMYzD7kGe+eSXTOQIBmc=\");\n\n_c2 = ViewerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PdfBox\");\n$RefreshReg$(_c2, \"ViewerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeD9hYTQzIl0sIm5hbWVzIjpbIlBkZkJveCIsImZpbGUiLCJSZWFjdCIsInVzZVN0YXRlIiwicGRmV2lkdGgiLCJzZXRXaWR0aCIsInNjYWxlIiwic2V0U2NhbGUiLCJwYWdlIiwic2V0UGFnZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGFzc2VzIiwiZmlsZUNvbnRhaW5lciIsImNvbnRhaW5lciIsImJ1dHRvbkNvbnRhaW5lciIsImJ1dHRvbkhhbGYiLCJjIiwiVmlld2VyUGFnZSIsInNldEZpbGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ0eXBlIiwic2V0VHlwZSIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwieCIsIlJvdXRlciIsInB1c2giLCJxdWVyeSIsInFzIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsImdldEZpbGUiLCJOdW1iZXIiLCJmaWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQWdDLEdBQUcsU0FBbkNBLE1BQW1DLE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsd0JBQ3RCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQURzQjtBQUFBO0FBQUEsTUFDNUNDLFFBRDRDO0FBQUEsTUFDbENDLFFBRGtDOztBQUFBLHlCQUV6QkgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEdBQWYsQ0FGeUI7QUFBQTtBQUFBLE1BRTVDRyxLQUY0QztBQUFBLE1BRXJDQyxRQUZxQzs7QUFBQSx5QkFHM0JMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBSDJCO0FBQUE7QUFBQSxNQUc1Q0ssSUFINEM7QUFBQSxNQUd0Q0Ms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QUFJQyxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQix3QkFDRTtBQUFLLGVBQVMsRUFBRVYsK0RBQU8sQ0FBQzRCLElBQXhCO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FO0FBQUssaUJBQVMsRUFBRTVCLCtEQUFPLENBQUNFLFNBQXhCO0FBQUEsK0JBQ0UscUVBQUMsdUVBQUQ7QUFBQSxvQkFBZ0JNO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFTRSxxRUFBQyxNQUFEO0FBQVEsWUFBSSxFQUFFcEI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFhRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBRVksK0RBQU8sQ0FBQzRCLElBQXhCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQUssZUFBUyxFQUFFNUIsK0RBQU8sQ0FBQ0UsU0FBeEI7QUFBQSw2QkFDRSxxRUFBQyx1RUFBRDtBQUFBLGtCQUFnQk07QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBbEREOztJQUFNRixVOztNQUFBQSxVO0FBcURTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ZpbGVzL3ZpZXdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvZmlsZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQge05leHRQYWdlfSBmcm9tICduZXh0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2dldEZpbGUsIGlzTG9nZ2VkSW59IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoJztcbmltcG9ydCB7U2VjdGlvbkhlYWRlcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCAqIGFzIHFzIGZyb20gJ3F1ZXJ5c3RyaW5nJztcbmltcG9ydCBQZGZWaWV3ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QREZWaWV3ZXInO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXQnO1xuXG5jb25zdCBQZGZCb3g6IFJlYWN0LkZDPHtmaWxlOiBzdHJpbmd9PiA9ICh7ZmlsZX0pID0+IHtcbiAgY29uc3QgW3BkZldpZHRoLCBzZXRXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSBSZWFjdC51c2VTdGF0ZSgxLjApO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCA+IDgwMCA/IDgwMCA6IHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maWxlQ29udGFpbmVyfT5cbiAgICAgICAgPFBkZlZpZXdlciBmaWxlPXsnZGF0YTphcHBsaWNhdGlvbi9wZGY7YmFzZTY0LCcgKyBmaWxlfSBwYWdlTnVtYmVyPXtwYWdlfSB3aWR0aD17cGRmV2lkdGh9IHNjYWxlPXtzY2FsZX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkhhbGZ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkFjdGlvbj17KCkgPT4gc2V0UGFnZSgoYykgPT4gYyAtIDEpfT5QcmV2PC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uSGFsZn0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQWN0aW9uPXsoKSA9PiBzZXRQYWdlKChjKSA9PiBjICsgMSl9Pk5leHQ8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uSGFsZn0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQWN0aW9uPXsoKSA9PiBzZXRTY2FsZSgoYykgPT4gYyAvIDEuNSA8PSAxLjAgPyAxLjAgOiBjIC8gMS41KX0+Wm9vbSBvdXQ8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25IYWxmfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHNldFNjYWxlKChjKSA9PiBjICogMS41ID49IDMuMCA/IDMuMCA6IGMgKiAxLjUpfT5ab29tIGluPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBWaWV3ZXJQYWdlOiBOZXh0UGFnZTx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4obnVsbCk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KCfpgJrkv6HkuK0uLi4nKTtcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGU8J2Fic3RyYWN0JyB8ICdwcmVzZW50YXRpb24nIHwgJ3Nob3J0Jz4oJ2Fic3RyYWN0Jyk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNMb2dnZWRJbigpLnRoZW4oYXN5bmMgKHgpID0+IHtcbiAgICAgIGlmICh4ID09PSAnTkcnKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgcXVlcnkgPSBxcy5kZWNvZGUobG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpKTtcbiAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBnZXRGaWxlKHF1ZXJ5LnR5cGUgYXMgJ2Fic3RyYWN0JyB8ICdwcmVzZW50YXRpb24nIHwgJ3Nob3J0JywgTnVtYmVyKHF1ZXJ5LmZpZCkpO1xuICAgICAgc2V0VHlwZShxdWVyeS50eXBlIGFzICdhYnN0cmFjdCcgfCAncHJlc2VudGF0aW9uJyB8ICdzaG9ydCcpO1xuICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAnTkcnKSB7XG4gICAgICAgIHNldFN0YXR1cygn44OV44Kh44Kk44Or44GM6KaL44Gk44GL44KK44G+44Gb44KT44Gn44GX44Gf44CCJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKGZpbGUuZGF0YSk7XG4gICAgICBzZXRGaWxlKGZpbGUuZGF0YSk7XG4gICAgICBzZXRTdGF0dXMoJycpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKHR5cGUgIT09ICdzaG9ydCcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgIOesrDE15Zue6Zai5p2x5a2m55Sf56CU56m26KuW5paH6Kyb5ryU5LyaXG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyPntzdGF0dXN9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBkZkJveCBmaWxlPXtmaWxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICDnrKwxNeWbnumWouadseWtpueUn+eglOeptuirluaWh+ism+a8lOS8miB8IOeuoeeQhueUu+mdolxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXI+e3N0YXR1c308L1NlY3Rpb25IZWFkZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlld2VyUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/files/viewer.tsx\n");

/***/ })

})