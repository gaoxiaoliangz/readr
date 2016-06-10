'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavTab = function (_Component) {
    _inherits(NavTab, _Component);

    function NavTab(props) {
        _classCallCheck(this, NavTab);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(NavTab).call(this, props));
    }

    _createClass(NavTab, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement("div", { className: "nav-tab" }, _react2.default.createElement("ul", null, this.props.tabs.map(function (tab, index) {
                var className = null;
                if (index === _this2.props.current) {
                    className = 'current';
                }
                return _react2.default.createElement("li", { className: className, key: index }, tab);
            })));
        }
    }]);

    return NavTab;
}(_react.Component);

exports.default = (0, _reactRedux.connect)()(NavTab);