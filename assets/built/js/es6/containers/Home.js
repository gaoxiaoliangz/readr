import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, fetchCollections } from 'actions/index';
import BookListSection from 'components/BookListSection';
import CandyBox from 'components/CandyBox';
import Body from 'side-effects/Body';
class Home extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData({ store }) {
        return store.dispatch(fetchBooks('newest'));
    }
    componentDidMount() {
        this.props.fetchBooks('newest');
        this.props.fetchBooks('user');
        this.props.fetchCollections();
    }
    render() {
        let newestBooks = this.props.newestBooks;
        let hotBooks = newestBooks.map((book, index) => {
            return {
                name: book.title,
                link: `/book/${book.id}`
            };
        });
        let userBooks = this.props.userBooks.map((book, index) => {
            return {
                name: book.title,
                link: `/book/${book.id}`
            };
        });
        let listName = this.props.collection ? this.props.collection.name : '';
        let list = this.props.collection ? this.props.collection.items : [];
        return (React.createElement("div", null, React.createElement(Body, {className: "home"}), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-8"}, React.createElement(BookListSection, {bookList: newestBooks, title: "新书速递222"}), React.createElement(BookListSection, {bookList: list, title: listName})), React.createElement("div", {className: "col-md-4"}, React.createElement(CandyBox, {title: "最近阅读", list: userBooks})))));
    }
}
function mapStateToProps(state, ownProps) {
    const { pagination: { filteredBooks }, entities: { books, collections } } = state;
    const genList = (whichPagination) => (whichPagination ? whichPagination.ids.map(id => books[id]) : []);
    return {
        userBooks: genList(filteredBooks['user']),
        newestBooks: genList(filteredBooks['newest']),
        collection: (() => {
            for (let prop in collections) {
                return collections[prop];
            }
        })()
    };
}
export default connect(mapStateToProps, { fetchBooks, fetchCollections })(Home);
