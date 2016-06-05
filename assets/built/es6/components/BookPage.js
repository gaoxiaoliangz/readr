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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQm9va1BhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O09BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztBQUl4Qyx1QkFBdUIsU0FBUztJQUM5QixNQUFNO1FBQ0osSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUE7UUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFFNUIsTUFBTSxDQUFDLENBQ0wscUJBQUMsRUFBRSxJQUFDLEtBQUssRUFBRSxLQUFNLEdBQ2YscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxTQUFTLEdBRXBCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsQ0FBQyxDQUFBO1lBQzdDLENBQUM7WUFDRCxNQUFNLENBQUMsQ0FDTCxxQkFBQyxDQUFDLGdCQUFLLEtBQUssS0FBRyxDQUFDLEdBQUMsRUFBQyxLQUFLLEVBQUUsRUFBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUMsRUFBQyxHQUFDLEVBQUUsR0FDekQsR0FBRyxFQUFFLEtBQU0sSUFDVixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVMsQ0FDbkIsQ0FDTCxDQUFBO1FBQ0gsQ0FBQyxDQUNGLENBQ0csRUFDTixxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFNBQVMsR0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU8sQ0FBTSxDQUMvQyxDQUNOLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWUsUUFBUSxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQm9va1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcblxuY2xhc3MgQm9va1BhZ2UgZXh0ZW5kcyBDb21wb25lbnQ8YW55LCBhbnk+IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBwYWdlID0gdGhpcy5wcm9wcy5wYWdlXG4gICAgbGV0IHN0eWxlID0gdGhpcy5wcm9wcy5zdHlsZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBzdHlsZT17c3R5bGV9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBwYWdlLnByb3BzLmNoaWxkcmVuLm1hcCgobm9kZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKG5vZGUudHlwZSAhPT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5zdXBwb3J0ZWQgY29udGVudCBmb3VuZCFcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxwIHsuLi5pbmRleD09PTA/e3N0eWxlOiB7bWFyZ2luVG9wOiBwYWdlLnByb3BzLm9mZnNldH19Ont9fVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH0gPlxuICAgICAgICAgICAgICAgICAge25vZGUucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ub1wiPntwYWdlLnByb3BzLnBhZ2VOb308L2Rpdj5cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tQYWdlXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
