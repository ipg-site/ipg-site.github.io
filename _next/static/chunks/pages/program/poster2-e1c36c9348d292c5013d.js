_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"+fV8":function(e,n,t){e.exports={container:"program_container__2adHO",leftContainer:"program_leftContainer__1fGVj",rightContainer:"program_rightContainer__b_BIk",leftSide:"program_leftSide__29kuG",menuItem:"program_menuItem__3F7Yc",presentationRow:"program_presentationRow__2JhIn"}},"20a2":function(e,n,t){e.exports=t("nOHt")},"7rrl":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/program/poster2",function(){return t("A5Uj")}])},A5Uj:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),a=t("o0o1"),o=t.n(a),c=t("HaE+"),i=t("ODXe"),s=t("q1tI"),u=t.n(s),l=t("u4gW"),f=t("+fV8"),d=t.n(f),p=t("20a2"),v=t.n(p),j=t("Uqjl"),h=t("H5no");n.default=function(){var e=u.a.useState(!1),n=Object(i.a)(e,2),t=n[0],a=n[1],s=u.a.useState([]),f=Object(i.a)(s,2),p=f[0],b=f[1],m=u.a.useState(null),O=Object(i.a)(m,2),_=O[0],g=O[1];return u.a.useEffect((function(){Object(j.q)().then(function(){var e=Object(c.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"NG"===n?v.a.push("/login?redirect="+encodeURIComponent(location.pathname+location.search)):a(!0),e.next=3,Object(j.i)();case 3:if("NG"!==(t=e.sent).status){e.next=6;break}return e.abrupt("return");case 6:t.data.conferenceOpen?g(!0):g(!1);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]),u.a.useEffect((function(){Object(j.o)("\u30dd\u30b9\u30bf\u30fc2").then((function(e){"NG"!==e.status&&b(e.data)}))}),[t]),!1===_?Object(r.jsx)("div",{className:d.a.root,children:Object(r.jsxs)("div",{className:d.a.container,children:[Object(r.jsx)("div",{className:d.a.leftContainer,children:Object(r.jsx)(l.a,{})}),Object(r.jsx)("div",{className:d.a.rightContainer,children:"\u73fe\u5728\u5927\u4f1a\u304c\u958b\u50ac\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u30dd\u30b9\u30bf\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u306e\u4e00\u89a7\u306e\u53d6\u5f97\u304c\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002"})]})}):Object(r.jsx)("div",{className:d.a.root,children:Object(r.jsxs)("div",{className:d.a.container,children:[Object(r.jsx)("div",{className:d.a.leftContainer,children:Object(r.jsx)(l.a,{})}),Object(r.jsx)("div",{className:d.a.rightContainer,children:null===p||void 0===p?void 0:p.map((function(e,n){return Object(r.jsx)(h.a,{data:e},"presentation-row-"+n)}))})]})})}},H5no:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("nKUr"),a=(t("q1tI"),t("YFqc")),o=t.n(a),c=t("+fV8"),i=t.n(c),s=function(e){var n=e.data;return Object(r.jsxs)("div",{className:i.a.presentationRow,children:[Object(r.jsx)("p",{children:n.presentationId}),Object(r.jsx)("p",{children:n.title}),Object(r.jsxs)("p",{children:[n.fullName,"(",n.university,")"]}),Object(r.jsx)("p",{children:Object(r.jsx)(o.a,{href:"/files/viewer?type=presentation&fid="+n.fileId,children:Object(r.jsx)("a",{children:"\u767a\u8868\u30fb\u88dc\u8db3\u8cc7\u6599\uff08PDF\uff09"})})}),Object(r.jsx)("p",{children:Object(r.jsx)(o.a,{href:"/files/viewer?type=movie&fid="+n.fileId,children:Object(r.jsx)("a",{children:"\u30b7\u30e7\u30fc\u30c8\u30d7\u30ec\u30bc\u30f3\u52d5\u753b"})})})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var o=a(t("q1tI")),c=t("elyg"),i=t("nOHt"),s=t("vNVm"),u={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),a=t&&t.pathname||"/",f=o.default.useMemo((function(){var n=(0,c.resolveHref)(a,e.href,!0),t=r(n,2),o=t[0],i=t[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,j=e.replace,h=e.shallow,b=e.scroll,m=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var O=o.Children.only(v),_=O&&"object"===typeof O&&O.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),x=r(g,2),w=x[0],N=x[1],y=o.default.useCallback((function(e){w(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,w]);(0,o.useEffect)((function(){var e=N&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof m?m:t&&t.locale,a=u[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(t,d,p,{locale:r})}),[p,d,N,m,n,t]);var I={ref:y,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,j,h,b,m)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var E="undefined"!==typeof m?m:t&&t.locale,C=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,E,t&&t.locales,t&&t.domainLocales);I.href=C||(0,c.addBasePath)((0,c.addLocale)(p,E,t&&t.defaultLocale))}return o.default.cloneElement(O,I)};n.default=f},u4gW:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("nKUr"),a=(t("q1tI"),t("YFqc")),o=t.n(a),c=t("+fV8"),i=t.n(c),s=function(){return Object(r.jsx)("div",{className:i.a.leftSide,children:[["/program","\u5b66\u4f1a\u30d7\u30ed\u30b0\u30e9\u30e0"],["/program/poster1","\u30dd\u30b9\u30bf\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u2460"],["/program/poster2","\u30dd\u30b9\u30bf\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u2461"],["/program/download","\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"]].map((function(e){return Object(r.jsx)(o.a,{href:e[0],children:Object(r.jsx)("a",{className:i.a.menuItem,children:e[1]})},e[0])}))})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,s=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=t("q1tI"),o=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["7rrl",1,0,2,3]]]);