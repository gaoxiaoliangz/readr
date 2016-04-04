'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoMatch = _react2.default.createClass({
  displayName: 'NoMatch',

  componentDidMount: function componentDidMount() {},
  handleClick: function handleClick() {},
  render: function render() {
    return _react2.default.createElement(
      'h2',
      null,
      '404'
    );
  }
});

exports.default = NoMatch;
