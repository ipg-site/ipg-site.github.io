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



var parseMarkdownToReactComponent = function parseMarkdownToReactComponent(md) {
  var res = unified__WEBPACK_IMPORTED_MODULE_0___default()().use(remark_parse__WEBPACK_IMPORTED_MODULE_1___default.a).use(remark_react__WEBPACK_IMPORTED_MODULE_2___default.a).processSync(md);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWFya2Rvd24udHMiXSwibmFtZXMiOlsicGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQiLCJtZCIsInJlcyIsInVuaWZpZWQiLCJ1c2UiLCJtZHBhcnNlIiwicjJyIiwicHJvY2Vzc1N5bmMiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsNkJBQTZCLEdBQUcsU0FBaENBLDZCQUFnQyxDQUFDQyxFQUFELEVBQWdCO0FBQzNELE1BQU1DLEdBQUcsR0FBR0MsOENBQU8sR0FDZEMsR0FETyxDQUNIQyxtREFERyxFQUVQRCxHQUZPLENBRUhFLG1EQUZHLEVBR1BDLFdBSE8sQ0FHS04sRUFITCxDQUFaO0FBSUEsU0FBT0MsR0FBRyxDQUFDTSxNQUFYO0FBQ0QsQ0FOTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9ncmFtLmRlM2U5N2RkODgxZTNiMTcyZjg1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pZmllZCBmcm9tICd1bmlmaWVkJztcbmltcG9ydCBtZHBhcnNlIGZyb20gJ3JlbWFyay1wYXJzZSc7XG5pbXBvcnQgcjJyIGZyb20gJ3JlbWFyay1yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBwYXJzZU1hcmtkb3duVG9SZWFjdENvbXBvbmVudCA9IChtZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlcyA9IHVuaWZpZWQoKVxuICAgICAgLnVzZShtZHBhcnNlKVxuICAgICAgLnVzZShyMnIpXG4gICAgICAucHJvY2Vzc1N5bmMobWQpO1xuICByZXR1cm4gcmVzLnJlc3VsdDtcbn1cbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=