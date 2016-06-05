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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFuYWdlQm9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb3JlL2Zyb250ZW5kL2NvbnRhaW5lcnMvY29uc29sZS9NYW5hZ2VCb29rcy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUNqQyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWE7T0FDOUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlO09BRW5DLElBQUksTUFBTSxtQkFBbUI7QUFFcEMsMEJBQTBCLFNBQVM7SUFNakMsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFORCxPQUFPLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBQztRQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBTUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUE7UUFFN0UsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxTQUNGLG9CQUFDLElBQUksR0FBQyxTQUFTLEVBQUMsY0FBYyxFQUFHLEVBQ2pDLHFCQUFDLEtBQUssU0FDSixxQkFBQyxLQUFLLFNBQ0oscUJBQUMsRUFBRSxTQUNELHFCQUFDLEVBQUUsY0FBUSxFQUNYLHFCQUFDLEVBQUUsZ0JBQVUsRUFDYixxQkFBQyxFQUFFLHdCQUFrQixFQUNyQixxQkFBQyxFQUFFLG1CQUFhLENBQ2IsRUFDSixjQUFjLEdBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLO1lBQzdDLE1BQU0sQ0FBQyxDQUNMLHFCQUFDLEVBQUUsSUFBQyxHQUFHLEVBQUUsS0FBTSxHQUNiLHFCQUFDLEVBQUUsU0FBRSxJQUFJLENBQUMsRUFBRyxDQUFLLEVBQ2xCLHFCQUFDLEVBQUUsU0FBRSxJQUFJLENBQUMsS0FBTSxDQUFLLEVBQ3JCLHFCQUFDLEVBQUUsU0FBRSxJQUFJLENBQUMsV0FBWSxDQUFLLEVBQzNCLHFCQUFDLEVBQUUsU0FBQyxxQkFBQyxDQUFDLElBQUMsSUFBSSxFQUFDLEdBQUcsWUFBVyxDQUFLLENBQzVCLENBQ04sQ0FBQTtRQUNILENBQUMsQ0FBQyxHQUFDLElBQUssQ0FDRixDQUNGLENBQ0osQ0FDUCxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCx5QkFBeUIsS0FBSyxFQUFFLFFBQVE7SUFDdEMsTUFBTSxFQUNKLFVBQVUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUM3QixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFDcEIsR0FBRyxLQUFLLENBQUE7SUFFVCxNQUFNLE9BQU8sR0FBRyxDQUFDLGVBQWUsS0FBSyxDQUNuQyxlQUFlLEdBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FDNUQsQ0FBQTtJQUVELE1BQU0sQ0FBQztRQUNMLGNBQWMsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2pELENBQUE7QUFDSCxDQUFDO0FBRUQsZUFBZSxPQUFPLENBQ3BCLGVBQWUsRUFDZixFQUFFLFVBQVUsRUFBUyxDQUN0QixDQUFDLFdBQVcsQ0FBQyxDQUFBIn0=