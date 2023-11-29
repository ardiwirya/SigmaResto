"use strict";
(self["webpackChunksigmaresto"] = self["webpackChunksigmaresto"] || []).push([[924],{

/***/ 6042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FavoriteRestaurantSearchPresenter = /*#__PURE__*/function () {
  function FavoriteRestaurantSearchPresenter(_ref) {
    var favoriteRestaurants = _ref.favoriteRestaurants,
      view = _ref.view;
    _classCallCheck(this, FavoriteRestaurantSearchPresenter);
    this._view = view;
    this._listenToSearchRequestByUser();
    this._favoriteRestaurants = favoriteRestaurants;
  }
  _createClass(FavoriteRestaurantSearchPresenter, [{
    key: "_listenToSearchRequestByUser",
    value: function _listenToSearchRequestByUser() {
      var _this = this;
      this._view.runWhenUserIsSearching(function (latestQuery) {
        _this._searchRestaurant(latestQuery);
      });
    }
  }, {
    key: "_searchRestaurant",
    value: function () {
      var _searchRestaurant2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(latestQuery) {
        var foundRestaurants;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this._latestQuery = latestQuery.trim();
              if (!(this.latestQuery.length > 0)) {
                _context.next = 7;
                break;
              }
              _context.next = 4;
              return this._favoriteRestaurants.searchRestaurants(this.latestQuery);
            case 4:
              foundRestaurants = _context.sent;
              _context.next = 10;
              break;
            case 7:
              _context.next = 9;
              return this._favoriteRestaurants.getAllRestaurants();
            case 9:
              foundRestaurants = _context.sent;
            case 10:
              this._showFoundRestaurants(foundRestaurants);
            case 11:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _searchRestaurant(_x) {
        return _searchRestaurant2.apply(this, arguments);
      }
      return _searchRestaurant;
    }()
  }, {
    key: "_showFoundRestaurants",
    value: function _showFoundRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    }
  }, {
    key: "latestQuery",
    get: function get() {
      return this._latestQuery;
    }
  }]);
  return FavoriteRestaurantSearchPresenter;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestaurantSearchPresenter);

/***/ }),

/***/ 4768:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4150);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var FavoriteRestaurantSearchView = /*#__PURE__*/function () {
  function FavoriteRestaurantSearchView() {
    _classCallCheck(this, FavoriteRestaurantSearchView);
  }
  _createClass(FavoriteRestaurantSearchView, [{
    key: "getTemplate",
    value: function getTemplate() {
      return "\n      <div class=\"loader-container\" id=\"loader-container\">\n      <div id=\"loader\"></div>\n    </div> \n      <div class=\"content\">\n        <h2 class=\"content__heading\">Your Favorite Restaurant</h2>\n        <div class=\"search\">\n        <input id=\"query\" type=\"text\" placeholder=\"Search Favorite Restaurant...\">\n        </div>\n          <div id=\"lists\" class=\"lists\">\n        </div>\n    </div>\n      ";
    }
  }, {
    key: "runWhenUserIsSearching",
    value: function runWhenUserIsSearching(callback) {
      document.getElementById('query').addEventListener('change', function (event) {
        callback(event.target.value);
      });
    }
  }, {
    key: "showRestaurants",
    value: function showRestaurants(restaurants) {
      this._showFavoriteRestaurants(restaurants);
    }
  }, {
    key: "showFavoriteRestaurants",
    value: function showFavoriteRestaurants() {
      var restaurants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var html;
      if (restaurants.length) {
        html = restaurants.reduce(function (carry, restaurant) {
          return carry.concat((0,_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__/* .createRestaurantListTemplate */ .gH)(restaurant));
        }, '');
      } else {
        html = this._getEmptyRestaurantTemplate();
      }
      document.getElementById('lists').innerHTML = html;
      document.getElementById('lists').dispatchEvent(new Event('lists:updated'));
    }
  }, {
    key: "_getEmptyRestaurantTemplate",
    value: function _getEmptyRestaurantTemplate() {
      return '<div class="restaurant-item__not__found">No Favorite Restaurant:)</div>';
    }
  }]);
  return FavoriteRestaurantSearchView;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestaurantSearchView);

