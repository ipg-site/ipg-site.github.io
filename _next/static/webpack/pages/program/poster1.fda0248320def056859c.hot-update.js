webpackHotUpdate_N_E("pages/program/poster1",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/program.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".program_container__2adHO {\\n  max-width: 1100px;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: flex-start;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_container__2adHO {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.program_leftContainer__1fGVj {\\n  padding: 1em;\\n  margin: auto;\\n  width: 25%;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftContainer__1fGVj {\\n    width: 100%;\\n  }\\n}\\n\\n.program_rightContainer__b_BIk {\\n  max-width: 1100px;\\n  padding: 1em;\\n  width: calc(100% - 25%);\\n}\\n@media screen and (max-width: 960px) {\\n  .program_rightContainer__b_BIk {\\n    width: 100%;\\n  }\\n}\\n\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n}\\n.program_leftSide__29kuG .program_menuItem__3F7Yc {\\n  display: block;\\n  text-align: left;\\n  font-size: 1em;\\n  font-family: \\\"Sawarabi Gothic\\\";\\n  background-color: #f3f2fa;\\n  border: 1px solid #241f4e;\\n  padding: 1em;\\n  margin-bottom: 0.5em;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 33%;\\n    padding: 0.5em;\\n    text-align: center;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 100%;\\n    margin-bottom: 0em;\\n  }\\n}\\n\\n.program_presentationRow__2JhIn {\\n  background-color: #f3f2fa;\\n  border: 1px solid #241f4e;\\n  padding: 1em;\\n}\\n.program_presentationRow__2JhIn a {\\n  text-decoration: underline;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://program.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAQA;EACE,iBCSe;EDRf,YAAA;EACA,YAAA;EACA,aAAA;EACA,2BAAA;AAPF;AC+CE;ED7CF;IAOI,eAAA;EALF;AACF;;AAQA;EACE,YAAA;EACA,YAAA;EACA,UApBW;AAeb;ACoCE;EDlCF;IAKI,WAAA;EAHF;AACF;;AAMA;EACE,iBCXe;EDYf,YAAA;EACA,uBA5BY;AAyBd;ACyBE;EDzBF;IAKI,WAAA;EADF;AACF;;ACoBE;EDhBF;IAEI,aAAA;IACA,6BAAA;IACA,oBAAA;EADF;AACF;ACYE;EDhBF;IAQI,sBAAA;IACA,oBAAA;IACA,mBAAA;EAAF;AACF;AACE;EACE,cAAA;EACA,gBAAA;EACA,cAAA;EACA,8BAAA;EACA,yBCrDU;EDsDV,yBAAA;EACA,YAAA;EACA,oBAAA;AACJ;ACLE;EDJA;IAWI,UAAA;IACA,cAAA;IACA,kBAAA;EAEJ;AACF;ACZE;EDJA;IAiBI,WAAA;IACA,kBAAA;EAGJ;AACF;;AACA;EACE,yBCxEY;EDyEZ,yBAAA;EACA,YAAA;AAEF;AADE;EACE,0BAAA;AAGJ\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n$left-ratio: 25%;\\n$right-ratio: calc(100% - #{$left-ratio});\\n\\n.root {\\n}\\n\\n.container {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: flex-start;\\n  @include mqDown(md) {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.leftContainer {\\n  padding: 1em;\\n  margin: auto;\\n  width: $left-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.rightContainer {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  width: $right-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.leftSide {\\n  @include mqDown(md) {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  @include mqDown(sm) {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n  .menuItem {\\n    display: block;\\n    text-align: left;\\n    font-size: 1em;\\n    font-family: \\\"Sawarabi Gothic\\\";\\n    background-color: $light-color;\\n    border: 1px solid $border-main-color;\\n    padding: 1em;\\n    margin-bottom: 0.5em;\\n\\n    @include mqDown(md) {\\n      width: 33%;\\n      padding: 0.5em;\\n      text-align: center;\\n    }\\n\\n    @include mqDown(sm) {\\n      width: 100%;\\n      margin-bottom: 0em;\\n    }\\n  }\\n}\\n\\n.presentationRow {\\n  background-color: $light-color;\\n  border: 1px solid $border-main-color;\\n  padding: 1em;\\n  a {\\n    text-decoration: underline;\\n  }\\n}\\n\",\"$main-color: rgb(36, 31, 78);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: $main-color;\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"program_container__2adHO\",\n\t\"leftContainer\": \"program_leftContainer__1fGVj\",\n\t\"rightContainer\": \"program_rightContainer__b_BIk\",\n\t\"leftSide\": \"program_leftSide__29kuG\",\n\t\"menuItem\": \"program_menuItem__3F7Yc\",\n\t\"presentationRow\": \"program_presentationRow__2JhIn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3M/NWFmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsOEJBQThCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGtCQUFrQixnQ0FBZ0MsR0FBRyx3Q0FBd0MsK0JBQStCLHNCQUFzQixLQUFLLEdBQUcsbUNBQW1DLGlCQUFpQixpQkFBaUIsZUFBZSxHQUFHLHdDQUF3QyxtQ0FBbUMsa0JBQWtCLEtBQUssR0FBRyxvQ0FBb0Msc0JBQXNCLGlCQUFpQiw0QkFBNEIsR0FBRyx3Q0FBd0Msb0NBQW9DLGtCQUFrQixLQUFLLEdBQUcsMENBQTBDLDhCQUE4QixvQkFBb0Isb0NBQW9DLDJCQUEyQixLQUFLLEdBQUcsd0NBQXdDLDhCQUE4Qiw2QkFBNkIsMkJBQTJCLDBCQUEwQixLQUFLLEdBQUcscURBQXFELG1CQUFtQixxQkFBcUIsbUJBQW1CLHFDQUFxQyw4QkFBOEIsOEJBQThCLGlCQUFpQix5QkFBeUIsR0FBRyx3Q0FBd0MsdURBQXVELGlCQUFpQixxQkFBcUIseUJBQXlCLEtBQUssR0FBRyx3Q0FBd0MsdURBQXVELGtCQUFrQix5QkFBeUIsS0FBSyxHQUFHLHFDQUFxQyw4QkFBOEIsOEJBQThCLGlCQUFpQixHQUFHLHFDQUFxQywrQkFBK0IsR0FBRyxPQUFPLDJHQUEyRyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxLQUFLLEtBQUssV0FBVyxrREFBa0QscUJBQXFCLDhCQUE4QixZQUFZLEVBQUUsV0FBVyxHQUFHLGdCQUFnQiwrQkFBK0IsaUJBQWlCLGlCQUFpQixrQkFBa0IsZ0NBQWdDLHlCQUF5QixzQkFBc0IsS0FBSyxHQUFHLG9CQUFvQixpQkFBaUIsaUJBQWlCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLEtBQUssR0FBRyxxQkFBcUIsK0JBQStCLGlCQUFpQix3QkFBd0IseUJBQXlCLGtCQUFrQixLQUFLLEdBQUcsZUFBZSx5QkFBeUIsb0JBQW9CLG9DQUFvQywyQkFBMkIsS0FBSywyQkFBMkIsNkJBQTZCLDJCQUEyQiwwQkFBMEIsS0FBSyxlQUFlLHFCQUFxQix1QkFBdUIscUJBQXFCLHVDQUF1QyxxQ0FBcUMsMkNBQTJDLG1CQUFtQiwyQkFBMkIsNkJBQTZCLG1CQUFtQix1QkFBdUIsMkJBQTJCLE9BQU8sNkJBQTZCLG9CQUFvQiwyQkFBMkIsT0FBTyxLQUFLLEdBQUcsc0JBQXNCLG1DQUFtQyx5Q0FBeUMsaUJBQWlCLE9BQU8saUNBQWlDLEtBQUssR0FBRyxrQ0FBa0MsMENBQTBDLDRDQUE0Qyw4Q0FBOEMsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELGtDQUFrQyxzREFBc0QscUNBQXFDLG9DQUFvQyxpREFBaUQsbURBQW1ELCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQy9ySztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZ3JhbV9jb250YWluZXJfXzJhZEhPIHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5wcm9ncmFtX2NvbnRhaW5lcl9fMmFkSE8ge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi5wcm9ncmFtX2xlZnRDb250YWluZXJfXzFmR1ZqIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAyNSU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0Q29udGFpbmVyX18xZkdWaiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ucHJvZ3JhbV9yaWdodENvbnRhaW5lcl9fYl9CSWsge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjUlKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5wcm9ncmFtX3JpZ2h0Q29udGFpbmVyX19iX0JJayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcbi5wcm9ncmFtX2xlZnRTaWRlX18yOWt1RyAucHJvZ3JhbV9tZW51SXRlbV9fM0Y3WWMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpIEdvdGhpY1xcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmZhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI0MWY0ZTtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIC5wcm9ncmFtX21lbnVJdGVtX18zRjdZYyB7XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcgLnByb2dyYW1fbWVudUl0ZW1fXzNGN1ljIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcXG4gIH1cXG59XFxuXFxuLnByb2dyYW1fcHJlc2VudGF0aW9uUm93X18ySmhJbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmMmZhO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI0MWY0ZTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLnByb2dyYW1fcHJlc2VudGF0aW9uUm93X18ySmhJbiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcHJvZ3JhbS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBUUE7RUFDRSxpQkNTZTtFRFJmLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0FBUEY7QUMrQ0U7RUQ3Q0Y7SUFPSSxlQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFwQlc7QUFlYjtBQ29DRTtFRGxDRjtJQUtJLFdBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0UsaUJDWGU7RURZZixZQUFBO0VBQ0EsdUJBNUJZO0FBeUJkO0FDeUJFO0VEekJGO0lBS0ksV0FBQTtFQURGO0FBQ0Y7O0FDb0JFO0VEaEJGO0lBRUksYUFBQTtJQUNBLDZCQUFBO0lBQ0Esb0JBQUE7RUFERjtBQUNGO0FDWUU7RURoQkY7SUFRSSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7RUFBRjtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkNyRFU7RURzRFYseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQ0xFO0VESkE7SUFXSSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBRUo7QUFDRjtBQ1pFO0VESkE7SUFpQkksV0FBQTtJQUNBLGtCQUFBO0VBR0o7QUFDRjs7QUFDQTtFQUNFLHlCQ3hFWTtFRHlFWix5QkFBQTtFQUNBLFlBQUE7QUFFRjtBQURFO0VBQ0UsMEJBQUE7QUFHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3RoZW1lLnNjc3NcXFwiO1xcblxcbiRsZWZ0LXJhdGlvOiAyNSU7XFxuJHJpZ2h0LXJhdGlvOiBjYWxjKDEwMCUgLSAjeyRsZWZ0LXJhdGlvfSk7XFxuXFxuLnJvb3Qge1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogJHBhZ2UtbWF4LXdpZHRoO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi5sZWZ0Q29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAkbGVmdC1yYXRpbztcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnJpZ2h0Q29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogJHBhZ2UtbWF4LXdpZHRoO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6ICRyaWdodC1yYXRpbztcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmxlZnRTaWRlIHtcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubWVudUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWNvbG9yO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLW1haW4tY29sb3I7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFxuICAgIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICAgIHdpZHRoOiAzMyU7XFxuICAgICAgcGFkZGluZzogMC41ZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1xRG93bihzbSkge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucHJlc2VudGF0aW9uUm93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1jb2xvcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItbWFpbi1jb2xvcjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG59XFxuXCIsXCIkbWFpbi1jb2xvcjogcmdiKDM2LCAzMSwgNzgpO1xcbiRsaWdodC1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kbGlnaHQyLWNvbG9yOiBsaWdodGVuKCRsaWdodC1jb2xvciwgMTAlKTtcXG4kdGV4dC1tYWluLWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCA3NSUpO1xcbiRoZWFkZXItaGVpZ2h0OiA5NnB4O1xcbiRtYWluLXNoYWRvdy1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLWJsdXItY29sb3I6IGRhcmtlbigkdGV4dC1tYWluLWNvbG9yLCAzMCUpO1xcbiR0ZXh0LW1haW4tc2hhZG93LWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgNTAlKTtcXG4kYm9yZGVyLW1haW4tY29sb3I6ICRtYWluLWNvbG9yO1xcbiRib3JkZXItZGFyay1jb2xvcjogZGFya2VuKCRib3JkZXItbWFpbi1jb2xvciwgNTAlKTtcXG5cXG4kZXJyb3ItY29sb3I6IHJnYigyNTUsIDE2NCwgMTM3KTtcXG4kdmVyaWZ5LWNvbG9yOiByZ2IoMTM5LCAyNTUsIDIwMSk7XFxuJGVycm9yLWJvcmRlci1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LWJvcmRlci1jb2xvcjogZGFya2VuKCR2ZXJpZnktY29sb3IsIDUwJSk7XFxuJGVycm9yLXRleHQtY29sb3I6IGRhcmtlbigkZXJyb3ItY29sb3IsIDUwJSk7XFxuJHZlcmlmeS10ZXh0LWNvbG9yOiBkYXJrZW4oJHZlcmlmeS1jb2xvciwgNTAlKTtcXG5cXG4kcGFnZS1tYXgtd2lkdGg6IDExMDBweDtcXG5cXG4kYnJlYWtwb2ludC14czogMHB4O1xcbiRicmVha3BvaW50LXNtOiA2MDBweDtcXG4kYnJlYWtwb2ludC1tZDogOTYwcHg7XFxuJGJyZWFrcG9pbnQtbGc6IDEyODBweDtcXG4kYnJlYWtwb2ludC14bDogMTkyMHB4O1xcbiRicmVha3BvaW50LTRrOiAyNTYwcHg7XFxuXFxuJGJyZWFrcG9pbnRzOiB4cywgc20sIG1kLCBsZywgeGw7XFxuJGJyZWFrcG9pbnQtd2lkdGg6IChcXG4gIHhzOiAwcHgsXFxuICBzbTogNjAwcHgsXFxuICBtZDogOTYwcHgsXFxuICBsZzogMTI4MHB4LFxcbiAgeGw6IDE5MjBweCxcXG4gIDRrOiAyNTYwcHgsXFxuKTtcXG5cXG4kbmV4dC1icmVha3BvaW50czogKFxcbiAgeHM6IHNtLFxcbiAgc206IG1kLFxcbiAgbWQ6IGxnLFxcbiAgbGc6IHhsLFxcbiAgeGw6IDRrLFxcbik7XFxuXFxuQG1peGluIG1xVXAoJGJwOiBtZCkge1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJG5icCkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBtcURvd24oJGJwOiBtZCkge1xcbiAgJG5icDogbWFwLWdldCgkbmV4dC1icmVha3BvaW50cywgJGJwKTtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnQtd2lkdGgsICRicCkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInByb2dyYW1fY29udGFpbmVyX18yYWRIT1wiLFxuXHRcImxlZnRDb250YWluZXJcIjogXCJwcm9ncmFtX2xlZnRDb250YWluZXJfXzFmR1ZqXCIsXG5cdFwicmlnaHRDb250YWluZXJcIjogXCJwcm9ncmFtX3JpZ2h0Q29udGFpbmVyX19iX0JJa1wiLFxuXHRcImxlZnRTaWRlXCI6IFwicHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUdcIixcblx0XCJtZW51SXRlbVwiOiBcInByb2dyYW1fbWVudUl0ZW1fXzNGN1ljXCIsXG5cdFwicHJlc2VudGF0aW9uUm93XCI6IFwicHJvZ3JhbV9wcmVzZW50YXRpb25Sb3dfXzJKaEluXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss\n");

/***/ })

})