"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react RemoteIcon.jsx -o RemoteIcon.js
// 2. add, commit, push to main
var iconTypes = {
  arrowRight: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/arrowRight.png',
    ratio: {
      width: 1,
      height: 1
    }
  },
  back: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/back.png',
    ratio: {
      width: 1,
      height: 1
    }
  },
  backWhite: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/arrowBack24Px.png',
    ratio: {
      width: 1,
      height: 1
    }
  },
  bankline: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/bankline2X.png',
    // fullAsset: require('./bankline2X.png'),
    ratio: {
      width: 0.9310344828,
      height: 1
    }
  },
  certificate: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-certificate2X.png',
    // fullAsset: require('./g-certificate2X.png'),
    ratio: {
      width: 1,
      height: 0.9473684211
    }
  },
  check: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-check2X.png',
    // fullAsset: require('./g-check2X.png'),
    ratio: {
      width: 1,
      height: 0.5
    }
  },
  close: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/close.png',
    ratio: {
      width: 1,
      height: 1
    }
  },
  dollar: {
    // asset: require('./dolla2X.png'),
    fullAsset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/dolla2X.png',
    ratio: {
      width: 1,
      height: 0.511627907
    }
  },
  faqLine: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/faqLine2X.png',
    // fullAsset: require('./faqLine2X.png'),
    ratio: {
      width: 1,
      height: 0.8125
    }
  },
  globe: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-globe2X.png',
    ratio: {
      width: 0.8888888889,
      height: 1
    }
  },
  group: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-group.png',
    // fullAsset: require('./g-group.png'),
    ratio: {
      width: 1,
      height: 1
    }
  },
  info: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/info24Px.png',
    ratio: {
      width: 1,
      height: 1
    }
  },
  loan: {
    // asset: require('./loan2X.png'),
    fullAsset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/loan2X.png',
    ratio: {
      width: 1,
      height: 1
    }
  },
  logoIcon: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/logoIcon2X.png',
    // fullAsset: require('./g-logoIcon2X.png'),
    ratio: {
      width: 1,
      height: 1
    }
  },
  mma: {
    // asset: require('./mma2X.png'),
    fullAsset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/mma2X.png',
    ratio: {
      width: 1,
      height: 0.8823529412
    }
  },
  mobilemoney: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-mobilemoney2X.png',
    ratio: {
      width: 1,
      height: 1
    }
  },
  moneyorder: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-moneyorder2X.png',
    ratio: {
      width: 1,
      height: 0.7333333333
    }
  },
  peeps: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-peeps2X.png',
    // fullAsset: require('./peeps2X.png'),
    ratio: {
      width: 1,
      height: 0.5679012346
    }
  },
  phoneLine: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/phoneLine2X.png',
    // fullAsset: require('./phoneLine2X.png'),
    ratio: {
      width: 1,
      height: 1
    }
  },
  retire: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-retire2X.png',
    // fullAsset: require('./g-retire2X.png'),
    ratio: {
      width: 1,
      height: 1
    }
  },
  savings: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-savings2X.png',
    // fullAsset: require('./g-savings2X.png'),
    ratio: {
      width: 1,
      height: 0.8260869565
    }
  },
  selectLeft: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/selectLeft2X.png',
    ratio: {
      width: 0.5333333333,
      height: 1
    }
  },
  selectRight: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/selectRight2X.png',
    ratio: {
      width: 0.5333333333,
      height: 1
    }
  },
  smallbiz: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-smallbiz2X.png',
    fullAsset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/smallbiz2X.png',
    ratio: {
      width: 1,
      height: 1
    }
  },
  solidArrow: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/triangle.png',
    ratio: {
      width: 0.375,
      height: 1
    }
  },
  star: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/fave2X.png',
    ratio: {
      width: 1,
      height: 0.9375
    }
  },
  transfermoney: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-transfermoney2X.png',
    ratio: {
      width: 1,
      height: 1
    }
  },
  usa: {
    asset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/g-usa2X.png',
    ratio: {
      width: 1,
      height: 0.75
    }
  },
  wire: {
    // asset: require('./wire2X.png'),
    fullAsset: 'https://raw.githubusercontent.com/needseek/NS-Wormholes/main/Topic%20Wheel%20Icons/icons/wire2X.png',
    ratio: {
      width: 1,
      height: 0.652173913
    }
  }
};
var RemoteIcon = function RemoteIcon(props) {
  var _iconTypes$props$type;
  console.log('props', props);
  var selectedIcon = (_iconTypes$props$type = iconTypes[props.type]) !== null && _iconTypes$props$type !== void 0 ? _iconTypes$props$type : iconTypes['check'];
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
