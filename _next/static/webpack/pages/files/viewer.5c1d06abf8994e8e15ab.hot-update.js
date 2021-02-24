webpackHotUpdate_N_E("pages/files/viewer",{

/***/ "./pages/files/viewer.tsx":
/*!********************************!*\
  !*** ./pages/files/viewer.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/file.module.scss */ \"./styles/file.module.scss\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/PDFViewer */ \"./components/PDFViewer.tsx\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/files/viewer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar PdfBox = function PdfBox(_ref) {\n  _s();\n\n  var file = _ref.file;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(0),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      pdfWidth = _React$useState2[0],\n      setWidth = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1.0),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      scale = _React$useState4[0],\n      setScale = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    setWidth(window.innerWidth > 800 ? 800 : window.innerWidth);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fileContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        file: 'data:application/pdf;base64,' + file,\n        pageNumber: 1,\n        width: pdfWidth,\n        scale: scale\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n          onAction: function onAction() {\n            return setScale(function (c) {\n              return c <= 1.0 ? c : c / 1.5;\n            });\n          },\n          children: \"Zoom out\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_12__[\"Button\"], {\n          onAction: function onAction() {\n            return setScale(function (c) {\n              return c >= 3.0 ? c : c * 1.5;\n            });\n          },\n          children: \"Zoom in\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(PdfBox, \"LRhBb6Z+3xf66Ak4HXbC96IBM9c=\");\n\n_c = PdfBox;\n\nvar ViewerPage = function ViewerPage() {\n  _s2();\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState5, 2),\n      file = _React$useState6[0],\n      setFile = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('通信中...'),\n      _React$useState8 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState7, 2),\n      status = _React$useState8[0],\n      setStatus = _React$useState8[1];\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('abstract'),\n      _React$useState10 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState9, 2),\n      type = _React$useState10[0],\n      setType = _React$useState10[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(x) {\n        var query, file;\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');\n                return _context.abrupt(\"return\");\n\n              case 3:\n                query = querystring__WEBPACK_IMPORTED_MODULE_10__[\"decode\"](location.search.slice(1));\n                _context.next = 6;\n                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getFile\"])(query.type, Number(query.fid));\n\n              case 6:\n                file = _context.sent;\n                setType(query.type);\n\n                if (!(file.status === 'NG')) {\n                  _context.next = 11;\n                  break;\n                }\n\n                setStatus('ファイルが見つかりませんでした。');\n                return _context.abrupt(\"return\");\n\n              case 11:\n                console.log(file.data);\n                setFile(file.data);\n                setStatus('');\n\n              case 14:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  }, []);\n\n  if (type !== 'short') {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n          children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n          children: status\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PdfBox, {\n        file: file\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A | \\u7BA1\\u7406\\u753B\\u9762\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n        children: status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(ViewerPage, \"a2tmCbvrMYzD7kGe+eSXTOQIBmc=\");\n\n_c2 = ViewerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"PdfBox\");\n$RefreshReg$(_c2, \"ViewerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeD9hYTQzIl0sIm5hbWVzIjpbIlBkZkJveCIsImZpbGUiLCJSZWFjdCIsInVzZVN0YXRlIiwicGRmV2lkdGgiLCJzZXRXaWR0aCIsInNjYWxlIiwic2V0U2NhbGUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xhc3NlcyIsImZpbGVDb250YWluZXIiLCJjb250YWluZXIiLCJidXR0b25IYWxmIiwiYyIsIlZpZXdlclBhZ2UiLCJzZXRGaWxlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidHlwZSIsInNldFR5cGUiLCJpc0xvZ2dlZEluIiwidGhlbiIsIngiLCJSb3V0ZXIiLCJwdXNoIiwicXVlcnkiLCJxcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJnZXRGaWxlIiwiTnVtYmVyIiwiZmlkIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFnQyxHQUFHLFNBQW5DQSxNQUFtQyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUFBLHdCQUN0QkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FEc0I7QUFBQTtBQUFBLE1BQzVDQyxRQUQ0QztBQUFBLE1BQ2xDQyxRQURrQzs7QUFBQSx5QkFFekJILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxHQUFmLENBRnlCO0FBQUE7QUFBQSxNQUU1Q0csS0FGNEM7QUFBQSxNQUVyQ0MsUUFGcUM7O0FBR25ETCw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJILFlBQVEsQ0FBQ0ksTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXBCLEdBQTBCLEdBQTFCLEdBQWdDRCxNQUFNLENBQUNDLFVBQXhDLENBQVI7QUFDRCxHQUZELEVBRUcsRUFGSDtBQUdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVDLCtEQUFPLENBQUNDLGFBQXhCO0FBQUEsNkJBQ0UscUVBQUMsOERBQUQ7QUFBVyxZQUFJLEVBQUUsaUNBQWlDWCxJQUFsRDtBQUF3RCxrQkFBVSxFQUFFLENBQXBFO0FBQXVFLGFBQUssRUFBRUcsUUFBOUU7QUFBd0YsYUFBSyxFQUFFRTtBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBSUU7QUFBSyxlQUFTLEVBQUVLLCtEQUFPLENBQUNFLFNBQXhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFRiwrREFBTyxDQUFDRyxVQUF4QjtBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQVEsa0JBQVEsRUFBRTtBQUFBLG1CQUFNUCxRQUFRLENBQUMsVUFBQ1EsQ0FBRDtBQUFBLHFCQUFPQSxDQUFDLElBQUksR0FBTCxHQUFXQSxDQUFYLEdBQWVBLENBQUMsR0FBRyxHQUExQjtBQUFBLGFBQUQsQ0FBZDtBQUFBLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFSiwrREFBTyxDQUFDRyxVQUF4QjtBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQVEsa0JBQVEsRUFBRTtBQUFBLG1CQUFNUCxRQUFRLENBQUMsVUFBQ1EsQ0FBRDtBQUFBLHFCQUFPQSxDQUFDLElBQUksR0FBTCxHQUFXQSxDQUFYLEdBQWVBLENBQUMsR0FBRyxHQUExQjtBQUFBLGFBQUQsQ0FBZDtBQUFBLFdBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUEsa0JBREY7QUFlRCxDQXJCRDs7R0FBTWYsTTs7S0FBQUEsTTs7QUF1Qk4sSUFBTWdCLFVBQXdCLEdBQUcsU0FBM0JBLFVBQTJCLEdBQU07QUFBQTs7QUFBQSx5QkFDYmQsNENBQUssQ0FBQ0MsUUFBTixDQUF1QixJQUF2QixDQURhO0FBQUE7QUFBQSxNQUM5QkYsSUFEOEI7QUFBQSxNQUN4QmdCLE9BRHdCOztBQUFBLHlCQUVUZiw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLFFBQXZCLENBRlM7QUFBQTtBQUFBLE1BRTlCZSxNQUY4QjtBQUFBLE1BRXRCQyxTQUZzQjs7QUFBQSx5QkFHYmpCLDRDQUFLLENBQUNDLFFBQU4sQ0FBc0QsVUFBdEQsQ0FIYTtBQUFBO0FBQUEsTUFHOUJpQixJQUg4QjtBQUFBLE1BR3hCQyxPQUh3Qjs7QUFJckNuQiw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJjLG1FQUFVLEdBQUdDLElBQWI7QUFBQSxtVEFBa0IsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQ1pBLENBQUMsS0FBSyxJQURNO0FBQUE7QUFBQTtBQUFBOztBQUVkQyxrRUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUZjOztBQUFBO0FBS1ZDLHFCQUxVLEdBS0ZDLG1EQUFBLENBQVVDLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsS0FBaEIsQ0FBc0IsQ0FBdEIsQ0FBVixDQUxFO0FBQUE7QUFBQSx1QkFNR0MsNERBQU8sQ0FBQ0wsS0FBSyxDQUFDUCxJQUFQLEVBQXNEYSxNQUFNLENBQUNOLEtBQUssQ0FBQ08sR0FBUCxDQUE1RCxDQU5WOztBQUFBO0FBTVZqQyxvQkFOVTtBQU9oQm9CLHVCQUFPLENBQUNNLEtBQUssQ0FBQ1AsSUFBUCxDQUFQOztBQVBnQixzQkFRWm5CLElBQUksQ0FBQ2lCLE1BQUwsS0FBZ0IsSUFSSjtBQUFBO0FBQUE7QUFBQTs7QUFTZEMseUJBQVMsQ0FBQyxrQkFBRCxDQUFUO0FBVGM7O0FBQUE7QUFZaEJnQix1QkFBTyxDQUFDQyxHQUFSLENBQVluQyxJQUFJLENBQUNvQyxJQUFqQjtBQUNBcEIsdUJBQU8sQ0FBQ2hCLElBQUksQ0FBQ29DLElBQU4sQ0FBUDtBQUNBbEIseUJBQVMsQ0FBQyxFQUFELENBQVQ7O0FBZGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JELEdBakJELEVBaUJHLEVBakJIOztBQW1CQSxNQUFJQyxJQUFJLEtBQUssT0FBYixFQUFzQjtBQUNwQix3QkFDRTtBQUFLLGVBQVMsRUFBRVQsK0RBQU8sQ0FBQzJCLElBQXhCO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FO0FBQUssaUJBQVMsRUFBRTNCLCtEQUFPLENBQUNFLFNBQXhCO0FBQUEsK0JBQ0UscUVBQUMsdUVBQUQ7QUFBQSxvQkFBZ0JLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFTRSxxRUFBQyxNQUFEO0FBQVEsWUFBSSxFQUFFakI7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFhRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBRVUsK0RBQU8sQ0FBQzJCLElBQXhCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQUssZUFBUyxFQUFFM0IsK0RBQU8sQ0FBQ0UsU0FBeEI7QUFBQSw2QkFDRSxxRUFBQyx1RUFBRDtBQUFBLGtCQUFnQks7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVlELENBbEREOztJQUFNRixVOztNQUFBQSxVO0FBcURTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2ZpbGVzL3ZpZXdlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvZmlsZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQge05leHRQYWdlfSBmcm9tICduZXh0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2dldEZpbGUsIGlzTG9nZ2VkSW59IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoJztcbmltcG9ydCB7U2VjdGlvbkhlYWRlcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCAqIGFzIHFzIGZyb20gJ3F1ZXJ5c3RyaW5nJztcbmltcG9ydCBQZGZWaWV3ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QREZWaWV3ZXInO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXQnO1xuXG5jb25zdCBQZGZCb3g6IFJlYWN0LkZDPHtmaWxlOiBzdHJpbmd9PiA9ICh7ZmlsZX0pID0+IHtcbiAgY29uc3QgW3BkZldpZHRoLCBzZXRXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSBSZWFjdC51c2VTdGF0ZSgxLjApO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoID4gODAwID8gODAwIDogd2luZG93LmlubmVyV2lkdGgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpbGVDb250YWluZXJ9PlxuICAgICAgICA8UGRmVmlld2VyIGZpbGU9eydkYXRhOmFwcGxpY2F0aW9uL3BkZjtiYXNlNjQsJyArIGZpbGV9IHBhZ2VOdW1iZXI9ezF9IHdpZHRoPXtwZGZXaWR0aH0gc2NhbGU9e3NjYWxlfS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkhhbGZ9PlxuICAgICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHNldFNjYWxlKChjKSA9PiBjIDw9IDEuMCA/IGMgOiBjIC8gMS41KX0+Wm9vbSBvdXQ8L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkhhbGZ9PlxuICAgICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHNldFNjYWxlKChjKSA9PiBjID49IDMuMCA/IGMgOiBjICogMS41KX0+Wm9vbSBpbjwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgVmlld2VyUGFnZTogTmV4dFBhZ2U8e30+ID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KG51bGwpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPign6YCa5L+h5LitLi4uJyk7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlPCdhYnN0cmFjdCcgfCAncHJlc2VudGF0aW9uJyB8ICdzaG9ydCc+KCdhYnN0cmFjdCcpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTG9nZ2VkSW4oKS50aGVuKGFzeW5jICh4KSA9PiB7XG4gICAgICBpZiAoeCA9PT0gJ05HJykge1xuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcXMuZGVjb2RlKGxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKSk7XG4gICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShxdWVyeS50eXBlIGFzICdhYnN0cmFjdCcgfCAncHJlc2VudGF0aW9uJyB8ICdzaG9ydCcsIE51bWJlcihxdWVyeS5maWQpKTtcbiAgICAgIHNldFR5cGUocXVlcnkudHlwZSBhcyAnYWJzdHJhY3QnIHwgJ3ByZXNlbnRhdGlvbicgfCAnc2hvcnQnKTtcbiAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ05HJykge1xuICAgICAgICBzZXRTdGF0dXMoJ+ODleOCoeOCpOODq+OBjOimi+OBpOOBi+OCiuOBvuOBm+OCk+OBp+OBl+OBn+OAgicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhmaWxlLmRhdGEpO1xuICAgICAgc2V0RmlsZShmaWxlLmRhdGEpO1xuICAgICAgc2V0U3RhdHVzKCcnKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGlmICh0eXBlICE9PSAnc2hvcnQnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICDnrKwxNeWbnumWouadseWtpueUn+eglOeptuirluaWh+ism+a8lOS8mlxuICAgICAgICAgIDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlcj57c3RhdHVzfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQZGZCb3ggZmlsZT17ZmlsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAg56ysMTXlm57plqLmnbHlrabnlJ/noJTnqbboq5bmloforJvmvJTkvJogfCDnrqHnkIbnlLvpnaJcbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyPntzdGF0dXN9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/files/viewer.tsx\n");

/***/ })

})