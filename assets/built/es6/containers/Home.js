import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, fetchCollections } from 'actions/index';
import BookListSection from 'components/BookListSection';
import CandyBox from 'components/CandyBox';
import Body from 'side-effects/Body';
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
        return (React.createElement("div", null, React.createElement(Body, {className: "home"}), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-8"}, React.createElement(BookListSection, {bookList: newestBooks, title: "新书速递"}), React.createElement(BookListSection, {bookList: list, title: listName})), React.createElement("div", {className: "col-md-4"}, this.state.showRecentReading ? (React.createElement(CandyBox, {title: "最近阅读", list: userBooks})) : null))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29udGFpbmVycy9Ib21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPO09BQ2pDLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYTtPQUU5QixFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWU7T0FDckQsZUFBZSxNQUFNLDRCQUE0QjtPQUVqRCxRQUFRLE1BQU0scUJBQXFCO09BQ25DLElBQUksTUFBTSxtQkFBbUI7QUFNcEMsbUJBQW1CLFNBQVM7SUFNMUIsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxpQkFBaUIsRUFBRSxLQUFLO1NBQ3pCLENBQUE7SUFDSCxDQUFDO0lBVEQsT0FBTyxTQUFTLENBQUMsRUFBQyxLQUFLLEVBQUM7UUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQVNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQTtJQUMvQixDQUFDO0lBRUQseUJBQXlCLENBQUMsU0FBUztRQUNqQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkUsRUFBRSxDQUFBLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxLQUFLLENB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