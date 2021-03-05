webpackHotUpdate_N_E("pages/program",{

/***/ "./components/MarkdownComponents.tsx":
/*!*******************************************!*\
  !*** ./components/MarkdownComponents.tsx ***!
  \*******************************************/
/*! exports provided: ProgramHeader, ProgramSubHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramHeader", function() { return ProgramHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramSubHeader", function() { return ProgramSubHeader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_MarkdownComponents_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/MarkdownComponents.module.scss */ "./styles/MarkdownComponents.module.scss");
/* harmony import */ var _styles_MarkdownComponents_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_MarkdownComponents_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "/home/mon/workspace/node/ipg_site/ipg-front/components/MarkdownComponents.tsx",
    _this = undefined;



var ProgramHeader = function ProgramHeader(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
    className: _styles_MarkdownComponents_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, _this);
};
_c = ProgramHeader;
var ProgramSubHeader = function ProgramSubHeader(_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
    className: _styles_MarkdownComponents_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subHeader,
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, _this);
};
_c2 = ProgramSubHeader;

var _c, _c2;

$RefreshReg$(_c, "ProgramHeader");
$RefreshReg$(_c2, "ProgramSubHeader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@mapbox/hast-util-table-cell-style/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@mapbox/hast-util-table-cell-style/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/@mapbox/hast-util-table-cell-style/node_modules/unist-util-visit/index.js");

var hasOwnProperty = Object.prototype.hasOwnProperty;
var hastCssPropertyMap = {
  align: 'text-align',
  valign: 'vertical-align',
  height: 'height',
  width: 'width'
};

module.exports = function tableCellStyle(node) {
  visit(node, 'element', visitor);
  return node;
};

function visitor(node) {
  if (node.tagName !== 'tr' && node.tagName !== 'td' && node.tagName !== 'th') {
    return;
  }

  var hastName;
  var cssName;
  for (hastName in hastCssPropertyMap) {
    if (
      !hasOwnProperty.call(hastCssPropertyMap, hastName) ||
      node.properties[hastName] === undefined
    ) {
      continue;
    }
    cssName = hastCssPropertyMap[hastName];
    appendStyle(node, cssName, node.properties[hastName]);
    delete node.properties[hastName];
  }
}

function appendStyle(node, property, value) {
  var prevStyle = (node.properties.style || '').trim();
  if (prevStyle && !/;\s*/.test(prevStyle)) {
    prevStyle += ';';
  }
  if (prevStyle) {
    prevStyle += ' ';
  }
  var nextStyle = prevStyle + property + ': ' + value + ';';
  node.properties.style = nextStyle;
}


/***/ }),

/***/ "./node_modules/@mapbox/hast-util-table-cell-style/node_modules/unist-util-is/convert.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@mapbox/hast-util-table-cell-style/node_modules/unist-util-is/convert.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (test === null || test === undefined) {
    return ok
  }

  if (typeof test === 'object') {
    return ('length' in test ? anyFactory : matchesFactory)(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

function convertAll(tests) {
  var results = []
  var length = tests.length
  var index = -1

  while (++index < length) {
    results[index] = convert(tests[index])
  }

  return results
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function matchesFactory(test) {
  return matches

  function matches(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) {
        return false
      }
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = convertAll(tests)
  var length = checks.length

  return matches

  function matches() {
    var index = -1

    while (++index < length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "./node_modules/@mapbox/hast-util-table-cell-style/node_modules/unist-util-visit-parents/index.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@mapbox/hast-util-table-cell-style/node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/@mapbox/hast-util-table-cell-style/node_modules/unist-util-is/convert.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)

  one(tree, null, [])

  // Visit a single node.
  function one(node, index, parents) {
    var result = []
    var subresult

    if (!test || is(node, index, parents[parents.length - 1] || null)) {
      result = toResult(visitor(node, parents))

      if (result[0] === EXIT) {
        return result
      }
    }

    if (node.children && result[0] !== SKIP) {
      subresult = toResult(all(node.children, parents.concat(node)))
      return subresult[0] === EXIT ? subresult : result
    }

    return result
  }

  // Visit children in `parent`.
  function all(children, parents) {
    var min = -1
    var step = reverse ? -1 : 1
    var index = (reverse ? children.length : min) + step
    var result

    while (index > min && index < children.length) {
      result = one(children[index], index, parents)

      if (result[0] === EXIT) {
        return result
      }

      index = typeof result[1] === 'number' ? result[1] : index + step
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "./node_modules/@mapbox/hast-util-table-cell-style/node_modules/unist-util-visit/index.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@mapbox/hast-util-table-cell-style/node_modules/unist-util-visit/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/@mapbox/hast-util-table-cell-style/node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = parse
exports.stringify = stringify

var comma = ','
var space = ' '
var empty = ''

// Parse comma-separated tokens to an array.
function parse(value) {
  var values = []
  var input = String(value || empty)
  var index = input.indexOf(comma)
  var lastIndex = 0
  var end = false
  var val

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    val = input.slice(lastIndex, index).trim()

    if (val || !end) {
      values.push(val)
    }

    lastIndex = index + 1
    index = input.indexOf(comma, lastIndex)
  }

  return values
}

// Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.
function stringify(values, options) {
  var settings = options || {}
  var left = settings.padLeft === false ? empty : space
  var right = settings.padRight ? space : empty

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === empty) {
    values = values.concat(empty)
  }

  return values.join(right + comma + left).trim()
}


/***/ }),

/***/ "./node_modules/hast-to-hyperscript/index.js":
/*!***************************************************!*\
  !*** ./node_modules/hast-to-hyperscript/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var html = __webpack_require__(/*! property-information/html */ "./node_modules/property-information/html.js")
var svg = __webpack_require__(/*! property-information/svg */ "./node_modules/property-information/svg.js")
var find = __webpack_require__(/*! property-information/find */ "./node_modules/property-information/find.js")
var hastToReact = __webpack_require__(/*! property-information/hast-to-react.json */ "./node_modules/property-information/hast-to-react.json")
var spaces = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js")
var commas = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js")
var style = __webpack_require__(/*! style-to-object */ "./node_modules/style-to-object/index.js")
var ns = __webpack_require__(/*! web-namespaces */ "./node_modules/web-namespaces/index.json")
var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")

var root = convert('root')
var element = convert('element')
var text = convert('text')

module.exports = wrapper

function wrapper(h, node, options) {
  var settings = options || {}
  var r = react(h)
  var v = vue(h)
  var vd = vdom(h)
  var prefix

  if (typeof h !== 'function') {
    throw new Error('h is not a function')
  }

  if (typeof settings === 'string' || typeof settings === 'boolean') {
    prefix = settings
    settings = {}
  } else {
    prefix = settings.prefix
  }

  if (root(node)) {
    node =
      node.children.length === 1 && element(node.children[0])
        ? node.children[0]
        : {
            type: 'element',
            tagName: 'div',
            properties: {},
            children: node.children
          }
  } else if (!element(node)) {
    throw new Error(
      'Expected root or element, not `' + ((node && node.type) || node) + '`'
    )
  }

  return toH(h, node, {
    schema: settings.space === 'svg' ? svg : html,
    prefix: prefix == null ? (r || v || vd ? 'h-' : null) : prefix,
    key: 0,
    react: r,
    vue: v,
    vdom: vd,
    hyperscript: hyperscript(h)
  })
}

// Transform a hast node through a hyperscript interface to *anything*!
function toH(h, node, ctx) {
  var parentSchema = ctx.schema
  var schema = parentSchema
  var name = node.tagName
  var attributes = {}
  var nodes = []
  var index = -1
  var key
  var value

  if (parentSchema.space === 'html' && name.toLowerCase() === 'svg') {
    schema = svg
    ctx.schema = schema
  }

  for (key in node.properties) {
    addAttribute(attributes, key, node.properties[key], ctx, name)
  }

  if (ctx.vdom) {
    if (schema.space === 'html') {
      name = name.toUpperCase()
    } else {
      attributes.namespace = ns[schema.space]
    }
  }

  if (ctx.prefix) {
    ctx.key++
    attributes.key = ctx.prefix + ctx.key
  }

  if (node.children) {
    while (++index < node.children.length) {
      value = node.children[index]

      if (element(value)) {
        nodes.push(toH(h, value, ctx))
      } else if (text(value)) {
        nodes.push(value.value)
      }
    }
  }

  // Restore parent schema.
  ctx.schema = parentSchema

  // Ensure no React warnings are triggered for void elements having children
  // passed in.
  return nodes.length
    ? h.call(node, name, attributes, nodes)
    : h.call(node, name, attributes)
}

function addAttribute(props, prop, value, ctx, name) {
  var info = find(ctx.schema, prop)
  var subprop

  // Ignore nullish and `NaN` values.
  // Ignore `false` and falsey known booleans for hyperlike DSLs.
  if (
    value == null ||
    value !== value ||
    (value === false && (ctx.vue || ctx.vdom || ctx.hyperscript)) ||
    (!value && info.boolean && (ctx.vue || ctx.vdom || ctx.hyperscript))
  ) {
    return
  }

  if (value && typeof value === 'object' && 'length' in value) {
    // Accept `array`.
    // Most props are space-separated.
    value = (info.commaSeparated ? commas : spaces).stringify(value)
  }

  // Treat `true` and truthy known booleans.
  if (info.boolean && ctx.hyperscript) {
    value = ''
  }

  // VDOM, Vue, and React accept `style` as object.
  if (
    info.property === 'style' &&
    typeof value === 'string' &&
    (ctx.react || ctx.vue || ctx.vdom)
  ) {
    value = parseStyle(value, name)
  }

  if (ctx.vue) {
    if (info.property !== 'style') subprop = 'attrs'
  } else if (!info.mustUseProperty) {
    if (ctx.vdom) {
      if (info.property !== 'style') subprop = 'attributes'
    } else if (ctx.hyperscript) {
      subprop = 'attrs'
    }
  }

  if (subprop) {
    if (!props[subprop]) props[subprop] = {}
    props[subprop][info.attribute] = value
  } else if (info.space && ctx.react) {
    props[hastToReact[info.property] || info.property] = value
  } else {
    props[info.attribute] = value
  }
}

// Check if `h` is `react.createElement`.
function react(h) {
  var node = h && h('div')
  return Boolean(
    node && ('_owner' in node || '_store' in node) && node.key == null
  )
}

// Check if `h` is `hyperscript`.
function hyperscript(h) {
  return Boolean(h && h.context && h.cleanup)
}

// Check if `h` is `virtual-dom/h`.
function vdom(h) {
  return h && h('div').type === 'VirtualNode'
}

function vue(h) {
  var node = h && h('div')
  return Boolean(node && node.context && node.context._isVue)
}

function parseStyle(value, tagName) {
  var result = {}

  try {
    style(value, iterator)
  } catch (error) {
    error.message =
      tagName + '[style]' + error.message.slice('undefined'.length)
    throw error
  }

  return result

  function iterator(name, value) {
    if (name.slice(0, 4) === '-ms-') name = 'ms-' + name.slice(4)
    result[name.replace(/-([a-z])/g, styleReplacer)] = value
  }
}

function styleReplacer($0, $1) {
  return $1.toUpperCase()
}


/***/ }),

/***/ "./node_modules/hast-util-sanitize/index.js":
/*!**************************************************!*\
  !*** ./node_modules/hast-util-sanitize/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/hast-util-sanitize/lib/index.js")


/***/ }),

/***/ "./node_modules/hast-util-sanitize/lib/github.json":
/*!*********************************************************!*\
  !*** ./node_modules/hast-util-sanitize/lib/github.json ***!
  \*********************************************************/
/*! exports provided: strip, clobberPrefix, clobber, ancestors, protocols, tagNames, attributes, required, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"strip\":[\"script\"],\"clobberPrefix\":\"user-content-\",\"clobber\":[\"name\",\"id\"],\"ancestors\":{\"tbody\":[\"table\"],\"tfoot\":[\"table\"],\"thead\":[\"table\"],\"td\":[\"table\"],\"th\":[\"table\"],\"tr\":[\"table\"]},\"protocols\":{\"href\":[\"http\",\"https\",\"mailto\",\"xmpp\",\"irc\",\"ircs\"],\"cite\":[\"http\",\"https\"],\"src\":[\"http\",\"https\"],\"longDesc\":[\"http\",\"https\"]},\"tagNames\":[\"h1\",\"h2\",\"h3\",\"h4\",\"h5\",\"h6\",\"br\",\"b\",\"i\",\"strong\",\"em\",\"a\",\"pre\",\"code\",\"img\",\"tt\",\"div\",\"ins\",\"del\",\"sup\",\"sub\",\"p\",\"ol\",\"ul\",\"table\",\"thead\",\"tbody\",\"tfoot\",\"blockquote\",\"dl\",\"dt\",\"dd\",\"kbd\",\"q\",\"samp\",\"var\",\"hr\",\"ruby\",\"rt\",\"rp\",\"li\",\"tr\",\"td\",\"th\",\"s\",\"strike\",\"summary\",\"details\",\"caption\",\"figure\",\"figcaption\",\"abbr\",\"bdo\",\"cite\",\"dfn\",\"mark\",\"small\",\"span\",\"time\",\"wbr\",\"input\"],\"attributes\":{\"a\":[\"href\"],\"img\":[\"src\",\"longDesc\"],\"input\":[[\"type\",\"checkbox\"],[\"disabled\",true]],\"li\":[[\"className\",\"task-list-item\"]],\"div\":[\"itemScope\",\"itemType\"],\"blockquote\":[\"cite\"],\"del\":[\"cite\"],\"ins\":[\"cite\"],\"q\":[\"cite\"],\"*\":[\"abbr\",\"accept\",\"acceptCharset\",\"accessKey\",\"action\",\"align\",\"alt\",\"ariaDescribedBy\",\"ariaHidden\",\"ariaLabel\",\"ariaLabelledBy\",\"axis\",\"border\",\"cellPadding\",\"cellSpacing\",\"char\",\"charOff\",\"charSet\",\"checked\",\"clear\",\"cols\",\"colSpan\",\"color\",\"compact\",\"coords\",\"dateTime\",\"dir\",\"disabled\",\"encType\",\"htmlFor\",\"frame\",\"headers\",\"height\",\"hrefLang\",\"hSpace\",\"isMap\",\"id\",\"label\",\"lang\",\"maxLength\",\"media\",\"method\",\"multiple\",\"name\",\"noHref\",\"noShade\",\"noWrap\",\"open\",\"prompt\",\"readOnly\",\"rel\",\"rev\",\"rows\",\"rowSpan\",\"rules\",\"scope\",\"selected\",\"shape\",\"size\",\"span\",\"start\",\"summary\",\"tabIndex\",\"target\",\"title\",\"type\",\"useMap\",\"vAlign\",\"value\",\"vSpace\",\"width\",\"itemProp\"]},\"required\":{\"input\":{\"type\":\"checkbox\",\"disabled\":true}}}");

/***/ }),

/***/ "./node_modules/hast-util-sanitize/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/hast-util-sanitize/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var defaults = __webpack_require__(/*! ./github.json */ "./node_modules/hast-util-sanitize/lib/github.json")

module.exports = wrapper

var own = {}.hasOwnProperty
var push = [].push

var nodeSchema = {
  root: {children: all},
  doctype: handleDoctype,
  comment: handleComment,
  element: {
    tagName: handleTagName,
    properties: handleProperties,
    children: all
  },
  text: {value: handleValue},
  '*': {data: allow, position: allow}
}

// Sanitize `node`, according to `schema`.
function wrapper(node, schema) {
  var ctx = {type: 'root', children: []}
  var replace

  if (node && typeof node === 'object' && node.type) {
    replace = one(xtend(defaults, schema || {}), node, [])

    if (replace) {
      if ('length' in replace) {
        if (replace.length === 1) {
          ctx = replace[0]
        } else {
          ctx.children = replace
        }
      } else {
        ctx = replace
      }
    }
  }

  return ctx
}

// Sanitize `node`.
function one(schema, node, stack) {
  var type = node && node.type
  var replacement = {type: node.type}
  var replace
  var definition
  var allowed
  var result
  var key

  if (own.call(nodeSchema, type)) {
    definition = nodeSchema[type]

    if (typeof definition === 'function') {
      definition = definition(schema, node)
    }

    if (definition) {
      replace = true
      allowed = xtend(definition, nodeSchema['*'])

      for (key in allowed) {
        result = allowed[key](schema, node[key], node, stack)

        if (result === false) {
          replace = null
          // Set the non-safe value.
          replacement[key] = node[key]
        } else if (result != null) {
          replacement[key] = result
        }
      }
    }
  }

  if (replace) {
    return replacement
  }

  return replacement.children &&
    replacement.children.length &&
    schema.strip.indexOf(replacement.tagName) < 0
    ? replacement.children
    : null
}

// Sanitize `children`.
function all(schema, children, node, stack) {
  var results = []
  var index = -1
  var value

  if (children) {
    stack.push(node.tagName)

    while (++index < children.length) {
      value = one(schema, children[index], stack)

      if (value) {
        if ('length' in value) {
          push.apply(results, value)
        } else {
          results.push(value)
        }
      }
    }

    stack.pop()
  }

  return results
}

// Sanitize `properties`.
function handleProperties(schema, properties, node, stack) {
  var name = handleTagName(schema, node.tagName, node, stack)
  var reqs = schema.required || /* istanbul ignore next */ {}
  var props = properties || {}
  var allowed = xtend(
    toPropertyValueMap(schema.attributes['*']),
    toPropertyValueMap(
      own.call(schema.attributes, name) ? schema.attributes[name] : []
    )
  )
  var result = {}
  var definition
  var key
  var value

  for (key in props) {
    if (own.call(allowed, key)) {
      definition = allowed[key]
    } else if (data(key) && own.call(allowed, 'data*')) {
      definition = allowed['data*']
    } else {
      continue
    }

    value = props[key]
    value =
      value && typeof value === 'object' && 'length' in value
        ? handlePropertyValues(schema, value, key, definition)
        : handlePropertyValue(schema, value, key, definition)

    if (value != null) {
      result[key] = value
    }
  }

  if (own.call(reqs, name)) {
    for (key in reqs[name]) {
      if (!own.call(result, key)) {
        result[key] = reqs[name][key]
      }
    }
  }

  return result
}

// Sanitize a property value which is a list.
function handlePropertyValues(schema, values, prop, definition) {
  var result = []
  var index = -1
  var value

  while (++index < values.length) {
    value = handlePropertyValue(schema, values[index], prop, definition)

    if (value != null) {
      result.push(value)
    }
  }

  return result
}

// Sanitize a property value.
function handlePropertyValue(schema, value, prop, definition) {
  if (
    (typeof value === 'boolean' ||
      typeof value === 'number' ||
      typeof value === 'string') &&
    handleProtocol(schema, value, prop) &&
    (!definition.length || definition.indexOf(value) > -1)
  ) {
    return schema.clobber.indexOf(prop) < 0
      ? value
      : schema.clobberPrefix + value
  }
}

// Check whether `value` is a safe URL.
function handleProtocol(schema, value, prop) {
  var url = String(value)
  var colon = url.indexOf(':')
  var questionMark = url.indexOf('?')
  var numberSign = url.indexOf('#')
  var slash = url.indexOf('/')
  var protocols = own.call(schema.protocols, prop)
    ? schema.protocols[prop].concat()
    : []
  var index = -1

  if (
    !protocols.length ||
    colon < 0 ||
    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    (slash > -1 && colon > slash) ||
    (questionMark > -1 && colon > questionMark) ||
    (numberSign > -1 && colon > numberSign)
  ) {
    return true
  }

  while (++index < protocols.length) {
    if (
      colon === protocols[index].length &&
      url.slice(0, protocols[index].length) === protocols[index]
    ) {
      return true
    }
  }

  return false
}

// Always return a valid HTML5 doctype.
function handleDoctypeName() {
  return 'html'
}

// Sanitize `tagName`.
function handleTagName(schema, tagName, node, stack) {
  var name = typeof tagName === 'string' && tagName
  var index = -1

  if (!name || name === '*' || schema.tagNames.indexOf(name) < 0) {
    return false
  }

  // Some nodes can break out of their context if they don’t have a certain
  // ancestor.
  if (own.call(schema.ancestors, name)) {
    while (++index < schema.ancestors[name].length) {
      if (stack.indexOf(schema.ancestors[name][index]) > -1) {
        return name
      }
    }

    return false
  }

  return name
}

function handleDoctype(schema) {
  return schema.allowDoctypes ? {name: handleDoctypeName} : null
}

function handleComment(schema) {
  return schema.allowComments ? {value: handleCommentValue} : null
}

// See <https://html.spec.whatwg.org/multipage/parsing.html#serialising-html-fragments>
function handleCommentValue(schema, value) {
  var result = typeof value === 'string' ? value : ''
  var index = result.indexOf('-->')

  return index < 0 ? result : result.slice(0, index)
}

// Sanitize `value`.
function handleValue(schema, value) {
  return typeof value === 'string' ? value : ''
}

// Create a map from a list of props or a list of properties and values.
function toPropertyValueMap(values) {
  var result = {}
  var index = -1
  var value

  while (++index < values.length) {
    value = values[index]

    if (value && typeof value === 'object' && 'length' in value) {
      result[value[0]] = value.slice(1)
    } else {
      result[value] = []
    }
  }

  return result
}

// Allow `value`.
function allow(schema, value) {
  return value
}

// Check if `prop` is a data property.
function data(prop) {
  return prop.length > 4 && prop.slice(0, 4).toLowerCase() === 'data'
}


/***/ }),

/***/ "./node_modules/inline-style-parser/index.js":
/*!***************************************************!*\
  !*** ./node_modules/inline-style-parser/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// http://www.w3.org/TR/CSS21/grammar.html
// https://github.com/visionmedia/css-parse/pull/49#issuecomment-30088027
var COMMENT_REGEX = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;

var NEWLINE_REGEX = /\n/g;
var WHITESPACE_REGEX = /^\s*/;

// declaration
var PROPERTY_REGEX = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/;
var COLON_REGEX = /^:\s*/;
var VALUE_REGEX = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/;
var SEMICOLON_REGEX = /^[;\s]*/;

// https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/Trim#Polyfill
var TRIM_REGEX = /^\s+|\s+$/g;

// strings
var NEWLINE = '\n';
var FORWARD_SLASH = '/';
var ASTERISK = '*';
var EMPTY_STRING = '';

// types
var TYPE_COMMENT = 'comment';
var TYPE_DECLARATION = 'declaration';

/**
 * @param {String} style
 * @param {Object} [options]
 * @return {Object[]}
 * @throws {TypeError}
 * @throws {Error}
 */
module.exports = function(style, options) {
  if (typeof style !== 'string') {
    throw new TypeError('First argument must be a string');
  }

  if (!style) return [];

  options = options || {};

  /**
   * Positional.
   */
  var lineno = 1;
  var column = 1;

  /**
   * Update lineno and column based on `str`.
   *
   * @param {String} str
   */
  function updatePosition(str) {
    var lines = str.match(NEWLINE_REGEX);
    if (lines) lineno += lines.length;
    var i = str.lastIndexOf(NEWLINE);
    column = ~i ? str.length - i : column + str.length;
  }

  /**
   * Mark position and patch `node.position`.
   *
   * @return {Function}
   */
  function position() {
    var start = { line: lineno, column: column };
    return function(node) {
      node.position = new Position(start);
      whitespace();
      return node;
    };
  }

  /**
   * Store position information for a node.
   *
   * @constructor
   * @property {Object} start
   * @property {Object} end
   * @property {undefined|String} source
   */
  function Position(start) {
    this.start = start;
    this.end = { line: lineno, column: column };
    this.source = options.source;
  }

  /**
   * Non-enumerable source string.
   */
  Position.prototype.content = style;

  var errorsList = [];

  /**
   * Error `msg`.
   *
   * @param {String} msg
   * @throws {Error}
   */
  function error(msg) {
    var err = new Error(
      options.source + ':' + lineno + ':' + column + ': ' + msg
    );
    err.reason = msg;
    err.filename = options.source;
    err.line = lineno;
    err.column = column;
    err.source = style;

    if (options.silent) {
      errorsList.push(err);
    } else {
      throw err;
    }
  }

  /**
   * Match `re` and return captures.
   *
   * @param {RegExp} re
   * @return {undefined|Array}
   */
  function match(re) {
    var m = re.exec(style);
    if (!m) return;
    var str = m[0];
    updatePosition(str);
    style = style.slice(str.length);
    return m;
  }

  /**
   * Parse whitespace.
   */
  function whitespace() {
    match(WHITESPACE_REGEX);
  }

  /**
   * Parse comments.
   *
   * @param {Object[]} [rules]
   * @return {Object[]}
   */
  function comments(rules) {
    var c;
    rules = rules || [];
    while ((c = comment())) {
      if (c !== false) {
        rules.push(c);
      }
    }
    return rules;
  }

  /**
   * Parse comment.
   *
   * @return {Object}
   * @throws {Error}
   */
  function comment() {
    var pos = position();
    if (FORWARD_SLASH != style.charAt(0) || ASTERISK != style.charAt(1)) return;

    var i = 2;
    while (
      EMPTY_STRING != style.charAt(i) &&
      (ASTERISK != style.charAt(i) || FORWARD_SLASH != style.charAt(i + 1))
    ) {
      ++i;
    }
    i += 2;

    if (EMPTY_STRING === style.charAt(i - 1)) {
      return error('End of comment missing');
    }

    var str = style.slice(2, i - 2);
    column += 2;
    updatePosition(str);
    style = style.slice(i);
    column += 2;

    return pos({
      type: TYPE_COMMENT,
      comment: str
    });
  }

  /**
   * Parse declaration.
   *
   * @return {Object}
   * @throws {Error}
   */
  function declaration() {
    var pos = position();

    // prop
    var prop = match(PROPERTY_REGEX);
    if (!prop) return;
    comment();

    // :
    if (!match(COLON_REGEX)) return error("property missing ':'");

    // val
    var val = match(VALUE_REGEX);

    var ret = pos({
      type: TYPE_DECLARATION,
      property: trim(prop[0].replace(COMMENT_REGEX, EMPTY_STRING)),
      value: val
        ? trim(val[0].replace(COMMENT_REGEX, EMPTY_STRING))
        : EMPTY_STRING
    });

    // ;
    match(SEMICOLON_REGEX);

    return ret;
  }

  /**
   * Parse declarations.
   *
   * @return {Object[]}
   */
  function declarations() {
    var decls = [];

    comments(decls);

    // declarations
    var decl;
    while ((decl = declaration())) {
      if (decl !== false) {
        decls.push(decl);
        comments(decls);
      }
    }

    return decls;
  }

  whitespace();
  return declarations();
};

/**
 * Trim `str`.
 *
 * @param {String} str
 * @return {String}
 */
function trim(str) {
  return str ? str.replace(TRIM_REGEX, EMPTY_STRING) : EMPTY_STRING;
}


/***/ }),

/***/ "./node_modules/mdast-util-definitions/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-definitions/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js")

module.exports = getDefinitionFactory

var own = {}.hasOwnProperty

// Get a definition in `node` by `identifier`.
function getDefinitionFactory(node, options) {
  return getterFactory(gather(node, options))
}

// Gather all definitions in `node`
function gather(node) {
  var cache = {}

  if (!node || !node.type) {
    throw new Error('mdast-util-definitions expected node')
  }

  visit(node, 'definition', ondefinition)

  return cache

  function ondefinition(definition) {
    var id = normalise(definition.identifier)
    if (!own.call(cache, id)) {
      cache[id] = definition
    }
  }
}

// Factory to get a node from the given definition-cache.
function getterFactory(cache) {
  return getter

  // Get a node from the bound definition-cache.
  function getter(identifier) {
    var id = identifier && normalise(identifier)
    return id && own.call(cache, id) ? cache[id] : null
  }
}

function normalise(identifier) {
  return identifier.toUpperCase()
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/index.js":
/*!**************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = __webpack_require__(/*! ./lib */ "./node_modules/mdast-util-to-hast/lib/index.js")


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/all.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/all.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = all

var one = __webpack_require__(/*! ./one */ "./node_modules/mdast-util-to-hast/lib/one.js")

