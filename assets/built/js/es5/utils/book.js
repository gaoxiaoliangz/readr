'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initBook = initBook;
exports.groupNodesByPage = groupNodesByPage;
exports.convertPercentageToPage = convertPercentageToPage;
exports.filterPages = filterPages;
exports.getProgress = getProgress;
exports.setProgress = setProgress;
exports.getView = getView;

var _utils = require('utils');

var _APIS = require('constants/APIS');

// import $ from 'jquery'
function initBook(bookId, actions, view) {
  var pageHeight = view.pageHeight;
  var pageWidth = view.pageWidth;
  var screen = view.screen;

  actions.setView(view);

  // the part I hate the most, a better approach may be applied
  function htmlToPages(html) {
    var nodes = parseHTML(html);
    var nodeHeights = getNodeHeights('.pages ul>li>.content', actions);
    var pages = groupNodesByPage(nodes, nodeHeights, pageHeight);

    return {
      type: 'pages',
      props: {
        children: pages,
        view: view
      }
    };
  }

  return new Promise(function (resolve, reject) {
    actions.wrap(function (dispatch, getState) {
      var pages = (0, _utils.getCache)('book' + bookId + '_pages');

      // check if pages are cached
      if (pages) {
        pages = JSON.parse(pages);

        // check if page view is the same as cached
        if (!compareObjects(view, pages.props.view)) {
          var i;

          (function () {
            // recaculate page 'cause view is not the same
            // let nodes = pages.props.children.reduce((a, b) => (Array.concat(a, b.props.children)),[])
            var nodes = pages.props.children.reduce(function (a, b) {
              return a.concat(b.props.children);
            }, []);
            var uniqueNodes = [];
            var realIndex = 0;

            // remove duplicate nodes
            for (i = 0; i < nodes.length; i++) {
              nodes[i];
              if (nodes[i].props.index === realIndex) {
                uniqueNodes.push(nodes[i]);
                realIndex++;
              }
            }

            var html = parseNodes(uniqueNodes);

            // loadHTML is not async, but only in this way setBookMode can work
            // still haven't figured out why this happens
            actions.promisedWrap(function (dispatch) {
              actions.loadHTML(html);
            }).then(function (getState) {
              pages = htmlToPages(html);
              actions.loadPages(pages);
              (0, _utils.setCache)('book' + bookId + '_pages', JSON.stringify(pages));

              resolve({ pages: pages });
            });
          })();
        } else {
          actions.loadPages(pages);
          actions.setBookMode('vertical');

          resolve({ pages: pages });
        }
      } else {
        // well, seems not, we have to fetch book content from the server then
        actions.fetchBookContent(bookId, 'books/' + bookId + '/content').then(function (getState) {
          var pages = htmlToPages(getState().book.html);

          actions.loadPages(pages);
          (0, _utils.setCache)('book' + bookId + '_pages', JSON.stringify(pages));

          resolve({ pages: pages });
        }).catch(function (err) {
          console.error(err);

          reject(err);
        });
      }
    });
  });
}

function groupNodesByPage(nodes, nodeHeights, pageHeight) {
  var pages = [];
  var pageHeightSum = nodeHeights.reduce(function (a, b) {
    return a + b;
  }, 0);
  var pageSum = Math.ceil(pageHeightSum / pageHeight);

  nodes = nodes.map(function (node, index) {
    node.props.index = index;
    return node;
  });

  // long paragraph situation doesn't seem to affect this function
  // offset distance is always negtive or zero
  // the index will be of the paragraph with this offset at the end
  var getPageOffset = function getPageOffset(pageIndex) {
    var offset = 0;
    var i = 0;
    var index = void 0;

    if (pageIndex !== 0) {
      var nodeHeightSum = 0;
      while (nodeHeightSum <= pageHeight * pageIndex) {
        nodeHeightSum += nodeHeights[i];
        i++;
      }
      offset = nodeHeightSum - nodeHeights[i - 1] - pageIndex * pageHeight;
      index = i - 1;
    } else {
      index = 0;
    }

    return {
      offset: offset,
      index: index
    };
  };

  var getNodesOfPage = function getNodesOfPage(pageIndex) {
    var offsetObject = getPageOffset(pageIndex);
    var nodeStartIndex = offsetObject.index;
    var offset = offsetObject.offset;

    var i = nodeStartIndex;
    var nodeEndIndex = void 0;
    var pageNodes = [];

    var nodeHeightSum = offset + nodeHeights[nodeStartIndex];
    i++;

    if (nodeHeightSum < pageHeight) {
      while (nodeHeightSum <= pageHeight && i !== nodes.length) {
        nodeHeightSum += nodeHeights[i];
        i++;
      }
      nodeEndIndex = i - 1;
    } else {
      nodeEndIndex = nodeStartIndex;
    }

    for (var _i = nodeStartIndex; _i <= nodeEndIndex && _i <= nodes.length - 1; _i++) {
      pageNodes.push(nodes[_i]);
    }

    return [pageNodes, offset];
  };

  // finally
  for (var i = 0; i < pageSum; i++) {
    var array = getNodesOfPage(i);
    var _nodes = array[0];
    var offset = array[1];

    pages.push({
      props: {
        children: _nodes,
        style: {
          top: i * pageHeight,
          position: 'absolute',
          height: pageHeight
        },
        pageNo: i + 1,
        offset: offset
      },
      type: "page"
    });
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

function getProgress(bookId) {
  return new Promise(function (resolve, reject) {
    (0, _utils.callApi)(_APIS.API_ROOT + 'books/' + bookId + '/progress').then(function (result) {
      resolve(result);
    }, function (error) {
      reject(error);
    });
  });
}

function setProgress(bookId, progress) {
  return new Promise(function (resolve) {
    (0, _utils.callApi)(_APIS.API_ROOT + 'books/' + bookId + '/progress', 'POST', progress).then(function (res) {
      resolve(res);
    });
  });
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
  var $html = document.createElement("div");

  $html.innerHTML = htmlString;
  $html = $html.childNodes;

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

function parseNodes(nodes) {
  var html = '';

  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].type !== 'p') {
      console.error('Unsupported node found!');
      continue;
    } else {
      html += '<p>' + nodes[i].props.children + '</p>';
    }
  }

  return html;
}

// very rough but enough for use here
function compareObjects(obj1, obj2) {
  var isEqual = true;

  try {
    for (var prop in obj1) {
      if (obj1[prop] !== obj2[prop]) {
        isEqual = false;
        break;
      }
    }
  } catch (e) {
    console.error(e);
    isEqual = false;
  }

  return isEqual;
}

function getView() {
  var aspectRatio = 7 / 9;

  if (window.innerWidth <= 540) {
    return {
      screen: 'phone',
      pageWidth: window.innerWidth,
      pageHeight: window.innerWidth / aspectRatio
    };
  } else {
    return {
      screen: 'hd',
      pageWidth: 700,
      pageHeight: 700 / aspectRatio
    };
  }
}
