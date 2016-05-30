import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBook } from 'actions/index';
import Loading from 'components/Loading';
import Button from 'elements/Button';
import _ from 'lodash';
import Body from 'side-effects/Body';
class BookInfo extends Component {
    constructor(props) {
        super(props);
        this.bookId = props.params.id;
    }
    static fetchData({ store, params }) {
        return store.dispatch(fetchBook(params.id));
    }
    componentDidMount() {
        this.props.fetchBook(this.bookId);
    }
    render() {
        let bookInfo = this.props.bookInfo ? this.props.bookInfo : {};
        return (React.createElement("article", {className: "book-info content-container"}, React.createElement(Body, {className: "book-info"}), _.isEmpty(bookInfo) ? (React.createElement(Loading, null)) : null, React.createElement("header", {className: "book-info-header"}, React.createElement("div", {className: "left-col"}, bookInfo.cover ? (React.createElement("div", {className: "book-cover"}, React.createElement("img", {src: bookInfo.cover}))) : null), React.createElement("div", {className: "right-col"}, React.createElement("h1", {className: "book-name"}, bookInfo.title), React.createElement("div", {className: "book-author"}, React.createElement("strong", null, "作者：", bookInfo.author ? bookInfo.author.map(a => a.name).join(', ') : '')), bookInfo.title ? (React.createElement(Button, {to: `/viewer/book/${bookInfo.id}`, color: "blue"}, "阅读")) : null)), bookInfo.description ? (React.createElement("div", null, React.createElement("h2", null, "内容简介"), React.createElement("p", null, bookInfo.description))) : null));
    }
}
export default connect((state, ownProps) => ({
    bookInfo: state.entities.books[ownProps.params.id]
}), { fetchBook })(BookInfo);
