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
        return store.dispatch(fetchBooks('newest'));
    }
    componentDidMount() {
        this.props.fetchBooks('newest');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29udGFpbmVycy9Ib21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPO09BQ2pDLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYTtPQUM5QixFQUFFLElBQUksRUFBRSxNQUFNLGNBQWM7T0FDNUIsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlO09BQ3JELGVBQWUsTUFBTSw0QkFBNEI7T0FFakQsUUFBUSxNQUFNLHFCQUFxQjtPQUNuQyxJQUFJLE1BQU0sbUJBQW1CO09BQzdCLE1BQU0sTUFBTSxvQkFBb0I7QUFNdkMsbUJBQW1CLFNBQVM7SUFNMUIsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxpQkFBaUIsRUFBRSxLQUFLO1NBQ3pCLENBQUE7SUFDSCxDQUFDO0lBVEQsT0FBTyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUM7UUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQVNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQseUJBQXlCLENBQUMsU0FBUztRQUNqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkUsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMs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