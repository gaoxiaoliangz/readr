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
            view: getBookView()
        };
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
        return (React.createElement("div", {className: `viewer viewer--${view.screen}`, onMouseMove: this.toggleBookPanel.bind(this)}, React.createElement(Body, {className: "viewer"}), !book.content && !this.state.calculatedPages ? (React.createElement(Loading, null)) : null, this.state.showProgressDialog ? (React.createElement(Dialog, {actions: actions, content: "are you sure?"})) : null, React.createElement(ReactCSSTransitionGroup, {component: "div", transitionName: "slide", transitionEnterTimeout: 300, transitionLeaveTimeout: 300}, this.state.showPanel && this.state.isReadingMode ? (React.createElement("div", {className: "viewer-panel"}, React.createElement("div", {className: "container"}, React.createElement("div", {className: "back"}, React.createElement(Link, {to: "/"}, React.createElement(Icon, {name: "back"}), React.createElement("span", null, "返回"))), React.createElement("span", {className: "title"}, book.title)))) : null), (this.state.isCalculatingDom && this.state.bookHtml) ? (React.createElement("ul", {className: "pages"}, React.createElement("li", null, React.createElement("div", {ref: "bookHtml", className: "content", dangerouslySetInnerHTML: { __html: this.state.bookHtml }})))) : null, this.state.isReadingMode ? (this.renderBook()) : null));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlld2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY29yZS9mcm9udGVuZC9jb250YWluZXJzL1ZpZXdlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sT0FBTztPQUNqQyxFQUFFLElBQUksRUFBRSxNQUFNLGNBQWM7T0FDNUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxhQUFhO09BQzlCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxPQUFPO09BQ25DLHVCQUF1QixNQUFNLG1DQUFtQztPQUNoRSxJQUFJLE1BQU0sZUFBZTtPQUN6QixPQUFPLE1BQU0sb0JBQW9CO09BQ2pDLE1BQU0sTUFBTSxpQkFBaUI7T0FDN0IsWUFBWSxNQUFNLHlCQUF5QjtPQUMzQyxLQUFLLFVBQVUsTUFBTSxrQkFBa0I7T0FFdkMsRUFBRSxXQUFXLEVBQUUsTUFBTSxZQUFZO09BQ2pDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGFBQWE7T0FDekMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGNBQWM7T0FDNUMsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZTtPQUMvRCxJQUFJLE1BQU0sWUFBWTtPQUN0QixJQUFJLE1BQU0sbUJBQW1CO09BQzdCLENBQUMsTUFBTSxRQUFRO0FBRXRCLE1BQU0sT0FBTyxHQUFHLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxDQUFBO0FBRTFELHFCQUFxQixTQUFTO0lBYTVCLFlBQVksS0FBSztRQUNmLE1BQU0sS0FBSyxDQUFDLENBQUE7UUFFWixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFBO1FBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxTQUFTLEVBQUUsSUFBSTtZQUNmLGtCQUFrQixFQUFFLEtBQUs7WUFFekIsZ0JBQWdCLEVBQUUsS0FB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