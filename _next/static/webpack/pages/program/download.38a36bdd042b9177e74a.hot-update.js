webpackHotUpdate_N_E("pages/program/download",{

/***/ "./pages/program/download.tsx":
/*!************************************!*\
  !*** ./pages/program/download.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_LeftSide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LeftSide */ "./components/LeftSide.tsx");
/* harmony import */ var _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/program.module.scss */ "./styles/program.module.scss");
/* harmony import */ var _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/fetch */ "./utils/fetch.ts");



var _jsxFileName = "/home/mon/workspace/node/ipg_site/ipg-front/pages/program/download.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var ProgramPage = function ProgramPage() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      auth = _React$useState2[0],
      setAuth = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_6__["isLoggedIn"])().then(function (res) {
      if (res === 'NG') {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));
      } else {
        setAuth(true);
      }
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {}, [auth]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.leftContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LeftSide__WEBPACK_IMPORTED_MODULE_3__["LeftSide"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rightContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: "\u4E88\u7A3F\u96C6\u3084\u5B66\u4F1A\u306E\u624B\u5F15\u304D\u306A\u3069\u306E\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(ProgramPage, "/3R1aBWZV9p07uOWzLk6Cjp7f6U=");

_c = ProgramPage;
/* harmony default export */ __webpack_exports__["default"] = (ProgramPage);

var _c;

$RefreshReg$(_c, "ProgramPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbS9kb3dubG9hZC50c3giXSwibmFtZXMiOlsiUHJvZ3JhbVBhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiYXV0aCIsInNldEF1dGgiLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwidGhlbiIsInJlcyIsIlJvdXRlciIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwiY2xhc3NlcyIsInJvb3QiLCJjb250YWluZXIiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUF5QixHQUFHLFNBQTVCQSxXQUE0QixHQUFNO0FBQUE7O0FBQUEsd0JBQ2RDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRGM7QUFBQTtBQUFBLE1BQy9CQyxJQUQrQjtBQUFBLE1BQ3pCQyxPQUR5Qjs7QUFFdENILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsbUVBQVUsR0FBR0MsSUFBYixDQUFrQixVQUFDQyxHQUFELEVBQVM7QUFDekIsVUFBSUEsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDaEJDLDBEQUFNLENBQUNDLElBQVAsQ0FBWSxxQkFBcUJDLGtCQUFrQixDQUFDQyxRQUFRLENBQUNDLFFBQVQsR0FBb0JELFFBQVEsQ0FBQ0UsTUFBOUIsQ0FBbkQ7QUFDRCxPQUZELE1BRU87QUFDTFYsZUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEO0FBQ0YsS0FORDtBQU9ELEdBUkQsRUFRRyxFQVJIO0FBV0FILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsWUFBTSxDQUNyQixDQURELEVBQ0csQ0FBQ0YsSUFBRCxDQURIO0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVZLGtFQUFPLENBQUNDLElBQXhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELGtFQUFPLENBQUNFLFNBQXhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFRixrRUFBTyxDQUFDRyxhQUF4QjtBQUFBLCtCQUNFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUVILGtFQUFPLENBQUNJLGNBQXhCO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0E5QkQ7O0dBQU1uQixXOztLQUFBQSxXO0FBZ0NTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9ncmFtL2Rvd25sb2FkLjM4YTM2YmRkMDQyYjkxNzdlNzRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExlZnRTaWRlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MZWZ0U2lkZSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvcHJvZ3JhbS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGlzTG9nZ2VkSW4gfSBmcm9tICcuLi8uLi91dGlscy9mZXRjaCc7XG5cbmNvbnN0IFByb2dyYW1QYWdlOiBOZXh0UGFnZTx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc0xvZ2dlZEluKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzID09PSAnTkcnKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4/cmVkaXJlY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0QXV0aCh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgfSwgW2F1dGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENvbnRhaW5lcn0+XG4gICAgICAgICAgPExlZnRTaWRlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodENvbnRhaW5lcn0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDkuojnqL/pm4bjgoTlrabkvJrjga7miYvlvJXjgY3jgarjganjga7jg5XjgqHjgqTjg6vjgpLjg4Djgqbjg7Pjg63jg7zjg4njgZnjgovjgZPjgajjgYzjgafjgY3jgb7jgZnjgIJcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmFtUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=