"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _toArray(r) { return _arrayWithHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableRest(); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); } //  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react Plumbing.jsx -o Plumbing.js
// 2. add, commit, push to main
// Force Force Force Force
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ BASE FORM COMPONENTS --------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ------------------------ FORM SECTION ----------------------------------
var FormSection = function FormSection(_ref) {
  var title = _ref.title,
    children = _ref.children,
    styles = _ref.styles;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, title && /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.mainSectionHeader
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.mainSectionHeaderText
  }, title)), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formGroup
  }, children));
};

// ------------------------ FORM INPUT ------------------------------------
var FormInput = function FormInput(_ref2) {
  var label = _ref2.label,
    value = _ref2.value,
    setValue = _ref2.setValue,
    placeholder = _ref2.placeholder,
    required = _ref2.required,
    keyboardType = _ref2.keyboardType,
    multiline = _ref2.multiline,
    styles = _ref2.styles,
    autoCapitalize = _ref2.autoCapitalize;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formGroup
  }, label && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.label
  }, label, required && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.requiredStar
  }, " *")), /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: [styles.input, multiline && styles.textArea],
    value: value,
    onChangeText: setValue,
    placeholder: placeholder,
    placeholderTextColor: "#999",
    keyboardType: keyboardType,
    multiline: multiline,
    textAlignVertical: multiline ? "top" : "center",
    autoCapitalize: autoCapitalize
  }));
};

// ------------------------ FORM DROPDOWN ---------------------------------
var FormDropdown = function FormDropdown(_ref3) {
  var label = _ref3.label,
    items = _ref3.items,
    value = _ref3.value,
    _setValue = _ref3.setValue,
    placeholder = _ref3.placeholder,
    zIndex = _ref3.zIndex,
    registry = _ref3.registry,
    styles = _ref3.styles,
    open = _ref3.open,
    _setOpen = _ref3.setOpen,
    required = _ref3.required,
    dropDownLabel = _ref3.dropDownLabel;
  var DropDownPicker = registry.DropDownPicker;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.formGroup, {
      zIndex: zIndex
    }]
  }, label && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.label
  }, label, " ", required && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.requiredStar
  }, " *")), /*#__PURE__*/_react["default"].createElement(DropDownPicker, _extends({
    open: open,
    value: value,
    items: items,
    setOpen: function setOpen(isOpen) {
      return _setOpen(isOpen ? label : null);
    },
    setValue: function setValue(val) {
      return _setValue(val());
    },
    placeholder: placeholder,
    style: styles.dropdownStyle,
    textStyle: styles.dropdownTextStyle,
    dropDownContainerStyle: styles.dropdownContainerStyle,
    listItemContainerStyle: styles.dropdownItemStyle,
    listMode: "SCROLLVIEW",
    scrollViewProps: {
      nestedScrollEnabled: true
    }
  }, dropDownLabel ? {
    label: dropDownLabel
  } : {})));
};

// ------------------------ ADDRESS SEARCH ---------------------------------
var AddressSearch = function AddressSearch(_ref4) {
  var value = _ref4.value,
    setValue = _ref4.setValue,
    googleApiKey = _ref4.googleApiKey,
    registry = _ref4.registry,
    styles = _ref4.styles;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    results = _useState2[0],
    setResults = _useState2[1];
  var _useState3 = (0, _react.useState)(""),
    _useState4 = _slicedToArray(_useState3, 2),
    searchQuery = _useState4[0],
    setSearchQuery = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showResults = _useState6[0],
    setShowResults = _useState6[1];
  var Ionicons = registry.Ionicons;
  var handleSearch = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!searchQuery || !googleApiKey)) {
              _context.next = 4;
              break;
            }
            setResults([]);
            setShowResults(false);
            return _context.abrupt("return");
          case 4:
            _context.prev = 4;
            _context.next = 7;
            return fetch("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=".concat(encodeURIComponent(searchQuery), "&key=").concat(googleApiKey));
          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();
          case 10:
            data = _context.sent;
            if (data.status === "OK") {
              setResults(data.predictions.map(function (prediction) {
                return {
                  id: prediction.place_id,
                  description: prediction.description
                };
              }));
              setShowResults(true);
            }
            _context.next = 18;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](4);
            console.error("Address search error:", _context.t0);
            _reactNative.Alert.alert("Error", "Failed to search addresses");
          case 18:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 14]]);
    }));
    return function handleSearch() {
      return _ref5.apply(this, arguments);
    };
  }();
  var selectAddress = function selectAddress(address) {
    setValue(address);
    setSearchQuery("");
    setShowResults(false);
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formGroup
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.label
  }, "Address", /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.requiredStar
  }, " *")), value ? /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.selectedAddressContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.selectedAddressText
  }, value), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.removeAddressButton,
    onPress: function onPress() {
      setValue("");
      setSearchQuery("");
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.removeAddressButtonText
  }, "\u2715"))) : /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.searchContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: styles.addressInput,
    value: searchQuery,
    onChangeText: setSearchQuery,
    placeholder: "Enter service address",
    placeholderTextColor: "#999",
    onSubmitEditing: handleSearch
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.iconContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: handleSearch,
    style: styles.inputIcon
  }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
    name: "search",
    size: 20,
    color: "#666"
  })))), showResults && /*#__PURE__*/_react["default"].createElement(_reactNative.FlatList, {
    data: results,
    keyExtractor: function keyExtractor(item) {
      return item.id;
    },
    style: styles.suggestionsList,
    keyboardShouldPersistTaps: "always",
    renderItem: function renderItem(_ref6) {
      var item = _ref6.item;
      return /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
        style: styles.suggestionItem,
        onPress: function onPress() {
          return selectAddress(item.description);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
        style: styles.suggestionText
      }, item.description));
    }
  }));
};

// ------------------------ DATE PICKER -------------------------------------
var DatePicker = function DatePicker(_ref7) {
  var date = _ref7.date,
    setDate = _ref7.setDate,
    registry = _ref7.registry,
    styles = _ref7.styles;
  var DateTimePicker = registry.DateTimePicker,
    Ionicons = registry.Ionicons;
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showPicker = _useState8[0],
    setShowPicker = _useState8[1];
  var _useState9 = (0, _react.useState)(null),
    _useState0 = _slicedToArray(_useState9, 2),
    tempDate = _useState0[0],
    setTempDate = _useState0[1];
  var handleConfirm = function handleConfirm() {
    setDate(tempDate);
    setShowPicker(false);
  };
  var handleCancel = function handleCancel() {
    setTempDate(null);
    setShowPicker(false);
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formGroup
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.datePickerButton,
    onPress: function onPress() {
      setTempDate(date || new Date());
      setShowPicker(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.datePickerButtonText
  }, date ? "".concat(date.getDate(), "/").concat(date.getMonth() + 1, "/").concat(date.getFullYear()) : "Select date"), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.calendarIcon
  }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
    name: "calendar",
    size: 22,
    color: "#444"
  }))), showPicker && /*#__PURE__*/_react["default"].createElement(_reactNative.Modal, {
    visible: showPicker,
    transparent: true,
    animationType: "fade",
    onRequestClose: handleCancel
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.datePickerModalOverlay
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.datePickerModalContent
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.datePickerHeader
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: handleCancel
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.datePickerCancelText
  }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.datePickerTitle
  }, "Select Date"), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: handleConfirm
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.datePickerConfirmText
  }, "Done"))), /*#__PURE__*/_react["default"].createElement(DateTimePicker, {
    value: tempDate || new Date(),
    mode: "date",
    display: "spinner",
    onChange: function onChange(e, selectedDate) {
      return setTempDate(selectedDate);
    },
    maximumDate: new Date(),
    style: styles.dateTimePicker
  })))));
};

