import React, { Component } from 'react';
import Book from 'components/Book';
class BookList extends Component {
    render() {
        let bookList = this.props.bookList;
        return (React.createElement("ul", {className: "book-list clearfix"}, bookList ? (bookList.map((book, index) => (React.createElement(Book, {id: book.id, key: index, book: book})))) : null));
    }
}
export default BookList;
