webpackHotUpdate_N_E("pages/admin/config",{

/***/ "./pages/admin/config.tsx":
/*!********************************!*\
  !*** ./pages/admin/config.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/admin.module.scss */ \"./styles/admin.module.scss\");\n/* harmony import */ var _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SectionHeader */ \"./components/SectionHeader.tsx\");\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ \"./utils/fetch.ts\");\n/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Input */ \"./components/Input.tsx\");\n/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Breadcrumb */ \"./components/Breadcrumb.tsx\");\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/pages/admin/config.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar AdminConfigPage = function AdminConfigPage() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      admin = _React$useState2[0],\n      setAdmin = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      config = _React$useState4[0],\n      setConfig = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isLoggedIn\"])().then( /*#__PURE__*/function () {\n      var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {\n        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!(x === 'NG')) {\n                  _context.next = 3;\n                  break;\n                }\n\n                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));\n                return _context.abrupt(\"return\");\n\n              case 3:\n                Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"isAdmin\"])().then(function (x) {\n                  if (x === 'NG') {\n                    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));\n                    return;\n                  }\n\n                  setAdmin(true);\n                });\n\n              case 4:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }());\n  }, []);\n  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {\n    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__[\"getAdminConfig\"])().then(function (res) {\n      if (res.status === 'NG') {\n        return;\n      }\n\n      setConfig(res.data);\n      console.log(res.data);\n    });\n  }, [admin]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__[\"BreadcrumbBar\"], {\n      crumbs: [['/users', 'ログインユーザー画面'], ['/admin', '管理者画面トップ']]\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_7__[\"SectionHeader\"], {\n        children: \"\\u7BA1\\u7406\\u8005\\u753B\\u9762\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__[\"Button\"], {\n        variable: config.abstractUpload ? 'verify' : 'error',\n        children: [\"\\u4E88\\u7A3F\\u30A2\\u30C3\\u30D7\\u30ED\\u30FC\\u30C9\\u306F\\u73FE\\u5728\", config.abstractUpload ? '許可' : '禁止', \"\\u3055\\u308C\\u3066\\u3044\\u307E\\u3059\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AdminConfigPage, \"Ur2sQucKjDaH8ozmM46G95kLLWw=\");\n\n_c = AdminConfigPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AdminConfigPage);\n\nvar _c;\n\n$RefreshReg$(_c, \"AdminConfigPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY29uZmlnLnRzeD8zMzA2Il0sIm5hbWVzIjpbIkFkbWluQ29uZmlnUGFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhZG1pbiIsInNldEFkbWluIiwiY29uZmlnIiwic2V0Q29uZmlnIiwidXNlRWZmZWN0IiwiaXNMb2dnZWRJbiIsInRoZW4iLCJ4IiwiUm91dGVyIiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzZWFyY2giLCJpc0FkbWluIiwiZ2V0QWRtaW5Db25maWciLCJyZXMiLCJzdGF0dXMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJyb290IiwiY29udGFpbmVyIiwiYWJzdHJhY3RVcGxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsZUFBNkIsR0FBRyxTQUFoQ0EsZUFBZ0MsR0FBTTtBQUFBOztBQUFBLHdCQUNoQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEZ0I7QUFBQTtBQUFBLE1BQ25DQyxLQURtQztBQUFBLE1BQzVCQyxRQUQ0Qjs7QUFBQSx5QkFFZEgsNENBQUssQ0FBQ0MsUUFBTixFQUZjO0FBQUE7QUFBQSxNQUVuQ0csTUFGbUM7QUFBQSxNQUUzQkMsU0FGMkI7O0FBRzFDTCw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLG1FQUFVLEdBQUdDLElBQWI7QUFBQSxrVEFBa0IsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNaQSxDQUFDLEtBQUssSUFETTtBQUFBO0FBQUE7QUFBQTs7QUFFZEMsa0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLHFCQUFxQkMsa0JBQWtCLENBQUNDLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQkQsUUFBUSxDQUFDRSxNQUE5QixDQUFuRDtBQUZjOztBQUFBO0FBS2hCQyw0RUFBTyxHQUFHUixJQUFWLENBQWUsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3BCLHNCQUFJQSxDQUFDLEtBQUssSUFBVixFQUFnQjtBQUNkQyxzRUFBTSxDQUFDQyxJQUFQLENBQVkscUJBQXFCQyxrQkFBa0IsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFULEdBQW9CRCxRQUFRLENBQUNFLE1BQTlCLENBQW5EO0FBQ0E7QUFDRDs7QUFDRFosMEJBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxpQkFORDs7QUFMZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFhRCxHQWRELEVBY0csRUFkSDtBQWdCQUgsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ3BCVyx1RUFBYyxHQUFHVCxJQUFqQixDQUFzQixVQUFDVSxHQUFELEVBQVM7QUFDN0IsVUFBSUEsR0FBRyxDQUFDQyxNQUFKLEtBQWUsSUFBbkIsRUFBeUI7QUFDdkI7QUFDRDs7QUFDRGQsZUFBUyxDQUFDYSxHQUFHLENBQUNFLElBQUwsQ0FBVDtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUosR0FBRyxDQUFDRSxJQUFoQjtBQUNELEtBTkQ7QUFPRCxHQVJELEVBUUcsQ0FBQ2xCLEtBQUQsQ0FSSDtBQVNBLHNCQUNFO0FBQUssYUFBUyxFQUFFcUIsZ0VBQU8sQ0FBQ0MsSUFBeEI7QUFBQSw0QkFDRSxxRUFBQyxxRUFBRDtBQUFlLFlBQU0sRUFBRSxDQUNyQixDQUFDLFFBQUQsRUFBVyxZQUFYLENBRHFCLEVBRXJCLENBQUMsUUFBRCxFQUFXLFVBQVgsQ0FGcUI7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBS0U7QUFBSyxlQUFTLEVBQUVELGdFQUFPLENBQUNFLFNBQXhCO0FBQUEsOEJBQ0UscUVBQUMsdUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFLHFFQUFDLHdEQUFEO0FBQVEsZ0JBQVEsRUFBRXJCLE1BQU0sQ0FBQ3NCLGNBQVAsR0FBd0IsUUFBeEIsR0FBbUMsT0FBckQ7QUFBQSx5RkFBMEV0QixNQUFNLENBQUNzQixjQUFQLEdBQXdCLElBQXhCLEdBQStCLElBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0F4Q0Q7O0dBQU0zQixlOztLQUFBQSxlO0FBMkNTQSw4RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FkbWluL2NvbmZpZy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvYWRtaW4ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtTZWN0aW9uSGVhZGVyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NlY3Rpb25IZWFkZXInO1xuaW1wb3J0IHtpc0xvZ2dlZEluLCBpc0FkbWluLCBnZXRBZG1pbkNvbmZpZ30gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2gnO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IHtCcmVhZGNydW1iQmFyfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0JyZWFkY3J1bWInO1xuaW1wb3J0IHtBZG1pbkNvbmZpZ0RUT30gZnJvbSAnLi4vLi4vLi4vaXBnLWFwaS1zZXJ2ZXIvc3JjL3R5cGVzL2FkbWluLnR5cGVzJztcblxuXG5jb25zdCBBZG1pbkNvbmZpZ1BhZ2U6IE5leHRQYWdlPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW2FkbWluLCBzZXRBZG1pbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtjb25maWcsIHNldENvbmZpZ10gPSBSZWFjdC51c2VTdGF0ZTxBZG1pbkNvbmZpZ0RUTz4oKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc0xvZ2dlZEluKCkudGhlbihhc3luYyAoeCkgPT4ge1xuICAgICAgaWYgKHggPT09ICdORycpIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbj9yZWRpcmVjdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoKSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlzQWRtaW4oKS50aGVuKCh4KSA9PiB7XG4gICAgICAgIGlmICh4ID09PSAnTkcnKSB7XG4gICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbj9yZWRpcmVjdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoKSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldEFkbWluKHRydWUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFkbWluQ29uZmlnKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gJ05HJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRDb25maWcocmVzLmRhdGEpO1xuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgIH0pO1xuICB9LCBbYWRtaW5dKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxCcmVhZGNydW1iQmFyIGNydW1icz17W1xuICAgICAgICBbJy91c2VycycsICfjg63jgrDjgqTjg7Pjg6bjg7zjgrbjg7znlLvpnaInXSxcbiAgICAgICAgWycvYWRtaW4nLCAn566h55CG6ICF55S76Z2i44OI44OD44OXJ10sXG4gICAgICBdfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXI+566h55CG6ICF55S76Z2iPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICA8QnV0dG9uIHZhcmlhYmxlPXtjb25maWcuYWJzdHJhY3RVcGxvYWQgPyAndmVyaWZ5JyA6ICdlcnJvcid9PuS6iOeov+OCouODg+ODl+ODreODvOODieOBr+ePvuWcqHtjb25maWcuYWJzdHJhY3RVcGxvYWQgPyAn6Kix5Y+vJyA6ICfnpoHmraInfeOBleOCjOOBpuOBhOOBvuOBmTwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG47XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluQ29uZmlnUGFnZVxuO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/admin/config.tsx\n");

/***/ })

})