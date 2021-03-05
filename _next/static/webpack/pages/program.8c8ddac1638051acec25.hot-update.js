webpackHotUpdate_N_E("pages/program",{

/***/ "./node_modules/ccount/index.js":
/*!**************************************!*\
  !*** ./node_modules/ccount/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = ccount

function ccount(source, character) {
  var value = String(source)
  var count = 0
  var index

  if (typeof character !== 'string') {
    throw new Error('Expected character')
  }

  index = value.indexOf(character)

  while (index !== -1) {
    count++
    index = value.indexOf(character, index + character.length)
  }

  return count
}


/***/ }),

/***/ "./node_modules/markdown-table/index.js":
/*!**********************************************!*\
  !*** ./node_modules/markdown-table/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

module.exports = markdownTable

var trailingWhitespace = / +$/

// Characters.
var space = ' '
var lineFeed = '\n'
var dash = '-'
var colon = ':'
var verticalBar = '|'

var x = 0
var C = 67
var L = 76
var R = 82
var c = 99
var l = 108
var r = 114

// Create a table from a matrix of strings.
function markdownTable(table, options) {
  var settings = options || {}
  var padding = settings.padding !== false
  var start = settings.delimiterStart !== false
  var end = settings.delimiterEnd !== false
  var align = (settings.align || []).concat()
  var alignDelimiters = settings.alignDelimiters !== false
  var alignments = []
  var stringLength = settings.stringLength || defaultStringLength
  var rowIndex = -1
  var rowLength = table.length
  var cellMatrix = []
  var sizeMatrix = []
  var row = []
  var sizes = []
  var longestCellByColumn = []
  var mostCellsPerRow = 0
  var cells
  var columnIndex
  var columnLength
  var largest
  var size
  var cell
  var lines
  var line
  var before
  var after
  var code

  // This is a superfluous loop if we don’t align delimiters, but otherwise we’d
  // do superfluous work when aligning, so optimize for aligning.
  while (++rowIndex < rowLength) {
    cells = table[rowIndex]
    columnIndex = -1
    columnLength = cells.length
    row = []
    sizes = []

    if (columnLength > mostCellsPerRow) {
      mostCellsPerRow = columnLength
    }

    while (++columnIndex < columnLength) {
      cell = serialize(cells[columnIndex])

      if (alignDelimiters === true) {
        size = stringLength(cell)
        sizes[columnIndex] = size

        largest = longestCellByColumn[columnIndex]

        if (largest === undefined || size > largest) {
          longestCellByColumn[columnIndex] = size
        }
      }

      row.push(cell)
    }

    cellMatrix[rowIndex] = row
    sizeMatrix[rowIndex] = sizes
  }

  // Figure out which alignments to use.
  columnIndex = -1
  columnLength = mostCellsPerRow

  if (typeof align === 'object' && 'length' in align) {
    while (++columnIndex < columnLength) {
      alignments[columnIndex] = toAlignment(align[columnIndex])
    }
  } else {
    code = toAlignment(align)

    while (++columnIndex < columnLength) {
      alignments[columnIndex] = code
    }
  }

  // Inject the alignment row.
  columnIndex = -1
  columnLength = mostCellsPerRow
  row = []
  sizes = []

  while (++columnIndex < columnLength) {
    code = alignments[columnIndex]
    before = ''
    after = ''

    if (code === l) {
      before = colon
    } else if (code === r) {
      after = colon
    } else if (code === c) {
      before = colon
      after = colon
    }

    // There *must* be at least one hyphen-minus in each alignment cell.
    size = alignDelimiters
      ? Math.max(
          1,
          longestCellByColumn[columnIndex] - before.length - after.length
        )
      : 1

    cell = before + repeat(dash, size) + after

    if (alignDelimiters === true) {
      size = before.length + size + after.length

      if (size > longestCellByColumn[columnIndex]) {
        longestCellByColumn[columnIndex] = size
      }

      sizes[columnIndex] = size
    }

    row[columnIndex] = cell
  }

  // Inject the alignment row.
  cellMatrix.splice(1, 0, row)
  sizeMatrix.splice(1, 0, sizes)

  rowIndex = -1
  rowLength = cellMatrix.length
  lines = []

  while (++rowIndex < rowLength) {
    row = cellMatrix[rowIndex]
    sizes = sizeMatrix[rowIndex]
    columnIndex = -1
    columnLength = mostCellsPerRow
    line = []

    while (++columnIndex < columnLength) {
      cell = row[columnIndex] || ''
      before = ''
      after = ''

      if (alignDelimiters === true) {
        size = longestCellByColumn[columnIndex] - (sizes[columnIndex] || 0)
        code = alignments[columnIndex]

        if (code === r) {
          before = repeat(space, size)
        } else if (code === c) {
          if (size % 2 === 0) {
            before = repeat(space, size / 2)
            after = before
          } else {
            before = repeat(space, size / 2 + 0.5)
            after = repeat(space, size / 2 - 0.5)
          }
        } else {
          after = repeat(space, size)
        }
      }

      if (start === true && columnIndex === 0) {
        line.push(verticalBar)
      }

      if (
        padding === true &&
        // Don’t add the opening space if we’re not aligning and the cell is
        // empty: there will be a closing space.
        !(alignDelimiters === false && cell === '') &&
        (start === true || columnIndex !== 0)
      ) {
        line.push(space)
      }

      if (alignDelimiters === true) {
        line.push(before)
      }

      line.push(cell)

      if (alignDelimiters === true) {
        line.push(after)
      }

      if (padding === true) {
        line.push(space)
      }

      if (end === true || columnIndex !== columnLength - 1) {
        line.push(verticalBar)
      }
    }

    line = line.join('')

    if (end === false) {
      line = line.replace(trailingWhitespace, '')
    }

    lines.push(line)
  }

  return lines.join(lineFeed)
}

function serialize(value) {
  return value === null || value === undefined ? '' : String(value)
}

function defaultStringLength(value) {
  return value.length
}

function toAlignment(value) {
  var code = typeof value === 'string' ? value.charCodeAt(0) : x

  return code === L || code === l
    ? l
    : code === R || code === r
    ? r
    : code === C || code === c
    ? c
    : x
}


/***/ }),

/***/ "./node_modules/mdast-util-find-and-replace/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = findAndReplace

var visit = __webpack_require__(/*! unist-util-visit-parents */ "./node_modules/unist-util-visit-parents/index.js")
var convert = __webpack_require__(/*! unist-util-is/convert */ "./node_modules/unist-util-is/convert.js")
var escape = __webpack_require__(/*! escape-string-regexp */ "./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js")

var splice = [].splice

function findAndReplace(tree, find, replace, options) {
  var settings
  var schema

  if (typeof find === 'string' || (find && typeof find.exec === 'function')) {
    schema = [[find, replace]]
  } else {
    schema = find
    options = replace
  }

  settings = options || {}

  search(tree, settings, handlerFactory(toPairs(schema)))

  return tree

  function handlerFactory(pairs) {
    var pair = pairs[0]

    return handler

    function handler(node, parent) {
      var find = pair[0]
      var replace = pair[1]
      var nodes = []
      var start = 0
      var index = parent.children.indexOf(node)
      var position
      var match
      var subhandler
      var value

      find.lastIndex = 0

      match = find.exec(node.value)

      while (match) {
        position = match.index
        value = replace.apply(
          null,
          [].concat(match, {index: match.index, input: match.input})
        )

        if (value !== false) {
          if (start !== position) {
            nodes.push({type: 'text', value: node.value.slice(start, position)})
          }

          if (typeof value === 'string' && value.length > 0) {
            value = {type: 'text', value: value}
          }

          if (value) {
            nodes = [].concat(nodes, value)
          }

          start = position + match[0].length
        }

        if (!find.global) {
          break
        }

        match = find.exec(node.value)
      }

      if (position === undefined) {
        nodes = [node]
        index--
      } else {
        if (start < node.value.length) {
          nodes.push({type: 'text', value: node.value.slice(start)})
        }

        nodes.unshift(index, 1)
        splice.apply(parent.children, nodes)
      }

      if (pairs.length > 1) {
        subhandler = handlerFactory(pairs.slice(1))
        position = -1

        while (++position < nodes.length) {
          node = nodes[position]

          if (node.type === 'text') {
            subhandler(node, parent)
          } else {
            search(node, settings, subhandler)
          }
        }
      }

      return index + nodes.length + 1
    }
  }
}

function search(tree, settings, handler) {
  var ignored = convert(settings.ignore || [])
  var result = []

  visit(tree, 'text', visitor)

  return result

  function visitor(node, parents) {
    var index = -1
    var parent
    var grandparent

    while (++index < parents.length) {
      parent = parents[index]

      if (
        ignored(
          parent,
          grandparent ? grandparent.children.indexOf(parent) : undefined,
          grandparent
        )
      ) {
        return
      }

      grandparent = parent
    }

    return handler(node, grandparent)
  }
}

function toPairs(schema) {
  var result = []
  var key
  var index

  if (typeof schema !== 'object') {
    throw new Error('Expected array or object as schema')
  }

  if ('length' in schema) {
    index = -1

    while (++index < schema.length) {
      result.push([
        toExpression(schema[index][0]),
        toFunction(schema[index][1])
      ])
    }
  } else {
    for (key in schema) {
      result.push([toExpression(key), toFunction(schema[key])])
    }
  }

  return result
}

function toExpression(find) {
  return typeof find === 'string' ? new RegExp(escape(find), 'g') : find
}

function toFunction(replace) {
  return typeof replace === 'function' ? replace : returner

  function returner() {
    return replace
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/mdast-util-find-and-replace/node_modules/escape-string-regexp/index.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	// Escape characters with special meaning either inside or outside character sets.
	// Use a simple backslash escape when it’s always valid, and a \unnnn escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
	return string
		.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
		.replace(/-/g, '\\x2d');
};


/***/ }),

/***/ "./node_modules/mdast-util-gfm-autolink-literal/from-markdown.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-autolink-literal/from-markdown.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ccount = __webpack_require__(/*! ccount */ "./node_modules/ccount/index.js")
var findAndReplace = __webpack_require__(/*! mdast-util-find-and-replace */ "./node_modules/mdast-util-find-and-replace/index.js")
var unicodePunctuation = __webpack_require__(/*! micromark/dist/character/unicode-punctuation */ "./node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! micromark/dist/character/unicode-whitespace */ "./node_modules/micromark/dist/character/unicode-whitespace.js")

exports.transforms = [transformGfmAutolinkLiterals]
exports.enter = {
  literalAutolink: enterLiteralAutolink,
  literalAutolinkEmail: enterLiteralAutolinkValue,
  literalAutolinkHttp: enterLiteralAutolinkValue,
  literalAutolinkWww: enterLiteralAutolinkValue
}
exports.exit = {
  literalAutolink: exitLiteralAutolink,
  literalAutolinkEmail: exitLiteralAutolinkEmail,
  literalAutolinkHttp: exitLiteralAutolinkHttp,
  literalAutolinkWww: exitLiteralAutolinkWww
}

function enterLiteralAutolink(token) {
  this.enter({type: 'link', title: null, url: '', children: []}, token)
}

function enterLiteralAutolinkValue(token) {
  this.config.enter.autolinkProtocol.call(this, token)
}

function exitLiteralAutolinkHttp(token) {
  this.config.exit.autolinkProtocol.call(this, token)
}

function exitLiteralAutolinkWww(token) {
  this.config.exit.data.call(this, token)
  this.stack[this.stack.length - 1].url = 'http://' + this.sliceSerialize(token)
}

function exitLiteralAutolinkEmail(token) {
  this.config.exit.autolinkEmail.call(this, token)
}

function exitLiteralAutolink(token) {
  this.exit(token)
}

function transformGfmAutolinkLiterals(tree) {
  findAndReplace(
    tree,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/i, findUrl],
      [/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/, findEmail]
    ],
    {ignore: ['link', 'linkReference']}
  )
}

function findUrl($0, protocol, domain, path, match) {
  var prefix = ''
  var parts
  var result

  // Not an expected previous character.
  if (!previous(match)) {
    return false
  }

  // Treat `www` as part of the domain.
  if (/^w/i.test(protocol)) {
    domain = protocol + domain
    protocol = ''
    prefix = 'http://'
  }

  if (!isCorrectDomain(domain)) {
    return false
  }

  parts = splitUrl(domain + path)

  if (!parts[0]) return false

  result = {
    type: 'link',
    title: null,
    url: prefix + protocol + parts[0],
    children: [{type: 'text', value: protocol + parts[0]}]
  }

  if (parts[1]) {
    result = [result, {type: 'text', value: parts[1]}]
  }

  return result
}

function findEmail($0, atext, label, match) {
  // Not an expected previous character.
  if (!previous(match, true) || /[_-]$/.test(label)) {
    return false
  }

  return {
    type: 'link',
    title: null,
    url: 'mailto:' + atext + '@' + label,
    children: [{type: 'text', value: atext + '@' + label}]
  }
}

function isCorrectDomain(domain) {
  var parts = domain.split('.')

  if (
    parts.length < 2 ||
    (parts[parts.length - 1] &&
      (/_/.test(parts[parts.length - 1]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 1]))) ||
    (parts[parts.length - 2] &&
      (/_/.test(parts[parts.length - 2]) ||
        !/[a-zA-Z\d]/.test(parts[parts.length - 2])))
  ) {
    return false
  }

  return true
}

function splitUrl(url) {
  var trail = /[!"&'),.:;<>?\]}]+$/.exec(url)
  var closingParenIndex
  var openingParens
  var closingParens

  if (trail) {
    url = url.slice(0, trail.index)
    trail = trail[0]
    closingParenIndex = trail.indexOf(')')
    openingParens = ccount(url, '(')
    closingParens = ccount(url, ')')

    while (closingParenIndex !== -1 && openingParens > closingParens) {
      url += trail.slice(0, closingParenIndex + 1)
      trail = trail.slice(closingParenIndex + 1)
      closingParenIndex = trail.indexOf(')')
      closingParens++
    }
  }

  return [url, trail]
}

function previous(match, email) {
  var code = match.input.charCodeAt(match.index - 1)
  return (
    (code !== code || unicodeWhitespace(code) || unicodePunctuation(code)) &&
    (!email || code !== 47)
  )
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-autolink-literal/to-markdown.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-autolink-literal/to-markdown.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var inConstruct = 'phrasing'
var notInConstruct = ['autolink', 'link', 'image', 'label']

exports.unsafe = [
  {
    character: '@',
    before: '[+\\-.\\w]',
    after: '[\\-.\\w]',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  },
  {
    character: '.',
    before: '[Ww]',
    after: '[\\-.\\w]',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  },
  {
    character: ':',
    before: '[ps]',
    after: '\\/',
    inConstruct: inConstruct,
    notInConstruct: notInConstruct
  }
]


/***/ }),

/***/ "./node_modules/mdast-util-gfm-strikethrough/from-markdown.js":
/*!********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/from-markdown.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.canContainEols = ['delete']
exports.enter = {strikethrough: enterStrikethrough}
exports.exit = {strikethrough: exitStrikethrough}

function enterStrikethrough(token) {
  this.enter({type: 'delete', children: []}, token)
}

function exitStrikethrough(token) {
  this.exit(token)
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-strikethrough/to-markdown.js":
/*!******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-strikethrough/to-markdown.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var phrasing = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing */ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")

exports.unsafe = [{character: '~', inConstruct: 'phrasing'}]
exports.handlers = {delete: handleDelete}

handleDelete.peek = peekDelete

function handleDelete(node, _, context) {
  var exit = context.enter('emphasis')
  var value = phrasing(node, context, {before: '~', after: '~'})
  exit()
  return '~~' + value + '~~'
}

