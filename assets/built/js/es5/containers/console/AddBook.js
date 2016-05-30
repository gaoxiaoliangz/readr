'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = require('react-redux');

var _index = require('actions/index');

var _Input = require('elements/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('elements/Button');

var _Button2 = _interopRequireDefault(_Button);

var _SelectizeInput = require('elements/SelectizeInput');

var _SelectizeInput2 = _interopRequireDefault(_SelectizeInput);

var _Modal = require('elements/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _apis = require('utils/apis');

var _apis2 = _interopRequireDefault(_apis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBook = function (_Component) {
    _inherits(AddBook, _Component);

    function AddBook(props) {
        _classCallCheck(this, AddBook);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AddBook).call(this, props));

        _this.defaultState = {
            dbBookQuery: "",
            bookTitle: [],
            bookAuthor: [],
            bookCover: '',
            bookDescription: '',
            bookContent: '',
            authorResults: [],
            isAddAuthorModalVisible: false
        };
        _this.state = Object.assign({}, _this.defaultState);
        _this.fetchDoubanBookSearchResults = _lodash2.default.debounce(_this.props.fetchDoubanBookSearchResults, 150);
        return _this;
    }

    _createClass(AddBook, [{
        key: 'addBook',
        value: function addBook(e) {
            var _this2 = this;

            e.preventDefault();
            var data = {
                title: this.state.bookTitle.length !== 0 ? this.state.bookTitle[0].title : '',
                description: this.state.bookDescription,
                content: this.state.bookContent,
                author: JSON.stringify(this.state.bookAuthor.map(function (a) {
                    return a.id;
                })),
                cover: this.state.bookCover
            };
            console.log(data);
            _apis2.default.addBook(data).then(function (result) {
                _this2.props.handleNotification('添加成功');
                _this2.setState(_this2.defaultState);
            }, function (error) {
                _this2.props.handleNotification(error.message);
            });
        }
    }, {
        key: 'addAuthor',
        value: function addAuthor(e) {
            var _this3 = this;

            e.preventDefault();
            var data = {
                name: this.state.authorName,
                description: this.state.authorDescription,
                slug: this.state.authorSlug
            };
            _apis2.default.addAuthor(data).then(function (result) {
                _this3.props.handleNotification('添加成功');
                _this3.setState({
                    bookAuthor: [].concat(_toConsumableArray(_this3.state.bookAuthor), [{ name: _this3.state.authorName, id: result.id }]),
                    isAddAuthorModalVisible: false
                });
                _this3.refs.bookAuthor.clearState();
            }, function (error) {
                _this3.props.handleNotification(error.message);
            });
        }
    }, {
        key: 'search',
        value: function search(e) {
            var query = e.target.value;
            this.setState({
                dbBookQuery: query
            });
            if (query !== '') {
                this.fetchDoubanBookSearchResults(query);
            }
        }
    }, {
        key: 'searchAuthors',
        value: function searchAuthors(e) {
            var _this4 = this;

            var query = e.target.value;
            if (query !== '') {
                _apis2.default.searchAuthors(query).then(function (response) {
                    _this4.setState({
                        authorResults: response
                    });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var book = null;
            var searchResultIds = this.props.doubanBookSearchResults[this.state.dbBookQuery] ? this.props.doubanBookSearchResults[this.state.dbBookQuery].ids : [];
            var doubanBooks = this.props.doubanBooks;
            var searchResults = searchResultIds.map(function (id) {
                return doubanBooks[id];
            });
            return _react2.default.createElement("form", null, _react2.default.createElement(_Modal2.default, { width: 600, isVisible: this.state.isAddAuthorModalVisible, onRequestClose: function onRequestClose() {
                    _this5.setState({
                        isAddAuthorModalVisible: false
                    });
                } }, _react2.default.createElement("h1", { className: "page-title", style: { marginTop: 0 } }, "Add author"), _react2.default.createElement(_Input2.default, { onChange: function onChange(event) {
                    _this5.setState({
                        authorName: event.target.value
                    });
                }, value: this.state.authorName, placeholder: "Name" }), _react2.default.createElement(_Input2.default, { onChange: function onChange(event) {
                    _this5.setState({
                        authorSlug: event.target.value
                    });
                }, value: this.state.authorSlug, placeholder: "Slug" }), _react2.default.createElement("textarea", { placeholder: "Description", style: { height: 100 }, value: this.state.authorDescription, onChange: function onChange(event) {
                    _this5.setState({
                        authorDescription: event.target.value
                    });
                } }), _react2.default.createElement(_Button2.default, { onClick: this.addAuthor.bind(this) }, "Add")), _react2.default.createElement("h1", { className: "page-title" }, "Add Book"), _react2.default.createElement(_SelectizeInput2.default, { ref: "bookTitle", onChange: this.search.bind(this), onValuesChange: function onValuesChange(targetIndex, type) {
                    switch (type) {
                        case 'ADD':
                            _this5.setState({
                                bookTitle: [].concat(_toConsumableArray(_this5.state.bookTitle), [searchResults[targetIndex]]),
                                bookCover: searchResults[targetIndex].image,
                                bookDescription: searchResults[targetIndex].summary
                            });
                            break;
                        case 'REMOVE':
                            _this5.setState({
                                bookTitle: _this5.state.bookTitle.filter(function (value, index) {
                                    return targetIndex !== index ? true : false;
                                })
                            });
                            break;
                        default:
                            console.error('Undefined type');
                    }
                }, options: searchResults.map(function (a) {
                    return {
                        value: a.title,
                        subInfo: a.author,
                        thumb: a.image
                    };
                }), values: this.state.bookTitle.map(function (book) {
                    return book.title;
                }), placeholder: "Book title", addNewValue: function addNewValue() {
                    var value = _reactDom2.default.findDOMNode(_this5.refs.bookTitle).querySelector('input').value;
                    _this5.setState({
                        bookTitle: [].concat(_toConsumableArray(_this5.state.bookTitle), [{ title: value }])
                    });
                    _this5.refs.bookTitle.clearState();
                } }), _react2.default.createElement(_SelectizeInput2.default, { ref: "bookAuthor", onChange: this.searchAuthors.bind(this), onValuesChange: function onValuesChange(targetIndex, type) {
                    switch (type) {
                        case 'ADD':
                            _this5.setState({
                                bookAuthor: [].concat(_toConsumableArray(_this5.state.bookAuthor), [_this5.state.authorResults[targetIndex]])
                            });
                            break;
                        case 'REMOVE':
                            _this5.setState({
                                bookAuthor: _this5.state.bookAuthor.filter(function (value, index) {
                                    return targetIndex !== index ? true : false;
                                })
                            });
                            break;
                        default:
                            console.error('Undefined type');
                    }
                }, options: this.state.authorResults.map(function (a) {
                    return a.name;
                }), values: this.state.bookAuthor.map(function (a) {
                    return a.name;
                }), placeholder: "Author", addNewValue: function addNewValue() {
                    var name = _this5.refs.bookAuthor.state.value;
                    _this5.setState({
                        isAddAuthorModalVisible: true,
                        authorName: name
                    });
                } }), _react2.default.createElement(_Input2.default, { onChange: function onChange(event) {
                    _this5.setState({
                        bookCover: event.target.value
                    });
                }, value: this.state.bookCover, placeholder: "Cover" }), _react2.default.createElement("textarea", { placeholder: "Description", style: { height: 100 }, value: this.state.bookDescription, onChange: function onChange(event) {
                    _this5.setState({
                        bookDescription: event.target.value
                    });
                } }), _react2.default.createElement("textarea", { placeholder: "Paste book content here", style: { height: 100 }, value: this.state.bookContent, onChange: function onChange(event) {
                    _this5.setState({
                        bookContent: event.target.value
                    });
                } }), _react2.default.createElement(_Button2.default, { onClick: this.addBook.bind(this) }, "Add"));
        }
    }]);

    return AddBook;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
    return {
        doubanBookSearchResults: state.pagination.doubanBookSearchResults,
        doubanBooks: state.entities.doubanBooks,
        notification: state.components.notification
    };
}, { fetchDoubanBookSearchResults: _index.fetchDoubanBookSearchResults, handleNotification: _index.handleNotification })(AddBook);