exports.ids = [15];
exports.modules = {

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isEmpty2 = __webpack_require__(22);

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _actions = __webpack_require__(15);

var _AddCollectionForm = __webpack_require__(367);

var _AddCollectionForm2 = _interopRequireDefault(_AddCollectionForm);

var _webAPI = __webpack_require__(21);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _DocContainer = __webpack_require__(44);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddCollection = function (_Component) {
    _inherits(AddCollection, _Component);

    function AddCollection(props) {
        _classCallCheck(this, AddCollection);

        var _this = _possibleConstructorReturn(this, (AddCollection.__proto__ || Object.getPrototypeOf(AddCollection)).call(this, props));

        _this.handleSave = _this.handleSave.bind(_this);
        _this.handleBooksValueChange = _this.handleBooksValueChange.bind(_this);
        return _this;
    }

    _createClass(AddCollection, [{
        key: 'handleSave',
        value: function handleSave(data) {
            var _this2 = this;

            var creator = this.props.session.user.id;
            var postData = Object.assign({}, data, {
                creator: creator
            });
            _webAPI2.default.addCollection(postData).then(function (result) {
                _this2.props.sendNotification('添加成功！');
                _this2.props.resetForm('addCollection');
            }, function (error) {
                _this2.props.sendNotification(error.message, 'error');
            });
        }
    }, {
        key: 'handleBooksValueChange',
        value: function handleBooksValueChange(newVal) {
            if (!(0, _isEmpty3.default)(newVal)) {
                this.props.loadBooks({
                    q: newVal
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_DocContainer2.default, { title: "添加合集" }, _react2.default.createElement("h1", { className: "page-title" }, '\u6DFB\u52A0\u5408\u96C6'), _react2.default.createElement(_AddCollectionForm2.default, { onSave: this.handleSave, onBooksValueChange: this.handleBooksValueChange }));
        }
    }]);

    return AddCollection;
}(_react.Component);

function mapStateToProps(state) {
    return {
        notification: state.components.notification,
        elements: state.elements,
        session: state.session
    };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, resetForm: _actions.resetForm, loadBooks: _actions.loadBooks })(AddCollection);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(AddCollection, 'AddCollection', '/Users/liang/Projects/readr/src/routes/AddCollection/AddCollection.tsx');

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/liang/Projects/readr/src/routes/AddCollection/AddCollection.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/routes/AddCollection/AddCollection.tsx');
}();

;

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pick2 = __webpack_require__(24);

var _pick3 = _interopRequireDefault(_pick2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(19);

var _actions = __webpack_require__(15);

var _form = __webpack_require__(85);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _betterReduxForm = __webpack_require__(28);

var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AddCollectionForm = function (_Component) {
    _inherits(AddCollectionForm, _Component);

    function AddCollectionForm(props) {
        _classCallCheck(this, AddCollectionForm);

        return _possibleConstructorReturn(this, (AddCollectionForm.__proto__ || Object.getPrototypeOf(AddCollectionForm)).call(this, props));
    }

    _createClass(AddCollectionForm, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                _props$fields = _props.fields,
                name = _props$fields.name,
                _booksValue = _props$fields._booksValue,
                _booksValues = _props$fields._booksValues,
                _booksOptions = _props$fields._booksOptions,
                description = _props$fields.description,
                handleSubmit = _props.handleSubmit,
                onSave = _props.onSave,
                onBooksValueChange = _props.onBooksValueChange,
                booksSearchAsOptions = _props.booksSearchAsOptions;

            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, Object.assign({ placeholder: "合集名称" }, name)), _react2.default.createElement(_form.SelectizeInput, { placeholder: "选择书籍", onInputChange: function onInputChange(newValue) {
                    if (onBooksValueChange) {
                        onBooksValueChange(newValue);
                    }
                    _booksValue.set(newValue);
                }, value: _booksValue.get(), onValuesChange: _booksValues.onChange, options: booksSearchAsOptions, values: _booksValues.value || [] }), _react2.default.createElement(_form.Textarea, Object.assign({}, description, { placeholder: "描述" })), _react2.default.createElement(_form.Button, { onClick: handleSubmit(function (data) {
                    var postData = (0, _pick3.default)(data, ['name', 'description']);
                    postData = Object.assign({}, postData, {
                        items: _booksValues.value ? _booksValues.value.map(function (item) {
                            return item.value;
                        }) : []
                    });
                    onSave(postData);
                }) }, "\u6DFB\u52A0"));
        }
    }]);

    return AddCollectionForm;
}(_react.Component);
AddCollectionForm = __decorate([(0, _betterReduxForm2.default)({
    form: 'addCollection',
    fields: ['name', '_booksValue', '_booksValues', '_booksOptions', 'description']
})], AddCollectionForm);
var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        routing: state.routing.locationBeforeTransitions,
        booksSearchAsOptions: selectors.booksAsOptions('search')(state)
    };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification })(AddCollectionForm);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(__decorate, "__decorate", "/Users/liang/Projects/readr/src/routes/AddCollection/components/AddCollectionForm.tsx");

    __REACT_HOT_LOADER__.register(AddCollectionForm, "AddCollectionForm", "/Users/liang/Projects/readr/src/routes/AddCollection/components/AddCollectionForm.tsx");

    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "/Users/liang/Projects/readr/src/routes/AddCollection/components/AddCollectionForm.tsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/liang/Projects/readr/src/routes/AddCollection/components/AddCollectionForm.tsx");
}();

;

/***/ })

};;
//# sourceMappingURL=chunk.15.js.map