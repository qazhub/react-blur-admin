'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = undefined;

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

var Button = exports.Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'renderIcon',
    value: function renderIcon(icon) {
      if (!(icon || this.props.icon) || this.props.isIconHidden) {
        return null;
      }
      if (this.props.icon) {
        return _lodash2.default.isString(this.props.icon) ? _react2.default.createElement('i', { className: this.props.icon }) : this.props.icon;
      }
      return _react2.default.createElement('i', { className: icon });
    }
  }, {
    key: 'render',
    value: function render() {
      var classes = void 0;
      var icon = void 0;
      var title = void 0;

      switch (this.props.type) {
        case 'add':
        case 'primary':
          classes = 'btn-primary btn-' + this.props.size;
          icon = 'fa fa-plus';
          title = 'Add';
          break;

        case 'success':
          classes = 'btn-success btn-' + this.props.size;
          icon = 'fa fa-check';
          title = 'Success';
          break;

        case 'remove':
        case 'danger':
          classes = 'btn-danger btn-' + this.props.size;
          icon = 'fa fa-minus';
          title = 'Remove';
          break;

        case 'info':
          classes = 'btn-info btn-' + this.props.size;
          icon = 'fa fa-info-circle';
          title = 'Info';
          break;

        case 'warning':
          classes = 'btn-warning btn-' + this.props.size;
          icon = 'fa fa-exclamation-circle';
          title = 'Warning';
          break;

        case 'default':
        default:
          classes = 'btn-default btn-' + this.props.size;
          icon = '';
          title = 'Default';
          break;
      }

      return _react2.default.createElement(
        'button',
        { className: 'btn ' + classes, disabled: this.props.disabled, onClick: this.props.onClick },
        this.renderIcon(icon),
        ' ',
        this.props.hasOwnProperty('title') ? this.props.title : title
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  type: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  title: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['xs', 'sm', 'mm', 'md', 'xm', 'lg']),
  disabled: _propTypes2.default.bool,
  isIconHidden: _propTypes2.default.bool,
  icon: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element])
};
Button.defaultProps = {
  onClick: function noop() {},
  size: 'md',
  disabled: false,
  isIconHidden: false,
  icon: null
};