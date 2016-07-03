import React, { Component } from 'react';
import { Link } from 'react-router';
import BookInfoPopup from 'components/BookInfoPopup';
export default class Book extends Component {
    render() {
        let book = this.props.book;
        let title = book.title;
        let description = book.description;
        let bookId = this.props.id;
        let author = book.author.map(a => a ? a.name : '').join(', ');
        return (React.createElement("li", {className: "book"}, React.createElement(Link, {to: '/book/' + bookId}, React.createElement("div", {className: "book-cover"}, React.createElement("img", {src: book.cover})), React.createElement("div", {className: "book-meta"}, React.createElement("span", {title: book.title, className: "book-name"}, book.title), React.createElement("span", {className: "book-author"}, author))), React.createElement(BookInfoPopup, {bookId: bookId, title: title, author: author, description: description})));
    }
}
