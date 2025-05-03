"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
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
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } //  <-- MUST DO ON UPDATE!! --> 
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
    style: {
      marginBottom: 28
    }
  }, title && /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.mainSectionHeader
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.mainSectionHeaderText
  }, title)), /*#__PURE__*/_react["default"].createElement(_reactNative.View, null, children));
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
    styles = _ref2.styles;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formGroup
  }, label && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.label
  }, label, required && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.requiredStar
  }, " *")), /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: [styles.input, multiline && styles.multilineInput],
    value: value,
    onChangeText: setValue,
    placeholder: placeholder,
    placeholderTextColor: "#999",
    keyboardType: keyboardType,
    multiline: multiline
  }));
};

// ------------------------ FORM DROPDOWN ---------------------------------
var FormDropdown = function FormDropdown(_ref3) {
  var label = _ref3.label,
    items = _ref3.items,
    value = _ref3.value,
    setValue = _ref3.setValue,
    placeholder = _ref3.placeholder,
    zIndex = _ref3.zIndex,
    registry = _ref3.registry,
    styles = _ref3.styles;
  var DropDownPicker = registry.DropDownPicker;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: [styles.formGroup, {
      zIndex: zIndex
    }]
  }, label && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.label
  }, label), /*#__PURE__*/_react["default"].createElement(DropDownPicker, {
    open: open,
    value: value,
    items: items,
    setOpen: setOpen,
    setValue: setValue,
    placeholder: placeholder,
    style: styles.dropdownStyle,
    textStyle: styles.dropdownTextStyle,
    dropDownContainerStyle: styles.dropdownContainerStyle
  }));
};

// ------------------------ ADDRESS SEARCH ---------------------------------
var AddressSearch = function AddressSearch(_ref4) {
  var value = _ref4.value,
    _setValue = _ref4.setValue,
    googleApiKey = _ref4.googleApiKey,
    registry = _ref4.registry,
    styles = _ref4.styles;
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    results = _useState4[0],
    setResults = _useState4[1];
  var searchAddress = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(!query || !googleApiKey)) {
              _context.next = 2;
              break;
            }
            return _context.abrupt("return");
          case 2:
            _context.prev = 2;
            _context.next = 5;
            return fetch("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=".concat(encodeURIComponent(query), "&key=").concat(googleApiKey));
          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();
          case 8:
            data = _context.sent;
            setResults(data.predictions || []);
            _context.next = 15;
            break;
          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](2);
            console.error("Address search error:", _context.t0);
          case 15:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[2, 12]]);
    }));
    return function searchAddress(_x) {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formGroup
  }, /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Service Address",
    value: value,
    setValue: function setValue(text) {
      _setValue(text);
      searchAddress(text);
    },
    placeholder: "Search address...",
    registry: registry,
    styles: styles
  }), results.length > 0 && /*#__PURE__*/_react["default"].createElement(_reactNative.FlatList, {
    data: results,
    keyExtractor: function keyExtractor(item) {
      return item.place_id;
    },
    renderItem: function renderItem(_ref6) {
      var item = _ref6.item;
      return /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
        style: styles.addressItem,
        onPress: function onPress() {
          return _setValue(item.description);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
        style: styles.addressText
      }, item.description));
    },
    style: styles.addressList
  }));
};

// ------------------------ DATE PICKER -------------------------------------
var DatePicker = function DatePicker(_ref7) {
  var date = _ref7.date,
    setDate = _ref7.setDate,
    registry = _ref7.registry,
    styles = _ref7.styles;
  var DateTimePicker = registry.DateTimePicker,
    IconButton = registry.IconButton;
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showPicker = _useState6[0],
    setShowPicker = _useState6[1];
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.dateContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.datePickerButton,
    onPress: function onPress() {
      return setShowPicker(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.datePickerText
  }, date ? "".concat(date.getDate(), "/").concat(date.getMonth() + 1, "/").concat(date.getFullYear()) : 'Select date'), /*#__PURE__*/_react["default"].createElement(IconButton, {
    icon: "calendar",
    size: 20,
    color: "#007AFF"
  })), showPicker && /*#__PURE__*/_react["default"].createElement(DateTimePicker, {
    value: date || new Date(),
    mode: "date",
    display: "default",
    onChange: function onChange(event, selectedDate) {
      setShowPicker(false);
      selectedDate && setDate(selectedDate);
    }
  }));
};