/***/ }),

/***/ 6840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FavoriteRestuarantShowPresenter = /*#__PURE__*/function () {
  function FavoriteRestuarantShowPresenter(_ref) {
    var view = _ref.view,
      favoriteRestaurants = _ref.favoriteRestaurants;
    _classCallCheck(this, FavoriteRestuarantShowPresenter);
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;
    this._showFavoriteRestaurants();
  }
  _createClass(FavoriteRestuarantShowPresenter, [{
    key: "_showFavoriteRestaurants",
    value: function () {
      var _showFavoriteRestaurants2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var restaurants;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this._favoriteRestaurants.getAllRestaurants();
            case 2:
              restaurants = _context.sent;
              this._displayRestaurants(restaurants);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function _showFavoriteRestaurants() {
        return _showFavoriteRestaurants2.apply(this, arguments);
      }
      return _showFavoriteRestaurants;
    }()
  }, {
    key: "_displayRestaurants",
    value: function _displayRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    }
  }]);
  return FavoriteRestuarantShowPresenter;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavoriteRestuarantShowPresenter);

/***/ }),

/***/ 4150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$G": () => (/* binding */ createCustomerReviewFormTemplate),
/* harmony export */   "Cx": () => (/* binding */ createCustomerReviewTemplate),
/* harmony export */   "HR": () => (/* binding */ createUnlikeRestaurantButtonTemplate),
/* harmony export */   "SF": () => (/* binding */ createLikeRestaurantButtonTemplate),
/* harmony export */   "YF": () => (/* binding */ createRestaurantDetailTemplate),
/* harmony export */   "gH": () => (/* binding */ createRestaurantListTemplate)
/* harmony export */ });
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9699);
/* harmony import */ var _utils_detail_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6743);
/* eslint-disable import/no-cycle */


