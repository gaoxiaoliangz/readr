'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var VERSION = 'v0.1';
var HOST = 'http://localhost:3000';

if (typeof window !== 'undefined') {
  HOST = window.location.origin;
}

var API_ROOT = exports.API_ROOT = HOST + '/api/' + VERSION + '/';
var API_DOUBAN_BOOKS = exports.API_DOUBAN_BOOKS = 'https://api.douban.com/v2/book/';
