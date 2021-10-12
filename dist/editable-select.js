'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EditableSelect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _select = require('./select');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditableSelect = exports.EditableSelect = function (_React$Component) {
  _inherits(EditableSelect, _React$Component);

  function EditableSelect(props) {
    _classCallCheck(this, EditableSelect);

    var _this = _possibleConstructorReturn(this, (EditableSelect.__proto__ || Object.getPrototypeOf(EditableSelect)).call(this, props));

    _this.state = {
      isBeingEdited: _this.props.isBeingEdited || false
    };
    return _this;
  }

  _createClass(EditableSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value && !nextProps.hasOwnProperty('isBeingEdited')) {
        this.setState({ isBeingEdited: false });
      } else if (nextProps.isBeingEdited !== this.props.isBeingEdited) {
        this.setState({ isBeingEdited: nextProps.isBeingEdited });
      }
    }
  }, {
    key: 'onSetEditing',
    value: function onSetEditing(isBeingEdited) {
      if (this.props.disabled) {
        return false;
      }

      return this.setState({ isBeingEdited: isBeingEdited });
    }
  }, {
    key: 'onChange',
    value: function onChange(value) {
      this.setState({ isBeingEdited: false });
      this.props.onChange(value);
    }
  }, {
    key: 'renderValue',
    value: function renderValue(option) {
      if (this.props.value && this.props.onRenderValue) {
        // User can format the value how they want it
        return this.props.onRenderValue(this.props.value);
      } else if (option && option.label) {
        // Otherwise display the label
        return option.label;
      }

      return this.props.placeholder;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.state.isBeingEdited) {
        var option = _lodash2.default.find(this.props.options, { value: this.props.value });
        return _react2.default.createElement(
          'span',
          { className: 'editable editable-click ' + (this.props.disabled ? 'disabled' : ''), onClick: function onClick(e) {
              return _this2.onSetEditing(true);
            } },
          this.renderValue(option)
        );
      }

      return _react2.default.createElement(
        'form',
        { className: 'form-inline editable-wrap editable-text', role: 'form', onSubmit: function onSubmit(e) {
            return e.preventDefault();
          } },
        _react2.default.createElement(
          'div',
          { className: 'editable-controls form-group' },
          _react2.default.createElement(_select.Select, _extends({
            isOpen: true
          }, this.props, {
            onChange: function onChange(value) {
              return _this2.onChange(value);
            },
            onToggleOpen: function onToggleOpen(isOpen) {
              return _this2.onSetEditing(isOpen);
            },
            className: 'editable-has-buttons editable-input' }))
        )
      );
    }
  }]);

  return EditableSelect;
}(_react2.default.Component);

EditableSelect.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.node,
  placeholder: _propTypes2.default.string,
  maxHeight: _propTypes2.default.string,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
    label: _propTypes2.default.node
  })),
  onSearch: _propTypes2.default.func, // if label is a ReactElement, we recommend you pass in an onSearch function
  onRenderValue: _propTypes2.default.func, // if label is a ReactElement, we recommend you pass in an onRenderValue function
  isSearchable: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  isBeingEdited: _propTypes2.default.bool
};
EditableSelect.defaultProps = {
  value: '',
  placeholder: 'No Value'
};