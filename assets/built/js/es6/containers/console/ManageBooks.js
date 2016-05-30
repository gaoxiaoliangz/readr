import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from 'actions/index';
import Body from 'side-effects/Body';
class ManageBooks extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData({ store }) {
        return store.dispatch(fetchBooks('newest'));
    }
    componentDidMount() {
        this.props.fetchBooks('newest');
    }
    render() {
        let bookListNewest = this.props.bookListNewest ? this.props.bookListNewest : null;
        return (React.createElement("div", null, React.createElement(Body, {className: "manage-books"}), React.createElement("table", null, React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "ID"), React.createElement("td", null, "Name"), React.createElement("td", null, "Date created"), React.createElement("td", null, "Actions")), bookListNewest ? bookListNewest.map((book, index) => {
            return (React.createElement("tr", {key: index}, React.createElement("td", null, book.id), React.createElement("td", null, book.title), React.createElement("td", null, book.dateCreated), React.createElement("td", null, React.createElement("a", {href: "#"}, "Delete"))));
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
export default connect(mapStateToProps, { fetchBooks })(ManageBooks);
