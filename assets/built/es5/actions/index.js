'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _book = require('actions/book');

Object.keys(_book).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _book[key];
    }
  });
});

var _notification = require('actions/notification');

Object.keys(_notification).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _notification[key];
    }
  });
});

var _user = require('actions/user');

Object.keys(_user).forEach(function (key) {
  if (key === "default") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});