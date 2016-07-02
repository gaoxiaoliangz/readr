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
            dbBookQuery: '',
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
    search(query) {
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
        }}), React.createElement(Button, {onClick: this.addAuthor.bind(this)}, "Add")), React.createElement("h1", {className: "page-title"}, "Add Book"), React.createElement(SelectizeInput, {onInputChange: newValue => {
            this.search(newValue);
        }, value: "fuck", onValuesChange: newValues => {
            console.log(newValues);
        }, options: searchResults.map((r, i) => ({
            name: r.title,
            value: i
        })), values: [{ name: '01', value: '01' }], placeholder: "Book title", onAddNewValue: () => {
            let value = ReactDOM.findDOMNode(this.refs.bookTitle).querySelector('input').value;
            this.setState({
                bookTitle: [...this.state.bookTitle, { title: value }]
            });
            this.refs.bookTitle.clearState();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvcmUvZnJvbnRlbmQvY29udGFpbmVycy9jb25zb2xlL0FkZEJvb2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssRUFBRSxFQUFFLFNBQVMsRUFBRSxNQUFNLE9BQU87T0FDakMsUUFBUSxNQUFNLFdBQVc7T0FDekIsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhO09BRzlCLEVBQUUsNEJBQTRCLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxlQUFlO09BR3hFLEtBQUssTUFBTSxnQkFBZ0I7T0FDM0IsTUFBTSxNQUFNLGlCQUFpQjtPQUM3QixjQUFjLE1BQU0seUJBQXlCO09BQzdDLEtBQUssTUFBTSxnQkFBZ0I7T0FDM0IsQ0FBQyxNQUFNLFFBQVE7T0FDZixJQUFJLE1BQU0sWUFBWTtBQWlCN0Isc0JBQXNCLFNBQVM7SUFVN0IsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtRQUNaLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDbEIsV0FBVyxFQUFFLEVBQUU7WUFDZixTQUFTLEVBQUUsRUFBRTtZQUNiLFVBQVUsRUFBRSxFQUFFO1lBQ2QsU0FBUyxFQUFFLEVBQUU7WUFDYixlQUFlLEVBQUUsRUFBRTtZQUNuQixXQUFXLEVBQUUsRUFBRTtZQUNmLGFBQWEsRUFBRSxFQUFFO1lBQ2pCLHVCQUF1QixFQUFFLEtBQUs7U0FDL0IsQ0FBQTtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyw0QkFBNEIsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDOUYsQ0FBQztJQUVELE9BQU8sQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLGNB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