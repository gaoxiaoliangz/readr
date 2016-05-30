'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('actions/index');

var _Loading = require('components/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Button = require('elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Body = require('side-effects/Body');

var _Body2 = _interopRequireDefault(_Body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookInfo = function (_Component) {
    _inherits(BookInfo, _Component);

    function BookInfo(props) {
        _classCallCheck(this, BookInfo);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookInfo).call(this, props));

        _this.bookId = props.params.id;
        return _this;
    }

    _createClass(BookInfo, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchBook(this.bookId);
        }
    }, {
        key: 'render',
        value: function render() {
            var bookInfo = this.props.bookInfo ? this.props.bookInfo : {};
            return _react2.default.createElement("article", { className: "book-info content-container" }, _react2.default.createElement(_Body2.default, { className: "book-info" }), _lodash2.default.isEmpty(bookInfo) ? _react2.default.createElement(_Loading2.default, null) : null, _react2.default.createElement("header", { className: "book-info-header" }, _react2.default.createElement("div", { className: "left-col" }, bookInfo.cover ? _react2.default.createElement("div", { className: "book-cover" }, _react2.default.createElement("img", { src: bookInfo.cover })) : null), _react2.default.createElement("div", { className: "right-col" }, _react2.default.createElement("h1", { className: "book-name" }, bookInfo.title), _react2.default.createElement("div", { className: "book-author" }, _react2.default.createElement("strong", null, "作者：", bookInfo.author ? bookInfo.author.map(function (a) {
                return a.name;
            }).join(', ') : '')), bookInfo.title ? _react2.default.createElement(_Button2.default, { to: '/viewer/book/' + bookInfo.id, color: "blue" }, "阅读") : null)), bookInfo.description ? _react2.default.createElement("div", null, _react2.default.createElement("h2", null, "内容简介"), _react2.default.createElement("p", null, bookInfo.description)) : null);
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store;
            var params = _ref.params;

            return store.dispatch((0, _index.fetchBook)(params.id));
        }
    }]);

    return BookInfo;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
    return {
        bookInfo: state.entities.books[ownProps.params.id]
    };
}, { fetchBook: _index.fetchBook })(BookInfo);