// ------------------------ SWITCH INPUT -----------------------------------
var SwitchInput = function SwitchInput(_ref8) {
  var label = _ref8.label,
    value = _ref8.value,
    setValue = _ref8.setValue,
    styles = _ref8.styles;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.switchRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.switchLabel
  }, label), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.switchControl
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Switch, {
    value: value,
    onValueChange: setValue,
    trackColor: {
      "false": "#b3d1ff",
      "true": "#448aff"
    },
    thumbColor: value ? "#1565c0" : "#f4f3f4"
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.switchValueText
  }, value ? "Yes" : "No")));
};

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ COMPLEX FORM COMPONENTS -----------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ------------------------ WARRANTY SELECTOR -----------------------------
var WarrantySelector = function WarrantySelector(_ref9) {
  var partsAmount = _ref9.partsAmount,
    partsUnit = _ref9.partsUnit,
    setParts = _ref9.setParts,
    laborAmount = _ref9.laborAmount,
    laborUnit = _ref9.laborUnit,
    setLabor = _ref9.setLabor,
    registry = _ref9.registry,
    styles = _ref9.styles,
    openDropdown = _ref9.openDropdown,
    setOpenDropdown = _ref9.setOpenDropdown,
    getWarrantyItems = _ref9.getWarrantyItems;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.warrantyContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.warrantyInput
  }, /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "Parts Warranty",
    items: getWarrantyItems(partsAmount, partsUnit),
    value: !partsAmount || partsAmount === "0" || partsUnit === "none" ? "none" : "".concat(partsAmount, " ").concat(partsUnit).trim(),
    setValue: setParts,
    registry: registry,
    zIndex: openDropdown === 'Parts Warranty' ? 2999 : 999,
    styles: styles,
    open: openDropdown === 'Parts Warranty',
    setOpen: setOpenDropdown,
    required: false
  })), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.warrantyInput
  }, /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "Labor Warranty",
    items: getWarrantyItems(laborAmount, laborUnit),
    value: !laborAmount || laborAmount === "0" || laborUnit === "none" ? "none" : "".concat(laborAmount, " ").concat(laborUnit).trim(),
    setValue: setLabor,
    registry: registry,
    zIndex: openDropdown === 'Labor Warranty' ? 2998 : 998,
    styles: styles,
    open: openDropdown === 'Labor Warranty',
    setOpen: setOpenDropdown,
    required: false
  })));
};

// ------------------------ CUSTOM SELECTOR MODAL --------------------------
var CustomSelectorModal = function CustomSelectorModal(_ref0) {
  var visible = _ref0.visible,
    title = _ref0.title,
    inputLabel = _ref0.inputLabel,
    initialValue = _ref0.initialValue,
    initialUnit = _ref0.initialUnit,
    unitItems = _ref0.unitItems,
    onSave = _ref0.onSave,
    onClose = _ref0.onClose,
    registry = _ref0.registry,
    styles = _ref0.styles;
  var _useState1 = (0, _react.useState)(initialValue),
    _useState10 = _slicedToArray(_useState1, 2),
    inputValue = _useState10[0],
    setInputValue = _useState10[1];
  var _useState11 = (0, _react.useState)(initialUnit),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedUnit = _useState12[0],
    setSelectedUnit = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    openUnitDropdown = _useState14[0],
    setOpenUnitDropdown = _useState14[1];
  var DropDownPicker = registry.DropDownPicker;
  (0, _react.useEffect)(function () {
    if (visible) {
      setInputValue(initialValue);
      setSelectedUnit(initialUnit);
    }
  }, [visible, initialValue, initialUnit]);
  var handleSave = function handleSave() {
    if (inputValue && inputValue !== "0") {
      onSave(inputValue, selectedUnit);
    }
    onClose();
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.Modal, {
    visible: visible,
    transparent: true,
    animationType: "fade",
    onRequestClose: onClose
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalOverlay
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalContent
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalTitle
  }, title), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalForm
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalInputRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: styles.modalInput,
    value: inputValue,
    onChangeText: function onChangeText(text) {
      return setInputValue(text.replace(/[^0-9]/g, ''));
    },
    placeholder: "Value",
    placeholderTextColor: "#999",
    keyboardType: "numeric",
    autoFocus: true,
    inputMode: "numeric",
    maxLength: 6
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.modalDropdown, {
      zIndex: openUnitDropdown ? 1000 : 1
    }]
  }, /*#__PURE__*/_react["default"].createElement(DropDownPicker, {
    open: openUnitDropdown,
    value: selectedUnit,
    items: unitItems,
    setOpen: setOpenUnitDropdown,
    setValue: setSelectedUnit,
    placeholder: "Units",
    style: styles.dropdownStyle,
    textStyle: styles.dropdownTextStyle,
    dropDownContainerStyle: styles.dropdownContainerStyle,
    listItemContainerStyle: styles.dropdownItemStyle
  }))), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalButtons
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.modalCancelButton,
    onPress: onClose
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalCancelButtonText
  }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.modalSaveButton, (!inputValue || inputValue === "0") && styles.modalButtonDisabled],
    onPress: handleSave,
    disabled: !inputValue || inputValue === "0"
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalSaveButtonText
  }, "Save")))))));
};

