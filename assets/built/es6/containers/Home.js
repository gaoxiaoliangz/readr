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
        return (React.createElement("div", null, React.createElement(Body, {className: "home"}), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-8"}, React.createElement(BookListSection, {bookList: newestBooks, title: "新书速递"}), React.createElement(BookListSection, {bookList: list, title: listName})), React.createElement("div", {className: "col-md-4"}, React.createElement(CandyBox, {title: "最近阅读", list: userBooks})))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29udGFpbmVycy9Ib21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPO09BQ2pDLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYTtPQUU5QixFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWU7T0FDckQsZUFBZSxNQUFNLDRCQUE0QjtPQUVqRCxRQUFRLE1BQU0scUJBQXFCO09BQ25DLElBQUksTUFBTSxtQkFBbUI7QUFFcEMsbUJBQW1CLFNBQVM7SUFNMUIsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFORCxPQUFPLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBQztRQUN0QixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBTUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUE7UUFDeEMsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLO1lBQ3pDLE1BQU0sQ0FBQztnQkFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxTQUFTLElBQUksQ0FBQyxFQUFFLEVBQUU7YUFDekIsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUs7WUFDbkQsTUFBTSxDQUFDO2dCQUNMLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDaEIsSUFBSSxFQUFFLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTthQUN6QixDQUFBO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUMsRUFBRSxDQUFBO1FBQ2xFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBQyxFQUFFLENBQUE7UUFFL0QsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxTQUNGLG9CQUFDLElBQUksR0FBQyxTQUFTLEVBQUMsTUFBTSxFQUFHLEVBQ3pCLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsS0FBSyxHQUNsQixxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFVBQVUsR0FDdkIsb0JBQUMsZUFBZSxHQUFDLFFBQVEsRUFBRSxXQUFZLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBRyxFQUN2RCxvQkFBQyxlQUFlLEdBQUMsUUFBUSxFQUFFLElBQUssRUFBQyxLQUFLLEVBQUUsUUFBUyxFQUFHLENBQ2hELEVBQ04scUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxVQUFVLEdBQ3ZCLG9CQUFDLFFBQVEsR0FBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBRSxTQUFVLEVBQUcsQ0FDdEMsQ0FDRixDQUNGLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQseUJBQXlCLEtBQUssRUFBRSxRQUFRO0lBQ3RDLE1BQU0sRUFDSixVQUFVLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFDN0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUNqQyxHQUFHLEtBQUssQ0FBQTtJQUVULE1BQU0sT0FBTyxHQUFHLENBQUMsZUFBZSxLQUFLLENBQ25DLGVBQWUsR0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUM1RCxDQUFBO0lBRUQsTUFBTSxDQUFDO1FBQ0wsU0FBUyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsVUFBVSxFQUFFLENBQUM7WUFDWCxHQUFHLENBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFCLENBQUM7UUFDSCxDQUFDLENBQUMsRUFBRTtLQUNMLENBQUE7QUFDSCxDQUFDO0FBRUQsZUFBZSxPQUFPLENBQ3BCLGVBQWUsRUFDZixFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBUyxDQUN4QyxDQUFDLElBQUksQ0FBQyxDQUFBIn0=