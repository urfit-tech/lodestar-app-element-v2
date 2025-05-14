import I from "./index.es164.js";
import N from "./index.es165.js";
import A from "./index.es166.js";
import D from "./index.es167.js";
import o from "./index.es163.js";
import f from "./index.es168.js";
import h from "./index.es169.js";
var _ = ["category", "action", "label", "value", "nonInteraction", "transport"];
function C(e, t) {
  if (e == null) return {};
  var r = G(e, t), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function G(e, t) {
  if (e == null) return {};
  var r = {}, n = Object.keys(e), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
function S(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? S(Object(r), !0).forEach(function(n) {
      L(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : S(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function L(e, t, r) {
  return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
}
function v(e) {
  "@babel/helpers - typeof";
  return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, v(e);
}
function z(e) {
  return W(e) || V(e) || F(e) || M();
}
function M() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function F(e, t) {
  if (e) {
    if (typeof e == "string") return O(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set") return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return O(e, t);
  }
}
function V(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function W(e) {
  if (Array.isArray(e)) return O(e);
}
function O(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
var T = typeof window > "u" || typeof document > "u", s = !1, q = !0, E = !1, j = !0, P = !0, m = function() {
  var t;
  return E ? h.ga.apply(h, arguments) : T ? !1 : window.ga ? (t = window).ga.apply(t, arguments) : o("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually");
};
function y(e) {
  return I(e, q, P);
}
function w(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var a = r[0];
  if (typeof m == "function") {
    if (typeof a != "string") {
      o("ga command must be a string");
      return;
    }
    (j || !Array.isArray(e)) && m.apply(void 0, r), Array.isArray(e) && e.forEach(function(i) {
      m.apply(void 0, z(["".concat(i, ".").concat(a)].concat(r.slice(1))));
    });
  }
}
function x(e, t) {
  if (!e) {
    o("gaTrackingID is required in initialize()");
    return;
  }
  t && (t.debug && t.debug === !0 && (s = !0), t.titleCase === !1 && (q = !1), t.redactEmail === !1 && (P = !1), t.useExistingGa) || (t && t.gaOptions ? m("create", e, t.gaOptions) : m("create", e, "auto"));
}
function B(e, t) {
  return Array.isArray(e) ? e.forEach(function(r) {
    if (v(r) !== "object") {
      o("All configs must be an object");
      return;
    }
    x(r.trackingId, r);
  }) : x(e, t), !0;
}
function H(e, t) {
  if (t && t.testMode === !0)
    E = !0;
  else {
    if (T)
      return;
    (!t || t.standardImplementation !== !0) && D(t);
  }
  j = t && typeof t.alwaysSendToDefaultTracker == "boolean" ? t.alwaysSendToDefaultTracker : !0, B(e, t);
}
function c() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.length > 0 && (m.apply(void 0, t), s && (f("called ga('arguments');"), f("with arguments: ".concat(JSON.stringify(t))))), window.ga;
}
function K(e, t) {
  if (!e) {
    o("`fieldsObject` is required in .set()");
    return;
  }
  if (v(e) !== "object") {
    o("Expected `fieldsObject` arg to be an Object");
    return;
  }
  Object.keys(e).length === 0 && o("empty `fieldsObject` given to .set()"), w(t, "set", e), s && (f("called ga('set', fieldsObject);"), f("with fieldsObject: ".concat(JSON.stringify(e))));
}
function b(e, t) {
  w(t, "send", e), s && (f("called ga('send', fieldObject);"), f("with fieldObject: ".concat(JSON.stringify(e))), f("with trackers: ".concat(JSON.stringify(t))));
}
function R(e, t, r) {
  if (!e) {
    o("path is required in .pageview()");
    return;
  }
  var n = A(e);
  if (n === "") {
    o("path cannot be an empty string in .pageview()");
    return;
  }
  var a = {};
  if (r && (a.title = r), typeof c == "function" && (w(t, "send", J({
    hitType: "pageview",
    page: n
  }, a)), s)) {
    f("called ga('send', 'pageview', path);");
    var i = "";
    r && (i = " and title: ".concat(r)), f("with path: ".concat(n).concat(i));
  }
}
function U(e, t) {
  if (!e) {
    o("modalName is required in .modalview(modalName)");
    return;
  }
  var r = N(A(e));
  if (r === "") {
    o("modalName cannot be an empty string or a single / in .modalview()");
    return;
  }
  if (typeof c == "function") {
    var n = "/modal/".concat(r);
    w(t, "send", "pageview", n), s && (f("called ga('send', 'pageview', path);"), f("with path: ".concat(n)));
  }
}
function $() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.category, r = e.variable, n = e.value, a = e.label, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  if (typeof c == "function") {
    if (!t || !r || typeof n != "number") {
      o("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");
      return;
    }
    var u = {
      hitType: "timing",
      timingCategory: y(t),
      timingVar: y(r),
      timingValue: n
    };
    a && (u.timingLabel = y(a)), b(u, i);
  }
}
function k() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.category, r = e.action, n = e.label, a = e.value, i = e.nonInteraction, u = e.transport, l = C(e, _), g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  if (typeof c == "function") {
    if (!t || !r) {
      o("args.category AND args.action are required in event()");
      return;
    }
    var d = {
      hitType: "event",
      eventCategory: y(t),
      eventAction: y(r)
    };
    n && (d.eventLabel = y(n)), typeof a < "u" && (typeof a != "number" ? o("Expected `args.value` arg to be a Number.") : d.eventValue = a), typeof i < "u" && (typeof i != "boolean" ? o("`args.nonInteraction` must be a boolean.") : d.nonInteraction = i), typeof u < "u" && (typeof u != "string" ? o("`args.transport` must be a string.") : (["beacon", "xhr", "image"].indexOf(u) === -1 && o("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), d.transport = u)), Object.keys(l).filter(function(p) {
      return p.substr(0, 9) === "dimension";
    }).forEach(function(p) {
      d[p] = l[p];
    }), Object.keys(l).filter(function(p) {
      return p.substr(0, 6) === "metric";
    }).forEach(function(p) {
      d[p] = l[p];
    }), b(d, g);
  }
}
function Q(e, t) {
  var r = e.description, n = e.fatal;
  if (typeof c == "function") {
    var a = {
      hitType: "exception"
    };
    r && (a.exDescription = y(r)), typeof n < "u" && (typeof n != "boolean" ? o("`args.fatal` must be a boolean.") : a.exFatal = n), b(a, t);
  }
}
var X = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   * @param trackerName {String} optional e.g 'trackerName'
   */
  require: function(t, r, n) {
    if (typeof c == "function") {
      if (!t) {
        o("`name` is required in .require()");
        return;
      }
      var a = A(t);
      if (a === "") {
        o("`name` cannot be an empty string in .require()");
        return;
      }
      var i = n ? "".concat(n, ".require") : "require";
      if (r) {
        if (v(r) !== "object") {
          o("Expected `options` arg to be an Object");
          return;
        }
        Object.keys(r).length === 0 && o("Empty `options` given to .require()"), c(i, a, r), s && f("called ga('require', '".concat(a, "', ").concat(JSON.stringify(r)));
      } else
        c(i, a), s && f("called ga('require', '".concat(a, "');"));
    }
  },
  /**
   * execute:
   * GA execute action for plugin
   * Takes variable number of arguments
   * @param pluginName {String} e.g. 'ecommerce' or 'myplugin'
   * @param action {String} e.g. 'addItem' or 'myCustomAction'
   * @param actionType {String} optional e.g. 'detail'
   * @param payload {Object} optional e.g { id: '1x5e', name : 'My product to track' }
   */
  execute: function(t, r) {
    for (var n, a, i = arguments.length, u = new Array(i > 2 ? i - 2 : 0), l = 2; l < i; l++)
      u[l - 2] = arguments[l];
    if (u.length === 1 ? n = u[0] : (a = u[0], n = u[1]), typeof c == "function")
      if (typeof t != "string")
        o("Expected `pluginName` arg to be a String.");
      else if (typeof r != "string")
        o("Expected `action` arg to be a String.");
      else {
        var g = "".concat(t, ":").concat(r);
        n = n || null, a && n ? (c(g, a, n), s && (f("called ga('".concat(g, "');")), f('actionType: "'.concat(a, '" with payload: ').concat(JSON.stringify(n))))) : n ? (c(g, n), s && (f("called ga('".concat(g, "');")), f("with payload: ".concat(JSON.stringify(n))))) : (c(g), s && f("called ga('".concat(g, "');")));
      }
  }
};
function Y(e, t, r) {
  if (typeof t != "function") {
    o("hitCallback function is required");
    return;
  }
  if (typeof c == "function") {
    if (!e || !e.label) {
      o("args.label is required in outboundLink()");
      return;
    }
    var n = {
      hitType: "event",
      eventCategory: "Outbound",
      eventAction: "Click",
      eventLabel: y(e.label)
    }, a = !1, i = function() {
      a = !0, t();
    }, u = setTimeout(i, 250), l = function() {
      clearTimeout(u), a || t();
    };
    n.hitCallback = l, b(n, r);
  } else
    setTimeout(t, 0);
}
var oe = h;
const fe = {
  initialize: H,
  ga: c,
  set: K,
  send: b,
  pageview: R,
  modalview: U,
  timing: $,
  event: k,
  exception: Q,
  plugin: X,
  outboundLink: Y,
  testModeAPI: h
};
export {
  B as addTrackers,
  fe as default,
  k as event,
  Q as exception,
  c as ga,
  H as initialize,
  U as modalview,
  Y as outboundLink,
  R as pageview,
  X as plugin,
  b as send,
  K as set,
  oe as testModeAPI,
  $ as timing
};
//# sourceMappingURL=index.es112.js.map
