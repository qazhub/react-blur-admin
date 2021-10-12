'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = exports.ProgressBar = function (_React$Component) {
  _inherits(ProgressBar, _React$Component);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).apply(this, arguments));
  }

  _createClass(ProgressBar, [{
    key: 'render',
    value: function render() {
      var classes = (0, _classnames2.default)({
        'progress-bar': true,
        'progress-bar-success': this.props.type === 'success',
        'progress-bar-primary': this.props.type === 'primary',
        'progress-bar-warning': this.props.type === 'warning',
        'progress-bar-danger': this.props.type === 'danger',
        'progress-bar-striped': this.props.striped || this.props.animated,
        'active': this.props.animated
      });

      return _react2.default.createElement(
        'div',
        { className: 'progress' },
        _react2.default.createElement(
          'div',
          { className: classes, style: { width: this.props.percentage + '%', height: '100%' } },
          _react2.default.createElement(
            'span',
            null,
            this.props.label
          )
        )
      );
    }
  }]);

  return ProgressBar;
}(_react2.default.Component);

ProgressBar.propTypes = {
  type: _propTypes2.default.oneOf(['success', 'primary', 'warning', 'danger']),
  striped: _propTypes2.default.bool,
  animated: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  percentage: _propTypes2.default.number.isRequired
};
ProgressBar.defaultProps = {
  striped: false,
  animated: false,
  type: 'primary',
  label: ''

};