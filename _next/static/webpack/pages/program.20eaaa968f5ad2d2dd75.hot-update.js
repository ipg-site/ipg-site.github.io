webpackHotUpdate_N_E("pages/program",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/program.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".program_container__2adHO {\\n  max-width: 1100px;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: center;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_container__2adHO {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.program_leftContainer__1fGVj {\\n  padding: 1em;\\n  margin: auto;\\n  width: 25%;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftContainer__1fGVj {\\n    width: 100%;\\n  }\\n}\\n\\n.program_rightContainer__b_BIk {\\n  max-width: 1100px;\\n  padding: 1em;\\n  width: calc(100% - 25%);\\n}\\n@media screen and (max-width: 960px) {\\n  .program_rightContainer__b_BIk {\\n    width: 100%;\\n  }\\n}\\n\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n}\\n.program_leftSide__29kuG .program_menuItem__3F7Yc {\\n  display: block;\\n  text-align: left;\\n  font-size: 1em;\\n  font-family: \\\"Sawarabi Gothic\\\";\\n  background-color: white;\\n  border: 1px solid #a79542;\\n  padding: 1em;\\n  margin-bottom: 0.5em;\\n}\\n@media screen and (max-width: 960px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 33%;\\n    padding: 0.5em;\\n    text-align: center;\\n  }\\n}\\n@media screen and (max-width: 600px) {\\n  .program_leftSide__29kuG .program_menuItem__3F7Yc {\\n    width: 100%;\\n    margin-bottom: 0em;\\n  }\\n}\\n\\n.program_presentationRow__2JhIn {\\n  background-color: white;\\n  border: 1px solid #a79542;\\n  padding: 1em;\\n}\\n.program_presentationRow__2JhIn a {\\n  text-decoration: underline;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://program.module.scss\",\"webpack://theme.scss\"],\"names\":[],\"mappings\":\"AAQA;EACE,iBCYe;EDXf,YAAA;EACA,YAAA;EACA,aAAA;EACA,uBAAA;AAPF;ACkDE;EDhDF;IAOI,eAAA;EALF;AACF;;AAQA;EACE,YAAA;EACA,YAAA;EACA,UApBW;AAeb;ACuCE;EDrCF;IAKI,WAAA;EAHF;AACF;;AAMA;EACE,iBCRe;EDSf,YAAA;EACA,uBA5BY;AAyBd;AC4BE;ED5BF;IAKI,WAAA;EADF;AACF;;ACuBE;EDnBF;IAEI,aAAA;IACA,6BAAA;IACA,oBAAA;EADF;AACF;ACeE;EDnBF;IAQI,sBAAA;IACA,oBAAA;IACA,mBAAA;EAAF;AACF;AACE;EACE,cAAA;EACA,gBAAA;EACA,cAAA;EACA,8BAAA;EACA,uBClDU;EDmDV,yBAAA;EACA,YAAA;EACA,oBAAA;AACJ;ACFE;EDPA;IAWI,UAAA;IACA,cAAA;IACA,kBAAA;EAEJ;AACF;ACTE;EDPA;IAiBI,WAAA;IACA,kBAAA;EAGJ;AACF;;AACA;EACE,uBCrEY;EDsEZ,yBAAA;EACA,YAAA;AAEF;AADE;EACE,0BAAA;AAGJ\",\"sourcesContent\":[\"@import \\\"./theme.scss\\\";\\n\\n$left-ratio: 25%;\\n$right-ratio: calc(100% - #{$left-ratio});\\n\\n.root {\\n}\\n\\n.container {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  margin: auto;\\n  display: flex;\\n  justify-content: center;\\n  @include mqDown(md) {\\n    flex-wrap: wrap;\\n  }\\n}\\n\\n.leftContainer {\\n  padding: 1em;\\n  margin: auto;\\n  width: $left-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.rightContainer {\\n  max-width: $page-max-width;\\n  padding: 1em;\\n  width: $right-ratio;\\n  @include mqDown(md) {\\n    width: 100%;\\n  }\\n}\\n\\n.leftSide {\\n  @include mqDown(md) {\\n    display: flex;\\n    justify-content: space-around;\\n    align-items: stretch;\\n  }\\n\\n  @include mqDown(sm) {\\n    flex-direction: column;\\n    justify-self: center;\\n    align-items: center;\\n  }\\n  .menuItem {\\n    display: block;\\n    text-align: left;\\n    font-size: 1em;\\n    font-family: \\\"Sawarabi Gothic\\\";\\n    background-color: $light-color;\\n    border: 1px solid $border-main-color;\\n    padding: 1em;\\n    margin-bottom: 0.5em;\\n\\n    @include mqDown(md) {\\n      width: 33%;\\n      padding: 0.5em;\\n      text-align: center;\\n    }\\n\\n    @include mqDown(sm) {\\n      width: 100%;\\n      margin-bottom: 0em;\\n    }\\n  }\\n}\\n\\n.presentationRow {\\n  background-color: $light-color;\\n  border: 1px solid $border-main-color;\\n  padding: 1em;\\n  a {\\n    text-decoration: underline;\\n  }\\n}\\n\",\"$randomR: random(255);\\n$randomG: random(255);\\n$randomB: random(255);\\n$main-color: rgb($randomR, $randomG, $randomB);\\n$light-color: lighten($main-color, 75%);\\n$light2-color: lighten($light-color, 10%);\\n$text-main-color: lighten($main-color, 75%);\\n$header-height: 96px;\\n$main-shadow-color: lighten($main-color, 30%);\\n$text-main-blur-color: darken($text-main-color, 30%);\\n$text-main-shadow-color: darken($text-main-color, 50%);\\n$border-main-color: darken($main-color, 10%);\\n$border-dark-color: darken($border-main-color, 50%);\\n\\n$error-color: rgb(255, 164, 137);\\n$verify-color: rgb(139, 255, 201);\\n$error-border-color: darken($error-color, 50%);\\n$verify-border-color: darken($verify-color, 50%);\\n$error-text-color: darken($error-color, 50%);\\n$verify-text-color: darken($verify-color, 50%);\\n\\n$page-max-width: 1100px;\\n\\n$breakpoint-xs: 0px;\\n$breakpoint-sm: 600px;\\n$breakpoint-md: 960px;\\n$breakpoint-lg: 1280px;\\n$breakpoint-xl: 1920px;\\n$breakpoint-4k: 2560px;\\n\\n$breakpoints: xs, sm, md, lg, xl;\\n$breakpoint-width: (\\n  xs: 0px,\\n  sm: 600px,\\n  md: 960px,\\n  lg: 1280px,\\n  xl: 1920px,\\n  4k: 2560px,\\n);\\n\\n$next-breakpoints: (\\n  xs: sm,\\n  sm: md,\\n  md: lg,\\n  lg: xl,\\n  xl: 4k,\\n);\\n\\n@mixin mqUp($bp: md) {\\n  @media screen and (min-width: map-get($breakpoint-width, $nbp)) {\\n    @content;\\n  }\\n}\\n\\n@mixin mqDown($bp: md) {\\n  $nbp: map-get($next-breakpoints, $bp);\\n  @media screen and (max-width: map-get($breakpoint-width, $bp)) {\\n    @content;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"program_container__2adHO\",\n\t\"leftContainer\": \"program_leftContainer__1fGVj\",\n\t\"rightContainer\": \"program_rightContainer__b_BIk\",\n\t\"leftSide\": \"program_leftSide__29kuG\",\n\t\"menuItem\": \"program_menuItem__3F7Yc\",\n\t\"presentationRow\": \"program_presentationRow__2JhIn\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3M/NWFmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLGlIQUFzRDtBQUNoRztBQUNBO0FBQ0EsOEJBQThCLFFBQVMsOEJBQThCLHNCQUFzQixpQkFBaUIsaUJBQWlCLGtCQUFrQiw0QkFBNEIsR0FBRyx3Q0FBd0MsK0JBQStCLHNCQUFzQixLQUFLLEdBQUcsbUNBQW1DLGlCQUFpQixpQkFBaUIsZUFBZSxHQUFHLHdDQUF3QyxtQ0FBbUMsa0JBQWtCLEtBQUssR0FBRyxvQ0FBb0Msc0JBQXNCLGlCQUFpQiw0QkFBNEIsR0FBRyx3Q0FBd0Msb0NBQW9DLGtCQUFrQixLQUFLLEdBQUcsMENBQTBDLDhCQUE4QixvQkFBb0Isb0NBQW9DLDJCQUEyQixLQUFLLEdBQUcsd0NBQXdDLDhCQUE4Qiw2QkFBNkIsMkJBQTJCLDBCQUEwQixLQUFLLEdBQUcscURBQXFELG1CQUFtQixxQkFBcUIsbUJBQW1CLHFDQUFxQyw0QkFBNEIsOEJBQThCLGlCQUFpQix5QkFBeUIsR0FBRyx3Q0FBd0MsdURBQXVELGlCQUFpQixxQkFBcUIseUJBQXlCLEtBQUssR0FBRyx3Q0FBd0MsdURBQXVELGtCQUFrQix5QkFBeUIsS0FBSyxHQUFHLHFDQUFxQyw0QkFBNEIsOEJBQThCLGlCQUFpQixHQUFHLHFDQUFxQywrQkFBK0IsR0FBRyxPQUFPLDJHQUEyRyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sTUFBTSxVQUFVLEtBQUssTUFBTSxLQUFLLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxNQUFNLFVBQVUsS0FBSyxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLFlBQVksVUFBVSxLQUFLLEtBQUssV0FBVyxrREFBa0QscUJBQXFCLDhCQUE4QixZQUFZLEVBQUUsV0FBVyxHQUFHLGdCQUFnQiwrQkFBK0IsaUJBQWlCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHlCQUF5QixzQkFBc0IsS0FBSyxHQUFHLG9CQUFvQixpQkFBaUIsaUJBQWlCLHVCQUF1Qix5QkFBeUIsa0JBQWtCLEtBQUssR0FBRyxxQkFBcUIsK0JBQStCLGlCQUFpQix3QkFBd0IseUJBQXlCLGtCQUFrQixLQUFLLEdBQUcsZUFBZSx5QkFBeUIsb0JBQW9CLG9DQUFvQywyQkFBMkIsS0FBSywyQkFBMkIsNkJBQTZCLDJCQUEyQiwwQkFBMEIsS0FBSyxlQUFlLHFCQUFxQix1QkFBdUIscUJBQXFCLHVDQUF1QyxxQ0FBcUMsMkNBQTJDLG1CQUFtQiwyQkFBMkIsNkJBQTZCLG1CQUFtQix1QkFBdUIsMkJBQTJCLE9BQU8sNkJBQTZCLG9CQUFvQiwyQkFBMkIsT0FBTyxLQUFLLEdBQUcsc0JBQXNCLG1DQUFtQyx5Q0FBeUMsaUJBQWlCLE9BQU8saUNBQWlDLEtBQUssR0FBRywyQkFBMkIsd0JBQXdCLHdCQUF3QixpREFBaUQsMENBQTBDLDRDQUE0Qyw4Q0FBOEMsdUJBQXVCLGdEQUFnRCx1REFBdUQseURBQXlELCtDQUErQyxzREFBc0QscUNBQXFDLG9DQUFvQyxpREFBaUQsbURBQW1ELCtDQUErQyxpREFBaUQsNEJBQTRCLHdCQUF3Qix3QkFBd0Isd0JBQXdCLHlCQUF5Qix5QkFBeUIseUJBQXlCLHFDQUFxQywrR0FBK0csbUZBQW1GLDBCQUEwQixxRUFBcUUsZUFBZSxLQUFLLEdBQUcsNEJBQTRCLDBDQUEwQyxvRUFBb0UsZUFBZSxLQUFLLEdBQUcscUJBQXFCO0FBQzF4SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL3Byb2dyYW0ubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIucHJvZ3JhbV9jb250YWluZXJfXzJhZEhPIHtcXG4gIG1heC13aWR0aDogMTEwMHB4O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fY29udGFpbmVyX18yYWRITyB7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG59XFxuXFxuLnByb2dyYW1fbGVmdENvbnRhaW5lcl9fMWZHVmoge1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgd2lkdGg6IDI1JTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcXG4gIC5wcm9ncmFtX2xlZnRDb250YWluZXJfXzFmR1ZqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbi5wcm9ncmFtX3JpZ2h0Q29udGFpbmVyX19iX0JJayB7XFxuICBtYXgtd2lkdGg6IDExMDBweDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNSUpO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fcmlnaHRDb250YWluZXJfX2JfQklrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIC5wcm9ncmFtX21lbnVJdGVtX18zRjdZYyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2E3OTU0MjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xcbiAgLnByb2dyYW1fbGVmdFNpZGVfXzI5a3VHIC5wcm9ncmFtX21lbnVJdGVtX18zRjdZYyB7XFxuICAgIHdpZHRoOiAzMyU7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAucHJvZ3JhbV9sZWZ0U2lkZV9fMjlrdUcgLnByb2dyYW1fbWVudUl0ZW1fXzNGN1ljIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDBlbTtcXG4gIH1cXG59XFxuXFxuLnByb2dyYW1fcHJlc2VudGF0aW9uUm93X18ySmhJbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhNzk1NDI7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcbi5wcm9ncmFtX3ByZXNlbnRhdGlvblJvd19fMkpoSW4gYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3Byb2dyYW0ubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly90aGVtZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQVFBO0VBQ0UsaUJDWWU7RURYZixZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVBGO0FDa0RFO0VEaERGO0lBT0ksZUFBQTtFQUxGO0FBQ0Y7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBcEJXO0FBZWI7QUN1Q0U7RURyQ0Y7SUFLSSxXQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFLGlCQ1JlO0VEU2YsWUFBQTtFQUNBLHVCQTVCWTtBQXlCZDtBQzRCRTtFRDVCRjtJQUtJLFdBQUE7RUFERjtBQUNGOztBQ3VCRTtFRG5CRjtJQUVJLGFBQUE7SUFDQSw2QkFBQTtJQUNBLG9CQUFBO0VBREY7QUFDRjtBQ2VFO0VEbkJGO0lBUUksc0JBQUE7SUFDQSxvQkFBQTtJQUNBLG1CQUFBO0VBQUY7QUFDRjtBQUNFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDhCQUFBO0VBQ0EsdUJDbERVO0VEbURWLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUNGRTtFRFBBO0lBV0ksVUFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtFQUVKO0FBQ0Y7QUNURTtFRFBBO0lBaUJJLFdBQUE7SUFDQSxrQkFBQTtFQUdKO0FBQ0Y7O0FBQ0E7RUFDRSx1QkNyRVk7RURzRVoseUJBQUE7RUFDQSxZQUFBO0FBRUY7QUFERTtFQUNFLDBCQUFBO0FBR0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCBcXFwiLi90aGVtZS5zY3NzXFxcIjtcXG5cXG4kbGVmdC1yYXRpbzogMjUlO1xcbiRyaWdodC1yYXRpbzogY2FsYygxMDAlIC0gI3skbGVmdC1yYXRpb30pO1xcblxcbi5yb290IHtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6ICRwYWdlLW1heC13aWR0aDtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxufVxcblxcbi5sZWZ0Q29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHdpZHRoOiAkbGVmdC1yYXRpbztcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLnJpZ2h0Q29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogJHBhZ2UtbWF4LXdpZHRoO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgd2lkdGg6ICRyaWdodC1yYXRpbztcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG59XFxuXFxuLmxlZnRTaWRlIHtcXG4gIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxuICB9XFxuXFxuICBAaW5jbHVkZSBtcURvd24oc20pIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAubWVudUl0ZW0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiU2F3YXJhYmkgR290aGljXFxcIjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWNvbG9yO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyLW1haW4tY29sb3I7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFxuICAgIEBpbmNsdWRlIG1xRG93bihtZCkge1xcbiAgICAgIHdpZHRoOiAzMyU7XFxuICAgICAgcGFkZGluZzogMC41ZW07XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIEBpbmNsdWRlIG1xRG93bihzbSkge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDBlbTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4ucHJlc2VudGF0aW9uUm93IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1jb2xvcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXItbWFpbi1jb2xvcjtcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGEge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIH1cXG59XFxuXCIsXCIkcmFuZG9tUjogcmFuZG9tKDI1NSk7XFxuJHJhbmRvbUc6IHJhbmRvbSgyNTUpO1xcbiRyYW5kb21COiByYW5kb20oMjU1KTtcXG4kbWFpbi1jb2xvcjogcmdiKCRyYW5kb21SLCAkcmFuZG9tRywgJHJhbmRvbUIpO1xcbiRsaWdodC1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgNzUlKTtcXG4kbGlnaHQyLWNvbG9yOiBsaWdodGVuKCRsaWdodC1jb2xvciwgMTAlKTtcXG4kdGV4dC1tYWluLWNvbG9yOiBsaWdodGVuKCRtYWluLWNvbG9yLCA3NSUpO1xcbiRoZWFkZXItaGVpZ2h0OiA5NnB4O1xcbiRtYWluLXNoYWRvdy1jb2xvcjogbGlnaHRlbigkbWFpbi1jb2xvciwgMzAlKTtcXG4kdGV4dC1tYWluLWJsdXItY29sb3I6IGRhcmtlbigkdGV4dC1tYWluLWNvbG9yLCAzMCUpO1xcbiR0ZXh0LW1haW4tc2hhZG93LWNvbG9yOiBkYXJrZW4oJHRleHQtbWFpbi1jb2xvciwgNTAlKTtcXG4kYm9yZGVyLW1haW4tY29sb3I6IGRhcmtlbigkbWFpbi1jb2xvciwgMTAlKTtcXG4kYm9yZGVyLWRhcmstY29sb3I6IGRhcmtlbigkYm9yZGVyLW1haW4tY29sb3IsIDUwJSk7XFxuXFxuJGVycm9yLWNvbG9yOiByZ2IoMjU1LCAxNjQsIDEzNyk7XFxuJHZlcmlmeS1jb2xvcjogcmdiKDEzOSwgMjU1LCAyMDEpO1xcbiRlcnJvci1ib3JkZXItY29sb3I6IGRhcmtlbigkZXJyb3ItY29sb3IsIDUwJSk7XFxuJHZlcmlmeS1ib3JkZXItY29sb3I6IGRhcmtlbigkdmVyaWZ5LWNvbG9yLCA1MCUpO1xcbiRlcnJvci10ZXh0LWNvbG9yOiBkYXJrZW4oJGVycm9yLWNvbG9yLCA1MCUpO1xcbiR2ZXJpZnktdGV4dC1jb2xvcjogZGFya2VuKCR2ZXJpZnktY29sb3IsIDUwJSk7XFxuXFxuJHBhZ2UtbWF4LXdpZHRoOiAxMTAwcHg7XFxuXFxuJGJyZWFrcG9pbnQteHM6IDBweDtcXG4kYnJlYWtwb2ludC1zbTogNjAwcHg7XFxuJGJyZWFrcG9pbnQtbWQ6IDk2MHB4O1xcbiRicmVha3BvaW50LWxnOiAxMjgwcHg7XFxuJGJyZWFrcG9pbnQteGw6IDE5MjBweDtcXG4kYnJlYWtwb2ludC00azogMjU2MHB4O1xcblxcbiRicmVha3BvaW50czogeHMsIHNtLCBtZCwgbGcsIHhsO1xcbiRicmVha3BvaW50LXdpZHRoOiAoXFxuICB4czogMHB4LFxcbiAgc206IDYwMHB4LFxcbiAgbWQ6IDk2MHB4LFxcbiAgbGc6IDEyODBweCxcXG4gIHhsOiAxOTIwcHgsXFxuICA0azogMjU2MHB4LFxcbik7XFxuXFxuJG5leHQtYnJlYWtwb2ludHM6IChcXG4gIHhzOiBzbSxcXG4gIHNtOiBtZCxcXG4gIG1kOiBsZyxcXG4gIGxnOiB4bCxcXG4gIHhsOiA0ayxcXG4pO1xcblxcbkBtaXhpbiBtcVVwKCRicDogbWQpIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnQtd2lkdGgsICRuYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gbXFEb3duKCRicDogbWQpIHtcXG4gICRuYnA6IG1hcC1nZXQoJG5leHQtYnJlYWtwb2ludHMsICRicCk7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50LXdpZHRoLCAkYnApKSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWluZXJcIjogXCJwcm9ncmFtX2NvbnRhaW5lcl9fMmFkSE9cIixcblx0XCJsZWZ0Q29udGFpbmVyXCI6IFwicHJvZ3JhbV9sZWZ0Q29udGFpbmVyX18xZkdWalwiLFxuXHRcInJpZ2h0Q29udGFpbmVyXCI6IFwicHJvZ3JhbV9yaWdodENvbnRhaW5lcl9fYl9CSWtcIixcblx0XCJsZWZ0U2lkZVwiOiBcInByb2dyYW1fbGVmdFNpZGVfXzI5a3VHXCIsXG5cdFwibWVudUl0ZW1cIjogXCJwcm9ncmFtX21lbnVJdGVtX18zRjdZY1wiLFxuXHRcInByZXNlbnRhdGlvblJvd1wiOiBcInByb2dyYW1fcHJlc2VudGF0aW9uUm93X18ySmhJblwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/program.module.scss\n");

/***/ })

})