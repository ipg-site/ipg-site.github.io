webpackHotUpdate_N_E("pages/_app",{

/***/ "./utils/fetch.ts":
/*!************************!*\
  !*** ./utils/fetch.ts ***!
  \************************/
/*! exports provided: login, loginWithNewPassword, isLoggedIn, isAdmin, getUserList, getUserListByType, getUserData, adminGetUserData, adminUpdateUserData, adminChangePassword, uploadFile, addUser, getFile, getUniqueFileName, getAdminConfig, setAbstractFlag, setMovieFlag, setPresentationFlag, setRedirectFlag, setProgramPageVisible, setConferenceOpen, adminDeleteUser, adminGetHistory, adminGetHistoryByUserId, getProgramFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginWithNewPassword", function() { return loginWithNewPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdmin", function() { return isAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserList", function() { return getUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserListByType", function() { return getUserListByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminGetUserData", function() { return adminGetUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminUpdateUserData", function() { return adminUpdateUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminChangePassword", function() { return adminChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFile", function() { return uploadFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFile", function() { return getFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUniqueFileName", function() { return getUniqueFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminConfig", function() { return getAdminConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAbstractFlag", function() { return setAbstractFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMovieFlag", function() { return setMovieFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPresentationFlag", function() { return setPresentationFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRedirectFlag", function() { return setRedirectFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgramPageVisible", function() { return setProgramPageVisible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConferenceOpen", function() { return setConferenceOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminDeleteUser", function() { return adminDeleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminGetHistory", function() { return adminGetHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminGetHistoryByUserId", function() { return adminGetHistoryByUserId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgramFile", function() { return getProgramFile; });
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var apiServer = "http://localhost:3001";
var login = /*#__PURE__*/function () {
  var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(username, password) {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return fetch(apiServer + '/auth/login', {
              method: 'POST',
              body: JSON.stringify({
                username: username,
                password: password
              }),
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then( /*#__PURE__*/function () {
              var _ref2 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x3) {
                return _ref2.apply(this, arguments);
              };
            }());

          case 2:
            res = _context2.sent;

            if (!(res.status === 'CHANGE_PASSWORD_REQUEST')) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", 'CHANGE');

          case 5:
            if (!(res.status === 'success')) {
              _context2.next = 7;
              break;
            }

            return _context2.abrupt("return", 'OK');

          case 7:
            return _context2.abrupt("return", 'NG');

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var loginWithNewPassword = /*#__PURE__*/function () {
  var _ref3 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(username, password, newPassword) {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return fetch(apiServer + '/auth/login', {
              method: 'POST',
              body: JSON.stringify({
                username: username,
                password: password,
                newPassword: newPassword
              }),
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then( /*#__PURE__*/function () {
              var _ref4 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        return _context3.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }());

          case 2:
            res = _context4.sent;

            if (!(res.status === 'CHANGE_PASSWORD_REQUEST')) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", 'CHANGE');

          case 5:
            if (!(res.status === 'success')) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", 'OK');

          case 7:
            return _context4.abrupt("return", 'NG');

          case 8:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function loginWithNewPassword(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var isLoggedIn = /*#__PURE__*/function () {
  var _ref5 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return fetch(apiServer + '/auth/check', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then( /*#__PURE__*/function () {
              var _ref6 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function (_x8) {
                return _ref6.apply(this, arguments);
              };
            }());

          case 2:
            res = _context6.sent;

            if (!(res.status === 'OK')) {
              _context6.next = 5;
              break;
            }

            return _context6.abrupt("return", 'OK');

          case 5:
            return _context6.abrupt("return", 'NG');

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function isLoggedIn() {
    return _ref5.apply(this, arguments);
  };
}();
var isAdmin = /*#__PURE__*/function () {
  var _ref7 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return fetch(apiServer + '/auth/check', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then( /*#__PURE__*/function () {
              var _ref8 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        return _context7.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _callee7);
              }));

              return function (_x9) {
                return _ref8.apply(this, arguments);
              };
            }());

          case 2:
            res = _context8.sent;

            if (!(res.status === 'OK' && res.isAdmin === true)) {
              _context8.next = 5;
              break;
            }

            return _context8.abrupt("return", 'OK');

          case 5:
            return _context8.abrupt("return", 'NG');

          case 6:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function isAdmin() {
    return _ref7.apply(this, arguments);
  };
}();
var getUserList = /*#__PURE__*/function () {
  var _ref9 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.next = 2;
            return fetch(apiServer + '/user', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then( /*#__PURE__*/function () {
              var _ref10 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        return _context9.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));

              return function (_x10) {
                return _ref10.apply(this, arguments);
              };
            }());

          case 2:
            res = _context10.sent;
            return _context10.abrupt("return", {
              status: res.status === 'success' ? 'OK' : 'NG',
              data: res.data
            });

          case 4:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function getUserList() {
    return _ref9.apply(this, arguments);
  };
}();
var getUserListByType = /*#__PURE__*/function () {
  var _ref11 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee12(type) {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.next = 2;
            return fetch(apiServer + '/user/list/' + type, {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then( /*#__PURE__*/function () {
              var _ref12 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
                  while (1) {
                    switch (_context11.prev = _context11.next) {
                      case 0:
                        return _context11.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context11.stop();
                    }
                  }
                }, _callee11);
              }));

              return function (_x12) {
                return _ref12.apply(this, arguments);
              };
            }());

          case 2:
            res = _context12.sent;
            return _context12.abrupt("return", {
              status: res.status === 'success' ? 'OK' : 'NG',
              data: res.data
            });

          case 4:
          case "end":
            return _context12.stop();
        }
      }
    }, _callee12);
  }));

  return function getUserListByType(_x11) {
    return _ref11.apply(this, arguments);
  };
}();
var getUserData = /*#__PURE__*/function () {
  var _ref13 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee14() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee14$(_context14) {
      while (1) {
        switch (_context14.prev = _context14.next) {
          case 0:
            _context14.next = 2;
            return fetch(apiServer + '/user/meta', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then( /*#__PURE__*/function () {
              var _ref14 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee13(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee13$(_context13) {
                  while (1) {
                    switch (_context13.prev = _context13.next) {
                      case 0:
                        return _context13.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context13.stop();
                    }
                  }
                }, _callee13);
              }));

              return function (_x13) {
                return _ref14.apply(this, arguments);
              };
            }());

          case 2:
            res = _context14.sent;
            return _context14.abrupt("return", {
              status: res.status === 'success' ? 'OK' : 'NG',
              data: res.data
            });

          case 4:
          case "end":
            return _context14.stop();
        }
      }
    }, _callee14);
  }));

  return function getUserData() {
    return _ref13.apply(this, arguments);
  };
}();
var adminGetUserData = /*#__PURE__*/function () {
  var _ref15 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee16(id) {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee16$(_context16) {
      while (1) {
        switch (_context16.prev = _context16.next) {
          case 0:
            _context16.next = 2;
            return fetch(apiServer + '/user/' + id, {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              }
            }).then( /*#__PURE__*/function () {
              var _ref16 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee15(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee15$(_context15) {
                  while (1) {
                    switch (_context15.prev = _context15.next) {
                      case 0:
                        return _context15.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context15.stop();
                    }
                  }
                }, _callee15);
              }));

              return function (_x15) {
                return _ref16.apply(this, arguments);
              };
            }());

          case 2:
            res = _context16.sent;
            return _context16.abrupt("return", {
              status: res.status === 'success' ? 'OK' : 'NG',
              data: res.data
            });

          case 4:
          case "end":
            return _context16.stop();
        }
      }
    }, _callee16);
  }));

  return function adminGetUserData(_x14) {
    return _ref15.apply(this, arguments);
  };
}();
var adminUpdateUserData = /*#__PURE__*/function () {
  var _ref17 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee18(id, user) {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee18$(_context18) {
      while (1) {
        switch (_context18.prev = _context18.next) {
          case 0:
            _context18.next = 2;
            return fetch(apiServer + '/user/' + id, {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(user)
            }).then( /*#__PURE__*/function () {
              var _ref18 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee17(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee17$(_context17) {
                  while (1) {
                    switch (_context17.prev = _context17.next) {
                      case 0:
                        return _context17.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context17.stop();
                    }
                  }
                }, _callee17);
              }));

              return function (_x18) {
                return _ref18.apply(this, arguments);
              };
            }());

          case 2:
            res = _context18.sent;
            return _context18.abrupt("return", res.status === 'success' ? 'OK' : 'NG');

          case 4:
          case "end":
            return _context18.stop();
        }
      }
    }, _callee18);
  }));

  return function adminUpdateUserData(_x16, _x17) {
    return _ref17.apply(this, arguments);
  };
}();
var adminChangePassword = /*#__PURE__*/function () {
  var _ref19 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee20(id) {
    var _res$data;

    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee20$(_context20) {
      while (1) {
        switch (_context20.prev = _context20.next) {
          case 0:
            _context20.next = 2;
            return fetch(apiServer + '/user/reset_password/' + id, {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }).then( /*#__PURE__*/function () {
              var _ref20 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee19(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee19$(_context19) {
                  while (1) {
                    switch (_context19.prev = _context19.next) {
                      case 0:
                        return _context19.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context19.stop();
                    }
                  }
                }, _callee19);
              }));

              return function (_x20) {
                return _ref20.apply(this, arguments);
              };
            }());

          case 2:
            res = _context20.sent;
            return _context20.abrupt("return", {
              status: res.status,
              password: (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.password) || ''
            });

          case 4:
          case "end":
            return _context20.stop();
        }
      }
    }, _callee20);
  }));

  return function adminChangePassword(_x19) {
    return _ref19.apply(this, arguments);
  };
}();
var uploadFile = /*#__PURE__*/function () {
  var _ref21 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee22(endpoint, file) {
    var formData, res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee22$(_context22) {
      while (1) {
        switch (_context22.prev = _context22.next) {
          case 0:
            formData = new FormData();
            formData.append('file', file);
            _context22.next = 4;
            return fetch(apiServer + endpoint, {
              credentials: 'include',
              mode: 'cors',
              method: 'POST',
              body: formData
            }).then( /*#__PURE__*/function () {
              var _ref22 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee21(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee21$(_context21) {
                  while (1) {
                    switch (_context21.prev = _context21.next) {
                      case 0:
                        return _context21.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context21.stop();
                    }
                  }
                }, _callee21);
              }));

              return function (_x23) {
                return _ref22.apply(this, arguments);
              };
            }());

          case 4:
            res = _context22.sent;

            if (!(res.status !== 'success')) {
              _context22.next = 7;
              break;
            }

            return _context22.abrupt("return", {
              status: 'NG',
              message: res.message,
              statusCode: res.statusCode || res.status
            });

          case 7:
            return _context22.abrupt("return", {
              status: 'OK',
              message: 'アップロードされました。'
            });

          case 8:
          case "end":
            return _context22.stop();
        }
      }
    }, _callee22);
  }));

  return function uploadFile(_x21, _x22) {
    return _ref21.apply(this, arguments);
  };
}();
var addUser = /*#__PURE__*/function () {
  var _ref23 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee24(userData) {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee24$(_context24) {
      while (1) {
        switch (_context24.prev = _context24.next) {
          case 0:
            _context24.next = 2;
            return fetch(apiServer + '/user', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST',
              body: JSON.stringify(userData)
            }).then( /*#__PURE__*/function () {
              var _ref24 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee23(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee23$(_context23) {
                  while (1) {
                    switch (_context23.prev = _context23.next) {
                      case 0:
                        return _context23.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context23.stop();
                    }
                  }
                }, _callee23);
              }));

              return function (_x25) {
                return _ref24.apply(this, arguments);
              };
            }());

          case 2:
            res = _context24.sent;
            return _context24.abrupt("return", {
              status: res.status === 'success' ? 'OK' : 'NG',
              username: res.data.username,
              password: res.data.password
            });

          case 4:
          case "end":
            return _context24.stop();
        }
      }
    }, _callee24);
  }));

  return function addUser(_x24) {
    return _ref23.apply(this, arguments);
  };
}();
var getFile = /*#__PURE__*/function () {
  var _ref25 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee26(type, fid) {
    var res, base64file;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee26$(_context26) {
      while (1) {
        switch (_context26.prev = _context26.next) {
          case 0:
            _context26.next = 2;
            return fetch(apiServer + '/file/' + type + '/' + fid, {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'GET'
            }).then( /*#__PURE__*/function () {
              var _ref26 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee25(x) {
                var blob;
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee25$(_context25) {
                  while (1) {
                    switch (_context25.prev = _context25.next) {
                      case 0:
                        if (!(x.status !== 200)) {
                          _context25.next = 2;
                          break;
                        }

                        return _context25.abrupt("return", null);

                      case 2:
                        _context25.next = 4;
                        return x.blob();

                      case 4:
                        blob = _context25.sent;
                        return _context25.abrupt("return", {
                          status: true,
                          blob: blob
                        });

                      case 6:
                      case "end":
                        return _context25.stop();
                    }
                  }
                }, _callee25);
              }));

              return function (_x28) {
                return _ref26.apply(this, arguments);
              };
            }());

          case 2:
            res = _context26.sent;
            console.log(res);

            if (!(res === null)) {
              _context26.next = 6;
              break;
            }

            return _context26.abrupt("return", {
              status: 'NG',
              data: null,
              link: null
            });

          case 6:
            _context26.next = 8;
            return new Promise(function (resolve, reject) {
              var reader = new FileReader();
              reader.readAsDataURL(res.blob);

              reader.onloadend = function () {
                var strRes = String(reader.result);
                var offset = strRes.indexOf(',') + 1;
                resolve(strRes.slice(offset));
              };
            });

          case 8:
            base64file = _context26.sent;
            return _context26.abrupt("return", {
              status: res !== null && res !== void 0 && res.status ? 'OK' : 'NG',
              data: base64file,
              link: apiServer + '/file/' + type + '/' + fid
            });

          case 10:
          case "end":
            return _context26.stop();
        }
      }
    }, _callee26);
  }));

  return function getFile(_x26, _x27) {
    return _ref25.apply(this, arguments);
  };
}();
var getUniqueFileName = /*#__PURE__*/function () {
  var _ref27 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee28(fid) {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee28$(_context28) {
      while (1) {
        switch (_context28.prev = _context28.next) {
          case 0:
            _context28.next = 2;
            return fetch(apiServer + '/file/name/' + fid, {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'GET'
            }).then( /*#__PURE__*/function () {
              var _ref28 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee27(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee27$(_context27) {
                  while (1) {
                    switch (_context27.prev = _context27.next) {
                      case 0:
                        return _context27.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context27.stop();
                    }
                  }
                }, _callee27);
              }));

              return function (_x30) {
                return _ref28.apply(this, arguments);
              };
            }());

          case 2:
            res = _context28.sent;

            if (!(res.status !== 'success')) {
              _context28.next = 5;
              break;
            }

            return _context28.abrupt("return", {
              data: null,
              status: 'NG'
            });

          case 5:
            return _context28.abrupt("return", {
              status: 'OK',
              data: {
                fileName: res.data.fileName
              }
            });

          case 6:
          case "end":
            return _context28.stop();
        }
      }
    }, _callee28);
  }));

  return function getUniqueFileName(_x29) {
    return _ref27.apply(this, arguments);
  };
}();
var getAdminConfig = /*#__PURE__*/function () {
  var _ref29 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee30() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee30$(_context30) {
      while (1) {
        switch (_context30.prev = _context30.next) {
          case 0:
            _context30.next = 2;
            return fetch(apiServer + '/admin', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'GET'
            }).then( /*#__PURE__*/function () {
              var _ref30 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee29(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee29$(_context29) {
                  while (1) {
                    switch (_context29.prev = _context29.next) {
                      case 0:
                        return _context29.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context29.stop();
                    }
                  }
                }, _callee29);
              }));

              return function (_x31) {
                return _ref30.apply(this, arguments);
              };
            }());

          case 2:
            res = _context30.sent;

            if (!(res.status !== 'success')) {
              _context30.next = 5;
              break;
            }

            return _context30.abrupt("return", {
              data: null,
              status: 'NG'
            });

          case 5:
            return _context30.abrupt("return", {
              status: 'OK',
              data: res.data
            });

          case 6:
          case "end":
            return _context30.stop();
        }
      }
    }, _callee30);
  }));

  return function getAdminConfig() {
    return _ref29.apply(this, arguments);
  };
}();
var setAbstractFlag = /*#__PURE__*/function () {
  var _ref31 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee32() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee32$(_context32) {
      while (1) {
        switch (_context32.prev = _context32.next) {
          case 0:
            _context32.next = 2;
            return fetch(apiServer + '/admin/abstract', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }).then( /*#__PURE__*/function () {
              var _ref32 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee31(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee31$(_context31) {
                  while (1) {
                    switch (_context31.prev = _context31.next) {
                      case 0:
                        return _context31.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context31.stop();
                    }
                  }
                }, _callee31);
              }));

              return function (_x32) {
                return _ref32.apply(this, arguments);
              };
            }());

          case 2:
            res = _context32.sent;
            return _context32.abrupt("return", {
              status: res.status,
              flag: res.data
            });

          case 4:
          case "end":
            return _context32.stop();
        }
      }
    }, _callee32);
  }));

  return function setAbstractFlag() {
    return _ref31.apply(this, arguments);
  };
}();
var setMovieFlag = /*#__PURE__*/function () {
  var _ref33 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee34() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee34$(_context34) {
      while (1) {
        switch (_context34.prev = _context34.next) {
          case 0:
            _context34.next = 2;
            return fetch(apiServer + '/admin/movie', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }).then( /*#__PURE__*/function () {
              var _ref34 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee33(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee33$(_context33) {
                  while (1) {
                    switch (_context33.prev = _context33.next) {
                      case 0:
                        return _context33.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context33.stop();
                    }
                  }
                }, _callee33);
              }));

              return function (_x33) {
                return _ref34.apply(this, arguments);
              };
            }());

          case 2:
            res = _context34.sent;
            return _context34.abrupt("return", {
              status: res.status,
              flag: res.data
            });

          case 4:
          case "end":
            return _context34.stop();
        }
      }
    }, _callee34);
  }));

  return function setMovieFlag() {
    return _ref33.apply(this, arguments);
  };
}();
var setPresentationFlag = /*#__PURE__*/function () {
  var _ref35 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee36() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee36$(_context36) {
      while (1) {
        switch (_context36.prev = _context36.next) {
          case 0:
            _context36.next = 2;
            return fetch(apiServer + '/admin/presentation', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }).then( /*#__PURE__*/function () {
              var _ref36 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee35(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee35$(_context35) {
                  while (1) {
                    switch (_context35.prev = _context35.next) {
                      case 0:
                        return _context35.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context35.stop();
                    }
                  }
                }, _callee35);
              }));

              return function (_x34) {
                return _ref36.apply(this, arguments);
              };
            }());

          case 2:
            res = _context36.sent;
            return _context36.abrupt("return", {
              status: res.status,
              flag: res.data
            });

          case 4:
          case "end":
            return _context36.stop();
        }
      }
    }, _callee36);
  }));

  return function setPresentationFlag() {
    return _ref35.apply(this, arguments);
  };
}();
var setRedirectFlag = /*#__PURE__*/function () {
  var _ref37 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee38() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee38$(_context38) {
      while (1) {
        switch (_context38.prev = _context38.next) {
          case 0:
            _context38.next = 2;
            return fetch(apiServer + '/admin/redirect', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }).then( /*#__PURE__*/function () {
              var _ref38 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee37(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee37$(_context37) {
                  while (1) {
                    switch (_context37.prev = _context37.next) {
                      case 0:
                        return _context37.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context37.stop();
                    }
                  }
                }, _callee37);
              }));

              return function (_x35) {
                return _ref38.apply(this, arguments);
              };
            }());

          case 2:
            res = _context38.sent;
            return _context38.abrupt("return", {
              status: res.status,
              flag: res.data
            });

          case 4:
          case "end":
            return _context38.stop();
        }
      }
    }, _callee38);
  }));

  return function setRedirectFlag() {
    return _ref37.apply(this, arguments);
  };
}();
var setProgramPageVisible = /*#__PURE__*/function () {
  var _ref39 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee40() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee40$(_context40) {
      while (1) {
        switch (_context40.prev = _context40.next) {
          case 0:
            _context40.next = 2;
            return fetch(apiServer + '/admin/program-page', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }).then( /*#__PURE__*/function () {
              var _ref40 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee39(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee39$(_context39) {
                  while (1) {
                    switch (_context39.prev = _context39.next) {
                      case 0:
                        return _context39.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context39.stop();
                    }
                  }
                }, _callee39);
              }));

              return function (_x36) {
                return _ref40.apply(this, arguments);
              };
            }());

          case 2:
            res = _context40.sent;
            return _context40.abrupt("return", {
              status: res.status,
              flag: res.data
            });

          case 4:
          case "end":
            return _context40.stop();
        }
      }
    }, _callee40);
  }));

  return function setProgramPageVisible() {
    return _ref39.apply(this, arguments);
  };
}();
var setConferenceOpen = /*#__PURE__*/function () {
  var _ref41 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee42() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee42$(_context42) {
      while (1) {
        switch (_context42.prev = _context42.next) {
          case 0:
            _context42.next = 2;
            return fetch(apiServer + '/admin/conference-open', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            }).then( /*#__PURE__*/function () {
              var _ref42 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee41(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee41$(_context41) {
                  while (1) {
                    switch (_context41.prev = _context41.next) {
                      case 0:
                        return _context41.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context41.stop();
                    }
                  }
                }, _callee41);
              }));

              return function (_x37) {
                return _ref42.apply(this, arguments);
              };
            }());

          case 2:
            res = _context42.sent;
            return _context42.abrupt("return", {
              status: res.status,
              flag: res.data
            });

          case 4:
          case "end":
            return _context42.stop();
        }
      }
    }, _callee42);
  }));

  return function setConferenceOpen() {
    return _ref41.apply(this, arguments);
  };
}();
var adminDeleteUser = /*#__PURE__*/function () {
  var _ref43 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee44(id) {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee44$(_context44) {
      while (1) {
        switch (_context44.prev = _context44.next) {
          case 0:
            _context44.next = 2;
            return fetch(apiServer + '/user/' + id, {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'DELETE'
            }).then( /*#__PURE__*/function () {
              var _ref44 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee43(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee43$(_context43) {
                  while (1) {
                    switch (_context43.prev = _context43.next) {
                      case 0:
                        return _context43.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context43.stop();
                    }
                  }
                }, _callee43);
              }));

              return function (_x39) {
                return _ref44.apply(this, arguments);
              };
            }());

          case 2:
            res = _context44.sent;
            return _context44.abrupt("return", res.status === 'success' ? 'OK' : 'NG');

          case 4:
          case "end":
            return _context44.stop();
        }
      }
    }, _callee44);
  }));

  return function adminDeleteUser(_x38) {
    return _ref43.apply(this, arguments);
  };
}();
var adminGetHistory = /*#__PURE__*/function () {
  var _ref45 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee46() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee46$(_context46) {
      while (1) {
        switch (_context46.prev = _context46.next) {
          case 0:
            _context46.next = 2;
            return fetch(apiServer + '/history', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'GET'
            }).then( /*#__PURE__*/function () {
              var _ref46 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee45(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee45$(_context45) {
                  while (1) {
                    switch (_context45.prev = _context45.next) {
                      case 0:
                        return _context45.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context45.stop();
                    }
                  }
                }, _callee45);
              }));

              return function (_x40) {
                return _ref46.apply(this, arguments);
              };
            }());

          case 2:
            res = _context46.sent;

            if (!(res.status !== 'success')) {
              _context46.next = 5;
              break;
            }

            return _context46.abrupt("return", {
              data: null,
              status: 'NG'
            });

          case 5:
            return _context46.abrupt("return", {
              status: 'OK',
              data: res.data.map(function (d) {
                return _objectSpread(_objectSpread({}, d), {}, {
                  createdAt: new Date(d.createdAt)
                });
              })
            });

          case 6:
          case "end":
            return _context46.stop();
        }
      }
    }, _callee46);
  }));

  return function adminGetHistory() {
    return _ref45.apply(this, arguments);
  };
}();
var adminGetHistoryByUserId = /*#__PURE__*/function () {
  var _ref47 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee48(id) {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee48$(_context48) {
      while (1) {
        switch (_context48.prev = _context48.next) {
          case 0:
            _context48.next = 2;
            return fetch(apiServer + '/history/' + id, {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'GET'
            }).then( /*#__PURE__*/function () {
              var _ref48 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee47(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee47$(_context47) {
                  while (1) {
                    switch (_context47.prev = _context47.next) {
                      case 0:
                        return _context47.abrupt("return", x.json());

                      case 1:
                      case "end":
                        return _context47.stop();
                    }
                  }
                }, _callee47);
              }));

              return function (_x42) {
                return _ref48.apply(this, arguments);
              };
            }());

          case 2:
            res = _context48.sent;

            if (!(res.status !== 'success')) {
              _context48.next = 5;
              break;
            }

            return _context48.abrupt("return", {
              data: null,
              status: 'NG'
            });

          case 5:
            return _context48.abrupt("return", {
              status: 'OK',
              data: res.data.map(function (d) {
                return _objectSpread(_objectSpread({}, d), {}, {
                  createdAt: new Date(d.createdAt)
                });
              })
            });

          case 6:
          case "end":
            return _context48.stop();
        }
      }
    }, _callee48);
  }));

  return function adminGetHistoryByUserId(_x41) {
    return _ref47.apply(this, arguments);
  };
}();
var getProgramFile = /*#__PURE__*/function () {
  var _ref49 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee50() {
    var res;
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee50$(_context50) {
      while (1) {
        switch (_context50.prev = _context50.next) {
          case 0:
            _context50.next = 2;
            return fetch(apiServer + '/file/program', {
              credentials: 'include',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'GET'
            }).then( /*#__PURE__*/function () {
              var _ref50 = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee49(x) {
                return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee49$(_context49) {
                  while (1) {
                    switch (_context49.prev = _context49.next) {
                      case 0:
                        if (!(x.status !== 200)) {
                          _context49.next = 2;
                          break;
                        }

                        return _context49.abrupt("return", null);

                      case 2:
                        return _context49.abrupt("return", x.text());

                      case 3:
                      case "end":
                        return _context49.stop();
                    }
                  }
                }, _callee49);
              }));

              return function (_x43) {
                return _ref50.apply(this, arguments);
              };
            }());

          case 2:
            res = _context50.sent;

            if (!(res === null)) {
              _context50.next = 5;
              break;
            }

            return _context50.abrupt("return", {
              data: null,
              status: 'NG'
            });

          case 5:
            return _context50.abrupt("return", {
              status: 'OK',
              data: res
            });

          case 6:
          case "end":
            return _context50.stop();
        }
      }
    }, _callee50);
  }));

  return function getProgramFile() {
    return _ref49.apply(this, arguments);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZmV0Y2gudHMiXSwibmFtZXMiOlsiYXBpU2VydmVyIiwicHJvY2VzcyIsImxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVkZW50aWFscyIsIm1vZGUiLCJoZWFkZXJzIiwidGhlbiIsIngiLCJqc29uIiwicmVzIiwic3RhdHVzIiwibG9naW5XaXRoTmV3UGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImlzTG9nZ2VkSW4iLCJpc0FkbWluIiwiZ2V0VXNlckxpc3QiLCJkYXRhIiwiZ2V0VXNlckxpc3RCeVR5cGUiLCJ0eXBlIiwiZ2V0VXNlckRhdGEiLCJhZG1pbkdldFVzZXJEYXRhIiwiaWQiLCJhZG1pblVwZGF0ZVVzZXJEYXRhIiwidXNlciIsImFkbWluQ2hhbmdlUGFzc3dvcmQiLCJ1cGxvYWRGaWxlIiwiZW5kcG9pbnQiLCJmaWxlIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIm1lc3NhZ2UiLCJzdGF0dXNDb2RlIiwiYWRkVXNlciIsInVzZXJEYXRhIiwiZ2V0RmlsZSIsImZpZCIsImJsb2IiLCJjb25zb2xlIiwibG9nIiwibGluayIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInJlYWRBc0RhdGFVUkwiLCJvbmxvYWRlbmQiLCJzdHJSZXMiLCJTdHJpbmciLCJyZXN1bHQiLCJvZmZzZXQiLCJpbmRleE9mIiwic2xpY2UiLCJiYXNlNjRmaWxlIiwiZ2V0VW5pcXVlRmlsZU5hbWUiLCJmaWxlTmFtZSIsImdldEFkbWluQ29uZmlnIiwic2V0QWJzdHJhY3RGbGFnIiwiZmxhZyIsInNldE1vdmllRmxhZyIsInNldFByZXNlbnRhdGlvbkZsYWciLCJzZXRSZWRpcmVjdEZsYWciLCJzZXRQcm9ncmFtUGFnZVZpc2libGUiLCJzZXRDb25mZXJlbmNlT3BlbiIsImFkbWluRGVsZXRlVXNlciIsImFkbWluR2V0SGlzdG9yeSIsIm1hcCIsImQiLCJjcmVhdGVkQXQiLCJEYXRlIiwiYWRtaW5HZXRIaXN0b3J5QnlVc2VySWQiLCJnZXRQcm9ncmFtRmlsZSIsInRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNBLElBQU1BLFNBQVMsR0FBR0MsdUJBQWxCO0FBRU8sSUFBTUMsS0FBSztBQUFBLDhTQUFHLGtCQUFPQyxRQUFQLEVBQXlCQyxRQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNEQyxLQUFLLENBQUNMLFNBQVMsR0FBRyxhQUFiLEVBQTRCO0FBQ2pETSxvQkFBTSxFQUFFLE1BRHlDO0FBRWpEQyxrQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQk4sd0JBQVEsRUFBUkEsUUFEbUI7QUFDVEMsd0JBQVEsRUFBUkE7QUFEUyxlQUFmLENBRjJDO0FBS2pETSx5QkFBVyxFQUFFLFNBTG9DO0FBTWpEQyxrQkFBSSxFQUFFLE1BTjJDO0FBT2pEQyxxQkFBTyxFQUFFO0FBQ1AsZ0NBQWdCO0FBRFQ7QUFQd0MsYUFBNUIsQ0FBTCxDQVVmQyxJQVZlO0FBQUEsMlRBVVYsaUJBQU9DLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlEQUFhQSxDQUFDLENBQUNDLElBQUYsRUFBYjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZVOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURDOztBQUFBO0FBQ2JDLGVBRGE7O0FBQUEsa0JBWWZBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLHlCQVpBO0FBQUE7QUFBQTtBQUFBOztBQUFBLDhDQWFWLFFBYlU7O0FBQUE7QUFBQSxrQkFlZkQsR0FBRyxDQUFDQyxNQUFKLEtBQWUsU0FmQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSw4Q0FnQlYsSUFoQlU7O0FBQUE7QUFBQSw4Q0FrQlosSUFsQlk7O0FBQUE7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QTtBQUFBLDJEQUlDSCxDQUFDLENBQUNrRSxJQUFGLEVBSkQ7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQVTs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEVTs7QUFBQTtBQUN0QmhFLGVBRHNCOztBQUFBLGtCQWN4QkEsR0FBRyxLQUFLLElBZGdCO0FBQUE7QUFBQTtBQUFBOztBQUFBLCtDQWVuQjtBQUNMTyxrQkFBSSxFQUFFLElBREQ7QUFFTE4sb0JBQU0sRUFBRTtBQUZILGFBZm1COztBQUFBO0FBQUEsK0NBb0JyQjtBQUNMQSxvQkFBTSxFQUFFLElBREg7QUFFTE0sa0JBQUksRUFBRVA7QUFGRCxhQXBCcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBZCtELGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41NTIxYzk2YjUyZmMwYmRkNTI3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmVzZW50YXRpb24sIFByZXNlbnRhdGlvbkRUTywgVXNlckRUT30gZnJvbSAnLi4vLi4vaXBnLWFwaS1zZXJ2ZXIvc3JjL3R5cGVzL3VzZXIudHlwZXMnO1xuaW1wb3J0IHtGaWxlRFRPfSBmcm9tICcuLi8uLi9pcGctYXBpLXNlcnZlci9zcmMvdHlwZXMvZmlsZS50eXBlcyc7XG5pbXBvcnQge0FkbWluQ29uZmlnRFRPfSBmcm9tICcuLi8uLi9pcGctYXBpLXNlcnZlci9zcmMvdHlwZXMvYWRtaW4udHlwZXMnO1xuaW1wb3J0IHtIaXN0b3J5RFRPfSBmcm9tICcuLi8uLi9pcGctYXBpLXNlcnZlci9zcmMvdHlwZXMvaGlzdG9yeS50eXBlcyc7XG5cbmV4cG9ydCB0eXBlIFVzZXJGaWxlRFRPID0gVXNlckRUTyAmIHsgZmlsZTogRmlsZURUTyB9XG5cbmV4cG9ydCB0eXBlIE9LTkcgPSAnT0snIHwgJ05HJ1xuXG5jb25zdCBhcGlTZXJ2ZXIgPSBwcm9jZXNzLmVudi5BUElfU0VSVkVSO1xuXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8T0tORyB8ICdDSEFOR0UnPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvYXV0aC9sb2dpbicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VybmFtZSwgcGFzc3dvcmQsXG4gICAgfSksXG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIGlmIChyZXMuc3RhdHVzID09PSAnQ0hBTkdFX1BBU1NXT1JEX1JFUVVFU1QnKSB7XG4gICAgcmV0dXJuICdDSEFOR0UnO1xuICB9XG4gIGlmIChyZXMuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICByZXR1cm4gJ09LJztcbiAgfVxuICByZXR1cm4gJ05HJztcbn1cbiAgO1xuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoTmV3UGFzc3dvcmQgPSBhc3luYyAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8T0tORyB8ICdDSEFOR0UnPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvYXV0aC9sb2dpbicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICB1c2VybmFtZSwgcGFzc3dvcmQsIG5ld1Bhc3N3b3JkLFxuICAgIH0pLFxuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgfSkudGhlbihhc3luYyAoeCkgPT4geC5qc29uKCkpO1xuICBpZiAocmVzLnN0YXR1cyA9PT0gJ0NIQU5HRV9QQVNTV09SRF9SRVFVRVNUJykge1xuICAgIHJldHVybiAnQ0hBTkdFJztcbiAgfVxuICBpZiAocmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgcmV0dXJuICdPSyc7XG4gIH1cbiAgcmV0dXJuICdORyc7XG59XG4gIDtcblxuZXhwb3J0IGNvbnN0IGlzTG9nZ2VkSW4gPSBhc3luYyAoKTogUHJvbWlzZTxPS05HPiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvYXV0aC9jaGVjaycsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gIH0pLnRoZW4oYXN5bmMgKHgpID0+IHguanNvbigpKTtcbiAgaWYgKHJlcy5zdGF0dXMgPT09ICdPSycpIHJldHVybiAnT0snO1xuICByZXR1cm4gJ05HJztcbn1cbiAgO1xuXG5cbmV4cG9ydCBjb25zdCBpc0FkbWluID0gYXN5bmMgKCk6IFByb21pc2U8T0tORz4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlTZXJ2ZXIgKyAnL2F1dGgvY2hlY2snLCB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIGlmIChyZXMuc3RhdHVzID09PSAnT0snICYmIHJlcy5pc0FkbWluID09PSB0cnVlKSByZXR1cm4gJ09LJztcbiAgcmV0dXJuICdORyc7XG59XG4gIDtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0ID0gYXN5bmMgKCk6IFByb21pc2U8eyBzdGF0dXM6IE9LTkcsIGRhdGE6IFVzZXJGaWxlRFRPW10gfT4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlTZXJ2ZXIgKyAnL3VzZXInLCB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiByZXMuc3RhdHVzID09PSAnc3VjY2VzcycgPyAnT0snIDogJ05HJyxcbiAgICBkYXRhOiByZXMuZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyTGlzdEJ5VHlwZSA9IGFzeW5jICh0eXBlOiBQcmVzZW50YXRpb24pOiBQcm9taXNlPHsgc3RhdHVzOiBPS05HLCBkYXRhOiBQcmVzZW50YXRpb25EVE9bXSB9PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvdXNlci9saXN0LycgKyB0eXBlLCB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiByZXMuc3RhdHVzID09PSAnc3VjY2VzcycgPyAnT0snIDogJ05HJyxcbiAgICBkYXRhOiByZXMuZGF0YSxcbiAgfTtcbn07XG5cblxuZXhwb3J0IGNvbnN0IGdldFVzZXJEYXRhID0gYXN5bmMgKCk6IFByb21pc2U8eyBzdGF0dXM6IE9LTkcsIGRhdGE6IFVzZXJGaWxlRFRPIH0+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpU2VydmVyICsgJy91c2VyL21ldGEnLCB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiByZXMuc3RhdHVzID09PSAnc3VjY2VzcycgPyAnT0snIDogJ05HJyxcbiAgICBkYXRhOiByZXMuZGF0YSxcbiAgfTtcbn1cbiAgO1xuXG5leHBvcnQgY29uc3QgYWRtaW5HZXRVc2VyRGF0YSA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTx7IHN0YXR1czogT0tORywgZGF0YTogVXNlckZpbGVEVE8gfT4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlTZXJ2ZXIgKyAnL3VzZXIvJyArIGlkLCB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiByZXMuc3RhdHVzID09PSAnc3VjY2VzcycgPyAnT0snIDogJ05HJyxcbiAgICBkYXRhOiByZXMuZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZG1pblVwZGF0ZVVzZXJEYXRhID0gYXN5bmMgKGlkOiBudW1iZXIsIHVzZXI6IFVzZXJEVE8pOiBQcm9taXNlPE9LTkc+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpU2VydmVyICsgJy91c2VyLycgKyBpZCwge1xuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcbiAgfSkudGhlbihhc3luYyAoeCkgPT4geC5qc29uKCkpO1xuICByZXR1cm4gcmVzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnID8gJ09LJyA6ICdORyc7XG59O1xuXG5leHBvcnQgY29uc3QgYWRtaW5DaGFuZ2VQYXNzd29yZCA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTx7IHN0YXR1czogT0tORywgcGFzc3dvcmQ6IHN0cmluZyB9PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvdXNlci9yZXNldF9wYXNzd29yZC8nICsgaWQsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gIH0pLnRoZW4oYXN5bmMgKHgpID0+IHguanNvbigpKTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IHJlcy5zdGF0dXMgYXMgT0tORyxcbiAgICBwYXNzd29yZDogcmVzPy5kYXRhPy5wYXNzd29yZCB8fCAnJyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRGaWxlID0gYXN5bmMgKGVuZHBvaW50OiBzdHJpbmcsIGZpbGU6IEZpbGUpOiBQcm9taXNlPHsgc3RhdHVzOiBPS05HLCBtZXNzYWdlOiBzdHJpbmcsIHN0YXR1c0NvZGU/OiBudW1iZXIgfT4gPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpU2VydmVyICsgZW5kcG9pbnQsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBmb3JtRGF0YSxcbiAgfSkudGhlbihhc3luYyAoeCkgPT4geC5qc29uKCkpO1xuICBpZiAocmVzLnN0YXR1cyAhPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ05HJyxcbiAgICAgIG1lc3NhZ2U6IHJlcy5tZXNzYWdlLFxuICAgICAgc3RhdHVzQ29kZTogcmVzLnN0YXR1c0NvZGUgfHwgcmVzLnN0YXR1cyxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiAnT0snLFxuICAgIG1lc3NhZ2U6ICfjgqLjg4Pjg5fjg63jg7zjg4njgZXjgozjgb7jgZfjgZ/jgIInLFxuICB9O1xufVxuICA7XG5cbmV4cG9ydCBjb25zdCBhZGRVc2VyID0gYXN5bmMgKHVzZXJEYXRhOiBVc2VyRFRPKTogUHJvbWlzZTx7IHN0YXR1czogT0tORywgdXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyB9PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvdXNlcicsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiByZXMuc3RhdHVzID09PSAnc3VjY2VzcycgPyAnT0snIDogJ05HJyxcbiAgICB1c2VybmFtZTogcmVzLmRhdGEudXNlcm5hbWUsXG4gICAgcGFzc3dvcmQ6IHJlcy5kYXRhLnBhc3N3b3JkLFxuICB9O1xufVxuICA7XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlID0gYXN5bmMgKHR5cGU6ICdhYnN0cmFjdCcgfCAnbW92aWUnIHwgJ3ByZXNlbnRhdGlvbicsIGZpZDogbnVtYmVyKTogUHJvbWlzZTx7IHN0YXR1czogT0tORywgZGF0YTogc3RyaW5nLCBsaW5rOiBzdHJpbmcgfT4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlTZXJ2ZXIgKyAnL2ZpbGUvJyArIHR5cGUgKyAnLycgKyBmaWQsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgfSkudGhlbihhc3luYyAoeCkgPT4ge1xuICAgIGlmICh4LnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHguYmxvYigpO1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXM6IHRydWUsXG4gICAgICBibG9iLFxuICAgIH07XG4gIH0pO1xuICBjb25zb2xlLmxvZyhyZXMpO1xuICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXR1czogJ05HJyxcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBsaW5rOiBudWxsLFxuICAgIH07XG4gIH1cbiAgY29uc3QgYmFzZTY0ZmlsZSA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwocmVzLmJsb2IpO1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnN0IHN0clJlcyA9IFN0cmluZyhyZWFkZXIucmVzdWx0KTtcbiAgICAgIGNvbnN0IG9mZnNldCA9IHN0clJlcy5pbmRleE9mKCcsJykgKyAxO1xuICAgICAgcmVzb2x2ZShzdHJSZXMuc2xpY2Uob2Zmc2V0KSBhcyBzdHJpbmcpO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHN0YXR1czogcmVzPy5zdGF0dXMgPyAnT0snIDogJ05HJyxcbiAgICBkYXRhOiBiYXNlNjRmaWxlLFxuICAgIGxpbms6IGFwaVNlcnZlciArICcvZmlsZS8nICsgdHlwZSArICcvJyArIGZpZCxcbiAgfTtcbn1cbiAgO1xuXG5leHBvcnQgY29uc3QgZ2V0VW5pcXVlRmlsZU5hbWUgPSBhc3luYyAoZmlkOiBudW1iZXIpOiBQcm9taXNlPHsgc3RhdHVzOiBPS05HLCBkYXRhOiB7IGZpbGVOYW1lOiBzdHJpbmcgfSB9PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvZmlsZS9uYW1lLycgKyBmaWQsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgbWV0aG9kOiAnR0VUJyxcbiAgfSkudGhlbihhc3luYyAoeCkgPT4geC5qc29uKCkpO1xuICBpZiAocmVzLnN0YXR1cyAhPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBzdGF0dXM6ICdORycsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN0YXR1czogJ09LJyxcbiAgICBkYXRhOiB7XG4gICAgICBmaWxlTmFtZTogcmVzLmRhdGEuZmlsZU5hbWUsXG4gICAgfSxcbiAgfTtcbn1cbiAgO1xuXG5leHBvcnQgY29uc3QgZ2V0QWRtaW5Db25maWcgPSBhc3luYyAoKTogUHJvbWlzZTx7IHN0YXR1czogT0tORywgZGF0YTogQWRtaW5Db25maWdEVE8gfT4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlTZXJ2ZXIgKyAnL2FkbWluJywge1xuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIGlmIChyZXMuc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIHN0YXR1czogJ05HJyxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiAnT0snLFxuICAgIGRhdGE6IHJlcy5kYXRhLFxuICB9O1xufVxuICA7XG5cbmV4cG9ydCBjb25zdCBzZXRBYnN0cmFjdEZsYWcgPSBhc3luYyAoKTogUHJvbWlzZTx7IHN0YXR1czogT0tORywgZmxhZzogYm9vbGVhbiB9PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvYWRtaW4vYWJzdHJhY3QnLCB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiByZXMuc3RhdHVzLFxuICAgIGZsYWc6IHJlcy5kYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldE1vdmllRmxhZyA9IGFzeW5jICgpOiBQcm9taXNlPHsgc3RhdHVzOiBPS05HLCBmbGFnOiBib29sZWFuIH0+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpU2VydmVyICsgJy9hZG1pbi9tb3ZpZScsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gIH0pLnRoZW4oYXN5bmMgKHgpID0+IHguanNvbigpKTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXG4gICAgZmxhZzogcmVzLmRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0UHJlc2VudGF0aW9uRmxhZyA9IGFzeW5jICgpOiBQcm9taXNlPHsgc3RhdHVzOiBPS05HLCBmbGFnOiBib29sZWFuIH0+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpU2VydmVyICsgJy9hZG1pbi9wcmVzZW50YXRpb24nLCB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIG1ldGhvZDogJ1BPU1QnLFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiByZXMuc3RhdHVzLFxuICAgIGZsYWc6IHJlcy5kYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFJlZGlyZWN0RmxhZyA9IGFzeW5jICgpOiBQcm9taXNlPHsgc3RhdHVzOiBPS05HLCBmbGFnOiBib29sZWFuIH0+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpU2VydmVyICsgJy9hZG1pbi9yZWRpcmVjdCcsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gIH0pLnRoZW4oYXN5bmMgKHgpID0+IHguanNvbigpKTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXG4gICAgZmxhZzogcmVzLmRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0UHJvZ3JhbVBhZ2VWaXNpYmxlID0gYXN5bmMgKCk6IFByb21pc2U8eyBzdGF0dXM6IE9LTkcsIGZsYWc6IGJvb2xlYW4gfT4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlTZXJ2ZXIgKyAnL2FkbWluL3Byb2dyYW0tcGFnZScsIHtcbiAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gIH0pLnRoZW4oYXN5bmMgKHgpID0+IHguanNvbigpKTtcbiAgcmV0dXJuIHtcbiAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXG4gICAgZmxhZzogcmVzLmRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Q29uZmVyZW5jZU9wZW4gPSBhc3luYyAoKTogUHJvbWlzZTx7IHN0YXR1czogT0tORywgZmxhZzogYm9vbGVhbiB9PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvYWRtaW4vY29uZmVyZW5jZS1vcGVuJywge1xuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgfSkudGhlbihhc3luYyAoeCkgPT4geC5qc29uKCkpO1xuICByZXR1cm4ge1xuICAgIHN0YXR1czogcmVzLnN0YXR1cyxcbiAgICBmbGFnOiByZXMuZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZG1pbkRlbGV0ZVVzZXIgPSBhc3luYyAoaWQ6IG51bWJlcik6IFByb21pc2U8T0tORz4gPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChhcGlTZXJ2ZXIgKyAnL3VzZXIvJyArIGlkLCB7XG4gICAgY3JlZGVudGlhbHM6ICdpbmNsdWRlJyxcbiAgICBtb2RlOiAnY29ycycsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gIH0pLnRoZW4oYXN5bmMgKHgpID0+IHguanNvbigpKTtcbiAgcmV0dXJuIHJlcy5zdGF0dXMgPT09ICdzdWNjZXNzJyA/ICdPSycgOiAnTkcnO1xufVxuICA7XG5cbmV4cG9ydCBjb25zdCBhZG1pbkdldEhpc3RvcnkgPSBhc3luYyAoKTogUHJvbWlzZTx7IHN0YXR1czogT0tORywgZGF0YTogSGlzdG9yeURUT1tdIH0+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpU2VydmVyICsgJy9oaXN0b3J5Jywge1xuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIGlmIChyZXMuc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIHN0YXR1czogJ05HJyxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiAnT0snLFxuICAgIGRhdGE6IHJlcy5kYXRhLm1hcCgoZDogeyBjcmVhdGVkQXQ6IHN0cmluZyB8IG51bWJlciB8IERhdGU7IH0pID0+ICh7XG4gICAgICAuLi5kLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZShkLmNyZWF0ZWRBdCksXG4gICAgfSkpLFxuICB9O1xufVxuICA7XG5cbmV4cG9ydCBjb25zdCBhZG1pbkdldEhpc3RvcnlCeVVzZXJJZCA9IGFzeW5jIChpZDogbnVtYmVyKTogUHJvbWlzZTx7IHN0YXR1czogT0tORywgZGF0YTogSGlzdG9yeURUT1tdIH0+ID0+IHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpU2VydmVyICsgJy9oaXN0b3J5LycgKyBpZCwge1xuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB4Lmpzb24oKSk7XG4gIGlmIChyZXMuc3RhdHVzICE9PSAnc3VjY2VzcycpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogbnVsbCxcbiAgICAgIHN0YXR1czogJ05HJyxcbiAgICB9O1xuICB9XG4gIHJldHVybiB7XG4gICAgc3RhdHVzOiAnT0snLFxuICAgIGRhdGE6IHJlcy5kYXRhLm1hcCgoZDogeyBjcmVhdGVkQXQ6IHN0cmluZyB8IG51bWJlciB8IERhdGU7IH0pID0+ICh7XG4gICAgICAuLi5kLFxuICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZShkLmNyZWF0ZWRBdCksXG4gICAgfSkpLFxuICB9O1xufVxuICA7XG5cblxuZXhwb3J0IGNvbnN0IGdldFByb2dyYW1GaWxlID0gYXN5bmMgKCk6IFByb21pc2U8eyBzdGF0dXM6IE9LTkcsIGRhdGE6IHN0cmluZyB9PiA9PiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaVNlcnZlciArICcvZmlsZS9wcm9ncmFtJywge1xuICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBtZXRob2Q6ICdHRVQnLFxuICB9KS50aGVuKGFzeW5jICh4KSA9PiB7XG4gICAgaWYgKHguc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4geC50ZXh0KCk7XG4gIH0pO1xuICBpZiAocmVzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGE6IG51bGwsXG4gICAgICBzdGF0dXM6ICdORycsXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHN0YXR1czogJ09LJyxcbiAgICBkYXRhOiByZXMsXG4gIH07XG59XG4gIDtcbiJdLCJzb3VyY2VSb290IjoiIn0=