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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29tcG9uZW50cy9Cb29rLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPO09BQ2pDLEVBQUUsSUFBSSxFQUFFLE1BQU0sY0FBYztPQUM1QixhQUFhLE1BQU0sMEJBQTBCO0FBRXBELGtDQUFrQyxTQUFTO0lBQ3pDLE1BQU07UUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQTtRQUMxQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ3RCLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUE7UUFDbEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUE7UUFDMUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUU3RCxNQUFNLENBQUMsQ0FDTCxxQkFBQyxFQUFFLElBQUMsU0FBUyxFQUFDLE1BQU0sR0FDbEIsb0JBQUMsSUFBSSxHQUFDLEVBQUUsRUFBRSxRQUFRLEdBQUcsTUFBTyxHQUMxQixxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFlBQVksR0FBQyxxQkFBQyxHQUFHLElBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFNLEVBQUUsQ0FBTSxFQUN6RCxxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFdBQVcsR0FDeEIscUJBQUMsSUFBSSxJQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBTSxFQUFDLFNBQVMsRUFBQyxXQUFXLEdBQUUsSUFBSSxDQUFDLEtBQU0sQ0FBTyxFQUNsRSxxQkFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLGFBQWEsR0FBRSxNQUFPLENBQU8sQ0FDekMsQ0FDRCxFQUNQLG9CQUFDLGFBQWEsR0FBQyxNQUFNLEVBQUUsTUFBTyxFQUFDLEtBQUssRUFBRSxLQUFNLEVBQUMsTUFBTSxFQUFFLE1BQU8sRUFBQyxXQUFXLEVBQUUsV0FBWSxFQUFHLENBQ3RGLENBQ04sQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBQUEifQ==