'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = undefined;

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

var Select = exports.Select = function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    _classCallCheck(this, Select);

    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

    _this.state = {
      value: _this.getValue(),
      activeIndex: 0,
      isOpen: _this.props.isOpen,
      searchValue: '',
      visibleOptions: _this.props.options
    };
    return _this;
  }

  _createClass(Select, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.onFocus();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen !== this.props.isOpen) {
        this.setState({ isOpen: nextProps.isOpen }, this.onFocus);
      }

      if (nextProps.options !== this.props.options) {
        this.setState({ visibleOptions: nextProps.options, searchValue: '' });
      }

      if (this.props.value && !nextProps.value) {
        this.setState({ activeIndex: 0, value: this.getValue(nextProps) });
      }

      this.setState({ value: this.getValue(nextProps) });
    }
  }, {
    key: 'onFocus',
    value: function onFocus() {
      if (this.state.isOpen && this.props.isSearchable) {
        this.refs['select-search'].focus();
      }
    }
  }, {
    key: 'onToggleOpen',
    value: function onToggleOpen() {
      this.props.onToggleOpen(!this.state.isOpen);
      this.setState({ isOpen: !this.state.isOpen }, this.onFocus);
    }
  }, {
    key: 'onSetActiveIndex',
    value: function onSetActiveIndex(value) {
      this.setState({ activeIndex: value, isOpen: true }, this.onFocus);
    }
  }, {
    key: 'onSelectValue',
    value: function onSelectValue(selectedValue) {
      var selectedOpt = _lodash2.default.find(this.props.options, { value: selectedValue });
      var value = selectedOpt && selectedOpt.label ? selectedOpt.label : this.props.placeholder;
      this.setState({ isOpen: false, value: value });
      this.props.onChange(selectedValue);
    }
  }, {
    key: 'onTextSearch',
    value: function onTextSearch(event) {
      var visibleOptions = void 0;
      var searchValue = event.currentTarget.value;

      // Used if the developer needs custom search functionality.
      if (this.props.onSearch) {
        visibleOptions = this.props.onSearch(searchValue, this.props.options);
      } else {
        visibleOptions = this.getVisibleOptions(event.currentTarget.value);
      }

      this.setState({ searchValue: searchValue, visibleOptions: visibleOptions });
    }
  }, {
    key: 'onHandleKeyDown',
    value: function onHandleKeyDown(e) {
      var _this2 = this;

      if (e.keyCode === 27) {
        // esc
        return this.onToggleOpen();
      } else if (e.keyCode === 13) {
        // enter
        e.preventDefault(); // prevent the onClick event from firing also, which could reopen select options
        var selectedOption = _lodash2.default.find(this.state.visibleOptions, function (option, index) {
          return index === _this2.state.activeIndex;
        });

        if (selectedOption) {
          return this.onSelectValue(selectedOption.value);
        }
      } else if (e.keyCode === 40) {
        // down
        e.preventDefault(); // prevent browser scrolling
        var activeIndex = this.state.activeIndex + 1;
        if (activeIndex >= this.state.visibleOptions.length) {
          activeIndex = this.state.visibleOptions.length - 1; // - 1 because the index starts at 0
        }

        return this.onSetActiveIndex(activeIndex);
      } else if (e.keyCode === 38) {
        // up
        e.preventDefault(); // prevent browser scrolling
        var _activeIndex = this.state.activeIndex - 1;
        if (_activeIndex < 0) {
          _activeIndex = 0;
        }

        return this.onSetActiveIndex(_activeIndex);
      }

      return e;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      if (props.value && props.onRenderValue) {
        return props.onRenderValue(props.value);
      }

      var option = _lodash2.default.find(props.options, { value: props.value });
      return option && option.label || props.placeholder;
    }
  }, {
    key: 'getVisibleOptions',
    value: function getVisibleOptions(searchValue) {
      if (!searchValue) {
        return this.props.options;
      }

      return _lodash2.default.filter(this.props.options, function (option) {
        return option.label.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
      });
    }
  }, {
    key: 'isOpen',
    value: function isOpen() {
      return this.state.isOpen ? 'open' : '';
    }
  }, {
    key: 'renderValue',
    value: function renderValue() {
      return _react2.default.createElement(
        'span',
        { className: 'filter-option pull-left' },
        this.state.value
      );
    }
  }, {
    key: 'renderSearch',
    value: function renderSearch() {
      var _this3 = this;

      if (!this.props.isSearchable) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'bs-searchbox' },
        _react2.default.createElement('input', {
          ref: 'select-search',
          type: 'text',
          className: 'form-control',
          value: this.state.searchValue,
          onKeyDown: function onKeyDown(e) {
            return _this3.onHandleKeyDown(e);
          },
          onChange: function onChange(e) {
            return _this3.onTextSearch(e);
          } })
      );
    }
  }, {
    key: 'renderOption',
    value: function renderOption(option, index, isSelected, isActive) {
      var _this4 = this;

      return _react2.default.createElement(
        'li',
        {
          key: index,
          className: isSelected + ' ' + isActive,
          onClick: function onClick(e) {
            return _this4.onSelectValue(option.value);
          },
          onMouseOver: function onMouseOver(e) {
            return _this4.onSetActiveIndex(index);
          } },
        _react2.default.createElement(
          'a',
          { tabIndex: index },
          _react2.default.createElement('i', { className: isSelected ? 'fa fa-check' : '' }),
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'text' },
            option.label
          )
        )
      );
    }
  }, {
    key: 'renderOptions',
    value: function renderOptions() {
      var _this5 = this;

      if (!this.props.options) {
        return null;
      }

      var options = _lodash2.default.map(this.state.visibleOptions, function (option, index) {
        var isSelected = _this5.props.value === option.value ? 'selected' : '';
        var isActive = _this5.state.activeIndex === index ? 'active' : '';

        return _this5.renderOption(option, index, isSelected, isActive);
      });

      var style = {};
      if (this.props.maxHeight) {
        style = {
          maxHeight: this.props.maxHeight,
          overflow: 'auto'
        };
      }

      return _react2.default.createElement(
        'ul',
        { style: style, className: 'dropdown-menu inner' },
        options
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return _react2.default.createElement(
        'div',
        { className: 'form-group' },
        _react2.default.createElement(
          'div',
          { className: 'btn-group bootstrap-select form-control ' + this.isOpen() },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn dropdown-toggle btn-default',
              onClick: function onClick(e) {
                return _this6.onToggleOpen();
              },
              onKeyDown: function onKeyDown(e) {
                return _this6.onHandleKeyDown(e);
              } },
            this.renderValue(),
            _react2.default.createElement(
              'span',
              { className: 'bs-caret' },
              _react2.default.createElement('span', { className: 'caret' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'dropdown-menu open' },
            this.renderSearch(),
            this.renderOptions()
          )
        )
      );
    }
  }]);

  return Select;
}(_react2.default.Component);

Select.propTypes = {
  placeholder: _propTypes2.default.string,
  maxHeight: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onRenderValue: _propTypes2.default.func,
  options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    label: _propTypes2.default.node
  })),
  value: _propTypes2.default.node,
  isSearchable: _propTypes2.default.bool,
  isOpen: _propTypes2.default.bool,
  onSearch: _propTypes2.default.func,
  onToggleOpen: _propTypes2.default.func // used when the parent needs to know that isOpen was toggled
};
Select.defaultProps = {
  placeholder: '',
  onChange: _lodash2.default.noop,
  value: '',
  isSearchable: false,
  isOpen: false,
  onToggleOpen: _lodash2.default.noop
};