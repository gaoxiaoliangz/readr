'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _index = require('actions/index');

var _NavTab = require('../components/NavTab');

var _NavTab2 = _interopRequireDefault(_NavTab);

var _BookListSection = require('components/BookListSection');

var _BookListSection2 = _interopRequireDefault(_BookListSection);

var _Button = require('elements/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_Component) {
    _inherits(Profile, _Component);

    // static fetchData({store, params}) {
    //   return store.dispatch(fetch())
    // }

    function Profile(props) {
        _classCallCheck(this, Profile);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Profile).call(this, props));
    }

    _createClass(Profile, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.userAuth();
            this.props.fetchBooks('newest');
        }
    }, {
        key: 'render',
        value: function render() {
            var user = this.props.session.user;
            var newestBooks = this.props.newestBooks;
            return _react2.default.createElement("div", { className: "profile" }, _react2.default.createElement("div", { className: "page-header" }, _react2.default.createElement("div", { className: "user-avatar" }, _react2.default.createElement("img", { src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar" })), _react2.default.createElement("span", { className: "username" }, "username"), _react2.default.createElement("span", { className: "tagline" }, "something to say"), _react2.default.createElement(_Button2.default, null, "编辑")), _react2.default.createElement(_NavTab2.default, { tabs: ['收藏', '读过', '书评'], current: 0 }), _react2.default.createElement("div", null, _react2.default.createElement(_BookListSection2.default, { bookList: newestBooks })));
        }
    }]);

    return Profile;
}(_react.Component);

function mapStateToProps(state, ownProps) {
    var filteredBooks = state.pagination.filteredBooks;
    var _state$entities = state.entities;
    var books = _state$entities.books;
    var collections = _state$entities.collections;

    var genList = function genList(whichPagination) {
        return whichPagination ? whichPagination.ids.map(function (id) {
            return books[id];
        }) : [];
    };
    return {
        userBooks: genList(filteredBooks['user']),
        newestBooks: genList(filteredBooks['newest']),
        session: state.session,
        collection: function () {
            for (var prop in collections) {
                return collections[prop];
            }
        }(),
        notification: state.notification
    };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { handleNotification: _index.handleNotification, userAuth: _index.userAuth, fetchBooks: _index.fetchBooks, fetchCollections: _index.fetchCollections })(Profile);