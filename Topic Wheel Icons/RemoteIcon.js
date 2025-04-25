"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _iconTypes = require("./iconTypes");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react RemoteIcon.jsx -o RemoteIcon.js
// 2. add, commit, push to main
var RemoteIcon = function RemoteIcon(props) {
  var _iconTypes$props$type;
  var selectedIcon = (_iconTypes$props$type = _iconTypes.iconTypes[props.type]) !== null && _iconTypes$props$type !== void 0 ? _iconTypes$props$type : _iconTypes.iconTypes['check'];
  var assetSource = props.full && selectedIcon.fullAsset ? {
    uri: selectedIcon.fullAsset
  } : {
    uri: selectedIcon.asset
  };
  var styles = _reactNative.StyleSheet.create({
    icon: _objectSpread(_objectSpread({}, props.style), {}, {
      display: 'flex',
      width: props.size * selectedIcon.ratio.width,
      height: props.size * selectedIcon.ratio.height,
      minWidth: props.size * selectedIcon.ratio.width,
      minHeight: props.size * selectedIcon.ratio.height,
      maxWidth: props.size * selectedIcon.ratio.width,
      maxHeight: props.size * selectedIcon.ratio.height
    })
  });
  return /*#__PURE__*/_react["default"].createElement(_reactNative.ImageBackground, {
    style: styles.icon,
    source: assetSource,
    resizeMode: "contain"
  });
};
var _default = exports["default"] = RemoteIcon;
