'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notifications = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _notification = require('./notification');

var _eventBus = require('./lib/event-bus');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notifications = exports.Notifications = function (_React$Component) {
  _inherits(Notifications, _React$Component);

  function Notifications(props) {
    _classCallCheck(this, Notifications);

    var _this = _possibleConstructorReturn(this, (Notifications.__proto__ || Object.getPrototypeOf(Notifications)).call(this, props));

    _this.state = {
      counter: 0,
      notifications: {}
    };

    _this.addNotification = _this.addNotification.bind(_this);
    _this.onClose = _this.onClose.bind(_this);
    _eventBus.eventBus.on('notification', _this.addNotification);
    return _this;
  }

  _createClass(Notifications, [{
    key: 'onClose',
    value: function onClose(notification) {
      var notifications = _lodash2.default.reject(this.state.notifications, { id: notification.id });
      this.setState({ notifications: notifications });
    }
  }, {
    key: 'addNotification',
    value: function addNotification(notification) {
      var notifications = _lodash2.default.assign({}, this.state.notifications);
      if (!this.props.preventDuplicates || !_lodash2.default.some(this.state.notifications, function (note) {
        return notification.text === note.text;
      })) {
        var counter = this.state.counter;
        notifications[counter] = _lodash2.default.assign({}, notification, { id: this.state.counter });

        var ids = _lodash2.default.map(notifications, 'id');
        if (ids.length >= this.props.maxOpened) {
          var oldestId = _lodash2.default.head(ids);
          notifications = _lodash2.default.reject(notifications, { id: oldestId });
        }

        this.setState({ notifications: notifications, counter: ++counter });
      }
    }
  }, {
    key: 'renderNotifications',
    value: function renderNotifications() {
      var _this2 = this;

      var notifications = _lodash2.default.assign({}, this.state.notifications);
      notifications = _lodash2.default.orderBy(notifications, 'id', this.props.newestOnTop ? 'desc' : 'asc');

      return _lodash2.default.map(notifications, function (notification) {
        return _react2.default.createElement(
          _notification.Notification,
          _extends({}, notification.props, { key: notification.id, onClose: function onClose() {
              return _this2.onClose(notification);
            } }),
          notification.text
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'toast-container', className: 'toast-' + this.props.position },
        this.renderNotifications()
      );
    }
  }]);

  return Notifications;
}(_react2.default.Component);

Notifications.propTypes = {
  position: _propTypes2.default.string,
  newestOnTop: _propTypes2.default.bool,
  maxOpened: _propTypes2.default.number,
  preventDuplicates: _propTypes2.default.bool
};
Notifications.defaultProps = {
  position: 'top-right',
  newestOnTop: true,
  maxOpened: 10,
  preventDuplicates: true
};