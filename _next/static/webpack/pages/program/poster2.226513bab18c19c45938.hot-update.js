webpackHotUpdate_N_E("pages/program/poster2",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/program.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".program_container__2adHO {\\n  max-width: 1100px;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: flex-start;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_container__2adHO {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.program_leftContainer__1fGVj {\\n  padding: 1em;\\n  width: 25%;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftContainer__1fGVj {\\n    width: 100%;\\n  }\\n}\\n\\n.program_rightContainer__b_BIk {\\n  max-width: 1100px;\\n  padding: 1em;\\n  width: calc(100% - 25%);\\n}\\n@media screen and (max-width: 960px) {\\n  .program_rightContainer__b_BIk {\\n    width: 100%;\\n  }\\n}\\n\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n}\\n.program_leftSide__29kuG .program_menuItem__3F7Yc {\\n  display: block;\\n  text-align: left;\\n  font-size: 1em;\\n  font-family: \\\"Sawarabi Gothic\\\";\\n  background-color: #f3f2fa;\\n  border: 1px solid #241f4e;\\n  padding: 1em;\\n  margin-bottom: 0.5em;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 33%;\\n    padding: 0.5em;\\n    text-align: center;\\n    border-right: none;\\n  }\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc:last-child {\\n    border-right: 1px solid #241f4e;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 100%;\\n    margin-bottom: 0em;\\n  }\\n}\\n\\n.program_presentationRow__2JhIn {\\n  background-color: #f3f2fa;\\n  border: 1px solid #241f4e;\\n  padding: 1em;\\n}\\n.program_presentationRow__2JhIn a {\\n  text-decoration: underline;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://program.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAQA;EACE,iBCSe;EDRf,YAAA;EACA,YAAA;EACA,aAAA;EACA,2BAAA;AAPF;AC+CE;ED7CF;IAOI,eAAA;EALF;AACF;;AAQA;EACE,YAAA;EACA,UAnBW;AAcb;ACqCE;EDlCF;IAII,WAAA;EAHF;AACF;;AAMA;EACE,iBCVe;EDWf,YAAA;EACA,uBA3BY;AAwBd;AC0BE;ED1BF;IAKI,WAAA;EADF;AACF;;ACqBE;EDjBF;IAEI,aAAA;IACA,6BAAA;IACA,oBAAA;EADF;AACF;ACaE;EDjBF;IAQI,sBAAA;IACA,oBAAA;IACA,mBAAA;EAAF;AACF;AACE;EACE,cAAA;EACA,gBAAA;EACA,cAAA;EACA,8BAAA;EACA,yBCpDU;EDqDV,yBAAA;EACA,YAAA;EACA,oBAAA;AACJ;ACJE;EDLA;IAWI,UAAA;IACA,cAAA;IACA,kBAAA;IACA,kBAAA;EAEJ;EAAI;IACE,+BAAA;EAEN;AACF;ACfE;EDLA;IAsBI,WAAA;IACA,kBAAA;EAEJ;AACF;;AAEA;EACE,yBC5EY;ED6EZ,yBAAA;EACA,YAAA;AACF;AAAE;EACE,0BAAA;AAEJ\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n$left-ratio: 25%;\\n$right-ratio: calc(100% - #{$left-ratio});\\n\\n.root {\\n}\\n\\n.container {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: flex-start;\\n  @include mqDown(md) {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.leftContainer {\\n  padding: 1em;\\n  width: $left-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.rightContainer {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  width: $right-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.leftSide {\\n  @include mqDown(md) {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  @include mqDown(sm) {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n  .menuItem {\\n    display: block;\\n    text-align: left;\\n    font-size: 1em;\\n    font-family: \\\"Sawarabi Gothic\\\";\\n    background-color: $light-color;\\n    border: 1px solid $border-main-color;\\n    padding: 1em;\\n    margin-bottom: 0.5em;\\n\\n    @include mqDown(md) {\\n      width: 33%;\\n      padding: 0.5em;\\n      text-align: center;\\n      border-right: none;\\n\\n      &:last-child {\\n        border-right: 1px solid $border-main-color;\\n      }\\n    }\\n\\n    @include mqDown(sm) {\\n      width: 100%;\\n      margin-bottom: 0em;\\n    }\\n  }\\n}\\n\\n.presentationRow {\\n  background-color: $light-color;\\n  border: 1px solid $border-main-color;\\n  padding: 1em;\\n  a {\\n    text-decoration: underline;\\n  }\\n}\\n\",\"$main-color: rgb(36, 31, 78);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: $main-color;\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"program_container__2adHO\",\n\t\"leftContainer\": \"program_leftContainer__1fGVj\",\n\t\"rightContainer\": \"program_rightContainer__b_BIk\",\n\t\"leftSide\": \"program_leftSide__29kuG\",\n\t\"menuItem\": \"program_menuItem__3F7Yc\",\n\t\"presentationRow\": \"program_presentationRow__2JhIn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3M/NWFmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsOEJBQThCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGtCQUFrQixnQ0FBZ0MsR0FBRyx3Q0FBd0MsK0JBQStCLHNCQUFzQixLQUFLLEdBQUcsbUNBQW1DLGlCQUFpQixlQUFlLEdBQUcsd0NBQXdDLG1DQUFtQyxrQkFBa0IsS0FBSyxHQUFHLG9DQUFvQyxzQkFBc0IsaUJBQWlCLDRCQUE0QixHQUFHLHdDQUF3QyxvQ0FBb0Msa0JBQWtCLEtBQUssR0FBRywwQ0FBMEMsOEJBQThCLG9CQUFvQixvQ0FBb0MsMkJBQTJCLEtBQUssR0FBRyx3Q0FBd0MsOEJBQThCLDZCQUE2QiwyQkFBMkIsMEJBQTBCLEtBQUssR0FBRyxxREFBcUQsbUJBQW1CLHFCQUFxQixtQkFBbUIscUNBQXFDLDhCQUE4Qiw4QkFBOEIsaUJBQWlCLHlCQUF5QixHQUFHLHdDQUF3Qyx1REFBdUQsaUJBQWlCLHFCQUFxQix5QkFBeUIseUJBQXlCLEtBQUssa0VBQWtFLHNDQUFzQyxLQUFLLEdBQUcsd0NBQXdDLHVEQUF1RCxrQkFBa0IseUJBQXlCLEtBQUssR0FBRyxxQ0FBcUMsOEJBQThCLDhCQUE4QixpQkFBaUIsR0FBRyxxQ0FBcUMsK0JBQStCLEdBQUcsT0FBTywyR0FBMkcsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLEtBQUssTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssV0FBVyxVQUFVLFlBQVksTUFBTSxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLE1BQU0sV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxZQUFZLFlBQVksVUFBVSxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxNQUFNLEtBQUssWUFBWSxZQUFZLFVBQVUsS0FBSyxLQUFLLFdBQVcsa0RBQWtELHFCQUFxQiw4QkFBOEIsWUFBWSxFQUFFLFdBQVcsR0FBRyxnQkFBZ0IsK0JBQStCLGlCQUFpQixpQkFBaUIsa0JBQWtCLGdDQUFnQyx5QkFBeUIsc0JBQXNCLEtBQUssR0FBRyxvQkFBb0IsaUJBQWlCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLEtBQUssR0FBRyxxQkFBcUIsK0JBQStCLGlCQUFpQix3QkFBd0IseUJBQXlCLGtCQUFrQixLQUFLLEdBQUcsZUFBZSx5QkFBeUIsb0JBQW9CLG9DQUFvQywyQkFBMkIsS0FBSywyQkFBMkIsNkJBQTZCLDJCQUEyQiwwQkFBMEIsS0FBSyxlQUFlLHFCQUFxQix1QkFBdUIscUJBQXFCLHVDQUF1QyxxQ0FBcUMsMkNBQTJDLG1CQUFtQiwyQkFBMkIsNkJBQTZCLG1CQUFtQix1QkFBdUIsMkJBQTJCLDJCQUEyQix3QkFBd0IscURBQXFELFNBQVMsT0FBTyw2QkFBNkIsb0JBQW9CLDJCQUEyQixPQUFPLEtBQUssR0FBRyxzQkFBc0IsbUNBQW1DLHlDQUF5QyxpQkFBaUIsT0FBTyxpQ0FBaUMsS0FBSyxHQUFHLGtDQUFrQywwQ0FBMEMsNENBQTRDLDhDQUE4Qyx1QkFBdUIsZ0RBQWdELHVEQUF1RCx5REFBeUQsa0NBQWtDLHNEQUFzRCxxQ0FBcUMsb0NBQW9DLGlEQUFpRCxtREFBbUQsK0NBQStDLGlEQUFpRCw0QkFBNEIsd0JBQXdCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHlCQUF5Qix5QkFBeUIscUNBQXFDLCtHQUErRyxtRkFBbUYsMEJBQTBCLHFFQUFxRSxlQUFlLEtBQUssR0FBRyw0QkFBNEIsMENBQTBDLG9FQUFvRSxlQUFlLEtBQUssR0FBRyxxQkFBcUI7QUFDMTZLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZXMvcHJvZ3JhbS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5wcm9ncmFtX2NvbnRhaW5lcl9fMmFkSE8ge1xcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fY29udGFpbmVyX18yYWRITyB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLnByb2dyYW1fbGVmdENvbnRhaW5lcl9fMWZHVmoge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5wcm9ncmFtX2xlZnRDb250YWluZXJfXzFmR1ZqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5wcm9ncmFtX3JpZ2h0Q29udGFpbmVyX19iX0JJayB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNSUpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fcmlnaHRDb250YWluZXJfX2JfQklrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIC5wcm9ncmFtX21lbnVJdGVtX18zRjdZYyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YyZmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjQxZjRlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcgLnByb2dyYW1fbWVudUl0ZW1fXzNGN1ljIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgfVxcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIC5wcm9ncmFtX21lbnVJdGVtX18zRjdZYzpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzI0MWY0ZTtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5wcm9ncmFtX2xlZnRTaWRlX18yOWt1RyAucHJvZ3JhbV9tZW51SXRlbV9fM0Y3WWMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMGVtO1xcbiAgfVxcbn1cXG5cXG4ucHJvZ3JhbV9wcmVzZW50YXRpb25Sb3dfXzJKaEluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YyZmE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjQxZjRlO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4ucHJvZ3JhbV9wcmVzZW50YXRpb25Sb3dfXzJKaEluIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wcm9ncmFtLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vdGhlbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFRQTtFQUNFLGlCQ1NlO0VEUmYsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFQRjtBQytDRTtFRDdDRjtJQU9JLGVBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLFVBbkJXO0FBY2I7QUNxQ0U7RURsQ0Y7SUFJSSxXQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFLGlCQ1ZlO0VEV2YsWUFBQTtFQUNBLHVCQTNCWTtBQXdCZDtBQzBCRTtFRDFCRjtJQUtJLFdBQUE7RUFERjtBQUNGOztBQ3FCRTtFRGpCRjtJQUVJLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG9CQUFBO0VBREY7QUFDRjtBQ2FFO0VEakJGO0lBUUksc0JBQUE7SUFDQSxvQkFBQTtJQUNBLG1CQUFBO0VBQUY7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EseUJDcERVO0VEcURWLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUNKRTtFRExBO0lBV0ksVUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0VBRUo7RUFBSTtJQUNFLCtCQUFBO0VBRU47QUFDRjtBQ2ZFO0VETEE7SUFzQkksV0FBQTtJQUNBLGtCQUFBO0VBRUo7QUFDRjs7QUFFQTtFQUNFLHlCQzVFWTtFRDZFWix5QkFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsMEJBQUE7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuL3RoZW1lLnNjc3NcXFwiO1xcblxcbiRsZWZ0LXJhdGlvOiAyNSU7XFxuJHJpZ2h0LXJhdGlvOiBjYWxjKDEwMCUgLSAjeyRsZWZ0LXJhdGlvfSk7XFxuXFxuLnJvb3Qge1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogJHBhZ2UtbWF4LXdpZHRoO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi5sZWZ0Q29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAkbGVmdC1yYXRpbztcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnJpZ2h0Q29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogJHBhZ2UtbWF4LXdpZHRoO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6ICRyaWdodC1yYXRpbztcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmxlZnRTaWRlIHtcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubWVudUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWNvbG9yO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLW1haW4tY29sb3I7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFxuICAgIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICAgIHdpZHRoOiAzMyU7XFxuICAgICAgcGFkZGluZzogMC41ZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG5cXG4gICAgICAmOmxhc3QtY2hpbGQge1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGJvcmRlci1tYWluLWNvbG9yO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByZXNlbnRhdGlvblJvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtY29sb3I7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLW1haW4tY29sb3I7XFxuICBwYWRkaW5nOiAxZW07XFxuICBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxufVxcblwiLFwiJG1haW4tY29sb3I6IHJnYigzNiwgMzEsIDc4KTtcXG4kbGlnaHQtY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDc1JSk7XFxuJGxpZ2h0Mi1jb2xvcjogbGlnaHRlbigkbGlnaHQtY29sb3IsIDEwJSk7XFxuJHRleHQtbWFpbi1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kaGVhZGVyLWhlaWdodDogOTZweDtcXG4kbWFpbi1zaGFkb3ctY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1ibHVyLWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLXNoYWRvdy1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDUwJSk7XFxuJGJvcmRlci1tYWluLWNvbG9yOiAkbWFpbi1jb2xvcjtcXG4kYm9yZGVyLWRhcmstY29sb3I6IGRhcmtlbigkYm9yZGVyLW1haW4tY29sb3IsIDUwJSk7XFxuXFxuJGVycm9yLWNvbG9yOiByZ2IoMjU1LCAxNjQsIDEzNyk7XFxuJHZlcmlmeS1jb2xvcjogcmdiKDEzOSwgMjU1LCAyMDEpO1xcbiRlcnJvci1ib3JkZXItY29sb3I6IGRhcmtlbigkZXJyb3ItY29sb3IsIDUwJSk7XFxuJHZlcmlmeS1ib3JkZXItY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcbiRlcnJvci10ZXh0LWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktdGV4dC1jb2xvcjogZGFya2VuKCR2ZXJpZnktY29sb3IsIDUwJSk7XFxuXFxuJHBhZ2UtbWF4LXdpZHRoOiAxMTAwcHg7XFxuXFxuJGJyZWFrcG9pbnQteHM6IDBweDtcXG4kYnJlYWtwb2ludC1zbTogNjAwcHg7XFxuJGJyZWFrcG9pbnQtbWQ6IDk2MHB4O1xcbiRicmVha3BvaW50LWxnOiAxMjgwcHg7XFxuJGJyZWFrcG9pbnQteGw6IDE5MjBweDtcXG4kYnJlYWtwb2ludC00azogMjU2MHB4O1xcblxcbiRicmVha3BvaW50czogeHMsIHNtLCBtZCwgbGcsIHhsO1xcbiRicmVha3BvaW50LXdpZHRoOiAoXFxuICB4czogMHB4LFxcbiAgc206IDYwMHB4LFxcbiAgbWQ6IDk2MHB4LFxcbiAgbGc6IDEyODBweCxcXG4gIHhsOiAxOTIwcHgsXFxuICA0azogMjU2MHB4LFxcbik7XFxuXFxuJG5leHQtYnJlYWtwb2ludHM6IChcXG4gIHhzOiBzbSxcXG4gIHNtOiBtZCxcXG4gIG1kOiBsZyxcXG4gIGxnOiB4bCxcXG4gIHhsOiA0ayxcXG4pO1xcblxcbkBtaXhpbiBtcVVwKCRicDogbWQpIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnQtd2lkdGgsICRuYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gbXFEb3duKCRicDogbWQpIHtcXG4gICRuYnA6IG1hcC1nZXQoJG5leHQtYnJlYWtwb2ludHMsICRicCk7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwcm9ncmFtX2NvbnRhaW5lcl9fMmFkSE9cIixcblx0XCJsZWZ0Q29udGFpbmVyXCI6IFwicHJvZ3JhbV9sZWZ0Q29udGFpbmVyX18xZkdWalwiLFxuXHRcInJpZ2h0Q29udGFpbmVyXCI6IFwicHJvZ3JhbV9yaWdodENvbnRhaW5lcl9fYl9CSWtcIixcblx0XCJsZWZ0U2lkZVwiOiBcInByb2dyYW1fbGVmdFNpZGVfXzI5a3VHXCIsXG5cdFwibWVudUl0ZW1cIjogXCJwcm9ncmFtX21lbnVJdGVtX18zRjdZY1wiLFxuXHRcInByZXNlbnRhdGlvblJvd1wiOiBcInByb2dyYW1fcHJlc2VudGF0aW9uUm93X18ySmhJblwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss\n");

/***/ })

})