function peekDelete() {
  return '~'
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-table/from-markdown.js":
/*!************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-table/from-markdown.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.enter = {
  table: enterTable,
  tableData: enterCell,
  tableHeader: enterCell,
  tableRow: enterRow
}
exports.exit = {
  codeText: exitCodeText,
  table: exitTable,
  tableData: exit,
  tableHeader: exit,
  tableRow: exit
}

function enterTable(token) {
  this.enter({type: 'table', align: token._align, children: []}, token)
  this.setData('inTable', true)
}

function exitTable(token) {
  this.exit(token)
  this.setData('inTable')
}

function enterRow(token) {
  this.enter({type: 'tableRow', children: []}, token)
}

function exit(token) {
  this.exit(token)
}

function enterCell(token) {
  this.enter({type: 'tableCell', children: []}, token)
}

// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
function exitCodeText(token) {
  var value = this.resume()

  if (this.getData('inTable')) {
    value = value.replace(/\\([\\|])/g, replace)
  }

  this.stack[this.stack.length - 1].value = value
  this.exit(token)
}

function replace($0, $1) {
  // Pipes work, backslashes don’t (but can’t escape pipes).
  return $1 === '|' ? $1 : $0
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-table/to-markdown.js":
/*!**********************************************************!*\
  !*** ./node_modules/mdast-util-gfm-table/to-markdown.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var phrasing = __webpack_require__(/*! mdast-util-to-markdown/lib/util/container-phrasing */ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js")
var defaultInlineCode = __webpack_require__(/*! mdast-util-to-markdown/lib/handle/inline-code */ "./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js")
var markdownTable = __webpack_require__(/*! markdown-table */ "./node_modules/markdown-table/index.js")

module.exports = toMarkdown

function toMarkdown(options) {
  var settings = options || {}
  var padding = settings.tableCellPadding
  var alignDelimiters = settings.tablePipeAlign
  var stringLength = settings.stringLength
  var around = padding ? ' ' : '|'

  return {
    unsafe: [
      {character: '\r', inConstruct: 'tableCell'},
      {character: '\n', inConstruct: 'tableCell'},
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      {atBreak: true, character: '|', after: '[\t :-]'},
      // A pipe in a cell must be encoded.
      {character: '|', inConstruct: 'tableCell'},
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      {atBreak: true, character: ':', after: '-'},
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      {atBreak: true, character: '-', after: '[:|-]'}
    ],
    handlers: {
      table: handleTable,
      tableRow: handleTableRow,
      tableCell: handleTableCell,
      inlineCode: inlineCodeWithTable
    }
  }

  function handleTable(node, _, context) {
    return serializeData(handleTableAsData(node, context), node.align)
  }

  // This function isn’t really used normally, because we handle rows at the
  // table level.
  // But, if someone passes in a table row, this ensures we make somewhat sense.
  function handleTableRow(node, _, context) {
    var row = handleTableRowAsData(node, context)
    // `markdown-table` will always add an align row
    var value = serializeData([row])
    return value.slice(0, value.indexOf('\n'))
  }

  function handleTableCell(node, _, context) {
    var exit = context.enter('tableCell')
    var value = phrasing(node, context, {before: around, after: around})
    exit()
    return value
  }

  function serializeData(matrix, align) {
    return markdownTable(matrix, {
      align: align,
      alignDelimiters: alignDelimiters,
      padding: padding,
      stringLength: stringLength
    })
  }

  function handleTableAsData(node, context) {
    var children = node.children
    var index = -1
    var length = children.length
    var result = []
    var subexit = context.enter('table')

    while (++index < length) {
      result[index] = handleTableRowAsData(children[index], context)
    }

    subexit()

    return result
  }

  function handleTableRowAsData(node, context) {
    var children = node.children
    var index = -1
    var length = children.length
    var result = []
    var subexit = context.enter('tableRow')

    while (++index < length) {
      result[index] = handleTableCell(children[index], node, context)
    }

    subexit()

    return result
  }

  function inlineCodeWithTable(node, parent, context) {
    var value = defaultInlineCode(node, parent, context)

    if (context.stack.indexOf('tableCell') !== -1) {
      value = value.replace(/\|/g, '\\$&')
    }

    return value
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-task-list-item/from-markdown.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/from-markdown.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.exit = {
  taskListCheckValueChecked: exitCheck,
  taskListCheckValueUnchecked: exitCheck,
  paragraph: exitParagraphWithTaskListItem
}

function exitCheck(token) {
  // We’re always in a paragraph, in a list item.
  this.stack[this.stack.length - 2].checked =
    token.type === 'taskListCheckValueChecked'
}

function exitParagraphWithTaskListItem(token) {
  var parent = this.stack[this.stack.length - 2]
  var node = this.stack[this.stack.length - 1]
  var siblings = parent.children
  var head = node.children[0]
  var index = -1
  var firstParaghraph

  if (
    parent &&
    parent.type === 'listItem' &&
    typeof parent.checked === 'boolean' &&
    head &&
    head.type === 'text'
  ) {
    while (++index < siblings.length) {
      if (siblings[index].type === 'paragraph') {
        firstParaghraph = siblings[index]
        break
      }
    }

    if (firstParaghraph === node) {
      // Must start with a space or a tab.
      head.value = head.value.slice(1)

      if (head.value.length === 0) {
        node.children.shift()
      } else {
        head.position.start.column++
        head.position.start.offset++
        node.position.start = Object.assign({}, head.position.start)
      }
    }
  }

  this.exit(token)
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm-task-list-item/to-markdown.js":
/*!*******************************************************************!*\
  !*** ./node_modules/mdast-util-gfm-task-list-item/to-markdown.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defaultListItem = __webpack_require__(/*! mdast-util-to-markdown/lib/handle/list-item */ "./node_modules/mdast-util-to-markdown/lib/handle/list-item.js")

exports.unsafe = [{atBreak: true, character: '-', after: '[:|-]'}]

exports.handlers = {
  listItem: listItemWithTaskListItem
}

function listItemWithTaskListItem(node, parent, context) {
  var value = defaultListItem(node, parent, context)
  var head = node.children[0]

  if (typeof node.checked === 'boolean' && head && head.type === 'paragraph') {
    value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, check)
  }

  return value

  function check($0) {
    return $0 + '[' + (node.checked ? 'x' : ' ') + '] '
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm/from-markdown.js":
/*!******************************************************!*\
  !*** ./node_modules/mdast-util-gfm/from-markdown.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var autolinkLiteral = __webpack_require__(/*! mdast-util-gfm-autolink-literal/from-markdown */ "./node_modules/mdast-util-gfm-autolink-literal/from-markdown.js")
var strikethrough = __webpack_require__(/*! mdast-util-gfm-strikethrough/from-markdown */ "./node_modules/mdast-util-gfm-strikethrough/from-markdown.js")
var table = __webpack_require__(/*! mdast-util-gfm-table/from-markdown */ "./node_modules/mdast-util-gfm-table/from-markdown.js")
var taskListItem = __webpack_require__(/*! mdast-util-gfm-task-list-item/from-markdown */ "./node_modules/mdast-util-gfm-task-list-item/from-markdown.js")

var own = {}.hasOwnProperty

module.exports = configure([
  autolinkLiteral,
  strikethrough,
  table,
  taskListItem
])

function configure(extensions) {
  var config = {transforms: [], canContainEols: []}
  var length = extensions.length
  var index = -1

  while (++index < length) {
    extension(config, extensions[index])
  }

  return config
}

function extension(config, extension) {
  var key
  var left
  var right

  for (key in extension) {
    left = own.call(config, key) ? config[key] : (config[key] = {})
    right = extension[key]

    if (key === 'canContainEols' || key === 'transforms') {
      config[key] = [].concat(left, right)
    } else {
      Object.assign(left, right)
    }
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-gfm/to-markdown.js":
/*!****************************************************!*\
  !*** ./node_modules/mdast-util-gfm/to-markdown.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var autolinkLiteral = __webpack_require__(/*! mdast-util-gfm-autolink-literal/to-markdown */ "./node_modules/mdast-util-gfm-autolink-literal/to-markdown.js")
var strikethrough = __webpack_require__(/*! mdast-util-gfm-strikethrough/to-markdown */ "./node_modules/mdast-util-gfm-strikethrough/to-markdown.js")
var table = __webpack_require__(/*! mdast-util-gfm-table/to-markdown */ "./node_modules/mdast-util-gfm-table/to-markdown.js")
var taskListItem = __webpack_require__(/*! mdast-util-gfm-task-list-item/to-markdown */ "./node_modules/mdast-util-gfm-task-list-item/to-markdown.js")
var configure = __webpack_require__(/*! mdast-util-to-markdown/lib/configure */ "./node_modules/mdast-util-to-markdown/lib/configure.js")

module.exports = toMarkdown

function toMarkdown(options) {
  var config = configure(
    {handlers: {}, join: [], unsafe: [], options: {}},
    {
      extensions: [autolinkLiteral, strikethrough, table(options), taskListItem]
    }
  )

  return Object.assign(config.options, {
    handlers: config.handlers,
    join: config.join,
    unsafe: config.unsafe
  })
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/configure.js":
/*!**************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/configure.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = configure

function configure(base, extension) {
  var index = -1
  var key

  // First do subextensions.
  if (extension.extensions) {
    while (++index < extension.extensions.length) {
      configure(base, extension.extensions[index])
    }
  }

  for (key in extension) {
    if (key === 'extensions') {
      // Empty.
    } else if (key === 'unsafe' || key === 'join') {
      base[key] = base[key].concat(extension[key] || [])
    } else if (key === 'handlers') {
      base[key] = Object.assign(base[key], extension[key] || {})
    } else {
      base.options[key] = extension[key]
    }
  }

  return base
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/inline-code.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = inlineCode
inlineCode.peek = inlineCodePeek

var patternCompile = __webpack_require__(/*! ../util/pattern-compile */ "./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js")

function inlineCode(node, parent, context) {
  var value = node.value || ''
  var sequence = '`'
  var index = -1
  var pattern
  var expression
  var match
  var position

  // If there is a single grave accent on its own in the code, use a fence of
  // two.
  // If there are two in a row, use one.
  while (new RegExp('(^|[^`])' + sequence + '([^`]|$)').test(value)) {
    sequence += '`'
  }

  // If this is not just spaces or eols (tabs don’t count), and either the
  // first or last character are a space, eol, or tick, then pad with spaces.
  if (
    /[^ \r\n]/.test(value) &&
    (/[ \r\n`]/.test(value.charAt(0)) ||
      /[ \r\n`]/.test(value.charAt(value.length - 1)))
  ) {
    value = ' ' + value + ' '
  }

  // We have a potential problem: certain characters after eols could result in
  // blocks being seen.
  // For example, if someone injected the string `'\n# b'`, then that would
  // result in an ATX heading.
  // We can’t escape characters in `inlineCode`, but because eols are
  // transformed to spaces when going from markdown to HTML anyway, we can swap
  // them out.
  while (++index < context.unsafe.length) {
    pattern = context.unsafe[index]

    // Only look for `atBreak`s.
    // Btw: note that `atBreak` patterns will always start the regex at LF or
    // CR.
    if (!pattern.atBreak) continue

    expression = patternCompile(pattern)

    while ((match = expression.exec(value))) {
      position = match.index

      // Support CRLF (patterns only look for one of the characters).
      if (
        value.charCodeAt(position) === 10 /* `\n` */ &&
        value.charCodeAt(position - 1) === 13 /* `\r` */
      ) {
        position--
      }

      value = value.slice(0, position) + ' ' + value.slice(match.index + 1)
    }
  }

  return sequence + value + sequence
}

function inlineCodePeek() {
  return '`'
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/handle/list-item.js":
/*!*********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/handle/list-item.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = listItem

var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")
var checkBullet = __webpack_require__(/*! ../util/check-bullet */ "./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js")
var checkListItemIndent = __webpack_require__(/*! ../util/check-list-item-indent */ "./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js")
var flow = __webpack_require__(/*! ../util/container-flow */ "./node_modules/mdast-util-to-markdown/lib/util/container-flow.js")
var indentLines = __webpack_require__(/*! ../util/indent-lines */ "./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js")

function listItem(node, parent, context) {
  var bullet = checkBullet(context)
  var listItemIndent = checkListItemIndent(context)
  var size
  var value
  var exit

  if (parent && parent.ordered) {
    bullet =
      (parent.start > -1 ? parent.start : 1) +
      (context.options.incrementListMarker === false
        ? 0
        : parent.children.indexOf(node)) +
      '.'
  }

  size = bullet.length + 1

  if (
    listItemIndent === 'tab' ||
    (listItemIndent === 'mixed' && ((parent && parent.spread) || node.spread))
  ) {
    size = Math.ceil(size / 4) * 4
  }

  exit = context.enter('listItem')
  value = indentLines(flow(node, context), map)
  exit()

  return value

  function map(line, index, blank) {
    if (index) {
      return (blank ? '' : repeat(' ', size)) + line
    }

    return (blank ? bullet : bullet + repeat(' ', size - bullet.length)) + line
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-bullet.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkBullet

function checkBullet(context) {
  var marker = context.options.bullet || '*'

  if (marker !== '*' && marker !== '+' && marker !== '-') {
    throw new Error(
      'Cannot serialize items with `' +
        marker +
        '` for `options.bullet`, expected `*`, `+`, or `-`'
    )
  }

  return marker
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js":
/*!********************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/check-list-item-indent.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = checkListItemIndent

function checkListItemIndent(context) {
  var style = context.options.listItemIndent || 'tab'

  if (style === 1 || style === '1') {
    return 'one'
  }

  if (style !== 'tab' && style !== 'one' && style !== 'mixed') {
    throw new Error(
      'Cannot serialize items with `' +
        style +
        '` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`'
    )
  }

  return style
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-flow.js":
/*!************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/container-flow.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = flow

var repeat = __webpack_require__(/*! repeat-string */ "./node_modules/repeat-string/index.js")

function flow(parent, context) {
  var children = parent.children || []
  var results = []
  var index = -1
  var child

  while (++index < children.length) {
    child = children[index]

    results.push(
      context.handle(child, parent, context, {before: '\n', after: '\n'})
    )

    if (index + 1 < children.length) {
      results.push(between(child, children[index + 1]))
    }
  }

  return results.join('')

  function between(left, right) {
    var index = -1
    var result

    while (++index < context.join.length) {
      result = context.join[index](left, right, parent, context)

      if (result === true || result === 1) {
        break
      }

      if (typeof result === 'number') {
        return repeat('\n', 1 + Number(result))
      }

      if (result === false) {
        return '\n\n<!---->\n\n'
      }
    }

    return '\n\n'
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js":
/*!****************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/container-phrasing.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = phrasing

function phrasing(parent, context, safeOptions) {
  var children = parent.children || []
  var results = []
  var index = -1
  var before = safeOptions.before
  var after
  var handle
  var child

  while (++index < children.length) {
    child = children[index]

    if (index + 1 < children.length) {
      handle = context.handle.handlers[children[index + 1].type]
      if (handle && handle.peek) handle = handle.peek
      after = handle
        ? handle(children[index + 1], parent, context, {
            before: '',
            after: ''
          }).charAt(0)
        : ''
    } else {
      after = safeOptions.after
    }

    // In some cases, html (text) can be found in phrasing right after an eol.
    // When we’d serialize that, in most cases that would be seen as html
    // (flow).
    // As we can’t escape or so to prevent it from happening, we take a somewhat
    // reasonable approach: replace that eol with a space.
    // See: <https://github.com/syntax-tree/mdast-util-to-markdown/issues/15>
    if (
      results.length > 0 &&
      (before === '\r' || before === '\n') &&
      child.type === 'html'
    ) {
      results[results.length - 1] = results[results.length - 1].replace(
        /(\r?\n|\r)$/,
        ' '
      )
      before = ' '
    }

    results.push(
      context.handle(child, parent, context, {
        before: before,
        after: after
      })
    )

    before = results[results.length - 1].slice(-1)
  }

  return results.join('')
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/indent-lines.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = indentLines

var eol = /\r?\n|\r/g

function indentLines(value, map) {
  var result = []
  var start = 0
  var line = 0
  var match

  while ((match = eol.exec(value))) {
    one(value.slice(start, match.index))
    result.push(match[0])
    start = match.index + match[0].length
    line++
  }

  one(value.slice(start))

  return result.join('')

  function one(value) {
    result.push(map(value, line, !value))
  }
}


/***/ }),

/***/ "./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js":
/*!*************************************************************************!*\
  !*** ./node_modules/mdast-util-to-markdown/lib/util/pattern-compile.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = patternCompile

function patternCompile(pattern) {
  var before
  var after

  if (!pattern._compiled) {
    before = pattern.before ? '(?:' + pattern.before + ')' : ''
    after = pattern.after ? '(?:' + pattern.after + ')' : ''

    if (pattern.atBreak) {
      before = '[\\r\\n][\\t ]*' + before
    }

    pattern._compiled = new RegExp(
      (before ? '(' + before + ')' : '') +
        (/[|\\{}()[\]^$+*?.-]/.test(pattern.character) ? '\\' : '') +
        pattern.character +
        (after || ''),
      'g'
    )
  }

  return pattern._compiled
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-autolink-literal/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-autolink-literal/index.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm-autolink-literal/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-autolink-literal/syntax.js":
/*!*************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-autolink-literal/syntax.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiAlpha = __webpack_require__(/*! micromark/dist/character/ascii-alpha */ "./node_modules/micromark/dist/character/ascii-alpha.js")
var asciiAlphanumeric = __webpack_require__(/*! micromark/dist/character/ascii-alphanumeric */ "./node_modules/micromark/dist/character/ascii-alphanumeric.js")
var asciiControl = __webpack_require__(/*! micromark/dist/character/ascii-control */ "./node_modules/micromark/dist/character/ascii-control.js")
var markdownLineEnding = __webpack_require__(/*! micromark/dist/character/markdown-line-ending */ "./node_modules/micromark/dist/character/markdown-line-ending.js")
var unicodePunctuation = __webpack_require__(/*! micromark/dist/character/unicode-punctuation */ "./node_modules/micromark/dist/character/unicode-punctuation.js")
var unicodeWhitespace = __webpack_require__(/*! micromark/dist/character/unicode-whitespace */ "./node_modules/micromark/dist/character/unicode-whitespace.js")

var www = {tokenize: tokenizeWww, partial: true}
var domain = {tokenize: tokenizeDomain, partial: true}
var path = {tokenize: tokenizePath, partial: true}
var punctuation = {tokenize: tokenizePunctuation, partial: true}
var paren = {tokenize: tokenizeParen, partial: true}
var namedCharacterReference = {
  tokenize: tokenizeNamedCharacterReference,
  partial: true
}

var wwwAutolink = {tokenize: tokenizeWwwAutolink, previous: previousWww}
var httpAutolink = {tokenize: tokenizeHttpAutolink, previous: previousHttp}
var emailAutolink = {tokenize: tokenizeEmailAutolink, previous: previousEmail}

var text = {}

// Export hooked constructs.
exports.text = text

// `0`
var code = 48

// While the code is smaller than `{`.
while (code < 123) {
  text[code] = emailAutolink
  code++
  // Jump from `:` -> `A`
  if (code === 58) code = 65
  // Jump from `[` -> `a`
  else if (code === 91) code = 97
}

// `+`
text[43] = emailAutolink
// `-`
text[45] = emailAutolink
// `.`
text[46] = emailAutolink
// `_`
text[95] = emailAutolink
// `h`.
text[72] = [emailAutolink, httpAutolink]
text[104] = [emailAutolink, httpAutolink]
// `w`.
text[87] = [emailAutolink, wwwAutolink]
text[119] = [emailAutolink, wwwAutolink]

function tokenizeEmailAutolink(effects, ok, nok) {
  var self = this
  var hasDot

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (
      !gfmAtext(code) ||
      !previousEmail(self.previous) ||
      previous(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkEmail')
    return atext(code)
  }

  function atext(code) {
    if (gfmAtext(code)) {
      effects.consume(code)
      return atext
    }

    // `@`
    if (code === 64) {
      effects.consume(code)
      return label
    }

    return nok(code)
  }

  function label(code) {
    // `.`
    if (code === 46) {
      return effects.check(punctuation, done, dotContinuation)(code)
    }

    if (
      // `-`
      code === 45 ||
      // `_`
      code === 95
    ) {
      return effects.check(punctuation, nok, dashOrUnderscoreContinuation)(code)
    }

    if (asciiAlphanumeric(code)) {
      effects.consume(code)
      return label
    }

    return done(code)
  }

  function dotContinuation(code) {
    effects.consume(code)
    hasDot = true
    return label
  }

  function dashOrUnderscoreContinuation(code) {
    effects.consume(code)
    return afterDashOrUnderscore
  }

  function afterDashOrUnderscore(code) {
    // `.`
    if (code === 46) {
      return effects.check(punctuation, nok, dotContinuation)(code)
    }

    return label(code)
  }

  function done(code) {
    if (hasDot) {
      effects.exit('literalAutolinkEmail')
      effects.exit('literalAutolink')
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeWwwAutolink(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (
      (code !== 87 && code - 32 !== 87) ||
      !previousWww(self.previous) ||
      previous(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkWww')
    // For `www.` we check instead of attempt, because when it matches, GH
    // treats it as part of a domain (yes, it says a valid domain must come
    // after `www.`, but that’s not how it’s implemented by them).
    return effects.check(
      www,
      effects.attempt(domain, effects.attempt(path, done), nok),
      nok
    )(code)
  }

  function done(code) {
    effects.exit('literalAutolinkWww')
    effects.exit('literalAutolink')
    return ok(code)
  }
}

function tokenizeHttpAutolink(effects, ok, nok) {
  var self = this

  return start

  function start(code) {
    /* istanbul ignore next - hooks. */
    if (
      (code !== 72 && code - 32 !== 72) ||
      !previousHttp(self.previous) ||
      previous(self.events)
    ) {
      return nok(code)
    }

    effects.enter('literalAutolink')
    effects.enter('literalAutolinkHttp')
    effects.consume(code)
    return t1
  }

  function t1(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code)
      return t2
    }

    return nok(code)
  }

  function t2(code) {
    // `t`
    if (code === 84 || code - 32 === 84) {
      effects.consume(code)
      return p
    }

    return nok(code)
  }

  function p(code) {
    // `p`
    if (code === 80 || code - 32 === 80) {
      effects.consume(code)
      return s
    }

    return nok(code)
  }

  function s(code) {
    // `s`
    if (code === 83 || code - 32 === 83) {
      effects.consume(code)
      return colon
    }

    return colon(code)
  }

  function colon(code) {
    // `:`
    if (code === 58) {
      effects.consume(code)
      return slash1
    }

    return nok(code)
  }

  function slash1(code) {
    // `/`
    if (code === 47) {
      effects.consume(code)
      return slash2
    }

    return nok(code)
  }

  function slash2(code) {
    // `/`
    if (code === 47) {
      effects.consume(code)
      return after
    }

    return nok(code)
  }

  function after(code) {
    return asciiControl(code) ||
      unicodeWhitespace(code) ||
      unicodePunctuation(code)
      ? nok(code)
      : effects.attempt(domain, effects.attempt(path, done), nok)(code)
  }

  function done(code) {
    effects.exit('literalAutolinkHttp')
    effects.exit('literalAutolink')
    return ok(code)
  }
}

function tokenizeWww(effects, ok, nok) {
  return start

  function start(code) {
    // Assume a `w`.
    effects.consume(code)
    return w2
  }

  function w2(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code)
      return w3
    }

    return nok(code)
  }

  function w3(code) {
    // `w`
    if (code === 87 || code - 32 === 87) {
      effects.consume(code)
      return dot
    }

    return nok(code)
  }

  function dot(code) {
    // `.`
    if (code === 46) {
      effects.consume(code)
      return after
    }

    return nok(code)
  }

  function after(code) {
    return code === null || markdownLineEnding(code) ? nok(code) : ok(code)
  }
}

function tokenizeDomain(effects, ok, nok) {
  var hasUnderscoreInLastSegment
  var hasUnderscoreInLastLastSegment

  return domain

  function domain(code) {
    // `&`
    if (code === 38) {
      return effects.check(
        namedCharacterReference,
        done,
        punctuationContinuation
      )(code)
    }

    if (code === 46 /* `.` */ || code === 95 /* `_` */) {
      return effects.check(punctuation, done, punctuationContinuation)(code)
    }

    // GH documents that only alphanumerics (other than `-`, `.`, and `_`) can
    // occur, which sounds like ASCII only, but they also support `www.點看.com`,
    // so that’s Unicode.
    // Instead of some new production for Unicode alphanumerics, markdown
    // already has that for Unicode punctuation and whitespace, so use those.
    if (
      asciiControl(code) ||
      unicodeWhitespace(code) ||
      (code !== 45 /* `-` */ && unicodePunctuation(code))
    ) {
      return done(code)
    }

    effects.consume(code)
    return domain
  }

  function punctuationContinuation(code) {
    // `.`
    if (code === 46) {
      hasUnderscoreInLastLastSegment = hasUnderscoreInLastSegment
      hasUnderscoreInLastSegment = undefined
      effects.consume(code)
      return domain
    }

    // `_`
    if (code === 95) hasUnderscoreInLastSegment = true

    effects.consume(code)
    return domain
  }

  function done(code) {
    if (!hasUnderscoreInLastLastSegment && !hasUnderscoreInLastSegment) {
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizePath(effects, ok) {
  var balance = 0

  return inPath

  function inPath(code) {
    // `&`
    if (code === 38) {
      return effects.check(
        namedCharacterReference,
        ok,
        continuedPunctuation
      )(code)
    }

    // `(`
    if (code === 40) {
      balance++
    }

    // `)`
    if (code === 41) {
      return effects.check(paren, parenAtPathEnd, continuedPunctuation)(code)
    }

    if (pathEnd(code)) {
      return ok(code)
    }

    if (trailingPunctuation(code)) {
      return effects.check(punctuation, ok, continuedPunctuation)(code)
    }

    effects.consume(code)
    return inPath
  }

  function continuedPunctuation(code) {
    effects.consume(code)
    return inPath
  }

  function parenAtPathEnd(code) {
    balance--
    return balance < 0 ? ok(code) : continuedPunctuation(code)
  }
}

function tokenizeNamedCharacterReference(effects, ok, nok) {
  return start

  function start(code) {
    // Assume an ampersand.
    effects.consume(code)
    return inside
  }

  function inside(code) {
    if (asciiAlpha(code)) {
      effects.consume(code)
      return inside
    }

    // `;`
    if (code === 59) {
      effects.consume(code)
      return after
    }

    return nok(code)
  }

  function after(code) {
    // If the named character reference is followed by the end of the path, it’s
    // not continued punctuation.
    return pathEnd(code) ? ok(code) : nok(code)
  }
}

function tokenizeParen(effects, ok, nok) {
  return start

  function start(code) {
    // Assume a right paren.
    effects.consume(code)
    return after
  }

  function after(code) {
    // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.
    return pathEnd(code) ||
      // `)`
      code === 41
      ? ok(code)
      : nok(code)
  }
}

function tokenizePunctuation(effects, ok, nok) {
  return start

  function start(code) {
    // Always a valid trailing punctuation marker.
    effects.consume(code)
    return after
  }

  function after(code) {
    // Check the next.
    if (trailingPunctuation(code)) {
      effects.consume(code)
      return after
    }

    // If the punctuation marker is followed by the end of the path, it’s not
    // continued punctuation.
    return pathEnd(code) ? ok(code) : nok(code)
  }
}

function trailingPunctuation(code) {
  return (
    // `!`
    code === 33 ||
    // `"`
    code === 34 ||
    // `'`
    code === 39 ||
    // `)`
    code === 41 ||
    // `*`
    code === 42 ||
    // `,`
    code === 44 ||
    // `.`
    code === 46 ||
    // `:`
    code === 58 ||
    // `;`
    code === 59 ||
    // `<`
    code === 60 ||
    // `?`
    code === 63 ||
    // `_`.
    code === 95 ||
    // `~`
    code === 126
  )
}

function pathEnd(code) {
  return (
    // EOF.
    code === null ||
    // CR, LF, CRLF, HT, VS.
    code < 0 ||
    // Space.
    code === 32 ||
    // `<`
    code === 60
  )
}

function gfmAtext(code) {
  return (
    code === 43 /* `+` */ ||
    code === 45 /* `-` */ ||
    code === 46 /* `.` */ ||
    code === 95 /* `_` */ ||
    asciiAlphanumeric(code)
  )
}

function previousWww(code) {
  return (
    code === null ||
    code < 0 ||
    code === 32 /* ` ` */ ||
    code === 40 /* `(` */ ||
    code === 42 /* `*` */ ||
    code === 95 /* `_` */ ||
    code === 126 /* `~` */
  )
}

function previousHttp(code) {
  return code === null || !asciiAlpha(code)
}

function previousEmail(code) {
  return code !== 47 /* `/` */ && previousHttp(code)
}

function previous(events) {
  var index = events.length

  while (index--) {
    if (
      (events[index][1].type === 'labelLink' ||
        events[index][1].type === 'labelImage') &&
      !events[index][1]._balanced
    ) {
      return true
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-strikethrough/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-strikethrough/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = create

var classifyCharacter = __webpack_require__(/*! micromark/dist/util/classify-character */ "./node_modules/micromark/dist/util/classify-character.js")
var chunkedSplice = __webpack_require__(/*! micromark/dist/util/chunked-splice */ "./node_modules/micromark/dist/util/chunked-splice.js")
var resolveAll = __webpack_require__(/*! micromark/dist/util/resolve-all */ "./node_modules/micromark/dist/util/resolve-all.js")
var shallow = __webpack_require__(/*! micromark/dist/util/shallow */ "./node_modules/micromark/dist/util/shallow.js")

function create(options) {
  var settings = options || {}
  var single = settings.singleTilde
  var tokenizer = {
    tokenize: tokenizeStrikethrough,
    resolveAll: resolveAllStrikethrough
  }

  if (single === null || single === undefined) {
    single = true
  }

  return {text: {126: tokenizer}, insideSpan: {null: tokenizer}}

  // Take events and resolve strikethrough.
  function resolveAllStrikethrough(events, context) {
    var index = -1
    var strikethrough
    var text
    var open
    var nextEvents

    // Walk through all events.
    while (++index < events.length) {
      // Find a token that can close.
      if (
        events[index][0] === 'enter' &&
        events[index][1].type === 'strikethroughSequenceTemporary' &&
        events[index][1]._close
      ) {
        open = index

        // Now walk back to find an opener.
        while (open--) {
          // Find a token that can open the closer.
          if (
            events[open][0] === 'exit' &&
            events[open][1].type === 'strikethroughSequenceTemporary' &&
            events[open][1]._open &&
            // If the sizes are the same:
            events[index][1].end.offset - events[index][1].start.offset ===
              events[open][1].end.offset - events[open][1].start.offset
          ) {
            events[index][1].type = 'strikethroughSequence'
            events[open][1].type = 'strikethroughSequence'

            strikethrough = {
              type: 'strikethrough',
              start: shallow(events[open][1].start),
              end: shallow(events[index][1].end)
            }

            text = {
              type: 'strikethroughText',
              start: shallow(events[open][1].end),
              end: shallow(events[index][1].start)
            }

            // Opening.
            nextEvents = [
              ['enter', strikethrough, context],
              ['enter', events[open][1], context],
              ['exit', events[open][1], context],
              ['enter', text, context]
            ]

            // Between.
            chunkedSplice(
              nextEvents,
              nextEvents.length,
              0,
              resolveAll(
                context.parser.constructs.insideSpan.null,
                events.slice(open + 1, index),
                context
              )
            )

            // Closing.
            chunkedSplice(nextEvents, nextEvents.length, 0, [
              ['exit', text, context],
              ['enter', events[index][1], context],
              ['exit', events[index][1], context],
              ['exit', strikethrough, context]
            ])

            chunkedSplice(events, open - 1, index - open + 3, nextEvents)

            index = open + nextEvents.length - 2
            break
          }
        }
      }
    }

    return removeRemainingSequences(events)
  }

  function removeRemainingSequences(events) {
    var index = -1
    var length = events.length

    while (++index < length) {
      if (events[index][1].type === 'strikethroughSequenceTemporary') {
        events[index][1].type = 'data'
      }
    }

    return events
  }

  function tokenizeStrikethrough(effects, ok, nok) {
    var previous = this.previous
    var events = this.events
    var size = 0

    return start

    function start(code) {
      if (
        code !== 126 ||
        (previous === 126 &&
          events[events.length - 1][1].type !== 'characterEscape')
      ) {
        return nok(code)
      }

      effects.enter('strikethroughSequenceTemporary')
      return more(code)
    }

    function more(code) {
      var before = classifyCharacter(previous)
      var token
      var after

      if (code === 126) {
        // If this is the third marker, exit.
        if (size > 1) return nok(code)
        effects.consume(code)
        size++
        return more
      }

      if (size < 2 && !single) return nok(code)
      token = effects.exit('strikethroughSequenceTemporary')
      after = classifyCharacter(code)
      token._open = !after || (after === 2 && before)
      token._close = !before || (before === 2 && after)
      return ok(code)
    }
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-table/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-table/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm-table/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-table/syntax.js":
/*!**************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-table/syntax.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.flow = {
  null: {tokenize: tokenizeTable, resolve: resolveTable, interruptible: true}
}

var createSpace = __webpack_require__(/*! micromark/dist/tokenize/factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")

var setextUnderlineMini = {tokenize: tokenizeSetextUnderlineMini, partial: true}
var nextPrefixedOrBlank = {tokenize: tokenizeNextPrefixedOrBlank, partial: true}

function resolveTable(events, context) {
  var length = events.length
  var index = -1
  var token
  var inHead
  var inDelimiterRow
  var inRow
  var cell
  var content
  var text
  var contentStart
  var contentEnd
  var cellStart

  while (++index < length) {
    token = events[index][1]

    if (inRow) {
      if (token.type === 'temporaryTableCellContent') {
        contentStart = contentStart || index
        contentEnd = index
      }

      if (
        // Combine separate content parts into one.
        (token.type === 'tableCellDivider' || token.type === 'tableRow') &&
        contentEnd
      ) {
        content = {
          type: 'tableContent',
          start: events[contentStart][1].start,
          end: events[contentEnd][1].end
        }
        text = {
          type: 'chunkText',
          start: content.start,
          end: content.end,
          contentType: 'text'
        }

        events.splice(
          contentStart,
          contentEnd - contentStart + 1,
          ['enter', content, context],
          ['enter', text, context],
          ['exit', text, context],
          ['exit', content, context]
        )
        index -= contentEnd - contentStart - 3
        length = events.length
        contentStart = undefined
        contentEnd = undefined
      }
    }

    if (
      events[index][0] === 'exit' &&
      cellStart &&
      cellStart + 1 < index &&
      (token.type === 'tableCellDivider' ||
        (token.type === 'tableRow' &&
          (cellStart + 3 < index ||
            events[cellStart][1].type !== 'whitespace')))
    ) {
      cell = {
        type: inDelimiterRow
          ? 'tableDelimiter'
          : inHead
          ? 'tableHeader'
          : 'tableData',
        start: events[cellStart][1].start,
        end: events[index][1].end
      }
      events.splice(index + (token.type === 'tableCellDivider' ? 1 : 0), 0, [
        'exit',
        cell,
        context
      ])
      events.splice(cellStart, 0, ['enter', cell, context])
      index += 2
      length = events.length
      cellStart = index + 1
    }

    if (token.type === 'tableRow') {
      inRow = events[index][0] === 'enter'

      if (inRow) {
        cellStart = index + 1
      }
    }

    if (token.type === 'tableDelimiterRow') {
      inDelimiterRow = events[index][0] === 'enter'

      if (inDelimiterRow) {
        cellStart = index + 1
      }
    }

    if (token.type === 'tableHead') {
      inHead = events[index][0] === 'enter'
    }
  }

  return events
}

function tokenizeTable(effects, ok, nok) {
  var align = []
  var tableHeaderCount = 0
  var seenDelimiter
  var hasDash

  return start

  function start(code) {
    /* istanbul ignore if - used to be passed in beta micromark versions. */
    if (code === null || code === -5 || code === -4 || code === -3) {
      return nok(code)
    }

    effects.enter('table')._align = align
    effects.enter('tableHead')
    effects.enter('tableRow')

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      return cellDividerHead(code)
    }

    tableHeaderCount++
    effects.enter('temporaryTableCellContent')
    // Can’t be space or eols at the start of a construct, so we’re in a cell.
    return inCellContentHead(code)
  }

  function cellDividerHead(code) {
    // Always a pipe.
    effects.enter('tableCellDivider')
    effects.consume(code)
    effects.exit('tableCellDivider')
    seenDelimiter = true
    return cellBreakHead
  }

  function cellBreakHead(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndHead(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceHead
    }

    if (seenDelimiter) {
      seenDelimiter = undefined
      tableHeaderCount++
    }

    // `|`
    if (code === 124) {
      return cellDividerHead(code)
    }

    // Anything else is cell content.
    effects.enter('temporaryTableCellContent')
    return inCellContentHead(code)
  }

  function inWhitespaceHead(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return inWhitespaceHead
    }

    effects.exit('whitespace')
    return cellBreakHead(code)
  }

  function inCellContentHead(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent')
      return cellBreakHead(code)
    }

    effects.consume(code)
    // `\`
    return code === 92 ? inCellContentEscapeHead : inCellContentHead
  }

  function inCellContentEscapeHead(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code)
      return inCellContentHead
    }

    // Anything else.
    return inCellContentHead(code)
  }

  function atRowEndHead(code) {
    if (code === null) {
      return nok(code)
    }

    effects.exit('tableRow')
    effects.exit('tableHead')

    // Always a line ending.
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')

    // If a setext heading, exit.
    return effects.check(
      setextUnderlineMini,
      nok,
      // Support an indent before the delimiter row.
      createSpace(effects, rowStartDelimiter, 'linePrefix', 4)
    )
  }

  function rowStartDelimiter(code) {
    // If there’s another space, or we’re at the EOL/EOF, exit.
    if (code === null || code < 0 || code === 32) {
      return nok(code)
    }

    effects.enter('tableDelimiterRow')
    return atDelimiterRowBreak(code)
  }

  function atDelimiterRowBreak(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceDelimiter
    }

    // `-`
    if (code === 45) {
      effects.enter('tableDelimiterFiller')
      effects.consume(code)
      hasDash = true
      align.push(null)
      return inFillerDelimiter
    }

    // `:`
    if (code === 58) {
      effects.enter('tableDelimiterAlignment')
      effects.consume(code)
      effects.exit('tableDelimiterAlignment')
      align.push('left')
      return afterLeftAlignment
    }

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      effects.enter('tableCellDivider')
      effects.consume(code)
      effects.exit('tableCellDivider')
      return atDelimiterRowBreak
    }

    return nok(code)
  }

  function inWhitespaceDelimiter(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return inWhitespaceDelimiter
    }

    effects.exit('whitespace')
    return atDelimiterRowBreak(code)
  }

  function inFillerDelimiter(code) {
    // `-`
    if (code === 45) {
      effects.consume(code)
      return inFillerDelimiter
    }

    effects.exit('tableDelimiterFiller')

    // `:`
    if (code === 58) {
      effects.enter('tableDelimiterAlignment')
      effects.consume(code)
      effects.exit('tableDelimiterAlignment')

      align[align.length - 1] =
        align[align.length - 1] === 'left' ? 'center' : 'right'

      return afterRightAlignment
    }

    return atDelimiterRowBreak(code)
  }

  function afterLeftAlignment(code) {
    // `-`
    if (code === 45) {
      effects.enter('tableDelimiterFiller')
      effects.consume(code)
      hasDash = true
      return inFillerDelimiter
    }

    // Anything else is not ok.
    return nok(code)
  }

  function afterRightAlignment(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return rowEndDelimiter(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceDelimiter
    }

    // `|`
    if (code === 124) {
      effects.enter('tableCellDivider')
      effects.consume(code)
      effects.exit('tableCellDivider')
      return atDelimiterRowBreak
    }

    return nok(code)
  }

  function rowEndDelimiter(code) {
    effects.exit('tableDelimiterRow')

    // Exit if there was no dash at all, or if the header cell count is not the
    // delimiter cell count.
    if (!hasDash || tableHeaderCount !== align.length) {
      return nok(code)
    }

    if (code === null) {
      return tableClose(code)
    }

    return effects.check(nextPrefixedOrBlank, tableClose, tableContinue)(code)
  }

  function tableClose(code) {
    effects.exit('table')
    return ok(code)
  }

  function tableContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    // We checked that it’s not a prefixed or blank line, so we’re certain a
    // body is coming, though it may be indented.
    return createSpace(effects, bodyStart, 'linePrefix', 4)
  }

  function bodyStart(code) {
    effects.enter('tableBody')
    return rowStartBody(code)
  }

  function rowStartBody(code) {
    effects.enter('tableRow')

    // If we start with a pipe, we open a cell marker.
    if (code === 124) {
      return cellDividerBody(code)
    }

    effects.enter('temporaryTableCellContent')
    // Can’t be space or eols at the start of a construct, so we’re in a cell.
    return inCellContentBody(code)
  }

  function cellDividerBody(code) {
    // Always a pipe.
    effects.enter('tableCellDivider')
    effects.consume(code)
    effects.exit('tableCellDivider')
    return cellBreakBody
  }

  function cellBreakBody(code) {
    // EOF, CR, LF, CRLF.
    if (code === null || code === -5 || code === -4 || code === -3) {
      return atRowEndBody(code)
    }

    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.enter('whitespace')
      effects.consume(code)
      return inWhitespaceBody
    }

    // `|`
    if (code === 124) {
      return cellDividerBody(code)
    }

    // Anything else is cell content.
    effects.enter('temporaryTableCellContent')
    return inCellContentBody(code)
  }

  function inWhitespaceBody(code) {
    // HT, VS, SP.
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return inWhitespaceBody
    }

    effects.exit('whitespace')
    return cellBreakBody(code)
  }

  function inCellContentBody(code) {
    // EOF, whitespace, pipe
    if (code === null || code < 0 || code === 32 || code === 124) {
      effects.exit('temporaryTableCellContent')
      return cellBreakBody(code)
    }

    effects.consume(code)
    // `\`
    return code === 92 ? inCellContentEscapeBody : inCellContentBody
  }

  function inCellContentEscapeBody(code) {
    // `\` or `|`
    if (code === 92 || code === 124) {
      effects.consume(code)
      return inCellContentBody
    }

    // Anything else.
    return inCellContentBody(code)
  }

  function atRowEndBody(code) {
    effects.exit('tableRow')

    if (code === null) {
      return tableBodyClose(code)
    }

    return effects.check(
      nextPrefixedOrBlank,
      tableBodyClose,
      tableBodyContinue
    )(code)
  }

  function tableBodyClose(code) {
    effects.exit('tableBody')
    return tableClose(code)
  }

  function tableBodyContinue(code) {
    // Always a line ending.
    effects.enter('lineEnding')
    effects.consume(code)
    effects.exit('lineEnding')
    // Support an optional prefix, then start a body row.
    return createSpace(effects, rowStartBody, 'linePrefix', 4)
  }
}

// Based on micromark, but that won’t work as we’re in a table, and that expects
// content.
// <https://github.com/micromark/micromark/blob/main/lib/tokenize/setext-underline.js>
function tokenizeSetextUnderlineMini(effects, ok, nok) {
  return start

  function start(code) {
    // `-`
    if (code !== 45) {
      return nok(code)
    }

    effects.enter('setextUnderline')
    return sequence(code)
  }

  function sequence(code) {
    if (code === 45) {
      effects.consume(code)
      return sequence
    }

    return whitespace(code)
  }

  function whitespace(code) {
    if (code === -2 || code === -1 || code === 32) {
      effects.consume(code)
      return whitespace
    }

    if (code === null || code === -5 || code === -4 || code === -3) {
      return ok(code)
    }

    return nok(code)
  }
}

function tokenizeNextPrefixedOrBlank(effects, ok, nok) {
  var size = 0

  return start

  function start(code) {
    // This is a check, so we don’t care about tokens, but we open a bogus one
    // so we’re valid.
    effects.enter('check')
    // EOL.
    effects.consume(code)
    return whitespace
  }

  function whitespace(code) {
    // VS or SP.
    if (code === -1 || code === 32) {
      effects.consume(code)
      size++
      return size === 4 ? ok : whitespace
    }

    // EOF or whitespace
    if (code === null || code < 0) {
      return ok(code)
    }

    // Anything else.
    return nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-task-list-item/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm-task-list-item/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm-task-list-item/syntax.js":
/*!***********************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/syntax.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var markdownLineEndingOrSpace = __webpack_require__(/*! micromark/dist/character/markdown-line-ending-or-space */ "./node_modules/micromark/dist/character/markdown-line-ending-or-space.js")
var spaceFactory = __webpack_require__(/*! micromark/dist/tokenize/factory-space */ "./node_modules/micromark/dist/tokenize/factory-space.js")
var prefixSize = __webpack_require__(/*! micromark/dist/util/prefix-size */ "./node_modules/micromark/dist/util/prefix-size.js")

var tasklistCheck = {tokenize: tokenizeTasklistCheck}

exports.text = {91: tasklistCheck}

function tokenizeTasklistCheck(effects, ok, nok) {
  var self = this

  return open

  function open(code) {
    if (
      // Exit if not `[`.
      code !== 91 ||
      // Exit if there’s stuff before.
      self.previous !== null ||
      // Exit if not in the first content that is the first child of a list
      // item.
      !self._gfmTasklistFirstContentOfListItem
    ) {
      return nok(code)
    }

    effects.enter('taskListCheck')
    effects.enter('taskListCheckMarker')
    effects.consume(code)
    effects.exit('taskListCheckMarker')
    return inside
  }

  function inside(code) {
    // Tab or space.
    if (code === -2 || code === 32) {
      effects.enter('taskListCheckValueUnchecked')
      effects.consume(code)
      effects.exit('taskListCheckValueUnchecked')
      return close
    }

    // Upper- and lower `x`.
    if (code === 88 || code === 120) {
      effects.enter('taskListCheckValueChecked')
      effects.consume(code)
      effects.exit('taskListCheckValueChecked')
      return close
    }

    return nok(code)
  }

  function close(code) {
    // `]`
    if (code === 93) {
      effects.enter('taskListCheckMarker')
      effects.consume(code)
      effects.exit('taskListCheckMarker')
      effects.exit('taskListCheck')
      return effects.check({tokenize: spaceThenNonSpace}, ok, nok)
    }

    return nok(code)
  }
}

function spaceThenNonSpace(effects, ok, nok) {
  var self = this

  return spaceFactory(effects, after, 'whitespace')

  function after(code) {
    return prefixSize(self.events, 'whitespace') &&
      code !== null &&
      !markdownLineEndingOrSpace(code)
      ? ok(code)
      : nok(code)
  }
}


/***/ }),