// ---------------------- COVERAGE & INSURANCES SUB-COMPONENTS ----------------
var LicenseForm = function LicenseForm(_ref1) {
  var onSave = _ref1.onSave,
    onCancel = _ref1.onCancel,
    registry = _ref1.registry,
    styles = _ref1.styles,
    openDropdown = _ref1.openDropdown,
    setOpenDropdown = _ref1.setOpenDropdown,
    hasItems = _ref1.hasItems,
    initialValues = _ref1.initialValues;
  var _useState15 = (0, _react.useState)({
      title: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.title) || "",
      issuer: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.issuer) || "",
      type: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.type) || "Business License",
      description: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.description) || ""
    }),
    _useState16 = _slicedToArray(_useState15, 2),
    license = _useState16[0],
    setLicense = _useState16[1];
  (0, _react.useEffect)(function () {
    setLicense({
      title: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.title) || "",
      issuer: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.issuer) || "",
      type: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.type) || "Business License",
      description: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.description) || ""
    });
  }, [initialValues]);
  var handleCancel = function handleCancel() {
    if (!hasItems) {
      setLicense({
        title: "",
        issuer: "",
        type: "Business License",
        description: ""
      });
    }
    onCancel();
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.subForm
  }, /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "License Title",
    value: license.title,
    setValue: function setValue(text) {
      return setLicense(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          title: text
        });
      });
    },
    placeholder: "State Plumbing License",
    required: true,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Issuing Authority",
    value: license.issuer,
    setValue: function setValue(text) {
      return setLicense(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          issuer: text
        });
      });
    },
    placeholder: "State Licensing Board",
    required: true,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "License Type",
    items: [{
      label: "Business License",
      value: "Business License"
    }, {
      label: "Professional License",
      value: "Professional License"
    }, {
      label: "Trade License",
      value: "Trade License"
    }],
    value: license.type,
    setValue: function setValue(value) {
      return setLicense(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          type: value
        });
      });
    },
    registry: registry,
    zIndex: 2000,
    styles: styles,
    open: openDropdown === 'License Type',
    setOpen: setOpenDropdown
  }), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Description",
    value: license.description,
    setValue: function setValue(text) {
      return setLicense(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          description: text
        });
      });
    },
    placeholder: "Enter description (optional)",
    multiline: true,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.buttonRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.cancelButton],
    onPress: handleCancel
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.buttonText
  }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.saveButton, (!license.title || !license.issuer) && styles.buttonDisabled],
    onPress: function onPress() {
      onSave(license);
      setOpenDropdown(null);
    },
    disabled: !license.title || !license.issuer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [styles.buttonText, styles.saveButtonText]
  }, "Save"))));
};
var InsuranceForm = function InsuranceForm(_ref10) {
  var onSave = _ref10.onSave,
    onCancel = _ref10.onCancel,
    onCustomCoverage = _ref10.onCustomCoverage,
    registry = _ref10.registry,
    styles = _ref10.styles,
    openDropdown = _ref10.openDropdown,
    setOpenDropdown = _ref10.setOpenDropdown,
    hasItems = _ref10.hasItems,
    initialValues = _ref10.initialValues;
  var _useState17 = (0, _react.useState)({
      type: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.type) || "Commercial Liability",
      coverageAmount: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.coverageAmount) || "",
      coverageUnit: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.coverageUnit) || "Million Dollars",
      issuer: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.issuer) || "",
      description: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.description) || ""
    }),
    _useState18 = _slicedToArray(_useState17, 2),
    insurance = _useState18[0],
    setInsurance = _useState18[1];
  var getCoverageItems = function getCoverageItems() {
    var baseItems = [{
      label: "$1 Million",
      value: "1 Million Dollars"
    }, {
      label: "$2 Million",
      value: "2 Million Dollars"
    }, {
      label: "$5 Million",
      value: "5 Million Dollars"
    }, {
      label: "Custom...",
      value: "custom"
    }];
    if (insurance.coverageAmount && insurance.coverageUnit) {
      var customLabel = "$".concat(insurance.coverageAmount);
      if (insurance.coverageUnit === "Million Dollars") {
        customLabel += " Million";
      } else if (insurance.coverageUnit === "Thousand Dollars") {
        customLabel += " Thousand";
      }
      var customValue = "".concat(insurance.coverageAmount, " ").concat(insurance.coverageUnit);
      if (!baseItems.some(function (item) {
        return item.value.trim().toLowerCase() === customValue.trim().toLowerCase();
      })) {
        // Insert after $5 Million (index 2), before Custom...
        return [].concat(_toConsumableArray(baseItems.slice(0, 3)), [{
          label: customLabel,
          value: customValue
        }], _toConsumableArray(baseItems.slice(3)));
      }
    }
    return baseItems;
  };
  var handleCoverageChange = function handleCoverageChange(value) {
    if (value === "custom") {
      onCustomCoverage();
    } else {
      var _value$split = value.split(" "),
        _value$split2 = _toArray(_value$split),
        amount = _value$split2[0],
        unitParts = _value$split2.slice(1);
      var unit = unitParts.join(" ");
      setInsurance(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          coverageAmount: amount,
          coverageUnit: unit
        });
      });
    }
  };
  (0, _react.useEffect)(function () {
    setInsurance({
      type: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.type) || "Commercial Liability",
      coverageAmount: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.coverageAmount) || "1",
      coverageUnit: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.coverageUnit) || "Million Dollars",
      issuer: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.issuer) || "",
      description: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.description) || ""
    });
  }, [initialValues]);
  var handleCancel = function handleCancel() {
    if (!hasItems) {
      setInsurance({
        type: "Commercial Liability",
        coverageAmount: "1",
        coverageUnit: "Million Dollars",
        issuer: "",
        description: ""
      });
    }
    onCancel();
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.subForm
  }, /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "Insurance Type",
    items: [{
      label: "Commercial Liability",
      value: "Commercial Liability"
    }, {
      label: "Professional Liability",
      value: "Professional Liability"
    }, {
      label: "Workers Compensation",
      value: "Workers Compensation"
    }],
    value: insurance.type,
    setValue: function setValue(value) {
      return setInsurance(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          type: value
        });
      });
    },
    registry: registry,
    zIndex: openDropdown === 'Insurance Type' ? 3000 : 1,
    styles: styles,
    open: openDropdown === 'Insurance Type',
    setOpen: setOpenDropdown
  }), /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "Coverage Amount",
    items: getCoverageItems(),
    value: insurance.coverageAmount && insurance.coverageUnit ? "".concat(insurance.coverageAmount, " ").concat(insurance.coverageUnit) : "",
    setValue: handleCoverageChange,
    registry: registry,
    zIndex: openDropdown === 'Coverage Amount' ? 3000 : 1,
    styles: styles,
    open: openDropdown === 'Coverage Amount',
    setOpen: setOpenDropdown,
    zIndexInverse: openDropdown === 'Coverage Amount' ? 3000 : 1
  }), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Insurance Provider",
    value: insurance.issuer,
    setValue: function setValue(text) {
      return setInsurance(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          issuer: text
        });
      });
    },
    placeholder: "Enter insurance company name",
    required: true,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Description",
    value: insurance.description,
    setValue: function setValue(text) {
      return setInsurance(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          description: text
        });
      });
    },
    placeholder: "Enter description (optional)",
    multiline: true,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.buttonRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.cancelButton],
    onPress: handleCancel
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.buttonText
  }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.saveButton, !insurance.issuer && styles.buttonDisabled],
    onPress: function onPress() {
      onSave(insurance);
      setOpenDropdown(null);
    },
    disabled: !insurance.issuer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [styles.buttonText, styles.saveButtonText]
  }, "Save"))));
};
var CustomCoverageModal = function CustomCoverageModal(_ref11) {
  var visible = _ref11.visible,
    coverageAmount = _ref11.coverageAmount,
    coverageUnit = _ref11.coverageUnit,
    onAmountChange = _ref11.onAmountChange,
    onUnitChange = _ref11.onUnitChange,
    onSave = _ref11.onSave,
    onCancel = _ref11.onCancel,
    unitItems = _ref11.unitItems,
    styles = _ref11.styles,
    registry = _ref11.registry,
    setInsurancePrefill = _ref11.setInsurancePrefill;
  var DropDownPicker = registry.DropDownPicker;
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    open = _useState20[0],
    setOpen = _useState20[1];
  return /*#__PURE__*/_react["default"].createElement(_reactNative.Modal, {
    visible: visible,
    transparent: true,
    animationType: "fade",
    onRequestClose: onCancel
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalOverlay
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalContent
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalTitle
  }, "Custom Coverage Amount"), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalInputRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: styles.modalInput,
    value: coverageAmount,
    onChangeText: onAmountChange,
    placeholder: "Value",
    placeholderTextColor: "#999",
    keyboardType: "numeric",
    inputMode: "numeric",
    maxLength: 8
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalDropdown
  }, /*#__PURE__*/_react["default"].createElement(DropDownPicker, {
    open: open,
    value: coverageUnit,
    items: unitItems,
    setOpen: setOpen,
    setValue: onUnitChange,
    placeholder: "Units",
    style: styles.dropdownStyle,
    textStyle: styles.dropdownTextStyle,
    dropDownContainerStyle: styles.dropdownContainerStyle,
    listItemContainerStyle: styles.dropdownItemStyle,
    zIndex: open ? 3000 : 1,
    zIndexInverse: open ? 3000 : 1
  }))), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalButtons
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.modalCancelButton,
    onPress: onCancel
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalCancelButtonText
  }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.modalSaveButton, (!coverageAmount || coverageAmount.trim() === "") && styles.modalButtonDisabled],
    onPress: function onPress() {
      onSave();
      setInsurancePrefill(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          coverageAmount: coverageAmount,
          coverageUnit: coverageUnit
        });
      });
      setOpen(false);
    },
    disabled: !coverageAmount || coverageAmount.trim() === ""
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalSaveButtonText
  }, "Save"))))));
};

// Add this new component above ServiceInfo:
var CustomWarrantyModal = function CustomWarrantyModal(_ref12) {
  var visible = _ref12.visible,
    partsValue = _ref12.partsValue,
    setPartsValue = _ref12.setPartsValue,
    partsUnit = _ref12.partsUnit,
    setPartsUnit = _ref12.setPartsUnit,
    laborValue = _ref12.laborValue,
    setLaborValue = _ref12.setLaborValue,
    laborUnit = _ref12.laborUnit,
    setLaborUnit = _ref12.setLaborUnit,
    partsUnitItems = _ref12.partsUnitItems,
    laborUnitItems = _ref12.laborUnitItems,
    onSave = _ref12.onSave,
    onClose = _ref12.onClose,
    registry = _ref12.registry,
    styles = _ref12.styles;
  var _useState21 = (0, _react.useState)(null),
    _useState22 = _slicedToArray(_useState21, 2),
    openDropdown = _useState22[0],
    setOpenDropdown = _useState22[1];
  var DropDownPicker = registry.DropDownPicker;
  (0, _react.useEffect)(function () {
    if (!visible) {
      setOpenDropdown(null);
    }
  }, [visible]);
  (0, _react.useEffect)(function () {
    var singularPluralMap = {
      day: 'days',
      month: 'months',
      year: 'years'
    };
    var pluralSingularMap = {
      days: 'day',
      months: 'month',
      years: 'year'
    };
    if (partsValue === "1" && ["days", "months", "years"].includes(partsUnit)) {
      setPartsUnit(pluralSingularMap[partsUnit]);
    } else if (partsValue !== "1" && partsValue !== "" && ["day", "month", "year"].includes(partsUnit)) {
      setPartsUnit(singularPluralMap[partsUnit]);
    }
  }, [partsValue]);

  // Auto-switch singular/plural for labor
  (0, _react.useEffect)(function () {
    var singularPluralMap = {
      day: 'days',
      month: 'months',
      year: 'years'
    };
    var pluralSingularMap = {
      days: 'day',
      months: 'month',
      years: 'year'
    };
    if (laborValue === "1" && ["days", "months", "years"].includes(laborUnit)) {
      setLaborUnit(pluralSingularMap[laborUnit]);
    } else if (laborValue !== "1" && laborValue !== "" && ["day", "month", "year"].includes(laborUnit)) {
      setLaborUnit(singularPluralMap[laborUnit]);
    }
  }, [laborValue]);
  return /*#__PURE__*/_react["default"].createElement(_reactNative.Modal, {
    visible: visible,
    transparent: true,
    animationType: "fade",
    onRequestClose: onClose
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalOverlay
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalContent
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalTitle
  }, "Custom Warranty"), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalForm
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalInputLabel
  }, "Parts Warranty"), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalInputRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: styles.modalInput,
    value: partsValue,
    onChangeText: function onChangeText(text) {
      return setPartsValue(text.replace(/[^0-9]/g, ''));
    },
    placeholder: "Value",
    placeholderTextColor: "#999",
    keyboardType: "numeric",
    inputMode: "numeric",
    maxLength: 6
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.modalDropdown, {
      zIndex: openDropdown === 'parts' ? 1000 : 1
    }]
  }, /*#__PURE__*/_react["default"].createElement(DropDownPicker, {
    open: openDropdown === 'parts',
    value: partsUnit,
    items: partsUnitItems,
    setOpen: function setOpen(isOpen) {
      return setOpenDropdown(isOpen ? 'parts' : null);
    },
    setValue: setPartsUnit,
    placeholder: "Units",
    style: styles.dropdownStyle,
    textStyle: styles.dropdownTextStyle,
    dropDownContainerStyle: styles.dropdownContainerStyle,
    listItemContainerStyle: styles.dropdownItemStyle
  }))), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalInputLabel
  }, "Labor Warranty"), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalInputRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: styles.modalInput,
    value: laborValue,
    onChangeText: function onChangeText(text) {
      return setLaborValue(text.replace(/[^0-9]/g, ''));
    },
    placeholder: "Value",
    placeholderTextColor: "#999",
    keyboardType: "numeric",
    inputMode: "numeric",
    maxLength: 6
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.modalDropdown, {
      zIndex: openDropdown === 'labor' ? 1000 : 1
    }]
  }, /*#__PURE__*/_react["default"].createElement(DropDownPicker, {
    open: openDropdown === 'labor',
    value: laborUnit,
    items: laborUnitItems,
    setOpen: function setOpen(isOpen) {
      return setOpenDropdown(isOpen ? 'labor' : null);
    },
    setValue: setLaborUnit,
    placeholder: "Units",
    style: styles.dropdownStyle,
    textStyle: styles.dropdownTextStyle,
    dropDownContainerStyle: styles.dropdownContainerStyle,
    listItemContainerStyle: styles.dropdownItemStyle
  }))), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalButtons
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.modalCancelButton,
    onPress: onClose
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalCancelButtonText
  }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.modalSaveButton, !partsValue && !laborValue && styles.modalButtonDisabled],
    onPress: function onPress() {
      return onSave(partsValue, partsUnit, laborValue, laborUnit);
    },
    disabled: !partsValue && !laborValue
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalSaveButtonText
  }, "Save")))))));
};

