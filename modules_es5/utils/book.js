'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterBookContentByPage = exports.loadBookContent = exports.convertPercentageToPage = undefined;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _local = require('./local');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CONTENT_SELECTOR = ".pages li .content";

function loadBookContent(url, config) {
  let book = {};

  return new Promise(function (resolve) {
    if (!_local.readFromLocal.bind(this)("content")) {
      fetch(url).then(function (res) {
        return res.json();
      }).then(function (json) {
        console.log("Book content received, now rerendering ...");
        book.content = json.data[0].html;
        book.map = _genMapAndSaveToLocal.bind(this)(json.data[0].html, config);
        _local.saveToLocal.bind(this)("content", book.content);
        resolve(book);
      }.bind(this)).catch(err => {
        console.error(err);
      });
    } else {
      console.log("Getting book content from local storage ...");
      book.content = _local.readFromLocal.bind(this)("content");
      if (_local.readFromLocal.bind(this)("map")) {
        console.log("Getting map from local storage ...");
        book.map = JSON.parse(_local.readFromLocal.bind(this)("map"));

        resolve(book);
      } else {
        console.log("Rerendering ...");
        book.map = _genMapAndSaveToLocal.bind(this)(book.content, config);
        resolve(book);
      }
    }
  }.bind(this));
}

function filterBookContentByPage(bookContent, map, page) {
  var elements = (0, _jquery2.default)(bookContent),
      pageObj,
      h = 0,
      h2 = 0,
      i = 0,
      s = true,
      para = 0,
      para2 = 0,
      para_margin = 0,
      top = 0,
      para_qt = 0,
      p_qt = map.elements.length,
      page_content = [],
      view = map.view;

  while (i < p_qt && h < view.pageHeight * page) {
    h = parseInt(map.elements[i].height) + h;
    h2 = h - parseInt(map.elements[i].height);
    if (h > view.pageHeight * (page - 1) && s == true) {
      para = i;
      para_margin = h2 - view.pageHeight * (page - 1);
      s = false;
    }
    para2 = i;
    i++;
  }
  para_qt = para2 - para + 1;
  top = (page - 1) * view.pageHeight;

  for (i = para; i <= para2; i++) {
    switch (map.elements[i].type) {
      case "P":
        page_content.push(elements.eq(i).html());
        break;
      default:
        console.error("Unsupported content found!");
    }
  }

  pageObj = {
    style: {
      marginTop: para_margin,
      height: view.pageHeight
    },
    content: page_content,
    index: page - 1
  };

  return pageObj;
}

function _genMapAndSaveToLocal(bookContent, config) {
  let map,
      contentArray = [],
      $bookContent = (0, _jquery2.default)(bookContent);

  try {
    for (var i = 0; i < $bookContent.length; i++) {
      contentArray.push($bookContent[i].innerHTML);
    }
    this.setState({
      pages: [{
        content: contentArray
      }]
    });
    map = _genMapJSON(CONTENT_SELECTOR, config);
    _local.saveToLocal.bind(this)("map", JSON.stringify(map));
  } catch (e) {
    console.error(e);
  }

  return map;
}

function _genMapJSON(selector, config) {
  let elements = [],
      map = {};

  map.view = {
    bookHeight: (0, _jquery2.default)(selector).height(),
    pageSum: Math.ceil((0, _jquery2.default)(selector).height() / config.pageHeight),
    windowWidth: (0, _jquery2.default)(window).width(),
    pageHeight: config.pageHeight,
    pageWidth: (0, _jquery2.default)(selector).width(),
    fontSize: (0, _jquery2.default)(selector).find("p").css("font-size"),
    lineHeight: (0, _jquery2.default)(selector).find("p").css("line-height")
  };

  (0, _jquery2.default)(selector).children().each(function (index) {
    var h = (0, _jquery2.default)(this).height(),
        type = (0, _jquery2.default)(this).prop("tagName"),
        renderingStr;

    if (type !== "P") {
      console.error("Unsupported content found!");
    }

    elements.push({
      type: type,
      height: h
    });
  });

  map.elements = elements;

  return map;
}

function convertPercentageToPage(p, pageSum) {
  if (p > 1) {
    console.error("Wrong parameter!");
    return null;
  } else {
    return parseInt(p * pageSum) + 1;
  }
}

exports.convertPercentageToPage = convertPercentageToPage;
exports.loadBookContent = loadBookContent;
exports.filterBookContentByPage = filterBookContentByPage;
