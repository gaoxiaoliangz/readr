import React, { Component } from 'react';
import BookPage from 'components/BookPage';
class BookPageList extends Component {
    render() {
        // let style = styles.BOOK_HD_STYLE
        // if(this.props.view.mode === "MOBILE") {
        //   style = styles.BOOK_MOBILE_STYLE
        // }
        // if(!this.props.isCalculated) {
        //   style.height = "100%"
        // }
        return (React.createElement("ul", {className: "pages", style: { height: this.props.height }}, this.props.pages.map((page, index) => {
            if (page.type === "page") {
                // style = Object.assign({}, style, page.props.style)
                return (React.createElement(BookPage, {style: page.props.style, bookId: this.props.bookId, key: index, page: page}));
            }
            else {
                console.error("Not type page!");
            }
        })));
    }
}
export default BookPageList;
