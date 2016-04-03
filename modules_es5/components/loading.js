"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Loading extends _react.Component {
  render() {
    return _react2.default.createElement(
      "div",
      { className: "loading-wrap" },
      _react2.default.createElement("span", { className: "icon icon-loading" })
    );
  }
}

exports.default = Loading;
