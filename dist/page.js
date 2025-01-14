'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFlexProto = require('react-flex-proto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = exports.Page = function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page() {
    _classCallCheck(this, Page);

    return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).apply(this, arguments));
  }

  _createClass(Page, [{
    key: 'renderTitle',
    value: function renderTitle() {
      if (!this.props.title) {
        return null;
      }

      return _react2.default.createElement(
        _reactFlexProto.Col,
        { padding: 0 },
        _react2.default.createElement(
          'h1',
          { className: 'al-title' },
          this.props.title
        )
      );
    }
  }, {
    key: 'renderActionBar',
    value: function renderActionBar() {
      if (!this.props.actionBar) {
        return null;
      }

      return _react2.default.createElement(
        _reactFlexProto.Col,
        { align: 'right' },
        this.props.actionBar
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'content-top clearfix' },
          _react2.default.createElement(
            _reactFlexProto.Row,
            null,
            this.renderTitle(),
            this.renderActionBar()
          )
        ),
        this.props.children
      );
    }
  }]);

  return Page;
}(_react2.default.Component);

Page.propTypes = {
  title: _propTypes2.default.string,
  actionBar: _propTypes2.default.node
};