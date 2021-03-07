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

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
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
                } else {
                  setOpen(false);
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
        return;
      }

      setList(res.data);
    });
  }, [auth]);

  if (conferenceOpen === false) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.root,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.leftContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LeftSide__WEBPACK_IMPORTED_MODULE_5__["LeftSide"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rightContainer,
          children: "\u73FE\u5728\u5927\u4F1A\u304C\u958B\u50AC\u3055\u308C\u3066\u3044\u306A\u3044\u305F\u3081\u3001\u30DD\u30B9\u30BF\u30FC\u30BB\u30C3\u30B7\u30E7\u30F3\u306E\u4E00\u89A7\u306E\u53D6\u5F97\u304C\u8A31\u53EF\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.leftContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LeftSide__WEBPACK_IMPORTED_MODULE_5__["LeftSide"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_program_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.rightContainer,
        children: presentationList === null || presentationList === void 0 ? void 0 : presentationList.map(function (presentation, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_PresentationRow__WEBPACK_IMPORTED_MODULE_9__["PresentationRow"], {
            data: presentation
          }, 'presentation-row-' + i, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);
};

_s(Poster1Page, "xDS+aF5pCnCijhxom3d0ybXns2k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZ3JhbS9wb3N0ZXIxLnRzeCJdLCJuYW1lcyI6WyJQb3N0ZXIxUGFnZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJhdXRoIiwic2V0QXV0aCIsInByZXNlbnRhdGlvbkxpc3QiLCJzZXRMaXN0IiwiY29uZmVyZW5jZU9wZW4iLCJzZXRPcGVuIiwidXNlRWZmZWN0IiwiaXNMb2dnZWRJbiIsInRoZW4iLCJyZXMiLCJSb3V0ZXIiLCJwdXNoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInNlYXJjaCIsImdldEFkbWluQ29uZmlnIiwiciIsInN0YXR1cyIsImRhdGEiLCJnZXRVc2VyTGlzdEJ5VHlwZSIsImNsYXNzZXMiLCJyb290IiwiY29udGFpbmVyIiwibGVmdENvbnRhaW5lciIsInJpZ2h0Q29udGFpbmVyIiwibWFwIiwicHJlc2VudGF0aW9uIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsV0FBeUIsR0FBRyxTQUE1QkEsV0FBNEIsR0FBSztBQUFBOztBQUFBLHdCQUNiQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQURhO0FBQUE7QUFBQSxNQUM5QkMsSUFEOEI7QUFBQSxNQUN4QkMsT0FEd0I7O0FBQUEseUJBRURILDRDQUFLLENBQUNDLFFBQU4sQ0FBa0MsRUFBbEMsQ0FGQztBQUFBO0FBQUEsTUFFOUJHLGdCQUY4QjtBQUFBLE1BRVpDLE9BRlk7O0FBQUEseUJBR0hMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBSEc7QUFBQTtBQUFBLE1BRzlCSyxjQUg4QjtBQUFBLE1BR2RDLE9BSGM7O0FBSXJDUCw4Q0FBSyxDQUFDUSxTQUFOLENBQWdCLFlBQU07QUFDcEJDLG1FQUFVLEdBQUdDLElBQWI7QUFBQSxrVEFBa0IsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCLG9CQUFJQSxHQUFHLEtBQUssSUFBWixFQUFrQjtBQUNoQkMsb0VBQU0sQ0FBQ0MsSUFBUCxDQUFZLHFCQUFxQkMsa0JBQWtCLENBQUNDLFFBQVEsQ0FBQ0MsUUFBVCxHQUFvQkQsUUFBUSxDQUFDRSxNQUE5QixDQUFuRDtBQUNELGlCQUZELE1BRU87QUFDTGQseUJBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDs7QUFMZTtBQUFBLHVCQU1BZSxtRUFBYyxFQU5kOztBQUFBO0FBTVZDLGlCQU5VOztBQUFBLHNCQU9aQSxDQUFDLENBQUNDLE1BQUYsS0FBYSxJQVBEO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBVWhCLG9CQUFJRCxDQUFDLENBQUNFLElBQUYsQ0FBT2YsY0FBWCxFQUEyQjtBQUN6QkMseUJBQU8sQ0FBQyxJQUFELENBQVA7QUFDRCxpQkFGRCxNQUVPO0FBQ0xBLHlCQUFPLENBQUMsS0FBRCxDQUFQO0FBQ0Q7O0FBZGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBbEI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQkQsR0FqQkQsRUFpQkcsRUFqQkg7QUFvQkFQLDhDQUFLLENBQUNRLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQmMsMEVBQWlCLENBQUMsT0FBRCxDQUFqQixDQUEyQlosSUFBM0IsQ0FBZ0MsVUFBQ0MsR0FBRCxFQUFTO0FBQ3ZDLFVBQUlBLEdBQUcsQ0FBQ1MsTUFBSixLQUFlLElBQW5CLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBQ0RmLGFBQU8sQ0FBQ00sR0FBRyxDQUFDVSxJQUFMLENBQVA7QUFDRCxLQUxEO0FBTUQsR0FQRCxFQU9HLENBQUNuQixJQUFELENBUEg7O0FBU0EsTUFBSUksY0FBYyxLQUFLLEtBQXZCLEVBQThCO0FBQzVCLHdCQUNFO0FBQUssZUFBUyxFQUFFaUIsa0VBQU8sQ0FBQ0MsSUFBeEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUVELGtFQUFPLENBQUNFLFNBQXhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRixrRUFBTyxDQUFDRyxhQUF4QjtBQUFBLGlDQUNFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFFSCxrRUFBTyxDQUFDSSxjQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFZRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUosa0VBQU8sQ0FBQ0MsSUFBeEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUQsa0VBQU8sQ0FBQ0UsU0FBeEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVGLGtFQUFPLENBQUNHLGFBQXhCO0FBQUEsK0JBQ0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUlFO0FBQUssaUJBQVMsRUFBRUgsa0VBQU8sQ0FBQ0ksY0FBeEI7QUFBQSxrQkFDR3ZCLGdCQURILGFBQ0dBLGdCQURILHVCQUNHQSxnQkFBZ0IsQ0FBRXdCLEdBQWxCLENBQXNCLFVBQUNDLFlBQUQsRUFBZUMsQ0FBZjtBQUFBLDhCQUNyQixxRUFBQywyRUFBRDtBQUFpQixnQkFBSSxFQUFFRDtBQUF2QixhQUEwQyxzQkFBc0JDLENBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRHFCO0FBQUEsU0FBdEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0E5REQ7O0dBQU0vQixXOztLQUFBQSxXO0FBZ0VTQSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9ncmFtL3Bvc3RlcjEuYWE3YTMwYzg1MzVhNTI0MGFhODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dFBhZ2V9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGVmdFNpZGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGVmdFNpZGUnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQge2dldEFkbWluQ29uZmlnLCBnZXRVc2VyTGlzdEJ5VHlwZSwgaXNMb2dnZWRJbn0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2gnO1xuaW1wb3J0IHtQcmVzZW50YXRpb25EVE99IGZyb20gJy4uLy4uLy4uL2lwZy1hcGktc2VydmVyL3NyYy90eXBlcy91c2VyLnR5cGVzJztcbmltcG9ydCB7UHJlc2VudGF0aW9uUm93fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ByZXNlbnRhdGlvblJvdyc7XG5cbmNvbnN0IFBvc3RlcjFQYWdlOiBOZXh0UGFnZTx7fT4gPSAoKT0+IHtcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcHJlc2VudGF0aW9uTGlzdCwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZTxQcmVzZW50YXRpb25EVE9bXT4oW10pO1xuICBjb25zdCBbY29uZmVyZW5jZU9wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNMb2dnZWRJbigpLnRoZW4oYXN5bmMgKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcyA9PT0gJ05HJykge1xuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luP3JlZGlyZWN0PScgKyBlbmNvZGVVUklDb21wb25lbnQobG9jYXRpb24ucGF0aG5hbWUgKyBsb2NhdGlvbi5zZWFyY2gpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEF1dGgodHJ1ZSk7XG4gICAgICB9XG4gICAgICBjb25zdCByID0gYXdhaXQgZ2V0QWRtaW5Db25maWcoKTtcbiAgICAgIGlmIChyLnN0YXR1cyA9PT0gJ05HJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoci5kYXRhLmNvbmZlcmVuY2VPcGVuKSB7XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW10pO1xuXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VyTGlzdEJ5VHlwZSgn44Od44K544K/44O8MScpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09ICdORycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0TGlzdChyZXMuZGF0YSk7XG4gICAgfSk7XG4gIH0sIFthdXRoXSk7XG5cbiAgaWYgKGNvbmZlcmVuY2VPcGVuID09PSBmYWxzZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5sZWZ0Q29udGFpbmVyfT5cbiAgICAgICAgICAgIDxMZWZ0U2lkZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJpZ2h0Q29udGFpbmVyfT5cbiAgICAgICAgICAgIOePvuWcqOWkp+S8muOBjOmWi+WCrOOBleOCjOOBpuOBhOOBquOBhOOBn+OCgeOAgeODneOCueOCv+ODvOOCu+ODg+OCt+ODp+ODs+OBruS4gOimp+OBruWPluW+l+OBjOioseWPr+OBleOCjOOBpuOBhOOBvuOBm+OCk+OAglxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGVmdENvbnRhaW5lcn0+XG4gICAgICAgICAgPExlZnRTaWRlIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yaWdodENvbnRhaW5lcn0+XG4gICAgICAgICAge3ByZXNlbnRhdGlvbkxpc3Q/Lm1hcCgocHJlc2VudGF0aW9uLCBpKSA9PiAoXG4gICAgICAgICAgICA8UHJlc2VudGF0aW9uUm93IGRhdGE9e3ByZXNlbnRhdGlvbn0ga2V5PXsncHJlc2VudGF0aW9uLXJvdy0nICsgaX0vPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdGVyMVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9