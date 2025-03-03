'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MessagesAlertContainer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MessagesAlertContainer = exports.MessagesAlertContainer = function (_React$Component) {
  _inherits(MessagesAlertContainer, _React$Component);

  function MessagesAlertContainer(props) {
    _classCallCheck(this, MessagesAlertContainer);

    var _this = _possibleConstructorReturn(this, (MessagesAlertContainer.__proto__ || Object.getPrototypeOf(MessagesAlertContainer)).call(this, props));

    _this.state = {
      isExpanded: false
    };
    return _this;
  }

  _createClass(MessagesAlertContainer, [{
    key: 'onClick',
    value: function onClick() {
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'ul',
        { className: 'al-msg-center clearfix' },
        _react2.default.createElement(
          'li',
          { className: 'dropdown ' + (this.state.isExpanded ? 'open' : '') },
          _react2.default.createElement(
            'a',
            { className: 'msg dropdown-toggle', onClick: this.onClick.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-envelope-o' }),
            _react2.default.createElement(
              'span',
              null,
              this.props.mailCount
            ),
            _react2.default.createElement('div', { className: 'notification-ring' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'top-dropdown-menu dropdown-menu' },
            _react2.default.createElement('i', { className: 'dropdown-arr' }),
            _react2.default.createElement(
              'div',
              { className: 'header clearfix' },
              _react2.default.createElement(
                'strong',
                { className: 'red-text' },
                'Messages'
              ),
              this.props.markAllAsReadOnClick ? _react2.default.createElement(
                'a',
                { onClick: this.props.markAllAsReadOnClick },
                'Mark All as Read'
              ) : '',
              this.props.settingsOnClick ? _react2.default.createElement(
                'a',
                { onClick: this.props.settingsOnClick },
                'Settings'
              ) : ''
            ),
            _react2.default.createElement(
              'div',
              { className: 'msg-list' },
              this.props.children
            ),
            this.props.allMessagesOnClick ? _react2.default.createElement(
              'a',
              { onClick: this.props.allMessagesOnClick },
              'See all messages'
            ) : ''
          )
        )
      );
    }
  }]);

  return MessagesAlertContainer;
}(_react2.default.Component);

MessagesAlertContainer.propTypes = {
  mailCount: _propTypes2.default.number.isRequired,
  settingsOnClick: _propTypes2.default.func,
  allMessagesOnClick: _propTypes2.default.func,
  markAllAsReadOnClick: _propTypes2.default.func
};