exports.ids = [16];
exports.modules = {

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(20);

var _actions = __webpack_require__(13);

var actions = _interopRequireWildcard(_actions);

var _redux = __webpack_require__(17);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
let TestPlace = class TestPlace extends _react.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return _react2.default.createElement("div", null, _react2.default.createElement("h1", null, "Test Place"));
    }
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, dispatch => ({
    actions: (0, _redux.bindActionCreators)(actions, dispatch)
})
// mapDispatchToProps
// { actions: _.assign({}, actions) }
)(TestPlace);

/***/ })

};;
//# sourceMappingURL=chunk.16.js.map