// ---------------------- CERTIFICATION FORM COMPONENT ----------------------
var CertificationForm = function CertificationForm(_ref13) {
  var onSave = _ref13.onSave,
    onCancel = _ref13.onCancel,
    registry = _ref13.registry,
    styles = _ref13.styles,
    hasItems = _ref13.hasItems,
    initialValues = _ref13.initialValues,
    setCertificationPrefill = _ref13.setCertificationPrefill;
  var _useState23 = (0, _react.useState)({
      name: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.name) || "",
      description: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.description) || ""
    }),
    _useState24 = _slicedToArray(_useState23, 2),
    certification = _useState24[0],
    setCertification = _useState24[1];
  (0, _react.useEffect)(function () {
    setCertification({
      name: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.name) || "",
      description: (initialValues === null || initialValues === void 0 ? void 0 : initialValues.description) || ""
    });
  }, [initialValues]);
  var handleCancel = function handleCancel() {
    if (!hasItems) {
      setCertification({
        name: "",
        description: ""
      });
    }
    onCancel();
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.subForm
  }, /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Certification Name",
    value: certification.name,
    setValue: function setValue(text) {
      return setCertification(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          name: text
        });
      });
    },
    placeholder: "Enter certification name",
    required: true,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Description",
    value: certification.description,
    setValue: function setValue(text) {
      return setCertification(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          description: text
        });
      });
    },
    placeholder: "Enter description (optional)",
    multiline: true,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.buttonRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.cancelButton],
    onPress: function onPress() {
      setCertificationPrefill(null);
      handleCancel();
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.buttonText
  }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.saveButton, !certification.name.trim() && styles.buttonDisabled],
    onPress: function onPress() {
      return onSave(certification);
    },
    disabled: !certification.name.trim()
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: [styles.buttonText, styles.saveButtonText]
  }, "Save"))));
};

// ---------------------- CERTIFICATIONS SECTION COMPONENT ----------------------
var CertificationsSection = function CertificationsSection(_ref14) {
  var formData = _ref14.formData,
    setFormData = _ref14.setFormData,
    registry = _ref14.registry,
    styles = _ref14.styles;
  var _useState25 = (0, _react.useState)(formData.certifications.length === 0),
    _useState26 = _slicedToArray(_useState25, 2),
    showCertificationForm = _useState26[0],
    setShowCertificationForm = _useState26[1];
  var _useState27 = (0, _react.useState)(null),
    _useState28 = _slicedToArray(_useState27, 2),
    certificationPrefill = _useState28[0],
    setCertificationPrefill = _useState28[1];
  var Ionicons = registry.Ionicons;
  var addCertification = function addCertification(newCertification) {
    if (newCertification.name.trim()) {
      setFormData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          certifications: [].concat(_toConsumableArray(prev.certifications), [newCertification])
        });
      });
      setShowCertificationForm(false);
    }
  };
  var removeCertification = function removeCertification(index) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        certifications: prev.certifications.filter(function (_, i) {
          return i !== index;
        })
      });
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.sectionHeader
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.subSectionTitle
  }, "Certifications"), formData.certifications.length > 0 && !showCertificationForm && /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.addButton,
    onPress: function onPress() {
      setCertificationPrefill(null);
      setShowCertificationForm(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.addButtonText
  }, "+ Add"))), (showCertificationForm || formData.certifications.length === 0) && /*#__PURE__*/_react["default"].createElement(CertificationForm, {
    onSave: addCertification,
    onCancel: function onCancel() {
      return setShowCertificationForm(false);
    },
    registry: registry,
    styles: styles,
    hasItems: formData.certifications.length > 0,
    initialValues: certificationPrefill,
    setCertificationPrefill: setCertificationPrefill
  }), formData.certifications.map(function (certification, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      key: index,
      style: styles.listItem
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: styles.itemContent
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemTitle
    }, certification.name), certification.description && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemDetail
    }, certification.description)), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: {
        flexDirection: 'row'
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      style: [styles.editButton, {
        marginTop: -3
      }],
      onPress: function onPress() {
        setCertificationPrefill(certification);
        setShowCertificationForm(true);
        removeCertification(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
      name: "pencil",
      size: 15,
      color: "#007AFF"
    })), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      style: styles.removeButton,
      onPress: function onPress() {
        return removeCertification(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.removeButtonText
    }, "\u2715"))));
  }));
};

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ SECTION COMPONENTS ----------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ---------------------- PERSONAL DETAILS COMPONENT ----------------------
var PersonalDetails = function PersonalDetails(_ref15) {
  var formData = _ref15.formData,
    updateContact = _ref15.updateContact,
    GOOGLE_API = _ref15.GOOGLE_API,
    registry = _ref15.registry,
    styles = _ref15.styles;
  var isValidPhoneNumber = registry.isValidPhoneNumber;
  return /*#__PURE__*/_react["default"].createElement(FormSection, {
    title: "Personal Details",
    styles: styles
  }, /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Phone",
    value: formData.contact.phone,
    setValue: function setValue(text) {
      return updateContact("phone", text.replace(/[^\d+]/g, ""));
    },
    placeholder: "+1234567890",
    required: true,
    keyboardType: "phone-pad",
    styles: styles
  }), formData.contact.phone && !isValidPhoneNumber(formData.contact.phone) && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.phoneErrorText
  }, "Please enter a valid phone number with country code (e.g. +1 for US)"), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Email",
    value: formData.contact.email,
    setValue: function setValue(text) {
      return updateContact("email", text);
    },
    placeholder: "email@example.com",
    required: true,
    keyboardType: "email-address",
    autoCapitalize: "none",
    styles: styles
  }), formData.contact.email && !isValidEmail(formData.contact.email) && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.emailErrorText
  }, "Please enter a valid email address"), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Website",
    value: formData.contact.website,
    setValue: function setValue(text) {
      return updateContact("website", text);
    },
    placeholder: "https://example.com",
    keyboardType: "url",
    autoCapitalize: "none",
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(AddressSearch, {
    value: formData.contact.address,
    setValue: function setValue(text) {
      return updateContact("address", text);
    },
    googleApiKey: GOOGLE_API,
    registry: registry,
    styles: styles
  }));
};

