_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"3KiN":function(e,n,t){e.exports={root:"Input_root__33N-O",inputBox:"Input_inputBox__tbpt4",button:"Input_button__3ICbD","button-verify":"Input_button-verify__bFMUM","button-error":"Input_button-error__yb3pA","button-primary":"Input_button-primary__24gUV",select:"Input_select__1Ny-f"}},"5dPy":function(e,n,t){e.exports={root:"BreadcrumbBar_root__3_hbC",container:"BreadcrumbBar_container__1W_uh",crumbArrow:"BreadcrumbBar_crumbArrow__RHSy3"}},Cl3N:function(e,n,t){e.exports={sectionHeader:"SectionHeader_sectionHeader__3HjiX"}},Ns6r:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("nKUr"),a=(t("q1tI"),t("Cl3N")),c=t.n(a),o=function(e){var n=e.children;return Object(r.jsx)("div",{className:c.a.sectionHeader,children:n})}},XQTS:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return t("tg/1")}])},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),a=t("284h");n.__esModule=!0,n.default=void 0;var c=a(t("q1tI")),o=t("elyg"),i=t("nOHt"),u=t("vNVm"),s={};function l(e,n,t,r){if(e&&(0,o.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(a?"%"+a:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),a=t&&t.pathname||"/",f=c.default.useMemo((function(){var n=(0,o.resolveHref)(a,e.href,!0),t=r(n,2),c=t[0],i=t[1];return{href:c,as:e.as?(0,o.resolveHref)(a,e.as):i||c}}),[a,e.href,e.as]),d=f.href,p=f.as,b=e.children,h=e.replace,j=e.shallow,v=e.scroll,_=e.locale;"string"===typeof b&&(b=c.default.createElement("a",null,b));var m=c.Children.only(b),x=m&&"object"===typeof m&&m.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),y=r(O,2),N=y[0],g=y[1],w=c.default.useCallback((function(e){N(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,N]);(0,c.useEffect)((function(){var e=g&&n&&(0,o.isLocalURL)(d),r="undefined"!==typeof _?_:t&&t.locale,a=s[d+"%"+p+(r?"%"+r:"")];e&&!a&&l(t,d,p,{locale:r})}),[p,d,g,_,n,t]);var E={ref:w,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,c,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:c,locale:u,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,t,d,p,h,j,v,_)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var C="undefined"!==typeof _?_:t&&t.locale,I=t&&t.isLocaleDomain&&(0,o.getDomainLocale)(p,C,t&&t.locales,t&&t.domainLocales);E.href=I||(0,o.addBasePath)((0,o.addLocale)(p,C,t&&t.defaultLocale))}return c.default.cloneElement(m,E)};n.default=f},dUEA:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("nKUr"),a=t("q1tI"),c=t("YFqc"),o=t.n(c),i=t("5dPy"),u=t.n(i),s=function(e){var n=e.crumbs;return Object(r.jsx)("div",{className:u.a.root,children:Object(r.jsx)("div",{className:u.a.container,children:n.map((function(e,t){return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)(o.a,{href:e[0],children:Object(r.jsx)("a",{children:e[1]})},e[0]),t<n.length-1?Object(r.jsx)("span",{className:u.a.crumbArrow,children:">"}):Object(r.jsx)(r.Fragment,{})]},"crumb-"+t)}))})})}},pG0O:function(e,n,t){"use strict";t.d(n,"b",(function(){return d})),t.d(n,"a",(function(){return p})),t.d(n,"c",(function(){return b}));var r=t("ODXe"),a=t("nKUr"),c=t("o0o1"),o=t.n(c),i=t("HaE+"),u=t("q1tI"),s=t.n(u),l=t("3KiN"),f=t.n(l),d=function(e){var n=e.label,t=e.onChange,r=e.onKeyPressed,c=e.secure,u=e.defaultValue,l=s.a.useRef(null);return Object(a.jsxs)("div",{className:f.a.root,children:[Object(a.jsx)("label",{onClick:function(){null!==l&&l.current.focus()},className:f.a.inputLabel,children:n}),Object(a.jsx)("input",{ref:l,type:c?"password":"text",className:f.a.inputBox,defaultValue:u||"",onChange:function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:t({input:n.target.value});case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),onKeyDown:function(e){r&&"Enter"===e.code&&r()}})]})},p=function(e){var n=e.onAction,t=e.children,r=e.variable;return Object(a.jsx)("button",{className:f.a["button-"+(r||"primary")],onClick:function(){n&&n()},onKeyDown:function(e){n&&"Enter"===e.code&&n()},children:t})},b=function(e){var n=e.onAction,t=e.label,c=e.items,o=e.index,i=s.a.useRef(null),u=s.a.useState(o),l=Object(r.a)(u,2),d=l[0],p=l[1];return s.a.useEffect((function(){p(o)}),[o]),Object(a.jsxs)("div",{className:f.a.root,children:[Object(a.jsx)("label",{onClick:function(){null!==i&&i.current.focus()},className:f.a.inputLabel,children:t}),Object(a.jsx)("select",{className:f.a.select,value:d,onChange:function(e){var t=Number(e.target.value);p(t),n&&n({index:t,value:c[t]})},children:c.map((function(e,n){return Object(a.jsx)("option",{value:n,children:e},t+"-"+n)}))})]})}},"tg/1":function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),a=t("o0o1"),c=t.n(a),o=t("HaE+"),i=t("z3zu"),u=t.n(i),s=t("20a2"),l=t.n(s),f=t("YFqc"),d=t.n(f),p=t("q1tI"),b=t.n(p),h=t("Ns6r"),j=t("Uqjl"),v=t("pG0O"),_=t("dUEA");n.default=function(){return b.a.useEffect((function(){Object(j.l)().then(function(){var e=Object(o.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("NG"!==n){e.next=3;break}return l.a.push("/login?redirect="+encodeURIComponent(location.pathname+location.search)),e.abrupt("return");case 3:Object(j.k)().then((function(e){"NG"===e&&l.a.push("/login?redirect="+encodeURIComponent(location.pathname+location.search))}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[]),Object(r.jsxs)("div",{className:u.a.root,children:[Object(r.jsx)(_.a,{crumbs:[["/users","\u30ed\u30b0\u30a4\u30f3\u30e6\u30fc\u30b6\u30fc\u753b\u9762"],["/admin","\u7ba1\u7406\u8005\u753b\u9762\u30c8\u30c3\u30d7"]]}),Object(r.jsxs)("div",{className:u.a.container,children:[Object(r.jsx)(h.a,{children:"\u7ba1\u7406\u8005\u753b\u9762"}),Object(r.jsx)(d.a,{href:"/admin/users/add",children:Object(r.jsx)("a",{children:Object(r.jsx)(v.a,{children:"\u30e6\u30fc\u30b6\u30fc\u8ffd\u52a0"})})}),Object(r.jsx)(d.a,{href:"/admin/users/list",children:Object(r.jsx)("a",{children:Object(r.jsx)(v.a,{children:"\u30e6\u30fc\u30b6\u30fc\u4e00\u89a7"})})}),Object(r.jsx)(d.a,{href:"/admin/config",children:Object(r.jsx)("a",{children:Object(r.jsx)(v.a,{children:"\u30b5\u30a4\u30c8\u8a2d\u5b9a"})})})]})]})}},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!o,u=(0,a.useRef)(),s=(0,a.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,a.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:a,elements:r}),t}(t),a=r.id,c=r.observer,o=r.elements;return o.set(e,n),c.observe(e),function(){o.delete(e),c.unobserve(e),0===o.size&&(c.disconnect(),i.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){if(!o&&!f){var e=(0,c.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=t("q1tI"),c=t("0G5g"),o="undefined"!==typeof IntersectionObserver;var i=new Map},z3zu:function(e,n,t){e.exports={container:"admin_container__1CXMd",table:"admin_table__8O545",listTable:"admin_listTable__3jsL1",buttonContainer:"admin_buttonContainer__3VEf1"}}},[["XQTS",1,0,2,3]]]);