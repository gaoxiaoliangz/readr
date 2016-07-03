import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendNotification, userAuth } from 'actions/index';
import NavTab from '../components/NavTab';
import { fetchBooks, fetchCollections } from 'actions/index';
import BookListSection from 'components/BookListSection';
import Button from 'elements/Button';
class Profile extends Component {
    // static fetchData({store, params}) {
    //   return store.dispatch(fetch())
    // }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.userAuth();
        this.props.fetchBooks('newest');
    }
    render() {
        let user = this.props.session.user;
        let newestBooks = this.props.newestBooks;
        return (React.createElement("div", {className: "profile"}, React.createElement("div", {className: "page-header"}, React.createElement("div", {className: "user-avatar"}, React.createElement("img", {src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar"})), React.createElement("span", {className: "username"}, "username"), React.createElement("span", {className: "tagline"}, "something to say"), React.createElement(Button, null, "编辑")), React.createElement(NavTab, {tabs: ['收藏', '读过', '书评'], current: 0}), React.createElement("div", null, React.createElement(BookListSection, {bookList: newestBooks}))));
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
        })(),
        notification: state.notification
    };
}
export default connect(mapStateToProps, { sendNotification, userAuth, fetchBooks, fetchCollections })(Profile);
