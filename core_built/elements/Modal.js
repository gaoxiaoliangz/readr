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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb3JlL2Zyb250ZW5kL2VsZW1lbnRzL01vZGFsLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxPQUFPO09BQ2pDLFFBQVEsTUFBTSxXQUFXO09BQ3pCLElBQUksTUFBTSxZQUFZO09BRXRCLElBQUksTUFBTSwwQkFBMEI7QUFTM0Msb0JBQW9CLFNBQVM7SUFPM0IsWUFBWSxLQUFLO1FBQ2YsTUFBTSxLQUFLLENBQUMsQ0FBQTtRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXLEVBQUUsQ0FBQztZQUNkLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLHFCQUFxQixFQUFFLElBQUk7U0FDNUIsQ0FBQTtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQzNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUVwRCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUE7UUFDcEUsSUFBSSxxQkFBcUIsR0FBRyxJQUFJLENBQUE7UUFDaEMsSUFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUE7UUFFL0MsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLHFCQUFxQixHQUFHLEtBQUssQ0FBQTtRQUMvQixDQUFD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