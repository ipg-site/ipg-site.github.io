webpackHotUpdate_N_E("pages/program",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/program.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".program_container__2adHO {\\n  max-width: 1100px;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: center;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_container__2adHO {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.program_leftContainer__1fGVj {\\n  padding: 1em;\\n  margin: auto;\\n  width: 25%;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftContainer__1fGVj {\\n    width: 100%;\\n  }\\n}\\n\\n.program_rightContainer__b_BIk {\\n  max-width: 1100px;\\n  padding: 1em;\\n  width: calc(100% - 25%);\\n}\\n@media screen and (max-width: 960px) {\\n  .program_rightContainer__b_BIk {\\n    width: 100%;\\n  }\\n}\\n\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n}\\n.program_leftSide__29kuG .program_menuItem__3F7Yc {\\n  display: block;\\n  text-align: left;\\n  font-size: 1em;\\n  font-family: \\\"Sawarabi Gothic\\\";\\n  background-color: #cde7ef;\\n  border: 1px solid #030708;\\n  padding: 1em;\\n  margin-bottom: 0.5em;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 33%;\\n    padding: 0.5em;\\n    text-align: center;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 100%;\\n    margin-bottom: 0em;\\n  }\\n}\\n\\n.program_presentationRow__2JhIn {\\n  background-color: #cde7ef;\\n  border: 1px solid #030708;\\n  padding: 1em;\\n}\\n.program_presentationRow__2JhIn a {\\n  text-decoration: underline;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://program.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAQA;EACE,iBCUe;EDTf,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;AAPF;ACgDE;ED9CF;IAOI,eAAA;EALF;AACF;;AAQA;EACE,YAAA;EACA,YAAA;EACA,UApBW;AAeb;ACqCE;EDnCF;IAKI,WAAA;EAHF;AACF;;AAMA;EACE,iBCVe;EDWf,YAAA;EACA,uBA5BY;AAyBd;AC0BE;ED1BF;IAKI,WAAA;EADF;AACF;;ACqBE;EDjBF;IAEI,aAAA;IACA,6BAAA;IACA,oBAAA;EADF;AACF;ACaE;EDjBF;IAQI,sBAAA;IACA,oBAAA;IACA,mBAAA;EAAF;AACF;AACE;EACE,cAAA;EACA,gBAAA;EACA,cAAA;EACA,8BAAA;EACA,yBCpDU;EDqDV,yBAAA;EACA,YAAA;EACA,oBAAA;AACJ;ACJE;EDLA;IAWI,UAAA;IACA,cAAA;IACA,kBAAA;EAEJ;AACF;ACXE;EDLA;IAiBI,WAAA;IACA,kBAAA;EAGJ;AACF;;AACA;EACE,yBCvEY;EDwEZ,yBAAA;EACA,YAAA;AAEF;AADE;EACE,0BAAA;AAGJ\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n$left-ratio: 25%;\\n$right-ratio: calc(100% - #{$left-ratio});\\n\\n.root {\\n}\\n\\n.container {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: center;\\n  @include mqDown(md) {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.leftContainer {\\n  padding: 1em;\\n  margin: auto;\\n  width: $left-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.rightContainer {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  width: $right-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.leftSide {\\n  @include mqDown(md) {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  @include mqDown(sm) {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n  .menuItem {\\n    display: block;\\n    text-align: left;\\n    font-size: 1em;\\n    font-family: \\\"Sawarabi Gothic\\\";\\n    background-color: $light-color;\\n    border: 1px solid $border-main-color;\\n    padding: 1em;\\n    margin-bottom: 0.5em;\\n\\n    @include mqDown(md) {\\n      width: 33%;\\n      padding: 0.5em;\\n      text-align: center;\\n    }\\n\\n    @include mqDown(sm) {\\n      width: 100%;\\n      margin-bottom: 0em;\\n    }\\n  }\\n}\\n\\n.presentationRow {\\n  background-color: $light-color;\\n  border: 1px solid $border-main-color;\\n  padding: 1em;\\n  a {\\n    text-decoration: underline;\\n  }\\n}\\n\",\"//$randomC: random(50);\\n$main-color: #0f272f;\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: darken($main-color, 10%);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"program_container__2adHO\",\n\t\"leftContainer\": \"program_leftContainer__1fGVj\",\n\t\"rightContainer\": \"program_rightContainer__b_BIk\",\n\t\"leftSide\": \"program_leftSide__29kuG\",\n\t\"menuItem\": \"program_menuItem__3F7Yc\",\n\t\"presentationRow\": \"program_presentationRow__2JhIn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3M/NWFmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsOEJBQThCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsR0FBRyx3Q0FBd0MsK0JBQStCLHNCQUFzQixLQUFLLEdBQUcsbUNBQW1DLGlCQUFpQixpQkFBaUIsZUFBZSxHQUFHLHdDQUF3QyxtQ0FBbUMsa0JBQWtCLEtBQUssR0FBRyxvQ0FBb0Msc0JBQXNCLGlCQUFpQiw0QkFBNEIsR0FBRyx3Q0FBd0Msb0NBQW9DLGtCQUFrQixLQUFLLEdBQUcsMENBQTBDLDhCQUE4QixvQkFBb0Isb0NBQW9DLDJCQUEyQixLQUFLLEdBQUcsd0NBQXdDLDhCQUE4Qiw2QkFBNkIsMkJBQTJCLDBCQUEwQixLQUFLLEdBQUcscURBQXFELG1CQUFtQixxQkFBcUIsbUJBQW1CLHFDQUFxQyw4QkFBOEIsOEJBQThCLGlCQUFpQix5QkFBeUIsR0FBRyx3Q0FBd0MsdURBQXVELGlCQUFpQixxQkFBcUIseUJBQXlCLEtBQUssR0FBRyx3Q0FBd0MsdURBQXVELGtCQUFrQix5QkFBeUIsS0FBSyxHQUFHLHFDQUFxQyw4QkFBOEIsOEJBQThCLGlCQUFpQixHQUFHLHFDQUFxQywrQkFBK0IsR0FBRyxPQUFPLDJHQUEyRyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxLQUFLLEtBQUssV0FBVyxrREFBa0QscUJBQXFCLDhCQUE4QixZQUFZLEVBQUUsV0FBVyxHQUFHLGdCQUFnQiwrQkFBK0IsaUJBQWlCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHlCQUF5QixzQkFBc0IsS0FBSyxHQUFHLG9CQUFvQixpQkFBaUIsaUJBQWlCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLEtBQUssR0FBRyxxQkFBcUIsK0JBQStCLGlCQUFpQix3QkFBd0IseUJBQXlCLGtCQUFrQixLQUFLLEdBQUcsZUFBZSx5QkFBeUIsb0JBQW9CLG9DQUFvQywyQkFBMkIsS0FBSywyQkFBMkIsNkJBQTZCLDJCQUEyQiwwQkFBMEIsS0FBSyxlQUFlLHFCQUFxQix1QkFBdUIscUJBQXFCLHVDQUF1QyxxQ0FBcUMsMkNBQTJDLG1CQUFtQiwyQkFBMkIsNkJBQTZCLG1CQUFtQix1QkFBdUIsMkJBQTJCLE9BQU8sNkJBQTZCLG9CQUFvQiwyQkFBMkIsT0FBTyxLQUFLLEdBQUcsc0JBQXNCLG1DQUFtQyx5Q0FBeUMsaUJBQWlCLE9BQU8saUNBQWlDLEtBQUssR0FBRyw0QkFBNEIsdUJBQXVCLDBDQUEwQyw0Q0FBNEMsOENBQThDLHVCQUF1QixnREFBZ0QsdURBQXVELHlEQUF5RCwrQ0FBK0Msc0RBQXNELHFDQUFxQyxvQ0FBb0MsaURBQWlELG1EQUFtRCwrQ0FBK0MsaURBQWlELDRCQUE0Qix3QkFBd0Isd0JBQXdCLHdCQUF3Qix5QkFBeUIseUJBQXlCLHlCQUF5QixxQ0FBcUMsK0dBQStHLG1GQUFtRiwwQkFBMEIscUVBQXFFLGVBQWUsS0FBSyxHQUFHLDRCQUE0QiwwQ0FBMEMsb0VBQW9FLGVBQWUsS0FBSyxHQUFHLHFCQUFxQjtBQUNydEs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPyEuL3N0eWxlcy9wcm9ncmFtLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2dyYW1fY29udGFpbmVyX18yYWRITyB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5wcm9ncmFtX2NvbnRhaW5lcl9fMmFkSE8ge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi5wcm9ncmFtX2xlZnRDb250YWluZXJfXzFmR1ZqIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAyNSU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0Q29udGFpbmVyX18xZkdWaiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ucHJvZ3JhbV9yaWdodENvbnRhaW5lcl9fYl9CSWsge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjUlKTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5wcm9ncmFtX3JpZ2h0Q29udGFpbmVyX19iX0JJayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcbi5wcm9ncmFtX2xlZnRTaWRlX18yOWt1RyAucHJvZ3JhbV9tZW51SXRlbV9fM0Y3WWMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpIEdvdGhpY1xcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlN2VmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzMDcwODtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIC5wcm9ncmFtX21lbnVJdGVtX18zRjdZYyB7XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcgLnByb2dyYW1fbWVudUl0ZW1fXzNGN1ljIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcXG4gIH1cXG59XFxuXFxuLnByb2dyYW1fcHJlc2VudGF0aW9uUm93X18ySmhJbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RlN2VmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzAzMDcwODtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuLnByb2dyYW1fcHJlc2VudGF0aW9uUm93X18ySmhJbiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vcHJvZ3JhbS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3RoZW1lLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBUUE7RUFDRSxpQkNVZTtFRFRmLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBUEY7QUNnREU7RUQ5Q0Y7SUFPSSxlQUFBO0VBTEY7QUFDRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFwQlc7QUFlYjtBQ3FDRTtFRG5DRjtJQUtJLFdBQUE7RUFIRjtBQUNGOztBQU1BO0VBQ0UsaUJDVmU7RURXZixZQUFBO0VBQ0EsdUJBNUJZO0FBeUJkO0FDMEJFO0VEMUJGO0lBS0ksV0FBQTtFQURGO0FBQ0Y7O0FDcUJFO0VEakJGO0lBRUksYUFBQTtJQUNBLDZCQUFBO0lBQ0Esb0JBQUE7RUFERjtBQUNGO0FDYUU7RURqQkY7SUFRSSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7RUFBRjtBQUNGO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkNwRFU7RURxRFYseUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDSjtBQ0pFO0VETEE7SUFXSSxVQUFBO0lBQ0EsY0FBQTtJQUNBLGtCQUFBO0VBRUo7QUFDRjtBQ1hFO0VETEE7SUFpQkksV0FBQTtJQUNBLGtCQUFBO0VBR0o7QUFDRjs7QUFDQTtFQUNFLHlCQ3ZFWTtFRHdFWix5QkFBQTtFQUNBLFlBQUE7QUFFRjtBQURFO0VBQ0UsMEJBQUE7QUFHSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3RoZW1lLnNjc3NcXFwiO1xcblxcbiRsZWZ0LXJhdGlvOiAyNSU7XFxuJHJpZ2h0LXJhdGlvOiBjYWxjKDEwMCUgLSAjeyRsZWZ0LXJhdGlvfSk7XFxuXFxuLnJvb3Qge1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogJHBhZ2UtbWF4LXdpZHRoO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgQGluY2x1ZGUgbXFEb3duKG1kKSB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLmxlZnRDb250YWluZXIge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6ICRsZWZ0LXJhdGlvO1xcbiAgQGluY2x1ZGUgbXFEb3duKG1kKSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ucmlnaHRDb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAkcGFnZS1tYXgtd2lkdGg7XFxuICBwYWRkaW5nOiAxZW07XFxuICB3aWR0aDogJHJpZ2h0LXJhdGlvO1xcbiAgQGluY2x1ZGUgbXFEb3duKG1kKSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbn1cXG5cXG4ubGVmdFNpZGUge1xcbiAgQGluY2x1ZGUgbXFEb3duKG1kKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIH1cXG5cXG4gIEBpbmNsdWRlIG1xRG93bihzbSkge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5tZW51SXRlbSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJTYXdhcmFiaSBHb3RoaWNcXFwiO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtY29sb3I7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItbWFpbi1jb2xvcjtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG5cXG4gICAgQGluY2x1ZGUgbXFEb3duKG1kKSB7XFxuICAgICAgd2lkdGg6IDMzJTtcXG4gICAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgQGluY2x1ZGUgbXFEb3duKHNtKSB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMGVtO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5wcmVzZW50YXRpb25Sb3cge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWNvbG9yO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1tYWluLWNvbG9yO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgfVxcbn1cXG5cIixcIi8vJHJhbmRvbUM6IHJhbmRvbSg1MCk7XFxuJG1haW4tY29sb3I6ICMwZjI3MmY7XFxuJGxpZ2h0LWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCA3NSUpO1xcbiRsaWdodDItY29sb3I6IGxpZ2h0ZW4oJGxpZ2h0LWNvbG9yLCAxMCUpO1xcbiR0ZXh0LW1haW4tY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDc1JSk7XFxuJGhlYWRlci1oZWlnaHQ6IDk2cHg7XFxuJG1haW4tc2hhZG93LWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCAzMCUpO1xcbiR0ZXh0LW1haW4tYmx1ci1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1zaGFkb3ctY29sb3I6IGRhcmtlbigkdGV4dC1tYWluLWNvbG9yLCA1MCUpO1xcbiRib3JkZXItbWFpbi1jb2xvcjogZGFya2VuKCRtYWluLWNvbG9yLCAxMCUpO1xcbiRib3JkZXItZGFyay1jb2xvcjogZGFya2VuKCRib3JkZXItbWFpbi1jb2xvciwgNTAlKTtcXG5cXG4kZXJyb3ItY29sb3I6IHJnYigyNTUsIDE2NCwgMTM3KTtcXG4kdmVyaWZ5LWNvbG9yOiByZ2IoMTM5LCAyNTUsIDIwMSk7XFxuJGVycm9yLWJvcmRlci1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LWJvcmRlci1jb2xvcjogZGFya2VuKCR2ZXJpZnktY29sb3IsIDUwJSk7XFxuJGVycm9yLXRleHQtY29sb3I6IGRhcmtlbigkZXJyb3ItY29sb3IsIDUwJSk7XFxuJHZlcmlmeS10ZXh0LWNvbG9yOiBkYXJrZW4oJHZlcmlmeS1jb2xvciwgNTAlKTtcXG5cXG4kcGFnZS1tYXgtd2lkdGg6IDExMDBweDtcXG5cXG4kYnJlYWtwb2ludC14czogMHB4O1xcbiRicmVha3BvaW50LXNtOiA2MDBweDtcXG4kYnJlYWtwb2ludC1tZDogOTYwcHg7XFxuJGJyZWFrcG9pbnQtbGc6IDEyODBweDtcXG4kYnJlYWtwb2ludC14bDogMTkyMHB4O1xcbiRicmVha3BvaW50LTRrOiAyNTYwcHg7XFxuXFxuJGJyZWFrcG9pbnRzOiB4cywgc20sIG1kLCBsZywgeGw7XFxuJGJyZWFrcG9pbnQtd2lkdGg6IChcXG4gIHhzOiAwcHgsXFxuICBzbTogNjAwcHgsXFxuICBtZDogOTYwcHgsXFxuICBsZzogMTI4MHB4LFxcbiAgeGw6IDE5MjBweCxcXG4gIDRrOiAyNTYwcHgsXFxuKTtcXG5cXG4kbmV4dC1icmVha3BvaW50czogKFxcbiAgeHM6IHNtLFxcbiAgc206IG1kLFxcbiAgbWQ6IGxnLFxcbiAgbGc6IHhsLFxcbiAgeGw6IDRrLFxcbik7XFxuXFxuQG1peGluIG1xVXAoJGJwOiBtZCkge1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJG5icCkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiBtcURvd24oJGJwOiBtZCkge1xcbiAgJG5icDogbWFwLWdldCgkbmV4dC1icmVha3BvaW50cywgJGJwKTtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnQtd2lkdGgsICRicCkpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInByb2dyYW1fY29udGFpbmVyX18yYWRIT1wiLFxuXHRcImxlZnRDb250YWluZXJcIjogXCJwcm9ncmFtX2xlZnRDb250YWluZXJfXzFmR1ZqXCIsXG5cdFwicmlnaHRDb250YWluZXJcIjogXCJwcm9ncmFtX3JpZ2h0Q29udGFpbmVyX19iX0JJa1wiLFxuXHRcImxlZnRTaWRlXCI6IFwicHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUdcIixcblx0XCJtZW51SXRlbVwiOiBcInByb2dyYW1fbWVudUl0ZW1fXzNGN1ljXCIsXG5cdFwicHJlc2VudGF0aW9uUm93XCI6IFwicHJvZ3JhbV9wcmVzZW50YXRpb25Sb3dfXzJKaEluXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss\n");

/***/ })

})