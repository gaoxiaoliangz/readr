import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { fetchDoubanBookSearchResults, handleNotification } from 'actions/index';
import Input from 'elements/Input';
import Button from 'elements/Button';
import SelectizeInput from 'elements/SelectizeInput';
import Modal from 'elements/Modal';
import _ from 'lodash';
import apis from 'utils/apis';
class AddBook extends Component {
    constructor(props) {
        super(props);
        this.defaultState = {
            dbBookQuery: "",
            bookTitle: [],
            bookAuthor: [],
            bookCover: '',
            bookDescription: '',
            bookContent: '',
            authorResults: [],
            isAddAuthorModalVisible: false
        };
        this.state = Object.assign({}, this.defaultState);
        this.fetchDoubanBookSearchResults = _.debounce(this.props.fetchDoubanBookSearchResults, 150);
    }
    addBook(e) {
        e.preventDefault();
        const data = {
            title: this.state.bookTitle.length !== 0 ? this.state.bookTitle[0].title : '',
            description: this.state.bookDescription,
            content: this.state.bookContent,
            author: JSON.stringify(this.state.bookAuthor.map(a => a.id)),
            cover: this.state.bookCover
        };
        console.log(data);
        apis.addBook(data).then(result => {
            this.props.handleNotification('添加成功');
            this.setState(this.defaultState);
        }, error => {
            this.props.handleNotification(error.message);
        });
    }
    addAuthor(e) {
        e.preventDefault();
        const data = {
            name: this.state.authorName,
            description: this.state.authorDescription,
            slug: this.state.authorSlug
        };
        apis.addAuthor(data).then(result => {
            this.props.handleNotification('添加成功');
            this.setState({
                bookAuthor: [...this.state.bookAuthor, { name: this.state.authorName, id: result.id }],
                isAddAuthorModalVisible: false
            });
            this.refs.bookAuthor.clearState();
        }, error => {
            this.props.handleNotification(error.message);
        });
    }
    search(e) {
        let query = e.target.value;
        this.setState({
            dbBookQuery: query
        });
        if (query !== '') {
            this.fetchDoubanBookSearchResults(query);
        }
    }
    searchAuthors(e) {
        let query = e.target.value;
        if (query !== '') {
            apis.searchAuthors(query).then(response => {
                this.setState({
                    authorResults: response
                });
            });
        }
    }
    render() {
        let book = null;
        let searchResultIds = this.props.doubanBookSearchResults[this.state.dbBookQuery] ?
            this.props.doubanBookSearchResults[this.state.dbBookQuery].ids : [];
        let doubanBooks = this.props.doubanBooks;
        let searchResults = searchResultIds.map(id => doubanBooks[id]);
        return (React.createElement("form", null, React.createElement(Modal, {width: 600, isVisible: this.state.isAddAuthorModalVisible, onRequestClose: () => {
            this.setState({
                isAddAuthorModalVisible: false
            });
        }}, React.createElement("h1", {className: "page-title", style: { marginTop: 0 }}, "Add author"), React.createElement(Input, {onChange: event => {
            this.setState({
                authorName: event.target.value
            });
        }, value: this.state.authorName, placeholder: "Name"}), React.createElement(Input, {onChange: event => {
            this.setState({
                authorSlug: event.target.value
            });
        }, value: this.state.authorSlug, placeholder: "Slug"}), React.createElement("textarea", {placeholder: "Description", style: { height: 100 }, value: this.state.authorDescription, onChange: event => {
            this.setState({
                authorDescription: event.target.value
            });
        }}), React.createElement(Button, {onClick: this.addAuthor.bind(this)}, "Add")), React.createElement("h1", {className: "page-title"}, "Add Book"), React.createElement(SelectizeInput, {ref: "bookTitle", onChange: this.search.bind(this), onValuesChange: (targetIndex, type) => {
            switch (type) {
                case 'ADD':
                    this.setState({
                        bookTitle: [...this.state.bookTitle, searchResults[targetIndex]],
                        bookCover: searchResults[targetIndex].image,
                        bookDescription: searchResults[targetIndex].summary
                    });
                    break;
                case 'REMOVE':
                    this.setState({
                        bookTitle: this.state.bookTitle.filter((value, index) => (targetIndex !== index ? true : false))
                    });
                    break;
                default:
                    console.error('Undefined type');
            }
        }, options: searchResults.map(a => ({
            value: a.title,
            subInfo: a.author,
            thumb: a.image
        })), values: this.state.bookTitle.map(book => book.title), placeholder: "Book title", addNewValue: () => {
            let value = ReactDOM.findDOMNode(this.refs.bookTitle).querySelector('input').value;
            this.setState({
                bookTitle: [...this.state.bookTitle, { title: value }]
            });
            this.refs.bookTitle.clearState();
        }}), React.createElement(SelectizeInput, {ref: "bookAuthor", onChange: this.searchAuthors.bind(this), onValuesChange: (targetIndex, type) => {
            switch (type) {
                case 'ADD':
                    this.setState({
                        bookAuthor: [...this.state.bookAuthor, this.state.authorResults[targetIndex]]
                    });
                    break;
                case 'REMOVE':
                    this.setState({
                        bookAuthor: this.state.bookAuthor.filter((value, index) => (targetIndex !== index ? true : false))
                    });
                    break;
                default:
                    console.error('Undefined type');
            }
        }, options: this.state.authorResults.map(a => a.name), values: this.state.bookAuthor.map(a => a.name), placeholder: "Author", addNewValue: () => {
            let name = this.refs.bookAuthor.state.value;
            this.setState({
                isAddAuthorModalVisible: true,
                authorName: name
            });
        }}), React.createElement(Input, {onChange: event => {
            this.setState({
                bookCover: event.target.value
            });
        }, value: this.state.bookCover, placeholder: "Cover"}), React.createElement("textarea", {placeholder: "Description", style: { height: 100 }, value: this.state.bookDescription, onChange: event => {
            this.setState({
                bookDescription: event.target.value
            });
        }}), React.createElement("textarea", {placeholder: "Paste book content here", style: { height: 100 }, value: this.state.bookContent, onChange: event => {
            this.setState({
                bookContent: event.target.value
            });
        }}), React.createElement(Button, {onClick: this.addBook.bind(this)}, "Add")));
    }
}
export default connect(state => ({
    doubanBookSearchResults: state.pagination.doubanBookSearchResults,
    doubanBooks: state.entities.doubanBooks,
    notification: state.components.notification
}), { fetchDoubanBookSearchResults, handleNotification })(AddBook);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29udGFpbmVycy9jb25zb2xlL0FkZEJvb2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU87T0FDakMsUUFBUSxNQUFNLFdBQVc7T0FDekIsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhO09BRzlCLEVBQUUsNEJBQTRCLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxlQUFlO09BR3hFLEtBQUssTUFBTSxnQkFBZ0I7T0FDM0IsTUFBTSxNQUFNLGlCQUFpQjtPQUM3QixjQUFjLE1BQU0seUJBQXlCO09BQzdDLEtBQUssTUFBTSxnQkFBZ0I7T0FDM0IsQ0FBQyxNQUFNLFFBQVE7T0FDZixJQUFJLE1BQU0sWUFBWTtBQUU3QixzQkFBc0IsU0FBUztJQVU3QixZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO1FBQ1osSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQixXQUFXLEVBQUUsRUFBRTtZQUNmLFNBQVMsRUFBRSxFQUFFO1lBQ2IsVUFBVSxFQUFFLEVBQUU7WUFDZCxTQUFTLEVBQUUsRUFBRTtZQUNiLGVBQWUsRUFBRSxFQUFFO1lBQ25CLFdBQVcsRUFBRSxFQUFFO1lBQ2YsYUFBYSxFQUFFLEVBQUU7WUFDakIsdUJBQXVCLEVBQUUsS0FBSztTQUMvQixDQUFBO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLDRCQUE0QixHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUM5RixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsY0FBYyxFQUFF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