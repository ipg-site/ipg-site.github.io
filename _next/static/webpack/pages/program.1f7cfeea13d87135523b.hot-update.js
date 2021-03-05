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
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark_parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ "./node_modules/remark-gfm/index.js");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-react */ "./node_modules/remark-react/index.js");
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remark_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MarkdownComponents */ "./components/MarkdownComponents.tsx");







var parseMarkdownToReactComponent = /*#__PURE__*/function () {
  var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(md) {
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              unified__WEBPACK_IMPORTED_MODULE_2___default()().use(remark_parse__WEBPACK_IMPORTED_MODULE_3___default.a).use(remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a).use(remark_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
                remarkReactComponents: {
                  h1: _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_6__["ProgramHeader"],
                  h2: _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_6__["ProgramSubHeader"],
                  table: _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_6__["ProgramTable"]
                }
              }).process(md, function (error, data) {
                if (error) {
                  reject(error);
                }

                resolve(data.result);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function parseMarkdownToReactComponent(_x) {
    return _ref.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWFya2Rvd24udHMiXSwibmFtZXMiOlsicGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQiLCJtZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidW5pZmllZCIsInVzZSIsIm1kcGFyc2UiLCJnZm0iLCJyMnIiLCJyZW1hcmtSZWFjdENvbXBvbmVudHMiLCJoMSIsIlByb2dyYW1IZWFkZXIiLCJoMiIsIlByb2dyYW1TdWJIZWFkZXIiLCJ0YWJsZSIsIlByb2dyYW1UYWJsZSIsInByb2Nlc3MiLCJlcnJvciIsImRhdGEiLCJyZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLDZCQUE2QjtBQUFBLDhTQUFHLGlCQUFPQyxFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FDcEMsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsNERBQU8sR0FDRkMsR0FETCxDQUNTQyxtREFEVCxFQUVLRCxHQUZMLENBRVNFLGlEQUZULEVBR0tGLEdBSEwsQ0FHU0csbURBSFQsRUFHYztBQUNSQyxxQ0FBcUIsRUFBRTtBQUNyQkMsb0JBQUUsRUFBRUMsNEVBRGlCO0FBRXJCQyxvQkFBRSxFQUFFQywrRUFGaUI7QUFHckJDLHVCQUFLLEVBQUVDLDJFQUFZQTtBQUhFO0FBRGYsZUFIZCxFQVVLQyxPQVZMLENBVWFoQixFQVZiLEVBVWlCLFVBQUNpQixLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDNUIsb0JBQUlELEtBQUosRUFBVztBQUNUZCx3QkFBTSxDQUFDYyxLQUFELENBQU47QUFDRDs7QUFDRGYsdUJBQU8sQ0FBQ2dCLElBQUksQ0FBQ0MsTUFBTixDQUFQO0FBQ0QsZUFmTDtBQWdCRCxhQWpCTSxDQURvQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUE3QnBCLDZCQUE2QjtBQUFBO0FBQUE7QUFBQSxHQUFuQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9ncmFtLjFmN2NmZWVhMTNkODcxMzU1MjNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdW5pZmllZCBmcm9tICd1bmlmaWVkJztcbmltcG9ydCBtZHBhcnNlIGZyb20gJ3JlbWFyay1wYXJzZSc7XG5pbXBvcnQgZ2ZtIGZyb20gJ3JlbWFyay1nZm0nO1xuaW1wb3J0IHIyciBmcm9tICdyZW1hcmstcmVhY3QnO1xuaW1wb3J0IHtQcm9ncmFtSGVhZGVyLCBQcm9ncmFtU3ViSGVhZGVyLCBQcm9ncmFtVGFibGV9IGZyb20gJy4uL2NvbXBvbmVudHMvTWFya2Rvd25Db21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IHBhcnNlTWFya2Rvd25Ub1JlYWN0Q29tcG9uZW50ID0gYXN5bmMgKG1kOiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB1bmlmaWVkKClcbiAgICAgICAgLnVzZShtZHBhcnNlKVxuICAgICAgICAudXNlKGdmbSlcbiAgICAgICAgLnVzZShyMnIsIHtcbiAgICAgICAgICByZW1hcmtSZWFjdENvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIGgxOiBQcm9ncmFtSGVhZGVyLFxuICAgICAgICAgICAgaDI6IFByb2dyYW1TdWJIZWFkZXIsXG4gICAgICAgICAgICB0YWJsZTogUHJvZ3JhbVRhYmxlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5wcm9jZXNzKG1kLCAoZXJyb3IsIGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoZGF0YS5yZXN1bHQpO1xuICAgICAgICB9KTtcbiAgfSk7XG59XG47XG4iXSwic291cmNlUm9vdCI6IiJ9