// ---------------------- SERVICE INFORMATION COMPONENT ----------------------
var ServiceInfo = function ServiceInfo(_ref16) {
  var formData = _ref16.formData,
    setFormData = _ref16.setFormData,
    registry = _ref16.registry,
    styles = _ref16.styles;
  var _useState29 = (0, _react.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    showCustomWarrantyModal = _useState30[0],
    setShowCustomWarrantyModal = _useState30[1];
  var _useState31 = (0, _react.useState)(''),
    _useState32 = _slicedToArray(_useState31, 2),
    customWarrantyType = _useState32[0],
    setCustomWarrantyType = _useState32[1];
  var _useState33 = (0, _react.useState)(null),
    _useState34 = _slicedToArray(_useState33, 2),
    openDropdown = _useState34[0],
    setOpenDropdown = _useState34[1];

  // Prefill modal with current values
  var _useState35 = (0, _react.useState)(formData.warranty.partsAmount || ''),
    _useState36 = _slicedToArray(_useState35, 2),
    customPartsAmount = _useState36[0],
    setCustomPartsAmount = _useState36[1];
  var _useState37 = (0, _react.useState)(formData.warranty.partsUnit || 'months'),
    _useState38 = _slicedToArray(_useState37, 2),
    customPartsUnit = _useState38[0],
    setCustomPartsUnit = _useState38[1];
  var _useState39 = (0, _react.useState)(formData.warranty.laborAmount || ''),
    _useState40 = _slicedToArray(_useState39, 2),
    customLaborAmount = _useState40[0],
    setCustomLaborAmount = _useState40[1];
  var _useState41 = (0, _react.useState)(formData.warranty.laborUnit || 'months'),
    _useState42 = _slicedToArray(_useState41, 2),
    customLaborUnit = _useState42[0],
    setCustomLaborUnit = _useState42[1];

  // Helper to parse preset value
  var parsePreset = function parsePreset(val) {
    if (val === 'none') return {
      amount: '0',
      unit: 'months'
    };
    var _val$split = val.split(' '),
      _val$split2 = _slicedToArray(_val$split, 2),
      amount = _val$split2[0],
      unit = _val$split2[1];
    return {
      amount: amount,
      unit: unit
    };
  };

  // Dropdown handlers
  var handlePartsDropdown = function handlePartsDropdown(val) {
    if (val === 'custom') {
      setCustomPartsAmount(formData.warranty.partsAmount);
      setCustomPartsUnit(formData.warranty.partsUnit || 'months');
      setCustomLaborAmount(formData.warranty.laborAmount);
      setCustomLaborUnit(formData.warranty.laborUnit || 'months');
      setShowCustomWarrantyModal(true);
    } else {
      var parsed = parsePreset(val);
      setFormData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          warranty: _objectSpread(_objectSpread({}, prev.warranty), {}, {
            partsAmount: parsed.amount,
            partsUnit: parsed.unit
          })
        });
      });
    }
  };
  var handleLaborDropdown = function handleLaborDropdown(val) {
    if (val === 'custom') {
      setCustomPartsAmount(formData.warranty.partsAmount);
      setCustomPartsUnit(formData.warranty.partsUnit || 'months');
      setCustomLaborAmount(formData.warranty.laborAmount);
      setCustomLaborUnit(formData.warranty.laborUnit || 'months');
      setShowCustomWarrantyModal(true);
    } else {
      var parsed = parsePreset(val);
      setFormData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          warranty: _objectSpread(_objectSpread({}, prev.warranty), {}, {
            laborAmount: parsed.amount,
            laborUnit: parsed.unit
          })
        });
      });
    }
  };

  // Save handler for custom modal
  var handleCustomWarrantySave = function handleCustomWarrantySave(partsValue, partsUnit, laborValue, laborUnit) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        warranty: _objectSpread(_objectSpread({}, prev.warranty), {}, {
          partsAmount: partsValue,
          partsUnit: partsUnit,
          laborAmount: laborValue,
          laborUnit: laborUnit
        })
      });
    });
    setShowCustomWarrantyModal(false);
  };

  // Dropdown display value
  var getDropdownDisplay = function getDropdownDisplay(amount, unit) {
    if (!amount || amount === '0' || unit === 'none') return 'months';
    return "".concat(amount, " ").concat(unit);
  };

  // In ServiceInfo, add helper to get warranty items with custom value:
  var getWarrantyItems = function getWarrantyItems(amount, unit) {
    var customValue = amount && unit && amount !== '0' && unit !== 'none' ? "".concat(amount, " ").concat(unit).trim() : null;
    var baseOptions = [{
      label: 'None',
      value: 'none'
    }, {
      label: '1 month',
      value: '1 month'
    }, {
      label: '3 months',
      value: '3 months'
    }, {
      label: '6 months',
      value: '6 months'
    }, {
      label: '1 year',
      value: '1 year'
    }, {
      label: '2 years',
      value: '2 years'
    }, {
      label: 'Custom...',
      value: 'custom'
    }];
    if (customValue && !baseOptions.some(function (opt) {
      return opt.value === customValue;
    }) && !['1 month', '3 months', '6 months', '1 year', '2 years', 'none', 'custom'].includes(customValue)) {
      // Insert custom value before 'Custom...'
      var customOption = {
        label: customValue,
        value: customValue
      };
      var idx = baseOptions.findIndex(function (opt) {
        return opt.value === 'custom';
      });
      return [].concat(_toConsumableArray(baseOptions.slice(0, idx)), [customOption], _toConsumableArray(baseOptions.slice(idx)));
    }
    return baseOptions;
  };

  // In ServiceInfo, add getUnitItems helper above return:
  var getUnitItems = function getUnitItems(value) {
    if (value === "1") {
      return [{
        label: 'Day',
        value: 'day'
      }, {
        label: 'Month',
        value: 'month'
      }, {
        label: 'Year',
        value: 'year'
      }];
    }
    return [{
      label: 'Days',
      value: 'days'
    }, {
      label: 'Months',
      value: 'months'
    }, {
      label: 'Years',
      value: 'years'
    }];
  };

  // In ServiceInfo, before return, add state for last-used unit options:
  var _useState43 = (0, _react.useState)(getUnitItems(customPartsAmount)),
    _useState44 = _slicedToArray(_useState43, 2),
    partsUnitItems = _useState44[0],
    setPartsUnitItems = _useState44[1];
  var _useState45 = (0, _react.useState)(getUnitItems(customLaborAmount)),
    _useState46 = _slicedToArray(_useState45, 2),
    laborUnitItems = _useState46[0],
    setLaborUnitItems = _useState46[1];
  (0, _react.useEffect)(function () {
    if (customPartsAmount !== "") {
      setPartsUnitItems(getUnitItems(customPartsAmount));
    }
  }, [customPartsAmount]);
  (0, _react.useEffect)(function () {
    if (customLaborAmount !== "") {
      setLaborUnitItems(getUnitItems(customLaborAmount));
    }
  }, [customLaborAmount]);
  return /*#__PURE__*/_react["default"].createElement(FormSection, {
    title: "Service Information",
    styles: styles
  }, /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Service Title",
    value: formData.title,
    setValue: function setValue(text) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        title: text
      }));
    },
    placeholder: "Professional Plumbing Services",
    required: true,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Service Description",
    value: formData.description,
    setValue: function setValue(text) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        description: text
      }));
    },
    placeholder: "Describe your services and expertise",
    multiline: true,
    required: true,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "Business Entity Type",
    items: [{
      label: 'Individual',
      value: 'individual'
    }, {
      label: 'Business',
      value: 'business'
    }, {
      label: 'Non-Profit',
      value: 'non-profit'
    }],
    value: formData.entity,
    setValue: function setValue(value) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        entity: value
      }));
    },
    placeholder: "Select entity type",
    required: true,
    registry: registry,
    zIndex: openDropdown === 'Business Entity Type' ? 3000 : 1000,
    styles: styles,
    open: openDropdown === 'Business Entity Type',
    setOpen: setOpenDropdown
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.label
  }, "Business Commencement Date", /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.requiredStar
  }, " *")), /*#__PURE__*/_react["default"].createElement(DatePicker, {
    date: formData.businessCommencementDate,
    setDate: function setDate(date) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        businessCommencementDate: date
      }));
    },
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(WarrantySelector, {
    partsAmount: formData.warranty.partsAmount,
    partsUnit: formData.warranty.partsUnit,
    setParts: handlePartsDropdown,
    laborAmount: formData.warranty.laborAmount,
    laborUnit: formData.warranty.laborUnit,
    setLabor: handleLaborDropdown,
    registry: registry,
    styles: styles,
    openDropdown: openDropdown,
    setOpenDropdown: setOpenDropdown,
    onCustomWarranty: function onCustomWarranty() {
      return setShowCustomWarrantyModal(true);
    },
    getWarrantyItems: getWarrantyItems
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.optionsContainer
  }, /*#__PURE__*/_react["default"].createElement(SwitchInput, {
    label: "Emergency Services Available",
    value: formData.emergencyServicesProvided,
    setValue: function setValue(value) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        emergencyServicesProvided: value
      }));
    },
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(SwitchInput, {
    label: "Permitting Included",
    value: formData.permittingIncluded === "yes",
    setValue: function setValue(value) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        permittingIncluded: value ? "yes" : "no"
      }));
    },
    styles: styles
  })), /*#__PURE__*/_react["default"].createElement(CustomWarrantyModal, {
    visible: showCustomWarrantyModal,
    partsValue: customPartsAmount,
    setPartsValue: setCustomPartsAmount,
    partsUnit: customPartsUnit,
    setPartsUnit: setCustomPartsUnit,
    laborValue: customLaborAmount,
    setLaborValue: setCustomLaborAmount,
    laborUnit: customLaborUnit,
    setLaborUnit: setCustomLaborUnit,
    partsUnitItems: partsUnitItems,
    laborUnitItems: laborUnitItems,
    onSave: handleCustomWarrantySave,
    onClose: function onClose() {
      setShowCustomWarrantyModal(false);
    },
    registry: registry,
    styles: styles
  }));
};

