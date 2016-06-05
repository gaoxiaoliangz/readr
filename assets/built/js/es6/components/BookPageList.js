import React, { Component } from 'react';
import BookPage from 'components/BookPage';
class BookPageList extends Component {
    render() {
        // let style = styles.BOOK_HD_STYLE
        // if(this.props.view.mode === "MOBILE") {
        //   style = styles.BOOK_MOBILE_STYLE
        // }
        // if(!this.props.isCalculated) {
        //   style.height = "100%"
        // }
        return (React.createElement("ul", {className: "pages", style: { height: this.props.height }}, this.props.pages.map((page, index) => {
            if (page.type === "page") {
                // style = Object.assign({}, style, page.props.style)
                return (React.createElement(BookPage, {style: page.props.style, bookId: this.props.bookId, key: index, page: page}));
            }
            else {
                console.error("Not type page!");
            }
        })));
    }
}
export default BookPageList;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9va1BhZ2VMaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb21wb25lbnRzL0Jvb2tQYWdlTGlzdC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUdqQyxRQUFRLE1BQU0scUJBQXFCO0FBRTFDLDJCQUEyQixTQUFTO0lBRWxDLE1BQU07UUFDSixtQ0FBbUM7UUFDbkMsMENBQTBDO1FBQzFDLHFDQUFxQztRQUNyQyxJQUFJO1FBRUosaUNBQWlDO1FBQ2pDLDBCQUEwQjtRQUMxQixJQUFJO1FBRUosTUFBTSxDQUFDLENBQ0wscUJBQUMsRUFBRSxJQUFDLFNBQVMsRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBRXJELElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLO1lBQy9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDeEIscURBQXFEO2dCQUNyRCxNQUFNLENBQUMsQ0FDTCxvQkFBQyxRQUFRLEdBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBTSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU8sRUFBQyxHQUFHLEVBQUUsS0FBTSxFQUFDLElBQUksRUFBRSxJQUFLLEVBQVksQ0FDbEcsQ0FBQTtZQUNILENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDSixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUE7WUFDakMsQ0FBQztRQUNILENBQUMsQ0FDRixDQUNFLENBQ04sQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsZUFBZSxZQUFZLENBQUEifQ==