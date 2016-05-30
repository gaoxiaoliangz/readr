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
