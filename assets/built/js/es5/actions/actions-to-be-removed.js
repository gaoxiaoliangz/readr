"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setViewScreen = setViewScreen;
exports.setViewMode = setViewMode;
exports.customizeView = customizeView;
exports.cacheView = cacheView;
exports.loadViewFromCache = loadViewFromCache;
// todo: to remove
var SET_VIEW_SCREEN = exports.SET_VIEW_SCREEN = 'SET_VIEW_SCREEN';
function setViewScreen(screen) {
  var style = void 0;

  if (screen == "HD") {
    style = styles.BOOK_HD_STYLE;
  } else if (screen == "MOBILE") {
    style = styles.BOOK_MOBILE_STYLE;
  }
  return {
    type: SET_VIEW_SCREEN,
    screen: screen,
    style: style
  };
}

var SET_VIEW_MODE = exports.SET_VIEW_MODE = 'SET_VIEW_MODE';
function setViewMode(mode) {
  return {
    type: SET_VIEW_MODE,
    mode: mode
  };
}

var CUSTOMIZE_VIEW = exports.CUSTOMIZE_VIEW = 'CUSTOMIZE_VIEW';
function customizeView(customStyle) {
  return {
    type: CUSTOMIZE_VIEW,
    customStyle: customStyle
  };
}

var CACHE_VIEW = exports.CACHE_VIEW = 'CACHE_VIEW';
function cacheView(bookId, view) {
  localStorage.setItem("book" + bookId + "_view", JSON.stringify(view));
  return {
    type: CACHE_VIEW,
    bookId: bookId
  };
}

var LOAD_VIEW_FROM_CACHE = exports.LOAD_VIEW_FROM_CACHE = 'LOAD_VIEW_FROM_CACHE';
function loadViewFromCache(bookId) {
  var view = localStorage.getItem("book" + bookId + "_view");
  var cacheReadingState = 'SUCCESS';
  if (!view) {
    cacheReadingState = 'FAILURE';
    view = {};
  } else {
    view = JSON.parse(view);
  }
  return {
    type: LOAD_VIEW_FROM_CACHE,
    bookId: bookId,
    cacheReadingState: cacheReadingState,
    mode: view.mode,
    screen: view.screen,
    style: view.style
  };
}
// end of to remove
