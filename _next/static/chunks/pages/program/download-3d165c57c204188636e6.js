_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[20],{"+fV8":function(e,n,t){e.exports={container:"program_container__2adHO",leftContainer:"program_leftContainer__1fGVj",rightContainer:"program_rightContainer__b_BIk",leftSide:"program_leftSide__29kuG",menuItem:"program_menuItem__3F7Yc",presentationRow:"program_presentationRow__2JhIn"}},"20a2":function(e,n,t){e.exports=t("nOHt")},"3pTb":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/program/download",function(){return t("FZar")}])},FZar:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),a=t("o0o1"),o=t.n(a),c=t("HaE+"),i=t("ODXe"),s=t("q1tI"),u=t.n(s),l=t("u4gW"),f=t("+fV8"),p=t.n(f),d=t("20a2"),h=t.n(d),v=t("Uqjl");n.default=function(){var e=u.a.useState(!1),n=Object(i.a)(e,2),t=n[0],a=n[1],s=u.a.useState(!1),f=Object(i.a)(s,2),d=f[0],m=f[1];return u.a.useEffect((function(){Object(v.q)().then(function(){var e=Object(c.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"NG"===n?h.a.push("/login?redirect="+encodeURIComponent(location.pathname+location.search)):a(!0),e.next=3,Object(v.i)();case 3:"NG"===(t=e.sent).status&&m(!1),t.data.conferenceOpen&&m(!0);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]),u.a.useEffect((function(){}),[t]),Object(r.jsx)("div",{className:p.a.root,children:Object(r.jsxs)("div",{className:p.a.container,children:[Object(r.jsx)("div",{className:p.a.leftContainer,children:Object(r.jsx)(l.a,{})}),Object(r.jsxs)("div",{className:p.a.rightContainer,children:[Object(r.jsx)("p",{children:"\u4e88\u7a3f\u96c6\u3084\u5b66\u4f1a\u306e\u624b\u5f15\u304d\u306a\u3069\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:Object(v.h)("/file/guideline"),children:"\u95a2\u6771\u5b66\u751f\u30de\u30cb\u30e5\u30a2\u30eb"})}),Object(r.jsx)("p",{children:d?Object(r.jsx)("a",{href:Object(v.h)("/file/abstracts"),children:"\u4e88\u7a3f\u96c6"}):Object(r.jsx)("span",{children:"\u4e88\u7a3f\u96c6\u306f\u73fe\u5728\u5927\u4f1a\u304c\u958b\u50ac\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u304c\u3067\u304d\u307e\u305b\u3093\u3002"})})]})]})})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var o=a(t("q1tI")),c=t("elyg"),i=t("nOHt"),s=t("vNVm"),u={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),a=t&&t.pathname||"/",f=o.default.useMemo((function(){var n=(0,c.resolveHref)(a,e.href,!0),t=r(n,2),o=t[0],i=t[1];return{href:o,as:e.as?(0,c.resolveHref)(a,e.as):i||o}}),[a,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,m=e.shallow,b=e.scroll,j=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var _=o.Children.only(h),g=_&&"object"===typeof _&&_.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),w=r(O,2),x=w[0],y=w[1],E=o.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);(0,o.useEffect)((function(){var e=y&&n&&(0,c.isLocalURL)(p),r="undefined"!==typeof j?j:t&&t.locale,a=u[p+"%"+d+(r?"%"+r:"")];e&&!a&&l(t,p,d,{locale:r})}),[d,p,y,j,n,t]);var I={ref:E,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o,locale:s,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,p,d,v,m,b,j)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),l(t,p,d,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var N="undefined"!==typeof j?j:t&&t.locale,C=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(d,N,t&&t.locales,t&&t.domainLocales);I.href=C||(0,c.addBasePath)((0,c.addLocale)(d,N,t&&t.defaultLocale))}return o.default.cloneElement(_,I)};n.default=f},u4gW:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("nKUr"),a=(t("q1tI"),t("YFqc")),o=t.n(a),c=t("+fV8"),i=t.n(c),s=function(){return Object(r.jsx)("div",{className:i.a.leftSide,children:[["/program","\u5b66\u4f1a\u30d7\u30ed\u30b0\u30e9\u30e0"],["/program/poster1","\u30dd\u30b9\u30bf\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u2460"],["/program/poster2","\u30dd\u30b9\u30bf\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3\u2461"],["/program/download","\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"]].map((function(e){return Object(r.jsx)(o.a,{href:e[0],children:Object(r.jsx)("a",{className:i.a.menuItem,children:e[1]})},e[0])}))})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,s=(0,a.useRef)(),u=(0,a.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||f||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,o=r.observer,c=r.elements;return c.set(e,n),o.observe(e),function(){c.delete(e),o.unobserve(e),0===c.size&&(o.disconnect(),i.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!c&&!f){var e=(0,o.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[d,f]};var a=t("q1tI"),o=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["3pTb",1,0,2,3]]]);