// ------------------------ SWITCH INPUT -----------------------------------
var SwitchInput = function SwitchInput(_ref8) {
  var label = _ref8.label,
    value = _ref8.value,
    setValue = _ref8.setValue,
    styles = _ref8.styles;
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.switchContainer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.switchLabel
  }, label), /*#__PURE__*/_react["default"].createElement(_reactNative.Switch, {
    value: value,
    onValueChange: setValue,
    trackColor: {
      "false": "#767577",
      "true": "#81b0ff"
    },
    thumbColor: value ? "#007AFF" : "#f4f3f4"
  }));
};
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ COMPLEX FORM COMPONENTS -----------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ------------------------ WARRANTY SELECTOR -----------------------------
var WarrantySelector = function WarrantySelector(_ref9) {
  var parts = _ref9.parts,
    setParts = _ref9.setParts,
    labor = _ref9.labor,
    setLabor = _ref9.setLabor,
    registry = _ref9.registry,
    styles = _ref9.styles;
  var warrantyOptions = [{
    label: 'None',
    value: '0'
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
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.warrantyContainer
  }, /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "Parts Warranty",
    items: warrantyOptions,
    value: parts,
    setValue: setParts,
    registry: registry,
    zIndex: 1000,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "Labor Warranty",
    items: warrantyOptions,
    value: labor,
    setValue: setLabor,
    registry: registry,
    zIndex: 999,
    styles: styles
  }));
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
  var _useState7 = (0, _react.useState)(initialValue),
    _useState8 = _slicedToArray(_useState7, 2),
    inputValue = _useState8[0],
    setInputValue = _useState8[1];
  var _useState9 = (0, _react.useState)(initialUnit),
    _useState0 = _slicedToArray(_useState9, 2),
    selectedUnit = _useState0[0],
    setSelectedUnit = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    openUnitDropdown = _useState10[0],
    setOpenUnitDropdown = _useState10[1];
  var DropDownPicker = registry.DropDownPicker;

  // Reset state when modal becomes visible
  (0, _react.useEffect)(function () {
    if (visible) {
      setInputValue(initialValue);
      setSelectedUnit(initialUnit);
    }
  }, [visible, initialValue, initialUnit]);
  var handleSave = function handleSave() {
    if (inputValue && inputValue !== '0') {
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
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalInputLabel
  }, inputLabel), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.modalInputRow
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TextInput, {
    style: styles.modalInput,
    value: inputValue,
    onChangeText: setInputValue,
    placeholder: "Enter value",
    placeholderTextColor: "#999",
    keyboardType: "numeric"
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
    placeholder: "Select unit",
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
    style: [styles.modalSaveButton, (!inputValue || inputValue === '0') && styles.modalButtonDisabled],
    onPress: handleSave,
    disabled: !inputValue || inputValue === '0'
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.modalSaveButtonText
  }, "Save")))))));
};

