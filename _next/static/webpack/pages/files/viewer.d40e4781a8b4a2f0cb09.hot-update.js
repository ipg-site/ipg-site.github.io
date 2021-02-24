webpackHotUpdate_N_E("pages/files/viewer",{

/***/ "./pages/files/viewer.tsx":
/*!********************************!*\
  !*** ./pages/files/viewer.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/file.module.scss */ \"./styles/file.module.scss\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/files/viewer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar PdfViewer = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/PDFViewer */ \"./components/PDFViewer.tsx\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../components/PDFViewer */ \"./components/PDFViewer.tsx\")];\n    },\n    modules: ['../../components/PDFViewer']\n  }\n});\n_c2 = PdfViewer;\n\nvar PdfBox = function PdfBox(_ref) {\n  _s();\n\n  var file = _ref.file;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(0),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      pdfWidth = _React$useState2[0],\n      setWidth = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1.0),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      scale = _React$useState4[0],\n      setScale = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1),\n      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState5, 2),\n      page = _React$useState6[0],\n      setPage = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(-1),\n      _React$useState8 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState7, 2),\n      maxPage = _React$useState8[0],\n      setMaxPage = _React$useState8[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    setWidth(window.innerWidth > 800 ? 800 : window.innerWidth);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fileContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PdfViewer, {\n        file: 'data:application/pdf;base64,' + file,\n        pageNumber: page,\n        width: pdfWidth,\n        scale: scale,\n        onReachMax: function onReachMax() {\n          setMaxPage(page - 1);\n          setPage(function (c) {\n            return c - 1;\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n            onAction: function onAction() {\n              return setPage(function (c) {\n                return c - 1 < 1 ? 1 : c - 1;\n              });\n            },\n            children: \"Prev\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n            onAction: function onAction() {\n              return setPage(function (c) {\n                return maxPage >= 0 && c + 1 > maxPage ? c : c + 1;\n              });\n            },\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n            onAction: function onAction() {\n              return setScale(function (c) {\n                return c / 1.5 <= 1.0 ? 1.0 : c / 1.5;\n              });\n            },\n            children: \"Zoom out\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n            onAction: function onAction() {\n              return setScale(function (c) {\n                return c * 1.5 >= 3.0 ? 3.0 : c * 1.5;\n              });\n            },\n            children: \"Zoom in\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(PdfBox, \"YD2xF0ZGrOu10T9ziec1Zrw6MTU=\");\n\n_c3 = PdfBox;\n\nvar ViewerPage = function ViewerPage() {\n  _s2();\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState10 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState9, 2),\n      file = _React$useState10[0],\n      setFile = _React$useState10[1];\n\n  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('通信中...'),\n      _React$useState12 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState11, 2),\n      status = _React$useState12[0],\n      setStatus = _React$useState12[1];\n\n  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState14 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState13, 2),\n      type = _React$useState14[0],\n      setType = _React$useState14[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(x) {\n        var query, file;\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');\n                return _context.abrupt(\"return\");\n\n              case 3:\n                query = querystring__WEBPACK_IMPORTED_MODULE_10__[\"decode\"](location.search.slice(1));\n                _context.next = 6;\n                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getFile\"])(query.type, Number(query.fid));\n\n              case 6:\n                file = _context.sent;\n                setType(query.type);\n\n                if (!(file.status === 'NG')) {\n                  _context.next = 11;\n                  break;\n                }\n\n                setStatus('ファイルが見つかりませんでした。');\n                return _context.abrupt(\"return\");\n\n              case 11:\n                if (query.type !== 'short') {\n                  setFile(file.data);\n                } else {\n                  setFile(file.link);\n                }\n\n                setStatus('');\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  }, []);\n\n  if (type !== 'short' && type !== null) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n          children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n          children: status\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PdfBox, {\n        file: file\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n        children: status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"video\", {\n        controlsList: \"nodownload\",\n        src: file,\n        autoPlay: true,\n        style: {\n          width: '100%'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(ViewerPage, \"jyg+lQMjrv9UgYT5FfJu/H5HzFQ=\");\n\n_c4 = ViewerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerPage);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"PdfViewer$dynamic\");\n$RefreshReg$(_c2, \"PdfViewer\");\n$RefreshReg$(_c3, \"PdfBox\");\n$RefreshReg$(_c4, \"ViewerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeD9hYTQzIl0sIm5hbWVzIjpbIlBkZlZpZXdlciIsImR5bmFtaWMiLCJzc3IiLCJQZGZCb3giLCJmaWxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBkZldpZHRoIiwic2V0V2lkdGgiLCJzY2FsZSIsInNldFNjYWxlIiwicGFnZSIsInNldFBhZ2UiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGFzc2VzIiwiZmlsZUNvbnRhaW5lciIsImMiLCJjb250YWluZXIiLCJidXR0b25Db250YWluZXIiLCJidXR0b25IYWxmIiwiVmlld2VyUGFnZSIsInNldEZpbGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ0eXBlIiwic2V0VHlwZSIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwieCIsIlJvdXRlciIsInB1c2giLCJxdWVyeSIsInFzIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsImdldEZpbGUiLCJOdW1iZXIiLCJmaWQiLCJkYXRhIiwibGluayIsInJvb3QiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxvREFBTztBQUFBLFNBQUMsNklBQUQ7QUFBQSxHQUF3QztBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FBL0IsOERBQStCO0FBQUE7QUFBQSxjQUEvQiw0QkFBK0I7QUFBQTtBQUFBLENBQXhDLENBQXpCO01BQU1GLFM7O0FBR04sSUFBTUcsTUFBZ0MsR0FBRyxTQUFuQ0EsTUFBbUMsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFBQSx3QkFDdEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRHNCO0FB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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQVNFLHFFQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUV0QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWFEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFFYywrREFBTyxDQUFDMkIsSUFBeEI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUU7QUFBSyxlQUFTLEVBQUUzQiwrREFBTyxDQUFDRyxTQUF4QjtBQUFBLDhCQUNFLHFFQUFDLHVFQUFEO0FBQUEsa0JBQWdCSztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFPLG9CQUFZLEVBQUMsWUFBcEI7QUFBaUMsV0FBRyxFQUFFdEIsSUFBdEM7QUFBNEMsZ0JBQVEsTUFBcEQ7QUFBcUQsYUFBSyxFQUFFO0FBQUMwQyxlQUFLLEVBQUU7QUFBUjtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQXZERDs7SUFBTXRCLFU7O01BQUFBLFU7QUEwRFNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4uLy4uL3N0eWxlcy9maWxlLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Z2V0RmlsZSwgaXNMb2dnZWRJbn0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2gnO1xuaW1wb3J0IHtTZWN0aW9uSGVhZGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXInO1xuaW1wb3J0ICogYXMgcXMgZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmNvbnN0IFBkZlZpZXdlciA9IGR5bmFtaWMoaW1wb3J0KCAnLi4vLi4vY29tcG9uZW50cy9QREZWaWV3ZXInKSwge3NzcjogZmFsc2V9KTtcblxuXG5jb25zdCBQZGZCb3g6IFJlYWN0LkZDPHtmaWxlOiBzdHJpbmd9PiA9ICh7ZmlsZX0pID0+IHtcbiAgY29uc3QgW3BkZldpZHRoLCBzZXRXaWR0aF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3NjYWxlLCBzZXRTY2FsZV0gPSBSZWFjdC51c2VTdGF0ZSgxLjApO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcbiAgY29uc3QgW21heFBhZ2UsIHNldE1heFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoLTEpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFdpZHRoKHdpbmRvdy5pbm5lcldpZHRoID4gODAwID8gODAwIDogd2luZG93LmlubmVyV2lkdGgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmZpbGVDb250YWluZXJ9PlxuICAgICAgICA8UGRmVmlld2VyIGZpbGU9eydkYXRhOmFwcGxpY2F0aW9uL3BkZjtiYXNlNjQsJyArIGZpbGV9IHBhZ2VOdW1iZXI9e3BhZ2V9IHdpZHRoPXtwZGZXaWR0aH0gc2NhbGU9e3NjYWxlfSBvblJlYWNoTWF4PXsoKSA9PiB7XG4gICAgICAgICAgc2V0TWF4UGFnZShwYWdlIC0gMSk7XG4gICAgICAgICAgc2V0UGFnZSgoYykgPT4gYyAtIDEpO1xuICAgICAgICB9fS8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uSGFsZn0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQWN0aW9uPXsoKSA9PiBzZXRQYWdlKChjKSA9PiBjIC0gMSA8IDEgPyAxIDogYyAtIDEpfT5QcmV2PC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uSGFsZn0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQWN0aW9uPXsoKSA9PiBzZXRQYWdlKChjKSA9PiBtYXhQYWdlID49IDAgJiYgYyArIDEgPiBtYXhQYWdlID8gYyA6IGMgKyAxKX0+TmV4dDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25IYWxmfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHNldFNjYWxlKChjKSA9PiBjIC8gMS41IDw9IDEuMCA/IDEuMCA6IGMgLyAxLjUpfT5ab29tIG91dDwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkhhbGZ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkFjdGlvbj17KCkgPT4gc2V0U2NhbGUoKGMpID0+IGMgKiAxLjUgPj0gMy4wID8gMy4wIDogYyAqIDEuNSl9Plpvb20gaW48L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFZpZXdlclBhZ2U6IE5leHRQYWdlPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihudWxsKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ+mAmuS/oeS4rS4uLicpO1xuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZTwnYWJzdHJhY3QnIHwgJ3ByZXNlbnRhdGlvbicgfCAnc2hvcnQnPihudWxsKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc0xvZ2dlZEluKCkudGhlbihhc3luYyAoeCkgPT4ge1xuICAgICAgaWYgKHggPT09ICdORycpIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBxdWVyeSA9IHFzLmRlY29kZShsb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkpO1xuICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IGdldEZpbGUocXVlcnkudHlwZSBhcyAnYWJzdHJhY3QnIHwgJ3ByZXNlbnRhdGlvbicgfCAnc2hvcnQnLCBOdW1iZXIocXVlcnkuZmlkKSk7XG4gICAgICBzZXRUeXBlKHF1ZXJ5LnR5cGUgYXMgJ2Fic3RyYWN0JyB8ICdwcmVzZW50YXRpb24nIHwgJ3Nob3J0Jyk7XG4gICAgICBpZiAoZmlsZS5zdGF0dXMgPT09ICdORycpIHtcbiAgICAgICAgc2V0U3RhdHVzKCfjg5XjgqHjgqTjg6vjgYzopovjgaTjgYvjgorjgb7jgZvjgpPjgafjgZfjgZ/jgIInKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHF1ZXJ5LnR5cGUgIT09ICdzaG9ydCcpIHtcbiAgICAgICAgc2V0RmlsZShmaWxlLmRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0RmlsZShmaWxlLmxpbmspO1xuICAgICAgfVxuICAgICAgc2V0U3RhdHVzKCcnKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGlmICh0eXBlICE9PSAnc2hvcnQnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5cbiAgICAgICAgICAgIOesrDE15Zue6Zai5p2x5a2m55Sf56CU56m26KuW5paH6Kyb5ryU5LyaXG4gICAgICAgICAgPC90aXRsZT5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyPntzdGF0dXN9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFBkZkJveCBmaWxlPXtmaWxlfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICDnrKwxNeWbnumWouadseWtpueUn+eglOeptuirluaWh+ism+a8lOS8mlxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXI+e3N0YXR1c308L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgIDx2aWRlbyBjb250cm9sc0xpc3Q9XCJub2Rvd25sb2FkXCIgc3JjPXtmaWxlfSBhdXRvUGxheSBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fT5cbiAgICAgICAgPC92aWRlbz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBWaWV3ZXJQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/files/viewer.tsx\n");

/***/ })

})