// ---------------------- COVERAGE & INSURANCES COMPONENT ----------------------
var CoverageInsurances = function CoverageInsurances(_ref17) {
  var formData = _ref17.formData,
    setFormData = _ref17.setFormData,
    registry = _ref17.registry,
    styles = _ref17.styles;
  var _useState47 = (0, _react.useState)(formData.licenses.length === 0),
    _useState48 = _slicedToArray(_useState47, 2),
    showLicenseForm = _useState48[0],
    setShowLicenseForm = _useState48[1];
  var _useState49 = (0, _react.useState)(formData.insurances.length === 0),
    _useState50 = _slicedToArray(_useState49, 2),
    showInsuranceForm = _useState50[0],
    setShowInsuranceForm = _useState50[1];
  var _useState51 = (0, _react.useState)(null),
    _useState52 = _slicedToArray(_useState51, 2),
    openDropdown = _useState52[0],
    setOpenDropdown = _useState52[1];
  var _useState53 = (0, _react.useState)(null),
    _useState54 = _slicedToArray(_useState53, 2),
    licensePrefill = _useState54[0],
    setLicensePrefill = _useState54[1];
  var _useState55 = (0, _react.useState)(null),
    _useState56 = _slicedToArray(_useState55, 2),
    insurancePrefill = _useState56[0],
    setInsurancePrefill = _useState56[1];
  var Ionicons = registry.Ionicons;

  // License Management
  var addLicense = function addLicense(newLicense) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        licenses: [].concat(_toConsumableArray(prev.licenses), [newLicense])
      });
    });
    setShowLicenseForm(false);
    setLicensePrefill(null);
  };
  var removeLicense = function removeLicense(index) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        licenses: prev.licenses.filter(function (_, i) {
          return i !== index;
        })
      });
    });
  };

  // Insurance Management
  var addInsurance = function addInsurance(newInsurance) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        insurances: [].concat(_toConsumableArray(prev.insurances), [newInsurance])
      });
    });
    setShowInsuranceForm(false);
    setInsurancePrefill(null);
  };
  var removeInsurance = function removeInsurance(index) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        insurances: prev.insurances.filter(function (_, i) {
          return i !== index;
        })
      });
    });
  };
  // In CoverageInsurances, add state for custom coverage modal
  var _useState57 = (0, _react.useState)(false),
    _useState58 = _slicedToArray(_useState57, 2),
    showCustomCoverageModal = _useState58[0],
    setShowCustomCoverageModal = _useState58[1];
  var _useState59 = (0, _react.useState)(""),
    _useState60 = _slicedToArray(_useState59, 2),
    customCoverageAmount = _useState60[0],
    setCustomCoverageAmount = _useState60[1];
  var _useState61 = (0, _react.useState)('Million Dollars'),
    _useState62 = _slicedToArray(_useState61, 2),
    customCoverageUnit = _useState62[0],
    setCustomCoverageUnit = _useState62[1];
  var unitItems = [{
    label: 'Dollars',
    value: 'Dollars'
  }, {
    label: 'Thousand',
    value: 'Thousand Dollars'
  }, {
    label: 'Million',
    value: 'Million Dollars'
  }];
  return /*#__PURE__*/_react["default"].createElement(FormSection, {
    title: "Credentials & Coverage",
    styles: styles
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.sectionHeader
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.subSectionTitle
  }, "Licenses"), formData.licenses.length > 0 && !showLicenseForm && /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.addButton,
    onPress: function onPress() {
      setLicensePrefill(null);
      setShowLicenseForm(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.addButtonText
  }, "+ Add"))), (showLicenseForm || formData.licenses.length === 0) && /*#__PURE__*/_react["default"].createElement(LicenseForm, _extends({
    onSave: addLicense,
    onCancel: function onCancel() {
      setShowLicenseForm(false);
      setLicensePrefill(null);
    },
    registry: registry,
    styles: styles,
    openDropdown: openDropdown,
    setOpenDropdown: setOpenDropdown,
    hasItems: formData.licenses.length > 0
  }, licensePrefill ? {
    initialValues: licensePrefill
  } : {})), formData.licenses.map(function (license, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      key: index,
      style: styles.listItem
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: styles.itemContent
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemTitle
    }, license.title), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemDetail
    }, "Issuer: ", license.issuer), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemDetail
    }, "Type: ", license.type), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: {
        height: 10
      }
    }), license.description && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemDetail
    }, license.description)), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: {
        flexDirection: 'row'
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      style: [styles.editButton, {
        marginTop: -3
      }],
      onPress: function onPress() {
        setLicensePrefill(license);
        setShowLicenseForm(true);
        removeLicense(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
      name: "pencil",
      size: 15,
      color: "#007AFF"
    })), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      style: styles.removeButton,
      onPress: function onPress() {
        return removeLicense(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.removeButtonText
    }, "\u2715"))));
  }), /*#__PURE__*/_react["default"].createElement(CertificationsSection, {
    formData: formData,
    setFormData: setFormData,
    registry: registry,
    styles: styles,
    hasItems: formData.licenses.length > 0
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.sectionHeader
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.subSectionTitle
  }, "Insurances"), formData.insurances.length > 0 && !showInsuranceForm && /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.addButton,
    onPress: function onPress() {
      setInsurancePrefill(null);
      setShowInsuranceForm(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.addButtonText
  }, "+ Add"))), (showInsuranceForm || formData.insurances.length === 0) && /*#__PURE__*/_react["default"].createElement(InsuranceForm, _extends({
    onSave: addInsurance,
    onCancel: function onCancel() {
      setShowInsuranceForm(false);
      setInsurancePrefill(null);
    },
    onCustomCoverage: function onCustomCoverage() {
      return setShowCustomCoverageModal(true);
    },
    registry: registry,
    styles: styles,
    openDropdown: openDropdown,
    setOpenDropdown: setOpenDropdown,
    hasItems: formData.insurances.length > 0
  }, insurancePrefill ? {
    initialValues: insurancePrefill
  } : {})), formData.insurances.map(function (insurance, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      key: index,
      style: styles.listItem
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: styles.itemContent
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemTitle
    }, insurance.type), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemDetail
    }, "Coverage: ", insurance.coverageAmount, " ", insurance.coverageUnit), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemDetail
    }, "Issuer: ", insurance.issuer), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: {
        height: 10
      }
    }), insurance.description && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemDetail
    }, insurance.description)), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: {
        flexDirection: 'row'
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      style: styles.editButton,
      onPress: function onPress() {
        setInsurancePrefill(insurance);
        setShowInsuranceForm(true);
        removeInsurance(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
      name: "pencil",
      size: 15,
      color: "#007AFF",
      style: {
        marginTop: -3
      }
    })), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      style: styles.removeButton,
      onPress: function onPress() {
        return removeInsurance(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.removeButtonText
    }, "\u2715"))));
  }), /*#__PURE__*/_react["default"].createElement(CustomCoverageModal, {
    visible: showCustomCoverageModal,
    coverageAmount: customCoverageAmount,
    coverageUnit: customCoverageUnit,
    onAmountChange: setCustomCoverageAmount,
    onUnitChange: setCustomCoverageUnit,
    setInsurancePrefill: setInsurancePrefill,
    unitItems: unitItems,
    onSave: function onSave() {
      if (insurancePrefill) {
        setInsurancePrefill(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            coverageAmount: customCoverageAmount,
            coverageUnit: customCoverageUnit
          });
        });
      }
      setShowCustomCoverageModal(false);
    },
    onCancel: function onCancel() {
      return setShowCustomCoverageModal(false);
    },
    styles: styles,
    registry: registry
  }));
};

