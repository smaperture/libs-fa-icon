"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _reactNativeFontawesome = require("@fortawesome/react-native-fontawesome");

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Native = _ref => {
  let {
    size,
    ...props
  } = _ref;
  return (
    /*#__PURE__*/
    // @ts-expect-error: size is passed as a param
    _react.default.createElement(_reactNativeFontawesome.FontAwesomeIcon, _extends({}, props, {
      size: size
    }))
  );
};

const Web = _ref2 => {
  let {
    size,
    ...props
  } = _ref2;

  const styles = _reactNative.StyleSheet.flatten([{
    height: size,
    width: size
  }]);

  return (
    /*#__PURE__*/
    // @ts-expect-error: size is passed as a style
    _react.default.createElement(_reactFontawesome.FontAwesomeIcon, _extends({}, props, {
      style: styles
    }))
  );
};

const Icon = _ref3 => {
  let {
    size,
    style,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: style
  }, _reactNative.Platform.OS === 'web' && /*#__PURE__*/_react.default.createElement(Web, _extends({}, props, {
    size: size
  })), _reactNative.Platform.OS !== 'web' && /*#__PURE__*/_react.default.createElement(Native, _extends({}, props, {
    size: size
  })));
};

var _default = Icon;
exports.default = _default;
//# sourceMappingURL=index.js.map