'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.children
    );
  }
}

exports.default = App;
