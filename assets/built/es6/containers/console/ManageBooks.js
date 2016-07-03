import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from 'actions/index';
import Body from 'side-effects/Body';
import apis from 'utils/apis';
import { sendNotification } from 'actions/index';
class ManageBooks extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData({ store }) {
        return store.dispatch(fetchBooks());
    }
    componentDidMount() {
        this.props.fetchBooks();
    }
    render() {
        let bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
        return (React.createElement("div", null, React.createElement(Body, {className: "manage-books"}), React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "ID"), React.createElement("td", null, "Name"), React.createElement("td", null, "Date created"), React.createElement("td", null, "Actions")), bookListNewest ? bookListNewest.map((book, index) => {
            return (React.createElement("tr", {key: index}, React.createElement("td", null, book.id), React.createElement("td", null, book.title), React.createElement("td", null, book.dateCreated), React.createElement("td", null, React.createElement("a", {onClick: e => {
                e.preventDefault();
                apis.deleteBook(book.id).then(res => {
                    this.props.sendNotification('删除成功！');
                    this.props.fetchBooks();
                });
                return false;
            }, href: "#"}, "Delete"))));
        }) : null))));
    }
}
function mapStateToProps(state, ownProps) {
    const { pagination: { filteredBooks }, entities: { books } } = state;
    const genList = (whichPagination) => (whichPagination ? whichPagination.ids.map(id => books[id]) : []);
    return {
        bookListNewest: genList(filteredBooks['newest'])
    };
}
export default connect(mapStateToProps, { fetchBooks, sendNotification })(ManageBooks);
