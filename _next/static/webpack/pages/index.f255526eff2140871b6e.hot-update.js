webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BigHeader.tsx":
/*!**********************************!*\
  !*** ./components/BigHeader.tsx ***!
  \**********************************/
/*! exports provided: BigHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BigHeader\", function() { return BigHeader; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_BigHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/BigHeader.module.scss */ \"./styles/BigHeader.module.scss\");\n/* harmony import */ var _styles_BigHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_BigHeader_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppHeader */ \"./components/AppHeader.tsx\");\n/* harmony import */ var _MediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaQuery */ \"./components/MediaQuery.tsx\");\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/components/BigHeader.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar BigHeader = function BigHeader(_ref) {\n  _s();\n\n  var locale = _ref.locale,\n      children = _ref.children,\n      header = _ref.header;\n  var letterContainerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);\n  var containerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);\n  var appHeaderRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);\n\n  if (locale) {\n    console.debug(locale);\n  }\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    if ([letterContainerRef.current, containerRef.current, appHeaderRef.current].includes(null)) {\n      return;\n    }\n\n    var moveContainer = function moveContainer() {\n      var ch = letterContainerRef.current.offsetHeight;\n      var offset = 96;\n      var wh = containerRef.current.offsetHeight;\n      var y = window.scrollY;\n      var rr = y / wh;\n      var cy = wh / 2 - ch / 2 + rr * (wh / 2 - ch / 2 - offset);\n      letterContainerRef.current.style.top = String(cy) + 'px';\n\n      if (y >= wh - offset) {\n        appHeaderRef.current.style.transform = 'translateY(0px)';\n      } else {\n        appHeaderRef.current.style.transform = 'translateY(-50vh)';\n      }\n    };\n\n    window.addEventListener('scroll', moveContainer, true);\n    moveContainer();\n    return function () {\n      return window.removeEventListener('scroll', moveContainer, true);\n    };\n  }, [letterContainerRef.current, containerRef.current, appHeaderRef.current]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_BigHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root,\n      ref: containerRef,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_BigHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.headerTitle,\n        ref: letterContainerRef,\n        children: [\"\\u7B2C15\\u56DE\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 17\n        }, _this), \"\\u95A2\\u6771\\u5B66\\u751F\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_MediaQuery__WEBPACK_IMPORTED_MODULE_4__[\"MediaQueryBR\"], {\n          type: \"md\",\n          range: \"down\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 17\n        }, _this), \"\\u7814\\u7A76\\u8AD6\\u6587\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 17\n        }, _this), \"\\u8B1B\\u6F14\\u4F1A\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_BigHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.childrenContainer,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_BigHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.childrenItem,\n          children: children\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      ref: appHeaderRef,\n      className: _styles_BigHeader_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.appHeaderContainer,\n      children: header ? header : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_AppHeader__WEBPACK_IMPORTED_MODULE_3__[\"AppHeader\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 28\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(BigHeader, \"r2uXjBRCdMzIInajrXrzE060fRo=\");\n\n_c = BigHeader;\n\nvar _c;\n\n$RefreshReg$(_c, \"BigHeader\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CaWdIZWFkZXIudHN4Pzc3ZjEiXSwibmFtZXMiOlsiQmlnSGVhZGVyIiwibG9jYWxlIiwiY2hpbGRyZW4iLCJoZWFkZXIiLCJsZXR0ZXJDb250YWluZXJSZWYiLCJSZWFjdCIsInVzZVJlZiIsImNvbnRhaW5lclJlZiIsImFwcEhlYWRlclJlZiIsImNvbnNvbGUiLCJkZWJ1ZyIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJpbmNsdWRlcyIsIm1vdmVDb250YWluZXIiLCJjaCIsIm9mZnNldEhlaWdodCIsIm9mZnNldCIsIndoIiwieSIsIndpbmRvdyIsInNjcm9sbFkiLCJyciIsImN5Iiwic3R5bGUiLCJ0b3AiLCJTdHJpbmciLCJ0cmFuc2Zvcm0iLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNsYXNzZXMiLCJyb290IiwiaGVhZGVyVGl0bGUiLCJjaGlsZHJlbkNvbnRhaW5lciIsImNoaWxkcmVuSXRlbSIsImFwcEhlYWRlckNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1BLFNBQTRELEdBQUcsU0FBL0RBLFNBQStELE9BQWdDO0FBQUE7O0FBQUEsTUFBOUJDLE1BQThCLFFBQTlCQSxNQUE4QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7QUFDMUcsTUFBTUMsa0JBQWtCLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBNkIsSUFBN0IsQ0FBM0I7QUFDQSxNQUFNQyxZQUFZLEdBQUdGLDRDQUFLLENBQUNDLE1BQU4sQ0FBNkIsSUFBN0IsQ0FBckI7QUFDQSxNQUFNRSxZQUFZLEdBQUdILDRDQUFLLENBQUNDLE1BQU4sQ0FBNkIsSUFBN0IsQ0FBckI7O0FBQ0EsTUFBSUwsTUFBSixFQUFZO0FBQ1ZRLFdBQU8sQ0FBQ0MsS0FBUixDQUFjVCxN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QURGO0FBb0JELENBbERNOztHQUFNSCxTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CaWdIZWFkZXIudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uL3N0eWxlcy9CaWdIZWFkZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtBcHBIZWFkZXJ9IGZyb20gJy4vQXBwSGVhZGVyJztcbmltcG9ydCB7TWVkaWFRdWVyeUJSfSBmcm9tICcuL01lZGlhUXVlcnknO1xuXG5leHBvcnQgY29uc3QgQmlnSGVhZGVyOiBSZWFjdC5GQzx7bG9jYWxlPzogc3RyaW5nLCBoZWFkZXI/OiBKU1guRWxlbWVudH0+ID0gKHtsb2NhbGUsIGNoaWxkcmVuLCBoZWFkZXJ9KSA9PiB7XG4gIGNvbnN0IGxldHRlckNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IGFwcEhlYWRlclJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG4gIGlmIChsb2NhbGUpIHtcbiAgICBjb25zb2xlLmRlYnVnKGxvY2FsZSk7XG4gIH1cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoW2xldHRlckNvbnRhaW5lclJlZi5jdXJyZW50LCBjb250YWluZXJSZWYuY3VycmVudCwgYXBwSGVhZGVyUmVmLmN1cnJlbnRdLmluY2x1ZGVzKG51bGwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1vdmVDb250YWluZXIgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjaCA9IGxldHRlckNvbnRhaW5lclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodDtcbiAgICAgIGNvbnN0IG9mZnNldCA9IDk2O1xuICAgICAgY29uc3Qgd2ggPSBjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICBjb25zdCB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgICBjb25zdCByciA9IHkgLyAod2gpO1xuICAgICAgY29uc3QgY3kgPSB3aCAvIDIgLSBjaCAvIDIgKyByciAqICh3aCAvIDIgLSBjaCAvIDIgLSBvZmZzZXQpO1xuICAgICAgbGV0dGVyQ29udGFpbmVyUmVmLmN1cnJlbnQuc3R5bGUudG9wID0gU3RyaW5nKGN5KSArICdweCc7XG5cbiAgICAgIGlmICh5ID49IHdoIC0gb2Zmc2V0KSB7XG4gICAgICAgIGFwcEhlYWRlclJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXBwSGVhZGVyUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLTUwdmgpJztcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBtb3ZlQ29udGFpbmVyLCB0cnVlKTtcbiAgICBtb3ZlQ29udGFpbmVyKCk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBtb3ZlQ29udGFpbmVyLCB0cnVlKTtcbiAgfSwgW2xldHRlckNvbnRhaW5lclJlZi5jdXJyZW50LCBjb250YWluZXJSZWYuY3VycmVudCwgYXBwSGVhZGVyUmVmLmN1cnJlbnRdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gcmVmPXtjb250YWluZXJSZWZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJUaXRsZX0gcmVmPXtsZXR0ZXJDb250YWluZXJSZWZ9PlxuICAgICAgICAgICAg56ysMTXlm548YnIgLz5cbiAgICAgICAgICAgIOmWouadseWtpueUnzxNZWRpYVF1ZXJ5QlIgdHlwZT1cIm1kXCIgcmFuZ2U9XCJkb3duXCIgLz5cbiAgICAgICAgICAgIOeglOeptuirluaWhzxiciAvPlxuICAgICAgICAgICAg6Kyb5ryU5LyaXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlsZHJlbkNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2hpbGRyZW5JdGVtfT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcmVmPXthcHBIZWFkZXJSZWZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hcHBIZWFkZXJDb250YWluZXJ9PlxuICAgICAgICB7aGVhZGVyID8gaGVhZGVyIDogPEFwcEhlYWRlciAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BigHeader.tsx\n");

/***/ })

})