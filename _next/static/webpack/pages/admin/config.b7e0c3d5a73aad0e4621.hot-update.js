webpackHotUpdate_N_E("pages/admin/config",{

/***/ "./pages/admin/config.tsx":
/*!********************************!*\
  !*** ./pages/admin/config.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/admin.module.scss */ "./styles/admin.module.scss");
/* harmony import */ var _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_SectionHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/SectionHeader */ "./components/SectionHeader.tsx");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ "./utils/fetch.ts");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Input */ "./components/Input.tsx");
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Breadcrumb */ "./components/Breadcrumb.tsx");





var _jsxFileName = "/home/mon/workspace/node/ipg_site/ipg-front/pages/admin/config.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var AdminConfigPage = function AdminConfigPage() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(false),
      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      admin = _React$useState2[0],
      setAdmin = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(null),
      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      config = _React$useState4[0],
      setConfig = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(0),
      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      reload = _React$useState6[0],
      setReload = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["isLoggedIn"])().then( /*#__PURE__*/function () {
      var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {
        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(x === 'NG')) {
                  _context.next = 3;
                  break;
                }

                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));
                return _context.abrupt("return");

              case 3:
                Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["isAdmin"])().then(function (x) {
                  if (x === 'NG') {
                    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));
                    return;
                  }

                  setAdmin(true);
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
  }, []);
  react__WEBPACK_IMPORTED_MODULE_6___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["getAdminConfig"])().then(function (res) {
      if (res.status === 'NG') {
        return;
      }

      setConfig(res.data);
      console.log(res.data);
    });
  }, [admin, reload]);

  if (config === null) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbBar"], {
        crumbs: [['/users', 'ログインユーザー画面'], ['/admin', '管理者画面トップ'], ['/admin/config', 'サイト設定']]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
          children: "\u30B5\u30A4\u30C8\u8A2D\u5B9A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbBar"], {
      crumbs: [['/users', 'ログインユーザー画面'], ['/admin', '管理者画面トップ'], ['/admin/config', 'サイト設定']]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_admin_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SectionHeader__WEBPACK_IMPORTED_MODULE_7__["SectionHeader"], {
        children: "\u30B5\u30A4\u30C8\u8A2D\u5B9A"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onAction: function onAction() {
          Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["setAbstractFlag"])().then(function () {
            return setReload(Date.now());
          });
        },
        variable: config.abstractUpload ? 'verify' : 'error',
        children: ["\u4E88\u7A3F\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306F\u73FE\u5728", config.abstractUpload ? '許可' : '禁止', "\u3055\u308C\u3066\u3044\u307E\u3059"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onAction: function onAction() {
          Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["setMovieFlag"])().then(function () {
            return setReload(Date.now());
          });
        },
        variable: config.movieUpload ? 'verify' : 'error',
        children: ["\u52D5\u753B\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306F\u73FE\u5728", config.movieUpload ? '許可' : '禁止', "\u3055\u308C\u3066\u3044\u307E\u3059"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onAction: function onAction() {
          Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["setPresentationFlag"])().then(function () {
            return setReload(Date.now());
          });
        },
        variable: config.presentationUpload ? 'verify' : 'error',
        children: ["\u767A\u8868\u8CC7\u6599\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u306F\u73FE\u5728", config.presentationUpload ? '許可' : '禁止', "\u3055\u308C\u3066\u3044\u307E\u3059"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onAction: function onAction() {
          Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["setRedirectFlag"])().then(function () {
            return setReload(Date.now());
          });
        },
        variable: config.redirect ? 'verify' : 'error',
        children: ["\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u30B5\u30A4\u30C8\u304B\u3089\u306E\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8\u306F\u73FE\u5728\u8A2D\u5B9A\u3055\u308C\u3066", config.redirect ? 'います' : 'いません']
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onAction: function onAction() {
          Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["setProgramPageVisible"])().then(function () {
            return setReload(Date.now());
          });
        },
        variable: config.programPage ? 'verify' : 'error',
        children: ["\u7279\u8A2D\u30B5\u30A4\u30C8\u306F\u73FE\u5728", config.programPage ? '公開' : '非公開', "\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Input__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onAction: function onAction() {
          setConferenceOpen().then(function () {
            return setReload(Date.now());
          });
        },
        variable: config.conferenceOpen ? 'verify' : 'error',
        children: ["\u73FE\u5728\u30B5\u30A4\u30C8\u306F\u5B66\u4F1A\u304C\u958B\u50AC\u3055\u308C\u3066", config.conferenceOpen ? 'いる' : 'いない', "\u72B6\u614B\u306B\u8A2D\u5B9A\u3055\u308C\u3066\u3044\u307E\u3059\u3002"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(AdminConfigPage, "gSgqn0NtjxLcEG6Ll8l0t2ikm0o=");

_c = AdminConfigPage;
/* harmony default export */ __webpack_exports__["default"] = (AdminConfigPage);

var _c;

$RefreshReg$(_c, "AdminConfigPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vY29uZmlnLnRzeCJdLCJuYW1lcyI6WyJBZG1pbkNvbmZpZ1BhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiYWRtaW4iLCJzZXRBZG1pbiIsImNvbmZpZyIsInNldENvbmZpZyIsInJlbG9hZCIsInNldFJlbG9hZCIsInVzZUVmZmVjdCIsImlzTG9nZ2VkSW4iLCJ0aGVuIiwieCIsIlJvdXRlciIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwiaXNBZG1pbiIsImdldEFkbWluQ29uZmlnIiwicmVzIiwic3RhdHVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwicm9vdCIsImNvbnRhaW5lciIsInNldEFic3RyYWN0RmxhZyIsIkRhdGUiLCJub3ciLCJhYnN0cmFjdFVwbG9hZCIsInNldE1vdmllRmxhZyIsIm1vdmllVXBsb2FkIiwic2V0UHJlc2VudGF0aW9uRmxhZyIsInByZXNlbnRhdGlvblVwbG9hZCIsInNldFJlZGlyZWN0RmxhZyIsInJlZGlyZWN0Iiwic2V0UHJvZ3JhbVBhZ2VWaXNpYmxlIiwicHJvZ3JhbVBhZ2UiLCJzZXRDb25mZXJlbmNlT3BlbiIsImNvbmZlcmVuY2VPcGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxlQUE2QixHQUFHLFNBQWhDQSxlQUFnQyxHQUFNO0FBQUE7O0FBQUEsd0JBQ2hCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURnQjtBQUFBO0FBQUEsTUFDbkNDLEtBRG1DO0FBQUEsTUFDNUJDLFFBRDRCOztBQUFBLHlCQUVkSCw0Q0FBSyxDQUFDQyxRQUFOLENBQStCLElBQS9CLENBRmM7QUFBQTtBQUFBLE1BRW5DRyxNQUZtQztBQUFBLE1BRTNCQyxTQUYy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QUFBQSxtTEFFOEVqQyxNQUFNLENBQUNpQyxRQUFQLEdBQWtCLEtBQWxCLEdBQTBCLE1BRnhHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGLGVBY0UscUVBQUMsd0RBQUQ7QUFBUSxnQkFBUSxFQUFFLG9CQUFNO0FBQ3RCQyxvRkFBcUIsR0FBRzVCLElBQXhCLENBQTZCO0FBQUEsbUJBQU1ILFNBQVMsQ0FBQ3NCLElBQUksQ0FBQ0MsR0FBTCxFQUFELENBQWY7QUFBQSxXQUE3QjtBQUNELFNBRkQ7QUFFRyxnQkFBUSxFQUFFMUIsTUFBTSxDQUFDbUMsV0FBUCxHQUFxQixRQUFyQixHQUFnQyxPQUY3QztBQUFBLHVFQUUrRG5DLE1BQU0sQ0FBQ21DLFdBQVAsR0FBcUIsSUFBckIsR0FBNEIsS0FGM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEYsZUFpQkUscUVBQUMsd0RBQUQ7QUFBUSxnQkFBUSxFQUFFLG9CQUFNO0FBQ3RCQywyQkFBaUIsR0FBRzlCLElBQXBCLENBQXlCO0FBQUEsbUJBQU1ILFNBQVMsQ0FBQ3NCLElBQUksQ0FBQ0MsR0FBTCxFQUFELENBQWY7QUFBQSxXQUF6QjtBQUNELFNBRkQ7QUFFRyxnQkFBUSxFQUFFMUIsTUFBTSxDQUFDcUMsY0FBUCxHQUF3QixRQUF4QixHQUFtQyxPQUZoRDtBQUFBLDJHQUV3RXJDLE1BQU0sQ0FBQ3FDLGNBQVAsR0FBd0IsSUFBeEIsR0FBK0IsS0FGdkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBekVEOztHQUFNMUMsZTs7S0FBQUEsZTtBQTRFU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vY29uZmlnLmI3ZTBjM2Q1YTczYWFkMGU0NjIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvYWRtaW4ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1NlY3Rpb25IZWFkZXJ9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2VjdGlvbkhlYWRlcic7XG5pbXBvcnQge2lzTG9nZ2VkSW4sIGlzQWRtaW4sIGdldEFkbWluQ29uZmlnLCBzZXRBYnN0cmFjdEZsYWcsIHNldFByZXNlbnRhdGlvbkZsYWcsIHNldFJlZGlyZWN0RmxhZywgc2V0TW92aWVGbGFnLCBzZXRQcm9ncmFtUGFnZVZpc2libGV9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCB7QnJlYWRjcnVtYkJhcn0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CcmVhZGNydW1iJztcbmltcG9ydCB7QWRtaW5Db25maWdEVE99IGZyb20gJy4uLy4uLy4uL2lwZy1hcGktc2VydmVyL3NyYy90eXBlcy9hZG1pbi50eXBlcyc7XG5cblxuY29uc3QgQWRtaW5Db25maWdQYWdlOiBOZXh0UGFnZTx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFthZG1pbiwgc2V0QWRtaW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29uZmlnLCBzZXRDb25maWddID0gUmVhY3QudXNlU3RhdGU8QWRtaW5Db25maWdEVE8+KG51bGwpO1xuICBjb25zdCBbcmVsb2FkLCBzZXRSZWxvYWRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNMb2dnZWRJbigpLnRoZW4oYXN5bmMgKHgpID0+IHtcbiAgICAgIGlmICh4ID09PSAnTkcnKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4/cmVkaXJlY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpc0FkbWluKCkudGhlbigoeCkgPT4ge1xuICAgICAgICBpZiAoeCA9PT0gJ05HJykge1xuICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4/cmVkaXJlY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCkpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRBZG1pbih0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRBZG1pbkNvbmZpZygpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09ICdORycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0Q29uZmlnKHJlcy5kYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICB9KTtcbiAgfSwgW2FkbWluLCByZWxvYWRdKTtcbiAgaWYgKGNvbmZpZyA9PT0gbnVsbCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPEJyZWFkY3J1bWJCYXIgY3J1bWJzPXtbXG4gICAgICAgICAgWycvdXNlcnMnLCAn44Ot44Kw44Kk44Oz44Om44O844K244O855S76Z2iJ10sXG4gICAgICAgICAgWycvYWRtaW4nLCAn566h55CG6ICF55S76Z2i44OI44OD44OXJ10sXG4gICAgICAgICAgWycvYWRtaW4vY29uZmlnJywgJ+OCteOCpOODiOioreWumiddLFxuICAgICAgICBdfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxTZWN0aW9uSGVhZGVyPuOCteOCpOODiOioreWumjwvU2VjdGlvbkhlYWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QnJlYWRjcnVtYkJhciBjcnVtYnM9e1tcbiAgICAgICAgWycvdXNlcnMnLCAn44Ot44Kw44Kk44Oz44Om44O844K244O855S76Z2iJ10sXG4gICAgICAgIFsnL2FkbWluJywgJ+euoeeQhuiAheeUu+mdouODiOODg+ODlyddLFxuICAgICAgICBbJy9hZG1pbi9jb25maWcnLCAn44K144Kk44OI6Kit5a6aJ10sXG4gICAgICBdfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFNlY3Rpb25IZWFkZXI+44K144Kk44OI6Kit5a6aPC9TZWN0aW9uSGVhZGVyPlxuICAgICAgICA8QnV0dG9uIG9uQWN0aW9uPXsoKSA9PiB7XG4gICAgICAgICAgc2V0QWJzdHJhY3RGbGFnKCkudGhlbigoKSA9PiBzZXRSZWxvYWQoRGF0ZS5ub3coKSkpO1xuICAgICAgICB9fSB2YXJpYWJsZT17Y29uZmlnLmFic3RyYWN0VXBsb2FkID8gJ3ZlcmlmeScgOiAnZXJyb3InfT7kuojnqL/jgqLjg4Pjg5fjg63jg7zjg4njga/nj77lnKh7Y29uZmlnLmFic3RyYWN0VXBsb2FkID8gJ+ioseWPrycgOiAn56aB5q2iJ33jgZXjgozjgabjgYTjgb7jgZk8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBvbkFjdGlvbj17KCkgPT4ge1xuICAgICAgICAgIHNldE1vdmllRmxhZygpLnRoZW4oKCkgPT4gc2V0UmVsb2FkKERhdGUubm93KCkpKTtcbiAgICAgICAgfX0gdmFyaWFibGU9e2NvbmZpZy5tb3ZpZVVwbG9hZCA/ICd2ZXJpZnknIDogJ2Vycm9yJ30+5YuV55S744Ki44OD44OX44Ot44O844OJ44Gv54++5Zyoe2NvbmZpZy5tb3ZpZVVwbG9hZCA/ICfoqLHlj68nIDogJ+emgeatoid944GV44KM44Gm44GE44G+44GZPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHtcbiAgICAgICAgICBzZXRQcmVzZW50YXRpb25GbGFnKCkudGhlbigoKSA9PiBzZXRSZWxvYWQoRGF0ZS5ub3coKSkpO1xuICAgICAgICB9fSB2YXJpYWJsZT17Y29uZmlnLnByZXNlbnRhdGlvblVwbG9hZCA/ICd2ZXJpZnknIDogJ2Vycm9yJ30+55m66KGo6LOH5paZ44Ki44OD44OX44Ot44O844OJ44Gv54++5Zyoe2NvbmZpZy5wcmVzZW50YXRpb25VcGxvYWQgPyAn6Kix5Y+vJyA6ICfnpoHmraInfeOBleOCjOOBpuOBhOOBvuOBmTwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIG9uQWN0aW9uPXsoKSA9PiB7XG4gICAgICAgICAgc2V0UmVkaXJlY3RGbGFnKCkudGhlbigoKSA9PiBzZXRSZWxvYWQoRGF0ZS5ub3coKSkpO1xuICAgICAgICB9fSB2YXJpYWJsZT17Y29uZmlnLnJlZGlyZWN0ID8gJ3ZlcmlmeScgOiAnZXJyb3InfT7jgqLjg4Pjg5fjg63jg7zjg4njgrXjgqTjg4jjgYvjgonjga7jg6rjg4DjgqTjg6zjgq/jg4jjga/nj77lnKjoqK3lrprjgZXjgozjgaZ7Y29uZmlnLnJlZGlyZWN0ID8gJ+OBhOOBvuOBmScgOiAn44GE44G+44Gb44KTJ308L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvbiBvbkFjdGlvbj17KCkgPT4ge1xuICAgICAgICAgIHNldFByb2dyYW1QYWdlVmlzaWJsZSgpLnRoZW4oKCkgPT4gc2V0UmVsb2FkKERhdGUubm93KCkpKTtcbiAgICAgICAgfX0gdmFyaWFibGU9e2NvbmZpZy5wcm9ncmFtUGFnZSA/ICd2ZXJpZnknIDogJ2Vycm9yJ30+54m56Kit44K144Kk44OI44Gv54++5Zyoe2NvbmZpZy5wcm9ncmFtUGFnZSA/ICflhazplosnIDogJ+mdnuWFrOmWiyd944Gr6Kit5a6a44GV44KM44Gm44GE44G+44GZ44CCPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gb25BY3Rpb249eygpID0+IHtcbiAgICAgICAgICBzZXRDb25mZXJlbmNlT3BlbigpLnRoZW4oKCkgPT4gc2V0UmVsb2FkKERhdGUubm93KCkpKTtcbiAgICAgICAgfX0gdmFyaWFibGU9e2NvbmZpZy5jb25mZXJlbmNlT3BlbiA/ICd2ZXJpZnknIDogJ2Vycm9yJ30+54++5Zyo44K144Kk44OI44Gv5a2m5Lya44GM6ZaL5YKs44GV44KM44Gme2NvbmZpZy5jb25mZXJlbmNlT3BlbiA/ICfjgYTjgosnIDogJ+OBhOOBquOBhCd954q25oWL44Gr6Kit5a6a44GV44KM44Gm44GE44G+44GZ44CCPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbjtcblxuZXhwb3J0IGRlZmF1bHQgQWRtaW5Db25maWdQYWdlXG47XG4iXSwic291cmNlUm9vdCI6IiJ9