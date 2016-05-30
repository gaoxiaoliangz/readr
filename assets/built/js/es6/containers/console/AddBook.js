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
