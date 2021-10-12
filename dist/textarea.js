'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Textarea = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Textarea = exports.Textarea = function (_React$Component) {
  _inherits(Textarea, _React$Component);

  function Textarea() {
    _classCallCheck(this, Textarea);

    return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).apply(this, arguments));
  }

  _createClass(Textarea, [{
    key: 'renderLabel',
    value: function renderLabel() {
      if (!this.props.label) {
        return null;
      }
      return _react2.default.createElement(
        'label',
        null,
        this.props.label
      );
    }
  }, {
    key: 'renderTextarea',
    value: function renderTextarea() {
      return _react2.default.createElement('textarea', {
        className: 'form-control',
        name: this.props.name,
        value: this.props.value,
        placeholder: this.props.placeholder,
        onChange: this.props.onChange,
        disabled: this.props.disabled,
        ref: 'textarea'
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'form-group ' + this.props.className },
        this.renderLabel(),
        this.renderTextarea()
      );
    }
  }]);

  return Textarea;
}(_react2.default.Component);

Textarea.propTypes = {
  name: _propTypes2.default.string,
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.bool,
  value: _propTypes2.default.node.isRequired
};
Textarea.defaultProps = {
  name: '',
  className: '',
  value: '',
  disabled: false
};