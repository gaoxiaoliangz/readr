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
import ViewerPreference from '../components/ViewerPreference';
import Fade from '../elements/animations/Fade';
import ViewerScrollbar from '../components/ViewerScrollbar';
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
        return (React.createElement("div", {className: `viewer viewer--${view.screen}`, onMouseMove: this.toggleBookPanel.bind(this)}, React.createElement(Body, {className: "viewer"}), !book.content && !this.state.calculatedPages ? (React.createElement(Loading, null)) : null, this.state.showProgressDialog ? (React.createElement(Dialog, {actions: actions, content: "are you sure?"})) : null, React.createElement(ReactCSSTransitionGroup, {component: "div", transitionName: "slide", transitionEnterTimeout: 300, transitionLeaveTimeout: 300}, (this.state.showPanel && this.state.isReadingMode) || this.state.showViewerPreference ? (React.createElement("div", {className: "viewer-panel"}, React.createElement("div", {className: "container"}, React.createElement("div", {className: "back"}, React.createElement(Link, {to: "/"}, React.createElement(Icon, {name: "back"}), React.createElement("span", null, "返回"))), React.createElement("span", {className: "title"}, book.title), React.createElement("div", {onClick: this.toggleViewerPreference, className: "preference"}, React.createElement(Icon, {name: "font"})), React.createElement("div", {className: "add"}, "点击添加至书架"), React.createElement(Fade, null, this.state.showViewerPreference ? (React.createElement(ViewerPreference, null)) : null)))) : null), (this.state.isCalculatingDom && this.state.bookHtml) ? (React.createElement("ul", {className: "pages"}, React.createElement("li", null, React.createElement("div", {ref: "bookHtml", className: "content", dangerouslySetInnerHTML: { __html: this.state.bookHtml }})))) : null, this.state.isReadingMode ? (this.renderBook()) : null, React.createElement(ViewerScrollbar, {current: 20, total: 309})));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL1ZpZXdlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUNqQyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWM7T0FDNUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhO09BQzlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxPQUFPO09BQ25DLHVCQUF1QixNQUFNLG1DQUFtQztPQUNoRSxJQUFJLE1BQU0sZUFBZTtPQUN6QixPQUFPLE1BQU0sb0JBQW9CO09BQ2pDLE1BQU0sTUFBTSxpQkFBaUI7T0FDN0IsWUFBWSxNQUFNLHlCQUF5QjtPQUMzQyxLQUFLLFVBQVUsTUFBTSxrQkFBa0I7T0FFdkMsRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZO09BQ2pDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWE7T0FDekMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWM7T0FDNUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZTtPQUMvRCxJQUFJLE1BQU0sWUFBWTtPQUN0QixJQUFJLE1BQU0sbUJBQW1CO09BQzdCLENBQUMsTUFBTSxRQUFRO09BQ2YsZ0JBQWdCLE1BQU0sZ0NBQWdDO09BQ3RELElBQUksTUFBTSw2QkFBNkI7T0FDdkMsZUFBZSxNQUFNLCtCQUErQjtBQUUzRCxNQUFNLE9BQU8sR0FBRyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsQ0FBQTtBQWlCMUQscUJBQXFCLFNBQVM7SUFhNUIsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtRQUVaLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUE7UUFDN0IsSUFBSSxDQUFDLEtB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