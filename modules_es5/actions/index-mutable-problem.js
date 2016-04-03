'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RECEIVE_BOOK = exports.REQUEST_BOOK = exports.CACHE_BOOK = exports.STYLE_BOOK = exports.FORMAT_BOOK = undefined;
exports.setLang = setLang;
exports.styleBook = styleBook;
exports.cacheBook = cacheBook;
exports.mountBook = mountBook;

var _utils = require('utils');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setLang(lang) {
  return { type: "SETLANG", lang: lang };
}

// export const FORMAT_BOOK = 'FORMAT_BOOK'
// function formatBook(bookId, contentNodes, config) {
//   let content = document.querySelector(".pages ul li .content")
//   let contentNodesPaged = [[]]
//   let page = 0
//   let isNewPage = true
//   let nodesHeight = 0
//   let offsets = []
//   let startNodeIndeArr = []
//   let endNodeIndexArr = []
//
//   let setNewPage = function(index){
//     contentNodesPaged.push([])
//     page++
//     isNewPage = false
//     nodesHeight = 0
//     startNodeIndeArr.push(index)
//   }
//
//   Array.prototype.forEach.call(content.childNodes, (node, index) => {
//     if(node.tagName.toLowerCase() !== "p") {
//       console.error("Unsupported content found!")
//     }
//     contentNodes[0][index].props.style = {
//       height: node.clientHeight
//     }
//
//
//     if(index === 0){
//
//     }else{
//       let startNodeIndex = endNodeIndexArr[endNodeIndexArr.length-2]
//       nodesHeight = nodesHeight + node.clientHeight
//     }
//
//     if(isNewPage) {
//       setNewPage(index)
//     }else{
//       nodesHeight += nodesHeight
//       if (nodesHeight+offsets[offsets.length-1] > config.style.pageHeight) {
//         setNewPage(index)
//         endNodeIndexArr.push(index)
//       }
//     }
//     contentNodesPaged[page].push(node)
//   })
//
//   if (config.mode === "VERTICAL") {
//     // todo
//   }
//
//   return {
//     type: FORMAT_BOOK,
//     bookId,
//     contentNodes: contentNodesPaged,
//     config
//   }
// }

var FORMAT_BOOK = exports.FORMAT_BOOK = 'FORMAT_BOOK';
function formatBook(bookId, contentNodes, config) {
  var content = document.querySelector(".pages ul li .content");
  var newContentNodes = [[]];
  var fuck = _immutable2.default.Map(contentNodes[0][0].props);
  Array.prototype.forEach.call(content.childNodes, function (node, index) {
    if (node.tagName.toLowerCase() !== "p") {
      console.log(node.tagName.toLowerCase());
      console.error("Unsupported content found!");
    }

    var newNode = Object.assign({}, contentNodes[0][index]);

    newNode.props.style = {
      height: node.clientHeight
    };
    newContentNodes[0].push(newNode);
  });

  console.log(fuck.get('children'));

  console.log(contentNodes[0][0].props.style);
  console.log(newContentNodes);

  return {
    type: FORMAT_BOOK,
    bookId: bookId,
    contentNodes: newContentNodes,
    config: config
  };
}

var STYLE_BOOK = exports.STYLE_BOOK = 'STYLE_BOOK';
function styleBook(bookId, config) {
  var content = document.querySelector(".pages ul li .content");
  var defaultStyle = {
    fontSize: "18px",
    lineHeight: "1.8",
    fontWeight: "normal",
    pageWidth: "700px",
    pageHeight: "900px"
  };
  var style = Object.assign({}, defaultStyle, config.style);

  config.style = style;
  (0, _jquery2.default)(content).css(config.style);

  return {
    type: STYLE_BOOK,
    bookId: bookId,
    config: config
  };
}

var CACHE_BOOK = exports.CACHE_BOOK = 'CACHE_BOOK';
function cacheBook(bookId, book) {
  localStorage.setItem('book' + bookId + '_cache', JSON.stringify(book));
  return {
    type: CACHE_BOOK,
    bookId: bookId
  };
}

var REQUEST_BOOK = exports.REQUEST_BOOK = 'REQUEST_BOOK';
function requestBook(bookId) {
  return {
    type: REQUEST_BOOK,
    bookId: bookId
  };
}

var RECEIVE_BOOK = exports.RECEIVE_BOOK = 'RECEIVE_BOOK';
function receiveBook(bookId, contentNodes) {
  return {
    type: RECEIVE_BOOK,
    bookId: bookId,
    contentNodes: contentNodes,
    receivedAt: Date.now()
  };
}

function mountBook(bookId, config) {
  var fullUrl = "/api/v0.1/books/" + bookId + '/content/';
  return function (dispatch, getState) {
    dispatch(requestBook(bookId));
    fetch(fullUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      var contentNodes = [(0, _utils.parseHTML)(json.data[0].html)];
      dispatch(receiveBook(bookId, contentNodes));
      dispatch(styleBook(bookId, config));
      dispatch(formatBook(bookId, contentNodes, config));
      dispatch(cacheBook(bookId, getState().book));
    });
  };
}
