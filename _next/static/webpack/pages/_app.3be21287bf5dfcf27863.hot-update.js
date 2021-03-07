webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/AppHeader.tsx":
/*!**********************************!*\
  !*** ./components/AppHeader.tsx ***!
  \**********************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/AppHeader.module.scss */ "./styles/AppHeader.module.scss");
/* harmony import */ var _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/fetch */ "./utils/fetch.ts");






var _jsxFileName = "/home/mon/workspace/node/ipg_site/ipg-front/components/AppHeader.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var AppHeader = function AppHeader(_ref) {
  _s();

  var locale = _ref.locale;
  var loginMode = locale === '/login';
  var presenterMode = locale === null || locale === void 0 ? void 0 : locale.startsWith('/user');
  var programMode = locale === null || locale === void 0 ? void 0 : locale.startsWith('/program');
  var adminMode = locale === null || locale === void 0 ? void 0 : locale.startsWith('/admin');

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(true),
      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      hidden = _React$useState2[0],
      setHidden = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(0),
      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      reload = _React$useState4[0],
      setReload = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(''),
      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      loc = _React$useState6[0],
      setLocation = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    setLocation(location.href);

    if (loc === undefined) {
      return;
    }

    setReload(Date.now());
  }, [loc]);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__["isLoggedIn"])().then( /*#__PURE__*/function () {
      var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {
        var adminConfig, admin;
        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(x === 'NG')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__["getAdminConfig"])();

              case 4:
                adminConfig = _context.sent;

                if (!(adminConfig.status === 'NG')) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                _context.next = 9;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__["isAdmin"])().then(function (x) {
                  return x === 'OK';
                });

              case 9:
                admin = _context.sent;

                if (!(adminConfig.data.programPage || admin)) {
                  _context.next = 13;
                  break;
                }

                setHidden(false);
                return _context.abrupt("return");

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
    setLocation(location.href);
  }, [reload]);

  if (loginMode) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.userRoot,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,
        children: "\u30ED\u30B0\u30A4\u30F3\u753B\u9762"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerLinkContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,
            children: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u3078"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 26
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this);
  }

  if (adminMode) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.userRoot,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,
        children: "\u7BA1\u7406\u8005\u30D1\u30CD\u30EB"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerLinkContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,
            children: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u3078"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 26
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this);
  }

  if (presenterMode) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.userRoot,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,
        children: "\u7BA1\u7406\u753B\u9762"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerLinkContainer,
        children: [hidden ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/program",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,
            children: "\u7279\u8A2D\u30B5\u30A4\u30C8\u3078"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 51
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,
            children: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u3078"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 26
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this);
  }

  if (programMode) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.userRoot,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: "\u7B2C15\u56DE\u95A2\u6771\u5B66\u751F\u7814\u7A76\u8AD6\u6587\u8B1B\u6F14\u4F1A"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 26
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerLinkContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,
            children: "\u30C8\u30C3\u30D7\u30DA\u30FC\u30B8\u3078"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 26
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerTitle,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: "\u7B2C15\u56DE\u95A2\u6771\u5B66\u751F\u7814\u7A76\u8AD6\u6587\u8B1B\u6F14\u4F1A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 24
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.headerLinkContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        href: "/login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: _styles_AppHeader_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.appHeaderLink,
          children: "\u767A\u8868\u8005\u30FB\u8074\u8B1B\u8005\u30ED\u30B0\u30A4\u30F3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 29
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, _this);
};

_s(AppHeader, "LQVtmnNwQxSGIPMUOBtlDtnTpKE=");

_c = AppHeader;

var _c;

