webpackHotUpdate_N_E("pages/users",{

/***/ "./components/UploadBigButton.tsx":
/*!****************************************!*\
  !*** ./components/UploadBigButton.tsx ***!
  \****************************************/
/*! exports provided: UploadBigButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UploadBigButton\", function() { return UploadBigButton; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/UploadBigButton.module.scss */ \"./styles/UploadBigButton.module.scss\");\n/* harmony import */ var _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/components/UploadBigButton.tsx\",\n    _this = undefined;\n\n\n\nvar UploadBigButton = function UploadBigButton(_ref) {\n  var title = _ref.title,\n      verify = _ref.verify;\n  var classRootName = verify ? _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.verifyRoot : _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.errorRoot;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classRootName,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/imgs/article.svg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: verify ? 'アップロードされています' : 'まだアップロードされていません'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, _this);\n};\n_c = UploadBigButton;\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadBigButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRCaWdCdXR0b24udHN4P2M0OTMiXSwibmFtZXMiOlsiVXBsb2FkQmlnQnV0dG9uIiwidGl0bGUiLCJ2ZXJpZnkiLCJjbGFzc1Jvb3ROYW1lIiwiY2xhc3NlcyIsInZlcmlmeVJvb3QiLCJlcnJvclJvb3QiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsZUFBNEQsR0FBRyxTQUEvREEsZUFBK0QsT0FBcUI7QUFBQSxNQUFuQkMsS0FBbUIsUUFBbkJBLEtBQW1CO0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQy9GLE1BQU1DLGFBQWEsR0FBR0QsTUFBTSxHQUFHRSwwRUFBTyxDQUFDQyxVQUFYLEdBQXdCRCwwRUFBTyxDQUFDRSxTQUE1RDtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFSCxhQUFoQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFFQywwRUFBTyxDQUFDRyxTQUF4QjtBQUFBLDhCQUNFO0FBQUEsa0JBQU1OO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBQztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFLRTtBQUFBLGtCQUFNQyxNQUFNLEdBQUcsY0FBSCxHQUFvQjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FiTTtLQUFNRixlIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9VcGxvYWRCaWdCdXR0b24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uL3N0eWxlcy9VcGxvYWRCaWdCdXR0b24ubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgVXBsb2FkQmlnQnV0dG9uOiBSZWFjdC5GQzx7dGl0bGU6IHN0cmluZywgdmVyaWZ5PzogYm9vbGVhbn0+ID0gKHt0aXRsZSwgdmVyaWZ5fSkgPT4ge1xuICBjb25zdCBjbGFzc1Jvb3ROYW1lID0gdmVyaWZ5ID8gY2xhc3Nlcy52ZXJpZnlSb290IDogY2xhc3Nlcy5lcnJvclJvb3Q7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzUm9vdE5hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdj57dGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1ncy9hcnRpY2xlLnN2Z1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2Pnt2ZXJpZnkgPyAn44Ki44OD44OX44Ot44O844OJ44GV44KM44Gm44GE44G+44GZJyA6ICfjgb7jgaDjgqLjg4Pjg5fjg63jg7zjg4njgZXjgozjgabjgYTjgb7jgZvjgpMnfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UploadBigButton.tsx\n");

/***/ })

})