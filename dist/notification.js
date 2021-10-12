'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notification = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = exports.Notification = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, props));

    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    return _this;
  }

  _createClass(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.timeout) {
        this.timer = setTimeout(this.props.onClose, this.props.timeout);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.extendedTimer) {
        clearTimeout(this.extendedTimer);
      }
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      this.extendedTimer = setTimeout(this.props.onClose, this.props.extendedTimeout);
    }
  }, {
    key: 'renderCloseButton',
    value: function renderCloseButton() {
      if (!this.props.closeButton) {
        return null;
      }

      return _react2.default.createElement(
        'button',
        {
          className: 'toast-close-button',
          onClick: this.props.onClose
        },
        '\xD7'
      );
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      if (!this.props.title) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'toast-title' },
        this.props.title
      );
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      return _react2.default.createElement(
        'div',
        { className: 'toast-body' },
        this.props.children
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        {
          className: 'toast toast-' + this.props.type,
          onClick: this.props.tapToDismiss ? this.props.onClose : null,
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave
        },
        this.renderCloseButton(),
        _react2.default.createElement(
          'div',
          null,
          this.renderTitle(),
          this.renderBody()
        )
      );
    }
  }]);

  return Notification;
}(_react2.default.Component);

Notification.propTypes = {
  title: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['success', 'warning', 'error', 'info']),
  timeout: _propTypes2.default.number,
  extendedTimeout: _propTypes2.default.number,
  closeButton: _propTypes2.default.bool,
  tapToDismiss: _propTypes2.default.bool,
  onClose: _propTypes2.default.func.isRequired
};
Notification.defaultProps = {
  title: '',
  type: 'info',
  timeout: 5000,
  extendedTimeout: 2000,
  allowHtml: true,
  closeButton: true,
  tapToDismiss: true
};