/***/ "./node_modules/micromark-extension-gfm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./syntax */ "./node_modules/micromark-extension-gfm/syntax.js")


/***/ }),

/***/ "./node_modules/micromark-extension-gfm/syntax.js":
/*!********************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/syntax.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var combine = __webpack_require__(/*! micromark/dist/util/combine-extensions */ "./node_modules/micromark/dist/util/combine-extensions.js")
var autolink = __webpack_require__(/*! micromark-extension-gfm-autolink-literal */ "./node_modules/micromark-extension-gfm-autolink-literal/index.js")
var strikethrough = __webpack_require__(/*! micromark-extension-gfm-strikethrough */ "./node_modules/micromark-extension-gfm-strikethrough/index.js")
var table = __webpack_require__(/*! micromark-extension-gfm-table */ "./node_modules/micromark-extension-gfm-table/index.js")
var tasklist = __webpack_require__(/*! micromark-extension-gfm-task-list-item */ "./node_modules/micromark-extension-gfm-task-list-item/index.js")

module.exports = create

function create(options) {
  return combine([autolink, strikethrough(options), table, tasklist])
}


/***/ }),

/***/ "./node_modules/remark-gfm/index.js":
/*!******************************************!*\
  !*** ./node_modules/remark-gfm/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var syntax = __webpack_require__(/*! micromark-extension-gfm */ "./node_modules/micromark-extension-gfm/index.js")
var fromMarkdown = __webpack_require__(/*! mdast-util-gfm/from-markdown */ "./node_modules/mdast-util-gfm/from-markdown.js")
var toMarkdown = __webpack_require__(/*! mdast-util-gfm/to-markdown */ "./node_modules/mdast-util-gfm/to-markdown.js")

var warningIssued

module.exports = gfm

function gfm(options) {
  var data = this.data()

  /* istanbul ignore next - old remark. */
  if (
    !warningIssued &&
    ((this.Parser &&
      this.Parser.prototype &&
      this.Parser.prototype.blockTokenizers) ||
      (this.Compiler &&
        this.Compiler.prototype &&
        this.Compiler.prototype.visitors))
  ) {
    warningIssued = true
    console.warn(
      '[remark-gfm] Warning: please upgrade to remark 13 to use this plugin'
    )
  }

  add('micromarkExtensions', syntax(options))
  add('fromMarkdownExtensions', fromMarkdown)
  add('toMarkdownExtensions', toMarkdown(options))

  function add(field, value) {
    /* istanbul ignore if - other extensions. */
    if (data[field]) data[field].push(value)
    else data[field] = [value]
  }
}


/***/ }),

/***/ "./node_modules/repeat-string/index.js":
/*!*********************************************!*\
  !*** ./node_modules/repeat-string/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


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
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! unified */ "./node_modules/unified/index.js");
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(unified__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark-parse */ "./node_modules/remark-parse/index.js");
/* harmony import */ var remark_parse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark_parse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-gfm */ "./node_modules/remark-gfm/index.js");
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_gfm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! remark-react */ "./node_modules/remark-react/index.js");
/* harmony import */ var remark_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(remark_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MarkdownComponents */ "./components/MarkdownComponents.tsx");







