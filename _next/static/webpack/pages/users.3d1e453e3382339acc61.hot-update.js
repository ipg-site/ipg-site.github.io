webpackHotUpdate_N_E("pages/users",{

/***/ "./components/UploadBigButton.tsx":
/*!****************************************!*\
  !*** ./components/UploadBigButton.tsx ***!
  \****************************************/
/*! exports provided: UploadBigButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UploadBigButton\", function() { return UploadBigButton; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/UploadBigButton.module.scss */ \"./styles/UploadBigButton.module.scss\");\n/* harmony import */ var _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/fetch */ \"./utils/fetch.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/components/UploadBigButton.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar UploadBigButton = function UploadBigButton(_ref) {\n  _s();\n\n  var title = _ref.title,\n      verify = _ref.verify,\n      imgSrc = _ref.imgSrc,\n      mimeType = _ref.mimeType,\n      endpoint = _ref.endpoint,\n      filePath = _ref.filePath,\n      onUpload = _ref.onUpload;\n  var fileInputRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(verify),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      localVerify = _React$useState2[0],\n      setVerify = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState('通信中...'),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      uploadStatus = _React$useState4[0],\n      setStatus = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {\n    setVerify(verify);\n    setStatus(verify ? 'アップロードされています' : 'まだアップロードされていません');\n  }, [verify]);\n  var classRootName = localVerify ? _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.verifyRoot : _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.errorRoot;\n\n  var uploadAction = /*#__PURE__*/function () {\n    var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var res;\n      return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_7__[\"uploadFile\"])(endpoint, event.target.files[0]);\n\n            case 2:\n              res = _context.sent;\n\n              if (res.status === 'OK') {\n                alert('アップロードされました。');\n                setStatus('アップロードされています');\n                setVerify(true);\n                onUpload('OK');\n              } else {\n                if (res.message !== '') {\n                  alert(res.message);\n                } else {\n                  alert('アップロードに失敗しました。ファイルサイズの確認とファイル形式の確認をしてください。');\n                }\n\n                setStatus('アップロードに失敗しました');\n                onUpload('NG');\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function uploadAction(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classRootName,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: localVerify ? _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.link : '',\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: filePath,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            children: title\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: function onClick() {\n          fileInputRef.current.click();\n        },\n        children: imgSrc ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: imgSrc\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 11\n        }, _this) : ''\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          ref: fileInputRef,\n          type: \"file\",\n          accept: mimeType,\n          onChange: function onChange(e) {\n            if (e.target.files.length === 0) {\n              return;\n            }\n\n            setStatus('アップロード中です...');\n            uploadAction(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 15\n        }, _this), uploadStatus]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UploadBigButton, \"tvN2JqdLV+hhLkJifs0ck175qTA=\");\n\n_c = UploadBigButton;\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadBigButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRCaWdCdXR0b24udHN4P2M0OTMiXSwibmFtZXMiOlsiVXBsb2FkQmlnQnV0dG9uIiwidGl0bGUiLCJ2ZXJpZnkiLCJpbWdTcmMiLCJtaW1lVHlwZSIsImVuZHBvaW50IiwiZmlsZVBhdGgiLCJvblVwbG9hZCIsImZpbGVJbnB1dFJlZiIsIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJsb2NhbFZlcmlmeSIsInNldFZlcmlmeSIsInVwbG9hZFN0YXR1cyIsInNldFN0YXR1cyIsInVzZUVmZmVjdCIsImNsYXNzUm9vdE5hbWUiLCJjbGFzc2VzIiwidmVyaWZ5Um9vdCIsImVycm9yUm9vdCIsInVwbG9hZEFjdGlvbiIsImV2ZW50IiwidXBsb2FkRmlsZSIsInRhcmdldCIsImZpbGVzIiwicmVzIiwic3RhdHVzIiwiYWxlcnQiLCJtZXNzYWdlIiwiY29udGFpbmVyIiwibGluayIsImN1cnJlbnQiLCJjbGljayIsImUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZUFBcU0sR0FBRyxTQUF4TUEsZUFBd00sT0FBcUU7QUFBQTs7QUFBQSxNQUFuRUMsS0FBbUUsUUFBbkVBLEtBQW1FO0FBQUEsTUFBNURDLE1BQTRELFFBQTVEQSxNQUE0RDtBQUFBLE1BQXBEQyxNQUFvRCxRQUFwREEsTUFBb0Q7QUFBQSxNQUE1Q0MsUUFBNEMsUUFBNUNBLFFBQTRDO0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQztBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7QUFDeFIsTUFBTUMsWUFBWSxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQXJCOztBQUR3Uix3QkFFdlBELDRDQUFLLENBQUNFLFFBQU4sQ0FBZVQsTUFBZixDQUZ1UDtBQUFBO0FBQUEsTUFFalJV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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBeERNOztHQUFNZCxlOztLQUFBQSxlIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9VcGxvYWRCaWdCdXR0b24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuLi9zdHlsZXMvVXBsb2FkQmlnQnV0dG9uLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7dXBsb2FkRmlsZX0gZnJvbSAnLi4vdXRpbHMvZmV0Y2gnO1xuXG5leHBvcnQgY29uc3QgVXBsb2FkQmlnQnV0dG9uOiBSZWFjdC5GQzx7dGl0bGU6IHN0cmluZywgdmVyaWZ5OiBib29sZWFuLCBpbWdTcmM/OiBzdHJpbmcsIG1pbWVUeXBlOiAnYXBwbGljYXRpb24vcGRmJyB8ICd2aWRlby9tcDQnLCBlbmRwb2ludDogc3RyaW5nLCBmaWxlUGF0aDogc3RyaW5nLCBvblVwbG9hZD86IChzdGF0dXM6ICdPSycgfCAnTkcnKSA9PiB2b2lkfT4gPSAoe3RpdGxlLCB2ZXJpZnksIGltZ1NyYywgbWltZVR5cGUsIGVuZHBvaW50LCBmaWxlUGF0aCwgb25VcGxvYWR9KSA9PiB7XG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuICBjb25zdCBbbG9jYWxWZXJpZnksIHNldFZlcmlmeV0gPSBSZWFjdC51c2VTdGF0ZSh2ZXJpZnkpO1xuICBjb25zdCBbdXBsb2FkU3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPign6YCa5L+h5LitLi4uJyk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmVyaWZ5KHZlcmlmeSk7XG4gICAgc2V0U3RhdHVzKHZlcmlmeSA/ICfjgqLjg4Pjg5fjg63jg7zjg4njgZXjgozjgabjgYTjgb7jgZknIDogJ+OBvuOBoOOCouODg+ODl+ODreODvOODieOBleOCjOOBpuOBhOOBvuOBm+OCkycpO1xuICB9LCBbdmVyaWZ5XSk7XG4gIGNvbnN0IGNsYXNzUm9vdE5hbWUgPSBsb2NhbFZlcmlmeSA/IGNsYXNzZXMudmVyaWZ5Um9vdCA6IGNsYXNzZXMuZXJyb3JSb290O1xuICBjb25zdCB1cGxvYWRBY3Rpb24gPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdXBsb2FkRmlsZShlbmRwb2ludCwgZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gJ09LJykge1xuICAgICAgYWxlcnQoJ+OCouODg+ODl+ODreODvOODieOBleOCjOOBvuOBl+OBn+OAgicpO1xuICAgICAgc2V0U3RhdHVzKCfjgqLjg4Pjg5fjg63jg7zjg4njgZXjgozjgabjgYTjgb7jgZknKTtcbiAgICAgIHNldFZlcmlmeSh0cnVlKTtcbiAgICAgIG9uVXBsb2FkKCdPSycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocmVzLm1lc3NhZ2UgIT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KHJlcy5tZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KCfjgqLjg4Pjg5fjg63jg7zjg4njgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg5XjgqHjgqTjg6vjgrXjgqTjgrrjga7norroqo3jgajjg5XjgqHjgqTjg6vlvaLlvI/jga7norroqo3jgpLjgZfjgabjgY/jgaDjgZXjgYTjgIInKTtcbiAgICAgIH1cbiAgICAgIHNldFN0YXR1cygn44Ki44OD44OX44Ot44O844OJ44Gr5aSx5pWX44GX44G+44GX44GfJyk7XG4gICAgICBvblVwbG9hZCgnTkcnKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzUm9vdE5hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xvY2FsVmVyaWZ5ID8gY2xhc3Nlcy5saW5rIDogJyd9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2ZpbGVQYXRofT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgZmlsZUlucHV0UmVmLmN1cnJlbnQuY2xpY2soKTtcbiAgICAgICAgfX0+XG4gICAgICAgICAge2ltZ1NyYyA/IChcbiAgICAgICAgICA8aW1nIHNyYz17aW1nU3JjfSAvPlxuXG4gICAgICAgICAgICApOiAnJ31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGlucHV0IHJlZj17ZmlsZUlucHV0UmVmfSB0eXBlPVwiZmlsZVwiIGFjY2VwdD17bWltZVR5cGV9IG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRTdGF0dXMoJ+OCouODg+ODl+ODreODvOODieS4reOBp+OBmS4uLicpO1xuICAgICAgICAgICAgdXBsb2FkQWN0aW9uKGUpO1xuICAgICAgICAgIH19Lz48YnIgLz5cbiAgICAgICAgICB7dXBsb2FkU3RhdHVzfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UploadBigButton.tsx\n");

/***/ })

})