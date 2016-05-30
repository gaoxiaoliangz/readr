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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va0luZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb3JlL2Zyb250ZW5kL2NvbnRhaW5lcnMvQm9va0luZm8udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU87T0FFakMsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhO09BQzlCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZTtPQUNsQyxPQUFPLE1BQU0sb0JBQW9CO09BR2pDLE1BQU0sTUFBTSxpQkFBaUI7T0FFN0IsQ0FBQyxNQUFNLFFBQVE7T0FDZixJQUFJLE1BQU0sbUJBQW1CO0FBRXBDLHVCQUF1QixTQUFTO0lBUTlCLFlBQVksS0FBSztRQUNmLE1BQU0sS0FBSyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFBO0lBQy9CLENBQUM7SUFQRCxPQUFPLFNBQVMsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUM7UUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFPRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBQyxFQUFFLENBQUE7UUFFekQsTUFBTSxDQUFDLENBQ0wscUJBQUMsT0FBTyxJQUFDLFNBQVMsRUFBQyw2QkFBNkIsR0FDOUMsb0JBQUMsSUFBSSxHQUFDLFNBQVMsRUFBQyxXQUFXLEVBQUcsRUFFNUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBQyxDQUNsQixvQkFBQyxPQUFPLE9BQUcsQ0FDWixHQUFDLElBQ0gsRUFDRCxxQkFBQyxNQUFNLElBQUMsU0FBUyxFQUFDLGtCQUFrQixHQUNsQyxxQkFBQyxHQUFHLElBQUMsU0FBUyxFQUFDLFVBQVUsR0FFckIsUUFBUSxDQUFDLEtBQUssR0FBQyxDQUNiLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsWUFBWSxHQUN6QixxQkFBQyxHQUFHLElBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFNLEVBQUcsQ0FDeEIsQ0FDUCxHQUFDLElBQ0gsQ0FDRyxFQUNOLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsV0FBVyxHQUN4QixxQkFBQyxFQUFFLElBQUMsU0FBUyxFQUFDLFdBQVcsR0FBRSxRQUFRLENBQUMsS0FBTSxDQUFLLEVBQy9DLHFCQUFDLEdBQUcsSUFBQyxTQUFTLEVBQUMsYUFBYSxHQUMxQixxQkFBQyxNQUFNLGdCQUFLLFFBQVEsQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUMsRUFBRyxDQUFTLENBQ2hGLEVBRUosUUFBUSxDQUFDLEtBQUssR0FBQyxDQUNiLG9CQUFDLE1BQU0sR0FBQyxFQUFFLEVBQUUsZ0JBQWdCLFFBQVEsQ0FBQyxFQUFFLEVBQUcsRUFBQyxLQUFLLEVBQUMsTUFBTSxRQUFZLENBQ3BFLEdBQUMsSUFDSCxDQUVHLENBQ0MsRUFFUCxRQUFRLENBQUMsV0FBVyxHQUFDLENBQ25CLHFCQUFDLEdBQUcsU0FDRixxQkFBQyxFQUFFLGdCQUFVLEVBQ2IscUJBQUMsQ0FBQyxTQUFFLFFBQVEsQ0FBQyxXQUFZLENBQUksQ0FDekIsQ0FDUCxHQUFDLElBQ0gsQ0FDTyxDQUNYLENBQUE7SUFDSCxDQUFDO0FBQ0gsQ0FBQztBQUdELGVBQWUsT0FBTyxDQUNwQixDQUFDLEtBQUssRUFBRSxRQUFhLEtBQUksQ0FBQztJQUN4QixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7Q0FDbkQsQ0FBQyxFQUNGLEVBQUUsU0FBUyxFQUFTLENBQ3JCLENBQUMsUUFBUSxDQUFDLENBQUEifQ==