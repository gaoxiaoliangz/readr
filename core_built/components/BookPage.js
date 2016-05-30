var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React, { Component } from 'react';
class BookPage extends Component {
    render() {
        let page = this.props.page;
        let style = this.props.style;
        return (React.createElement("li", {style: style}, React.createElement("div", {className: "content"}, page.props.children.map((node, index) => {
            if (node.type !== "p") {
                console.error("Unsupported content found!");
            }
            return (React.createElement("p", __assign({}, index === 0 ? { style: { marginTop: page.props.offset } } : {}, {key: index}), node.props.children));
        })), React.createElement("div", {className: "page-no"}, page.props.pageNo)));
    }
}
export default BookPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va1BhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb3JlL2Zyb250ZW5kL2NvbXBvbmVudHMvQm9va1BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O09BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztBQUl4Qyx1QkFBdUIsU0FBUztJQUM5QixNQUFNO1FBQ0osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7UUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFFNUIsTUFBTSxDQUFDLENBQ0wscUJBQUMsRUFBRSxJQUFDLEtBQUssRUFBRSxLQUFNLEdBQ2YscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxTQUFTLEdBRXBCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1lBQzdDLENBQUM7WUFDRCxNQUFNLENBQUMsQ0FDTCxxQkFBQyxDQUFDLGdCQUFLLEtBQUssS0FBRyxDQUFDLEdBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsRUFBQyxHQUFDLEVBQUUsR0FDekQsR0FBRyxFQUFFLEtBQU0sSUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVMsQ0FDbkIsQ0FDTCxDQUFBO1FBQ0gsQ0FBQyxDQUNGLENBQ0csRUFDTixxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFNBQVMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU8sQ0FBTSxDQUMvQyxDQUNOLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWUsUUFBUSxDQUFBIn0=