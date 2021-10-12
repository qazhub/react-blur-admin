'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tab = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = exports.Tab = function Tab(_ref) {
  var title = _ref.title,
      onClick = _ref.onClick;

  return _react2.default.createElement(
    'a',
    { href: '#', onClick: onClick },
    title
  );
};

Tab.propTypes = {
  title: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  name: _propTypes2.default.string
};