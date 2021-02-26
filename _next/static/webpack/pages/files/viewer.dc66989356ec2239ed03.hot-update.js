webpackHotUpdate_N_E("pages/files/viewer",{

/***/ "./pages/files/viewer.tsx":
/*!********************************!*\
  !*** ./pages/files/viewer.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/file.module.scss */ \"./styles/file.module.scss\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/PDFViewer */ \"./components/PDFViewer.tsx\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/files/viewer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar PdfBox = function PdfBox(_ref) {\n  _s();\n\n  var file = _ref.file;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(0),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      pdfWidth = _React$useState2[0],\n      setWidth = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1.0),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      scale = _React$useState4[0],\n      setScale = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1),\n      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState5, 2),\n      page = _React$useState6[0],\n      setPage = _React$useState6[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    setWidth(window.innerWidth > 800 ? 800 : window.innerWidth);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fileContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        file: 'data:application/pdf;base64,' + file,\n        pageNumber: page,\n        width: pdfWidth,\n        scale: scale,\n        onReachMax: function onReachMax() {\n          setPage(function (c) {\n            return c - 1;\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n            onAction: function onAction() {\n              return setPage(function (c) {\n                return c - 1 < 1 ? 1 : c - 1;\n              });\n            },\n            children: \"Prev\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n            onAction: function onAction() {\n              return setPage(function (c) {\n                return c + 1;\n              });\n            },\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n            onAction: function onAction() {\n              return setScale(function (c) {\n                return c / 1.5 <= 1.0 ? 1.0 : c / 1.5;\n              });\n            },\n            children: \"Zoom out\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n            onAction: function onAction() {\n              return setScale(function (c) {\n                return c * 1.5 >= 3.0 ? 3.0 : c * 1.5;\n              });\n            },\n            children: \"Zoom in\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(PdfBox, \"WzzW2Q81ADPSE71FVjdknaPwWQg=\");\n\n_c = PdfBox;\n\nvar ViewerPage = function ViewerPage() {\n  _s2();\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState8 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState7, 2),\n      file = _React$useState8[0],\n      setFile = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('通信中...'),\n      _React$useState10 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState9, 2),\n      status = _React$useState10[0],\n      setStatus = _React$useState10[1];\n\n  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('abstract'),\n      _React$useState12 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState11, 2),\n      type = _React$useState12[0],\n      setType = _React$useState12[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(x) {\n        var query, file;\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');\n                return _context.abrupt(\"return\");\n\n              case 3:\n                query = querystring__WEBPACK_IMPORTED_MODULE_10__[\"decode\"](location.search.slice(1));\n                _context.next = 6;\n                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getFile\"])(query.type, Number(query.fid));\n\n              case 6:\n                file = _context.sent;\n                setType(query.type);\n\n                if (!(file.status === 'NG')) {\n                  _context.next = 11;\n                  break;\n                }\n\n                setStatus('ファイルが見つかりませんでした。');\n                return _context.abrupt(\"return\");\n\n              case 11:\n                setFile(file.data);\n                setStatus('');\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  }, []);\n\n  if (type !== 'short') {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n          children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n          children: status\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PdfBox, {\n        file: file\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A | \\u7BA1\\u7406\\u753B\\u9762\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n        children: status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(ViewerPage, \"a2tmCbvrMYzD7kGe+eSXTOQIBmc=\");\n\n_c2 = ViewerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PdfBox\");\n$RefreshReg$(_c2, \"ViewerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeD9hYTQzIl0sIm5hbWVzIjpbIlBkZkJveCIsImZpbGUiLCJSZWFjdCIsInVzZVN0YXRlIiwicGRmV2lkdGgiLCJzZXRXaWR0aCIsInNjYWxlIiwic2V0U2NhbGUiLCJwYWdlIiwic2V0UGFnZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGFzc2VzIiwiZmlsZUNvbnRhaW5lciIsImMiLCJjb250YWluZXIiLCJidXR0b25Db250YWluZXIiLCJidXR0b25IYWxmIiwiVmlld2VyUGFnZSIsInNldEZpbGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ0eXBlIiwic2V0VHlwZSIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwieCIsIlJvdXRlciIsInB1c2giLCJxdWVyeSIsInFzIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsImdldEZpbGUiLCJOdW1iZXIiLCJmaWQiLCJkYXRhIiwicm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBZ0MsR0FBRyxTQUFuQ0EsTUFBbUMsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFBQSx3QkFDdEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRHNCO0FBQUE7QUFBQSxNQUM1Q0MsUUFENEM7QUFBQSxNQUNsQ0MsUUFEa0M7O0FBQUEseUJBRXpCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsR0FBZixDQUZ5QjtBQUFBO0FBQUEsTUFFNUNHLEtBRjRDO0FBQUEsTUFFckNDLFFBRnFDOztBQUFBLHlCQUczQkwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FIMkI7QUFBQTtBQUFBLE1BRzVDSyxJQUg0QztBQUFBLE1BR3RDQyxPQUhzQzs7QUFJbkRQLDhDQUFLLENBQUNRLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkwsWUFBUSxDQUFDTSxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBcEIsR0FBMEIsR0FBMUIsR0FBZ0NELE1BQU0sQ0FBQ0MsVUFBeEMsQ0FBUjtBQUNELEdBRkQsRUFFRyxFQUZIO0FBR0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUMsK0RBQU8sQ0FBQ0MsYUFBeEI7QUFBQSw2QkFDRSxxRUFBQyw4REFBRDtBQUFXLFlBQUksRUFBRSxpQ0FBaUNiLElBQWxEO0FBQXdELGtCQUFVLEVBQUVPLElBQXBFO0FBQTBFLGFBQUssRUFBRUosUUFBakY7QUFBMkYsYUFBSyxFQUFFRSxLQUFsRztBQUF5RyxrQkFBVSxFQUFFLHNCQUFNO0FBQ3pIRyxpQkFBTyxDQUFDLFVBQUNNLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxHQUFHLENBQVg7QUFBQSxXQUFELENBQVA7QUFDRDtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLGVBQVMsRUFBRUYsK0RBQU8sQ0FBQ0csU0FBeEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVILCtEQUFPLENBQUNJLGVBQXhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFSiwrREFBTyxDQUFDSyxVQUF4QjtBQUFBLGlDQUNFLHFFQUFDLHlEQUFEO0FBQVEsb0JBQVEsRUFBRTtBQUFBLHFCQUFNVCxPQUFPLENBQUMsVUFBQ00sQ0FBRDtBQUFBLHVCQUFPQSxDQUFDLEdBQUcsQ0FBSixHQUFRLENBQVIsR0FBWSxDQUFaLEdBQWdCQSxDQUFDLEdBQUcsQ0FBM0I7QUFBQSxlQUFELENBQWI7QUFBQSxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUVGLCtEQUFPLENBQUNLLFVBQXhCO0FBQUEsaUNBQ0UscUVBQUMseURBQUQ7QUFBUSxvQkFBUSxFQUFFO0FBQUEscUJBQU1ULE9BQU8sQ0FBQyxVQUFDTSxDQUFEO0FBQUEsdUJBQU9BLENBQUMsR0FBRyxDQUFYO0FBQUEsZUFBRCxDQUFiO0FBQUEsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFFRiwrREFBTyxDQUFDSSxlQUF4QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUosK0RBQU8sQ0FBQ0ssVUFBeEI7QUFBQSxpQ0FDRSxxRUFBQyx5REFBRDtBQUFRLG9CQUFRLEVBQUU7QUFBQSxxQkFBTVgsUUFBUSxDQUFDLFVBQUNRLENBQUQ7QUFBQSx1QkFBT0EsQ0FBQyxHQUFHLEdBQUosSUFBVyxHQUFYLEdBQWlCLEdBQWpCLEdBQXVCQSxDQUFDLEdBQUcsR0FBbEM7QUFBQSxlQUFELENBQWQ7QUFBQSxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUVGLCtEQUFPLENBQUNLLFVBQXhCO0FBQUEsaUNBQ0UscUVBQUMseURBQUQ7QUFBUSxvQkFBUSxFQUFFO0FBQUEscUJBQU1YLFFBQVEsQ0FBQyxVQUFDUSxDQUFEO0FBQUEsdUJBQU9BLENBQUMsR0FBRyxHQUFKLElBQVcsR0FBWCxHQUFpQixHQUFqQixHQUF1QkEsQ0FBQyxHQUFHLEdBQWxDO0FBQUEsZUFBRCxDQUFkO0FBQUEsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUEyQkQsQ0FsQ0Q7O0dBQU1mLE07O0tBQUFBLE07O0FBb0NOLElBQU1tQixVQUF3QixHQUFHLFNBQTNCQSxVQUEyQixHQUFNO0FBQUE7O0FBQUEseUJBQ2JqQiw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLElBQXZCLENBRGE7QUFBQTtBQUFBLE1BQzlCRixJQUQ4QjtBQUFBLE1BQ3hCbUIsT0FEd0I7O0FBQUEseUJBRVRsQiw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLFFBQXZCLENBRlM7QUFBQTtBQUFBLE1BRTlCa0IsTUFGOEI7QUFBQSxNQUV0QkMsU0FGc0I7O0FBQUEsMEJBR2JwQiw0Q0FBSyxDQUFDQyxRQUFOLENBQXNELFVBQXRELENBSGE7QUFBQTtBQUFBLE1BRzlCb0IsSUFIOEI7QUFBQSxNQUd4QkMsT0FId0I7O0FBSXJDdEIsOENBQUssQ0FBQ1EsU0FBTixDQUFnQixZQUFNO0FBQ3BCZSxtRUFBVSxHQUFHQyxJQUFiO0FBQUEsbVRBQWtCLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNaQSxDQUFDLEtBQUssSUFETTtBQUFBO0FBQUE7QUFBQTs7QUFFZEMsa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFGYzs7QUFBQTtBQUtWQyxxQkFMVSxHQUtGQyxtREFBQSxDQUFVQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCLENBQXRCLENBQVYsQ0FMRTtBQUFBO0FBQUEsdUJBTUdDLDREQUFPLENBQUNMLEtBQUssQ0FBQ1AsSUFBUCxFQUFzRGEsTUFBTSxDQUFDTixLQUFLLENBQUNPLEdBQVAsQ0FBNUQsQ0FOVjs7QUFBQTtBQU1WcEMsb0JBTlU7QUFPaEJ1Qix1QkFBTyxDQUFDTSxLQUFLLENBQUNQLElBQVAsQ0FBUDs7QUFQZ0Isc0JBUVp0QixJQUFJLENBQUNvQixNQUFMLEtBQWdCLElBUko7QUFBQTtBQUFBO0FBQUE7O0FBU2RDLHlCQUFTLENBQUMsa0JBQUQsQ0FBVDtBQVRjOztBQUFBO0FBWWhCRix1QkFBTyxDQUFDbkIsSUFBSSxDQUFDcUMsSUFBTixDQUFQO0FBQ0FoQix5QkFBUyxDQUFDLEVBQUQsQ0FBVDs7QUFiZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlRCxHQWhCRCxFQWdCRyxFQWhCSDs7QUFrQkEsTUFBSUMsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDcEIsd0JBQ0U7QUFBSyxlQUFTLEVBQUVWLCtEQUFPLENBQUMwQixJQUF4QjtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFNRTtBQUFLLGlCQUFTLEVBQUUxQiwrREFBTyxDQUFDRyxTQUF4QjtBQUFBLCtCQUNFLHFFQUFDLHVFQUFEO0FBQUEsb0JBQWdCSztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBU0UscUVBQUMsTUFBRDtBQUFRLFlBQUksRUFBRXBCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBYUQ7O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVZLCtEQUFPLENBQUMwQixJQUF4QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLGVBQVMsRUFBRTFCLCtEQUFPLENBQUNHLFNBQXhCO0FBQUEsNkJBQ0UscUVBQUMsdUVBQUQ7QUFBQSxrQkFBZ0JLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQWpERDs7SUFBTUYsVTs7TUFBQUEsVTtBQW9EU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9maWxlcy92aWV3ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2ZpbGUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtnZXRGaWxlLCBpc0xvZ2dlZElufSBmcm9tICcuLi8uLi91dGlscy9mZXRjaCc7XG5pbXBvcnQge1NlY3Rpb25IZWFkZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQgKiBhcyBxcyBmcm9tICdxdWVyeXN0cmluZyc7XG5pbXBvcnQgUGRmVmlld2VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUERGVmlld2VyJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0JztcblxuY29uc3QgUGRmQm94OiBSZWFjdC5GQzx7ZmlsZTogc3RyaW5nfT4gPSAoe2ZpbGV9KSA9PiB7XG4gIGNvbnN0IFtwZGZXaWR0aCwgc2V0V2lkdGhdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzY2FsZSwgc2V0U2NhbGVdID0gUmVhY3QudXNlU3RhdGUoMS4wKTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGggPiA4MDAgPyA4MDAgOiB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlsZUNvbnRhaW5lcn0+XG4gICAgICAgIDxQZGZWaWV3ZXIgZmlsZT17J2RhdGE6YXBwbGljYXRpb24vcGRmO2Jhc2U2NCwnICsgZmlsZX0gcGFnZU51bWJlcj17cGFnZX0gd2lkdGg9e3BkZldpZHRofSBzY2FsZT17c2NhbGV9IG9uUmVhY2hNYXg9eygpID0+IHtcbiAgICAgICAgICBzZXRQYWdlKChjKSA9PiBjIC0gMSk7XG4gICAgICAgIH19Lz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25IYWxmfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHNldFBhZ2UoKGMpID0+IGMgLSAxIDwgMSA/IDEgOiBjIC0gMSl9PlByZXY8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25IYWxmfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHNldFBhZ2UoKGMpID0+IGMgKyAxKX0+TmV4dDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25IYWxmfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHNldFNjYWxlKChjKSA9PiBjIC8gMS41IDw9IDEuMCA/IDEuMCA6IGMgLyAxLjUpfT5ab29tIG91dDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkhhbGZ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkFjdGlvbj17KCkgPT4gc2V0U2NhbGUoKGMpID0+IGMgKiAxLjUgPj0gMy4wID8gMy4wIDogYyAqIDEuNSl9Plpvb20gaW48L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFZpZXdlclBhZ2U6IE5leHRQYWdlPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihudWxsKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ+mAmuS/oeS4rS4uLicpO1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZTwnYWJzdHJhY3QnIHwgJ3ByZXNlbnRhdGlvbicgfCAnc2hvcnQnPignYWJzdHJhY3QnKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc0xvZ2dlZEluKCkudGhlbihhc3luYyAoeCkgPT4ge1xuICAgICAgaWYgKHggPT09ICdORycpIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBxdWVyeSA9IHFzLmRlY29kZShsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkpO1xuICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IGdldEZpbGUocXVlcnkudHlwZSBhcyAnYWJzdHJhY3QnIHwgJ3ByZXNlbnRhdGlvbicgfCAnc2hvcnQnLCBOdW1iZXIocXVlcnkuZmlkKSk7XG4gICAgICBzZXRUeXBlKHF1ZXJ5LnR5cGUgYXMgJ2Fic3RyYWN0JyB8ICdwcmVzZW50YXRpb24nIHwgJ3Nob3J0Jyk7XG4gICAgICBpZiAoZmlsZS5zdGF0dXMgPT09ICdORycpIHtcbiAgICAgICAgc2V0U3RhdHVzKCfjg5XjgqHjgqTjg6vjgYzopovjgaTjgYvjgorjgb7jgZvjgpPjgafjgZfjgZ/jgIInKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0RmlsZShmaWxlLmRhdGEpO1xuICAgICAgc2V0U3RhdHVzKCcnKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGlmICh0eXBlICE9PSAnc2hvcnQnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICDnrKwxNeWbnumWouadseWtpueUn+eglOeptuirluaWh+ism+a8lOS8mlxuICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlcj57c3RhdHVzfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQZGZCb3ggZmlsZT17ZmlsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAg56ysMTXlm57plqLmnbHlrabnlJ/noJTnqbboq5bmloforJvmvJTkvJogfCDnrqHnkIbnlLvpnaJcbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyPntzdGF0dXN9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/files/viewer.tsx\n");

/***/ })

})