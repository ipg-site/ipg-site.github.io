webpackHotUpdate_N_E("pages/files/viewer",{

/***/ "./pages/files/viewer.tsx":
/*!********************************!*\
  !*** ./pages/files/viewer.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/file.module.scss */ \"./styles/file.module.scss\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.tsx\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_12__);\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/files/viewer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar PdfViewer = next_dynamic__WEBPACK_IMPORTED_MODULE_12___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../components/PDFViewer */ \"./components/PDFViewer.tsx\"));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! ../../components/PDFViewer */ \"./components/PDFViewer.tsx\")];\n    },\n    modules: ['../../components/PDFViewer']\n  }\n});\n_c2 = PdfViewer;\n\nvar PdfBox = function PdfBox(_ref) {\n  _s();\n\n  var file = _ref.file;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(0),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      pdfWidth = _React$useState2[0],\n      setWidth = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1.0),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      scale = _React$useState4[0],\n      setScale = _React$useState4[1];\n\n  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(1),\n      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState5, 2),\n      page = _React$useState6[0],\n      setPage = _React$useState6[1];\n\n  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(-1),\n      _React$useState8 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState7, 2),\n      maxPage = _React$useState8[0],\n      setMaxPage = _React$useState8[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    setWidth(window.innerWidth > 800 ? 800 : window.innerWidth);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n            onAction: function onAction() {\n              return setPage(function (c) {\n                return c - 1 < 1 ? 1 : c - 1;\n              });\n            },\n            children: \"Prev\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n            onAction: function onAction() {\n              return setPage(function (c) {\n                return maxPage >= 0 && c + 1 > maxPage ? c : c + 1;\n              });\n            },\n            children: \"Next\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fileContainer,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PdfViewer, {\n        file: 'data:application/pdf;base64,' + file,\n        pageNumber: page,\n        width: pdfWidth,\n        scale: scale,\n        onReachMax: function onReachMax() {\n          setMaxPage(page - 1);\n          setPage(function (c) {\n            return c - 1;\n          });\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonContainer,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n            onAction: function onAction() {\n              return setScale(function (c) {\n                return c / 1.5 <= 1.0 ? 1.0 : c / 1.5;\n              });\n            },\n            children: \"Zoom out\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 43,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.buttonHalf,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_11__[\"Button\"], {\n            onAction: function onAction() {\n              return setScale(function (c) {\n                return c * 1.5 >= 3.0 ? 3.0 : c * 1.5;\n              });\n            },\n            children: \"Zoom in\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 46,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(PdfBox, \"YD2xF0ZGrOu10T9ziec1Zrw6MTU=\");\n\n_c3 = PdfBox;\n\nvar ViewerPage = function ViewerPage() {\n  _s2();\n\n  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState10 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState9, 2),\n      file = _React$useState10[0],\n      setFile = _React$useState10[1];\n\n  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('通信中...'),\n      _React$useState12 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState11, 2),\n      status = _React$useState12[0],\n      setStatus = _React$useState12[1];\n\n  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState14 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState13, 2),\n      type = _React$useState14[0],\n      setType = _React$useState14[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(x) {\n        var query, file;\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');\n                return _context.abrupt(\"return\");\n\n              case 3:\n                query = querystring__WEBPACK_IMPORTED_MODULE_10__[\"decode\"](location.search.slice(1));\n                _context.next = 6;\n                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getFile\"])(query.type, Number(query.fid));\n\n              case 6:\n                file = _context.sent;\n                setType(query.type);\n\n                if (!(file.status === 'NG')) {\n                  _context.next = 11;\n                  break;\n                }\n\n                setStatus('ファイルが見つかりませんでした。');\n                return _context.abrupt(\"return\");\n\n              case 11:\n                if (query.type !== 'short') {\n                  setFile(file.data);\n                } else {\n                  setFile(file.link);\n                }\n\n                setStatus('');\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  }, []);\n\n  if (file === null) {\n    /*#__PURE__*/\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n          children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n          children: status\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 5\n    }, _this);\n  }\n\n  if (type !== 'short' && type !== null) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n          children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n          children: status\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(PdfBox, {\n        file: file\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n        children: status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"video\", {\n        controlsList: \"nodownload\",\n        src: file,\n        controls: true,\n        autoPlay: true,\n        onContextMenu: function onContextMenu(e) {\n          e.preventDefault();\n        },\n        className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.video\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(ViewerPage, \"jyg+lQMjrv9UgYT5FfJu/H5HzFQ=\");\n\n_c4 = ViewerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerPage);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"PdfViewer$dynamic\");\n$RefreshReg$(_c2, \"PdfViewer\");\n$RefreshReg$(_c3, \"PdfBox\");\n$RefreshReg$(_c4, \"ViewerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeD9hYTQzIl0sIm5hbWVzIjpbIlBkZlZpZXdlciIsImR5bmFtaWMiLCJzc3IiLCJQZGZCb3giLCJmaWxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBkZldpZHRoIiwic2V0V2lkdGgiLCJzY2FsZSIsInNldFNjYWxlIiwicGFnZSIsInNldFBhZ2UiLCJtYXhQYWdlIiwic2V0TWF4UGFnZSIsInVzZUVmZmVjdCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGFzc2VzIiwiY29udGFpbmVyIiwiYnV0dG9uQ29udGFpbmVyIiwiYnV0dG9uSGFsZiIsImMiLCJmaWxlQ29udGFpbmVyIiwiVmlld2VyUGFnZSIsInNldEZpbGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ0eXBlIiwic2V0VHlwZSIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwieCIsIlJvdXRlciIsInB1c2giLCJxdWVyeSIsInFzIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsImdldEZpbGUiLCJOdW1iZXIiLCJmaWQiLCJkYXRhIiwibGluayIsInJvb3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJ2aWRlbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsU0FBUyxHQUFHQyxvREFBTztBQUFBLFNBQUMsNklBQUQ7QUFBQSxHQUF3QztBQUFDQyxLQUFHLEVBQUUsS0FBTjtBQUFBO0FBQUE7QUFBQSxrQ0FBL0IsOERBQStCO0FBQUE7QUFBQSxjQUEvQiw0QkFBK0I7QUFBQTtBQUFBLENBQXhDLENBQXpCO01BQU1GLFM7O0FBR04sSUFBTUcsTUFBZ0MsR0FBRyxTQUFuQ0EsTUFBbUMsT0FBWTtBQUFBOztBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFBQSx3QkFDdEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRHNCO0FBQUE7QUFBQSxNQUM1Q0MsUUFENEM7QUFBQSxNQUNsQ0MsUUFEa0M7O0FBQUEseUJBRXpCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsR0FBZixDQUZ5QjtBQUFBO0FBQUEsTUFFNUNHLEtBRjRDO0FBQUEsTUFFckNDLFFBRnFDOztBQUFBLHlCQUczQkwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FIMkI7QUFBQTtBQUFBLE1BRzVDSyxJQUg0QztBQUFBLE1BR3RDQyxPQUhzQzs7QUFBQSx5QkFJckJQLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFDLENBQWhCLENBSnFCO0FBQUE7QUFBQSxNQUk1Q08sT0FKNEM7QUFBQSxNQUluQ0MsVUFKbUM7O0FBS25EVCw4Q0FBSyxDQUFDVSxTQUFOLENBQWdCLFlBQU07QUFDcEJQLFlBQVEsQ0FBQ1EsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXBCLEdBQTBCLEdBQTFCLEdBQWdDRCxNQUFNLENBQUNDLFVBQXhDLENBQVI7QUFDRCxHQUZELEVBRUcsRUFGSDtBQUdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVDLCtEQUFPLENBQUNDLFNBQXhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFRCwrREFBTyxDQUFDRSxlQUF4QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUYsK0RBQU8sQ0FBQ0csVUFBeEI7QUFBQSxpQ0FDRSxxRUFBQyx5REFBRDtBQUFRLG9CQUFRLEVBQUU7QUFBQSxxQkFBTVQsT0FBTyxDQUFDLFVBQUNVLENBQUQ7QUFBQSx1QkFBT0EsQ0FBQyxHQUFHLENBQUosR0FBUSxDQUFSLEdBQVksQ0FBWixHQUFnQkEsQ0FBQyxHQUFHLENBQTNCO0FBQUEsZUFBRCxDQUFiO0FBQUEsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFFSiwrREFBTyxDQUFDRyxVQUF4QjtBQUFBLGlDQUNFLHFFQUFDLHlEQUFEO0FBQVEsb0JBQVEsRUFBRTtBQUFBLHFCQUFNVCxPQUFPLENBQUMsVUFBQ1UsQ0FBRDtBQUFBLHVCQUFPVCxPQUFPLElBQUksQ0FBWCxJQUFnQlMsQ0FBQyxHQUFHLENBQUosR0FBUVQsT0FBeEIsR0FBa0NTLENBQWxDLEdBQXNDQSxDQUFDLEdBQUcsQ0FBakQ7QUFBQSxlQUFELENBQWI7QUFBQSxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBV0U7QUFBSyxlQUFTLEVBQUVKLCtEQUFPLENBQUNLLGFBQXhCO0FBQUEsNkJBQ0UscUVBQUMsU0FBRDtBQUFXLFlBQUksRUFBRSxpQ0FBaUNuQixJQUFsRDtBQUF3RCxrQkFBVSxFQUFFTyxJQUFwRTtBQUEwRSxhQUFLLEVBQUVKLFFBQWpGO0FBQTJGLGFBQUssRUFBRUUsS0FBbEc7QUFBeUcsa0JBQVUsRUFBRSxzQkFBTTtBQUN6SEssb0JBQVUsQ0FBQ0gsSUFBSSxHQUFHLENBQVIsQ0FBVjtBQUNBQyxpQkFBTyxDQUFDLFVBQUNVLENBQUQ7QUFBQSxtQkFBT0EsQ0FBQyxHQUFHLENBQVg7QUFBQSxXQUFELENBQVA7QUFDRDtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUFpQkU7QUFBSyxlQUFTLEVBQUVKLCtEQUFPLENBQUNDLFNBQXhCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFRCwrREFBTyxDQUFDRSxlQUF4QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUYsK0RBQU8sQ0FBQ0csVUFBeEI7QUFBQSxpQ0FDRSxxRUFBQyx5REFBRDtBQUFRLG9CQUFRLEVBQUU7QUFBQSxxQkFBTVgsUUFBUSxDQUFDLFVBQUNZLENBQUQ7QUFBQSx1QkFBT0EsQ0FBQyxHQUFHLEdBQUosSUFBVyxHQUFYLEdBQWlCLEdBQWpCLEdBQXVCQSxDQUFDLEdBQUcsR0FBbEM7QUFBQSxlQUFELENBQWQ7QUFBQSxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUVKLCtEQUFPLENBQUNHLFVBQXhCO0FBQUEsaUNBQ0UscUVBQUMseURBQUQ7QUFBUSxvQkFBUSxFQUFFO0FBQUEscUJBQU1YLFFBQVEsQ0FBQyxVQUFDWSxDQUFEO0FBQUEsdUJBQU9BLENBQUMsR0FBRyxHQUFKLElBQVcsR0FBWCxHQUFpQixHQUFqQixHQUF1QkEsQ0FBQyxHQUFHLEdBQWxDO0FBQUEsZUFBRCxDQUFkO0FBQUEsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQSxrQkFERjtBQThCRCxDQXRDRDs7R0FBTW5CLE07O01BQUFBLE07O0FBd0NOLElBQU1xQixVQUF3QixHQUFHLFNBQTNCQSxVQUEyQixHQUFNO0FBQUE7O0FBQUEseUJBQ2JuQiw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLElBQXZCLENBRGE7QUFBQTtBQUFBLE1BQzlCRixJQUQ4QjtBQUFBLE1BQ3hCcUIsT0FEd0I7O0FBQUEsMEJBRVRwQiw0Q0FBSyxDQUFDQyxRQUFOLENBQXVCLFFBQXZCLENBRlM7QUFBQTtBQUFBLE1BRTlCb0IsTUFGOEI7QUFBQSxNQUV0QkMsU0FGc0I7O0FBQUEsMEJBR2J0Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQXNELElBQXRELENBSGE7QUFBQTtBQUFBLE1BRzlCc0IsSUFIOEI7QUFBQSxNQUd4QkMsT0FId0I7O0FBSXJDeEIsOENBQUssQ0FBQ1UsU0FBTixDQUFnQixZQUFNO0FBQ3BCZSxtRUFBVSxHQUFHQyxJQUFiO0FBQUEsbVRBQWtCLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNaQSxDQUFDLEtBQUssSUFETTtBQUFBO0FBQUE7QUFBQTs7QUFFZEMsa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFGYzs7QUFBQTtBQUtWQyxxQkFMVSxHQUtGQyxtREFBQSxDQUFVQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCLENBQXRCLENBQVYsQ0FMRTtBQUFBO0FBQUEsdUJBTUdDLDREQUFPLENBQUNMLEtBQUssQ0FBQ1AsSUFBUCxFQUFzRGEsTUFBTSxDQUFDTixLQUFLLENBQUNPLEdBQVAsQ0FBNUQsQ0FOVjs7QUFBQTtBQU1WdEMsb0JBTlU7QUFPaEJ5Qix1QkFBTyxDQUFDTSxLQUFLLENBQUNQLElBQVAsQ0FBUDs7QUFQZ0Isc0JBUVp4QixJQUFJLENBQUNzQixNQUFMLEtBQWdCLElBUko7QUFBQTtBQUFBO0FBQUE7O0FBU2RDLHlCQUFTLENBQUMsa0JBQUQsQ0FBVDtBQVRjOztBQUFBO0FBWWhCLG9CQUFJUSxLQUFLLENBQUNQLElBQU4sS0FBZSxPQUFuQixFQUE0QjtBQUMxQkgseUJBQU8sQ0FBQ3JCLElBQUksQ0FBQ3VDLElBQU4sQ0FBUDtBQUNELGlCQUZELE1BRU87QUFDTGxCLHlCQUFPLENBQUNyQixJQUFJLENBQUN3QyxJQUFOLENBQVA7QUFDRDs7QUFDRGpCLHlCQUFTLENBQUMsRUFBRCxDQUFUOztBQWpCZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFtQkQsR0FwQkQsRUFvQkcsRUFwQkg7O0FBc0JBLE1BQUl2QixJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQjtBQUFBO0FBQUssZUFBUyxFQUFFYywrREFBTyxDQUFDMkIsSUFBeEI7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFFM0IsK0RBQU8sQ0FBQ0MsU0FBeEI7QUFBQSwrQkFDRSxxRUFBQyx1RUFBRDtBQUFBLG9CQUFnQk87QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVRDs7QUFFRCxNQUFJRSxJQUFJLEtBQUssT0FBVCxJQUFvQkEsSUFBSSxLQUFLLElBQWpDLEVBQXVDO0FBQ3JDLHdCQUNFO0FBQUssZUFBUyxFQUFFViwrREFBTyxDQUFDMkIsSUFBeEI7QUFBQSw4QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFFM0IsK0RBQU8sQ0FBQ0MsU0FBeEI7QUFBQSwrQkFDRSxxRUFBQyx1RUFBRDtBQUFBLG9CQUFnQk87QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQVNFLHFFQUFDLE1BQUQ7QUFBUSxZQUFJLEVBQUV0QjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQWFEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFFYywrREFBTyxDQUFDMkIsSUFBeEI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUU7QUFBSyxlQUFTLEVBQUUzQiwrREFBTyxDQUFDQyxTQUF4QjtBQUFBLDhCQUNFLHFFQUFDLHVFQUFEO0FBQUEsa0JBQWdCTztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFPLG9CQUFZLEVBQUMsWUFBcEI7QUFBaUMsV0FBRyxFQUFFdEIsSUFBdEM7QUFBNEMsZ0JBQVEsTUFBcEQ7QUFBcUQsZ0JBQVEsTUFBN0Q7QUFBOEQscUJBQWEsRUFBRSx1QkFBQzBDLENBQUQsRUFBTztBQUNsRkEsV0FBQyxDQUFDQyxjQUFGO0FBQ0QsU0FGRDtBQUVHLGlCQUFTLEVBQUU3QiwrREFBTyxDQUFDOEI7QUFGdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBdEVEOztJQUFNeEIsVTs7TUFBQUEsVTtBQXlFU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9maWxlcy92aWV3ZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vLi4vc3R5bGVzL2ZpbGUubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtnZXRGaWxlLCBpc0xvZ2dlZElufSBmcm9tICcuLi8uLi91dGlscy9mZXRjaCc7XG5pbXBvcnQge1NlY3Rpb25IZWFkZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQgKiBhcyBxcyBmcm9tICdxdWVyeXN0cmluZyc7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbnB1dCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuY29uc3QgUGRmVmlld2VyID0gZHluYW1pYyhpbXBvcnQoICcuLi8uLi9jb21wb25lbnRzL1BERlZpZXdlcicpLCB7c3NyOiBmYWxzZX0pO1xuXG5cbmNvbnN0IFBkZkJveDogUmVhY3QuRkM8e2ZpbGU6IHN0cmluZ30+ID0gKHtmaWxlfSkgPT4ge1xuICBjb25zdCBbcGRmV2lkdGgsIHNldFdpZHRoXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBjb25zdCBbc2NhbGUsIHNldFNjYWxlXSA9IFJlYWN0LnVzZVN0YXRlKDEuMCk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xuICBjb25zdCBbbWF4UGFnZSwgc2V0TWF4UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgtMSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0V2lkdGgod2luZG93LmlubmVyV2lkdGggPiA4MDAgPyA4MDAgOiB3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uQ29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25IYWxmfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHNldFBhZ2UoKGMpID0+IGMgLSAxIDwgMSA/IDEgOiBjIC0gMSl9PlByZXY8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25IYWxmfT5cbiAgICAgICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHNldFBhZ2UoKGMpID0+IG1heFBhZ2UgPj0gMCAmJiBjICsgMSA+IG1heFBhZ2UgPyBjIDogYyArIDEpfT5OZXh0PC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5maWxlQ29udGFpbmVyfT5cbiAgICAgICAgPFBkZlZpZXdlciBmaWxlPXsnZGF0YTphcHBsaWNhdGlvbi9wZGY7YmFzZTY0LCcgKyBmaWxlfSBwYWdlTnVtYmVyPXtwYWdlfSB3aWR0aD17cGRmV2lkdGh9IHNjYWxlPXtzY2FsZX0gb25SZWFjaE1heD17KCkgPT4ge1xuICAgICAgICAgIHNldE1heFBhZ2UocGFnZSAtIDEpO1xuICAgICAgICAgIHNldFBhZ2UoKGMpID0+IGMgLSAxKTtcbiAgICAgICAgfX0vPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25Db250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbkhhbGZ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkFjdGlvbj17KCkgPT4gc2V0U2NhbGUoKGMpID0+IGMgLyAxLjUgPD0gMS4wID8gMS4wIDogYyAvIDEuNSl9Plpvb20gb3V0PC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uSGFsZn0+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQWN0aW9uPXsoKSA9PiBzZXRTY2FsZSgoYykgPT4gYyAqIDEuNSA+PSAzLjAgPyAzLjAgOiBjICogMS41KX0+Wm9vbSBpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgVmlld2VyUGFnZTogTmV4dFBhZ2U8e30+ID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSBSZWFjdC51c2VTdGF0ZTxzdHJpbmc+KG51bGwpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPign6YCa5L+h5LitLi4uJyk7XG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlPCdhYnN0cmFjdCcgfCAncHJlc2VudGF0aW9uJyB8ICdzaG9ydCc+KG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTG9nZ2VkSW4oKS50aGVuKGFzeW5jICh4KSA9PiB7XG4gICAgICBpZiAoeCA9PT0gJ05HJykge1xuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcXMuZGVjb2RlKGxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKSk7XG4gICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShxdWVyeS50eXBlIGFzICdhYnN0cmFjdCcgfCAncHJlc2VudGF0aW9uJyB8ICdzaG9ydCcsIE51bWJlcihxdWVyeS5maWQpKTtcbiAgICAgIHNldFR5cGUocXVlcnkudHlwZSBhcyAnYWJzdHJhY3QnIHwgJ3ByZXNlbnRhdGlvbicgfCAnc2hvcnQnKTtcbiAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ05HJykge1xuICAgICAgICBzZXRTdGF0dXMoJ+ODleOCoeOCpOODq+OBjOimi+OBpOOBi+OCiuOBvuOBm+OCk+OBp+OBl+OBn+OAgicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocXVlcnkudHlwZSAhPT0gJ3Nob3J0Jykge1xuICAgICAgICBzZXRGaWxlKGZpbGUuZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGaWxlKGZpbGUubGluayk7XG4gICAgICB9XG4gICAgICBzZXRTdGF0dXMoJycpO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKGZpbGUgPT09IG51bGwpIHtcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+XG4gICAgICAgICAg56ysMTXlm57plqLmnbHlrabnlJ/noJTnqbboq5bmloforJvmvJTkvJpcbiAgICAgICAgPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyPntzdGF0dXN9PC9TZWN0aW9uSGVhZGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+O1xuICB9XG5cbiAgaWYgKHR5cGUgIT09ICdzaG9ydCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlxuICAgICAgICAgICAg56ysMTXlm57plqLmnbHlrabnlJ/noJTnqbboq5bmloforJvmvJTkvJpcbiAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPFNlY3Rpb25IZWFkZXI+e3N0YXR1c308L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UGRmQm94IGZpbGU9e2ZpbGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIOesrDE15Zue6Zai5p2x5a2m55Sf56CU56m26KuW5paH6Kyb5ryU5LyaXG4gICAgICAgIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlcj57c3RhdHVzfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgPHZpZGVvIGNvbnRyb2xzTGlzdD1cIm5vZG93bmxvYWRcIiBzcmM9e2ZpbGV9IGNvbnRyb2xzIGF1dG9QbGF5IG9uQ29udGV4dE1lbnU9eyhlKSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9fSBjbGFzc05hbWU9e2NsYXNzZXMudmlkZW99PlxuICAgICAgICA8L3ZpZGVvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdlclBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/files/viewer.tsx\n");

/***/ })

})