'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = undefined;

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

var Input = exports.Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
  }

  _createClass(Input, [{
    key: 'getValidationResult',
    value: function getValidationResult() {
      if (!this.props.onValidate) {
        return '';
      }

      var validationResult = this.props.onValidate(this.props.value);

      if (validationResult === true || validationResult === 'success') {
        return 'success';
      } else if (validationResult === false || validationResult === 'error') {
        return 'error';
      } else if (validationResult === 'warning') {
        return 'warning';
      }

      return '';
    }

    /**
     * [getFeedback - determine if we should show the feedback icon on the right]
     * @return {string}
     */

  }, {
    key: 'getFeedback',
    value: function getFeedback() {
      if (!this.props.hasFeedbackIcon) {
        return '';
      }

      return 'has-feedback';
    }
  }, {
    key: 'getStatus',
    value: function getStatus(status) {
      return status ? 'has-' + status : '';
    }
  }, {
    key: 'renderTopLabel',
    value: function renderTopLabel() {
      if (!this.props.label) {
        return null;
      }

      if (_lodash2.default.includes(['checkbox', 'radio'], this.props.type)) {
        return null;
      }

      return _react2.default.createElement(
        'label',
        { className: 'control-label', htmlFor: this.props.id },
        this.props.label
      );
    }
  }, {
    key: 'renderAddonLeft',
    value: function renderAddonLeft() {
      if (!this.props.addonLeft) {
        return null;
      }

      return _react2.default.createElement(
        'span',
        { className: 'input-group-addon input-group-addon-primary addon-left' },
        this.props.addonLeft
      );
    }
  }, {
    key: 'renderCheckbox',
    value: function renderCheckbox() {
      var _this2 = this;

      var validationResult = this.getValidationResult();
      var className = validationResult ? 'has-' + validationResult : '';
      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'div',
          { className: 'checkbox' },
          _react2.default.createElement(
            'label',
            { className: 'custom-checkbox' },
            _react2.default.createElement('input', {
              type: 'checkbox',
              disabled: this.props.disabled,
              checked: this.props.value,
              onClick: function onClick(e) {
                return _this2.props.onChange(!_this2.props.value);
              },
              ref: 'input'
            }),
            _react2.default.createElement(
              'span',
              null,
              this.props.label
            )
          )
        )
      );
    }
  }, {
    key: 'renderRadio',
    value: function renderRadio() {
      var _this3 = this;

      return _react2.default.createElement(
        'label',
        { className: 'radio-inline custom-radio nowrap' },
        _react2.default.createElement('input', {
          disabled: this.props.disabled,
          type: 'radio',
          name: this.props.name,
          value: this.props.value,
          defaultChecked: this.props.defaultChecked,
          onClick: function onClick(e) {
            return _this3.props.onChange(_this3.props.value);
          },
          ref: 'input'
        }),
        _react2.default.createElement(
          'span',
          null,
          this.props.label
        )
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      if (_lodash2.default.includes(['checkbox', 'radio'], this.props.type)) {
        return this['render' + _lodash2.default.startCase(this.props.type)]();
      }

      return _react2.default.createElement('input', {
        disabled: this.props.disabled,
        type: this.props.type,
        placeholder: this.props.placeholder,
        autoFocus: this.props.autoFocus,
        className: 'form-control ' + (this.props.isRounded ? 'form-control-rounded' : ''),
        key: this.props.id,
        onChange: this.props.onChange,
        onKeyDown: this.props.onKeyDown,
        value: this.props.value,
        ref: 'input'
      });
    }
  }, {
    key: 'renderInputNoWrapper',
    value: function renderInputNoWrapper() {
      if (!(this.props.addonLeft || this.props.addonRight)) {
        return this.renderInput();
      }

      return null;
    }
  }, {
    key: 'renderAddonRight',
    value: function renderAddonRight() {
      if (!this.props.addonRight) {
        return null;
      }

      return _react2.default.createElement(
        'span',
        { className: 'input-group-addon input-group-addon-primary addon-right' },
        this.props.addonRight
      );
    }
  }, {
    key: 'renderFeedbackIcon',
    value: function renderFeedbackIcon(status) {
      if (!(status && this.props.hasFeedbackIcon) || this.props.addonRight) {
        return null;
      }

      if (_lodash2.default.includes(['checkbox', 'radio'], this.props.type)) {
        return null;
      }

      var icon = void 0;
      if (status === 'success') {
        icon = 'fa-check-circle';
      } else if (status === 'error') {
        icon = 'fa-times-circle';
      } else {
        icon = 'fa-exclamation-triangle';
      }

      return _react2.default.createElement('i', { className: 'fa ' + icon + ' form-control-feedback' });
    }
  }, {
    key: 'renderHelpBlock',
    value: function renderHelpBlock() {
      if (!this.props.helpLabel) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'help-block sub-little-text' },
        this.props.helpLabel
      );
    }
  }, {
    key: 'renderInputWrapper',
    value: function renderInputWrapper() {
      if (!(this.props.addonLeft || this.props.addonRight)) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'input-group' },
        this.renderAddonLeft(),
        this.renderInput(),
        this.renderAddonRight()
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var status = this.getValidationResult(); // '', warning, success, error
      return _react2.default.createElement(
        'div',
        { className: 'form-group ' + this.props.className + ' ' + this.getFeedback() + ' ' + this.getStatus(status) },
        this.renderTopLabel(),
        this.renderInputWrapper(),
        this.renderInputNoWrapper(),
        this.renderFeedbackIcon(status),
        this.renderHelpBlock()
      );
    }
  }]);

  return Input;
}(_react2.default.Component);

Input.propTypes = {
  type: _propTypes2.default.string,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  className: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  helpLabel: _propTypes2.default.string,
  label: _propTypes2.default.string,
  addonLeft: _propTypes2.default.node,
  addonRight: _propTypes2.default.node,
  autoFocus: _propTypes2.default.bool,
  hasFeedbackIcon: _propTypes2.default.bool,
  onValidate: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  defaultChecked: _propTypes2.default.bool,
  value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string, _propTypes2.default.bool]).isRequired,
  onChange: _propTypes2.default.func.isRequired,
  disabled: _propTypes2.default.bool,
  isRounded: _propTypes2.default.bool
};
Input.defaultProps = {
  className: '',
  value: '',
  type: 'text',
  hasFeedbackIcon: true,
  disabled: false,
  onKeyDown: _lodash2.default.noop,
  autoFocus: false
};