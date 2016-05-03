'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var VERSION = 'v0.1';
var HOST = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';

var ApiRoots = {
  LOCAL: HOST + '/api/' + VERSION + '/',
  DOUBAN_BOOKS: 'https://api.douban.com/v2/book/'
};

exports.default = ApiRoots;
