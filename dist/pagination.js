'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _input = require('./input');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pagination = exports.Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.state = {
      dirtyValue: _this.props.currentPage,
      isBeingEdited: false
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.currentPage !== this.props.currentPage) {
        this.setState({ dirtyValue: nextProps.currentPage, isBeingEdited: false });
      }
    }
  }, {
    key: 'onSetEditing',
    value: function onSetEditing(isBeingEdited) {
      this.setState({ isBeingEdited: isBeingEdited });
    }
  }, {
    key: 'onPageChange',
    value: function onPageChange(page) {
      if (this.isValidPage(page)) {
        this.props.onChange(page);
      }
    }
  }, {
    key: 'onHandleKeyDown',
    value: function onHandleKeyDown(e) {
      if (e.keyCode === 27) {
        return this.onCancelEditing();
      } else if (e.keyCode === 13) {
        return this.onSubmit();
      }

      return e;
    }
  }, {
    key: 'onCancelEditing',
    value: function onCancelEditing() {
      this.setState({ isBeingEdited: false, dirtyValue: this.props.currentPage });
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      if (this.isValidPage(this.state.dirtyValue)) {
        this.props.onChange(Number(this.state.dirtyValue));
      }
    }
  }, {
    key: 'onTextChange',
    value: function onTextChange(event) {
      this.setState({ dirtyValue: event.currentTarget.value });
    }
  }, {
    key: 'isValidPage',
    value: function isValidPage(page) {
      return page >= 1 && page <= this.props.totalPages;
    }
  }, {
    key: 'renderCurrentPage',
    value: function renderCurrentPage() {
      var _this2 = this;

      var _props = this.props,
          currentPage = _props.currentPage,
          totalPages = _props.totalPages;

      if (!this.state.isBeingEdited) {
        return _react2.default.createElement(
          'a',
          null,
          currentPage,
          ' of ',
          totalPages
        );
      }

      return _react2.default.createElement(
        'span',
        { style: { height: '34px' } },
        _react2.default.createElement(_input.Input, {
          ref: 'pagination-input',
          autoFocus: true,
          hasFeedbackIcon: false,
          className: 'pagination-input',
          onValidate: function onValidate(page) {
            return _this2.isValidPage(page);
          },
          value: this.state.dirtyValue,
          onChange: function onChange(e) {
            return _this2.onTextChange(e);
          },
          onKeyDown: function onKeyDown(e) {
            return _this2.onHandleKeyDown(e);
          } })
      );
    }
  }, {
    key: 'renderPages',
    value: function renderPages() {
      var _this3 = this;

      var _props2 = this.props,
          currentPage = _props2.currentPage,
          totalPages = _props2.totalPages;


      return [_react2.default.createElement(
        'li',
        { key: 'first-page', onClick: function onClick(e) {
            return _this3.onPageChange(1);
          } },
        _react2.default.createElement(
          'a',
          null,
          _react2.default.createElement('i', { className: 'fa fa-angle-double-left vcenter' })
        )
      ), _react2.default.createElement(
        'li',
        { key: currentPage - 1, onClick: function onClick(e) {
            return _this3.onPageChange(currentPage - 1);
          } },
        _react2.default.createElement(
          'a',
          null,
          _react2.default.createElement('i', { className: 'fa fa-angle-left' })
        )
      ), _react2.default.createElement(
        'li',
        { key: currentPage, onClick: function onClick(e) {
            return _this3.onSetEditing(true);
          } },
        this.renderCurrentPage()
      ), _react2.default.createElement(
        'li',
        { key: currentPage + 1, onClick: function onClick(e) {
            return _this3.onPageChange(currentPage + 1);
          } },
        _react2.default.createElement(
          'a',
          null,
          _react2.default.createElement('i', { className: 'fa fa-angle-right' })
        )
      ), _react2.default.createElement(
        'li',
        { key: 'last-page', onClick: function onClick(e) {
            return _this3.onPageChange(totalPages);
          } },
        _react2.default.createElement(
          'a',
          null,
          _react2.default.createElement('i', { className: 'fa fa-angle-double-right' })
        )
      )];
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.totalPages < 1) {
        return null;
      }

      return _react2.default.createElement(
        'ul',
        { className: 'pagination' },
        this.renderPages()
      );
    }
  }]);

  return Pagination;
}(_react2.default.Component);

Pagination.propTypes = {
  currentPage: _propTypes2.default.number.isRequired,
  totalPages: _propTypes2.default.number.isRequired,
  onChange: _propTypes2.default.func.isRequired
};