'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAuthStatus = checkAuthStatus;
exports.formatHTMLStringToArray = formatHTMLStringToArray;
exports.parseHTML = parseHTML;
exports.delayStuff = delayStuff;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _apiUrls = require('constants/api-urls');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkAuthStatus() {
  return new Promise(function (resolve) {
    _jquery2.default.get(_apiUrls.URL_AUTH, function (data) {
      resolve(data);
    });
  });
}

function formatHTMLStringToArray(HTMLString) {
  var contentArray = [];
  var $HTMLString = (0, _jquery2.default)(HTMLString);

  for (var i = 0; i < $HTMLString.length; i++) {
    contentArray.push({
      tagName: $HTMLString[i].tagName,
      innerHTML: $HTMLString[i].innerHTML
    });
  }
  return contentArray;
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

// todo: when multiple functins are called?
function delayStuff(callback, delay) {
  return function () {
    clearTimeout(this.__delayStuffTimer__);
    this.__delayStuffTimer__ = setTimeout(callback.bind(this), delay);
  };
}