// ---------------------- COVERAGE & INSURANCES SUB-COMPONENTS ----------------
var LicenseForm = function LicenseForm(_ref1) {
  var onSave = _ref1.onSave,
    onCancel = _ref1.onCancel,
    registry = _ref1.registry,
    styles = _ref1.styles;
  var _useState11 = (0, _react.useState)({
      title: '',
      issuer: '',
      type: 'Business License',
      scope: ''
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    license = _useState12[0],
    setLicense = _useState12[1];
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formGroup
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
    registry: registry,
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
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "License Type",
    items: [{
      label: 'Business License',
      value: 'Business License'
    }, {
      label: 'Professional License',
      value: 'Professional License'
    }, {
      label: 'Trade License',
      value: 'Trade License'
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
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formActions
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.cancelButton],
    onPress: onCancel
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.buttonText
  }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.saveButton],
    onPress: function onPress() {
      return onSave(license);
    },
    disabled: !license.title || !license.issuer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.buttonText
  }, "Save License"))));
};
var InsuranceForm = function InsuranceForm(_ref10) {
  var onSave = _ref10.onSave,
    onCancel = _ref10.onCancel,
    onCustomCoverage = _ref10.onCustomCoverage,
    registry = _ref10.registry,
    styles = _ref10.styles;
  var _useState13 = (0, _react.useState)({
      type: 'commercial liability',
      coverage: '1MM',
      issuer: ''
    }),
    _useState14 = _slicedToArray(_useState13, 2),
    insurance = _useState14[0],
    setInsurance = _useState14[1];
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.subForm
  }, /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "Insurance Type",
    items: [{
      label: 'Commercial Liability',
      value: 'commercial liability'
    }, {
      label: 'Professional Liability',
      value: 'professional liability'
    }, {
      label: 'Workers Compensation',
      value: 'workers compensation'
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
    zIndex: 2000,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(FormDropdown, {
    label: "Coverage Amount",
    items: [{
      label: '$1 Million',
      value: '1MM'
    }, {
      label: '$2 Million',
      value: '2MM'
    }, {
      label: '$5 Million',
      value: '5MM'
    }, {
      label: 'Custom...',
      value: 'custom'
    }],
    value: insurance.coverage,
    setValue: function setValue(value) {
      if (value === 'custom') {
        onCustomCoverage();
      } else {
        setInsurance(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, {
            coverage: value
          });
        });
      }
    },
    registry: registry,
    zIndex: 1900,
    styles: styles
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
    placeholder: "Insurance Company Name",
    required: true,
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.formActions
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.cancelButton],
    onPress: onCancel
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.buttonText
  }, "Cancel")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: [styles.button, styles.saveButton],
    onPress: function onPress() {
      return onSave(insurance);
    },
    disabled: !insurance.issuer
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.buttonText
  }, "Save Insurance"))));
};

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------
// ------------------------ SECTION COMPONENTS ----------------------------
// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// ---------------------- PERSONAL DETAILS COMPONENT ----------------------
var PersonalDetails = function PersonalDetails(_ref11) {
  var formData = _ref11.formData,
    updateContact = _ref11.updateContact,
    isValidPhoneNumber = _ref11.isValidPhoneNumber,
    isValidEmail = _ref11.isValidEmail,
    GOOGLE_API = _ref11.GOOGLE_API,
    registry = _ref11.registry,
    styles = _ref11.styles;
  return /*#__PURE__*/_react["default"].createElement(FormSection, {
    title: "Personal Details",
    registry: registry,
    styles: styles
  }, /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Phone",
    value: formData.contact.phone,
    setValue: function setValue(text) {
      return updateContact('phone', text.replace(/[^\d\s+]/g, ''));
    },
    placeholder: "e.g. +1 650 288 7596",
    required: true,
    keyboardType: "phone-pad",
    registry: registry,
    styles: styles
  }), formData.contact.phone && !isValidPhoneNumber(formData.contact.phone) && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: localStyles.errorText
  }, "Please enter a valid phone number with country code"), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Email",
    value: formData.contact.email,
    setValue: function setValue(text) {
      return updateContact('email', text);
    },
    placeholder: "e.g. example@domain.com",
    required: true,
    keyboardType: "email-address",
    registry: registry,
    styles: styles
  }), formData.contact.email && !isValidEmail(formData.contact.email) && /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: localStyles.errorText
  }, "Please enter a valid email address"), /*#__PURE__*/_react["default"].createElement(FormInput, {
    label: "Website",
    value: formData.contact.website,
    setValue: function setValue(text) {
      return updateContact('website', text);
    },
    placeholder: "e.g. https://yourwebsite.com",
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(AddressSearch, {
    value: formData.contact.address,
    setValue: function setValue(text) {
      return updateContact('address', text);
    },
    googleApiKey: GOOGLE_API,
    registry: registry,
    styles: styles
  }));
};

