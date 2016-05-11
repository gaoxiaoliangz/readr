'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSideEffect = require('react-side-effect');

var _reactSideEffect2 = _interopRequireDefault(_reactSideEffect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BodyStyle = function (_Component) {
  _inherits(BodyStyle, _Component);

  function BodyStyle() {
    _classCallCheck(this, BodyStyle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(BodyStyle).apply(this, arguments));
  }

  _createClass(BodyStyle, [{
    key: 'render',
    value: function render() {
      // return Children.only(this.props.children);
      return _react2.default.createElement('div', null);
    }
  }]);

  return BodyStyle;
}(_react.Component);

BodyStyle.propTypes = {
  style: _react.PropTypes.object.isRequired
};

function reducePropsToState(propsList) {
  var style = {};
  propsList.forEach(function (props) {
    Object.assign(style, props.style);
  });
  return style;
}

function handleStateChangeOnClient(style) {
  for (var key in style) {
    document.body.style[key] = style[key];
  }
}

exports.default = (0, _reactSideEffect2.default)(reducePropsToState, handleStateChangeOnClient)(BodyStyle);
