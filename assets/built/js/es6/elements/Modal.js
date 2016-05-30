import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import view from 'utils/view';
import Fade from 'elements/animations/Fade';
class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalHeight: 0,
            isModalHidden: false,
            isModalVerticalCenter: true
        };
        this.setView = this.setView.bind(this);
    }
    hideModal() {
        this.props.onRequestClose();
        view.unlockScroll();
        window.removeEventListener('resize', this.setView);
    }
    setView() {
        let modalHeight = ReactDOM.findDOMNode(this.refs.modal).clientHeight;
        let isModalVerticalCenter = true;
        let documentHeight = document.body.clientHeight;
        if (window.innerHeight < modalHeight) {
            isModalVerticalCenter = false;
        }
        if (window.innerHeight > document.body.clientHeight) {
            documentHeight = window.innerHeight;
        }
        this.setState({
            modalHeight,
            isModalVerticalCenter,
            documentHeight
        });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isVisible === false && this.props.isVisible === true) {
            this.setView();
            view.lockScroll();
            window.addEventListener('resize', this.setView);
        }
    }
    componentUnmount() {
        window.removeEventListener('resize', this.setView);
    }
    render() {
        const defaultClass = 'modal';
        let className = this.props.className ? `${defaultClass} ${this.props.className}` : defaultClass;
        let width = this.props.width ? this.props.width : 500;
        let height = this.state.modalHeight;
        let style = {
            backdrop: {},
            verticalCenter: {},
            scroll: {},
            modal: {}
        };
        let isVisible = this.props.isVisible ? this.props.isVisible : false;
        // let onRequestClose = this.props.onRequestClose?this.props.onRequestClose:null
        style.backdrop = {
            position: 'fixed',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            background: 'rgba(0, 0, 0, 0.86)',
            zIndex: 9990,
            overflow: 'scroll'
        };
        style.verticalCenter = {
            width,
            marginTop: -height / 2,
            marginLeft: -width / 2,
            position: 'absolute',
            left: '50%',
            top: '50%'
        };
        style.scroll = {
            width,
            margin: '50px auto'
        };
        style.modal = {
            padding: '30px',
            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.57)'
        };
        if (this.state.isModalVerticalCenter) {
            style.modal = Object.assign({}, style.modal, style.verticalCenter);
        }
        else {
            style.modal = Object.assign({}, style.modal, style.scroll);
        }
        return (React.createElement(Fade, null, isVisible ? (React.createElement("div", {onClick: this.hideModal.bind(this), className: "modal-backdrop", style: style.backdrop}, React.createElement("div", {style: style.modal, className: className, ref: "modal", onClick: (e) => {
            e.stopPropagation();
        }}, this.props.children))) : null));
    }
}
export default Modal;
