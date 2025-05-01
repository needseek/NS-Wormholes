"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeDropdownPicker = _interopRequireDefault(require("react-native-dropdown-picker"));
var _libphonenumberJs = require("libphonenumber-js");
var _datetimepicker = _interopRequireDefault(require("@react-native-community/datetimepicker"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return r; }; var t, r = {}, e = Object.prototype, n = e.hasOwnProperty, o = "function" == typeof Symbol ? Symbol : {}, i = o.iterator || "@@iterator", a = o.asyncIterator || "@@asyncIterator", u = o.toStringTag || "@@toStringTag"; function c(t, r, e, n) { return Object.defineProperty(t, r, { value: e, enumerable: !n, configurable: !n, writable: !n }); } try { c({}, ""); } catch (t) { c = function c(t, r, e) { return t[r] = e; }; } function h(r, e, n, o) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype); return c(a, "_invoke", function (r, e, n) { var o = 1; return function (i, a) { if (3 === o) throw Error("Generator is already running"); if (4 === o) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var u = n.delegate; if (u) { var c = d(u, n); if (c) { if (c === f) continue; return c; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (1 === o) throw o = 4, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = 3; var h = s(r, e, n); if ("normal" === h.type) { if (o = n.done ? 4 : 2, h.arg === f) continue; return { value: h.arg, done: n.done }; } "throw" === h.type && (o = 4, n.method = "throw", n.arg = h.arg); } }; }(r, n, new Context(o || [])), !0), a; } function s(t, r, e) { try { return { type: "normal", arg: t.call(r, e) }; } catch (t) { return { type: "throw", arg: t }; } } r.wrap = h; var f = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var l = {}; c(l, i, function () { return this; }); var p = Object.getPrototypeOf, y = p && p(p(x([]))); y && y !== e && n.call(y, i) && (l = y); var v = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(l); function g(t) { ["next", "throw", "return"].forEach(function (r) { c(t, r, function (t) { return this._invoke(r, t); }); }); } function AsyncIterator(t, r) { function e(o, i, a, u) { var c = s(t[o], t, i); if ("throw" !== c.type) { var h = c.arg, f = h.value; return f && "object" == _typeof(f) && n.call(f, "__await") ? r.resolve(f.__await).then(function (t) { e("next", t, a, u); }, function (t) { e("throw", t, a, u); }) : r.resolve(f).then(function (t) { h.value = t, a(h); }, function (t) { return e("throw", t, a, u); }); } u(c.arg); } var o; c(this, "_invoke", function (t, n) { function i() { return new r(function (r, o) { e(t, n, r, o); }); } return o = o ? o.then(i, i) : i(); }, !0); } function d(r, e) { var n = e.method, o = r.i[n]; if (o === t) return e.delegate = null, "throw" === n && r.i["return"] && (e.method = "return", e.arg = t, d(r, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), f; var i = s(o, r.i, e.arg); if ("throw" === i.type) return e.method = "throw", e.arg = i.arg, e.delegate = null, f; var a = i.arg; return a ? a.done ? (e[r.r] = a.value, e.next = r.n, "return" !== e.method && (e.method = "next", e.arg = t), e.delegate = null, f) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, f); } function w(t) { this.tryEntries.push(t); } function m(r) { var e = r[4] || {}; e.type = "normal", e.arg = t, r[4] = e; } function Context(t) { this.tryEntries = [[-1]], t.forEach(w, this), this.reset(!0); } function x(r) { if (null != r) { var e = r[i]; if (e) return e.call(r); if ("function" == typeof r.next) return r; if (!isNaN(r.length)) { var o = -1, a = function e() { for (; ++o < r.length;) if (n.call(r, o)) return e.value = r[o], e.done = !1, e; return e.value = t, e.done = !0, e; }; return a.next = a; } } throw new TypeError(_typeof(r) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, c(v, "constructor", GeneratorFunctionPrototype), c(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = c(GeneratorFunctionPrototype, u, "GeneratorFunction"), r.isGeneratorFunction = function (t) { var r = "function" == typeof t && t.constructor; return !!r && (r === GeneratorFunction || "GeneratorFunction" === (r.displayName || r.name)); }, r.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, c(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t; }, r.awrap = function (t) { return { __await: t }; }, g(AsyncIterator.prototype), c(AsyncIterator.prototype, a, function () { return this; }), r.AsyncIterator = AsyncIterator, r.async = function (t, e, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(h(t, e, n, o), i); return r.isGeneratorFunction(e) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, g(v), c(v, u, "Generator"), c(v, i, function () { return this; }), c(v, "toString", function () { return "[object Generator]"; }), r.keys = function (t) { var r = Object(t), e = []; for (var n in r) e.unshift(n); return function t() { for (; e.length;) if ((n = e.pop()) in r) return t.value = n, t.done = !1, t; return t.done = !0, t; }; }, r.values = x, Context.prototype = { constructor: Context, reset: function reset(r) { if (this.prev = this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(m), !r) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0][4]; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(r) { if (this.done) throw r; var e = this; function n(t) { a.type = "throw", a.arg = r, e.next = t; } for (var o = e.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i[4], u = this.prev, c = i[1], h = i[2]; if (-1 === i[0]) return n("end"), !1; if (!c && !h) throw Error("try statement without catch or finally"); if (null != i[0] && i[0] <= u) { if (u < c) return this.method = "next", this.arg = t, n(c), !0; if (u < h) return n(h), !1; } } }, abrupt: function abrupt(t, r) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var n = this.tryEntries[e]; if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) { var o = n; break; } } o && ("break" === t || "continue" === t) && o[0] <= r && r <= o[2] && (o = null); var i = o ? o[4] : {}; return i.type = t, i.arg = r, o ? (this.method = "next", this.next = o[2], f) : this.complete(i); }, complete: function complete(t, r) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && r && (this.next = r), f; }, finish: function finish(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[2] === t) return this.complete(e[4], e[3]), m(e), f; } }, "catch": function _catch(t) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var e = this.tryEntries[r]; if (e[0] === t) { var n = e[4]; if ("throw" === n.type) { var o = n.arg; m(e); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(r, e, n) { return this.delegate = { i: x(r), r: e, n: n }, "next" === this.method && (this.arg = t), f; } }, r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } //  <-- MUST DO ON UPDATE!! --> 
// 1. transpile command: npx babel --presets=@babel/preset-env,@babel/preset-react Plumbing.jsx -o Plumbing.js
// 2. add, commit, push to main
// import { IconButton } from 'react-native-paper';
// import {
//   CustomDropdown,
//   LicenseForm,
//   InsuranceForm,
//   CustomWarrantySelector,
//   PhotoAlbum
// } from '../../components';
var PlumbingForm = function PlumbingForm() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$formData = _ref.formData,
    initialFormData = _ref$formData === void 0 ? {} : _ref$formData,
    _ref$setFormData = _ref.setFormData,
    setParentFormData = _ref$setFormData === void 0 ? function () {} : _ref$setFormData,
    _ref$styles = _ref.styles,
    parentStyles = _ref$styles === void 0 ? {} : _ref$styles,
    _ref$offering = _ref.offering,
    offering = _ref$offering === void 0 ? null : _ref$offering,
    _ref$selectedOption = _ref.selectedOption,
    selectedOption = _ref$selectedOption === void 0 ? '' : _ref$selectedOption,
    _ref$breadcrumb = _ref.breadcrumb,
    breadcrumb = _ref$breadcrumb === void 0 ? '' : _ref$breadcrumb,
    _ref$meta = _ref.meta,
    meta = _ref$meta === void 0 ? {} : _ref$meta,
    _ref$navigation = _ref.navigation,
    navigation = _ref$navigation === void 0 ? null : _ref$navigation,
    _ref$GOOGLE_API = _ref.GOOGLE_API,
    GOOGLE_API = _ref$GOOGLE_API === void 0 ? '' : _ref$GOOGLE_API;
  // Get styles by merging parent styles with component-specific styles
  var styles = _objectSpread(_objectSpread({}, parentStyles), localStyles);

  // Add console warnings for missing critical props
  (0, _react.useEffect)(function () {
    if (!navigation) {
      console.warn('PlumbingForm: navigation prop is missing. Some navigation features may not work.');
    }
    if (!GOOGLE_API) {
      console.warn('PlumbingForm: GOOGLE_API prop is missing. Address search functionality will not work.');
    }
  }, [navigation, GOOGLE_API]);

  // Initialize form data with defaults and any existing data
  var _useState = (0, _react.useState)(function () {
      var initialData = _objectSpread(_objectSpread({
        // Default values
        title: '',
        description: '',
        price: '',
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
        channelsAvailable: [],
        photos: [],
        businessCommencementDate: null,
        warrantyParts: null,
        warrantyLabor: null,
        emergencyServicesProvided: false,
        permittingIncluded: 'no',
        customCoverageAmount: '',
        customCoverageUnit: 'dollars',
        customWarrantyValue: '',
        customWarrantyUnit: 'months',
        newInsurance: {
          type: '',
          coverage: '',
          issuer: ''
        },
        newLicense: {
          title: '',
          issuer: '',
          type: '',
          scope: '',
          licensee: ''
        }
      }, initialFormData), offering ? _objectSpread({
        title: offering.title || '',
        description: offering.description || '',
        price: offering.price || ''
      }, offering.extraData || {}) : {});
      return initialData;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    formData = _useState2[0],
    setFormData = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showLicenseForm = _useState4[0],
    setShowLicenseForm = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    showInsuranceForm = _useState6[0],
    setShowInsuranceForm = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showCertificationForm = _useState8[0],
    setShowCertificationForm = _useState8[1];

  // States for dropdown components
  var _useState9 = (0, _react.useState)(false),
    _useState0 = _slicedToArray(_useState9, 2),
    openEntity = _useState0[0],
    setOpenEntity = _useState0[1];
  var _useState1 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState1, 2),
    openLicenseType = _useState10[0],
    setOpenLicenseType = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = _slicedToArray(_useState11, 2),
    openInsuranceType = _useState12[0],
    setOpenInsuranceType = _useState12[1];
  var _useState13 = (0, _react.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    openInsuranceCoverage = _useState14[0],
    setOpenInsuranceCoverage = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    openWarrantyParts = _useState16[0],
    setOpenWarrantyParts = _useState16[1];
  var _useState17 = (0, _react.useState)(false),
    _useState18 = _slicedToArray(_useState17, 2),
    openWarrantyLabor = _useState18[0],
    setOpenWarrantyLabor = _useState18[1];
  var _useState19 = (0, _react.useState)(false),
    _useState20 = _slicedToArray(_useState19, 2),
    openCertificationType = _useState20[0],
    setOpenCertificationType = _useState20[1];

  // Custom warranty modal states
  var _useState21 = (0, _react.useState)(false),
    _useState22 = _slicedToArray(_useState21, 2),
    showCustomWarrantyModal = _useState22[0],
    setShowCustomWarrantyModal = _useState22[1];
  var _useState23 = (0, _react.useState)(''),
    _useState24 = _slicedToArray(_useState23, 2),
    customWarrantyType = _useState24[0],
    setCustomWarrantyType = _useState24[1]; // 'parts' or 'labor'
  var _useState25 = (0, _react.useState)(''),
    _useState26 = _slicedToArray(_useState25, 2),
    customWarrantyValue = _useState26[0],
    setCustomWarrantyValue = _useState26[1];
  var _useState27 = (0, _react.useState)('months'),
    _useState28 = _slicedToArray(_useState27, 2),
    customWarrantyUnit = _useState28[0],
    setCustomWarrantyUnit = _useState28[1];
  var _useState29 = (0, _react.useState)(false),
    _useState30 = _slicedToArray(_useState29, 2),
    openCustomWarrantyUnit = _useState30[0],
    setOpenCustomWarrantyUnit = _useState30[1];

  // Custom coverage modal states
  var _useState31 = (0, _react.useState)(false),
    _useState32 = _slicedToArray(_useState31, 2),
    showCustomCoverageModal = _useState32[0],
    setShowCustomCoverageModal = _useState32[1];
  var _useState33 = (0, _react.useState)(''),
    _useState34 = _slicedToArray(_useState33, 2),
    customCoverageAmount = _useState34[0],
    setCustomCoverageAmount = _useState34[1];
  var _useState35 = (0, _react.useState)('dollars'),
    _useState36 = _slicedToArray(_useState35, 2),
    customCoverageUnit = _useState36[0],
    setCustomCoverageUnit = _useState36[1];
  var _useState37 = (0, _react.useState)(false),
    _useState38 = _slicedToArray(_useState37, 2),
    openCustomCoverageUnit = _useState38[0],
    setOpenCustomCoverageUnit = _useState38[1];

  // State for certification input
  var _useState39 = (0, _react.useState)(''),
    _useState40 = _slicedToArray(_useState39, 2),
    certificationInput = _useState40[0],
    setCertificationInput = _useState40[1];
  var _useState41 = (0, _react.useState)({
      title: "",
      issuer: "",
      type: "Business License",
      scope: "",
      licensee: ""
    }),
    _useState42 = _slicedToArray(_useState41, 2),
    newLicense = _useState42[0],
    setNewLicense = _useState42[1];
  var _useState43 = (0, _react.useState)({
      type: "commercial liability",
      coverage: "1MM",
      issuer: ""
    }),
    _useState44 = _slicedToArray(_useState43, 2),
    newInsurance = _useState44[0],
    setNewInsurance = _useState44[1];
  var _useState45 = (0, _react.useState)({
      title: "",
      issuer: "",
      type: "Professional Certification",
      date: ""
    }),
    _useState46 = _slicedToArray(_useState45, 2),
    newCertification = _useState46[0],
    setNewCertification = _useState46[1];

  // Add useEffect to update parent formData when local formData changes
  (0, _react.useEffect)(function () {
    if (setParentFormData) {
      setParentFormData(formData);
    }
  }, [formData, setParentFormData]);

  // Add photoUrls state to the component state
  var _useState47 = (0, _react.useState)(formData.photos || []),
    _useState48 = _slicedToArray(_useState47, 2),
    photos = _useState48[0],
    setPhotos = _useState48[1];

  // Update formData when photos change
  (0, _react.useEffect)(function () {
    if (photos.length > 0) {
      setFormData(function (prevData) {
        return _objectSpread(_objectSpread({}, prevData), {}, {
          photos: photos
        });
      });
    }
  }, [photos]);

  // Helper function to validate email format
  var isValidEmail = function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // State for address search
  var _useState49 = (0, _react.useState)(''),
    _useState50 = _slicedToArray(_useState49, 2),
    addressSearchQuery = _useState50[0],
    setAddressSearchQuery = _useState50[1];
  var _useState51 = (0, _react.useState)([]),
    _useState52 = _slicedToArray(_useState51, 2),
    addressSearchResults = _useState52[0],
    setAddressSearchResults = _useState52[1];
  var _useState53 = (0, _react.useState)(false),
    _useState54 = _slicedToArray(_useState53, 2),
    showAddressResults = _useState54[0],
    setShowAddressResults = _useState54[1];

  // Search places using Google Places API
  var searchAddressPlaces = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(text) {
      var response, data;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            if (text) {
              _context.next = 4;
              break;
            }
            setAddressSearchResults([]);
            return _context.abrupt("return");
          case 4:
            if (GOOGLE_API) {
              _context.next = 7;
              break;
            }
            _reactNative.Alert.alert('Configuration Error', 'Google Places API key is not configured. Address search is not available.', [{
              text: 'OK'
            }]);
            return _context.abrupt("return");
          case 7:
            _context.next = 9;
            return fetch("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=".concat(encodeURIComponent(text), "&types=geocode&key=").concat(GOOGLE_API));
          case 9:
            response = _context.sent;
            _context.next = 12;
            return response.json();
          case 12:
            data = _context.sent;
            if (!(data.status !== "OK")) {
              _context.next = 17;
              break;
            }
            console.error("Google Places API Error:", data.status, data.error_message);
            _reactNative.Alert.alert('Search Error', 'Unable to search for addresses at this time. Please try again later.', [{
              text: 'OK'
            }]);
            return _context.abrupt("return");
          case 17:
            setAddressSearchResults(data.predictions.map(function (place) {
              return {
                place_id: place.place_id,
                description: place.description
              };
            }));
            setShowAddressResults(true);
            _context.next = 25;
            break;
          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](0);
            console.error("Error fetching places:", _context.t0);
            _reactNative.Alert.alert('Search Error', 'Unable to search for addresses at this time. Please try again later.', [{
              text: 'OK'
            }]);
          case 25:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 21]]);
    }));
    return function searchAddressPlaces(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  // Handle selecting a place from the results
  var handleSelectPlace = function handleSelectPlace(item) {
    updateContact('address', item.description);
    setAddressSearchQuery('');
    setAddressSearchResults([]);
    setShowAddressResults(false);
  };

  // Clear selected address
  var clearSelectedAddress = function clearSelectedAddress() {
    updateContact('address', '');
    setAddressSearchQuery('');
  };

  // State for date picker
  var _useState55 = (0, _react.useState)(false),
    _useState56 = _slicedToArray(_useState55, 2),
    showDatePicker = _useState56[0],
    setShowDatePicker = _useState56[1];
  // Temporary state for date selection
  var _useState57 = (0, _react.useState)(null),
    _useState58 = _slicedToArray(_useState57, 2),
    tempDate = _useState58[0],
    setTempDate = _useState58[1];

  // Get formatted date string
  var getFormattedDate = function getFormattedDate(date) {
    if (!date) return 'Select date';
    // Format as DD/MM/YYYY
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear();
    return "".concat(day, "/").concat(month, "/").concat(year);
  };

  // Handle date change without closing picker
  var onDateChange = function onDateChange(event, selectedDate) {
    if (_reactNative.Platform.OS === 'android') {
      // On Android, close the picker and update the date
      setShowDatePicker(false);
      if (selectedDate) {
        setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          businessCommencementDate: selectedDate
        }));
      }
    } else {
      // On iOS, just update the temp date without closing
      if (selectedDate) {
        setTempDate(selectedDate);
      }
    }
  };

  // Confirm date selection for iOS
  var confirmIOSDate = function confirmIOSDate() {
    if (tempDate) {
      setFormData(_objectSpread(_objectSpread({}, formData), {}, {
        businessCommencementDate: tempDate
      }));
    }
    setShowDatePicker(false);
  };

  // Cancel date selection for iOS
  var cancelIOSDate = function cancelIOSDate() {
    setTempDate(null);
    setShowDatePicker(false);
  };

  // Initialize temp date when opening the picker
  var openDatePicker = function openDatePicker() {
    setTempDate(formData.businessCommencementDate || new Date());
    setShowDatePicker(true);
  };
  // Add this utility function for generating UUID
  var generateUUID = function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };
  // Format warranty string
  var formatWarranty = function formatWarranty(parts, labor) {
    var partsText = parts === "0" ? "0 months parts" : parts;
    var laborText = labor === "0" ? "0 months labor" : labor;
    return "parts: ".concat(partsText, ", labor: ").concat(laborText);
  };

  // Add this function to your component
  var handleSubmit = function handleSubmit() {
    // Validate data
    // if (!formData.title.trim()) {
    //   Alert.alert('Error', 'Please enter a title for your offering');
    //   return;
    // }

    // if (!formData.description.trim()) {
    //   Alert.alert('Error', 'Please enter a description for your offering');
    //   return;
    // }
    // if (formData.entity == "unselected") {
    //     Alert.alert('Error', 'Please select an entity type for your offering');
    //     return;
    // }
    // if (!formData.businessCommencementDate) {
    //     Alert.alert('Error', 'Please select a business commencement date for your offering');
    //     return;
    // }
    // if (formData.warrantyParts === null) {
    //     Alert.alert('Error', 'Please select a parts warranty period for your offering');
    //     return;
    // }
    // if (formData.warrantyLabor === null) {
    //     Alert.alert('Error', 'Please select a labor warranty period for your offering');
    //     return;
    // }
    // if (formData.contact.phone && !isValidPhoneNumber(formData.contact.phone)) {
    //     Alert.alert('Error', 'Please enter a valid phone number with country code (e.g. +1 for US)');
    //     return;
    // }
    // if (formData.contact.email && !isValidEmail(formData.contact.email)) {
    //     Alert.alert('Error', 'Please enter a valid email address');
    //     return;
    // }
    // if (!formData.contact.address.trim()) {
    //     Alert.alert('Error', 'Please enter an address for your offering');
    //     return;
    // }

    // Format the data according to the required JSON structure
    var formattedData = {
      offering: {
        // haveThingId: generateUUID(),
        topic: breadcrumb,
        title: formData.title,
        description: formData.description,
        geoArea: "",
        entity: [formData.entity],
        contact: {
          phone: formData.contact.phone,
          email: formData.contact.email,
          website: formData.contact.website,
          address: formData.contact.address
        },
        licenses: formData.licenses.map(function (license) {
          return {
            title: license.title,
            issuer: license.issuer,
            type: license.type,
            scope: license.scope,
            licensee: license.licensee
          };
        }),
        certifications: formData.certifications || [],
        insurances: formData.insurances.map(function (insurance) {
          return {
            type: insurance.type,
            coverage: insurance.coverage,
            issuer: insurance.issuer
          };
        }),
        businessCommencementDate: formData.businessCommencementDate,
        channelsAvailable: [],
        warranty: formatWarranty(formData.warrantyParts, formData.warrantyLabor),
        emergencyServicesProvided: formData.emergencyServicesProvided,
        permittingIncluded: formData.permittingIncluded,
        nsPhotoAlbum: formData.photos.length > 0 ? JSON.stringify(formData.photos) : ""
      }
    };

    // TODO: Submit the offering to the API
    console.log('Submitting offering:', formattedData);

    // Navigate to success screen or back to home
    if (navigation) {
      navigation.navigate('CreateHave', {
        selectedOption: selectedOption,
        topics: [],
        topicTexts: [],
        breadcrumb: breadcrumb,
        address: formData.contact.address,
        offeringTitle: formData.title,
        meta: meta
      });
    } else {
      console.warn('Navigation is not available. Unable to navigate after form submission.');
      _reactNative.Alert.alert('Success', 'Form submitted successfully, but navigation is not available.', [{
        text: 'OK'
      }]);
    }
  };
  var updateContact = function updateContact(field, value) {
    var updatedContact = _objectSpread(_objectSpread({}, formData.contact), {}, _defineProperty({}, field, value));
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      contact: updatedContact
    }));
  };
  var addLicense = function addLicense() {
    var updatedLicenses = [].concat(_toConsumableArray(formData.licenses || []), [newLicense]);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      licenses: updatedLicenses
    }));
    setNewLicense({
      title: "",
      issuer: "",
      type: "Business License",
      scope: "",
      licensee: ""
    });
    setShowLicenseForm(false);
  };
  var addInsurance = function addInsurance() {
    var updatedInsurances = [].concat(_toConsumableArray(formData.insurances || []), [newInsurance]);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      insurances: updatedInsurances
    }));
    setNewInsurance({
      type: "commercial liability",
      coverage: "1MM",
      issuer: ""
    });
    setShowInsuranceForm(false);
  };
  var addCertification = function addCertification(cert) {
    if (!cert.trim()) return;
    var updatedCertifications = [].concat(_toConsumableArray(formData.certifications || []), [cert]);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      certifications: updatedCertifications
    }));
    setNewCertification({
      title: "",
      issuer: "",
      type: "Professional Certification",
      date: ""
    });
    setShowCertificationForm(false);
  };
  var removeCertification = function removeCertification(index) {
    var updatedCertifications = _toConsumableArray(formData.certifications);
    updatedCertifications.splice(index, 1);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      certifications: updatedCertifications
    }));
  };

  // Function to handle selecting custom warranty option
  var handleCustomWarranty = function handleCustomWarranty(type) {
    setCustomWarrantyType(type);

    // Check if there's already a custom value to edit
    var existingValue = type === 'parts' ? formData.warrantyParts : formData.warrantyLabor;

    // If we already have a value that's not in the standard items, parse it
    if (existingValue && existingValue !== 'custom' && !['0', '1 month', '3 months', '6 months', '1 year', '2 years'].includes(existingValue)) {
      // Try to parse the custom value (e.g. "15 days" -> number: 15, unit: "days")
      var parts = existingValue.split(' ');
      if (parts.length >= 2) {
        var numValue = parts[0];
        // Get the unit (could be "day", "days", "month", "months", etc.)
        var unit = parts[1].toLowerCase();

        // Normalize the unit to singular if needed
        if (unit === 'days') unit = 'days';else if (unit === 'day') unit = 'days';else if (unit === 'months') unit = 'months';else if (unit === 'month') unit = 'months';else if (unit === 'years') unit = 'years';else if (unit === 'year') unit = 'years';
        setCustomWarrantyValue(numValue);
        setCustomWarrantyUnit(unit);
      } else {
        // If we can't parse, start fresh
        setCustomWarrantyValue('');
        setCustomWarrantyUnit('months');
      }
    } else {
      // Start fresh for new custom values
      setCustomWarrantyValue('');
      setCustomWarrantyUnit('months');
    }
    setShowCustomWarrantyModal(true);
  };

  // Function to save custom warranty
  var saveCustomWarranty = function saveCustomWarranty() {
    if (customWarrantyValue && customWarrantyValue !== '0') {
      var customValue = "".concat(customWarrantyValue, " ").concat(customWarrantyUnit);
      if (customWarrantyType === 'parts') {
        setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          warrantyParts: customValue
        }));
      } else if (customWarrantyType === 'labor') {
        setFormData(_objectSpread(_objectSpread({}, formData), {}, {
          warrantyLabor: customValue
        }));
      }
    }
    setShowCustomWarrantyModal(false);
  };

  // Get dropdown items for each field
  var getEntityItems = function getEntityItems() {
    return [{
      label: 'Individual',
      value: 'individual'
    }, {
      label: 'Business',
      value: 'business'
    }, {
      label: 'Non-Profit',
      value: 'non-profit'
    }];
  };
  var getWarrantyPartsItems = function getWarrantyPartsItems() {
    var standardItems = [{
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

    // If there's a custom value that's not in the standard items, add it
    if (formData.warrantyParts && formData.warrantyParts !== 'custom' && !standardItems.some(function (item) {
      return item.value === formData.warrantyParts;
    })) {
      return [].concat(_toConsumableArray(standardItems.filter(function (item) {
        return item.value !== 'custom';
      })), [{
        label: formData.warrantyParts,
        value: formData.warrantyParts
      }, {
        label: 'Custom...',
        value: 'custom'
      }]);
    }
    return standardItems;
  };
  var getWarrantyLaborItems = function getWarrantyLaborItems() {
    var standardItems = [{
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

    // If there's a custom value that's not in the standard items, add it
    if (formData.warrantyLabor && formData.warrantyLabor !== 'custom' && !standardItems.some(function (item) {
      return item.value === formData.warrantyLabor;
    })) {
      return [].concat(_toConsumableArray(standardItems.filter(function (item) {
        return item.value !== 'custom';
      })), [{
        label: formData.warrantyLabor,
        value: formData.warrantyLabor
      }, {
        label: 'Custom...',
        value: 'custom'
      }]);
    }
    return standardItems;
  };
  var getTimeUnitItems = function getTimeUnitItems() {
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
  var getLicenseTypeItems = function getLicenseTypeItems() {
    return [{
      label: 'Business License',
      value: 'Business License'
    }, {
      label: 'Professional License',
      value: 'Professional License'
    }, {
      label: 'Trade License',
      value: 'Trade License'
    }];
  };
  var getInsuranceTypeItems = function getInsuranceTypeItems() {
    return [{
      label: 'Commercial Liability',
      value: 'commercial liability'
    }, {
      label: 'Professional Liability',
      value: 'professional liability'
    }, {
      label: 'Public Liability',
      value: 'public liability'
    }, {
      label: 'Workers Compensation',
      value: 'workers compensation'
    }];
  };
  var getInsuranceCoverageItems = function getInsuranceCoverageItems() {
    var standardItems = [{
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
    }];

    // If there's a custom value that's not in the standard items, add it
    if (newInsurance.coverage && newInsurance.coverage !== 'custom' && !standardItems.some(function (item) {
      return item.value === newInsurance.coverage;
    })) {
      return [].concat(_toConsumableArray(standardItems.filter(function (item) {
        return item.value !== 'custom';
      })), [{
        label: newInsurance.coverage,
        value: newInsurance.coverage
      }, {
        label: 'Custom...',
        value: 'custom'
      }]);
    }
    return standardItems;
  };
  var getCertificationTypeItems = function getCertificationTypeItems() {
    return [{
      label: 'Professional Certification',
      value: 'Professional Certification'
    }, {
      label: 'Trade Certification',
      value: 'Trade Certification'
    }, {
      label: 'Safety Certification',
      value: 'Safety Certification'
    }, {
      label: 'Environmental Certification',
      value: 'Environmental Certification'
    }];
  };
  var getCoverageUnitItems = function getCoverageUnitItems() {
    return [{
      label: 'Dollars',
      value: 'dollars'
    }, {
      label: 'Thousand',
      value: 'thousand'
    }, {
      label: 'Million',
      value: 'million'
    }];
  };

  // Manage the z-index for dropdowns
  var getZIndex = function getZIndex(isOpen) {
    return isOpen ? 9999 : 1;
  };

  // Function to handle opening a dropdown and closing all others
  var handleOpenDropdown = function handleOpenDropdown(setter, currentState) {
    // If we're opening this dropdown (not closing it)
    // then close all others first
    if (!currentState) {
      setOpenEntity(false);
      setOpenLicenseType(false);
      setOpenInsuranceType(false);
      setOpenInsuranceCoverage(false);
      setOpenWarrantyParts(false);
      setOpenWarrantyLabor(false);
      setOpenCertificationType(false);
    }
    // Then toggle the current dropdown
    setter(!currentState);
  };

  // Function to handle adding certification
  var handleAddCertification = function handleAddCertification() {
    if (certificationInput.trim()) {
      addCertification(certificationInput);
      setCertificationInput('');
    }
  };

  // Add functions to remove items
  var removeLicense = function removeLicense(index) {
    var updatedLicenses = _toConsumableArray(formData.licenses);
    updatedLicenses.splice(index, 1);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      licenses: updatedLicenses
    }));
  };
  var removeInsurance = function removeInsurance(index) {
    var updatedInsurances = _toConsumableArray(formData.insurances);
    updatedInsurances.splice(index, 1);
    setFormData(_objectSpread(_objectSpread({}, formData), {}, {
      insurances: updatedInsurances
    }));
  };
  var handleCustomCoverage = function handleCustomCoverage() {
    setCustomCoverageAmount('');
    setCustomCoverageUnit('dollars');
    setShowCustomCoverageModal(true);
  };
  var saveCustomCoverage = function saveCustomCoverage() {
    if (customCoverageAmount && customCoverageAmount !== '0') {
      var amount = parseFloat(customCoverageAmount);
      var unit = customCoverageUnit;

      // Format for display based on unit
      var displayValue;
      if (unit === 'million') {
        displayValue = "$ ".concat(amount, " Million");
      } else if (unit === 'thousand') {
        displayValue = "$ ".concat(amount, " Thousand");
      } else {
        displayValue = "$ ".concat(amount);
      }
      setNewInsurance(_objectSpread(_objectSpread({}, newInsurance), {}, {
        coverage: displayValue
      }));
    }
    setShowCustomCoverageModal(false);
  };
  (0, _react.useEffect)(function () {
    console.log('formData', formData);
    console.log('GOOGLE_API', GOOGLE_API);
    console.log('navigation', navigation);
    console.log('offering', offering);
    console.log('selectedOption', selectedOption);
    console.log('breadcrumb', breadcrumb);
    console.log('meta', meta);
  }, [formData]);
  return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
    style: styles.label
  }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, null, "I'm not totally FUCKED!"));

  // Return the form directly without FlatList
  //   return (
  //     <View style={styles.container}>
  //       <View style={styles.formContentContainer}>
  //         {/* Service Information (including Business Details) */}
  //         <View style={styles.mainSectionHeader}>
  //           <Text style={styles.mainSectionHeaderText}>Service Information</Text>
  //         </View>

  //       <View style={styles.formGroup}>
  //         <Text style={styles.label}>Title <Text style={styles.requiredStar}>*</Text></Text>
  //         <TextInput
  //           style={styles.input}
  //           value={formData.title}
  //           onChangeText={(text) => setFormData({ ...formData, title: text })}
  //             placeholder="e.g. Garry's Plumbing"
  //           placeholderTextColor="#999"
  //         />
  //       </View>

  //       <View style={styles.formGroup}>
  //         <Text style={styles.label}>Description <Text style={styles.requiredStar}>*</Text></Text>
  //         <TextInput
  //           style={[styles.input, styles.textArea]}
  //           value={formData.description}
  //           onChangeText={(text) => setFormData({ ...formData, description: text })}
  //             placeholder="Describe your plumbing service and specialties"
  //           placeholderTextColor="#999"
  //           multiline
  //           numberOfLines={4}
  //           textAlignVertical="top"
  //         />
  //       </View>

  //         {/* Entity Type */}
  //         <View style={[styles.formGroup, {zIndex: getZIndex(openEntity)}]}>
  //           <Text style={styles.label}>Entity Type <Text style={styles.requiredStar}>*</Text></Text>
  //           <DropDownPicker
  //             open={openEntity}
  //             value={formData.entity}
  //             items={getEntityItems()}
  //             setOpen={(value) => handleOpenDropdown(setOpenEntity, openEntity)}
  //             setValue={(callback) => {
  //               const value = callback(formData.entity);
  //               setFormData({...formData, entity: value});
  //             }}
  //             placeholder="Select"
  //             style={styles.dropdownStyle}
  //             textStyle={styles.dropdownTextStyle}
  //             dropDownContainerStyle={styles.dropdownContainerStyle}
  //             listItemContainerStyle={styles.dropdownItemStyle}
  //             listMode="SCROLLVIEW"
  //             scrollViewProps={{
  //               nestedScrollEnabled: true,
  //             }}
  //           />
  //         </View>

  //         {/* Business Commencement Date - replaced Years In Business */}
  //         <View style={styles.formGroup}>
  //           <Text style={styles.label}>Business Commencement Date <Text style={styles.requiredStar}>*</Text></Text>
  //           <TouchableOpacity 
  //             style={styles.datePickerButton}
  //             onPress={openDatePicker}
  //           >
  //             <Text style={styles.datePickerButtonText}>
  //               {formData.businessCommencementDate 
  //                 ? getFormattedDate(formData.businessCommencementDate) 
  //                 : 'Select commencement date'}
  //             </Text>
  //             <View style={styles.calendarIcon}>
  //               {/* <IconButton
  //                 icon="calendar"
  //                 size={24}
  //                 iconColor="#6750a4"
  //               /> */}
  //             </View>
  //           </TouchableOpacity>

  //           {Platform.OS === 'ios' ? (
  //             <Modal
  //               animationType="slide"
  //               transparent={true}
  //               visible={showDatePicker}
  //               onRequestClose={cancelIOSDate}
  //             >
  //               <TouchableOpacity
  //                 style={styles.datePickerModalOverlay}
  //                 activeOpacity={1}
  //                 onPress={cancelIOSDate}
  //               >
  //                 <View style={styles.datePickerContainer}>
  //                   <View style={styles.datePickerHeader}>
  //                     <TouchableOpacity onPress={cancelIOSDate}>
  //                       <Text style={styles.datePickerCancel}>Cancel</Text>
  //                     </TouchableOpacity>
  //                     <Text style={styles.datePickerTitle}>Select Date</Text>
  //                     <TouchableOpacity onPress={confirmIOSDate}>
  //                       <Text style={styles.datePickerDone}>Done</Text>
  //                     </TouchableOpacity>
  //                   </View>
  //                   <DateTimePicker
  //                     value={tempDate || new Date()}
  //                     mode="date"
  //                     display="spinner"
  //                     onChange={onDateChange}
  //                     maximumDate={new Date()}
  //                     style={styles.datePickerIOS}
  //                   />
  //                 </View>
  //               </TouchableOpacity>
  //             </Modal>
  //           ) : (
  //             showDatePicker && (
  //               <DateTimePicker
  //                 value={formData.businessCommencementDate || new Date()}
  //                 mode="date"
  //                 display="default"
  //                 onChange={onDateChange}
  //                 maximumDate={new Date()}
  //               />
  //             )
  //           )}
  //         </View>

  //         <View style={[styles.formGroup, {zIndex: (openWarrantyParts || openWarrantyLabor) ? 900 : 1, marginTop: 20}]}>
  //           <Text style={styles.label}>Warranty <Text style={styles.requiredStar}>*</Text></Text>
  //           <View style={styles.warrantyContainer}>
  //             <View style={[styles.warrantyInput, {zIndex: getZIndex(openWarrantyParts)}]}>
  //               <Text style={styles.warrantyLabel}>Parts</Text>
  //               <DropDownPicker
  //                 open={openWarrantyParts}
  //                 value={formData.warrantyParts}
  //                 items={getWarrantyPartsItems()}
  //                 setOpen={(value) => handleOpenDropdown(setOpenWarrantyParts, openWarrantyParts)}
  //                 setValue={(callback) => {
  //                   const value = callback(formData.warrantyParts);
  //                   if (value === 'custom') {
  //                     handleCustomWarranty('parts');
  //                   } else {
  //                     setFormData({...formData, warrantyParts: value});
  //                   }
  //                 }}
  //                 placeholder="Select"
  //                 style={styles.dropdownStyle}
  //                 textStyle={styles.dropdownTextStyle}
  //                 dropDownContainerStyle={styles.dropdownContainerStyle}
  //                 listItemContainerStyle={styles.dropdownItemStyle}
  //                 zIndex={openWarrantyLabor ? 998 : 999}
  //                 zIndexInverse={openWarrantyLabor ? 999 : 998}
  //                 listMode="SCROLLVIEW"
  //                 scrollViewProps={{
  //                   nestedScrollEnabled: true,
  //                 }}
  //               />
  //             </View>
  //             <View style={[styles.warrantyInput, {zIndex: getZIndex(openWarrantyLabor)}]}>
  //               <Text style={styles.warrantyLabel}>Labor</Text>
  //               <DropDownPicker
  //                 open={openWarrantyLabor}
  //                 value={formData.warrantyLabor}
  //                 items={getWarrantyLaborItems()}
  //                 setOpen={(value) => handleOpenDropdown(setOpenWarrantyLabor, openWarrantyLabor)}
  //                 setValue={(callback) => {
  //                   const value = callback(formData.warrantyLabor);
  //                   if (value === 'custom') {
  //                     handleCustomWarranty('labor');
  //                   } else {
  //                     setFormData({...formData, warrantyLabor: value});
  //                   }
  //                 }}
  //                 placeholder="Select"
  //                 style={styles.dropdownStyle}
  //                 textStyle={styles.dropdownTextStyle}
  //                 dropDownContainerStyle={styles.dropdownContainerStyle}
  //                 listItemContainerStyle={styles.dropdownItemStyle}
  //                 zIndex={openWarrantyParts ? 998 : 999}
  //                 zIndexInverse={openWarrantyParts ? 999 : 998}
  //                 listMode="SCROLLVIEW"
  //                 scrollViewProps={{
  //                   nestedScrollEnabled: true,
  //                 }}
  //               />
  //             </View>
  //           </View>
  //         </View>

  //         {/* Custom Warranty Modal */}
  //         <Modal
  //           visible={showCustomWarrantyModal}
  //           transparent={true}
  //           animationType="fade"
  //           onRequestClose={() => setShowCustomWarrantyModal(false)}
  //         >
  //           <View style={styles.modalOverlay}>
  //             <View style={styles.modalContent}>
  //               <Text style={styles.modalTitle}>
  //                 Custom {customWarrantyType === 'parts' ? 'Parts' : 'Labor'} Warranty
  //               </Text>

  //               <View style={styles.modalForm}>
  //                 <View style={styles.modalInputRow}>
  //                   <TextInput
  //                     style={styles.modalInput}
  //                     value={customWarrantyValue}
  //                     onChangeText={setCustomWarrantyValue}
  //                     placeholder="Enter number"
  //                     placeholderTextColor="#999"
  //                     keyboardType="numeric"
  //                   />

  //                   <View style={[styles.modalDropdown, {zIndex: getZIndex(openCustomWarrantyUnit)}]}>
  //                     <DropDownPicker
  //                       open={openCustomWarrantyUnit}
  //                       value={customWarrantyUnit}
  //                       items={getTimeUnitItems()}
  //                       setOpen={setOpenCustomWarrantyUnit}
  //                       setValue={(callback) => {
  //                         const value = callback(customWarrantyUnit);
  //                         setCustomWarrantyUnit(value);
  //                       }}
  //                       placeholder="Select"
  //                       style={styles.dropdownStyle}
  //                       textStyle={styles.dropdownTextStyle}
  //                       dropDownContainerStyle={styles.dropdownContainerStyle}
  //                       listItemContainerStyle={styles.dropdownItemStyle}
  //                     />
  //                   </View>
  //                 </View>

  //                 <View style={styles.modalButtons}>
  //                   <TouchableOpacity
  //                     style={styles.modalCancelButton}
  //                     onPress={() => setShowCustomWarrantyModal(false)}
  //                   >
  //                     <Text style={styles.modalCancelButtonText}>Cancel</Text>
  //                   </TouchableOpacity>

  //                   <TouchableOpacity
  //                     style={[
  //                       styles.modalSaveButton,
  //                       (!customWarrantyValue || customWarrantyValue === '0') && styles.modalButtonDisabled
  //                     ]}
  //                     onPress={saveCustomWarranty}
  //                     disabled={!customWarrantyValue || customWarrantyValue === '0'}
  //                   >
  //                     <Text style={styles.modalSaveButtonText}>Save</Text>
  //                   </TouchableOpacity>
  //                 </View>
  //               </View>
  //             </View>
  //           </View>
  //         </Modal>

  //         <View style={[styles.formGroup, {zIndex: (openWarrantyParts || openWarrantyLabor) ? -1 : 1}]}>
  //           <Text style={styles.label}>Emergency Services Provided</Text>
  //         <View style={styles.switchContainer}>
  //           <Switch
  //               value={formData.emergencyServicesProvided}
  //               onValueChange={(value) => setFormData({...formData, emergencyServicesProvided: value})}
  //             trackColor={{ false: "#767577", true: "#81b0ff" }}
  //               thumbColor={formData.emergencyServicesProvided ? "#007AFF" : "#f4f3f4"}
  //           />
  //           <Text style={styles.switchLabel}>
  //               {formData.emergencyServicesProvided ? "Yes" : "No"}
  //           </Text>
  //         </View>
  //       </View>

  //       <View style={styles.formGroup}>
  //           <Text style={styles.label}>Permitting Included</Text>
  //           <View style={styles.switchContainer}>
  //             <Switch
  //               value={formData.permittingIncluded === "yes"}
  //               onValueChange={(value) => setFormData({...formData, permittingIncluded: value ? "yes" : "no"})}
  //               trackColor={{ false: "#767577", true: "#81b0ff" }}
  //               thumbColor={formData.permittingIncluded === "yes" ? "#007AFF" : "#f4f3f4"}
  //             />
  //             <Text style={styles.switchLabel}>
  //               {formData.permittingIncluded === "yes" ? "Yes" : "No"}
  //             </Text>
  //           </View>
  //         </View>

  //         {/* Personal Details */}
  //         <View style={[styles.mainSectionHeader, {zIndex: openEntity ? -1 : 1}]}>
  //           <Text style={styles.mainSectionHeaderText}>Personal Details</Text>
  //         </View>

  //         <View style={styles.formGroup}>
  //           <Text style={styles.label}>Phone <Text style={styles.requiredStar}>*</Text></Text>
  //           <TextInput
  //             style={styles.input}
  //             value={formData.contact.phone}
  //             onChangeText={(text) => {
  //               // Only allow numbers, +, and spaces for readability
  //               const filteredText = text.replace(/[^\d\s+]/g, '');
  //               updateContact('phone', filteredText);
  //             }}
  //             placeholder="e.g. +1 650 288 7596"
  //             placeholderTextColor="#999"
  //             keyboardType="phone-pad"
  //             autoCapitalize="none"
  //             autoCorrect={false}
  //           />
  //           {formData.contact.phone && !isValidPhoneNumber(formData.contact.phone) && (
  //             <Text style={styles.errorText}>Please enter a valid phone number with country code (e.g. +1 for US)</Text>
  //           )}
  //         </View>

  //         <View style={styles.formGroup}>
  //           <Text style={styles.label}>Email <Text style={styles.requiredStar}>*</Text></Text>
  //           <TextInput
  //             style={styles.input}
  //             value={formData.contact.email}
  //             onChangeText={(text) => updateContact('email', text)}
  //             placeholder="e.g. needseek@aol.com"
  //             placeholderTextColor="#999"
  //             keyboardType="email-address"
  //             autoCapitalize="none"
  //           />
  //           {formData.contact.email && !isValidEmail(formData.contact.email) && (
  //             <Text style={styles.errorText}>Please enter a valid email address</Text>
  //           )}
  //         </View>

  //         <View style={styles.formGroup}>
  //           <Text style={styles.label}>Website</Text>
  //         <TextInput
  //           style={styles.input}
  //             value={formData.contact.website}
  //             onChangeText={(text) => updateContact('website', text)}
  //             placeholder="e.g. www.needseek.com"
  //           placeholderTextColor="#999"
  //           autoCapitalize="none"
  //         />
  //       </View>

  //         {/* Address with autocomplete */}
  //         <View style={styles.formGroup}>
  //           <Text style={styles.label}>Address <Text style={styles.requiredStar}>*</Text></Text>

  //           {formData.contact.address ? (
  //             /* Selected Address Block */
  //             <View style={styles.selectedAddressContainer}>
  //               <Text 
  //                 style={styles.selectedAddressText}
  //                 numberOfLines={2}
  //               >
  //                 {formData.contact.address}
  //               </Text>
  //               <TouchableOpacity
  //                 style={styles.removeAddressButton}
  //                 onPress={clearSelectedAddress}
  //               >
  //                 <Text style={styles.removeAddressButtonText}>✕</Text>
  //               </TouchableOpacity>
  //             </View>
  //           ) : (
  //             /* Search Input Field */
  //             <View style={styles.searchContainer}>
  //               <TextInput
  //                 style={styles.addressInput}
  //                 value={addressSearchQuery}
  //                 onChangeText={setAddressSearchQuery}
  //                 placeholder="Where is your service headquartered?"
  //                 placeholderTextColor="#999"
  //               />
  //               <View style={{ position: 'absolute', right: 0 }}>
  //                 {/* <IconButton
  //                   icon="magnify"
  //                   size={21}
  //                   mode="contained"
  //                   onPress={() => searchAddressPlaces(addressSearchQuery)}
  //                 /> */}
  //               </View>
  //             </View>
  //           )}

  //           {/* Address Search Results */}
  //           {showAddressResults && addressSearchResults.length > 0 && !formData.contact.address && (
  //             <FlatList
  //               data={addressSearchResults}
  //               keyExtractor={(item) => item.place_id}
  //               keyboardShouldPersistTaps="handled"
  //               style={styles.suggestionsList}
  //               renderItem={({ item }) => (
  //                 <TouchableOpacity
  //                   style={styles.suggestionItem}
  //                   onPress={() => handleSelectPlace(item)}
  //                 >
  //                   <Text style={styles.suggestionText}>{item.description}</Text>
  //                 </TouchableOpacity>
  //               )}
  //             />
  //           )}
  //         </View>

  //         {/* Credentials & Coverage */}
  //         <View style={styles.mainSectionHeader}>
  //           <Text style={styles.mainSectionHeaderText}>Credentials & Coverage</Text>
  //         </View>

  //         {/* Licenses */}
  //         <View style={styles.sectionHeader}>
  //           <Text style={styles.sectionHeaderText}>Licenses</Text>
  //           <TouchableOpacity 
  //             style={styles.addButton} 
  //             onPress={() => setShowLicenseForm(true)}
  //           >
  //             <Text style={styles.addButtonText}>+ Add License</Text>
  //           </TouchableOpacity>
  //         </View>

  //         {formData.licenses.map((license, index) => (
  //           <View key={index} style={styles.listItem}>
  //             <View style={styles.itemContent}>
  //               <Text style={styles.itemTitle}>{license.title}</Text>
  //               <Text style={styles.itemDetail}>Issued by: {license.issuer}</Text>
  //               <Text style={styles.itemDetail}>Type: {license.type}</Text>
  //               <Text style={styles.itemDetail}>Scope: {license.scope}</Text>
  //               <Text style={styles.itemDetail}>Licensee: {license.licensee}</Text>
  //             </View>
  //             <TouchableOpacity style={styles.removeItemButton} onPress={() => removeLicense(index)}>
  //               <Text style={styles.removeItemButtonText}>✕</Text>
  //             </TouchableOpacity>
  //           </View>
  //         ))}

  //         {showLicenseForm && (
  //           <View style={styles.subForm}>
  //             <View style={styles.formGroup}>
  //               <Text style={styles.label}>License Title</Text>
  //         <TextInput
  //           style={styles.input}
  //                 value={newLicense.title}
  //                 onChangeText={(text) => setNewLicense({...newLicense, title: text})}
  //                 placeholder="e.g. Plumber Trade Certification"
  //           placeholderTextColor="#999"
  //         />
  //       </View>

  //       <View style={styles.formGroup}>
  //               <Text style={styles.label}>Issuer</Text>
  //               <TextInput
  //                 style={styles.input}
  //                 value={newLicense.issuer}
  //                 onChangeText={(text) => setNewLicense({...newLicense, issuer: text})}
  //                 placeholder="e.g. City of Hollywood"
  //                 placeholderTextColor="#999"
  //               />
  //             </View>

  //             <View style={[styles.formGroup, {zIndex: getZIndex(openLicenseType)}]}>
  //               <Text style={styles.label}>License Type</Text>
  //               <DropDownPicker
  //                 open={openLicenseType}
  //                 value={newLicense.type}
  //                 items={getLicenseTypeItems()}
  //                 setOpen={(value) => handleOpenDropdown(setOpenLicenseType, openLicenseType)}
  //                 setValue={(callback) => {
  //                   const value = callback(newLicense.type);
  //                   setNewLicense({...newLicense, type: value});
  //                 }}
  //                 placeholder="Select"
  //                 style={styles.dropdownStyle}
  //                 textStyle={styles.dropdownTextStyle}
  //                 dropDownContainerStyle={styles.dropdownContainerStyle}
  //                 listItemContainerStyle={styles.dropdownItemStyle}
  //                 listMode="SCROLLVIEW"
  //                 scrollViewProps={{
  //                   nestedScrollEnabled: true,
  //                 }}
  //               />
  //             </View>

  //             <View style={[styles.formGroup, {zIndex: openLicenseType ? -1 : 1}]}>
  //               <Text style={styles.label}>Scope</Text>
  //         <TextInput
  //           style={styles.input}
  //                 value={newLicense.scope}
  //                 onChangeText={(text) => setNewLicense({...newLicense, scope: text})}
  //                 placeholder="e.g. FL.Hollywood"
  //           placeholderTextColor="#999"
  //         />
  //       </View>

  //       <View style={styles.formGroup}>
  //               <Text style={styles.label}>Licensee</Text>
  //               <TextInput
  //                 style={styles.input}
  //                 value={newLicense.licensee}
  //                 onChangeText={(text) => setNewLicense({...newLicense, licensee: text})}
  //                 placeholder="e.g. Westwood Plumbers"
  //                 placeholderTextColor="#999"
  //               />
  //             </View>

  //             <View style={styles.buttonRow}>
  //               <TouchableOpacity style={styles.cancelButton} onPress={() => setShowLicenseForm(false)}>
  //                 <Text style={styles.buttonText}>Cancel</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.saveButton} onPress={addLicense}>
  //                 <Text style={styles.buttonText}>Save</Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         )}

  //         {/* Certifications */}
  //         <View style={styles.sectionHeader}>
  //           <Text style={styles.sectionHeaderText}>Certifications</Text>
  //         </View>

  //         <View style={styles.formGroup}>
  //           <Text style={styles.label}>Add Certification</Text>
  //           <View style={styles.rowContainer}>
  //             <TextInput
  //               style={[styles.input, { flex: 1 }]}
  //               placeholder="e.g. Florida certified plumber"
  //               placeholderTextColor="#999"
  //               value={certificationInput}
  //               onChangeText={setCertificationInput}
  //               onSubmitEditing={handleAddCertification}
  //             />
  //             {certificationInput ? (
  //               <TouchableOpacity 
  //                 style={styles.clearButton} 
  //                 onPress={() => setCertificationInput('')}
  //               >
  //                 <Text style={styles.clearButtonText}>✕</Text>
  //               </TouchableOpacity>
  //             ) : null}
  //             <TouchableOpacity 
  //               style={[styles.addSmallButton, !certificationInput.trim() && styles.addButtonDisabled]} 
  //               onPress={handleAddCertification}
  //               disabled={!certificationInput.trim()}
  //             >
  //               <Text style={styles.buttonText}>Add</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>

  //         {formData.certifications.map((cert, index) => (
  //           <View key={index} style={styles.listItem}>
  //             <View style={styles.itemContent}>
  //               <Text style={styles.itemTitle}>{cert}</Text>
  //             </View>
  //             <TouchableOpacity
  //               style={styles.removeItemButton}
  //               onPress={() => {
  //                 const updatedCertifications = [...formData.certifications];
  //                 updatedCertifications.splice(index, 1);
  //                 setFormData({...formData, certifications: updatedCertifications});
  //               }}
  //             >
  //               <Text style={styles.removeItemButtonText}>✕</Text>
  //             </TouchableOpacity>
  //           </View>
  //         ))}

  //         {/* Insurances */}
  //         <View style={styles.sectionHeader}>
  //           <Text style={styles.sectionHeaderText}>Insurances</Text>
  //           <TouchableOpacity 
  //             style={styles.addButton} 
  //             onPress={() => setShowInsuranceForm(true)}
  //           >
  //             <Text style={styles.addButtonText}>+ Add Insurance</Text>
  //           </TouchableOpacity>
  //         </View>

  //         {formData.insurances.map((insurance, index) => (
  //           <View key={index} style={styles.listItem}>
  //             <View style={styles.itemContent}>
  //               <Text style={styles.itemTitle}>{insurance.type}</Text>
  //               <Text style={styles.itemDetail}>Coverage: {insurance.coverage}</Text>
  //               <Text style={styles.itemDetail}>Issuer: {insurance.issuer}</Text>
  //             </View>
  //             <TouchableOpacity style={styles.removeItemButton} onPress={() => removeInsurance(index)}>
  //               <Text style={styles.removeItemButtonText}>✕</Text>
  //             </TouchableOpacity>
  //           </View>
  //         ))}

  //         {showInsuranceForm && (
  //           <View style={styles.subForm}>
  //             <View style={[styles.formGroup, {zIndex: getZIndex(openInsuranceType)}]}>
  //               <Text style={styles.label}>Insurance Type</Text>
  //               <DropDownPicker
  //                 open={openInsuranceType}
  //                 value={newInsurance.type}
  //                 items={getInsuranceTypeItems()}
  //                 setOpen={(value) => handleOpenDropdown(setOpenInsuranceType, openInsuranceType)}
  //                 setValue={(callback) => {
  //                   const value = callback(newInsurance.type);
  //                   setNewInsurance({...newInsurance, type: value});
  //                 }}
  //                 placeholder="Select"
  //                 style={styles.dropdownStyle}
  //                 textStyle={styles.dropdownTextStyle}
  //                 dropDownContainerStyle={styles.dropdownContainerStyle}
  //                 listItemContainerStyle={styles.dropdownItemStyle}
  //                 listMode="SCROLLVIEW"
  //                 scrollViewProps={{
  //                   nestedScrollEnabled: true,
  //                 }}
  //               />
  //             </View>

  //             <View style={[styles.formGroup, {zIndex: getZIndex(openInsuranceCoverage)}]}>
  //               <Text style={styles.label}>Coverage</Text>
  //               <DropDownPicker
  //                 open={openInsuranceCoverage}
  //                 value={newInsurance.coverage}
  //                 items={getInsuranceCoverageItems()}
  //                 setOpen={(value) => handleOpenDropdown(setOpenInsuranceCoverage, openInsuranceCoverage)}
  //                 setValue={(callback) => {
  //                   const value = callback(newInsurance.coverage);
  //                   if (value === 'custom') {
  //                     handleCustomCoverage();
  //                   } else {
  //                     setNewInsurance({...newInsurance, coverage: value});
  //                   }
  //                 }}
  //                 placeholder="Select"
  //                 style={styles.dropdownStyle}
  //                 textStyle={styles.dropdownTextStyle}
  //                 dropDownContainerStyle={styles.dropdownContainerStyle}
  //                 listItemContainerStyle={styles.dropdownItemStyle}
  //                 zIndex={openInsuranceType ? 998 : 999}
  //                 zIndexInverse={openInsuranceType ? 999 : 998}
  //                 listMode="SCROLLVIEW"
  //                 scrollViewProps={{
  //                   nestedScrollEnabled: true,
  //                 }}
  //               />
  //             </View>

  //             <View style={[styles.formGroup, {zIndex: (openInsuranceType || openInsuranceCoverage) ? -1 : 1}]}>
  //               <Text style={styles.label}>Issuer</Text>
  //         <TextInput
  //           style={styles.input}
  //                 value={newInsurance.issuer}
  //                 onChangeText={(text) => setNewInsurance({...newInsurance, issuer: text})}
  //                 placeholder="e.g. Lloyds"
  //           placeholderTextColor="#999"
  //               />
  //             </View>

  //             <View style={styles.buttonRow}>
  //               <TouchableOpacity style={styles.cancelButton} onPress={() => setShowInsuranceForm(false)}>
  //                 <Text style={styles.buttonText}>Cancel</Text>
  //               </TouchableOpacity>
  //               <TouchableOpacity style={styles.saveButton} onPress={addInsurance}>
  //                 <Text style={styles.buttonText}>Save</Text>
  //               </TouchableOpacity>
  //             </View>
  //           </View>
  //         )}

  //         {/* Custom Coverage Modal */}
  //         <Modal
  //           visible={showCustomCoverageModal}
  //           transparent={true}
  //           animationType="fade"
  //           onRequestClose={() => setShowCustomCoverageModal(false)}
  //         >
  //           <View style={styles.modalOverlay}>
  //             <View style={styles.modalContent}>
  //               <Text style={styles.modalTitle}>Custom Coverage Amount</Text>

  //               <View style={styles.modalForm}>
  //                 <View style={styles.modalInputRow}>
  //                   <TextInput
  //                     style={styles.modalInput}
  //                     value={customCoverageAmount}
  //                     onChangeText={(text) => {
  //                       if (/^(\d+)?(\.\d*)?$/.test(text) || text === '') {
  //                         setCustomCoverageAmount(text);
  //                       }
  //                     }}
  //                     placeholder="Enter amount"
  //                     placeholderTextColor="#999"
  //                     keyboardType="numeric"
  //                   />

  //                   <View style={[styles.modalDropdown, {zIndex: getZIndex(openCustomCoverageUnit)}]}>
  //                     <DropDownPicker
  //                       open={openCustomCoverageUnit}
  //                       value={customCoverageUnit}
  //                       items={getCoverageUnitItems()}
  //                       setOpen={setOpenCustomCoverageUnit}
  //                       setValue={(callback) => {
  //                         const value = callback(customCoverageUnit);
  //                         setCustomCoverageUnit(value);
  //                       }}
  //                       placeholder="Select"
  //                       style={styles.dropdownStyle}
  //                       textStyle={styles.dropdownTextStyle}
  //                       dropDownContainerStyle={styles.dropdownContainerStyle}
  //                       listItemContainerStyle={styles.dropdownItemStyle}
  //                     />
  //                   </View>
  //                 </View>

  //                 <View style={styles.modalButtons}>
  //                   <TouchableOpacity
  //                     style={styles.modalCancelButton}
  //                     onPress={() => setShowCustomCoverageModal(false)}
  //                   >
  //                     <Text style={styles.modalCancelButtonText}>Cancel</Text>
  //                   </TouchableOpacity>

  //                   <TouchableOpacity
  //                     style={[
  //                       styles.modalSaveButton,
  //                       (!customCoverageAmount || customCoverageAmount === '0') && styles.modalButtonDisabled
  //                     ]}
  //                     onPress={saveCustomCoverage}
  //                     disabled={!customCoverageAmount || customCoverageAmount === '0'}
  //                   >
  //                     <Text style={styles.modalSaveButtonText}>Save</Text>
  //                   </TouchableOpacity>
  //                 </View>
  //               </View>
  //             </View>
  //           </View>
  //         </Modal>

  //         {/* Photos */}
  //         <View style={styles.mainSectionHeader}>
  //           <Text style={styles.mainSectionHeaderText}>Photos</Text>
  //         </View>

  //         {/* <PhotoAlbum
  //           photos={photos}
  //           onPhotoChange={setPhotos}
  //           maxPhotos={8}
  //           containerStyle={{ paddingHorizontal: 16 }}
  //         /> */}
  //         <TouchableOpacity 
  //           style={styles.submitButton}
  //           onPress={handleSubmit}
  //         >
  //           <Text style={styles.submitButtonText}>Create Offering</Text>
  //         </TouchableOpacity>

  //       </View>
  //     </View>
  //   );
};

// Local styles for the PlumbingForm component
var localStyles = _reactNative.StyleSheet.create({
  // Original styles from parent should remain in parent
  container: {
    flex: 1
  },
  // Dropdown-specific styles
  dropdownStyle: {
    backgroundColor: '#f5f5f5',
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
    borderColor: '#ddd'
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
    justifyContent: 'flex-end',
    marginTop: 16
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginLeft: 10
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14
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
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  modalForm: {
    marginBottom: 20
  },
  modalInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  modalInput: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5
  },
  modalDropdown: {
    width: 140,
    marginLeft: 10
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
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4
  },
  requiredStar: {
    color: 'red',
    fontWeight: 'bold'
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  switchLabel: {
    marginLeft: 8
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
    height: 56
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
    position: 'absolute',
    right: 8,
    backgroundColor: '#e8e3f8',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end'
  }
});
var _default = exports["default"] = PlumbingForm;
