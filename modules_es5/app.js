'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var React = require('react')
// var Component = require('react').Component

class App extends _react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      'this is the fucking server rendering'
    );
  }
} // 'use strict'


exports.default = App;