var createRestaurantDetailTemplate = function createRestaurantDetailTemplate(restaurant) {
  return "\n<img class=\"restaurant-picture lazyload\" crossorigin=\"anonymous\" alt=\"".concat(restaurant.name, "\" data-src=\"").concat(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].BASE_IMAGE_URL */ .Z.BASE_IMAGE_URL + restaurant.pictureId, "\" tabindex=\"0\" >\n<div class=\"detailRestaurant\">\n    <div class=\"detailRestaurant-info\">\n        <div class=\"detailRestaurant-name\">\n            <h2><i class=\"fas fa-store\"></i> Restaurant Name</h2>\n            <p class=\"list-item__title\">").concat(restaurant.name, "</p>\n        </div>\n        <div class=\"detailRestaurant-address\">\n            <h2><i class=\"far fa-compass\"></i> Address</h2>\n            <p>").concat(restaurant.address, ", ").concat(restaurant.city, "</p>\n        </div>\n        <div class=\"detailRestaurant-rate\">\n            <h2><i class=\"far fa-star\"></i> Rating</h2>\n            <p>").concat(restaurant.rating, "</p>\n        </div>\n    </div>\n    <h2 class=\"restaurant-description-title\">Description</h2>\n    <p class=\"restaurant-description\">").concat(restaurant.description, "</p>\n</div>\n<div class=\"restaurant-categories\">\n    ").concat(restaurant.categories.map(function (category) {
    return "<span class=\"restaurant-category-title\">".concat(category.name, "</span>");
  }).join(''), "\n</div>\n\n<div class=\"detailRestaurant-menu\">\n    <h2>Menu</h2>\n\n    <div class=\"restaurant-menu\">\n        <ul>\n            <h3>Food</h3>\n            ").concat(restaurant.menus.foods.map(function (food) {
    return "<li><p><i class=\"fa-solid fa-utensils\"></i>  ".concat(food.name, "</p></li>");
  }).join(''), "\n        </ul>\n\n        <ul>\n            <h3>Beverage</h3>\n            ").concat(restaurant.menus.drinks.map(function (drink) {
    return "<li><p><i class=\"fas fa-cocktail\"></i>  ".concat(drink.name, "</p></li>");
  }).join(''), "\n        </ul>\n    </div>\n</div>\n<h2 class=\"restaurant-review-title\">Customers Review</h2>\n").concat(_utils_detail_helper__WEBPACK_IMPORTED_MODULE_1__/* ["default"].eachCustomerReview */ .Z.eachCustomerReview(restaurant), "\n");
};
var createCustomerReviewTemplate = function createCustomerReviewTemplate(customerReview) {
  return "\n<div class=\"detailRestaurant-review\">\n    <div class=\"restaurant-review\" id=\"restaurant-review\">\n        <div class=\"review-header\">\n            <p class=\"review-name\"><i class=\"far fa-user\"></i>  ".concat(customerReview.name, "</p>\n            <p class=\"review-date\">").concat(customerReview.date, "</p>\n        </div>\n        <div class=\"review-comment\">\n            <p><i class=\"far fa-comment\"></i>  ").concat(customerReview.review, "</p>\n        </div>\n    </div>\n");
};
var createRestaurantListTemplate = function createRestaurantListTemplate(restaurant) {
  return "\n    <article class=\"list-item\">\n    <a href=\"#/detail/".concat(restaurant.id, "\">\n          <div class=\"list-thumbnail\">\n              <img class=\"list-item__thumbnail lazyload\" tabindex=\"0\" class=\"card-image\" crossorigin=\"anonymous\" alt=\"").concat(restaurant.name || '-', "\" data-src=\"").concat(_global_config__WEBPACK_IMPORTED_MODULE_0__/* ["default"].BASE_IMAGE_URL */ .Z.BASE_IMAGE_URL + restaurant.pictureId, "\"/>\n              <p class=\"list-item_rate\"><i title=\"ratings\" class=\"fa fa-star card-rating\"></i>  ").concat(restaurant.rating || '-', "</p>\n          </div>\n          <div class=\"list-item__content\">\n              <p class=\"list-city\"> ").concat(restaurant.city || '-', "</p>\n              <h2 class=\"list-item__title\">").concat(restaurant.name || '-', "</h2>\n              <p class=\"list-item__description\">").concat(restaurant.description || '-', "...</p>\n          </div>\n    </a>\n    </article>\n");
};
var createCustomerReviewFormTemplate = function createCustomerReviewFormTemplate() {
  return "<form class=\"form-review\" id=\"form-review\">\n<h2>Submit Your Review</h2>\n<div class=\"form-group\">\n    <label for=\"inputName\">Name:</label>\n    <input id=\"inputName\" type=\"text\" class=\"form-control\" placeholder=\"Your Name...\">\n</div>\n<div class=\"form-group\">\n    <label for=\"inputReview\">Review:</label>\n    <input id=\"inputReview\" type=\"text\" class=\"form-control\" placeholder=\"Your Review...\">\n</div>\n<div class=\"form-group\">\n    <button id=\"submitReview\" type=\"submit\" class=\"submitReview\">Submit</button>\n</div>\n</form>\n";
};
var createLikeRestaurantButtonTemplate = function createLikeRestaurantButtonTemplate() {
  return "\n  <button aria-label=\"like this restaurant\" id=\"likeButton\" class=\"like\">\n  <i class=\"far fa-heart\" aria-hidden=\"true\"></i>\n  </button>\n";
};
var createUnlikeRestaurantButtonTemplate = function createUnlikeRestaurantButtonTemplate() {
  return "\n  <button aria-label=\"unlike this restaurant\" id=\"likeButton\" class=\"like\">\n  <i class=\"fas fa-heart\" aria-hidden=\"true\"></i>\n  </button>\n";
};


/***/ })

}]);
//# sourceMappingURL=app~309f7e27.bundle.js.map