// ---------------------- PHOTO ALBUM COMPONENT ----------------------
var PhotoAlbum = function PhotoAlbum(_ref18) {
  var photos = _ref18.photos,
    setFormData = _ref18.setFormData,
    registry = _ref18.registry,
    styles = _ref18.styles;
  var ImagePicker = registry.ImagePicker,
    Ionicons = registry.Ionicons;
  var MAX_PHOTOS = 21;

  // Ensure existing photos have IDs
  (0, _react.useEffect)(function () {
    var needsMigration = photos.some(function (photo) {
      return !photo.id;
    });
    if (needsMigration) {
      setFormData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          photos: prev.photos.map(function (photo) {
            return _objectSpread(_objectSpread({}, photo), {}, {
              id: photo.id || "migrated-photo-".concat(Math.random().toString(36).substr(2, 9))
            });
          })
        });
      });
    }
  }, []);
  var handleAddPhotos = /*#__PURE__*/function () {
    var _ref19 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _result$assets, _yield$ImagePicker$re, status, result, existingFileNames, newPhotos;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            if (!(photos.length >= MAX_PHOTOS)) {
              _context2.next = 4;
              break;
            }
            _reactNative.Alert.alert("Limit Reached", "You can only add up to ".concat(MAX_PHOTOS, " photos."));
            return _context2.abrupt("return");
          case 4:
            _context2.next = 6;
            return ImagePicker.requestMediaLibraryPermissionsAsync();
          case 6:
            _yield$ImagePicker$re = _context2.sent;
            status = _yield$ImagePicker$re.status;
            if (!(status !== 'granted')) {
              _context2.next = 11;
              break;
            }
            _reactNative.Alert.alert("Permission Required", "Please enable photo access in settings", [{
              text: "OK"
            }]);
            return _context2.abrupt("return");
          case 11:
            _context2.next = 13;
            return ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsEditing: false,
              quality: 0.8,
              allowsMultipleSelection: _reactNative.Platform.OS !== 'web',
              selectionLimit: MAX_PHOTOS - photos.length
            });
          case 13:
            result = _context2.sent;
            if (!result.canceled && (_result$assets = result.assets) !== null && _result$assets !== void 0 && _result$assets.length) {
              existingFileNames = new Set(photos.map(function (p) {
                return p.fileName;
              }));
              newPhotos = result.assets.reduce(function (acc, asset) {
                if (existingFileNames.has(asset.fileName)) {
                  return acc;
                }
                acc.push({
                  id: "photo-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                  uri: asset.uri,
                  width: asset.width,
                  height: asset.height,
                  type: asset.type || 'image',
                  fileName: asset.fileName || "photo-".concat(Date.now(), ".jpg")
                });
                return acc;
              }, []);
              setFormData(function (prev) {
                return _objectSpread(_objectSpread({}, prev), {}, {
                  photos: [].concat(_toConsumableArray(prev.photos), _toConsumableArray(newPhotos))
                });
              });
            }
            _context2.next = 21;
            break;
          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](0);
            console.error('Photo selection error:', _context2.t0);
            _reactNative.Alert.alert("Error", "Failed to select photos");
          case 21:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 17]]);
    }));
    return function handleAddPhotos() {
      return _ref19.apply(this, arguments);
    };
  }();
  var removePhoto = function removePhoto(photoId) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        photos: prev.photos.filter(function (photo) {
          return photo.id !== photoId;
        })
      });
    });
  };
  return /*#__PURE__*/_react["default"].createElement(FormSection, {
    title: "Photo Album",
    styles: styles
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.photoAlbumContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.photoHeaderRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.photoAlbumTitle
  }, "Photos"), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.photoCount
  }, photos.length, " photos")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.outlinedButton, styles.fullWidth, photos.length >= MAX_PHOTOS && styles.addPhotoButtonDisabled],
    onPress: handleAddPhotos,
    disabled: photos.length >= MAX_PHOTOS
  }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
    name: "image-outline",
    size: 20,
    color: "#007AFF",
    style: {
      marginRight: 8
    }
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.outlinedButtonText
  }, "Add Photos")), photos.length > 0 ? /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.photoGrid
  }, photos.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      key: item.id,
      style: styles.photoContainer
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Image, {
      source: {
        uri: item.uri
      },
      style: styles.photo
    }), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      style: styles.removePhotoButton,
      onPress: function onPress() {
        return removePhoto(item.id);
      }
    }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
      name: "close-circle",
      size: 22,
      color: "#FF3B30"
    })));
  })) : /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.emptyPhotoState
  }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
    name: "images-outline",
    size: 40,
    color: "#CCCCCC"
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.emptyPhotoText
  }, "No photos added yet"), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.emptyPhotoSubtext
  }, "Tap \"Add Photos\" to select from your gallery"))));
};

// ---------------------- HELPER FUNCTIONS ----------------------
var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
var isValidEmail = function isValidEmail(email) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate data
var validateData = function validateData(formData, registry) {
  var isValidPhoneNumber = registry.isValidPhoneNumber;
  if (!formData.title.trim()) {
    _reactNative.Alert.alert('Error', 'Please enter a title for your offering');
    return;
  }
  if (!formData.description.trim()) {
    _reactNative.Alert.alert('Error', 'Please enter a description for your offering');
    return;
  }
  if (formData.entity == "unselected") {
    _reactNative.Alert.alert('Error', 'Please select an entity type for your offering');
    return;
  }
  if (!formData.businessCommencementDate) {
    _reactNative.Alert.alert('Error', 'Please select a business commencement date for your offering');
    return;
  }
  if (formData.warranty.partsAmount === null) {
    _reactNative.Alert.alert('Error', 'Please select a parts warranty period for your offering');
    return;
  }
  if (formData.warranty.laborAmount === null) {
    _reactNative.Alert.alert('Error', 'Please select a labor warranty period for your offering');
    return;
  }
  if (formData.contact.phone && !isValidPhoneNumber(formData.contact.phone)) {
    _reactNative.Alert.alert('Error', 'Please enter a valid phone number with country code (e.g. +1 for US)');
    return;
  }
  if (formData.contact.email && !isValidEmail(formData.contact.email)) {
    _reactNative.Alert.alert('Error', 'Please enter a valid email address');
    return;
  }
  if (!formData.contact.address.trim()) {
    _reactNative.Alert.alert('Error', 'Please enter an address for your offering');
    return;
  }
};

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ MAIN FORM COMPONENT ---------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

var PlumbingForm = function PlumbingForm() {
  var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref20$formData = _ref20.formData,
    initialFormData = _ref20$formData === void 0 ? {} : _ref20$formData,
    _ref20$setFormData = _ref20.setFormData,
    setParentFormData = _ref20$setFormData === void 0 ? function () {} : _ref20$setFormData,
    _ref20$styles = _ref20.styles,
    parentStyles = _ref20$styles === void 0 ? {} : _ref20$styles,
    _ref20$offering = _ref20.offering,
    offering = _ref20$offering === void 0 ? null : _ref20$offering,
    _ref20$selectedOption = _ref20.selectedOption,
    selectedOption = _ref20$selectedOption === void 0 ? '' : _ref20$selectedOption,
    _ref20$breadcrumb = _ref20.breadcrumb,
    breadcrumb = _ref20$breadcrumb === void 0 ? '' : _ref20$breadcrumb,
    _ref20$meta = _ref20.meta,
    meta = _ref20$meta === void 0 ? {} : _ref20$meta,
    _ref20$navigation = _ref20.navigation,
    navigation = _ref20$navigation === void 0 ? null : _ref20$navigation,
    _ref20$GOOGLE_API = _ref20.GOOGLE_API,
    GOOGLE_API = _ref20$GOOGLE_API === void 0 ? '' : _ref20$GOOGLE_API,
    registry = _ref20.registry;
  var styles = _objectSpread(_objectSpread({}, localStyles), parentStyles);
  var _useState63 = (0, _react.useState)(function () {
      return _objectSpread(_objectSpread({
        title: '',
        description: '',
        entity: 'unselected',
        contact: {
          phone: '',
          email: '',
          website: '',
          address: ''
        },
        licenses: [],
        certifications: [],
        insurances: [],
        photos: [],
        businessCommencementDate: null,
        warranty: {
          partsAmount: '',
          partsUnit: '',
          laborAmount: '',
          laborUnit: ''
        },
        emergencyServicesProvided: false,
        permittingIncluded: 'no'
      }, initialFormData), offering ? _objectSpread({
        title: offering.title || '',
        description: offering.description || ''
      }, offering.extraData || {}) : {});
    }),
    _useState64 = _slicedToArray(_useState63, 2),
    formData = _useState64[0],
    setFormData = _useState64[1];
  (0, _react.useEffect)(function () {
    setParentFormData(formData);
  }, [formData, setParentFormData]);
  var updateContact = function updateContact(field, value) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        contact: _objectSpread(_objectSpread({}, prev.contact), {}, _defineProperty({}, field, value))
      });
    });
  };

  // Form submission handler
  var handleSubmit = function handleSubmit() {
    var formattedData = {
      offering: {
        topic: breadcrumb,
        title: formData.title,
        description: formData.description,
        entity: [formData.entity],
        contact: formData.contact,
        licenses: formData.licenses,
        insurances: formData.insurances,
        photos: formData.photos,
        businessCommencementDate: formData.businessCommencementDate,
        warranty: "parts: ".concat(formData.warranty.partsAmount, ", labor: ").concat(formData.warranty.laborAmount),
        emergencyServicesProvided: formData.emergencyServicesProvided,
        permittingIncluded: formData.permittingIncluded
      }
    };
    console.log('Submitting offering:', formattedData);
    navigation === null || navigation === void 0 || navigation.navigate('CreateHave', {
      selectedOption: selectedOption,
      breadcrumb: breadcrumb,
      address: formData.contact.address,
      offeringTitle: formData.title,
      meta: meta
    });
  };
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.container
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formContentContainer
  }, /*#__PURE__*/_react["default"].createElement(ServiceInfo, {
    formData: formData,
    setFormData: setFormData,
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(PersonalDetails, {
    formData: formData,
    updateContact: updateContact,
    isValidEmail: isValidEmail,
    GOOGLE_API: GOOGLE_API,
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(CoverageInsurances, {
    formData: formData,
    setFormData: setFormData,
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(PhotoAlbum, {
    photos: formData.photos,
    setPhotos: function setPhotos(newPhotos) {
      return setFormData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          photos: newPhotos
        });
      });
    },
    registry: registry,
    setFormData: setFormData,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.submitButton,
    onPress: handleSubmit
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.submitButtonText
  }, "Create Offering"))));
};

