webpackHotUpdate_N_E("pages/program/poster1",{

/***/ "./pages/program/poster1.tsx":
/*!***********************************!*\
  !*** ./pages/program/poster1.tsx ***!
  \***********************************/
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
/* harmony import */ var _components_PresentationRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/PresentationRow */ "./components/PresentationRow.tsx");



var _jsxFileName = "/home/mon/workspace/node/ipg_site/ipg-front/pages/program/poster1.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Poster1Page = function Poster1Page() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      auth = _React$useState2[0],
      setAuth = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState([]),
      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      presentationList = _React$useState4[0],
      setList = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_6__["isLoggedIn"])().then(function (res) {
      if (res === 'NG') {
        next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));
      } else {
        setAuth(true);
      }
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_6__["getUserListByType"])('ポスター1').then(function (res) {
      if (res.status === 'NG') {
        alert('一覧の取得に失敗しました。');
      }

      setList(res.data);
    });
  }, [auth]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.leftContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LeftSide__WEBPACK_IMPORTED_MODULE_3__["LeftSide"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.rightContainer,
        children: presentationList === null || presentationList === void 0 ? void 0 : presentationList.map(function (presentation, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PresentationRow__WEBPACK_IMPORTED_MODULE_7__["PresentationRow"], {
            data: presentation
          }, 'presentation-row-' + i, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(Poster1Page, "VDlIEtHIxZzDeZxZXEYKKT6f1Pc=");

_c = Poster1Page;
/* harmony default export */ __webpack_exports__["default"] = (Poster1Page);

var _c;

$RefreshReg$(_c, "Poster1Page");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbS9wb3N0ZXIxLnRzeCJdLCJuYW1lcyI6WyJQb3N0ZXIxUGFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhdXRoIiwic2V0QXV0aCIsInByZXNlbnRhdGlvbkxpc3QiLCJzZXRMaXN0IiwidXNlRWZmZWN0IiwiaXNMb2dnZWRJbiIsInRoZW4iLCJyZXMiLCJSb3V0ZXIiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImdldFVzZXJMaXN0QnlUeXBlIiwic3RhdHVzIiwiYWxlcnQiLCJkYXRhIiwiY2xhc3NlcyIsInJvb3QiLCJjb250YWluZXIiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJtYXAiLCJwcmVzZW50YXRpb24iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBeUIsR0FBRyxTQUE1QkEsV0FBNEIsR0FBSztBQUFBOztBQUFBLHdCQUNiQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURhO0FBQUE7QUFBQSxNQUM5QkMsSUFEOEI7QUFBQSxNQUN4QkMsT0FEd0I7O0FBQUEseUJBRURILDRDQUFLLENBQUNDLFFBQU4sQ0FBa0MsRUFBbEMsQ0FGQztBQUFBO0FBQUEsTUFFOUJHLGdCQUY4QjtBQUFBLE1BRVpDLE9BRlk7O0FBR3JDTCw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLG1FQUFVLEdBQUdDLElBQWIsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ3pCLFVBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2hCQywwREFBTSxDQUFDQyxJQUFQLENBQVkscUJBQXFCQyxrQkFBa0IsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFULEdBQW9CRCxRQUFRLENBQUNFLE1BQTlCLENBQW5EO0FBQ0QsT0FGRCxNQUVPO0FBQ0xaLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVJELEVBUUcsRUFSSDtBQVdBSCw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJVLDBFQUFpQixDQUFDLE9BQUQsQ0FBakIsQ0FBMkJSLElBQTNCLENBQWdDLFVBQUNDLEdBQUQsRUFBUztBQUN2QyxVQUFJQSxHQUFHLENBQUNRLE1BQUosS0FBZSxJQUFuQixFQUF5QjtBQUN2QkMsYUFBSyxDQUFDLGVBQUQsQ0FBTDtBQUNEOztBQUNEYixhQUFPLENBQUNJLEdBQUcsQ0FBQ1UsSUFBTCxDQUFQO0FBQ0QsS0FMRDtBQU1ELEdBUEQsRUFPRyxDQUFDakIsSUFBRCxDQVBIO0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVrQixrRUFBTyxDQUFDQyxJQUF4QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxrRUFBTyxDQUFDRSxTQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUYsa0VBQU8sQ0FBQ0csYUFBeEI7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFSCxrRUFBTyxDQUFDSSxjQUF4QjtBQUFBLGtCQUNHcEIsZ0JBREgsYUFDR0EsZ0JBREgsdUJBQ0dBLGdCQUFnQixDQUFFcUIsR0FBbEIsQ0FBc0IsVUFBQ0MsWUFBRCxFQUFlQyxDQUFmO0FBQUEsOEJBQ3JCLHFFQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUVEO0FBQXZCLGFBQTBDLHNCQUFzQkMsQ0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcUI7QUFBQSxTQUF0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQXJDRDs7R0FBTTVCLFc7O0tBQUFBLFc7QUF1Q1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2dyYW0vcG9zdGVyMS4wNWFhN2Y2OWYxOThlNzQ2MDU5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMZWZ0U2lkZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MZWZ0U2lkZSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvcHJvZ3JhbS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7Z2V0VXNlckxpc3RCeVR5cGUsIGlzTG9nZ2VkSW59IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoJztcbmltcG9ydCB7UHJlc2VudGF0aW9uRFRPfSBmcm9tICcuLi8uLi8uLi9pcGctYXBpLXNlcnZlci9zcmMvdHlwZXMvdXNlci50eXBlcyc7XG5pbXBvcnQge1ByZXNlbnRhdGlvblJvd30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QcmVzZW50YXRpb25Sb3cnO1xuXG5jb25zdCBQb3N0ZXIxUGFnZTogTmV4dFBhZ2U8e30+ID0gKCk9PiB7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3ByZXNlbnRhdGlvbkxpc3QsIHNldExpc3RdID0gUmVhY3QudXNlU3RhdGU8UHJlc2VudGF0aW9uRFRPW10+KFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpc0xvZ2dlZEluKCkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzID09PSAnTkcnKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4/cmVkaXJlY3Q9JyArIGVuY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0QXV0aCh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VyTGlzdEJ5VHlwZSgn44Od44K544K/44O8MScpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09ICdORycpIHtcbiAgICAgICAgYWxlcnQoJ+S4gOimp+OBruWPluW+l+OBq+WkseaVl+OBl+OBvuOBl+OBn+OAgicpO1xuICAgICAgfVxuICAgICAgc2V0TGlzdChyZXMuZGF0YSk7XG4gICAgfSk7XG4gIH0sIFthdXRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRDb250YWluZXJ9PlxuICAgICAgICAgIDxMZWZ0U2lkZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHRDb250YWluZXJ9PlxuICAgICAgICAgIHtwcmVzZW50YXRpb25MaXN0Py5tYXAoKHByZXNlbnRhdGlvbiwgaSkgPT4gKFxuICAgICAgICAgICAgPFByZXNlbnRhdGlvblJvdyBkYXRhPXtwcmVzZW50YXRpb259IGtleT17J3ByZXNlbnRhdGlvbi1yb3ctJyArIGl9Lz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RlcjFQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==