var parseMarkdownToReactComponent = /*#__PURE__*/function () {
  var _ref = Object(_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(md) {
    return _home_mon_workspace_node_ipg_site_ipg_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              unified__WEBPACK_IMPORTED_MODULE_2___default()().use(remark_parse__WEBPACK_IMPORTED_MODULE_3___default.a).use(remark_gfm__WEBPACK_IMPORTED_MODULE_4___default.a).use(remark_react__WEBPACK_IMPORTED_MODULE_5___default.a, {
                remarkReactComponents: {
                  h1: _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_6__["ProgramHeader"],
                  h2: _components_MarkdownComponents__WEBPACK_IMPORTED_MODULE_6__["ProgramSubHeader"]
                }
              }).process(md, function (error, data) {
                if (error) {
                  reject(error);
                }

                resolve(data.result);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function parseMarkdownToReactComponent(_x) {
    return _ref.apply(this, arguments);
  };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Njb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21hcmtkb3duLXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlL25vZGVfbW9kdWxlcy9lc2NhcGUtc3RyaW5nLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLWF1dG9saW5rLWxpdGVyYWwvZnJvbS1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLWF1dG9saW5rLWxpdGVyYWwvdG8tbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS1zdHJpa2V0aHJvdWdoL2Zyb20tbWFya2Rvd24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLWdmbS1zdHJpa2V0aHJvdWdoL3RvLW1hcmtkb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFibGUvZnJvbS1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXRhYmxlL3RvLW1hcmtkb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFzay1saXN0LWl0ZW0vZnJvbS1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtLXRhc2stbGlzdC1pdGVtL3RvLW1hcmtkb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0vZnJvbS1tYXJrZG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtZ2ZtL3RvLW1hcmtkb3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvY29uZmlndXJlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2lubGluZS1jb2RlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvaGFuZGxlL2xpc3QtaXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY2hlY2stYnVsbGV0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jaGVjay1saXN0LWl0ZW0taW5kZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jb250YWluZXItZmxvdy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY29udGFpbmVyLXBocmFzaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9pbmRlbnQtbGluZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2xpYi91dGlsL3BhdHRlcm4tY29tcGlsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLWF1dG9saW5rLWxpdGVyYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS1hdXRvbGluay1saXRlcmFsL3N5bnRheC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS10YWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhYmxlL3N5bnRheC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhc2stbGlzdC1pdGVtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vc3ludGF4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS9zeW50YXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZW1hcmstZ2ZtL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVwZWF0LXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWFya2Rvd24udHMiXSwibmFtZXMiOlsicGFyc2VNYXJrZG93blRvUmVhY3RDb21wb25lbnQiLCJtZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwidW5pZmllZCIsInVzZSIsIm1kcGFyc2UiLCJnZm0iLCJyMnIiLCJyZW1hcmtSZWFjdENvbXBvbmVudHMiLCJoMSIsIlByb2dyYW1IZWFkZXIiLCJoMiIsIlByb2dyYW1TdWJIZWFkZXIiLCJwcm9jZXNzIiwiZXJyb3IiLCJkYXRhIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyQlk7O0FBRVosYUFBYSxtQkFBTyxDQUFDLDREQUFlOztBQUVwQzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7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QUQsQ0FBTjtBQUNEOztBQUNEYix1QkFBTyxDQUFDYyxJQUFJLENBQUNDLE1BQU4sQ0FBUDtBQUNELGVBZEw7QUFlRCxhQWhCTSxDQURvQzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUE3QmxCLDZCQUE2QjtBQUFBO0FBQUE7QUFBQSxHQUFuQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9ncmFtLjhjOGRkYWMxNjM4MDUxYWNlYzI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjY291bnRcblxuZnVuY3Rpb24gY2NvdW50KHNvdXJjZSwgY2hhcmFjdGVyKSB7XG4gIHZhciB2YWx1ZSA9IFN0cmluZyhzb3VyY2UpXG4gIHZhciBjb3VudCA9IDBcbiAgdmFyIGluZGV4XG5cbiAgaWYgKHR5cGVvZiBjaGFyYWN0ZXIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBjaGFyYWN0ZXInKVxuICB9XG5cbiAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKGNoYXJhY3RlcilcblxuICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgY291bnQrK1xuICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZihjaGFyYWN0ZXIsIGluZGV4ICsgY2hhcmFjdGVyLmxlbmd0aClcbiAgfVxuXG4gIHJldHVybiBjb3VudFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcblxubW9kdWxlLmV4cG9ydHMgPSBtYXJrZG93blRhYmxlXG5cbnZhciB0cmFpbGluZ1doaXRlc3BhY2UgPSAvICskL1xuXG4vLyBDaGFyYWN0ZXJzLlxudmFyIHNwYWNlID0gJyAnXG52YXIgbGluZUZlZWQgPSAnXFxuJ1xudmFyIGRhc2ggPSAnLSdcbnZhciBjb2xvbiA9ICc6J1xudmFyIHZlcnRpY2FsQmFyID0gJ3wnXG5cbnZhciB4ID0gMFxudmFyIEMgPSA2N1xudmFyIEwgPSA3NlxudmFyIFIgPSA4MlxudmFyIGMgPSA5OVxudmFyIGwgPSAxMDhcbnZhciByID0gMTE0XG5cbi8vIENyZWF0ZSBhIHRhYmxlIGZyb20gYSBtYXRyaXggb2Ygc3RyaW5ncy5cbmZ1bmN0aW9uIG1hcmtkb3duVGFibGUodGFibGUsIG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgcGFkZGluZyA9IHNldHRpbmdzLnBhZGRpbmcgIT09IGZhbHNlXG4gIHZhciBzdGFydCA9IHNldHRpbmdzLmRlbGltaXRlclN0YXJ0ICE9PSBmYWxzZVxuICB2YXIgZW5kID0gc2V0dGluZ3MuZGVsaW1pdGVyRW5kICE9PSBmYWxzZVxuICB2YXIgYWxpZ24gPSAoc2V0dGluZ3MuYWxpZ24gfHwgW10pLmNvbmNhdCgpXG4gIHZhciBhbGlnbkRlbGltaXRlcnMgPSBzZXR0aW5ncy5hbGlnbkRlbGltaXRlcnMgIT09IGZhbHNlXG4gIHZhciBhbGlnbm1lbnRzID0gW11cbiAgdmFyIHN0cmluZ0xlbmd0aCA9IHNldHRpbmdzLnN0cmluZ0xlbmd0aCB8fCBkZWZhdWx0U3RyaW5nTGVuZ3RoXG4gIHZhciByb3dJbmRleCA9IC0xXG4gIHZhciByb3dMZW5ndGggPSB0YWJsZS5sZW5ndGhcbiAgdmFyIGNlbGxNYXRyaXggPSBbXVxuICB2YXIgc2l6ZU1hdHJpeCA9IFtdXG4gIHZhciByb3cgPSBbXVxuICB2YXIgc2l6ZXMgPSBbXVxuICB2YXIgbG9uZ2VzdENlbGxCeUNvbHVtbiA9IFtdXG4gIHZhciBtb3N0Q2VsbHNQZXJSb3cgPSAwXG4gIHZhciBjZWxsc1xuICB2YXIgY29sdW1uSW5kZXhcbiAgdmFyIGNvbHVtbkxlbmd0aFxuICB2YXIgbGFyZ2VzdFxuICB2YXIgc2l6ZVxuICB2YXIgY2VsbFxuICB2YXIgbGluZXNcbiAgdmFyIGxpbmVcbiAgdmFyIGJlZm9yZVxuICB2YXIgYWZ0ZXJcbiAgdmFyIGNvZGVcblxuICAvLyBUaGlzIGlzIGEgc3VwZXJmbHVvdXMgbG9vcCBpZiB3ZSBkb27igJl0IGFsaWduIGRlbGltaXRlcnMsIGJ1dCBvdGhlcndpc2Ugd2XigJlkXG4gIC8vIGRvIHN1cGVyZmx1b3VzIHdvcmsgd2hlbiBhbGlnbmluZywgc28gb3B0aW1pemUgZm9yIGFsaWduaW5nLlxuICB3aGlsZSAoKytyb3dJbmRleCA8IHJvd0xlbmd0aCkge1xuICAgIGNlbGxzID0gdGFibGVbcm93SW5kZXhdXG4gICAgY29sdW1uSW5kZXggPSAtMVxuICAgIGNvbHVtbkxlbmd0aCA9IGNlbGxzLmxlbmd0aFxuICAgIHJvdyA9IFtdXG4gICAgc2l6ZXMgPSBbXVxuXG4gICAgaWYgKGNvbHVtbkxlbmd0aCA+IG1vc3RDZWxsc1BlclJvdykge1xuICAgICAgbW9zdENlbGxzUGVyUm93ID0gY29sdW1uTGVuZ3RoXG4gICAgfVxuXG4gICAgd2hpbGUgKCsrY29sdW1uSW5kZXggPCBjb2x1bW5MZW5ndGgpIHtcbiAgICAgIGNlbGwgPSBzZXJpYWxpemUoY2VsbHNbY29sdW1uSW5kZXhdKVxuXG4gICAgICBpZiAoYWxpZ25EZWxpbWl0ZXJzID09PSB0cnVlKSB7XG4gICAgICAgIHNpemUgPSBzdHJpbmdMZW5ndGgoY2VsbClcbiAgICAgICAgc2l6ZXNbY29sdW1uSW5kZXhdID0gc2l6ZVxuXG4gICAgICAgIGxhcmdlc3QgPSBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XVxuXG4gICAgICAgIGlmIChsYXJnZXN0ID09PSB1bmRlZmluZWQgfHwgc2l6ZSA+IGxhcmdlc3QpIHtcbiAgICAgICAgICBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XSA9IHNpemVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByb3cucHVzaChjZWxsKVxuICAgIH1cblxuICAgIGNlbGxNYXRyaXhbcm93SW5kZXhdID0gcm93XG4gICAgc2l6ZU1hdHJpeFtyb3dJbmRleF0gPSBzaXplc1xuICB9XG5cbiAgLy8gRmlndXJlIG91dCB3aGljaCBhbGlnbm1lbnRzIHRvIHVzZS5cbiAgY29sdW1uSW5kZXggPSAtMVxuICBjb2x1bW5MZW5ndGggPSBtb3N0Q2VsbHNQZXJSb3dcblxuICBpZiAodHlwZW9mIGFsaWduID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiBhbGlnbikge1xuICAgIHdoaWxlICgrK2NvbHVtbkluZGV4IDwgY29sdW1uTGVuZ3RoKSB7XG4gICAgICBhbGlnbm1lbnRzW2NvbHVtbkluZGV4XSA9IHRvQWxpZ25tZW50KGFsaWduW2NvbHVtbkluZGV4XSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29kZSA9IHRvQWxpZ25tZW50KGFsaWduKVxuXG4gICAgd2hpbGUgKCsrY29sdW1uSW5kZXggPCBjb2x1bW5MZW5ndGgpIHtcbiAgICAgIGFsaWdubWVudHNbY29sdW1uSW5kZXhdID0gY29kZVxuICAgIH1cbiAgfVxuXG4gIC8vIEluamVjdCB0aGUgYWxpZ25tZW50IHJvdy5cbiAgY29sdW1uSW5kZXggPSAtMVxuICBjb2x1bW5MZW5ndGggPSBtb3N0Q2VsbHNQZXJSb3dcbiAgcm93ID0gW11cbiAgc2l6ZXMgPSBbXVxuXG4gIHdoaWxlICgrK2NvbHVtbkluZGV4IDwgY29sdW1uTGVuZ3RoKSB7XG4gICAgY29kZSA9IGFsaWdubWVudHNbY29sdW1uSW5kZXhdXG4gICAgYmVmb3JlID0gJydcbiAgICBhZnRlciA9ICcnXG5cbiAgICBpZiAoY29kZSA9PT0gbCkge1xuICAgICAgYmVmb3JlID0gY29sb25cbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IHIpIHtcbiAgICAgIGFmdGVyID0gY29sb25cbiAgICB9IGVsc2UgaWYgKGNvZGUgPT09IGMpIHtcbiAgICAgIGJlZm9yZSA9IGNvbG9uXG4gICAgICBhZnRlciA9IGNvbG9uXG4gICAgfVxuXG4gICAgLy8gVGhlcmUgKm11c3QqIGJlIGF0IGxlYXN0IG9uZSBoeXBoZW4tbWludXMgaW4gZWFjaCBhbGlnbm1lbnQgY2VsbC5cbiAgICBzaXplID0gYWxpZ25EZWxpbWl0ZXJzXG4gICAgICA/IE1hdGgubWF4KFxuICAgICAgICAgIDEsXG4gICAgICAgICAgbG9uZ2VzdENlbGxCeUNvbHVtbltjb2x1bW5JbmRleF0gLSBiZWZvcmUubGVuZ3RoIC0gYWZ0ZXIubGVuZ3RoXG4gICAgICAgIClcbiAgICAgIDogMVxuXG4gICAgY2VsbCA9IGJlZm9yZSArIHJlcGVhdChkYXNoLCBzaXplKSArIGFmdGVyXG5cbiAgICBpZiAoYWxpZ25EZWxpbWl0ZXJzID09PSB0cnVlKSB7XG4gICAgICBzaXplID0gYmVmb3JlLmxlbmd0aCArIHNpemUgKyBhZnRlci5sZW5ndGhcblxuICAgICAgaWYgKHNpemUgPiBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XSkge1xuICAgICAgICBsb25nZXN0Q2VsbEJ5Q29sdW1uW2NvbHVtbkluZGV4XSA9IHNpemVcbiAgICAgIH1cblxuICAgICAgc2l6ZXNbY29sdW1uSW5kZXhdID0gc2l6ZVxuICAgIH1cblxuICAgIHJvd1tjb2x1bW5JbmRleF0gPSBjZWxsXG4gIH1cblxuICAvLyBJbmplY3QgdGhlIGFsaWdubWVudCByb3cuXG4gIGNlbGxNYXRyaXguc3BsaWNlKDEsIDAsIHJvdylcbiAgc2l6ZU1hdHJpeC5zcGxpY2UoMSwgMCwgc2l6ZXMpXG5cbiAgcm93SW5kZXggPSAtMVxuICByb3dMZW5ndGggPSBjZWxsTWF0cml4Lmxlbmd0aFxuICBsaW5lcyA9IFtdXG5cbiAgd2hpbGUgKCsrcm93SW5kZXggPCByb3dMZW5ndGgpIHtcbiAgICByb3cgPSBjZWxsTWF0cml4W3Jvd0luZGV4XVxuICAgIHNpemVzID0gc2l6ZU1hdHJpeFtyb3dJbmRleF1cbiAgICBjb2x1bW5JbmRleCA9IC0xXG4gICAgY29sdW1uTGVuZ3RoID0gbW9zdENlbGxzUGVyUm93XG4gICAgbGluZSA9IFtdXG5cbiAgICB3aGlsZSAoKytjb2x1bW5JbmRleCA8IGNvbHVtbkxlbmd0aCkge1xuICAgICAgY2VsbCA9IHJvd1tjb2x1bW5JbmRleF0gfHwgJydcbiAgICAgIGJlZm9yZSA9ICcnXG4gICAgICBhZnRlciA9ICcnXG5cbiAgICAgIGlmIChhbGlnbkRlbGltaXRlcnMgPT09IHRydWUpIHtcbiAgICAgICAgc2l6ZSA9IGxvbmdlc3RDZWxsQnlDb2x1bW5bY29sdW1uSW5kZXhdIC0gKHNpemVzW2NvbHVtbkluZGV4XSB8fCAwKVxuICAgICAgICBjb2RlID0gYWxpZ25tZW50c1tjb2x1bW5JbmRleF1cblxuICAgICAgICBpZiAoY29kZSA9PT0gcikge1xuICAgICAgICAgIGJlZm9yZSA9IHJlcGVhdChzcGFjZSwgc2l6ZSlcbiAgICAgICAgfSBlbHNlIGlmIChjb2RlID09PSBjKSB7XG4gICAgICAgICAgaWYgKHNpemUgJSAyID09PSAwKSB7XG4gICAgICAgICAgICBiZWZvcmUgPSByZXBlYXQoc3BhY2UsIHNpemUgLyAyKVxuICAgICAgICAgICAgYWZ0ZXIgPSBiZWZvcmVcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYmVmb3JlID0gcmVwZWF0KHNwYWNlLCBzaXplIC8gMiArIDAuNSlcbiAgICAgICAgICAgIGFmdGVyID0gcmVwZWF0KHNwYWNlLCBzaXplIC8gMiAtIDAuNSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWZ0ZXIgPSByZXBlYXQoc3BhY2UsIHNpemUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXJ0ID09PSB0cnVlICYmIGNvbHVtbkluZGV4ID09PSAwKSB7XG4gICAgICAgIGxpbmUucHVzaCh2ZXJ0aWNhbEJhcilcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBwYWRkaW5nID09PSB0cnVlICYmXG4gICAgICAgIC8vIERvbuKAmXQgYWRkIHRoZSBvcGVuaW5nIHNwYWNlIGlmIHdl4oCZcmUgbm90IGFsaWduaW5nIGFuZCB0aGUgY2VsbCBpc1xuICAgICAgICAvLyBlbXB0eTogdGhlcmUgd2lsbCBiZSBhIGNsb3Npbmcgc3BhY2UuXG4gICAgICAgICEoYWxpZ25EZWxpbWl0ZXJzID09PSBmYWxzZSAmJiBjZWxsID09PSAnJykgJiZcbiAgICAgICAgKHN0YXJ0ID09PSB0cnVlIHx8IGNvbHVtbkluZGV4ICE9PSAwKVxuICAgICAgKSB7XG4gICAgICAgIGxpbmUucHVzaChzcGFjZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGFsaWduRGVsaW1pdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICBsaW5lLnB1c2goYmVmb3JlKVxuICAgICAgfVxuXG4gICAgICBsaW5lLnB1c2goY2VsbClcblxuICAgICAgaWYgKGFsaWduRGVsaW1pdGVycyA9PT0gdHJ1ZSkge1xuICAgICAgICBsaW5lLnB1c2goYWZ0ZXIpXG4gICAgICB9XG5cbiAgICAgIGlmIChwYWRkaW5nID09PSB0cnVlKSB7XG4gICAgICAgIGxpbmUucHVzaChzcGFjZSlcbiAgICAgIH1cblxuICAgICAgaWYgKGVuZCA9PT0gdHJ1ZSB8fCBjb2x1bW5JbmRleCAhPT0gY29sdW1uTGVuZ3RoIC0gMSkge1xuICAgICAgICBsaW5lLnB1c2godmVydGljYWxCYXIpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGluZSA9IGxpbmUuam9pbignJylcblxuICAgIGlmIChlbmQgPT09IGZhbHNlKSB7XG4gICAgICBsaW5lID0gbGluZS5yZXBsYWNlKHRyYWlsaW5nV2hpdGVzcGFjZSwgJycpXG4gICAgfVxuXG4gICAgbGluZXMucHVzaChsaW5lKVxuICB9XG5cbiAgcmV0dXJuIGxpbmVzLmpvaW4obGluZUZlZWQpXG59XG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/ICcnIDogU3RyaW5nKHZhbHVlKVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0U3RyaW5nTGVuZ3RoKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5sZW5ndGhcbn1cblxuZnVuY3Rpb24gdG9BbGlnbm1lbnQodmFsdWUpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUuY2hhckNvZGVBdCgwKSA6IHhcblxuICByZXR1cm4gY29kZSA9PT0gTCB8fCBjb2RlID09PSBsXG4gICAgPyBsXG4gICAgOiBjb2RlID09PSBSIHx8IGNvZGUgPT09IHJcbiAgICA/IHJcbiAgICA6IGNvZGUgPT09IEMgfHwgY29kZSA9PT0gY1xuICAgID8gY1xuICAgIDogeFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZmluZEFuZFJlcGxhY2VcblxudmFyIHZpc2l0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzJylcbnZhciBjb252ZXJ0ID0gcmVxdWlyZSgndW5pc3QtdXRpbC1pcy9jb252ZXJ0JylcbnZhciBlc2NhcGUgPSByZXF1aXJlKCdlc2NhcGUtc3RyaW5nLXJlZ2V4cCcpXG5cbnZhciBzcGxpY2UgPSBbXS5zcGxpY2VcblxuZnVuY3Rpb24gZmluZEFuZFJlcGxhY2UodHJlZSwgZmluZCwgcmVwbGFjZSwgb3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3NcbiAgdmFyIHNjaGVtYVxuXG4gIGlmICh0eXBlb2YgZmluZCA9PT0gJ3N0cmluZycgfHwgKGZpbmQgJiYgdHlwZW9mIGZpbmQuZXhlYyA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICBzY2hlbWEgPSBbW2ZpbmQsIHJlcGxhY2VdXVxuICB9IGVsc2Uge1xuICAgIHNjaGVtYSA9IGZpbmRcbiAgICBvcHRpb25zID0gcmVwbGFjZVxuICB9XG5cbiAgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG5cbiAgc2VhcmNoKHRyZWUsIHNldHRpbmdzLCBoYW5kbGVyRmFjdG9yeSh0b1BhaXJzKHNjaGVtYSkpKVxuXG4gIHJldHVybiB0cmVlXG5cbiAgZnVuY3Rpb24gaGFuZGxlckZhY3RvcnkocGFpcnMpIHtcbiAgICB2YXIgcGFpciA9IHBhaXJzWzBdXG5cbiAgICByZXR1cm4gaGFuZGxlclxuXG4gICAgZnVuY3Rpb24gaGFuZGxlcihub2RlLCBwYXJlbnQpIHtcbiAgICAgIHZhciBmaW5kID0gcGFpclswXVxuICAgICAgdmFyIHJlcGxhY2UgPSBwYWlyWzFdXG4gICAgICB2YXIgbm9kZXMgPSBbXVxuICAgICAgdmFyIHN0YXJ0ID0gMFxuICAgICAgdmFyIGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSlcbiAgICAgIHZhciBwb3NpdGlvblxuICAgICAgdmFyIG1hdGNoXG4gICAgICB2YXIgc3ViaGFuZGxlclxuICAgICAgdmFyIHZhbHVlXG5cbiAgICAgIGZpbmQubGFzdEluZGV4ID0gMFxuXG4gICAgICBtYXRjaCA9IGZpbmQuZXhlYyhub2RlLnZhbHVlKVxuXG4gICAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgcG9zaXRpb24gPSBtYXRjaC5pbmRleFxuICAgICAgICB2YWx1ZSA9IHJlcGxhY2UuYXBwbHkoXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBbXS5jb25jYXQobWF0Y2gsIHtpbmRleDogbWF0Y2guaW5kZXgsIGlucHV0OiBtYXRjaC5pbnB1dH0pXG4gICAgICAgIClcblxuICAgICAgICBpZiAodmFsdWUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgaWYgKHN0YXJ0ICE9PSBwb3NpdGlvbikge1xuICAgICAgICAgICAgbm9kZXMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogbm9kZS52YWx1ZS5zbGljZShzdGFydCwgcG9zaXRpb24pfSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHt0eXBlOiAndGV4dCcsIHZhbHVlOiB2YWx1ZX1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIG5vZGVzID0gW10uY29uY2F0KG5vZGVzLCB2YWx1ZSlcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzdGFydCA9IHBvc2l0aW9uICsgbWF0Y2hbMF0ubGVuZ3RoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZpbmQuZ2xvYmFsKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hdGNoID0gZmluZC5leGVjKG5vZGUudmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGVzID0gW25vZGVdXG4gICAgICAgIGluZGV4LS1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzdGFydCA8IG5vZGUudmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgbm9kZXMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogbm9kZS52YWx1ZS5zbGljZShzdGFydCl9KVxuICAgICAgICB9XG5cbiAgICAgICAgbm9kZXMudW5zaGlmdChpbmRleCwgMSlcbiAgICAgICAgc3BsaWNlLmFwcGx5KHBhcmVudC5jaGlsZHJlbiwgbm9kZXMpXG4gICAgICB9XG5cbiAgICAgIGlmIChwYWlycy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHN1YmhhbmRsZXIgPSBoYW5kbGVyRmFjdG9yeShwYWlycy5zbGljZSgxKSlcbiAgICAgICAgcG9zaXRpb24gPSAtMVxuXG4gICAgICAgIHdoaWxlICgrK3Bvc2l0aW9uIDwgbm9kZXMubGVuZ3RoKSB7XG4gICAgICAgICAgbm9kZSA9IG5vZGVzW3Bvc2l0aW9uXVxuXG4gICAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICAgICAgICBzdWJoYW5kbGVyKG5vZGUsIHBhcmVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VhcmNoKG5vZGUsIHNldHRpbmdzLCBzdWJoYW5kbGVyKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5kZXggKyBub2Rlcy5sZW5ndGggKyAxXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlYXJjaCh0cmVlLCBzZXR0aW5ncywgaGFuZGxlcikge1xuICB2YXIgaWdub3JlZCA9IGNvbnZlcnQoc2V0dGluZ3MuaWdub3JlIHx8IFtdKVxuICB2YXIgcmVzdWx0ID0gW11cblxuICB2aXNpdCh0cmVlLCAndGV4dCcsIHZpc2l0b3IpXG5cbiAgcmV0dXJuIHJlc3VsdFxuXG4gIGZ1bmN0aW9uIHZpc2l0b3Iobm9kZSwgcGFyZW50cykge1xuICAgIHZhciBpbmRleCA9IC0xXG4gICAgdmFyIHBhcmVudFxuICAgIHZhciBncmFuZHBhcmVudFxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBwYXJlbnRzLmxlbmd0aCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50c1tpbmRleF1cblxuICAgICAgaWYgKFxuICAgICAgICBpZ25vcmVkKFxuICAgICAgICAgIHBhcmVudCxcbiAgICAgICAgICBncmFuZHBhcmVudCA/IGdyYW5kcGFyZW50LmNoaWxkcmVuLmluZGV4T2YocGFyZW50KSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICBncmFuZHBhcmVudFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGdyYW5kcGFyZW50ID0gcGFyZW50XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZXIobm9kZSwgZ3JhbmRwYXJlbnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9QYWlycyhzY2hlbWEpIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBrZXlcbiAgdmFyIGluZGV4XG5cbiAgaWYgKHR5cGVvZiBzY2hlbWEgIT09ICdvYmplY3QnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBhcnJheSBvciBvYmplY3QgYXMgc2NoZW1hJylcbiAgfVxuXG4gIGlmICgnbGVuZ3RoJyBpbiBzY2hlbWEpIHtcbiAgICBpbmRleCA9IC0xXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IHNjaGVtYS5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdC5wdXNoKFtcbiAgICAgICAgdG9FeHByZXNzaW9uKHNjaGVtYVtpbmRleF1bMF0pLFxuICAgICAgICB0b0Z1bmN0aW9uKHNjaGVtYVtpbmRleF1bMV0pXG4gICAgICBdKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKGtleSBpbiBzY2hlbWEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKFt0b0V4cHJlc3Npb24oa2V5KSwgdG9GdW5jdGlvbihzY2hlbWFba2V5XSldKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gdG9FeHByZXNzaW9uKGZpbmQpIHtcbiAgcmV0dXJuIHR5cGVvZiBmaW5kID09PSAnc3RyaW5nJyA/IG5ldyBSZWdFeHAoZXNjYXBlKGZpbmQpLCAnZycpIDogZmluZFxufVxuXG5mdW5jdGlvbiB0b0Z1bmN0aW9uKHJlcGxhY2UpIHtcbiAgcmV0dXJuIHR5cGVvZiByZXBsYWNlID09PSAnZnVuY3Rpb24nID8gcmVwbGFjZSA6IHJldHVybmVyXG5cbiAgZnVuY3Rpb24gcmV0dXJuZXIoKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZyA9PiB7XG5cdGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGEgc3RyaW5nJyk7XG5cdH1cblxuXHQvLyBFc2NhcGUgY2hhcmFjdGVycyB3aXRoIHNwZWNpYWwgbWVhbmluZyBlaXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgY2hhcmFjdGVyIHNldHMuXG5cdC8vIFVzZSBhIHNpbXBsZSBiYWNrc2xhc2ggZXNjYXBlIHdoZW4gaXTigJlzIGFsd2F5cyB2YWxpZCwgYW5kIGEgXFx1bm5ubiBlc2NhcGUgd2hlbiB0aGUgc2ltcGxlciBmb3JtIHdvdWxkIGJlIGRpc2FsbG93ZWQgYnkgVW5pY29kZSBwYXR0ZXJuc+KAmSBzdHJpY3RlciBncmFtbWFyLlxuXHRyZXR1cm4gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uXS9nLCAnXFxcXCQmJylcblx0XHQucmVwbGFjZSgvLS9nLCAnXFxcXHgyZCcpO1xufTtcbiIsInZhciBjY291bnQgPSByZXF1aXJlKCdjY291bnQnKVxudmFyIGZpbmRBbmRSZXBsYWNlID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1maW5kLWFuZC1yZXBsYWNlJylcbnZhciB1bmljb2RlUHVuY3R1YXRpb24gPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvdW5pY29kZS1wdW5jdHVhdGlvbicpXG52YXIgdW5pY29kZVdoaXRlc3BhY2UgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvdW5pY29kZS13aGl0ZXNwYWNlJylcblxuZXhwb3J0cy50cmFuc2Zvcm1zID0gW3RyYW5zZm9ybUdmbUF1dG9saW5rTGl0ZXJhbHNdXG5leHBvcnRzLmVudGVyID0ge1xuICBsaXRlcmFsQXV0b2xpbms6IGVudGVyTGl0ZXJhbEF1dG9saW5rLFxuICBsaXRlcmFsQXV0b2xpbmtFbWFpbDogZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZSxcbiAgbGl0ZXJhbEF1dG9saW5rSHR0cDogZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZSxcbiAgbGl0ZXJhbEF1dG9saW5rV3d3OiBlbnRlckxpdGVyYWxBdXRvbGlua1ZhbHVlXG59XG5leHBvcnRzLmV4aXQgPSB7XG4gIGxpdGVyYWxBdXRvbGluazogZXhpdExpdGVyYWxBdXRvbGluayxcbiAgbGl0ZXJhbEF1dG9saW5rRW1haWw6IGV4aXRMaXRlcmFsQXV0b2xpbmtFbWFpbCxcbiAgbGl0ZXJhbEF1dG9saW5rSHR0cDogZXhpdExpdGVyYWxBdXRvbGlua0h0dHAsXG4gIGxpdGVyYWxBdXRvbGlua1d3dzogZXhpdExpdGVyYWxBdXRvbGlua1d3d1xufVxuXG5mdW5jdGlvbiBlbnRlckxpdGVyYWxBdXRvbGluayh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAnbGluaycsIHRpdGxlOiBudWxsLCB1cmw6ICcnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuZnVuY3Rpb24gZW50ZXJMaXRlcmFsQXV0b2xpbmtWYWx1ZSh0b2tlbikge1xuICB0aGlzLmNvbmZpZy5lbnRlci5hdXRvbGlua1Byb3RvY29sLmNhbGwodGhpcywgdG9rZW4pXG59XG5cbmZ1bmN0aW9uIGV4aXRMaXRlcmFsQXV0b2xpbmtIdHRwKHRva2VuKSB7XG4gIHRoaXMuY29uZmlnLmV4aXQuYXV0b2xpbmtQcm90b2NvbC5jYWxsKHRoaXMsIHRva2VuKVxufVxuXG5mdW5jdGlvbiBleGl0TGl0ZXJhbEF1dG9saW5rV3d3KHRva2VuKSB7XG4gIHRoaXMuY29uZmlnLmV4aXQuZGF0YS5jYWxsKHRoaXMsIHRva2VuKVxuICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV0udXJsID0gJ2h0dHA6Ly8nICsgdGhpcy5zbGljZVNlcmlhbGl6ZSh0b2tlbilcbn1cblxuZnVuY3Rpb24gZXhpdExpdGVyYWxBdXRvbGlua0VtYWlsKHRva2VuKSB7XG4gIHRoaXMuY29uZmlnLmV4aXQuYXV0b2xpbmtFbWFpbC5jYWxsKHRoaXMsIHRva2VuKVxufVxuXG5mdW5jdGlvbiBleGl0TGl0ZXJhbEF1dG9saW5rKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtR2ZtQXV0b2xpbmtMaXRlcmFscyh0cmVlKSB7XG4gIGZpbmRBbmRSZXBsYWNlKFxuICAgIHRyZWUsXG4gICAgW1xuICAgICAgWy8oaHR0cHM/OlxcL1xcL3x3d3coPz1cXC4pKShbLS5cXHddKykoW14gXFx0XFxyXFxuXSopL2ksIGZpbmRVcmxdLFxuICAgICAgWy8oWy0uXFx3K10rKUAoWy1cXHddKyg/OlxcLlstXFx3XSspKykvLCBmaW5kRW1haWxdXG4gICAgXSxcbiAgICB7aWdub3JlOiBbJ2xpbmsnLCAnbGlua1JlZmVyZW5jZSddfVxuICApXG59XG5cbmZ1bmN0aW9uIGZpbmRVcmwoJDAsIHByb3RvY29sLCBkb21haW4sIHBhdGgsIG1hdGNoKSB7XG4gIHZhciBwcmVmaXggPSAnJ1xuICB2YXIgcGFydHNcbiAgdmFyIHJlc3VsdFxuXG4gIC8vIE5vdCBhbiBleHBlY3RlZCBwcmV2aW91cyBjaGFyYWN0ZXIuXG4gIGlmICghcHJldmlvdXMobWF0Y2gpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBUcmVhdCBgd3d3YCBhcyBwYXJ0IG9mIHRoZSBkb21haW4uXG4gIGlmICgvXncvaS50ZXN0KHByb3RvY29sKSkge1xuICAgIGRvbWFpbiA9IHByb3RvY29sICsgZG9tYWluXG4gICAgcHJvdG9jb2wgPSAnJ1xuICAgIHByZWZpeCA9ICdodHRwOi8vJ1xuICB9XG5cbiAgaWYgKCFpc0NvcnJlY3REb21haW4oZG9tYWluKSkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcGFydHMgPSBzcGxpdFVybChkb21haW4gKyBwYXRoKVxuXG4gIGlmICghcGFydHNbMF0pIHJldHVybiBmYWxzZVxuXG4gIHJlc3VsdCA9IHtcbiAgICB0eXBlOiAnbGluaycsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgdXJsOiBwcmVmaXggKyBwcm90b2NvbCArIHBhcnRzWzBdLFxuICAgIGNoaWxkcmVuOiBbe3R5cGU6ICd0ZXh0JywgdmFsdWU6IHByb3RvY29sICsgcGFydHNbMF19XVxuICB9XG5cbiAgaWYgKHBhcnRzWzFdKSB7XG4gICAgcmVzdWx0ID0gW3Jlc3VsdCwge3R5cGU6ICd0ZXh0JywgdmFsdWU6IHBhcnRzWzFdfV1cbiAgfVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gZmluZEVtYWlsKCQwLCBhdGV4dCwgbGFiZWwsIG1hdGNoKSB7XG4gIC8vIE5vdCBhbiBleHBlY3RlZCBwcmV2aW91cyBjaGFyYWN0ZXIuXG4gIGlmICghcHJldmlvdXMobWF0Y2gsIHRydWUpIHx8IC9bXy1dJC8udGVzdChsYWJlbCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogJ2xpbmsnLFxuICAgIHRpdGxlOiBudWxsLFxuICAgIHVybDogJ21haWx0bzonICsgYXRleHQgKyAnQCcgKyBsYWJlbCxcbiAgICBjaGlsZHJlbjogW3t0eXBlOiAndGV4dCcsIHZhbHVlOiBhdGV4dCArICdAJyArIGxhYmVsfV1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc0NvcnJlY3REb21haW4oZG9tYWluKSB7XG4gIHZhciBwYXJ0cyA9IGRvbWFpbi5zcGxpdCgnLicpXG5cbiAgaWYgKFxuICAgIHBhcnRzLmxlbmd0aCA8IDIgfHxcbiAgICAocGFydHNbcGFydHMubGVuZ3RoIC0gMV0gJiZcbiAgICAgICgvXy8udGVzdChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSkgfHxcbiAgICAgICAgIS9bYS16QS1aXFxkXS8udGVzdChwYXJ0c1twYXJ0cy5sZW5ndGggLSAxXSkpKSB8fFxuICAgIChwYXJ0c1twYXJ0cy5sZW5ndGggLSAyXSAmJlxuICAgICAgKC9fLy50ZXN0KHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdKSB8fFxuICAgICAgICAhL1thLXpBLVpcXGRdLy50ZXN0KHBhcnRzW3BhcnRzLmxlbmd0aCAtIDJdKSkpXG4gICkge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIHRydWVcbn1cblxuZnVuY3Rpb24gc3BsaXRVcmwodXJsKSB7XG4gIHZhciB0cmFpbCA9IC9bIVwiJicpLC46Ozw+P1xcXX1dKyQvLmV4ZWModXJsKVxuICB2YXIgY2xvc2luZ1BhcmVuSW5kZXhcbiAgdmFyIG9wZW5pbmdQYXJlbnNcbiAgdmFyIGNsb3NpbmdQYXJlbnNcblxuICBpZiAodHJhaWwpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMCwgdHJhaWwuaW5kZXgpXG4gICAgdHJhaWwgPSB0cmFpbFswXVxuICAgIGNsb3NpbmdQYXJlbkluZGV4ID0gdHJhaWwuaW5kZXhPZignKScpXG4gICAgb3BlbmluZ1BhcmVucyA9IGNjb3VudCh1cmwsICcoJylcbiAgICBjbG9zaW5nUGFyZW5zID0gY2NvdW50KHVybCwgJyknKVxuXG4gICAgd2hpbGUgKGNsb3NpbmdQYXJlbkluZGV4ICE9PSAtMSAmJiBvcGVuaW5nUGFyZW5zID4gY2xvc2luZ1BhcmVucykge1xuICAgICAgdXJsICs9IHRyYWlsLnNsaWNlKDAsIGNsb3NpbmdQYXJlbkluZGV4ICsgMSlcbiAgICAgIHRyYWlsID0gdHJhaWwuc2xpY2UoY2xvc2luZ1BhcmVuSW5kZXggKyAxKVxuICAgICAgY2xvc2luZ1BhcmVuSW5kZXggPSB0cmFpbC5pbmRleE9mKCcpJylcbiAgICAgIGNsb3NpbmdQYXJlbnMrK1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBbdXJsLCB0cmFpbF1cbn1cblxuZnVuY3Rpb24gcHJldmlvdXMobWF0Y2gsIGVtYWlsKSB7XG4gIHZhciBjb2RlID0gbWF0Y2guaW5wdXQuY2hhckNvZGVBdChtYXRjaC5pbmRleCAtIDEpXG4gIHJldHVybiAoXG4gICAgKGNvZGUgIT09IGNvZGUgfHwgdW5pY29kZVdoaXRlc3BhY2UoY29kZSkgfHwgdW5pY29kZVB1bmN0dWF0aW9uKGNvZGUpKSAmJlxuICAgICghZW1haWwgfHwgY29kZSAhPT0gNDcpXG4gIClcbn1cbiIsInZhciBpbkNvbnN0cnVjdCA9ICdwaHJhc2luZydcbnZhciBub3RJbkNvbnN0cnVjdCA9IFsnYXV0b2xpbmsnLCAnbGluaycsICdpbWFnZScsICdsYWJlbCddXG5cbmV4cG9ydHMudW5zYWZlID0gW1xuICB7XG4gICAgY2hhcmFjdGVyOiAnQCcsXG4gICAgYmVmb3JlOiAnWytcXFxcLS5cXFxcd10nLFxuICAgIGFmdGVyOiAnW1xcXFwtLlxcXFx3XScsXG4gICAgaW5Db25zdHJ1Y3Q6IGluQ29uc3RydWN0LFxuICAgIG5vdEluQ29uc3RydWN0OiBub3RJbkNvbnN0cnVjdFxuICB9LFxuICB7XG4gICAgY2hhcmFjdGVyOiAnLicsXG4gICAgYmVmb3JlOiAnW1d3XScsXG4gICAgYWZ0ZXI6ICdbXFxcXC0uXFxcXHddJyxcbiAgICBpbkNvbnN0cnVjdDogaW5Db25zdHJ1Y3QsXG4gICAgbm90SW5Db25zdHJ1Y3Q6IG5vdEluQ29uc3RydWN0XG4gIH0sXG4gIHtcbiAgICBjaGFyYWN0ZXI6ICc6JyxcbiAgICBiZWZvcmU6ICdbcHNdJyxcbiAgICBhZnRlcjogJ1xcXFwvJyxcbiAgICBpbkNvbnN0cnVjdDogaW5Db25zdHJ1Y3QsXG4gICAgbm90SW5Db25zdHJ1Y3Q6IG5vdEluQ29uc3RydWN0XG4gIH1cbl1cbiIsImV4cG9ydHMuY2FuQ29udGFpbkVvbHMgPSBbJ2RlbGV0ZSddXG5leHBvcnRzLmVudGVyID0ge3N0cmlrZXRocm91Z2g6IGVudGVyU3RyaWtldGhyb3VnaH1cbmV4cG9ydHMuZXhpdCA9IHtzdHJpa2V0aHJvdWdoOiBleGl0U3RyaWtldGhyb3VnaH1cblxuZnVuY3Rpb24gZW50ZXJTdHJpa2V0aHJvdWdoKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICdkZWxldGUnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuZnVuY3Rpb24gZXhpdFN0cmlrZXRocm91Z2godG9rZW4pIHtcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuIiwidmFyIHBocmFzaW5nID0gcmVxdWlyZSgnbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvdXRpbC9jb250YWluZXItcGhyYXNpbmcnKVxuXG5leHBvcnRzLnVuc2FmZSA9IFt7Y2hhcmFjdGVyOiAnficsIGluQ29uc3RydWN0OiAncGhyYXNpbmcnfV1cbmV4cG9ydHMuaGFuZGxlcnMgPSB7ZGVsZXRlOiBoYW5kbGVEZWxldGV9XG5cbmhhbmRsZURlbGV0ZS5wZWVrID0gcGVla0RlbGV0ZVxuXG5mdW5jdGlvbiBoYW5kbGVEZWxldGUobm9kZSwgXywgY29udGV4dCkge1xuICB2YXIgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2VtcGhhc2lzJylcbiAgdmFyIHZhbHVlID0gcGhyYXNpbmcobm9kZSwgY29udGV4dCwge2JlZm9yZTogJ34nLCBhZnRlcjogJ34nfSlcbiAgZXhpdCgpXG4gIHJldHVybiAnfn4nICsgdmFsdWUgKyAnfn4nXG59XG5cbmZ1bmN0aW9uIHBlZWtEZWxldGUoKSB7XG4gIHJldHVybiAnfidcbn1cbiIsImV4cG9ydHMuZW50ZXIgPSB7XG4gIHRhYmxlOiBlbnRlclRhYmxlLFxuICB0YWJsZURhdGE6IGVudGVyQ2VsbCxcbiAgdGFibGVIZWFkZXI6IGVudGVyQ2VsbCxcbiAgdGFibGVSb3c6IGVudGVyUm93XG59XG5leHBvcnRzLmV4aXQgPSB7XG4gIGNvZGVUZXh0OiBleGl0Q29kZVRleHQsXG4gIHRhYmxlOiBleGl0VGFibGUsXG4gIHRhYmxlRGF0YTogZXhpdCxcbiAgdGFibGVIZWFkZXI6IGV4aXQsXG4gIHRhYmxlUm93OiBleGl0XG59XG5cbmZ1bmN0aW9uIGVudGVyVGFibGUodG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ3RhYmxlJywgYWxpZ246IHRva2VuLl9hbGlnbiwgY2hpbGRyZW46IFtdfSwgdG9rZW4pXG4gIHRoaXMuc2V0RGF0YSgnaW5UYWJsZScsIHRydWUpXG59XG5cbmZ1bmN0aW9uIGV4aXRUYWJsZSh0b2tlbikge1xuICB0aGlzLmV4aXQodG9rZW4pXG4gIHRoaXMuc2V0RGF0YSgnaW5UYWJsZScpXG59XG5cbmZ1bmN0aW9uIGVudGVyUm93KHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICd0YWJsZVJvdycsIGNoaWxkcmVuOiBbXX0sIHRva2VuKVxufVxuXG5mdW5jdGlvbiBleGl0KHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuZnVuY3Rpb24gZW50ZXJDZWxsKHRva2VuKSB7XG4gIHRoaXMuZW50ZXIoe3R5cGU6ICd0YWJsZUNlbGwnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuLy8gT3ZlcndyaXRlIHRoZSBkZWZhdWx0IGNvZGUgdGV4dCBkYXRhIGhhbmRsZXIgdG8gdW5lc2NhcGUgZXNjYXBlZCBwaXBlcyB3aGVuXG4vLyB0aGV5IGFyZSBpbiB0YWJsZXMuXG5mdW5jdGlvbiBleGl0Q29kZVRleHQodG9rZW4pIHtcbiAgdmFyIHZhbHVlID0gdGhpcy5yZXN1bWUoKVxuXG4gIGlmICh0aGlzLmdldERhdGEoJ2luVGFibGUnKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxcXChbXFxcXHxdKS9nLCByZXBsYWNlKVxuICB9XG5cbiAgdGhpcy5zdGFja1t0aGlzLnN0YWNrLmxlbmd0aCAtIDFdLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuXG5mdW5jdGlvbiByZXBsYWNlKCQwLCAkMSkge1xuICAvLyBQaXBlcyB3b3JrLCBiYWNrc2xhc2hlcyBkb27igJl0IChidXQgY2Fu4oCZdCBlc2NhcGUgcGlwZXMpLlxuICByZXR1cm4gJDEgPT09ICd8JyA/ICQxIDogJDBcbn1cbiIsInZhciBwaHJhc2luZyA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL3V0aWwvY29udGFpbmVyLXBocmFzaW5nJylcbnZhciBkZWZhdWx0SW5saW5lQ29kZSA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9pbmxpbmUtY29kZScpXG52YXIgbWFya2Rvd25UYWJsZSA9IHJlcXVpcmUoJ21hcmtkb3duLXRhYmxlJylcblxubW9kdWxlLmV4cG9ydHMgPSB0b01hcmtkb3duXG5cbmZ1bmN0aW9uIHRvTWFya2Rvd24ob3B0aW9ucykge1xuICB2YXIgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIHZhciBwYWRkaW5nID0gc2V0dGluZ3MudGFibGVDZWxsUGFkZGluZ1xuICB2YXIgYWxpZ25EZWxpbWl0ZXJzID0gc2V0dGluZ3MudGFibGVQaXBlQWxpZ25cbiAgdmFyIHN0cmluZ0xlbmd0aCA9IHNldHRpbmdzLnN0cmluZ0xlbmd0aFxuICB2YXIgYXJvdW5kID0gcGFkZGluZyA/ICcgJyA6ICd8J1xuXG4gIHJldHVybiB7XG4gICAgdW5zYWZlOiBbXG4gICAgICB7Y2hhcmFjdGVyOiAnXFxyJywgaW5Db25zdHJ1Y3Q6ICd0YWJsZUNlbGwnfSxcbiAgICAgIHtjaGFyYWN0ZXI6ICdcXG4nLCBpbkNvbnN0cnVjdDogJ3RhYmxlQ2VsbCd9LFxuICAgICAgLy8gQSBwaXBlLCB3aGVuIGZvbGxvd2VkIGJ5IGEgdGFiIG9yIHNwYWNlIChwYWRkaW5nKSwgb3IgYSBkYXNoIG9yIGNvbG9uXG4gICAgICAvLyAodW5wYWRkZWQgZGVsaW1pdGVyIHJvdyksIGNvdWxkIHJlc3VsdCBpbiBhIHRhYmxlLlxuICAgICAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJ3wnLCBhZnRlcjogJ1tcXHQgOi1dJ30sXG4gICAgICAvLyBBIHBpcGUgaW4gYSBjZWxsIG11c3QgYmUgZW5jb2RlZC5cbiAgICAgIHtjaGFyYWN0ZXI6ICd8JywgaW5Db25zdHJ1Y3Q6ICd0YWJsZUNlbGwnfSxcbiAgICAgIC8vIEEgY29sb24gbXVzdCBiZSBmb2xsb3dlZCBieSBhIGRhc2gsIGluIHdoaWNoIGNhc2UgaXQgY291bGQgc3RhcnQgYVxuICAgICAgLy8gZGVsaW1pdGVyIHJvdy5cbiAgICAgIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICc6JywgYWZ0ZXI6ICctJ30sXG4gICAgICAvLyBBIGRlbGltaXRlciByb3cgY2FuIGFsc28gc3RhcnQgd2l0aCBhIGRhc2gsIHdoZW4gZm9sbG93ZWQgYnkgbW9yZVxuICAgICAgLy8gZGFzaGVzLCBhIGNvbG9uLCBvciBhIHBpcGUuXG4gICAgICAvLyBUaGlzIGlzIGEgc3RyaWN0ZXIgdmVyc2lvbiB0aGFuIHRoZSBidWlsdCBpbiBjaGVjayBmb3IgbGlzdHMsIHRoZW1hdGljXG4gICAgICAvLyBicmVha3MsIGFuZCBzZXRleCBoZWFkaW5nIHVuZGVybGluZXMgdGhvdWdoOlxuICAgICAgLy8gPGh0dHBzOi8vZ2l0aHViLmNvbS9zeW50YXgtdHJlZS9tZGFzdC11dGlsLXRvLW1hcmtkb3duL2Jsb2IvNTFhMjAzOC9saWIvdW5zYWZlLmpzI0w1Nz5cbiAgICAgIHthdEJyZWFrOiB0cnVlLCBjaGFyYWN0ZXI6ICctJywgYWZ0ZXI6ICdbOnwtXSd9XG4gICAgXSxcbiAgICBoYW5kbGVyczoge1xuICAgICAgdGFibGU6IGhhbmRsZVRhYmxlLFxuICAgICAgdGFibGVSb3c6IGhhbmRsZVRhYmxlUm93LFxuICAgICAgdGFibGVDZWxsOiBoYW5kbGVUYWJsZUNlbGwsXG4gICAgICBpbmxpbmVDb2RlOiBpbmxpbmVDb2RlV2l0aFRhYmxlXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlVGFibGUobm9kZSwgXywgY29udGV4dCkge1xuICAgIHJldHVybiBzZXJpYWxpemVEYXRhKGhhbmRsZVRhYmxlQXNEYXRhKG5vZGUsIGNvbnRleHQpLCBub2RlLmFsaWduKVxuICB9XG5cbiAgLy8gVGhpcyBmdW5jdGlvbiBpc27igJl0IHJlYWxseSB1c2VkIG5vcm1hbGx5LCBiZWNhdXNlIHdlIGhhbmRsZSByb3dzIGF0IHRoZVxuICAvLyB0YWJsZSBsZXZlbC5cbiAgLy8gQnV0LCBpZiBzb21lb25lIHBhc3NlcyBpbiBhIHRhYmxlIHJvdywgdGhpcyBlbnN1cmVzIHdlIG1ha2Ugc29tZXdoYXQgc2Vuc2UuXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlUm93KG5vZGUsIF8sIGNvbnRleHQpIHtcbiAgICB2YXIgcm93ID0gaGFuZGxlVGFibGVSb3dBc0RhdGEobm9kZSwgY29udGV4dClcbiAgICAvLyBgbWFya2Rvd24tdGFibGVgIHdpbGwgYWx3YXlzIGFkZCBhbiBhbGlnbiByb3dcbiAgICB2YXIgdmFsdWUgPSBzZXJpYWxpemVEYXRhKFtyb3ddKVxuICAgIHJldHVybiB2YWx1ZS5zbGljZSgwLCB2YWx1ZS5pbmRleE9mKCdcXG4nKSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlQ2VsbChub2RlLCBfLCBjb250ZXh0KSB7XG4gICAgdmFyIGV4aXQgPSBjb250ZXh0LmVudGVyKCd0YWJsZUNlbGwnKVxuICAgIHZhciB2YWx1ZSA9IHBocmFzaW5nKG5vZGUsIGNvbnRleHQsIHtiZWZvcmU6IGFyb3VuZCwgYWZ0ZXI6IGFyb3VuZH0pXG4gICAgZXhpdCgpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICBmdW5jdGlvbiBzZXJpYWxpemVEYXRhKG1hdHJpeCwgYWxpZ24pIHtcbiAgICByZXR1cm4gbWFya2Rvd25UYWJsZShtYXRyaXgsIHtcbiAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgIGFsaWduRGVsaW1pdGVyczogYWxpZ25EZWxpbWl0ZXJzLFxuICAgICAgcGFkZGluZzogcGFkZGluZyxcbiAgICAgIHN0cmluZ0xlbmd0aDogc3RyaW5nTGVuZ3RoXG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlQXNEYXRhKG5vZGUsIGNvbnRleHQpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdmFyIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCd0YWJsZScpXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgcmVzdWx0W2luZGV4XSA9IGhhbmRsZVRhYmxlUm93QXNEYXRhKGNoaWxkcmVuW2luZGV4XSwgY29udGV4dClcbiAgICB9XG5cbiAgICBzdWJleGl0KClcblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlUm93QXNEYXRhKG5vZGUsIGNvbnRleHQpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoXG4gICAgdmFyIHJlc3VsdCA9IFtdXG4gICAgdmFyIHN1YmV4aXQgPSBjb250ZXh0LmVudGVyKCd0YWJsZVJvdycpXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgcmVzdWx0W2luZGV4XSA9IGhhbmRsZVRhYmxlQ2VsbChjaGlsZHJlbltpbmRleF0sIG5vZGUsIGNvbnRleHQpXG4gICAgfVxuXG4gICAgc3ViZXhpdCgpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBmdW5jdGlvbiBpbmxpbmVDb2RlV2l0aFRhYmxlKG5vZGUsIHBhcmVudCwgY29udGV4dCkge1xuICAgIHZhciB2YWx1ZSA9IGRlZmF1bHRJbmxpbmVDb2RlKG5vZGUsIHBhcmVudCwgY29udGV4dClcblxuICAgIGlmIChjb250ZXh0LnN0YWNrLmluZGV4T2YoJ3RhYmxlQ2VsbCcpICE9PSAtMSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9cXHwvZywgJ1xcXFwkJicpXG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbn1cbiIsImV4cG9ydHMuZXhpdCA9IHtcbiAgdGFza0xpc3RDaGVja1ZhbHVlQ2hlY2tlZDogZXhpdENoZWNrLFxuICB0YXNrTGlzdENoZWNrVmFsdWVVbmNoZWNrZWQ6IGV4aXRDaGVjayxcbiAgcGFyYWdyYXBoOiBleGl0UGFyYWdyYXBoV2l0aFRhc2tMaXN0SXRlbVxufVxuXG5mdW5jdGlvbiBleGl0Q2hlY2sodG9rZW4pIHtcbiAgLy8gV2XigJlyZSBhbHdheXMgaW4gYSBwYXJhZ3JhcGgsIGluIGEgbGlzdCBpdGVtLlxuICB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMl0uY2hlY2tlZCA9XG4gICAgdG9rZW4udHlwZSA9PT0gJ3Rhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQnXG59XG5cbmZ1bmN0aW9uIGV4aXRQYXJhZ3JhcGhXaXRoVGFza0xpc3RJdGVtKHRva2VuKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMl1cbiAgdmFyIG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgdmFyIHNpYmxpbmdzID0gcGFyZW50LmNoaWxkcmVuXG4gIHZhciBoZWFkID0gbm9kZS5jaGlsZHJlblswXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgZmlyc3RQYXJhZ2hyYXBoXG5cbiAgaWYgKFxuICAgIHBhcmVudCAmJlxuICAgIHBhcmVudC50eXBlID09PSAnbGlzdEl0ZW0nICYmXG4gICAgdHlwZW9mIHBhcmVudC5jaGVja2VkID09PSAnYm9vbGVhbicgJiZcbiAgICBoZWFkICYmXG4gICAgaGVhZC50eXBlID09PSAndGV4dCdcbiAgKSB7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzaWJsaW5ncy5sZW5ndGgpIHtcbiAgICAgIGlmIChzaWJsaW5nc1tpbmRleF0udHlwZSA9PT0gJ3BhcmFncmFwaCcpIHtcbiAgICAgICAgZmlyc3RQYXJhZ2hyYXBoID0gc2libGluZ3NbaW5kZXhdXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0UGFyYWdocmFwaCA9PT0gbm9kZSkge1xuICAgICAgLy8gTXVzdCBzdGFydCB3aXRoIGEgc3BhY2Ugb3IgYSB0YWIuXG4gICAgICBoZWFkLnZhbHVlID0gaGVhZC52YWx1ZS5zbGljZSgxKVxuXG4gICAgICBpZiAoaGVhZC52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgbm9kZS5jaGlsZHJlbi5zaGlmdCgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkLnBvc2l0aW9uLnN0YXJ0LmNvbHVtbisrXG4gICAgICAgIGhlYWQucG9zaXRpb24uc3RhcnQub2Zmc2V0KytcbiAgICAgICAgbm9kZS5wb3NpdGlvbi5zdGFydCA9IE9iamVjdC5hc3NpZ24oe30sIGhlYWQucG9zaXRpb24uc3RhcnQpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5leGl0KHRva2VuKVxufVxuIiwidmFyIGRlZmF1bHRMaXN0SXRlbSA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24vbGliL2hhbmRsZS9saXN0LWl0ZW0nKVxuXG5leHBvcnRzLnVuc2FmZSA9IFt7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnLScsIGFmdGVyOiAnWzp8LV0nfV1cblxuZXhwb3J0cy5oYW5kbGVycyA9IHtcbiAgbGlzdEl0ZW06IGxpc3RJdGVtV2l0aFRhc2tMaXN0SXRlbVxufVxuXG5mdW5jdGlvbiBsaXN0SXRlbVdpdGhUYXNrTGlzdEl0ZW0obm9kZSwgcGFyZW50LCBjb250ZXh0KSB7XG4gIHZhciB2YWx1ZSA9IGRlZmF1bHRMaXN0SXRlbShub2RlLCBwYXJlbnQsIGNvbnRleHQpXG4gIHZhciBoZWFkID0gbm9kZS5jaGlsZHJlblswXVxuXG4gIGlmICh0eXBlb2Ygbm9kZS5jaGVja2VkID09PSAnYm9vbGVhbicgJiYgaGVhZCAmJiBoZWFkLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eKD86WyorLV18XFxkK1xcLikoW1xcclxcbl18IHsxLDN9KS8sIGNoZWNrKVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlXG5cbiAgZnVuY3Rpb24gY2hlY2soJDApIHtcbiAgICByZXR1cm4gJDAgKyAnWycgKyAobm9kZS5jaGVja2VkID8gJ3gnIDogJyAnKSArICddICdcbiAgfVxufVxuIiwidmFyIGF1dG9saW5rTGl0ZXJhbCA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZ2ZtLWF1dG9saW5rLWxpdGVyYWwvZnJvbS1tYXJrZG93bicpXG52YXIgc3RyaWtldGhyb3VnaCA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZ2ZtLXN0cmlrZXRocm91Z2gvZnJvbS1tYXJrZG93bicpXG52YXIgdGFibGUgPSByZXF1aXJlKCdtZGFzdC11dGlsLWdmbS10YWJsZS9mcm9tLW1hcmtkb3duJylcbnZhciB0YXNrTGlzdEl0ZW0gPSByZXF1aXJlKCdtZGFzdC11dGlsLWdmbS10YXNrLWxpc3QtaXRlbS9mcm9tLW1hcmtkb3duJylcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbm1vZHVsZS5leHBvcnRzID0gY29uZmlndXJlKFtcbiAgYXV0b2xpbmtMaXRlcmFsLFxuICBzdHJpa2V0aHJvdWdoLFxuICB0YWJsZSxcbiAgdGFza0xpc3RJdGVtXG5dKVxuXG5mdW5jdGlvbiBjb25maWd1cmUoZXh0ZW5zaW9ucykge1xuICB2YXIgY29uZmlnID0ge3RyYW5zZm9ybXM6IFtdLCBjYW5Db250YWluRW9sczogW119XG4gIHZhciBsZW5ndGggPSBleHRlbnNpb25zLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZXh0ZW5zaW9uKGNvbmZpZywgZXh0ZW5zaW9uc1tpbmRleF0pXG4gIH1cblxuICByZXR1cm4gY29uZmlnXG59XG5cbmZ1bmN0aW9uIGV4dGVuc2lvbihjb25maWcsIGV4dGVuc2lvbikge1xuICB2YXIga2V5XG4gIHZhciBsZWZ0XG4gIHZhciByaWdodFxuXG4gIGZvciAoa2V5IGluIGV4dGVuc2lvbikge1xuICAgIGxlZnQgPSBvd24uY2FsbChjb25maWcsIGtleSkgPyBjb25maWdba2V5XSA6IChjb25maWdba2V5XSA9IHt9KVxuICAgIHJpZ2h0ID0gZXh0ZW5zaW9uW2tleV1cblxuICAgIGlmIChrZXkgPT09ICdjYW5Db250YWluRW9scycgfHwga2V5ID09PSAndHJhbnNmb3JtcycpIHtcbiAgICAgIGNvbmZpZ1trZXldID0gW10uY29uY2F0KGxlZnQsIHJpZ2h0KVxuICAgIH0gZWxzZSB7XG4gICAgICBPYmplY3QuYXNzaWduKGxlZnQsIHJpZ2h0KVxuICAgIH1cbiAgfVxufVxuIiwidmFyIGF1dG9saW5rTGl0ZXJhbCA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZ2ZtLWF1dG9saW5rLWxpdGVyYWwvdG8tbWFya2Rvd24nKVxudmFyIHN0cmlrZXRocm91Z2ggPSByZXF1aXJlKCdtZGFzdC11dGlsLWdmbS1zdHJpa2V0aHJvdWdoL3RvLW1hcmtkb3duJylcbnZhciB0YWJsZSA9IHJlcXVpcmUoJ21kYXN0LXV0aWwtZ2ZtLXRhYmxlL3RvLW1hcmtkb3duJylcbnZhciB0YXNrTGlzdEl0ZW0gPSByZXF1aXJlKCdtZGFzdC11dGlsLWdmbS10YXNrLWxpc3QtaXRlbS90by1tYXJrZG93bicpXG52YXIgY29uZmlndXJlID0gcmVxdWlyZSgnbWRhc3QtdXRpbC10by1tYXJrZG93bi9saWIvY29uZmlndXJlJylcblxubW9kdWxlLmV4cG9ydHMgPSB0b01hcmtkb3duXG5cbmZ1bmN0aW9uIHRvTWFya2Rvd24ob3B0aW9ucykge1xuICB2YXIgY29uZmlnID0gY29uZmlndXJlKFxuICAgIHtoYW5kbGVyczoge30sIGpvaW46IFtdLCB1bnNhZmU6IFtdLCBvcHRpb25zOiB7fX0sXG4gICAge1xuICAgICAgZXh0ZW5zaW9uczogW2F1dG9saW5rTGl0ZXJhbCwgc3RyaWtldGhyb3VnaCwgdGFibGUob3B0aW9ucyksIHRhc2tMaXN0SXRlbV1cbiAgICB9XG4gIClcblxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb25maWcub3B0aW9ucywge1xuICAgIGhhbmRsZXJzOiBjb25maWcuaGFuZGxlcnMsXG4gICAgam9pbjogY29uZmlnLmpvaW4sXG4gICAgdW5zYWZlOiBjb25maWcudW5zYWZlXG4gIH0pXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNvbmZpZ3VyZVxuXG5mdW5jdGlvbiBjb25maWd1cmUoYmFzZSwgZXh0ZW5zaW9uKSB7XG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBrZXlcblxuICAvLyBGaXJzdCBkbyBzdWJleHRlbnNpb25zLlxuICBpZiAoZXh0ZW5zaW9uLmV4dGVuc2lvbnMpIHtcbiAgICB3aGlsZSAoKytpbmRleCA8IGV4dGVuc2lvbi5leHRlbnNpb25zLmxlbmd0aCkge1xuICAgICAgY29uZmlndXJlKGJhc2UsIGV4dGVuc2lvbi5leHRlbnNpb25zW2luZGV4XSlcbiAgICB9XG4gIH1cblxuICBmb3IgKGtleSBpbiBleHRlbnNpb24pIHtcbiAgICBpZiAoa2V5ID09PSAnZXh0ZW5zaW9ucycpIHtcbiAgICAgIC8vIEVtcHR5LlxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAndW5zYWZlJyB8fCBrZXkgPT09ICdqb2luJykge1xuICAgICAgYmFzZVtrZXldID0gYmFzZVtrZXldLmNvbmNhdChleHRlbnNpb25ba2V5XSB8fCBbXSlcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2hhbmRsZXJzJykge1xuICAgICAgYmFzZVtrZXldID0gT2JqZWN0LmFzc2lnbihiYXNlW2tleV0sIGV4dGVuc2lvbltrZXldIHx8IHt9KVxuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlLm9wdGlvbnNba2V5XSA9IGV4dGVuc2lvbltrZXldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJhc2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW5saW5lQ29kZVxuaW5saW5lQ29kZS5wZWVrID0gaW5saW5lQ29kZVBlZWtcblxudmFyIHBhdHRlcm5Db21waWxlID0gcmVxdWlyZSgnLi4vdXRpbC9wYXR0ZXJuLWNvbXBpbGUnKVxuXG5mdW5jdGlvbiBpbmxpbmVDb2RlKG5vZGUsIHBhcmVudCwgY29udGV4dCkge1xuICB2YXIgdmFsdWUgPSBub2RlLnZhbHVlIHx8ICcnXG4gIHZhciBzZXF1ZW5jZSA9ICdgJ1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgcGF0dGVyblxuICB2YXIgZXhwcmVzc2lvblxuICB2YXIgbWF0Y2hcbiAgdmFyIHBvc2l0aW9uXG5cbiAgLy8gSWYgdGhlcmUgaXMgYSBzaW5nbGUgZ3JhdmUgYWNjZW50IG9uIGl0cyBvd24gaW4gdGhlIGNvZGUsIHVzZSBhIGZlbmNlIG9mXG4gIC8vIHR3by5cbiAgLy8gSWYgdGhlcmUgYXJlIHR3byBpbiBhIHJvdywgdXNlIG9uZS5cbiAgd2hpbGUgKG5ldyBSZWdFeHAoJyhefFteYF0pJyArIHNlcXVlbmNlICsgJyhbXmBdfCQpJykudGVzdCh2YWx1ZSkpIHtcbiAgICBzZXF1ZW5jZSArPSAnYCdcbiAgfVxuXG4gIC8vIElmIHRoaXMgaXMgbm90IGp1c3Qgc3BhY2VzIG9yIGVvbHMgKHRhYnMgZG9u4oCZdCBjb3VudCksIGFuZCBlaXRoZXIgdGhlXG4gIC8vIGZpcnN0IG9yIGxhc3QgY2hhcmFjdGVyIGFyZSBhIHNwYWNlLCBlb2wsIG9yIHRpY2ssIHRoZW4gcGFkIHdpdGggc3BhY2VzLlxuICBpZiAoXG4gICAgL1teIFxcclxcbl0vLnRlc3QodmFsdWUpICYmXG4gICAgKC9bIFxcclxcbmBdLy50ZXN0KHZhbHVlLmNoYXJBdCgwKSkgfHxcbiAgICAgIC9bIFxcclxcbmBdLy50ZXN0KHZhbHVlLmNoYXJBdCh2YWx1ZS5sZW5ndGggLSAxKSkpXG4gICkge1xuICAgIHZhbHVlID0gJyAnICsgdmFsdWUgKyAnICdcbiAgfVxuXG4gIC8vIFdlIGhhdmUgYSBwb3RlbnRpYWwgcHJvYmxlbTogY2VydGFpbiBjaGFyYWN0ZXJzIGFmdGVyIGVvbHMgY291bGQgcmVzdWx0IGluXG4gIC8vIGJsb2NrcyBiZWluZyBzZWVuLlxuICAvLyBGb3IgZXhhbXBsZSwgaWYgc29tZW9uZSBpbmplY3RlZCB0aGUgc3RyaW5nIGAnXFxuIyBiJ2AsIHRoZW4gdGhhdCB3b3VsZFxuICAvLyByZXN1bHQgaW4gYW4gQVRYIGhlYWRpbmcuXG4gIC8vIFdlIGNhbuKAmXQgZXNjYXBlIGNoYXJhY3RlcnMgaW4gYGlubGluZUNvZGVgLCBidXQgYmVjYXVzZSBlb2xzIGFyZVxuICAvLyB0cmFuc2Zvcm1lZCB0byBzcGFjZXMgd2hlbiBnb2luZyBmcm9tIG1hcmtkb3duIHRvIEhUTUwgYW55d2F5LCB3ZSBjYW4gc3dhcFxuICAvLyB0aGVtIG91dC5cbiAgd2hpbGUgKCsraW5kZXggPCBjb250ZXh0LnVuc2FmZS5sZW5ndGgpIHtcbiAgICBwYXR0ZXJuID0gY29udGV4dC51bnNhZmVbaW5kZXhdXG5cbiAgICAvLyBPbmx5IGxvb2sgZm9yIGBhdEJyZWFrYHMuXG4gICAgLy8gQnR3OiBub3RlIHRoYXQgYGF0QnJlYWtgIHBhdHRlcm5zIHdpbGwgYWx3YXlzIHN0YXJ0IHRoZSByZWdleCBhdCBMRiBvclxuICAgIC8vIENSLlxuICAgIGlmICghcGF0dGVybi5hdEJyZWFrKSBjb250aW51ZVxuXG4gICAgZXhwcmVzc2lvbiA9IHBhdHRlcm5Db21waWxlKHBhdHRlcm4pXG5cbiAgICB3aGlsZSAoKG1hdGNoID0gZXhwcmVzc2lvbi5leGVjKHZhbHVlKSkpIHtcbiAgICAgIHBvc2l0aW9uID0gbWF0Y2guaW5kZXhcblxuICAgICAgLy8gU3VwcG9ydCBDUkxGIChwYXR0ZXJucyBvbmx5IGxvb2sgZm9yIG9uZSBvZiB0aGUgY2hhcmFjdGVycykuXG4gICAgICBpZiAoXG4gICAgICAgIHZhbHVlLmNoYXJDb2RlQXQocG9zaXRpb24pID09PSAxMCAvKiBgXFxuYCAqLyAmJlxuICAgICAgICB2YWx1ZS5jaGFyQ29kZUF0KHBvc2l0aW9uIC0gMSkgPT09IDEzIC8qIGBcXHJgICovXG4gICAgICApIHtcbiAgICAgICAgcG9zaXRpb24tLVxuICAgICAgfVxuXG4gICAgICB2YWx1ZSA9IHZhbHVlLnNsaWNlKDAsIHBvc2l0aW9uKSArICcgJyArIHZhbHVlLnNsaWNlKG1hdGNoLmluZGV4ICsgMSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2VxdWVuY2UgKyB2YWx1ZSArIHNlcXVlbmNlXG59XG5cbmZ1bmN0aW9uIGlubGluZUNvZGVQZWVrKCkge1xuICByZXR1cm4gJ2AnXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGxpc3RJdGVtXG5cbnZhciByZXBlYXQgPSByZXF1aXJlKCdyZXBlYXQtc3RyaW5nJylcbnZhciBjaGVja0J1bGxldCA9IHJlcXVpcmUoJy4uL3V0aWwvY2hlY2stYnVsbGV0JylcbnZhciBjaGVja0xpc3RJdGVtSW5kZW50ID0gcmVxdWlyZSgnLi4vdXRpbC9jaGVjay1saXN0LWl0ZW0taW5kZW50JylcbnZhciBmbG93ID0gcmVxdWlyZSgnLi4vdXRpbC9jb250YWluZXItZmxvdycpXG52YXIgaW5kZW50TGluZXMgPSByZXF1aXJlKCcuLi91dGlsL2luZGVudC1saW5lcycpXG5cbmZ1bmN0aW9uIGxpc3RJdGVtKG5vZGUsIHBhcmVudCwgY29udGV4dCkge1xuICB2YXIgYnVsbGV0ID0gY2hlY2tCdWxsZXQoY29udGV4dClcbiAgdmFyIGxpc3RJdGVtSW5kZW50ID0gY2hlY2tMaXN0SXRlbUluZGVudChjb250ZXh0KVxuICB2YXIgc2l6ZVxuICB2YXIgdmFsdWVcbiAgdmFyIGV4aXRcblxuICBpZiAocGFyZW50ICYmIHBhcmVudC5vcmRlcmVkKSB7XG4gICAgYnVsbGV0ID1cbiAgICAgIChwYXJlbnQuc3RhcnQgPiAtMSA/IHBhcmVudC5zdGFydCA6IDEpICtcbiAgICAgIChjb250ZXh0Lm9wdGlvbnMuaW5jcmVtZW50TGlzdE1hcmtlciA9PT0gZmFsc2VcbiAgICAgICAgPyAwXG4gICAgICAgIDogcGFyZW50LmNoaWxkcmVuLmluZGV4T2Yobm9kZSkpICtcbiAgICAgICcuJ1xuICB9XG5cbiAgc2l6ZSA9IGJ1bGxldC5sZW5ndGggKyAxXG5cbiAgaWYgKFxuICAgIGxpc3RJdGVtSW5kZW50ID09PSAndGFiJyB8fFxuICAgIChsaXN0SXRlbUluZGVudCA9PT0gJ21peGVkJyAmJiAoKHBhcmVudCAmJiBwYXJlbnQuc3ByZWFkKSB8fCBub2RlLnNwcmVhZCkpXG4gICkge1xuICAgIHNpemUgPSBNYXRoLmNlaWwoc2l6ZSAvIDQpICogNFxuICB9XG5cbiAgZXhpdCA9IGNvbnRleHQuZW50ZXIoJ2xpc3RJdGVtJylcbiAgdmFsdWUgPSBpbmRlbnRMaW5lcyhmbG93KG5vZGUsIGNvbnRleHQpLCBtYXApXG4gIGV4aXQoKVxuXG4gIHJldHVybiB2YWx1ZVxuXG4gIGZ1bmN0aW9uIG1hcChsaW5lLCBpbmRleCwgYmxhbmspIHtcbiAgICBpZiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiAoYmxhbmsgPyAnJyA6IHJlcGVhdCgnICcsIHNpemUpKSArIGxpbmVcbiAgICB9XG5cbiAgICByZXR1cm4gKGJsYW5rID8gYnVsbGV0IDogYnVsbGV0ICsgcmVwZWF0KCcgJywgc2l6ZSAtIGJ1bGxldC5sZW5ndGgpKSArIGxpbmVcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBjaGVja0J1bGxldFxuXG5mdW5jdGlvbiBjaGVja0J1bGxldChjb250ZXh0KSB7XG4gIHZhciBtYXJrZXIgPSBjb250ZXh0Lm9wdGlvbnMuYnVsbGV0IHx8ICcqJ1xuXG4gIGlmIChtYXJrZXIgIT09ICcqJyAmJiBtYXJrZXIgIT09ICcrJyAmJiBtYXJrZXIgIT09ICctJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3Qgc2VyaWFsaXplIGl0ZW1zIHdpdGggYCcgK1xuICAgICAgICBtYXJrZXIgK1xuICAgICAgICAnYCBmb3IgYG9wdGlvbnMuYnVsbGV0YCwgZXhwZWN0ZWQgYCpgLCBgK2AsIG9yIGAtYCdcbiAgICApXG4gIH1cblxuICByZXR1cm4gbWFya2VyXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNoZWNrTGlzdEl0ZW1JbmRlbnRcblxuZnVuY3Rpb24gY2hlY2tMaXN0SXRlbUluZGVudChjb250ZXh0KSB7XG4gIHZhciBzdHlsZSA9IGNvbnRleHQub3B0aW9ucy5saXN0SXRlbUluZGVudCB8fCAndGFiJ1xuXG4gIGlmIChzdHlsZSA9PT0gMSB8fCBzdHlsZSA9PT0gJzEnKSB7XG4gICAgcmV0dXJuICdvbmUnXG4gIH1cblxuICBpZiAoc3R5bGUgIT09ICd0YWInICYmIHN0eWxlICE9PSAnb25lJyAmJiBzdHlsZSAhPT0gJ21peGVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdDYW5ub3Qgc2VyaWFsaXplIGl0ZW1zIHdpdGggYCcgK1xuICAgICAgICBzdHlsZSArXG4gICAgICAgICdgIGZvciBgb3B0aW9ucy5saXN0SXRlbUluZGVudGAsIGV4cGVjdGVkIGB0YWJgLCBgb25lYCwgb3IgYG1peGVkYCdcbiAgICApXG4gIH1cblxuICByZXR1cm4gc3R5bGVcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZmxvd1xuXG52YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpXG5cbmZ1bmN0aW9uIGZsb3cocGFyZW50LCBjb250ZXh0KSB7XG4gIHZhciBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZHJlbiB8fCBbXVxuICB2YXIgcmVzdWx0cyA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBjaGlsZFxuXG4gIHdoaWxlICgrK2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cblxuICAgIHJlc3VsdHMucHVzaChcbiAgICAgIGNvbnRleHQuaGFuZGxlKGNoaWxkLCBwYXJlbnQsIGNvbnRleHQsIHtiZWZvcmU6ICdcXG4nLCBhZnRlcjogJ1xcbid9KVxuICAgIClcblxuICAgIGlmIChpbmRleCArIDEgPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdHMucHVzaChiZXR3ZWVuKGNoaWxkLCBjaGlsZHJlbltpbmRleCArIDFdKSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0cy5qb2luKCcnKVxuXG4gIGZ1bmN0aW9uIGJldHdlZW4obGVmdCwgcmlnaHQpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciByZXN1bHRcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY29udGV4dC5qb2luLmxlbmd0aCkge1xuICAgICAgcmVzdWx0ID0gY29udGV4dC5qb2luW2luZGV4XShsZWZ0LCByaWdodCwgcGFyZW50LCBjb250ZXh0KVxuXG4gICAgICBpZiAocmVzdWx0ID09PSB0cnVlIHx8IHJlc3VsdCA9PT0gMSkge1xuICAgICAgICBicmVha1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHJlcGVhdCgnXFxuJywgMSArIE51bWJlcihyZXN1bHQpKVxuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbjwhLS0tLT5cXG5cXG4nXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICdcXG5cXG4nXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcGhyYXNpbmdcblxuZnVuY3Rpb24gcGhyYXNpbmcocGFyZW50LCBjb250ZXh0LCBzYWZlT3B0aW9ucykge1xuICB2YXIgY2hpbGRyZW4gPSBwYXJlbnQuY2hpbGRyZW4gfHwgW11cbiAgdmFyIHJlc3VsdHMgPSBbXVxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgYmVmb3JlID0gc2FmZU9wdGlvbnMuYmVmb3JlXG4gIHZhciBhZnRlclxuICB2YXIgaGFuZGxlXG4gIHZhciBjaGlsZFxuXG4gIHdoaWxlICgrK2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgY2hpbGQgPSBjaGlsZHJlbltpbmRleF1cblxuICAgIGlmIChpbmRleCArIDEgPCBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIGhhbmRsZSA9IGNvbnRleHQuaGFuZGxlLmhhbmRsZXJzW2NoaWxkcmVuW2luZGV4ICsgMV0udHlwZV1cbiAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLnBlZWspIGhhbmRsZSA9IGhhbmRsZS5wZWVrXG4gICAgICBhZnRlciA9IGhhbmRsZVxuICAgICAgICA/IGhhbmRsZShjaGlsZHJlbltpbmRleCArIDFdLCBwYXJlbnQsIGNvbnRleHQsIHtcbiAgICAgICAgICAgIGJlZm9yZTogJycsXG4gICAgICAgICAgICBhZnRlcjogJydcbiAgICAgICAgICB9KS5jaGFyQXQoMClcbiAgICAgICAgOiAnJ1xuICAgIH0gZWxzZSB7XG4gICAgICBhZnRlciA9IHNhZmVPcHRpb25zLmFmdGVyXG4gICAgfVxuXG4gICAgLy8gSW4gc29tZSBjYXNlcywgaHRtbCAodGV4dCkgY2FuIGJlIGZvdW5kIGluIHBocmFzaW5nIHJpZ2h0IGFmdGVyIGFuIGVvbC5cbiAgICAvLyBXaGVuIHdl4oCZZCBzZXJpYWxpemUgdGhhdCwgaW4gbW9zdCBjYXNlcyB0aGF0IHdvdWxkIGJlIHNlZW4gYXMgaHRtbFxuICAgIC8vIChmbG93KS5cbiAgICAvLyBBcyB3ZSBjYW7igJl0IGVzY2FwZSBvciBzbyB0byBwcmV2ZW50IGl0IGZyb20gaGFwcGVuaW5nLCB3ZSB0YWtlIGEgc29tZXdoYXRcbiAgICAvLyByZWFzb25hYmxlIGFwcHJvYWNoOiByZXBsYWNlIHRoYXQgZW9sIHdpdGggYSBzcGFjZS5cbiAgICAvLyBTZWU6IDxodHRwczovL2dpdGh1Yi5jb20vc3ludGF4LXRyZWUvbWRhc3QtdXRpbC10by1tYXJrZG93bi9pc3N1ZXMvMTU+XG4gICAgaWYgKFxuICAgICAgcmVzdWx0cy5sZW5ndGggPiAwICYmXG4gICAgICAoYmVmb3JlID09PSAnXFxyJyB8fCBiZWZvcmUgPT09ICdcXG4nKSAmJlxuICAgICAgY2hpbGQudHlwZSA9PT0gJ2h0bWwnXG4gICAgKSB7XG4gICAgICByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoIC0gMV0gPSByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoIC0gMV0ucmVwbGFjZShcbiAgICAgICAgLyhcXHI/XFxufFxccikkLyxcbiAgICAgICAgJyAnXG4gICAgICApXG4gICAgICBiZWZvcmUgPSAnICdcbiAgICB9XG5cbiAgICByZXN1bHRzLnB1c2goXG4gICAgICBjb250ZXh0LmhhbmRsZShjaGlsZCwgcGFyZW50LCBjb250ZXh0LCB7XG4gICAgICAgIGJlZm9yZTogYmVmb3JlLFxuICAgICAgICBhZnRlcjogYWZ0ZXJcbiAgICAgIH0pXG4gICAgKVxuXG4gICAgYmVmb3JlID0gcmVzdWx0c1tyZXN1bHRzLmxlbmd0aCAtIDFdLnNsaWNlKC0xKVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdHMuam9pbignJylcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gaW5kZW50TGluZXNcblxudmFyIGVvbCA9IC9cXHI/XFxufFxcci9nXG5cbmZ1bmN0aW9uIGluZGVudExpbmVzKHZhbHVlLCBtYXApIHtcbiAgdmFyIHJlc3VsdCA9IFtdXG4gIHZhciBzdGFydCA9IDBcbiAgdmFyIGxpbmUgPSAwXG4gIHZhciBtYXRjaFxuXG4gIHdoaWxlICgobWF0Y2ggPSBlb2wuZXhlYyh2YWx1ZSkpKSB7XG4gICAgb25lKHZhbHVlLnNsaWNlKHN0YXJ0LCBtYXRjaC5pbmRleCkpXG4gICAgcmVzdWx0LnB1c2gobWF0Y2hbMF0pXG4gICAgc3RhcnQgPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aFxuICAgIGxpbmUrK1xuICB9XG5cbiAgb25lKHZhbHVlLnNsaWNlKHN0YXJ0KSlcblxuICByZXR1cm4gcmVzdWx0LmpvaW4oJycpXG5cbiAgZnVuY3Rpb24gb25lKHZhbHVlKSB7XG4gICAgcmVzdWx0LnB1c2gobWFwKHZhbHVlLCBsaW5lLCAhdmFsdWUpKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHBhdHRlcm5Db21waWxlXG5cbmZ1bmN0aW9uIHBhdHRlcm5Db21waWxlKHBhdHRlcm4pIHtcbiAgdmFyIGJlZm9yZVxuICB2YXIgYWZ0ZXJcblxuICBpZiAoIXBhdHRlcm4uX2NvbXBpbGVkKSB7XG4gICAgYmVmb3JlID0gcGF0dGVybi5iZWZvcmUgPyAnKD86JyArIHBhdHRlcm4uYmVmb3JlICsgJyknIDogJydcbiAgICBhZnRlciA9IHBhdHRlcm4uYWZ0ZXIgPyAnKD86JyArIHBhdHRlcm4uYWZ0ZXIgKyAnKScgOiAnJ1xuXG4gICAgaWYgKHBhdHRlcm4uYXRCcmVhaykge1xuICAgICAgYmVmb3JlID0gJ1tcXFxcclxcXFxuXVtcXFxcdCBdKicgKyBiZWZvcmVcbiAgICB9XG5cbiAgICBwYXR0ZXJuLl9jb21waWxlZCA9IG5ldyBSZWdFeHAoXG4gICAgICAoYmVmb3JlID8gJygnICsgYmVmb3JlICsgJyknIDogJycpICtcbiAgICAgICAgKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dLy50ZXN0KHBhdHRlcm4uY2hhcmFjdGVyKSA/ICdcXFxcJyA6ICcnKSArXG4gICAgICAgIHBhdHRlcm4uY2hhcmFjdGVyICtcbiAgICAgICAgKGFmdGVyIHx8ICcnKSxcbiAgICAgICdnJ1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXR0ZXJuLl9jb21waWxlZFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3N5bnRheCcpXG4iLCJ2YXIgYXNjaWlBbHBoYSA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L2NoYXJhY3Rlci9hc2NpaS1hbHBoYScpXG52YXIgYXNjaWlBbHBoYW51bWVyaWMgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktYWxwaGFudW1lcmljJylcbnZhciBhc2NpaUNvbnRyb2wgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvYXNjaWktY29udHJvbCcpXG52YXIgbWFya2Rvd25MaW5lRW5kaW5nID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nJylcbnZhciB1bmljb2RlUHVuY3R1YXRpb24gPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvdW5pY29kZS1wdW5jdHVhdGlvbicpXG52YXIgdW5pY29kZVdoaXRlc3BhY2UgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC9jaGFyYWN0ZXIvdW5pY29kZS13aGl0ZXNwYWNlJylcblxudmFyIHd3dyA9IHt0b2tlbml6ZTogdG9rZW5pemVXd3csIHBhcnRpYWw6IHRydWV9XG52YXIgZG9tYWluID0ge3Rva2VuaXplOiB0b2tlbml6ZURvbWFpbiwgcGFydGlhbDogdHJ1ZX1cbnZhciBwYXRoID0ge3Rva2VuaXplOiB0b2tlbml6ZVBhdGgsIHBhcnRpYWw6IHRydWV9XG52YXIgcHVuY3R1YXRpb24gPSB7dG9rZW5pemU6IHRva2VuaXplUHVuY3R1YXRpb24sIHBhcnRpYWw6IHRydWV9XG52YXIgcGFyZW4gPSB7dG9rZW5pemU6IHRva2VuaXplUGFyZW4sIHBhcnRpYWw6IHRydWV9XG52YXIgbmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UgPSB7XG4gIHRva2VuaXplOiB0b2tlbml6ZU5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlLFxuICBwYXJ0aWFsOiB0cnVlXG59XG5cbnZhciB3d3dBdXRvbGluayA9IHt0b2tlbml6ZTogdG9rZW5pemVXd3dBdXRvbGluaywgcHJldmlvdXM6IHByZXZpb3VzV3d3fVxudmFyIGh0dHBBdXRvbGluayA9IHt0b2tlbml6ZTogdG9rZW5pemVIdHRwQXV0b2xpbmssIHByZXZpb3VzOiBwcmV2aW91c0h0dHB9XG52YXIgZW1haWxBdXRvbGluayA9IHt0b2tlbml6ZTogdG9rZW5pemVFbWFpbEF1dG9saW5rLCBwcmV2aW91czogcHJldmlvdXNFbWFpbH1cblxudmFyIHRleHQgPSB7fVxuXG4vLyBFeHBvcnQgaG9va2VkIGNvbnN0cnVjdHMuXG5leHBvcnRzLnRleHQgPSB0ZXh0XG5cbi8vIGAwYFxudmFyIGNvZGUgPSA0OFxuXG4vLyBXaGlsZSB0aGUgY29kZSBpcyBzbWFsbGVyIHRoYW4gYHtgLlxud2hpbGUgKGNvZGUgPCAxMjMpIHtcbiAgdGV4dFtjb2RlXSA9IGVtYWlsQXV0b2xpbmtcbiAgY29kZSsrXG4gIC8vIEp1bXAgZnJvbSBgOmAgLT4gYEFgXG4gIGlmIChjb2RlID09PSA1OCkgY29kZSA9IDY1XG4gIC8vIEp1bXAgZnJvbSBgW2AgLT4gYGFgXG4gIGVsc2UgaWYgKGNvZGUgPT09IDkxKSBjb2RlID0gOTdcbn1cblxuLy8gYCtgXG50ZXh0WzQzXSA9IGVtYWlsQXV0b2xpbmtcbi8vIGAtYFxudGV4dFs0NV0gPSBlbWFpbEF1dG9saW5rXG4vLyBgLmBcbnRleHRbNDZdID0gZW1haWxBdXRvbGlua1xuLy8gYF9gXG50ZXh0Wzk1XSA9IGVtYWlsQXV0b2xpbmtcbi8vIGBoYC5cbnRleHRbNzJdID0gW2VtYWlsQXV0b2xpbmssIGh0dHBBdXRvbGlua11cbnRleHRbMTA0XSA9IFtlbWFpbEF1dG9saW5rLCBodHRwQXV0b2xpbmtdXG4vLyBgd2AuXG50ZXh0Wzg3XSA9IFtlbWFpbEF1dG9saW5rLCB3d3dBdXRvbGlua11cbnRleHRbMTE5XSA9IFtlbWFpbEF1dG9saW5rLCB3d3dBdXRvbGlua11cblxuZnVuY3Rpb24gdG9rZW5pemVFbWFpbEF1dG9saW5rKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBoYXNEb3RcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBob29rcy4gKi9cbiAgICBpZiAoXG4gICAgICAhZ2ZtQXRleHQoY29kZSkgfHxcbiAgICAgICFwcmV2aW91c0VtYWlsKHNlbGYucHJldmlvdXMpIHx8XG4gICAgICBwcmV2aW91cyhzZWxmLmV2ZW50cylcbiAgICApIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCdsaXRlcmFsQXV0b2xpbmsnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ2xpdGVyYWxBdXRvbGlua0VtYWlsJylcbiAgICByZXR1cm4gYXRleHQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0ZXh0KGNvZGUpIHtcbiAgICBpZiAoZ2ZtQXRleHQoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGF0ZXh0XG4gICAgfVxuXG4gICAgLy8gYEBgXG4gICAgaWYgKGNvZGUgPT09IDY0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBsYWJlbFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGxhYmVsKGNvZGUpIHtcbiAgICAvLyBgLmBcbiAgICBpZiAoY29kZSA9PT0gNDYpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKHB1bmN0dWF0aW9uLCBkb25lLCBkb3RDb250aW51YXRpb24pKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgLy8gYC1gXG4gICAgICBjb2RlID09PSA0NSB8fFxuICAgICAgLy8gYF9gXG4gICAgICBjb2RlID09PSA5NVxuICAgICkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2socHVuY3R1YXRpb24sIG5vaywgZGFzaE9yVW5kZXJzY29yZUNvbnRpbnVhdGlvbikoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoYXNjaWlBbHBoYW51bWVyaWMoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGxhYmVsXG4gICAgfVxuXG4gICAgcmV0dXJuIGRvbmUoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvdENvbnRpbnVhdGlvbihjb2RlKSB7XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgaGFzRG90ID0gdHJ1ZVxuICAgIHJldHVybiBsYWJlbFxuICB9XG5cbiAgZnVuY3Rpb24gZGFzaE9yVW5kZXJzY29yZUNvbnRpbnVhdGlvbihjb2RlKSB7XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGFmdGVyRGFzaE9yVW5kZXJzY29yZVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJEYXNoT3JVbmRlcnNjb3JlKGNvZGUpIHtcbiAgICAvLyBgLmBcbiAgICBpZiAoY29kZSA9PT0gNDYpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKHB1bmN0dWF0aW9uLCBub2ssIGRvdENvbnRpbnVhdGlvbikoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWwoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUoY29kZSkge1xuICAgIGlmIChoYXNEb3QpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgnbGl0ZXJhbEF1dG9saW5rRW1haWwnKVxuICAgICAgZWZmZWN0cy5leGl0KCdsaXRlcmFsQXV0b2xpbmsnKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplV3d3QXV0b2xpbmsoZWZmZWN0cywgb2ssIG5vaykge1xuICB2YXIgc2VsZiA9IHRoaXNcblxuICByZXR1cm4gc3RhcnRcblxuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBob29rcy4gKi9cbiAgICBpZiAoXG4gICAgICAoY29kZSAhPT0gODcgJiYgY29kZSAtIDMyICE9PSA4NykgfHxcbiAgICAgICFwcmV2aW91c1d3dyhzZWxmLnByZXZpb3VzKSB8fFxuICAgICAgcHJldmlvdXMoc2VsZi5ldmVudHMpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignbGl0ZXJhbEF1dG9saW5rJylcbiAgICBlZmZlY3RzLmVudGVyKCdsaXRlcmFsQXV0b2xpbmtXd3cnKVxuICAgIC8vIEZvciBgd3d3LmAgd2UgY2hlY2sgaW5zdGVhZCBvZiBhdHRlbXB0LCBiZWNhdXNlIHdoZW4gaXQgbWF0Y2hlcywgR0hcbiAgICAvLyB0cmVhdHMgaXQgYXMgcGFydCBvZiBhIGRvbWFpbiAoeWVzLCBpdCBzYXlzIGEgdmFsaWQgZG9tYWluIG11c3QgY29tZVxuICAgIC8vIGFmdGVyIGB3d3cuYCwgYnV0IHRoYXTigJlzIG5vdCBob3cgaXTigJlzIGltcGxlbWVudGVkIGJ5IHRoZW0pLlxuICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKFxuICAgICAgd3d3LFxuICAgICAgZWZmZWN0cy5hdHRlbXB0KGRvbWFpbiwgZWZmZWN0cy5hdHRlbXB0KHBhdGgsIGRvbmUpLCBub2spLFxuICAgICAgbm9rXG4gICAgKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gZG9uZShjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCdsaXRlcmFsQXV0b2xpbmtXd3cnKVxuICAgIGVmZmVjdHMuZXhpdCgnbGl0ZXJhbEF1dG9saW5rJylcbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZUh0dHBBdXRvbGluayhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAtIGhvb2tzLiAqL1xuICAgIGlmIChcbiAgICAgIChjb2RlICE9PSA3MiAmJiBjb2RlIC0gMzIgIT09IDcyKSB8fFxuICAgICAgIXByZXZpb3VzSHR0cChzZWxmLnByZXZpb3VzKSB8fFxuICAgICAgcHJldmlvdXMoc2VsZi5ldmVudHMpXG4gICAgKSB7XG4gICAgICByZXR1cm4gbm9rKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcignbGl0ZXJhbEF1dG9saW5rJylcbiAgICBlZmZlY3RzLmVudGVyKCdsaXRlcmFsQXV0b2xpbmtIdHRwJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gdDFcbiAgfVxuXG4gIGZ1bmN0aW9uIHQxKGNvZGUpIHtcbiAgICAvLyBgdGBcbiAgICBpZiAoY29kZSA9PT0gODQgfHwgY29kZSAtIDMyID09PSA4NCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdDJcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0Mihjb2RlKSB7XG4gICAgLy8gYHRgXG4gICAgaWYgKGNvZGUgPT09IDg0IHx8IGNvZGUgLSAzMiA9PT0gODQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHBcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBwKGNvZGUpIHtcbiAgICAvLyBgcGBcbiAgICBpZiAoY29kZSA9PT0gODAgfHwgY29kZSAtIDMyID09PSA4MCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHMoY29kZSkge1xuICAgIC8vIGBzYFxuICAgIGlmIChjb2RlID09PSA4MyB8fCBjb2RlIC0gMzIgPT09IDgzKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBjb2xvblxuICAgIH1cblxuICAgIHJldHVybiBjb2xvbihjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY29sb24oY29kZSkge1xuICAgIC8vIGA6YFxuICAgIGlmIChjb2RlID09PSA1OCkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gc2xhc2gxXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gc2xhc2gxKGNvZGUpIHtcbiAgICAvLyBgL2BcbiAgICBpZiAoY29kZSA9PT0gNDcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHNsYXNoMlxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHNsYXNoMihjb2RlKSB7XG4gICAgLy8gYC9gXG4gICAgaWYgKGNvZGUgPT09IDQ3KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBhZnRlclxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICByZXR1cm4gYXNjaWlDb250cm9sKGNvZGUpIHx8XG4gICAgICB1bmljb2RlV2hpdGVzcGFjZShjb2RlKSB8fFxuICAgICAgdW5pY29kZVB1bmN0dWF0aW9uKGNvZGUpXG4gICAgICA/IG5vayhjb2RlKVxuICAgICAgOiBlZmZlY3RzLmF0dGVtcHQoZG9tYWluLCBlZmZlY3RzLmF0dGVtcHQocGF0aCwgZG9uZSksIG5vaykoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvbmUoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgnbGl0ZXJhbEF1dG9saW5rSHR0cCcpXG4gICAgZWZmZWN0cy5leGl0KCdsaXRlcmFsQXV0b2xpbmsnKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplV3d3KGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8vIEFzc3VtZSBhIGB3YC5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gdzJcbiAgfVxuXG4gIGZ1bmN0aW9uIHcyKGNvZGUpIHtcbiAgICAvLyBgd2BcbiAgICBpZiAoY29kZSA9PT0gODcgfHwgY29kZSAtIDMyID09PSA4Nykge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gdzNcbiAgICB9XG5cbiAgICByZXR1cm4gbm9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB3Myhjb2RlKSB7XG4gICAgLy8gYHdgXG4gICAgaWYgKGNvZGUgPT09IDg3IHx8IGNvZGUgLSAzMiA9PT0gODcpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRvdFxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGRvdChjb2RlKSB7XG4gICAgLy8gYC5gXG4gICAgaWYgKGNvZGUgPT09IDQ2KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBhZnRlclxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICByZXR1cm4gY29kZSA9PT0gbnVsbCB8fCBtYXJrZG93bkxpbmVFbmRpbmcoY29kZSkgPyBub2soY29kZSkgOiBvayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplRG9tYWluKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIGhhc1VuZGVyc2NvcmVJbkxhc3RTZWdtZW50XG4gIHZhciBoYXNVbmRlcnNjb3JlSW5MYXN0TGFzdFNlZ21lbnRcblxuICByZXR1cm4gZG9tYWluXG5cbiAgZnVuY3Rpb24gZG9tYWluKGNvZGUpIHtcbiAgICAvLyBgJmBcbiAgICBpZiAoY29kZSA9PT0gMzgpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKFxuICAgICAgICBuYW1lZENoYXJhY3RlclJlZmVyZW5jZSxcbiAgICAgICAgZG9uZSxcbiAgICAgICAgcHVuY3R1YXRpb25Db250aW51YXRpb25cbiAgICAgICkoY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gNDYgLyogYC5gICovIHx8IGNvZGUgPT09IDk1IC8qIGBfYCAqLykge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2socHVuY3R1YXRpb24sIGRvbmUsIHB1bmN0dWF0aW9uQ29udGludWF0aW9uKShjb2RlKVxuICAgIH1cblxuICAgIC8vIEdIIGRvY3VtZW50cyB0aGF0IG9ubHkgYWxwaGFudW1lcmljcyAob3RoZXIgdGhhbiBgLWAsIGAuYCwgYW5kIGBfYCkgY2FuXG4gICAgLy8gb2NjdXIsIHdoaWNoIHNvdW5kcyBsaWtlIEFTQ0lJIG9ubHksIGJ1dCB0aGV5IGFsc28gc3VwcG9ydCBgd3d3Lum7nueciy5jb21gLFxuICAgIC8vIHNvIHRoYXTigJlzIFVuaWNvZGUuXG4gICAgLy8gSW5zdGVhZCBvZiBzb21lIG5ldyBwcm9kdWN0aW9uIGZvciBVbmljb2RlIGFscGhhbnVtZXJpY3MsIG1hcmtkb3duXG4gICAgLy8gYWxyZWFkeSBoYXMgdGhhdCBmb3IgVW5pY29kZSBwdW5jdHVhdGlvbiBhbmQgd2hpdGVzcGFjZSwgc28gdXNlIHRob3NlLlxuICAgIGlmIChcbiAgICAgIGFzY2lpQ29udHJvbChjb2RlKSB8fFxuICAgICAgdW5pY29kZVdoaXRlc3BhY2UoY29kZSkgfHxcbiAgICAgIChjb2RlICE9PSA0NSAvKiBgLWAgKi8gJiYgdW5pY29kZVB1bmN0dWF0aW9uKGNvZGUpKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRvbmUoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZG9tYWluXG4gIH1cblxuICBmdW5jdGlvbiBwdW5jdHVhdGlvbkNvbnRpbnVhdGlvbihjb2RlKSB7XG4gICAgLy8gYC5gXG4gICAgaWYgKGNvZGUgPT09IDQ2KSB7XG4gICAgICBoYXNVbmRlcnNjb3JlSW5MYXN0TGFzdFNlZ21lbnQgPSBoYXNVbmRlcnNjb3JlSW5MYXN0U2VnbWVudFxuICAgICAgaGFzVW5kZXJzY29yZUluTGFzdFNlZ21lbnQgPSB1bmRlZmluZWRcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGRvbWFpblxuICAgIH1cblxuICAgIC8vIGBfYFxuICAgIGlmIChjb2RlID09PSA5NSkgaGFzVW5kZXJzY29yZUluTGFzdFNlZ21lbnQgPSB0cnVlXG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gZG9tYWluXG4gIH1cblxuICBmdW5jdGlvbiBkb25lKGNvZGUpIHtcbiAgICBpZiAoIWhhc1VuZGVyc2NvcmVJbkxhc3RMYXN0U2VnbWVudCAmJiAhaGFzVW5kZXJzY29yZUluTGFzdFNlZ21lbnQpIHtcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVBhdGgoZWZmZWN0cywgb2spIHtcbiAgdmFyIGJhbGFuY2UgPSAwXG5cbiAgcmV0dXJuIGluUGF0aFxuXG4gIGZ1bmN0aW9uIGluUGF0aChjb2RlKSB7XG4gICAgLy8gYCZgXG4gICAgaWYgKGNvZGUgPT09IDM4KSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgICAgbmFtZWRDaGFyYWN0ZXJSZWZlcmVuY2UsXG4gICAgICAgIG9rLFxuICAgICAgICBjb250aW51ZWRQdW5jdHVhdGlvblxuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIC8vIGAoYFxuICAgIGlmIChjb2RlID09PSA0MCkge1xuICAgICAgYmFsYW5jZSsrXG4gICAgfVxuXG4gICAgLy8gYClgXG4gICAgaWYgKGNvZGUgPT09IDQxKSB7XG4gICAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhwYXJlbiwgcGFyZW5BdFBhdGhFbmQsIGNvbnRpbnVlZFB1bmN0dWF0aW9uKShjb2RlKVxuICAgIH1cblxuICAgIGlmIChwYXRoRW5kKGNvZGUpKSB7XG4gICAgICByZXR1cm4gb2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAodHJhaWxpbmdQdW5jdHVhdGlvbihjb2RlKSkge1xuICAgICAgcmV0dXJuIGVmZmVjdHMuY2hlY2socHVuY3R1YXRpb24sIG9rLCBjb250aW51ZWRQdW5jdHVhdGlvbikoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gaW5QYXRoXG4gIH1cblxuICBmdW5jdGlvbiBjb250aW51ZWRQdW5jdHVhdGlvbihjb2RlKSB7XG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGluUGF0aFxuICB9XG5cbiAgZnVuY3Rpb24gcGFyZW5BdFBhdGhFbmQoY29kZSkge1xuICAgIGJhbGFuY2UtLVxuICAgIHJldHVybiBiYWxhbmNlIDwgMCA/IG9rKGNvZGUpIDogY29udGludWVkUHVuY3R1YXRpb24oY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZU5hbWVkQ2hhcmFjdGVyUmVmZXJlbmNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8vIEFzc3VtZSBhbiBhbXBlcnNhbmQuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgcmV0dXJuIGluc2lkZVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zaWRlKGNvZGUpIHtcbiAgICBpZiAoYXNjaWlBbHBoYShjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5zaWRlXG4gICAgfVxuXG4gICAgLy8gYDtgXG4gICAgaWYgKGNvZGUgPT09IDU5KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBhZnRlclxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvLyBJZiB0aGUgbmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZSBpcyBmb2xsb3dlZCBieSB0aGUgZW5kIG9mIHRoZSBwYXRoLCBpdOKAmXNcbiAgICAvLyBub3QgY29udGludWVkIHB1bmN0dWF0aW9uLlxuICAgIHJldHVybiBwYXRoRW5kKGNvZGUpID8gb2soY29kZSkgOiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVBhcmVuKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8vIEFzc3VtZSBhIHJpZ2h0IHBhcmVuLlxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiBhZnRlclxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIC8vIElmIHRoZSBwdW5jdHVhdGlvbiBtYXJrZXIgaXMgZm9sbG93ZWQgYnkgdGhlIGVuZCBvZiB0aGUgcGF0aCwgaXTigJlzIG5vdFxuICAgIC8vIGNvbnRpbnVlZCBwdW5jdHVhdGlvbi5cbiAgICByZXR1cm4gcGF0aEVuZChjb2RlKSB8fFxuICAgICAgLy8gYClgXG4gICAgICBjb2RlID09PSA0MVxuICAgICAgPyBvayhjb2RlKVxuICAgICAgOiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiB0b2tlbml6ZVB1bmN0dWF0aW9uKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8vIEFsd2F5cyBhIHZhbGlkIHRyYWlsaW5nIHB1bmN0dWF0aW9uIG1hcmtlci5cbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICByZXR1cm4gYWZ0ZXJcbiAgfVxuXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvLyBDaGVjayB0aGUgbmV4dC5cbiAgICBpZiAodHJhaWxpbmdQdW5jdHVhdGlvbihjb2RlKSkge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gYWZ0ZXJcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgcHVuY3R1YXRpb24gbWFya2VyIGlzIGZvbGxvd2VkIGJ5IHRoZSBlbmQgb2YgdGhlIHBhdGgsIGl04oCZcyBub3RcbiAgICAvLyBjb250aW51ZWQgcHVuY3R1YXRpb24uXG4gICAgcmV0dXJuIHBhdGhFbmQoY29kZSkgPyBvayhjb2RlKSA6IG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRyYWlsaW5nUHVuY3R1YXRpb24oY29kZSkge1xuICByZXR1cm4gKFxuICAgIC8vIGAhYFxuICAgIGNvZGUgPT09IDMzIHx8XG4gICAgLy8gYFwiYFxuICAgIGNvZGUgPT09IDM0IHx8XG4gICAgLy8gYCdgXG4gICAgY29kZSA9PT0gMzkgfHxcbiAgICAvLyBgKWBcbiAgICBjb2RlID09PSA0MSB8fFxuICAgIC8vIGAqYFxuICAgIGNvZGUgPT09IDQyIHx8XG4gICAgLy8gYCxgXG4gICAgY29kZSA9PT0gNDQgfHxcbiAgICAvLyBgLmBcbiAgICBjb2RlID09PSA0NiB8fFxuICAgIC8vIGA6YFxuICAgIGNvZGUgPT09IDU4IHx8XG4gICAgLy8gYDtgXG4gICAgY29kZSA9PT0gNTkgfHxcbiAgICAvLyBgPGBcbiAgICBjb2RlID09PSA2MCB8fFxuICAgIC8vIGA/YFxuICAgIGNvZGUgPT09IDYzIHx8XG4gICAgLy8gYF9gLlxuICAgIGNvZGUgPT09IDk1IHx8XG4gICAgLy8gYH5gXG4gICAgY29kZSA9PT0gMTI2XG4gIClcbn1cblxuZnVuY3Rpb24gcGF0aEVuZChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgLy8gRU9GLlxuICAgIGNvZGUgPT09IG51bGwgfHxcbiAgICAvLyBDUiwgTEYsIENSTEYsIEhULCBWUy5cbiAgICBjb2RlIDwgMCB8fFxuICAgIC8vIFNwYWNlLlxuICAgIGNvZGUgPT09IDMyIHx8XG4gICAgLy8gYDxgXG4gICAgY29kZSA9PT0gNjBcbiAgKVxufVxuXG5mdW5jdGlvbiBnZm1BdGV4dChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgY29kZSA9PT0gNDMgLyogYCtgICovIHx8XG4gICAgY29kZSA9PT0gNDUgLyogYC1gICovIHx8XG4gICAgY29kZSA9PT0gNDYgLyogYC5gICovIHx8XG4gICAgY29kZSA9PT0gOTUgLyogYF9gICovIHx8XG4gICAgYXNjaWlBbHBoYW51bWVyaWMoY29kZSlcbiAgKVxufVxuXG5mdW5jdGlvbiBwcmV2aW91c1d3dyhjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgY29kZSA9PT0gbnVsbCB8fFxuICAgIGNvZGUgPCAwIHx8XG4gICAgY29kZSA9PT0gMzIgLyogYCBgICovIHx8XG4gICAgY29kZSA9PT0gNDAgLyogYChgICovIHx8XG4gICAgY29kZSA9PT0gNDIgLyogYCpgICovIHx8XG4gICAgY29kZSA9PT0gOTUgLyogYF9gICovIHx8XG4gICAgY29kZSA9PT0gMTI2IC8qIGB+YCAqL1xuICApXG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzSHR0cChjb2RlKSB7XG4gIHJldHVybiBjb2RlID09PSBudWxsIHx8ICFhc2NpaUFscGhhKGNvZGUpXG59XG5cbmZ1bmN0aW9uIHByZXZpb3VzRW1haWwoY29kZSkge1xuICByZXR1cm4gY29kZSAhPT0gNDcgLyogYC9gICovICYmIHByZXZpb3VzSHR0cChjb2RlKVxufVxuXG5mdW5jdGlvbiBwcmV2aW91cyhldmVudHMpIHtcbiAgdmFyIGluZGV4ID0gZXZlbnRzLmxlbmd0aFxuXG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgaWYgKFxuICAgICAgKGV2ZW50c1tpbmRleF1bMV0udHlwZSA9PT0gJ2xhYmVsTGluaycgfHxcbiAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID09PSAnbGFiZWxJbWFnZScpICYmXG4gICAgICAhZXZlbnRzW2luZGV4XVsxXS5fYmFsYW5jZWRcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuXG52YXIgY2xhc3NpZnlDaGFyYWN0ZXIgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC91dGlsL2NsYXNzaWZ5LWNoYXJhY3RlcicpXG52YXIgY2h1bmtlZFNwbGljZSA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3V0aWwvY2h1bmtlZC1zcGxpY2UnKVxudmFyIHJlc29sdmVBbGwgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC91dGlsL3Jlc29sdmUtYWxsJylcbnZhciBzaGFsbG93ID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9zaGFsbG93JylcblxuZnVuY3Rpb24gY3JlYXRlKG9wdGlvbnMpIHtcbiAgdmFyIHNldHRpbmdzID0gb3B0aW9ucyB8fCB7fVxuICB2YXIgc2luZ2xlID0gc2V0dGluZ3Muc2luZ2xlVGlsZGVcbiAgdmFyIHRva2VuaXplciA9IHtcbiAgICB0b2tlbml6ZTogdG9rZW5pemVTdHJpa2V0aHJvdWdoLFxuICAgIHJlc29sdmVBbGw6IHJlc29sdmVBbGxTdHJpa2V0aHJvdWdoXG4gIH1cblxuICBpZiAoc2luZ2xlID09PSBudWxsIHx8IHNpbmdsZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgc2luZ2xlID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIHt0ZXh0OiB7MTI2OiB0b2tlbml6ZXJ9LCBpbnNpZGVTcGFuOiB7bnVsbDogdG9rZW5pemVyfX1cblxuICAvLyBUYWtlIGV2ZW50cyBhbmQgcmVzb2x2ZSBzdHJpa2V0aHJvdWdoLlxuICBmdW5jdGlvbiByZXNvbHZlQWxsU3RyaWtldGhyb3VnaChldmVudHMsIGNvbnRleHQpIHtcbiAgICB2YXIgaW5kZXggPSAtMVxuICAgIHZhciBzdHJpa2V0aHJvdWdoXG4gICAgdmFyIHRleHRcbiAgICB2YXIgb3BlblxuICAgIHZhciBuZXh0RXZlbnRzXG5cbiAgICAvLyBXYWxrIHRocm91Z2ggYWxsIGV2ZW50cy5cbiAgICB3aGlsZSAoKytpbmRleCA8IGV2ZW50cy5sZW5ndGgpIHtcbiAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBjbG9zZS5cbiAgICAgIGlmIChcbiAgICAgICAgZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJyAmJlxuICAgICAgICBldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknICYmXG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0uX2Nsb3NlXG4gICAgICApIHtcbiAgICAgICAgb3BlbiA9IGluZGV4XG5cbiAgICAgICAgLy8gTm93IHdhbGsgYmFjayB0byBmaW5kIGFuIG9wZW5lci5cbiAgICAgICAgd2hpbGUgKG9wZW4tLSkge1xuICAgICAgICAgIC8vIEZpbmQgYSB0b2tlbiB0aGF0IGNhbiBvcGVuIHRoZSBjbG9zZXIuXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzBdID09PSAnZXhpdCcgJiZcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID09PSAnc3RyaWtldGhyb3VnaFNlcXVlbmNlVGVtcG9yYXJ5JyAmJlxuICAgICAgICAgICAgZXZlbnRzW29wZW5dWzFdLl9vcGVuICYmXG4gICAgICAgICAgICAvLyBJZiB0aGUgc2l6ZXMgYXJlIHRoZSBzYW1lOlxuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW2luZGV4XVsxXS5zdGFydC5vZmZzZXQgPT09XG4gICAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS5lbmQub2Zmc2V0IC0gZXZlbnRzW29wZW5dWzFdLnN0YXJ0Lm9mZnNldFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXZlbnRzW2luZGV4XVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcbiAgICAgICAgICAgIGV2ZW50c1tvcGVuXVsxXS50eXBlID0gJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZSdcblxuICAgICAgICAgICAgc3RyaWtldGhyb3VnaCA9IHtcbiAgICAgICAgICAgICAgdHlwZTogJ3N0cmlrZXRocm91Z2gnLFxuICAgICAgICAgICAgICBzdGFydDogc2hhbGxvdyhldmVudHNbb3Blbl1bMV0uc3RhcnQpLFxuICAgICAgICAgICAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2luZGV4XVsxXS5lbmQpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRleHQgPSB7XG4gICAgICAgICAgICAgIHR5cGU6ICdzdHJpa2V0aHJvdWdoVGV4dCcsXG4gICAgICAgICAgICAgIHN0YXJ0OiBzaGFsbG93KGV2ZW50c1tvcGVuXVsxXS5lbmQpLFxuICAgICAgICAgICAgICBlbmQ6IHNoYWxsb3coZXZlbnRzW2luZGV4XVsxXS5zdGFydClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3BlbmluZy5cbiAgICAgICAgICAgIG5leHRFdmVudHMgPSBbXG4gICAgICAgICAgICAgIFsnZW50ZXInLCBzdHJpa2V0aHJvdWdoLCBjb250ZXh0XSxcbiAgICAgICAgICAgICAgWydlbnRlcicsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tvcGVuXVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZW50ZXInLCB0ZXh0LCBjb250ZXh0XVxuICAgICAgICAgICAgXVxuXG4gICAgICAgICAgICAvLyBCZXR3ZWVuLlxuICAgICAgICAgICAgY2h1bmtlZFNwbGljZShcbiAgICAgICAgICAgICAgbmV4dEV2ZW50cyxcbiAgICAgICAgICAgICAgbmV4dEV2ZW50cy5sZW5ndGgsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIHJlc29sdmVBbGwoXG4gICAgICAgICAgICAgICAgY29udGV4dC5wYXJzZXIuY29uc3RydWN0cy5pbnNpZGVTcGFuLm51bGwsXG4gICAgICAgICAgICAgICAgZXZlbnRzLnNsaWNlKG9wZW4gKyAxLCBpbmRleCksXG4gICAgICAgICAgICAgICAgY29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vIENsb3NpbmcuXG4gICAgICAgICAgICBjaHVua2VkU3BsaWNlKG5leHRFdmVudHMsIG5leHRFdmVudHMubGVuZ3RoLCAwLCBbXG4gICAgICAgICAgICAgIFsnZXhpdCcsIHRleHQsIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2VudGVyJywgZXZlbnRzW2luZGV4XVsxXSwgY29udGV4dF0sXG4gICAgICAgICAgICAgIFsnZXhpdCcsIGV2ZW50c1tpbmRleF1bMV0sIGNvbnRleHRdLFxuICAgICAgICAgICAgICBbJ2V4aXQnLCBzdHJpa2V0aHJvdWdoLCBjb250ZXh0XVxuICAgICAgICAgICAgXSlcblxuICAgICAgICAgICAgY2h1bmtlZFNwbGljZShldmVudHMsIG9wZW4gLSAxLCBpbmRleCAtIG9wZW4gKyAzLCBuZXh0RXZlbnRzKVxuXG4gICAgICAgICAgICBpbmRleCA9IG9wZW4gKyBuZXh0RXZlbnRzLmxlbmd0aCAtIDJcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbW92ZVJlbWFpbmluZ1NlcXVlbmNlcyhldmVudHMpXG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVSZW1haW5pbmdTZXF1ZW5jZXMoZXZlbnRzKSB7XG4gICAgdmFyIGluZGV4ID0gLTFcbiAgICB2YXIgbGVuZ3RoID0gZXZlbnRzLmxlbmd0aFxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChldmVudHNbaW5kZXhdWzFdLnR5cGUgPT09ICdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKSB7XG4gICAgICAgIGV2ZW50c1tpbmRleF1bMV0udHlwZSA9ICdkYXRhJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBldmVudHNcbiAgfVxuXG4gIGZ1bmN0aW9uIHRva2VuaXplU3RyaWtldGhyb3VnaChlZmZlY3RzLCBvaywgbm9rKSB7XG4gICAgdmFyIHByZXZpb3VzID0gdGhpcy5wcmV2aW91c1xuICAgIHZhciBldmVudHMgPSB0aGlzLmV2ZW50c1xuICAgIHZhciBzaXplID0gMFxuXG4gICAgcmV0dXJuIHN0YXJ0XG5cbiAgICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNvZGUgIT09IDEyNiB8fFxuICAgICAgICAocHJldmlvdXMgPT09IDEyNiAmJlxuICAgICAgICAgIGV2ZW50c1tldmVudHMubGVuZ3RoIC0gMV1bMV0udHlwZSAhPT0gJ2NoYXJhY3RlckVzY2FwZScpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgfVxuXG4gICAgICBlZmZlY3RzLmVudGVyKCdzdHJpa2V0aHJvdWdoU2VxdWVuY2VUZW1wb3JhcnknKVxuICAgICAgcmV0dXJuIG1vcmUoY29kZSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtb3JlKGNvZGUpIHtcbiAgICAgIHZhciBiZWZvcmUgPSBjbGFzc2lmeUNoYXJhY3RlcihwcmV2aW91cylcbiAgICAgIHZhciB0b2tlblxuICAgICAgdmFyIGFmdGVyXG5cbiAgICAgIGlmIChjb2RlID09PSAxMjYpIHtcbiAgICAgICAgLy8gSWYgdGhpcyBpcyB0aGUgdGhpcmQgbWFya2VyLCBleGl0LlxuICAgICAgICBpZiAoc2l6ZSA+IDEpIHJldHVybiBub2soY29kZSlcbiAgICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICAgIHNpemUrK1xuICAgICAgICByZXR1cm4gbW9yZVxuICAgICAgfVxuXG4gICAgICBpZiAoc2l6ZSA8IDIgJiYgIXNpbmdsZSkgcmV0dXJuIG5vayhjb2RlKVxuICAgICAgdG9rZW4gPSBlZmZlY3RzLmV4aXQoJ3N0cmlrZXRocm91Z2hTZXF1ZW5jZVRlbXBvcmFyeScpXG4gICAgICBhZnRlciA9IGNsYXNzaWZ5Q2hhcmFjdGVyKGNvZGUpXG4gICAgICB0b2tlbi5fb3BlbiA9ICFhZnRlciB8fCAoYWZ0ZXIgPT09IDIgJiYgYmVmb3JlKVxuICAgICAgdG9rZW4uX2Nsb3NlID0gIWJlZm9yZSB8fCAoYmVmb3JlID09PSAyICYmIGFmdGVyKVxuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3ludGF4JylcbiIsImV4cG9ydHMuZmxvdyA9IHtcbiAgbnVsbDoge3Rva2VuaXplOiB0b2tlbml6ZVRhYmxlLCByZXNvbHZlOiByZXNvbHZlVGFibGUsIGludGVycnVwdGlibGU6IHRydWV9XG59XG5cbnZhciBjcmVhdGVTcGFjZSA9IHJlcXVpcmUoJ21pY3JvbWFyay9kaXN0L3Rva2VuaXplL2ZhY3Rvcnktc3BhY2UnKVxuXG52YXIgc2V0ZXh0VW5kZXJsaW5lTWluaSA9IHt0b2tlbml6ZTogdG9rZW5pemVTZXRleHRVbmRlcmxpbmVNaW5pLCBwYXJ0aWFsOiB0cnVlfVxudmFyIG5leHRQcmVmaXhlZE9yQmxhbmsgPSB7dG9rZW5pemU6IHRva2VuaXplTmV4dFByZWZpeGVkT3JCbGFuaywgcGFydGlhbDogdHJ1ZX1cblxuZnVuY3Rpb24gcmVzb2x2ZVRhYmxlKGV2ZW50cywgY29udGV4dCkge1xuICB2YXIgbGVuZ3RoID0gZXZlbnRzLmxlbmd0aFxuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgdG9rZW5cbiAgdmFyIGluSGVhZFxuICB2YXIgaW5EZWxpbWl0ZXJSb3dcbiAgdmFyIGluUm93XG4gIHZhciBjZWxsXG4gIHZhciBjb250ZW50XG4gIHZhciB0ZXh0XG4gIHZhciBjb250ZW50U3RhcnRcbiAgdmFyIGNvbnRlbnRFbmRcbiAgdmFyIGNlbGxTdGFydFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdG9rZW4gPSBldmVudHNbaW5kZXhdWzFdXG5cbiAgICBpZiAoaW5Sb3cpIHtcbiAgICAgIGlmICh0b2tlbi50eXBlID09PSAndGVtcG9yYXJ5VGFibGVDZWxsQ29udGVudCcpIHtcbiAgICAgICAgY29udGVudFN0YXJ0ID0gY29udGVudFN0YXJ0IHx8IGluZGV4XG4gICAgICAgIGNvbnRlbnRFbmQgPSBpbmRleFxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIC8vIENvbWJpbmUgc2VwYXJhdGUgY29udGVudCBwYXJ0cyBpbnRvIG9uZS5cbiAgICAgICAgKHRva2VuLnR5cGUgPT09ICd0YWJsZUNlbGxEaXZpZGVyJyB8fCB0b2tlbi50eXBlID09PSAndGFibGVSb3cnKSAmJlxuICAgICAgICBjb250ZW50RW5kXG4gICAgICApIHtcbiAgICAgICAgY29udGVudCA9IHtcbiAgICAgICAgICB0eXBlOiAndGFibGVDb250ZW50JyxcbiAgICAgICAgICBzdGFydDogZXZlbnRzW2NvbnRlbnRTdGFydF1bMV0uc3RhcnQsXG4gICAgICAgICAgZW5kOiBldmVudHNbY29udGVudEVuZF1bMV0uZW5kXG4gICAgICAgIH1cbiAgICAgICAgdGV4dCA9IHtcbiAgICAgICAgICB0eXBlOiAnY2h1bmtUZXh0JyxcbiAgICAgICAgICBzdGFydDogY29udGVudC5zdGFydCxcbiAgICAgICAgICBlbmQ6IGNvbnRlbnQuZW5kLFxuICAgICAgICAgIGNvbnRlbnRUeXBlOiAndGV4dCdcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50cy5zcGxpY2UoXG4gICAgICAgICAgY29udGVudFN0YXJ0LFxuICAgICAgICAgIGNvbnRlbnRFbmQgLSBjb250ZW50U3RhcnQgKyAxLFxuICAgICAgICAgIFsnZW50ZXInLCBjb250ZW50LCBjb250ZXh0XSxcbiAgICAgICAgICBbJ2VudGVyJywgdGV4dCwgY29udGV4dF0sXG4gICAgICAgICAgWydleGl0JywgdGV4dCwgY29udGV4dF0sXG4gICAgICAgICAgWydleGl0JywgY29udGVudCwgY29udGV4dF1cbiAgICAgICAgKVxuICAgICAgICBpbmRleCAtPSBjb250ZW50RW5kIC0gY29udGVudFN0YXJ0IC0gM1xuICAgICAgICBsZW5ndGggPSBldmVudHMubGVuZ3RoXG4gICAgICAgIGNvbnRlbnRTdGFydCA9IHVuZGVmaW5lZFxuICAgICAgICBjb250ZW50RW5kID0gdW5kZWZpbmVkXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgZXZlbnRzW2luZGV4XVswXSA9PT0gJ2V4aXQnICYmXG4gICAgICBjZWxsU3RhcnQgJiZcbiAgICAgIGNlbGxTdGFydCArIDEgPCBpbmRleCAmJlxuICAgICAgKHRva2VuLnR5cGUgPT09ICd0YWJsZUNlbGxEaXZpZGVyJyB8fFxuICAgICAgICAodG9rZW4udHlwZSA9PT0gJ3RhYmxlUm93JyAmJlxuICAgICAgICAgIChjZWxsU3RhcnQgKyAzIDwgaW5kZXggfHxcbiAgICAgICAgICAgIGV2ZW50c1tjZWxsU3RhcnRdWzFdLnR5cGUgIT09ICd3aGl0ZXNwYWNlJykpKVxuICAgICkge1xuICAgICAgY2VsbCA9IHtcbiAgICAgICAgdHlwZTogaW5EZWxpbWl0ZXJSb3dcbiAgICAgICAgICA/ICd0YWJsZURlbGltaXRlcidcbiAgICAgICAgICA6IGluSGVhZFxuICAgICAgICAgID8gJ3RhYmxlSGVhZGVyJ1xuICAgICAgICAgIDogJ3RhYmxlRGF0YScsXG4gICAgICAgIHN0YXJ0OiBldmVudHNbY2VsbFN0YXJ0XVsxXS5zdGFydCxcbiAgICAgICAgZW5kOiBldmVudHNbaW5kZXhdWzFdLmVuZFxuICAgICAgfVxuICAgICAgZXZlbnRzLnNwbGljZShpbmRleCArICh0b2tlbi50eXBlID09PSAndGFibGVDZWxsRGl2aWRlcicgPyAxIDogMCksIDAsIFtcbiAgICAgICAgJ2V4aXQnLFxuICAgICAgICBjZWxsLFxuICAgICAgICBjb250ZXh0XG4gICAgICBdKVxuICAgICAgZXZlbnRzLnNwbGljZShjZWxsU3RhcnQsIDAsIFsnZW50ZXInLCBjZWxsLCBjb250ZXh0XSlcbiAgICAgIGluZGV4ICs9IDJcbiAgICAgIGxlbmd0aCA9IGV2ZW50cy5sZW5ndGhcbiAgICAgIGNlbGxTdGFydCA9IGluZGV4ICsgMVxuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAndGFibGVSb3cnKSB7XG4gICAgICBpblJvdyA9IGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcidcblxuICAgICAgaWYgKGluUm93KSB7XG4gICAgICAgIGNlbGxTdGFydCA9IGluZGV4ICsgMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAndGFibGVEZWxpbWl0ZXJSb3cnKSB7XG4gICAgICBpbkRlbGltaXRlclJvdyA9IGV2ZW50c1tpbmRleF1bMF0gPT09ICdlbnRlcidcblxuICAgICAgaWYgKGluRGVsaW1pdGVyUm93KSB7XG4gICAgICAgIGNlbGxTdGFydCA9IGluZGV4ICsgMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b2tlbi50eXBlID09PSAndGFibGVIZWFkJykge1xuICAgICAgaW5IZWFkID0gZXZlbnRzW2luZGV4XVswXSA9PT0gJ2VudGVyJ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBldmVudHNcbn1cblxuZnVuY3Rpb24gdG9rZW5pemVUYWJsZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBhbGlnbiA9IFtdXG4gIHZhciB0YWJsZUhlYWRlckNvdW50ID0gMFxuICB2YXIgc2VlbkRlbGltaXRlclxuICB2YXIgaGFzRGFzaFxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgLSB1c2VkIHRvIGJlIHBhc3NlZCBpbiBiZXRhIG1pY3JvbWFyayB2ZXJzaW9ucy4gKi9cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSAtNSB8fCBjb2RlID09PSAtNCB8fCBjb2RlID09PSAtMykge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlJykuX2FsaWduID0gYWxpZ25cbiAgICBlZmZlY3RzLmVudGVyKCd0YWJsZUhlYWQnKVxuICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlUm93JylcblxuICAgIC8vIElmIHdlIHN0YXJ0IHdpdGggYSBwaXBlLCB3ZSBvcGVuIGEgY2VsbCBtYXJrZXIuXG4gICAgaWYgKGNvZGUgPT09IDEyNCkge1xuICAgICAgcmV0dXJuIGNlbGxEaXZpZGVySGVhZChjb2RlKVxuICAgIH1cblxuICAgIHRhYmxlSGVhZGVyQ291bnQrK1xuICAgIGVmZmVjdHMuZW50ZXIoJ3RlbXBvcmFyeVRhYmxlQ2VsbENvbnRlbnQnKVxuICAgIC8vIENhbuKAmXQgYmUgc3BhY2Ugb3IgZW9scyBhdCB0aGUgc3RhcnQgb2YgYSBjb25zdHJ1Y3QsIHNvIHdl4oCZcmUgaW4gYSBjZWxsLlxuICAgIHJldHVybiBpbkNlbGxDb250ZW50SGVhZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gY2VsbERpdmlkZXJIZWFkKGNvZGUpIHtcbiAgICAvLyBBbHdheXMgYSBwaXBlLlxuICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlQ2VsbERpdmlkZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgndGFibGVDZWxsRGl2aWRlcicpXG4gICAgc2VlbkRlbGltaXRlciA9IHRydWVcbiAgICByZXR1cm4gY2VsbEJyZWFrSGVhZFxuICB9XG5cbiAgZnVuY3Rpb24gY2VsbEJyZWFrSGVhZChjb2RlKSB7XG4gICAgLy8gRU9GLCBDUiwgTEYsIENSTEYuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gLTUgfHwgY29kZSA9PT0gLTQgfHwgY29kZSA9PT0gLTMpIHtcbiAgICAgIHJldHVybiBhdFJvd0VuZEhlYWQoY29kZSlcbiAgICB9XG5cbiAgICAvLyBIVCwgVlMsIFNQLlxuICAgIGlmIChjb2RlID09PSAtMiB8fCBjb2RlID09PSAtMSB8fCBjb2RlID09PSAzMikge1xuICAgICAgZWZmZWN0cy5lbnRlcignd2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbldoaXRlc3BhY2VIZWFkXG4gICAgfVxuXG4gICAgaWYgKHNlZW5EZWxpbWl0ZXIpIHtcbiAgICAgIHNlZW5EZWxpbWl0ZXIgPSB1bmRlZmluZWRcbiAgICAgIHRhYmxlSGVhZGVyQ291bnQrK1xuICAgIH1cblxuICAgIC8vIGB8YFxuICAgIGlmIChjb2RlID09PSAxMjQpIHtcbiAgICAgIHJldHVybiBjZWxsRGl2aWRlckhlYWQoY29kZSlcbiAgICB9XG5cbiAgICAvLyBBbnl0aGluZyBlbHNlIGlzIGNlbGwgY29udGVudC5cbiAgICBlZmZlY3RzLmVudGVyKCd0ZW1wb3JhcnlUYWJsZUNlbGxDb250ZW50JylcbiAgICByZXR1cm4gaW5DZWxsQ29udGVudEhlYWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluV2hpdGVzcGFjZUhlYWQoY29kZSkge1xuICAgIC8vIEhULCBWUywgU1AuXG4gICAgaWYgKGNvZGUgPT09IC0yIHx8IGNvZGUgPT09IC0xIHx8IGNvZGUgPT09IDMyKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbldoaXRlc3BhY2VIZWFkXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCd3aGl0ZXNwYWNlJylcbiAgICByZXR1cm4gY2VsbEJyZWFrSGVhZChjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gaW5DZWxsQ29udGVudEhlYWQoY29kZSkge1xuICAgIC8vIEVPRiwgd2hpdGVzcGFjZSwgcGlwZVxuICAgIGlmIChjb2RlID09PSBudWxsIHx8IGNvZGUgPCAwIHx8IGNvZGUgPT09IDMyIHx8IGNvZGUgPT09IDEyNCkge1xuICAgICAgZWZmZWN0cy5leGl0KCd0ZW1wb3JhcnlUYWJsZUNlbGxDb250ZW50JylcbiAgICAgIHJldHVybiBjZWxsQnJlYWtIZWFkKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgLy8gYFxcYFxuICAgIHJldHVybiBjb2RlID09PSA5MiA/IGluQ2VsbENvbnRlbnRFc2NhcGVIZWFkIDogaW5DZWxsQ29udGVudEhlYWRcbiAgfVxuXG4gIGZ1bmN0aW9uIGluQ2VsbENvbnRlbnRFc2NhcGVIZWFkKGNvZGUpIHtcbiAgICAvLyBgXFxgIG9yIGB8YFxuICAgIGlmIChjb2RlID09PSA5MiB8fCBjb2RlID09PSAxMjQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluQ2VsbENvbnRlbnRIZWFkXG4gICAgfVxuXG4gICAgLy8gQW55dGhpbmcgZWxzZS5cbiAgICByZXR1cm4gaW5DZWxsQ29udGVudEhlYWQoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGF0Um93RW5kSGVhZChjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmV4aXQoJ3RhYmxlUm93JylcbiAgICBlZmZlY3RzLmV4aXQoJ3RhYmxlSGVhZCcpXG5cbiAgICAvLyBBbHdheXMgYSBsaW5lIGVuZGluZy5cbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuXG4gICAgLy8gSWYgYSBzZXRleHQgaGVhZGluZywgZXhpdC5cbiAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhcbiAgICAgIHNldGV4dFVuZGVybGluZU1pbmksXG4gICAgICBub2ssXG4gICAgICAvLyBTdXBwb3J0IGFuIGluZGVudCBiZWZvcmUgdGhlIGRlbGltaXRlciByb3cuXG4gICAgICBjcmVhdGVTcGFjZShlZmZlY3RzLCByb3dTdGFydERlbGltaXRlciwgJ2xpbmVQcmVmaXgnLCA0KVxuICAgIClcbiAgfVxuXG4gIGZ1bmN0aW9uIHJvd1N0YXJ0RGVsaW1pdGVyKGNvZGUpIHtcbiAgICAvLyBJZiB0aGVyZeKAmXMgYW5vdGhlciBzcGFjZSwgb3Igd2XigJlyZSBhdCB0aGUgRU9ML0VPRiwgZXhpdC5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlIDwgMCB8fCBjb2RlID09PSAzMikge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlRGVsaW1pdGVyUm93JylcbiAgICByZXR1cm4gYXREZWxpbWl0ZXJSb3dCcmVhayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYXREZWxpbWl0ZXJSb3dCcmVhayhjb2RlKSB7XG4gICAgLy8gRU9GLCBDUiwgTEYsIENSTEYuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gLTUgfHwgY29kZSA9PT0gLTQgfHwgY29kZSA9PT0gLTMpIHtcbiAgICAgIHJldHVybiByb3dFbmREZWxpbWl0ZXIoY29kZSlcbiAgICB9XG5cbiAgICAvLyBIVCwgVlMsIFNQLlxuICAgIGlmIChjb2RlID09PSAtMiB8fCBjb2RlID09PSAtMSB8fCBjb2RlID09PSAzMikge1xuICAgICAgZWZmZWN0cy5lbnRlcignd2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbldoaXRlc3BhY2VEZWxpbWl0ZXJcbiAgICB9XG5cbiAgICAvLyBgLWBcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlRGVsaW1pdGVyRmlsbGVyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgaGFzRGFzaCA9IHRydWVcbiAgICAgIGFsaWduLnB1c2gobnVsbClcbiAgICAgIHJldHVybiBpbkZpbGxlckRlbGltaXRlclxuICAgIH1cblxuICAgIC8vIGA6YFxuICAgIGlmIChjb2RlID09PSA1OCkge1xuICAgICAgZWZmZWN0cy5lbnRlcigndGFibGVEZWxpbWl0ZXJBbGlnbm1lbnQnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3RhYmxlRGVsaW1pdGVyQWxpZ25tZW50JylcbiAgICAgIGFsaWduLnB1c2goJ2xlZnQnKVxuICAgICAgcmV0dXJuIGFmdGVyTGVmdEFsaWdubWVudFxuICAgIH1cblxuICAgIC8vIElmIHdlIHN0YXJ0IHdpdGggYSBwaXBlLCB3ZSBvcGVuIGEgY2VsbCBtYXJrZXIuXG4gICAgaWYgKGNvZGUgPT09IDEyNCkge1xuICAgICAgZWZmZWN0cy5lbnRlcigndGFibGVDZWxsRGl2aWRlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFibGVDZWxsRGl2aWRlcicpXG4gICAgICByZXR1cm4gYXREZWxpbWl0ZXJSb3dCcmVha1xuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluV2hpdGVzcGFjZURlbGltaXRlcihjb2RlKSB7XG4gICAgLy8gSFQsIFZTLCBTUC5cbiAgICBpZiAoY29kZSA9PT0gLTIgfHwgY29kZSA9PT0gLTEgfHwgY29kZSA9PT0gMzIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluV2hpdGVzcGFjZURlbGltaXRlclxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnd2hpdGVzcGFjZScpXG4gICAgcmV0dXJuIGF0RGVsaW1pdGVyUm93QnJlYWsoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluRmlsbGVyRGVsaW1pdGVyKGNvZGUpIHtcbiAgICAvLyBgLWBcbiAgICBpZiAoY29kZSA9PT0gNDUpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluRmlsbGVyRGVsaW1pdGVyXG4gICAgfVxuXG4gICAgZWZmZWN0cy5leGl0KCd0YWJsZURlbGltaXRlckZpbGxlcicpXG5cbiAgICAvLyBgOmBcbiAgICBpZiAoY29kZSA9PT0gNTgpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlRGVsaW1pdGVyQWxpZ25tZW50JylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCd0YWJsZURlbGltaXRlckFsaWdubWVudCcpXG5cbiAgICAgIGFsaWduW2FsaWduLmxlbmd0aCAtIDFdID1cbiAgICAgICAgYWxpZ25bYWxpZ24ubGVuZ3RoIC0gMV0gPT09ICdsZWZ0JyA/ICdjZW50ZXInIDogJ3JpZ2h0J1xuXG4gICAgICByZXR1cm4gYWZ0ZXJSaWdodEFsaWdubWVudFxuICAgIH1cblxuICAgIHJldHVybiBhdERlbGltaXRlclJvd0JyZWFrKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhZnRlckxlZnRBbGlnbm1lbnQoY29kZSkge1xuICAgIC8vIGAtYFxuICAgIGlmIChjb2RlID09PSA0NSkge1xuICAgICAgZWZmZWN0cy5lbnRlcigndGFibGVEZWxpbWl0ZXJGaWxsZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBoYXNEYXNoID0gdHJ1ZVxuICAgICAgcmV0dXJuIGluRmlsbGVyRGVsaW1pdGVyXG4gICAgfVxuXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpcyBub3Qgb2suXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gYWZ0ZXJSaWdodEFsaWdubWVudChjb2RlKSB7XG4gICAgLy8gRU9GLCBDUiwgTEYsIENSTEYuXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA9PT0gLTUgfHwgY29kZSA9PT0gLTQgfHwgY29kZSA9PT0gLTMpIHtcbiAgICAgIHJldHVybiByb3dFbmREZWxpbWl0ZXIoY29kZSlcbiAgICB9XG5cbiAgICAvLyBIVCwgVlMsIFNQLlxuICAgIGlmIChjb2RlID09PSAtMiB8fCBjb2RlID09PSAtMSB8fCBjb2RlID09PSAzMikge1xuICAgICAgZWZmZWN0cy5lbnRlcignd2hpdGVzcGFjZScpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbldoaXRlc3BhY2VEZWxpbWl0ZXJcbiAgICB9XG5cbiAgICAvLyBgfGBcbiAgICBpZiAoY29kZSA9PT0gMTI0KSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0YWJsZUNlbGxEaXZpZGVyJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCd0YWJsZUNlbGxEaXZpZGVyJylcbiAgICAgIHJldHVybiBhdERlbGltaXRlclJvd0JyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gcm93RW5kRGVsaW1pdGVyKGNvZGUpIHtcbiAgICBlZmZlY3RzLmV4aXQoJ3RhYmxlRGVsaW1pdGVyUm93JylcblxuICAgIC8vIEV4aXQgaWYgdGhlcmUgd2FzIG5vIGRhc2ggYXQgYWxsLCBvciBpZiB0aGUgaGVhZGVyIGNlbGwgY291bnQgaXMgbm90IHRoZVxuICAgIC8vIGRlbGltaXRlciBjZWxsIGNvdW50LlxuICAgIGlmICghaGFzRGFzaCB8fCB0YWJsZUhlYWRlckNvdW50ICE9PSBhbGlnbi5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBub2soY29kZSlcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRhYmxlQ2xvc2UoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gZWZmZWN0cy5jaGVjayhuZXh0UHJlZml4ZWRPckJsYW5rLCB0YWJsZUNsb3NlLCB0YWJsZUNvbnRpbnVlKShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gdGFibGVDbG9zZShjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCd0YWJsZScpXG4gICAgcmV0dXJuIG9rKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWJsZUNvbnRpbnVlKGNvZGUpIHtcbiAgICAvLyBBbHdheXMgYSBsaW5lIGVuZGluZy5cbiAgICBlZmZlY3RzLmVudGVyKCdsaW5lRW5kaW5nJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ2xpbmVFbmRpbmcnKVxuICAgIC8vIFdlIGNoZWNrZWQgdGhhdCBpdOKAmXMgbm90IGEgcHJlZml4ZWQgb3IgYmxhbmsgbGluZSwgc28gd2XigJlyZSBjZXJ0YWluIGFcbiAgICAvLyBib2R5IGlzIGNvbWluZywgdGhvdWdoIGl0IG1heSBiZSBpbmRlbnRlZC5cbiAgICByZXR1cm4gY3JlYXRlU3BhY2UoZWZmZWN0cywgYm9keVN0YXJ0LCAnbGluZVByZWZpeCcsIDQpXG4gIH1cblxuICBmdW5jdGlvbiBib2R5U3RhcnQoY29kZSkge1xuICAgIGVmZmVjdHMuZW50ZXIoJ3RhYmxlQm9keScpXG4gICAgcmV0dXJuIHJvd1N0YXJ0Qm9keShjb2RlKVxuICB9XG5cbiAgZnVuY3Rpb24gcm93U3RhcnRCb2R5KGNvZGUpIHtcbiAgICBlZmZlY3RzLmVudGVyKCd0YWJsZVJvdycpXG5cbiAgICAvLyBJZiB3ZSBzdGFydCB3aXRoIGEgcGlwZSwgd2Ugb3BlbiBhIGNlbGwgbWFya2VyLlxuICAgIGlmIChjb2RlID09PSAxMjQpIHtcbiAgICAgIHJldHVybiBjZWxsRGl2aWRlckJvZHkoY29kZSlcbiAgICB9XG5cbiAgICBlZmZlY3RzLmVudGVyKCd0ZW1wb3JhcnlUYWJsZUNlbGxDb250ZW50JylcbiAgICAvLyBDYW7igJl0IGJlIHNwYWNlIG9yIGVvbHMgYXQgdGhlIHN0YXJ0IG9mIGEgY29uc3RydWN0LCBzbyB3ZeKAmXJlIGluIGEgY2VsbC5cbiAgICByZXR1cm4gaW5DZWxsQ29udGVudEJvZHkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNlbGxEaXZpZGVyQm9keShjb2RlKSB7XG4gICAgLy8gQWx3YXlzIGEgcGlwZS5cbiAgICBlZmZlY3RzLmVudGVyKCd0YWJsZUNlbGxEaXZpZGVyJylcbiAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICBlZmZlY3RzLmV4aXQoJ3RhYmxlQ2VsbERpdmlkZXInKVxuICAgIHJldHVybiBjZWxsQnJlYWtCb2R5XG4gIH1cblxuICBmdW5jdGlvbiBjZWxsQnJlYWtCb2R5KGNvZGUpIHtcbiAgICAvLyBFT0YsIENSLCBMRiwgQ1JMRi5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSAtNSB8fCBjb2RlID09PSAtNCB8fCBjb2RlID09PSAtMykge1xuICAgICAgcmV0dXJuIGF0Um93RW5kQm9keShjb2RlKVxuICAgIH1cblxuICAgIC8vIEhULCBWUywgU1AuXG4gICAgaWYgKGNvZGUgPT09IC0yIHx8IGNvZGUgPT09IC0xIHx8IGNvZGUgPT09IDMyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd3aGl0ZXNwYWNlJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIGluV2hpdGVzcGFjZUJvZHlcbiAgICB9XG5cbiAgICAvLyBgfGBcbiAgICBpZiAoY29kZSA9PT0gMTI0KSB7XG4gICAgICByZXR1cm4gY2VsbERpdmlkZXJCb2R5KGNvZGUpXG4gICAgfVxuXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpcyBjZWxsIGNvbnRlbnQuXG4gICAgZWZmZWN0cy5lbnRlcigndGVtcG9yYXJ5VGFibGVDZWxsQ29udGVudCcpXG4gICAgcmV0dXJuIGluQ2VsbENvbnRlbnRCb2R5KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBpbldoaXRlc3BhY2VCb2R5KGNvZGUpIHtcbiAgICAvLyBIVCwgVlMsIFNQLlxuICAgIGlmIChjb2RlID09PSAtMiB8fCBjb2RlID09PSAtMSB8fCBjb2RlID09PSAzMikge1xuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICByZXR1cm4gaW5XaGl0ZXNwYWNlQm9keVxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCgnd2hpdGVzcGFjZScpXG4gICAgcmV0dXJuIGNlbGxCcmVha0JvZHkoY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGluQ2VsbENvbnRlbnRCb2R5KGNvZGUpIHtcbiAgICAvLyBFT0YsIHdoaXRlc3BhY2UsIHBpcGVcbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlIDwgMCB8fCBjb2RlID09PSAzMiB8fCBjb2RlID09PSAxMjQpIHtcbiAgICAgIGVmZmVjdHMuZXhpdCgndGVtcG9yYXJ5VGFibGVDZWxsQ29udGVudCcpXG4gICAgICByZXR1cm4gY2VsbEJyZWFrQm9keShjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIC8vIGBcXGBcbiAgICByZXR1cm4gY29kZSA9PT0gOTIgPyBpbkNlbGxDb250ZW50RXNjYXBlQm9keSA6IGluQ2VsbENvbnRlbnRCb2R5XG4gIH1cblxuICBmdW5jdGlvbiBpbkNlbGxDb250ZW50RXNjYXBlQm9keShjb2RlKSB7XG4gICAgLy8gYFxcYCBvciBgfGBcbiAgICBpZiAoY29kZSA9PT0gOTIgfHwgY29kZSA9PT0gMTI0KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBpbkNlbGxDb250ZW50Qm9keVxuICAgIH1cblxuICAgIC8vIEFueXRoaW5nIGVsc2UuXG4gICAgcmV0dXJuIGluQ2VsbENvbnRlbnRCb2R5KGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBhdFJvd0VuZEJvZHkoY29kZSkge1xuICAgIGVmZmVjdHMuZXhpdCgndGFibGVSb3cnKVxuXG4gICAgaWYgKGNvZGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0YWJsZUJvZHlDbG9zZShjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKFxuICAgICAgbmV4dFByZWZpeGVkT3JCbGFuayxcbiAgICAgIHRhYmxlQm9keUNsb3NlLFxuICAgICAgdGFibGVCb2R5Q29udGludWVcbiAgICApKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWJsZUJvZHlDbG9zZShjb2RlKSB7XG4gICAgZWZmZWN0cy5leGl0KCd0YWJsZUJvZHknKVxuICAgIHJldHVybiB0YWJsZUNsb3NlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB0YWJsZUJvZHlDb250aW51ZShjb2RlKSB7XG4gICAgLy8gQWx3YXlzIGEgbGluZSBlbmRpbmcuXG4gICAgZWZmZWN0cy5lbnRlcignbGluZUVuZGluZycpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KCdsaW5lRW5kaW5nJylcbiAgICAvLyBTdXBwb3J0IGFuIG9wdGlvbmFsIHByZWZpeCwgdGhlbiBzdGFydCBhIGJvZHkgcm93LlxuICAgIHJldHVybiBjcmVhdGVTcGFjZShlZmZlY3RzLCByb3dTdGFydEJvZHksICdsaW5lUHJlZml4JywgNClcbiAgfVxufVxuXG4vLyBCYXNlZCBvbiBtaWNyb21hcmssIGJ1dCB0aGF0IHdvbuKAmXQgd29yayBhcyB3ZeKAmXJlIGluIGEgdGFibGUsIGFuZCB0aGF0IGV4cGVjdHNcbi8vIGNvbnRlbnQuXG4vLyA8aHR0cHM6Ly9naXRodWIuY29tL21pY3JvbWFyay9taWNyb21hcmsvYmxvYi9tYWluL2xpYi90b2tlbml6ZS9zZXRleHQtdW5kZXJsaW5lLmpzPlxuZnVuY3Rpb24gdG9rZW5pemVTZXRleHRVbmRlcmxpbmVNaW5pKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIHN0YXJ0XG5cbiAgZnVuY3Rpb24gc3RhcnQoY29kZSkge1xuICAgIC8vIGAtYFxuICAgIGlmIChjb2RlICE9PSA0NSkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ3NldGV4dFVuZGVybGluZScpXG4gICAgcmV0dXJuIHNlcXVlbmNlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiBzZXF1ZW5jZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IDQ1KSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHJldHVybiBzZXF1ZW5jZVxuICAgIH1cblxuICAgIHJldHVybiB3aGl0ZXNwYWNlKGNvZGUpXG4gIH1cblxuICBmdW5jdGlvbiB3aGl0ZXNwYWNlKGNvZGUpIHtcbiAgICBpZiAoY29kZSA9PT0gLTIgfHwgY29kZSA9PT0gLTEgfHwgY29kZSA9PT0gMzIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHdoaXRlc3BhY2VcbiAgICB9XG5cbiAgICBpZiAoY29kZSA9PT0gbnVsbCB8fCBjb2RlID09PSAtNSB8fCBjb2RlID09PSAtNCB8fCBjb2RlID09PSAtMykge1xuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHRva2VuaXplTmV4dFByZWZpeGVkT3JCbGFuayhlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzaXplID0gMFxuXG4gIHJldHVybiBzdGFydFxuXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICAvLyBUaGlzIGlzIGEgY2hlY2ssIHNvIHdlIGRvbuKAmXQgY2FyZSBhYm91dCB0b2tlbnMsIGJ1dCB3ZSBvcGVuIGEgYm9ndXMgb25lXG4gICAgLy8gc28gd2XigJlyZSB2YWxpZC5cbiAgICBlZmZlY3RzLmVudGVyKCdjaGVjaycpXG4gICAgLy8gRU9MLlxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIHJldHVybiB3aGl0ZXNwYWNlXG4gIH1cblxuICBmdW5jdGlvbiB3aGl0ZXNwYWNlKGNvZGUpIHtcbiAgICAvLyBWUyBvciBTUC5cbiAgICBpZiAoY29kZSA9PT0gLTEgfHwgY29kZSA9PT0gMzIpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgc2l6ZSsrXG4gICAgICByZXR1cm4gc2l6ZSA9PT0gNCA/IG9rIDogd2hpdGVzcGFjZVxuICAgIH1cblxuICAgIC8vIEVPRiBvciB3aGl0ZXNwYWNlXG4gICAgaWYgKGNvZGUgPT09IG51bGwgfHwgY29kZSA8IDApIHtcbiAgICAgIHJldHVybiBvayhjb2RlKVxuICAgIH1cblxuICAgIC8vIEFueXRoaW5nIGVsc2UuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3ludGF4JylcbiIsInZhciBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvY2hhcmFjdGVyL21hcmtkb3duLWxpbmUtZW5kaW5nLW9yLXNwYWNlJylcbnZhciBzcGFjZUZhY3RvcnkgPSByZXF1aXJlKCdtaWNyb21hcmsvZGlzdC90b2tlbml6ZS9mYWN0b3J5LXNwYWNlJylcbnZhciBwcmVmaXhTaXplID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9wcmVmaXgtc2l6ZScpXG5cbnZhciB0YXNrbGlzdENoZWNrID0ge3Rva2VuaXplOiB0b2tlbml6ZVRhc2tsaXN0Q2hlY2t9XG5cbmV4cG9ydHMudGV4dCA9IHs5MTogdGFza2xpc3RDaGVja31cblxuZnVuY3Rpb24gdG9rZW5pemVUYXNrbGlzdENoZWNrKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG5cbiAgcmV0dXJuIG9wZW5cblxuICBmdW5jdGlvbiBvcGVuKGNvZGUpIHtcbiAgICBpZiAoXG4gICAgICAvLyBFeGl0IGlmIG5vdCBgW2AuXG4gICAgICBjb2RlICE9PSA5MSB8fFxuICAgICAgLy8gRXhpdCBpZiB0aGVyZeKAmXMgc3R1ZmYgYmVmb3JlLlxuICAgICAgc2VsZi5wcmV2aW91cyAhPT0gbnVsbCB8fFxuICAgICAgLy8gRXhpdCBpZiBub3QgaW4gdGhlIGZpcnN0IGNvbnRlbnQgdGhhdCBpcyB0aGUgZmlyc3QgY2hpbGQgb2YgYSBsaXN0XG4gICAgICAvLyBpdGVtLlxuICAgICAgIXNlbGYuX2dmbVRhc2tsaXN0Rmlyc3RDb250ZW50T2ZMaXN0SXRlbVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2snKVxuICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgcmV0dXJuIGluc2lkZVxuICB9XG5cbiAgZnVuY3Rpb24gaW5zaWRlKGNvZGUpIHtcbiAgICAvLyBUYWIgb3Igc3BhY2UuXG4gICAgaWYgKGNvZGUgPT09IC0yIHx8IGNvZGUgPT09IDMyKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0YXNrTGlzdENoZWNrVmFsdWVVbmNoZWNrZWQnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZVVuY2hlY2tlZCcpXG4gICAgICByZXR1cm4gY2xvc2VcbiAgICB9XG5cbiAgICAvLyBVcHBlci0gYW5kIGxvd2VyIGB4YC5cbiAgICBpZiAoY29kZSA9PT0gODggfHwgY29kZSA9PT0gMTIwKSB7XG4gICAgICBlZmZlY3RzLmVudGVyKCd0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkJylcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgZWZmZWN0cy5leGl0KCd0YXNrTGlzdENoZWNrVmFsdWVDaGVja2VkJylcbiAgICAgIHJldHVybiBjbG9zZVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlKGNvZGUpIHtcbiAgICAvLyBgXWBcbiAgICBpZiAoY29kZSA9PT0gOTMpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgICAgZWZmZWN0cy5leGl0KCd0YXNrTGlzdENoZWNrJylcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKHt0b2tlbml6ZTogc3BhY2VUaGVuTm9uU3BhY2V9LCBvaywgbm9rKVxuICAgIH1cblxuICAgIHJldHVybiBub2soY29kZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzcGFjZVRoZW5Ob25TcGFjZShlZmZlY3RzLCBvaywgbm9rKSB7XG4gIHZhciBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBzcGFjZUZhY3RvcnkoZWZmZWN0cywgYWZ0ZXIsICd3aGl0ZXNwYWNlJylcblxuICBmdW5jdGlvbiBhZnRlcihjb2RlKSB7XG4gICAgcmV0dXJuIHByZWZpeFNpemUoc2VsZi5ldmVudHMsICd3aGl0ZXNwYWNlJykgJiZcbiAgICAgIGNvZGUgIT09IG51bGwgJiZcbiAgICAgICFtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpXG4gICAgICA/IG9rKGNvZGUpXG4gICAgICA6IG5vayhjb2RlKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vc3ludGF4JylcbiIsInZhciBjb21iaW5lID0gcmVxdWlyZSgnbWljcm9tYXJrL2Rpc3QvdXRpbC9jb21iaW5lLWV4dGVuc2lvbnMnKVxudmFyIGF1dG9saW5rID0gcmVxdWlyZSgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tYXV0b2xpbmstbGl0ZXJhbCcpXG52YXIgc3RyaWtldGhyb3VnaCA9IHJlcXVpcmUoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gnKVxudmFyIHRhYmxlID0gcmVxdWlyZSgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFibGUnKVxudmFyIHRhc2tsaXN0ID0gcmVxdWlyZSgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZVxuXG5mdW5jdGlvbiBjcmVhdGUob3B0aW9ucykge1xuICByZXR1cm4gY29tYmluZShbYXV0b2xpbmssIHN0cmlrZXRocm91Z2gob3B0aW9ucyksIHRhYmxlLCB0YXNrbGlzdF0pXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHN5bnRheCA9IHJlcXVpcmUoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtJylcbnZhciBmcm9tTWFya2Rvd24gPSByZXF1aXJlKCdtZGFzdC11dGlsLWdmbS9mcm9tLW1hcmtkb3duJylcbnZhciB0b01hcmtkb3duID0gcmVxdWlyZSgnbWRhc3QtdXRpbC1nZm0vdG8tbWFya2Rvd24nKVxuXG52YXIgd2FybmluZ0lzc3VlZFxuXG5tb2R1bGUuZXhwb3J0cyA9IGdmbVxuXG5mdW5jdGlvbiBnZm0ob3B0aW9ucykge1xuICB2YXIgZGF0YSA9IHRoaXMuZGF0YSgpXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgLSBvbGQgcmVtYXJrLiAqL1xuICBpZiAoXG4gICAgIXdhcm5pbmdJc3N1ZWQgJiZcbiAgICAoKHRoaXMuUGFyc2VyICYmXG4gICAgICB0aGlzLlBhcnNlci5wcm90b3R5cGUgJiZcbiAgICAgIHRoaXMuUGFyc2VyLnByb3RvdHlwZS5ibG9ja1Rva2VuaXplcnMpIHx8XG4gICAgICAodGhpcy5Db21waWxlciAmJlxuICAgICAgICB0aGlzLkNvbXBpbGVyLnByb3RvdHlwZSAmJlxuICAgICAgICB0aGlzLkNvbXBpbGVyLnByb3RvdHlwZS52aXNpdG9ycykpXG4gICkge1xuICAgIHdhcm5pbmdJc3N1ZWQgPSB0cnVlXG4gICAgY29uc29sZS53YXJuKFxuICAgICAgJ1tyZW1hcmstZ2ZtXSBXYXJuaW5nOiBwbGVhc2UgdXBncmFkZSB0byByZW1hcmsgMTMgdG8gdXNlIHRoaXMgcGx1Z2luJ1xuICAgIClcbiAgfVxuXG4gIGFkZCgnbWljcm9tYXJrRXh0ZW5zaW9ucycsIHN5bnRheChvcHRpb25zKSlcbiAgYWRkKCdmcm9tTWFya2Rvd25FeHRlbnNpb25zJywgZnJvbU1hcmtkb3duKVxuICBhZGQoJ3RvTWFya2Rvd25FeHRlbnNpb25zJywgdG9NYXJrZG93bihvcHRpb25zKSlcblxuICBmdW5jdGlvbiBhZGQoZmllbGQsIHZhbHVlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmIC0gb3RoZXIgZXh0ZW5zaW9ucy4gKi9cbiAgICBpZiAoZGF0YVtmaWVsZF0pIGRhdGFbZmllbGRdLnB1c2godmFsdWUpXG4gICAgZWxzZSBkYXRhW2ZpZWxkXSA9IFt2YWx1ZV1cbiAgfVxufVxuIiwiLyohXG4gKiByZXBlYXQtc3RyaW5nIDxodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9yZXBlYXQtc3RyaW5nPlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNC0yMDE1LCBKb24gU2NobGlua2VydC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVzdWx0cyBjYWNoZVxuICovXG5cbnZhciByZXMgPSAnJztcbnZhciBjYWNoZTtcblxuLyoqXG4gKiBFeHBvc2UgYHJlcGVhdGBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcGVhdDtcblxuLyoqXG4gKiBSZXBlYXQgdGhlIGdpdmVuIGBzdHJpbmdgIHRoZSBzcGVjaWZpZWQgYG51bWJlcmBcbiAqIG9mIHRpbWVzLlxuICpcbiAqICoqRXhhbXBsZToqKlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVwZWF0ID0gcmVxdWlyZSgncmVwZWF0LXN0cmluZycpO1xuICogcmVwZWF0KCdBJywgNSk7XG4gKiAvLz0+IEFBQUFBXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYHN0cmluZ2AgVGhlIHN0cmluZyB0byByZXBlYXRcbiAqIEBwYXJhbSB7TnVtYmVyfSBgbnVtYmVyYCBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIHJlcGVhdCB0aGUgc3RyaW5nXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFJlcGVhdGVkIHN0cmluZ1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiByZXBlYXQoc3RyLCBudW0pIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIC8vIGNvdmVyIGNvbW1vbiwgcXVpY2sgdXNlIGNhc2VzXG4gIGlmIChudW0gPT09IDEpIHJldHVybiBzdHI7XG4gIGlmIChudW0gPT09IDIpIHJldHVybiBzdHIgKyBzdHI7XG5cbiAgdmFyIG1heCA9IHN0ci5sZW5ndGggKiBudW07XG4gIGlmIChjYWNoZSAhPT0gc3RyIHx8IHR5cGVvZiBjYWNoZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjYWNoZSA9IHN0cjtcbiAgICByZXMgPSAnJztcbiAgfSBlbHNlIGlmIChyZXMubGVuZ3RoID49IG1heCkge1xuICAgIHJldHVybiByZXMuc3Vic3RyKDAsIG1heCk7XG4gIH1cblxuICB3aGlsZSAobWF4ID4gcmVzLmxlbmd0aCAmJiBudW0gPiAxKSB7XG4gICAgaWYgKG51bSAmIDEpIHtcbiAgICAgIHJlcyArPSBzdHI7XG4gICAgfVxuXG4gICAgbnVtID4+PSAxO1xuICAgIHN0ciArPSBzdHI7XG4gIH1cblxuICByZXMgKz0gc3RyO1xuICByZXMgPSByZXMuc3Vic3RyKDAsIG1heCk7XG4gIHJldHVybiByZXM7XG59XG4iLCJpbXBvcnQgdW5pZmllZCBmcm9tICd1bmlmaWVkJztcbmltcG9ydCBtZHBhcnNlIGZyb20gJ3JlbWFyay1wYXJzZSc7XG5pbXBvcnQgZ2ZtIGZyb20gJ3JlbWFyay1nZm0nO1xuaW1wb3J0IHIyciBmcm9tICdyZW1hcmstcmVhY3QnO1xuaW1wb3J0IHtQcm9ncmFtSGVhZGVyLCBQcm9ncmFtU3ViSGVhZGVyfSBmcm9tICcuLi9jb21wb25lbnRzL01hcmtkb3duQ29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBwYXJzZU1hcmtkb3duVG9SZWFjdENvbXBvbmVudCA9IGFzeW5jIChtZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgdW5pZmllZCgpXG4gICAgICAgIC51c2UobWRwYXJzZSlcbiAgICAgICAgLnVzZShnZm0pXG4gICAgICAgIC51c2UocjJyLCB7XG4gICAgICAgICAgcmVtYXJrUmVhY3RDb21wb25lbnRzOiB7XG4gICAgICAgICAgICBoMTogUHJvZ3JhbUhlYWRlcixcbiAgICAgICAgICAgIGgyOiBQcm9ncmFtU3ViSGVhZGVyLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIC5wcm9jZXNzKG1kLCAoZXJyb3IsIGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc29sdmUoZGF0YS5yZXN1bHQpO1xuICAgICAgICB9KTtcbiAgfSk7XG59XG47XG4iXSwic291cmNlUm9vdCI6IiJ9