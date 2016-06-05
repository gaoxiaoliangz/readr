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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va0xpc3RTZWN0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb21wb25lbnRzL0Jvb2tMaXN0U2VjdGlvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUNqQyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWM7T0FDNUIsUUFBUSxNQUFNLHFCQUFxQjtBQUUxQyw4QkFBOEIsU0FBUztJQUNyQyxNQUFNO1FBQ0osSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUE7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUE7UUFDNUIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFBO1FBRTNELE1BQU0sQ0FBQyxDQUNMLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsbUJBQW1CLEdBQ2hDLHFCQUFDLEVBQUUsSUFBQyxTQUFTLEVBQUMsZUFBZSxHQUFFLEtBQU0sQ0FBSyxFQUV4QyxRQUFRLEdBQUMsQ0FDUCxvQkFBQyxJQUFJLEdBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxFQUFFLEVBQUUsUUFBUyxVQUFZLENBQ2pELEdBQUMsSUFDSCxFQUNELG9CQUFDLFFBQVEsR0FBQyxRQUFRLEVBQUUsUUFBUyxFQUFHLENBQzVCLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxlQUFlLENBQUEifQ==