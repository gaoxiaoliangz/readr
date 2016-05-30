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
        return (React.createElement("div", {className: "book-info-popup popup"}, React.createElement("h2", {className: "title"}, title), React.createElement("p", {className: "author"}, author), React.createElement(Button, {color: "blue", to: "/viewer/book/" + bookId}, "阅读"), React.createElement("div", {className: "description"}, React.createElement("p", null, description))));
    }
}
export default BookInfoPopup;
