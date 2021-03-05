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
var unified = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");

var mdparse = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");

var r2r = __webpack_require__(/*! remark-react */ "./node_modules/remark-react/index.js");

var parseMarkdownToReactComponent = function parseMarkdownToReactComponent(md) {
  var res = unified().use(mdparse).use(r2r).processSync(md);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWFya2Rvd24udHMiXSwibmFtZXMiOlsidW5pZmllZCIsInJlcXVpcmUiLCJtZHBhcnNlIiwicjJyIiwicGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQiLCJtZCIsInJlcyIsInVzZSIsInByb2Nlc3NTeW5jIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLElBQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyxnREFBRCxDQUF2Qjs7QUFDQSxJQUFNQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsMERBQUQsQ0FBdkI7O0FBQ0EsSUFBTUUsR0FBRyxHQUFHRixtQkFBTyxDQUFDLDBEQUFELENBQW5COztBQUVPLElBQU1HLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0MsQ0FBQ0MsRUFBRCxFQUFnQjtBQUMzRCxNQUFNQyxHQUFHLEdBQUdOLE9BQU8sR0FDZE8sR0FETyxDQUNITCxPQURHLEVBRVBLLEdBRk8sQ0FFSEosR0FGRyxFQUdQSyxXQUhPLENBR0tILEVBSEwsQ0FBWjtBQUlBLFNBQU9DLEdBQUcsQ0FBQ0csTUFBWDtBQUNELENBTk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZ3JhbS4wYjA1MTkzMzhkMjVmNWExNGU4My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdW5pZmllZCA9IHJlcXVpcmUoJ3VuaWZpZWQnKTtcbmNvbnN0IG1kcGFyc2UgPSByZXF1aXJlKCdyZW1hcmstcGFyc2UnKTtcbmNvbnN0IHIyciA9IHJlcXVpcmUoJ3JlbWFyay1yZWFjdCcpO1xuXG5leHBvcnQgY29uc3QgcGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQgPSAobWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCByZXMgPSB1bmlmaWVkKClcbiAgICAgIC51c2UobWRwYXJzZSlcbiAgICAgIC51c2UocjJyKVxuICAgICAgLnByb2Nlc3NTeW5jKG1kKTtcbiAgcmV0dXJuIHJlcy5yZXN1bHQ7XG59XG47XG4iXSwic291cmNlUm9vdCI6IiJ9