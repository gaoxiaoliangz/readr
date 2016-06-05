import React, { Component } from 'react';
import Book from 'components/Book';
class BookList extends Component {
    render() {
        let bookList = this.props.bookList;
        return (React.createElement("ul", {className: "book-list clearfix"}, bookList ? (bookList.map((book, index) => (React.createElement(Book, {id: book.id, key: index, book: book})))) : null));
    }
}
export default BookList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va0xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL2NvbXBvbmVudHMvQm9va0xpc3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU87T0FFakMsSUFBSSxNQUFNLGlCQUFpQjtBQUVsQyx1QkFBdUIsU0FBUztJQUM5QixNQUFNO1FBQ0osSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7UUFFbEMsTUFBTSxDQUFDLENBQ0wscUJBQUMsRUFBRSxJQUFDLFNBQVMsRUFBQyxvQkFBb0IsR0FFOUIsUUFBUSxHQUFDLENBQ1QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUksQ0FDM0Isb0JBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRyxFQUFDLEdBQUcsRUFBRSxLQUFNLEVBQUMsSUFBSSxFQUFFLElBQUssRUFBRyxDQUM5QyxDQUFDLENBQ0QsR0FBQyxJQUNILENBQ0UsQ0FDTixDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCxlQUFlLFFBQVEsQ0FBQSJ9