'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Panel = exports.Panel = function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    _classCallCheck(this, Panel);

    return _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).apply(this, arguments));
  }

  _createClass(Panel, [{
    key: 'renderHeader',
    value: function renderHeader() {
      if (!this.props.title) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'panel-heading clearfix' },
        _react2.default.createElement(
          'h3',
          { className: 'panel-title' },
          this.props.title
        )
      );
    }
  }, {
    key: 'renderPanelSize',
    value: function renderPanelSize() {
      switch (this.props.size) {
        case 'xs':
        case 'extra-small':
          return 'xsmall-panel';

        case 'sm':
        case 'small':
          return 'small-panel';

        case 'md':
        case 'medium':
          return 'medium-panel';

        case 'lg':
        case 'large':
          return 'large-panel';

        case 'auto':
        case 'none':
        default:
          return '';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'panel panel-blur ' + this.renderPanelSize() + ' light-text ' + (this.props.withScroll ? 'with-scroll' : '') + ' ' + this.props.className },
        this.renderHeader(),
        _react2.default.createElement(
          'div',
          { className: 'panel-body' },
          this.props.children
        )
      );
    }
  }]);

  return Panel;
}(_react2.default.Component);

Panel.propTypes = {
  title: _propTypes2.default.string,
  className: _propTypes2.default.string,
  size: _propTypes2.default.string,
  withScroll: _propTypes2.default.bool
};
Panel.defaultProps = {
  className: '',
  size: 'auto',
  withScroll: false
};