webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/AppHeader.module.scss":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/AppHeader.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".AppHeader_root__2VMma, .AppHeader_userRoot__2TtKR {\\n  background-color: darkblue;\\n  min-height: 96px;\\n  color: white;\\n  box-shadow: 0px 4px 10px #2525ff;\\n  padding: 1em;\\n}\\n.AppHeader_root__2VMma .AppHeader_headerTitle__2E4B4, .AppHeader_userRoot__2TtKR .AppHeader_headerTitle__2E4B4 {\\n  height: 100%;\\n  font-size: calc(96px / 3);\\n  text-align: center;\\n  font-family: \\\"Sawarabi Gothic\\\", serif;\\n}\\n@media screen and (max-width: 600px) {\\n  .AppHeader_root__2VMma .AppHeader_headerTitle__2E4B4, .AppHeader_userRoot__2TtKR .AppHeader_headerTitle__2E4B4 {\\n    font-size: calc(96px / 5);\\n  }\\n}\\n\\n.AppHeader_userRoot__2TtKR {\\n  min-height: 0;\\n  min-height: initial;\\n}\\n\\n.AppHeader_headerLinkContainer__3cTfT {\\n  display: flex;\\n  width: 100%;\\n  justify-content: flex-end;\\n  padding-top: 1em;\\n  align-items: center;\\n}\\n@media screen and (max-width: 600px) {\\n  .AppHeader_headerLinkContainer__3cTfT {\\n    justify-content: center;\\n  }\\n}\\n\\n.AppHeader_appHeaderLink___RXiV {\\n  padding: 0.5em 1em;\\n  border: 1px solid white;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://AppHeader.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,0BCHW;EDIX,gBAAA;EACA,YCFgB;EDGhB,gCAAA;EACA,YAAA;AADF;AAGE;EACE,YAAA;EACA,yBAAA;EAIA,kBAAA;EACA,qCAAA;AAJJ;ACyCE;ED5CA;IAII,yBAAA;EAGJ;AACF;;AAGA;EAEE,aAAA;EAAA,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,WAAA;EAIA,yBAAA;EACA,gBAAA;EACA,mBAAA;AAJF;ACwBE;ED5BF;IAII,uBAAA;EAIF;AACF;;AAEA;EACE,kBAAA;EACA,uBAAA;AACF\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.root {\\n  background-color: $main-color;\\n  min-height: $header-height;\\n  color: $text-main-color;\\n  box-shadow: 0px 4px 10px $main-shadow-color;\\n  padding: 1em;\\n\\n  .headerTitle {\\n    height: 100%;\\n    font-size: calc(#{$header-height} / 3);\\n    @include mqDown(sm) {\\n      font-size: calc(#{$header-height} / 5);\\n    }\\n    text-align: center;\\n    font-family: \\\"Sawarabi Gothic\\\", serif;\\n  }\\n}\\n\\n.userRoot {\\n  @extend .root;\\n  min-height: initial;\\n}\\n\\n.headerLinkContainer {\\n  display: flex;\\n  width: 100%;\\n  @include mqDown(sm) {\\n    justify-content: center;\\n  }\\n  justify-content: flex-end;\\n  padding-top: 1em;\\n  align-items: center;\\n}\\n\\n.appHeaderLink {\\n  padding: 0.5em 1em;\\n  border: 1px solid $text-main-color;\\n}\\n\",\"$main-color: darkblue;\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"AppHeader_root__2VMma\",\n\t\"userRoot\": \"AppHeader_userRoot__2TtKR\",\n\t\"headerTitle\": \"AppHeader_headerTitle__2E4B4\",\n\t\"headerLinkContainer\": \"AppHeader_headerLinkContainer__3cTfT\",\n\t\"appHeaderLink\": \"AppHeader_appHeaderLink___RXiV\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0FwcEhlYWRlci5tb2R1bGUuc2Nzcz8zZjI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyx1REFBdUQsK0JBQStCLHFCQUFxQixpQkFBaUIscUNBQXFDLGlCQUFpQixHQUFHLGtIQUFrSCxpQkFBaUIsOEJBQThCLHVCQUF1Qiw0Q0FBNEMsR0FBRyx3Q0FBd0Msb0hBQW9ILGdDQUFnQyxLQUFLLEdBQUcsZ0NBQWdDLGtCQUFrQix3QkFBd0IsR0FBRywyQ0FBMkMsa0JBQWtCLGdCQUFnQiw4QkFBOEIscUJBQXFCLHdCQUF3QixHQUFHLHdDQUF3QywyQ0FBMkMsOEJBQThCLEtBQUssR0FBRyxxQ0FBcUMsdUJBQXVCLDRCQUE0QixHQUFHLE9BQU8sNkdBQTZHLFdBQVcsV0FBVyxXQUFXLFlBQVksVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLGtEQUFrRCxXQUFXLGtDQUFrQywrQkFBK0IsNEJBQTRCLGdEQUFnRCxpQkFBaUIsb0JBQW9CLG1CQUFtQix3QkFBd0IsZUFBZSxNQUFNLDJCQUEyQiwwQkFBMEIsZUFBZSxNQUFNLE9BQU8seUJBQXlCLDhDQUE4QyxLQUFLLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLEdBQUcsMEJBQTBCLGtCQUFrQixnQkFBZ0IseUJBQXlCLDhCQUE4QixLQUFLLDhCQUE4QixxQkFBcUIsd0JBQXdCLEdBQUcsb0JBQW9CLHVCQUF1Qix1Q0FBdUMsR0FBRywyQkFBMkIsMENBQTBDLDRDQUE0Qyw4Q0FBOEMsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELHlDQUF5QyxzREFBc0QscUNBQXFDLG9DQUFvQyxpREFBaUQsbURBQW1ELCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQ2hwSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9BcHBIZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQXBwSGVhZGVyX3Jvb3RfXzJWTW1hLCAuQXBwSGVhZGVyX3VzZXJSb290X18yVHRLUiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gIG1pbi1oZWlnaHQ6IDk2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDEwcHggIzI1MjVmZjtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLkFwcEhlYWRlcl9yb290X18yVk1tYSAuQXBwSGVhZGVyX2hlYWRlclRpdGxlX18yRTRCNCwgLkFwcEhlYWRlcl91c2VyUm9vdF9fMlR0S1IgLkFwcEhlYWRlcl9oZWFkZXJUaXRsZV9fMkU0QjQge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZm9udC1zaXplOiBjYWxjKDk2cHggLyAzKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIiwgc2VyaWY7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuQXBwSGVhZGVyX3Jvb3RfXzJWTW1hIC5BcHBIZWFkZXJfaGVhZGVyVGl0bGVfXzJFNEI0LCAuQXBwSGVhZGVyX3VzZXJSb290X18yVHRLUiAuQXBwSGVhZGVyX2hlYWRlclRpdGxlX18yRTRCNCB7XFxuICAgIGZvbnQtc2l6ZTogY2FsYyg5NnB4IC8gNSk7XFxuICB9XFxufVxcblxcbi5BcHBIZWFkZXJfdXNlclJvb3RfXzJUdEtSIHtcXG4gIG1pbi1oZWlnaHQ6IDA7XFxuICBtaW4taGVpZ2h0OiBpbml0aWFsO1xcbn1cXG5cXG4uQXBwSGVhZGVyX2hlYWRlckxpbmtDb250YWluZXJfXzNjVGZUIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXRvcDogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5BcHBIZWFkZXJfaGVhZGVyTGlua0NvbnRhaW5lcl9fM2NUZlQge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuXFxuLkFwcEhlYWRlcl9hcHBIZWFkZXJMaW5rX19fUlhpViB7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0FwcEhlYWRlci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSwwQkNIVztFRElYLGdCQUFBO0VBQ0EsWUNGZ0I7RURHaEIsZ0NBQUE7RUFDQSxZQUFBO0FBREY7QUFHRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUlBLGtCQUFBO0VBQ0EscUNBQUE7QUFKSjtBQ3lDRTtFRDVDQTtJQUlJLHlCQUFBO0VBR0o7QUFDRjs7QUFHQTtFQUVFLGFBQUE7RUFBQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFJQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKRjtBQ3dCRTtFRDVCRjtJQUlJLHVCQUFBO0VBSUY7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3RoZW1lLnNjc3NcXFwiO1xcblxcbi5yb290IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xcbiAgbWluLWhlaWdodDogJGhlYWRlci1oZWlnaHQ7XFxuICBjb2xvcjogJHRleHQtbWFpbi1jb2xvcjtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAkbWFpbi1zaGFkb3ctY29sb3I7XFxuICBwYWRkaW5nOiAxZW07XFxuXFxuICAuaGVhZGVyVGl0bGUge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogY2FsYygjeyRoZWFkZXItaGVpZ2h0fSAvIDMpO1xcbiAgICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAgICBmb250LXNpemU6IGNhbGMoI3skaGVhZGVyLWhlaWdodH0gLyA1KTtcXG4gICAgfVxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIiwgc2VyaWY7XFxuICB9XFxufVxcblxcbi51c2VyUm9vdCB7XFxuICBAZXh0ZW5kIC5yb290O1xcbiAgbWluLWhlaWdodDogaW5pdGlhbDtcXG59XFxuXFxuLmhlYWRlckxpbmtDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgQGluY2x1ZGUgbXFEb3duKHNtKSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwSGVhZGVyTGluayB7XFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAkdGV4dC1tYWluLWNvbG9yO1xcbn1cXG5cIixcIiRtYWluLWNvbG9yOiBkYXJrYmx1ZTtcXG4kbGlnaHQtY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDc1JSk7XFxuJGxpZ2h0Mi1jb2xvcjogbGlnaHRlbigkbGlnaHQtY29sb3IsIDEwJSk7XFxuJHRleHQtbWFpbi1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kaGVhZGVyLWhlaWdodDogOTZweDtcXG4kbWFpbi1zaGFkb3ctY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1ibHVyLWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLXNoYWRvdy1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDUwJSk7XFxuJGJvcmRlci1tYWluLWNvbG9yOiByZ2IoMTg1LCAxODgsIDIzMyk7XFxuJGJvcmRlci1kYXJrLWNvbG9yOiBkYXJrZW4oJGJvcmRlci1tYWluLWNvbG9yLCA1MCUpO1xcblxcbiRlcnJvci1jb2xvcjogcmdiKDI1NSwgMTY0LCAxMzcpO1xcbiR2ZXJpZnktY29sb3I6IHJnYigxMzksIDI1NSwgMjAxKTtcXG4kZXJyb3ItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHZlcmlmeS1jb2xvciwgNTAlKTtcXG4kZXJyb3ItdGV4dC1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LXRleHQtY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcblxcbiRwYWdlLW1heC13aWR0aDogMTEwMHB4O1xcblxcbiRicmVha3BvaW50LXhzOiAwcHg7XFxuJGJyZWFrcG9pbnQtc206IDYwMHB4O1xcbiRicmVha3BvaW50LW1kOiA5NjBweDtcXG4kYnJlYWtwb2ludC1sZzogMTI4MHB4O1xcbiRicmVha3BvaW50LXhsOiAxOTIwcHg7XFxuJGJyZWFrcG9pbnQtNGs6IDI1NjBweDtcXG5cXG4kYnJlYWtwb2ludHM6IHhzLCBzbSwgbWQsIGxnLCB4bDtcXG4kYnJlYWtwb2ludC13aWR0aDogKFxcbiAgeHM6IDBweCxcXG4gIHNtOiA2MDBweCxcXG4gIG1kOiA5NjBweCxcXG4gIGxnOiAxMjgwcHgsXFxuICB4bDogMTkyMHB4LFxcbiAgNGs6IDI1NjBweCxcXG4pO1xcblxcbiRuZXh0LWJyZWFrcG9pbnRzOiAoXFxuICB4czogc20sXFxuICBzbTogbWQsXFxuICBtZDogbGcsXFxuICBsZzogeGwsXFxuICB4bDogNGssXFxuKTtcXG5cXG5AbWl4aW4gbXFVcCgkYnA6IG1kKSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkbmJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1xRG93bigkYnA6IG1kKSB7XFxuICAkbmJwOiBtYXAtZ2V0KCRuZXh0LWJyZWFrcG9pbnRzLCAkYnApO1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJGJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcIkFwcEhlYWRlcl9yb290X18yVk1tYVwiLFxuXHRcInVzZXJSb290XCI6IFwiQXBwSGVhZGVyX3VzZXJSb290X18yVHRLUlwiLFxuXHRcImhlYWRlclRpdGxlXCI6IFwiQXBwSGVhZGVyX2hlYWRlclRpdGxlX18yRTRCNFwiLFxuXHRcImhlYWRlckxpbmtDb250YWluZXJcIjogXCJBcHBIZWFkZXJfaGVhZGVyTGlua0NvbnRhaW5lcl9fM2NUZlRcIixcblx0XCJhcHBIZWFkZXJMaW5rXCI6IFwiQXBwSGVhZGVyX2FwcEhlYWRlckxpbmtfX19SWGlWXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/AppHeader.module.scss\n");

/***/ })

})