"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var react_1 = require('react');
var Tab = (function (_super) {
    __extends(Tab, _super);
    function Tab(props) {
        _super.call(this, props);
    }
    Tab.prototype.componentDidMount = function () {
    };
    Tab.prototype.render = function () {
        return (react_1["default"].createElement("div", {className: "tab"}, this.props.children));
    };
    return Tab;
}(react_1.Component));
exports.__esModule = true;
exports["default"] = Tab;
