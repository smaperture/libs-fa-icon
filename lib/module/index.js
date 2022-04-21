function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { FontAwesomeIcon as FontAwesomeReact } from '@fortawesome/react-fontawesome';
import { FontAwesomeIcon as FontAwesomeNative } from '@fortawesome/react-native-fontawesome';
import { Platform, StyleSheet, View } from 'react-native';

const Native = _ref => {
  let {
    size,
    ...props
  } = _ref;
  return (
    /*#__PURE__*/
    // @ts-expect-error: size is passed as a param
    React.createElement(FontAwesomeNative, _extends({}, props, {
      size: size
    }))
  );
};

const Web = _ref2 => {
  let {
    size,
    ...props
  } = _ref2;
  const styles = StyleSheet.flatten([{
    height: size,
    width: size
  }]);
  return (
    /*#__PURE__*/
    // @ts-expect-error: size is passed as a style
    React.createElement(FontAwesomeReact, _extends({}, props, {
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
  return /*#__PURE__*/React.createElement(View, {
    style: style
  }, Platform.OS === 'web' && /*#__PURE__*/React.createElement(Web, _extends({}, props, {
    size: size
  })), Platform.OS !== 'web' && /*#__PURE__*/React.createElement(Native, _extends({}, props, {
    size: size
  })));
};

export default Icon;
//# sourceMappingURL=index.js.map