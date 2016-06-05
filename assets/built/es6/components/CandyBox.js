import React, { Component } from 'react';
import { Link } from 'react-router';
class CandyBox extends Component {
    render() {
        let list = this.props.list;
        let title = this.props.title;
        let moreLink = this.props.moreLink ? this.props.moreLink : null;
        return (React.createElement("div", {className: "candy-box"}, React.createElement("h3", {className: "box-title"}, title), moreLink ? (React.createElement(Link, {to: moreLink}, "查看更多")) : null, React.createElement("ul", null, list.map((item, index) => (React.createElement("li", {key: index}, React.createElement(Link, {to: item.link}, item.name)))))));
    }
}
export default CandyBox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FuZHlCb3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL2NvbXBvbmVudHMvQ2FuZHlCb3gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU87T0FDakMsRUFBRSxJQUFJLEVBQUUsTUFBTSxjQUFjO0FBU25DLHVCQUF1QixTQUFTO0lBQzlCLE1BQU07UUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTtRQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQTtRQUM1QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUE7UUFFM0QsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxXQUFXLEdBQ3hCLHFCQUFDLEVBQUUsSUFBQyxTQUFTLEVBQUMsV0FBVyxHQUFFLEtBQU0sQ0FBSyxFQUVwQyxRQUFRLEdBQUMsQ0FDUCxvQkFBQyxJQUFJLEdBQUMsRUFBRSxFQUFFLFFBQVMsVUFBWSxDQUNoQyxHQUFDLElBQ0gsRUFDRCxxQkFBQyxFQUFFLFNBRUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUssQ0FDeEIscUJBQUMsRUFBRSxJQUFDLEdBQUcsRUFBRSxLQUFNLEdBQUMsb0JBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSyxHQUFFLElBQUksQ0FBQyxJQUFLLENBQU8sQ0FBSyxDQUM3RCxDQUNGLENBQ0UsQ0FDRCxDQUNQLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUVELGVBQWUsUUFBUSxDQUFBIn0=