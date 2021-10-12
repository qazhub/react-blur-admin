'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = exports.Alert = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: 'getAlertClass',
    value: function getAlertClass() {
      switch (this.props.type) {
        case 'success':
          return 'success';

        case 'remove':
        case 'danger':
          return 'danger';

        case 'info':
          return 'info';

        case 'warning':
          return 'warning';

        default:
          throw new Error('Unknown Alert Type');
      }
    }
  }, {
    key: 'renderCloseButton',
    value: function renderCloseButton() {
      if (!this.props.isDismissible) {
        return null;
      }
      return _react2.default.createElement(
        'button',
        { className: 'toast-close-button', onClick: this.props.onClose },
        'x'
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'alert bg-' + this.getAlertClass() + ' ' + (this.props.isDismissible ? 'closable' : '') + ' ' + this.props.className },
        this.renderCloseButton(),
        this.props.children
      );
    }
  }]);

  return Alert;
}(_react2.default.Component);

Alert.propTypes = {
  type: _propTypes2.default.string,
  className: _propTypes2.default.string,
  isDismissible: _propTypes2.default.bool,
  onClose: _propTypes2.default.func
};
Alert.defaultProps = {
  type: 'success',
  className: '',
  isDismissible: false,
  onClose: _lodash2.default.noop
};