function all(h, parent) {
  var nodes = parent.children || []
  var length = nodes.length
  var values = []
  var index = -1
  var result
  var head

  while (++index < length) {
    result = one(h, nodes[index], parent)

    if (result) {
      if (index && nodes[index - 1].type === 'break') {
        if (result.value) {
          result.value = result.value.replace(/^\s+/, '')
        }

        head = result.children && result.children[0]

        if (head && head.value) {
          head.value = head.value.replace(/^\s+/, '')
        }
      }

      values = values.concat(result)
    }
  }

  return values
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/footer.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/footer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = generateFootnotes

var thematicBreak = __webpack_require__(/*! ./handlers/thematic-break */ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js")
var list = __webpack_require__(/*! ./handlers/list */ "./node_modules/mdast-util-to-hast/lib/handlers/list.js")
var wrap = __webpack_require__(/*! ./wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")

function generateFootnotes(h) {
  var footnoteById = h.footnoteById
  var footnoteOrder = h.footnoteOrder
  var length = footnoteOrder.length
  var index = -1
  var listItems = []
  var def
  var backReference
  var content
  var tail

  while (++index < length) {
    def = footnoteById[footnoteOrder[index].toUpperCase()]

    if (!def) {
      continue
    }

    content = def.children.concat()
    tail = content[content.length - 1]
    backReference = {
      type: 'link',
      url: '#fnref-' + def.identifier,
      data: {hProperties: {className: ['footnote-backref']}},
      children: [{type: 'text', value: '↩'}]
    }

    if (!tail || tail.type !== 'paragraph') {
      tail = {type: 'paragraph', children: []}
      content.push(tail)
    }

    tail.children.push(backReference)

    listItems.push({
      type: 'listItem',
      data: {hProperties: {id: 'fn-' + def.identifier}},
      children: content,
      position: def.position
    })
  }

  if (listItems.length === 0) {
    return null
  }

  return h(
    null,
    'div',
    {className: ['footnotes']},
    wrap(
      [
        thematicBreak(h),
        list(h, {type: 'list', ordered: true, children: listItems})
      ],
      true
    )
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = blockquote

var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function blockquote(h, node) {
  return h(node, 'blockquote', wrap(all(h, node), true))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/break.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/break.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = hardBreak

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function hardBreak(h, node) {
  return [h(node, 'br'), u('text', '\n')]
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/code.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/code.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = code

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function code(h, node) {
  var value = node.value ? node.value + '\n' : ''
  // To do: next major, use `node.lang` w/o regex, the splitting’s been going
  // on for years in remark now.
  var lang = node.lang && node.lang.match(/^[^ \t]+(?=[ \t]|$)/)
  var props = {}
  var code

  if (lang) {
    props.className = ['language-' + lang]
  }

  code = h(node, 'code', props, [u('text', value)])

  if (node.meta) {
    code.data = {meta: node.meta}
  }

  return h(node.position, 'pre', [code])
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/delete.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/delete.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strikethrough

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function strikethrough(h, node) {
  return h(node, 'del', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = emphasis

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function emphasis(h, node) {
  return h(node, 'em', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = footnoteReference

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function footnoteReference(h, node) {
  var footnoteOrder = h.footnoteOrder
  var identifier = String(node.identifier)

  if (footnoteOrder.indexOf(identifier) === -1) {
    footnoteOrder.push(identifier)
  }

  return h(node.position, 'sup', {id: 'fnref-' + identifier}, [
    h(node, 'a', {href: '#fn-' + identifier, className: ['footnote-ref']}, [
      u('text', node.label || identifier)
    ])
  ])
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/footnote.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/footnote.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = footnote

var footnoteReference = __webpack_require__(/*! ./footnote-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js")

function footnote(h, node) {
  var footnoteById = h.footnoteById
  var footnoteOrder = h.footnoteOrder
  var identifier = 1

  while (identifier in footnoteById) {
    identifier++
  }

  identifier = String(identifier)

  // No need to check if `identifier` exists in `footnoteOrder`, it’s guaranteed
  // to not exist because we just generated it.
  footnoteOrder.push(identifier)

  footnoteById[identifier] = {
    type: 'footnoteDefinition',
    identifier: identifier,
    children: [{type: 'paragraph', children: node.children}],
    position: node.position
  }

  return footnoteReference(h, {
    type: 'footnoteReference',
    identifier: identifier,
    position: node.position
  })
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/heading.js":
/*!*****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/heading.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = heading

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function heading(h, node) {
  return h(node, 'h' + node.depth, all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/html.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/html.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = html

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

// Return either a `raw` node in dangerous mode, otherwise nothing.
function html(h, node) {
  return h.dangerous ? h.augment(node, u('raw', node.value)) : null
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = imageReference

var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")
var revert = __webpack_require__(/*! ../revert */ "./node_modules/mdast-util-to-hast/lib/revert.js")

function imageReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {src: normalize(def.url || ''), alt: node.alt}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'img', props)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/image.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/image.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")

module.exports = image

function image(h, node) {
  var props = {src: normalize(node.url), alt: node.alt}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'img', props)
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  blockquote: __webpack_require__(/*! ./blockquote */ "./node_modules/mdast-util-to-hast/lib/handlers/blockquote.js"),
  break: __webpack_require__(/*! ./break */ "./node_modules/mdast-util-to-hast/lib/handlers/break.js"),
  code: __webpack_require__(/*! ./code */ "./node_modules/mdast-util-to-hast/lib/handlers/code.js"),
  delete: __webpack_require__(/*! ./delete */ "./node_modules/mdast-util-to-hast/lib/handlers/delete.js"),
  emphasis: __webpack_require__(/*! ./emphasis */ "./node_modules/mdast-util-to-hast/lib/handlers/emphasis.js"),
  footnoteReference: __webpack_require__(/*! ./footnote-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote-reference.js"),
  footnote: __webpack_require__(/*! ./footnote */ "./node_modules/mdast-util-to-hast/lib/handlers/footnote.js"),
  heading: __webpack_require__(/*! ./heading */ "./node_modules/mdast-util-to-hast/lib/handlers/heading.js"),
  html: __webpack_require__(/*! ./html */ "./node_modules/mdast-util-to-hast/lib/handlers/html.js"),
  imageReference: __webpack_require__(/*! ./image-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/image-reference.js"),
  image: __webpack_require__(/*! ./image */ "./node_modules/mdast-util-to-hast/lib/handlers/image.js"),
  inlineCode: __webpack_require__(/*! ./inline-code */ "./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js"),
  linkReference: __webpack_require__(/*! ./link-reference */ "./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js"),
  link: __webpack_require__(/*! ./link */ "./node_modules/mdast-util-to-hast/lib/handlers/link.js"),
  listItem: __webpack_require__(/*! ./list-item */ "./node_modules/mdast-util-to-hast/lib/handlers/list-item.js"),
  list: __webpack_require__(/*! ./list */ "./node_modules/mdast-util-to-hast/lib/handlers/list.js"),
  paragraph: __webpack_require__(/*! ./paragraph */ "./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js"),
  root: __webpack_require__(/*! ./root */ "./node_modules/mdast-util-to-hast/lib/handlers/root.js"),
  strong: __webpack_require__(/*! ./strong */ "./node_modules/mdast-util-to-hast/lib/handlers/strong.js"),
  table: __webpack_require__(/*! ./table */ "./node_modules/mdast-util-to-hast/lib/handlers/table.js"),
  text: __webpack_require__(/*! ./text */ "./node_modules/mdast-util-to-hast/lib/handlers/text.js"),
  thematicBreak: __webpack_require__(/*! ./thematic-break */ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js"),
  toml: ignore,
  yaml: ignore,
  definition: ignore,
  footnoteDefinition: ignore
}

// Return nothing for nodes that are ignored.
function ignore() {
  return null
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/inline-code.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = inlineCode

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function inlineCode(h, node) {
  var value = node.value.replace(/\r?\n|\r/g, ' ')
  return h(node, 'code', [u('text', value)])
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/link-reference.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = linkReference

var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")
var revert = __webpack_require__(/*! ../revert */ "./node_modules/mdast-util-to-hast/lib/revert.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function linkReference(h, node) {
  var def = h.definition(node.identifier)
  var props

  if (!def) {
    return revert(h, node)
  }

  props = {href: normalize(def.url || '')}

  if (def.title !== null && def.title !== undefined) {
    props.title = def.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/link.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! mdurl/encode */ "./node_modules/mdurl/encode.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

module.exports = link

function link(h, node) {
  var props = {href: normalize(node.url)}

  if (node.title !== null && node.title !== undefined) {
    props.title = node.title
  }

  return h(node, 'a', props, all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/list-item.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/list-item.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = listItem

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function listItem(h, node, parent) {
  var result = all(h, node)
  var head = result[0]
  var loose = parent ? listLoose(parent) : listItemLoose(node)
  var props = {}
  var wrapped = []
  var length
  var index
  var child

  if (typeof node.checked === 'boolean') {
    if (!head || head.tagName !== 'p') {
      head = h(null, 'p', [])
      result.unshift(head)
    }

    if (head.children.length > 0) {
      head.children.unshift(u('text', ' '))
    }

    head.children.unshift(
      h(null, 'input', {
        type: 'checkbox',
        checked: node.checked,
        disabled: true
      })
    )

    // According to github-markdown-css, this class hides bullet.
    // See: <https://github.com/sindresorhus/github-markdown-css>.
    props.className = ['task-list-item']
  }

  length = result.length
  index = -1

  while (++index < length) {
    child = result[index]

    // Add eols before nodes, except if this is a loose, first paragraph.
    if (loose || index !== 0 || child.tagName !== 'p') {
      wrapped.push(u('text', '\n'))
    }

    if (child.tagName === 'p' && !loose) {
      wrapped = wrapped.concat(child.children)
    } else {
      wrapped.push(child)
    }
  }

  // Add a final eol.
  if (length && (loose || child.tagName !== 'p')) {
    wrapped.push(u('text', '\n'))
  }

  return h(node, 'li', props, wrapped)
}

function listLoose(node) {
  var loose = node.spread
  var children = node.children
  var length = children.length
  var index = -1

  while (!loose && ++index < length) {
    loose = listItemLoose(children[index])
  }

  return loose
}

function listItemLoose(node) {
  var spread = node.spread

  return spread === undefined || spread === null
    ? node.children.length > 1
    : spread
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/list.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/list.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = list

var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function list(h, node) {
  var props = {}
  var name = node.ordered ? 'ol' : 'ul'
  var items
  var index = -1
  var length

  if (typeof node.start === 'number' && node.start !== 1) {
    props.start = node.start
  }

  items = all(h, node)
  length = items.length

  // Like GitHub, add a class for custom styling.
  while (++index < length) {
    if (
      items[index].properties.className &&
      items[index].properties.className.indexOf('task-list-item') !== -1
    ) {
      props.className = ['contains-task-list']
      break
    }
  }

  return h(node, name, props, wrap(items, true))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/paragraph.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = paragraph

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function paragraph(h, node) {
  return h(node, 'p', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/root.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/root.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = root

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function root(h, node) {
  return h.augment(node, u('root', wrap(all(h, node))))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/strong.js":
/*!****************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/strong.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = strong

var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function strong(h, node) {
  return h(node, 'strong', all(h, node))
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/table.js":
/*!***************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/table.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = table

var position = __webpack_require__(/*! unist-util-position */ "./node_modules/unist-util-position/index.js")
var wrap = __webpack_require__(/*! ../wrap */ "./node_modules/mdast-util-to-hast/lib/wrap.js")
var all = __webpack_require__(/*! ../all */ "./node_modules/mdast-util-to-hast/lib/all.js")

function table(h, node) {
  var rows = node.children
  var index = rows.length
  var align = node.align || []
  var alignLength = align.length
  var result = []
  var pos
  var row
  var out
  var name
  var cell

  while (index--) {
    row = rows[index].children
    name = index === 0 ? 'th' : 'td'
    pos = alignLength || row.length
    out = []

    while (pos--) {
      cell = row[pos]
      out[pos] = h(cell, name, {align: align[pos]}, cell ? all(h, cell) : [])
    }

    result[index] = h(rows[index], 'tr', wrap(out, true))
  }

  return h(
    node,
    'table',
    wrap(
      [h(result[0].position, 'thead', wrap([result[0]], true))].concat(
        result[1]
          ? h(
              {
                start: position.start(result[1]),
                end: position.end(result[result.length - 1])
              },
              'tbody',
              wrap(result.slice(1), true)
            )
          : []
      ),
      true
    )
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/text.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/text.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = text

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

function text(h, node) {
  return h.augment(
    node,
    u('text', String(node.value).replace(/[ \t]*(\r?\n|\r)[ \t]*/g, '$1'))
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/handlers/thematic-break.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = thematicBreak

function thematicBreak(h, node) {
  return h(node, 'hr')
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = toHast

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var visit = __webpack_require__(/*! unist-util-visit */ "./node_modules/unist-util-visit/index.js")
var position = __webpack_require__(/*! unist-util-position */ "./node_modules/unist-util-position/index.js")
var generated = __webpack_require__(/*! unist-util-generated */ "./node_modules/unist-util-generated/index.js")
var definitions = __webpack_require__(/*! mdast-util-definitions */ "./node_modules/mdast-util-definitions/index.js")
var one = __webpack_require__(/*! ./one */ "./node_modules/mdast-util-to-hast/lib/one.js")
var footer = __webpack_require__(/*! ./footer */ "./node_modules/mdast-util-to-hast/lib/footer.js")
var handlers = __webpack_require__(/*! ./handlers */ "./node_modules/mdast-util-to-hast/lib/handlers/index.js")

var own = {}.hasOwnProperty

var deprecationWarningIssued = false

// Factory to transform.
function factory(tree, options) {
  var settings = options || {}

  // Issue a warning if the deprecated tag 'allowDangerousHTML' is used
  if (settings.allowDangerousHTML !== undefined && !deprecationWarningIssued) {
    deprecationWarningIssued = true
    console.warn(
      'mdast-util-to-hast: deprecation: `allowDangerousHTML` is nonstandard, use `allowDangerousHtml` instead'
    )
  }

  var dangerous = settings.allowDangerousHtml || settings.allowDangerousHTML
  var footnoteById = {}

  h.dangerous = dangerous
  h.definition = definitions(tree)
  h.footnoteById = footnoteById
  h.footnoteOrder = []
  h.augment = augment
  h.handlers = Object.assign({}, handlers, settings.handlers)
  h.unknownHandler = settings.unknownHandler
  h.passThrough = settings.passThrough

  visit(tree, 'footnoteDefinition', onfootnotedefinition)

  return h

  // Finalise the created `right`, a hast node, from `left`, an mdast node.
  function augment(left, right) {
    var data
    var ctx

    // Handle `data.hName`, `data.hProperties, `data.hChildren`.
    if (left && left.data) {
      data = left.data

      if (data.hName) {
        if (right.type !== 'element') {
          right = {
            type: 'element',
            tagName: '',
            properties: {},
            children: []
          }
        }

        right.tagName = data.hName
      }

      if (right.type === 'element' && data.hProperties) {
        right.properties = Object.assign({}, right.properties, data.hProperties)
      }

      if (right.children && data.hChildren) {
        right.children = data.hChildren
      }
    }

    ctx = left && left.position ? left : {position: left}

    if (!generated(ctx)) {
      right.position = {
        start: position.start(ctx),
        end: position.end(ctx)
      }
    }

    return right
  }

  // Create an element for `node`.
  function h(node, tagName, props, children) {
    if (
      (children === undefined || children === null) &&
      typeof props === 'object' &&
      'length' in props
    ) {
      children = props
      props = {}
    }

    return augment(node, {
      type: 'element',
      tagName: tagName,
      properties: props || {},
      children: children || []
    })
  }

  function onfootnotedefinition(definition) {
    var id = String(definition.identifier).toUpperCase()

    // Mimick CM behavior of link definitions.
    // See: <https://github.com/syntax-tree/mdast-util-definitions/blob/8290999/index.js#L26>.
    if (!own.call(footnoteById, id)) {
      footnoteById[id] = definition
    }
  }
}

// Transform `tree`, which is an mdast node, to a hast node.
function toHast(tree, options) {
  var h = factory(tree, options)
  var node = one(h, tree)
  var foot = footer(h)

  if (foot) {
    node.children = node.children.concat(u('text', '\n'), foot)
  }

  return node
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/one.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/one.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = one

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ./all */ "./node_modules/mdast-util-to-hast/lib/all.js")

var own = {}.hasOwnProperty

// Transform an unknown node.
function unknown(h, node) {
  if (text(node)) {
    return h.augment(node, u('text', node.value))
  }

  return h(node, 'div', all(h, node))
}

// Visit a node.
function one(h, node, parent) {
  var type = node && node.type
  var fn

  // Fail on non-nodes.
  if (!type) {
    throw new Error('Expected node, got `' + node + '`')
  }

  if (own.call(h.handlers, type)) {
    fn = h.handlers[type]
  } else if (h.passThrough && h.passThrough.indexOf(type) > -1) {
    fn = returnNode
  } else {
    fn = h.unknownHandler
  }

  return (typeof fn === 'function' ? fn : unknown)(h, node, parent)
}

// Check if the node should be renderered as a text node.
function text(node) {
  var data = node.data || {}

  if (
    own.call(data, 'hName') ||
    own.call(data, 'hProperties') ||
    own.call(data, 'hChildren')
  ) {
    return false
  }

  return 'value' in node
}

function returnNode(h, node) {
  var clone

  if (node.children) {
    clone = Object.assign({}, node)
    clone.children = all(h, node)
    return clone
  }

  return node
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/revert.js":
/*!*******************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/revert.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = revert

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")
var all = __webpack_require__(/*! ./all */ "./node_modules/mdast-util-to-hast/lib/all.js")

// Return the content of a reference without definition as Markdown.
function revert(h, node) {
  var subtype = node.referenceType
  var suffix = ']'
  var contents
  var head
  var tail

  if (subtype === 'collapsed') {
    suffix += '[]'
  } else if (subtype === 'full') {
    suffix += '[' + (node.label || node.identifier) + ']'
  }

  if (node.type === 'imageReference') {
    return u('text', '![' + node.alt + suffix)
  }

  contents = all(h, node)
  head = contents[0]

  if (head && head.type === 'text') {
    head.value = '[' + head.value
  } else {
    contents.unshift(u('text', '['))
  }

  tail = contents[contents.length - 1]

  if (tail && tail.type === 'text') {
    tail.value += suffix
  } else {
    contents.push(u('text', suffix))
  }

  return contents
}


/***/ }),

/***/ "./node_modules/mdast-util-to-hast/lib/wrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/mdast-util-to-hast/lib/wrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = wrap

var u = __webpack_require__(/*! unist-builder */ "./node_modules/unist-builder/index.js")

// Wrap `nodes` with line feeds between each entry.
// Optionally adds line feeds at the start and end.
function wrap(nodes, loose) {
  var result = []
  var index = -1
  var length = nodes.length

  if (loose) {
    result.push(u('text', '\n'))
  }

  while (++index < length) {
    if (index) {
      result.push(u('text', '\n'))
    }

    result.push(nodes[index])
  }

  if (loose && nodes.length > 0) {
    result.push(u('text', '\n'))
  }

  return result
}


/***/ }),

/***/ "./node_modules/mdurl/encode.js":
/*!**************************************!*\
  !*** ./node_modules/mdurl/encode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";




var encodeCache = {};


// Create a lookup array where anything but characters in `chars` string
// and alphanumeric chars is percent-encoded.
//
function getEncodeCache(exclude) {
  var i, ch, cache = encodeCache[exclude];
  if (cache) { return cache; }

  cache = encodeCache[exclude] = [];

  for (i = 0; i < 128; i++) {
    ch = String.fromCharCode(i);

    if (/^[0-9a-z]$/i.test(ch)) {
      // always allow unencoded alphanumeric characters
      cache.push(ch);
    } else {
      cache.push('%' + ('0' + i.toString(16).toUpperCase()).slice(-2));
    }
  }

  for (i = 0; i < exclude.length; i++) {
    cache[exclude.charCodeAt(i)] = exclude[i];
  }

  return cache;
}


// Encode unsafe characters with percent-encoding, skipping already
// encoded sequences.
//
//  - string       - string to encode
//  - exclude      - list of characters to ignore (in addition to a-zA-Z0-9)
//  - keepEscaped  - don't encode '%' in a correct escape sequence (default: true)
//
function encode(string, exclude, keepEscaped) {
  var i, l, code, nextCode, cache,
      result = '';

  if (typeof exclude !== 'string') {
    // encode(string, keepEscaped)
    keepEscaped  = exclude;
    exclude = encode.defaultChars;
  }

  if (typeof keepEscaped === 'undefined') {
    keepEscaped = true;
  }

  cache = getEncodeCache(exclude);

  for (i = 0, l = string.length; i < l; i++) {
    code = string.charCodeAt(i);

    if (keepEscaped && code === 0x25 /* % */ && i + 2 < l) {
      if (/^[0-9a-f]{2}$/i.test(string.slice(i + 1, i + 3))) {
        result += string.slice(i, i + 3);
        i += 2;
        continue;
      }
    }

    if (code < 128) {
      result += cache[code];
      continue;
    }

    if (code >= 0xD800 && code <= 0xDFFF) {
      if (code >= 0xD800 && code <= 0xDBFF && i + 1 < l) {
        nextCode = string.charCodeAt(i + 1);
        if (nextCode >= 0xDC00 && nextCode <= 0xDFFF) {
          result += encodeURIComponent(string[i] + string[i + 1]);
          i++;
          continue;
        }
      }
      result += '%EF%BF%BD';
      continue;
    }

    result += encodeURIComponent(string[i]);
  }

  return result;
}

encode.defaultChars   = ";/?:@&=+$,-_.!~*'()#";
encode.componentChars = "-_.!~*'()";


module.exports = encode;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/MarkdownComponents.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./styles/MarkdownComponents.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n.MarkdownComponents_header__2NCp3 {\n  font-size: 1em;\n}\n.MarkdownComponents_header__2NCp3::before {\n  content: \"◆\";\n  padding-right: 1em;\n}\n\n.MarkdownComponents_subHeader__NzsuZ {\n  font-size: 1em;\n}\n.MarkdownComponents_subHeader__NzsuZ::before {\n  content: \"◎\";\n  padding-right: 1em;\n}", "",{"version":3,"sources":["webpack://MarkdownComponents.module.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,cAAA;AAEF;AADE;EACE,YAAA;EACA,kBAAA;AAGJ;;AAAA;EACE,cAAA;AAGF;AAFE;EACE,YAAA;EACA,kBAAA;AAIJ","sourcesContent":[".header {\n  font-size: 1em;\n  &::before {\n    content: \"◆\";\n    padding-right: 1em;\n  }\n}\n.subHeader {\n  font-size: 1em;\n  &::before {\n    content: \"◎\";\n    padding-right: 1em;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"header": "MarkdownComponents_header__2NCp3",
	"subHeader": "MarkdownComponents_subHeader__NzsuZ"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/property-information/find.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/find.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! ./normalize */ "./node_modules/property-information/normalize.js")
var DefinedInfo = __webpack_require__(/*! ./lib/util/defined-info */ "./node_modules/property-information/lib/util/defined-info.js")
var Info = __webpack_require__(/*! ./lib/util/info */ "./node_modules/property-information/lib/util/info.js")

var data = 'data'

module.exports = find

var valid = /^data[-\w.:]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

function find(schema, value) {
  var normal = normalize(value)
  var prop = value
  var Type = Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = DefinedInfo
  }

  return new Type(prop, value)
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return data + value.charAt(0).toUpperCase() + value.slice(1)
}

function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return data + value
}

function kebab($0) {
  return '-' + $0.toLowerCase()
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/hast-to-react.json":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/hast-to-react.json ***!
  \**************************************************************/
/*! exports provided: classId, dataType, itemId, strokeDashArray, strokeDashOffset, strokeLineCap, strokeLineJoin, strokeMiterLimit, typeOf, xLinkActuate, xLinkArcRole, xLinkHref, xLinkRole, xLinkShow, xLinkTitle, xLinkType, xmlnsXLink, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"classId\":\"classID\",\"dataType\":\"datatype\",\"itemId\":\"itemID\",\"strokeDashArray\":\"strokeDasharray\",\"strokeDashOffset\":\"strokeDashoffset\",\"strokeLineCap\":\"strokeLinecap\",\"strokeLineJoin\":\"strokeLinejoin\",\"strokeMiterLimit\":\"strokeMiterlimit\",\"typeOf\":\"typeof\",\"xLinkActuate\":\"xlinkActuate\",\"xLinkArcRole\":\"xlinkArcrole\",\"xLinkHref\":\"xlinkHref\",\"xLinkRole\":\"xlinkRole\",\"xLinkShow\":\"xlinkShow\",\"xLinkTitle\":\"xlinkTitle\",\"xLinkType\":\"xlinkType\",\"xmlnsXLink\":\"xmlnsXlink\"}");

/***/ }),

/***/ "./node_modules/property-information/html.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/html.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "./node_modules/property-information/lib/aria.js")
var html = __webpack_require__(/*! ./lib/html */ "./node_modules/property-information/lib/html.js")

module.exports = merge([xml, xlink, xmlns, aria, html])


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/aria.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated

module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
})

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/html.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

var boolean = types.boolean
var overloadedBoolean = types.overloadedBoolean
var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated

module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/svg.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/svg.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseSensitiveTransform = __webpack_require__(/*! ./util/case-sensitive-transform */ "./node_modules/property-information/lib/util/case-sensitive-transform.js")

var boolean = types.boolean
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated
var commaOrSpaceSeparated = types.commaOrSpaceSeparated

module.exports = create({
  space: 'svg',
  attributes: {
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    arabicForm: 'arabic-form',
    baselineShift: 'baseline-shift',
    capHeight: 'cap-height',
    className: 'class',
    clipPath: 'clip-path',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    crossOrigin: 'crossorigin',
    dataType: 'datatype',
    dominantBaseline: 'dominant-baseline',
    enableBackground: 'enable-background',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    hrefLang: 'hreflang',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    horizOriginY: 'horiz-origin-y',
    imageRendering: 'image-rendering',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    navDown: 'nav-down',
    navDownLeft: 'nav-down-left',
    navDownRight: 'nav-down-right',
    navLeft: 'nav-left',
    navNext: 'nav-next',
    navPrev: 'nav-prev',
    navRight: 'nav-right',
    navUp: 'nav-up',
    navUpLeft: 'nav-up-left',
    navUpRight: 'nav-up-right',
    onAbort: 'onabort',
    onActivate: 'onactivate',
    onAfterPrint: 'onafterprint',
    onBeforePrint: 'onbeforeprint',
    onBegin: 'onbegin',
    onCancel: 'oncancel',
    onCanPlay: 'oncanplay',
    onCanPlayThrough: 'oncanplaythrough',
    onChange: 'onchange',
    onClick: 'onclick',
    onClose: 'onclose',
    onCopy: 'oncopy',
    onCueChange: 'oncuechange',
    onCut: 'oncut',
    onDblClick: 'ondblclick',
    onDrag: 'ondrag',
    onDragEnd: 'ondragend',
    onDragEnter: 'ondragenter',
    onDragExit: 'ondragexit',
    onDragLeave: 'ondragleave',
    onDragOver: 'ondragover',
    onDragStart: 'ondragstart',
    onDrop: 'ondrop',
    onDurationChange: 'ondurationchange',
    onEmptied: 'onemptied',
    onEnd: 'onend',
    onEnded: 'onended',
    onError: 'onerror',
    onFocus: 'onfocus',
    onFocusIn: 'onfocusin',
    onFocusOut: 'onfocusout',
    onHashChange: 'onhashchange',
    onInput: 'oninput',
    onInvalid: 'oninvalid',
    onKeyDown: 'onkeydown',
    onKeyPress: 'onkeypress',
    onKeyUp: 'onkeyup',
    onLoad: 'onload',
    onLoadedData: 'onloadeddata',
    onLoadedMetadata: 'onloadedmetadata',
    onLoadStart: 'onloadstart',
    onMessage: 'onmessage',
    onMouseDown: 'onmousedown',
    onMouseEnter: 'onmouseenter',
    onMouseLeave: 'onmouseleave',
    onMouseMove: 'onmousemove',
    onMouseOut: 'onmouseout',
    onMouseOver: 'onmouseover',
    onMouseUp: 'onmouseup',
    onMouseWheel: 'onmousewheel',
    onOffline: 'onoffline',
    onOnline: 'ononline',
    onPageHide: 'onpagehide',
    onPageShow: 'onpageshow',
    onPaste: 'onpaste',
    onPause: 'onpause',
    onPlay: 'onplay',
    onPlaying: 'onplaying',
    onPopState: 'onpopstate',
    onProgress: 'onprogress',
    onRateChange: 'onratechange',
    onRepeat: 'onrepeat',
    onReset: 'onreset',
    onResize: 'onresize',
    onScroll: 'onscroll',
    onSeeked: 'onseeked',
    onSeeking: 'onseeking',
    onSelect: 'onselect',
    onShow: 'onshow',
    onStalled: 'onstalled',
    onStorage: 'onstorage',
    onSubmit: 'onsubmit',
    onSuspend: 'onsuspend',
    onTimeUpdate: 'ontimeupdate',
    onToggle: 'ontoggle',
    onUnload: 'onunload',
    onVolumeChange: 'onvolumechange',
    onWaiting: 'onwaiting',
    onZoom: 'onzoom',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    panose1: 'panose-1',
    pointerEvents: 'pointer-events',
    referrerPolicy: 'referrerpolicy',
    renderingIntent: 'rendering-intent',
    shapeRendering: 'shape-rendering',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDashArray: 'stroke-dasharray',
    strokeDashOffset: 'stroke-dashoffset',
    strokeLineCap: 'stroke-linecap',
    strokeLineJoin: 'stroke-linejoin',
    strokeMiterLimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    tabIndex: 'tabindex',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textRendering: 'text-rendering',
    typeOf: 'typeof',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xHeight: 'x-height',
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: 'playbackorder',
    timelineBegin: 'timelinebegin'
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null, // SEMI_COLON_SEPARATED
    keySplines: null, // SEMI_COLON_SEPARATED
    keyTimes: null, // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var caseSensitiveTransform = __webpack_require__(/*! ./case-sensitive-transform */ "./node_modules/property-information/lib/util/case-sensitive-transform.js")

module.exports = caseInsensitiveTransform

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = caseSensitiveTransform

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/create.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var normalize = __webpack_require__(/*! ../../normalize */ "./node_modules/property-information/normalize.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")
var DefinedInfo = __webpack_require__(/*! ./defined-info */ "./node_modules/property-information/lib/util/defined-info.js")

module.exports = create

function create(definition) {
  var space = definition.space
  var mustUseProperty = definition.mustUseProperty || []
  var attributes = definition.attributes || {}
  var props = definition.properties
  var transform = definition.transform
  var property = {}
  var normal = {}
  var prop
  var info

  for (prop in props) {
    info = new DefinedInfo(
      prop,
      transform(attributes, prop),
      props[prop],
      space
    )

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true
    }

    property[prop] = info

    normal[normalize(prop)] = prop
    normal[normalize(info.attribute)] = prop
  }

  return new Schema(property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/*!********************************************************************!*\
  !*** ./node_modules/property-information/lib/util/defined-info.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Info = __webpack_require__(/*! ./info */ "./node_modules/property-information/lib/util/info.js")
var types = __webpack_require__(/*! ./types */ "./node_modules/property-information/lib/util/types.js")

module.exports = DefinedInfo

DefinedInfo.prototype = new Info()
DefinedInfo.prototype.defined = true

var checks = [
  'boolean',
  'booleanish',
  'overloadedBoolean',
  'number',
  'commaSeparated',
  'spaceSeparated',
  'commaOrSpaceSeparated'
]
var checksLength = checks.length

function DefinedInfo(property, attribute, mask, space) {
  var index = -1
  var check

  mark(this, 'space', space)

  Info.call(this, property, attribute)

  while (++index < checksLength) {
    check = checks[index]
    mark(this, check, (mask & types[check]) === types[check])
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/util/info.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Info

var proto = Info.prototype

proto.space = null
proto.attribute = null
proto.property = null
proto.boolean = false
proto.booleanish = false
proto.overloadedBoolean = false
proto.number = false
proto.commaSeparated = false
proto.spaceSeparated = false
proto.commaOrSpaceSeparated = false
proto.mustUseProperty = false
proto.defined = false

function Info(property, attribute) {
  this.property = property
  this.attribute = attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/merge.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")

module.exports = merge

function merge(definitions) {
  var length = definitions.length
  var property = []
  var normal = []
  var index = -1
  var info
  var space

  while (++index < length) {
    info = definitions[index]
    property.push(info.property)
    normal.push(info.normal)
    space = info.space
  }

  return new Schema(
    xtend.apply(null, property),
    xtend.apply(null, normal),
    space
  )
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/schema.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Schema

var proto = Schema.prototype

proto.space = null
proto.normal = {}
proto.property = {}

function Schema(property, normal, space) {
  this.property = property
  this.normal = normal

  if (space) {
    this.space = space
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/types.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var powers = 0

exports.boolean = increment()
exports.booleanish = increment()
exports.overloadedBoolean = increment()
exports.number = increment()
exports.spaceSeparated = increment()
exports.commaSeparated = increment()
exports.commaOrSpaceSeparated = increment()

function increment() {
  return Math.pow(2, ++powers)
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xlink.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/xml.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
})

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xmlns.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/normalize.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/normalize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = normalize

function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/svg.js":
/*!**************************************************!*\
  !*** ./node_modules/property-information/svg.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "./node_modules/property-information/lib/aria.js")
var svg = __webpack_require__(/*! ./lib/svg */ "./node_modules/property-information/lib/svg.js")

module.exports = merge([xml, xlink, xmlns, aria, svg])


/***/ }),

/***/ "./node_modules/remark-react/index.js":
/*!********************************************!*\
  !*** ./node_modules/remark-react/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = react

var toHast = __webpack_require__(/*! mdast-util-to-hast */ "./node_modules/mdast-util-to-hast/index.js")
var sanitize = __webpack_require__(/*! hast-util-sanitize */ "./node_modules/hast-util-sanitize/index.js")
var toH = __webpack_require__(/*! hast-to-hyperscript */ "./node_modules/hast-to-hyperscript/index.js")
var tableCellStyle = __webpack_require__(/*! @mapbox/hast-util-table-cell-style */ "./node_modules/@mapbox/hast-util-table-cell-style/index.js")

var globalReact
var globalCreateElement
var globalFragment

/* istanbul ignore next - Hard to test */
try {
  globalReact = __webpack_require__(/*! react */ "./node_modules/react/index.js")
  globalCreateElement = globalReact.createElement
  globalFragment = globalReact.Fragment
} catch (_) {}

var own = {}.hasOwnProperty

var tableElements = ['table', 'thead', 'tbody', 'tfoot', 'tr']

function react(options) {
  var settings = options || {}
  var createElement = settings.createElement || globalCreateElement
  var Fragment = settings.fragment || globalFragment
  var clean = settings.sanitize !== false
  var scheme =
    clean && typeof settings.sanitize !== 'boolean' ? settings.sanitize : null
  var toHastOptions = settings.toHast || {}
  var components = settings.remarkReactComponents || {}

  this.Compiler = compile

  // Wrapper around `createElement` to pass components in.
  function h(name, props, children) {
    // Currently, React issues a warning for *any* white space in tables.
    // So we remove the pretty lines for now.
    // See: <https://github.com/facebook/react/pull/7081>.
    // See: <https://github.com/facebook/react/pull/7515>.
    // See: <https://github.com/remarkjs/remark-react/issues/64>.
    /* istanbul ignore next - still works but need to publish `remark-gfm`
     * first. */
    if (children && tableElements.indexOf(name) !== -1) {
      children = children.filter(function (child) {
        return child !== '\n'
      })
    }

    return createElement(
      own.call(components, name) ? components[name] : name,
      props,
      children
    )
  }

  // Compile mdast to React.
  function compile(node) {
    var tree = toHast(node, toHastOptions)
    var root

    if (clean) {
      tree = sanitize(tree, scheme)
    }

    root = toH(h, tableCellStyle(tree), settings.prefix)

    // If this compiled to a `<div>`, but fragment are possible, use those.
    if (root.type === 'div' && Fragment) {
      root = createElement(Fragment, {}, root.props.children)
    }

    return root
  }
}


/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/space-separated-tokens/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.parse = parse
exports.stringify = stringify

var empty = ''
var space = ' '
var whiteSpace = /[ \t\n\r\f]+/g

function parse(value) {
  var input = String(value || empty).trim()
  return input === empty ? [] : input.split(whiteSpace)
}

function stringify(values) {
  return values.join(space).trim()
}


/***/ }),

/***/ "./node_modules/style-to-object/index.js":
/*!***********************************************!*\
  !*** ./node_modules/style-to-object/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(/*! inline-style-parser */ "./node_modules/inline-style-parser/index.js");

/**
 * Parses inline style to object.
 *
 * @example
 * // returns { 'line-height': '42' }
 * StyleToObject('line-height: 42;');
 *
 * @param  {String}      style      - The inline style.
 * @param  {Function}    [iterator] - The iterator function.
 * @return {null|Object}
 */
function StyleToObject(style, iterator) {
  var output = null;
  if (!style || typeof style !== 'string') {
    return output;
  }

  var declaration;
  var declarations = parse(style);
  var hasIterator = typeof iterator === 'function';
  var property;
  var value;

  for (var i = 0, len = declarations.length; i < len; i++) {
    declaration = declarations[i];
    property = declaration.property;
    value = declaration.value;

    if (hasIterator) {
      iterator(property, value, declaration);
    } else if (value) {
      output || (output = {});
      output[property] = value;
    }
  }

  return output;
}

module.exports = StyleToObject;


/***/ }),

/***/ "./node_modules/unist-builder/index.js":
/*!*********************************************!*\
  !*** ./node_modules/unist-builder/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = u

function u(type, props, value) {
  var node

  if (
    (value === null || value === undefined) &&
    (typeof props !== 'object' || Array.isArray(props))
  ) {
    value = props
    props = {}
  }

  node = Object.assign({type: String(type)}, props)

  if (Array.isArray(value)) {
    node.children = value
  } else if (value !== null && value !== undefined) {
    node.value = String(value)
  }

  return node
}


/***/ }),

/***/ "./node_modules/unist-util-generated/index.js":
/*!****************************************************!*\
  !*** ./node_modules/unist-util-generated/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = generated

function generated(node) {
  return (
    !node ||
    !node.position ||
    !node.position.start ||
    !node.position.start.line ||
    !node.position.start.column ||
    !node.position.end ||
    !node.position.end.line ||
    !node.position.end.column
  )
}


/***/ }),

/***/ "./node_modules/unist-util-is/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/unist-util-is/convert.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = convert

function convert(test) {
  if (test == null) {
    return ok
  }

  if (typeof test === 'string') {
    return typeFactory(test)
  }

  if (typeof test === 'object') {
    return 'length' in test ? anyFactory(test) : allFactory(test)
  }

  if (typeof test === 'function') {
    return test
  }

  throw new Error('Expected function, string, or object as test')
}

// Utility assert each property in `test` is represented in `node`, and each
// values are strictly equal.
function allFactory(test) {
  return all

  function all(node) {
    var key

    for (key in test) {
      if (node[key] !== test[key]) return false
    }

    return true
  }
}

function anyFactory(tests) {
  var checks = []
  var index = -1

  while (++index < tests.length) {
    checks[index] = convert(tests[index])
  }

  return any

  function any() {
    var index = -1

    while (++index < checks.length) {
      if (checks[index].apply(this, arguments)) {
        return true
      }
    }

    return false
  }
}

// Utility to convert a string into a function which checks a given node’s type
// for said string.
function typeFactory(test) {
  return type

  function type(node) {
    return Boolean(node && node.type === test)
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ }),

/***/ "./node_modules/unist-util-position/index.js":
/*!***************************************************!*\
  !*** ./node_modules/unist-util-position/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var start = factory('start')
var end = factory('end')

module.exports = position

position.start = start
position.end = end

function position(node) {
  return {start: start(node), end: end(node)}
}

function factory(type) {
  point.displayName = type

  return point

  function point(node) {
    var point = (node && node.position && node.position[type]) || {}

    return {
      line: point.line || null,
      column: point.column || null,
      offset: isNaN(point.offset) ? null : point.offset
    }
  }
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/color.browser.js":
/*!****************************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/color.browser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = identity
function identity(d) {
  return d
}


/***/ }),

/***/ "./node_modules/unist-util-visit-parents/index.js":
/*!********************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visitParents

var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")
var color = __webpack_require__(/*! ./color */ "./node_modules/unist-util-visit-parents/color.browser.js")

var CONTINUE = true
var SKIP = 'skip'
var EXIT = false

visitParents.CONTINUE = CONTINUE
visitParents.SKIP = SKIP
visitParents.EXIT = EXIT

function visitParents(tree, test, visitor, reverse) {
  var step
  var is

  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  is = convert(test)
  step = reverse ? -1 : 1

  factory(tree, null, [])()

  function factory(node, index, parents) {
    var value = typeof node === 'object' && node !== null ? node : {}
    var name

    if (typeof value.type === 'string') {
      name =
        typeof value.tagName === 'string'
          ? value.tagName
          : typeof value.name === 'string'
          ? value.name
          : undefined

      visit.displayName =
        'node (' + color(value.type + (name ? '<' + name + '>' : '')) + ')'
    }

    return visit

    function visit() {
      var grandparents = parents.concat(node)
      var result = []
      var subresult
      var offset

      if (!test || is(node, index, parents[parents.length - 1] || null)) {
        result = toResult(visitor(node, parents))

        if (result[0] === EXIT) {
          return result
        }
      }

      if (node.children && result[0] !== SKIP) {
        offset = (reverse ? node.children.length : -1) + step

        while (offset > -1 && offset < node.children.length) {
          subresult = factory(node.children[offset], offset, grandparents)()

          if (subresult[0] === EXIT) {
            return subresult
          }

          offset =
            typeof subresult[1] === 'number' ? subresult[1] : offset + step
        }
      }

      return result
    }
  }
}

function toResult(value) {
  if (value !== null && typeof value === 'object' && 'length' in value) {
    return value
  }

  if (typeof value === 'number') {
    return [CONTINUE, value]
  }

  return [value]
}


/***/ }),

/***/ "./node_modules/unist-util-visit/index.js":
/*!************************************************!*\
  !*** ./node_modules/unist-util-visit/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = visit

var visitParents = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js")

var CONTINUE = visitParents.CONTINUE
var SKIP = visitParents.SKIP
var EXIT = visitParents.EXIT

visit.CONTINUE = CONTINUE
visit.SKIP = SKIP
visit.EXIT = EXIT

function visit(tree, test, visitor, reverse) {
  if (typeof test === 'function' && typeof visitor !== 'function') {
    reverse = visitor
    visitor = test
    test = null
  }

  visitParents(tree, test, overload, reverse)

  function overload(node, parents) {
    var parent = parents[parents.length - 1]
    var index = parent ? parent.children.indexOf(node) : null
    return visitor(node, index, parent)
  }
}


/***/ }),

/***/ "./node_modules/web-namespaces/index.json":
/*!************************************************!*\
  !*** ./node_modules/web-namespaces/index.json ***!
  \************************************************/
/*! exports provided: html, mathml, svg, xlink, xml, xmlns, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"html\":\"http://www.w3.org/1999/xhtml\",\"mathml\":\"http://www.w3.org/1998/Math/MathML\",\"svg\":\"http://www.w3.org/2000/svg\",\"xlink\":\"http://www.w3.org/1999/xlink\",\"xml\":\"http://www.w3.org/XML/1998/namespace\",\"xmlns\":\"http://www.w3.org/2000/xmlns/\"}");

/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "./styles/MarkdownComponents.module.scss":
/*!***********************************************!*\
  !*** ./styles/MarkdownComponents.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./MarkdownComponents.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/MarkdownComponents.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./MarkdownComponents.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/MarkdownComponents.module.scss",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./MarkdownComponents.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/MarkdownComponents.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./utils/markdown.ts":
/*!***************************!*\
  !*** ./utils/markdown.ts ***!
  \***************************/
/*! exports provided: parseMarkdownToReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseMarkdownToReactComponent", function() { return parseMarkdownToReactComponent; });
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remark_parse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark-react */ "./node_modules/remark-react/index.js");
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remark_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MarkdownComponents */ "./components/MarkdownComponents.tsx");




