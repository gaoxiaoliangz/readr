import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchBooks, fetchCollections } from 'actions/index';
import BookListSection from 'components/BookListSection';
import CandyBox from 'components/CandyBox';
import Body from 'side-effects/Body';
import Button from '../elements/Button';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRecentReading: false
        };
    }
    static fetchData({ store }) {
        return store.dispatch(fetchBooks());
    }
    componentDidMount() {
        this.props.fetchBooks();
        this.props.fetchCollections();
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.session.isFetching && !nextProps.session.isFetching) {
            if (nextProps.session.user.role !== 'visitor') {
                this.props.fetchBooks('user');
                this.setState({
                    showRecentReading: true
                });
            }
        }
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
        return (React.createElement("div", null, React.createElement(Body, {className: "home"}), React.createElement("div", {className: "row"}, this.props.session.user.role === 'visitor' && !this.props.session.isFetching ? (React.createElement("div", {className: "hero-image"}, React.createElement("div", {className: "logo"}, "Readr"), React.createElement("div", {className: "page-title"}, "新一代 web 阅读体验"), React.createElement(Button, {to: "/signup"}, "注册"))) : null, React.createElement("div", {className: "col-md-8"}, React.createElement(BookListSection, {bookList: newestBooks, title: "新书速递"}), React.createElement(BookListSection, {bookList: list, title: listName, moreLink: "/collection"}), React.createElement(Link, {className: "view-more", to: "/collections"}, "浏览更多书单 >")), React.createElement("div", {className: "col-md-4"}, this.state.showRecentReading ? (React.createElement(CandyBox, {title: "最近阅读", list: userBooks})) : null))));
    }
}
function mapStateToProps(state, ownProps) {
    const { pagination: { filteredBooks }, entities: { books, collections } } = state;
    const genList = (whichPagination) => (whichPagination ? whichPagination.ids.map(id => books[id]) : []);
    return {
        userBooks: genList(filteredBooks['user']),
        newestBooks: genList(filteredBooks['newest']),
        session: state.session,
        collection: (() => {
            for (let prop in collections) {
                return collections[prop];
            }
        })()
    };
}
export default connect(mapStateToProps, { fetchBooks, fetchCollections })(Home);
