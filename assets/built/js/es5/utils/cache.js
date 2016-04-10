'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCache = getCache;
exports.setCache = setCache;
function getCache(name) {
  if (typeof name !== 'string') {
    console.error('Name should be string!');
  }
  var content = localStorage.getItem(name);
  if (!content) {
    content = false;
  }
  return content;
}

function setCache(name, content) {
  if (typeof name !== 'string') {
    console.error('Name should be string!');
  }
  if (typeof content !== 'string') {
    console.error('Cache content should be string!');
  }
  localStorage.setItem(name, content);
}
