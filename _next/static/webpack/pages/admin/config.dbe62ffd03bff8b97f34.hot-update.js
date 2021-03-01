webpackHotUpdate_N_E("pages/admin/config",{

/***/ "./pages/admin/config.tsx":
/*!********************************!*\
  !*** ./pages/admin/config.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/admin.module.scss */ \"./styles/admin.module.scss\");\n/* harmony import */ var _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.tsx\");\n/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Breadcrumb */ \"./components/Breadcrumb.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/admin/config.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar AdminConfigPage = function AdminConfigPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      admin = _React$useState2[0],\n      setAdmin = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(null),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      config = _React$useState4[0],\n      setConfig = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));\n                return _context.abrupt(\"return\");\n\n              case 3:\n                Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isAdmin\"])().then(function (x) {\n                  if (x === 'NG') {\n                    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));\n                    return;\n                  }\n\n                  setAdmin(true);\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getAdminConfig\"])().then(function (res) {\n      if (res.status === 'NG') {\n        return;\n      }\n\n      setConfig(res.data);\n      console.log(res.data);\n    });\n  }, [admin]);\n\n  if (config === null) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__[\"BreadcrumbBar\"], {\n        crumbs: [['/users', 'ログインユーザー画面'], ['/admin', '管理者画面トップ'], ['/admin/config', 'サイト設定']]\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_7__[\"SectionHeader\"], {\n          children: \"\\u30B5\\u30A4\\u30C8\\u8A2D\\u5B9A\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n          onAction: function onAction() {},\n          variable: config.abstractUpload ? 'verify' : 'error',\n          children: [\"\\u4E88\\u7A3F\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u306F\\u73FE\\u5728\", config.abstractUpload ? '許可' : '禁止', \"\\u3055\\u308C\\u3066\\u3044\\u307E\\u3059\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n          variable: config.movieUpload ? 'verify' : 'error',\n          children: [\"\\u52D5\\u753B\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u306F\\u73FE\\u5728\", config.movieUpload ? '許可' : '禁止', \"\\u3055\\u308C\\u3066\\u3044\\u307E\\u3059\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n          variable: config.presentationUpload ? 'verify' : 'error',\n          children: [\"\\u767A\\u8868\\u8CC7\\u6599\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u306F\\u73FE\\u5728\", config.presentationUpload ? '許可' : '禁止', \"\\u3055\\u308C\\u3066\\u3044\\u307E\\u3059\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n          variable: config.redirect ? 'verify' : 'error',\n          children: [\"\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u30B5\\u30A4\\u30C8\\u304B\\u3089\\u306E\\u30EA\\u30C0\\u30A4\\u30EC\\u30AF\\u30C8\\u306F\\u73FE\\u5728\\u8A2D\\u5B9A\\u3055\\u308C\\u3066\", config.redirect ? 'います' : 'いません']\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__[\"BreadcrumbBar\"], {\n      crumbs: [['/users', 'ログインユーザー画面'], ['/admin', '管理者画面トップ'], ['/admin/config', 'サイト設定']]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_7__[\"SectionHeader\"], {\n        children: \"\\u30B5\\u30A4\\u30C8\\u8A2D\\u5B9A\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        onAction: function onAction() {},\n        variable: config.abstractUpload ? 'verify' : 'error',\n        children: [\"\\u4E88\\u7A3F\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u306F\\u73FE\\u5728\", config.abstractUpload ? '許可' : '禁止', \"\\u3055\\u308C\\u3066\\u3044\\u307E\\u3059\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        variable: config.movieUpload ? 'verify' : 'error',\n        children: [\"\\u52D5\\u753B\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u306F\\u73FE\\u5728\", config.movieUpload ? '許可' : '禁止', \"\\u3055\\u308C\\u3066\\u3044\\u307E\\u3059\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        variable: config.presentationUpload ? 'verify' : 'error',\n        children: [\"\\u767A\\u8868\\u8CC7\\u6599\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u306F\\u73FE\\u5728\", config.presentationUpload ? '許可' : '禁止', \"\\u3055\\u308C\\u3066\\u3044\\u307E\\u3059\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        variable: config.redirect ? 'verify' : 'error',\n        children: [\"\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u30B5\\u30A4\\u30C8\\u304B\\u3089\\u306E\\u30EA\\u30C0\\u30A4\\u30EC\\u30AF\\u30C8\\u306F\\u73FE\\u5728\\u8A2D\\u5B9A\\u3055\\u308C\\u3066\", config.redirect ? 'います' : 'いません']\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AdminConfigPage, \"DEmOKNCkhOz6LEakxevUcNvVAMU=\");\n\n_c = AdminConfigPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminConfigPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AdminConfigPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY29uZmlnLnRzeD8zMzA2Il0sIm5hbWVzIjpbIkFkbWluQ29uZmlnUGFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhZG1pbiIsInNldEFkbWluIiwiY29uZmlnIiwic2V0Q29uZmlnIiwidXNlRWZmZWN0IiwiaXNMb2dnZWRJbiIsInRoZW4iLCJ4IiwiUm91dGVyIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJpc0FkbWluIiwiZ2V0QWRtaW5Db25maWciLCJyZXMiLCJzdGF0dXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJyb290IiwiY29udGFpbmVyIiwiYWJzdHJhY3RVcGxvYWQiLCJtb3ZpZVVwbG9hZCIsInByZXNlbnRhdGlvblVwbG9hZCIsInJlZGlyZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLGVBQTZCLEdBQUcsU0FBaENBLGVBQWdDLEdBQU07QUFBQTs7QUFBQSx3QkFDaEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRGdCO0FBQUE7QUFBQSxNQUNuQ0MsS0FEbUM7QUFBQSxNQUM1QkMsUUFENEI7O0FBQUEseUJBRWRILDRDQUFLLENBQUNDLFFBQU4sQ0FBK0IsSUFBL0IsQ0FGYztBQUFBO0FBQUEsTUFFbkNHLE1BRm1DO0FBQUEsTUFFM0JDLFNBRjJCOztBQUcxQ0wsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxtRUFBVSxHQUFHQyxJQUFiO0FBQUEsa1RBQWtCLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDWkEsQ0FBQyxLQUFLLElBRE07QUFBQTtBQUFBO0FBQUE7O0FBRWRDLGtFQUFNLENBQUNDLElBQVAsQ0FBWSxxQkFBcUJDLGtCQUFrQixDQUFDQyxRQUFRLENBQUNDLFFBQVQsR0FBb0JELFFBQVEsQ0FBQ0UsTUFBOUIsQ0FBbkQ7QUFGYzs7QUFBQTtBQUtoQkMsNEVBQU8sR0FBR1IsSUFBVixDQUFlLFVBQUNDLENBQUQsRUFBTztBQUNwQixzQkFBSUEsQ0FBQyxLQUFLLElBQVYsRUFBZ0I7QUFDZEMsc0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLHFCQUFxQkMsa0JBQWtCLENBQUNDLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQkQsUUFBUSxDQUFDRSxNQUE5QixDQUFuRDtBQUNBO0FBQ0Q7O0FBQ0RaLDBCQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsaUJBTkQ7O0FBTGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUQsR0FkRCxFQWNHLEVBZEg7QUFnQkFILDhDQUFLLENBQUNNLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQlcsdUVBQWMsR0FBR1QsSUFBakIsQ0FBc0IsVUFBQ1UsR0FBRCxFQUFTO0FBQzdCLFVBQUlBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLElBQW5CLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBQ0RkLGVBQVMsQ0FBQ2EsR0FBRyxDQUFDRSxJQUFMLENBQVQ7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlKLEdBQUcsQ0FBQ0UsSUFBaEI7QUFDRCxLQU5EO0FBT0QsR0FSRCxFQVFHLENBQUNsQixLQUFELENBUkg7O0FBU0EsTUFBSUUsTUFBTSxLQUFLLElBQWYsRUFBcUI7QUFDbkIsd0JBRUU7QUFBSyxlQUFTLEVBQUVtQixnRUFBTyxDQUFDQyxJQUF4QjtBQUFBLDhCQUNFLHFFQUFDLHFFQUFEO0FBQWUsY0FBTSxFQUFFLENBQ3JCLENBQUMsUUFBRCxFQUFXLFlBQVgsQ0FEcUIsRUFFckIsQ0FBQyxRQUFELEVBQVcsVUFBWCxDQUZxQixFQUdyQixDQUFDLGVBQUQsRUFBa0IsT0FBbEIsQ0FIcUI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFFRCxnRUFBTyxDQUFDRSxTQUF4QjtBQUFBLGdDQUNFLHFFQUFDLHVFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBUSxrQkFBUSxFQUFFLG9CQUFNLENBRXZCLENBRkQ7QUFFRyxrQkFBUSxFQUFFckIsTUFBTSxDQUFDc0IsY0FBUCxHQUF3QixRQUF4QixHQUFtQyxPQUZoRDtBQUFBLDJGQUVxRXRCLE1BQU0sQ0FBQ3NCLGNBQVAsR0FBd0IsSUFBeEIsR0FBK0IsSUFGcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBS0UscUVBQUMsd0RBQUQ7QUFBUSxrQkFBUSxFQUFFdEIsTUFBTSxDQUFDdUIsV0FBUCxHQUFxQixRQUFyQixHQUFnQyxPQUFsRDtBQUFBLDJGQUF1RXZCLE1BQU0sQ0FBQ3VCLFdBQVAsR0FBcUIsSUFBckIsR0FBNEIsSUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxGLGVBTUUscUVBQUMsd0RBQUQ7QUFBUSxrQkFBUSxFQUFFdkIsTUFBTSxDQUFDd0Isa0JBQVAsR0FBNEIsUUFBNUIsR0FBdUMsT0FBekQ7QUFBQSx1R0FBZ0Z4QixNQUFNLENBQUN3QixrQkFBUCxHQUE0QixJQUE1QixHQUFtQyxJQUFuSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFPRSxxRUFBQyx3REFBRDtBQUFRLGtCQUFRLEVBQUV4QixNQUFNLENBQUN5QixRQUFQLEdBQWtCLFFBQWxCLEdBQTZCLE9BQS9DO0FBQUEscUxBQW1GekIsTUFBTSxDQUFDeUIsUUFBUCxHQUFrQixLQUFsQixHQUEwQixNQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFtQkQ7O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVOLGdFQUFPLENBQUNDLElBQXhCO0FBQUEsNEJBQ0UscUVBQUMscUVBQUQ7QUFBZSxZQUFNLEVBQUUsQ0FDckIsQ0FBQyxRQUFELEVBQVcsWUFBWCxDQURxQixFQUVyQixDQUFDLFFBQUQsRUFBVyxVQUFYLENBRnFCLEVBR3JCLENBQUMsZUFBRCxFQUFrQixPQUFsQixDQUhxQjtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLGVBQVMsRUFBRUQsZ0VBQU8sQ0FBQ0UsU0FBeEI7QUFBQSw4QkFDRSxxRUFBQyx1RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBUSxnQkFBUSxFQUFFLG9CQUFNLENBRXZCLENBRkQ7QUFFRyxnQkFBUSxFQUFFckIsTUFBTSxDQUFDc0IsY0FBUCxHQUF3QixRQUF4QixHQUFtQyxPQUZoRDtBQUFBLHlGQUVxRXRCLE1BQU0sQ0FBQ3NCLGNBQVAsR0FBd0IsSUFBeEIsR0FBK0IsSUFGcEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFLRSxxRUFBQyx3REFBRDtBQUFRLGdCQUFRLEVBQUV0QixNQUFNLENBQUN1QixXQUFQLEdBQXFCLFFBQXJCLEdBQWdDLE9BQWxEO0FBQUEseUZBQXVFdkIsTUFBTSxDQUFDdUIsV0FBUCxHQUFxQixJQUFyQixHQUE0QixJQUFuRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRixlQU1FLHFFQUFDLHdEQUFEO0FBQVEsZ0JBQVEsRUFBRXZCLE1BQU0sQ0FBQ3dCLGtCQUFQLEdBQTRCLFFBQTVCLEdBQXVDLE9BQXpEO0FBQUEscUdBQWdGeEIsTUFBTSxDQUFDd0Isa0JBQVAsR0FBNEIsSUFBNUIsR0FBbUMsSUFBbkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFPRSxxRUFBQyx3REFBRDtBQUFRLGdCQUFRLEVBQUV4QixNQUFNLENBQUN5QixRQUFQLEdBQWtCLFFBQWxCLEdBQTZCLE9BQS9DO0FBQUEsbUxBQW1GekIsTUFBTSxDQUFDeUIsUUFBUCxHQUFrQixLQUFsQixHQUEwQixNQUE3RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQW5FRDs7R0FBTTlCLGU7O0tBQUFBLGU7QUFzRVNBLDhFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYWRtaW4vY29uZmlnLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4uLy4uL3N0eWxlcy9hZG1pbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQge05leHRQYWdlfSBmcm9tICduZXh0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7U2VjdGlvbkhlYWRlcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWN0aW9uSGVhZGVyJztcbmltcG9ydCB7aXNMb2dnZWRJbiwgaXNBZG1pbiwgZ2V0QWRtaW5Db25maWd9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCB7QnJlYWRjcnVtYkJhcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CcmVhZGNydW1iJztcbmltcG9ydCB7QWRtaW5Db25maWdEVE99IGZyb20gJy4uLy4uLy4uL2lwZy1hcGktc2VydmVyL3NyYy90eXBlcy9hZG1pbi50eXBlcyc7XG5cblxuY29uc3QgQWRtaW5Db25maWdQYWdlOiBOZXh0UGFnZTx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFthZG1pbiwgc2V0QWRtaW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8QWRtaW5Db25maWdEVE8+KG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTG9nZ2VkSW4oKS50aGVuKGFzeW5jICh4KSA9PiB7XG4gICAgICBpZiAoeCA9PT0gJ05HJykge1xuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luP3JlZGlyZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaXNBZG1pbigpLnRoZW4oKHgpID0+IHtcbiAgICAgICAgaWYgKHggPT09ICdORycpIHtcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luP3JlZGlyZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0QWRtaW4odHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QWRtaW5Db25maWcoKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAnTkcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldENvbmZpZyhyZXMuZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgfSk7XG4gIH0sIFthZG1pbl0pO1xuICBpZiAoY29uZmlnID09PSBudWxsKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxCcmVhZGNydW1iQmFyIGNydW1icz17W1xuICAgICAgICAgIFsnL3VzZXJzJywgJ+ODreOCsOOCpOODs+ODpuODvOOCtuODvOeUu+mdoiddLFxuICAgICAgICAgIFsnL2FkbWluJywgJ+euoeeQhuiAheeUu+mdouODiOODg+ODlyddLFxuICAgICAgICAgIFsnL2FkbWluL2NvbmZpZycsICfjgrXjgqTjg4joqK3lrponXSxcbiAgICAgICAgXX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8U2VjdGlvbkhlYWRlcj7jgrXjgqTjg4joqK3lrpo8L1NlY3Rpb25IZWFkZXI+XG4gICAgICAgICAgPEJ1dHRvbiBvbkFjdGlvbj17KCkgPT4ge1xuXG4gICAgICAgICAgfX0gdmFyaWFibGU9e2NvbmZpZy5hYnN0cmFjdFVwbG9hZCA/ICd2ZXJpZnknIDogJ2Vycm9yJ30+5LqI56i/44Ki44OD44OX44Ot44O844OJ44Gv54++5Zyoe2NvbmZpZy5hYnN0cmFjdFVwbG9hZCA/ICfoqLHlj68nIDogJ+emgeatoid944GV44KM44Gm44GE44G+44GZPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYWJsZT17Y29uZmlnLm1vdmllVXBsb2FkID8gJ3ZlcmlmeScgOiAnZXJyb3InfT7li5XnlLvjgqLjg4Pjg5fjg63jg7zjg4njga/nj77lnKh7Y29uZmlnLm1vdmllVXBsb2FkID8gJ+ioseWPrycgOiAn56aB5q2iJ33jgZXjgozjgabjgYTjgb7jgZk8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhYmxlPXtjb25maWcucHJlc2VudGF0aW9uVXBsb2FkID8gJ3ZlcmlmeScgOiAnZXJyb3InfT7nmbrooajos4fmlpnjgqLjg4Pjg5fjg63jg7zjg4njga/nj77lnKh7Y29uZmlnLnByZXNlbnRhdGlvblVwbG9hZCA/ICfoqLHlj68nIDogJ+emgeatoid944GV44KM44Gm44GE44G+44GZPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYWJsZT17Y29uZmlnLnJlZGlyZWN0ID8gJ3ZlcmlmeScgOiAnZXJyb3InfT7jgqLjg4Pjg5fjg63jg7zjg4njgrXjgqTjg4jjgYvjgonjga7jg6rjg4DjgqTjg6zjgq/jg4jjga/nj77lnKjoqK3lrprjgZXjgozjgaZ7Y29uZmlnLnJlZGlyZWN0ID8gJ+OBhOOBvuOBmScgOiAn44GE44G+44Gb44KTJ308L0J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QnJlYWRjcnVtYkJhciBjcnVtYnM9e1tcbiAgICAgICAgWycvdXNlcnMnLCAn44Ot44Kw44Kk44Oz44Om44O844K244O855S76Z2iJ10sXG4gICAgICAgIFsnL2FkbWluJywgJ+euoeeQhuiAheeUu+mdouODiOODg+ODlyddLFxuICAgICAgICBbJy9hZG1pbi9jb25maWcnLCAn44K144Kk44OI6Kit5a6aJ10sXG4gICAgICBdfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXI+44K144Kk44OI6Kit5a6aPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICA8QnV0dG9uIG9uQWN0aW9uPXsoKSA9PiB7XG5cbiAgICAgICAgfX0gdmFyaWFibGU9e2NvbmZpZy5hYnN0cmFjdFVwbG9hZCA/ICd2ZXJpZnknIDogJ2Vycm9yJ30+5LqI56i/44Ki44OD44OX44Ot44O844OJ44Gv54++5Zyoe2NvbmZpZy5hYnN0cmFjdFVwbG9hZCA/ICfoqLHlj68nIDogJ+emgeatoid944GV44KM44Gm44GE44G+44GZPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFibGU9e2NvbmZpZy5tb3ZpZVVwbG9hZCA/ICd2ZXJpZnknIDogJ2Vycm9yJ30+5YuV55S744Ki44OD44OX44Ot44O844OJ44Gv54++5Zyoe2NvbmZpZy5tb3ZpZVVwbG9hZCA/ICfoqLHlj68nIDogJ+emgeatoid944GV44KM44Gm44GE44G+44GZPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFibGU9e2NvbmZpZy5wcmVzZW50YXRpb25VcGxvYWQgPyAndmVyaWZ5JyA6ICdlcnJvcid9PueZuuihqOizh+aWmeOCouODg+ODl+ODreODvOODieOBr+ePvuWcqHtjb25maWcucHJlc2VudGF0aW9uVXBsb2FkID8gJ+ioseWPrycgOiAn56aB5q2iJ33jgZXjgozjgabjgYTjgb7jgZk8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYWJsZT17Y29uZmlnLnJlZGlyZWN0ID8gJ3ZlcmlmeScgOiAnZXJyb3InfT7jgqLjg4Pjg5fjg63jg7zjg4njgrXjgqTjg4jjgYvjgonjga7jg6rjg4DjgqTjg6zjgq/jg4jjga/nj77lnKjoqK3lrprjgZXjgozjgaZ7Y29uZmlnLnJlZGlyZWN0ID8gJ+OBhOOBvuOBmScgOiAn44GE44G+44Gb44KTJ308L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuO1xuXG5leHBvcnQgZGVmYXVsdCBBZG1pbkNvbmZpZ1BhZ2VcbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/config.tsx\n");

/***/ })

})