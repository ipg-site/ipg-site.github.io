_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"20a2":function(e,t,n){e.exports=n("nOHt")},"5dPy":function(e,t,n){e.exports={root:"BreadcrumbBar_root__3_hbC",container:"BreadcrumbBar_container__1W_uh",crumbArrow:"BreadcrumbBar_crumbArrow__RHSy3"}},Cl3N:function(e,t,n){e.exports={sectionHeader:"SectionHeader_sectionHeader__3HjiX"}},DP1a:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/users/list",function(){return n("sKR4")}])},Ns6r:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("nKUr"),a=(n("q1tI"),n("Cl3N")),c=n.n(a),i=function(e){var t=e.children;return Object(r.jsx)("div",{className:c.a.sectionHeader,children:t})}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),a=n("284h");t.__esModule=!0,t.default=void 0;var c=a(n("q1tI")),i=n("elyg"),s=n("nOHt"),o=n("vNVm"),l={};function u(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),a=n&&n.pathname||"/",d=c.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),c=n[0],s=n[1];return{href:c,as:e.as?(0,i.resolveHref)(a,e.as):s||c}}),[a,e.href,e.as]),f=d.href,j=d.as,h=e.children,b=e.replace,p=e.shallow,v=e.scroll,x=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var O=c.Children.only(h),m=O&&"object"===typeof O&&O.ref,_=(0,o.useIntersection)({rootMargin:"200px"}),N=r(_,2),y=N[0],w=N[1],g=c.default.useCallback((function(e){y(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,y]);(0,c.useEffect)((function(){var e=w&&t&&(0,i.isLocalURL)(f),r="undefined"!==typeof x?x:n&&n.locale,a=l[f+"%"+j+(r?"%"+r:"")];e&&!a&&u(n,f,j,{locale:r})}),[j,f,w,x,t,n]);var E={ref:g,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,c,s,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:c,locale:o,scroll:s}).then((function(e){e&&s&&document.body.focus()})))}(e,n,f,j,b,p,v,x)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),u(n,f,j,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var T="undefined"!==typeof x?x:n&&n.locale,C=n&&n.isLocaleDomain&&(0,i.getDomainLocale)(j,T,n&&n.locales,n&&n.domainLocales);E.href=C||(0,i.addBasePath)((0,i.addLocale)(j,T,n&&n.defaultLocale))}return c.default.cloneElement(O,E)};t.default=d},dUEA:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("nKUr"),a=n("q1tI"),c=n("YFqc"),i=n.n(c),s=n("5dPy"),o=n.n(s),l=function(e){var t=e.crumbs;return Object(r.jsx)("div",{className:o.a.root,children:Object(r.jsx)("div",{className:o.a.container,children:t.map((function(e,n){return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(i.a,{href:e[0],children:Object(r.jsx)("a",{children:e[1]})},e[0]),n<t.length-1?Object(r.jsx)("span",{className:o.a.crumbArrow,children:">"}):Object(r.jsx)(r.Fragment,{})]},"crumb-"+n)}))})})}},sKR4:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),a=n("o0o1"),c=n.n(a),i=n("HaE+"),s=n("ODXe"),o=n("20a2"),l=n.n(o),u=n("YFqc"),d=n.n(u),f=n("q1tI"),j=n.n(f),h=n("Ns6r"),b=n("z3zu"),p=n.n(b),v=n("Uqjl"),x=n("dUEA");t.default=function(){var e=j.a.useState([]),t=Object(s.a)(e,2),n=t[0],a=t[1],o=j.a.useState([]),u=Object(s.a)(o,2),b=u[0],O=u[1],m=j.a.useState([]),_=Object(s.a)(m,2),N=_[0],y=_[1],w=j.a.useState([]),g=Object(s.a)(w,2),E=g[0],T=g[1],C=j.a.useState([]),I=Object(s.a)(C,2),S=I[0],L=I[1],M=j.a.useState(),H=Object(s.a)(M,2),P=H[0],R=H[1],U=function(e){return null===e||void 0===e};return j.a.useEffect((function(){Object(v.q)().then(function(){var e=Object(i.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("NG"!==t){e.next=3;break}return l.a.push("/login?redirect="+encodeURIComponent(location.pathname+location.search)),e.abrupt("return");case 3:Object(v.p)().then((function(e){"NG"===e&&l.a.push("/login?redirect="+encodeURIComponent(location.pathname+location.search)),R(!0)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),j.a.useEffect((function(){P&&Object(v.n)().then((function(e){"NG"!==e.status&&(a(e.data),O(e.data.map((function(e){var t;return U(null===e||void 0===e||null===(t=e.file)||void 0===t?void 0:t.abstractPath)?null:"https://thetis.f-lab.tech.uec.ac.jp/ipg_api"+"/file/abstract/".concat(e.file.id)}))),y(e.data.map((function(e){var t;return U(null===e||void 0===e||null===(t=e.file)||void 0===t?void 0:t.moviePath)?null:"https://thetis.f-lab.tech.uec.ac.jp/ipg_api"+"/file/movie/".concat(e.file.id)}))),T(e.data.map((function(e){var t;return U(null===e||void 0===e||null===(t=e.file)||void 0===t?void 0:t.presentationPath)?null:"https://thetis.f-lab.tech.uec.ac.jp/ipg_api"+"/file/presentation/".concat(e.file.id)}))),L(e.data.map((function(e){var t;return U(null===e||void 0===e||null===(t=e.file)||void 0===t?void 0:t.consentPath)?null:"https://thetis.f-lab.tech.uec.ac.jp/ipg_api"+"/file/consent/".concat(e.file.id)}))))}))}),[P]),Object(r.jsxs)("div",{className:p.a.root,children:[Object(r.jsx)(x.a,{crumbs:[["/users","\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u753b\u9762"],["/admin","\u7ba1\u7406\u8005\u753b\u9762\u30c8\u30c3\u30d7"],["/admin/users/list","\u30e6\u30fc\u30b6\u30fc\u4e00\u89a7"]]}),Object(r.jsxs)("div",{className:p.a.container,children:[Object(r.jsx)(h.a,{children:"\u30e6\u30fc\u30b6\u30fc\u4e00\u89a7"}),Object(r.jsxs)("table",{className:p.a.listTable,children:[Object(r.jsxs)("thead",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{width:100,children:"\u540d\u524d"}),Object(r.jsx)("td",{rowSpan:2,children:"\u5404\u7a2e\u30d5\u30a1\u30a4\u30eb"}),Object(r.jsx)("td",{rowSpan:2,width:60})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("td",{width:100,children:"\u767a\u8868\u756a\u53f7"})})]}),Object(r.jsx)("tbody",{children:n.map((function(e,t){return Object(r.jsxs)(f.Fragment,{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{rowSpan:2,children:e.fullName}),Object(r.jsx)("td",{children:b[t]?Object(r.jsx)(d.a,{href:b[t],children:Object(r.jsx)("a",{className:p.a.verifyText,children:"\u4e88\u7a3f"})}):Object(r.jsx)("span",{className:p.a.errorText,children:"\u4e88\u7a3f"})}),Object(r.jsx)("td",{rowSpan:2,children:Object(r.jsx)(d.a,{href:"/admin/users/edit?id=".concat(e.id),children:Object(r.jsx)("a",{children:"\u8a73\u7d30\u3078"})})})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:N[t]?Object(r.jsx)(d.a,{href:N[t],children:Object(r.jsx)("a",{className:p.a.verifyText,children:"\u52d5\u753b"})}):Object(r.jsx)("span",{className:p.a.errorText,children:"\u52d5\u753b"})})}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{rowSpan:2,children:e.presentationId}),Object(r.jsx)("td",{children:E[t]?Object(r.jsx)(d.a,{href:E[t],children:Object(r.jsx)("a",{className:p.a.verifyText,children:"\u767a\u8868\u8cc7\u6599"})}):Object(r.jsx)("span",{className:p.a.errorText,children:"\u767a\u8868\u8cc7\u6599"})}),Object(r.jsx)("td",{rowSpan:2,children:Object(r.jsx)(d.a,{href:"/admin/history/?id=".concat(e.id),children:Object(r.jsx)("a",{children:"\u5c65\u6b74\u3078"})})})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("td",{children:S[t]?Object(r.jsx)(d.a,{href:S[t],children:Object(r.jsx)("a",{className:p.a.verifyText,children:"\u540c\u610f\u66f8"})}):Object(r.jsx)("span",{className:p.a.errorText,children:"\u540c\u610f\u66f8"})})})]},t)}))})]})]})]})}},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,o=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),d=u[0],f=u[1],j=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||d||e&&e.tagName&&(o.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return(0,a.useEffect)((function(){if(!i&&!d){var e=(0,c.requestIdleCallback)((function(){return f(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[d]),[j,d]};var a=n("q1tI"),c=n("0G5g"),i="undefined"!==typeof IntersectionObserver;var s=new Map},z3zu:function(e,t,n){e.exports={container:"admin_container__1CXMd",table:"admin_table__8O545",listTable:"admin_listTable__3jsL1",buttonContainer:"admin_buttonContainer__3VEf1",errorText:"admin_errorText__3C8Fb",verifyText:"admin_verifyText__1Z79J"}}},[["DP1a",1,0,2,3]]]);