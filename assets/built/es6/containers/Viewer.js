import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Icon from 'elements/Icon';
import Loading from 'components/Loading';
import Dialog from 'elements/Dialog';
import BookPageList from 'components/BookPageList';
import * as renderBook from 'utils/renderBook';
import { getBookView } from 'utils/view';
import { getCache, setCache } from 'utils/cache';
import { simpleCompareObjects } from 'utils/object';
import { fetchBook, fetchBookProgress, userAuth } from 'actions/index';
import apis from 'utils/apis';
import Body from 'side-effects/Body';
import _ from 'lodash';
const actions = { fetchBook, fetchBookProgress, userAuth };
class Viewer extends Component {
    constructor(props) {
        super(props);
        this.bookId = props.params.id;
        this.state = {
            showPanel: true,
            showProgressDialog: false,
            isCalculatingDom: false,
            isReadingMode: false,
            isScrollMode: true,
            isInitialProgressSet: false,
            scrollTop: 0,
            currentPage: 0,
            calculatedPages: null,
            latestProgress: 0,
            view: getBookView(),
            showViewerPreference: false
        };
        this.toggleViewerPreference = this.toggleViewerPreference.bind(this);
    }
    toggleViewerPreference() {
        console.log('test');
        this.setState({
            showViewerPreference: !this.state.showViewerPreference
        });
    }
    scrollTo(position) {
        let pageCount = this.state.calculatedPages.props.children.length;
        let pageHeight = this.state.calculatedPages.props.view.pageHeight;
        let height = pageCount * pageHeight;
        if (position < 1) {
            this.setState({
                currentPage: renderBook.percentageToPage(position, pageCount),
                scrollTop: position * height
            });
            document.body.scrollTop = pageCount * pageHeight * position;
        }
        else {
            this.setState({
                currentPage: position,
                scrollTop: height * position / pageCount
            });
            document.body.scrollTop = pageHeight * position;
        }
    }
    addEventListeners() {
        this.mapScrollTopToState = () => {
            this.setState({
                scrollTop: document.body.scrollTop
            });
        };
        this.mapWindowWidthToState = () => {
            this.setState({
                windowWidth: window.innerWidth
            });
        };
        this.mapViewToState = () => {
            this.setState({
                view: getBookView()
            });
        };
        this.checkAndSetProgress = () => {
            let currentPageNo = this.props.book.pageNo;
            this.props.actions.fetchBookProgress(this.bookId).then(action => {
                if (this.props.book.pageNo - currentPageNo > 5) {
                    this.setState({
                        showProgressDialog: true,
                        latestProgress: this.props.book.percentage
                    });
                }
                else {
                    let pageSum = this.state.calculatedPages.props.children.length;
                    let height = pageSum * this.state.view.pageHeight;
                    let percentage = this.state.scrollTop / height;
                    let pageNo = renderBook.percentageToPage(percentage, pageSum);
                    let progress = {
                        pageNo,
                        pageSum,
                        percentage
                    };
                    apis.setProgress(this.bookId, progress);
                }
            });
        };
        // TODO: use session to determine latest progress
        this.deboundedSetProgress = _.debounce(this.checkAndSetProgress, 200);
        window.addEventListener('scroll', this.deboundedSetProgress);
        window.addEventListener('scroll', this.mapScrollTopToState);
        window.addEventListener('resize', this.mapWindowWidthToState);
        window.addEventListener('resize', this.mapViewToState);
    }
    removeEventListeners() {
        window.removeEventListener('scroll', this.deboundedSetProgress);
        window.removeEventListener('scroll', this.mapScrollTopToState);
        window.removeEventListener('resize', this.mapWindowWidthToState);
        window.removeEventListener('resize', this.mapViewToState);
    }
    toggleBookPanel(event) {
        if (this.state.calculatedPages.props.view.screen === 'hd') {
            var y = event.pageY - document.body.scrollTop;
            if (y < 90) {
                this.setState({
                    showPanel: true
                });
            }
            else {
                this.setState({
                    showPanel: false
                });
            }
        }
    }
    clickToToggleBookPanel() {
        if (this.state.calculatedPages.props.view.screen === 'phone') {
            this.setState({
                showPanel: !this.state.showPanel
            });
        }
    }
    calculateDom() {
        let html = this.state.bookHtml;
        let bookId = this.bookId;
        let view = getBookView();
        let nodeHeights = renderBook.getNodeHeights(this.refs.bookHtml.childNodes);
        let pages = renderBook.htmlToPages(html, nodeHeights, view);
        setCache(`book${bookId}_pages`, JSON.stringify(pages));
        this.setState({
            isReadingMode: true,
            isCalculatingDom: false,
            calculatedPages: pages
        });
    }
    loadCalculatedPages() {
        const bookId = this.props.params.id;
        let pages = getCache(`book${bookId}_pages`);
        // check if pages are cached
        if (pages) {
            pages = JSON.parse(pages);
            this.setState({
                isReadingMode: true,
                calculatedPages: pages,
                bookHtml: renderBook.pagesToHtml(pages)
            });
        }
        else {
            this.props.actions.fetchBook(bookId, ['content']);
        }
    }
    componentWillUpdate(nextProps, nextState) {
        if (nextProps.book && nextProps.book.content && nextProps.book.content.html && !this.props.book.content) {
            this.setState({
                isCalculatingDom: true,
                bookHtml: nextProps.book.content.html
            });
        }
        if (!simpleCompareObjects(this.state.view, nextState.view)) {
            this.setState({
                isCalculatingDom: true,
            });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.isCalculatingDom && !prevState.isCalculatingDom) {
            this.calculateDom();
        }
        // scroll to previous reading progress when opening a book
        if (this.props.book && this.props.book.percentage && this.state.calculatedPages && !this.state.isInitialProgressSet) {
            setTimeout(() => {
                this.scrollTo(this.props.book.percentage);
                this.setState({
                    isInitialProgressSet: true
                });
            }, 1);
        }
    }
    componentDidMount() {
        const actions = this.props.actions;
        const bookId = this.props.params.id;
        actions.userAuth();
        actions.fetchBook(bookId);
        actions.fetchBookProgress(bookId);
        this.addEventListeners();
        this.loadCalculatedPages();
    }
    componentWillUnmount() {
        this.removeEventListeners();
        this.setState({
            isInitialProgressSet: false
        });
    }
    renderBook() {
        let scrollTop = this.state.scrollTop;
        let calculatedPages = this.state.calculatedPages;
        let bookId = this.props.params.id;
        let view = calculatedPages.props.view;
        let height = calculatedPages.props.children.length * view.pageHeight;
        let currentPage = renderBook.percentageToPage(scrollTop / height, calculatedPages.props.children.length);
        let pages = renderBook.filterPages({
            startPage: currentPage,
            offset: 2,
            quantity: 5,
            pages: calculatedPages.props.children
        });
        return (React.createElement("div", {onClick: this.clickToToggleBookPanel.bind(this)}, React.createElement(BookPageList, {height: height, view: view, bookId: bookId, pages: pages})));
    }
    hideProgressDialog() {
        this.setState({
            showProgressDialog: false
        });
    }
    render() {
        let book = this.props.book;
        let view = this.state.view;
        let actions = [
            {
                text: 'Yes',
                function: () => {
                    this.scrollTo.call(this, this.state.latestProgress);
                    this.hideProgressDialog.call(this);
                }
            },
            {
                text: 'No',
                function: this.hideProgressDialog.bind(this)
            }
        ];
        return (React.createElement("div", {className: `viewer viewer--${view.screen}`, onMouseMove: this.toggleBookPanel.bind(this)}, React.createElement(Body, {className: "viewer"}), !book.content && !this.state.calculatedPages ? (React.createElement(Loading, null)) : null, this.state.showProgressDialog ? (React.createElement(Dialog, {actions: actions, content: "are you sure?"})) : null, React.createElement(ReactCSSTransitionGroup, {component: "div", transitionName: "slide", transitionEnterTimeout: 300, transitionLeaveTimeout: 300}, (this.state.showPanel && this.state.isReadingMode) || this.state.showViewerPreference ? (React.createElement("div", {className: "viewer-panel"}, React.createElement("div", {className: "container"}, React.createElement("div", {className: "back"}, React.createElement(Link, {to: "/"}, React.createElement(Icon, {name: "back"}), React.createElement("span", null, "返回"))), React.createElement("span", {className: "title"}, book.title), React.createElement("div", {onClick: this.toggleViewerPreference, className: "preference"}, React.createElement(Icon, {name: "font"})), this.state.showViewerPreference ? (React.createElement("div", {className: "viewer-preference"}, "settings")) : null))) : null), (this.state.isCalculatingDom && this.state.bookHtml) ? (React.createElement("ul", {className: "pages"}, React.createElement("li", null, React.createElement("div", {ref: "bookHtml", className: "content", dangerouslySetInnerHTML: { __html: this.state.bookHtml }})))) : null, this.state.isReadingMode ? (this.renderBook()) : null));
    }
}
export default connect((state, ownProps) => {
    return {
        book: state.entities.books[ownProps.params.id] ? state.entities.books[ownProps.params.id] : {},
        session: state.session
    };
}, dispatch => ({
    actions: bindActionCreators(actions, dispatch)
}))(Viewer);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL1ZpZXdlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUNqQyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWM7T0FDNUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhO09BQzlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxPQUFPO09BQ25DLHVCQUF1QixNQUFNLG1DQUFtQztPQUNoRSxJQUFJLE1BQU0sZUFBZTtPQUN6QixPQUFPLE1BQU0sb0JBQW9CO09BQ2pDLE1BQU0sTUFBTSxpQkFBaUI7T0FDN0IsWUFBWSxNQUFNLHlCQUF5QjtPQUMzQyxLQUFLLFVBQVUsTUFBTSxrQkFBa0I7T0FFdkMsRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZO09BQ2pDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWE7T0FDekMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWM7T0FDNUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZTtPQUMvRCxJQUFJLE1BQU0sWUFBWTtPQUN0QixJQUFJLE1BQU0sbUJBQW1CO09BQzdCLENBQUMsTUFBTSxRQUFRO0FBRXRCLE1BQU0sT0FBTyxHQUFHLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxDQUFBO0FBaUIxRCxxQkFBcUIsU0FBUztJQWE1QixZQUFZLEtBQUs7UUFDZixNQUFNLEtBQUssQ0FBQyxDQUFBO1FBRVosSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQTtRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsU0FBUyxFQUFFLElBQUk7WUFDZixrQkFBa0IsRUFBRSxLQUFLO1lBRXpCLGdCQUFnQixFQUFFLEtB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