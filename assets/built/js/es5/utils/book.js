'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initBook = initBook;
exports.groupNodesByPage = groupNodesByPage;
exports.convertPercentageToPage = convertPercentageToPage;
exports.filterPages = filterPages;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _utils = require('utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// not pure, tell me if there's a bette way to do this
function initBook(bookId, actions, pageHeight) {
  return new Promise(function (resolve, reject) {
    var pages = (0, _utils.readCache)('book' + bookId + '_pages');

    if (pages) {
      actions.loadPages(JSON.parse(pages));
      actions.setBookMode('vertical');
      resolve(true);
    } else {
      actions.fetchBookContent(bookId, 'books/' + bookId + '/content').then(function (getState) {
        var nodes = parseHTML(getState().book.html);
        var nodeHeights = getNodeHeights('.pages ul>li>.content', actions);
        var pages = groupNodesByPage(nodes, nodeHeights, pageHeight);

        (0, _utils.saveCache)('book' + bookId + '_pages', JSON.stringify(pages));
        actions.loadPages(pages);
        resolve(true);
      }).catch(function (err) {
        console.log(err);
        reject(err);
      });
    }
  });
}

// the function with the most complexed algorithm
function groupNodesByPage(nodes, nodeHeights, pageHeight) {
  var pages = [];
  var pageNodes = [];
  var thisPageHeight = 0;
  var pageIndex = 0;

  // todos:
  // check long paragraph situation
  // add function cache
  function getPageOffset(pageIndex, nodeHeights, pageHeight) {
    var offset = 0;
    if (pageIndex !== 0) {
      var _i = 0;
      var nodeHeightSum = 0;
      while (nodeHeightSum < pageHeight * pageIndex) {
        nodeHeightSum += nodeHeights[_i];
        _i++;
      }
      offset = nodeHeightSum - nodeHeights[_i - 1] - pageIndex * pageHeight;
    }
    return offset;
  }

  for (var i = 0; i < nodes.length; i++) {
    thisPageHeight += nodeHeights[i];
    pageNodes.push(nodes[i]);
    nodes[i].props.index = i;

    var offset = getPageOffset(pageIndex, nodeHeights, pageHeight);

    if (thisPageHeight + offset > pageHeight || i === nodes.length - 1) {
      pages.push({
        props: {
          children: pageNodes,
          style: {
            top: pageIndex * pageHeight,
            position: 'absolute',
            height: pageHeight
          },
          pageNo: pageIndex + 1,
          offset: offset
        },
        type: "page"
      });

      pageIndex++;
      thisPageHeight = 0;
      pageNodes = [];
    }

    // add prev node
    if (pageIndex !== 0 && pageNodes.length === 0) {
      pageNodes.push(nodes[i]);
      thisPageHeight = nodeHeights[i];
    }
  }

  return pages;
}

function convertPercentageToPage(p, pageSum) {
  if (p > 1) {
    console.error("Wrong parameter!");
    return null;
  } else {
    return parseInt(p * pageSum) + 1;
  }
}

function filterPages(config) {
  var startPage = config.startPage;
  var quantity = config.quantity;
  var offset = config.offset;
  var pages = config.pages;

  var newPages = [];

  while (startPage - offset < 0) {
    offset--;
  }
  startPage = startPage - offset;

  for (var i = startPage; i < quantity + startPage && i < pages.length; i++) {
    var page = pages[i];
    newPages.push(page);
  }

  return newPages;
}

/*
 * functions being used internally
 */

function getNodeHeights(selector, actions) {
  actions.setBookMode('render');

  var nodes = document.querySelector(selector).childNodes;
  var nodesHeight = [];

  Array.prototype.forEach.call(nodes, function (node, index) {
    if (node.tagName.toLowerCase() !== "p") {
      console.error("Unsupported content found!");
    }
    nodesHeight.push(node.clientHeight);
  });

  actions.setBookMode('vertical');

  return nodesHeight;
}

function parseHTML(htmlString) {
  var nodes = [];
  var $html = (0, _jquery2.default)(htmlString);

  for (var i = 0; i < $html.length; i++) {
    if ($html[i].nodeType != 1) {
      continue;
    } else {
      nodes.push({
        type: $html[i].tagName.toLowerCase(),
        props: {
          children: $html[i].innerHTML
        }
      });
    }
  }
  return nodes;
}
