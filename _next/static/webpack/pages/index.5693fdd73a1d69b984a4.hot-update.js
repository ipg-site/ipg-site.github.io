webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/AppHeader.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/AppHeader.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".AppHeader_root__2VMma, .AppHeader_userRoot__2TtKR {\\n  background-color: #7a7ef4;\\n  min-height: 96px;\\n  color: white;\\n  box-shadow: 0px 4px 10px white;\\n  padding: 1em;\\n}\\n.AppHeader_root__2VMma .AppHeader_headerTitle__2E4B4, .AppHeader_userRoot__2TtKR .AppHeader_headerTitle__2E4B4 {\\n  height: 100%;\\n  font-size: calc(96px / 3);\\n  text-align: center;\\n  font-family: \\\"Sawarabi Gothic\\\", serif;\\n}\\n@media screen and (max-width: 600px) {\\n  .AppHeader_root__2VMma .AppHeader_headerTitle__2E4B4, .AppHeader_userRoot__2TtKR .AppHeader_headerTitle__2E4B4 {\\n    font-size: calc(96px / 5);\\n  }\\n}\\n\\n.AppHeader_userRoot__2TtKR {\\n  min-height: 0;\\n  min-height: initial;\\n}\\n\\n.AppHeader_headerLinkContainer__3cTfT {\\n  display: flex;\\n  width: 100%;\\n  justify-content: flex-end;\\n  padding-top: 1em;\\n  align-items: center;\\n}\\n@media screen and (max-width: 600px) {\\n  .AppHeader_headerLinkContainer__3cTfT {\\n    justify-content: center;\\n  }\\n}\\n\\n.AppHeader_appHeaderLink___RXiV {\\n  padding: 0.5em 1em;\\n  border: 1px solid white;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://AppHeader.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBCHW;EDIX,gBAAA;EACA,YCFgB;EDGhB,8BAAA;EACA,YAAA;AADF;AAGE;EACE,YAAA;EACA,yBAAA;EAIA,kBAAA;EACA,qCAAA;AAJJ;ACyCE;ED5CA;IAII,yBAAA;EAGJ;AACF;;AAGA;EAEE,aAAA;EAAA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,WAAA;EAIA,yBAAA;EACA,gBAAA;EACA,mBAAA;AAJF;ACwBE;ED5BF;IAII,uBAAA;EAIF;AACF;;AAEA;EACE,kBAAA;EACA,uBAAA;AACF\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.root {\\n  background-color: $main-color;\\n  min-height: $header-height;\\n  color: $text-main-color;\\n  box-shadow: 0px 4px 10px $main-shadow-color;\\n  padding: 1em;\\n\\n  .headerTitle {\\n    height: 100%;\\n    font-size: calc(#{$header-height} / 3);\\n    @include mqDown(sm) {\\n      font-size: calc(#{$header-height} / 5);\\n    }\\n    text-align: center;\\n    font-family: \\\"Sawarabi Gothic\\\", serif;\\n  }\\n}\\n\\n.userRoot {\\n  @extend .root;\\n  min-height: initial;\\n}\\n\\n.headerLinkContainer {\\n  display: flex;\\n  width: 100%;\\n  @include mqDown(sm) {\\n    justify-content: center;\\n  }\\n  justify-content: flex-end;\\n  padding-top: 1em;\\n  align-items: center;\\n}\\n\\n.appHeaderLink {\\n  padding: 0.5em 1em;\\n  border: 1px solid $text-main-color;\\n}\\n\",\"$main-color: rgb(random() * 255, random() * 255, random() * 255);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"AppHeader_root__2VMma\",\n\t\"userRoot\": \"AppHeader_userRoot__2TtKR\",\n\t\"headerTitle\": \"AppHeader_headerTitle__2E4B4\",\n\t\"headerLinkContainer\": \"AppHeader_headerLinkContainer__3cTfT\",\n\t\"appHeaderLink\": \"AppHeader_appHeaderLink___RXiV\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0FwcEhlYWRlci5tb2R1bGUuc2Nzcz8zZjI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx1REFBdUQsOEJBQThCLHFCQUFxQixpQkFBaUIsbUNBQW1DLGlCQUFpQixHQUFHLGtIQUFrSCxpQkFBaUIsOEJBQThCLHVCQUF1Qiw0Q0FBNEMsR0FBRyx3Q0FBd0Msb0hBQW9ILGdDQUFnQyxLQUFLLEdBQUcsZ0NBQWdDLGtCQUFrQix3QkFBd0IsR0FBRywyQ0FBMkMsa0JBQWtCLGdCQUFnQiw4QkFBOEIscUJBQXFCLHdCQUF3QixHQUFHLHdDQUF3QywyQ0FBMkMsOEJBQThCLEtBQUssR0FBRyxxQ0FBcUMsdUJBQXVCLDRCQUE0QixHQUFHLE9BQU8sNkdBQTZHLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLGtEQUFrRCxXQUFXLGtDQUFrQywrQkFBK0IsNEJBQTRCLGdEQUFnRCxpQkFBaUIsb0JBQW9CLG1CQUFtQix3QkFBd0IsZUFBZSxNQUFNLDJCQUEyQiwwQkFBMEIsZUFBZSxNQUFNLE9BQU8seUJBQXlCLDhDQUE4QyxLQUFLLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLEdBQUcsMEJBQTBCLGtCQUFrQixnQkFBZ0IseUJBQXlCLDhCQUE4QixLQUFLLDhCQUE4QixxQkFBcUIsd0JBQXdCLEdBQUcsb0JBQW9CLHVCQUF1Qix1Q0FBdUMsR0FBRyxzRUFBc0UsMENBQTBDLDRDQUE0Qyw4Q0FBOEMsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELHlDQUF5QyxzREFBc0QscUNBQXFDLG9DQUFvQyxpREFBaUQsbURBQW1ELCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQ3hySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9BcHBIZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXBwSGVhZGVyX3Jvb3RfXzJWTW1hLCAuQXBwSGVhZGVyX3VzZXJSb290X18yVHRLUiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2E3ZWY0O1xcbiAgbWluLWhlaWdodDogOTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCB3aGl0ZTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLkFwcEhlYWRlcl9yb290X18yVk1tYSAuQXBwSGVhZGVyX2hlYWRlclRpdGxlX18yRTRCNCwgLkFwcEhlYWRlcl91c2VyUm9vdF9fMlR0S1IgLkFwcEhlYWRlcl9oZWFkZXJUaXRsZV9fMkU0QjQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiBjYWxjKDk2cHggLyAzKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIiwgc2VyaWY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuQXBwSGVhZGVyX3Jvb3RfXzJWTW1hIC5BcHBIZWFkZXJfaGVhZGVyVGl0bGVfXzJFNEI0LCAuQXBwSGVhZGVyX3VzZXJSb290X18yVHRLUiAuQXBwSGVhZGVyX2hlYWRlclRpdGxlX18yRTRCNCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg5NnB4IC8gNSk7XFxuICB9XFxufVxcblxcbi5BcHBIZWFkZXJfdXNlclJvb3RfXzJUdEtSIHtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBtaW4taGVpZ2h0OiBpbml0aWFsO1xcbn1cXG5cXG4uQXBwSGVhZGVyX2hlYWRlckxpbmtDb250YWluZXJfXzNjVGZUIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXRvcDogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5BcHBIZWFkZXJfaGVhZGVyTGlua0NvbnRhaW5lcl9fM2NUZlQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLkFwcEhlYWRlcl9hcHBIZWFkZXJMaW5rX19fUlhpViB7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0FwcEhlYWRlci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx5QkNIVztFRElYLGdCQUFBO0VBQ0EsWUNGZ0I7RURHaEIsOEJBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUlBLGtCQUFBO0VBQ0EscUNBQUE7QUFKSjtBQ3lDRTtFRDVDQTtJQUlJLHlCQUFBO0VBR0o7QUFDRjs7QUFHQTtFQUVFLGFBQUE7RUFBQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFJQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQ3dCRTtFRDVCRjtJQUlJLHVCQUFBO0VBSUY7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3RoZW1lLnNjc3NcXFwiO1xcblxcbi5yb290IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xcbiAgbWluLWhlaWdodDogJGhlYWRlci1oZWlnaHQ7XFxuICBjb2xvcjogJHRleHQtbWFpbi1jb2xvcjtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAkbWFpbi1zaGFkb3ctY29sb3I7XFxuICBwYWRkaW5nOiAxZW07XFxuXFxuICAuaGVhZGVyVGl0bGUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygjeyRoZWFkZXItaGVpZ2h0fSAvIDMpO1xcbiAgICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAgICBmb250LXNpemU6IGNhbGMoI3skaGVhZGVyLWhlaWdodH0gLyA1KTtcXG4gICAgfVxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIiwgc2VyaWY7XFxuICB9XFxufVxcblxcbi51c2VyUm9vdCB7XFxuICBAZXh0ZW5kIC5yb290O1xcbiAgbWluLWhlaWdodDogaW5pdGlhbDtcXG59XFxuXFxuLmhlYWRlckxpbmtDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgQGluY2x1ZGUgbXFEb3duKHNtKSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwSGVhZGVyTGluayB7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAkdGV4dC1tYWluLWNvbG9yO1xcbn1cXG5cIixcIiRtYWluLWNvbG9yOiByZ2IocmFuZG9tKCkgKiAyNTUsIHJhbmRvbSgpICogMjU1LCByYW5kb20oKSAqIDI1NSk7XFxuJGxpZ2h0LWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCA3NSUpO1xcbiRsaWdodDItY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0LWNvbG9yLCAxMCUpO1xcbiR0ZXh0LW1haW4tY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDc1JSk7XFxuJGhlYWRlci1oZWlnaHQ6IDk2cHg7XFxuJG1haW4tc2hhZG93LWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCAzMCUpO1xcbiR0ZXh0LW1haW4tYmx1ci1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1zaGFkb3ctY29sb3I6IGRhcmtlbigkdGV4dC1tYWluLWNvbG9yLCA1MCUpO1xcbiRib3JkZXItbWFpbi1jb2xvcjogcmdiKDE4NSwgMTg4LCAyMzMpO1xcbiRib3JkZXItZGFyay1jb2xvcjogZGFya2VuKCRib3JkZXItbWFpbi1jb2xvciwgNTAlKTtcXG5cXG4kZXJyb3ItY29sb3I6IHJnYigyNTUsIDE2NCwgMTM3KTtcXG4kdmVyaWZ5LWNvbG9yOiByZ2IoMTM5LCAyNTUsIDIwMSk7XFxuJGVycm9yLWJvcmRlci1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LWJvcmRlci1jb2xvcjogZGFya2VuKCR2ZXJpZnktY29sb3IsIDUwJSk7XFxuJGVycm9yLXRleHQtY29sb3I6IGRhcmtlbigkZXJyb3ItY29sb3IsIDUwJSk7XFxuJHZlcmlmeS10ZXh0LWNvbG9yOiBkYXJrZW4oJHZlcmlmeS1jb2xvciwgNTAlKTtcXG5cXG4kcGFnZS1tYXgtd2lkdGg6IDExMDBweDtcXG5cXG4kYnJlYWtwb2ludC14czogMHB4O1xcbiRicmVha3BvaW50LXNtOiA2MDBweDtcXG4kYnJlYWtwb2ludC1tZDogOTYwcHg7XFxuJGJyZWFrcG9pbnQtbGc6IDEyODBweDtcXG4kYnJlYWtwb2ludC14bDogMTkyMHB4O1xcbiRicmVha3BvaW50LTRrOiAyNTYwcHg7XFxuXFxuJGJyZWFrcG9pbnRzOiB4cywgc20sIG1kLCBsZywgeGw7XFxuJGJyZWFrcG9pbnQtd2lkdGg6IChcXG4gIHhzOiAwcHgsXFxuICBzbTogNjAwcHgsXFxuICBtZDogOTYwcHgsXFxuICBsZzogMTI4MHB4LFxcbiAgeGw6IDE5MjBweCxcXG4gIDRrOiAyNTYwcHgsXFxuKTtcXG5cXG4kbmV4dC1icmVha3BvaW50czogKFxcbiAgeHM6IHNtLFxcbiAgc206IG1kLFxcbiAgbWQ6IGxnLFxcbiAgbGc6IHhsLFxcbiAgeGw6IDRrLFxcbik7XFxuXFxuQG1peGluIG1xVXAoJGJwOiBtZCkge1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJG5icCkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBtcURvd24oJGJwOiBtZCkge1xcbiAgJG5icDogbWFwLWdldCgkbmV4dC1icmVha3BvaW50cywgJGJwKTtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnQtd2lkdGgsICRicCkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInJvb3RcIjogXCJBcHBIZWFkZXJfcm9vdF9fMlZNbWFcIixcblx0XCJ1c2VyUm9vdFwiOiBcIkFwcEhlYWRlcl91c2VyUm9vdF9fMlR0S1JcIixcblx0XCJoZWFkZXJUaXRsZVwiOiBcIkFwcEhlYWRlcl9oZWFkZXJUaXRsZV9fMkU0QjRcIixcblx0XCJoZWFkZXJMaW5rQ29udGFpbmVyXCI6IFwiQXBwSGVhZGVyX2hlYWRlckxpbmtDb250YWluZXJfXzNjVGZUXCIsXG5cdFwiYXBwSGVhZGVyTGlua1wiOiBcIkFwcEhlYWRlcl9hcHBIZWFkZXJMaW5rX19fUlhpVlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/AppHeader.module.scss\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/BigHeader.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/BigHeader.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".BigHeader_root__1OW8C {\\n  background-color: #0ea681;\\n  height: 80vh;\\n  color: white;\\n  box-shadow: 0px 4px 10px #5cf1cd;\\n  padding: 0 3em;\\n}\\n.BigHeader_root__1OW8C .BigHeader_headerTitle__3wsmP {\\n  position: absolute;\\n  font-size: 6em;\\n  text-align: left;\\n  font-family: \\\"Sawarabi Gothic\\\", serif;\\n}\\n@media screen and (max-width: 600px) {\\n  .BigHeader_root__1OW8C .BigHeader_headerTitle__3wsmP {\\n    font-size: 3em;\\n  }\\n}\\n\\n.BigHeader_appHeaderContainer__2bKfF {\\n  position: fixed;\\n  width: 100%;\\n  top: 0;\\n  z-index: 99;\\n  transform: translateY(-50vh);\\n  transition: all 0.5s ease;\\n}\\n\\n.BigHeader_childrenContainer__9H9mp {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  justify-content: flex-end;\\n  align-items: flex-end;\\n}\\n@media screen and (max-width: 600px) {\\n  .BigHeader_childrenContainer__9H9mp {\\n    justify-content: center;\\n  }\\n}\\n.BigHeader_childrenContainer__9H9mp > div {\\n  margin-bottom: 1em;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://BigHeader.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,yBCHW;EDIX,YAAA;EACA,YCFgB;EDGhB,gCAAA;EACA,cAAA;AADF;AAGE;EACE,kBAAA;EACA,cAAA;EAIA,gBAAA;EACA,qCAAA;AAJJ;ACyCE;ED5CA;IAII,cAAA;EAGJ;AACF;;AAGA;EACE,eAAA;EACA,WAAA;EACA,MAAA;EACA,WAAA;EACA,4BAAA;EACA,yBAAA;AAAF;;AAGA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EAIA,yBAAA;EACA,qBAAA;AAHF;ACmBE;EDxBF;IAKI,uBAAA;EAIF;AACF;AADE;EACE,kBAAA;AAGJ\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.root {\\n  background-color: $main-color;\\n  height: 80vh;\\n  color: $text-main-color;\\n  box-shadow: 0px 4px 10px $main-shadow-color;\\n  padding: 0 3em;\\n\\n  .headerTitle {\\n    position: absolute;\\n    font-size: 6em;\\n    @include mqDown(sm) {\\n      font-size: 3em;\\n    }\\n    text-align: left;\\n    font-family: \\\"Sawarabi Gothic\\\", serif;\\n  }\\n}\\n\\n.appHeaderContainer {\\n  position: fixed;\\n  width: 100%;\\n  top: 0;\\n  z-index: 99;\\n  transform: translateY(-50vh);\\n  transition: all 0.5s ease;\\n}\\n\\n.childrenContainer {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  @include mqDown(sm) {\\n    justify-content: center;\\n  }\\n  justify-content: flex-end;\\n  align-items: flex-end;\\n  & > div {\\n    margin-bottom: 1em;\\n  }\\n}\\n\",\"$main-color: rgb(random() * 255, random() * 255, random() * 255);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"BigHeader_root__1OW8C\",\n\t\"headerTitle\": \"BigHeader_headerTitle__3wsmP\",\n\t\"appHeaderContainer\": \"BigHeader_appHeaderContainer__2bKfF\",\n\t\"childrenContainer\": \"BigHeader_childrenContainer__9H9mp\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0JpZ0hlYWRlci5tb2R1bGUuc2Nzcz84M2JkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywyQkFBMkIsOEJBQThCLGlCQUFpQixpQkFBaUIscUNBQXFDLG1CQUFtQixHQUFHLHdEQUF3RCx1QkFBdUIsbUJBQW1CLHFCQUFxQiw0Q0FBNEMsR0FBRyx3Q0FBd0MsMERBQTBELHFCQUFxQixLQUFLLEdBQUcsMENBQTBDLG9CQUFvQixnQkFBZ0IsV0FBVyxnQkFBZ0IsaUNBQWlDLDhCQUE4QixHQUFHLHlDQUF5QyxnQkFBZ0IsaUJBQWlCLGtCQUFrQiw4QkFBOEIsMEJBQTBCLEdBQUcsd0NBQXdDLHlDQUF5Qyw4QkFBOEIsS0FBSyxHQUFHLDZDQUE2Qyx1QkFBdUIsR0FBRyxPQUFPLDZHQUE2RyxXQUFXLFVBQVUsV0FBVyxZQUFZLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUssV0FBVyxrREFBa0QsV0FBVyxrQ0FBa0MsaUJBQWlCLDRCQUE0QixnREFBZ0QsbUJBQW1CLG9CQUFvQix5QkFBeUIscUJBQXFCLDJCQUEyQix1QkFBdUIsT0FBTyx1QkFBdUIsOENBQThDLEtBQUssR0FBRyx5QkFBeUIsb0JBQW9CLGdCQUFnQixXQUFXLGdCQUFnQixpQ0FBaUMsOEJBQThCLEdBQUcsd0JBQXdCLGdCQUFnQixpQkFBaUIsa0JBQWtCLHlCQUF5Qiw4QkFBOEIsS0FBSyw4QkFBOEIsMEJBQTBCLGFBQWEseUJBQXlCLEtBQUssR0FBRyxzRUFBc0UsMENBQTBDLDRDQUE0Qyw4Q0FBOEMsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELHlDQUF5QyxzREFBc0QscUNBQXFDLG9DQUFvQyxpREFBaUQsbURBQW1ELCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQzVtSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvQmlnSGVhZGVyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkJpZ0hlYWRlcl9yb290X18xT1c4QyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGVhNjgxO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICM1Y2YxY2Q7XFxuICBwYWRkaW5nOiAwIDNlbTtcXG59XFxuLkJpZ0hlYWRlcl9yb290X18xT1c4QyAuQmlnSGVhZGVyX2hlYWRlclRpdGxlX18zd3NtUCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBmb250LXNpemU6IDZlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpIEdvdGhpY1xcXCIsIHNlcmlmO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkJpZ0hlYWRlcl9yb290X18xT1c4QyAuQmlnSGVhZGVyX2hlYWRlclRpdGxlX18zd3NtUCB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgfVxcbn1cXG5cXG4uQmlnSGVhZGVyX2FwcEhlYWRlckNvbnRhaW5lcl9fMmJLZkYge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTB2aCk7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xcbn1cXG5cXG4uQmlnSGVhZGVyX2NoaWxkcmVuQ29udGFpbmVyX185SDltcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLkJpZ0hlYWRlcl9jaGlsZHJlbkNvbnRhaW5lcl9fOUg5bXAge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuLkJpZ0hlYWRlcl9jaGlsZHJlbkNvbnRhaW5lcl9fOUg5bXAgPiBkaXYge1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQmlnSGVhZGVyLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vdGhlbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHlCQ0hXO0VESVgsWUFBQTtFQUNBLFlDRmdCO0VER2hCLGdDQUFBO0VBQ0EsY0FBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFJQSxnQkFBQTtFQUNBLHFDQUFBO0FBSko7QUN5Q0U7RUQ1Q0E7SUFJSSxjQUFBO0VBR0o7QUFDRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFJQSx5QkFBQTtFQUNBLHFCQUFBO0FBSEY7QUNtQkU7RUR4QkY7SUFLSSx1QkFBQTtFQUlGO0FBQ0Y7QUFERTtFQUNFLGtCQUFBO0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi90aGVtZS5zY3NzXFxcIjtcXG5cXG4ucm9vdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcXG4gIGhlaWdodDogODB2aDtcXG4gIGNvbG9yOiAkdGV4dC1tYWluLWNvbG9yO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4ICRtYWluLXNoYWRvdy1jb2xvcjtcXG4gIHBhZGRpbmc6IDAgM2VtO1xcblxcbiAgLmhlYWRlclRpdGxlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBmb250LXNpemU6IDZlbTtcXG4gICAgQGluY2x1ZGUgbXFEb3duKHNtKSB7XFxuICAgICAgZm9udC1zaXplOiAzZW07XFxuICAgIH1cXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaSBHb3RoaWNcXFwiLCBzZXJpZjtcXG4gIH1cXG59XFxuXFxuLmFwcEhlYWRlckNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMDtcXG4gIHotaW5kZXg6IDk5O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHZoKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XFxufVxcblxcbi5jaGlsZHJlbkNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgJiA+IGRpdiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gIH1cXG59XFxuXCIsXCIkbWFpbi1jb2xvcjogcmdiKHJhbmRvbSgpICogMjU1LCByYW5kb20oKSAqIDI1NSwgcmFuZG9tKCkgKiAyNTUpO1xcbiRsaWdodC1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kbGlnaHQyLWNvbG9yOiBsaWdodGVuKCRsaWdodC1jb2xvciwgMTAlKTtcXG4kdGV4dC1tYWluLWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCA3NSUpO1xcbiRoZWFkZXItaGVpZ2h0OiA5NnB4O1xcbiRtYWluLXNoYWRvdy1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLWJsdXItY29sb3I6IGRhcmtlbigkdGV4dC1tYWluLWNvbG9yLCAzMCUpO1xcbiR0ZXh0LW1haW4tc2hhZG93LWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgNTAlKTtcXG4kYm9yZGVyLW1haW4tY29sb3I6IHJnYigxODUsIDE4OCwgMjMzKTtcXG4kYm9yZGVyLWRhcmstY29sb3I6IGRhcmtlbigkYm9yZGVyLW1haW4tY29sb3IsIDUwJSk7XFxuXFxuJGVycm9yLWNvbG9yOiByZ2IoMjU1LCAxNjQsIDEzNyk7XFxuJHZlcmlmeS1jb2xvcjogcmdiKDEzOSwgMjU1LCAyMDEpO1xcbiRlcnJvci1ib3JkZXItY29sb3I6IGRhcmtlbigkZXJyb3ItY29sb3IsIDUwJSk7XFxuJHZlcmlmeS1ib3JkZXItY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcbiRlcnJvci10ZXh0LWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktdGV4dC1jb2xvcjogZGFya2VuKCR2ZXJpZnktY29sb3IsIDUwJSk7XFxuXFxuJHBhZ2UtbWF4LXdpZHRoOiAxMTAwcHg7XFxuXFxuJGJyZWFrcG9pbnQteHM6IDBweDtcXG4kYnJlYWtwb2ludC1zbTogNjAwcHg7XFxuJGJyZWFrcG9pbnQtbWQ6IDk2MHB4O1xcbiRicmVha3BvaW50LWxnOiAxMjgwcHg7XFxuJGJyZWFrcG9pbnQteGw6IDE5MjBweDtcXG4kYnJlYWtwb2ludC00azogMjU2MHB4O1xcblxcbiRicmVha3BvaW50czogeHMsIHNtLCBtZCwgbGcsIHhsO1xcbiRicmVha3BvaW50LXdpZHRoOiAoXFxuICB4czogMHB4LFxcbiAgc206IDYwMHB4LFxcbiAgbWQ6IDk2MHB4LFxcbiAgbGc6IDEyODBweCxcXG4gIHhsOiAxOTIwcHgsXFxuICA0azogMjU2MHB4LFxcbik7XFxuXFxuJG5leHQtYnJlYWtwb2ludHM6IChcXG4gIHhzOiBzbSxcXG4gIHNtOiBtZCxcXG4gIG1kOiBsZyxcXG4gIGxnOiB4bCxcXG4gIHhsOiA0ayxcXG4pO1xcblxcbkBtaXhpbiBtcVVwKCRicDogbWQpIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnQtd2lkdGgsICRuYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gbXFEb3duKCRicDogbWQpIHtcXG4gICRuYnA6IG1hcC1nZXQoJG5leHQtYnJlYWtwb2ludHMsICRicCk7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwiQmlnSGVhZGVyX3Jvb3RfXzFPVzhDXCIsXG5cdFwiaGVhZGVyVGl0bGVcIjogXCJCaWdIZWFkZXJfaGVhZGVyVGl0bGVfXzN3c21QXCIsXG5cdFwiYXBwSGVhZGVyQ29udGFpbmVyXCI6IFwiQmlnSGVhZGVyX2FwcEhlYWRlckNvbnRhaW5lcl9fMmJLZkZcIixcblx0XCJjaGlsZHJlbkNvbnRhaW5lclwiOiBcIkJpZ0hlYWRlcl9jaGlsZHJlbkNvbnRhaW5lcl9fOUg5bXBcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/BigHeader.module.scss\n");

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/SectionHeader.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/SectionHeader.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".SectionHeader_sectionHeader__3HjiX {\\n  max-width: 1100px;\\n  padding-top: 0.5em;\\n  padding-bottom: 1em;\\n  font-size: 2em;\\n  text-align: left;\\n  width: 100%;\\n  font-family: \\\"Kosugi\\\";\\n}\\n.SectionHeader_sectionHeader__3HjiX::before {\\n  content: \\\"\\\";\\n  width: 100%;\\n  display: block;\\n  height: 10px;\\n  background-color: #ecedaf;\\n  max-width: 2.8em;\\n  margin-bottom: 0.3em;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://SectionHeader.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,iBCee;EDdf,kBAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;EACA,WAAA;EACA,qBAAA;AADF;AAGE;EACE,WAAA;EACA,WAAA;EACA,cAAA;EACA,YAAA;EACA,yBChBS;EDiBT,gBAAA;EACA,oBAAA;AADJ\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.sectionHeader {\\n  max-width: $page-max-width;\\n  padding-top: 0.5em;\\n  padding-bottom: 1em;\\n  font-size: 2em;\\n  text-align: left;\\n  width: 100%;\\n  font-family: \\\"Kosugi\\\";\\n\\n  &::before {\\n    content: \\\"\\\";\\n    width: 100%;\\n    display: block;\\n    height: 10px;\\n    background-color: $main-color;\\n    max-width: 2.8em;\\n    margin-bottom: 0.3em;\\n  }\\n}\\n\",\"$main-color: rgb(random() * 255, random() * 255, random() * 255);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"sectionHeader\": \"SectionHeader_sectionHeader__3HjiX\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1NlY3Rpb25IZWFkZXIubW9kdWxlLnNjc3M/MDFkMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsd0NBQXdDLHNCQUFzQix1QkFBdUIsd0JBQXdCLG1CQUFtQixxQkFBcUIsZ0JBQWdCLDRCQUE0QixHQUFHLCtDQUErQyxrQkFBa0IsZ0JBQWdCLG1CQUFtQixpQkFBaUIsOEJBQThCLHFCQUFxQix5QkFBeUIsR0FBRyxPQUFPLGlIQUFpSCxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxXQUFXLGtEQUFrRCxvQkFBb0IsK0JBQStCLHVCQUF1Qix3QkFBd0IsbUJBQW1CLHFCQUFxQixnQkFBZ0IsNEJBQTRCLGlCQUFpQixvQkFBb0Isa0JBQWtCLHFCQUFxQixtQkFBbUIsb0NBQW9DLHVCQUF1QiwyQkFBMkIsS0FBSyxHQUFHLHNFQUFzRSwwQ0FBMEMsNENBQTRDLDhDQUE4Qyx1QkFBdUIsZ0RBQWdELHVEQUF1RCx5REFBeUQseUNBQXlDLHNEQUFzRCxxQ0FBcUMsb0NBQW9DLGlEQUFpRCxtREFBbUQsK0NBQStDLGlEQUFpRCw0QkFBNEIsd0JBQXdCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHlCQUF5Qix5QkFBeUIscUNBQXFDLCtHQUErRyxtRkFBbUYsMEJBQTBCLHFFQUFxRSxlQUFlLEtBQUssR0FBRyw0QkFBNEIsMENBQTBDLG9FQUFvRSxlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDM2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9TZWN0aW9uSGVhZGVyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlNlY3Rpb25IZWFkZXJfc2VjdGlvbkhlYWRlcl9fM0hqaVgge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIktvc3VnaVxcXCI7XFxufVxcbi5TZWN0aW9uSGVhZGVyX3NlY3Rpb25IZWFkZXJfXzNIamlYOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWRhZjtcXG4gIG1heC13aWR0aDogMi44ZW07XFxuICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1NlY3Rpb25IZWFkZXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly90aGVtZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsaUJDZWU7RURkZixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNoQlM7RURpQlQsZ0JBQUE7RUFDQSxvQkFBQTtBQURKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vdGhlbWUuc2Nzc1xcXCI7XFxuXFxuLnNlY3Rpb25IZWFkZXIge1xcbiAgbWF4LXdpZHRoOiAkcGFnZS1tYXgtd2lkdGg7XFxuICBwYWRkaW5nLXRvcDogMC41ZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgZm9udC1zaXplOiAyZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogXFxcIktvc3VnaVxcXCI7XFxuXFxuICAmOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xcbiAgICBtYXgtd2lkdGg6IDIuOGVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG4gIH1cXG59XFxuXCIsXCIkbWFpbi1jb2xvcjogcmdiKHJhbmRvbSgpICogMjU1LCByYW5kb20oKSAqIDI1NSwgcmFuZG9tKCkgKiAyNTUpO1xcbiRsaWdodC1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kbGlnaHQyLWNvbG9yOiBsaWdodGVuKCRsaWdodC1jb2xvciwgMTAlKTtcXG4kdGV4dC1tYWluLWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCA3NSUpO1xcbiRoZWFkZXItaGVpZ2h0OiA5NnB4O1xcbiRtYWluLXNoYWRvdy1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLWJsdXItY29sb3I6IGRhcmtlbigkdGV4dC1tYWluLWNvbG9yLCAzMCUpO1xcbiR0ZXh0LW1haW4tc2hhZG93LWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgNTAlKTtcXG4kYm9yZGVyLW1haW4tY29sb3I6IHJnYigxODUsIDE4OCwgMjMzKTtcXG4kYm9yZGVyLWRhcmstY29sb3I6IGRhcmtlbigkYm9yZGVyLW1haW4tY29sb3IsIDUwJSk7XFxuXFxuJGVycm9yLWNvbG9yOiByZ2IoMjU1LCAxNjQsIDEzNyk7XFxuJHZlcmlmeS1jb2xvcjogcmdiKDEzOSwgMjU1LCAyMDEpO1xcbiRlcnJvci1ib3JkZXItY29sb3I6IGRhcmtlbigkZXJyb3ItY29sb3IsIDUwJSk7XFxuJHZlcmlmeS1ib3JkZXItY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcbiRlcnJvci10ZXh0LWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktdGV4dC1jb2xvcjogZGFya2VuKCR2ZXJpZnktY29sb3IsIDUwJSk7XFxuXFxuJHBhZ2UtbWF4LXdpZHRoOiAxMTAwcHg7XFxuXFxuJGJyZWFrcG9pbnQteHM6IDBweDtcXG4kYnJlYWtwb2ludC1zbTogNjAwcHg7XFxuJGJyZWFrcG9pbnQtbWQ6IDk2MHB4O1xcbiRicmVha3BvaW50LWxnOiAxMjgwcHg7XFxuJGJyZWFrcG9pbnQteGw6IDE5MjBweDtcXG4kYnJlYWtwb2ludC00azogMjU2MHB4O1xcblxcbiRicmVha3BvaW50czogeHMsIHNtLCBtZCwgbGcsIHhsO1xcbiRicmVha3BvaW50LXdpZHRoOiAoXFxuICB4czogMHB4LFxcbiAgc206IDYwMHB4LFxcbiAgbWQ6IDk2MHB4LFxcbiAgbGc6IDEyODBweCxcXG4gIHhsOiAxOTIwcHgsXFxuICA0azogMjU2MHB4LFxcbik7XFxuXFxuJG5leHQtYnJlYWtwb2ludHM6IChcXG4gIHhzOiBzbSxcXG4gIHNtOiBtZCxcXG4gIG1kOiBsZyxcXG4gIGxnOiB4bCxcXG4gIHhsOiA0ayxcXG4pO1xcblxcbkBtaXhpbiBtcVVwKCRicDogbWQpIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnQtd2lkdGgsICRuYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gbXFEb3duKCRicDogbWQpIHtcXG4gICRuYnA6IG1hcC1nZXQoJG5leHQtYnJlYWtwb2ludHMsICRicCk7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJzZWN0aW9uSGVhZGVyXCI6IFwiU2VjdGlvbkhlYWRlcl9zZWN0aW9uSGVhZGVyX18zSGppWFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/SectionHeader.module.scss\n");

/***/ })

})