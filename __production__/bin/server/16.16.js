exports.ids = [16];
exports.modules = {

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(92);
	
	var _actions = __webpack_require__(93);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _AddCollectionForm = __webpack_require__(352);
	
	var _AddCollectionForm2 = _interopRequireDefault(_AddCollectionForm);
	
	var _api = __webpack_require__(206);
	
	var _api2 = _interopRequireDefault(_api);
	
	var _DocContainer = __webpack_require__(204);
	
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
	            _api2.default.addCollection(postData).then(function (result) {
	                _this2.props.sendNotification('添加成功！');
	                _this2.props.resetForm('addCollection');
	            }, function (error) {
	                _this2.props.sendNotification(error.message, 'error');
	            });
	        }
	    }, {
	        key: 'handleBooksValueChange',
	        value: function handleBooksValueChange(newVal) {
	            if (!_lodash2.default.isEmpty(newVal)) {
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification, resetForm: _actions.resetForm, loadBooks: _actions.loadBooks })(AddCollection);

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(90);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(92);
	
	var _actions = __webpack_require__(93);
	
	var _form = __webpack_require__(150);
	
	var _selectors = __webpack_require__(113);
	
	var selectors = _interopRequireWildcard(_selectors);
	
	var _lodash = __webpack_require__(10);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _betterReduxForm = __webpack_require__(117);
	
	var _betterReduxForm2 = _interopRequireDefault(_betterReduxForm);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var __assign = undefined && undefined.__assign || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s) {
	            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
	        }
	    }
	    return t;
	};
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
	            var _props = this.props;
	            var _props$fields = _props.fields;
	            var name = _props$fields.name;
	            var _booksValue = _props$fields._booksValue;
	            var _booksValues = _props$fields._booksValues;
	            var _booksOptions = _props$fields._booksOptions;
	            var description = _props$fields.description;
	            var handleSubmit = _props.handleSubmit;
	            var onSave = _props.onSave;
	            var onBooksValueChange = _props.onBooksValueChange;
	            var booksSearchAsOptions = _props.booksSearchAsOptions;
	
	            return _react2.default.createElement("div", null, _react2.default.createElement(_form.Input, __assign({ placeholder: "合集名称" }, name)), _react2.default.createElement(_form.SelectizeInput, { placeholder: "选择书籍", onInputChange: function onInputChange(newValue) {
	                    if (onBooksValueChange) {
	                        onBooksValueChange(newValue);
	                    }
	                    _booksValue.set(newValue);
	                }, value: _booksValue.get(), onValuesChange: _booksValues.onChange, options: booksSearchAsOptions, values: _booksValues.value || [] }), _react2.default.createElement(_form.Textarea, __assign({}, description, { placeholder: "描述" })), _react2.default.createElement(_form.Button, { onClick: handleSubmit(function (data) {
	                    var postData = _lodash2.default.pick(data, ['name', 'description']);
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
	exports.default = (0, _reactRedux.connect)(mapStateToProps, { sendNotification: _actions.sendNotification })(AddCollectionForm);

/***/ }

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9BZGRDb2xsZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaXNvbW9ycGhpYy9yb3V0ZXMvQWRkQ29sbGVjdGlvbi9jb21wb25lbnRzL0FkZENvbGxlY3Rpb25Gb3JtLnRzeCJdLCJuYW1lcyI6WyJBZGRDb2xsZWN0aW9uIiwicHJvcHMiLCJoYW5kbGVTYXZlIiwiYmluZCIsImhhbmRsZUJvb2tzVmFsdWVDaGFuZ2UiLCJkYXRhIiwiY3JlYXRvciIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJwb3N0RGF0YSIsIk9iamVjdCIsImFzc2lnbiIsImFkZENvbGxlY3Rpb24iLCJ0aGVuIiwic2VuZE5vdGlmaWNhdGlvbiIsInJlc2V0Rm9ybSIsImVycm9yIiwibWVzc2FnZSIsIm5ld1ZhbCIsImlzRW1wdHkiLCJsb2FkQm9va3MiLCJxIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwiY2xhc3NOYW1lIiwib25TYXZlIiwib25Cb29rc1ZhbHVlQ2hhbmdlIiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJub3RpZmljYXRpb24iLCJjb21wb25lbnRzIiwiZWxlbWVudHMiLCJzZWxlY3RvcnMiLCJfX2Fzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJwIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiX19kZWNvcmF0ZSIsImRlY29yYXRvcnMiLCJ0YXJnZXQiLCJrZXkiLCJkZXNjIiwiYyIsInIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJkIiwiUmVmbGVjdCIsImRlY29yYXRlIiwiZGVmaW5lUHJvcGVydHkiLCJBZGRDb2xsZWN0aW9uRm9ybSIsImZpZWxkcyIsIm5hbWUiLCJfYm9va3NWYWx1ZSIsIl9ib29rc1ZhbHVlcyIsIl9ib29rc09wdGlvbnMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZVN1Ym1pdCIsImJvb2tzU2VhcmNoQXNPcHRpb25zIiwicGxhY2Vob2xkZXIiLCJvbklucHV0Q2hhbmdlIiwibmV3VmFsdWUiLCJzZXQiLCJ2YWx1ZSIsImdldCIsIm9uVmFsdWVzQ2hhbmdlIiwib25DaGFuZ2UiLCJvcHRpb25zIiwidmFsdWVzIiwib25DbGljayIsInBpY2siLCJpdGVtcyIsIm1hcCIsIml0ZW0iLCJmb3JtIiwib3duUHJvcHMiLCJyb3V0aW5nIiwibG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyIsImJvb2tzQXNPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUNNQSxhOzs7QUFDRiw0QkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG1JQUNUQSxLQURTOztBQUVmLGVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsT0FBbEI7QUFDQSxlQUFLQyxzQkFBTCxHQUE4QixNQUFLQSxzQkFBTCxDQUE0QkQsSUFBNUIsT0FBOUI7QUFIZTtBQUlsQjs7OztvQ0FDVUUsSSxFQUFNO0FBQUE7O0FBQ2IsaUJBQU1DLFVBQVUsS0FBS0wsS0FBTCxDQUFXTSxPQUFYLENBQW1CQyxJQUFuQixDQUF3QkMsRUFBeEM7QUFDQSxpQkFBTUMsV0FBV0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLElBQWxCLEVBQXdCO0FBQ3JDQztBQURxQyxjQUF4QixDQUFqQjtBQUdBLDJCQUFJTyxhQUFKLENBQWtCSCxRQUFsQixFQUE0QkksSUFBNUIsQ0FBaUMsa0JBQVU7QUFDdkMsd0JBQUtiLEtBQUwsQ0FBV2MsZ0JBQVgsQ0FBNEIsT0FBNUI7QUFDQSx3QkFBS2QsS0FBTCxDQUFXZSxTQUFYLENBQXFCLGVBQXJCO0FBQ0gsY0FIRCxFQUdHLGlCQUFTO0FBQ1Isd0JBQUtmLEtBQUwsQ0FBV2MsZ0JBQVgsQ0FBNEJFLE1BQU1DLE9BQWxDLEVBQTJDLE9BQTNDO0FBQ0gsY0FMRDtB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bkIsTUFBUDtBQUlILEVBTEQ7bUJBTWUseUJBQVFELGVBQVIsRUFBeUIsRUFBRWIsMkNBQUYsRUFBekIsRUFBK0MwQyxpQkFBL0MsQyIsImZpbGUiOiIxNi4xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc2VuZE5vdGlmaWNhdGlvbiwgbG9hZEJvb2tzLCByZXNldEZvcm0gfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQWRkQ29sbGVjdGlvbkZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0FkZENvbGxlY3Rpb25Gb3JtJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCBEb2NDb250YWluZXIgZnJvbSAnLi4vLi4vY29udGFpbmVycy9Eb2NDb250YWluZXInO1xuY2xhc3MgQWRkQ29sbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLmhhbmRsZVNhdmUgPSB0aGlzLmhhbmRsZVNhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVCb29rc1ZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVCb29rc1ZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuICAgIGhhbmRsZVNhdmUoZGF0YSkge1xuICAgICAgICBjb25zdCBjcmVhdG9yID0gdGhpcy5wcm9wcy5zZXNzaW9uLnVzZXIuaWQ7XG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgICAgICAgY3JlYXRvclxuICAgICAgICB9KTtcbiAgICAgICAgYXBpLmFkZENvbGxlY3Rpb24ocG9zdERhdGEpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc2VuZE5vdGlmaWNhdGlvbign5re75Yqg5oiQ5Yqf77yBJyk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnJlc2V0Rm9ybSgnYWRkQ29sbGVjdGlvbicpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLnNlbmROb3RpZmljYXRpb24oZXJyb3IubWVzc2FnZSwgJ2Vycm9yJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVCb29rc1ZhbHVlQ2hhbmdlKG5ld1ZhbCkge1xuICAgICAgICBpZiAoIV8uaXNFbXB0eShuZXdWYWwpKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmxvYWRCb29rcyh7XG4gICAgICAgICAgICAgICAgcTogbmV3VmFsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChEb2NDb250YWluZXIsIHsgdGl0bGU6IFwi5re75Yqg5ZCI6ZuGXCIgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCB7IGNsYXNzTmFtZTogXCJwYWdlLXRpdGxlXCIgfSwgXCJcXHU2REZCXFx1NTJBMFxcdTU0MDhcXHU5NkM2XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChBZGRDb2xsZWN0aW9uRm9ybSwgeyBvblNhdmU6IHRoaXMuaGFuZGxlU2F2ZSwgb25Cb29rc1ZhbHVlQ2hhbmdlOiB0aGlzLmhhbmRsZUJvb2tzVmFsdWVDaGFuZ2UgfSkpKTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBub3RpZmljYXRpb246IHN0YXRlLmNvbXBvbmVudHMubm90aWZpY2F0aW9uLFxuICAgICAgICBlbGVtZW50czogc3RhdGUuZWxlbWVudHMsXG4gICAgICAgIHNlc3Npb246IHN0YXRlLnNlc3Npb25cbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIHsgc2VuZE5vdGlmaWNhdGlvbiwgcmVzZXRGb3JtLCBsb2FkQm9va3MgfSkoQWRkQ29sbGVjdGlvbik7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pc29tb3JwaGljL3JvdXRlcy9BZGRDb2xsZWN0aW9uL0FkZENvbGxlY3Rpb24udHN4XG4gKiovIiwidmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNlbmROb3RpZmljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9hY3Rpb25zJztcbmltcG9ydCB7IFRleHRhcmVhLCBCdXR0b24sIFNlbGVjdGl6ZUlucHV0LCBJbnB1dCB9IGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL2Zvcm0nO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4uLy4uLy4uL3N0b3JlL3NlbGVjdG9ycyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGZvcm0gZnJvbSAnYmV0dGVyLXJlZHV4LWZvcm0nO1xubGV0IEFkZENvbGxlY3Rpb25Gb3JtID0gY2xhc3MgQWRkQ29sbGVjdGlvbkZvcm0gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBmaWVsZHM6IHsgbmFtZSwgX2Jvb2tzVmFsdWUsIF9ib29rc1ZhbHVlcywgX2Jvb2tzT3B0aW9ucywgZGVzY3JpcHRpb24gfSwgaGFuZGxlU3VibWl0LCBvblNhdmUsIG9uQm9va3NWYWx1ZUNoYW5nZSwgYm9va3NTZWFyY2hBc09wdGlvbnMgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwgX19hc3NpZ24oeyBwbGFjZWhvbGRlcjogXCLlkIjpm4blkI3np7BcIiB9LCBuYW1lKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdGl6ZUlucHV0LCB7IHBsYWNlaG9sZGVyOiBcIumAieaLqeS5puexjVwiLCBvbklucHV0Q2hhbmdlOiBuZXdWYWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvbkJvb2tzVmFsdWVDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQm9va3NWYWx1ZUNoYW5nZShuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX2Jvb2tzVmFsdWUuc2V0KG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9LCB2YWx1ZTogX2Jvb2tzVmFsdWUuZ2V0KCksIG9uVmFsdWVzQ2hhbmdlOiBfYm9va3NWYWx1ZXMub25DaGFuZ2UsIG9wdGlvbnM6IGJvb2tzU2VhcmNoQXNPcHRpb25zLCB2YWx1ZXM6IF9ib29rc1ZhbHVlcy52YWx1ZSB8fCBbXSB9KSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dGFyZWEsIF9fYXNzaWduKHt9LCBkZXNjcmlwdGlvbiwgeyBwbGFjZWhvbGRlcjogXCLmj4/ov7BcIiB9KSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEJ1dHRvbiwgeyBvbkNsaWNrOiBoYW5kbGVTdWJtaXQoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3N0RGF0YSA9IF8ucGljayhkYXRhLCBbJ25hbWUnLCAnZGVzY3JpcHRpb24nXSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcG9zdERhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBfYm9va3NWYWx1ZXMudmFsdWUgPyBfYm9va3NWYWx1ZXMudmFsdWUubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSkgOiBbXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgb25TYXZlKHBvc3REYXRhKTtcbiAgICAgICAgICAgICAgICB9KSB9LCBcIlxcdTZERkJcXHU1MkEwXCIpKSk7XG4gICAgfVxufTtcbkFkZENvbGxlY3Rpb25Gb3JtID0gX19kZWNvcmF0ZShbXG4gICAgZm9ybSh7XG4gICAgICAgIGZvcm06ICdhZGRDb2xsZWN0aW9uJyxcbiAgICAgICAgZmllbGRzOiBbJ25hbWUnLCAnX2Jvb2tzVmFsdWUnLCAnX2Jvb2tzVmFsdWVzJywgJ19ib29rc09wdGlvbnMnLCAnZGVzY3JpcHRpb24nXSxcbiAgICB9KVxuXSwgQWRkQ29sbGVjdGlvbkZvcm0pO1xuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHJvdXRpbmc6IHN0YXRlLnJvdXRpbmcubG9jYXRpb25CZWZvcmVUcmFuc2l0aW9ucyxcbiAgICAgICAgYm9va3NTZWFyY2hBc09wdGlvbnM6IHNlbGVjdG9ycy5ib29rc0FzT3B0aW9ucygnc2VhcmNoJykoc3RhdGUpXG4gICAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBzZW5kTm90aWZpY2F0aW9uIH0pKEFkZENvbGxlY3Rpb25Gb3JtKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2lzb21vcnBoaWMvcm91dGVzL0FkZENvbGxlY3Rpb24vY29tcG9uZW50cy9BZGRDb2xsZWN0aW9uRm9ybS50c3hcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9