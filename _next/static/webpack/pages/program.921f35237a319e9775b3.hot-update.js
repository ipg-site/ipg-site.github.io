webpackHotUpdate_N_E("pages/program",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/program.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".program_container__2adHO {\\n  max-width: 1100px;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: center;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_container__2adHO {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.program_leftContainer__1fGVj {\\n  padding: 1em;\\n  margin: auto;\\n  width: 25%;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftContainer__1fGVj {\\n    width: 100%;\\n  }\\n}\\n\\n.program_rightContainer__b_BIk {\\n  max-width: 1100px;\\n  padding: 1em;\\n  margin: auto;\\n  width: calc(100% - 25%);\\n}\\n@media screen and (max-width: 960px) {\\n  .program_rightContainer__b_BIk {\\n    width: 100%;\\n  }\\n}\\n\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG {\\n    flex-direction: column;\\n  }\\n}\\n.program_leftSide__29kuG .program_menuItem__3F7Yc {\\n  display: block;\\n  text-align: left;\\n  font-size: 1em;\\n  font-family: \\\"Sawarabi Gothic\\\";\\n  background-color: #f3f2fa;\\n  border: 1px solid #b9bce9;\\n  padding: 1em;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 33%;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 100%;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://program.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAQA;EACE,iBCSe;EDRf,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;AAPF;AC+CE;ED7CF;IAOI,eAAA;EALF;AACF;;AAQA;EACE,YAAA;EACA,YAAA;EACA,UApBW;AAeb;ACoCE;EDlCF;IAKI,WAAA;EAHF;AACF;;AAMA;EACE,iBCXe;EDYf,YAAA;EACA,YAAA;EACA,uBA7BY;AA0Bd;ACwBE;EDzBF;IAMI,WAAA;EADF;AACF;;ACmBE;EDfF;IAEI,aAAA;IACA,6BAAA;IACA,oBAAA;EADF;AACF;ACWE;EDfF;IAQI,sBAAA;EAAF;AACF;AACE;EACE,cAAA;EACA,gBAAA;EACA,cAAA;EACA,8BAAA;EACA,yBCpDU;EDqDV,yBAAA;EACA,YAAA;AACJ;ACHE;EDLA;IAUI,UAAA;EAEJ;AACF;ACRE;EDLA;IAcI,WAAA;EAGJ;AACF\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n$left-ratio: 25%;\\n$right-ratio: calc(100% - #{$left-ratio});\\n\\n.root {\\n}\\n\\n.container {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: center;\\n  @include mqDown(md) {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.leftContainer {\\n  padding: 1em;\\n  margin: auto;\\n  width: $left-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.rightContainer {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  margin: auto;\\n  width: $right-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.leftSide {\\n  @include mqDown(md) {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  @include mqDown(sm) {\\n    flex-direction: column;\\n  }\\n  .menuItem {\\n    display: block;\\n    text-align: left;\\n    font-size: 1em;\\n    font-family: \\\"Sawarabi Gothic\\\";\\n    background-color: $light-color;\\n    border: 1px solid $border-main-color;\\n    padding: 1em;\\n\\n    @include mqDown(md) {\\n      width: 33%;\\n    }\\n\\n    @include mqDown(sm) {\\n      width: 100%;\\n    }\\n  }\\n}\\n\",\"$main-color: rgb(36, 31, 78);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: rgb(185, 188, 233);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"program_container__2adHO\",\n\t\"leftContainer\": \"program_leftContainer__1fGVj\",\n\t\"rightContainer\": \"program_rightContainer__b_BIk\",\n\t\"leftSide\": \"program_leftSide__29kuG\",\n\t\"menuItem\": \"program_menuItem__3F7Yc\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3M/NWFmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsOEJBQThCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsR0FBRyx3Q0FBd0MsK0JBQStCLHNCQUFzQixLQUFLLEdBQUcsbUNBQW1DLGlCQUFpQixpQkFBaUIsZUFBZSxHQUFHLHdDQUF3QyxtQ0FBbUMsa0JBQWtCLEtBQUssR0FBRyxvQ0FBb0Msc0JBQXNCLGlCQUFpQixpQkFBaUIsNEJBQTRCLEdBQUcsd0NBQXdDLG9DQUFvQyxrQkFBa0IsS0FBSyxHQUFHLDBDQUEwQyw4QkFBOEIsb0JBQW9CLG9DQUFvQywyQkFBMkIsS0FBSyxHQUFHLHdDQUF3Qyw4QkFBOEIsNkJBQTZCLEtBQUssR0FBRyxxREFBcUQsbUJBQW1CLHFCQUFxQixtQkFBbUIscUNBQXFDLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLEdBQUcsd0NBQXdDLHVEQUF1RCxpQkFBaUIsS0FBSyxHQUFHLHdDQUF3Qyx1REFBdUQsa0JBQWtCLEtBQUssR0FBRyxPQUFPLDJHQUEyRyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssa0RBQWtELHFCQUFxQiw4QkFBOEIsWUFBWSxFQUFFLFdBQVcsR0FBRyxnQkFBZ0IsK0JBQStCLGlCQUFpQixpQkFBaUIsa0JBQWtCLDRCQUE0Qix5QkFBeUIsc0JBQXNCLEtBQUssR0FBRyxvQkFBb0IsaUJBQWlCLGlCQUFpQix1QkFBdUIseUJBQXlCLGtCQUFrQixLQUFLLEdBQUcscUJBQXFCLCtCQUErQixpQkFBaUIsaUJBQWlCLHdCQUF3Qix5QkFBeUIsa0JBQWtCLEtBQUssR0FBRyxlQUFlLHlCQUF5QixvQkFBb0Isb0NBQW9DLDJCQUEyQixLQUFLLDJCQUEyQiw2QkFBNkIsS0FBSyxlQUFlLHFCQUFxQix1QkFBdUIscUJBQXFCLHVDQUF1QyxxQ0FBcUMsMkNBQTJDLG1CQUFtQiw2QkFBNkIsbUJBQW1CLE9BQU8sNkJBQTZCLG9CQUFvQixPQUFPLEtBQUssR0FBRyxrQ0FBa0MsMENBQTBDLDRDQUE0Qyw4Q0FBOEMsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELHlDQUF5QyxzREFBc0QscUNBQXFDLG9DQUFvQyxpREFBaUQsbURBQW1ELCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQ245STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9wcm9ncmFtLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2dyYW1fY29udGFpbmVyX18yYWRITyB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5wcm9ncmFtX2NvbnRhaW5lcl9fMmFkSE8ge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi5wcm9ncmFtX2xlZnRDb250YWluZXJfXzFmR1ZqIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAyNSU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0Q29udGFpbmVyX18xZkdWaiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ucHJvZ3JhbV9yaWdodENvbnRhaW5lcl9fYl9CSWsge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjUlKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5wcm9ncmFtX3JpZ2h0Q29udGFpbmVyX19iX0JJayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIC5wcm9ncmFtX21lbnVJdGVtX18zRjdZYyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YyZmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYjliY2U5O1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIC5wcm9ncmFtX21lbnVJdGVtX18zRjdZYyB7XFxuICAgIHdpZHRoOiAzMyU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcgLnByb2dyYW1fbWVudUl0ZW1fXzNGN1ljIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wcm9ncmFtLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vdGhlbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFRQTtFQUNFLGlCQ1NlO0VEUmYsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFQRjtBQytDRTtFRDdDRjtJQU9JLGVBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQXBCVztBQWViO0FDb0NFO0VEbENGO0lBS0ksV0FBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSxpQkNYZTtFRFlmLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBN0JZO0FBMEJkO0FDd0JFO0VEekJGO0lBTUksV0FBQTtFQURGO0FBQ0Y7O0FDbUJFO0VEZkY7SUFFSSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvQkFBQTtFQURGO0FBQ0Y7QUNXRTtFRGZGO0lBUUksc0JBQUE7RUFBRjtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkNwRFU7RURxRFYseUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUNIRTtFRExBO0lBVUksVUFBQTtFQUVKO0FBQ0Y7QUNSRTtFRExBO0lBY0ksV0FBQTtFQUdKO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi90aGVtZS5zY3NzXFxcIjtcXG5cXG4kbGVmdC1yYXRpbzogMjUlO1xcbiRyaWdodC1yYXRpbzogY2FsYygxMDAlIC0gI3skbGVmdC1yYXRpb30pO1xcblxcbi5yb290IHtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6ICRwYWdlLW1heC13aWR0aDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi5sZWZ0Q29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAkbGVmdC1yYXRpbztcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnJpZ2h0Q29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogJHBhZ2UtbWF4LXdpZHRoO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6ICRyaWdodC1yYXRpbztcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmxlZnRTaWRlIHtcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5tZW51SXRlbSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaSBHb3RoaWNcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtY29sb3I7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItbWFpbi1jb2xvcjtcXG4gICAgcGFkZGluZzogMWVtO1xcblxcbiAgICBAaW5jbHVkZSBtcURvd24obWQpIHtcXG4gICAgICB3aWR0aDogMzMlO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1xRG93bihzbSkge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiJG1haW4tY29sb3I6IHJnYigzNiwgMzEsIDc4KTtcXG4kbGlnaHQtY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDc1JSk7XFxuJGxpZ2h0Mi1jb2xvcjogbGlnaHRlbigkbGlnaHQtY29sb3IsIDEwJSk7XFxuJHRleHQtbWFpbi1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kaGVhZGVyLWhlaWdodDogOTZweDtcXG4kbWFpbi1zaGFkb3ctY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1ibHVyLWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLXNoYWRvdy1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDUwJSk7XFxuJGJvcmRlci1tYWluLWNvbG9yOiByZ2IoMTg1LCAxODgsIDIzMyk7XFxuJGJvcmRlci1kYXJrLWNvbG9yOiBkYXJrZW4oJGJvcmRlci1tYWluLWNvbG9yLCA1MCUpO1xcblxcbiRlcnJvci1jb2xvcjogcmdiKDI1NSwgMTY0LCAxMzcpO1xcbiR2ZXJpZnktY29sb3I6IHJnYigxMzksIDI1NSwgMjAxKTtcXG4kZXJyb3ItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHZlcmlmeS1jb2xvciwgNTAlKTtcXG4kZXJyb3ItdGV4dC1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LXRleHQtY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcblxcbiRwYWdlLW1heC13aWR0aDogMTEwMHB4O1xcblxcbiRicmVha3BvaW50LXhzOiAwcHg7XFxuJGJyZWFrcG9pbnQtc206IDYwMHB4O1xcbiRicmVha3BvaW50LW1kOiA5NjBweDtcXG4kYnJlYWtwb2ludC1sZzogMTI4MHB4O1xcbiRicmVha3BvaW50LXhsOiAxOTIwcHg7XFxuJGJyZWFrcG9pbnQtNGs6IDI1NjBweDtcXG5cXG4kYnJlYWtwb2ludHM6IHhzLCBzbSwgbWQsIGxnLCB4bDtcXG4kYnJlYWtwb2ludC13aWR0aDogKFxcbiAgeHM6IDBweCxcXG4gIHNtOiA2MDBweCxcXG4gIG1kOiA5NjBweCxcXG4gIGxnOiAxMjgwcHgsXFxuICB4bDogMTkyMHB4LFxcbiAgNGs6IDI1NjBweCxcXG4pO1xcblxcbiRuZXh0LWJyZWFrcG9pbnRzOiAoXFxuICB4czogc20sXFxuICBzbTogbWQsXFxuICBtZDogbGcsXFxuICBsZzogeGwsXFxuICB4bDogNGssXFxuKTtcXG5cXG5AbWl4aW4gbXFVcCgkYnA6IG1kKSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkbmJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1xRG93bigkYnA6IG1kKSB7XFxuICAkbmJwOiBtYXAtZ2V0KCRuZXh0LWJyZWFrcG9pbnRzLCAkYnApO1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJGJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicHJvZ3JhbV9jb250YWluZXJfXzJhZEhPXCIsXG5cdFwibGVmdENvbnRhaW5lclwiOiBcInByb2dyYW1fbGVmdENvbnRhaW5lcl9fMWZHVmpcIixcblx0XCJyaWdodENvbnRhaW5lclwiOiBcInByb2dyYW1fcmlnaHRDb250YWluZXJfX2JfQklrXCIsXG5cdFwibGVmdFNpZGVcIjogXCJwcm9ncmFtX2xlZnRTaWRlX18yOWt1R1wiLFxuXHRcIm1lbnVJdGVtXCI6IFwicHJvZ3JhbV9tZW51SXRlbV9fM0Y3WWNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss\n");

/***/ })

})