// ---------------------- SERVICE INFORMATION COMPONENT ----------------------
var ServiceInfo = function ServiceInfo(_ref12) {
  var formData = _ref12.formData,
    setFormData = _ref12.setFormData,
    registry = _ref12.registry,
    styles = _ref12.styles;
  // Custom warranty modal state
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    showCustomWarrantyModal = _useState16[0],
    setShowCustomWarrantyModal = _useState16[1];
  var _useState17 = (0, _react.useState)(''),
    _useState18 = _slicedToArray(_useState17, 2),
    customWarrantyType = _useState18[0],
    setCustomWarrantyType = _useState18[1];

  // Handle warranty selection with custom logic
  var handleWarrantyChange = function handleWarrantyChange(type) {
    return function (value) {
      if (value === 'custom') {
        setCustomWarrantyType(type);
        setShowCustomWarrantyModal(true);
      } else {
        setFormData(function (prev) {
          return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, type, value));
        });
      }
    };
  };
  return /*#__PURE__*/_react["default"].createElement(FormSection, {
    title: "Service Information",
    registry: registry,
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
    registry: registry,
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
    registry: registry,
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
    zIndex: 3000,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(DatePicker, {
    date: formData.businessCommencementDate,
    setDate: function setDate(date) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        businessCommencementDate: date
      }));
    },
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(WarrantySelector, {
    parts: formData.warrantyParts,
    setParts: handleWarrantyChange('warrantyParts'),
    labor: formData.warrantyLabor,
    setLabor: handleWarrantyChange('warrantyLabor'),
    registry: registry,
    styles: styles
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
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(SwitchInput, {
    label: "Permitting Included",
    value: formData.permittingIncluded === "yes",
    setValue: function setValue(value) {
      return setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        permittingIncluded: value ? "yes" : "no"
      }));
    },
    registry: registry,
    styles: styles
  })), /*#__PURE__*/_react["default"].createElement(CustomSelectorModal, {
    visible: showCustomWarrantyModal,
    title: "Custom ".concat(capitalize(customWarrantyType), " Warranty"),
    inputLabel: "Warranty Duration",
    initialValue: formData["customWarranty".concat(capitalize(customWarrantyType), "Value")],
    initialUnit: formData["customWarranty".concat(capitalize(customWarrantyType), "Unit")],
    unitItems: [{
      label: 'Days',
      value: 'days'
    }, {
      label: 'Months',
      value: 'months'
    }, {
      label: 'Years',
      value: 'years'
    }],
    onSave: function onSave(value, unit) {
      var formatted = "".concat(value, " ").concat(unit);
      setFormData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, _defineProperty(_defineProperty(_defineProperty({}, "warranty".concat(capitalize(customWarrantyType)), formatted), "customWarranty".concat(capitalize(customWarrantyType), "Value"), value), "customWarranty".concat(capitalize(customWarrantyType), "Unit"), unit));
      });
    },
    onClose: function onClose() {
      return setShowCustomWarrantyModal(false);
    },
    registry: registry,
    styles: styles
  }));
};

// ---------------------- COVERAGE & INSURANCES COMPONENT ----------------------
var CoverageInsurances = function CoverageInsurances(_ref13) {
  var formData = _ref13.formData,
    setFormData = _ref13.setFormData,
    registry = _ref13.registry,
    styles = _ref13.styles;
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    showLicenseForm = _useState20[0],
    setShowLicenseForm = _useState20[1];
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showInsuranceForm = _useState22[0],
    setShowInsuranceForm = _useState22[1];
  var _useState23 = (0, _react.useState)(false),
    _useState24 = _slicedToArray(_useState23, 2),
    showCoverageModal = _useState24[0],
    setShowCoverageModal = _useState24[1];

  // License Management
  var addLicense = function addLicense(newLicense) {
    setFormData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        licenses: [].concat(_toConsumableArray(prev.licenses), [newLicense])
      });
    });
    setShowLicenseForm(false);
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
  return /*#__PURE__*/_react["default"].createElement(FormSection, {
    title: "Credentials & Coverage",
    registry: registry,
    styles: styles
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.sectionHeader
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.subSectionTitle
  }, "Licenses"), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.addButton,
    onPress: function onPress() {
      return setShowLicenseForm(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.addButtonText
  }, "+ Add License"))), formData.licenses.map(function (license, index) {
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
    }, "Type: ", license.type)), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      style: styles.removeButton,
      onPress: function onPress() {
        return removeLicense(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.removeButtonText
    }, "\u2715")));
  }), showLicenseForm && /*#__PURE__*/_react["default"].createElement(LicenseForm, {
    onSave: addLicense,
    onCancel: function onCancel() {
      return setShowLicenseForm(false);
    },
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.sectionHeader
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.subSectionTitle
  }, "Insurances"), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    style: styles.addButton,
    onPress: function onPress() {
      return setShowInsuranceForm(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.addButtonText
  }, "+ Add Insurance"))), formData.insurances.map(function (insurance, index) {
    return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      key: index,
      style: styles.listItem
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
      style: styles.itemContent
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemTitle
    }, insurance.type), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemDetail
    }, "Coverage: ", insurance.coverage), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.itemDetail
    }, "Issuer: ", insurance.issuer)), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
      style: styles.removeButton,
      onPress: function onPress() {
        return removeInsurance(index);
      }
    }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
      style: styles.removeButtonText
    }, "\u2715")));
  }), showInsuranceForm && /*#__PURE__*/_react["default"].createElement(InsuranceForm, {
    onSave: addInsurance,
    onCancel: function onCancel() {
      return setShowInsuranceForm(false);
    },
    onCustomCoverage: function onCustomCoverage() {
      return setShowCoverageModal(true);
    },
    registry: registry,
    styles: styles
  }), /*#__PURE__*/_react["default"].createElement(CustomSelectorModal, {
    visible: showCoverageModal,
    title: "Custom Coverage Amount",
    inputLabel: "Coverage Value",
    initialValue: "",
    initialUnit: "dollars",
    unitItems: [{
      label: 'Dollars ($)',
      value: 'dollars'
    }, {
      label: 'Thousands (K)',
      value: 'thousand'
    }, {
      label: 'Millions (M)',
      value: 'million'
    }],
    onSave: function onSave(value, unit) {
      var formatted = "$".concat(value);
      if (unit === 'thousand') formatted += 'K';
      if (unit === 'million') formatted += 'M';
      setFormData(function (prev) {
        return _objectSpread(_objectSpread({}, prev), {}, {
          newInsurance: _objectSpread(_objectSpread({}, prev.newInsurance), {}, {
            coverage: formatted
          })
        });
      });
    },
    onClose: function onClose() {
      return setShowCoverageModal(false);
    },
    registry: registry,
    styles: styles
  }));
};

