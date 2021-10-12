'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _panel = require('./panel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components


var Tabs = exports.Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = {
      activeTab: _this.props.startTab,
      tabs: []
    };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'onSetActiveTab',
    value: function onSetActiveTab(tab, index, event) {
      event.preventDefault();

      var activeTab = void 0;
      if (_lodash2.default.isString(this.props.startTab)) {
        activeTab = tab.props.name;
      } else {
        activeTab = index + 1;
      }

      this.setState({ activeTab: activeTab });
    }
  }, {
    key: 'getTabsAlignment',
    value: function getTabsAlignment(alignment) {
      switch (alignment) {
        case 'left':
          return 'tabs-left';
        case 'right':
          return 'tabs-right';
        case 'top':
        default:
          return '';
      }
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs(tabs) {
      var _this2 = this;

      return _lodash2.default.map(tabs, function (tab, index) {
        var isActive = '';
        if (_lodash2.default.isString(_this2.state.activeTab) && tab.props.name === _this2.state.activeTab || _lodash2.default.isNumber(_this2.state.activeTab) && _this2.state.activeTab === index + 1) {
          // If the user passes in a key to the tab and startTab is a string, check if it's active via the Tab's name. e.g.
          /*
            <Tabs startTab='first'>
              <Tab name='first'>
                First
              </Tab>
              <Tab name='second'>
                Second
              </Tab>
            </Tabs>
           */
          // Else if startTab is a number, calculate based on the order the tabs are passed in
          isActive = 'active';
        }

        return _react2.default.createElement(
          'li',
          { className: isActive, onClick: function onClick(e) {
              return _this2.onSetActiveTab(tab, index, e);
            }, key: index },
          tab
        );
      });
    }
  }, {
    key: 'renderActiveTabBody',
    value: function renderActiveTabBody(tabs) {
      var _this3 = this;

      // if this.state.activeTab is a string, try changing if the <Tab>s have a name and if one has a matching name, return it
      var activeTab = void 0;
      if (_lodash2.default.isString(this.state.activeTab)) {
        activeTab = _lodash2.default.find(tabs, function (tab) {
          return tab.props.name === _this3.state.activeTab;
        });
      } else {
        activeTab = _lodash2.default.find(tabs, function (tab, index) {
          return _this3.state.activeTab === index + 1;
        });
      }

      return activeTab ? activeTab.props.children : null;
    }
  }, {
    key: 'render',
    value: function render() {
      var tabs = _lodash2.default.isArray(this.props.children) ? this.props.children : [this.props.children];
      var alignment = this.getTabsAlignment(this.props.align);
      var isHorizontal = alignment === '';

      return _react2.default.createElement(
        _panel.Panel,
        { className: (isHorizontal ? 'horizontal-tabs' : '') + ' tabs-panel' },
        _react2.default.createElement(
          'div',
          { className: alignment },
          _react2.default.createElement(
            'ul',
            { className: 'nav nav-tabs' },
            this.renderTabs(tabs)
          ),
          _react2.default.createElement(
            'div',
            { className: 'tab-content' },
            _react2.default.createElement(
              'div',
              { className: 'tab-pane active' },
              this.renderActiveTabBody(tabs)
            )
          )
        )
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

Tabs.propTypes = {
  align: _propTypes2.default.string,
  startTab: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};
Tabs.defaultProps = {
  align: 'top',
  startTab: 1
};