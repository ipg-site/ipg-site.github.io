webpackHotUpdate_N_E("pages/users",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/UploadBigButton.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/UploadBigButton.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".UploadBigButton_errorRoot__25YNF, .UploadBigButton_verifyRoot__NrICX {\\n  margin: 1em;\\n  width: 300px;\\n  min-height: 300px;\\n  border: 1px solid #ffa489;\\n  border-radius: 10px;\\n}\\n.UploadBigButton_errorRoot__25YNF .UploadBigButton_container__2G3k_, .UploadBigButton_verifyRoot__NrICX .UploadBigButton_container__2G3k_ {\\n  min-height: 300px;\\n  padding-top: 1em;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: center;\\n  font-size: 1.1em;\\n  color: #891f00;\\n}\\n.UploadBigButton_errorRoot__25YNF .UploadBigButton_container__2G3k_ img, .UploadBigButton_verifyRoot__NrICX .UploadBigButton_container__2G3k_ img {\\n  width: 100px;\\n  display: block;\\n  cursor: pointer;\\n}\\n\\n.UploadBigButton_verifyRoot__NrICX {\\n  border-color: #8bffc9;\\n}\\n.UploadBigButton_verifyRoot__NrICX .UploadBigButton_container__2G3k_ {\\n  color: #008b4a;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://UploadBigButton.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;AADF;AAGE;EACE,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cCPe;ADMnB;AAGI;EACE,YAAA;EACA,cAAA;EACA,eAAA;AADN;;AAMA;EAEE,qBCpBa;ADgBf;AAKE;EACE,cCpBgB;ADiBpB\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.errorRoot {\\n  margin: 1em;\\n  width: 300px;\\n  min-height: 300px;\\n  border: 1px solid $error-color;\\n  border-radius: 10px;\\n\\n  .container {\\n    min-height: 300px;\\n    padding-top: 1em;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    text-align: center;\\n    font-size: 1.1em;\\n    color: $error-text-color;\\n\\n    img {\\n      width: 100px;\\n      display: block;\\n      cursor: pointer;\\n    }\\n  }\\n}\\n\\n.verifyRoot {\\n  @extend .errorRoot;\\n  border-color: $verify-color;\\n  .container {\\n    color: $verify-text-color;\\n  }\\n}\\n\",\"$main-color: rgb(52, 53, 66);\\n$text-main-color: invert($main-color);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1280px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"errorRoot\": \"UploadBigButton_errorRoot__25YNF\",\n\t\"verifyRoot\": \"UploadBigButton_verifyRoot__NrICX\",\n\t\"container\": \"UploadBigButton_container__2G3k_\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1VwbG9hZEJpZ0J1dHRvbi5tb2R1bGUuc2Nzcz9hYmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwRUFBMEUsZ0JBQWdCLGlCQUFpQixzQkFBc0IsOEJBQThCLHdCQUF3QixHQUFHLDZJQUE2SSxzQkFBc0IscUJBQXFCLGtCQUFrQiwyQkFBMkIsbUNBQW1DLHdCQUF3Qix1QkFBdUIscUJBQXFCLG1CQUFtQixHQUFHLHFKQUFxSixpQkFBaUIsbUJBQW1CLG9CQUFvQixHQUFHLHdDQUF3QywwQkFBMEIsR0FBRyx3RUFBd0UsbUJBQW1CLEdBQUcsT0FBTyxtSEFBbUgsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksb0RBQW9ELGdCQUFnQixnQkFBZ0IsaUJBQWlCLHNCQUFzQixtQ0FBbUMsd0JBQXdCLGtCQUFrQix3QkFBd0IsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUNBQXFDLDBCQUEwQix5QkFBeUIsdUJBQXVCLCtCQUErQixhQUFhLHFCQUFxQix1QkFBdUIsd0JBQXdCLE9BQU8sS0FBSyxHQUFHLGlCQUFpQix1QkFBdUIsZ0NBQWdDLGdCQUFnQixnQ0FBZ0MsS0FBSyxHQUFHLGtDQUFrQyx3Q0FBd0MsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELHlDQUF5QyxzREFBc0QscUNBQXFDLG9DQUFvQywrQ0FBK0MsaURBQWlELDRCQUE0Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHlCQUF5QixxQ0FBcUMsK0dBQStHLG1GQUFtRiwwQkFBMEIscUVBQXFFLGVBQWUsS0FBSyxHQUFHLDRCQUE0QiwwQ0FBMEMsb0VBQW9FLGVBQWUsS0FBSyxHQUFHLHFCQUFxQjtBQUN4b0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9VcGxvYWRCaWdCdXR0b24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVXBsb2FkQmlnQnV0dG9uX2Vycm9yUm9vdF9fMjVZTkYsIC5VcGxvYWRCaWdCdXR0b25fdmVyaWZ5Um9vdF9fTnJJQ1gge1xcbiAgbWFyZ2luOiAxZW07XFxuICB3aWR0aDogMzAwcHg7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmE0ODk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uVXBsb2FkQmlnQnV0dG9uX2Vycm9yUm9vdF9fMjVZTkYgLlVwbG9hZEJpZ0J1dHRvbl9jb250YWluZXJfXzJHM2tfLCAuVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIC5VcGxvYWRCaWdCdXR0b25fY29udGFpbmVyX18yRzNrXyB7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6ICM4OTFmMDA7XFxufVxcbi5VcGxvYWRCaWdCdXR0b25fZXJyb3JSb290X18yNVlORiAuVXBsb2FkQmlnQnV0dG9uX2NvbnRhaW5lcl9fMkcza18gaW1nLCAuVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIC5VcGxvYWRCaWdCdXR0b25fY29udGFpbmVyX18yRzNrXyBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5VcGxvYWRCaWdCdXR0b25fdmVyaWZ5Um9vdF9fTnJJQ1gge1xcbiAgYm9yZGVyLWNvbG9yOiAjOGJmZmM5O1xcbn1cXG4uVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIC5VcGxvYWRCaWdCdXR0b25fY29udGFpbmVyX18yRzNrXyB7XFxuICBjb2xvcjogIzAwOGI0YTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1VwbG9hZEJpZ0J1dHRvbi5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ1BlO0FETW5CO0FBR0k7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFETjs7QUFNQTtFQUVFLHFCQ3BCYTtBRGdCZjtBQUtFO0VBQ0UsY0NwQmdCO0FEaUJwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3RoZW1lLnNjc3NcXFwiO1xcblxcbi5lcnJvclJvb3Qge1xcbiAgbWFyZ2luOiAxZW07XFxuICB3aWR0aDogMzAwcHg7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRlcnJvci1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBjb2xvcjogJGVycm9yLXRleHQtY29sb3I7XFxuXFxuICAgIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4udmVyaWZ5Um9vdCB7XFxuICBAZXh0ZW5kIC5lcnJvclJvb3Q7XFxuICBib3JkZXItY29sb3I6ICR2ZXJpZnktY29sb3I7XFxuICAuY29udGFpbmVyIHtcXG4gICAgY29sb3I6ICR2ZXJpZnktdGV4dC1jb2xvcjtcXG4gIH1cXG59XFxuXCIsXCIkbWFpbi1jb2xvcjogcmdiKDUyLCA1MywgNjYpO1xcbiR0ZXh0LW1haW4tY29sb3I6IGludmVydCgkbWFpbi1jb2xvcik7XFxuJGhlYWRlci1oZWlnaHQ6IDk2cHg7XFxuJG1haW4tc2hhZG93LWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCAzMCUpO1xcbiR0ZXh0LW1haW4tYmx1ci1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1zaGFkb3ctY29sb3I6IGRhcmtlbigkdGV4dC1tYWluLWNvbG9yLCA1MCUpO1xcbiRib3JkZXItbWFpbi1jb2xvcjogcmdiKDE4NSwgMTg4LCAyMzMpO1xcbiRib3JkZXItZGFyay1jb2xvcjogZGFya2VuKCRib3JkZXItbWFpbi1jb2xvciwgNTAlKTtcXG5cXG4kZXJyb3ItY29sb3I6IHJnYigyNTUsIDE2NCwgMTM3KTtcXG4kdmVyaWZ5LWNvbG9yOiByZ2IoMTM5LCAyNTUsIDIwMSk7XFxuJGVycm9yLXRleHQtY29sb3I6IGRhcmtlbigkZXJyb3ItY29sb3IsIDUwJSk7XFxuJHZlcmlmeS10ZXh0LWNvbG9yOiBkYXJrZW4oJHZlcmlmeS1jb2xvciwgNTAlKTtcXG5cXG4kcGFnZS1tYXgtd2lkdGg6IDEyODBweDtcXG5cXG4kYnJlYWtwb2ludC14czogMHB4O1xcbiRicmVha3BvaW50LXNtOiA2MDBweDtcXG4kYnJlYWtwb2ludC1tZDogOTYwcHg7XFxuJGJyZWFrcG9pbnQtbGc6IDEyODBweDtcXG4kYnJlYWtwb2ludC14bDogMTkyMHB4O1xcbiRicmVha3BvaW50LTRrOiAyNTYwcHg7XFxuXFxuJGJyZWFrcG9pbnRzOiB4cywgc20sIG1kLCBsZywgeGw7XFxuJGJyZWFrcG9pbnQtd2lkdGg6IChcXG4gIHhzOiAwcHgsXFxuICBzbTogNjAwcHgsXFxuICBtZDogOTYwcHgsXFxuICBsZzogMTI4MHB4LFxcbiAgeGw6IDE5MjBweCxcXG4gIDRrOiAyNTYwcHgsXFxuKTtcXG5cXG4kbmV4dC1icmVha3BvaW50czogKFxcbiAgeHM6IHNtLFxcbiAgc206IG1kLFxcbiAgbWQ6IGxnLFxcbiAgbGc6IHhsLFxcbiAgeGw6IDRrLFxcbik7XFxuXFxuQG1peGluIG1xVXAoJGJwOiBtZCkge1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJG5icCkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBtcURvd24oJGJwOiBtZCkge1xcbiAgJG5icDogbWFwLWdldCgkbmV4dC1icmVha3BvaW50cywgJGJwKTtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnQtd2lkdGgsICRicCkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImVycm9yUm9vdFwiOiBcIlVwbG9hZEJpZ0J1dHRvbl9lcnJvclJvb3RfXzI1WU5GXCIsXG5cdFwidmVyaWZ5Um9vdFwiOiBcIlVwbG9hZEJpZ0J1dHRvbl92ZXJpZnlSb290X19OcklDWFwiLFxuXHRcImNvbnRhaW5lclwiOiBcIlVwbG9hZEJpZ0J1dHRvbl9jb250YWluZXJfXzJHM2tfXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/UploadBigButton.module.scss\n");

/***/ })

})