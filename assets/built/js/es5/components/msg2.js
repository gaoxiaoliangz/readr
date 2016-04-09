"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Msg = function (_Component) {
  _inherits(Msg, _Component);

  function Msg(props) {
    _classCallCheck(this, Msg);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Msg).call(this, props));

    _this.state = {
      show: true,
      content: null
    };
    return _this;
  }

  _createClass(Msg, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(nextProps);
      this.setState({
        content: nextProps.content,
        show: true
      });

      if (nextProps.hide) {
        if (nextProps.content) {
          setTimeout(function () {
            this.setState({
              show: false
            });
          }.bind(this), nextProps.hide);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var msg = void 0;

      if (this.state.content && this.state.show) {
        msg = _react2.default.createElement(
          "div",
          { className: "msg mui--z1" },
          this.state.content
        );
      } else {
        msg = null;
      }
      return _react2.default.createElement(
        "div",
        null,
        msg
      );
    }
  }]);

  return Msg;
}(_react.Component);

exports.default = Msg;
