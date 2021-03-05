webpackHotUpdate_N_E("pages/program",{

/***/ "./utils/markdown.ts":
/*!***************************!*\
  !*** ./utils/markdown.ts ***!
  \***************************/
/*! exports provided: parseMarkdownToReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMarkdownToReactComponent", function() { return parseMarkdownToReactComponent; });
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remark_parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-react */ "./node_modules/remark-react/index.js");
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MarkdownComponents */ "./components/MarkdownComponents.tsx");




var parseMarkdownToReactComponent = function parseMarkdownToReactComponent(md) {
  console.log(md);
  var res = unified__WEBPACK_IMPORTED_MODULE_0___default()().use(remark_parse__WEBPACK_IMPORTED_MODULE_1___default.a).use(remark_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    remarkReactComponents: {
      h1: _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_3__["ProgramHeader"],
      h2: _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_3__["ProgramSubHeader"]
    }
  }).process(md, function (error, data) {
    if (error) {
      console.error(error);
      throw error;
    }

    return data;
  });
  return res.result;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWFya2Rvd24udHMiXSwibmFtZXMiOlsicGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQiLCJtZCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJ1bmlmaWVkIiwidXNlIiwibWRwYXJzZSIsInIyciIsInJlbWFya1JlYWN0Q29tcG9uZW50cyIsImgxIiwiUHJvZ3JhbUhlYWRlciIsImgyIiwiUHJvZ3JhbVN1YkhlYWRlciIsInByb2Nlc3MiLCJlcnJvciIsImRhdGEiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0MsQ0FBQ0MsRUFBRCxFQUFnQjtBQUMzREMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEVBQVo7QUFDQSxNQUFNRyxHQUFHLEdBQUdDLDhDQUFPLEdBQ2RDLEdBRE8sQ0FDSEMsbURBREcsRUFFUEQsR0FGTyxDQUVIRSxtREFGRyxFQUVFO0FBQ1JDLHlCQUFxQixFQUFFO0FBQ3JCQyxRQUFFLEVBQUVDLDRFQURpQjtBQUVyQkMsUUFBRSxFQUFFQywrRUFBZ0JBO0FBRkM7QUFEZixHQUZGLEVBUVBDLE9BUk8sQ0FRQ2IsRUFSRCxFQVFLLFVBQUNjLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUM1QixRQUFJRCxLQUFKLEVBQVc7QUFDVGIsYUFBTyxDQUFDYSxLQUFSLENBQWNBLEtBQWQ7QUFDQSxZQUFNQSxLQUFOO0FBQ0Q7O0FBQ0QsV0FBT0MsSUFBUDtBQUNELEdBZE8sQ0FBWjtBQWVBLFNBQU9aLEdBQUcsQ0FBQ2EsTUFBWDtBQUNELENBbEJNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2dyYW0uMmE0MjFmODA3M2EwNDY0Y2ZhNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1bmlmaWVkIGZyb20gJ3VuaWZpZWQnO1xuaW1wb3J0IG1kcGFyc2UgZnJvbSAncmVtYXJrLXBhcnNlJztcbmltcG9ydCByMnIgZnJvbSAncmVtYXJrLXJlYWN0JztcbmltcG9ydCB7UHJvZ3JhbUhlYWRlciwgUHJvZ3JhbVN1YkhlYWRlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9NYXJrZG93bkNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgcGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQgPSAobWQ6IHN0cmluZykgPT4ge1xuICBjb25zb2xlLmxvZyhtZCk7XG4gIGNvbnN0IHJlcyA9IHVuaWZpZWQoKVxuICAgICAgLnVzZShtZHBhcnNlKVxuICAgICAgLnVzZShyMnIsIHtcbiAgICAgICAgcmVtYXJrUmVhY3RDb21wb25lbnRzOiB7XG4gICAgICAgICAgaDE6IFByb2dyYW1IZWFkZXIsXG4gICAgICAgICAgaDI6IFByb2dyYW1TdWJIZWFkZXIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnByb2Nlc3MobWQsIChlcnJvciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0pO1xuICByZXR1cm4gcmVzLnJlc3VsdDtcbn1cbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=