// Local styles for the PlumbingForm component - force force
var localStyles = _reactNative.StyleSheet.create({
  container: {
    flex: 1
  },
  dropdownStyle: {
    backgroundColor: '#fafbfc',
    borderColor: '#ddd',
    borderRadius: 5,
    height: 44
  },
  dropdownTextStyle: {
    fontSize: 16,
    color: '#333'
  },
  dropdownContainerStyle: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 4,
    zIndex: 2000
  },
  dropdownItemStyle: {
    height: 44,
    justifyContent: 'center'
  },
  // Main section headers
  mainSectionHeader: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    alignItems: 'center'
  },
  mainSectionHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  modalInputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10
  },
  // Form content container for FlatList
  formContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
    width: '100%'
  },
  // Subsection headers
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 8,
    marginTop: 24,
    marginBottom: 16
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444'
  },
  // Form group styling
  formGroup: {
    marginBottom: 20
  },
  // Improved add buttons
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  addButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14
  },
  addSmallButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // Item styling
  listItem: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  itemContent: {
    flex: 1
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
    color: '#333'
  },
  itemDetail: {
    fontSize: 14,
    marginBottom: 2,
    color: '#666'
  },
  removeItemButton: {
    padding: 4,
    alignSelf: 'flex-start'
  },
  removeItemButtonText: {
    color: '#FF3B30',
    fontSize: 18,
    fontWeight: 'bold'
  },
  // Subform styling
  subForm: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  // Button styling
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 100
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
    // light gray
    marginRight: 10
  },
  saveButton: {
    backgroundColor: '#2979FF' // bright blue
  },
  buttonText: {
    color: '#fff',
    // white for both
    fontWeight: '600',
    fontSize: 15
  },
  // Tag item styling
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20
  },
  tagItem: {
    backgroundColor: '#e1f5fe',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#81d4fa',
    flexDirection: 'row',
    alignItems: 'center'
  },
  tagText: {
    color: '#0277bd',
    fontSize: 14,
    marginRight: 6
  },
  removeTagButton: {
    backgroundColor: '#81d4fa',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center'
  },
  removeTagButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    lineHeight: 18
  },
  // Clear button styling
  clearButton: {
    padding: 8,
    marginLeft: 4
  },
  clearButtonText: {
    color: '#007AFF',
    fontSize: 16
  },
  // Add button disabled styling
  addButtonDisabled: {
    backgroundColor: '#e0e0e0'
  },
  // Outlined button styling (for Add Photos)
  outlinedButton: {
    borderWidth: 2,
    borderColor: '#007AFF',
    backgroundColor: 'white',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  outlinedButtonText: {
    color: '#007AFF',
    fontWeight: '600',
    fontSize: 16
  },
  // Row container styling
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  // Warranty styling
  warrantyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  warrantyInput: {
    width: '48%' // Give a little space between the two dropdowns
  },
  warrantyLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
    marginBottom: 6
  },
  // Custom Warranty Modal styling
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%'
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  modalForm: {
    marginBottom: 20
  },
  modalInputRow: {
    flexDirection: 'row',
    marginBottom: 20
  },
  modalInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: '#fafbfc',
    marginRight: 10
  },
  modalDropdown: {
    flex: 1,
    height: 40,
    marginLeft: 0
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  modalCancelButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    minWidth: 100,
    alignItems: 'center'
  },
  modalCancelButtonText: {
    color: '#333',
    fontWeight: '600'
  },
  modalSaveButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    minWidth: 100,
    alignItems: 'center'
  },
  modalSaveButtonText: {
    color: 'white',
    fontWeight: '600'
  },
  modalButtonDisabled: {
    backgroundColor: '#e0e0e0'
  },
  buttonDisabled: {
    backgroundColor: '#e0e0e0'
  },
  emailErrorText: {
    color: '#d32f2f',
    fontSize: 13,
    marginTop: -14,
    marginBottom: 10,
    marginLeft: 2,
    fontWeight: '400'
  },
  requiredStar: {
    color: 'red',
    fontWeight: 'bold'
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    flex: 1
  },
  switchControl: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  switchValueText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 8,
    fontWeight: '500'
  },
  submitButton: {
    // backgroundColor: '#007AFF',
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  // Updated styles for address search
  searchContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  addressInput: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    flex: 1,
    height: 56,
    paddingRight: 40 // Space for icon
  },
  selectedAddressContainer: {
    backgroundColor: '#e8eaf6',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 56
  },
  selectedAddressText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    flexWrap: 'wrap',
    paddingRight: 8
  },
  removeAddressButton: {
    padding: 4
  },
  removeAddressButtonText: {
    color: '#FF3B30',
    fontSize: 20,
    fontWeight: 'bold'
  },
  iconContainer: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  },
  inputIcon: {
    padding: 8,
    backgroundColor: 'transparent'
  },
  suggestionsList: {
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    zIndex: 1000,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2
    },
    maxHeight: 200,
    marginTop: 5,
    borderRadius: 8
  },
  suggestionItem: {
    padding: 13,
    paddingLeft: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  suggestionText: {
    fontSize: 14,
    color: '#333'
  },
  // Updated styles for date picker
  datePickerButton: {
    backgroundColor: '#f5f5f5',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    position: 'relative'
  },
  datePickerButtonText: {
    fontSize: 16,
    color: '#333'
  },
  calendarIcon: {
    backgroundColor: '#ede9fe',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // Modal styles for iOS date picker
  datePickerContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20
  },
  datePickerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  datePickerTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  datePickerCancel: {
    color: '#999',
    fontSize: 16
  },
  datePickerDone: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600'
  },
  datePickerIOS: {
    height: 240
  },
  // Modal styles for iOS date picker
  datePickerModalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end'
  },
  datePickerModalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 16
  },
  datePickerCancelText: {
    color: '#999',
    fontSize: 16
  },
  datePickerConfirmText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600'
  },
  photoAlbumContainer: {
    marginVertical: 15,
    paddingHorizontal: 0
  },
  photoHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingHorizontal: 4
  },
  photoAlbumTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333'
  },
  photoCount: {
    fontSize: 14,
    color: '#777'
  },
  fullWidthButton: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 18,
    borderWidth: 1.5,
    borderColor: '#007AFF',
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 0
  },
  emptyPhotoState: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fafbfc',
    borderRadius: 10,
    padding: 30,
    marginTop: 5,
    marginHorizontal: 1
  },
  emptyPhotoText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#888',
    marginTop: 12,
    marginBottom: 2
  },
  emptyPhotoSubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
    textAlign: 'center'
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    marginHorizontal: -2
  },
  photoContainer: {
    width: '33.333%',
    aspectRatio: 1,
    padding: 2,
    position: 'relative'
  },
  photo: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#f0f0f0'
  },
  removePhotoButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    zIndex: 1
  },
  phoneErrorText: {
    color: '#d32f2f',
    fontSize: 13,
    marginTop: -14,
    marginBottom: 10,
    marginLeft: 2,
    fontWeight: '400'
  },
  editButton: {
    marginRight: 8,
    padding: 4,
    alignSelf: 'flex-start'
  }
});
var _default = exports["default"] = PlumbingForm;
