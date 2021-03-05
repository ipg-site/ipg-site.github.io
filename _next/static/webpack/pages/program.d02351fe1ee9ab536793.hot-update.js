webpackHotUpdate_N_E("pages/program",{

/***/ "./pages/program/index.tsx":
/*!*********************************!*\
  !*** ./pages/program/index.tsx ***!
  \*********************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LeftSide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/LeftSide */ "./components/LeftSide.tsx");
/* harmony import */ var _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/program.module.scss */ "./styles/program.module.scss");
/* harmony import */ var _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/fetch */ "./utils/fetch.ts");
/* harmony import */ var _utils_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/markdown */ "./utils/markdown.ts");






var _jsxFileName = "/home/mon/workspace/node/ipg_site/ipg-front/pages/program/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var ProgramPage = function ProgramPage() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      auth = _React$useState2[0],
      setAuth = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      programPage = _React$useState4[0],
      setPage = _React$useState4[1];

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["isLoggedIn"])().then(function (res) {
      if (res === 'NG') {
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));
      } else {
        setAuth(true);
      }
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["getProgramFile"])().then( /*#__PURE__*/function () {
      var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(res) {
        var programPage;
        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(res.status === 'NG')) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", null);

              case 2:
                _context.next = 4;
                return Object(_utils_markdown__WEBPACK_IMPORTED_MODULE_9__["parseMarkdownToReactComponent"])(res.data);

              case 4:
                programPage = _context.sent;
                console.log(programPage);
                setPage(programPage);

              case 7:
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
  }, [auth]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.leftContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LeftSide__WEBPACK_IMPORTED_MODULE_5__["LeftSide"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rightContainer,
        children: programPage ? programPage : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(ProgramPage, "1kI7ILcbi3wXUbg2JKEGmeKi/C0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJvZ3JhbVBhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiYXV0aCIsInNldEF1dGgiLCJwcm9ncmFtUGFnZSIsInNldFBhZ2UiLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwidGhlbiIsInJlcyIsIlJvdXRlciIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0UHJvZ3JhbUZpbGUiLCJzdGF0dXMiLCJwYXJzZU1hcmtkb3duVG9SZWFjdENvbXBvbmVudCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NlcyIsInJvb3QiLCJjb250YWluZXIiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUF5QixHQUFHLFNBQTVCQSxXQUE0QixHQUFNO0FBQUE7O0FBQUEsd0JBQ2RDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRGM7QUFBQTtBQUFBLE1BQy9CQyxJQUQrQjtBQUFBLE1BQ3pCQyxPQUR5Qjs7QUFBQSx5QkFFUEgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FGTztBQUFBO0FBQUEsTUFFL0JHLFdBRitCO0FBQUEsTUFFbEJDLE9BRmtCOztBQUd0Q0wsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ3BCQyxtRUFBVSxHQUFHQyxJQUFiLENBQWtCLFVBQUNDLEdBQUQsRUFBUztBQUN6QixVQUFJQSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQkMsMERBQU0sQ0FBQ0MsSUFBUCxDQUFZLHFCQUFxQkMsa0JBQWtCLENBQUNDLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQkQsUUFBUSxDQUFDRSxNQUE5QixDQUFuRDtBQUNELE9BRkQsTUFFTztBQUNMWixlQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0Q7QUFDRixLQU5EO0FBT0QsR0FSRCxFQVFHLEVBUkg7QUFXQUgsOENBQUssQ0FBQ00sU0FBTixDQUFnQixZQUFNO0FBQ3BCVSx1RUFBYyxHQUFHUixJQUFqQjtBQUFBLGtUQUFzQixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDaEJBLEdBQUcsQ0FBQ1EsTUFBSixLQUFlLElBREM7QUFBQTtBQUFBO0FBQUE7O0FBQUEsaURBRVgsSUFGVzs7QUFBQTtBQUFBO0FBQUEsdUJBSU1DLHFGQUE2QixDQUFDVCxHQUFHLENBQUNVLElBQUwsQ0FKbkM7O0FBQUE7QUFJZGYsMkJBSmM7QUFLcEJnQix1QkFBTyxDQUFDQyxHQUFSLENBQVlqQixXQUFaO0FBQ0FDLHVCQUFPLENBQUNELFdBQUQsQ0FBUDs7QUFOb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBdEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRRCxHQVRELEVBU0csQ0FBQ0YsSUFBRCxDQVRIO0FBV0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVvQixrRUFBTyxDQUFDQyxJQUF4QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxrRUFBTyxDQUFDRSxTQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUYsa0VBQU8sQ0FBQ0csYUFBeEI7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFSCxrRUFBTyxDQUFDSSxjQUF4QjtBQUFBLGtCQUNHdEIsV0FBVyxHQUFHQSxXQUFILGdCQUFpQjtBQUQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0FyQ0Q7O0dBQU1MLFc7O0tBQUFBLFc7QUF1Q1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2dyYW0uZDAyMzUxZmUxZWU5YWI1MzY3OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGVmdFNpZGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGVmdFNpZGUnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge2dldFByb2dyYW1GaWxlLCBpc0xvZ2dlZElufSBmcm9tICcuLi8uLi91dGlscy9mZXRjaCc7XG5pbXBvcnQge3BhcnNlTWFya2Rvd25Ub1JlYWN0Q29tcG9uZW50fSBmcm9tICcuLi8uLi91dGlscy9tYXJrZG93bic7XG5cbmNvbnN0IFByb2dyYW1QYWdlOiBOZXh0UGFnZTx7fT4gPSAoKSA9PiB7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Byb2dyYW1QYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlzTG9nZ2VkSW4oKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMgPT09ICdORycpIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbj9yZWRpcmVjdD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLnBhdGhuYW1lICsgbG9jYXRpb24uc2VhcmNoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRBdXRoKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG5cblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldFByb2dyYW1GaWxlKCkudGhlbihhc3luYyAocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gJ05HJykge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb2dyYW1QYWdlID0gYXdhaXQgcGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQocmVzLmRhdGEpO1xuICAgICAgY29uc29sZS5sb2cocHJvZ3JhbVBhZ2UpO1xuICAgICAgc2V0UGFnZShwcm9ncmFtUGFnZSk7XG4gICAgfSk7XG4gIH0sIFthdXRoXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxlZnRDb250YWluZXJ9PlxuICAgICAgICAgIDxMZWZ0U2lkZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucmlnaHRDb250YWluZXJ9PlxuICAgICAgICAgIHtwcm9ncmFtUGFnZSA/IHByb2dyYW1QYWdlIDogPD48Lz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmFtUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=