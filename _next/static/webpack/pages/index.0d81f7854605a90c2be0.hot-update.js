webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/AppHeader.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/AppHeader.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".AppHeader_root__2VMma, .AppHeader_userRoot__2TtKR {\\n  background-color: #982145;\\n  min-height: 96px;\\n  color: white;\\n  box-shadow: 0px 4px 10px #e07293;\\n  padding: 1em;\\n}\\n.AppHeader_root__2VMma .AppHeader_headerTitle__2E4B4, .AppHeader_userRoot__2TtKR .AppHeader_headerTitle__2E4B4 {\\n  height: 100%;\\n  font-size: calc(96px / 3);\\n  text-align: center;\\n  font-family: \\\"Sawarabi Gothic\\\", serif;\\n}\\n@media screen and (max-width: 600px) {\\n  .AppHeader_root__2VMma .AppHeader_headerTitle__2E4B4, .AppHeader_userRoot__2TtKR .AppHeader_headerTitle__2E4B4 {\\n    font-size: calc(96px / 5);\\n  }\\n}\\n\\n.AppHeader_userRoot__2TtKR {\\n  min-height: 0;\\n  min-height: initial;\\n}\\n\\n.AppHeader_headerLinkContainer__3cTfT {\\n  display: flex;\\n  width: 100%;\\n  justify-content: flex-end;\\n  padding-top: 1em;\\n  align-items: center;\\n}\\n@media screen and (max-width: 600px) {\\n  .AppHeader_headerLinkContainer__3cTfT {\\n    justify-content: center;\\n  }\\n}\\n\\n.AppHeader_appHeaderLink___RXiV {\\n  padding: 0.5em 1em;\\n  border: 1px solid white;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://AppHeader.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBCHW;EDIX,gBAAA;EACA,YCFgB;EDGhB,gCAAA;EACA,YAAA;AADF;AAGE;EACE,YAAA;EACA,yBAAA;EAIA,kBAAA;EACA,qCAAA;AAJJ;ACyCE;ED5CA;IAII,yBAAA;EAGJ;AACF;;AAGA;EAEE,aAAA;EAAA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,WAAA;EAIA,yBAAA;EACA,gBAAA;EACA,mBAAA;AAJF;ACwBE;ED5BF;IAII,uBAAA;EAIF;AACF;;AAEA;EACE,kBAAA;EACA,uBAAA;AACF\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.root {\\n  background-color: $main-color;\\n  min-height: $header-height;\\n  color: $text-main-color;\\n  box-shadow: 0px 4px 10px $main-shadow-color;\\n  padding: 1em;\\n\\n  .headerTitle {\\n    height: 100%;\\n    font-size: calc(#{$header-height} / 3);\\n    @include mqDown(sm) {\\n      font-size: calc(#{$header-height} / 5);\\n    }\\n    text-align: center;\\n    font-family: \\\"Sawarabi Gothic\\\", serif;\\n  }\\n}\\n\\n.userRoot {\\n  @extend .root;\\n  min-height: initial;\\n}\\n\\n.headerLinkContainer {\\n  display: flex;\\n  width: 100%;\\n  @include mqDown(sm) {\\n    justify-content: center;\\n  }\\n  justify-content: flex-end;\\n  padding-top: 1em;\\n  align-items: center;\\n}\\n\\n.appHeaderLink {\\n  padding: 0.5em 1em;\\n  border: 1px solid $text-main-color;\\n}\\n\",\"$main-color: rgb(random() * 255, random() * 255, random() * 255);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"AppHeader_root__2VMma\",\n\t\"userRoot\": \"AppHeader_userRoot__2TtKR\",\n\t\"headerTitle\": \"AppHeader_headerTitle__2E4B4\",\n\t\"headerLinkContainer\": \"AppHeader_headerLinkContainer__3cTfT\",\n\t\"appHeaderLink\": \"AppHeader_appHeaderLink___RXiV\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0FwcEhlYWRlci5tb2R1bGUuc2Nzcz8zZjI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx1REFBdUQsOEJBQThCLHFCQUFxQixpQkFBaUIscUNBQXFDLGlCQUFpQixHQUFHLGtIQUFrSCxpQkFBaUIsOEJBQThCLHVCQUF1Qiw0Q0FBNEMsR0FBRyx3Q0FBd0Msb0hBQW9ILGdDQUFnQyxLQUFLLEdBQUcsZ0NBQWdDLGtCQUFrQix3QkFBd0IsR0FBRywyQ0FBMkMsa0JBQWtCLGdCQUFnQiw4QkFBOEIscUJBQXFCLHdCQUF3QixHQUFHLHdDQUF3QywyQ0FBMkMsOEJBQThCLEtBQUssR0FBRyxxQ0FBcUMsdUJBQXVCLDRCQUE0QixHQUFHLE9BQU8sNkdBQTZHLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLGtEQUFrRCxXQUFXLGtDQUFrQywrQkFBK0IsNEJBQTRCLGdEQUFnRCxpQkFBaUIsb0JBQW9CLG1CQUFtQix3QkFBd0IsZUFBZSxNQUFNLDJCQUEyQiwwQkFBMEIsZUFBZSxNQUFNLE9BQU8seUJBQXlCLDhDQUE4QyxLQUFLLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLEdBQUcsMEJBQTBCLGtCQUFrQixnQkFBZ0IseUJBQXlCLDhCQUE4QixLQUFLLDhCQUE4QixxQkFBcUIsd0JBQXdCLEdBQUcsb0JBQW9CLHVCQUF1Qix1Q0FBdUMsR0FBRyxzRUFBc0UsMENBQTBDLDRDQUE0Qyw4Q0FBOEMsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELHlDQUF5QyxzREFBc0QscUNBQXFDLG9DQUFvQyxpREFBaUQsbURBQW1ELCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQzFySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9BcHBIZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXBwSGVhZGVyX3Jvb3RfXzJWTW1hLCAuQXBwSGVhZGVyX3VzZXJSb290X18yVHRLUiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTgyMTQ1O1xcbiAgbWluLWhlaWdodDogOTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAjZTA3MjkzO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4uQXBwSGVhZGVyX3Jvb3RfXzJWTW1hIC5BcHBIZWFkZXJfaGVhZGVyVGl0bGVfXzJFNEI0LCAuQXBwSGVhZGVyX3VzZXJSb290X18yVHRLUiAuQXBwSGVhZGVyX2hlYWRlclRpdGxlX18yRTRCNCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBmb250LXNpemU6IGNhbGMoOTZweCAvIDMpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaSBHb3RoaWNcXFwiLCBzZXJpZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5BcHBIZWFkZXJfcm9vdF9fMlZNbWEgLkFwcEhlYWRlcl9oZWFkZXJUaXRsZV9fMkU0QjQsIC5BcHBIZWFkZXJfdXNlclJvb3RfXzJUdEtSIC5BcHBIZWFkZXJfaGVhZGVyVGl0bGVfXzJFNEI0IHtcXG4gICAgZm9udC1zaXplOiBjYWxjKDk2cHggLyA1KTtcXG4gIH1cXG59XFxuXFxuLkFwcEhlYWRlcl91c2VyUm9vdF9fMlR0S1Ige1xcbiAgbWluLWhlaWdodDogMDtcXG4gIG1pbi1oZWlnaHQ6IGluaXRpYWw7XFxufVxcblxcbi5BcHBIZWFkZXJfaGVhZGVyTGlua0NvbnRhaW5lcl9fM2NUZlQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkFwcEhlYWRlcl9oZWFkZXJMaW5rQ29udGFpbmVyX18zY1RmVCB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG4uQXBwSGVhZGVyX2FwcEhlYWRlckxpbmtfX19SWGlWIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQXBwSGVhZGVyLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vdGhlbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHlCQ0hXO0VESVgsZ0JBQUE7RUFDQSxZQ0ZnQjtFREdoQixnQ0FBQTtFQUNBLFlBQUE7QUFERjtBQUdFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBSUEsa0JBQUE7RUFDQSxxQ0FBQTtBQUpKO0FDeUNFO0VENUNBO0lBSUkseUJBQUE7RUFHSjtBQUNGOztBQUdBO0VBRUUsYUFBQTtFQUFBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUlBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUpGO0FDd0JFO0VENUJGO0lBSUksdUJBQUE7RUFJRjtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vdGhlbWUuc2Nzc1xcXCI7XFxuXFxuLnJvb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XFxuICBtaW4taGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcXG4gIGNvbG9yOiAkdGV4dC1tYWluLWNvbG9yO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICRtYWluLXNoYWRvdy1jb2xvcjtcXG4gIHBhZGRpbmc6IDFlbTtcXG5cXG4gIC5oZWFkZXJUaXRsZSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiBjYWxjKCN7JGhlYWRlci1oZWlnaHR9IC8gMyk7XFxuICAgIEBpbmNsdWRlIG1xRG93bihzbSkge1xcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygjeyRoZWFkZXItaGVpZ2h0fSAvIDUpO1xcbiAgICB9XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaSBHb3RoaWNcXFwiLCBzZXJpZjtcXG4gIH1cXG59XFxuXFxuLnVzZXJSb290IHtcXG4gIEBleHRlbmQgLnJvb3Q7XFxuICBtaW4taGVpZ2h0OiBpbml0aWFsO1xcbn1cXG5cXG4uaGVhZGVyTGlua0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgcGFkZGluZy10b3A6IDFlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcHBIZWFkZXJMaW5rIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICR0ZXh0LW1haW4tY29sb3I7XFxufVxcblwiLFwiJG1haW4tY29sb3I6IHJnYihyYW5kb20oKSAqIDI1NSwgcmFuZG9tKCkgKiAyNTUsIHJhbmRvbSgpICogMjU1KTtcXG4kbGlnaHQtY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDc1JSk7XFxuJGxpZ2h0Mi1jb2xvcjogbGlnaHRlbigkbGlnaHQtY29sb3IsIDEwJSk7XFxuJHRleHQtbWFpbi1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kaGVhZGVyLWhlaWdodDogOTZweDtcXG4kbWFpbi1zaGFkb3ctY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1ibHVyLWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLXNoYWRvdy1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDUwJSk7XFxuJGJvcmRlci1tYWluLWNvbG9yOiByZ2IoMTg1LCAxODgsIDIzMyk7XFxuJGJvcmRlci1kYXJrLWNvbG9yOiBkYXJrZW4oJGJvcmRlci1tYWluLWNvbG9yLCA1MCUpO1xcblxcbiRlcnJvci1jb2xvcjogcmdiKDI1NSwgMTY0LCAxMzcpO1xcbiR2ZXJpZnktY29sb3I6IHJnYigxMzksIDI1NSwgMjAxKTtcXG4kZXJyb3ItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHZlcmlmeS1jb2xvciwgNTAlKTtcXG4kZXJyb3ItdGV4dC1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LXRleHQtY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcblxcbiRwYWdlLW1heC13aWR0aDogMTEwMHB4O1xcblxcbiRicmVha3BvaW50LXhzOiAwcHg7XFxuJGJyZWFrcG9pbnQtc206IDYwMHB4O1xcbiRicmVha3BvaW50LW1kOiA5NjBweDtcXG4kYnJlYWtwb2ludC1sZzogMTI4MHB4O1xcbiRicmVha3BvaW50LXhsOiAxOTIwcHg7XFxuJGJyZWFrcG9pbnQtNGs6IDI1NjBweDtcXG5cXG4kYnJlYWtwb2ludHM6IHhzLCBzbSwgbWQsIGxnLCB4bDtcXG4kYnJlYWtwb2ludC13aWR0aDogKFxcbiAgeHM6IDBweCxcXG4gIHNtOiA2MDBweCxcXG4gIG1kOiA5NjBweCxcXG4gIGxnOiAxMjgwcHgsXFxuICB4bDogMTkyMHB4LFxcbiAgNGs6IDI1NjBweCxcXG4pO1xcblxcbiRuZXh0LWJyZWFrcG9pbnRzOiAoXFxuICB4czogc20sXFxuICBzbTogbWQsXFxuICBtZDogbGcsXFxuICBsZzogeGwsXFxuICB4bDogNGssXFxuKTtcXG5cXG5AbWl4aW4gbXFVcCgkYnA6IG1kKSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkbmJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1xRG93bigkYnA6IG1kKSB7XFxuICAkbmJwOiBtYXAtZ2V0KCRuZXh0LWJyZWFrcG9pbnRzLCAkYnApO1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJGJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkFwcEhlYWRlcl9yb290X18yVk1tYVwiLFxuXHRcInVzZXJSb290XCI6IFwiQXBwSGVhZGVyX3VzZXJSb290X18yVHRLUlwiLFxuXHRcImhlYWRlclRpdGxlXCI6IFwiQXBwSGVhZGVyX2hlYWRlclRpdGxlX18yRTRCNFwiLFxuXHRcImhlYWRlckxpbmtDb250YWluZXJcIjogXCJBcHBIZWFkZXJfaGVhZGVyTGlua0NvbnRhaW5lcl9fM2NUZlRcIixcblx0XCJhcHBIZWFkZXJMaW5rXCI6IFwiQXBwSGVhZGVyX2FwcEhlYWRlckxpbmtfX19SWGlWXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/AppHeader.module.scss\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/BigHeader.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/BigHeader.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".BigHeader_root__1OW8C {\\n  background-color: #84b4ed;\\n  height: 80vh;\\n  color: white;\\n  box-shadow: 0px 4px 10px white;\\n  padding: 0 3em;\\n}\\n.BigHeader_root__1OW8C .BigHeader_headerTitle__3wsmP {\\n  position: absolute;\\n  font-size: 6em;\\n  text-align: left;\\n  font-family: \\\"Sawarabi Gothic\\\", serif;\\n}\\n@media screen and (max-width: 600px) {\\n  .BigHeader_root__1OW8C .BigHeader_headerTitle__3wsmP {\\n    font-size: 3em;\\n  }\\n}\\n\\n.BigHeader_appHeaderContainer__2bKfF {\\n  position: fixed;\\n  width: 100%;\\n  top: 0;\\n  z-index: 99;\\n  transform: translateY(-50vh);\\n  transition: all 0.5s ease;\\n}\\n\\n.BigHeader_childrenContainer__9H9mp {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: flex-end;\\n}\\n@media screen and (max-width: 600px) {\\n  .BigHeader_childrenContainer__9H9mp {\\n    justify-content: center;\\n  }\\n}\\n.BigHeader_childrenContainer__9H9mp > div {\\n  margin-bottom: 1em;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://BigHeader.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBCHW;EDIX,YAAA;EACA,YCFgB;EDGhB,8BAAA;EACA,cAAA;AADF;AAGE;EACE,kBAAA;EACA,cAAA;EAIA,gBAAA;EACA,qCAAA;AAJJ;ACyCE;ED5CA;IAII,cAAA;EAGJ;AACF;;AAGA;EACE,eAAA;EACA,WAAA;EACA,MAAA;EACA,WAAA;EACA,4BAAA;EACA,yBAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EAIA,yBAAA;EACA,qBAAA;AAHF;ACmBE;EDxBF;IAKI,uBAAA;EAIF;AACF;AADE;EACE,kBAAA;AAGJ\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.root {\\n  background-color: $main-color;\\n  height: 80vh;\\n  color: $text-main-color;\\n  box-shadow: 0px 4px 10px $main-shadow-color;\\n  padding: 0 3em;\\n\\n  .headerTitle {\\n    position: absolute;\\n    font-size: 6em;\\n    @include mqDown(sm) {\\n      font-size: 3em;\\n    }\\n    text-align: left;\\n    font-family: \\\"Sawarabi Gothic\\\", serif;\\n  }\\n}\\n\\n.appHeaderContainer {\\n  position: fixed;\\n  width: 100%;\\n  top: 0;\\n  z-index: 99;\\n  transform: translateY(-50vh);\\n  transition: all 0.5s ease;\\n}\\n\\n.childrenContainer {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  @include mqDown(sm) {\\n    justify-content: center;\\n  }\\n  justify-content: flex-end;\\n  align-items: flex-end;\\n  & > div {\\n    margin-bottom: 1em;\\n  }\\n}\\n\",\"$main-color: rgb(random() * 255, random() * 255, random() * 255);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"BigHeader_root__1OW8C\",\n\t\"headerTitle\": \"BigHeader_headerTitle__3wsmP\",\n\t\"appHeaderContainer\": \"BigHeader_appHeaderContainer__2bKfF\",\n\t\"childrenContainer\": \"BigHeader_childrenContainer__9H9mp\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0JpZ0hlYWRlci5tb2R1bGUuc2Nzcz84M2JkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywyQkFBMkIsOEJBQThCLGlCQUFpQixpQkFBaUIsbUNBQW1DLG1CQUFtQixHQUFHLHdEQUF3RCx1QkFBdUIsbUJBQW1CLHFCQUFxQiw0Q0FBNEMsR0FBRyx3Q0FBd0MsMERBQTBELHFCQUFxQixLQUFLLEdBQUcsMENBQTBDLG9CQUFvQixnQkFBZ0IsV0FBVyxnQkFBZ0IsaUNBQWlDLDhCQUE4QixHQUFHLHlDQUF5QyxnQkFBZ0IsaUJBQWlCLGtCQUFrQiw4QkFBOEIsMEJBQTBCLEdBQUcsd0NBQXdDLHlDQUF5Qyw4QkFBOEIsS0FBSyxHQUFHLDZDQUE2Qyx1QkFBdUIsR0FBRyxPQUFPLDZHQUE2RyxXQUFXLFVBQVUsV0FBVyxZQUFZLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxrREFBa0QsV0FBVyxrQ0FBa0MsaUJBQWlCLDRCQUE0QixnREFBZ0QsbUJBQW1CLG9CQUFvQix5QkFBeUIscUJBQXFCLDJCQUEyQix1QkFBdUIsT0FBTyx1QkFBdUIsOENBQThDLEtBQUssR0FBRyx5QkFBeUIsb0JBQW9CLGdCQUFnQixXQUFXLGdCQUFnQixpQ0FBaUMsOEJBQThCLEdBQUcsd0JBQXdCLGdCQUFnQixpQkFBaUIsa0JBQWtCLHlCQUF5Qiw4QkFBOEIsS0FBSyw4QkFBOEIsMEJBQTBCLGFBQWEseUJBQXlCLEtBQUssR0FBRyxzRUFBc0UsMENBQTBDLDRDQUE0Qyw4Q0FBOEMsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELHlDQUF5QyxzREFBc0QscUNBQXFDLG9DQUFvQyxpREFBaUQsbURBQW1ELCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQzFtSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvQmlnSGVhZGVyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkJpZ0hlYWRlcl9yb290X18xT1c4QyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRiNGVkO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHdoaXRlO1xcbiAgcGFkZGluZzogMCAzZW07XFxufVxcbi5CaWdIZWFkZXJfcm9vdF9fMU9XOEMgLkJpZ0hlYWRlcl9oZWFkZXJUaXRsZV9fM3dzbVAge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZm9udC1zaXplOiA2ZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaSBHb3RoaWNcXFwiLCBzZXJpZjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5CaWdIZWFkZXJfcm9vdF9fMU9XOEMgLkJpZ0hlYWRlcl9oZWFkZXJUaXRsZV9fM3dzbVAge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gIH1cXG59XFxuXFxuLkJpZ0hlYWRlcl9hcHBIZWFkZXJDb250YWluZXJfXzJiS2ZGIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwdmgpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcXG59XFxuXFxuLkJpZ0hlYWRlcl9jaGlsZHJlbkNvbnRhaW5lcl9fOUg5bXAge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5CaWdIZWFkZXJfY2hpbGRyZW5Db250YWluZXJfXzlIOW1wIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxufVxcbi5CaWdIZWFkZXJfY2hpbGRyZW5Db250YWluZXJfXzlIOW1wID4gZGl2IHtcXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0JpZ0hlYWRlci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx5QkNIVztFRElYLFlBQUE7RUFDQSxZQ0ZnQjtFREdoQiw4QkFBQTtFQUNBLGNBQUE7QUFERjtBQUdFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBSUEsZ0JBQUE7RUFDQSxxQ0FBQTtBQUpKO0FDeUNFO0VENUNBO0lBSUksY0FBQTtFQUdKO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBSUEseUJBQUE7RUFDQSxxQkFBQTtBQUhGO0FDbUJFO0VEeEJGO0lBS0ksdUJBQUE7RUFJRjtBQUNGO0FBREU7RUFDRSxrQkFBQTtBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vdGhlbWUuc2Nzc1xcXCI7XFxuXFxuLnJvb3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBjb2xvcjogJHRleHQtbWFpbi1jb2xvcjtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAkbWFpbi1zaGFkb3ctY29sb3I7XFxuICBwYWRkaW5nOiAwIDNlbTtcXG5cXG4gIC5oZWFkZXJUaXRsZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZm9udC1zaXplOiA2ZW07XFxuICAgIEBpbmNsdWRlIG1xRG93bihzbSkge1xcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICB9XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIiwgc2VyaWY7XFxuICB9XFxufVxcblxcbi5hcHBIZWFkZXJDb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTB2aCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uY2hpbGRyZW5Db250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgQGluY2x1ZGUgbXFEb3duKHNtKSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICYgPiBkaXYge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICB9XFxufVxcblwiLFwiJG1haW4tY29sb3I6IHJnYihyYW5kb20oKSAqIDI1NSwgcmFuZG9tKCkgKiAyNTUsIHJhbmRvbSgpICogMjU1KTtcXG4kbGlnaHQtY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDc1JSk7XFxuJGxpZ2h0Mi1jb2xvcjogbGlnaHRlbigkbGlnaHQtY29sb3IsIDEwJSk7XFxuJHRleHQtbWFpbi1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kaGVhZGVyLWhlaWdodDogOTZweDtcXG4kbWFpbi1zaGFkb3ctY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1ibHVyLWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLXNoYWRvdy1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDUwJSk7XFxuJGJvcmRlci1tYWluLWNvbG9yOiByZ2IoMTg1LCAxODgsIDIzMyk7XFxuJGJvcmRlci1kYXJrLWNvbG9yOiBkYXJrZW4oJGJvcmRlci1tYWluLWNvbG9yLCA1MCUpO1xcblxcbiRlcnJvci1jb2xvcjogcmdiKDI1NSwgMTY0LCAxMzcpO1xcbiR2ZXJpZnktY29sb3I6IHJnYigxMzksIDI1NSwgMjAxKTtcXG4kZXJyb3ItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHZlcmlmeS1jb2xvciwgNTAlKTtcXG4kZXJyb3ItdGV4dC1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LXRleHQtY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcblxcbiRwYWdlLW1heC13aWR0aDogMTEwMHB4O1xcblxcbiRicmVha3BvaW50LXhzOiAwcHg7XFxuJGJyZWFrcG9pbnQtc206IDYwMHB4O1xcbiRicmVha3BvaW50LW1kOiA5NjBweDtcXG4kYnJlYWtwb2ludC1sZzogMTI4MHB4O1xcbiRicmVha3BvaW50LXhsOiAxOTIwcHg7XFxuJGJyZWFrcG9pbnQtNGs6IDI1NjBweDtcXG5cXG4kYnJlYWtwb2ludHM6IHhzLCBzbSwgbWQsIGxnLCB4bDtcXG4kYnJlYWtwb2ludC13aWR0aDogKFxcbiAgeHM6IDBweCxcXG4gIHNtOiA2MDBweCxcXG4gIG1kOiA5NjBweCxcXG4gIGxnOiAxMjgwcHgsXFxuICB4bDogMTkyMHB4LFxcbiAgNGs6IDI1NjBweCxcXG4pO1xcblxcbiRuZXh0LWJyZWFrcG9pbnRzOiAoXFxuICB4czogc20sXFxuICBzbTogbWQsXFxuICBtZDogbGcsXFxuICBsZzogeGwsXFxuICB4bDogNGssXFxuKTtcXG5cXG5AbWl4aW4gbXFVcCgkYnA6IG1kKSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkbmJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1xRG93bigkYnA6IG1kKSB7XFxuICAkbmJwOiBtYXAtZ2V0KCRuZXh0LWJyZWFrcG9pbnRzLCAkYnApO1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJGJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkJpZ0hlYWRlcl9yb290X18xT1c4Q1wiLFxuXHRcImhlYWRlclRpdGxlXCI6IFwiQmlnSGVhZGVyX2hlYWRlclRpdGxlX18zd3NtUFwiLFxuXHRcImFwcEhlYWRlckNvbnRhaW5lclwiOiBcIkJpZ0hlYWRlcl9hcHBIZWFkZXJDb250YWluZXJfXzJiS2ZGXCIsXG5cdFwiY2hpbGRyZW5Db250YWluZXJcIjogXCJCaWdIZWFkZXJfY2hpbGRyZW5Db250YWluZXJfXzlIOW1wXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/BigHeader.module.scss\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/SectionHeader.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/SectionHeader.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".SectionHeader_sectionHeader__3HjiX {\\n  max-width: 1100px;\\n  padding-top: 0.5em;\\n  padding-bottom: 1em;\\n  font-size: 2em;\\n  text-align: left;\\n  width: 100%;\\n  font-family: \\\"Kosugi\\\";\\n}\\n.SectionHeader_sectionHeader__3HjiX::before {\\n  content: \\\"\\\";\\n  width: 100%;\\n  display: block;\\n  height: 10px;\\n  background-color: #86d4ed;\\n  max-width: 2.8em;\\n  margin-bottom: 0.3em;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://SectionHeader.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,iBCee;EDdf,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;AADF;AAGE;EACE,WAAA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,yBChBS;EDiBT,gBAAA;EACA,oBAAA;AADJ\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.sectionHeader {\\n  max-width: $page-max-width;\\n  padding-top: 0.5em;\\n  padding-bottom: 1em;\\n  font-size: 2em;\\n  text-align: left;\\n  width: 100%;\\n  font-family: \\\"Kosugi\\\";\\n\\n  &::before {\\n    content: \\\"\\\";\\n    width: 100%;\\n    display: block;\\n    height: 10px;\\n    background-color: $main-color;\\n    max-width: 2.8em;\\n    margin-bottom: 0.3em;\\n  }\\n}\\n\",\"$main-color: rgb(random() * 255, random() * 255, random() * 255);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"sectionHeader\": \"SectionHeader_sectionHeader__3HjiX\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1NlY3Rpb25IZWFkZXIubW9kdWxlLnNjc3M/MDFkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsd0NBQXdDLHNCQUFzQix1QkFBdUIsd0JBQXdCLG1CQUFtQixxQkFBcUIsZ0JBQWdCLDRCQUE0QixHQUFHLCtDQUErQyxrQkFBa0IsZ0JBQWdCLG1CQUFtQixpQkFBaUIsOEJBQThCLHFCQUFxQix5QkFBeUIsR0FBRyxPQUFPLGlIQUFpSCxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLGtEQUFrRCxvQkFBb0IsK0JBQStCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLHFCQUFxQixnQkFBZ0IsNEJBQTRCLGlCQUFpQixvQkFBb0Isa0JBQWtCLHFCQUFxQixtQkFBbUIsb0NBQW9DLHVCQUF1QiwyQkFBMkIsS0FBSyxHQUFHLHNFQUFzRSwwQ0FBMEMsNENBQTRDLDhDQUE4Qyx1QkFBdUIsZ0RBQWdELHVEQUF1RCx5REFBeUQseUNBQXlDLHNEQUFzRCxxQ0FBcUMsb0NBQW9DLGlEQUFpRCxtREFBbUQsK0NBQStDLGlEQUFpRCw0QkFBNEIsd0JBQXdCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHlCQUF5Qix5QkFBeUIscUNBQXFDLCtHQUErRyxtRkFBbUYsMEJBQTBCLHFFQUFxRSxlQUFlLEtBQUssR0FBRyw0QkFBNEIsMENBQTBDLG9FQUFvRSxlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDM2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9TZWN0aW9uSGVhZGVyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlNlY3Rpb25IZWFkZXJfc2VjdGlvbkhlYWRlcl9fM0hqaVgge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIktvc3VnaVxcXCI7XFxufVxcbi5TZWN0aW9uSGVhZGVyX3NlY3Rpb25IZWFkZXJfXzNIamlYOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2ZDRlZDtcXG4gIG1heC13aWR0aDogMi44ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1NlY3Rpb25IZWFkZXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly90aGVtZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJDZWU7RURkZixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNoQlM7RURpQlQsZ0JBQUE7RUFDQSxvQkFBQTtBQURKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vdGhlbWUuc2Nzc1xcXCI7XFxuXFxuLnNlY3Rpb25IZWFkZXIge1xcbiAgbWF4LXdpZHRoOiAkcGFnZS1tYXgtd2lkdGg7XFxuICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIktvc3VnaVxcXCI7XFxuXFxuICAmOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xcbiAgICBtYXgtd2lkdGg6IDIuOGVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG4gIH1cXG59XFxuXCIsXCIkbWFpbi1jb2xvcjogcmdiKHJhbmRvbSgpICogMjU1LCByYW5kb20oKSAqIDI1NSwgcmFuZG9tKCkgKiAyNTUpO1xcbiRsaWdodC1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kbGlnaHQyLWNvbG9yOiBsaWdodGVuKCRsaWdodC1jb2xvciwgMTAlKTtcXG4kdGV4dC1tYWluLWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCA3NSUpO1xcbiRoZWFkZXItaGVpZ2h0OiA5NnB4O1xcbiRtYWluLXNoYWRvdy1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLWJsdXItY29sb3I6IGRhcmtlbigkdGV4dC1tYWluLWNvbG9yLCAzMCUpO1xcbiR0ZXh0LW1haW4tc2hhZG93LWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgNTAlKTtcXG4kYm9yZGVyLW1haW4tY29sb3I6IHJnYigxODUsIDE4OCwgMjMzKTtcXG4kYm9yZGVyLWRhcmstY29sb3I6IGRhcmtlbigkYm9yZGVyLW1haW4tY29sb3IsIDUwJSk7XFxuXFxuJGVycm9yLWNvbG9yOiByZ2IoMjU1LCAxNjQsIDEzNyk7XFxuJHZlcmlmeS1jb2xvcjogcmdiKDEzOSwgMjU1LCAyMDEpO1xcbiRlcnJvci1ib3JkZXItY29sb3I6IGRhcmtlbigkZXJyb3ItY29sb3IsIDUwJSk7XFxuJHZlcmlmeS1ib3JkZXItY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcbiRlcnJvci10ZXh0LWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktdGV4dC1jb2xvcjogZGFya2VuKCR2ZXJpZnktY29sb3IsIDUwJSk7XFxuXFxuJHBhZ2UtbWF4LXdpZHRoOiAxMTAwcHg7XFxuXFxuJGJyZWFrcG9pbnQteHM6IDBweDtcXG4kYnJlYWtwb2ludC1zbTogNjAwcHg7XFxuJGJyZWFrcG9pbnQtbWQ6IDk2MHB4O1xcbiRicmVha3BvaW50LWxnOiAxMjgwcHg7XFxuJGJyZWFrcG9pbnQteGw6IDE5MjBweDtcXG4kYnJlYWtwb2ludC00azogMjU2MHB4O1xcblxcbiRicmVha3BvaW50czogeHMsIHNtLCBtZCwgbGcsIHhsO1xcbiRicmVha3BvaW50LXdpZHRoOiAoXFxuICB4czogMHB4LFxcbiAgc206IDYwMHB4LFxcbiAgbWQ6IDk2MHB4LFxcbiAgbGc6IDEyODBweCxcXG4gIHhsOiAxOTIwcHgsXFxuICA0azogMjU2MHB4LFxcbik7XFxuXFxuJG5leHQtYnJlYWtwb2ludHM6IChcXG4gIHhzOiBzbSxcXG4gIHNtOiBtZCxcXG4gIG1kOiBsZyxcXG4gIGxnOiB4bCxcXG4gIHhsOiA0ayxcXG4pO1xcblxcbkBtaXhpbiBtcVVwKCRicDogbWQpIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnQtd2lkdGgsICRuYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gbXFEb3duKCRicDogbWQpIHtcXG4gICRuYnA6IG1hcC1nZXQoJG5leHQtYnJlYWtwb2ludHMsICRicCk7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzZWN0aW9uSGVhZGVyXCI6IFwiU2VjdGlvbkhlYWRlcl9zZWN0aW9uSGVhZGVyX18zSGppWFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/SectionHeader.module.scss\n");

/***/ })

})