$RefreshReg$(_c, "AppHeader");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BcHBIZWFkZXIudHN4Il0sIm5hbWVzIjpbIkFwcEhlYWRlciIsImxvY2FsZSIsImxvZ2luTW9kZSIsInByZXNlbnRlck1vZGUiLCJzdGFydHNXaXRoIiwicHJvZ3JhbU1vZGUiLCJhZG1pbk1vZGUiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGlkZGVuIiwic2V0SGlkZGVuIiwicmVsb2FkIiwic2V0UmVsb2FkIiwibG9jIiwic2V0TG9jYXRpb24iLCJ1c2VFZmZlY3QiLCJsb2NhdGlvbiIsImhyZWYiLCJ1bmRlZmluZWQiLCJEYXRlIiwibm93IiwiaXNMb2dnZWRJbiIsInRoZW4iLCJ4IiwiZ2V0QWRtaW5Db25maWciLCJhZG1pbkNvbmZpZyIsInN0YXR1cyIsImlzQWRtaW4iLCJhZG1pbiIsImRhdGEiLCJwcm9ncmFtUGFnZSIsImNsYXNzZXMiLCJ1c2VyUm9vdCIsImhlYWRlclRpdGxlIiwiaGVhZGVyTGlua0NvbnRhaW5lciIsImFwcEhlYWRlckxpbmsiLCJyb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsU0FBd0MsR0FBRyxTQUEzQ0EsU0FBMkMsT0FBYztBQUFBOztBQUFBLE1BQVpDLE1BQVksUUFBWkEsTUFBWTtBQUNwRSxNQUFNQyxTQUFTLEdBQUdELE1BQU0sS0FBSyxRQUE3QjtBQUNBLE1BQU1FLGFBQWEsR0FBR0YsTUFBSCxhQUFHQSxNQUFILHVCQUFHQSxNQUFNLENBQUVHLFVBQVIsQ0FBbUIsT0FBbkIsQ0FBdEI7QUFDQSxNQUFNQyxXQUFXLEdBQUdKLE1BQUgsYUFBR0EsTUFBSCx1QkFBR0EsTUFBTSxDQUFFRyxVQUFSLENBQW1CLFVBQW5CLENBQXBCO0FBQ0EsTUFBTUUsU0FBUyxHQUFHTCxNQUFILGFBQUdBLE1BQUgsdUJBQUdBLE1BQU0sQ0FBRUcsVUFBUixDQUFtQixRQUFuQixDQUFs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QUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBRUYsb0VBQU8sQ0FBQ0csbUJBQXhCO0FBQUEsK0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxjQUFJLEVBQUMsR0FBWDtBQUFBLGlDQUFlO0FBQUcscUJBQVMsRUFBRUgsb0VBQU8sQ0FBQ0ksYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBVUQ7O0FBQ0Qsc0JBQ0U7QUFBSyxhQUFTLEVBQUVKLG9FQUFPLENBQUNLLElBQXhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVMLG9FQUFPLENBQUNFLFdBQXhCO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBLCtCQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFRixvRUFBTyxDQUFDRyxtQkFBeEI7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQUEsK0JBQW9CO0FBQUcsbUJBQVMsRUFBRUgsb0VBQU8sQ0FBQ0ksYUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQVVELENBL0ZNOztHQUFNbkMsUzs7S0FBQUEsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjNiZTIxMjg3YmY1ZGZjZjI3ODYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uL3N0eWxlcy9BcHBIZWFkZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtpc0xvZ2dlZEluLCBnZXRBZG1pbkNvbmZpZywgaXNBZG1pbn0gZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xuXG5leHBvcnQgY29uc3QgQXBwSGVhZGVyOiBSZWFjdC5GQzx7IGxvY2FsZT86IHN0cmluZyB9PiA9ICh7bG9jYWxlfSkgPT4ge1xuICBjb25zdCBsb2dpbk1vZGUgPSBsb2NhbGUgPT09ICcvbG9naW4nO1xuICBjb25zdCBwcmVzZW50ZXJNb2RlID0gbG9jYWxlPy5zdGFydHNXaXRoKCcvdXNlcicpO1xuICBjb25zdCBwcm9ncmFtTW9kZSA9IGxvY2FsZT8uc3RhcnRzV2l0aCgnL3Byb2dyYW0nKTtcbiAgY29uc3QgYWRtaW5Nb2RlID0gbG9jYWxlPy5zdGFydHNXaXRoKCcvYWRtaW4nKTtcbiAgY29uc3QgW2hpZGRlbiwgc2V0SGlkZGVuXSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbcmVsb2FkLCBzZXRSZWxvYWRdID0gUmVhY3QudXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtsb2MsIHNldExvY2F0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvY2F0aW9uKGxvY2F0aW9uLmhyZWYpO1xuICAgIGlmIChsb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXRSZWxvYWQoRGF0ZS5ub3coKSk7XG4gIH0sIFtsb2NdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTG9nZ2VkSW4oKS50aGVuKGFzeW5jICh4KSA9PiB7XG4gICAgICBpZiAoeCA9PT0gJ05HJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBhZG1pbkNvbmZpZyA9IGF3YWl0IGdldEFkbWluQ29uZmlnKCk7XG4gICAgICBpZiAoYWRtaW5Db25maWcuc3RhdHVzID09PSAnTkcnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFkbWluID0gYXdhaXQgaXNBZG1pbigpLnRoZW4oKHgpID0+IHggPT09ICdPSycpO1xuICAgICAgaWYgKGFkbWluQ29uZmlnLmRhdGEucHJvZ3JhbVBhZ2UgfHwgYWRtaW4pIHtcbiAgICAgICAgc2V0SGlkZGVuKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldExvY2F0aW9uKGxvY2F0aW9uLmhyZWYpO1xuICB9LCBbcmVsb2FkXSk7XG5cbiAgaWYgKGxvZ2luTW9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyUm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlclRpdGxlfT5cbiAgICAgICAgICDjg63jgrDjgqTjg7PnlLvpnaJcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckxpbmtDb250YWluZXJ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEhlYWRlckxpbmt9PuODiOODg+ODl+ODmuODvOOCuOOBuDwvYT48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChhZG1pbk1vZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlclJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJUaXRsZX0+XG4gICAgICAgICAg566h55CG6ICF44OR44ON44OrXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJMaW5rQ29udGFpbmVyfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBIZWFkZXJMaW5rfT7jg4jjg4Pjg5fjg5rjg7zjgrjjgbg8L2E+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgaWYgKHByZXNlbnRlck1vZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlclJvb3R9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJUaXRsZX0+XG4gICAgICAgICAg566h55CG55S76Z2iXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJMaW5rQ29udGFpbmVyfT5cbiAgICAgICAgICB7aGlkZGVuID8gPD48Lz4gOiA8TGluayBocmVmPVwiL3Byb2dyYW1cIj48YSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwSGVhZGVyTGlua30+54m56Kit44K144Kk44OI44G4PC9hPjwvTGluaz59XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwSGVhZGVyTGlua30+44OI44OD44OX44Oa44O844K444G4PC9hPjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGlmIChwcm9ncmFtTW9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyUm9vdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlclRpdGxlfT5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPuesrDE15Zue6Zai5p2x5a2m55Sf56CU56m26KuW5paH6Kyb5ryU5LyaPC9hPjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlckxpbmtDb250YWluZXJ9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGEgY2xhc3NOYW1lPXtjbGFzc2VzLmFwcEhlYWRlckxpbmt9PuODiOODg+ODl+ODmuODvOOCuOOBuDwvYT48L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyVGl0bGV9PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPuesrDE15Zue6Zai5p2x5a2m55Sf56CU56m26KuW5paH6Kyb5ryU5LyaPC9hPjwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaGVhZGVyTGlua0NvbnRhaW5lcn0+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIj48YSBjbGFzc05hbWU9e2NsYXNzZXMuYXBwSGVhZGVyTGlua30+55m66KGo6ICF44O76IG06Kyb6ICF44Ot44Kw44Kk44OzPC9hPjwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuICA7XG4iXSwic291cmNlUm9vdCI6IiJ9