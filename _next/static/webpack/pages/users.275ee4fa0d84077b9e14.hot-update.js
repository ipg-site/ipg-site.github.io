webpackHotUpdate_N_E("pages/users",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/UploadBigButton.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/UploadBigButton.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".UploadBigButton_errorRoot__25YNF, .UploadBigButton_verifyRoot__NrICX {\\n  margin: 1em;\\n  width: 300px;\\n  min-height: 300px;\\n  border: 1px solid #ffa489;\\n  border-radius: 10px;\\n  cursor: pointer;\\n  z-index: 3;\\n  pointer-events: visible;\\n}\\n.UploadBigButton_errorRoot__25YNF input[type=file], .UploadBigButton_verifyRoot__NrICX input[type=file] {\\n  z-index: 1;\\n  pointer-events: visible;\\n}\\n.UploadBigButton_errorRoot__25YNF .UploadBigButton_container__2G3k_, .UploadBigButton_verifyRoot__NrICX .UploadBigButton_container__2G3k_ {\\n  min-height: 300px;\\n  padding-top: 1em;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  text-align: center;\\n  font-size: 1.1em;\\n  color: #891f00;\\n}\\n.UploadBigButton_errorRoot__25YNF .UploadBigButton_container__2G3k_ img, .UploadBigButton_verifyRoot__NrICX .UploadBigButton_container__2G3k_ img {\\n  width: 100px;\\n  display: block;\\n}\\n\\n.UploadBigButton_verifyRoot__NrICX {\\n  border-color: #8bffc9;\\n}\\n.UploadBigButton_verifyRoot__NrICX .UploadBigButton_container__2G3k_ {\\n  color: #008b4a;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://UploadBigButton.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,yBAAA;EACA,mBAAA;EACA,eAAA;EACA,UAAA;EACA,uBAAA;AADF;AAGE;EACE,UAAA;EACA,uBAAA;AADJ;AAIE;EACE,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,8BAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cCfe;ADanB;AAII;EACE,YAAA;EACA,cAAA;AAFN;;AAOA;EAEE,qBC3Ba;ADsBf;AAME;EACE,cC3BgB;ADuBpB\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n.errorRoot {\\n  margin: 1em;\\n  width: 300px;\\n  min-height: 300px;\\n  border: 1px solid $error-color;\\n  border-radius: 10px;\\n  cursor: pointer;\\n  z-index: 3;\\n  pointer-events: visible;\\n\\n  input[type=\\\"file\\\"] {\\n    z-index: 1;\\n    pointer-events: visible;\\n  }\\n\\n  .container {\\n    min-height: 300px;\\n    padding-top: 1em;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    text-align: center;\\n    font-size: 1.1em;\\n    color: $error-text-color;\\n\\n    img {\\n      width: 100px;\\n      display: block;\\n    }\\n  }\\n}\\n\\n.verifyRoot {\\n  @extend .errorRoot;\\n  border-color: $verify-color;\\n  .container {\\n    color: $verify-text-color;\\n  }\\n}\\n\",\"$main-color: rgb(52, 53, 66);\\n$text-main-color: invert($main-color);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1280px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"errorRoot\": \"UploadBigButton_errorRoot__25YNF\",\n\t\"verifyRoot\": \"UploadBigButton_verifyRoot__NrICX\",\n\t\"container\": \"UploadBigButton_container__2G3k_\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL1VwbG9hZEJpZ0J1dHRvbi5tb2R1bGUuc2Nzcz9hYmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUywwRUFBMEUsZ0JBQWdCLGlCQUFpQixzQkFBc0IsOEJBQThCLHdCQUF3QixvQkFBb0IsZUFBZSw0QkFBNEIsR0FBRywyR0FBMkcsZUFBZSw0QkFBNEIsR0FBRyw2SUFBNkksc0JBQXNCLHFCQUFxQixrQkFBa0IsMkJBQTJCLG1DQUFtQyx3QkFBd0IsdUJBQXVCLHFCQUFxQixtQkFBbUIsR0FBRyxxSkFBcUosaUJBQWlCLG1CQUFtQixHQUFHLHdDQUF3QywwQkFBMEIsR0FBRyx3RUFBd0UsbUJBQW1CLEdBQUcsT0FBTyxtSEFBbUgsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksb0RBQW9ELGdCQUFnQixnQkFBZ0IsaUJBQWlCLHNCQUFzQixtQ0FBbUMsd0JBQXdCLG9CQUFvQixlQUFlLDRCQUE0Qiw0QkFBNEIsaUJBQWlCLDhCQUE4QixLQUFLLGtCQUFrQix3QkFBd0IsdUJBQXVCLG9CQUFvQiw2QkFBNkIscUNBQXFDLDBCQUEwQix5QkFBeUIsdUJBQXVCLCtCQUErQixhQUFhLHFCQUFxQix1QkFBdUIsT0FBTyxLQUFLLEdBQUcsaUJBQWlCLHVCQUF1QixnQ0FBZ0MsZ0JBQWdCLGdDQUFnQyxLQUFLLEdBQUcsa0NBQWtDLHdDQUF3Qyx1QkFBdUIsZ0RBQWdELHVEQUF1RCx5REFBeUQseUNBQXlDLHNEQUFzRCxxQ0FBcUMsb0NBQW9DLCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQ3YvRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL1VwbG9hZEJpZ0J1dHRvbi5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5VcGxvYWRCaWdCdXR0b25fZXJyb3JSb290X18yNVlORiwgLlVwbG9hZEJpZ0J1dHRvbl92ZXJpZnlSb290X19OcklDWCB7XFxuICBtYXJnaW46IDFlbTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYTQ4OTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAzO1xcbiAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxufVxcbi5VcGxvYWRCaWdCdXR0b25fZXJyb3JSb290X18yNVlORiBpbnB1dFt0eXBlPWZpbGVdLCAuVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIGlucHV0W3R5cGU9ZmlsZV0ge1xcbiAgei1pbmRleDogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xcbn1cXG4uVXBsb2FkQmlnQnV0dG9uX2Vycm9yUm9vdF9fMjVZTkYgLlVwbG9hZEJpZ0J1dHRvbl9jb250YWluZXJfXzJHM2tfLCAuVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIC5VcGxvYWRCaWdCdXR0b25fY29udGFpbmVyX18yRzNrXyB7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG4gIHBhZGRpbmctdG9wOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMWVtO1xcbiAgY29sb3I6ICM4OTFmMDA7XFxufVxcbi5VcGxvYWRCaWdCdXR0b25fZXJyb3JSb290X18yNVlORiAuVXBsb2FkQmlnQnV0dG9uX2NvbnRhaW5lcl9fMkcza18gaW1nLCAuVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIC5VcGxvYWRCaWdCdXR0b25fY29udGFpbmVyX18yRzNrXyBpbWcge1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5VcGxvYWRCaWdCdXR0b25fdmVyaWZ5Um9vdF9fTnJJQ1gge1xcbiAgYm9yZGVyLWNvbG9yOiAjOGJmZmM5O1xcbn1cXG4uVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYIC5VcGxvYWRCaWdCdXR0b25fY29udGFpbmVyX18yRzNrXyB7XFxuICBjb2xvcjogIzAwOGI0YTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL1VwbG9hZEJpZ0J1dHRvbi5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUdFO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBREo7QUFJRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDZmU7QURhbkI7QUFJSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBRk47O0FBT0E7RUFFRSxxQkMzQmE7QURzQmY7QUFNRTtFQUNFLGNDM0JnQjtBRHVCcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi90aGVtZS5zY3NzXFxcIjtcXG5cXG4uZXJyb3JSb290IHtcXG4gIG1hcmdpbjogMWVtO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkZXJyb3ItY29sb3I7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgei1pbmRleDogMztcXG4gIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlO1xcblxcbiAgaW5wdXRbdHlwZT1cXFwiZmlsZVxcXCJdIHtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9pbnRlci1ldmVudHM6IHZpc2libGU7XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWluLWhlaWdodDogMzAwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDEuMWVtO1xcbiAgICBjb2xvcjogJGVycm9yLXRleHQtY29sb3I7XFxuXFxuICAgIGltZyB7XFxuICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi52ZXJpZnlSb290IHtcXG4gIEBleHRlbmQgLmVycm9yUm9vdDtcXG4gIGJvcmRlci1jb2xvcjogJHZlcmlmeS1jb2xvcjtcXG4gIC5jb250YWluZXIge1xcbiAgICBjb2xvcjogJHZlcmlmeS10ZXh0LWNvbG9yO1xcbiAgfVxcbn1cXG5cIixcIiRtYWluLWNvbG9yOiByZ2IoNTIsIDUzLCA2Nik7XFxuJHRleHQtbWFpbi1jb2xvcjogaW52ZXJ0KCRtYWluLWNvbG9yKTtcXG4kaGVhZGVyLWhlaWdodDogOTZweDtcXG4kbWFpbi1zaGFkb3ctY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1ibHVyLWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLXNoYWRvdy1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDUwJSk7XFxuJGJvcmRlci1tYWluLWNvbG9yOiByZ2IoMTg1LCAxODgsIDIzMyk7XFxuJGJvcmRlci1kYXJrLWNvbG9yOiBkYXJrZW4oJGJvcmRlci1tYWluLWNvbG9yLCA1MCUpO1xcblxcbiRlcnJvci1jb2xvcjogcmdiKDI1NSwgMTY0LCAxMzcpO1xcbiR2ZXJpZnktY29sb3I6IHJnYigxMzksIDI1NSwgMjAxKTtcXG4kZXJyb3ItdGV4dC1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LXRleHQtY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcblxcbiRwYWdlLW1heC13aWR0aDogMTI4MHB4O1xcblxcbiRicmVha3BvaW50LXhzOiAwcHg7XFxuJGJyZWFrcG9pbnQtc206IDYwMHB4O1xcbiRicmVha3BvaW50LW1kOiA5NjBweDtcXG4kYnJlYWtwb2ludC1sZzogMTI4MHB4O1xcbiRicmVha3BvaW50LXhsOiAxOTIwcHg7XFxuJGJyZWFrcG9pbnQtNGs6IDI1NjBweDtcXG5cXG4kYnJlYWtwb2ludHM6IHhzLCBzbSwgbWQsIGxnLCB4bDtcXG4kYnJlYWtwb2ludC13aWR0aDogKFxcbiAgeHM6IDBweCxcXG4gIHNtOiA2MDBweCxcXG4gIG1kOiA5NjBweCxcXG4gIGxnOiAxMjgwcHgsXFxuICB4bDogMTkyMHB4LFxcbiAgNGs6IDI1NjBweCxcXG4pO1xcblxcbiRuZXh0LWJyZWFrcG9pbnRzOiAoXFxuICB4czogc20sXFxuICBzbTogbWQsXFxuICBtZDogbGcsXFxuICBsZzogeGwsXFxuICB4bDogNGssXFxuKTtcXG5cXG5AbWl4aW4gbXFVcCgkYnA6IG1kKSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkbmJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1xRG93bigkYnA6IG1kKSB7XFxuICAkbmJwOiBtYXAtZ2V0KCRuZXh0LWJyZWFrcG9pbnRzLCAkYnApO1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJGJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZXJyb3JSb290XCI6IFwiVXBsb2FkQmlnQnV0dG9uX2Vycm9yUm9vdF9fMjVZTkZcIixcblx0XCJ2ZXJpZnlSb290XCI6IFwiVXBsb2FkQmlnQnV0dG9uX3ZlcmlmeVJvb3RfX05ySUNYXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiVXBsb2FkQmlnQnV0dG9uX2NvbnRhaW5lcl9fMkcza19cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/UploadBigButton.module.scss\n");

/***/ })

})