// ---------------------- PHOTO ALBUM COMPONENT ----------------------
var PhotoAlbum = function PhotoAlbum(_ref14) {
  var photos = _ref14.photos,
    setPhotos = _ref14.setPhotos,
    registry = _ref14.registry,
    styles = _ref14.styles;
  var ImagePicker = registry.ImagePicker,
    Ionicons = registry.Ionicons;
  var MAX_PHOTOS = 8;
  var handleAddPhotos = /*#__PURE__*/function () {
    var _ref15 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var permissionResult, _yield$ImagePicker$re, status, result, newPhotos;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return ImagePicker.getMediaLibraryPermissionsAsync();
          case 3:
            permissionResult = _context2.sent;
            if (!(!permissionResult.granted && permissionResult.canAskAgain)) {
              _context2.next = 12;
              break;
            }
            _context2.next = 7;
            return ImagePicker.requestMediaLibraryPermissionsAsync();
          case 7:
            _yield$ImagePicker$re = _context2.sent;
            status = _yield$ImagePicker$re.status;
            if (!(status !== 'granted')) {
              _context2.next = 12;
              break;
            }
            _reactNative.Alert.alert('Permission Required', 'Please enable photo access in settings');
            return _context2.abrupt("return");
          case 12:
            _context2.next = 14;
            return ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              allowsMultipleSelection: true,
              selectionLimit: MAX_PHOTOS - photos.length,
              quality: 0.8
            });
          case 14:
            result = _context2.sent;
            if (!result.canceled && result.assets) {
              newPhotos = result.assets.filter(function (asset) {
                return !photos.some(function (p) {
                  return p.uri === asset.uri;
                });
              }).map(function (asset) {
                return {
                  id: "photo-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                  uri: asset.uri,
                  width: asset.width,
                  height: asset.height,
                  type: asset.type || 'image',
                  fileName: asset.fileName || "photo-".concat(Date.now(), ".jpg")
                };
              });
              if (newPhotos.length > 0) {
                setPhotos([].concat(_toConsumableArray(photos), _toConsumableArray(newPhotos)));
              }
            }
            _context2.next = 22;
            break;
          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            _reactNative.Alert.alert('Error', 'Failed to select photos');
            console.error('Photo selection error:', _context2.t0);
          case 22:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 18]]);
    }));
    return function handleAddPhotos() {
      return _ref15.apply(this, arguments);
    };
  }();
  var removePhoto = function removePhoto(photoId) {
    setPhotos(photos.filter(function (photo) {
      return photo.id !== photoId;
    }));
  };
  return /*#__PURE__*/_react["default"].createElement(FormSection, {
    title: "Photos",
    styles: styles
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.photoHeader
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.photoCount
  }, photos.length, "/", MAX_PHOTOS, " photos")), /*#__PURE__*/_react["default"].createElement(_reactNative.TouchableOpacity, {
    onPress: handleAddPhotos,
    disabled: photos.length >= MAX_PHOTOS,
    style: styles.outlinedButton
  }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
    name: "add",
    size: 20,
    color: "#1877F2"
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.outlinedButtonText
  }, "Add Photos")), photos.length > 0 ? /*#__PURE__*/_react["default"].createElement(_reactNative.FlatList, {
    data: photos,
    keyExtractor: function keyExtractor(item) {
      return item.id;
    },
    numColumns: 3,
    contentContainerStyle: styles.photoGrid,
    renderItem: function renderItem(_ref16) {
      var item = _ref16.item;
      return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
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
        size: 24,
        color: "#FF3B30"
      })));
    }
  }) : /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.emptyState
  }, /*#__PURE__*/_react["default"].createElement(Ionicons, {
    name: "images-outline",
    size: 48,
    color: "#CCCCCC"
  }), /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
    style: styles.emptyText
  }, "No photos added yet")));
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
  if (formData.warrantyParts === null) {
    _reactNative.Alert.alert('Error', 'Please select a parts warranty period for your offering');
    return;
  }
  if (formData.warrantyLabor === null) {
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
  var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref17$formData = _ref17.formData,
    initialFormData = _ref17$formData === void 0 ? {} : _ref17$formData,
    _ref17$setFormData = _ref17.setFormData,
    setParentFormData = _ref17$setFormData === void 0 ? function () {} : _ref17$setFormData,
    _ref17$styles = _ref17.styles,
    parentStyles = _ref17$styles === void 0 ? {} : _ref17$styles,
    _ref17$offering = _ref17.offering,
    offering = _ref17$offering === void 0 ? null : _ref17$offering,
    _ref17$selectedOption = _ref17.selectedOption,
    selectedOption = _ref17$selectedOption === void 0 ? '' : _ref17$selectedOption,
    _ref17$breadcrumb = _ref17.breadcrumb,
    breadcrumb = _ref17$breadcrumb === void 0 ? '' : _ref17$breadcrumb,
    _ref17$meta = _ref17.meta,
    meta = _ref17$meta === void 0 ? {} : _ref17$meta,
    _ref17$navigation = _ref17.navigation,
    navigation = _ref17$navigation === void 0 ? null : _ref17$navigation,
    _ref17$GOOGLE_API = _ref17.GOOGLE_API,
    GOOGLE_API = _ref17$GOOGLE_API === void 0 ? '' : _ref17$GOOGLE_API,
    registry = _ref17.registry;
  var styles = _objectSpread(_objectSpread({}, localStyles), parentStyles);
  var _useState25 = (0, _react.useState)(function () {
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
        insurances: [],
        photos: [],
        businessCommencementDate: null,
        warrantyParts: null,
        warrantyLabor: null,
        emergencyServicesProvided: false,
        permittingIncluded: 'no'
      }, initialFormData), offering ? _objectSpread({
        title: offering.title || '',
        description: offering.description || ''
      }, offering.extraData || {}) : {});
    }),
    _useState26 = _slicedToArray(_useState25, 2),
    formData = _useState26[0],
    setFormData = _useState26[1];
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
        warranty: "parts: ".concat(formData.warrantyParts, ", labor: ").concat(formData.warrantyLabor),
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
    flex: 1,
    backgroundColor: '#fff'
  },
  formContentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    width: '100%'
  },
  // Section header (blue, rounded, centered)
  mainSectionHeader: {
    backgroundColor: '#1877F2',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    marginTop: 28,
    marginBottom: 18,
    shadowColor: '#1877F2',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2
  },
  mainSectionHeaderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2
  },
  // Form group
  formGroup: {
    marginBottom: 20
  },
  // Input and dropdown
  label: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 6,
    color: '#222'
  },
  requiredStar: {
    color: '#FF3B30',
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#222',
    marginBottom: 0
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top'
  },
  dropdownStyle: {
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderRadius: 8,
    minHeight: 48
  },
  dropdownTextStyle: {
    fontSize: 15,
    color: '#222'
  },
  dropdownContainerStyle: {
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    borderRadius: 8
  },
  // Switches
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  switchLabel: {
    fontSize: 15,
    color: '#222',
    flex: 1
  },
  switchValue: {
    fontSize: 15,
    color: '#1877F2',
    marginLeft: 8,
    fontWeight: '600'
  },
  // Buttons
  addButton: {
    backgroundColor: '#1877F2',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 8
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.2
  },
  // Photo album
  photoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  photoCount: {
    fontSize: 14,
    color: '#888'
  },
  outlinedButton: {
    borderWidth: 1.5,
    borderColor: '#1877F2',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10
  },
  outlinedButtonText: {
    color: '#1877F2',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 6
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 30,
    marginTop: 10
  },
  emptyStateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
    marginTop: 12,
    textAlign: 'center'
  },
  // Misc
  errorText: {
    color: '#FF3B30',
    fontSize: 13,
    marginTop: 4
  }
});

// force force
var _default = exports["default"] = PlumbingForm;
