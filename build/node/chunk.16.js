exports.ids = [16];
exports.modules = {

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(15);

var actions = _interopRequireWildcard(_actions);

var _redux = __webpack_require__(17);

var _form = __webpack_require__(82);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { sendNotification, loadSomething, saveSomething } from '../../store/actions'


function mapStateToProps(state) {
    return {
        routing: state.routing.locationBeforeTransitions
    };
}
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(_.assign({}, actions), dispatch)
//   }
// }

var TestPlace = function (_Component) {
    _inherits(TestPlace, _Component);

    function TestPlace(props) {
        _classCallCheck(this, TestPlace);

        return _possibleConstructorReturn(this, (TestPlace.__proto__ || Object.getPrototypeOf(TestPlace)).call(this, props));
    }
    // componentDidMount() {
    //   this.props.actions.updateBookProgress(89)
    // }


    _createClass(TestPlace, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, "Test Place"), _react2.default.createElement(_form.Button, { onClick: function onClick(e) {
                    _this2.props.actions.loadSomething();
                } }, "load"), _react2.default.createElement("span", null, " "), _react2.default.createElement(_form.Button, { onClick: function onClick(e) {
                    _this2.props.actions.saveSomething();
                } }, "save"));
        }
    }]);

    return TestPlace;
}(_react.Component);

var _default = (0, _reactRedux.connect)(mapStateToProps, function (dispatch) {
    return {
        actions: (0, _redux.bindActionCreators)(actions, dispatch)
    };
}
// mapDispatchToProps
// { actions: _.assign({}, actions) }
)(TestPlace);

exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/liang/Projects/readr/src/isomorphic/routes/TestPlace/TestPlace.tsx');

    __REACT_HOT_LOADER__.register(TestPlace, 'TestPlace', '/Users/liang/Projects/readr/src/isomorphic/routes/TestPlace/TestPlace.tsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/liang/Projects/readr/src/isomorphic/routes/TestPlace/TestPlace.tsx');
}();

;

/***/ })

};;
//# sourceMappingURL=chunk.16.js.map