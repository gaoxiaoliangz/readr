'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BookInfo = function (_Component) {
  _inherits(BookInfo, _Component);

  _createClass(BookInfo, [{
    key: 'loadBooksFromServer',
    value: function loadBooksFromServer() {
      fetch(URL_BOOKS + this.bookId).then(function (res) {
        return res.json();
      }).then(function (json) {

        var url = void 0;
        if (!json.data) {
          url = URL_DOUBAN_BOOKS + this.bookId;
        } else {
          this.setState({ data: json.data[0] });
          url = URL_DOUBAN_BOOKS + json.data[0].douban_item_id;
        }

        $.ajax({
          url: url,
          dataType: "jsonp"
        }).done(function (data) {
          this.setState({
            dataFromDouban: data
          });
        }.bind(this));
      }.bind(this)).catch(function (err) {
        console.error(err);
      });
    }
  }]);

  function BookInfo(props) {
    _classCallCheck(this, BookInfo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BookInfo).call(this, props));

    _this.bookId = props.params.id;
    _this.state = {
      data: {},
      dataFromDouban: {}
    };
    return _this;
  }

  _createClass(BookInfo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadBooksFromServer();
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.data;
      var dataFromDouban = this.state.dataFromDouban;
      var readBtn = void 0;

      if (data.id) {
        readBtn = _react2.default.createElement(
          _reactRouter.Link,
          { to: '/book/' + data.id },
          _react2.default.createElement(
            _react3.Button,
            { color: 'primary' },
            '阅读'
          )
        );
      }

      return _react2.default.createElement(
        _react3.Container,
        null,
        _react2.default.createElement(
          'div',
          { className: 'book-info content-container' },
          _react2.default.createElement(
            'h1',
            { className: 'page-title book-name' },
            dataFromDouban.title
          ),
          _react2.default.createElement(
            'div',
            { className: 'book-author' },
            _react2.default.createElement(
              'strong',
              null,
              dataFromDouban.author
            )
          ),
          dataFromDouban.image ? _react2.default.createElement(
            'div',
            { className: 'book-cover' },
            _react2.default.createElement('img', { src: dataFromDouban.image })
          ) : null,
          readBtn ? readBtn : null,
          dataFromDouban.author_intro ? _react2.default.createElement(
            'div',
            { className: 'book-author-intro' },
            _react2.default.createElement(
              'h2',
              null,
              '作者简介'
            ),
            _react2.default.createElement(
              'p',
              null,
              dataFromDouban.author_intro
            )
          ) : null,
          dataFromDouban.summary ? _react2.default.createElement(
            'div',
            { className: 'book-summary' },
            _react2.default.createElement(
              'h2',
              null,
              '内容简介'
            ),
            _react2.default.createElement(
              'p',
              null,
              dataFromDouban.summary
            )
          ) : null,
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'a',
              { target: '_blank', href: 'http://book.douban.com/subject/' + dataFromDouban.id },
              '在豆瓣查看'
            )
          )
        )
      );
    }
  }]);

  return BookInfo;
}(_react.Component);

exports.default = BookInfo;
