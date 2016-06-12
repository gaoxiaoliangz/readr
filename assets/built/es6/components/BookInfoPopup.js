import React, { Component } from 'react';
import Button from 'elements/Button';
class BookInfoPopup extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let author = this.props.author;
        let title = this.props.title;
        let description = this.props.description;
        let bookId = this.props.bookId;
        return (React.createElement("div", {className: "book-info-popup popup"}, React.createElement("h2", {className: "title"}, title), React.createElement("p", {className: "author"}, author), React.createElement(Button, {color: "blue", to: '/viewer/book/' + bookId}, "阅读"), React.createElement("div", {className: "description"}, React.createElement("p", null, description))));
    }
}
export default BookInfoPopup;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va0luZm9Qb3B1cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29tcG9uZW50cy9Cb29rSW5mb1BvcHVwLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQWEsTUFBTSxPQUFPO09BRTVDLE1BQU0sTUFBTSxpQkFBaUI7QUFFcEMsNEJBQTRCLFNBQVM7SUFDbkMsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7UUFDOUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFDNUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUE7UUFDeEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUE7UUFFOUIsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyx1QkFBdUIsR0FDcEMscUJBQUMsRUFBRSxJQUFDLFNBQVMsRUFBQyxPQUFPLEdBQUUsS0FBTSxDQUFLLEVBQ2xDLHFCQUFDLENBQUMsSUFBQyxTQUFTLEVBQUMsUUFBUSxHQUFFLE1BQU8sQ0FBSSxFQUNsQyxvQkFBQyxNQUFNLEdBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUUsZUFBZSxHQUFHLE1BQU8sUUFBWSxFQUM5RCxxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLGFBQWEsR0FDMUIscUJBQUMsQ0FBQyxTQUFFLFdBQVksQ0FBSSxDQUNoQixDQUNGLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxhQUFhLENBQUEifQ==