webpackHotUpdate_N_E("pages/files/viewer",{

/***/ "./pages/files/viewer.tsx":
/*!********************************!*\
  !*** ./pages/files/viewer.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/file.module.scss */ \"./styles/file.module.scss\");\n/* harmony import */ var _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! querystring */ \"./node_modules/querystring-es3/index.js\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/PDFViewer */ \"./components/PDFViewer.tsx\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/files/viewer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar ViewerPage = function ViewerPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(null),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      file = _React$useState2[0],\n      setFile = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState('通信中...'),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      status = _React$useState4[0],\n      setStatus = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_7___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {\n        var query, file;\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login');\n                return _context.abrupt(\"return\");\n\n              case 3:\n                query = querystring__WEBPACK_IMPORTED_MODULE_10__[\"decode\"](location.search.slice(1));\n                _context.next = 6;\n                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getFile\"])(query.type, Number(query.fid));\n\n              case 6:\n                file = _context.sent;\n\n                if (!(file.status === 'NG')) {\n                  _context.next = 10;\n                  break;\n                }\n\n                setStatus('ファイルが見つかりませんでした。');\n                return _context.abrupt(\"return\");\n\n              case 10:\n                console.log(file.data);\n                setFile(file.data);\n                setStatus('');\n\n              case 13:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"\\u7B2C15\\u56DE\\u95A2\\u6771\\u5B66\\u751F\\u7814\\u7A76\\u8AD6\\u6587\\u8B1B\\u6F14\\u4F1A | \\u7BA1\\u7406\\u753B\\u9762\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_9__[\"SectionHeader\"], {\n        children: status\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_file_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.fileContainer,\n      children: file === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_PDFViewer__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        file: 'data:application/pdf;base64,' + file,\n        pageNumber: 1,\n        width: \"auto\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ViewerPage, \"ZH5XsqHS/dijrOiMW8kTXN6eChk=\");\n\n_c = ViewerPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewerPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"ViewerPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeD9hYTQzIl0sIm5hbWVzIjpbIlZpZXdlclBhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiZmlsZSIsInNldEZpbGUiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwidGhlbiIsIngiLCJSb3V0ZXIiLCJwdXNoIiwicXVlcnkiLCJxcyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJnZXRGaWxlIiwidHlwZSIsIk51bWJlciIsImZpZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2xhc3NlcyIsInJvb3QiLCJjb250YWluZXIiLCJmaWxlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQXdCLEdBQUcsU0FBM0JBLFVBQTJCLEdBQU07QUFBQTs7QUFBQSx3QkFDYkMsNENBQUssQ0FBQ0MsUUFBTixDQUF1QixJQUF2QixDQURhO0FBQUE7QUFBQSxNQUM5QkMsSUFEOEI7QUFBQSxNQUN4QkMsT0FEd0I7O0FBQUEseUJBRVRILDRDQUFLLENBQUNDLFFBQU4sQ0FBdUIsUUFBdkIsQ0FGUztBQUFBO0FBQUEsTUFFOUJHLE1BRjhCO0FBQUEsTUFFdEJDLFNBRnNCOztBQUdyQ0wsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxtRUFBVSxHQUFHQyxJQUFiO0FBQUEsa1RBQWtCLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNaQSxDQUFDLEtBQUssSUFETTtBQUFBO0FBQUE7QUFBQTs7QUFFZEMsa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFGYzs7QUFBQTtBQUtWQyxxQkFMVSxHQUtGQyxtREFBQSxDQUFVQyxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLEtBQWhCLENBQXNCLENBQXRCLENBQVYsQ0FMRTtBQUFBO0FBQUEsdUJBTUdDLDREQUFPLENBQUNMLEtBQUssQ0FBQ00sSUFBUCxFQUFzREMsTUFBTSxDQUFDUCxLQUFLLENBQUNRLEdBQVAsQ0FBNUQsQ0FOVjs7QUFBQTtBQU1WbEIsb0JBTlU7O0FBQUEsc0JBT1pBLElBQUksQ0FBQ0UsTUFBTCxLQUFnQixJQVBKO0FBQUE7QUFBQTtBQUFBOztBQVFkQyx5QkFBUyxDQUFDLGtCQUFELENBQVQ7QUFSYzs7QUFBQTtBQVdoQmdCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWXBCLElBQUksQ0FBQ3FCLElBQWpCO0FBQ0FwQix1QkFBTyxDQUFDRCxJQUFJLENBQUNxQixJQUFOLENBQVA7QUFDQWxCLHlCQUFTLENBQUMsRUFBRCxDQUFUOztBQWJnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFsQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWVELEdBaEJELEVBZ0JHLEVBaEJIO0FBa0JBLHNCQUNFO0FBQUssYUFBUyxFQUFFbUIsK0RBQU8sQ0FBQ0MsSUFBeEI7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBTUU7QUFBSyxlQUFTLEVBQUVELCtEQUFPLENBQUNFLFNBQXhCO0FBQUEsNkJBQ0UscUVBQUMsdUVBQUQ7QUFBQSxrQkFBZ0J0QjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GLGVBU0U7QUFBSyxlQUFTLEVBQUVvQiwrREFBTyxDQUFDRyxhQUF4QjtBQUFBLGdCQUNHekIsSUFBSSxLQUFLLElBQVQsZ0JBQWdCLHVKQUFoQixnQkFDQyxxRUFBQyw4REFBRDtBQUFXLFlBQUksRUFBRSxpQ0FBaUNBLElBQWxEO0FBQXdELGtCQUFVLEVBQUUsQ0FBcEU7QUFBdUUsYUFBSyxFQUFDO0FBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQkQsQ0F0Q0Q7O0dBQU1ILFU7O0tBQUFBLFU7QUF5Q1NBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZmlsZXMvdmlld2VyLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4uLy4uL3N0eWxlcy9maWxlLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Z2V0RmlsZSwgaXNMb2dnZWRJbn0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2gnO1xuaW1wb3J0IHtTZWN0aW9uSGVhZGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXInO1xuaW1wb3J0ICogYXMgcXMgZnJvbSAncXVlcnlzdHJpbmcnO1xuaW1wb3J0IFBkZlZpZXdlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1BERlZpZXdlcic7XG5cbmNvbnN0IFZpZXdlclBhZ2U6IE5leHRQYWdlPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPihudWxsKTtcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IFJlYWN0LnVzZVN0YXRlPHN0cmluZz4oJ+mAmuS/oeS4rS4uLicpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTG9nZ2VkSW4oKS50aGVuKGFzeW5jICh4KSA9PiB7XG4gICAgICBpZiAoeCA9PT0gJ05HJykge1xuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHF1ZXJ5ID0gcXMuZGVjb2RlKGxvY2F0aW9uLnNlYXJjaC5zbGljZSgxKSk7XG4gICAgICBjb25zdCBmaWxlID0gYXdhaXQgZ2V0RmlsZShxdWVyeS50eXBlIGFzICdhYnN0cmFjdCcgfCAncHJlc2VudGF0aW9uJyB8ICdzaG9ydCcsIE51bWJlcihxdWVyeS5maWQpKTtcbiAgICAgIGlmIChmaWxlLnN0YXR1cyA9PT0gJ05HJykge1xuICAgICAgICBzZXRTdGF0dXMoJ+ODleOCoeOCpOODq+OBjOimi+OBpOOBi+OCiuOBvuOBm+OCk+OBp+OBl+OBn+OAgicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhmaWxlLmRhdGEpO1xuICAgICAgc2V0RmlsZShmaWxlLmRhdGEpO1xuICAgICAgc2V0U3RhdHVzKCcnKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIOesrDE15Zue6Zai5p2x5a2m55Sf56CU56m26KuW5paH6Kyb5ryU5LyaIHwg566h55CG55S76Z2iXG4gICAgICAgIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8U2VjdGlvbkhlYWRlcj57c3RhdHVzfTwvU2VjdGlvbkhlYWRlcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZmlsZUNvbnRhaW5lcn0+XG4gICAgICAgIHtmaWxlID09PSBudWxsID8gPD48Lz4gOiAoXG4gICAgICAgICAgPFBkZlZpZXdlciBmaWxlPXsnZGF0YTphcHBsaWNhdGlvbi9wZGY7YmFzZTY0LCcgKyBmaWxlfSBwYWdlTnVtYmVyPXsxfSB3aWR0aD1cImF1dG9cIi8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVmlld2VyUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/files/viewer.tsx\n");

/***/ })

})