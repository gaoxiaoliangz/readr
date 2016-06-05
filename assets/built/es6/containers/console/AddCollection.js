import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchBooks, handleNotification } from 'actions/index';
import Input from 'elements/Input';
import Button from 'elements/Button';
import SelectizeInput from 'elements/SelectizeInput';
import Notification from 'components/Notification';
import apis from 'utils/apis';
class AddCollection extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            bookResults: [],
            collectedBooks: [],
            collectionName: '',
            collectionDesc: ''
        };
        this.state = Object.assign({}, this.defaultState);
    }
    // getCurrentSearchResults() {
    //   let query = this.state.booksToAdd
    //   let books = this.props.books
    //
    //   return this.props.bookSearchResults?this.props.bookSearchResults[query].ids.map((id, index) => {
    //     console.log(id);
    //     return books[id]
    //   }):[]
    // }
    addCollection(e) {
        e.preventDefault();
        let name = this.state.collectionName;
        let items = JSON.stringify(this.state.collectedBooks.map(a => a.id));
        let description = this.state.collectionDesc;
        const data = { name, items, description };
        apis.addCollection(data).then(result => {
            this.props.handleNotification('添加成功');
            this.setState(this.defaultState);
        }, error => {
            this.props.handleNotification(error.message);
        });
    }
    searchBooks(e) {
        let query = e.target.value;
        if (query !== '') {
            apis.searchBooks(query).then(response => {
                console.log(response);
                this.setState({
                    bookResults: response
                });
            });
        }
    }
    // searchTags(e) {
    //   let query = e.target.value
    //   if(query !== '') {
    //     apis.searchTags(query).then(response => {
    //       console.log(response)
    //       this.setState({
    //         tagResults: response
    //       })
    //     })
    //   }
    // }
    componentDidMount() {
    }
    render() {
        let notification = this.props.notification;
        return (React.createElement("form", null, React.createElement(Notification, {notification: notification}), React.createElement("h1", {className: "page-title"}, "Add Collection"), React.createElement(Input, {value: this.state.collectionName, onChange: (e) => this.setState({ collectionName: e.target.value }), placeholder: "Name"}), React.createElement(SelectizeInput, {ref: "collectedBooks", onChange: this.searchBooks.bind(this), onValuesChange: (targetIndex, type) => {
            switch (type) {
                case 'ADD':
                    this.setState({
                        collectedBooks: [...this.state.collectedBooks, this.state.bookResults[targetIndex]]
                    });
                    break;
                case 'REMOVE':
                    this.setState({
                        collectedBooks: this.state.collectedBooks.filter((value, index) => (targetIndex !== index ? true : false))
                    });
                    break;
                default:
                    console.error('Undefined type');
            }
        }, options: this.state.bookResults.map(a => ({
            value: a.title,
            subInfo: a.author.map(a => a.name).join(', '),
            thumb: a.cover
        })), values: this.state.collectedBooks.map(book => book.title), placeholder: "Books"}), React.createElement("textarea", {value: this.state.collectionDesc, onChange: (e) => this.setState({ collectionDesc: e.target.value }), placeholder: "Description"}), React.createElement(Button, {onClick: this.addCollection.bind(this)}, "Add")));
    }
}
function mapStateToProps(state) {
    return {
        bookSearchResults: state.pagination.bookSearchResults,
        books: state.entities.books,
        notification: state.components.notification
    };
}
export default connect(mapStateToProps, { searchBooks, handleNotification })(AddCollection);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQ29sbGVjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29udGFpbmVycy9jb25zb2xlL0FkZENvbGxlY3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBYSxNQUFNLE9BQU87T0FFNUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhO09BRTlCLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZUFBZTtPQUN4RCxLQUFLLE1BQU0sZ0JBQWdCO09BQzNCLE1BQU0sTUFBTSxpQkFBaUI7T0FDN0IsY0FBYyxNQUFNLHlCQUF5QjtPQUM3QyxZQUFZLE1BQU0seUJBQXlCO09BQzNDLElBQUksTUFBTSxZQUFZO0FBRzdCLDRCQUE0QixTQUFTO0lBSW5DLFlBQVksS0FBSztRQUNmLE1BQU0sS0FBSyxDQUFDLENBQUE7UUFDWixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLFdBQVcsRUFBRSxFQUFFO1lBQ2YsY0FBYyxFQUFFLEVBQUU7WUFDbEIsY0FBYyxFQUFFLEVBQUU7WUFDbEIsY0FBYyxFQUFFLEVBQUU7U0FDbkIsQ0FBQTtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFFRCw4QkFBOEI7SUFDOUIsc0NBQXNDO0lBQ3RDLGlDQUFpQztJQUNqQyxFQUFFO0lBQ0YscUdBQXFHO0lBQ3JHLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLElBQUk7SUFFSixhQUFhLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQTtRQUNsQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQTtRQUNwQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxD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