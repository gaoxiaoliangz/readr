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

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(13);

var _AddCollectionForm = __webpack_require__(367);

var _AddCollectionForm2 = _interopRequireDefault(_AddCollectionForm);

var _webAPI = __webpack_require__(18);

var _webAPI2 = _interopRequireDefault(_webAPI);

var _DocContainer = __webpack_require__(46);

var _DocContainer2 = _interopRequireDefault(_DocContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let AddCollection = class AddCollection extends _react.Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.handleBooksValueChange = this.handleBooksValueChange.bind(this);
    }
    handleSave(data) {
        const creator = this.props.session.user.id;
        const postData = Object.assign({}, data, {
            creator: creator
        });
        _webAPI2.default.addCollection(postData).then(result => {
            this.props.sendNotification('添加成功！');
            this.props.resetForm('addCollection');
        }, error => {
            this.props.sendNotification(error.message, 'error');
        });
    }
    handleBooksValueChange(newVal) {
        if (!(0, _isEmpty3.default)(newVal)) {
            this.props.loadBooks({
                q: newVal
            });
        }
    }
    render() {
        return _react2.default.createElement(_DocContainer2.default, { title: "添加合集" }, _react2.default.createElement("h1", { className: "page-title" }, "\u6DFB\u52A0\u5408\u96C6"), _react2.default.createElement(_AddCollectionForm2.default, { onSave: this.handleSave, onBooksValueChange: this.handleBooksValueChange }));
    }
};

function mapStateToProps(state) {
    return {
        notification: state.components.notification,
        elements: state.elements,
        session: state.session
    };
}
exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, resetForm: _actions.resetForm, loadBooks: _actions.loadBooks })(AddCollection);

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pick2 = __webpack_require__(24);

var _pick3 = _interopRequireDefault(_pick2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(13);

var _form = __webpack_require__(84);

var _selectors = __webpack_require__(27);

var selectors = _interopRequireWildcard(_selectors);

var _betterReduxForm = __webpack_require__(28);

var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AddCollectionForm = class AddCollectionForm extends _react.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {}
    render() {
        var _props = this.props,
            _props$fields = _props.fields;
        const name = _props$fields.name,
              _booksValue = _props$fields._booksValue,
              _booksValues = _props$fields._booksValues,
              _booksOptions = _props$fields._booksOptions,
              description = _props$fields.description,
              handleSubmit = _props.handleSubmit,
              onSave = _props.onSave,
              onBooksValueChange = _props.onBooksValueChange,
              booksSearchAsOptions = _props.booksSearchAsOptions;

        return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, Object.assign({ placeholder: "合集名称" }, name)), _react2.default.createElement(_form.SelectizeInput, { placeholder: "选择书籍", onInputChange: newValue => {
                if (onBooksValueChange) {
                    onBooksValueChange(newValue);
                }
                _booksValue.set(newValue);
            }, value: _booksValue.get(), onValuesChange: _booksValues.onChange, options: booksSearchAsOptions, values: _booksValues.value || [] }), _react2.default.createElement(_form.Textarea, Object.assign({}, description, { placeholder: "描述" })), _react2.default.createElement(_form.Button, { onClick: handleSubmit(data => {
                let postData = (0, _pick3.default)(data, ['name', 'description']);
                postData = Object.assign({}, postData, {
                    items: _booksValues.value ? _booksValues.value.map(item => item.value) : []
                });
                onSave(postData);
            }) }, "\u6DFB\u52A0"));
    }
};
AddCollectionForm = __decorate([(0, _betterReduxForm2.default)({
    form: 'addCollection',
    fields: ['name', '_booksValue', '_booksValues', '_booksOptions', 'description']
})], AddCollectionForm);
const mapStateToProps = (state, ownProps) => {
    return {
        routing: state.routing.locationBeforeTransitions,
        booksSearchAsOptions: selectors.booksAsOptions('search')(state)
    };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification })(AddCollectionForm);

/***/ })

};;
//# sourceMappingURL=chunk.15.js.map