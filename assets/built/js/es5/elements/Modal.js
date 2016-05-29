'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _view = require('utils/view');

var _view2 = _interopRequireDefault(_view);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Fade = require('elements/animations/Fade');

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this, props));

    _this.state = {
      modalHeight: 0,
      isModalHidden: false,
      isModalVerticalCenter: true
    };
    _this.setView = _this.setView.bind(_this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'hideModal',
    value: function hideModal() {
      this.props.onRequestClose();
      _view2.default.unlockScroll();
      window.removeEventListener('resize', this.setView);
    }
  }, {
    key: 'setView',
    value: function setView() {
      var modalHeight = _reactDom2.default.findDOMNode(this.refs.modal).clientHeight;
      var isModalVerticalCenter = true;
      var documentHeight = document.body.clientHeight;

      if (window.innerHeight < modalHeight) {
        isModalVerticalCenter = false;
      }

      if (window.innerHeight > document.body.clientHeight) {
        documentHeight = window.innerHeight;
      }

      this.setState({
        modalHeight: modalHeight,
        isModalVerticalCenter: isModalVerticalCenter,
        documentHeight: documentHeight
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.isVisible === false && this.props.isVisible === true) {
        this.setView();
        _view2.default.lockScroll();
        window.addEventListener('resize', this.setView);
      }
    }
  }, {
    key: 'componentUnmount',
    value: function componentUnmount() {
      window.removeEventListener('resize', this.setView);
    }
  }, {
    key: 'render',
    value: function render() {
      var defaultClass = 'modal';

      var className = this.props.className ? defaultClass + ' ' + this.props.className : defaultClass;
      var content = this.props.content;
      var actions = this.props.actions;

      var width = this.props.width ? this.props.width : 500;
      var height = this.state.modalHeight;
      var style = {};
      var isVisible = this.props.isVisible ? this.props.isVisible : false;

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
        width: width,
        marginTop: -height / 2,
        marginLeft: -width / 2,
        position: 'absolute',
        left: '50%',
        top: '50%'
      };

      style.scroll = {
        width: width,
        margin: '50px auto'
      };

      style.modal = {
        padding: '30px',
        boxShadow: '0 3px 10px rgba(0, 0, 0, 0.57)'
      };

      if (this.state.isModalVerticalCenter) {
        style.modal = Object.assign({}, style.modal, style.verticalCenter);
      } else {
        style.modal = Object.assign({}, style.modal, style.scroll);
      }

      return _react2.default.createElement(
        _Fade2.default,
        null,
        isVisible ? _react2.default.createElement(
          'div',
          {
            onClick: this.hideModal.bind(this),
            className: 'modal-backdrop',
            style: style.backdrop
          },
          _react2.default.createElement(
            'div',
            {
              style: style.modal,
              className: className,
              ref: 'modal',
              onClick: function onClick(e) {
                e.stopPropagation();
              }
            },
            this.props.children
          )
        ) : null
      );
    }
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  width: _react2.default.PropTypes.number
};

exports.default = Modal;