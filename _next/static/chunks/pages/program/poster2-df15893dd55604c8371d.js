_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{"+fV8":function(e,n,t){e.exports={container:"program_container__2adHO",leftContainer:"program_leftContainer__1fGVj",rightContainer:"program_rightContainer__b_BIk",leftSide:"program_leftSide__29kuG",menuItem:"program_menuItem__3F7Yc",presentationRow:"program_presentationRow__2JhIn"}},"20a2":function(e,n,t){e.exports=t("nOHt")},"7rrl":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/program/poster2",function(){return t("A5Uj")}])},A5Uj:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),a=t("ODXe"),o=t("q1tI"),c=t.n(o),i=t("u4gW"),s=t("+fV8"),l=t.n(s),u=t("20a2"),f=t.n(u),d=t("Uqjl"),p=t("H5no");n.default=function(){var e=c.a.useState(!1),n=Object(a.a)(e,2),t=n[0],o=n[1],s=c.a.useState([]),u=Object(a.a)(s,2),v=u[0],h=u[1];return c.a.useEffect((function(){Object(d.p)().then((function(e){"NG"===e?f.a.push("/login?redirect="+encodeURIComponent(location.pathname+location.search)):o(!0)}))}),[]),c.a.useEffect((function(){Object(d.n)("\u30dd\u30b9\u30bf\u30fc2").then((function(e){e||alert("\u4e00\u89a7\u306e\u53d6\u5f97\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"),h(e.data)}))}),[t]),Object(r.jsx)("div",{className:l.a.root,children:Object(r.jsxs)("div",{className:l.a.container,children:[Object(r.jsx)("div",{className:l.a.leftContainer,children:Object(r.jsx)(i.a,{})}),Object(r.jsx)("div",{className:l.a.rightContainer,children:null===v||void 0===v?void 0:v.map((function(e,n){return Object(r.jsx)(p.a,{data:e},"presentation-row-"+n)}))})]})})}},H5no:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("nKUr"),a=(t("q1tI"),t("YFqc")),o=t.n(a),c=t("+fV8"),i=t.n(c),s=function(e){var n=e.data;return Object(r.jsxs)("div",{className:i.a.presentationRow,children:[Object(r.jsx)("p",{children:n.presentationId}),Object(r.jsx)("p",{children:n.title}),Object(r.jsxs)("p",{children:[n.fullName,"(",n.university,")"]}),Object(r.jsx)("p",{children:Object(r.jsx)(o.a,{href:"/files/viewer?type=presentation&fid="+n.fileId,children:Object(r.jsx)("a",{children:"\u767a\u8868\u30fb\u88dc\u8db3\u8cc7\u6599\uff08PDF\uff09"})})}),Object(r.jsx)("p",{children:Object(r.jsx)(o.a,{href:"/files/viewer?type=movie&fid="+n.fileId,children:Object(r.jsx)("a",{children:"\u30b7\u30e7\u30fc\u30c8\u30d7\u30ec\u30bc\u30f3\u52d5\u753b"})})})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var o=a(t("q1tI")),c=t("elyg"),i=t("nOHt"),s=t("vNVm"),l={};function u(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),a=t&&t.pathname||"/",f=o.default.useMemo((function(){var n=(0,c.resolveHref)(a,e.href,!0),t=r(n,2),o=t[0],i=t[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,j=e.shallow,m=e.scroll,b=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var _=o.Children.only(v),g=_&&"object"===typeof _&&_.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),x=r(O,2),w=x[0],y=x[1],I=o.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);(0,o.useEffect)((function(){var e=y&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof b?b:t&&t.locale,a=l[d+"%"+p+(r?"%"+r:"")];e&&!a&&u(t,d,p,{locale:r})}),[p,d,y,b,n,t]);var N={ref:I,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,h,j,m,b)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),u(t,d,p,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var E="undefined"!==typeof b?b:t&&t.locale,C=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,E,t&&t.locales,t&&t.domainLocales);N.href=C||(0,c.addBasePath)((0,c.addLocale)(p,E,t&&t.defaultLocale))}return o.default.cloneElement(_,N)};n.default=f},u4gW:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("nKUr"),a=(t("q1tI"),t("YFqc")),o=t.n(a),c=t("+fV8"),i=t.n(c),s=function(){return Object(r.jsx)("div",{className:i.a.leftSide,children:[["/program","\u4e88\u7a3f\u96c6"],["/program/poster1","\u30dd\u30b9\u30bf\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u2460"],["/program/poster2","\u30dd\u30b9\u30bf\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u2461"]].map((function(e){return Object(r.jsx)(o.a,{href:e[0],children:Object(r.jsx)("a",{className:i.a.menuItem,children:e[1]})},e[0])}))})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,s=(0,a.useRef)(),l=(0,a.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=t("q1tI"),o=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["7rrl",1,0,2,3]]]);