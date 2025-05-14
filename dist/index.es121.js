import L, { Component as E } from "react";
import c from "./index.es191.js";
import R from "./index.es192.js";
function p(e) {
  "@babel/helpers - typeof";
  return p = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, p(e);
}
var C = ["to", "target"];
function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? m(Object(n), !0).forEach(function(r) {
      y(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function D(e, t) {
  if (e == null) return {};
  var n = N(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function N(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function T(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function x(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function I(e, t, n) {
  return t && x(e.prototype, t), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function K(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && s(e, t);
}
function s(e, t) {
  return s = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, s(e, t);
}
function $(e) {
  var t = W();
  return function() {
    var r = l(e), o;
    if (t) {
      var i = l(this).constructor;
      o = Reflect.construct(r, arguments, i);
    } else
      o = r.apply(this, arguments);
    return B(this, o);
  };
}
function B(e, t) {
  if (t && (p(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return P(e);
}
function P(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function W() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function l(e) {
  return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, l(e);
}
function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var d = "_blank", q = 1, b = /* @__PURE__ */ function(e) {
  K(n, e);
  var t = $(n);
  function n() {
    var r;
    T(this, n);
    for (var o = arguments.length, i = new Array(o), u = 0; u < o; u++)
      i[u] = arguments[u];
    return r = t.call.apply(t, [this].concat(i)), y(P(r), "handleClick", function(f) {
      var a = r.props, _ = a.target, w = a.eventLabel, k = a.to, O = a.onClick, h = a.trackerNames, g = {
        label: w
      }, j = _ !== d, S = !(f.ctrlKey || f.shiftKey || f.metaKey || f.button === q);
      j && S ? (f.preventDefault(), n.trackLink(g, function() {
        window.location.href = k;
      }, h)) : n.trackLink(g, function() {
      }, h), O && O(f);
    }), r;
  }
  return I(n, [{
    key: "render",
    value: function() {
      var o = this.props, i = o.to, u = o.target, f = D(o, C), a = v(v({}, f), {}, {
        target: u,
        href: i,
        onClick: this.handleClick
      });
      return u === d && (a.rel = "".concat(a.rel ? a.rel : "", " noopener noreferrer").trim()), delete a.eventLabel, delete a.trackerNames, /* @__PURE__ */ L.createElement("a", a);
    }
  }]), n;
}(E);
y(b, "trackLink", function() {
  R("ga tracking not enabled");
});
b.propTypes = {
  eventLabel: c.string.isRequired,
  target: c.string,
  to: c.string,
  onClick: c.func,
  trackerNames: c.arrayOf(c.string)
};
b.defaultProps = {
  target: null,
  to: null,
  onClick: null,
  trackerNames: null
};
export {
  b as default
};
//# sourceMappingURL=index.es121.js.map
