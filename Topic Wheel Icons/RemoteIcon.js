"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react RemoteIcon.jsx -o RemoteIcon.js
// 2. add, commit, push to main
var iconTypes = {
  // ----------- HELPER ICONS ------------
  arrowRight: {
    asset: "https://i.imgur.com/frEP0aa.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  back: {
    asset: "https://i.imgur.com/y27mqc4.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  backWhite: {
    asset: "https://i.imgur.com/rb64cfN.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  solidArrow: {
    asset: "https://i.imgur.com/NrcxyQ4.png",
    ratio: {
      width: 0.375,
      height: 1
    }
  },
  selectLeft: {
    asset: "https://i.imgur.com/pcWQAbm.png",
    ratio: {
      width: 0.5333333333,
      height: 1
    }
  },
  selectRight: {
    asset: "https://i.imgur.com/pfZyMOr.png",
    ratio: {
      width: 0.5333333333,
      height: 1
    }
  },
  // ----------- TOPIC ICONS ------------
  peeps: {
    asset: "https://i.imgur.com/ezDvd9q.png",
    ratio: {
      width: 1,
      height: 0.5679012346
    }
  },
  // ----------- HOME ICONS ------------
  home: {
    fullAsset: "https://i.imgur.com/HKCwwfQ.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // ----------- TRADE ICONS ------------
  trade: {
    fullAsset: "https://i.imgur.com/pgJwxrF.png",
    ratio: {
      width: 1.2,
      height: 1.2
    }
  },
  services: {
    asset: "https://i.imgur.com/LDEF2IS.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  thingsToDo: {
    asset: "https://i.imgur.com/GkyRUr8.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  commercial: {
    asset: "https://i.imgur.com/eiThdKt.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  plumber: {
    fullAsset: "https://i.imgur.com/WEx2eYL.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  carpenter: {
    fullAsset: "https://i.imgur.com/ZLfjEiM.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  person: {
    asset: "https://i.imgur.com/Y4pf0bN.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  bankline: {
    asset: "https://i.imgur.com/4lzTAhT.png",
    ratio: {
      width: 0.9310344828,
      height: 1
    }
  },
  // not in use
  certificate: {
    asset: "https://i.imgur.com/CZCXZvr.png",
    ratio: {
      width: 1,
      height: 0.9473684211
    }
  },
  // not in use
  check: {
    asset: "https://i.imgur.com/FC2oVzq.png",
    ratio: {
      width: 1,
      height: 0.5
    }
  },
  // not in use
  close: {
    asset: "https://i.imgur.com/ciZZkR5.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  dollar: {
    fullAsset: "https://i.imgur.com/1FkRVH3.png",
    ratio: {
      width: 1,
      height: 0.511627907
    }
  },
  // not in use
  faqLine: {
    asset: "https://i.imgur.com/qP8Ipyy.png",
    ratio: {
      width: 1,
      height: 0.8125
    }
  },
  // not in use
  globe: {
    asset: "https://i.imgur.com/FRJduiJ.png",
    ratio: {
      width: 0.8888888889,
      height: 1
    }
  },
  // not in use
  group: {
    asset: "https://i.imgur.com/CspcaQ8.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  info: {
    asset: "https://i.imgur.com/uW9C6YO.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  loan: {
    fullAsset: "https://i.imgur.com/3t32coA.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  logoIcon: {
    asset: "https://i.imgur.com/ypo1GAY.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  mma: {
    fullAsset: "https://i.imgur.com/e7wlYD1.png",
    ratio: {
      width: 1,
      height: 0.8823529412
    }
  },
  // not in use
  mobilemoney: {
    asset: "https://i.imgur.com/4PzL8xp.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  moneyorder: {
    asset: "https://i.imgur.com/4OoQPw6.png",
    ratio: {
      width: 1,
      height: 0.7333333333
    }
  },
  // not in use
  phoneLine: {
    asset: "https://i.imgur.com/z1iAAaC.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  retire: {
    asset: "https://i.imgur.com/aQsuDBN.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  savings: {
    asset: "https://i.imgur.com/3t32coA.png",
    ratio: {
      width: 1,
      height: 0.8260869565
    }
  },
  // not in use
  smallbiz: {
    asset: "https://i.imgur.com/imKesdW.png",
    fullAsset: "https://i.imgur.com/yViaq30.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  star: {
    asset: "https://i.imgur.com/soQQ0u9.png",
    ratio: {
      width: 1,
      height: 0.9375
    }
  },
  // not in use
  transfermoney: {
    asset: "https://i.imgur.com/vtwKdtf.png",
    ratio: {
      width: 1,
      height: 1
    }
  },
  // not in use
  usa: {
    asset: "https://i.imgur.com/xwoMn2t.png",
    ratio: {
      width: 1,
      height: 0.75
    }
  },
  // not in use
  wire: {
    fullAsset: "https://i.imgur.com/UAjVFyp.png",
    ratio: {
      width: 1,
      height: 0.652173913
    }
  }
};
var RemoteIcon = function RemoteIcon(props) {
  var selectedIcon = iconTypes[props.type] || iconTypes.check;
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
