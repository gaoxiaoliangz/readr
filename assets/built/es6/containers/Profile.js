import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleNotification, userAuth } from 'actions/index';
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
export default connect(mapStateToProps, { handleNotification, userAuth, fetchBooks, fetchCollections })(Profile);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29udGFpbmVycy9Qcm9maWxlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQWEsTUFBTSxPQUFPO09BQzVDLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYTtPQUU5QixFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWU7T0FDckQsTUFBTSxNQUFNLHNCQUFzQjtPQUNsQyxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWU7T0FDckQsZUFBZSxNQUFNLDRCQUE0QjtPQUNqRCxNQUFNLE1BQU0saUJBQWlCO0FBRXBDLHNCQUFzQixTQUFTO0lBRTdCLHNDQUFzQztJQUN0QyxtQ0FBbUM7SUFDbkMsSUFBSTtJQUVKLFlBQVksS0FBSztRQUNmLE1BQU0sS0FBSyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQTtRQUNsQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQTtRQUV4QyxNQUFNLENBQUMsQ0FDTCxxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFNBQVMsR0FDdEIscUJBQUMsR0FBRyxJQUFDLFNBQVMsRUFBQyxhQUFhLEdBQzFCLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsYUFBYSxHQUMxQixxQkFBQyxHQUFHLElBQUMsR0FBRyxFQUFDLGtEQUFrRCxFQUFDLEdBQUcsRUFBQyxhQUFhLEVBQUUsQ0FDM0UsRUFDTixxQkFBQyxJQUFJLElBQUMsU0FBUyxFQUFDLFVBQVUsY0FBZ0IsRUFDMUMscUJBQUMsSUFBSSxJQUFDLFNBQVMsRUFBQyxTQUFTLHNCQUF3QixFQUNqRCxvQkFBQyxNQUFNLGFBQVksQ0FDZixFQUNOLG9CQUFDLE1BQU0sR0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBRSxFQUFDLE9BQU8sRUFBRSxDQUFFLEVBQUcsRUFDaEQscUJBQUMsR0FBRyxTQUNGLG9CQUFDLGVBQWUsR0FBQyxRQUFRLEVBQUUsV0FBWSxFQUFHLENBQ3RDLENBQ0YsQ0FDUCxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFFRCx5QkFBeUIsS0FBSyxFQUFFLFFBQVE7SUFDdEMsTUFBTSxFQUNKLFVBQVUsRUFBRSxFQUFFLGFBQWEsRUFBRSxFQUM3QixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQ2pDLEdBQUcsS0FBSyxDQUFBO0lBRVQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxlQUFlLEtBQUssQ0FDbkMsZUFBZSxHQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBQyxFQUFFLENBQzVELENBQUE7SUFFRCxNQUFNLENBQUM7UUFDTCxTQUFTLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxXQUFXLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87UUFDdEIsVUFBVSxFQUFFLENBQUM7WUFDWCxHQUFHLENBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFCLENBQUM7UUFDSCxDQUFDLENBQUMsRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtLQUNqQyxDQUFBO0FBQ0gsQ0FBQztBQUVELGVBQWUsT0FBTyxDQUNwQixlQUFlLEVBQ2YsRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFTLENBQ3RFLENBQUMsT0FBTyxDQUFDLENBQUEifQ==