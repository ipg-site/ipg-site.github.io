webpackHotUpdate_N_E("pages/users",{

/***/ "./components/UploadBigButton.tsx":
/*!****************************************!*\
  !*** ./components/UploadBigButton.tsx ***!
  \****************************************/
/*! exports provided: UploadBigButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UploadBigButton\", function() { return UploadBigButton; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/UploadBigButton.module.scss */ \"./styles/UploadBigButton.module.scss\");\n/* harmony import */ var _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/fetch */ \"./utils/fetch.ts\");\n\n\n\n\n\nvar _jsxFileName = \"/home/mon/workspace/node/ipg_site/ipg-front/components/UploadBigButton.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar UploadBigButton = function UploadBigButton(_ref) {\n  _s();\n\n  var title = _ref.title,\n      verify = _ref.verify,\n      imgSrc = _ref.imgSrc,\n      mimeType = _ref.mimeType,\n      apiServer = _ref.apiServer,\n      endpoint = _ref.endpoint,\n      filePath = _ref.filePath;\n  var fileInputRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(verify),\n      _React$useState2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState, 2),\n      localVerify = _React$useState2[0],\n      setVerify = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState('通信中...'),\n      _React$useState4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_React$useState3, 2),\n      uploadStatus = _React$useState4[0],\n      setStatus = _React$useState4[1];\n\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {\n    setVerify(verify);\n    setStatus(verify ? 'アップロードされています' : 'まだアップロードされていません');\n  }, [verify]);\n  var classRootName = localVerify ? _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.verifyRoot : _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.errorRoot;\n\n  var uploadAction = /*#__PURE__*/function () {\n    var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var res;\n      return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_6__[\"uploadFile\"])(apiServer, endpoint, event.target.files[0]);\n\n            case 2:\n              res = _context.sent;\n\n              if (res === 'OK') {\n                alert('アップロードされました。');\n                setStatus('アップロードされています');\n                setVerify(true);\n              } else {\n                alert('アップロードに失敗しました。ファイルサイズの確認とファイル形式の確認をしてください。');\n              }\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function uploadAction(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: classRootName,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: localVerify ? _styles_UploadBigButton_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link : '',\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: apiServer + filePath,\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onClick: function onClick() {\n          fileInputRef.current.click();\n        },\n        children: imgSrc ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: imgSrc\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, _this) : ''\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          ref: fileInputRef,\n          type: \"file\",\n          accept: mimeType,\n          onChange: function onChange(e) {\n            if (e.target.files.length === 0) {\n              return;\n            }\n\n            setStatus('アップロード中です...');\n            uploadAction(e);\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }, _this), uploadStatus]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UploadBigButton, \"tvN2JqdLV+hhLkJifs0ck175qTA=\");\n\n_c = UploadBigButton;\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadBigButton\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VcGxvYWRCaWdCdXR0b24udHN4P2M0OTMiXSwibmFtZXMiOlsiVXBsb2FkQmlnQnV0dG9uIiwidGl0bGUiLCJ2ZXJpZnkiLCJpbWdTcmMiLCJtaW1lVHlwZSIsImFwaVNlcnZlciIsImVuZHBvaW50IiwiZmlsZVBhdGgiLCJmaWxlSW5wdXRSZWYiLCJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwibG9jYWxWZXJpZnkiLCJzZXRWZXJpZnkiLCJ1cGxvYWRTdGF0dXMiLCJzZXRTdGF0dXMiLCJ1c2VFZmZlY3QiLCJjbGFzc1Jvb3ROYW1lIiwiY2xhc3NlcyIsInZlcmlmeVJvb3QiLCJlcnJvclJvb3QiLCJ1cGxvYWRBY3Rpb24iLCJldmVudCIsInVwbG9hZEZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlcyIsImFsZXJ0IiwiY29udGFpbmVyIiwibGluayIsImN1cnJlbnQiLCJjbGljayIsImUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxlQUE4SyxHQUFHLFNBQWpMQSxlQUFpTCxPQUFzRTtBQUFBOztBQUFBLE1BQXBFQyxLQUFvRSxRQUFwRUEsS0FBb0U7QUFBQSxNQUE3REMsTUFBNkQsUUFBN0RBLE1BQTZEO0FBQUEsTUFBckRDLE1BQXFELFFBQXJEQSxNQUFxRDtBQUFBLE1BQTdDQyxRQUE2QyxRQUE3Q0EsUUFBNkM7QUFBQSxNQUFuQ0MsU0FBbUMsUUFBbkNBLFNBQW1DO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLFFBQWMsUUFBZEEsUUFBYztBQUNsUSxNQUFNQyxZQUFZLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sRUFBckI7O0FBRGtRLHdCQUVqT0QsNENBQUssQ0FBQ0UsUUFBTixDQUFlVCxNQUFmLENBRmlPO0FBQUE7QUFBQSxNQUUzUFUsV0FGMlA7QUFBQSxNQUU5T0MsU0FGOE87O0FBQUEseUJBR2hPSiw0Q0FBSyxDQUFDRSxRQUFOLENBQXVCLFFBQXZCLENBSGdPO0FBQUE7QUFBQSxNQUczUEcsWUFIMlA7QUFBQSxNQUc3T0MsU0FINk87O0FBSWxRTiw4Q0FBSyxDQUFDTyxTQUFOLENBQWdCLFlBQU07QUFDcEJILGFBQVMsQ0FBQ1gsTUFBRCxDQUFUO0FBQ0FhLGFBQVMsQ0FBQ2IsTUFBTSxHQUFHLGNBQUgsR0FBb0IsaUJBQTNCLENBQVQ7QUFDRCxHQUhELEVBR0csQ0FBQ0EsTUFBRCxDQUhIO0FBSUEsTUFBTWUsYUFBYSxHQUFHTCxXQUFXLEdBQUdNLDBFQUFPLENBQUNDLFVBQVgsR0FBd0JELDBFQUFPLENBQUNFLFNBQWpFOztBQUNBLE1BQU1DLFlBQVk7QUFBQSxpVEFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNEQywrREFBVSxDQUFDbEIsU0FBRCxFQUFZQyxRQUFaLEVBQXNCZ0IsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsQ0FBdEIsQ0FEVDs7QUFBQTtBQUNiQyxpQkFEYTs7QUFFbkIsa0JBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2hCQyxxQkFBSyxDQUFDLGNBQUQsQ0FBTDtBQUNBWix5QkFBUyxDQUFDLGNBQUQsQ0FBVDtBQUNBRix5QkFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELGVBSkQsTUFJTztBQUNMYyxxQkFBSyxDQUFDLDRDQUFELENBQUw7QUFDRDs7QUFSa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWk4sWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFVQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUosYUFBaEI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRUMsMEVBQU8sQ0FBQ1UsU0FBeEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVoQixXQUFXLEdBQUdNLDBFQUFPLENBQUNXLElBQVgsR0FBa0IsRUFBN0M7QUFBQSwrQkFDRTtBQUFHLGNBQUksRUFBRXhCLFNBQVMsR0FBR0UsUUFBckI7QUFBQSxvQkFDR047QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBTUU7QUFBSyxlQUFPLEVBQUUsbUJBQU07QUFDbEJPLHNCQUFZLENBQUNzQixPQUFiLENBQXFCQyxLQUFyQjtBQUNELFNBRkQ7QUFBQSxrQkFHRzVCLE1BQU0sZ0JBQ1A7QUFBSyxhQUFHLEVBQUVBO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETyxHQUdGO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBY0U7QUFBQSxnQ0FDRTtBQUFPLGFBQUcsRUFBRUssWUFBWjtBQUEwQixjQUFJLEVBQUMsTUFBL0I7QUFBc0MsZ0JBQU0sRUFBRUosUUFBOUM7QUFBd0Qsa0JBQVEsRUFBRSxrQkFBQzRCLENBQUQsRUFBTztBQUN2RSxnQkFBSUEsQ0FBQyxDQUFDUixNQUFGLENBQVNDLEtBQVQsQ0FBZVEsTUFBZixLQUEwQixDQUE5QixFQUFpQztBQUMvQjtBQUNEOztBQUNEbEIscUJBQVMsQ0FBQyxjQUFELENBQVQ7QUFDQU0sd0JBQVksQ0FBQ1csQ0FBRCxDQUFaO0FBQ0Q7QUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBT007QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQTixFQVFHbEIsWUFSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0QkQsQ0EvQ007O0dBQU1kLGU7O0tBQUFBLGUiLCJmaWxlIjoiLi9jb21wb25lbnRzL1VwbG9hZEJpZ0J1dHRvbi50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSAnLi4vc3R5bGVzL1VwbG9hZEJpZ0J1dHRvbi5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQge3VwbG9hZEZpbGV9IGZyb20gJy4uL3V0aWxzL2ZldGNoJztcblxuZXhwb3J0IGNvbnN0IFVwbG9hZEJpZ0J1dHRvbjogUmVhY3QuRkM8e3RpdGxlOiBzdHJpbmcsIHZlcmlmeTogYm9vbGVhbiwgaW1nU3JjPzogc3RyaW5nLCBtaW1lVHlwZTogJ2FwcGxpY2F0aW9uL3BkZicgfCAndmlkZW8vbXA0JywgYXBpU2VydmVyOiBzdHJpbmcsIGVuZHBvaW50OiBzdHJpbmcsIGZpbGVQYXRoOiBzdHJpbmd9PiA9ICh7dGl0bGUsIHZlcmlmeSwgaW1nU3JjLCBtaW1lVHlwZSwgYXBpU2VydmVyLCBlbmRwb2ludCwgZmlsZVBhdGh9KSA9PiB7XG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IFJlYWN0LnVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PigpO1xuICBjb25zdCBbbG9jYWxWZXJpZnksIHNldFZlcmlmeV0gPSBSZWFjdC51c2VTdGF0ZSh2ZXJpZnkpO1xuICBjb25zdCBbdXBsb2FkU3RhdHVzLCBzZXRTdGF0dXNdID0gUmVhY3QudXNlU3RhdGU8c3RyaW5nPign6YCa5L+h5LitLi4uJyk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VmVyaWZ5KHZlcmlmeSk7XG4gICAgc2V0U3RhdHVzKHZlcmlmeSA/ICfjgqLjg4Pjg5fjg63jg7zjg4njgZXjgozjgabjgYTjgb7jgZknIDogJ+OBvuOBoOOCouODg+ODl+ODreODvOODieOBleOCjOOBpuOBhOOBvuOBm+OCkycpO1xuICB9LCBbdmVyaWZ5XSk7XG4gIGNvbnN0IGNsYXNzUm9vdE5hbWUgPSBsb2NhbFZlcmlmeSA/IGNsYXNzZXMudmVyaWZ5Um9vdCA6IGNsYXNzZXMuZXJyb3JSb290O1xuICBjb25zdCB1cGxvYWRBY3Rpb24gPSBhc3luYyAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgdXBsb2FkRmlsZShhcGlTZXJ2ZXIsIGVuZHBvaW50LCBldmVudC50YXJnZXQuZmlsZXNbMF0pO1xuICAgIGlmIChyZXMgPT09ICdPSycpIHtcbiAgICAgIGFsZXJ0KCfjgqLjg4Pjg5fjg63jg7zjg4njgZXjgozjgb7jgZfjgZ/jgIInKTtcbiAgICAgIHNldFN0YXR1cygn44Ki44OD44OX44Ot44O844OJ44GV44KM44Gm44GE44G+44GZJyk7XG4gICAgICBzZXRWZXJpZnkodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCfjgqLjg4Pjg5fjg63jg7zjg4njgavlpLHmlZfjgZfjgb7jgZfjgZ/jgILjg5XjgqHjgqTjg6vjgrXjgqTjgrrjga7norroqo3jgajjg5XjgqHjgqTjg6vlvaLlvI/jga7norroqo3jgpLjgZfjgabjgY/jgaDjgZXjgYTjgIInKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzUm9vdE5hbWV9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2xvY2FsVmVyaWZ5ID8gY2xhc3Nlcy5saW5rIDogJyd9PlxuICAgICAgICAgIDxhIGhyZWY9e2FwaVNlcnZlciArIGZpbGVQYXRofT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBmaWxlSW5wdXRSZWYuY3VycmVudC5jbGljaygpO1xuICAgICAgICB9fT5cbiAgICAgICAgICB7aW1nU3JjID8gKFxuICAgICAgICAgIDxpbWcgc3JjPXtpbWdTcmN9IC8+XG5cbiAgICAgICAgICAgICk6ICcnfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXQgcmVmPXtmaWxlSW5wdXRSZWZ9IHR5cGU9XCJmaWxlXCIgYWNjZXB0PXttaW1lVHlwZX0gb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFN0YXR1cygn44Ki44OD44OX44Ot44O844OJ5Lit44Gn44GZLi4uJyk7XG4gICAgICAgICAgICB1cGxvYWRBY3Rpb24oZSk7XG4gICAgICAgICAgfX0vPjxiciAvPlxuICAgICAgICAgIHt1cGxvYWRTdGF0dXN9PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UploadBigButton.tsx\n");

/***/ })

})