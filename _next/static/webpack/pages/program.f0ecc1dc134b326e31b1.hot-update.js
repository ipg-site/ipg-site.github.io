webpackHotUpdate_N_E("pages/program",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/program.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".program_container__2adHO {\\n  max-width: 1100px;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: center;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_container__2adHO {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.program_leftContainer__1fGVj {\\n  padding: 1em;\\n  margin: auto;\\n  width: 25%;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftContainer__1fGVj {\\n    width: 100%;\\n  }\\n}\\n\\n.program_rightContainer__b_BIk {\\n  max-width: 1100px;\\n  padding: 1em;\\n  width: calc(100% - 25%);\\n}\\n@media screen and (max-width: 960px) {\\n  .program_rightContainer__b_BIk {\\n    width: 100%;\\n  }\\n}\\n\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n}\\n.program_leftSide__29kuG .program_menuItem__3F7Yc {\\n  display: block;\\n  text-align: left;\\n  font-size: 1em;\\n  font-family: \\\"Sawarabi Gothic\\\";\\n  background-color: #baf9cc;\\n  border: 1px solid #000201;\\n  padding: 1em;\\n  margin-bottom: 0.5em;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 33%;\\n    padding: 0.5em;\\n    text-align: center;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 100%;\\n    margin-bottom: 0em;\\n  }\\n}\\n\\n.program_presentationRow__2JhIn {\\n  background-color: #baf9cc;\\n  border: 1px solid #000201;\\n  padding: 1em;\\n}\\n.program_presentationRow__2JhIn a {\\n  text-decoration: underline;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://program.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAQA;EACE,iBCYe;EDXf,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;AAPF;ACkDE;EDhDF;IAOI,eAAA;EALF;AACF;;AAQA;EACE,YAAA;EACA,YAAA;EACA,UApBW;AAeb;ACuCE;EDrCF;IAKI,WAAA;EAHF;AACF;;AAMA;EACE,iBCRe;EDSf,YAAA;EACA,uBA5BY;AAyBd;AC4BE;ED5BF;IAKI,WAAA;EADF;AACF;;ACuBE;EDnBF;IAEI,aAAA;IACA,6BAAA;IACA,oBAAA;EADF;AACF;ACeE;EDnBF;IAQI,sBAAA;IACA,oBAAA;IACA,mBAAA;EAAF;AACF;AACE;EACE,cAAA;EACA,gBAAA;EACA,cAAA;EACA,8BAAA;EACA,yBClDU;EDmDV,yBAAA;EACA,YAAA;EACA,oBAAA;AACJ;ACFE;EDPA;IAWI,UAAA;IACA,cAAA;IACA,kBAAA;EAEJ;AACF;ACTE;EDPA;IAiBI,WAAA;IACA,kBAAA;EAGJ;AACF;;AACA;EACE,yBCrEY;EDsEZ,yBAAA;EACA,YAAA;AAEF;AADE;EACE,0BAAA;AAGJ\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n$left-ratio: 25%;\\n$right-ratio: calc(100% - #{$left-ratio});\\n\\n.root {\\n}\\n\\n.container {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: center;\\n  @include mqDown(md) {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.leftContainer {\\n  padding: 1em;\\n  margin: auto;\\n  width: $left-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.rightContainer {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  width: $right-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.leftSide {\\n  @include mqDown(md) {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  @include mqDown(sm) {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n  .menuItem {\\n    display: block;\\n    text-align: left;\\n    font-size: 1em;\\n    font-family: \\\"Sawarabi Gothic\\\";\\n    background-color: $light-color;\\n    border: 1px solid $border-main-color;\\n    padding: 1em;\\n    margin-bottom: 0.5em;\\n\\n    @include mqDown(md) {\\n      width: 33%;\\n      padding: 0.5em;\\n      text-align: center;\\n    }\\n\\n    @include mqDown(sm) {\\n      width: 100%;\\n      margin-bottom: 0em;\\n    }\\n  }\\n}\\n\\n.presentationRow {\\n  background-color: $light-color;\\n  border: 1px solid $border-main-color;\\n  padding: 1em;\\n  a {\\n    text-decoration: underline;\\n  }\\n}\\n\",\"$randomR: random(50);\\n$randomG: random(50);\\n$randomB: random(50);\\n$main-color: rgb($randomR, $randomG, $randomB);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: darken($main-color, 10%);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"program_container__2adHO\",\n\t\"leftContainer\": \"program_leftContainer__1fGVj\",\n\t\"rightContainer\": \"program_rightContainer__b_BIk\",\n\t\"leftSide\": \"program_leftSide__29kuG\",\n\t\"menuItem\": \"program_menuItem__3F7Yc\",\n\t\"presentationRow\": \"program_presentationRow__2JhIn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3M/NWFmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsOEJBQThCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsR0FBRyx3Q0FBd0MsK0JBQStCLHNCQUFzQixLQUFLLEdBQUcsbUNBQW1DLGlCQUFpQixpQkFBaUIsZUFBZSxHQUFHLHdDQUF3QyxtQ0FBbUMsa0JBQWtCLEtBQUssR0FBRyxvQ0FBb0Msc0JBQXNCLGlCQUFpQiw0QkFBNEIsR0FBRyx3Q0FBd0Msb0NBQW9DLGtCQUFrQixLQUFLLEdBQUcsMENBQTBDLDhCQUE4QixvQkFBb0Isb0NBQW9DLDJCQUEyQixLQUFLLEdBQUcsd0NBQXdDLDhCQUE4Qiw2QkFBNkIsMkJBQTJCLDBCQUEwQixLQUFLLEdBQUcscURBQXFELG1CQUFtQixxQkFBcUIsbUJBQW1CLHFDQUFxQyw4QkFBOEIsOEJBQThCLGlCQUFpQix5QkFBeUIsR0FBRyx3Q0FBd0MsdURBQXVELGlCQUFpQixxQkFBcUIseUJBQXlCLEtBQUssR0FBRyx3Q0FBd0MsdURBQXVELGtCQUFrQix5QkFBeUIsS0FBSyxHQUFHLHFDQUFxQyw4QkFBOEIsOEJBQThCLGlCQUFpQixHQUFHLHFDQUFxQywrQkFBK0IsR0FBRyxPQUFPLDJHQUEyRyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxLQUFLLEtBQUssV0FBVyxrREFBa0QscUJBQXFCLDhCQUE4QixZQUFZLEVBQUUsV0FBVyxHQUFHLGdCQUFnQiwrQkFBK0IsaUJBQWlCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHlCQUF5QixzQkFBc0IsS0FBSyxHQUFHLG9CQUFvQixpQkFBaUIsaUJBQWlCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLEtBQUssR0FBRyxxQkFBcUIsK0JBQStCLGlCQUFpQix3QkFBd0IseUJBQXlCLGtCQUFrQixLQUFLLEdBQUcsZUFBZSx5QkFBeUIsb0JBQW9CLG9DQUFvQywyQkFBMkIsS0FBSywyQkFBMkIsNkJBQTZCLDJCQUEyQiwwQkFBMEIsS0FBSyxlQUFlLHFCQUFxQix1QkFBdUIscUJBQXFCLHVDQUF1QyxxQ0FBcUMsMkNBQTJDLG1CQUFtQiwyQkFBMkIsNkJBQTZCLG1CQUFtQix1QkFBdUIsMkJBQTJCLE9BQU8sNkJBQTZCLG9CQUFvQiwyQkFBMkIsT0FBTyxLQUFLLEdBQUcsc0JBQXNCLG1DQUFtQyx5Q0FBeUMsaUJBQWlCLE9BQU8saUNBQWlDLEtBQUssR0FBRywwQkFBMEIsdUJBQXVCLHVCQUF1QixpREFBaUQsMENBQTBDLDRDQUE0Qyw4Q0FBOEMsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELCtDQUErQyxzREFBc0QscUNBQXFDLG9DQUFvQyxpREFBaUQsbURBQW1ELCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQzN4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZ3JhbV9jb250YWluZXJfXzJhZEhPIHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fY29udGFpbmVyX18yYWRITyB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLnByb2dyYW1fbGVmdENvbnRhaW5lcl9fMWZHVmoge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5wcm9ncmFtX2xlZnRDb250YWluZXJfXzFmR1ZqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5wcm9ncmFtX3JpZ2h0Q29udGFpbmVyX19iX0JJayB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNSUpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fcmlnaHRDb250YWluZXJfX2JfQklrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIC5wcm9ncmFtX21lbnVJdGVtX18zRjdZYyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWY5Y2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMjAxO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcgLnByb2dyYW1fbWVudUl0ZW1fXzNGN1ljIHtcXG4gICAgd2lkdGg6IDMzJTtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5wcm9ncmFtX2xlZnRTaWRlX18yOWt1RyAucHJvZ3JhbV9tZW51SXRlbV9fM0Y3WWMge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMGVtO1xcbiAgfVxcbn1cXG5cXG4ucHJvZ3JhbV9wcmVzZW50YXRpb25Sb3dfXzJKaEluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYWY5Y2M7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMjAxO1xcbiAgcGFkZGluZzogMWVtO1xcbn1cXG4ucHJvZ3JhbV9wcmVzZW50YXRpb25Sb3dfXzJKaEluIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9wcm9ncmFtLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vdGhlbWUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFRQTtFQUNFLGlCQ1llO0VEWGYsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFQRjtBQ2tERTtFRGhERjtJQU9JLGVBQUE7RUFMRjtBQUNGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQXBCVztBQWViO0FDdUNFO0VEckNGO0lBS0ksV0FBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRSxpQkNSZTtFRFNmLFlBQUE7RUFDQSx1QkE1Qlk7QUF5QmQ7QUM0QkU7RUQ1QkY7SUFLSSxXQUFBO0VBREY7QUFDRjs7QUN1QkU7RURuQkY7SUFFSSxhQUFBO0lBQ0EsNkJBQUE7SUFDQSxvQkFBQTtFQURGO0FBQ0Y7QUNlRTtFRG5CRjtJQVFJLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtFQUFGO0FBQ0Y7QUFDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQ2xEVTtFRG1EVix5QkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUNKO0FDRkU7RURQQTtJQVdJLFVBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7RUFFSjtBQUNGO0FDVEU7RURQQTtJQWlCSSxXQUFBO0lBQ0Esa0JBQUE7RUFHSjtBQUNGOztBQUNBO0VBQ0UseUJDckVZO0VEc0VaLHlCQUFBO0VBQ0EsWUFBQTtBQUVGO0FBREU7RUFDRSwwQkFBQTtBQUdKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vdGhlbWUuc2Nzc1xcXCI7XFxuXFxuJGxlZnQtcmF0aW86IDI1JTtcXG4kcmlnaHQtcmF0aW86IGNhbGMoMTAwJSAtICN7JGxlZnQtcmF0aW99KTtcXG5cXG4ucm9vdCB7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAkcGFnZS1tYXgtd2lkdGg7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW46IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBAaW5jbHVkZSBtcURvd24obWQpIHtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcbn1cXG5cXG4ubGVmdENvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW46IGF1dG87XFxuICB3aWR0aDogJGxlZnQtcmF0aW87XFxuICBAaW5jbHVkZSBtcURvd24obWQpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5yaWdodENvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6ICRwYWdlLW1heC13aWR0aDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiAkcmlnaHQtcmF0aW87XFxuICBAaW5jbHVkZSBtcURvd24obWQpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5sZWZ0U2lkZSB7XFxuICBAaW5jbHVkZSBtcURvd24obWQpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgfVxcblxcbiAgQGluY2x1ZGUgbXFEb3duKHNtKSB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbiAgLm1lbnVJdGVtIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlNhd2FyYWJpIEdvdGhpY1xcXCI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1jb2xvcjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgJGJvcmRlci1tYWluLWNvbG9yO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcblxcbiAgICBAaW5jbHVkZSBtcURvd24obWQpIHtcXG4gICAgICB3aWR0aDogMzMlO1xcbiAgICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwZW07XFxuICAgIH1cXG4gIH1cXG59XFxuXFxuLnByZXNlbnRhdGlvblJvdyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtY29sb3I7XFxuICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLW1haW4tY29sb3I7XFxuICBwYWRkaW5nOiAxZW07XFxuICBhIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICB9XFxufVxcblwiLFwiJHJhbmRvbVI6IHJhbmRvbSg1MCk7XFxuJHJhbmRvbUc6IHJhbmRvbSg1MCk7XFxuJHJhbmRvbUI6IHJhbmRvbSg1MCk7XFxuJG1haW4tY29sb3I6IHJnYigkcmFuZG9tUiwgJHJhbmRvbUcsICRyYW5kb21CKTtcXG4kbGlnaHQtY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDc1JSk7XFxuJGxpZ2h0Mi1jb2xvcjogbGlnaHRlbigkbGlnaHQtY29sb3IsIDEwJSk7XFxuJHRleHQtbWFpbi1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kaGVhZGVyLWhlaWdodDogOTZweDtcXG4kbWFpbi1zaGFkb3ctY29sb3I6IGxpZ2h0ZW4oJG1haW4tY29sb3IsIDMwJSk7XFxuJHRleHQtbWFpbi1ibHVyLWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLXNoYWRvdy1jb2xvcjogZGFya2VuKCR0ZXh0LW1haW4tY29sb3IsIDUwJSk7XFxuJGJvcmRlci1tYWluLWNvbG9yOiBkYXJrZW4oJG1haW4tY29sb3IsIDEwJSk7XFxuJGJvcmRlci1kYXJrLWNvbG9yOiBkYXJrZW4oJGJvcmRlci1tYWluLWNvbG9yLCA1MCUpO1xcblxcbiRlcnJvci1jb2xvcjogcmdiKDI1NSwgMTY0LCAxMzcpO1xcbiR2ZXJpZnktY29sb3I6IHJnYigxMzksIDI1NSwgMjAxKTtcXG4kZXJyb3ItYm9yZGVyLWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktYm9yZGVyLWNvbG9yOiBkYXJrZW4oJHZlcmlmeS1jb2xvciwgNTAlKTtcXG4kZXJyb3ItdGV4dC1jb2xvcjogZGFya2VuKCRlcnJvci1jb2xvciwgNTAlKTtcXG4kdmVyaWZ5LXRleHQtY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcblxcbiRwYWdlLW1heC13aWR0aDogMTEwMHB4O1xcblxcbiRicmVha3BvaW50LXhzOiAwcHg7XFxuJGJyZWFrcG9pbnQtc206IDYwMHB4O1xcbiRicmVha3BvaW50LW1kOiA5NjBweDtcXG4kYnJlYWtwb2ludC1sZzogMTI4MHB4O1xcbiRicmVha3BvaW50LXhsOiAxOTIwcHg7XFxuJGJyZWFrcG9pbnQtNGs6IDI1NjBweDtcXG5cXG4kYnJlYWtwb2ludHM6IHhzLCBzbSwgbWQsIGxnLCB4bDtcXG4kYnJlYWtwb2ludC13aWR0aDogKFxcbiAgeHM6IDBweCxcXG4gIHNtOiA2MDBweCxcXG4gIG1kOiA5NjBweCxcXG4gIGxnOiAxMjgwcHgsXFxuICB4bDogMTkyMHB4LFxcbiAgNGs6IDI1NjBweCxcXG4pO1xcblxcbiRuZXh0LWJyZWFrcG9pbnRzOiAoXFxuICB4czogc20sXFxuICBzbTogbWQsXFxuICBtZDogbGcsXFxuICBsZzogeGwsXFxuICB4bDogNGssXFxuKTtcXG5cXG5AbWl4aW4gbXFVcCgkYnA6IG1kKSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkbmJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXFxuQG1peGluIG1xRG93bigkYnA6IG1kKSB7XFxuICAkbmJwOiBtYXAtZ2V0KCRuZXh0LWJyZWFrcG9pbnRzLCAkYnApO1xcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludC13aWR0aCwgJGJwKSkge1xcbiAgICBAY29udGVudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicHJvZ3JhbV9jb250YWluZXJfXzJhZEhPXCIsXG5cdFwibGVmdENvbnRhaW5lclwiOiBcInByb2dyYW1fbGVmdENvbnRhaW5lcl9fMWZHVmpcIixcblx0XCJyaWdodENvbnRhaW5lclwiOiBcInByb2dyYW1fcmlnaHRDb250YWluZXJfX2JfQklrXCIsXG5cdFwibGVmdFNpZGVcIjogXCJwcm9ncmFtX2xlZnRTaWRlX18yOWt1R1wiLFxuXHRcIm1lbnVJdGVtXCI6IFwicHJvZ3JhbV9tZW51SXRlbV9fM0Y3WWNcIixcblx0XCJwcmVzZW50YXRpb25Sb3dcIjogXCJwcm9ncmFtX3ByZXNlbnRhdGlvblJvd19fMkpoSW5cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss\n");

/***/ })

})