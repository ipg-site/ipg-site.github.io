webpackHotUpdate_N_E("pages/users",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/UploadBigButton.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/UploadBigButton.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".UploadBigButton_errorRoot__25YNF, .UploadBigButton_verifyRoot__NrICX {\\n  margin: 1em;\\n  width: 300px;\\n  min-height: 300px;\\n  border: 1px solid #ffa489;\\n  border-radius: 10px;\\n  cursor: pointer;\\n}\\n.UploadBigButton_errorRoot__25YNF .UploadBigButton_container__2G3k_, .UploadBigButton_verifyRoot__NrICX .UploadBigButton_container__2G3k_ {\\n  min-height: 300px;\\n  padding-top: 1em;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: center;\\n  font-size: 1.1em;\\n  color: #891f00;\\n}\\n.UploadBigButton_errorRoot__25YNF .UploadBigButton_container__2G3k_ img, .UploadBigButton_verifyRoot__NrICX .UploadBigButton_container__2G3k_ img {\\n  width: 100px;\\n  display: block;\\n}\\n\\n.UploadBigButton_verifyRoot__NrICX {\\n  border-color: #8bffc9;\\n}\\n.UploadBigButton_verifyRoot__NrICX .UploadBigButton_container__2G3k_ {\\n  color: #008b4a;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://UploadBigButton.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;AADF;AAGE;EACE,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cCRe;ADOnB;AAGI;EACE,YAAA;EACA,cAAA;AADN;;AAMA;EAEE,qBCpBa;ADgBf;AAKE;EACE,cCpBgB;ADiBpB\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.errorRoot {\\n  margin: 1em;\\n  width: 300px;\\n  min-height: 300px;\\n  border: 1px solid $error-color;\\n  border-radius: 10px;\\n  cursor: pointer;\\n\\n  .container {\\n    min-height: 300px;\\n    padding-top: 1em;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    text-align: center;\\n    font-size: 1.1em;\\n    color: $error-text-color;\\n\\n    img {\\n      width: 100px;\\n      display: block;\\n    }\\n  }\\n}\\n\\n.verifyRoot {\\n  @extend .errorRoot;\\n  border-color: $verify-color;\\n  .container {\\n    color: $verify-text-color;\\n  }\\n}\\n\",\"$main-color: rgb(52, 53, 66);\\n$text-main-color: invert($main-color);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1280px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"errorRoot\": \"UploadBigButton_errorRoot__25YNF\",\n\t\"verifyRoot\": \"UploadBigButton_verifyRoot__NrICX\",\n\t\"container\": \"UploadBigButton_container__2G3k_\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1VwbG9hZEJpZ0J1dHRvbi5tb2R1bGUuc2Nzcz9hYmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwRUFBMEUsZ0JBQWdCLGlCQUFpQixzQkFBc0IsOEJBQThCLHdCQUF3QixvQkFBb0IsR0FBRyw2SUFBNkksc0JBQXNCLHFCQUFxQixrQkFBa0IsMkJBQTJCLG1DQUFtQyx3QkFBd0IsdUJBQXVCLHFCQUFxQixtQkFBbUIsR0FBRyxxSkFBcUosaUJBQWlCLG1CQUFtQixHQUFHLHdDQUF3QywwQkFBMEIsR0FBRyx3RUFBd0UsbUJBQW1CLEdBQUcsT0FBTyxtSEFBbUgsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksb0RBQW9ELGdCQUFnQixnQkFBZ0IsaUJBQWlCLHNCQUFzQixtQ0FBbUMsd0JBQXdCLG9CQUFvQixrQkFBa0Isd0JBQXdCLHVCQUF1QixvQkFBb0IsNkJBQTZCLHFDQUFxQywwQkFBMEIseUJBQXlCLHVCQUF1QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUJBQXVCLE9BQU8sS0FBSyxHQUFHLGlCQUFpQix1QkFBdUIsZ0NBQWdDLGdCQUFnQixnQ0FBZ0MsS0FBSyxHQUFHLGtDQUFrQyx3Q0FBd0MsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELHlDQUF5QyxzREFBc0QscUNBQXFDLG9DQUFvQywrQ0FBK0MsaURBQWlELDRCQUE0Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHlCQUF5QixxQ0FBcUMsK0dBQStHLG1GQUFtRiwwQkFBMEIscUVBQXFFLGVBQWUsS0FBSyxHQUFHLDRCQUE0QiwwQ0FBMEMsb0VBQW9FLGVBQWUsS0FBSyxHQUFHLHFCQUFxQjtBQUNwb0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9VcGxvYWRCaWdCdXR0b24ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVXBsb2FkQmlnQnV0dG9uX2Vycm9yUm9vdF9fMjVZTkYsIC5VcGxvYWRCaWdCdXR0b25fdmVyaWZ5Um9vdF9fTnJJQ1gge1xcbiAgbWFyZ2luOiAxZW07XFxuICB3aWR0aDogMzAwcHg7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmE0ODk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uVXBsb2FkQmlnQnV0dG9uX2Vycm9yUm9vdF9fMjVZTkYgLlVwbG9hZEJpZ0J1dHRvbl9jb250YWluZXJfXzJHM2tfLCAuVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIC5VcGxvYWRCaWdCdXR0b25fY29udGFpbmVyX18yRzNrXyB7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6ICM4OTFmMDA7XFxufVxcbi5VcGxvYWRCaWdCdXR0b25fZXJyb3JSb290X18yNVlORiAuVXBsb2FkQmlnQnV0dG9uX2NvbnRhaW5lcl9fMkcza18gaW1nLCAuVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIC5VcGxvYWRCaWdCdXR0b25fY29udGFpbmVyX18yRzNrXyBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5VcGxvYWRCaWdCdXR0b25fdmVyaWZ5Um9vdF9fTnJJQ1gge1xcbiAgYm9yZGVyLWNvbG9yOiAjOGJmZmM5O1xcbn1cXG4uVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIC5VcGxvYWRCaWdCdXR0b25fY29udGFpbmVyX18yRzNrXyB7XFxuICBjb2xvcjogIzAwOGI0YTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1VwbG9hZEJpZ0J1dHRvbi5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NSZTtBRE9uQjtBQUdJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFETjs7QUFNQTtFQUVFLHFCQ3BCYTtBRGdCZjtBQUtFO0VBQ0UsY0NwQmdCO0FEaUJwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3RoZW1lLnNjc3NcXFwiO1xcblxcbi5lcnJvclJvb3Qge1xcbiAgbWFyZ2luOiAxZW07XFxuICB3aWR0aDogMzAwcHg7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRlcnJvci1jb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBjb2xvcjogJGVycm9yLXRleHQtY29sb3I7XFxuXFxuICAgIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi52ZXJpZnlSb290IHtcXG4gIEBleHRlbmQgLmVycm9yUm9vdDtcXG4gIGJvcmRlci1jb2xvcjogJHZlcmlmeS1jb2xvcjtcXG4gIC5jb250YWluZXIge1xcbiAgICBjb2xvcjogJHZlcmlmeS10ZXh0LWNvbG9yO1xcbiAgfVxcbn1cXG5cIixcIiRtYWluLWNvbG9yOiByZ2IoNTIsIDUzLCA2Nik7XFxuJHRleHQtbWFpbi1jb2xvcjogaW52ZXJ0KCRtYWluLWNvbG9yKTtcXG4kaGVhZGVyLWhlaWdodDogOTZweDtcXG4kbWFpbi1zaGFkb3ctY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1ibHVyLWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLXNoYWRvdy1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDUwJSk7XFxuJGJvcmRlci1tYWluLWNvbG9yOiByZ2IoMTg1LCAxODgsIDIzMyk7XFxuJGJvcmRlci1kYXJrLWNvbG9yOiBkYXJrZW4oJGJvcmRlci1tYWluLWNvbG9yLCA1MCUpO1xcblxcbiRlcnJvci1jb2xvcjogcmdiKDI1NSwgMTY0LCAxMzcpO1xcbiR2ZXJpZnktY29sb3I6IHJnYigxMzksIDI1NSwgMjAxKTtcXG4kZXJyb3ItdGV4dC1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LXRleHQtY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcblxcbiRwYWdlLW1heC13aWR0aDogMTI4MHB4O1xcblxcbiRicmVha3BvaW50LXhzOiAwcHg7XFxuJGJyZWFrcG9pbnQtc206IDYwMHB4O1xcbiRicmVha3BvaW50LW1kOiA5NjBweDtcXG4kYnJlYWtwb2ludC1sZzogMTI4MHB4O1xcbiRicmVha3BvaW50LXhsOiAxOTIwcHg7XFxuJGJyZWFrcG9pbnQtNGs6IDI1NjBweDtcXG5cXG4kYnJlYWtwb2ludHM6IHhzLCBzbSwgbWQsIGxnLCB4bDtcXG4kYnJlYWtwb2ludC13aWR0aDogKFxcbiAgeHM6IDBweCxcXG4gIHNtOiA2MDBweCxcXG4gIG1kOiA5NjBweCxcXG4gIGxnOiAxMjgwcHgsXFxuICB4bDogMTkyMHB4LFxcbiAgNGs6IDI1NjBweCxcXG4pO1xcblxcbiRuZXh0LWJyZWFrcG9pbnRzOiAoXFxuICB4czogc20sXFxuICBzbTogbWQsXFxuICBtZDogbGcsXFxuICBsZzogeGwsXFxuICB4bDogNGssXFxuKTtcXG5cXG5AbWl4aW4gbXFVcCgkYnA6IG1kKSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkbmJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1xRG93bigkYnA6IG1kKSB7XFxuICAkbmJwOiBtYXAtZ2V0KCRuZXh0LWJyZWFrcG9pbnRzLCAkYnApO1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJGJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZXJyb3JSb290XCI6IFwiVXBsb2FkQmlnQnV0dG9uX2Vycm9yUm9vdF9fMjVZTkZcIixcblx0XCJ2ZXJpZnlSb290XCI6IFwiVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiVXBsb2FkQmlnQnV0dG9uX2NvbnRhaW5lcl9fMkcza19cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/UploadBigButton.module.scss\n");

/***/ })

})