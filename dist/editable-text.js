'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableText = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableText = exports.EditableText = function (_React$Component) {
  _inherits(EditableText, _React$Component);

  function EditableText(props) {
    _classCallCheck(this, EditableText);

    var _this = _possibleConstructorReturn(this, (EditableText.__proto__ || Object.getPrototypeOf(EditableText)).call(this, props));

    _this.state = {
      dirtyValue: _this.props.value,
      isBeingEdited: _this.props.isOpen
    };
    return _this;
  }

  _createClass(EditableText, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        this.setState({ dirtyValue: nextProps.value, isBeingEdited: nextProps.isOpen });
      }
    }
  }, {
    key: 'onSetEditing',
    value: function onSetEditing(isBeingEdited) {
      var _this2 = this;

      if (this.props.disabled) {
        return false;
      }

      return this.setState({ isBeingEdited: isBeingEdited }, function () {
        if (_this2.state.isBeingEdited) {
          _this2.refs['edit-input'].focus();
        }
      });
    }
  }, {
    key: 'onCancelEditing',
    value: function onCancelEditing() {
      this.setState({ isBeingEdited: false, dirtyValue: this.props.value });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      var validationResult = this.getValidationResult();
      if (validationResult === 'error') {
        return false;
      }

      return this.props.onChange(this.state.dirtyValue);
    }
  }, {
    key: 'onTextChange',
    value: function onTextChange(e) {
      return this.setState({ dirtyValue: e.currentTarget.value });
    }
  }, {
    key: 'onHandleKeyDown',
    value: function onHandleKeyDown(e) {
      if (e.keyCode === 27) {
        // esc
        return this.onCancelEditing();
      } else if (e.keyCode === 13) {
        // enter
        return this.onSubmit();
      }

      return e;
    }
  }, {
    key: 'getValidationResult',
    value: function getValidationResult() {
      if (!this.props.onValidate) {
        return '';
      }

      var validationResult = this.props.onValidate(this.state.dirtyValue);
      if (validationResult === true || validationResult === 'success') {
        return 'success';
      } else if (validationResult === false || validationResult === 'error') {
        return 'error';
      } else if (validationResult === 'warning') {
        return 'warning';
      }

      return '';
    }
  }, {
    key: 'getStatus',
    value: function getStatus(status) {
      return status ? 'has-' + status : '';
    }
  }, {
    key: 'renderErrorHelpLabel',
    value: function renderErrorHelpLabel(status) {
      if (!this.props.errorHelpLabel || status !== 'error') {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'editable-error help-block' },
        this.props.errorHelpLabel
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var status = this.getValidationResult(); // '', warning, success, error

      if (!this.state.isBeingEdited) {
        return _react2.default.createElement(
          'span',
          { className: 'editable editable-click ' + (this.props.disabled ? 'disabled' : ''), onClick: function onClick(e) {
              return _this3.onSetEditing(true);
            } },
          this.props.value || this.props.placeholder
        );
      }

      return _react2.default.createElement(
        'form',
        { className: 'form-inline editable-wrap editable-text', role: 'form', onSubmit: function onSubmit(e) {
            return e.preventDefault();
          } },
        _react2.default.createElement(
          'div',
          { className: 'editable-controls form-group ' + this.getStatus(status) },
          _react2.default.createElement('input', {
            type: 'text',
            value: this.state.dirtyValue,
            onChange: function onChange(e) {
              return _this3.onTextChange(e);
            },
            onKeyDown: function onKeyDown(e) {
              return _this3.onHandleKeyDown(e);
            },
            ref: 'edit-input',
            className: 'editable-has-buttons editable-input form-control' }),
          _react2.default.createElement(
            'span',
            { className: 'editable-buttons button-wrapper' },
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: function onClick(e) {
                  return _this3.onSubmit(status);
                }, className: 'btn btn-primary btn-with-icon' },
              _react2.default.createElement('i', { className: 'fa fa-check' })
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', onClick: function onClick(e) {
                  return _this3.onCancelEditing();
                }, className: 'btn btn-default btn-with-icon' },
              _react2.default.createElement('i', { className: 'fa fa-close' })
            )
          ),
          this.renderErrorHelpLabel(status)
        )
      );
    }
  }]);

  return EditableText;
}(_react2.default.Component);

EditableText.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  isOpen: _propTypes2.default.bool,
  onValidate: _propTypes2.default.func,
  value: _propTypes2.default.node,
  hasError: _propTypes2.default.bool,
  errorHelpLabel: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  disabled: _propTypes2.default.bool
};
EditableText.defaultProps = {
  value: '',
  isOpen: false,
  hasError: false,
  errorHelpLabel: '',
  placeholder: 'No Value',
  disabled: false
};