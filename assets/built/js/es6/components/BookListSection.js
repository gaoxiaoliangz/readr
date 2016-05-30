import React, { Component } from 'react';
import { Link } from 'react-router';
import BookList from 'components/BookList';
class BookListSection extends Component {
    render() {
        let bookList = this.props.bookList;
        let title = this.props.title;
        let moreLink = this.props.moreLink ? this.props.moreLink : null;
        return (React.createElement("div", {className: "book-list-section"}, React.createElement("h2", {className: "section-title"}, title), moreLink ? (React.createElement(Link, {className: "more", to: moreLink}, "查看更多")) : null, React.createElement(BookList, {bookList: bookList})));
    }
}
export default BookListSection;
