'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOAD_PAGES = exports.LOAD_VIEW_FROM_CACHE = exports.CACHE_VIEW = exports.LOAD_BOOK_CONTENT_FROM_CACHE = exports.CACHE_BOOK_CONTENT = exports.CALCULATE_BOOK_CONTENT = exports.CUSTOMIZE_VIEW = exports.SET_VIEW_MODE = exports.SET_VIEW_SCREEN = exports.RECEIVE_BOOK_CONTENT = exports.REQUEST_BOOK_CONTENT = undefined;
exports.setLang = setLang;
exports.requestBookContent = requestBookContent;
exports.receiveBookContent = receiveBookContent;
exports.setViewScreen = setViewScreen;
exports.setViewMode = setViewMode;
exports.customizeView = customizeView;
exports.calculateBookContent = calculateBookContent;
exports.cacheBookContent = cacheBookContent;
exports.loadBookContentFromCache = loadBookContentFromCache;
exports.cacheView = cacheView;
exports.loadViewFromCache = loadViewFromCache;
exports.loadPages = loadPages;
exports.fetchBookContent = fetchBookContent;
exports.dispatchWrap = dispatchWrap;

var _utils = require('utils');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = require('constants/styles');

var styles = _interopRequireWildcard(_styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CONTENT_SELECTOR = '.pages ul li .content';

function setLang(lang) {
  return { type: "SETLANG", lang: lang };
}

const REQUEST_BOOK_CONTENT = exports.REQUEST_BOOK_CONTENT = 'REQUEST_BOOK_CONTENT';
function requestBookContent(bookId) {
  return {
    type: REQUEST_BOOK_CONTENT,
    bookId
  };
}

const RECEIVE_BOOK_CONTENT = exports.RECEIVE_BOOK_CONTENT = 'RECEIVE_BOOK_CONTENT';
function receiveBookContent(bookId, nodes) {
  return {
    type: RECEIVE_BOOK_CONTENT,
    bookId,
    nodes,
    receivedAt: Date.now()
  };
}

const SET_VIEW_SCREEN = exports.SET_VIEW_SCREEN = 'SET_VIEW_SCREEN';
function setViewScreen(screen) {
  let style;

  if (screen == "HD") {
    style = styles.BOOK_HD_STYLE;
  } else if (screen == "MOBILE") {
    style = styles.BOOK_MOBILE_STYLE;
  }
  return {
    type: SET_VIEW_SCREEN,
    screen,
    style
  };
}

const SET_VIEW_MODE = exports.SET_VIEW_MODE = 'SET_VIEW_MODE';
function setViewMode(mode) {
  return {
    type: SET_VIEW_MODE,
    mode
  };
}

const CUSTOMIZE_VIEW = exports.CUSTOMIZE_VIEW = 'CUSTOMIZE_VIEW';
function customizeView(customStyle) {
  return {
    type: CUSTOMIZE_VIEW,
    customStyle
  };
}

const CALCULATE_BOOK_CONTENT = exports.CALCULATE_BOOK_CONTENT = 'CALCULATE_BOOK_CONTENT';
function calculateBookContent(contentNodes, pageHeight) {
  let newContentNodes = _lodash2.default.cloneDeep(contentNodes);
  let content = document.querySelector(CONTENT_SELECTOR);
  let heightSum = 0;

  Array.prototype.forEach.call(content.childNodes, (node, index) => {
    if (node.tagName.toLowerCase() !== "p") {
      console.error("Unsupported content found!");
    }
    let height = node.clientHeight;
    heightSum += height;
    newContentNodes[index].props.style = {
      height: height
    };
  });

  return {
    type: CALCULATE_BOOK_CONTENT,
    contentNodes: newContentNodes,
    pageSum: parseInt(heightSum / pageHeight) + 1
  };
}

const CACHE_BOOK_CONTENT = exports.CACHE_BOOK_CONTENT = 'CACHE_BOOK_CONTENT';
function cacheBookContent(bookId, content) {
  localStorage.setItem(`book${ bookId }_content`, JSON.stringify(content));
  return {
    type: CACHE_BOOK_CONTENT,
    bookId
  };
}

const LOAD_BOOK_CONTENT_FROM_CACHE = exports.LOAD_BOOK_CONTENT_FROM_CACHE = 'LOAD_BOOK_CONTENT_FROM_CACHE';
function loadBookContentFromCache(bookId) {
  let content = localStorage.getItem(`book${ bookId }_content`);
  let cacheReadingState = 'SUCCESS';
  let nodes = [];
  let pageSum = 0;

  if (!content) {
    cacheReadingState = 'FAILURE';
  } else {
    content = JSON.parse(content);
    nodes = content.nodes;
    pageSum = content.pageSum;
  }
  return {
    type: LOAD_BOOK_CONTENT_FROM_CACHE,
    bookId,
    cacheReadingState,
    contentNodes: nodes,
    pageSum: pageSum
  };
}

const CACHE_VIEW = exports.CACHE_VIEW = 'CACHE_VIEW';
function cacheView(bookId, view) {
  localStorage.setItem(`book${ bookId }_view`, JSON.stringify(view));
  return {
    type: CACHE_VIEW,
    bookId
  };
}

const LOAD_VIEW_FROM_CACHE = exports.LOAD_VIEW_FROM_CACHE = 'LOAD_VIEW_FROM_CACHE';
function loadViewFromCache(bookId) {
  let view = localStorage.getItem(`book${ bookId }_view`);
  let cacheReadingState = 'SUCCESS';
  if (!view) {
    cacheReadingState = 'FAILURE';
    view = {};
  } else {
    view = JSON.parse(view);
  }
  return {
    type: LOAD_VIEW_FROM_CACHE,
    bookId,
    cacheReadingState,
    mode: view.mode,
    screen: view.screen,
    style: view.style
  };
}

const LOAD_PAGES = exports.LOAD_PAGES = 'LOAD_PAGES';
function loadPages(startPage) {
  return {
    type: LOAD_PAGES,
    currentPage: startPage
  };
}

function fetchBookContent(bookId) {
  const fullUrl = "/api/v0.1/books/" + bookId + '/content/';
  return (dispatch, getState) => {
    return new Promise(function (resolve) {
      dispatch(requestBookContent(bookId));
      fetch(fullUrl).then(response => response.json()).then(json => {
        let contentNodes = (0, _utils.parseHTML)(json.data[0].html);
        dispatch(receiveBookContent(bookId, contentNodes));
        resolve(getState);
      });
    });
  };
}

function dispatchWrap(shellFunction) {
  return (dispatch, getState) => {
    return shellFunction(dispatch, getState);
  };
}
