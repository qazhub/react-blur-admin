'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('./button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = exports.Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'getHeaderClass',
    value: function getHeaderClass() {
      switch (this.props.type) {
        case 'success':
          return 'success';

        case 'primary':
          return 'primary';

        case 'remove':
        case 'danger':
          return 'danger';

        case 'info':
          return 'info';

        case 'warning':
          return 'warning';

        default:
          throw new Error('Unknown Modal Type');
      }
    }
  }, {
    key: 'getBodyAlignment',
    value: function getBodyAlignment() {
      switch (this.props.align) {
        case 'center':
          return 'text-center';

        case 'right':
          return 'text-right';

        case 'left':
        default:
          return '';
      }
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon() {
      if (!this.props.icon) {
        return null;
      }

      return _react2.default.createElement('i', { className: this.props.icon });
    }
  }, {
    key: 'renderModalSize',
    value: function renderModalSize() {
      switch (this.props.size) {
        case 'xs':
        case 'extra-small':
          return 'xsmall-panel';

        case 'sm':
        case 'small':
          return 'small-panel';

        case 'md':
        case 'medium':
          return 'medium-panel';

        case 'lg':
        case 'large':
          return 'large-panel';

        case 'auto':
        case 'none':
        default:
          return '';
      }
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      return _react2.default.createElement(
        'div',
        { className: 'modal-header bg-' + this.getHeaderClass() },
        this.renderIcon(),
        ' ',
        this.props.title
      );
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      return _react2.default.createElement(
        'div',
        { className: 'modal-body ' + this.getBodyAlignment() },
        _react2.default.createElement(
          'div',
          null,
          this.props.children
        )
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      if (!this.props.onClose) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'modal-footer' },
        _react2.default.createElement(_button.Button, {
          type: this.props.type,
          isIconHidden: true,
          size: 'sm',
          title: this.props.buttonText ? this.props.buttonText : 'OK',
          onClick: this.props.onClose })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { className: 'fade ' + (this.props.isOpen ? 'modal-backdrop in' : '') }),
        _react2.default.createElement(
          'div',
          { className: 'modal fade ' + (this.props.isOpen ? 'modal-open in' : '') + ' ' + this.props.className + ' ' + this.renderModalSize() },
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog' },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              this.renderHeader(),
              this.renderBody(),
              this.renderFooter()
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = {
  title: _propTypes2.default.string,
  buttonText: _propTypes2.default.string,
  className: _propTypes2.default.string,
  size: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  align: _propTypes2.default.string,
  type: _propTypes2.default.string,
  onClose: _propTypes2.default.func,
  isOpen: _propTypes2.default.bool
};
Modal.defaultProps = {
  className: '',
  size: 'md',
  align: 'left',
  title: '',
  type: 'success',
  isOpen: false,
  icon: ''
};