var parseMarkdownToReactComponent = function parseMarkdownToReactComponent(md) {
  console.log(md);
  var res = unified__WEBPACK_IMPORTED_MODULE_0___default()().use(remark_parse__WEBPACK_IMPORTED_MODULE_1___default.a).use(remark_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
    remarkReactComponents: {
      h1: _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_3__["ProgramHeader"],
      h2: _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_3__["ProgramSubHeader"]
    }
  }).processSync(md);
  return res.result;
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXJrZG93bkNvbXBvbmVudHMudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hcGJveC9oYXN0LXV0aWwtdGFibGUtY2VsbC1zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvaGFzdC11dGlsLXRhYmxlLWNlbGwtc3R5bGUvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtaXMvY29udmVydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvaGFzdC11dGlsLXRhYmxlLWNlbGwtc3R5bGUvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXBib3gvaGFzdC11dGlsLXRhYmxlLWNlbGwtc3R5bGUvbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jb21tYS1zZXBhcmF0ZWQtdG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaGFzdC10by1oeXBlcnNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1zYW5pdGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hhc3QtdXRpbC1zYW5pdGl6ZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcGFyc2VyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1kZWZpbml0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvYWxsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Jsb2NrcXVvdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2JyZWFrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9kZWxldGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2VtcGhhc2lzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9mb290bm90ZS1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2Zvb3Rub3RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9oZWFkaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9odG1sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9pbWFnZS1yZWZlcmVuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2ltYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvaW5saW5lLWNvZGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2xpbmstcmVmZXJlbmNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy9saXN0LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL2xpc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2hhbmRsZXJzL3BhcmFncmFwaC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvcm9vdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvc3Ryb25nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9oYW5kbGVycy90YWJsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvaGFuZGxlcnMvdGhlbWF0aWMtYnJlYWsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1oYXN0L2xpYi9vbmUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLWhhc3QvbGliL3JldmVydC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8taGFzdC9saWIvd3JhcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kdXJsL2VuY29kZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL01hcmtkb3duQ29tcG9uZW50cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9odG1sLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL2FyaWEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvaHRtbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi9zdmcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9jYXNlLWluc2Vuc2l0aXZlLXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2Nhc2Utc2Vuc2l0aXZlLXRyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2RlZmluZWQtaW5mby5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2luZm8uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvdXRpbC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL3NjaGVtYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL3R5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3hsaW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3htbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi94bWxucy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL25vcm1hbGl6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL3N2Zy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlbWFyay1yZWFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NwYWNlLXNlcGFyYXRlZC10b2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zdHlsZS10by1vYmplY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91bmlzdC1idWlsZGVyL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC1nZW5lcmF0ZWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLWlzL2NvbnZlcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXBvc2l0aW9uL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2NvbG9yLmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0LXBhcmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91bmlzdC11dGlsLXZpc2l0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMveHRlbmQvaW1tdXRhYmxlLmpzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvTWFya2Rvd25Db21wb25lbnRzLm1vZHVsZS5zY3NzPzI5MTAiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL21hcmtkb3duLnRzIl0sIm5hbWVzIjpbIlByb2dyYW1IZWFkZXIiLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJoZWFkZXIiLCJQcm9ncmFtU3ViSGVhZGVyIiwic3ViSGVhZGVyIiwicGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQiLCJtZCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJ1bmlmaWVkIiwidXNlIiwibWRwYXJzZSIsInIyciIsInJlbWFya1JlYWN0Q29tcG9uZW50cyIsImgxIiwiaDIiLCJwcm9jZXNzU3luYyIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGFBQTJCLEdBQUcsU0FBOUJBLGFBQThCLE9BQWdCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQ3pELHNCQUNFO0FBQUksYUFBUyxFQUFFQyw2RUFBTyxDQUFDQyxNQUF2QjtBQUFBLGNBQWdDRjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQUpNO0tBQU1ELGE7QUFPTixJQUFNSSxnQkFBOEIsR0FBRyxTQUFqQ0EsZ0JBQWlDLFFBQWdCO0FBQUEsTUFBZEgsUUFBYyxTQUFkQSxRQUFjO0FBQzVELHNCQUNFO0FBQUksYUFBUyxFQUFFQyw2RUFBTyxDQUFDRyxTQUF2QjtBQUFBLGNBQW1DSjtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFHRCxDQUpNO01BQU1HLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOztBQUViLFlBQVksbUJBQU8sQ0FBQyxrSEFBa0I7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9DWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Rlk7O0FBRVo7O0FBRUEsY0FBYyxtQkFBTyxDQUFDLHNIQUF1Qjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdFWTs7QUFFWjs7QUFFQSxtQkFBbUIsbUJBQU8sQ0FBQyxrSUFBMEI7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCWTs7QUFFWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuRFk7O0FBRVosV0FBVyxtQkFBTyxDQUFDLDhFQUEyQjtBQUM5QyxVQUFVLG1CQUFPLENBQUMsNEVBQTBCO0FBQzVDLFdBQVcsbUJBQU8sQ0FBQyw4RUFBMkI7QUFDOUMsa0JBQWtCLG1CQUFPLENBQUMsdUdBQXlDO0FBQ25FLGFBQWEsbUJBQU8sQ0FBQyw4RUFBd0I7QUFDN0MsYUFBYSxtQkFBTyxDQUFDLDhFQUF3QjtBQUM3QyxZQUFZLG1CQUFPLENBQUMsZ0VBQWlCO0FBQ3JDLFNBQVMsbUJBQU8sQ0FBQyxnRUFBZ0I7QUFDakMsY0FBYyxtQkFBTyxDQUFDLHNFQUF1Qjs7QUFFN0M7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3pOWTtBQUNaLGlCQUFpQixtQkFBTyxDQUFDLDZEQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEcEI7O0FBRVosWUFBWSxtQkFBTyxDQUFDLGdEQUFPO0FBQzNCLGVBQWUsbUJBQU8sQ0FBQyx3RUFBZTs7QUFFdEM7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0EsU0FBUyxjQUFjO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxTQUFTLG1CQUFtQjtBQUM1QixRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLDhDQUE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsd0JBQXdCO0FBQ3pEOztBQUVBO0FBQ0EsaUNBQWlDLDBCQUEwQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2VEE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FLDBCQUEwQjs7QUFFMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsWUFBWTtBQUNaLFlBQVk7QUFDWixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsT0FBTztBQUN2QixnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUztBQUN0QixjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BRWTs7QUFFWixZQUFZLG1CQUFPLENBQUMsa0VBQWtCOztBQUV0Qzs7QUFFQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5Q1k7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELE1BQU07QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ3BUVzs7QUFFWixZQUFZLG1CQUFPLENBQUMsMkVBQWM7QUFDbEMsYUFBYSxtQkFBTyxDQUFDLDZFQUFlO0FBQ3BDLDZCQUE2QixtQkFBTyxDQUFDLGlIQUFpQzs7QUFFdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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OztBQUVqWDs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBLHNFQUFzRSx3Q0FBd0M7QUFDOUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0EsSUFBSSxJQUFVO0FBQ2Q7QUFDQSxrRUFBa0UsaUJBQWlCLGNBQWMsTUFBTSxZQUFZLGlDQUFpQztBQUNwSixVQUFVLGdCQUFnQixlQUFlLFlBQVksaUNBQWlDO0FBQ3RGLFVBQVUsVUFBVSxlQUFlO0FBQ25DOztBQUVBO0FBQ0EsTUFBTSx1bEJBQStVO0FBQ3JWO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsdWxCQUErVTs7QUFFelc7O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUUsNkJBQTZCLEdBQUcsU0FBaENBLDZCQUFnQyxDQUFDQyxFQUFELEVBQWdCO0FBQzNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWjtBQUNBLE1BQU1HLEdBQUcsR0FBR0MsOENBQU8sR0FDZEMsR0FETyxDQUNIQyxtREFERyxFQUVQRCxHQUZPLENBRUhFLG1EQUZHLEVBRUU7QUFDUkMseUJBQXFCLEVBQUU7QUFDckJDLFFBQUUsRUFBRWhCLDRFQURpQjtBQUVyQmlCLFFBQUUsRUFBRWIsK0VBQWdCQTtBQUZDO0FBRGYsR0FGRixFQVFQYyxXQVJPLENBUUtYLEVBUkwsQ0FBWjtBQVNBLFNBQU9HLEdBQUcsQ0FBQ1MsTUFBWDtBQUNELENBWk0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZ3JhbS5mOGUwYmFjNzE2YjNjYzYxOTkzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4uL3N0eWxlcy9NYXJrZG93bkNvbXBvbmVudHMubW9kdWxlLnNjc3MnO1xuXG5leHBvcnQgY29uc3QgUHJvZ3JhbUhlYWRlcjogUmVhY3QuRkM8e30+ID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLmhlYWRlcn0+e2NoaWxkcmVufTwvaDE+XG4gICk7XG59XG47XG5cbmV4cG9ydCBjb25zdCBQcm9ncmFtU3ViSGVhZGVyOiBSZWFjdC5GQzx7fT4gPSAoe2NoaWxkcmVufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMuc3ViSGVhZGVyfT57Y2hpbGRyZW59PC9oMj5cbiAgKTtcbn1cbiAgO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmlzaXQgPSByZXF1aXJlKCd1bmlzdC11dGlsLXZpc2l0Jyk7XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaGFzdENzc1Byb3BlcnR5TWFwID0ge1xuICBhbGlnbjogJ3RleHQtYWxpZ24nLFxuICB2YWxpZ246ICd2ZXJ0aWNhbC1hbGlnbicsXG4gIGhlaWdodDogJ2hlaWdodCcsXG4gIHdpZHRoOiAnd2lkdGgnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRhYmxlQ2VsbFN0eWxlKG5vZGUpIHtcbiAgdmlzaXQobm9kZSwgJ2VsZW1lbnQnLCB2aXNpdG9yKTtcbiAgcmV0dXJuIG5vZGU7XG59O1xuXG5mdW5jdGlvbiB2aXNpdG9yKG5vZGUpIHtcbiAgaWYgKG5vZGUudGFnTmFtZSAhPT0gJ3RyJyAmJiBub2RlLnRhZ05hbWUgIT09ICd0ZCcgJiYgbm9kZS50YWdOYW1lICE9PSAndGgnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGhhc3ROYW1lO1xuICB2YXIgY3NzTmFtZTtcbiAgZm9yIChoYXN0TmFtZSBpbiBoYXN0Q3NzUHJvcGVydHlNYXApIHtcbiAgICBpZiAoXG4gICAgICAhaGFzT3duUHJvcGVydHkuY2FsbChoYXN0Q3NzUHJvcGVydHlNYXAsIGhhc3ROYW1lKSB8fFxuICAgICAgbm9kZS5wcm9wZXJ0aWVzW2hhc3ROYW1lXSA9PT0gdW5kZWZpbmVkXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY3NzTmFtZSA9IGhhc3RDc3NQcm9wZXJ0eU1hcFtoYXN0TmFtZV07XG4gICAgYXBwZW5kU3R5bGUobm9kZSwgY3NzTmFtZSwgbm9kZS5wcm9wZXJ0aWVzW2hhc3ROYW1lXSk7XG4gICAgZGVsZXRlIG5vZGUucHJvcGVydGllc1toYXN0TmFtZV07XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwZW5kU3R5bGUobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gIHZhciBwcmV2U3R5bGUgPSAobm9kZS5wcm9wZXJ0aWVzLnN0eWxlIHx8ICcnKS50cmltKCk7XG4gIGlmIChwcmV2U3R5bGUgJiYgIS87XFxzKi8udGVzdChwcmV2U3R5bGUpKSB7XG4gICAgcHJldlN0eWxlICs9ICc7JztcbiAgfVxuICBpZiAocHJldlN0eWxlKSB7XG4gICAgcHJldlN0eWxlICs9ICcgJztcbiAgfVxuICB2YXIgbmV4dFN0eWxlID0gcHJldlN0eWxlICsgcHJvcGVydHkgKyAnOiAnICsgdmFsdWUgKyAnOyc7XG4gIG5vZGUucHJvcGVydGllcy5zdHlsZSA9IG5leHRTdHlsZTtcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRcblxuZnVuY3Rpb24gY29udmVydCh0ZXN0KSB7XG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgfVxuXG4gIGlmICh0ZXN0ID09PSBudWxsIHx8IHRlc3QgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBva1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiAoJ2xlbmd0aCcgaW4gdGVzdCA/IGFueUZhY3RvcnkgOiBtYXRjaGVzRmFjdG9yeSkodGVzdClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0ZXN0XG4gIH1cblxuICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGZ1bmN0aW9uLCBzdHJpbmcsIG9yIG9iamVjdCBhcyB0ZXN0Jylcbn1cblxuZnVuY3Rpb24gY29udmVydEFsbCh0ZXN0cykge1xuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBsZW5ndGggPSB0ZXN0cy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdHNbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0c1xufVxuXG4vLyBVdGlsaXR5IGFzc2VydCBlYWNoIHByb3BlcnR5IGluIGB0ZXN0YCBpcyByZXByZXNlbnRlZCBpbiBgbm9kZWAsIGFuZCBlYWNoXG4vLyB2YWx1ZXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuZnVuY3Rpb24gbWF0Y2hlc0ZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gbWF0Y2hlc1xuXG4gIGZ1bmN0aW9uIG1hdGNoZXMobm9kZSkge1xuICAgIHZhciBrZXlcblxuICAgIGZvciAoa2V5IGluIHRlc3QpIHtcbiAgICAgIGlmIChub2RlW2tleV0gIT09IHRlc3Rba2V5XSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgdmFyIGNoZWNrcyA9IGNvbnZlcnRBbGwodGVzdHMpXG4gIHZhciBsZW5ndGggPSBjaGVja3MubGVuZ3RoXG5cbiAgcmV0dXJuIG1hdGNoZXNcblxuICBmdW5jdGlvbiBtYXRjaGVzKCkge1xuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgaWYgKGNoZWNrc1tpbmRleF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gY29udmVydCBhIHN0cmluZyBpbnRvIGEgZnVuY3Rpb24gd2hpY2ggY2hlY2tzIGEgZ2l2ZW4gbm9kZeKAmXMgdHlwZVxuLy8gZm9yIHNhaWQgc3RyaW5nLlxuZnVuY3Rpb24gdHlwZUZhY3RvcnkodGVzdCkge1xuICByZXR1cm4gdHlwZVxuXG4gIGZ1bmN0aW9uIHR5cGUobm9kZSkge1xuICAgIHJldHVybiBCb29sZWFuKG5vZGUgJiYgbm9kZS50eXBlID09PSB0ZXN0KVxuICB9XG59XG5cbi8vIFV0aWxpdHkgdG8gcmV0dXJuIHRydWUuXG5mdW5jdGlvbiBvaygpIHtcbiAgcmV0dXJuIHRydWVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZpc2l0UGFyZW50c1xuXG52YXIgY29udmVydCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtaXMvY29udmVydCcpXG5cbnZhciBDT05USU5VRSA9IHRydWVcbnZhciBTS0lQID0gJ3NraXAnXG52YXIgRVhJVCA9IGZhbHNlXG5cbnZpc2l0UGFyZW50cy5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdFBhcmVudHMuU0tJUCA9IFNLSVBcbnZpc2l0UGFyZW50cy5FWElUID0gRVhJVFxuXG5mdW5jdGlvbiB2aXNpdFBhcmVudHModHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICB2YXIgaXNcblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIGlzID0gY29udmVydCh0ZXN0KVxuXG4gIG9uZSh0cmVlLCBudWxsLCBbXSlcblxuICAvLyBWaXNpdCBhIHNpbmdsZSBub2RlLlxuICBmdW5jdGlvbiBvbmUobm9kZSwgaW5kZXgsIHBhcmVudHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gW11cbiAgICB2YXIgc3VicmVzdWx0XG5cbiAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgcmVzdWx0ID0gdG9SZXN1bHQodmlzaXRvcihub2RlLCBwYXJlbnRzKSlcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICBzdWJyZXN1bHQgPSB0b1Jlc3VsdChhbGwobm9kZS5jaGlsZHJlbiwgcGFyZW50cy5jb25jYXQobm9kZSkpKVxuICAgICAgcmV0dXJuIHN1YnJlc3VsdFswXSA9PT0gRVhJVCA/IHN1YnJlc3VsdCA6IHJlc3VsdFxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIC8vIFZpc2l0IGNoaWxkcmVuIGluIGBwYXJlbnRgLlxuICBmdW5jdGlvbiBhbGwoY2hpbGRyZW4sIHBhcmVudHMpIHtcbiAgICB2YXIgbWluID0gLTFcbiAgICB2YXIgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcbiAgICB2YXIgaW5kZXggPSAocmV2ZXJzZSA/IGNoaWxkcmVuLmxlbmd0aCA6IG1pbikgKyBzdGVwXG4gICAgdmFyIHJlc3VsdFxuXG4gICAgd2hpbGUgKGluZGV4ID4gbWluICYmIGluZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXN1bHQgPSBvbmUoY2hpbGRyZW5baW5kZXhdLCBpbmRleCwgcGFyZW50cylcblxuICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICB9XG5cbiAgICAgIGluZGV4ID0gdHlwZW9mIHJlc3VsdFsxXSA9PT0gJ251bWJlcicgPyByZXN1bHRbMV0gOiBpbmRleCArIHN0ZXBcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRcblxudmFyIHZpc2l0UGFyZW50cyA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpXG5cbnZhciBDT05USU5VRSA9IHZpc2l0UGFyZW50cy5DT05USU5VRVxudmFyIFNLSVAgPSB2aXNpdFBhcmVudHMuU0tJUFxudmFyIEVYSVQgPSB2aXNpdFBhcmVudHMuRVhJVFxuXG52aXNpdC5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdC5TS0lQID0gU0tJUFxudmlzaXQuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXQodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgIHZhciBpbmRleCA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbFxuICAgIHJldHVybiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2VcbmV4cG9ydHMuc3RyaW5naWZ5ID0gc3RyaW5naWZ5XG5cbnZhciBjb21tYSA9ICcsJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgZW1wdHkgPSAnJ1xuXG4vLyBQYXJzZSBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zIHRvIGFuIGFycmF5LlxuZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgdmFyIHZhbHVlcyA9IFtdXG4gIHZhciBpbnB1dCA9IFN0cmluZyh2YWx1ZSB8fCBlbXB0eSlcbiAgdmFyIGluZGV4ID0gaW5wdXQuaW5kZXhPZihjb21tYSlcbiAgdmFyIGxhc3RJbmRleCA9IDBcbiAgdmFyIGVuZCA9IGZhbHNlXG4gIHZhciB2YWxcblxuICB3aGlsZSAoIWVuZCkge1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGluZGV4ID0gaW5wdXQubGVuZ3RoXG4gICAgICBlbmQgPSB0cnVlXG4gICAgfVxuXG4gICAgdmFsID0gaW5wdXQuc2xpY2UobGFzdEluZGV4LCBpbmRleCkudHJpbSgpXG5cbiAgICBpZiAodmFsIHx8ICFlbmQpIHtcbiAgICAgIHZhbHVlcy5wdXNoKHZhbClcbiAgICB9XG5cbiAgICBsYXN0SW5kZXggPSBpbmRleCArIDFcbiAgICBpbmRleCA9IGlucHV0LmluZGV4T2YoY29tbWEsIGxhc3RJbmRleClcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXNcbn1cblxuLy8gQ29tcGlsZSBhbiBhcnJheSB0byBjb21tYS1zZXBhcmF0ZWQgdG9rZW5zLlxuLy8gYG9wdGlvbnMucGFkTGVmdGAgKGRlZmF1bHQ6IGB0cnVlYCkgcGFkcyBhIHNwYWNlIGxlZnQgb2YgZWFjaCB0b2tlbiwgYW5kXG4vLyBgb3B0aW9ucy5wYWRSaWdodGAgKGRlZmF1bHQ6IGBmYWxzZWApIHBhZHMgYSBzcGFjZSB0byB0aGUgcmlnaHQgb2YgZWFjaCB0b2tlbi5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZXMsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgbGVmdCA9IHNldHRpbmdzLnBhZExlZnQgPT09IGZhbHNlID8gZW1wdHkgOiBzcGFjZVxuICB2YXIgcmlnaHQgPSBzZXR0aW5ncy5wYWRSaWdodCA/IHNwYWNlIDogZW1wdHlcblxuICAvLyBFbnN1cmUgdGhlIGxhc3QgZW1wdHkgZW50cnkgaXMgc2Vlbi5cbiAgaWYgKHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV0gPT09IGVtcHR5KSB7XG4gICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChlbXB0eSlcbiAgfVxuXG4gIHJldHVybiB2YWx1ZXMuam9pbihyaWdodCArIGNvbW1hICsgbGVmdCkudHJpbSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGh0bWwgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9odG1sJylcbnZhciBzdmcgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9zdmcnKVxudmFyIGZpbmQgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9maW5kJylcbnZhciBoYXN0VG9SZWFjdCA9IHJlcXVpcmUoJ3Byb3BlcnR5LWluZm9ybWF0aW9uL2hhc3QtdG8tcmVhY3QuanNvbicpXG52YXIgc3BhY2VzID0gcmVxdWlyZSgnc3BhY2Utc2VwYXJhdGVkLXRva2VucycpXG52YXIgY29tbWFzID0gcmVxdWlyZSgnY29tbWEtc2VwYXJhdGVkLXRva2VucycpXG52YXIgc3R5bGUgPSByZXF1aXJlKCdzdHlsZS10by1vYmplY3QnKVxudmFyIG5zID0gcmVxdWlyZSgnd2ViLW5hbWVzcGFjZXMnKVxudmFyIGNvbnZlcnQgPSByZXF1aXJlKCd1bmlzdC11dGlsLWlzL2NvbnZlcnQnKVxuXG52YXIgcm9vdCA9IGNvbnZlcnQoJ3Jvb3QnKVxudmFyIGVsZW1lbnQgPSBjb252ZXJ0KCdlbGVtZW50JylcbnZhciB0ZXh0ID0gY29udmVydCgndGV4dCcpXG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlclxuXG5mdW5jdGlvbiB3cmFwcGVyKGgsIG5vZGUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgciA9IHJlYWN0KGgpXG4gIHZhciB2ID0gdnVlKGgpXG4gIHZhciB2ZCA9IHZkb20oaClcbiAgdmFyIHByZWZpeFxuXG4gIGlmICh0eXBlb2YgaCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignaCBpcyBub3QgYSBmdW5jdGlvbicpXG4gIH1cblxuICBpZiAodHlwZW9mIHNldHRpbmdzID09PSAnc3RyaW5nJyB8fCB0eXBlb2Ygc2V0dGluZ3MgPT09ICdib29sZWFuJykge1xuICAgIHByZWZpeCA9IHNldHRpbmdzXG4gICAgc2V0dGluZ3MgPSB7fVxuICB9IGVsc2Uge1xuICAgIHByZWZpeCA9IHNldHRpbmdzLnByZWZpeFxuICB9XG5cbiAgaWYgKHJvb3Qobm9kZSkpIHtcbiAgICBub2RlID1cbiAgICAgIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID09PSAxICYmIGVsZW1lbnQobm9kZS5jaGlsZHJlblswXSlcbiAgICAgICAgPyBub2RlLmNoaWxkcmVuWzBdXG4gICAgICAgIDoge1xuICAgICAgICAgICAgdHlwZTogJ2VsZW1lbnQnLFxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7fSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVuXG4gICAgICAgICAgfVxuICB9IGVsc2UgaWYgKCFlbGVtZW50KG5vZGUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0V4cGVjdGVkIHJvb3Qgb3IgZWxlbWVudCwgbm90IGAnICsgKChub2RlICYmIG5vZGUudHlwZSkgfHwgbm9kZSkgKyAnYCdcbiAgICApXG4gIH1cblxuICByZXR1cm4gdG9IKGgsIG5vZGUsIHtcbiAgICBzY2hlbWE6IHNldHRpbmdzLnNwYWNlID09PSAnc3ZnJyA/IHN2ZyA6IGh0bWwsXG4gICAgcHJlZml4OiBwcmVmaXggPT0gbnVsbCA/IChyIHx8IHYgfHwgdmQgPyAnaC0nIDogbnVsbCkgOiBwcmVmaXgsXG4gICAga2V5OiAwLFxuICAgIHJlYWN0OiByLFxuICAgIHZ1ZTogdixcbiAgICB2ZG9tOiB2ZCxcbiAgICBoeXBlcnNjcmlwdDogaHlwZXJzY3JpcHQoaClcbiAgfSlcbn1cblxuLy8gVHJhbnNmb3JtIGEgaGFzdCBub2RlIHRocm91Z2ggYSBoeXBlcnNjcmlwdCBpbnRlcmZhY2UgdG8gKmFueXRoaW5nKiFcbmZ1bmN0aW9uIHRvSChoLCBub2RlLCBjdHgpIHtcbiAgdmFyIHBhcmVudFNjaGVtYSA9IGN0eC5zY2hlbWFcbiAgdmFyIHNjaGVtYSA9IHBhcmVudFNjaGVtYVxuICB2YXIgbmFtZSA9IG5vZGUudGFnTmFtZVxuICB2YXIgYXR0cmlidXRlcyA9IHt9XG4gIHZhciBub2RlcyA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG5cbiAgaWYgKHBhcmVudFNjaGVtYS5zcGFjZSA9PT0gJ2h0bWwnICYmIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcbiAgICBzY2hlbWEgPSBzdmdcbiAgICBjdHguc2NoZW1hID0gc2NoZW1hXG4gIH1cblxuICBmb3IgKGtleSBpbiBub2RlLnByb3BlcnRpZXMpIHtcbiAgICBhZGRBdHRyaWJ1dGUoYXR0cmlidXRlcywga2V5LCBub2RlLnByb3BlcnRpZXNba2V5XSwgY3R4LCBuYW1lKVxuICB9XG5cbiAgaWYgKGN0eC52ZG9tKSB7XG4gICAgaWYgKHNjaGVtYS5zcGFjZSA9PT0gJ2h0bWwnKSB7XG4gICAgICBuYW1lID0gbmFtZS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIHtcbiAgICAgIGF0dHJpYnV0ZXMubmFtZXNwYWNlID0gbnNbc2NoZW1hLnNwYWNlXVxuICAgIH1cbiAgfVxuXG4gIGlmIChjdHgucHJlZml4KSB7XG4gICAgY3R4LmtleSsrXG4gICAgYXR0cmlidXRlcy5rZXkgPSBjdHgucHJlZml4ICsgY3R4LmtleVxuICB9XG5cbiAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICB3aGlsZSAoKytpbmRleCA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICB2YWx1ZSA9IG5vZGUuY2hpbGRyZW5baW5kZXhdXG5cbiAgICAgIGlmIChlbGVtZW50KHZhbHVlKSkge1xuICAgICAgICBub2Rlcy5wdXNoKHRvSChoLCB2YWx1ZSwgY3R4KSlcbiAgICAgIH0gZWxzZSBpZiAodGV4dCh2YWx1ZSkpIHtcbiAgICAgICAgbm9kZXMucHVzaCh2YWx1ZS52YWx1ZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXN0b3JlIHBhcmVudCBzY2hlbWEuXG4gIGN0eC5zY2hlbWEgPSBwYXJlbnRTY2hlbWFcblxuICAvLyBFbnN1cmUgbm8gUmVhY3Qgd2FybmluZ3MgYXJlIHRyaWdnZXJlZCBmb3Igdm9pZCBlbGVtZW50cyBoYXZpbmcgY2hpbGRyZW5cbiAgLy8gcGFzc2VkIGluLlxuICByZXR1cm4gbm9kZXMubGVuZ3RoXG4gICAgPyBoLmNhbGwobm9kZSwgbmFtZSwgYXR0cmlidXRlcywgbm9kZXMpXG4gICAgOiBoLmNhbGwobm9kZSwgbmFtZSwgYXR0cmlidXRlcylcbn1cblxuZnVuY3Rpb24gYWRkQXR0cmlidXRlKHByb3BzLCBwcm9wLCB2YWx1ZSwgY3R4LCBuYW1lKSB7XG4gIHZhciBpbmZvID0gZmluZChjdHguc2NoZW1hLCBwcm9wKVxuICB2YXIgc3VicHJvcFxuXG4gIC8vIElnbm9yZSBudWxsaXNoIGFuZCBgTmFOYCB2YWx1ZXMuXG4gIC8vIElnbm9yZSBgZmFsc2VgIGFuZCBmYWxzZXkga25vd24gYm9vbGVhbnMgZm9yIGh5cGVybGlrZSBEU0xzLlxuICBpZiAoXG4gICAgdmFsdWUgPT0gbnVsbCB8fFxuICAgIHZhbHVlICE9PSB2YWx1ZSB8fFxuICAgICh2YWx1ZSA9PT0gZmFsc2UgJiYgKGN0eC52dWUgfHwgY3R4LnZkb20gfHwgY3R4Lmh5cGVyc2NyaXB0KSkgfHxcbiAgICAoIXZhbHVlICYmIGluZm8uYm9vbGVhbiAmJiAoY3R4LnZ1ZSB8fCBjdHgudmRvbSB8fCBjdHguaHlwZXJzY3JpcHQpKVxuICApIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlKSB7XG4gICAgLy8gQWNjZXB0IGBhcnJheWAuXG4gICAgLy8gTW9zdCBwcm9wcyBhcmUgc3BhY2Utc2VwYXJhdGVkLlxuICAgIHZhbHVlID0gKGluZm8uY29tbWFTZXBhcmF0ZWQgPyBjb21tYXMgOiBzcGFjZXMpLnN0cmluZ2lmeSh2YWx1ZSlcbiAgfVxuXG4gIC8vIFRyZWF0IGB0cnVlYCBhbmQgdHJ1dGh5IGtub3duIGJvb2xlYW5zLlxuICBpZiAoaW5mby5ib29sZWFuICYmIGN0eC5oeXBlcnNjcmlwdCkge1xuICAgIHZhbHVlID0gJydcbiAgfVxuXG4gIC8vIFZET00sIFZ1ZSwgYW5kIFJlYWN0IGFjY2VwdCBgc3R5bGVgIGFzIG9iamVjdC5cbiAgaWYgKFxuICAgIGluZm8ucHJvcGVydHkgPT09ICdzdHlsZScgJiZcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmXG4gICAgKGN0eC5yZWFjdCB8fCBjdHgudnVlIHx8IGN0eC52ZG9tKVxuICApIHtcbiAgICB2YWx1ZSA9IHBhcnNlU3R5bGUodmFsdWUsIG5hbWUpXG4gIH1cblxuICBpZiAoY3R4LnZ1ZSkge1xuICAgIGlmIChpbmZvLnByb3BlcnR5ICE9PSAnc3R5bGUnKSBzdWJwcm9wID0gJ2F0dHJzJ1xuICB9IGVsc2UgaWYgKCFpbmZvLm11c3RVc2VQcm9wZXJ0eSkge1xuICAgIGlmIChjdHgudmRvbSkge1xuICAgICAgaWYgKGluZm8ucHJvcGVydHkgIT09ICdzdHlsZScpIHN1YnByb3AgPSAnYXR0cmlidXRlcydcbiAgICB9IGVsc2UgaWYgKGN0eC5oeXBlcnNjcmlwdCkge1xuICAgICAgc3VicHJvcCA9ICdhdHRycydcbiAgICB9XG4gIH1cblxuICBpZiAoc3VicHJvcCkge1xuICAgIGlmICghcHJvcHNbc3VicHJvcF0pIHByb3BzW3N1YnByb3BdID0ge31cbiAgICBwcm9wc1tzdWJwcm9wXVtpbmZvLmF0dHJpYnV0ZV0gPSB2YWx1ZVxuICB9IGVsc2UgaWYgKGluZm8uc3BhY2UgJiYgY3R4LnJlYWN0KSB7XG4gICAgcHJvcHNbaGFzdFRvUmVhY3RbaW5mby5wcm9wZXJ0eV0gfHwgaW5mby5wcm9wZXJ0eV0gPSB2YWx1ZVxuICB9IGVsc2Uge1xuICAgIHByb3BzW2luZm8uYXR0cmlidXRlXSA9IHZhbHVlXG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgYGhgIGlzIGByZWFjdC5jcmVhdGVFbGVtZW50YC5cbmZ1bmN0aW9uIHJlYWN0KGgpIHtcbiAgdmFyIG5vZGUgPSBoICYmIGgoJ2RpdicpXG4gIHJldHVybiBCb29sZWFuKFxuICAgIG5vZGUgJiYgKCdfb3duZXInIGluIG5vZGUgfHwgJ19zdG9yZScgaW4gbm9kZSkgJiYgbm9kZS5rZXkgPT0gbnVsbFxuICApXG59XG5cbi8vIENoZWNrIGlmIGBoYCBpcyBgaHlwZXJzY3JpcHRgLlxuZnVuY3Rpb24gaHlwZXJzY3JpcHQoaCkge1xuICByZXR1cm4gQm9vbGVhbihoICYmIGguY29udGV4dCAmJiBoLmNsZWFudXApXG59XG5cbi8vIENoZWNrIGlmIGBoYCBpcyBgdmlydHVhbC1kb20vaGAuXG5mdW5jdGlvbiB2ZG9tKGgpIHtcbiAgcmV0dXJuIGggJiYgaCgnZGl2JykudHlwZSA9PT0gJ1ZpcnR1YWxOb2RlJ1xufVxuXG5mdW5jdGlvbiB2dWUoaCkge1xuICB2YXIgbm9kZSA9IGggJiYgaCgnZGl2JylcbiAgcmV0dXJuIEJvb2xlYW4obm9kZSAmJiBub2RlLmNvbnRleHQgJiYgbm9kZS5jb250ZXh0Ll9pc1Z1ZSlcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHlsZSh2YWx1ZSwgdGFnTmFtZSkge1xuICB2YXIgcmVzdWx0ID0ge31cblxuICB0cnkge1xuICAgIHN0eWxlKHZhbHVlLCBpdGVyYXRvcilcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBlcnJvci5tZXNzYWdlID1cbiAgICAgIHRhZ05hbWUgKyAnW3N0eWxlXScgKyBlcnJvci5tZXNzYWdlLnNsaWNlKCd1bmRlZmluZWQnLmxlbmd0aClcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxuXG4gIGZ1bmN0aW9uIGl0ZXJhdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKG5hbWUuc2xpY2UoMCwgNCkgPT09ICctbXMtJykgbmFtZSA9ICdtcy0nICsgbmFtZS5zbGljZSg0KVxuICAgIHJlc3VsdFtuYW1lLnJlcGxhY2UoLy0oW2Etel0pL2csIHN0eWxlUmVwbGFjZXIpXSA9IHZhbHVlXG4gIH1cbn1cblxuZnVuY3Rpb24gc3R5bGVSZXBsYWNlcigkMCwgJDEpIHtcbiAgcmV0dXJuICQxLnRvVXBwZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYicpXG4iLCIndXNlIHN0cmljdCdcblxudmFyIHh0ZW5kID0gcmVxdWlyZSgneHRlbmQnKVxudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9naXRodWIuanNvbicpXG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlclxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcbnZhciBwdXNoID0gW10ucHVzaFxuXG52YXIgbm9kZVNjaGVtYSA9IHtcbiAgcm9vdDoge2NoaWxkcmVuOiBhbGx9LFxuICBkb2N0eXBlOiBoYW5kbGVEb2N0eXBlLFxuICBjb21tZW50OiBoYW5kbGVDb21tZW50LFxuICBlbGVtZW50OiB7XG4gICAgdGFnTmFtZTogaGFuZGxlVGFnTmFtZSxcbiAgICBwcm9wZXJ0aWVzOiBoYW5kbGVQcm9wZXJ0aWVzLFxuICAgIGNoaWxkcmVuOiBhbGxcbiAgfSxcbiAgdGV4dDoge3ZhbHVlOiBoYW5kbGVWYWx1ZX0sXG4gICcqJzoge2RhdGE6IGFsbG93LCBwb3NpdGlvbjogYWxsb3d9XG59XG5cbi8vIFNhbml0aXplIGBub2RlYCwgYWNjb3JkaW5nIHRvIGBzY2hlbWFgLlxuZnVuY3Rpb24gd3JhcHBlcihub2RlLCBzY2hlbWEpIHtcbiAgdmFyIGN0eCA9IHt0eXBlOiAncm9vdCcsIGNoaWxkcmVuOiBbXX1cbiAgdmFyIHJlcGxhY2VcblxuICBpZiAobm9kZSAmJiB0eXBlb2Ygbm9kZSA9PT0gJ29iamVjdCcgJiYgbm9kZS50eXBlKSB7XG4gICAgcmVwbGFjZSA9IG9uZSh4dGVuZChkZWZhdWx0cywgc2NoZW1hIHx8IHt9KSwgbm9kZSwgW10pXG5cbiAgICBpZiAocmVwbGFjZSkge1xuICAgICAgaWYgKCdsZW5ndGgnIGluIHJlcGxhY2UpIHtcbiAgICAgICAgaWYgKHJlcGxhY2UubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgY3R4ID0gcmVwbGFjZVswXVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN0eC5jaGlsZHJlbiA9IHJlcGxhY2VcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY3R4ID0gcmVwbGFjZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjdHhcbn1cblxuLy8gU2FuaXRpemUgYG5vZGVgLlxuZnVuY3Rpb24gb25lKHNjaGVtYSwgbm9kZSwgc3RhY2spIHtcbiAgdmFyIHR5cGUgPSBub2RlICYmIG5vZGUudHlwZVxuICB2YXIgcmVwbGFjZW1lbnQgPSB7dHlwZTogbm9kZS50eXBlfVxuICB2YXIgcmVwbGFjZVxuICB2YXIgZGVmaW5pdGlvblxuICB2YXIgYWxsb3dlZFxuICB2YXIgcmVzdWx0XG4gIHZhciBrZXlcblxuICBpZiAob3duLmNhbGwobm9kZVNjaGVtYSwgdHlwZSkpIHtcbiAgICBkZWZpbml0aW9uID0gbm9kZVNjaGVtYVt0eXBlXVxuXG4gICAgaWYgKHR5cGVvZiBkZWZpbml0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkZWZpbml0aW9uID0gZGVmaW5pdGlvbihzY2hlbWEsIG5vZGUpXG4gICAgfVxuXG4gICAgaWYgKGRlZmluaXRpb24pIHtcbiAgICAgIHJlcGxhY2UgPSB0cnVlXG4gICAgICBhbGxvd2VkID0geHRlbmQoZGVmaW5pdGlvbiwgbm9kZVNjaGVtYVsnKiddKVxuXG4gICAgICBmb3IgKGtleSBpbiBhbGxvd2VkKSB7XG4gICAgICAgIHJlc3VsdCA9IGFsbG93ZWRba2V5XShzY2hlbWEsIG5vZGVba2V5XSwgbm9kZSwgc3RhY2spXG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXBsYWNlID0gbnVsbFxuICAgICAgICAgIC8vIFNldCB0aGUgbm9uLXNhZmUgdmFsdWUuXG4gICAgICAgICAgcmVwbGFjZW1lbnRba2V5XSA9IG5vZGVba2V5XVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgcmVwbGFjZW1lbnRba2V5XSA9IHJlc3VsdFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHJlcGxhY2UpIHtcbiAgICByZXR1cm4gcmVwbGFjZW1lbnRcbiAgfVxuXG4gIHJldHVybiByZXBsYWNlbWVudC5jaGlsZHJlbiAmJlxuICAgIHJlcGxhY2VtZW50LmNoaWxkcmVuLmxlbmd0aCAmJlxuICAgIHNjaGVtYS5zdHJpcC5pbmRleE9mKHJlcGxhY2VtZW50LnRhZ05hbWUpIDwgMFxuICAgID8gcmVwbGFjZW1lbnQuY2hpbGRyZW5cbiAgICA6IG51bGxcbn1cblxuLy8gU2FuaXRpemUgYGNoaWxkcmVuYC5cbmZ1bmN0aW9uIGFsbChzY2hlbWEsIGNoaWxkcmVuLCBub2RlLCBzdGFjaykge1xuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciB2YWx1ZVxuXG4gIGlmIChjaGlsZHJlbikge1xuICAgIHN0YWNrLnB1c2gobm9kZS50YWdOYW1lKVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHZhbHVlID0gb25lKHNjaGVtYSwgY2hpbGRyZW5baW5kZXhdLCBzdGFjaylcblxuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIGlmICgnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgICAgICAgIHB1c2guYXBwbHkocmVzdWx0cywgdmFsdWUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZhbHVlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3RhY2sucG9wKClcbiAgfVxuXG4gIHJldHVybiByZXN1bHRzXG59XG5cbi8vIFNhbml0aXplIGBwcm9wZXJ0aWVzYC5cbmZ1bmN0aW9uIGhhbmRsZVByb3BlcnRpZXMoc2NoZW1hLCBwcm9wZXJ0aWVzLCBub2RlLCBzdGFjaykge1xuICB2YXIgbmFtZSA9IGhhbmRsZVRhZ05hbWUoc2NoZW1hLCBub2RlLnRhZ05hbWUsIG5vZGUsIHN0YWNrKVxuICB2YXIgcmVxcyA9IHNjaGVtYS5yZXF1aXJlZCB8fCAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqLyB7fVxuICB2YXIgcHJvcHMgPSBwcm9wZXJ0aWVzIHx8IHt9XG4gIHZhciBhbGxvd2VkID0geHRlbmQoXG4gICAgdG9Qcm9wZXJ0eVZhbHVlTWFwKHNjaGVtYS5hdHRyaWJ1dGVzWycqJ10pLFxuICAgIHRvUHJvcGVydHlWYWx1ZU1hcChcbiAgICAgIG93bi5jYWxsKHNjaGVtYS5hdHRyaWJ1dGVzLCBuYW1lKSA/IHNjaGVtYS5hdHRyaWJ1dGVzW25hbWVdIDogW11cbiAgICApXG4gIClcbiAgdmFyIHJlc3VsdCA9IHt9XG4gIHZhciBkZWZpbml0aW9uXG4gIHZhciBrZXlcbiAgdmFyIHZhbHVlXG5cbiAgZm9yIChrZXkgaW4gcHJvcHMpIHtcbiAgICBpZiAob3duLmNhbGwoYWxsb3dlZCwga2V5KSkge1xuICAgICAgZGVmaW5pdGlvbiA9IGFsbG93ZWRba2V5XVxuICAgIH0gZWxzZSBpZiAoZGF0YShrZXkpICYmIG93bi5jYWxsKGFsbG93ZWQsICdkYXRhKicpKSB7XG4gICAgICBkZWZpbml0aW9uID0gYWxsb3dlZFsnZGF0YSonXVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIHZhbHVlID0gcHJvcHNba2V5XVxuICAgIHZhbHVlID1cbiAgICAgIHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWVcbiAgICAgICAgPyBoYW5kbGVQcm9wZXJ0eVZhbHVlcyhzY2hlbWEsIHZhbHVlLCBrZXksIGRlZmluaXRpb24pXG4gICAgICAgIDogaGFuZGxlUHJvcGVydHlWYWx1ZShzY2hlbWEsIHZhbHVlLCBrZXksIGRlZmluaXRpb24pXG5cbiAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGlmIChvd24uY2FsbChyZXFzLCBuYW1lKSkge1xuICAgIGZvciAoa2V5IGluIHJlcXNbbmFtZV0pIHtcbiAgICAgIGlmICghb3duLmNhbGwocmVzdWx0LCBrZXkpKSB7XG4gICAgICAgIHJlc3VsdFtrZXldID0gcmVxc1tuYW1lXVtrZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG4vLyBTYW5pdGl6ZSBhIHByb3BlcnR5IHZhbHVlIHdoaWNoIGlzIGEgbGlzdC5cbmZ1bmN0aW9uIGhhbmRsZVByb3BlcnR5VmFsdWVzKHNjaGVtYSwgdmFsdWVzLCBwcm9wLCBkZWZpbml0aW9uKSB7XG4gIHZhciByZXN1bHQgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgdmFsdWVcblxuICB3aGlsZSAoKytpbmRleCA8IHZhbHVlcy5sZW5ndGgpIHtcbiAgICB2YWx1ZSA9IGhhbmRsZVByb3BlcnR5VmFsdWUoc2NoZW1hLCB2YWx1ZXNbaW5kZXhdLCBwcm9wLCBkZWZpbml0aW9uKVxuXG4gICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuLy8gU2FuaXRpemUgYSBwcm9wZXJ0eSB2YWx1ZS5cbmZ1bmN0aW9uIGhhbmRsZVByb3BlcnR5VmFsdWUoc2NoZW1hLCB2YWx1ZSwgcHJvcCwgZGVmaW5pdGlvbikge1xuICBpZiAoXG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8XG4gICAgICB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSAmJlxuICAgIGhhbmRsZVByb3RvY29sKHNjaGVtYSwgdmFsdWUsIHByb3ApICYmXG4gICAgKCFkZWZpbml0aW9uLmxlbmd0aCB8fCBkZWZpbml0aW9uLmluZGV4T2YodmFsdWUpID4gLTEpXG4gICkge1xuICAgIHJldHVybiBzY2hlbWEuY2xvYmJlci5pbmRleE9mKHByb3ApIDwgMFxuICAgICAgPyB2YWx1ZVxuICAgICAgOiBzY2hlbWEuY2xvYmJlclByZWZpeCArIHZhbHVlXG4gIH1cbn1cblxuLy8gQ2hlY2sgd2hldGhlciBgdmFsdWVgIGlzIGEgc2FmZSBVUkwuXG5mdW5jdGlvbiBoYW5kbGVQcm90b2NvbChzY2hlbWEsIHZhbHVlLCBwcm9wKSB7XG4gIHZhciB1cmwgPSBTdHJpbmcodmFsdWUpXG4gIHZhciBjb2xvbiA9IHVybC5pbmRleE9mKCc6JylcbiAgdmFyIHF1ZXN0aW9uTWFyayA9IHVybC5pbmRleE9mKCc/JylcbiAgdmFyIG51bWJlclNpZ24gPSB1cmwuaW5kZXhPZignIycpXG4gIHZhciBzbGFzaCA9IHVybC5pbmRleE9mKCcvJylcbiAgdmFyIHByb3RvY29scyA9IG93bi5jYWxsKHNjaGVtYS5wcm90b2NvbHMsIHByb3ApXG4gICAgPyBzY2hlbWEucHJvdG9jb2xzW3Byb3BdLmNvbmNhdCgpXG4gICAgOiBbXVxuICB2YXIgaW5kZXggPSAtMVxuXG4gIGlmIChcbiAgICAhcHJvdG9jb2xzLmxlbmd0aCB8fFxuICAgIGNvbG9uIDwgMCB8fFxuICAgIC8vIElmIHRoZSBmaXJzdCBjb2xvbiBpcyBhZnRlciBhIGA/YCwgYCNgLCBvciBgL2AsIGl04oCZcyBub3QgYSBwcm90b2NvbC5cbiAgICAoc2xhc2ggPiAtMSAmJiBjb2xvbiA+IHNsYXNoKSB8fFxuICAgIChxdWVzdGlvbk1hcmsgPiAtMSAmJiBjb2xvbiA+IHF1ZXN0aW9uTWFyaykgfHxcbiAgICAobnVtYmVyU2lnbiA+IC0xICYmIGNvbG9uID4gbnVtYmVyU2lnbilcbiAgKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHdoaWxlICgrK2luZGV4IDwgcHJvdG9jb2xzLmxlbmd0aCkge1xuICAgIGlmIChcbiAgICAgIGNvbG9uID09PSBwcm90b2NvbHNbaW5kZXhdLmxlbmd0aCAmJlxuICAgICAgdXJsLnNsaWNlKDAsIHByb3RvY29sc1tpbmRleF0ubGVuZ3RoKSA9PT0gcHJvdG9jb2xzW2luZGV4XVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gQWx3YXlzIHJldHVybiBhIHZhbGlkIEhUTUw1IGRvY3R5cGUuXG5mdW5jdGlvbiBoYW5kbGVEb2N0eXBlTmFtZSgpIHtcbiAgcmV0dXJuICdodG1sJ1xufVxuXG4vLyBTYW5pdGl6ZSBgdGFnTmFtZWAuXG5mdW5jdGlvbiBoYW5kbGVUYWdOYW1lKHNjaGVtYSwgdGFnTmFtZSwgbm9kZSwgc3RhY2spIHtcbiAgdmFyIG5hbWUgPSB0eXBlb2YgdGFnTmFtZSA9PT0gJ3N0cmluZycgJiYgdGFnTmFtZVxuICB2YXIgaW5kZXggPSAtMVxuXG4gIGlmICghbmFtZSB8fCBuYW1lID09PSAnKicgfHwgc2NoZW1hLnRhZ05hbWVzLmluZGV4T2YobmFtZSkgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBTb21lIG5vZGVzIGNhbiBicmVhayBvdXQgb2YgdGhlaXIgY29udGV4dCBpZiB0aGV5IGRvbuKAmXQgaGF2ZSBhIGNlcnRhaW5cbiAgLy8gYW5jZXN0b3IuXG4gIGlmIChvd24uY2FsbChzY2hlbWEuYW5jZXN0b3JzLCBuYW1lKSkge1xuICAgIHdoaWxlICgrK2luZGV4IDwgc2NoZW1hLmFuY2VzdG9yc1tuYW1lXS5sZW5ndGgpIHtcbiAgICAgIGlmIChzdGFjay5pbmRleE9mKHNjaGVtYS5hbmNlc3RvcnNbbmFtZV1baW5kZXhdKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiBuYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gbmFtZVxufVxuXG5mdW5jdGlvbiBoYW5kbGVEb2N0eXBlKHNjaGVtYSkge1xuICByZXR1cm4gc2NoZW1hLmFsbG93RG9jdHlwZXMgPyB7bmFtZTogaGFuZGxlRG9jdHlwZU5hbWV9IDogbnVsbFxufVxuXG5mdW5jdGlvbiBoYW5kbGVDb21tZW50KHNjaGVtYSkge1xuICByZXR1cm4gc2NoZW1hLmFsbG93Q29tbWVudHMgPyB7dmFsdWU6IGhhbmRsZUNvbW1lbnRWYWx1ZX0gOiBudWxsXG59XG5cbi8vIFNlZSA8aHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvcGFyc2luZy5odG1sI3NlcmlhbGlzaW5nLWh0bWwtZnJhZ21lbnRzPlxuZnVuY3Rpb24gaGFuZGxlQ29tbWVudFZhbHVlKHNjaGVtYSwgdmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6ICcnXG4gIHZhciBpbmRleCA9IHJlc3VsdC5pbmRleE9mKCctLT4nKVxuXG4gIHJldHVybiBpbmRleCA8IDAgPyByZXN1bHQgOiByZXN1bHQuc2xpY2UoMCwgaW5kZXgpXG59XG5cbi8vIFNhbml0aXplIGB2YWx1ZWAuXG5mdW5jdGlvbiBoYW5kbGVWYWx1ZShzY2hlbWEsIHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAnJ1xufVxuXG4vLyBDcmVhdGUgYSBtYXAgZnJvbSBhIGxpc3Qgb2YgcHJvcHMgb3IgYSBsaXN0IG9mIHByb3BlcnRpZXMgYW5kIHZhbHVlcy5cbmZ1bmN0aW9uIHRvUHJvcGVydHlWYWx1ZU1hcCh2YWx1ZXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciB2YWx1ZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgdmFsdWVzLmxlbmd0aCkge1xuICAgIHZhbHVlID0gdmFsdWVzW2luZGV4XVxuXG4gICAgaWYgKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICAgIHJlc3VsdFt2YWx1ZVswXV0gPSB2YWx1ZS5zbGljZSgxKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRbdmFsdWVdID0gW11cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIEFsbG93IGB2YWx1ZWAuXG5mdW5jdGlvbiBhbGxvdyhzY2hlbWEsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVxufVxuXG4vLyBDaGVjayBpZiBgcHJvcGAgaXMgYSBkYXRhIHByb3BlcnR5LlxuZnVuY3Rpb24gZGF0YShwcm9wKSB7XG4gIHJldHVybiBwcm9wLmxlbmd0aCA+IDQgJiYgcHJvcC5zbGljZSgwLCA0KS50b0xvd2VyQ2FzZSgpID09PSAnZGF0YSdcbn1cbiIsIi8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL2dyYW1tYXIuaHRtbFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Zpc2lvbm1lZGlhL2Nzcy1wYXJzZS9wdWxsLzQ5I2lzc3VlY29tbWVudC0zMDA4ODAyN1xudmFyIENPTU1FTlRfUkVHRVggPSAvXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZztcblxudmFyIE5FV0xJTkVfUkVHRVggPSAvXFxuL2c7XG52YXIgV0hJVEVTUEFDRV9SRUdFWCA9IC9eXFxzKi87XG5cbi8vIGRlY2xhcmF0aW9uXG52YXIgUFJPUEVSVFlfUkVHRVggPSAvXihcXCo/Wy0jLypcXFxcXFx3XSsoXFxbWzAtOWEtel8tXStcXF0pPylcXHMqLztcbnZhciBDT0xPTl9SRUdFWCA9IC9eOlxccyovO1xudmFyIFZBTFVFX1JFR0VYID0gL14oKD86Jyg/OlxcXFwnfC4pKj8nfFwiKD86XFxcXFwifC4pKj9cInxcXChbXildKj9cXCl8W159O10pKykvO1xudmFyIFNFTUlDT0xPTl9SRUdFWCA9IC9eWztcXHNdKi87XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9UcmltI1BvbHlmaWxsXG52YXIgVFJJTV9SRUdFWCA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vLyBzdHJpbmdzXG52YXIgTkVXTElORSA9ICdcXG4nO1xudmFyIEZPUldBUkRfU0xBU0ggPSAnLyc7XG52YXIgQVNURVJJU0sgPSAnKic7XG52YXIgRU1QVFlfU1RSSU5HID0gJyc7XG5cbi8vIHR5cGVzXG52YXIgVFlQRV9DT01NRU5UID0gJ2NvbW1lbnQnO1xudmFyIFRZUEVfREVDTEFSQVRJT04gPSAnZGVjbGFyYXRpb24nO1xuXG4vKipcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHlsZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7T2JqZWN0W119XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9XG4gKiBAdGhyb3dzIHtFcnJvcn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHlsZSwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpcnN0IGFyZ3VtZW50IG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIGlmICghc3R5bGUpIHJldHVybiBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAvKipcbiAgICogUG9zaXRpb25hbC5cbiAgICovXG4gIHZhciBsaW5lbm8gPSAxO1xuICB2YXIgY29sdW1uID0gMTtcblxuICAvKipcbiAgICogVXBkYXRlIGxpbmVubyBhbmQgY29sdW1uIGJhc2VkIG9uIGBzdHJgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqL1xuICBmdW5jdGlvbiB1cGRhdGVQb3NpdGlvbihzdHIpIHtcbiAgICB2YXIgbGluZXMgPSBzdHIubWF0Y2goTkVXTElORV9SRUdFWCk7XG4gICAgaWYgKGxpbmVzKSBsaW5lbm8gKz0gbGluZXMubGVuZ3RoO1xuICAgIHZhciBpID0gc3RyLmxhc3RJbmRleE9mKE5FV0xJTkUpO1xuICAgIGNvbHVtbiA9IH5pID8gc3RyLmxlbmd0aCAtIGkgOiBjb2x1bW4gKyBzdHIubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIE1hcmsgcG9zaXRpb24gYW5kIHBhdGNoIGBub2RlLnBvc2l0aW9uYC5cbiAgICpcbiAgICogQHJldHVybiB7RnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICB2YXIgc3RhcnQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2x1bW4gfTtcbiAgICByZXR1cm4gZnVuY3Rpb24obm9kZSkge1xuICAgICAgbm9kZS5wb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihzdGFydCk7XG4gICAgICB3aGl0ZXNwYWNlKCk7XG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3JlIHBvc2l0aW9uIGluZm9ybWF0aW9uIGZvciBhIG5vZGUuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gc3RhcnRcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IGVuZFxuICAgKiBAcHJvcGVydHkge3VuZGVmaW5lZHxTdHJpbmd9IHNvdXJjZVxuICAgKi9cbiAgZnVuY3Rpb24gUG9zaXRpb24oc3RhcnQpIHtcbiAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XG4gICAgdGhpcy5lbmQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2x1bW4gfTtcbiAgICB0aGlzLnNvdXJjZSA9IG9wdGlvbnMuc291cmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vbi1lbnVtZXJhYmxlIHNvdXJjZSBzdHJpbmcuXG4gICAqL1xuICBQb3NpdGlvbi5wcm90b3R5cGUuY29udGVudCA9IHN0eWxlO1xuXG4gIHZhciBlcnJvcnNMaXN0ID0gW107XG5cbiAgLyoqXG4gICAqIEVycm9yIGBtc2dgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gbXNnXG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKi9cbiAgZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgIG9wdGlvbnMuc291cmNlICsgJzonICsgbGluZW5vICsgJzonICsgY29sdW1uICsgJzogJyArIG1zZ1xuICAgICk7XG4gICAgZXJyLnJlYXNvbiA9IG1zZztcbiAgICBlcnIuZmlsZW5hbWUgPSBvcHRpb25zLnNvdXJjZTtcbiAgICBlcnIubGluZSA9IGxpbmVubztcbiAgICBlcnIuY29sdW1uID0gY29sdW1uO1xuICAgIGVyci5zb3VyY2UgPSBzdHlsZTtcblxuICAgIGlmIChvcHRpb25zLnNpbGVudCkge1xuICAgICAgZXJyb3JzTGlzdC5wdXNoKGVycik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWF0Y2ggYHJlYCBhbmQgcmV0dXJuIGNhcHR1cmVzLlxuICAgKlxuICAgKiBAcGFyYW0ge1JlZ0V4cH0gcmVcbiAgICogQHJldHVybiB7dW5kZWZpbmVkfEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcbiAgICB2YXIgbSA9IHJlLmV4ZWMoc3R5bGUpO1xuICAgIGlmICghbSkgcmV0dXJuO1xuICAgIHZhciBzdHIgPSBtWzBdO1xuICAgIHVwZGF0ZVBvc2l0aW9uKHN0cik7XG4gICAgc3R5bGUgPSBzdHlsZS5zbGljZShzdHIubGVuZ3RoKTtcbiAgICByZXR1cm4gbTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSB3aGl0ZXNwYWNlLlxuICAgKi9cbiAgZnVuY3Rpb24gd2hpdGVzcGFjZSgpIHtcbiAgICBtYXRjaChXSElURVNQQUNFX1JFR0VYKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBjb21tZW50cy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3RbXX0gW3J1bGVzXVxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX1cbiAgICovXG4gIGZ1bmN0aW9uIGNvbW1lbnRzKHJ1bGVzKSB7XG4gICAgdmFyIGM7XG4gICAgcnVsZXMgPSBydWxlcyB8fCBbXTtcbiAgICB3aGlsZSAoKGMgPSBjb21tZW50KCkpKSB7XG4gICAgICBpZiAoYyAhPT0gZmFsc2UpIHtcbiAgICAgICAgcnVsZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGNvbW1lbnQuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQHRocm93cyB7RXJyb3J9XG4gICAqL1xuICBmdW5jdGlvbiBjb21tZW50KCkge1xuICAgIHZhciBwb3MgPSBwb3NpdGlvbigpO1xuICAgIGlmIChGT1JXQVJEX1NMQVNIICE9IHN0eWxlLmNoYXJBdCgwKSB8fCBBU1RFUklTSyAhPSBzdHlsZS5jaGFyQXQoMSkpIHJldHVybjtcblxuICAgIHZhciBpID0gMjtcbiAgICB3aGlsZSAoXG4gICAgICBFTVBUWV9TVFJJTkcgIT0gc3R5bGUuY2hhckF0KGkpICYmXG4gICAgICAoQVNURVJJU0sgIT0gc3R5bGUuY2hhckF0KGkpIHx8IEZPUldBUkRfU0xBU0ggIT0gc3R5bGUuY2hhckF0KGkgKyAxKSlcbiAgICApIHtcbiAgICAgICsraTtcbiAgICB9XG4gICAgaSArPSAyO1xuXG4gICAgaWYgKEVNUFRZX1NUUklORyA9PT0gc3R5bGUuY2hhckF0KGkgLSAxKSkge1xuICAgICAgcmV0dXJuIGVycm9yKCdFbmQgb2YgY29tbWVudCBtaXNzaW5nJyk7XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IHN0eWxlLnNsaWNlKDIsIGkgLSAyKTtcbiAgICBjb2x1bW4gKz0gMjtcbiAgICB1cGRhdGVQb3NpdGlvbihzdHIpO1xuICAgIHN0eWxlID0gc3R5bGUuc2xpY2UoaSk7XG4gICAgY29sdW1uICs9IDI7XG5cbiAgICByZXR1cm4gcG9zKHtcbiAgICAgIHR5cGU6IFRZUEVfQ09NTUVOVCxcbiAgICAgIGNvbW1lbnQ6IHN0clxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRlY2xhcmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqIEB0aHJvd3Mge0Vycm9yfVxuICAgKi9cbiAgZnVuY3Rpb24gZGVjbGFyYXRpb24oKSB7XG4gICAgdmFyIHBvcyA9IHBvc2l0aW9uKCk7XG5cbiAgICAvLyBwcm9wXG4gICAgdmFyIHByb3AgPSBtYXRjaChQUk9QRVJUWV9SRUdFWCk7XG4gICAgaWYgKCFwcm9wKSByZXR1cm47XG4gICAgY29tbWVudCgpO1xuXG4gICAgLy8gOlxuICAgIGlmICghbWF0Y2goQ09MT05fUkVHRVgpKSByZXR1cm4gZXJyb3IoXCJwcm9wZXJ0eSBtaXNzaW5nICc6J1wiKTtcblxuICAgIC8vIHZhbFxuICAgIHZhciB2YWwgPSBtYXRjaChWQUxVRV9SRUdFWCk7XG5cbiAgICB2YXIgcmV0ID0gcG9zKHtcbiAgICAgIHR5cGU6IFRZUEVfREVDTEFSQVRJT04sXG4gICAgICBwcm9wZXJ0eTogdHJpbShwcm9wWzBdLnJlcGxhY2UoQ09NTUVOVF9SRUdFWCwgRU1QVFlfU1RSSU5HKSksXG4gICAgICB2YWx1ZTogdmFsXG4gICAgICAgID8gdHJpbSh2YWxbMF0ucmVwbGFjZShDT01NRU5UX1JFR0VYLCBFTVBUWV9TVFJJTkcpKVxuICAgICAgICA6IEVNUFRZX1NUUklOR1xuICAgIH0pO1xuXG4gICAgLy8gO1xuICAgIG1hdGNoKFNFTUlDT0xPTl9SRUdFWCk7XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGRlY2xhcmF0aW9ucy5cbiAgICpcbiAgICogQHJldHVybiB7T2JqZWN0W119XG4gICAqL1xuICBmdW5jdGlvbiBkZWNsYXJhdGlvbnMoKSB7XG4gICAgdmFyIGRlY2xzID0gW107XG5cbiAgICBjb21tZW50cyhkZWNscyk7XG5cbiAgICAvLyBkZWNsYXJhdGlvbnNcbiAgICB2YXIgZGVjbDtcbiAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xuICAgICAgaWYgKGRlY2wgIT09IGZhbHNlKSB7XG4gICAgICAgIGRlY2xzLnB1c2goZGVjbCk7XG4gICAgICAgIGNvbW1lbnRzKGRlY2xzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVjbHM7XG4gIH1cblxuICB3aGl0ZXNwYWNlKCk7XG4gIHJldHVybiBkZWNsYXJhdGlvbnMoKTtcbn07XG5cbi8qKlxuICogVHJpbSBgc3RyYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIgPyBzdHIucmVwbGFjZShUUklNX1JFR0VYLCBFTVBUWV9TVFJJTkcpIDogRU1QVFlfU1RSSU5HO1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERlZmluaXRpb25GYWN0b3J5XG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxuXG4vLyBHZXQgYSBkZWZpbml0aW9uIGluIGBub2RlYCBieSBgaWRlbnRpZmllcmAuXG5mdW5jdGlvbiBnZXREZWZpbml0aW9uRmFjdG9yeShub2RlLCBvcHRpb25zKSB7XG4gIHJldHVybiBnZXR0ZXJGYWN0b3J5KGdhdGhlcihub2RlLCBvcHRpb25zKSlcbn1cblxuLy8gR2F0aGVyIGFsbCBkZWZpbml0aW9ucyBpbiBgbm9kZWBcbmZ1bmN0aW9uIGdhdGhlcihub2RlKSB7XG4gIHZhciBjYWNoZSA9IHt9XG5cbiAgaWYgKCFub2RlIHx8ICFub2RlLnR5cGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21kYXN0LXV0aWwtZGVmaW5pdGlvbnMgZXhwZWN0ZWQgbm9kZScpXG4gIH1cblxuICB2aXNpdChub2RlLCAnZGVmaW5pdGlvbicsIG9uZGVmaW5pdGlvbilcblxuICByZXR1cm4gY2FjaGVcblxuICBmdW5jdGlvbiBvbmRlZmluaXRpb24oZGVmaW5pdGlvbikge1xuICAgIHZhciBpZCA9IG5vcm1hbGlzZShkZWZpbml0aW9uLmlkZW50aWZpZXIpXG4gICAgaWYgKCFvd24uY2FsbChjYWNoZSwgaWQpKSB7XG4gICAgICBjYWNoZVtpZF0gPSBkZWZpbml0aW9uXG4gICAgfVxuICB9XG59XG5cbi8vIEZhY3RvcnkgdG8gZ2V0IGEgbm9kZSBmcm9tIHRoZSBnaXZlbiBkZWZpbml0aW9uLWNhY2hlLlxuZnVuY3Rpb24gZ2V0dGVyRmFjdG9yeShjYWNoZSkge1xuICByZXR1cm4gZ2V0dGVyXG5cbiAgLy8gR2V0IGEgbm9kZSBmcm9tIHRoZSBib3VuZCBkZWZpbml0aW9uLWNhY2hlLlxuICBmdW5jdGlvbiBnZXR0ZXIoaWRlbnRpZmllcikge1xuICAgIHZhciBpZCA9IGlkZW50aWZpZXIgJiYgbm9ybWFsaXNlKGlkZW50aWZpZXIpXG4gICAgcmV0dXJuIGlkICYmIG93bi5jYWxsKGNhY2hlLCBpZCkgPyBjYWNoZVtpZF0gOiBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gbm9ybWFsaXNlKGlkZW50aWZpZXIpIHtcbiAgcmV0dXJuIGlkZW50aWZpZXIudG9VcHBlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliJylcbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFsbFxuXG52YXIgb25lID0gcmVxdWlyZSgnLi9vbmUnKVxuXG5mdW5jdGlvbiBhbGwoaCwgcGFyZW50KSB7XG4gIHZhciBub2RlcyA9IHBhcmVudC5jaGlsZHJlbiB8fCBbXVxuICB2YXIgbGVuZ3RoID0gbm9kZXMubGVuZ3RoXG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcmVzdWx0XG4gIHZhciBoZWFkXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHQgPSBvbmUoaCwgbm9kZXNbaW5kZXhdLCBwYXJlbnQpXG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICBpZiAoaW5kZXggJiYgbm9kZXNbaW5kZXggLSAxXS50eXBlID09PSAnYnJlYWsnKSB7XG4gICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICByZXN1bHQudmFsdWUgPSByZXN1bHQudmFsdWUucmVwbGFjZSgvXlxccysvLCAnJylcbiAgICAgICAgfVxuXG4gICAgICAgIGhlYWQgPSByZXN1bHQuY2hpbGRyZW4gJiYgcmVzdWx0LmNoaWxkcmVuWzBdXG5cbiAgICAgICAgaWYgKGhlYWQgJiYgaGVhZC52YWx1ZSkge1xuICAgICAgICAgIGhlYWQudmFsdWUgPSBoZWFkLnZhbHVlLnJlcGxhY2UoL15cXHMrLywgJycpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFsdWVzID0gdmFsdWVzLmNvbmNhdChyZXN1bHQpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlc1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZ2VuZXJhdGVGb290bm90ZXNcblxudmFyIHRoZW1hdGljQnJlYWsgPSByZXF1aXJlKCcuL2hhbmRsZXJzL3RoZW1hdGljLWJyZWFrJylcbnZhciBsaXN0ID0gcmVxdWlyZSgnLi9oYW5kbGVycy9saXN0JylcbnZhciB3cmFwID0gcmVxdWlyZSgnLi93cmFwJylcblxuZnVuY3Rpb24gZ2VuZXJhdGVGb290bm90ZXMoaCkge1xuICB2YXIgZm9vdG5vdGVCeUlkID0gaC5mb290bm90ZUJ5SWRcbiAgdmFyIGZvb3Rub3RlT3JkZXIgPSBoLmZvb3Rub3RlT3JkZXJcbiAgdmFyIGxlbmd0aCA9IGZvb3Rub3RlT3JkZXIubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBsaXN0SXRlbXMgPSBbXVxuICB2YXIgZGVmXG4gIHZhciBiYWNrUmVmZXJlbmNlXG4gIHZhciBjb250ZW50XG4gIHZhciB0YWlsXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBkZWYgPSBmb290bm90ZUJ5SWRbZm9vdG5vdGVPcmRlcltpbmRleF0udG9VcHBlckNhc2UoKV1cblxuICAgIGlmICghZGVmKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGNvbnRlbnQgPSBkZWYuY2hpbGRyZW4uY29uY2F0KClcbiAgICB0YWlsID0gY29udGVudFtjb250ZW50Lmxlbmd0aCAtIDFdXG4gICAgYmFja1JlZmVyZW5jZSA9IHtcbiAgICAgIHR5cGU6ICdsaW5rJyxcbiAgICAgIHVybDogJyNmbnJlZi0nICsgZGVmLmlkZW50aWZpZXIsXG4gICAgICBkYXRhOiB7aFByb3BlcnRpZXM6IHtjbGFzc05hbWU6IFsnZm9vdG5vdGUtYmFja3JlZiddfX0sXG4gICAgICBjaGlsZHJlbjogW3t0eXBlOiAndGV4dCcsIHZhbHVlOiAn4oapJ31dXG4gICAgfVxuXG4gICAgaWYgKCF0YWlsIHx8IHRhaWwudHlwZSAhPT0gJ3BhcmFncmFwaCcpIHtcbiAgICAgIHRhaWwgPSB7dHlwZTogJ3BhcmFncmFwaCcsIGNoaWxkcmVuOiBbXX1cbiAgICAgIGNvbnRlbnQucHVzaCh0YWlsKVxuICAgIH1cblxuICAgIHRhaWwuY2hpbGRyZW4ucHVzaChiYWNrUmVmZXJlbmNlKVxuXG4gICAgbGlzdEl0ZW1zLnB1c2goe1xuICAgICAgdHlwZTogJ2xpc3RJdGVtJyxcbiAgICAgIGRhdGE6IHtoUHJvcGVydGllczoge2lkOiAnZm4tJyArIGRlZi5pZGVudGlmaWVyfX0sXG4gICAgICBjaGlsZHJlbjogY29udGVudCxcbiAgICAgIHBvc2l0aW9uOiBkZWYucG9zaXRpb25cbiAgICB9KVxuICB9XG5cbiAgaWYgKGxpc3RJdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGgoXG4gICAgbnVsbCxcbiAgICAnZGl2JyxcbiAgICB7Y2xhc3NOYW1lOiBbJ2Zvb3Rub3RlcyddfSxcbiAgICB3cmFwKFxuICAgICAgW1xuICAgICAgICB0aGVtYXRpY0JyZWFrKGgpLFxuICAgICAgICBsaXN0KGgsIHt0eXBlOiAnbGlzdCcsIG9yZGVyZWQ6IHRydWUsIGNoaWxkcmVuOiBsaXN0SXRlbXN9KVxuICAgICAgXSxcbiAgICAgIHRydWVcbiAgICApXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJsb2NrcXVvdGVcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBibG9ja3F1b3RlKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2Jsb2NrcXVvdGUnLCB3cmFwKGFsbChoLCBub2RlKSwgdHJ1ZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBoYXJkQnJlYWtcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gaGFyZEJyZWFrKGgsIG5vZGUpIHtcbiAgcmV0dXJuIFtoKG5vZGUsICdicicpLCB1KCd0ZXh0JywgJ1xcbicpXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY29kZVxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxuXG5mdW5jdGlvbiBjb2RlKGgsIG5vZGUpIHtcbiAgdmFyIHZhbHVlID0gbm9kZS52YWx1ZSA/IG5vZGUudmFsdWUgKyAnXFxuJyA6ICcnXG4gIC8vIFRvIGRvOiBuZXh0IG1ham9yLCB1c2UgYG5vZGUubGFuZ2Agdy9vIHJlZ2V4LCB0aGUgc3BsaXR0aW5n4oCZcyBiZWVuIGdvaW5nXG4gIC8vIG9uIGZvciB5ZWFycyBpbiByZW1hcmsgbm93LlxuICB2YXIgbGFuZyA9IG5vZGUubGFuZyAmJiBub2RlLmxhbmcubWF0Y2goL15bXiBcXHRdKyg/PVsgXFx0XXwkKS8pXG4gIHZhciBwcm9wcyA9IHt9XG4gIHZhciBjb2RlXG5cbiAgaWYgKGxhbmcpIHtcbiAgICBwcm9wcy5jbGFzc05hbWUgPSBbJ2xhbmd1YWdlLScgKyBsYW5nXVxuICB9XG5cbiAgY29kZSA9IGgobm9kZSwgJ2NvZGUnLCBwcm9wcywgW3UoJ3RleHQnLCB2YWx1ZSldKVxuXG4gIGlmIChub2RlLm1ldGEpIHtcbiAgICBjb2RlLmRhdGEgPSB7bWV0YTogbm9kZS5tZXRhfVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZS5wb3NpdGlvbiwgJ3ByZScsIFtjb2RlXSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmlrZXRocm91Z2hcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHN0cmlrZXRocm91Z2goaCwgbm9kZSkge1xuICByZXR1cm4gaChub2RlLCAnZGVsJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZW1waGFzaXNcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGVtcGhhc2lzKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ2VtJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZm9vdG5vdGVSZWZlcmVuY2VcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gZm9vdG5vdGVSZWZlcmVuY2UoaCwgbm9kZSkge1xuICB2YXIgZm9vdG5vdGVPcmRlciA9IGguZm9vdG5vdGVPcmRlclxuICB2YXIgaWRlbnRpZmllciA9IFN0cmluZyhub2RlLmlkZW50aWZpZXIpXG5cbiAgaWYgKGZvb3Rub3RlT3JkZXIuaW5kZXhPZihpZGVudGlmaWVyKSA9PT0gLTEpIHtcbiAgICBmb290bm90ZU9yZGVyLnB1c2goaWRlbnRpZmllcilcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUucG9zaXRpb24sICdzdXAnLCB7aWQ6ICdmbnJlZi0nICsgaWRlbnRpZmllcn0sIFtcbiAgICBoKG5vZGUsICdhJywge2hyZWY6ICcjZm4tJyArIGlkZW50aWZpZXIsIGNsYXNzTmFtZTogWydmb290bm90ZS1yZWYnXX0sIFtcbiAgICAgIHUoJ3RleHQnLCBub2RlLmxhYmVsIHx8IGlkZW50aWZpZXIpXG4gICAgXSlcbiAgXSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZvb3Rub3RlXG5cbnZhciBmb290bm90ZVJlZmVyZW5jZSA9IHJlcXVpcmUoJy4vZm9vdG5vdGUtcmVmZXJlbmNlJylcblxuZnVuY3Rpb24gZm9vdG5vdGUoaCwgbm9kZSkge1xuICB2YXIgZm9vdG5vdGVCeUlkID0gaC5mb290bm90ZUJ5SWRcbiAgdmFyIGZvb3Rub3RlT3JkZXIgPSBoLmZvb3Rub3RlT3JkZXJcbiAgdmFyIGlkZW50aWZpZXIgPSAxXG5cbiAgd2hpbGUgKGlkZW50aWZpZXIgaW4gZm9vdG5vdGVCeUlkKSB7XG4gICAgaWRlbnRpZmllcisrXG4gIH1cblxuICBpZGVudGlmaWVyID0gU3RyaW5nKGlkZW50aWZpZXIpXG5cbiAgLy8gTm8gbmVlZCB0byBjaGVjayBpZiBgaWRlbnRpZmllcmAgZXhpc3RzIGluIGBmb290bm90ZU9yZGVyYCwgaXTigJlzIGd1YXJhbnRlZWRcbiAgLy8gdG8gbm90IGV4aXN0IGJlY2F1c2Ugd2UganVzdCBnZW5lcmF0ZWQgaXQuXG4gIGZvb3Rub3RlT3JkZXIucHVzaChpZGVudGlmaWVyKVxuXG4gIGZvb3Rub3RlQnlJZFtpZGVudGlmaWVyXSA9IHtcbiAgICB0eXBlOiAnZm9vdG5vdGVEZWZpbml0aW9uJyxcbiAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgIGNoaWxkcmVuOiBbe3R5cGU6ICdwYXJhZ3JhcGgnLCBjaGlsZHJlbjogbm9kZS5jaGlsZHJlbn1dLFxuICAgIHBvc2l0aW9uOiBub2RlLnBvc2l0aW9uXG4gIH1cblxuICByZXR1cm4gZm9vdG5vdGVSZWZlcmVuY2UoaCwge1xuICAgIHR5cGU6ICdmb290bm90ZVJlZmVyZW5jZScsXG4gICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICBwb3NpdGlvbjogbm9kZS5wb3NpdGlvblxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gaGVhZGluZ1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gaGVhZGluZyhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdoJyArIG5vZGUuZGVwdGgsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGh0bWxcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuLy8gUmV0dXJuIGVpdGhlciBhIGByYXdgIG5vZGUgaW4gZGFuZ2Vyb3VzIG1vZGUsIG90aGVyd2lzZSBub3RoaW5nLlxuZnVuY3Rpb24gaHRtbChoLCBub2RlKSB7XG4gIHJldHVybiBoLmRhbmdlcm91cyA/IGguYXVnbWVudChub2RlLCB1KCdyYXcnLCBub2RlLnZhbHVlKSkgOiBudWxsXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbWFnZVJlZmVyZW5jZVxuXG52YXIgbm9ybWFsaXplID0gcmVxdWlyZSgnbWR1cmwvZW5jb2RlJylcbnZhciByZXZlcnQgPSByZXF1aXJlKCcuLi9yZXZlcnQnKVxuXG5mdW5jdGlvbiBpbWFnZVJlZmVyZW5jZShoLCBub2RlKSB7XG4gIHZhciBkZWYgPSBoLmRlZmluaXRpb24obm9kZS5pZGVudGlmaWVyKVxuICB2YXIgcHJvcHNcblxuICBpZiAoIWRlZikge1xuICAgIHJldHVybiByZXZlcnQoaCwgbm9kZSlcbiAgfVxuXG4gIHByb3BzID0ge3NyYzogbm9ybWFsaXplKGRlZi51cmwgfHwgJycpLCBhbHQ6IG5vZGUuYWx0fVxuXG4gIGlmIChkZWYudGl0bGUgIT09IG51bGwgJiYgZGVmLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IGRlZi50aXRsZVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2ltZycsIHByb3BzKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGltYWdlXG5cbmZ1bmN0aW9uIGltYWdlKGgsIG5vZGUpIHtcbiAgdmFyIHByb3BzID0ge3NyYzogbm9ybWFsaXplKG5vZGUudXJsKSwgYWx0OiBub2RlLmFsdH1cblxuICBpZiAobm9kZS50aXRsZSAhPT0gbnVsbCAmJiBub2RlLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IG5vZGUudGl0bGVcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdpbWcnLCBwcm9wcylcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYmxvY2txdW90ZTogcmVxdWlyZSgnLi9ibG9ja3F1b3RlJyksXG4gIGJyZWFrOiByZXF1aXJlKCcuL2JyZWFrJyksXG4gIGNvZGU6IHJlcXVpcmUoJy4vY29kZScpLFxuICBkZWxldGU6IHJlcXVpcmUoJy4vZGVsZXRlJyksXG4gIGVtcGhhc2lzOiByZXF1aXJlKCcuL2VtcGhhc2lzJyksXG4gIGZvb3Rub3RlUmVmZXJlbmNlOiByZXF1aXJlKCcuL2Zvb3Rub3RlLXJlZmVyZW5jZScpLFxuICBmb290bm90ZTogcmVxdWlyZSgnLi9mb290bm90ZScpLFxuICBoZWFkaW5nOiByZXF1aXJlKCcuL2hlYWRpbmcnKSxcbiAgaHRtbDogcmVxdWlyZSgnLi9odG1sJyksXG4gIGltYWdlUmVmZXJlbmNlOiByZXF1aXJlKCcuL2ltYWdlLXJlZmVyZW5jZScpLFxuICBpbWFnZTogcmVxdWlyZSgnLi9pbWFnZScpLFxuICBpbmxpbmVDb2RlOiByZXF1aXJlKCcuL2lubGluZS1jb2RlJyksXG4gIGxpbmtSZWZlcmVuY2U6IHJlcXVpcmUoJy4vbGluay1yZWZlcmVuY2UnKSxcbiAgbGluazogcmVxdWlyZSgnLi9saW5rJyksXG4gIGxpc3RJdGVtOiByZXF1aXJlKCcuL2xpc3QtaXRlbScpLFxuICBsaXN0OiByZXF1aXJlKCcuL2xpc3QnKSxcbiAgcGFyYWdyYXBoOiByZXF1aXJlKCcuL3BhcmFncmFwaCcpLFxuICByb290OiByZXF1aXJlKCcuL3Jvb3QnKSxcbiAgc3Ryb25nOiByZXF1aXJlKCcuL3N0cm9uZycpLFxuICB0YWJsZTogcmVxdWlyZSgnLi90YWJsZScpLFxuICB0ZXh0OiByZXF1aXJlKCcuL3RleHQnKSxcbiAgdGhlbWF0aWNCcmVhazogcmVxdWlyZSgnLi90aGVtYXRpYy1icmVhaycpLFxuICB0b21sOiBpZ25vcmUsXG4gIHlhbWw6IGlnbm9yZSxcbiAgZGVmaW5pdGlvbjogaWdub3JlLFxuICBmb290bm90ZURlZmluaXRpb246IGlnbm9yZVxufVxuXG4vLyBSZXR1cm4gbm90aGluZyBmb3Igbm9kZXMgdGhhdCBhcmUgaWdub3JlZC5cbmZ1bmN0aW9uIGlnbm9yZSgpIHtcbiAgcmV0dXJuIG51bGxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlubGluZUNvZGVcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcblxuZnVuY3Rpb24gaW5saW5lQ29kZShoLCBub2RlKSB7XG4gIHZhciB2YWx1ZSA9IG5vZGUudmFsdWUucmVwbGFjZSgvXFxyP1xcbnxcXHIvZywgJyAnKVxuICByZXR1cm4gaChub2RlLCAnY29kZScsIFt1KCd0ZXh0JywgdmFsdWUpXSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpbmtSZWZlcmVuY2VcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJ21kdXJsL2VuY29kZScpXG52YXIgcmV2ZXJ0ID0gcmVxdWlyZSgnLi4vcmV2ZXJ0JylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBsaW5rUmVmZXJlbmNlKGgsIG5vZGUpIHtcbiAgdmFyIGRlZiA9IGguZGVmaW5pdGlvbihub2RlLmlkZW50aWZpZXIpXG4gIHZhciBwcm9wc1xuXG4gIGlmICghZGVmKSB7XG4gICAgcmV0dXJuIHJldmVydChoLCBub2RlKVxuICB9XG5cbiAgcHJvcHMgPSB7aHJlZjogbm9ybWFsaXplKGRlZi51cmwgfHwgJycpfVxuXG4gIGlmIChkZWYudGl0bGUgIT09IG51bGwgJiYgZGVmLnRpdGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICBwcm9wcy50aXRsZSA9IGRlZi50aXRsZVxuICB9XG5cbiAgcmV0dXJuIGgobm9kZSwgJ2EnLCBwcm9wcywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdtZHVybC9lbmNvZGUnKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbGlua1xuXG5mdW5jdGlvbiBsaW5rKGgsIG5vZGUpIHtcbiAgdmFyIHByb3BzID0ge2hyZWY6IG5vcm1hbGl6ZShub2RlLnVybCl9XG5cbiAgaWYgKG5vZGUudGl0bGUgIT09IG51bGwgJiYgbm9kZS50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcHJvcHMudGl0bGUgPSBub2RlLnRpdGxlXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnYScsIHByb3BzLCBhbGwoaCwgbm9kZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0SXRlbVxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIGxpc3RJdGVtKGgsIG5vZGUsIHBhcmVudCkge1xuICB2YXIgcmVzdWx0ID0gYWxsKGgsIG5vZGUpXG4gIHZhciBoZWFkID0gcmVzdWx0WzBdXG4gIHZhciBsb29zZSA9IHBhcmVudCA/IGxpc3RMb29zZShwYXJlbnQpIDogbGlzdEl0ZW1Mb29zZShub2RlKVxuICB2YXIgcHJvcHMgPSB7fVxuICB2YXIgd3JhcHBlZCA9IFtdXG4gIHZhciBsZW5ndGhcbiAgdmFyIGluZGV4XG4gIHZhciBjaGlsZFxuXG4gIGlmICh0eXBlb2Ygbm9kZS5jaGVja2VkID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAoIWhlYWQgfHwgaGVhZC50YWdOYW1lICE9PSAncCcpIHtcbiAgICAgIGhlYWQgPSBoKG51bGwsICdwJywgW10pXG4gICAgICByZXN1bHQudW5zaGlmdChoZWFkKVxuICAgIH1cblxuICAgIGlmIChoZWFkLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIGhlYWQuY2hpbGRyZW4udW5zaGlmdCh1KCd0ZXh0JywgJyAnKSlcbiAgICB9XG5cbiAgICBoZWFkLmNoaWxkcmVuLnVuc2hpZnQoXG4gICAgICBoKG51bGwsICdpbnB1dCcsIHtcbiAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcbiAgICAgICAgY2hlY2tlZDogbm9kZS5jaGVja2VkLFxuICAgICAgICBkaXNhYmxlZDogdHJ1ZVxuICAgICAgfSlcbiAgICApXG5cbiAgICAvLyBBY2NvcmRpbmcgdG8gZ2l0aHViLW1hcmtkb3duLWNzcywgdGhpcyBjbGFzcyBoaWRlcyBidWxsZXQuXG4gICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9naXRodWItbWFya2Rvd24tY3NzPi5cbiAgICBwcm9wcy5jbGFzc05hbWUgPSBbJ3Rhc2stbGlzdC1pdGVtJ11cbiAgfVxuXG4gIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGhcbiAgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY2hpbGQgPSByZXN1bHRbaW5kZXhdXG5cbiAgICAvLyBBZGQgZW9scyBiZWZvcmUgbm9kZXMsIGV4Y2VwdCBpZiB0aGlzIGlzIGEgbG9vc2UsIGZpcnN0IHBhcmFncmFwaC5cbiAgICBpZiAobG9vc2UgfHwgaW5kZXggIT09IDAgfHwgY2hpbGQudGFnTmFtZSAhPT0gJ3AnKSB7XG4gICAgICB3cmFwcGVkLnB1c2godSgndGV4dCcsICdcXG4nKSlcbiAgICB9XG5cbiAgICBpZiAoY2hpbGQudGFnTmFtZSA9PT0gJ3AnICYmICFsb29zZSkge1xuICAgICAgd3JhcHBlZCA9IHdyYXBwZWQuY29uY2F0KGNoaWxkLmNoaWxkcmVuKVxuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVkLnB1c2goY2hpbGQpXG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGEgZmluYWwgZW9sLlxuICBpZiAobGVuZ3RoICYmIChsb29zZSB8fCBjaGlsZC50YWdOYW1lICE9PSAncCcpKSB7XG4gICAgd3JhcHBlZC5wdXNoKHUoJ3RleHQnLCAnXFxuJykpXG4gIH1cblxuICByZXR1cm4gaChub2RlLCAnbGknLCBwcm9wcywgd3JhcHBlZClcbn1cblxuZnVuY3Rpb24gbGlzdExvb3NlKG5vZGUpIHtcbiAgdmFyIGxvb3NlID0gbm9kZS5zcHJlYWRcbiAgdmFyIGNoaWxkcmVuID0gbm9kZS5jaGlsZHJlblxuICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCFsb29zZSAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgbG9vc2UgPSBsaXN0SXRlbUxvb3NlKGNoaWxkcmVuW2luZGV4XSlcbiAgfVxuXG4gIHJldHVybiBsb29zZVxufVxuXG5mdW5jdGlvbiBsaXN0SXRlbUxvb3NlKG5vZGUpIHtcbiAgdmFyIHNwcmVhZCA9IG5vZGUuc3ByZWFkXG5cbiAgcmV0dXJuIHNwcmVhZCA9PT0gdW5kZWZpbmVkIHx8IHNwcmVhZCA9PT0gbnVsbFxuICAgID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAxXG4gICAgOiBzcHJlYWRcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RcblxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiBsaXN0KGgsIG5vZGUpIHtcbiAgdmFyIHByb3BzID0ge31cbiAgdmFyIG5hbWUgPSBub2RlLm9yZGVyZWQgPyAnb2wnIDogJ3VsJ1xuICB2YXIgaXRlbXNcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aFxuXG4gIGlmICh0eXBlb2Ygbm9kZS5zdGFydCA9PT0gJ251bWJlcicgJiYgbm9kZS5zdGFydCAhPT0gMSkge1xuICAgIHByb3BzLnN0YXJ0ID0gbm9kZS5zdGFydFxuICB9XG5cbiAgaXRlbXMgPSBhbGwoaCwgbm9kZSlcbiAgbGVuZ3RoID0gaXRlbXMubGVuZ3RoXG5cbiAgLy8gTGlrZSBHaXRIdWIsIGFkZCBhIGNsYXNzIGZvciBjdXN0b20gc3R5bGluZy5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoXG4gICAgICBpdGVtc1tpbmRleF0ucHJvcGVydGllcy5jbGFzc05hbWUgJiZcbiAgICAgIGl0ZW1zW2luZGV4XS5wcm9wZXJ0aWVzLmNsYXNzTmFtZS5pbmRleE9mKCd0YXNrLWxpc3QtaXRlbScpICE9PSAtMVxuICAgICkge1xuICAgICAgcHJvcHMuY2xhc3NOYW1lID0gWydjb250YWlucy10YXNrLWxpc3QnXVxuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaChub2RlLCBuYW1lLCBwcm9wcywgd3JhcChpdGVtcywgdHJ1ZSkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJhZ3JhcGhcblxudmFyIGFsbCA9IHJlcXVpcmUoJy4uL2FsbCcpXG5cbmZ1bmN0aW9uIHBhcmFncmFwaChoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdwJywgYWxsKGgsIG5vZGUpKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdFxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiByb290KGgsIG5vZGUpIHtcbiAgcmV0dXJuIGguYXVnbWVudChub2RlLCB1KCdyb290Jywgd3JhcChhbGwoaCwgbm9kZSkpKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cm9uZ1xuXG52YXIgYWxsID0gcmVxdWlyZSgnLi4vYWxsJylcblxuZnVuY3Rpb24gc3Ryb25nKGgsIG5vZGUpIHtcbiAgcmV0dXJuIGgobm9kZSwgJ3N0cm9uZycsIGFsbChoLCBub2RlKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRhYmxlXG5cbnZhciBwb3NpdGlvbiA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtcG9zaXRpb24nKVxudmFyIHdyYXAgPSByZXF1aXJlKCcuLi93cmFwJylcbnZhciBhbGwgPSByZXF1aXJlKCcuLi9hbGwnKVxuXG5mdW5jdGlvbiB0YWJsZShoLCBub2RlKSB7XG4gIHZhciByb3dzID0gbm9kZS5jaGlsZHJlblxuICB2YXIgaW5kZXggPSByb3dzLmxlbmd0aFxuICB2YXIgYWxpZ24gPSBub2RlLmFsaWduIHx8IFtdXG4gIHZhciBhbGlnbkxlbmd0aCA9IGFsaWduLmxlbmd0aFxuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIHBvc1xuICB2YXIgcm93XG4gIHZhciBvdXRcbiAgdmFyIG5hbWVcbiAgdmFyIGNlbGxcblxuICB3aGlsZSAoaW5kZXgtLSkge1xuICAgIHJvdyA9IHJvd3NbaW5kZXhdLmNoaWxkcmVuXG4gICAgbmFtZSA9IGluZGV4ID09PSAwID8gJ3RoJyA6ICd0ZCdcbiAgICBwb3MgPSBhbGlnbkxlbmd0aCB8fCByb3cubGVuZ3RoXG4gICAgb3V0ID0gW11cblxuICAgIHdoaWxlIChwb3MtLSkge1xuICAgICAgY2VsbCA9IHJvd1twb3NdXG4gICAgICBvdXRbcG9zXSA9IGgoY2VsbCwgbmFtZSwge2FsaWduOiBhbGlnbltwb3NdfSwgY2VsbCA/IGFsbChoLCBjZWxsKSA6IFtdKVxuICAgIH1cblxuICAgIHJlc3VsdFtpbmRleF0gPSBoKHJvd3NbaW5kZXhdLCAndHInLCB3cmFwKG91dCwgdHJ1ZSkpXG4gIH1cblxuICByZXR1cm4gaChcbiAgICBub2RlLFxuICAgICd0YWJsZScsXG4gICAgd3JhcChcbiAgICAgIFtoKHJlc3VsdFswXS5wb3NpdGlvbiwgJ3RoZWFkJywgd3JhcChbcmVzdWx0WzBdXSwgdHJ1ZSkpXS5jb25jYXQoXG4gICAgICAgIHJlc3VsdFsxXVxuICAgICAgICAgID8gaChcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBwb3NpdGlvbi5zdGFydChyZXN1bHRbMV0pLFxuICAgICAgICAgICAgICAgIGVuZDogcG9zaXRpb24uZW5kKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICd0Ym9keScsXG4gICAgICAgICAgICAgIHdyYXAocmVzdWx0LnNsaWNlKDEpLCB0cnVlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogW11cbiAgICAgICksXG4gICAgICB0cnVlXG4gICAgKVxuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0ZXh0XG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbmZ1bmN0aW9uIHRleHQoaCwgbm9kZSkge1xuICByZXR1cm4gaC5hdWdtZW50KFxuICAgIG5vZGUsXG4gICAgdSgndGV4dCcsIFN0cmluZyhub2RlLnZhbHVlKS5yZXBsYWNlKC9bIFxcdF0qKFxccj9cXG58XFxyKVsgXFx0XSovZywgJyQxJykpXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRoZW1hdGljQnJlYWtcblxuZnVuY3Rpb24gdGhlbWF0aWNCcmVhayhoLCBub2RlKSB7XG4gIHJldHVybiBoKG5vZGUsICdocicpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0b0hhc3RcblxudmFyIHUgPSByZXF1aXJlKCd1bmlzdC1idWlsZGVyJylcbnZhciB2aXNpdCA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQnKVxudmFyIHBvc2l0aW9uID0gcmVxdWlyZSgndW5pc3QtdXRpbC1wb3NpdGlvbicpXG52YXIgZ2VuZXJhdGVkID0gcmVxdWlyZSgndW5pc3QtdXRpbC1nZW5lcmF0ZWQnKVxudmFyIGRlZmluaXRpb25zID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1kZWZpbml0aW9ucycpXG52YXIgb25lID0gcmVxdWlyZSgnLi9vbmUnKVxudmFyIGZvb3RlciA9IHJlcXVpcmUoJy4vZm9vdGVyJylcbnZhciBoYW5kbGVycyA9IHJlcXVpcmUoJy4vaGFuZGxlcnMnKVxuXG52YXIgb3duID0ge30uaGFzT3duUHJvcGVydHlcblxudmFyIGRlcHJlY2F0aW9uV2FybmluZ0lzc3VlZCA9IGZhbHNlXG5cbi8vIEZhY3RvcnkgdG8gdHJhbnNmb3JtLlxuZnVuY3Rpb24gZmFjdG9yeSh0cmVlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cblxuICAvLyBJc3N1ZSBhIHdhcm5pbmcgaWYgdGhlIGRlcHJlY2F0ZWQgdGFnICdhbGxvd0Rhbmdlcm91c0hUTUwnIGlzIHVzZWRcbiAgaWYgKHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSFRNTCAhPT0gdW5kZWZpbmVkICYmICFkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQpIHtcbiAgICBkZXByZWNhdGlvbldhcm5pbmdJc3N1ZWQgPSB0cnVlXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ21kYXN0LXV0aWwtdG8taGFzdDogZGVwcmVjYXRpb246IGBhbGxvd0Rhbmdlcm91c0hUTUxgIGlzIG5vbnN0YW5kYXJkLCB1c2UgYGFsbG93RGFuZ2Vyb3VzSHRtbGAgaW5zdGVhZCdcbiAgICApXG4gIH1cblxuICB2YXIgZGFuZ2Vyb3VzID0gc2V0dGluZ3MuYWxsb3dEYW5nZXJvdXNIdG1sIHx8IHNldHRpbmdzLmFsbG93RGFuZ2Vyb3VzSFRNTFxuICB2YXIgZm9vdG5vdGVCeUlkID0ge31cblxuICBoLmRhbmdlcm91cyA9IGRhbmdlcm91c1xuICBoLmRlZmluaXRpb24gPSBkZWZpbml0aW9ucyh0cmVlKVxuICBoLmZvb3Rub3RlQnlJZCA9IGZvb3Rub3RlQnlJZFxuICBoLmZvb3Rub3RlT3JkZXIgPSBbXVxuICBoLmF1Z21lbnQgPSBhdWdtZW50XG4gIGguaGFuZGxlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBoYW5kbGVycywgc2V0dGluZ3MuaGFuZGxlcnMpXG4gIGgudW5rbm93bkhhbmRsZXIgPSBzZXR0aW5ncy51bmtub3duSGFuZGxlclxuICBoLnBhc3NUaHJvdWdoID0gc2V0dGluZ3MucGFzc1Rocm91Z2hcblxuICB2aXNpdCh0cmVlLCAnZm9vdG5vdGVEZWZpbml0aW9uJywgb25mb290bm90ZWRlZmluaXRpb24pXG5cbiAgcmV0dXJuIGhcblxuICAvLyBGaW5hbGlzZSB0aGUgY3JlYXRlZCBgcmlnaHRgLCBhIGhhc3Qgbm9kZSwgZnJvbSBgbGVmdGAsIGFuIG1kYXN0IG5vZGUuXG4gIGZ1bmN0aW9uIGF1Z21lbnQobGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgZGF0YVxuICAgIHZhciBjdHhcblxuICAgIC8vIEhhbmRsZSBgZGF0YS5oTmFtZWAsIGBkYXRhLmhQcm9wZXJ0aWVzLCBgZGF0YS5oQ2hpbGRyZW5gLlxuICAgIGlmIChsZWZ0ICYmIGxlZnQuZGF0YSkge1xuICAgICAgZGF0YSA9IGxlZnQuZGF0YVxuXG4gICAgICBpZiAoZGF0YS5oTmFtZSkge1xuICAgICAgICBpZiAocmlnaHQudHlwZSAhPT0gJ2VsZW1lbnQnKSB7XG4gICAgICAgICAgcmlnaHQgPSB7XG4gICAgICAgICAgICB0eXBlOiAnZWxlbWVudCcsXG4gICAgICAgICAgICB0YWdOYW1lOiAnJyxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmlnaHQudGFnTmFtZSA9IGRhdGEuaE5hbWVcbiAgICAgIH1cblxuICAgICAgaWYgKHJpZ2h0LnR5cGUgPT09ICdlbGVtZW50JyAmJiBkYXRhLmhQcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJpZ2h0LnByb3BlcnRpZXMgPSBPYmplY3QuYXNzaWduKHt9LCByaWdodC5wcm9wZXJ0aWVzLCBkYXRhLmhQcm9wZXJ0aWVzKVxuICAgICAgfVxuXG4gICAgICBpZiAocmlnaHQuY2hpbGRyZW4gJiYgZGF0YS5oQ2hpbGRyZW4pIHtcbiAgICAgICAgcmlnaHQuY2hpbGRyZW4gPSBkYXRhLmhDaGlsZHJlblxuICAgICAgfVxuICAgIH1cblxuICAgIGN0eCA9IGxlZnQgJiYgbGVmdC5wb3NpdGlvbiA/IGxlZnQgOiB7cG9zaXRpb246IGxlZnR9XG5cbiAgICBpZiAoIWdlbmVyYXRlZChjdHgpKSB7XG4gICAgICByaWdodC5wb3NpdGlvbiA9IHtcbiAgICAgICAgc3RhcnQ6IHBvc2l0aW9uLnN0YXJ0KGN0eCksXG4gICAgICAgIGVuZDogcG9zaXRpb24uZW5kKGN0eClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmlnaHRcbiAgfVxuXG4gIC8vIENyZWF0ZSBhbiBlbGVtZW50IGZvciBgbm9kZWAuXG4gIGZ1bmN0aW9uIGgobm9kZSwgdGFnTmFtZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgaWYgKFxuICAgICAgKGNoaWxkcmVuID09PSB1bmRlZmluZWQgfHwgY2hpbGRyZW4gPT09IG51bGwpICYmXG4gICAgICB0eXBlb2YgcHJvcHMgPT09ICdvYmplY3QnICYmXG4gICAgICAnbGVuZ3RoJyBpbiBwcm9wc1xuICAgICkge1xuICAgICAgY2hpbGRyZW4gPSBwcm9wc1xuICAgICAgcHJvcHMgPSB7fVxuICAgIH1cblxuICAgIHJldHVybiBhdWdtZW50KG5vZGUsIHtcbiAgICAgIHR5cGU6ICdlbGVtZW50JyxcbiAgICAgIHRhZ05hbWU6IHRhZ05hbWUsXG4gICAgICBwcm9wZXJ0aWVzOiBwcm9wcyB8fCB7fSxcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbiB8fCBbXVxuICAgIH0pXG4gIH1cblxuICBmdW5jdGlvbiBvbmZvb3Rub3RlZGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgdmFyIGlkID0gU3RyaW5nKGRlZmluaXRpb24uaWRlbnRpZmllcikudG9VcHBlckNhc2UoKVxuXG4gICAgLy8gTWltaWNrIENNIGJlaGF2aW9yIG9mIGxpbmsgZGVmaW5pdGlvbnMuXG4gICAgLy8gU2VlOiA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtZGVmaW5pdGlvbnMvYmxvYi84MjkwOTk5L2luZGV4LmpzI0wyNj4uXG4gICAgaWYgKCFvd24uY2FsbChmb290bm90ZUJ5SWQsIGlkKSkge1xuICAgICAgZm9vdG5vdGVCeUlkW2lkXSA9IGRlZmluaXRpb25cbiAgICB9XG4gIH1cbn1cblxuLy8gVHJhbnNmb3JtIGB0cmVlYCwgd2hpY2ggaXMgYW4gbWRhc3Qgbm9kZSwgdG8gYSBoYXN0IG5vZGUuXG5mdW5jdGlvbiB0b0hhc3QodHJlZSwgb3B0aW9ucykge1xuICB2YXIgaCA9IGZhY3RvcnkodHJlZSwgb3B0aW9ucylcbiAgdmFyIG5vZGUgPSBvbmUoaCwgdHJlZSlcbiAgdmFyIGZvb3QgPSBmb290ZXIoaClcblxuICBpZiAoZm9vdCkge1xuICAgIG5vZGUuY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuLmNvbmNhdCh1KCd0ZXh0JywgJ1xcbicpLCBmb290KVxuICB9XG5cbiAgcmV0dXJuIG5vZGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9uZVxuXG52YXIgdSA9IHJlcXVpcmUoJ3VuaXN0LWJ1aWxkZXInKVxudmFyIGFsbCA9IHJlcXVpcmUoJy4vYWxsJylcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIFRyYW5zZm9ybSBhbiB1bmtub3duIG5vZGUuXG5mdW5jdGlvbiB1bmtub3duKGgsIG5vZGUpIHtcbiAgaWYgKHRleHQobm9kZSkpIHtcbiAgICByZXR1cm4gaC5hdWdtZW50KG5vZGUsIHUoJ3RleHQnLCBub2RlLnZhbHVlKSlcbiAgfVxuXG4gIHJldHVybiBoKG5vZGUsICdkaXYnLCBhbGwoaCwgbm9kZSkpXG59XG5cbi8vIFZpc2l0IGEgbm9kZS5cbmZ1bmN0aW9uIG9uZShoLCBub2RlLCBwYXJlbnQpIHtcbiAgdmFyIHR5cGUgPSBub2RlICYmIG5vZGUudHlwZVxuICB2YXIgZm5cblxuICAvLyBGYWlsIG9uIG5vbi1ub2Rlcy5cbiAgaWYgKCF0eXBlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBnb3QgYCcgKyBub2RlICsgJ2AnKVxuICB9XG5cbiAgaWYgKG93bi5jYWxsKGguaGFuZGxlcnMsIHR5cGUpKSB7XG4gICAgZm4gPSBoLmhhbmRsZXJzW3R5cGVdXG4gIH0gZWxzZSBpZiAoaC5wYXNzVGhyb3VnaCAmJiBoLnBhc3NUaHJvdWdoLmluZGV4T2YodHlwZSkgPiAtMSkge1xuICAgIGZuID0gcmV0dXJuTm9kZVxuICB9IGVsc2Uge1xuICAgIGZuID0gaC51bmtub3duSGFuZGxlclxuICB9XG5cbiAgcmV0dXJuICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgPyBmbiA6IHVua25vd24pKGgsIG5vZGUsIHBhcmVudClcbn1cblxuLy8gQ2hlY2sgaWYgdGhlIG5vZGUgc2hvdWxkIGJlIHJlbmRlcmVyZWQgYXMgYSB0ZXh0IG5vZGUuXG5mdW5jdGlvbiB0ZXh0KG5vZGUpIHtcbiAgdmFyIGRhdGEgPSBub2RlLmRhdGEgfHwge31cblxuICBpZiAoXG4gICAgb3duLmNhbGwoZGF0YSwgJ2hOYW1lJykgfHxcbiAgICBvd24uY2FsbChkYXRhLCAnaFByb3BlcnRpZXMnKSB8fFxuICAgIG93bi5jYWxsKGRhdGEsICdoQ2hpbGRyZW4nKVxuICApIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAndmFsdWUnIGluIG5vZGVcbn1cblxuZnVuY3Rpb24gcmV0dXJuTm9kZShoLCBub2RlKSB7XG4gIHZhciBjbG9uZVxuXG4gIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgY2xvbmUgPSBPYmplY3QuYXNzaWduKHt9LCBub2RlKVxuICAgIGNsb25lLmNoaWxkcmVuID0gYWxsKGgsIG5vZGUpXG4gICAgcmV0dXJuIGNsb25lXG4gIH1cblxuICByZXR1cm4gbm9kZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcmV2ZXJ0XG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG52YXIgYWxsID0gcmVxdWlyZSgnLi9hbGwnKVxuXG4vLyBSZXR1cm4gdGhlIGNvbnRlbnQgb2YgYSByZWZlcmVuY2Ugd2l0aG91dCBkZWZpbml0aW9uIGFzIE1hcmtkb3duLlxuZnVuY3Rpb24gcmV2ZXJ0KGgsIG5vZGUpIHtcbiAgdmFyIHN1YnR5cGUgPSBub2RlLnJlZmVyZW5jZVR5cGVcbiAgdmFyIHN1ZmZpeCA9ICddJ1xuICB2YXIgY29udGVudHNcbiAgdmFyIGhlYWRcbiAgdmFyIHRhaWxcblxuICBpZiAoc3VidHlwZSA9PT0gJ2NvbGxhcHNlZCcpIHtcbiAgICBzdWZmaXggKz0gJ1tdJ1xuICB9IGVsc2UgaWYgKHN1YnR5cGUgPT09ICdmdWxsJykge1xuICAgIHN1ZmZpeCArPSAnWycgKyAobm9kZS5sYWJlbCB8fCBub2RlLmlkZW50aWZpZXIpICsgJ10nXG4gIH1cblxuICBpZiAobm9kZS50eXBlID09PSAnaW1hZ2VSZWZlcmVuY2UnKSB7XG4gICAgcmV0dXJuIHUoJ3RleHQnLCAnIVsnICsgbm9kZS5hbHQgKyBzdWZmaXgpXG4gIH1cblxuICBjb250ZW50cyA9IGFsbChoLCBub2RlKVxuICBoZWFkID0gY29udGVudHNbMF1cblxuICBpZiAoaGVhZCAmJiBoZWFkLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGhlYWQudmFsdWUgPSAnWycgKyBoZWFkLnZhbHVlXG4gIH0gZWxzZSB7XG4gICAgY29udGVudHMudW5zaGlmdCh1KCd0ZXh0JywgJ1snKSlcbiAgfVxuXG4gIHRhaWwgPSBjb250ZW50c1tjb250ZW50cy5sZW5ndGggLSAxXVxuXG4gIGlmICh0YWlsICYmIHRhaWwudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgdGFpbC52YWx1ZSArPSBzdWZmaXhcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50cy5wdXNoKHUoJ3RleHQnLCBzdWZmaXgpKVxuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnRzXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB3cmFwXG5cbnZhciB1ID0gcmVxdWlyZSgndW5pc3QtYnVpbGRlcicpXG5cbi8vIFdyYXAgYG5vZGVzYCB3aXRoIGxpbmUgZmVlZHMgYmV0d2VlbiBlYWNoIGVudHJ5LlxuLy8gT3B0aW9uYWxseSBhZGRzIGxpbmUgZmVlZHMgYXQgdGhlIHN0YXJ0IGFuZCBlbmQuXG5mdW5jdGlvbiB3cmFwKG5vZGVzLCBsb29zZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGxlbmd0aCA9IG5vZGVzLmxlbmd0aFxuXG4gIGlmIChsb29zZSkge1xuICAgIHJlc3VsdC5wdXNoKHUoJ3RleHQnLCAnXFxuJykpXG4gIH1cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGlmIChpbmRleCkge1xuICAgICAgcmVzdWx0LnB1c2godSgndGV4dCcsICdcXG4nKSlcbiAgICB9XG5cbiAgICByZXN1bHQucHVzaChub2Rlc1tpbmRleF0pXG4gIH1cblxuICBpZiAobG9vc2UgJiYgbm9kZXMubGVuZ3RoID4gMCkge1xuICAgIHJlc3VsdC5wdXNoKHUoJ3RleHQnLCAnXFxuJykpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCJcbid1c2Ugc3RyaWN0JztcblxuXG52YXIgZW5jb2RlQ2FjaGUgPSB7fTtcblxuXG4vLyBDcmVhdGUgYSBsb29rdXAgYXJyYXkgd2hlcmUgYW55dGhpbmcgYnV0IGNoYXJhY3RlcnMgaW4gYGNoYXJzYCBzdHJpbmdcbi8vIGFuZCBhbHBoYW51bWVyaWMgY2hhcnMgaXMgcGVyY2VudC1lbmNvZGVkLlxuLy9cbmZ1bmN0aW9uIGdldEVuY29kZUNhY2hlKGV4Y2x1ZGUpIHtcbiAgdmFyIGksIGNoLCBjYWNoZSA9IGVuY29kZUNhY2hlW2V4Y2x1ZGVdO1xuICBpZiAoY2FjaGUpIHsgcmV0dXJuIGNhY2hlOyB9XG5cbiAgY2FjaGUgPSBlbmNvZGVDYWNoZVtleGNsdWRlXSA9IFtdO1xuXG4gIGZvciAoaSA9IDA7IGkgPCAxMjg7IGkrKykge1xuICAgIGNoID0gU3RyaW5nLmZyb21DaGFyQ29kZShpKTtcblxuICAgIGlmICgvXlswLTlhLXpdJC9pLnRlc3QoY2gpKSB7XG4gICAgICAvLyBhbHdheXMgYWxsb3cgdW5lbmNvZGVkIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzXG4gICAgICBjYWNoZS5wdXNoKGNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FjaGUucHVzaCgnJScgKyAoJzAnICsgaS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGkgPSAwOyBpIDwgZXhjbHVkZS5sZW5ndGg7IGkrKykge1xuICAgIGNhY2hlW2V4Y2x1ZGUuY2hhckNvZGVBdChpKV0gPSBleGNsdWRlW2ldO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5cbi8vIEVuY29kZSB1bnNhZmUgY2hhcmFjdGVycyB3aXRoIHBlcmNlbnQtZW5jb2RpbmcsIHNraXBwaW5nIGFscmVhZHlcbi8vIGVuY29kZWQgc2VxdWVuY2VzLlxuLy9cbi8vICAtIHN0cmluZyAgICAgICAtIHN0cmluZyB0byBlbmNvZGVcbi8vICAtIGV4Y2x1ZGUgICAgICAtIGxpc3Qgb2YgY2hhcmFjdGVycyB0byBpZ25vcmUgKGluIGFkZGl0aW9uIHRvIGEtekEtWjAtOSlcbi8vICAtIGtlZXBFc2NhcGVkICAtIGRvbid0IGVuY29kZSAnJScgaW4gYSBjb3JyZWN0IGVzY2FwZSBzZXF1ZW5jZSAoZGVmYXVsdDogdHJ1ZSlcbi8vXG5mdW5jdGlvbiBlbmNvZGUoc3RyaW5nLCBleGNsdWRlLCBrZWVwRXNjYXBlZCkge1xuICB2YXIgaSwgbCwgY29kZSwgbmV4dENvZGUsIGNhY2hlLFxuICAgICAgcmVzdWx0ID0gJyc7XG5cbiAgaWYgKHR5cGVvZiBleGNsdWRlICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGVuY29kZShzdHJpbmcsIGtlZXBFc2NhcGVkKVxuICAgIGtlZXBFc2NhcGVkICA9IGV4Y2x1ZGU7XG4gICAgZXhjbHVkZSA9IGVuY29kZS5kZWZhdWx0Q2hhcnM7XG4gIH1cblxuICBpZiAodHlwZW9mIGtlZXBFc2NhcGVkID09PSAndW5kZWZpbmVkJykge1xuICAgIGtlZXBFc2NhcGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGNhY2hlID0gZ2V0RW5jb2RlQ2FjaGUoZXhjbHVkZSk7XG5cbiAgZm9yIChpID0gMCwgbCA9IHN0cmluZy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBjb2RlID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cbiAgICBpZiAoa2VlcEVzY2FwZWQgJiYgY29kZSA9PT0gMHgyNSAvKiAlICovICYmIGkgKyAyIDwgbCkge1xuICAgICAgaWYgKC9eWzAtOWEtZl17Mn0kL2kudGVzdChzdHJpbmcuc2xpY2UoaSArIDEsIGkgKyAzKSkpIHtcbiAgICAgICAgcmVzdWx0ICs9IHN0cmluZy5zbGljZShpLCBpICsgMyk7XG4gICAgICAgIGkgKz0gMjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvZGUgPCAxMjgpIHtcbiAgICAgIHJlc3VsdCArPSBjYWNoZVtjb2RlXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChjb2RlID49IDB4RDgwMCAmJiBjb2RlIDw9IDB4REZGRikge1xuICAgICAgaWYgKGNvZGUgPj0gMHhEODAwICYmIGNvZGUgPD0gMHhEQkZGICYmIGkgKyAxIDwgbCkge1xuICAgICAgICBuZXh0Q29kZSA9IHN0cmluZy5jaGFyQ29kZUF0KGkgKyAxKTtcbiAgICAgICAgaWYgKG5leHRDb2RlID49IDB4REMwMCAmJiBuZXh0Q29kZSA8PSAweERGRkYpIHtcbiAgICAgICAgICByZXN1bHQgKz0gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ1tpXSArIHN0cmluZ1tpICsgMV0pO1xuICAgICAgICAgIGkrKztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0ICs9ICclRUYlQkYlQkQnO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZW5jb2RlLmRlZmF1bHRDaGFycyAgID0gXCI7Lz86QCY9KyQsLV8uIX4qJygpI1wiO1xuZW5jb2RlLmNvbXBvbmVudENoYXJzID0gXCItXy4hfionKClcIjtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGVuY29kZTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLk1hcmtkb3duQ29tcG9uZW50c19oZWFkZXJfXzJOQ3AzIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4uTWFya2Rvd25Db21wb25lbnRzX2hlYWRlcl9fMk5DcDM6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4peGXFxcIjtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuXFxuLk1hcmtkb3duQ29tcG9uZW50c19zdWJIZWFkZXJfX056c3VaIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG4uTWFya2Rvd25Db21wb25lbnRzX3N1YkhlYWRlcl9fTnpzdVo6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4peOXFxcIjtcXG4gIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL01hcmtkb3duQ29tcG9uZW50cy5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxjQUFBO0FBRUY7QUFERTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUdKOztBQUFBO0VBQ0UsY0FBQTtBQUdGO0FBRkU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFJSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgJjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIuKXhlxcXCI7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG4gIH1cXG59XFxuLnN1YkhlYWRlciB7XFxuICBmb250LXNpemU6IDFlbTtcXG4gICY6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCLil45cXFwiO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImhlYWRlclwiOiBcIk1hcmtkb3duQ29tcG9uZW50c19oZWFkZXJfXzJOQ3AzXCIsXG5cdFwic3ViSGVhZGVyXCI6IFwiTWFya2Rvd25Db21wb25lbnRzX3N1YkhlYWRlcl9fTnpzdVpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4vbm9ybWFsaXplJylcbnZhciBEZWZpbmVkSW5mbyA9IHJlcXVpcmUoJy4vbGliL3V0aWwvZGVmaW5lZC1pbmZvJylcbnZhciBJbmZvID0gcmVxdWlyZSgnLi9saWIvdXRpbC9pbmZvJylcblxudmFyIGRhdGEgPSAnZGF0YSdcblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kXG5cbnZhciB2YWxpZCA9IC9eZGF0YVstXFx3LjpdKyQvaVxudmFyIGRhc2ggPSAvLVthLXpdL2dcbnZhciBjYXAgPSAvW0EtWl0vZ1xuXG5mdW5jdGlvbiBmaW5kKHNjaGVtYSwgdmFsdWUpIHtcbiAgdmFyIG5vcm1hbCA9IG5vcm1hbGl6ZSh2YWx1ZSlcbiAgdmFyIHByb3AgPSB2YWx1ZVxuICB2YXIgVHlwZSA9IEluZm9cblxuICBpZiAobm9ybWFsIGluIHNjaGVtYS5ub3JtYWwpIHtcbiAgICByZXR1cm4gc2NoZW1hLnByb3BlcnR5W3NjaGVtYS5ub3JtYWxbbm9ybWFsXV1cbiAgfVxuXG4gIGlmIChub3JtYWwubGVuZ3RoID4gNCAmJiBub3JtYWwuc2xpY2UoMCwgNCkgPT09IGRhdGEgJiYgdmFsaWQudGVzdCh2YWx1ZSkpIHtcbiAgICAvLyBBdHRyaWJ1dGUgb3IgcHJvcGVydHkuXG4gICAgaWYgKHZhbHVlLmNoYXJBdCg0KSA9PT0gJy0nKSB7XG4gICAgICBwcm9wID0gZGF0YXNldFRvUHJvcGVydHkodmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZGF0YXNldFRvQXR0cmlidXRlKHZhbHVlKVxuICAgIH1cblxuICAgIFR5cGUgPSBEZWZpbmVkSW5mb1xuICB9XG5cbiAgcmV0dXJuIG5ldyBUeXBlKHByb3AsIHZhbHVlKVxufVxuXG5mdW5jdGlvbiBkYXRhc2V0VG9Qcm9wZXJ0eShhdHRyaWJ1dGUpIHtcbiAgdmFyIHZhbHVlID0gYXR0cmlidXRlLnNsaWNlKDUpLnJlcGxhY2UoZGFzaCwgY2FtZWxjYXNlKVxuICByZXR1cm4gZGF0YSArIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc2xpY2UoMSlcbn1cblxuZnVuY3Rpb24gZGF0YXNldFRvQXR0cmlidXRlKHByb3BlcnR5KSB7XG4gIHZhciB2YWx1ZSA9IHByb3BlcnR5LnNsaWNlKDQpXG5cbiAgaWYgKGRhc2gudGVzdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gcHJvcGVydHlcbiAgfVxuXG4gIHZhbHVlID0gdmFsdWUucmVwbGFjZShjYXAsIGtlYmFiKVxuXG4gIGlmICh2YWx1ZS5jaGFyQXQoMCkgIT09ICctJykge1xuICAgIHZhbHVlID0gJy0nICsgdmFsdWVcbiAgfVxuXG4gIHJldHVybiBkYXRhICsgdmFsdWVcbn1cblxuZnVuY3Rpb24ga2ViYWIoJDApIHtcbiAgcmV0dXJuICctJyArICQwLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gY2FtZWxjYXNlKCQwKSB7XG4gIHJldHVybiAkMC5jaGFyQXQoMSkudG9VcHBlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBtZXJnZSA9IHJlcXVpcmUoJy4vbGliL3V0aWwvbWVyZ2UnKVxudmFyIHhsaW5rID0gcmVxdWlyZSgnLi9saWIveGxpbmsnKVxudmFyIHhtbCA9IHJlcXVpcmUoJy4vbGliL3htbCcpXG52YXIgeG1sbnMgPSByZXF1aXJlKCcuL2xpYi94bWxucycpXG52YXIgYXJpYSA9IHJlcXVpcmUoJy4vbGliL2FyaWEnKVxudmFyIGh0bWwgPSByZXF1aXJlKCcuL2xpYi9odG1sJylcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZShbeG1sLCB4bGluaywgeG1sbnMsIGFyaWEsIGh0bWxdKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4vdXRpbC90eXBlcycpXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG5cbnZhciBib29sZWFuaXNoID0gdHlwZXMuYm9vbGVhbmlzaFxudmFyIG51bWJlciA9IHR5cGVzLm51bWJlclxudmFyIHNwYWNlU2VwYXJhdGVkID0gdHlwZXMuc3BhY2VTZXBhcmF0ZWRcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICB0cmFuc2Zvcm06IGFyaWFUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhcmlhQWN0aXZlRGVzY2VuZGFudDogbnVsbCxcbiAgICBhcmlhQXRvbWljOiBib29sZWFuaXNoLFxuICAgIGFyaWFBdXRvQ29tcGxldGU6IG51bGwsXG4gICAgYXJpYUJ1c3k6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUNoZWNrZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUNvbENvdW50OiBudW1iZXIsXG4gICAgYXJpYUNvbEluZGV4OiBudW1iZXIsXG4gICAgYXJpYUNvbFNwYW46IG51bWJlcixcbiAgICBhcmlhQ29udHJvbHM6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFDdXJyZW50OiBudWxsLFxuICAgIGFyaWFEZXNjcmliZWRCeTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYURldGFpbHM6IG51bGwsXG4gICAgYXJpYURpc2FibGVkOiBib29sZWFuaXNoLFxuICAgIGFyaWFEcm9wRWZmZWN0OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhRXJyb3JNZXNzYWdlOiBudWxsLFxuICAgIGFyaWFFeHBhbmRlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhRmxvd1RvOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhR3JhYmJlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhSGFzUG9wdXA6IG51bGwsXG4gICAgYXJpYUhpZGRlbjogYm9vbGVhbmlzaCxcbiAgICBhcmlhSW52YWxpZDogbnVsbCxcbiAgICBhcmlhS2V5U2hvcnRjdXRzOiBudWxsLFxuICAgIGFyaWFMYWJlbDogbnVsbCxcbiAgICBhcmlhTGFiZWxsZWRCeTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUxldmVsOiBudW1iZXIsXG4gICAgYXJpYUxpdmU6IG51bGwsXG4gICAgYXJpYU1vZGFsOiBib29sZWFuaXNoLFxuICAgIGFyaWFNdWx0aUxpbmU6IGJvb2xlYW5pc2gsXG4gICAgYXJpYU11bHRpU2VsZWN0YWJsZTogYm9vbGVhbmlzaCxcbiAgICBhcmlhT3JpZW50YXRpb246IG51bGwsXG4gICAgYXJpYU93bnM6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFQbGFjZWhvbGRlcjogbnVsbCxcbiAgICBhcmlhUG9zSW5TZXQ6IG51bWJlcixcbiAgICBhcmlhUHJlc3NlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhUmVhZE9ubHk6IGJvb2xlYW5pc2gsXG4gICAgYXJpYVJlbGV2YW50OiBudWxsLFxuICAgIGFyaWFSZXF1aXJlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhUm9sZURlc2NyaXB0aW9uOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhUm93Q291bnQ6IG51bWJlcixcbiAgICBhcmlhUm93SW5kZXg6IG51bWJlcixcbiAgICBhcmlhUm93U3BhbjogbnVtYmVyLFxuICAgIGFyaWFTZWxlY3RlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhU2V0U2l6ZTogbnVtYmVyLFxuICAgIGFyaWFTb3J0OiBudWxsLFxuICAgIGFyaWFWYWx1ZU1heDogbnVtYmVyLFxuICAgIGFyaWFWYWx1ZU1pbjogbnVtYmVyLFxuICAgIGFyaWFWYWx1ZU5vdzogbnVtYmVyLFxuICAgIGFyaWFWYWx1ZVRleHQ6IG51bGwsXG4gICAgcm9sZTogbnVsbFxuICB9XG59KVxuXG5mdW5jdGlvbiBhcmlhVHJhbnNmb3JtKF8sIHByb3ApIHtcbiAgcmV0dXJuIHByb3AgPT09ICdyb2xlJyA/IHByb3AgOiAnYXJpYS0nICsgcHJvcC5zbGljZSg0KS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi91dGlsL3R5cGVzJylcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcbnZhciBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0gPSByZXF1aXJlKCcuL3V0aWwvY2FzZS1pbnNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG52YXIgYm9vbGVhbiA9IHR5cGVzLmJvb2xlYW5cbnZhciBvdmVybG9hZGVkQm9vbGVhbiA9IHR5cGVzLm92ZXJsb2FkZWRCb29sZWFuXG52YXIgYm9vbGVhbmlzaCA9IHR5cGVzLmJvb2xlYW5pc2hcbnZhciBudW1iZXIgPSB0eXBlcy5udW1iZXJcbnZhciBzcGFjZVNlcGFyYXRlZCA9IHR5cGVzLnNwYWNlU2VwYXJhdGVkXG52YXIgY29tbWFTZXBhcmF0ZWQgPSB0eXBlcy5jb21tYVNlcGFyYXRlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAnaHRtbCcsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICBhY2NlcHRjaGFyc2V0OiAnYWNjZXB0LWNoYXJzZXQnLFxuICAgIGNsYXNzbmFtZTogJ2NsYXNzJyxcbiAgICBodG1sZm9yOiAnZm9yJyxcbiAgICBodHRwZXF1aXY6ICdodHRwLWVxdWl2J1xuICB9LFxuICB0cmFuc2Zvcm06IGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSxcbiAgbXVzdFVzZVByb3BlcnR5OiBbJ2NoZWNrZWQnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLCAnc2VsZWN0ZWQnXSxcbiAgcHJvcGVydGllczoge1xuICAgIC8vIFN0YW5kYXJkIFByb3BlcnRpZXMuXG4gICAgYWJicjogbnVsbCxcbiAgICBhY2NlcHQ6IGNvbW1hU2VwYXJhdGVkLFxuICAgIGFjY2VwdENoYXJzZXQ6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFjY2Vzc0tleTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYWN0aW9uOiBudWxsLFxuICAgIGFsbG93OiBudWxsLFxuICAgIGFsbG93RnVsbFNjcmVlbjogYm9vbGVhbixcbiAgICBhbGxvd1BheW1lbnRSZXF1ZXN0OiBib29sZWFuLFxuICAgIGFsbG93VXNlck1lZGlhOiBib29sZWFuLFxuICAgIGFsdDogbnVsbCxcbiAgICBhczogbnVsbCxcbiAgICBhc3luYzogYm9vbGVhbixcbiAgICBhdXRvQ2FwaXRhbGl6ZTogbnVsbCxcbiAgICBhdXRvQ29tcGxldGU6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGF1dG9Gb2N1czogYm9vbGVhbixcbiAgICBhdXRvUGxheTogYm9vbGVhbixcbiAgICBjYXB0dXJlOiBib29sZWFuLFxuICAgIGNoYXJTZXQ6IG51bGwsXG4gICAgY2hlY2tlZDogYm9vbGVhbixcbiAgICBjaXRlOiBudWxsLFxuICAgIGNsYXNzTmFtZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgY29sczogbnVtYmVyLFxuICAgIGNvbFNwYW46IG51bGwsXG4gICAgY29udGVudDogbnVsbCxcbiAgICBjb250ZW50RWRpdGFibGU6IGJvb2xlYW5pc2gsXG4gICAgY29udHJvbHM6IGJvb2xlYW4sXG4gICAgY29udHJvbHNMaXN0OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBjb29yZHM6IG51bWJlciB8IGNvbW1hU2VwYXJhdGVkLFxuICAgIGNyb3NzT3JpZ2luOiBudWxsLFxuICAgIGRhdGE6IG51bGwsXG4gICAgZGF0ZVRpbWU6IG51bGwsXG4gICAgZGVjb2Rpbmc6IG51bGwsXG4gICAgZGVmYXVsdDogYm9vbGVhbixcbiAgICBkZWZlcjogYm9vbGVhbixcbiAgICBkaXI6IG51bGwsXG4gICAgZGlyTmFtZTogbnVsbCxcbiAgICBkaXNhYmxlZDogYm9vbGVhbixcbiAgICBkb3dubG9hZDogb3ZlcmxvYWRlZEJvb2xlYW4sXG4gICAgZHJhZ2dhYmxlOiBib29sZWFuaXNoLFxuICAgIGVuY1R5cGU6IG51bGwsXG4gICAgZW50ZXJLZXlIaW50OiBudWxsLFxuICAgIGZvcm06IG51bGwsXG4gICAgZm9ybUFjdGlvbjogbnVsbCxcbiAgICBmb3JtRW5jVHlwZTogbnVsbCxcbiAgICBmb3JtTWV0aG9kOiBudWxsLFxuICAgIGZvcm1Ob1ZhbGlkYXRlOiBib29sZWFuLFxuICAgIGZvcm1UYXJnZXQ6IG51bGwsXG4gICAgaGVhZGVyczogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaGVpZ2h0OiBudW1iZXIsXG4gICAgaGlkZGVuOiBib29sZWFuLFxuICAgIGhpZ2g6IG51bWJlcixcbiAgICBocmVmOiBudWxsLFxuICAgIGhyZWZMYW5nOiBudWxsLFxuICAgIGh0bWxGb3I6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGh0dHBFcXVpdjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgaWQ6IG51bGwsXG4gICAgaW1hZ2VTaXplczogbnVsbCxcbiAgICBpbWFnZVNyY1NldDogY29tbWFTZXBhcmF0ZWQsXG4gICAgaW5wdXRNb2RlOiBudWxsLFxuICAgIGludGVncml0eTogbnVsbCxcbiAgICBpczogbnVsbCxcbiAgICBpc01hcDogYm9vbGVhbixcbiAgICBpdGVtSWQ6IG51bGwsXG4gICAgaXRlbVByb3A6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGl0ZW1SZWY6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGl0ZW1TY29wZTogYm9vbGVhbixcbiAgICBpdGVtVHlwZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAga2luZDogbnVsbCxcbiAgICBsYWJlbDogbnVsbCxcbiAgICBsYW5nOiBudWxsLFxuICAgIGxhbmd1YWdlOiBudWxsLFxuICAgIGxpc3Q6IG51bGwsXG4gICAgbG9hZGluZzogbnVsbCxcbiAgICBsb29wOiBib29sZWFuLFxuICAgIGxvdzogbnVtYmVyLFxuICAgIG1hbmlmZXN0OiBudWxsLFxuICAgIG1heDogbnVsbCxcbiAgICBtYXhMZW5ndGg6IG51bWJlcixcbiAgICBtZWRpYTogbnVsbCxcbiAgICBtZXRob2Q6IG51bGwsXG4gICAgbWluOiBudWxsLFxuICAgIG1pbkxlbmd0aDogbnVtYmVyLFxuICAgIG11bHRpcGxlOiBib29sZWFuLFxuICAgIG11dGVkOiBib29sZWFuLFxuICAgIG5hbWU6IG51bGwsXG4gICAgbm9uY2U6IG51bGwsXG4gICAgbm9Nb2R1bGU6IGJvb2xlYW4sXG4gICAgbm9WYWxpZGF0ZTogYm9vbGVhbixcbiAgICBvbkFib3J0OiBudWxsLFxuICAgIG9uQWZ0ZXJQcmludDogbnVsbCxcbiAgICBvbkF1eENsaWNrOiBudWxsLFxuICAgIG9uQmVmb3JlUHJpbnQ6IG51bGwsXG4gICAgb25CZWZvcmVVbmxvYWQ6IG51bGwsXG4gICAgb25CbHVyOiBudWxsLFxuICAgIG9uQ2FuY2VsOiBudWxsLFxuICAgIG9uQ2FuUGxheTogbnVsbCxcbiAgICBvbkNhblBsYXlUaHJvdWdoOiBudWxsLFxuICAgIG9uQ2hhbmdlOiBudWxsLFxuICAgIG9uQ2xpY2s6IG51bGwsXG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBvbkNvbnRleHRNZW51OiBudWxsLFxuICAgIG9uQ29weTogbnVsbCxcbiAgICBvbkN1ZUNoYW5nZTogbnVsbCxcbiAgICBvbkN1dDogbnVsbCxcbiAgICBvbkRibENsaWNrOiBudWxsLFxuICAgIG9uRHJhZzogbnVsbCxcbiAgICBvbkRyYWdFbmQ6IG51bGwsXG4gICAgb25EcmFnRW50ZXI6IG51bGwsXG4gICAgb25EcmFnRXhpdDogbnVsbCxcbiAgICBvbkRyYWdMZWF2ZTogbnVsbCxcbiAgICBvbkRyYWdPdmVyOiBudWxsLFxuICAgIG9uRHJhZ1N0YXJ0OiBudWxsLFxuICAgIG9uRHJvcDogbnVsbCxcbiAgICBvbkR1cmF0aW9uQ2hhbmdlOiBudWxsLFxuICAgIG9uRW1wdGllZDogbnVsbCxcbiAgICBvbkVuZGVkOiBudWxsLFxuICAgIG9uRXJyb3I6IG51bGwsXG4gICAgb25Gb2N1czogbnVsbCxcbiAgICBvbkZvcm1EYXRhOiBudWxsLFxuICAgIG9uSGFzaENoYW5nZTogbnVsbCxcbiAgICBvbklucHV0OiBudWxsLFxuICAgIG9uSW52YWxpZDogbnVsbCxcbiAgICBvbktleURvd246IG51bGwsXG4gICAgb25LZXlQcmVzczogbnVsbCxcbiAgICBvbktleVVwOiBudWxsLFxuICAgIG9uTGFuZ3VhZ2VDaGFuZ2U6IG51bGwsXG4gICAgb25Mb2FkOiBudWxsLFxuICAgIG9uTG9hZGVkRGF0YTogbnVsbCxcbiAgICBvbkxvYWRlZE1ldGFkYXRhOiBudWxsLFxuICAgIG9uTG9hZEVuZDogbnVsbCxcbiAgICBvbkxvYWRTdGFydDogbnVsbCxcbiAgICBvbk1lc3NhZ2U6IG51bGwsXG4gICAgb25NZXNzYWdlRXJyb3I6IG51bGwsXG4gICAgb25Nb3VzZURvd246IG51bGwsXG4gICAgb25Nb3VzZUVudGVyOiBudWxsLFxuICAgIG9uTW91c2VMZWF2ZTogbnVsbCxcbiAgICBvbk1vdXNlTW92ZTogbnVsbCxcbiAgICBvbk1vdXNlT3V0OiBudWxsLFxuICAgIG9uTW91c2VPdmVyOiBudWxsLFxuICAgIG9uTW91c2VVcDogbnVsbCxcbiAgICBvbk9mZmxpbmU6IG51bGwsXG4gICAgb25PbmxpbmU6IG51bGwsXG4gICAgb25QYWdlSGlkZTogbnVsbCxcbiAgICBvblBhZ2VTaG93OiBudWxsLFxuICAgIG9uUGFzdGU6IG51bGwsXG4gICAgb25QYXVzZTogbnVsbCxcbiAgICBvblBsYXk6IG51bGwsXG4gICAgb25QbGF5aW5nOiBudWxsLFxuICAgIG9uUG9wU3RhdGU6IG51bGwsXG4gICAgb25Qcm9ncmVzczogbnVsbCxcbiAgICBvblJhdGVDaGFuZ2U6IG51bGwsXG4gICAgb25SZWplY3Rpb25IYW5kbGVkOiBudWxsLFxuICAgIG9uUmVzZXQ6IG51bGwsXG4gICAgb25SZXNpemU6IG51bGwsXG4gICAgb25TY3JvbGw6IG51bGwsXG4gICAgb25TZWN1cml0eVBvbGljeVZpb2xhdGlvbjogbnVsbCxcbiAgICBvblNlZWtlZDogbnVsbCxcbiAgICBvblNlZWtpbmc6IG51bGwsXG4gICAgb25TZWxlY3Q6IG51bGwsXG4gICAgb25TbG90Q2hhbmdlOiBudWxsLFxuICAgIG9uU3RhbGxlZDogbnVsbCxcbiAgICBvblN0b3JhZ2U6IG51bGwsXG4gICAgb25TdWJtaXQ6IG51bGwsXG4gICAgb25TdXNwZW5kOiBudWxsLFxuICAgIG9uVGltZVVwZGF0ZTogbnVsbCxcbiAgICBvblRvZ2dsZTogbnVsbCxcbiAgICBvblVuaGFuZGxlZFJlamVjdGlvbjogbnVsbCxcbiAgICBvblVubG9hZDogbnVsbCxcbiAgICBvblZvbHVtZUNoYW5nZTogbnVsbCxcbiAgICBvbldhaXRpbmc6IG51bGwsXG4gICAgb25XaGVlbDogbnVsbCxcbiAgICBvcGVuOiBib29sZWFuLFxuICAgIG9wdGltdW06IG51bWJlcixcbiAgICBwYXR0ZXJuOiBudWxsLFxuICAgIHBpbmc6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHBsYWNlaG9sZGVyOiBudWxsLFxuICAgIHBsYXlzSW5saW5lOiBib29sZWFuLFxuICAgIHBvc3RlcjogbnVsbCxcbiAgICBwcmVsb2FkOiBudWxsLFxuICAgIHJlYWRPbmx5OiBib29sZWFuLFxuICAgIHJlZmVycmVyUG9saWN5OiBudWxsLFxuICAgIHJlbDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWQ6IGJvb2xlYW4sXG4gICAgcmV2ZXJzZWQ6IGJvb2xlYW4sXG4gICAgcm93czogbnVtYmVyLFxuICAgIHJvd1NwYW46IG51bWJlcixcbiAgICBzYW5kYm94OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBzY29wZTogbnVsbCxcbiAgICBzY29wZWQ6IGJvb2xlYW4sXG4gICAgc2VhbWxlc3M6IGJvb2xlYW4sXG4gICAgc2VsZWN0ZWQ6IGJvb2xlYW4sXG4gICAgc2hhcGU6IG51bGwsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIHNpemVzOiBudWxsLFxuICAgIHNsb3Q6IG51bGwsXG4gICAgc3BhbjogbnVtYmVyLFxuICAgIHNwZWxsQ2hlY2s6IGJvb2xlYW5pc2gsXG4gICAgc3JjOiBudWxsLFxuICAgIHNyY0RvYzogbnVsbCxcbiAgICBzcmNMYW5nOiBudWxsLFxuICAgIHNyY1NldDogY29tbWFTZXBhcmF0ZWQsXG4gICAgc3RhcnQ6IG51bWJlcixcbiAgICBzdGVwOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIHRhYkluZGV4OiBudW1iZXIsXG4gICAgdGFyZ2V0OiBudWxsLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHRyYW5zbGF0ZTogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHR5cGVNdXN0TWF0Y2g6IGJvb2xlYW4sXG4gICAgdXNlTWFwOiBudWxsLFxuICAgIHZhbHVlOiBib29sZWFuaXNoLFxuICAgIHdpZHRoOiBudW1iZXIsXG4gICAgd3JhcDogbnVsbCxcblxuICAgIC8vIExlZ2FjeS5cbiAgICAvLyBTZWU6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI290aGVyLWVsZW1lbnRzLC1hdHRyaWJ1dGVzLWFuZC1hcGlzXG4gICAgYWxpZ246IG51bGwsIC8vIFNldmVyYWwuIFVzZSBDU1MgYHRleHQtYWxpZ25gIGluc3RlYWQsXG4gICAgYUxpbms6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBhOmFjdGl2ZSB7Y29sb3J9YCBpbnN0ZWFkXG4gICAgYXJjaGl2ZTogc3BhY2VTZXBhcmF0ZWQsIC8vIGA8b2JqZWN0PmAuIExpc3Qgb2YgVVJJcyB0byBhcmNoaXZlc1xuICAgIGF4aXM6IG51bGwsIC8vIGA8dGQ+YCBhbmQgYDx0aD5gLiBVc2UgYHNjb3BlYCBvbiBgPHRoPmBcbiAgICBiYWNrZ3JvdW5kOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYmFja2dyb3VuZC1pbWFnZWAgaW5zdGVhZFxuICAgIGJnQ29sb3I6IG51bGwsIC8vIGA8Ym9keT5gIGFuZCB0YWJsZSBlbGVtZW50cy4gVXNlIENTUyBgYmFja2dyb3VuZC1jb2xvcmAgaW5zdGVhZFxuICAgIGJvcmRlcjogbnVtYmVyLCAvLyBgPHRhYmxlPmAuIFVzZSBDU1MgYGJvcmRlci13aWR0aGAgaW5zdGVhZCxcbiAgICBib3JkZXJDb2xvcjogbnVsbCwgLy8gYDx0YWJsZT5gLiBVc2UgQ1NTIGBib3JkZXItY29sb3JgIGluc3RlYWQsXG4gICAgYm90dG9tTWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgY2VsbFBhZGRpbmc6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGNlbGxTcGFjaW5nOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBjaGFyOiBudWxsLCAvLyBTZXZlcmFsIHRhYmxlIGVsZW1lbnRzLiBXaGVuIGBhbGlnbj1jaGFyYCwgc2V0cyB0aGUgY2hhcmFjdGVyIHRvIGFsaWduIG9uXG4gICAgY2hhck9mZjogbnVsbCwgLy8gU2V2ZXJhbCB0YWJsZSBlbGVtZW50cy4gV2hlbiBgY2hhcmAsIG9mZnNldHMgdGhlIGFsaWdubWVudFxuICAgIGNsYXNzSWQ6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjbGVhcjogbnVsbCwgLy8gYDxicj5gLiBVc2UgQ1NTIGBjbGVhcmAgaW5zdGVhZFxuICAgIGNvZGU6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjb2RlQmFzZTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNvZGVUeXBlOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY29sb3I6IG51bGwsIC8vIGA8Zm9udD5gIGFuZCBgPGhyPmAuIFVzZSBDU1MgaW5zdGVhZFxuICAgIGNvbXBhY3Q6IGJvb2xlYW4sIC8vIExpc3RzLiBVc2UgQ1NTIHRvIHJlZHVjZSBzcGFjZSBiZXR3ZWVuIGl0ZW1zIGluc3RlYWRcbiAgICBkZWNsYXJlOiBib29sZWFuLCAvLyBgPG9iamVjdD5gXG4gICAgZXZlbnQ6IG51bGwsIC8vIGA8c2NyaXB0PmBcbiAgICBmYWNlOiBudWxsLCAvLyBgPGZvbnQ+YC4gVXNlIENTUyBpbnN0ZWFkXG4gICAgZnJhbWU6IG51bGwsIC8vIGA8dGFibGU+YFxuICAgIGZyYW1lQm9yZGVyOiBudWxsLCAvLyBgPGlmcmFtZT5gLiBVc2UgQ1NTIGBib3JkZXJgIGluc3RlYWRcbiAgICBoU3BhY2U6IG51bWJlciwgLy8gYDxpbWc+YCBhbmQgYDxvYmplY3Q+YFxuICAgIGxlZnRNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBsaW5rOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYTpsaW5rIHtjb2xvcjogKn1gIGluc3RlYWRcbiAgICBsb25nRGVzYzogbnVsbCwgLy8gYDxmcmFtZT5gLCBgPGlmcmFtZT5gLCBhbmQgYDxpbWc+YC4gVXNlIGFuIGA8YT5gXG4gICAgbG93U3JjOiBudWxsLCAvLyBgPGltZz5gLiBVc2UgYSBgPHBpY3R1cmU+YFxuICAgIG1hcmdpbkhlaWdodDogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIG1hcmdpbldpZHRoOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgbm9SZXNpemU6IGJvb2xlYW4sIC8vIGA8ZnJhbWU+YFxuICAgIG5vSHJlZjogYm9vbGVhbiwgLy8gYDxhcmVhPmAuIFVzZSBubyBocmVmIGluc3RlYWQgb2YgYW4gZXhwbGljaXQgYG5vaHJlZmBcbiAgICBub1NoYWRlOiBib29sZWFuLCAvLyBgPGhyPmAuIFVzZSBiYWNrZ3JvdW5kLWNvbG9yIGFuZCBoZWlnaHQgaW5zdGVhZCBvZiBib3JkZXJzXG4gICAgbm9XcmFwOiBib29sZWFuLCAvLyBgPHRkPmAgYW5kIGA8dGg+YFxuICAgIG9iamVjdDogbnVsbCwgLy8gYDxhcHBsZXQ+YFxuICAgIHByb2ZpbGU6IG51bGwsIC8vIGA8aGVhZD5gXG4gICAgcHJvbXB0OiBudWxsLCAvLyBgPGlzaW5kZXg+YFxuICAgIHJldjogbnVsbCwgLy8gYDxsaW5rPmBcbiAgICByaWdodE1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIHJ1bGVzOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBzY2hlbWU6IG51bGwsIC8vIGA8bWV0YT5gXG4gICAgc2Nyb2xsaW5nOiBib29sZWFuaXNoLCAvLyBgPGZyYW1lPmAuIFVzZSBvdmVyZmxvdyBpbiB0aGUgY2hpbGQgY29udGV4dFxuICAgIHN0YW5kYnk6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBzdW1tYXJ5OiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICB0ZXh0OiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgY29sb3JgIGluc3RlYWRcbiAgICB0b3BNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICB2YWx1ZVR5cGU6IG51bGwsIC8vIGA8cGFyYW0+YFxuICAgIHZlcnNpb246IG51bGwsIC8vIGA8aHRtbD5gLiBVc2UgYSBkb2N0eXBlLlxuICAgIHZBbGlnbjogbnVsbCwgLy8gU2V2ZXJhbC4gVXNlIENTUyBgdmVydGljYWwtYWxpZ25gIGluc3RlYWRcbiAgICB2TGluazogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGE6dmlzaXRlZCB7Y29sb3J9YCBpbnN0ZWFkXG4gICAgdlNwYWNlOiBudW1iZXIsIC8vIGA8aW1nPmAgYW5kIGA8b2JqZWN0PmBcblxuICAgIC8vIE5vbi1zdGFuZGFyZCBQcm9wZXJ0aWVzLlxuICAgIGFsbG93VHJhbnNwYXJlbmN5OiBudWxsLFxuICAgIGF1dG9Db3JyZWN0OiBudWxsLFxuICAgIGF1dG9TYXZlOiBudWxsLFxuICAgIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlOiBib29sZWFuLFxuICAgIGRpc2FibGVSZW1vdGVQbGF5YmFjazogYm9vbGVhbixcbiAgICBwcmVmaXg6IG51bGwsXG4gICAgcHJvcGVydHk6IG51bGwsXG4gICAgcmVzdWx0czogbnVtYmVyLFxuICAgIHNlY3VyaXR5OiBudWxsLFxuICAgIHVuc2VsZWN0YWJsZTogbnVsbFxuICB9XG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4vdXRpbC90eXBlcycpXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG52YXIgY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdXRpbC9jYXNlLXNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG52YXIgYm9vbGVhbiA9IHR5cGVzLmJvb2xlYW5cbnZhciBudW1iZXIgPSB0eXBlcy5udW1iZXJcbnZhciBzcGFjZVNlcGFyYXRlZCA9IHR5cGVzLnNwYWNlU2VwYXJhdGVkXG52YXIgY29tbWFTZXBhcmF0ZWQgPSB0eXBlcy5jb21tYVNlcGFyYXRlZFxudmFyIGNvbW1hT3JTcGFjZVNlcGFyYXRlZCA9IHR5cGVzLmNvbW1hT3JTcGFjZVNlcGFyYXRlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAnc3ZnJyxcbiAgYXR0cmlidXRlczoge1xuICAgIGFjY2VudEhlaWdodDogJ2FjY2VudC1oZWlnaHQnLFxuICAgIGFsaWdubWVudEJhc2VsaW5lOiAnYWxpZ25tZW50LWJhc2VsaW5lJyxcbiAgICBhcmFiaWNGb3JtOiAnYXJhYmljLWZvcm0nLFxuICAgIGJhc2VsaW5lU2hpZnQ6ICdiYXNlbGluZS1zaGlmdCcsXG4gICAgY2FwSGVpZ2h0OiAnY2FwLWhlaWdodCcsXG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGNsaXBQYXRoOiAnY2xpcC1wYXRoJyxcbiAgICBjbGlwUnVsZTogJ2NsaXAtcnVsZScsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uOiAnY29sb3ItaW50ZXJwb2xhdGlvbicsXG4gICAgY29sb3JJbnRlcnBvbGF0aW9uRmlsdGVyczogJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycycsXG4gICAgY29sb3JQcm9maWxlOiAnY29sb3ItcHJvZmlsZScsXG4gICAgY29sb3JSZW5kZXJpbmc6ICdjb2xvci1yZW5kZXJpbmcnLFxuICAgIGNyb3NzT3JpZ2luOiAnY3Jvc3NvcmlnaW4nLFxuICAgIGRhdGFUeXBlOiAnZGF0YXR5cGUnLFxuICAgIGRvbWluYW50QmFzZWxpbmU6ICdkb21pbmFudC1iYXNlbGluZScsXG4gICAgZW5hYmxlQmFja2dyb3VuZDogJ2VuYWJsZS1iYWNrZ3JvdW5kJyxcbiAgICBmaWxsT3BhY2l0eTogJ2ZpbGwtb3BhY2l0eScsXG4gICAgZmlsbFJ1bGU6ICdmaWxsLXJ1bGUnLFxuICAgIGZsb29kQ29sb3I6ICdmbG9vZC1jb2xvcicsXG4gICAgZmxvb2RPcGFjaXR5OiAnZmxvb2Qtb3BhY2l0eScsXG4gICAgZm9udEZhbWlseTogJ2ZvbnQtZmFtaWx5JyxcbiAgICBmb250U2l6ZTogJ2ZvbnQtc2l6ZScsXG4gICAgZm9udFNpemVBZGp1c3Q6ICdmb250LXNpemUtYWRqdXN0JyxcbiAgICBmb250U3RyZXRjaDogJ2ZvbnQtc3RyZXRjaCcsXG4gICAgZm9udFN0eWxlOiAnZm9udC1zdHlsZScsXG4gICAgZm9udFZhcmlhbnQ6ICdmb250LXZhcmlhbnQnLFxuICAgIGZvbnRXZWlnaHQ6ICdmb250LXdlaWdodCcsXG4gICAgZ2x5cGhOYW1lOiAnZ2x5cGgtbmFtZScsXG4gICAgZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWw6ICdnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsJyxcbiAgICBnbHlwaE9yaWVudGF0aW9uVmVydGljYWw6ICdnbHlwaC1vcmllbnRhdGlvbi12ZXJ0aWNhbCcsXG4gICAgaHJlZkxhbmc6ICdocmVmbGFuZycsXG4gICAgaG9yaXpBZHZYOiAnaG9yaXotYWR2LXgnLFxuICAgIGhvcml6T3JpZ2luWDogJ2hvcml6LW9yaWdpbi14JyxcbiAgICBob3Jpek9yaWdpblk6ICdob3Jpei1vcmlnaW4teScsXG4gICAgaW1hZ2VSZW5kZXJpbmc6ICdpbWFnZS1yZW5kZXJpbmcnLFxuICAgIGxldHRlclNwYWNpbmc6ICdsZXR0ZXItc3BhY2luZycsXG4gICAgbGlnaHRpbmdDb2xvcjogJ2xpZ2h0aW5nLWNvbG9yJyxcbiAgICBtYXJrZXJFbmQ6ICdtYXJrZXItZW5kJyxcbiAgICBtYXJrZXJNaWQ6ICdtYXJrZXItbWlkJyxcbiAgICBtYXJrZXJTdGFydDogJ21hcmtlci1zdGFydCcsXG4gICAgbmF2RG93bjogJ25hdi1kb3duJyxcbiAgICBuYXZEb3duTGVmdDogJ25hdi1kb3duLWxlZnQnLFxuICAgIG5hdkRvd25SaWdodDogJ25hdi1kb3duLXJpZ2h0JyxcbiAgICBuYXZMZWZ0OiAnbmF2LWxlZnQnLFxuICAgIG5hdk5leHQ6ICduYXYtbmV4dCcsXG4gICAgbmF2UHJldjogJ25hdi1wcmV2JyxcbiAgICBuYXZSaWdodDogJ25hdi1yaWdodCcsXG4gICAgbmF2VXA6ICduYXYtdXAnLFxuICAgIG5hdlVwTGVmdDogJ25hdi11cC1sZWZ0JyxcbiAgICBuYXZVcFJpZ2h0OiAnbmF2LXVwLXJpZ2h0JyxcbiAgICBvbkFib3J0OiAnb25hYm9ydCcsXG4gICAgb25BY3RpdmF0ZTogJ29uYWN0aXZhdGUnLFxuICAgIG9uQWZ0ZXJQcmludDogJ29uYWZ0ZXJwcmludCcsXG4gICAgb25CZWZvcmVQcmludDogJ29uYmVmb3JlcHJpbnQnLFxuICAgIG9uQmVnaW46ICdvbmJlZ2luJyxcbiAgICBvbkNhbmNlbDogJ29uY2FuY2VsJyxcbiAgICBvbkNhblBsYXk6ICdvbmNhbnBsYXknLFxuICAgIG9uQ2FuUGxheVRocm91Z2g6ICdvbmNhbnBsYXl0aHJvdWdoJyxcbiAgICBvbkNoYW5nZTogJ29uY2hhbmdlJyxcbiAgICBvbkNsaWNrOiAnb25jbGljaycsXG4gICAgb25DbG9zZTogJ29uY2xvc2UnLFxuICAgIG9uQ29weTogJ29uY29weScsXG4gICAgb25DdWVDaGFuZ2U6ICdvbmN1ZWNoYW5nZScsXG4gICAgb25DdXQ6ICdvbmN1dCcsXG4gICAgb25EYmxDbGljazogJ29uZGJsY2xpY2snLFxuICAgIG9uRHJhZzogJ29uZHJhZycsXG4gICAgb25EcmFnRW5kOiAnb25kcmFnZW5kJyxcbiAgICBvbkRyYWdFbnRlcjogJ29uZHJhZ2VudGVyJyxcbiAgICBvbkRyYWdFeGl0OiAnb25kcmFnZXhpdCcsXG4gICAgb25EcmFnTGVhdmU6ICdvbmRyYWdsZWF2ZScsXG4gICAgb25EcmFnT3ZlcjogJ29uZHJhZ292ZXInLFxuICAgIG9uRHJhZ1N0YXJ0OiAnb25kcmFnc3RhcnQnLFxuICAgIG9uRHJvcDogJ29uZHJvcCcsXG4gICAgb25EdXJhdGlvbkNoYW5nZTogJ29uZHVyYXRpb25jaGFuZ2UnLFxuICAgIG9uRW1wdGllZDogJ29uZW1wdGllZCcsXG4gICAgb25FbmQ6ICdvbmVuZCcsXG4gICAgb25FbmRlZDogJ29uZW5kZWQnLFxuICAgIG9uRXJyb3I6ICdvbmVycm9yJyxcbiAgICBvbkZvY3VzOiAnb25mb2N1cycsXG4gICAgb25Gb2N1c0luOiAnb25mb2N1c2luJyxcbiAgICBvbkZvY3VzT3V0OiAnb25mb2N1c291dCcsXG4gICAgb25IYXNoQ2hhbmdlOiAnb25oYXNoY2hhbmdlJyxcbiAgICBvbklucHV0OiAnb25pbnB1dCcsXG4gICAgb25JbnZhbGlkOiAnb25pbnZhbGlkJyxcbiAgICBvbktleURvd246ICdvbmtleWRvd24nLFxuICAgIG9uS2V5UHJlc3M6ICdvbmtleXByZXNzJyxcbiAgICBvbktleVVwOiAnb25rZXl1cCcsXG4gICAgb25Mb2FkOiAnb25sb2FkJyxcbiAgICBvbkxvYWRlZERhdGE6ICdvbmxvYWRlZGRhdGEnLFxuICAgIG9uTG9hZGVkTWV0YWRhdGE6ICdvbmxvYWRlZG1ldGFkYXRhJyxcbiAgICBvbkxvYWRTdGFydDogJ29ubG9hZHN0YXJ0JyxcbiAgICBvbk1lc3NhZ2U6ICdvbm1lc3NhZ2UnLFxuICAgIG9uTW91c2VEb3duOiAnb25tb3VzZWRvd24nLFxuICAgIG9uTW91c2VFbnRlcjogJ29ubW91c2VlbnRlcicsXG4gICAgb25Nb3VzZUxlYXZlOiAnb25tb3VzZWxlYXZlJyxcbiAgICBvbk1vdXNlTW92ZTogJ29ubW91c2Vtb3ZlJyxcbiAgICBvbk1vdXNlT3V0OiAnb25tb3VzZW91dCcsXG4gICAgb25Nb3VzZU92ZXI6ICdvbm1vdXNlb3ZlcicsXG4gICAgb25Nb3VzZVVwOiAnb25tb3VzZXVwJyxcbiAgICBvbk1vdXNlV2hlZWw6ICdvbm1vdXNld2hlZWwnLFxuICAgIG9uT2ZmbGluZTogJ29ub2ZmbGluZScsXG4gICAgb25PbmxpbmU6ICdvbm9ubGluZScsXG4gICAgb25QYWdlSGlkZTogJ29ucGFnZWhpZGUnLFxuICAgIG9uUGFnZVNob3c6ICdvbnBhZ2VzaG93JyxcbiAgICBvblBhc3RlOiAnb25wYXN0ZScsXG4gICAgb25QYXVzZTogJ29ucGF1c2UnLFxuICAgIG9uUGxheTogJ29ucGxheScsXG4gICAgb25QbGF5aW5nOiAnb25wbGF5aW5nJyxcbiAgICBvblBvcFN0YXRlOiAnb25wb3BzdGF0ZScsXG4gICAgb25Qcm9ncmVzczogJ29ucHJvZ3Jlc3MnLFxuICAgIG9uUmF0ZUNoYW5nZTogJ29ucmF0ZWNoYW5nZScsXG4gICAgb25SZXBlYXQ6ICdvbnJlcGVhdCcsXG4gICAgb25SZXNldDogJ29ucmVzZXQnLFxuICAgIG9uUmVzaXplOiAnb25yZXNpemUnLFxuICAgIG9uU2Nyb2xsOiAnb25zY3JvbGwnLFxuICAgIG9uU2Vla2VkOiAnb25zZWVrZWQnLFxuICAgIG9uU2Vla2luZzogJ29uc2Vla2luZycsXG4gICAgb25TZWxlY3Q6ICdvbnNlbGVjdCcsXG4gICAgb25TaG93OiAnb25zaG93JyxcbiAgICBvblN0YWxsZWQ6ICdvbnN0YWxsZWQnLFxuICAgIG9uU3RvcmFnZTogJ29uc3RvcmFnZScsXG4gICAgb25TdWJtaXQ6ICdvbnN1Ym1pdCcsXG4gICAgb25TdXNwZW5kOiAnb25zdXNwZW5kJyxcbiAgICBvblRpbWVVcGRhdGU6ICdvbnRpbWV1cGRhdGUnLFxuICAgIG9uVG9nZ2xlOiAnb250b2dnbGUnLFxuICAgIG9uVW5sb2FkOiAnb251bmxvYWQnLFxuICAgIG9uVm9sdW1lQ2hhbmdlOiAnb252b2x1bWVjaGFuZ2UnLFxuICAgIG9uV2FpdGluZzogJ29ud2FpdGluZycsXG4gICAgb25ab29tOiAnb256b29tJyxcbiAgICBvdmVybGluZVBvc2l0aW9uOiAnb3ZlcmxpbmUtcG9zaXRpb24nLFxuICAgIG92ZXJsaW5lVGhpY2tuZXNzOiAnb3ZlcmxpbmUtdGhpY2tuZXNzJyxcbiAgICBwYWludE9yZGVyOiAncGFpbnQtb3JkZXInLFxuICAgIHBhbm9zZTE6ICdwYW5vc2UtMScsXG4gICAgcG9pbnRlckV2ZW50czogJ3BvaW50ZXItZXZlbnRzJyxcbiAgICByZWZlcnJlclBvbGljeTogJ3JlZmVycmVycG9saWN5JyxcbiAgICByZW5kZXJpbmdJbnRlbnQ6ICdyZW5kZXJpbmctaW50ZW50JyxcbiAgICBzaGFwZVJlbmRlcmluZzogJ3NoYXBlLXJlbmRlcmluZycsXG4gICAgc3RvcENvbG9yOiAnc3RvcC1jb2xvcicsXG4gICAgc3RvcE9wYWNpdHk6ICdzdG9wLW9wYWNpdHknLFxuICAgIHN0cmlrZXRocm91Z2hQb3NpdGlvbjogJ3N0cmlrZXRocm91Z2gtcG9zaXRpb24nLFxuICAgIHN0cmlrZXRocm91Z2hUaGlja25lc3M6ICdzdHJpa2V0aHJvdWdoLXRoaWNrbmVzcycsXG4gICAgc3Ryb2tlRGFzaEFycmF5OiAnc3Ryb2tlLWRhc2hhcnJheScsXG4gICAgc3Ryb2tlRGFzaE9mZnNldDogJ3N0cm9rZS1kYXNob2Zmc2V0JyxcbiAgICBzdHJva2VMaW5lQ2FwOiAnc3Ryb2tlLWxpbmVjYXAnLFxuICAgIHN0cm9rZUxpbmVKb2luOiAnc3Ryb2tlLWxpbmVqb2luJyxcbiAgICBzdHJva2VNaXRlckxpbWl0OiAnc3Ryb2tlLW1pdGVybGltaXQnLFxuICAgIHN0cm9rZU9wYWNpdHk6ICdzdHJva2Utb3BhY2l0eScsXG4gICAgc3Ryb2tlV2lkdGg6ICdzdHJva2Utd2lkdGgnLFxuICAgIHRhYkluZGV4OiAndGFiaW5kZXgnLFxuICAgIHRleHRBbmNob3I6ICd0ZXh0LWFuY2hvcicsXG4gICAgdGV4dERlY29yYXRpb246ICd0ZXh0LWRlY29yYXRpb24nLFxuICAgIHRleHRSZW5kZXJpbmc6ICd0ZXh0LXJlbmRlcmluZycsXG4gICAgdHlwZU9mOiAndHlwZW9mJyxcbiAgICB1bmRlcmxpbmVQb3NpdGlvbjogJ3VuZGVybGluZS1wb3NpdGlvbicsXG4gICAgdW5kZXJsaW5lVGhpY2tuZXNzOiAndW5kZXJsaW5lLXRoaWNrbmVzcycsXG4gICAgdW5pY29kZUJpZGk6ICd1bmljb2RlLWJpZGknLFxuICAgIHVuaWNvZGVSYW5nZTogJ3VuaWNvZGUtcmFuZ2UnLFxuICAgIHVuaXRzUGVyRW06ICd1bml0cy1wZXItZW0nLFxuICAgIHZBbHBoYWJldGljOiAndi1hbHBoYWJldGljJyxcbiAgICB2SGFuZ2luZzogJ3YtaGFuZ2luZycsXG4gICAgdklkZW9ncmFwaGljOiAndi1pZGVvZ3JhcGhpYycsXG4gICAgdk1hdGhlbWF0aWNhbDogJ3YtbWF0aGVtYXRpY2FsJyxcbiAgICB2ZWN0b3JFZmZlY3Q6ICd2ZWN0b3ItZWZmZWN0JyxcbiAgICB2ZXJ0QWR2WTogJ3ZlcnQtYWR2LXknLFxuICAgIHZlcnRPcmlnaW5YOiAndmVydC1vcmlnaW4teCcsXG4gICAgdmVydE9yaWdpblk6ICd2ZXJ0LW9yaWdpbi15JyxcbiAgICB3b3JkU3BhY2luZzogJ3dvcmQtc3BhY2luZycsXG4gICAgd3JpdGluZ01vZGU6ICd3cml0aW5nLW1vZGUnLFxuICAgIHhIZWlnaHQ6ICd4LWhlaWdodCcsXG4gICAgLy8gVGhlc2Ugd2VyZSBjYW1lbGNhc2VkIGluIFRpbnkuIE5vdyBsb3dlcmNhc2VkIGluIFNWRyAyXG4gICAgcGxheWJhY2tPcmRlcjogJ3BsYXliYWNrb3JkZXInLFxuICAgIHRpbWVsaW5lQmVnaW46ICd0aW1lbGluZWJlZ2luJ1xuICB9LFxuICB0cmFuc2Zvcm06IGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICBhYm91dDogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIGFjY2VudEhlaWdodDogbnVtYmVyLFxuICAgIGFjY3VtdWxhdGU6IG51bGwsXG4gICAgYWRkaXRpdmU6IG51bGwsXG4gICAgYWxpZ25tZW50QmFzZWxpbmU6IG51bGwsXG4gICAgYWxwaGFiZXRpYzogbnVtYmVyLFxuICAgIGFtcGxpdHVkZTogbnVtYmVyLFxuICAgIGFyYWJpY0Zvcm06IG51bGwsXG4gICAgYXNjZW50OiBudW1iZXIsXG4gICAgYXR0cmlidXRlTmFtZTogbnVsbCxcbiAgICBhdHRyaWJ1dGVUeXBlOiBudWxsLFxuICAgIGF6aW11dGg6IG51bWJlcixcbiAgICBiYW5kd2lkdGg6IG51bGwsXG4gICAgYmFzZWxpbmVTaGlmdDogbnVsbCxcbiAgICBiYXNlRnJlcXVlbmN5OiBudWxsLFxuICAgIGJhc2VQcm9maWxlOiBudWxsLFxuICAgIGJib3g6IG51bGwsXG4gICAgYmVnaW46IG51bGwsXG4gICAgYmlhczogbnVtYmVyLFxuICAgIGJ5OiBudWxsLFxuICAgIGNhbGNNb2RlOiBudWxsLFxuICAgIGNhcEhlaWdodDogbnVtYmVyLFxuICAgIGNsYXNzTmFtZTogc3BhY2VTZXBhcmF0ZWQsXG4gICAgY2xpcDogbnVsbCxcbiAgICBjbGlwUGF0aDogbnVsbCxcbiAgICBjbGlwUGF0aFVuaXRzOiBudWxsLFxuICAgIGNsaXBSdWxlOiBudWxsLFxuICAgIGNvbG9yOiBudWxsLFxuICAgIGNvbG9ySW50ZXJwb2xhdGlvbjogbnVsbCxcbiAgICBjb2xvckludGVycG9sYXRpb25GaWx0ZXJzOiBudWxsLFxuICAgIGNvbG9yUHJvZmlsZTogbnVsbCxcbiAgICBjb2xvclJlbmRlcmluZzogbnVsbCxcbiAgICBjb250ZW50OiBudWxsLFxuICAgIGNvbnRlbnRTY3JpcHRUeXBlOiBudWxsLFxuICAgIGNvbnRlbnRTdHlsZVR5cGU6IG51bGwsXG4gICAgY3Jvc3NPcmlnaW46IG51bGwsXG4gICAgY3Vyc29yOiBudWxsLFxuICAgIGN4OiBudWxsLFxuICAgIGN5OiBudWxsLFxuICAgIGQ6IG51bGwsXG4gICAgZGF0YVR5cGU6IG51bGwsXG4gICAgZGVmYXVsdEFjdGlvbjogbnVsbCxcbiAgICBkZXNjZW50OiBudW1iZXIsXG4gICAgZGlmZnVzZUNvbnN0YW50OiBudW1iZXIsXG4gICAgZGlyZWN0aW9uOiBudWxsLFxuICAgIGRpc3BsYXk6IG51bGwsXG4gICAgZHVyOiBudWxsLFxuICAgIGRpdmlzb3I6IG51bWJlcixcbiAgICBkb21pbmFudEJhc2VsaW5lOiBudWxsLFxuICAgIGRvd25sb2FkOiBib29sZWFuLFxuICAgIGR4OiBudWxsLFxuICAgIGR5OiBudWxsLFxuICAgIGVkZ2VNb2RlOiBudWxsLFxuICAgIGVkaXRhYmxlOiBudWxsLFxuICAgIGVsZXZhdGlvbjogbnVtYmVyLFxuICAgIGVuYWJsZUJhY2tncm91bmQ6IG51bGwsXG4gICAgZW5kOiBudWxsLFxuICAgIGV2ZW50OiBudWxsLFxuICAgIGV4cG9uZW50OiBudW1iZXIsXG4gICAgZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZDogbnVsbCxcbiAgICBmaWxsOiBudWxsLFxuICAgIGZpbGxPcGFjaXR5OiBudW1iZXIsXG4gICAgZmlsbFJ1bGU6IG51bGwsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIGZpbHRlclJlczogbnVsbCxcbiAgICBmaWx0ZXJVbml0czogbnVsbCxcbiAgICBmbG9vZENvbG9yOiBudWxsLFxuICAgIGZsb29kT3BhY2l0eTogbnVsbCxcbiAgICBmb2N1c2FibGU6IG51bGwsXG4gICAgZm9jdXNIaWdobGlnaHQ6IG51bGwsXG4gICAgZm9udEZhbWlseTogbnVsbCxcbiAgICBmb250U2l6ZTogbnVsbCxcbiAgICBmb250U2l6ZUFkanVzdDogbnVsbCxcbiAgICBmb250U3RyZXRjaDogbnVsbCxcbiAgICBmb250U3R5bGU6IG51bGwsXG4gICAgZm9udFZhcmlhbnQ6IG51bGwsXG4gICAgZm9udFdlaWdodDogbnVsbCxcbiAgICBmb3JtYXQ6IG51bGwsXG4gICAgZnI6IG51bGwsXG4gICAgZnJvbTogbnVsbCxcbiAgICBmeDogbnVsbCxcbiAgICBmeTogbnVsbCxcbiAgICBnMTogY29tbWFTZXBhcmF0ZWQsXG4gICAgZzI6IGNvbW1hU2VwYXJhdGVkLFxuICAgIGdseXBoTmFtZTogY29tbWFTZXBhcmF0ZWQsXG4gICAgZ2x5cGhPcmllbnRhdGlvbkhvcml6b250YWw6IG51bGwsXG4gICAgZ2x5cGhPcmllbnRhdGlvblZlcnRpY2FsOiBudWxsLFxuICAgIGdseXBoUmVmOiBudWxsLFxuICAgIGdyYWRpZW50VHJhbnNmb3JtOiBudWxsLFxuICAgIGdyYWRpZW50VW5pdHM6IG51bGwsXG4gICAgaGFuZGxlcjogbnVsbCxcbiAgICBoYW5naW5nOiBudW1iZXIsXG4gICAgaGF0Y2hDb250ZW50VW5pdHM6IG51bGwsXG4gICAgaGF0Y2hVbml0czogbnVsbCxcbiAgICBoZWlnaHQ6IG51bGwsXG4gICAgaHJlZjogbnVsbCxcbiAgICBocmVmTGFuZzogbnVsbCxcbiAgICBob3JpekFkdlg6IG51bWJlcixcbiAgICBob3Jpek9yaWdpblg6IG51bWJlcixcbiAgICBob3Jpek9yaWdpblk6IG51bWJlcixcbiAgICBpZDogbnVsbCxcbiAgICBpZGVvZ3JhcGhpYzogbnVtYmVyLFxuICAgIGltYWdlUmVuZGVyaW5nOiBudWxsLFxuICAgIGluaXRpYWxWaXNpYmlsaXR5OiBudWxsLFxuICAgIGluOiBudWxsLFxuICAgIGluMjogbnVsbCxcbiAgICBpbnRlcmNlcHQ6IG51bWJlcixcbiAgICBrOiBudW1iZXIsXG4gICAgazE6IG51bWJlcixcbiAgICBrMjogbnVtYmVyLFxuICAgIGszOiBudW1iZXIsXG4gICAgazQ6IG51bWJlcixcbiAgICBrZXJuZWxNYXRyaXg6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICBrZXJuZWxVbml0TGVuZ3RoOiBudWxsLFxuICAgIGtleVBvaW50czogbnVsbCwgLy8gU0VNSV9DT0xPTl9TRVBBUkFURURcbiAgICBrZXlTcGxpbmVzOiBudWxsLCAvLyBTRU1JX0NPTE9OX1NFUEFSQVRFRFxuICAgIGtleVRpbWVzOiBudWxsLCAvLyBTRU1JX0NPTE9OX1NFUEFSQVRFRFxuICAgIGtlcm5pbmc6IG51bGwsXG4gICAgbGFuZzogbnVsbCxcbiAgICBsZW5ndGhBZGp1c3Q6IG51bGwsXG4gICAgbGV0dGVyU3BhY2luZzogbnVsbCxcbiAgICBsaWdodGluZ0NvbG9yOiBudWxsLFxuICAgIGxpbWl0aW5nQ29uZUFuZ2xlOiBudW1iZXIsXG4gICAgbG9jYWw6IG51bGwsXG4gICAgbWFya2VyRW5kOiBudWxsLFxuICAgIG1hcmtlck1pZDogbnVsbCxcbiAgICBtYXJrZXJTdGFydDogbnVsbCxcbiAgICBtYXJrZXJIZWlnaHQ6IG51bGwsXG4gICAgbWFya2VyVW5pdHM6IG51bGwsXG4gICAgbWFya2VyV2lkdGg6IG51bGwsXG4gICAgbWFzazogbnVsbCxcbiAgICBtYXNrQ29udGVudFVuaXRzOiBudWxsLFxuICAgIG1hc2tVbml0czogbnVsbCxcbiAgICBtYXRoZW1hdGljYWw6IG51bGwsXG4gICAgbWF4OiBudWxsLFxuICAgIG1lZGlhOiBudWxsLFxuICAgIG1lZGlhQ2hhcmFjdGVyRW5jb2Rpbmc6IG51bGwsXG4gICAgbWVkaWFDb250ZW50RW5jb2RpbmdzOiBudWxsLFxuICAgIG1lZGlhU2l6ZTogbnVtYmVyLFxuICAgIG1lZGlhVGltZTogbnVsbCxcbiAgICBtZXRob2Q6IG51bGwsXG4gICAgbWluOiBudWxsLFxuICAgIG1vZGU6IG51bGwsXG4gICAgbmFtZTogbnVsbCxcbiAgICBuYXZEb3duOiBudWxsLFxuICAgIG5hdkRvd25MZWZ0OiBudWxsLFxuICAgIG5hdkRvd25SaWdodDogbnVsbCxcbiAgICBuYXZMZWZ0OiBudWxsLFxuICAgIG5hdk5leHQ6IG51bGwsXG4gICAgbmF2UHJldjogbnVsbCxcbiAgICBuYXZSaWdodDogbnVsbCxcbiAgICBuYXZVcDogbnVsbCxcbiAgICBuYXZVcExlZnQ6IG51bGwsXG4gICAgbmF2VXBSaWdodDogbnVsbCxcbiAgICBudW1PY3RhdmVzOiBudWxsLFxuICAgIG9ic2VydmVyOiBudWxsLFxuICAgIG9mZnNldDogbnVsbCxcbiAgICBvbkFib3J0OiBudWxsLFxuICAgIG9uQWN0aXZhdGU6IG51bGwsXG4gICAgb25BZnRlclByaW50OiBudWxsLFxuICAgIG9uQmVmb3JlUHJpbnQ6IG51bGwsXG4gICAgb25CZWdpbjogbnVsbCxcbiAgICBvbkNhbmNlbDogbnVsbCxcbiAgICBvbkNhblBsYXk6IG51bGwsXG4gICAgb25DYW5QbGF5VGhyb3VnaDogbnVsbCxcbiAgICBvbkNoYW5nZTogbnVsbCxcbiAgICBvbkNsaWNrOiBudWxsLFxuICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgb25Db3B5OiBudWxsLFxuICAgIG9uQ3VlQ2hhbmdlOiBudWxsLFxuICAgIG9uQ3V0OiBudWxsLFxuICAgIG9uRGJsQ2xpY2s6IG51bGwsXG4gICAgb25EcmFnOiBudWxsLFxuICAgIG9uRHJhZ0VuZDogbnVsbCxcbiAgICBvbkRyYWdFbnRlcjogbnVsbCxcbiAgICBvbkRyYWdFeGl0OiBudWxsLFxuICAgIG9uRHJhZ0xlYXZlOiBudWxsLFxuICAgIG9uRHJhZ092ZXI6IG51bGwsXG4gICAgb25EcmFnU3RhcnQ6IG51bGwsXG4gICAgb25Ecm9wOiBudWxsLFxuICAgIG9uRHVyYXRpb25DaGFuZ2U6IG51bGwsXG4gICAgb25FbXB0aWVkOiBudWxsLFxuICAgIG9uRW5kOiBudWxsLFxuICAgIG9uRW5kZWQ6IG51bGwsXG4gICAgb25FcnJvcjogbnVsbCxcbiAgICBvbkZvY3VzOiBudWxsLFxuICAgIG9uRm9jdXNJbjogbnVsbCxcbiAgICBvbkZvY3VzT3V0OiBudWxsLFxuICAgIG9uSGFzaENoYW5nZTogbnVsbCxcbiAgICBvbklucHV0OiBudWxsLFxuICAgIG9uSW52YWxpZDogbnVsbCxcbiAgICBvbktleURvd246IG51bGwsXG4gICAgb25LZXlQcmVzczogbnVsbCxcbiAgICBvbktleVVwOiBudWxsLFxuICAgIG9uTG9hZDogbnVsbCxcbiAgICBvbkxvYWRlZERhdGE6IG51bGwsXG4gICAgb25Mb2FkZWRNZXRhZGF0YTogbnVsbCxcbiAgICBvbkxvYWRTdGFydDogbnVsbCxcbiAgICBvbk1lc3NhZ2U6IG51bGwsXG4gICAgb25Nb3VzZURvd246IG51bGwsXG4gICAgb25Nb3VzZUVudGVyOiBudWxsLFxuICAgIG9uTW91c2VMZWF2ZTogbnVsbCxcbiAgICBvbk1vdXNlTW92ZTogbnVsbCxcbiAgICBvbk1vdXNlT3V0OiBudWxsLFxuICAgIG9uTW91c2VPdmVyOiBudWxsLFxuICAgIG9uTW91c2VVcDogbnVsbCxcbiAgICBvbk1vdXNlV2hlZWw6IG51bGwsXG4gICAgb25PZmZsaW5lOiBudWxsLFxuICAgIG9uT25saW5lOiBudWxsLFxuICAgIG9uUGFnZUhpZGU6IG51bGwsXG4gICAgb25QYWdlU2hvdzogbnVsbCxcbiAgICBvblBhc3RlOiBudWxsLFxuICAgIG9uUGF1c2U6IG51bGwsXG4gICAgb25QbGF5OiBudWxsLFxuICAgIG9uUGxheWluZzogbnVsbCxcbiAgICBvblBvcFN0YXRlOiBudWxsLFxuICAgIG9uUHJvZ3Jlc3M6IG51bGwsXG4gICAgb25SYXRlQ2hhbmdlOiBudWxsLFxuICAgIG9uUmVwZWF0OiBudWxsLFxuICAgIG9uUmVzZXQ6IG51bGwsXG4gICAgb25SZXNpemU6IG51bGwsXG4gICAgb25TY3JvbGw6IG51bGwsXG4gICAgb25TZWVrZWQ6IG51bGwsXG4gICAgb25TZWVraW5nOiBudWxsLFxuICAgIG9uU2VsZWN0OiBudWxsLFxuICAgIG9uU2hvdzogbnVsbCxcbiAgICBvblN0YWxsZWQ6IG51bGwsXG4gICAgb25TdG9yYWdlOiBudWxsLFxuICAgIG9uU3VibWl0OiBudWxsLFxuICAgIG9uU3VzcGVuZDogbnVsbCxcbiAgICBvblRpbWVVcGRhdGU6IG51bGwsXG4gICAgb25Ub2dnbGU6IG51bGwsXG4gICAgb25VbmxvYWQ6IG51bGwsXG4gICAgb25Wb2x1bWVDaGFuZ2U6IG51bGwsXG4gICAgb25XYWl0aW5nOiBudWxsLFxuICAgIG9uWm9vbTogbnVsbCxcbiAgICBvcGFjaXR5OiBudWxsLFxuICAgIG9wZXJhdG9yOiBudWxsLFxuICAgIG9yZGVyOiBudWxsLFxuICAgIG9yaWVudDogbnVsbCxcbiAgICBvcmllbnRhdGlvbjogbnVsbCxcbiAgICBvcmlnaW46IG51bGwsXG4gICAgb3ZlcmZsb3c6IG51bGwsXG4gICAgb3ZlcmxheTogbnVsbCxcbiAgICBvdmVybGluZVBvc2l0aW9uOiBudW1iZXIsXG4gICAgb3ZlcmxpbmVUaGlja25lc3M6IG51bWJlcixcbiAgICBwYWludE9yZGVyOiBudWxsLFxuICAgIHBhbm9zZTE6IG51bGwsXG4gICAgcGF0aDogbnVsbCxcbiAgICBwYXRoTGVuZ3RoOiBudW1iZXIsXG4gICAgcGF0dGVybkNvbnRlbnRVbml0czogbnVsbCxcbiAgICBwYXR0ZXJuVHJhbnNmb3JtOiBudWxsLFxuICAgIHBhdHRlcm5Vbml0czogbnVsbCxcbiAgICBwaGFzZTogbnVsbCxcbiAgICBwaW5nOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBwaXRjaDogbnVsbCxcbiAgICBwbGF5YmFja09yZGVyOiBudWxsLFxuICAgIHBvaW50ZXJFdmVudHM6IG51bGwsXG4gICAgcG9pbnRzOiBudWxsLFxuICAgIHBvaW50c0F0WDogbnVtYmVyLFxuICAgIHBvaW50c0F0WTogbnVtYmVyLFxuICAgIHBvaW50c0F0WjogbnVtYmVyLFxuICAgIHByZXNlcnZlQWxwaGE6IG51bGwsXG4gICAgcHJlc2VydmVBc3BlY3RSYXRpbzogbnVsbCxcbiAgICBwcmltaXRpdmVVbml0czogbnVsbCxcbiAgICBwcm9wYWdhdGU6IG51bGwsXG4gICAgcHJvcGVydHk6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByOiBudWxsLFxuICAgIHJhZGl1czogbnVsbCxcbiAgICByZWZlcnJlclBvbGljeTogbnVsbCxcbiAgICByZWZYOiBudWxsLFxuICAgIHJlZlk6IG51bGwsXG4gICAgcmVsOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmV2OiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVuZGVyaW5nSW50ZW50OiBudWxsLFxuICAgIHJlcGVhdENvdW50OiBudWxsLFxuICAgIHJlcGVhdER1cjogbnVsbCxcbiAgICByZXF1aXJlZEV4dGVuc2lvbnM6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICByZXF1aXJlZEZlYXR1cmVzOiBjb21tYU9yU3BhY2VTZXBhcmF0ZWQsXG4gICAgcmVxdWlyZWRGb250czogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJlcXVpcmVkRm9ybWF0czogY29tbWFPclNwYWNlU2VwYXJhdGVkLFxuICAgIHJlc291cmNlOiBudWxsLFxuICAgIHJlc3RhcnQ6IG51bGwsXG4gICAgcmVzdWx0OiBudWxsLFxuICAgIHJvdGF0ZTogbnVsbCxcbiAgICByeDogbnVsbCxcbiAgICByeTogbnVsbCxcbiAgICBzY2FsZTogbnVsbCxcbiAgICBzZWVkOiBudWxsLFxuICAgIHNoYXBlUmVuZGVyaW5nOiBudWxsLFxuICAgIHNpZGU6IG51bGwsXG4gICAgc2xvcGU6IG51bGwsXG4gICAgc25hcHNob3RUaW1lOiBudWxsLFxuICAgIHNwZWN1bGFyQ29uc3RhbnQ6IG51bWJlcixcbiAgICBzcGVjdWxhckV4cG9uZW50OiBudW1iZXIsXG4gICAgc3ByZWFkTWV0aG9kOiBudWxsLFxuICAgIHNwYWNpbmc6IG51bGwsXG4gICAgc3RhcnRPZmZzZXQ6IG51bGwsXG4gICAgc3RkRGV2aWF0aW9uOiBudWxsLFxuICAgIHN0ZW1oOiBudWxsLFxuICAgIHN0ZW12OiBudWxsLFxuICAgIHN0aXRjaFRpbGVzOiBudWxsLFxuICAgIHN0b3BDb2xvcjogbnVsbCxcbiAgICBzdG9wT3BhY2l0eTogbnVsbCxcbiAgICBzdHJpa2V0aHJvdWdoUG9zaXRpb246IG51bWJlcixcbiAgICBzdHJpa2V0aHJvdWdoVGhpY2tuZXNzOiBudW1iZXIsXG4gICAgc3RyaW5nOiBudWxsLFxuICAgIHN0cm9rZTogbnVsbCxcbiAgICBzdHJva2VEYXNoQXJyYXk6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICBzdHJva2VEYXNoT2Zmc2V0OiBudWxsLFxuICAgIHN0cm9rZUxpbmVDYXA6IG51bGwsXG4gICAgc3Ryb2tlTGluZUpvaW46IG51bGwsXG4gICAgc3Ryb2tlTWl0ZXJMaW1pdDogbnVtYmVyLFxuICAgIHN0cm9rZU9wYWNpdHk6IG51bWJlcixcbiAgICBzdHJva2VXaWR0aDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBzdXJmYWNlU2NhbGU6IG51bWJlcixcbiAgICBzeW5jQmVoYXZpb3I6IG51bGwsXG4gICAgc3luY0JlaGF2aW9yRGVmYXVsdDogbnVsbCxcbiAgICBzeW5jTWFzdGVyOiBudWxsLFxuICAgIHN5bmNUb2xlcmFuY2U6IG51bGwsXG4gICAgc3luY1RvbGVyYW5jZURlZmF1bHQ6IG51bGwsXG4gICAgc3lzdGVtTGFuZ3VhZ2U6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICB0YWJJbmRleDogbnVtYmVyLFxuICAgIHRhYmxlVmFsdWVzOiBudWxsLFxuICAgIHRhcmdldDogbnVsbCxcbiAgICB0YXJnZXRYOiBudW1iZXIsXG4gICAgdGFyZ2V0WTogbnVtYmVyLFxuICAgIHRleHRBbmNob3I6IG51bGwsXG4gICAgdGV4dERlY29yYXRpb246IG51bGwsXG4gICAgdGV4dFJlbmRlcmluZzogbnVsbCxcbiAgICB0ZXh0TGVuZ3RoOiBudWxsLFxuICAgIHRpbWVsaW5lQmVnaW46IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdHJhbnNmb3JtQmVoYXZpb3I6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB0eXBlT2Y6IGNvbW1hT3JTcGFjZVNlcGFyYXRlZCxcbiAgICB0bzogbnVsbCxcbiAgICB0cmFuc2Zvcm06IG51bGwsXG4gICAgdTE6IG51bGwsXG4gICAgdTI6IG51bGwsXG4gICAgdW5kZXJsaW5lUG9zaXRpb246IG51bWJlcixcbiAgICB1bmRlcmxpbmVUaGlja25lc3M6IG51bWJlcixcbiAgICB1bmljb2RlOiBudWxsLFxuICAgIHVuaWNvZGVCaWRpOiBudWxsLFxuICAgIHVuaWNvZGVSYW5nZTogbnVsbCxcbiAgICB1bml0c1BlckVtOiBudW1iZXIsXG4gICAgdmFsdWVzOiBudWxsLFxuICAgIHZBbHBoYWJldGljOiBudW1iZXIsXG4gICAgdk1hdGhlbWF0aWNhbDogbnVtYmVyLFxuICAgIHZlY3RvckVmZmVjdDogbnVsbCxcbiAgICB2SGFuZ2luZzogbnVtYmVyLFxuICAgIHZJZGVvZ3JhcGhpYzogbnVtYmVyLFxuICAgIHZlcnNpb246IG51bGwsXG4gICAgdmVydEFkdlk6IG51bWJlcixcbiAgICB2ZXJ0T3JpZ2luWDogbnVtYmVyLFxuICAgIHZlcnRPcmlnaW5ZOiBudW1iZXIsXG4gICAgdmlld0JveDogbnVsbCxcbiAgICB2aWV3VGFyZ2V0OiBudWxsLFxuICAgIHZpc2liaWxpdHk6IG51bGwsXG4gICAgd2lkdGg6IG51bGwsXG4gICAgd2lkdGhzOiBudWxsLFxuICAgIHdvcmRTcGFjaW5nOiBudWxsLFxuICAgIHdyaXRpbmdNb2RlOiBudWxsLFxuICAgIHg6IG51bGwsXG4gICAgeDE6IG51bGwsXG4gICAgeDI6IG51bGwsXG4gICAgeENoYW5uZWxTZWxlY3RvcjogbnVsbCxcbiAgICB4SGVpZ2h0OiBudW1iZXIsXG4gICAgeTogbnVsbCxcbiAgICB5MTogbnVsbCxcbiAgICB5MjogbnVsbCxcbiAgICB5Q2hhbm5lbFNlbGVjdG9yOiBudWxsLFxuICAgIHo6IG51bGwsXG4gICAgem9vbUFuZFBhbjogbnVsbFxuICB9XG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtID0gcmVxdWlyZSgnLi9jYXNlLXNlbnNpdGl2ZS10cmFuc2Zvcm0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybVxuXG5mdW5jdGlvbiBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0oYXR0cmlidXRlcywgcHJvcGVydHkpIHtcbiAgcmV0dXJuIGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0oYXR0cmlidXRlcywgcHJvcGVydHkudG9Mb3dlckNhc2UoKSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm1cblxuZnVuY3Rpb24gY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybShhdHRyaWJ1dGVzLCBhdHRyaWJ1dGUpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZSBpbiBhdHRyaWJ1dGVzID8gYXR0cmlidXRlc1thdHRyaWJ1dGVdIDogYXR0cmlidXRlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG5vcm1hbGl6ZSA9IHJlcXVpcmUoJy4uLy4uL25vcm1hbGl6ZScpXG52YXIgU2NoZW1hID0gcmVxdWlyZSgnLi9zY2hlbWEnKVxudmFyIERlZmluZWRJbmZvID0gcmVxdWlyZSgnLi9kZWZpbmVkLWluZm8nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuXG5mdW5jdGlvbiBjcmVhdGUoZGVmaW5pdGlvbikge1xuICB2YXIgc3BhY2UgPSBkZWZpbml0aW9uLnNwYWNlXG4gIHZhciBtdXN0VXNlUHJvcGVydHkgPSBkZWZpbml0aW9uLm11c3RVc2VQcm9wZXJ0eSB8fCBbXVxuICB2YXIgYXR0cmlidXRlcyA9IGRlZmluaXRpb24uYXR0cmlidXRlcyB8fCB7fVxuICB2YXIgcHJvcHMgPSBkZWZpbml0aW9uLnByb3BlcnRpZXNcbiAgdmFyIHRyYW5zZm9ybSA9IGRlZmluaXRpb24udHJhbnNmb3JtXG4gIHZhciBwcm9wZXJ0eSA9IHt9XG4gIHZhciBub3JtYWwgPSB7fVxuICB2YXIgcHJvcFxuICB2YXIgaW5mb1xuXG4gIGZvciAocHJvcCBpbiBwcm9wcykge1xuICAgIGluZm8gPSBuZXcgRGVmaW5lZEluZm8oXG4gICAgICBwcm9wLFxuICAgICAgdHJhbnNmb3JtKGF0dHJpYnV0ZXMsIHByb3ApLFxuICAgICAgcHJvcHNbcHJvcF0sXG4gICAgICBzcGFjZVxuICAgIClcblxuICAgIGlmIChtdXN0VXNlUHJvcGVydHkuaW5kZXhPZihwcm9wKSAhPT0gLTEpIHtcbiAgICAgIGluZm8ubXVzdFVzZVByb3BlcnR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIHByb3BlcnR5W3Byb3BdID0gaW5mb1xuXG4gICAgbm9ybWFsW25vcm1hbGl6ZShwcm9wKV0gPSBwcm9wXG4gICAgbm9ybWFsW25vcm1hbGl6ZShpbmZvLmF0dHJpYnV0ZSldID0gcHJvcFxuICB9XG5cbiAgcmV0dXJuIG5ldyBTY2hlbWEocHJvcGVydHksIG5vcm1hbCwgc3BhY2UpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIEluZm8gPSByZXF1aXJlKCcuL2luZm8nKVxudmFyIHR5cGVzID0gcmVxdWlyZSgnLi90eXBlcycpXG5cbm1vZHVsZS5leHBvcnRzID0gRGVmaW5lZEluZm9cblxuRGVmaW5lZEluZm8ucHJvdG90eXBlID0gbmV3IEluZm8oKVxuRGVmaW5lZEluZm8ucHJvdG90eXBlLmRlZmluZWQgPSB0cnVlXG5cbnZhciBjaGVja3MgPSBbXG4gICdib29sZWFuJyxcbiAgJ2Jvb2xlYW5pc2gnLFxuICAnb3ZlcmxvYWRlZEJvb2xlYW4nLFxuICAnbnVtYmVyJyxcbiAgJ2NvbW1hU2VwYXJhdGVkJyxcbiAgJ3NwYWNlU2VwYXJhdGVkJyxcbiAgJ2NvbW1hT3JTcGFjZVNlcGFyYXRlZCdcbl1cbnZhciBjaGVja3NMZW5ndGggPSBjaGVja3MubGVuZ3RoXG5cbmZ1bmN0aW9uIERlZmluZWRJbmZvKHByb3BlcnR5LCBhdHRyaWJ1dGUsIG1hc2ssIHNwYWNlKSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBjaGVja1xuXG4gIG1hcmsodGhpcywgJ3NwYWNlJywgc3BhY2UpXG5cbiAgSW5mby5jYWxsKHRoaXMsIHByb3BlcnR5LCBhdHRyaWJ1dGUpXG5cbiAgd2hpbGUgKCsraW5kZXggPCBjaGVja3NMZW5ndGgpIHtcbiAgICBjaGVjayA9IGNoZWNrc1tpbmRleF1cbiAgICBtYXJrKHRoaXMsIGNoZWNrLCAobWFzayAmIHR5cGVzW2NoZWNrXSkgPT09IHR5cGVzW2NoZWNrXSlcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrKHZhbHVlcywga2V5LCB2YWx1ZSkge1xuICBpZiAodmFsdWUpIHtcbiAgICB2YWx1ZXNba2V5XSA9IHZhbHVlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IEluZm9cblxudmFyIHByb3RvID0gSW5mby5wcm90b3R5cGVcblxucHJvdG8uc3BhY2UgPSBudWxsXG5wcm90by5hdHRyaWJ1dGUgPSBudWxsXG5wcm90by5wcm9wZXJ0eSA9IG51bGxcbnByb3RvLmJvb2xlYW4gPSBmYWxzZVxucHJvdG8uYm9vbGVhbmlzaCA9IGZhbHNlXG5wcm90by5vdmVybG9hZGVkQm9vbGVhbiA9IGZhbHNlXG5wcm90by5udW1iZXIgPSBmYWxzZVxucHJvdG8uY29tbWFTZXBhcmF0ZWQgPSBmYWxzZVxucHJvdG8uc3BhY2VTZXBhcmF0ZWQgPSBmYWxzZVxucHJvdG8uY29tbWFPclNwYWNlU2VwYXJhdGVkID0gZmFsc2VcbnByb3RvLm11c3RVc2VQcm9wZXJ0eSA9IGZhbHNlXG5wcm90by5kZWZpbmVkID0gZmFsc2VcblxuZnVuY3Rpb24gSW5mbyhwcm9wZXJ0eSwgYXR0cmlidXRlKSB7XG4gIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eVxuICB0aGlzLmF0dHJpYnV0ZSA9IGF0dHJpYnV0ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJylcbnZhciBTY2hlbWEgPSByZXF1aXJlKCcuL3NjaGVtYScpXG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2VcblxuZnVuY3Rpb24gbWVyZ2UoZGVmaW5pdGlvbnMpIHtcbiAgdmFyIGxlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aFxuICB2YXIgcHJvcGVydHkgPSBbXVxuICB2YXIgbm9ybWFsID0gW11cbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIGluZm9cbiAgdmFyIHNwYWNlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpbmZvID0gZGVmaW5pdGlvbnNbaW5kZXhdXG4gICAgcHJvcGVydHkucHVzaChpbmZvLnByb3BlcnR5KVxuICAgIG5vcm1hbC5wdXNoKGluZm8ubm9ybWFsKVxuICAgIHNwYWNlID0gaW5mby5zcGFjZVxuICB9XG5cbiAgcmV0dXJuIG5ldyBTY2hlbWEoXG4gICAgeHRlbmQuYXBwbHkobnVsbCwgcHJvcGVydHkpLFxuICAgIHh0ZW5kLmFwcGx5KG51bGwsIG5vcm1hbCksXG4gICAgc3BhY2VcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gU2NoZW1hXG5cbnZhciBwcm90byA9IFNjaGVtYS5wcm90b3R5cGVcblxucHJvdG8uc3BhY2UgPSBudWxsXG5wcm90by5ub3JtYWwgPSB7fVxucHJvdG8ucHJvcGVydHkgPSB7fVxuXG5mdW5jdGlvbiBTY2hlbWEocHJvcGVydHksIG5vcm1hbCwgc3BhY2UpIHtcbiAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5XG4gIHRoaXMubm9ybWFsID0gbm9ybWFsXG5cbiAgaWYgKHNwYWNlKSB7XG4gICAgdGhpcy5zcGFjZSA9IHNwYWNlXG4gIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgcG93ZXJzID0gMFxuXG5leHBvcnRzLmJvb2xlYW4gPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5ib29sZWFuaXNoID0gaW5jcmVtZW50KClcbmV4cG9ydHMub3ZlcmxvYWRlZEJvb2xlYW4gPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5udW1iZXIgPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5zcGFjZVNlcGFyYXRlZCA9IGluY3JlbWVudCgpXG5leHBvcnRzLmNvbW1hU2VwYXJhdGVkID0gaW5jcmVtZW50KClcbmV4cG9ydHMuY29tbWFPclNwYWNlU2VwYXJhdGVkID0gaW5jcmVtZW50KClcblxuZnVuY3Rpb24gaW5jcmVtZW50KCkge1xuICByZXR1cm4gTWF0aC5wb3coMiwgKytwb3dlcnMpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZSh7XG4gIHNwYWNlOiAneGxpbmsnLFxuICB0cmFuc2Zvcm06IHhsaW5rVHJhbnNmb3JtLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgeExpbmtBY3R1YXRlOiBudWxsLFxuICAgIHhMaW5rQXJjUm9sZTogbnVsbCxcbiAgICB4TGlua0hyZWY6IG51bGwsXG4gICAgeExpbmtSb2xlOiBudWxsLFxuICAgIHhMaW5rU2hvdzogbnVsbCxcbiAgICB4TGlua1RpdGxlOiBudWxsLFxuICAgIHhMaW5rVHlwZTogbnVsbFxuICB9XG59KVxuXG5mdW5jdGlvbiB4bGlua1RyYW5zZm9ybShfLCBwcm9wKSB7XG4gIHJldHVybiAneGxpbms6JyArIHByb3Auc2xpY2UoNSkudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICBzcGFjZTogJ3htbCcsXG4gIHRyYW5zZm9ybTogeG1sVHJhbnNmb3JtLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgeG1sTGFuZzogbnVsbCxcbiAgICB4bWxCYXNlOiBudWxsLFxuICAgIHhtbFNwYWNlOiBudWxsXG4gIH1cbn0pXG5cbmZ1bmN0aW9uIHhtbFRyYW5zZm9ybShfLCBwcm9wKSB7XG4gIHJldHVybiAneG1sOicgKyBwcm9wLnNsaWNlKDMpLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG52YXIgY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtID0gcmVxdWlyZSgnLi91dGlsL2Nhc2UtaW5zZW5zaXRpdmUtdHJhbnNmb3JtJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICBzcGFjZTogJ3htbG5zJyxcbiAgYXR0cmlidXRlczoge1xuICAgIHhtbG5zeGxpbms6ICd4bWxuczp4bGluaydcbiAgfSxcbiAgdHJhbnNmb3JtOiBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB4bWxuczogbnVsbCxcbiAgICB4bWxuc1hMaW5rOiBudWxsXG4gIH1cbn0pXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBub3JtYWxpemVcblxuZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIG1lcmdlID0gcmVxdWlyZSgnLi9saWIvdXRpbC9tZXJnZScpXG52YXIgeGxpbmsgPSByZXF1aXJlKCcuL2xpYi94bGluaycpXG52YXIgeG1sID0gcmVxdWlyZSgnLi9saWIveG1sJylcbnZhciB4bWxucyA9IHJlcXVpcmUoJy4vbGliL3htbG5zJylcbnZhciBhcmlhID0gcmVxdWlyZSgnLi9saWIvYXJpYScpXG52YXIgc3ZnID0gcmVxdWlyZSgnLi9saWIvc3ZnJylcblxubW9kdWxlLmV4cG9ydHMgPSBtZXJnZShbeG1sLCB4bGluaywgeG1sbnMsIGFyaWEsIHN2Z10pXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZWFjdFxuXG52YXIgdG9IYXN0ID0gcmVxdWlyZSgnbWRhc3QtdXRpbC10by1oYXN0JylcbnZhciBzYW5pdGl6ZSA9IHJlcXVpcmUoJ2hhc3QtdXRpbC1zYW5pdGl6ZScpXG52YXIgdG9IID0gcmVxdWlyZSgnaGFzdC10by1oeXBlcnNjcmlwdCcpXG52YXIgdGFibGVDZWxsU3R5bGUgPSByZXF1aXJlKCdAbWFwYm94L2hhc3QtdXRpbC10YWJsZS1jZWxsLXN0eWxlJylcblxudmFyIGdsb2JhbFJlYWN0XG52YXIgZ2xvYmFsQ3JlYXRlRWxlbWVudFxudmFyIGdsb2JhbEZyYWdtZW50XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0IC0gSGFyZCB0byB0ZXN0ICovXG50cnkge1xuICBnbG9iYWxSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbiAgZ2xvYmFsQ3JlYXRlRWxlbWVudCA9IGdsb2JhbFJlYWN0LmNyZWF0ZUVsZW1lbnRcbiAgZ2xvYmFsRnJhZ21lbnQgPSBnbG9iYWxSZWFjdC5GcmFnbWVudFxufSBjYXRjaCAoXykge31cblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbnZhciB0YWJsZUVsZW1lbnRzID0gWyd0YWJsZScsICd0aGVhZCcsICd0Ym9keScsICd0Zm9vdCcsICd0ciddXG5cbmZ1bmN0aW9uIHJlYWN0KG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgY3JlYXRlRWxlbWVudCA9IHNldHRpbmdzLmNyZWF0ZUVsZW1lbnQgfHwgZ2xvYmFsQ3JlYXRlRWxlbWVudFxuICB2YXIgRnJhZ21lbnQgPSBzZXR0aW5ncy5mcmFnbWVudCB8fCBnbG9iYWxGcmFnbWVudFxuICB2YXIgY2xlYW4gPSBzZXR0aW5ncy5zYW5pdGl6ZSAhPT0gZmFsc2VcbiAgdmFyIHNjaGVtZSA9XG4gICAgY2xlYW4gJiYgdHlwZW9mIHNldHRpbmdzLnNhbml0aXplICE9PSAnYm9vbGVhbicgPyBzZXR0aW5ncy5zYW5pdGl6ZSA6IG51bGxcbiAgdmFyIHRvSGFzdE9wdGlvbnMgPSBzZXR0aW5ncy50b0hhc3QgfHwge31cbiAgdmFyIGNvbXBvbmVudHMgPSBzZXR0aW5ncy5yZW1hcmtSZWFjdENvbXBvbmVudHMgfHwge31cblxuICB0aGlzLkNvbXBpbGVyID0gY29tcGlsZVxuXG4gIC8vIFdyYXBwZXIgYXJvdW5kIGBjcmVhdGVFbGVtZW50YCB0byBwYXNzIGNvbXBvbmVudHMgaW4uXG4gIGZ1bmN0aW9uIGgobmFtZSwgcHJvcHMsIGNoaWxkcmVuKSB7XG4gICAgLy8gQ3VycmVudGx5LCBSZWFjdCBpc3N1ZXMgYSB3YXJuaW5nIGZvciAqYW55KiB3aGl0ZSBzcGFjZSBpbiB0YWJsZXMuXG4gICAgLy8gU28gd2UgcmVtb3ZlIHRoZSBwcmV0dHkgbGluZXMgZm9yIG5vdy5cbiAgICAvLyBTZWU6IDxodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC83MDgxPi5cbiAgICAvLyBTZWU6IDxodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvcHVsbC83NTE1Pi5cbiAgICAvLyBTZWU6IDxodHRwczovL2dpdGh1Yi5jb20vcmVtYXJranMvcmVtYXJrLXJlYWN0L2lzc3Vlcy82ND4uXG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBzdGlsbCB3b3JrcyBidXQgbmVlZCB0byBwdWJsaXNoIGByZW1hcmstZ2ZtYFxuICAgICAqIGZpcnN0LiAqL1xuICAgIGlmIChjaGlsZHJlbiAmJiB0YWJsZUVsZW1lbnRzLmluZGV4T2YobmFtZSkgIT09IC0xKSB7XG4gICAgICBjaGlsZHJlbiA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkICE9PSAnXFxuJ1xuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICAgIG93bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpID8gY29tcG9uZW50c1tuYW1lXSA6IG5hbWUsXG4gICAgICBwcm9wcyxcbiAgICAgIGNoaWxkcmVuXG4gICAgKVxuICB9XG5cbiAgLy8gQ29tcGlsZSBtZGFzdCB0byBSZWFjdC5cbiAgZnVuY3Rpb24gY29tcGlsZShub2RlKSB7XG4gICAgdmFyIHRyZWUgPSB0b0hhc3Qobm9kZSwgdG9IYXN0T3B0aW9ucylcbiAgICB2YXIgcm9vdFxuXG4gICAgaWYgKGNsZWFuKSB7XG4gICAgICB0cmVlID0gc2FuaXRpemUodHJlZSwgc2NoZW1lKVxuICAgIH1cblxuICAgIHJvb3QgPSB0b0goaCwgdGFibGVDZWxsU3R5bGUodHJlZSksIHNldHRpbmdzLnByZWZpeClcblxuICAgIC8vIElmIHRoaXMgY29tcGlsZWQgdG8gYSBgPGRpdj5gLCBidXQgZnJhZ21lbnQgYXJlIHBvc3NpYmxlLCB1c2UgdGhvc2UuXG4gICAgaWYgKHJvb3QudHlwZSA9PT0gJ2RpdicgJiYgRnJhZ21lbnQpIHtcbiAgICAgIHJvb3QgPSBjcmVhdGVFbGVtZW50KEZyYWdtZW50LCB7fSwgcm9vdC5wcm9wcy5jaGlsZHJlbilcbiAgICB9XG5cbiAgICByZXR1cm4gcm9vdFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5leHBvcnRzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuXG52YXIgZW1wdHkgPSAnJ1xudmFyIHNwYWNlID0gJyAnXG52YXIgd2hpdGVTcGFjZSA9IC9bIFxcdFxcblxcclxcZl0rL2dcblxuZnVuY3Rpb24gcGFyc2UodmFsdWUpIHtcbiAgdmFyIGlucHV0ID0gU3RyaW5nKHZhbHVlIHx8IGVtcHR5KS50cmltKClcbiAgcmV0dXJuIGlucHV0ID09PSBlbXB0eSA/IFtdIDogaW5wdXQuc3BsaXQod2hpdGVTcGFjZSlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlcykge1xuICByZXR1cm4gdmFsdWVzLmpvaW4oc3BhY2UpLnRyaW0oKVxufVxuIiwidmFyIHBhcnNlID0gcmVxdWlyZSgnaW5saW5lLXN0eWxlLXBhcnNlcicpO1xuXG4vKipcbiAqIFBhcnNlcyBpbmxpbmUgc3R5bGUgdG8gb2JqZWN0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyByZXR1cm5zIHsgJ2xpbmUtaGVpZ2h0JzogJzQyJyB9XG4gKiBTdHlsZVRvT2JqZWN0KCdsaW5lLWhlaWdodDogNDI7Jyk7XG4gKlxuICogQHBhcmFtICB7U3RyaW5nfSAgICAgIHN0eWxlICAgICAgLSBUaGUgaW5saW5lIHN0eWxlLlxuICogQHBhcmFtICB7RnVuY3Rpb259ICAgIFtpdGVyYXRvcl0gLSBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtudWxsfE9iamVjdH1cbiAqL1xuZnVuY3Rpb24gU3R5bGVUb09iamVjdChzdHlsZSwgaXRlcmF0b3IpIHtcbiAgdmFyIG91dHB1dCA9IG51bGw7XG4gIGlmICghc3R5bGUgfHwgdHlwZW9mIHN0eWxlICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBvdXRwdXQ7XG4gIH1cblxuICB2YXIgZGVjbGFyYXRpb247XG4gIHZhciBkZWNsYXJhdGlvbnMgPSBwYXJzZShzdHlsZSk7XG4gIHZhciBoYXNJdGVyYXRvciA9IHR5cGVvZiBpdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJztcbiAgdmFyIHByb3BlcnR5O1xuICB2YXIgdmFsdWU7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRlY2xhcmF0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGRlY2xhcmF0aW9uID0gZGVjbGFyYXRpb25zW2ldO1xuICAgIHByb3BlcnR5ID0gZGVjbGFyYXRpb24ucHJvcGVydHk7XG4gICAgdmFsdWUgPSBkZWNsYXJhdGlvbi52YWx1ZTtcblxuICAgIGlmIChoYXNJdGVyYXRvcikge1xuICAgICAgaXRlcmF0b3IocHJvcGVydHksIHZhbHVlLCBkZWNsYXJhdGlvbik7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgb3V0cHV0IHx8IChvdXRwdXQgPSB7fSk7XG4gICAgICBvdXRwdXRbcHJvcGVydHldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dHB1dDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZVRvT2JqZWN0O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdVxuXG5mdW5jdGlvbiB1KHR5cGUsIHByb3BzLCB2YWx1ZSkge1xuICB2YXIgbm9kZVxuXG4gIGlmIChcbiAgICAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkgJiZcbiAgICAodHlwZW9mIHByb3BzICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KHByb3BzKSlcbiAgKSB7XG4gICAgdmFsdWUgPSBwcm9wc1xuICAgIHByb3BzID0ge31cbiAgfVxuXG4gIG5vZGUgPSBPYmplY3QuYXNzaWduKHt0eXBlOiBTdHJpbmcodHlwZSl9LCBwcm9wcylcblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBub2RlLmNoaWxkcmVuID0gdmFsdWVcbiAgfSBlbHNlIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbm9kZS52YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgfVxuXG4gIHJldHVybiBub2RlXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZWRcblxuZnVuY3Rpb24gZ2VuZXJhdGVkKG5vZGUpIHtcbiAgcmV0dXJuIChcbiAgICAhbm9kZSB8fFxuICAgICFub2RlLnBvc2l0aW9uIHx8XG4gICAgIW5vZGUucG9zaXRpb24uc3RhcnQgfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5zdGFydC5saW5lIHx8XG4gICAgIW5vZGUucG9zaXRpb24uc3RhcnQuY29sdW1uIHx8XG4gICAgIW5vZGUucG9zaXRpb24uZW5kIHx8XG4gICAgIW5vZGUucG9zaXRpb24uZW5kLmxpbmUgfHxcbiAgICAhbm9kZS5wb3NpdGlvbi5lbmQuY29sdW1uXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnZlcnRcblxuZnVuY3Rpb24gY29udmVydCh0ZXN0KSB7XG4gIGlmICh0ZXN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gb2tcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZUZhY3RvcnkodGVzdClcbiAgfVxuXG4gIGlmICh0eXBlb2YgdGVzdCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gJ2xlbmd0aCcgaW4gdGVzdCA/IGFueUZhY3RvcnkodGVzdCkgOiBhbGxGYWN0b3J5KHRlc3QpXG4gIH1cblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGVzdFxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBmdW5jdGlvbiwgc3RyaW5nLCBvciBvYmplY3QgYXMgdGVzdCcpXG59XG5cbi8vIFV0aWxpdHkgYXNzZXJ0IGVhY2ggcHJvcGVydHkgaW4gYHRlc3RgIGlzIHJlcHJlc2VudGVkIGluIGBub2RlYCwgYW5kIGVhY2hcbi8vIHZhbHVlcyBhcmUgc3RyaWN0bHkgZXF1YWwuXG5mdW5jdGlvbiBhbGxGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIGFsbFxuXG4gIGZ1bmN0aW9uIGFsbChub2RlKSB7XG4gICAgdmFyIGtleVxuXG4gICAgZm9yIChrZXkgaW4gdGVzdCkge1xuICAgICAgaWYgKG5vZGVba2V5XSAhPT0gdGVzdFtrZXldKSByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFueUZhY3RvcnkodGVzdHMpIHtcbiAgdmFyIGNoZWNrcyA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG5cbiAgd2hpbGUgKCsraW5kZXggPCB0ZXN0cy5sZW5ndGgpIHtcbiAgICBjaGVja3NbaW5kZXhdID0gY29udmVydCh0ZXN0c1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gYW55XG5cbiAgZnVuY3Rpb24gYW55KCkge1xuICAgIHZhciBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNoZWNrcy5sZW5ndGgpIHtcbiAgICAgIGlmIChjaGVja3NbaW5kZXhdLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIGNvbnZlcnQgYSBzdHJpbmcgaW50byBhIGZ1bmN0aW9uIHdoaWNoIGNoZWNrcyBhIGdpdmVuIG5vZGXigJlzIHR5cGVcbi8vIGZvciBzYWlkIHN0cmluZy5cbmZ1bmN0aW9uIHR5cGVGYWN0b3J5KHRlc3QpIHtcbiAgcmV0dXJuIHR5cGVcblxuICBmdW5jdGlvbiB0eXBlKG5vZGUpIHtcbiAgICByZXR1cm4gQm9vbGVhbihub2RlICYmIG5vZGUudHlwZSA9PT0gdGVzdClcbiAgfVxufVxuXG4vLyBVdGlsaXR5IHRvIHJldHVybiB0cnVlLlxuZnVuY3Rpb24gb2soKSB7XG4gIHJldHVybiB0cnVlXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHN0YXJ0ID0gZmFjdG9yeSgnc3RhcnQnKVxudmFyIGVuZCA9IGZhY3RvcnkoJ2VuZCcpXG5cbm1vZHVsZS5leHBvcnRzID0gcG9zaXRpb25cblxucG9zaXRpb24uc3RhcnQgPSBzdGFydFxucG9zaXRpb24uZW5kID0gZW5kXG5cbmZ1bmN0aW9uIHBvc2l0aW9uKG5vZGUpIHtcbiAgcmV0dXJuIHtzdGFydDogc3RhcnQobm9kZSksIGVuZDogZW5kKG5vZGUpfVxufVxuXG5mdW5jdGlvbiBmYWN0b3J5KHR5cGUpIHtcbiAgcG9pbnQuZGlzcGxheU5hbWUgPSB0eXBlXG5cbiAgcmV0dXJuIHBvaW50XG5cbiAgZnVuY3Rpb24gcG9pbnQobm9kZSkge1xuICAgIHZhciBwb2ludCA9IChub2RlICYmIG5vZGUucG9zaXRpb24gJiYgbm9kZS5wb3NpdGlvblt0eXBlXSkgfHwge31cblxuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBwb2ludC5saW5lIHx8IG51bGwsXG4gICAgICBjb2x1bW46IHBvaW50LmNvbHVtbiB8fCBudWxsLFxuICAgICAgb2Zmc2V0OiBpc05hTihwb2ludC5vZmZzZXQpID8gbnVsbCA6IHBvaW50Lm9mZnNldFxuICAgIH1cbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eVxuZnVuY3Rpb24gaWRlbnRpdHkoZCkge1xuICByZXR1cm4gZFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRQYXJlbnRzXG5cbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciBjb2xvciA9IHJlcXVpcmUoJy4vY29sb3InKVxuXG52YXIgQ09OVElOVUUgPSB0cnVlXG52YXIgU0tJUCA9ICdza2lwJ1xudmFyIEVYSVQgPSBmYWxzZVxuXG52aXNpdFBhcmVudHMuQ09OVElOVUUgPSBDT05USU5VRVxudmlzaXRQYXJlbnRzLlNLSVAgPSBTS0lQXG52aXNpdFBhcmVudHMuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgdmFyIHN0ZXBcbiAgdmFyIGlzXG5cbiAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB2aXNpdG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV2ZXJzZSA9IHZpc2l0b3JcbiAgICB2aXNpdG9yID0gdGVzdFxuICAgIHRlc3QgPSBudWxsXG4gIH1cblxuICBpcyA9IGNvbnZlcnQodGVzdClcbiAgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcblxuICBmYWN0b3J5KHRyZWUsIG51bGwsIFtdKSgpXG5cbiAgZnVuY3Rpb24gZmFjdG9yeShub2RlLCBpbmRleCwgcGFyZW50cykge1xuICAgIHZhciB2YWx1ZSA9IHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyAmJiBub2RlICE9PSBudWxsID8gbm9kZSA6IHt9XG4gICAgdmFyIG5hbWVcblxuICAgIGlmICh0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPVxuICAgICAgICB0eXBlb2YgdmFsdWUudGFnTmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHZhbHVlLnRhZ05hbWVcbiAgICAgICAgICA6IHR5cGVvZiB2YWx1ZS5uYW1lID09PSAnc3RyaW5nJ1xuICAgICAgICAgID8gdmFsdWUubmFtZVxuICAgICAgICAgIDogdW5kZWZpbmVkXG5cbiAgICAgIHZpc2l0LmRpc3BsYXlOYW1lID1cbiAgICAgICAgJ25vZGUgKCcgKyBjb2xvcih2YWx1ZS50eXBlICsgKG5hbWUgPyAnPCcgKyBuYW1lICsgJz4nIDogJycpKSArICcpJ1xuICAgIH1cblxuICAgIHJldHVybiB2aXNpdFxuXG4gICAgZnVuY3Rpb24gdmlzaXQoKSB7XG4gICAgICB2YXIgZ3JhbmRwYXJlbnRzID0gcGFyZW50cy5jb25jYXQobm9kZSlcbiAgICAgIHZhciByZXN1bHQgPSBbXVxuICAgICAgdmFyIHN1YnJlc3VsdFxuICAgICAgdmFyIG9mZnNldFxuXG4gICAgICBpZiAoIXRlc3QgfHwgaXMobm9kZSwgaW5kZXgsIHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXSB8fCBudWxsKSkge1xuICAgICAgICByZXN1bHQgPSB0b1Jlc3VsdCh2aXNpdG9yKG5vZGUsIHBhcmVudHMpKVxuXG4gICAgICAgIGlmIChyZXN1bHRbMF0gPT09IEVYSVQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgcmVzdWx0WzBdICE9PSBTS0lQKSB7XG4gICAgICAgIG9mZnNldCA9IChyZXZlcnNlID8gbm9kZS5jaGlsZHJlbi5sZW5ndGggOiAtMSkgKyBzdGVwXG5cbiAgICAgICAgd2hpbGUgKG9mZnNldCA+IC0xICYmIG9mZnNldCA8IG5vZGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgc3VicmVzdWx0ID0gZmFjdG9yeShub2RlLmNoaWxkcmVuW29mZnNldF0sIG9mZnNldCwgZ3JhbmRwYXJlbnRzKSgpXG5cbiAgICAgICAgICBpZiAoc3VicmVzdWx0WzBdID09PSBFWElUKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VicmVzdWx0XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb2Zmc2V0ID1cbiAgICAgICAgICAgIHR5cGVvZiBzdWJyZXN1bHRbMV0gPT09ICdudW1iZXInID8gc3VicmVzdWx0WzFdIDogb2Zmc2V0ICsgc3RlcFxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9SZXN1bHQodmFsdWUpIHtcbiAgaWYgKHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gW3ZhbHVlXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzaXRcblxudmFyIHZpc2l0UGFyZW50cyA9IHJlcXVpcmUoJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cycpXG5cbnZhciBDT05USU5VRSA9IHZpc2l0UGFyZW50cy5DT05USU5VRVxudmFyIFNLSVAgPSB2aXNpdFBhcmVudHMuU0tJUFxudmFyIEVYSVQgPSB2aXNpdFBhcmVudHMuRVhJVFxuXG52aXNpdC5DT05USU5VRSA9IENPTlRJTlVFXG52aXNpdC5TS0lQID0gU0tJUFxudmlzaXQuRVhJVCA9IEVYSVRcblxuZnVuY3Rpb24gdmlzaXQodHJlZSwgdGVzdCwgdmlzaXRvciwgcmV2ZXJzZSkge1xuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIHZpc2l0b3IgPSB0ZXN0XG4gICAgdGVzdCA9IG51bGxcbiAgfVxuXG4gIHZpc2l0UGFyZW50cyh0cmVlLCB0ZXN0LCBvdmVybG9hZCwgcmV2ZXJzZSlcblxuICBmdW5jdGlvbiBvdmVybG9hZChub2RlLCBwYXJlbnRzKSB7XG4gICAgdmFyIHBhcmVudCA9IHBhcmVudHNbcGFyZW50cy5sZW5ndGggLSAxXVxuICAgIHZhciBpbmRleCA9IHBhcmVudCA/IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKG5vZGUpIDogbnVsbFxuICAgIHJldHVybiB2aXNpdG9yKG5vZGUsIGluZGV4LCBwYXJlbnQpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL01hcmtkb3duQ29tcG9uZW50cy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vTWFya2Rvd25Db21wb25lbnRzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vTWFya2Rvd25Db21wb25lbnRzLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB1bmlmaWVkIGZyb20gJ3VuaWZpZWQnO1xuaW1wb3J0IG1kcGFyc2UgZnJvbSAncmVtYXJrLXBhcnNlJztcbmltcG9ydCByMnIgZnJvbSAncmVtYXJrLXJlYWN0JztcbmltcG9ydCB7UHJvZ3JhbUhlYWRlciwgUHJvZ3JhbVN1YkhlYWRlcn0gZnJvbSAnLi4vY29tcG9uZW50cy9NYXJrZG93bkNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgcGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQgPSAobWQ6IHN0cmluZykgPT4ge1xuICBjb25zb2xlLmxvZyhtZCk7XG4gIGNvbnN0IHJlcyA9IHVuaWZpZWQoKVxuICAgICAgLnVzZShtZHBhcnNlKVxuICAgICAgLnVzZShyMnIsIHtcbiAgICAgICAgcmVtYXJrUmVhY3RDb21wb25lbnRzOiB7XG4gICAgICAgICAgaDE6IFByb2dyYW1IZWFkZXIsXG4gICAgICAgICAgaDI6IFByb2dyYW1TdWJIZWFkZXIsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnByb2Nlc3NTeW5jKG1kKTtcbiAgcmV0dXJuIHJlcy5yZXN1bHQ7XG59XG47XG4iXSwic291cmNlUm9vdCI6IiJ9