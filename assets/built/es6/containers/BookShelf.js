import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks } from 'actions/index';
import BookListSection from 'components/BookListSection';
class BookShelf extends Component {
    constructor(props) {
        super(props);
    }
    static fetchData({ store, params }) {
        return store.dispatch(fetchBooks('user'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va1NoZWxmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL0Jvb2tTaGVsZi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFhLE1BQU0sT0FBTztPQUM1QyxFQUFFLE9BQU8sRUFBRSxNQUFNLGFBQWE7T0FFOUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlO09BQ25DLGVBQWUsTUFBTSw0QkFBNEI7QUFFeEQsd0JBQXdCLFNBQVM7SUFNL0IsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFORCxPQUFPLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUM7UUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQU1ELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUE7UUFFdEMsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxTQUNGLG9CQUFDLGVBQWUsR0FBQyxRQUFRLEVBQUUsUUFBUyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUcsQ0FDaEQsQ0FDUCxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCx5QkFBeUIsS0FBSyxFQUFFLFFBQVE7SUFDdEMsTUFBTSxFQUNKLFVBQVUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUM3QixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFDcEIsR0FBRyxLQUFLLENBQUE7SUFFVCxNQUFNLE9BQU8sR0FBRyxDQUFDLGVBQWUsS0FBSyxDQUNuQyxlQUFlLEdBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFDLEVBQUUsQ0FDNUQsQ0FBQTtJQUVELE1BQU0sQ0FBQztRQUNMLFlBQVksRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzdDLENBQUE7QUFDSCxDQUFDO0FBRUQsZUFBZSxPQUFPLENBQ3BCLGVBQWUsRUFDZixFQUFFLFVBQVUsRUFBUyxDQUN0QixDQUFDLFNBQVMsQ0FBQyxDQUFBIn0=