'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Switch = undefined;

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

var Switch = exports.Switch = function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    _classCallCheck(this, Switch);

    return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
  }

  _createClass(Switch, [{
    key: 'onChange',
    value: function onChange() {
      if (this.props.disabled) {
        return false;
      }

      return this.props.onChange();
    }
  }, {
    key: 'renderOn',
    value: function renderOn() {
      return _react2.default.createElement(
        'div',
        { className: 'bootstrap-switch-container' },
        _react2.default.createElement(
          'span',
          { className: 'bootstrap-switch-handle-on bootstrap-switch-' + this.props.type },
          this.props.onLabel
        ),
        _react2.default.createElement(
          'span',
          { className: 'bootstrap-switch-label' },
          '\xA0'
        )
      );
    }
  }, {
    key: 'renderOff',
    value: function renderOff() {
      return _react2.default.createElement(
        'div',
        { className: 'bootstrap-switch-container' },
        _react2.default.createElement(
          'span',
          { className: 'bootstrap-switch-label pull-left' },
          '\xA0'
        ),
        _react2.default.createElement(
          'span',
          { className: 'bootstrap-switch-handle-off bootstrap-switch-default pull-right' },
          this.props.offLabel
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'switch-container ' + (this.props.isOn ? this.props.type : '') + ' ' + this.props.className, onClick: function onClick(e) {
            return _this2.onChange();
          } },
        _react2.default.createElement(
          'div',
          { className: 'bootstrap-switch ' + (this.props.disabled ? 'bootstrap-switch-disabled' : '') + ' bootstrap-switch-wrapper bootstrap-switch-small bootstrap-switch-animate bootstrap-switch-on' },
          this.props.isOn ? this.renderOn() : this.renderOff()
        )
      );
    }
  }]);

  return Switch;
}(_react2.default.Component);

Switch.propTypes = {
  isOn: _propTypes2.default.bool,
  onLabel: _propTypes2.default.string,
  offLabel: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  type: _propTypes2.default.oneOf(['primary', 'info', 'warning', 'success', 'danger']),
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
};
Switch.defaultProps = {
  isOn: true,
  onLabel: 'ON',
  offLabel: 'OFF',
  type: 'primary',
  className: '',
  disabled: false,
  onChange: _lodash2.default.noop
};