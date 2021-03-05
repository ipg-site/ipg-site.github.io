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
                setPage(programPage);

              case 6:
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
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rightContainer,
        children: programPage ? programPage : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbS9pbmRleC50c3giXSwibmFtZXMiOlsiUHJvZ3JhbVBhZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiYXV0aCIsInNldEF1dGgiLCJwcm9ncmFtUGFnZSIsInNldFBhZ2UiLCJ1c2VFZmZlY3QiLCJpc0xvZ2dlZEluIiwidGhlbiIsInJlcyIsIlJvdXRlciIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwic2VhcmNoIiwiZ2V0UHJvZ3JhbUZpbGUiLCJzdGF0dXMiLCJwYXJzZU1hcmtkb3duVG9SZWFjdENvbXBvbmVudCIsImRhdGEiLCJjbGFzc2VzIiwicm9vdCIsImNvbnRhaW5lciIsImxlZnRDb250YWluZXIiLCJyaWdodENvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQXlCLEdBQUcsU0FBNUJBLFdBQTRCLEdBQU07QUFBQTs7QUFBQSx3QkFDZEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FEYztBQUFBO0FBQUEsTUFDL0JDLElBRCtCO0FBQUEsTUFDekJDLE9BRHlCOztBQUFBLHlCQUVQSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUZPO0FBQUE7QUFBQSxNQUUvQkcsV0FGK0I7QUFBQSxNQUVsQkMsT0FGa0I7O0FBR3RDTCw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLG1FQUFVLEdBQUdDLElBQWIsQ0FBa0IsVUFBQ0MsR0FBRCxFQUFTO0FBQ3pCLFVBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2hCQywwREFBTSxDQUFDQyxJQUFQLENBQVkscUJBQXFCQyxrQkFBa0IsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFULEdBQW9CRCxRQUFRLENBQUNFLE1BQTlCLENBQW5EO0FBQ0QsT0FGRCxNQUVPO0FBQ0xaLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVJELEVBUUcsRUFSSDtBQVdBSCw4Q0FBSyxDQUFDTSxTQUFOLENBQWdCLFlBQU07QUFDcEJVLHVFQUFjLEdBQUdSLElBQWpCO0FBQUEsa1RBQXNCLGlCQUFPQyxHQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUNoQkEsR0FBRyxDQUFDUSxNQUFKLEtBQWUsSUFEQztBQUFBO0FBQUE7QUFBQTs7QUFBQSxpREFFWCxJQUZXOztBQUFBO0FBQUE7QUFBQSx1QkFJTUMscUZBQTZCLENBQUNULEdBQUcsQ0FBQ1UsSUFBTCxDQUpuQzs7QUFBQTtBQUlkZiwyQkFKYztBQUtwQkMsdUJBQU8sQ0FBQ0QsV0FBRCxDQUFQOztBQUxvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9ELEdBUkQsRUFRRyxDQUFDRixJQUFELENBUkg7QUFVQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWtCLGtFQUFPLENBQUNDLElBQXhCO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUVELGtFQUFPLENBQUNFLFNBQXhCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFRixrRUFBTyxDQUFDRyxhQUF4QjtBQUFBLCtCQUNFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUVILGtFQUFPLENBQUNJLGNBQXhCO0FBQUEsa0JBQ0dwQixXQUFXLEdBQUdBLFdBQUgsZ0JBQWlCO0FBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFZRCxDQXBDRDs7R0FBTUwsVzs7S0FBQUEsVztBQXNDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZ3JhbS44NDNjOWI3YWY0ZmI1ZmQyZDVkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMZWZ0U2lkZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MZWZ0U2lkZSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvcHJvZ3JhbS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7Z2V0UHJvZ3JhbUZpbGUsIGlzTG9nZ2VkSW59IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoJztcbmltcG9ydCB7cGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnR9IGZyb20gJy4uLy4uL3V0aWxzL21hcmtkb3duJztcblxuY29uc3QgUHJvZ3JhbVBhZ2U6IE5leHRQYWdlPHt9PiA9ICgpID0+IHtcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJvZ3JhbVBhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNMb2dnZWRJbigpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcyA9PT0gJ05HJykge1xuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luP3JlZGlyZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEF1dGgodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0UHJvZ3JhbUZpbGUoKS50aGVuKGFzeW5jIChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAnTkcnKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgcHJvZ3JhbVBhZ2UgPSBhd2FpdCBwYXJzZU1hcmtkb3duVG9SZWFjdENvbXBvbmVudChyZXMuZGF0YSk7XG4gICAgICBzZXRQYWdlKHByb2dyYW1QYWdlKTtcbiAgICB9KTtcbiAgfSwgW2F1dGhdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENvbnRhaW5lcn0+XG4gICAgICAgICAgPExlZnRTaWRlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodENvbnRhaW5lcn0+XG4gICAgICAgICAge3Byb2dyYW1QYWdlID8gcHJvZ3JhbVBhZ2UgOiA8PjwvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyYW1QYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==