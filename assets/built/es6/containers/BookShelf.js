import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from 'actions/index';
import BookListSection from 'components/BookListSection';
class BookShelf extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData({ store, params }) {
        return store.dispatch(fetchBooks());
    }
    componentDidMount() {
        this.props.fetchBooks('user');
    }
    render() {
        let bookList = this.props.bookListUser;
        return (React.createElement("div", null, React.createElement(BookListSection, {bookList: bookList, title: "我的书架"})));
    }
}
function mapStateToProps(state, ownProps) {
    const { pagination: { filteredBooks }, entities: { books } } = state;
    const genList = (whichPagination) => (whichPagination ? whichPagination.ids.map(id => books[id]) : []);
    return {
        bookListUser: genList(filteredBooks['user']),
    };
}
export default connect(mapStateToProps, { fetchBooks })(BookShelf);
