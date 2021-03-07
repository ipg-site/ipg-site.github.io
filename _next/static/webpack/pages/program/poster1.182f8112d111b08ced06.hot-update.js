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
/* harmony import */ var _components_PresentationRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/PresentationRow */ "./components/PresentationRow.tsx");





var _jsxFileName = "/home/mon/workspace/node/ipg_site/ipg-front/pages/program/poster1.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Poster1Page = function Poster1Page() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      auth = _React$useState2[0],
      setAuth = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState([]),
      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      presentationList = _React$useState4[0],
      setList = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      conferenceOpen = _React$useState6[0],
      setOpen = _React$useState6[1];

  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["isLoggedIn"])().then( /*#__PURE__*/function () {
      var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(res) {
        var r;
        return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (res === 'NG') {
                  next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login?redirect=' + encodeURIComponent(location.pathname + location.search));
                } else {
                  setAuth(true);
                }

                _context.next = 3;
                return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["getAdminConfig"])();

              case 3:
                r = _context.sent;

                if (!(r.status === 'NG')) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                if (r.data.conferenceOpen) {
                  setOpen(true);
                }

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
  }, []);
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_8__["getUserListByType"])('ポスター1').then(function (res) {
      if (res.status === 'NG') {
        alert('一覧の取得に失敗しました。');
      }

      setList(res.data);
    });
  }, [auth]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.leftContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LeftSide__WEBPACK_IMPORTED_MODULE_5__["LeftSide"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rightContainer,
        children: presentationList === null || presentationList === void 0 ? void 0 : presentationList.map(function (presentation, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PresentationRow__WEBPACK_IMPORTED_MODULE_9__["PresentationRow"], {
            data: presentation
          }, 'presentation-row-' + i, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_s(Poster1Page, "95yB5K2x/m8HoEashzO7npaerSo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbS9wb3N0ZXIxLnRzeCJdLCJuYW1lcyI6WyJQb3N0ZXIxUGFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhdXRoIiwic2V0QXV0aCIsInByZXNlbnRhdGlvbkxpc3QiLCJzZXRMaXN0IiwiY29uZmVyZW5jZU9wZW4iLCJzZXRPcGVuIiwidXNlRWZmZWN0IiwiaXNMb2dnZWRJbiIsInRoZW4iLCJyZXMiLCJSb3V0ZXIiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImdldEFkbWluQ29uZmlnIiwiciIsInN0YXR1cyIsImRhdGEiLCJnZXRVc2VyTGlzdEJ5VHlwZSIsImFsZXJ0IiwiY2xhc3NlcyIsInJvb3QiLCJjb250YWluZXIiLCJsZWZ0Q29udGFpbmVyIiwicmlnaHRDb250YWluZXIiLCJtYXAiLCJwcmVzZW50YXRpb24iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxXQUF5QixHQUFHLFNBQTVCQSxXQUE0QixHQUFLO0FBQUE7O0FBQUEsd0JBQ2JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBRGE7QUFBQTtBQUFBLE1BQzlCQyxJQUQ4QjtBQUFBLE1BQ3hCQyxPQUR3Qjs7QUFBQSx5QkFFREgsNENBQUssQ0FBQ0MsUUFBTixDQUFrQyxFQUFsQyxDQUZDO0FBQUE7QUFBQSxNQUU5QkcsZ0JBRjhCO0FBQUEsTUFFWkMsT0FGWTs7QUFBQSx5QkFHSEwsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FIRztBQUFBO0FBQUEsTUFHOUJLLGNBSDhCO0FBQUEsTUFHZEMsT0FIYzs7QUFJckNQLDhDQUFLLENBQUNRLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQkMsbUVBQVUsR0FBR0MsSUFBYjtBQUFBLGtUQUFrQixpQkFBT0MsR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEIsb0JBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2hCQyxvRUFBTSxDQUFDQyxJQUFQLENBQVkscUJBQXFCQyxrQkFBa0IsQ0FBQ0MsUUFBUSxDQUFDQyxRQUFULEdBQW9CRCxRQUFRLENBQUNFLE1BQTlCLENBQW5EO0FBQ0QsaUJBRkQsTUFFTztBQUNMZCx5QkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEOztBQUxlO0FBQUEsdUJBTUFlLG1FQUFjLEVBTmQ7O0FBQUE7QUFNVkMsaUJBTlU7O0FBQUEsc0JBT1pBLENBQUMsQ0FBQ0MsTUFBRixLQUFhLElBUEQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFVaEIsb0JBQUlELENBQUMsQ0FBQ0UsSUFBRixDQUFPZixjQUFYLEVBQTJCO0FBQ3pCQyx5QkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNEOztBQVplO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWxCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBY0QsR0FmRCxFQWVHLEVBZkg7QUFrQkFQLDhDQUFLLENBQUNRLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQmMsMEVBQWlCLENBQUMsT0FBRCxDQUFqQixDQUEyQlosSUFBM0IsQ0FBZ0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZDLFVBQUlBLEdBQUcsQ0FBQ1MsTUFBSixLQUFlLElBQW5CLEVBQXlCO0FBQ3ZCRyxhQUFLLENBQUMsZUFBRCxDQUFMO0FBQ0Q7O0FBQ0RsQixhQUFPLENBQUNNLEdBQUcsQ0FBQ1UsSUFBTCxDQUFQO0FBQ0QsS0FMRDtBQU1ELEdBUEQsRUFPRyxDQUFDbkIsSUFBRCxDQVBIO0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVzQixrRUFBTyxDQUFDQyxJQUF4QjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFRCxrRUFBTyxDQUFDRSxTQUF4QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUYsa0VBQU8sQ0FBQ0csYUFBeEI7QUFBQSwrQkFDRSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFSCxrRUFBTyxDQUFDSSxjQUF4QjtBQUFBLGtCQUNHeEIsZ0JBREgsYUFDR0EsZ0JBREgsdUJBQ0dBLGdCQUFnQixDQUFFeUIsR0FBbEIsQ0FBc0IsVUFBQ0MsWUFBRCxFQUFlQyxDQUFmO0FBQUEsOEJBQ3JCLHFFQUFDLDJFQUFEO0FBQWlCLGdCQUFJLEVBQUVEO0FBQXZCLGFBQTBDLHNCQUFzQkMsQ0FBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEcUI7QUFBQSxTQUF0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQTdDRDs7R0FBTWhDLFc7O0tBQUFBLFc7QUErQ1NBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2dyYW0vcG9zdGVyMS4xODJmODExMmQxMTFiMDhjZWQwNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0UGFnZX0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtMZWZ0U2lkZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MZWZ0U2lkZSc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi8uLi9zdHlsZXMvcHJvZ3JhbS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7Z2V0QWRtaW5Db25maWcsIGdldFVzZXJMaXN0QnlUeXBlLCBpc0xvZ2dlZElufSBmcm9tICcuLi8uLi91dGlscy9mZXRjaCc7XG5pbXBvcnQge1ByZXNlbnRhdGlvbkRUT30gZnJvbSAnLi4vLi4vLi4vaXBnLWFwaS1zZXJ2ZXIvc3JjL3R5cGVzL3VzZXIudHlwZXMnO1xuaW1wb3J0IHtQcmVzZW50YXRpb25Sb3d9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJlc2VudGF0aW9uUm93JztcblxuY29uc3QgUG9zdGVyMVBhZ2U6IE5leHRQYWdlPHt9PiA9ICgpPT4ge1xuICBjb25zdCBbYXV0aCwgc2V0QXV0aF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcmVzZW50YXRpb25MaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlPFByZXNlbnRhdGlvbkRUT1tdPihbXSk7XG4gIGNvbnN0IFtjb25mZXJlbmNlT3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNMb2dnZWRJbigpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcyA9PT0gJ05HJykge1xuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luP3JlZGlyZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEF1dGgodHJ1ZSk7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gYXdhaXQgZ2V0QWRtaW5Db25maWcoKTtcbiAgICAgIGlmIChyLnN0YXR1cyA9PT0gJ05HJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoci5kYXRhLmNvbmZlcmVuY2VPcGVuKSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFtdKTtcblxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlckxpc3RCeVR5cGUoJ+ODneOCueOCv+ODvDEnKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAnTkcnKSB7XG4gICAgICAgIGFsZXJ0KCfkuIDopqfjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ/jgIInKTtcbiAgICAgIH1cbiAgICAgIHNldExpc3QocmVzLmRhdGEpO1xuICAgIH0pO1xuICB9LCBbYXV0aF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q29udGFpbmVyfT5cbiAgICAgICAgICA8TGVmdFNpZGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0Q29udGFpbmVyfT5cbiAgICAgICAgICB7cHJlc2VudGF0aW9uTGlzdD8ubWFwKChwcmVzZW50YXRpb24sIGkpID0+IChcbiAgICAgICAgICAgIDxQcmVzZW50YXRpb25Sb3cgZGF0YT17cHJlc2VudGF0aW9ufSBrZXk9eydwcmVzZW50YXRpb24tcm93LScgKyBpfS8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0ZXIxUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=