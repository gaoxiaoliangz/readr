'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _routes = require('../routes');

var _routes2 = _interopRequireDefault(_routes);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Root extends _react.Component {
  render() {
    const { store, history } = this.props;
    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_reactRouter.Router, { history: history, routes: _routes2.default })
    );
  }
}

exports.default = Root;
Root.propTypes = {
  store: _react.PropTypes.object.isRequired,
  history: _react.PropTypes.object.isRequired
};
