import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleNotification, userAuth } from 'actions/index';
import NavTab from '../components/NavTab';
import { fetchBooks, fetchCollections } from 'actions/index';
import BookListSection from 'components/BookListSection';
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
        return (React.createElement("div", {className: "profile"}, React.createElement("div", {className: "page-header"}, React.createElement("div", {className: "user-avatar"}, React.createElement("img", {src: "https://img3.doubanio.com/icon/ul43646706-43.jpg", alt: "user_avatar"})), React.createElement("span", {className: "username"}, "username"), React.createElement("span", {className: "tagline"}, "something to say")), React.createElement(NavTab, {tabs: ['收藏', '读过', '书评'], current: 0}), React.createElement("div", null, React.createElement(BookListSection, {bookList: newestBooks}))));
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
export default connect(mapStateToProps, { handleNotification, userAuth, fetchBooks, fetchCollections })(Profile);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29udGFpbmVycy9Qcm9maWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQWEsTUFBTSxPQUFPO09BQzVDLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYTtPQUU5QixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWU7T0FDckQsTUFBTSxNQUFNLHNCQUFzQjtPQUNsQyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWU7T0FDckQsZUFBZSxNQUFNLDRCQUE0QjtBQUV4RCxzQkFBc0IsU0FBUztJQUU3QixzQ0FBc0M7SUFDdEMsbUNBQW1DO0lBQ25DLElBQUk7SUFFSixZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDbEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUE7UUFFeEMsTUFBTSxDQUFDLENBQ0wscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxTQUFTLEdBQ3RCLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsYUFBYSxHQUMxQixxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLGFBQWEsR0FDMUIscUJBQUMsR0FBRyxJQUFDLEdBQUcsRUFBQyxrREFBa0QsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFFLENBQzNFLEVBQ04scUJBQUMsSUFBSSxJQUFDLFNBQVMsRUFBQyxVQUFVLGNBQWdCLEVBQzFDLHFCQUFDLElBQUksSUFBQyxTQUFTLEVBQUMsU0FBUyxzQkFBd0IsQ0FDN0MsRUFDTixvQkFBQyxNQUFNLEdBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBRSxFQUFHLEVBQ2hELHFCQUFDLEdBQUcsU0FDRixvQkFBQyxlQUFlLEdBQUMsUUFBUSxFQUFFLFdBQVksRUFBRyxDQUN0QyxDQUNGLENBQ1AsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQseUJBQXlCLEtBQUssRUFBRSxRQUFRO0lBQ3RDLE1BQU0sRUFDSixVQUFVLEVBQUUsRUFBRSxhQUFhLEVBQUUsRUFDN0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxFQUNqQyxHQUFHLEtBQUssQ0FBQTtJQUVULE1BQU0sT0FBTyxHQUFHLENBQUMsZUFBZSxLQUFLLENBQ25DLGVBQWUsR0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUMsRUFBRSxDQUM1RCxDQUFBO0lBRUQsTUFBTSxDQUFDO1FBQ0wsU0FBUyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1FBQ3RCLFVBQVUsRUFBRSxDQUFDO1lBQ1gsR0FBRyxDQUFBLENBQUMsSUFBSSxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLEVBQUU7UUFDSixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7S0FDakMsQ0FBQTtBQUNILENBQUM7QUFFRCxlQUFlLE9BQU8sQ0FDcEIsZUFBZSxFQUNmLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBUyxDQUN0RSxDQUFDLE9BQU8sQ0FBQyxDQUFBIn0=