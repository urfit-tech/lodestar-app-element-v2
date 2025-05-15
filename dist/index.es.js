import vo, { Component as nh, createContext as gn, useContext as Af, useState as on, useMemo as dr, useEffect as sn, useCallback as ih } from "react";
import { visit as Xe, BREAK as bo, Kind as Te, print as ah, isSelectionNode as is, parse as oh, OperationTypeNode as sh } from "graphql";
import { createClient as uh } from "graphql-ws";
import ch from "libphonenumber-js";
import fh from "query-string";
import { css as lh, ThemeProvider as dh } from "styled-components";
import { useToast as hh, useTheme as ph, extendTheme as yh, ChakraProvider as mh } from "@chakra-ui/react";
import gh from "@fingerprintjs/fingerprintjs";
import vh from "ajv";
import { defineMessages as ye, useIntl as bh, IntlProvider as Eh } from "react-intl";
function wh(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in t)) {
          const a = Object.getOwnPropertyDescriptor(n, i);
          a && Object.defineProperty(t, i, a.get ? a : {
            enumerable: !0,
            get: () => n[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var as = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vn(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function _h(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(n) {
    var i = Object.getOwnPropertyDescriptor(t, n);
    Object.defineProperty(r, n, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[n];
      }
    });
  }), r;
}
var Cr = { exports: {} }, tr = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var os;
function Sh() {
  if (os) return tr;
  os = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function r(n, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: t,
      type: n,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return tr.Fragment = e, tr.jsx = r, tr.jsxs = r, tr;
}
var rr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ss;
function Oh() {
  return ss || (ss = 1, process.env.NODE_ENV !== "production" && function() {
    function t(O) {
      if (O == null) return null;
      if (typeof O == "function")
        return O.$$typeof === G ? null : O.displayName || O.name || null;
      if (typeof O == "string") return O;
      switch (O) {
        case v:
          return "Fragment";
        case g:
          return "Profiler";
        case b:
          return "StrictMode";
        case P:
          return "Suspense";
        case C:
          return "SuspenseList";
        case Y:
          return "Activity";
      }
      if (typeof O == "object")
        switch (typeof O.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), O.$$typeof) {
          case m:
            return "Portal";
          case w:
            return (O.displayName || "Context") + ".Provider";
          case _:
            return (O._context.displayName || "Context") + ".Consumer";
          case A:
            var E = O.render;
            return O = O.displayName, O || (O = E.displayName || E.name || "", O = O !== "" ? "ForwardRef(" + O + ")" : "ForwardRef"), O;
          case B:
            return E = O.displayName || null, E !== null ? E : t(O.type) || "Memo";
          case L:
            E = O._payload, O = O._init;
            try {
              return t(O(E));
            } catch {
            }
        }
      return null;
    }
    function e(O) {
      return "" + O;
    }
    function r(O) {
      try {
        e(O);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var R = E.error, I = typeof Symbol == "function" && Symbol.toStringTag && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return R.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          I
        ), e(O);
      }
    }
    function n(O) {
      if (O === v) return "<>";
      if (typeof O == "object" && O !== null && O.$$typeof === L)
        return "<...>";
      try {
        var E = t(O);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var O = J.A;
      return O === null ? null : O.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(O) {
      if (z.call(O, "key")) {
        var E = Object.getOwnPropertyDescriptor(O, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return O.key !== void 0;
    }
    function s(O, E) {
      function R() {
        M || (M = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      R.isReactWarning = !0, Object.defineProperty(O, "key", {
        get: R,
        configurable: !0
      });
    }
    function u() {
      var O = t(this.type);
      return N[O] || (N[O] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), O = this.props.ref, O !== void 0 ? O : null;
    }
    function f(O, E, R, I, U, W, Z, X) {
      return R = W.ref, O = {
        $$typeof: y,
        type: O,
        key: E,
        props: W,
        _owner: U
      }, (R !== void 0 ? R : null) !== null ? Object.defineProperty(O, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(O, "ref", { enumerable: !1, value: null }), O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(O, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(O, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.defineProperty(O, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    }
    function c(O, E, R, I, U, W, Z, X) {
      var K = E.children;
      if (K !== void 0)
        if (I)
          if (ee(K)) {
            for (I = 0; I < K.length; I++)
              l(K[I]);
            Object.freeze && Object.freeze(K);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else l(K);
      if (z.call(E, "key")) {
        K = t(O);
        var te = Object.keys(E).filter(function(ue) {
          return ue !== "key";
        });
        I = 0 < te.length ? "{key: someKey, " + te.join(": ..., ") + ": ...}" : "{key: someKey}", V[K + I] || (te = 0 < te.length ? "{" + te.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          I,
          K,
          te,
          K
        ), V[K + I] = !0);
      }
      if (K = null, R !== void 0 && (r(R), K = "" + R), o(E) && (r(E.key), K = "" + E.key), "key" in E) {
        R = {};
        for (var ie in E)
          ie !== "key" && (R[ie] = E[ie]);
      } else R = E;
      return K && s(
        R,
        typeof O == "function" ? O.displayName || O.name || "Unknown" : O
      ), f(
        O,
        K,
        W,
        U,
        i(),
        R,
        Z,
        X
      );
    }
    function l(O) {
      typeof O == "object" && O !== null && O.$$typeof === y && O._store && (O._store.validated = 1);
    }
    var d = vo, y = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), _ = Symbol.for("react.consumer"), w = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Y = Symbol.for("react.activity"), G = Symbol.for("react.client.reference"), J = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, z = Object.prototype.hasOwnProperty, ee = Array.isArray, x = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      "react-stack-bottom-frame": function(O) {
        return O();
      }
    };
    var M, N = {}, j = d["react-stack-bottom-frame"].bind(
      d,
      a
    )(), q = x(n(a)), V = {};
    rr.Fragment = v, rr.jsx = function(O, E, R, I, U) {
      var W = 1e4 > J.recentlyCreatedOwnerStacks++;
      return c(
        O,
        E,
        R,
        !1,
        I,
        U,
        W ? Error("react-stack-top-frame") : j,
        W ? x(n(O)) : q
      );
    }, rr.jsxs = function(O, E, R, I, U) {
      var W = 1e4 > J.recentlyCreatedOwnerStacks++;
      return c(
        O,
        E,
        R,
        !0,
        I,
        U,
        W ? Error("react-stack-top-frame") : j,
        W ? x(n(O)) : q
      );
    };
  }()), rr;
}
var us;
function Th() {
  return us || (us = 1, process.env.NODE_ENV === "production" ? Cr.exports = Sh() : Cr.exports = Oh()), Cr.exports;
}
var Ie = Th(), Ir = { exports: {} }, xr = { exports: {} }, le = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cs;
function Rh() {
  if (cs) return le;
  cs = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, l = t ? Symbol.for("react.suspense") : 60113, d = t ? Symbol.for("react.suspense_list") : 60120, y = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, b = t ? Symbol.for("react.fundamental") : 60117, g = t ? Symbol.for("react.responder") : 60118, _ = t ? Symbol.for("react.scope") : 60119;
  function w(P) {
    if (typeof P == "object" && P !== null) {
      var C = P.$$typeof;
      switch (C) {
        case e:
          switch (P = P.type, P) {
            case u:
            case f:
            case n:
            case a:
            case i:
            case l:
              return P;
            default:
              switch (P = P && P.$$typeof, P) {
                case s:
                case c:
                case m:
                case y:
                case o:
                  return P;
                default:
                  return C;
              }
          }
        case r:
          return C;
      }
    }
  }
  function A(P) {
    return w(P) === f;
  }
  return le.AsyncMode = u, le.ConcurrentMode = f, le.ContextConsumer = s, le.ContextProvider = o, le.Element = e, le.ForwardRef = c, le.Fragment = n, le.Lazy = m, le.Memo = y, le.Portal = r, le.Profiler = a, le.StrictMode = i, le.Suspense = l, le.isAsyncMode = function(P) {
    return A(P) || w(P) === u;
  }, le.isConcurrentMode = A, le.isContextConsumer = function(P) {
    return w(P) === s;
  }, le.isContextProvider = function(P) {
    return w(P) === o;
  }, le.isElement = function(P) {
    return typeof P == "object" && P !== null && P.$$typeof === e;
  }, le.isForwardRef = function(P) {
    return w(P) === c;
  }, le.isFragment = function(P) {
    return w(P) === n;
  }, le.isLazy = function(P) {
    return w(P) === m;
  }, le.isMemo = function(P) {
    return w(P) === y;
  }, le.isPortal = function(P) {
    return w(P) === r;
  }, le.isProfiler = function(P) {
    return w(P) === a;
  }, le.isStrictMode = function(P) {
    return w(P) === i;
  }, le.isSuspense = function(P) {
    return w(P) === l;
  }, le.isValidElementType = function(P) {
    return typeof P == "string" || typeof P == "function" || P === n || P === f || P === a || P === i || P === l || P === d || typeof P == "object" && P !== null && (P.$$typeof === m || P.$$typeof === y || P.$$typeof === o || P.$$typeof === s || P.$$typeof === c || P.$$typeof === b || P.$$typeof === g || P.$$typeof === _ || P.$$typeof === v);
  }, le.typeOf = w, le;
}
var de = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fs;
function Ph() {
  return fs || (fs = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, f = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, l = t ? Symbol.for("react.suspense") : 60113, d = t ? Symbol.for("react.suspense_list") : 60120, y = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, b = t ? Symbol.for("react.fundamental") : 60117, g = t ? Symbol.for("react.responder") : 60118, _ = t ? Symbol.for("react.scope") : 60119;
    function w(k) {
      return typeof k == "string" || typeof k == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      k === n || k === f || k === a || k === i || k === l || k === d || typeof k == "object" && k !== null && (k.$$typeof === m || k.$$typeof === y || k.$$typeof === o || k.$$typeof === s || k.$$typeof === c || k.$$typeof === b || k.$$typeof === g || k.$$typeof === _ || k.$$typeof === v);
    }
    function A(k) {
      if (typeof k == "object" && k !== null) {
        var ne = k.$$typeof;
        switch (ne) {
          case e:
            var ae = k.type;
            switch (ae) {
              case u:
              case f:
              case n:
              case a:
              case i:
              case l:
                return ae;
              default:
                var Oe = ae && ae.$$typeof;
                switch (Oe) {
                  case s:
                  case c:
                  case m:
                  case y:
                  case o:
                    return Oe;
                  default:
                    return ne;
                }
            }
          case r:
            return ne;
        }
      }
    }
    var P = u, C = f, B = s, L = o, Y = e, G = c, J = n, z = m, ee = y, x = r, M = a, N = i, j = l, q = !1;
    function V(k) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(k) || A(k) === u;
    }
    function O(k) {
      return A(k) === f;
    }
    function E(k) {
      return A(k) === s;
    }
    function R(k) {
      return A(k) === o;
    }
    function I(k) {
      return typeof k == "object" && k !== null && k.$$typeof === e;
    }
    function U(k) {
      return A(k) === c;
    }
    function W(k) {
      return A(k) === n;
    }
    function Z(k) {
      return A(k) === m;
    }
    function X(k) {
      return A(k) === y;
    }
    function K(k) {
      return A(k) === r;
    }
    function te(k) {
      return A(k) === a;
    }
    function ie(k) {
      return A(k) === i;
    }
    function ue(k) {
      return A(k) === l;
    }
    de.AsyncMode = P, de.ConcurrentMode = C, de.ContextConsumer = B, de.ContextProvider = L, de.Element = Y, de.ForwardRef = G, de.Fragment = J, de.Lazy = z, de.Memo = ee, de.Portal = x, de.Profiler = M, de.StrictMode = N, de.Suspense = j, de.isAsyncMode = V, de.isConcurrentMode = O, de.isContextConsumer = E, de.isContextProvider = R, de.isElement = I, de.isForwardRef = U, de.isFragment = W, de.isLazy = Z, de.isMemo = X, de.isPortal = K, de.isProfiler = te, de.isStrictMode = ie, de.isSuspense = ue, de.isValidElementType = w, de.typeOf = A;
  }()), de;
}
var ls;
function Mf() {
  return ls || (ls = 1, process.env.NODE_ENV === "production" ? xr.exports = Rh() : xr.exports = Ph()), xr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Un, ds;
function Ah() {
  if (ds) return Un;
  ds = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        f[c] = c;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Un = i() ? Object.assign : function(a, o) {
    for (var s, u = n(a), f, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var l in s)
        e.call(s, l) && (u[l] = s[l]);
      if (t) {
        f = t(s);
        for (var d = 0; d < f.length; d++)
          r.call(s, f[d]) && (u[f[d]] = s[f[d]]);
      }
    }
    return u;
  }, Un;
}
var Vn, hs;
function Eo() {
  if (hs) return Vn;
  hs = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Vn = t, Vn;
}
var Wn, ps;
function kf() {
  return ps || (ps = 1, Wn = Function.call.bind(Object.prototype.hasOwnProperty)), Wn;
}
var zn, ys;
function Mh() {
  if (ys) return zn;
  ys = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = /* @__PURE__ */ Eo(), r = {}, n = /* @__PURE__ */ kf();
    t = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, u, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (n(a, c)) {
          var l;
          try {
            if (typeof a[c] != "function") {
              var d = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            l = a[c](o, c, u, s, null, e);
          } catch (m) {
            l = m;
          }
          if (l && !(l instanceof Error) && t(
            (u || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof l + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), l instanceof Error && !(l.message in r)) {
            r[l.message] = !0;
            var y = f ? f() : "";
            t(
              "Failed " + s + " type: " + l.message + (y ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, zn = i, zn;
}
var Qn, ms;
function kh() {
  if (ms) return Qn;
  ms = 1;
  var t = Mf(), e = Ah(), r = /* @__PURE__ */ Eo(), n = /* @__PURE__ */ kf(), i = /* @__PURE__ */ Mh(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Qn = function(s, u) {
    var f = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function l(O) {
      var E = O && (f && O[f] || O[c]);
      if (typeof E == "function")
        return E;
    }
    var d = "<<anonymous>>", y = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: _(),
      arrayOf: w,
      element: A(),
      elementType: P(),
      instanceOf: C,
      node: G(),
      objectOf: L,
      oneOf: B,
      oneOfType: Y,
      shape: z,
      exact: ee
    };
    function m(O, E) {
      return O === E ? O !== 0 || 1 / O === 1 / E : O !== O && E !== E;
    }
    function v(O, E) {
      this.message = O, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function b(O) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, R = 0;
      function I(W, Z, X, K, te, ie, ue) {
        if (K = K || d, ie = ie || X, ue !== r) {
          if (u) {
            var k = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw k.name = "Invariant Violation", k;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ne = K + ":" + X;
            !E[ne] && // Avoid spamming the console because they are often not actionable except for lib authors
            R < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + ie + "` prop on `" + K + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[ne] = !0, R++);
          }
        }
        return Z[X] == null ? W ? Z[X] === null ? new v("The " + te + " `" + ie + "` is marked as required " + ("in `" + K + "`, but its value is `null`.")) : new v("The " + te + " `" + ie + "` is marked as required in " + ("`" + K + "`, but its value is `undefined`.")) : null : O(Z, X, K, te, ie);
      }
      var U = I.bind(null, !1);
      return U.isRequired = I.bind(null, !0), U;
    }
    function g(O) {
      function E(R, I, U, W, Z, X) {
        var K = R[I], te = N(K);
        if (te !== O) {
          var ie = j(K);
          return new v(
            "Invalid " + W + " `" + Z + "` of type " + ("`" + ie + "` supplied to `" + U + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return b(E);
    }
    function _() {
      return b(o);
    }
    function w(O) {
      function E(R, I, U, W, Z) {
        if (typeof O != "function")
          return new v("Property `" + Z + "` of component `" + U + "` has invalid PropType notation inside arrayOf.");
        var X = R[I];
        if (!Array.isArray(X)) {
          var K = N(X);
          return new v("Invalid " + W + " `" + Z + "` of type " + ("`" + K + "` supplied to `" + U + "`, expected an array."));
        }
        for (var te = 0; te < X.length; te++) {
          var ie = O(X, te, U, W, Z + "[" + te + "]", r);
          if (ie instanceof Error)
            return ie;
        }
        return null;
      }
      return b(E);
    }
    function A() {
      function O(E, R, I, U, W) {
        var Z = E[R];
        if (!s(Z)) {
          var X = N(Z);
          return new v("Invalid " + U + " `" + W + "` of type " + ("`" + X + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(O);
    }
    function P() {
      function O(E, R, I, U, W) {
        var Z = E[R];
        if (!t.isValidElementType(Z)) {
          var X = N(Z);
          return new v("Invalid " + U + " `" + W + "` of type " + ("`" + X + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(O);
    }
    function C(O) {
      function E(R, I, U, W, Z) {
        if (!(R[I] instanceof O)) {
          var X = O.name || d, K = V(R[I]);
          return new v("Invalid " + W + " `" + Z + "` of type " + ("`" + K + "` supplied to `" + U + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return b(E);
    }
    function B(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function E(R, I, U, W, Z) {
        for (var X = R[I], K = 0; K < O.length; K++)
          if (m(X, O[K]))
            return null;
        var te = JSON.stringify(O, function(ue, k) {
          var ne = j(k);
          return ne === "symbol" ? String(k) : k;
        });
        return new v("Invalid " + W + " `" + Z + "` of value `" + String(X) + "` " + ("supplied to `" + U + "`, expected one of " + te + "."));
      }
      return b(E);
    }
    function L(O) {
      function E(R, I, U, W, Z) {
        if (typeof O != "function")
          return new v("Property `" + Z + "` of component `" + U + "` has invalid PropType notation inside objectOf.");
        var X = R[I], K = N(X);
        if (K !== "object")
          return new v("Invalid " + W + " `" + Z + "` of type " + ("`" + K + "` supplied to `" + U + "`, expected an object."));
        for (var te in X)
          if (n(X, te)) {
            var ie = O(X, te, U, W, Z + "." + te, r);
            if (ie instanceof Error)
              return ie;
          }
        return null;
      }
      return b(E);
    }
    function Y(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var E = 0; E < O.length; E++) {
        var R = O[E];
        if (typeof R != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(R) + " at index " + E + "."
          ), o;
      }
      function I(U, W, Z, X, K) {
        for (var te = [], ie = 0; ie < O.length; ie++) {
          var ue = O[ie], k = ue(U, W, Z, X, K, r);
          if (k == null)
            return null;
          k.data && n(k.data, "expectedType") && te.push(k.data.expectedType);
        }
        var ne = te.length > 0 ? ", expected one of type [" + te.join(", ") + "]" : "";
        return new v("Invalid " + X + " `" + K + "` supplied to " + ("`" + Z + "`" + ne + "."));
      }
      return b(I);
    }
    function G() {
      function O(E, R, I, U, W) {
        return x(E[R]) ? null : new v("Invalid " + U + " `" + W + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return b(O);
    }
    function J(O, E, R, I, U) {
      return new v(
        (O || "React class") + ": " + E + " type `" + R + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + U + "`."
      );
    }
    function z(O) {
      function E(R, I, U, W, Z) {
        var X = R[I], K = N(X);
        if (K !== "object")
          return new v("Invalid " + W + " `" + Z + "` of type `" + K + "` " + ("supplied to `" + U + "`, expected `object`."));
        for (var te in O) {
          var ie = O[te];
          if (typeof ie != "function")
            return J(U, W, Z, te, j(ie));
          var ue = ie(X, te, U, W, Z + "." + te, r);
          if (ue)
            return ue;
        }
        return null;
      }
      return b(E);
    }
    function ee(O) {
      function E(R, I, U, W, Z) {
        var X = R[I], K = N(X);
        if (K !== "object")
          return new v("Invalid " + W + " `" + Z + "` of type `" + K + "` " + ("supplied to `" + U + "`, expected `object`."));
        var te = e({}, R[I], O);
        for (var ie in te) {
          var ue = O[ie];
          if (n(O, ie) && typeof ue != "function")
            return J(U, W, Z, ie, j(ue));
          if (!ue)
            return new v(
              "Invalid " + W + " `" + Z + "` key `" + ie + "` supplied to `" + U + "`.\nBad object: " + JSON.stringify(R[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var k = ue(X, ie, U, W, Z + "." + ie, r);
          if (k)
            return k;
        }
        return null;
      }
      return b(E);
    }
    function x(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(x);
          if (O === null || s(O))
            return !0;
          var E = l(O);
          if (E) {
            var R = E.call(O), I;
            if (E !== O.entries) {
              for (; !(I = R.next()).done; )
                if (!x(I.value))
                  return !1;
            } else
              for (; !(I = R.next()).done; ) {
                var U = I.value;
                if (U && !x(U[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function M(O, E) {
      return O === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function N(O) {
      var E = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : M(E, O) ? "symbol" : E;
    }
    function j(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var E = N(O);
      if (E === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function q(O) {
      var E = j(O);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function V(O) {
      return !O.constructor || !O.constructor.name ? d : O.constructor.name;
    }
    return y.checkPropTypes = i, y.resetWarningCache = i.resetWarningCache, y.PropTypes = y, y;
  }, Qn;
}
var Yn, gs;
function Ch() {
  if (gs) return Yn;
  gs = 1;
  var t = /* @__PURE__ */ Eo();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, Yn = function() {
    function n(o, s, u, f, c, l) {
      if (l !== t) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    n.isRequired = n;
    function i() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: i,
      element: n,
      elementType: n,
      instanceOf: i,
      node: n,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: r,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, Yn;
}
var vs;
function Ih() {
  if (vs) return Ir.exports;
  if (vs = 1, process.env.NODE_ENV !== "production") {
    var t = Mf(), e = !0;
    Ir.exports = /* @__PURE__ */ kh()(t.isElement, e);
  } else
    Ir.exports = /* @__PURE__ */ Ch()();
  return Ir.exports;
}
var xh = /* @__PURE__ */ Ih();
const Ct = /* @__PURE__ */ vn(xh), JE = 576, KE = 992, Dh = 992;
var qa = function(t, e) {
  return qa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, qa(t, e);
};
function Ue(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  qa(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var D = function() {
  return D = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a]);
    }
    return e;
  }, D.apply(this, arguments);
};
function Qe(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function ot(t, e, r, n) {
  function i(a) {
    return a instanceof r ? a : new r(function(o) {
      o(a);
    });
  }
  return new (r || (r = Promise))(function(a, o) {
    function s(c) {
      try {
        f(n.next(c));
      } catch (l) {
        o(l);
      }
    }
    function u(c) {
      try {
        f(n.throw(c));
      } catch (l) {
        o(l);
      }
    }
    function f(c) {
      c.done ? a(c.value) : i(c.value).then(s, u);
    }
    f((n = n.apply(t, e || [])).next());
  });
}
function st(t, e) {
  var r = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return o.next = s(0), o.throw = s(1), o.return = s(2), typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(f) {
    return function(c) {
      return u([f, c]);
    };
  }
  function u(f) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, f[0] && (r = 0)), r; ) try {
      if (n = 1, i && (a = f[0] & 2 ? i.return : f[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, f[1])).done) return a;
      switch (i = 0, a && (f = [f[0] & 2, a.value]), f[0]) {
        case 0:
        case 1:
          a = f;
          break;
        case 4:
          return r.label++, { value: f[1], done: !1 };
        case 5:
          r.label++, i = f[1], f = [0];
          continue;
        case 7:
          f = r.ops.pop(), r.trys.pop();
          continue;
        default:
          if (a = r.trys, !(a = a.length > 0 && a[a.length - 1]) && (f[0] === 6 || f[0] === 2)) {
            r = 0;
            continue;
          }
          if (f[0] === 3 && (!a || f[1] > a[0] && f[1] < a[3])) {
            r.label = f[1];
            break;
          }
          if (f[0] === 6 && r.label < a[1]) {
            r.label = a[1], a = f;
            break;
          }
          if (a && r.label < a[2]) {
            r.label = a[2], r.ops.push(f);
            break;
          }
          a[2] && r.ops.pop(), r.trys.pop();
          continue;
      }
      f = e.call(t, r);
    } catch (c) {
      f = [6, c], i = 0;
    } finally {
      n = a = 0;
    }
    if (f[0] & 5) throw f[1];
    return { value: f[0] ? f[1] : void 0, done: !0 };
  }
}
function Ne(t, e, r) {
  if (r || arguments.length === 2) for (var n = 0, i = e.length, a; n < i; n++)
    (a || !(n in e)) && (a || (a = Array.prototype.slice.call(e, 0, n)), a[n] = e[n]);
  return t.concat(a || Array.prototype.slice.call(e));
}
var Hn = "Invariant Violation", bs = Object.setPrototypeOf, Nh = bs === void 0 ? function(t, e) {
  return t.__proto__ = e, t;
} : bs, Cf = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r) {
      r === void 0 && (r = Hn);
      var n = t.call(this, typeof r == "number" ? Hn + ": " + r + " (see https://github.com/apollographql/invariant-packages)" : r) || this;
      return n.framesToPop = 1, n.name = Hn, Nh(n, e.prototype), n;
    }
    return e;
  }(Error)
);
function Et(t, e) {
  if (!t)
    throw new Cf(e);
}
var If = ["debug", "log", "warn", "error", "silent"], Lh = If.indexOf("log");
function Dr(t) {
  return function() {
    if (If.indexOf(t) >= Lh) {
      var e = console[t] || console.log;
      return e.apply(console, arguments);
    }
  };
}
(function(t) {
  t.debug = Dr("debug"), t.log = Dr("log"), t.warn = Dr("warn"), t.error = Dr("error");
})(Et || (Et = {}));
var wo = "3.13.8";
function We(t) {
  try {
    return t();
  } catch {
  }
}
const $a = We(function() {
  return globalThis;
}) || We(function() {
  return window;
}) || We(function() {
  return self;
}) || We(function() {
  return global;
}) || // We don't expect the Function constructor ever to be invoked at runtime, as
// long as at least one of globalThis, window, self, or global is defined, so
// we are under no obligation to make it easy for static analysis tools to
// detect syntactic usage of the Function constructor. If you think you can
// improve your static analysis to detect this obfuscation, think again. This
// is an arms race you cannot win, at least not in JavaScript.
We(function() {
  return We.constructor("return this")();
});
var Es = /* @__PURE__ */ new Map();
function Ba(t) {
  var e = Es.get(t) || 1;
  return Es.set(t, e + 1), "".concat(t, ":").concat(e, ":").concat(Math.random().toString(36).slice(2));
}
function xf(t, e) {
  e === void 0 && (e = 0);
  var r = Ba("stringifyForDisplay");
  return JSON.stringify(t, function(n, i) {
    return i === void 0 ? r : i;
  }, e).split(JSON.stringify(r)).join("<undefined>");
}
function Nr(t) {
  return function(e) {
    for (var r = [], n = 1; n < arguments.length; n++)
      r[n - 1] = arguments[n];
    if (typeof e == "number") {
      var i = e;
      e = _o(i), e || (e = So(i, r), r = []);
    }
    t.apply(void 0, [e].concat(r));
  };
}
var re = Object.assign(function(e, r) {
  for (var n = [], i = 2; i < arguments.length; i++)
    n[i - 2] = arguments[i];
  e || Et(e, _o(r, n) || So(r, n));
}, {
  debug: Nr(Et.debug),
  log: Nr(Et.log),
  warn: Nr(Et.warn),
  error: Nr(Et.error)
});
function Fe(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  return new Cf(_o(t, e) || So(t, e));
}
var ws = Symbol.for("ApolloErrorMessageHandler_" + wo);
function Df(t) {
  if (typeof t == "string")
    return t;
  try {
    return xf(t, 2).slice(0, 1e3);
  } catch {
    return "<non-serializable>";
  }
}
function _o(t, e) {
  if (e === void 0 && (e = []), !!t)
    return $a[ws] && $a[ws](t, e.map(Df));
}
function So(t, e) {
  if (e === void 0 && (e = []), !!t)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: wo,
      message: t,
      args: e.map(Df)
    })));
}
function Or(t, e) {
  var r = t.directives;
  return !r || !r.length ? !0 : qh(r).every(function(n) {
    var i = n.directive, a = n.ifArgument, o = !1;
    return a.value.kind === "Variable" ? (o = e && e[a.value.name.value], re(o !== void 0, 78, i.name.value)) : o = a.value.value, i.name.value === "skip" ? !o : o;
  });
}
function vr(t, e, r) {
  var n = new Set(t), i = n.size;
  return Xe(e, {
    Directive: function(a) {
      if (n.delete(a.name.value) && (!r || !n.size))
        return bo;
    }
  }), r ? !n.size : n.size < i;
}
function Fh(t) {
  return t && vr(["client", "export"], t, !0);
}
function jh(t) {
  var e = t.name.value;
  return e === "skip" || e === "include";
}
function qh(t) {
  var e = [];
  return t && t.length && t.forEach(function(r) {
    if (jh(r)) {
      var n = r.arguments, i = r.name.value;
      re(n && n.length === 1, 79, i);
      var a = n[0];
      re(a.name && a.name.value === "if", 80, i);
      var o = a.value;
      re(o && (o.kind === "Variable" || o.kind === "BooleanValue"), 81, i), e.push({ directive: r, ifArgument: a });
    }
  }), e;
}
function $h(t) {
  var e, r, n = (e = t.directives) === null || e === void 0 ? void 0 : e.find(function(a) {
    var o = a.name;
    return o.value === "unmask";
  });
  if (!n)
    return "mask";
  var i = (r = n.arguments) === null || r === void 0 ? void 0 : r.find(function(a) {
    var o = a.name;
    return o.value === "mode";
  });
  return globalThis.__DEV__ !== !1 && i && (i.value.kind === Te.VARIABLE ? globalThis.__DEV__ !== !1 && re.warn(82) : i.value.kind !== Te.STRING ? globalThis.__DEV__ !== !1 && re.warn(83) : i.value.value !== "migrate" && globalThis.__DEV__ !== !1 && re.warn(84, i.value.value)), i && "value" in i.value && i.value.value === "migrate" ? "migrate" : "unmask";
}
const Bh = () => /* @__PURE__ */ Object.create(null), { forEach: Uh, slice: _s } = Array.prototype, { hasOwnProperty: Vh } = Object.prototype;
class it {
  constructor(e = !0, r = Bh) {
    this.weakness = e, this.makeData = r;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(e) {
    let r = this;
    return Uh.call(e, (n) => r = r.getChildTrie(n)), Vh.call(r, "data") ? r.data : r.data = this.makeData(_s.call(e));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(e) {
    let r = this;
    for (let n = 0, i = e.length; r && n < i; ++n) {
      const a = r.mapFor(e[n], !1);
      r = a && a.get(e[n]);
    }
    return r && r.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(e) {
    let r;
    if (e.length) {
      const n = e[0], i = this.mapFor(n, !1), a = i && i.get(n);
      a && (r = a.removeArray(_s.call(e, 1)), !a.data && !a.weak && !(a.strong && a.strong.size) && i.delete(n));
    } else
      r = this.data, delete this.data;
    return r;
  }
  getChildTrie(e) {
    const r = this.mapFor(e, !0);
    let n = r.get(e);
    return n || r.set(e, n = new it(this.weakness, this.makeData)), n;
  }
  mapFor(e, r) {
    return this.weakness && Wh(e) ? this.weak || (r ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (r ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
}
function Wh(t) {
  switch (typeof t) {
    case "object":
      if (t === null)
        break;
    // Fall through to return true...
    case "function":
      return !0;
  }
  return !1;
}
var Nf = We(function() {
  return navigator.product;
}) == "ReactNative", kt = typeof WeakMap == "function" && !(Nf && !global.HermesInternal), Oo = typeof WeakSet == "function", To = typeof Symbol == "function" && typeof Symbol.for == "function", bn = To && Symbol.asyncIterator, zh = typeof We(function() {
  return window.document.createElement;
}) == "function", Qh = (
  // Following advice found in this comment from @domenic (maintainer of jsdom):
  // https://github.com/jsdom/jsdom/issues/1537#issuecomment-229405327
  //
  // Since we control the version of Jest and jsdom used when running Apollo
  // Client tests, and that version is recent enought to include " jsdom/x.y.z"
  // at the end of the user agent string, I believe this case is all we need to
  // check. Testing for "Node.js" was recommended for backwards compatibility
  // with older version of jsdom, but we don't have that problem.
  We(function() {
    return navigator.userAgent.indexOf("jsdom") >= 0;
  }) || !1
), Yh = (zh || Nf) && !Qh;
function Ee(t) {
  return t !== null && typeof t == "object";
}
function Hh(t, e) {
  var r = e, n = [];
  t.definitions.forEach(function(a) {
    if (a.kind === "OperationDefinition")
      throw Fe(
        85,
        a.operation,
        a.name ? " named '".concat(a.name.value, "'") : ""
      );
    a.kind === "FragmentDefinition" && n.push(a);
  }), typeof r > "u" && (re(n.length === 1, 86, n.length), r = n[0].name.value);
  var i = D(D({}, t), { definitions: Ne([
    {
      kind: "OperationDefinition",
      // OperationTypeNode is an enum
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: r
            }
          }
        ]
      }
    }
  ], t.definitions, !0) });
  return i;
}
function Yt(t) {
  t === void 0 && (t = []);
  var e = {};
  return t.forEach(function(r) {
    e[r.name.value] = r;
  }), e;
}
function En(t, e) {
  switch (t.kind) {
    case "InlineFragment":
      return t;
    case "FragmentSpread": {
      var r = t.name.value;
      if (typeof e == "function")
        return e(r);
      var n = e && e[r];
      return re(n, 87, r), n || null;
    }
    default:
      return null;
  }
}
function Gh(t) {
  var e = !0;
  return Xe(t, {
    FragmentSpread: function(r) {
      if (e = !!r.directives && r.directives.some(function(n) {
        return n.name.value === "unmask";
      }), !e)
        return bo;
    }
  }), e;
}
function Jh() {
}
class Ua {
  constructor(e = 1 / 0, r = Jh) {
    this.max = e, this.dispose = r, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(e) {
    return this.map.has(e);
  }
  get(e) {
    const r = this.getNode(e);
    return r && r.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(e) {
    const r = this.map.get(e);
    if (r && r !== this.newest) {
      const { older: n, newer: i } = r;
      i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
    }
    return r;
  }
  set(e, r) {
    let n = this.getNode(e);
    return n ? n.value = r : (n = {
      key: e,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(e) {
    const r = this.map.get(e);
    return r ? (r === this.newest && (this.newest = r.older), r === this.oldest && (this.oldest = r.newer), r.newer && (r.newer.older = r.older), r.older && (r.older.newer = r.newer), this.map.delete(e), this.dispose(r.value, e), !0) : !1;
  }
}
function Va() {
}
const Kh = Va, Xh = typeof WeakRef < "u" ? WeakRef : function(t) {
  return { deref: () => t };
}, Zh = typeof WeakMap < "u" ? WeakMap : Map, ep = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: Va,
    unregister: Va
  };
}, tp = 10024;
class un {
  constructor(e = 1 / 0, r = Kh) {
    this.max = e, this.dispose = r, this.map = new Zh(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const n = this.unfinalizedNodes.values();
      for (let i = 0; i < tp; i++) {
        const a = n.next().value;
        if (!a)
          break;
        this.unfinalizedNodes.delete(a);
        const o = a.key;
        delete a.key, a.keyRef = new Xh(o), this.registry.register(o, a, a);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new ep(this.deleteNode.bind(this));
  }
  has(e) {
    return this.map.has(e);
  }
  get(e) {
    const r = this.getNode(e);
    return r && r.value;
  }
  getNode(e) {
    const r = this.map.get(e);
    if (r && r !== this.newest) {
      const { older: n, newer: i } = r;
      i && (i.older = n), n && (n.newer = i), r.older = this.newest, r.older.newer = r, r.newer = null, this.newest = r, r === this.oldest && (this.oldest = i);
    }
    return r;
  }
  set(e, r) {
    let n = this.getNode(e);
    return n ? n.value = r : (n = {
      key: e,
      value: r,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.scheduleFinalization(n), this.map.set(e, n), this.size++, n.value);
  }
  clean() {
    for (; this.oldest && this.size > this.max; )
      this.deleteNode(this.oldest);
  }
  deleteNode(e) {
    e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
    const r = e.key || e.keyRef && e.keyRef.deref();
    this.dispose(e.value, r), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), r && this.map.delete(r);
  }
  delete(e) {
    const r = this.map.get(e);
    return r ? (this.deleteNode(r), !0) : !1;
  }
  scheduleFinalization(e) {
    this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
  }
}
var Gn = /* @__PURE__ */ new WeakSet();
function Lf(t) {
  t.size <= (t.max || -1) || Gn.has(t) || (Gn.add(t), setTimeout(function() {
    t.clean(), Gn.delete(t);
  }, 100));
}
var Ro = function(t, e) {
  var r = new un(t, e);
  return r.set = function(n, i) {
    var a = un.prototype.set.call(this, n, i);
    return Lf(this), a;
  }, r;
}, rp = function(t, e) {
  var r = new Ua(t, e);
  return r.set = function(n, i) {
    var a = Ua.prototype.set.call(this, n, i);
    return Lf(this), a;
  }, r;
}, np = Symbol.for("apollo.cacheSize"), Ze = D({}, $a[np]), vt = {};
function Po(t, e) {
  vt[t] = e;
}
var ip = globalThis.__DEV__ !== !1 ? up : void 0, ap = globalThis.__DEV__ !== !1 ? cp : void 0, op = globalThis.__DEV__ !== !1 ? Ff : void 0;
function sp() {
  var t = {
    parser: 1e3,
    canonicalStringify: 1e3,
    print: 2e3,
    "documentTransform.cache": 2e3,
    "queryManager.getDocumentInfo": 2e3,
    "PersistedQueryLink.persistedQueryHashes": 2e3,
    "fragmentRegistry.transform": 2e3,
    "fragmentRegistry.lookup": 1e3,
    "fragmentRegistry.findFragmentSpreads": 4e3,
    "cache.fragmentQueryDocuments": 1e3,
    "removeTypenameFromVariables.getVariableDefinitions": 2e3,
    "inMemoryCache.maybeBroadcastWatch": 5e3,
    "inMemoryCache.executeSelectionSet": 5e4,
    "inMemoryCache.executeSubSelectedArray": 1e4
  };
  return Object.fromEntries(Object.entries(t).map(function(e) {
    var r = e[0], n = e[1];
    return [
      r,
      Ze[r] || n
    ];
  }));
}
function up() {
  var t, e, r, n, i;
  if (globalThis.__DEV__ === !1)
    throw new Error("only supported in development mode");
  return {
    limits: sp(),
    sizes: D({ print: (t = vt.print) === null || t === void 0 ? void 0 : t.call(vt), parser: (e = vt.parser) === null || e === void 0 ? void 0 : e.call(vt), canonicalStringify: (r = vt.canonicalStringify) === null || r === void 0 ? void 0 : r.call(vt), links: za(this.link), queryManager: {
      getDocumentInfo: this.queryManager.transformCache.size,
      documentTransforms: qf(this.queryManager.documentTransform)
    } }, (i = (n = this.cache).getMemoryInternals) === null || i === void 0 ? void 0 : i.call(n))
  };
}
function Ff() {
  return {
    cache: {
      fragmentQueryDocuments: ut(this.getFragmentDoc)
    }
  };
}
function cp() {
  var t = this.config.fragments;
  return D(D({}, Ff.apply(this)), { addTypenameDocumentTransform: qf(this.addTypenameTransform), inMemoryCache: {
    executeSelectionSet: ut(this.storeReader.executeSelectionSet),
    executeSubSelectedArray: ut(this.storeReader.executeSubSelectedArray),
    maybeBroadcastWatch: ut(this.maybeBroadcastWatch)
  }, fragmentRegistry: {
    findFragmentSpreads: ut(t?.findFragmentSpreads),
    lookup: ut(t?.lookup),
    transform: ut(t?.transform)
  } });
}
function fp(t) {
  return !!t && "dirtyKey" in t;
}
function ut(t) {
  return fp(t) ? t.size : void 0;
}
function jf(t) {
  return t != null;
}
function qf(t) {
  return Wa(t).map(function(e) {
    return { cache: e };
  });
}
function Wa(t) {
  return t ? Ne(Ne([
    ut(t?.performWork)
  ], Wa(t?.left), !0), Wa(t?.right), !0).filter(jf) : [];
}
function za(t) {
  var e;
  return t ? Ne(Ne([
    (e = t?.getMemoryInternals) === null || e === void 0 ? void 0 : e.call(t)
  ], za(t?.left), !0), za(t?.right), !0).filter(jf) : [];
}
var ft = Object.assign(function(e) {
  return JSON.stringify(e, lp);
}, {
  reset: function() {
    Dt = new rp(
      Ze.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && Po("canonicalStringify", function() {
  return Dt.size;
});
var Dt;
ft.reset();
function lp(t, e) {
  if (e && typeof e == "object") {
    var r = Object.getPrototypeOf(e);
    if (r === Object.prototype || r === null) {
      var n = Object.keys(e);
      if (n.every(dp))
        return e;
      var i = JSON.stringify(n), a = Dt.get(i);
      if (!a) {
        n.sort();
        var o = JSON.stringify(n);
        a = Dt.get(o) || n, Dt.set(i, a), Dt.set(o, a);
      }
      var s = Object.create(r);
      return a.forEach(function(u) {
        s[u] = e[u];
      }), s;
    }
  }
  return e;
}
function dp(t, e, r) {
  return e === 0 || r[e - 1] <= t;
}
function jt(t) {
  return { __ref: String(t) };
}
function he(t) {
  return !!(t && typeof t == "object" && typeof t.__ref == "string");
}
function hp(t) {
  return Ee(t) && t.kind === "Document" && Array.isArray(t.definitions);
}
function pp(t) {
  return t.kind === "StringValue";
}
function yp(t) {
  return t.kind === "BooleanValue";
}
function mp(t) {
  return t.kind === "IntValue";
}
function gp(t) {
  return t.kind === "FloatValue";
}
function vp(t) {
  return t.kind === "Variable";
}
function bp(t) {
  return t.kind === "ObjectValue";
}
function Ep(t) {
  return t.kind === "ListValue";
}
function wp(t) {
  return t.kind === "EnumValue";
}
function _p(t) {
  return t.kind === "NullValue";
}
function Vt(t, e, r, n) {
  if (mp(r) || gp(r))
    t[e.value] = Number(r.value);
  else if (yp(r) || pp(r))
    t[e.value] = r.value;
  else if (bp(r)) {
    var i = {};
    r.fields.map(function(o) {
      return Vt(i, o.name, o.value, n);
    }), t[e.value] = i;
  } else if (vp(r)) {
    var a = (n || {})[r.name.value];
    t[e.value] = a;
  } else if (Ep(r))
    t[e.value] = r.values.map(function(o) {
      var s = {};
      return Vt(s, e, o, n), s[e.value];
    });
  else if (wp(r))
    t[e.value] = r.value;
  else if (_p(r))
    t[e.value] = null;
  else
    throw Fe(96, e.value, r.kind);
}
function Sp(t, e) {
  var r = null;
  t.directives && (r = {}, t.directives.forEach(function(i) {
    r[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
      var o = a.name, s = a.value;
      return Vt(r[i.name.value], o, s, e);
    });
  }));
  var n = null;
  return t.arguments && t.arguments.length && (n = {}, t.arguments.forEach(function(i) {
    var a = i.name, o = i.value;
    return Vt(n, a, o, e);
  })), $f(t.name.value, n, r);
}
var Op = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export",
  "nonreactive"
], nr = ft, $f = Object.assign(function(t, e, r) {
  if (e && r && r.connection && r.connection.key)
    if (r.connection.filter && r.connection.filter.length > 0) {
      var n = r.connection.filter ? r.connection.filter : [];
      n.sort();
      var i = {};
      return n.forEach(function(s) {
        i[s] = e[s];
      }), "".concat(r.connection.key, "(").concat(nr(i), ")");
    } else
      return r.connection.key;
  var a = t;
  if (e) {
    var o = nr(e);
    a += "(".concat(o, ")");
  }
  return r && Object.keys(r).forEach(function(s) {
    Op.indexOf(s) === -1 && (r[s] && Object.keys(r[s]).length ? a += "@".concat(s, "(").concat(nr(r[s]), ")") : a += "@".concat(s));
  }), a;
}, {
  setStringify: function(t) {
    var e = nr;
    return nr = t, e;
  }
});
function wn(t, e) {
  if (t.arguments && t.arguments.length) {
    var r = {};
    return t.arguments.forEach(function(n) {
      var i = n.name, a = n.value;
      return Vt(r, i, a, e);
    }), r;
  }
  return null;
}
function nt(t) {
  return t.alias ? t.alias.value : t.name.value;
}
function Qa(t, e, r) {
  for (var n, i = 0, a = e.selections; i < a.length; i++) {
    var o = a[i];
    if (ht(o)) {
      if (o.name.value === "__typename")
        return t[nt(o)];
    } else n ? n.push(o) : n = [o];
  }
  if (typeof t.__typename == "string")
    return t.__typename;
  if (n)
    for (var s = 0, u = n; s < u.length; s++) {
      var o = u[s], f = Qa(t, En(o, r).selectionSet, r);
      if (typeof f == "string")
        return f;
    }
}
function ht(t) {
  return t.kind === "Field";
}
function Tp(t) {
  return t.kind === "InlineFragment";
}
function Ht(t) {
  re(t && t.kind === "Document", 88);
  var e = t.definitions.filter(function(r) {
    return r.kind !== "FragmentDefinition";
  }).map(function(r) {
    if (r.kind !== "OperationDefinition")
      throw Fe(89, r.kind);
    return r;
  });
  return re(e.length <= 1, 90, e.length), t;
}
function Tt(t) {
  return Ht(t), t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition";
  })[0];
}
function fr(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && !!e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function Gt(t) {
  return t.definitions.filter(function(e) {
    return e.kind === "FragmentDefinition";
  });
}
function Bf(t) {
  var e = Tt(t);
  return re(e && e.operation === "query", 91), e;
}
function Uf(t) {
  re(t.kind === "Document", 92), re(t.definitions.length <= 1, 93);
  var e = t.definitions[0];
  return re(e.kind === "FragmentDefinition", 94), e;
}
function lt(t) {
  Ht(t);
  for (var e, r = 0, n = t.definitions; r < n.length; r++) {
    var i = n[r];
    if (i.kind === "OperationDefinition") {
      var a = i.operation;
      if (a === "query" || a === "mutation" || a === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !e && (e = i);
  }
  if (e)
    return e;
  throw Fe(95);
}
function Ao(t) {
  var e = /* @__PURE__ */ Object.create(null), r = t && t.variableDefinitions;
  return r && r.length && r.forEach(function(n) {
    n.defaultValue && Vt(e, n.variable.name, n.defaultValue);
  }), e;
}
let ke = null;
const Ss = {};
let Rp = 1;
const Pp = () => class {
  constructor() {
    this.id = [
      "slot",
      Rp++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let e = ke; e; e = e.parent)
      if (this.id in e.slots) {
        const r = e.slots[this.id];
        if (r === Ss)
          break;
        return e !== ke && (ke.slots[this.id] = r), !0;
      }
    return ke && (ke.slots[this.id] = Ss), !1;
  }
  getValue() {
    if (this.hasValue())
      return ke.slots[this.id];
  }
  withValue(e, r, n, i) {
    const a = {
      __proto__: null,
      [this.id]: e
    }, o = ke;
    ke = { parent: o, slots: a };
    try {
      return r.apply(i, n);
    } finally {
      ke = o;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(e) {
    const r = ke;
    return function() {
      const n = ke;
      try {
        return ke = r, e.apply(this, arguments);
      } finally {
        ke = n;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(e, r, n) {
    if (ke) {
      const i = ke;
      try {
        return ke = null, e.apply(n, r);
      } finally {
        ke = i;
      }
    } else
      return e.apply(n, r);
  }
};
function Os(t) {
  try {
    return t();
  } catch {
  }
}
const Jn = "@wry/context:Slot", Ap = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  Os(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  Os(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), Ts = Ap, Tr = Ts[Jn] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[Jn] || function(t) {
  try {
    Object.defineProperty(Ts, Jn, {
      value: t,
      enumerable: !1,
      writable: !1,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: !0
    });
  } finally {
    return t;
  }
}(Pp()), { bind: ZE, noContext: e0 } = Tr, _n = new Tr(), { hasOwnProperty: Mp } = Object.prototype, Mo = Array.from || function(t) {
  const e = [];
  return t.forEach((r) => e.push(r)), e;
};
function ko(t) {
  const { unsubscribe: e } = t;
  typeof e == "function" && (t.unsubscribe = void 0, e());
}
const br = [], kp = 100;
function Wt(t, e) {
  if (!t)
    throw new Error(e || "assertion failure");
}
function Vf(t, e) {
  const r = t.length;
  return (
    // Unknown values are not equal to each other.
    r > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    r === e.length && // The underlying value or exception must be the same.
    t[r - 1] === e[r - 1]
  );
}
function Wf(t) {
  switch (t.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return t[0];
    case 2:
      throw t[1];
  }
}
function zf(t) {
  return t.slice(0);
}
class Sn {
  constructor(e) {
    this.fn = e, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++Sn.count;
  }
  peek() {
    if (this.value.length === 1 && !pt(this))
      return Rs(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(e) {
    return Wt(!this.recomputing, "already recomputing"), Rs(this), pt(this) ? Cp(this, e) : Wf(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, Qf(this), ko(this));
  }
  dispose() {
    this.setDirty(), Kf(this), Co(this, (e, r) => {
      e.setDirty(), Xf(e, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(e) {
    e.add(this), this.deps || (this.deps = br.pop() || /* @__PURE__ */ new Set()), this.deps.add(e);
  }
  forgetDeps() {
    this.deps && (Mo(this.deps).forEach((e) => e.delete(this)), this.deps.clear(), br.push(this.deps), this.deps = null);
  }
}
Sn.count = 0;
function Rs(t) {
  const e = _n.getValue();
  if (e)
    return t.parents.add(e), e.childValues.has(t) || e.childValues.set(t, []), pt(t) ? Hf(e, t) : Gf(e, t), e;
}
function Cp(t, e) {
  return Kf(t), _n.withValue(t, Ip, [t, e]), Dp(t, e) && xp(t), Wf(t.value);
}
function Ip(t, e) {
  t.recomputing = !0;
  const { normalizeResult: r } = t;
  let n;
  r && t.value.length === 1 && (n = zf(t.value)), t.value.length = 0;
  try {
    if (t.value[0] = t.fn.apply(null, e), r && n && !Vf(n, t.value))
      try {
        t.value[0] = r(t.value[0], n[0]);
      } catch {
      }
  } catch (i) {
    t.value[1] = i;
  }
  t.recomputing = !1;
}
function pt(t) {
  return t.dirty || !!(t.dirtyChildren && t.dirtyChildren.size);
}
function xp(t) {
  t.dirty = !1, !pt(t) && Yf(t);
}
function Qf(t) {
  Co(t, Hf);
}
function Yf(t) {
  Co(t, Gf);
}
function Co(t, e) {
  const r = t.parents.size;
  if (r) {
    const n = Mo(t.parents);
    for (let i = 0; i < r; ++i)
      e(n[i], t);
  }
}
function Hf(t, e) {
  Wt(t.childValues.has(e)), Wt(pt(e));
  const r = !pt(t);
  if (!t.dirtyChildren)
    t.dirtyChildren = br.pop() || /* @__PURE__ */ new Set();
  else if (t.dirtyChildren.has(e))
    return;
  t.dirtyChildren.add(e), r && Qf(t);
}
function Gf(t, e) {
  Wt(t.childValues.has(e)), Wt(!pt(e));
  const r = t.childValues.get(e);
  r.length === 0 ? t.childValues.set(e, zf(e.value)) : Vf(r, e.value) || t.setDirty(), Jf(t, e), !pt(t) && Yf(t);
}
function Jf(t, e) {
  const r = t.dirtyChildren;
  r && (r.delete(e), r.size === 0 && (br.length < kp && br.push(r), t.dirtyChildren = null));
}
function Kf(t) {
  t.childValues.size > 0 && t.childValues.forEach((e, r) => {
    Xf(t, r);
  }), t.forgetDeps(), Wt(t.dirtyChildren === null);
}
function Xf(t, e) {
  e.parents.delete(t), t.childValues.delete(e), Jf(t, e);
}
function Dp(t, e) {
  if (typeof t.subscribe == "function")
    try {
      ko(t), t.unsubscribe = t.subscribe.apply(null, e);
    } catch {
      return t.setDirty(), !1;
    }
  return !0;
}
const Np = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function Zf(t) {
  const e = /* @__PURE__ */ new Map();
  function r(n) {
    const i = _n.getValue();
    if (i) {
      let a = e.get(n);
      a || e.set(n, a = /* @__PURE__ */ new Set()), i.dependOn(a);
    }
  }
  return r.dirty = function(i, a) {
    const o = e.get(i);
    if (o) {
      const s = a && Mp.call(Np, a) ? a : "setDirty";
      Mo(o).forEach((u) => u[s]()), e.delete(i), ko(o);
    }
  }, r;
}
let Ps;
function Lp(...t) {
  return (Ps || (Ps = new it(typeof WeakMap == "function"))).lookupArray(t);
}
const Kn = /* @__PURE__ */ new Set();
function Er(t, { max: e = Math.pow(2, 16), keyArgs: r, makeCacheKey: n = Lp, normalizeResult: i, subscribe: a, cache: o = Ua } = /* @__PURE__ */ Object.create(null)) {
  const s = typeof o == "function" ? new o(e, (d) => d.dispose()) : o, u = function() {
    const d = n.apply(null, r ? r.apply(null, arguments) : arguments);
    if (d === void 0)
      return t.apply(null, arguments);
    let y = s.get(d);
    y || (s.set(d, y = new Sn(t)), y.normalizeResult = i, y.subscribe = a, y.forget = () => s.delete(d));
    const m = y.recompute(Array.prototype.slice.call(arguments));
    return s.set(d, y), Kn.add(s), _n.hasValue() || (Kn.forEach((v) => v.clean()), Kn.clear()), m;
  };
  Object.defineProperty(u, "size", {
    get: () => s.size,
    configurable: !1,
    enumerable: !1
  }), Object.freeze(u.options = {
    max: e,
    keyArgs: r,
    makeCacheKey: n,
    normalizeResult: i,
    subscribe: a,
    cache: s
  });
  function f(d) {
    const y = d && s.get(d);
    y && y.setDirty();
  }
  u.dirtyKey = f, u.dirty = function() {
    f(n.apply(null, arguments));
  };
  function c(d) {
    const y = d && s.get(d);
    if (y)
      return y.peek();
  }
  u.peekKey = c, u.peek = function() {
    return c(n.apply(null, arguments));
  };
  function l(d) {
    return d ? s.delete(d) : !1;
  }
  return u.forgetKey = l, u.forget = function() {
    return l(n.apply(null, arguments));
  }, u.makeCacheKey = n, u.getKey = r ? function() {
    return n.apply(null, r.apply(null, arguments));
  } : n, Object.freeze(u);
}
function Fp(t) {
  return t;
}
var el = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = /* @__PURE__ */ Object.create(null)), this.resultCache = Oo ? /* @__PURE__ */ new WeakSet() : /* @__PURE__ */ new Set(), this.transform = e, r.getCacheKey && (this.getCacheKey = r.getCacheKey), this.cached = r.cache !== !1, this.resetCache();
    }
    return t.prototype.getCacheKey = function(e) {
      return [e];
    }, t.identity = function() {
      return new t(Fp, { cache: !1 });
    }, t.split = function(e, r, n) {
      return n === void 0 && (n = t.identity()), Object.assign(new t(
        function(i) {
          var a = e(i) ? r : n;
          return a.transformDocument(i);
        },
        // Reasonably assume both `left` and `right` transforms handle their own caching
        { cache: !1 }
      ), { left: r, right: n });
    }, t.prototype.resetCache = function() {
      var e = this;
      if (this.cached) {
        var r = new it(kt);
        this.performWork = Er(t.prototype.performWork.bind(this), {
          makeCacheKey: function(n) {
            var i = e.getCacheKey(n);
            if (i)
              return re(Array.isArray(i), 77), r.lookupArray(i);
          },
          max: Ze["documentTransform.cache"],
          cache: un
        });
      }
    }, t.prototype.performWork = function(e) {
      return Ht(e), this.transform(e);
    }, t.prototype.transformDocument = function(e) {
      if (this.resultCache.has(e))
        return e;
      var r = this.performWork(e);
      return this.resultCache.add(r), r;
    }, t.prototype.concat = function(e) {
      var r = this;
      return Object.assign(new t(
        function(n) {
          return e.transformDocument(r.transformDocument(n));
        },
        // Reasonably assume both transforms handle their own caching
        { cache: !1 }
      ), {
        left: this,
        right: e
      });
    }, t;
  }()
), hr, ct = Object.assign(function(t) {
  var e = hr.get(t);
  return e || (e = ah(t), hr.set(t, e)), e;
}, {
  reset: function() {
    hr = new Ro(
      Ze.print || 2e3
      /* defaultCacheSizes.print */
    );
  }
});
ct.reset();
globalThis.__DEV__ !== !1 && Po("print", function() {
  return hr ? hr.size : 0;
});
var Se = Array.isArray;
function Be(t) {
  return Array.isArray(t) && t.length > 0;
}
var As = {
  kind: Te.FIELD,
  name: {
    kind: Te.NAME,
    value: "__typename"
  }
};
function tl(t, e) {
  return !t || t.selectionSet.selections.every(function(r) {
    return r.kind === Te.FRAGMENT_SPREAD && tl(e[r.name.value], e);
  });
}
function jp(t) {
  return tl(Tt(t) || Uf(t), Yt(Gt(t))) ? null : t;
}
function qp(t) {
  var e = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    n && (n.name ? e.set(n.name, n) : n.test && r.set(n.test, n));
  }), function(n) {
    var i = e.get(n.name.value);
    return !i && r.size && r.forEach(function(a, o) {
      o(n) && (i = a);
    }), i;
  };
}
function Ms(t) {
  var e = /* @__PURE__ */ new Map();
  return function(n) {
    n === void 0 && (n = t);
    var i = e.get(n);
    return i || e.set(n, i = {
      // Variable and fragment spread names used directly within this
      // operation or fragment definition, as identified by key. These sets
      // will be populated during the first traversal of the document in
      // removeDirectivesFromDocument below.
      variables: /* @__PURE__ */ new Set(),
      fragmentSpreads: /* @__PURE__ */ new Set()
    }), i;
  };
}
function rl(t, e) {
  Ht(e);
  for (var r = Ms(""), n = Ms(""), i = function(g) {
    for (var _ = 0, w = void 0; _ < g.length && (w = g[_]); ++_)
      if (!Se(w)) {
        if (w.kind === Te.OPERATION_DEFINITION)
          return r(w.name && w.name.value);
        if (w.kind === Te.FRAGMENT_DEFINITION)
          return n(w.name.value);
      }
    return globalThis.__DEV__ !== !1 && re.error(97), null;
  }, a = 0, o = e.definitions.length - 1; o >= 0; --o)
    e.definitions[o].kind === Te.OPERATION_DEFINITION && ++a;
  var s = qp(t), u = function(g) {
    return Be(g) && g.map(s).some(function(_) {
      return _ && _.remove;
    });
  }, f = /* @__PURE__ */ new Map(), c = !1, l = {
    enter: function(g) {
      if (u(g.directives))
        return c = !0, null;
    }
  }, d = Xe(e, {
    // These two AST node types share the same implementation, defined above.
    Field: l,
    InlineFragment: l,
    VariableDefinition: {
      enter: function() {
        return !1;
      }
    },
    Variable: {
      enter: function(g, _, w, A, P) {
        var C = i(P);
        C && C.variables.add(g.name.value);
      }
    },
    FragmentSpread: {
      enter: function(g, _, w, A, P) {
        if (u(g.directives))
          return c = !0, null;
        var C = i(P);
        C && C.fragmentSpreads.add(g.name.value);
      }
    },
    FragmentDefinition: {
      enter: function(g, _, w, A) {
        f.set(JSON.stringify(A), g);
      },
      leave: function(g, _, w, A) {
        var P = f.get(JSON.stringify(A));
        if (g === P)
          return g;
        if (
          // This logic applies only if the document contains one or more
          // operations, since removing all fragments from a document containing
          // only fragments makes the document useless.
          a > 0 && g.selectionSet.selections.every(function(C) {
            return C.kind === Te.FIELD && C.name.value === "__typename";
          })
        )
          return n(g.name.value).removed = !0, c = !0, null;
      }
    },
    Directive: {
      leave: function(g) {
        if (s(g))
          return c = !0, null;
      }
    }
  });
  if (!c)
    return e;
  var y = function(g) {
    return g.transitiveVars || (g.transitiveVars = new Set(g.variables), g.removed || g.fragmentSpreads.forEach(function(_) {
      y(n(_)).transitiveVars.forEach(function(w) {
        g.transitiveVars.add(w);
      });
    })), g;
  }, m = /* @__PURE__ */ new Set();
  d.definitions.forEach(function(g) {
    g.kind === Te.OPERATION_DEFINITION ? y(r(g.name && g.name.value)).fragmentSpreads.forEach(function(_) {
      m.add(_);
    }) : g.kind === Te.FRAGMENT_DEFINITION && // If there are no operations in the document, then all fragment
    // definitions count as usages of their own fragment names. This heuristic
    // prevents accidentally removing all fragment definitions from the
    // document just because it contains no operations that use the fragments.
    a === 0 && !n(g.name.value).removed && m.add(g.name.value);
  }), m.forEach(function(g) {
    y(n(g)).fragmentSpreads.forEach(function(_) {
      m.add(_);
    });
  });
  var v = function(g) {
    return !!// A fragment definition will be removed if there are no spreads that refer
    // to it, or the fragment was explicitly removed because it had no fields
    // other than __typename.
    (!m.has(g) || n(g).removed);
  }, b = {
    enter: function(g) {
      if (v(g.name.value))
        return null;
    }
  };
  return jp(Xe(d, {
    // If the fragment is going to be removed, then leaving any dangling
    // FragmentSpread nodes with the same name would be a mistake.
    FragmentSpread: b,
    // This is where the fragment definition is actually removed.
    FragmentDefinition: b,
    OperationDefinition: {
      leave: function(g) {
        if (g.variableDefinitions) {
          var _ = y(
            // If an operation is anonymous, we use the empty string as its key.
            r(g.name && g.name.value)
          ).transitiveVars;
          if (_.size < g.variableDefinitions.length)
            return D(D({}, g), { variableDefinitions: g.variableDefinitions.filter(function(w) {
              return _.has(w.variable.name.value);
            }) });
        }
      }
    }
  }));
}
var Io = Object.assign(function(t) {
  return Xe(t, {
    SelectionSet: {
      enter: function(e, r, n) {
        if (!(n && n.kind === Te.OPERATION_DEFINITION)) {
          var i = e.selections;
          if (i) {
            var a = i.some(function(s) {
              return ht(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!a) {
              var o = n;
              if (!(ht(o) && o.directives && o.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return D(D({}, e), { selections: Ne(Ne([], i, !0), [As], !1) });
            }
          }
        }
      }
    }
  });
}, {
  added: function(t) {
    return t === As;
  }
});
function $p(t) {
  var e = lt(t), r = e.operation;
  if (r === "query")
    return t;
  var n = Xe(t, {
    OperationDefinition: {
      enter: function(i) {
        return D(D({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function nl(t) {
  Ht(t);
  var e = rl([
    {
      test: function(r) {
        return r.name.value === "client";
      },
      remove: !0
    }
  ], t);
  return e;
}
function Bp(t) {
  return Ht(t), Xe(t, {
    FragmentSpread: function(e) {
      var r;
      if (!(!((r = e.directives) === null || r === void 0) && r.some(function(n) {
        return n.name.value === "unmask";
      })))
        return D(D({}, e), { directives: Ne(Ne([], e.directives || [], !0), [
          {
            kind: Te.DIRECTIVE,
            name: { kind: Te.NAME, value: "nonreactive" }
          }
        ], !1) });
    }
  });
}
var Up = Object.prototype.hasOwnProperty;
function ks() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return On(t);
}
function On(t) {
  var e = t[0] || {}, r = t.length;
  if (r > 1)
    for (var n = new yt(), i = 1; i < r; ++i)
      e = n.merge(e, t[i]);
  return e;
}
var Vp = function(t, e, r) {
  return this.merge(t[r], e[r]);
}, yt = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = Vp), this.reconciler = e, this.isObject = Ee, this.pastCopies = /* @__PURE__ */ new Set();
    }
    return t.prototype.merge = function(e, r) {
      for (var n = this, i = [], a = 2; a < arguments.length; a++)
        i[a - 2] = arguments[a];
      return Ee(r) && Ee(e) ? (Object.keys(r).forEach(function(o) {
        if (Up.call(e, o)) {
          var s = e[o];
          if (r[o] !== s) {
            var u = n.reconciler.apply(n, Ne([
              e,
              r,
              o
            ], i, !1));
            u !== s && (e = n.shallowCopyForMerge(e), e[o] = u);
          }
        } else
          e = n.shallowCopyForMerge(e), e[o] = r[o];
      }), e) : r;
    }, t.prototype.shallowCopyForMerge = function(e) {
      return Ee(e) && (this.pastCopies.has(e) || (Array.isArray(e) ? e = e.slice(0) : e = D({ __proto__: Object.getPrototypeOf(e) }, e), this.pastCopies.add(e))), e;
    }, t;
  }()
);
function Wp(t, e) {
  var r = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r) return (r = r.call(t)).next.bind(r);
  if (Array.isArray(t) || (r = zp(t)) || e) {
    r && (t = r);
    var n = 0;
    return function() {
      return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zp(t, e) {
  if (t) {
    if (typeof t == "string") return Cs(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Cs(t, e);
  }
}
function Cs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
function Is(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function xo(t, e, r) {
  return e && Is(t.prototype, e), r && Is(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
var Do = function() {
  return typeof Symbol == "function";
}, No = function(t) {
  return Do() && !!Symbol[t];
}, Lo = function(t) {
  return No(t) ? Symbol[t] : "@@" + t;
};
Do() && !No("observable") && (Symbol.observable = Symbol("observable"));
var Qp = Lo("iterator"), Ya = Lo("observable"), il = Lo("species");
function cn(t, e) {
  var r = t[e];
  if (r != null) {
    if (typeof r != "function") throw new TypeError(r + " is not a function");
    return r;
  }
}
function ir(t) {
  var e = t.constructor;
  return e !== void 0 && (e = e[il], e === null && (e = void 0)), e !== void 0 ? e : me;
}
function Yp(t) {
  return t instanceof me;
}
function zt(t) {
  zt.log ? zt.log(t) : setTimeout(function() {
    throw t;
  });
}
function Wr(t) {
  Promise.resolve().then(function() {
    try {
      t();
    } catch (e) {
      zt(e);
    }
  });
}
function al(t) {
  var e = t._cleanup;
  if (e !== void 0 && (t._cleanup = void 0, !!e))
    try {
      if (typeof e == "function")
        e();
      else {
        var r = cn(e, "unsubscribe");
        r && r.call(e);
      }
    } catch (n) {
      zt(n);
    }
}
function Ha(t) {
  t._observer = void 0, t._queue = void 0, t._state = "closed";
}
function Hp(t) {
  var e = t._queue;
  if (e) {
    t._queue = void 0, t._state = "ready";
    for (var r = 0; r < e.length && (ol(t, e[r].type, e[r].value), t._state !== "closed"); ++r)
      ;
  }
}
function ol(t, e, r) {
  t._state = "running";
  var n = t._observer;
  try {
    var i = cn(n, e);
    switch (e) {
      case "next":
        i && i.call(n, r);
        break;
      case "error":
        if (Ha(t), i) i.call(n, r);
        else throw r;
        break;
      case "complete":
        Ha(t), i && i.call(n);
        break;
    }
  } catch (a) {
    zt(a);
  }
  t._state === "closed" ? al(t) : t._state === "running" && (t._state = "ready");
}
function Xn(t, e, r) {
  if (t._state !== "closed") {
    if (t._state === "buffering") {
      t._queue.push({
        type: e,
        value: r
      });
      return;
    }
    if (t._state !== "ready") {
      t._state = "buffering", t._queue = [{
        type: e,
        value: r
      }], Wr(function() {
        return Hp(t);
      });
      return;
    }
    ol(t, e, r);
  }
}
var Gp = /* @__PURE__ */ function() {
  function t(r, n) {
    this._cleanup = void 0, this._observer = r, this._queue = void 0, this._state = "initializing";
    var i = new Jp(this);
    try {
      this._cleanup = n.call(void 0, i);
    } catch (a) {
      i.error(a);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  var e = t.prototype;
  return e.unsubscribe = function() {
    this._state !== "closed" && (Ha(this), al(this));
  }, xo(t, [{
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), t;
}(), Jp = /* @__PURE__ */ function() {
  function t(r) {
    this._subscription = r;
  }
  var e = t.prototype;
  return e.next = function(n) {
    Xn(this._subscription, "next", n);
  }, e.error = function(n) {
    Xn(this._subscription, "error", n);
  }, e.complete = function() {
    Xn(this._subscription, "complete");
  }, xo(t, [{
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), t;
}(), me = /* @__PURE__ */ function() {
  function t(r) {
    if (!(this instanceof t)) throw new TypeError("Observable cannot be called as a function");
    if (typeof r != "function") throw new TypeError("Observable initializer must be a function");
    this._subscriber = r;
  }
  var e = t.prototype;
  return e.subscribe = function(n) {
    return (typeof n != "object" || n === null) && (n = {
      next: n,
      error: arguments[1],
      complete: arguments[2]
    }), new Gp(n, this._subscriber);
  }, e.forEach = function(n) {
    var i = this;
    return new Promise(function(a, o) {
      if (typeof n != "function") {
        o(new TypeError(n + " is not a function"));
        return;
      }
      function s() {
        u.unsubscribe(), a();
      }
      var u = i.subscribe({
        next: function(f) {
          try {
            n(f, s);
          } catch (c) {
            o(c), u.unsubscribe();
          }
        },
        error: o,
        complete: a
      });
    });
  }, e.map = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var a = ir(this);
    return new a(function(o) {
      return i.subscribe({
        next: function(s) {
          try {
            s = n(s);
          } catch (u) {
            return o.error(u);
          }
          o.next(s);
        },
        error: function(s) {
          o.error(s);
        },
        complete: function() {
          o.complete();
        }
      });
    });
  }, e.filter = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var a = ir(this);
    return new a(function(o) {
      return i.subscribe({
        next: function(s) {
          try {
            if (!n(s)) return;
          } catch (u) {
            return o.error(u);
          }
          o.next(s);
        },
        error: function(s) {
          o.error(s);
        },
        complete: function() {
          o.complete();
        }
      });
    });
  }, e.reduce = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var a = ir(this), o = arguments.length > 1, s = !1, u = arguments[1], f = u;
    return new a(function(c) {
      return i.subscribe({
        next: function(l) {
          var d = !s;
          if (s = !0, !d || o)
            try {
              f = n(f, l);
            } catch (y) {
              return c.error(y);
            }
          else
            f = l;
        },
        error: function(l) {
          c.error(l);
        },
        complete: function() {
          if (!s && !o) return c.error(new TypeError("Cannot reduce an empty sequence"));
          c.next(f), c.complete();
        }
      });
    });
  }, e.concat = function() {
    for (var n = this, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    var s = ir(this);
    return new s(function(u) {
      var f, c = 0;
      function l(d) {
        f = d.subscribe({
          next: function(y) {
            u.next(y);
          },
          error: function(y) {
            u.error(y);
          },
          complete: function() {
            c === a.length ? (f = void 0, u.complete()) : l(s.from(a[c++]));
          }
        });
      }
      return l(n), function() {
        f && (f.unsubscribe(), f = void 0);
      };
    });
  }, e.flatMap = function(n) {
    var i = this;
    if (typeof n != "function") throw new TypeError(n + " is not a function");
    var a = ir(this);
    return new a(function(o) {
      var s = [], u = i.subscribe({
        next: function(c) {
          if (n)
            try {
              c = n(c);
            } catch (d) {
              return o.error(d);
            }
          var l = a.from(c).subscribe({
            next: function(d) {
              o.next(d);
            },
            error: function(d) {
              o.error(d);
            },
            complete: function() {
              var d = s.indexOf(l);
              d >= 0 && s.splice(d, 1), f();
            }
          });
          s.push(l);
        },
        error: function(c) {
          o.error(c);
        },
        complete: function() {
          f();
        }
      });
      function f() {
        u.closed && s.length === 0 && o.complete();
      }
      return function() {
        s.forEach(function(c) {
          return c.unsubscribe();
        }), u.unsubscribe();
      };
    });
  }, e[Ya] = function() {
    return this;
  }, t.from = function(n) {
    var i = typeof this == "function" ? this : t;
    if (n == null) throw new TypeError(n + " is not an object");
    var a = cn(n, Ya);
    if (a) {
      var o = a.call(n);
      if (Object(o) !== o) throw new TypeError(o + " is not an object");
      return Yp(o) && o.constructor === i ? o : new i(function(s) {
        return o.subscribe(s);
      });
    }
    if (No("iterator") && (a = cn(n, Qp), a))
      return new i(function(s) {
        Wr(function() {
          if (!s.closed) {
            for (var u = Wp(a.call(n)), f; !(f = u()).done; ) {
              var c = f.value;
              if (s.next(c), s.closed) return;
            }
            s.complete();
          }
        });
      });
    if (Array.isArray(n))
      return new i(function(s) {
        Wr(function() {
          if (!s.closed) {
            for (var u = 0; u < n.length; ++u)
              if (s.next(n[u]), s.closed) return;
            s.complete();
          }
        });
      });
    throw new TypeError(n + " is not observable");
  }, t.of = function() {
    for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
      i[a] = arguments[a];
    var o = typeof this == "function" ? this : t;
    return new o(function(s) {
      Wr(function() {
        if (!s.closed) {
          for (var u = 0; u < i.length; ++u)
            if (s.next(i[u]), s.closed) return;
          s.complete();
        }
      });
    });
  }, xo(t, null, [{
    key: il,
    get: function() {
      return this;
    }
  }]), t;
}();
Do() && Object.defineProperty(me, Symbol("extensions"), {
  value: {
    symbol: Ya,
    hostReportError: zt
  },
  configurable: !0
});
function Kp(t) {
  var e, r = t.Symbol;
  if (typeof r == "function")
    if (r.observable)
      e = r.observable;
    else {
      typeof r.for == "function" ? e = r.for("https://github.com/benlesh/symbol-observable") : e = r("https://github.com/benlesh/symbol-observable");
      try {
        r.observable = e;
      } catch {
      }
    }
  else
    e = "@@observable";
  return e;
}
var It;
typeof self < "u" ? It = self : typeof window < "u" ? It = window : typeof global < "u" ? It = global : typeof module < "u" ? It = module : It = Function("return this")();
Kp(It);
var xs = me.prototype, Ds = "@@observable";
xs[Ds] || (xs[Ds] = function() {
  return this;
});
function Xp(t) {
  return t.catch(function() {
  }), t;
}
var Zp = Object.prototype.toString;
function sl(t) {
  return Ga(t);
}
function Ga(t, e) {
  switch (Zp.call(t)) {
    case "[object Array]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var r = t.slice(0);
      return e.set(t, r), r.forEach(function(i, a) {
        r[a] = Ga(i, e);
      }), r;
    }
    case "[object Object]": {
      if (e = e || /* @__PURE__ */ new Map(), e.has(t))
        return e.get(t);
      var n = Object.create(Object.getPrototypeOf(t));
      return e.set(t, n), Object.keys(t).forEach(function(i) {
        n[i] = Ga(t[i], e);
      }), n;
    }
    default:
      return t;
  }
}
function ey(t) {
  var e = /* @__PURE__ */ new Set([t]);
  return e.forEach(function(r) {
    Ee(r) && ty(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      Ee(r[n]) && e.add(r[n]);
    });
  }), t;
}
function ty(t) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(t))
    try {
      Object.freeze(t);
    } catch (e) {
      if (e instanceof TypeError)
        return null;
      throw e;
    }
  return t;
}
function Qt(t) {
  return globalThis.__DEV__ !== !1 && ey(t), t;
}
function pr(t, e, r) {
  var n = [];
  t.forEach(function(i) {
    return i[e] && n.push(i);
  }), n.forEach(function(i) {
    return i[e](r);
  });
}
function Zn(t, e, r) {
  return new me(function(n) {
    var i = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(u) {
        return new Promise(function(f) {
          return f(u());
        });
      }
    };
    function a(u, f) {
      return function(c) {
        if (u) {
          var l = function() {
            return n.closed ? (
              /* will be swallowed */
              0
            ) : u(c);
          };
          i = i.then(l, l).then(function(d) {
            return n.next(d);
          }, function(d) {
            return n.error(d);
          });
        } else
          n[f](c);
      };
    }
    var o = {
      next: a(e, "next"),
      error: a(r, "error"),
      complete: function() {
        i.then(function() {
          return n.complete();
        });
      }
    }, s = t.subscribe(o);
    return function() {
      return s.unsubscribe();
    };
  });
}
function ul(t) {
  function e(r) {
    Object.defineProperty(t, r, { value: me });
  }
  return To && Symbol.species && e(Symbol.species), e("@@species"), t;
}
function Ns(t) {
  return t && typeof t.then == "function";
}
var xt = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r) {
      var n = t.call(this, function(i) {
        return n.addObserver(i), function() {
          return n.removeObserver(i);
        };
      }) || this;
      return n.observers = /* @__PURE__ */ new Set(), n.promise = new Promise(function(i, a) {
        n.resolve = i, n.reject = a;
      }), n.handlers = {
        next: function(i) {
          n.sub !== null && (n.latest = ["next", i], n.notify("next", i), pr(n.observers, "next", i));
        },
        error: function(i) {
          var a = n.sub;
          a !== null && (a && setTimeout(function() {
            return a.unsubscribe();
          }), n.sub = null, n.latest = ["error", i], n.reject(i), n.notify("error", i), pr(n.observers, "error", i));
        },
        complete: function() {
          var i = n, a = i.sub, o = i.sources, s = o === void 0 ? [] : o;
          if (a !== null) {
            var u = s.shift();
            u ? Ns(u) ? u.then(function(f) {
              return n.sub = f.subscribe(n.handlers);
            }, n.handlers.error) : n.sub = u.subscribe(n.handlers) : (a && setTimeout(function() {
              return a.unsubscribe();
            }), n.sub = null, n.latest && n.latest[0] === "next" ? n.resolve(n.latest[1]) : n.resolve(), n.notify("complete"), pr(n.observers, "complete"));
          }
        }
      }, n.nextResultListeners = /* @__PURE__ */ new Set(), n.cancel = function(i) {
        n.reject(i), n.sources = [], n.handlers.error(i);
      }, n.promise.catch(function(i) {
      }), typeof r == "function" && (r = [new me(r)]), Ns(r) ? r.then(function(i) {
        return n.start(i);
      }, n.handlers.error) : n.start(r), n;
    }
    return e.prototype.start = function(r) {
      this.sub === void 0 && (this.sources = Array.from(r), this.handlers.complete());
    }, e.prototype.deliverLastMessage = function(r) {
      if (this.latest) {
        var n = this.latest[0], i = r[n];
        i && i.call(r, this.latest[1]), this.sub === null && n === "next" && r.complete && r.complete();
      }
    }, e.prototype.addObserver = function(r) {
      this.observers.has(r) || (this.deliverLastMessage(r), this.observers.add(r));
    }, e.prototype.removeObserver = function(r) {
      this.observers.delete(r) && this.observers.size < 1 && this.handlers.complete();
    }, e.prototype.notify = function(r, n) {
      var i = this.nextResultListeners;
      i.size && (this.nextResultListeners = /* @__PURE__ */ new Set(), i.forEach(function(a) {
        return a(r, n);
      }));
    }, e.prototype.beforeNext = function(r) {
      var n = !1;
      this.nextResultListeners.add(function(i, a) {
        n || (n = !0, r(i, a));
      });
    }, e;
  }(me)
);
ul(xt);
function qt(t) {
  return "incremental" in t;
}
function ry(t) {
  return "hasNext" in t && "data" in t;
}
function ny(t) {
  return qt(t) || ry(t);
}
function iy(t) {
  return Ee(t) && "payload" in t;
}
function cl(t, e) {
  var r = t, n = new yt();
  return qt(e) && Be(e.incremental) && e.incremental.forEach(function(i) {
    for (var a = i.data, o = i.path, s = o.length - 1; s >= 0; --s) {
      var u = o[s], f = !isNaN(+u), c = f ? [] : {};
      c[u] = a, a = c;
    }
    r = n.merge(r, a);
  }), r;
}
function zr(t) {
  var e = Ja(t);
  return Be(e);
}
function Ja(t) {
  var e = Be(t.errors) ? t.errors.slice(0) : [];
  return qt(t) && Be(t.incremental) && t.incremental.forEach(function(r) {
    r.errors && e.push.apply(e, r.errors);
  }), e;
}
function Rt() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = /* @__PURE__ */ Object.create(null);
  return t.forEach(function(n) {
    n && Object.keys(n).forEach(function(i) {
      var a = n[i];
      a !== void 0 && (r[i] = a);
    });
  }), r;
}
function Qr(t, e) {
  return Rt(t, e, e.variables && {
    variables: Rt(D(D({}, t && t.variables), e.variables))
  });
}
function ei(t) {
  return new me(function(e) {
    e.error(t);
  });
}
var fl = function(t, e, r) {
  var n = new Error(r);
  throw n.name = "ServerError", n.response = t, n.statusCode = t.status, n.result = e, n;
};
function ay(t) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    if (e.indexOf(i) < 0)
      throw Fe(46, i);
  }
  return t;
}
function oy(t, e) {
  var r = D({}, t), n = function(a) {
    typeof a == "function" ? r = D(D({}, r), a(r)) : r = D(D({}, r), a);
  }, i = function() {
    return D({}, r);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: i
  }), e;
}
function sy(t) {
  var e = {
    variables: t.variables || {},
    extensions: t.extensions || {},
    operationName: t.operationName,
    query: t.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? fr(e.query) || void 0 : ""), e;
}
function uy(t, e) {
  var r = D({}, t), n = new Set(Object.keys(t));
  return Xe(e, {
    Variable: function(i, a, o) {
      o && o.kind !== "VariableDefinition" && n.delete(i.name.value);
    }
  }), n.forEach(function(i) {
    delete r[i];
  }), r;
}
function Ls(t, e) {
  return e ? e(t) : me.of();
}
function ar(t) {
  return typeof t == "function" ? new et(t) : t;
}
function Lr(t) {
  return t.request.length <= 1;
}
var et = (
  /** @class */
  function() {
    function t(e) {
      e && (this.request = e);
    }
    return t.empty = function() {
      return new t(function() {
        return me.of();
      });
    }, t.from = function(e) {
      return e.length === 0 ? t.empty() : e.map(ar).reduce(function(r, n) {
        return r.concat(n);
      });
    }, t.split = function(e, r, n) {
      var i = ar(r), a = ar(n || new t(Ls)), o;
      return Lr(i) && Lr(a) ? o = new t(function(s) {
        return e(s) ? i.request(s) || me.of() : a.request(s) || me.of();
      }) : o = new t(function(s, u) {
        return e(s) ? i.request(s, u) || me.of() : a.request(s, u) || me.of();
      }), Object.assign(o, { left: i, right: a });
    }, t.execute = function(e, r) {
      return e.request(oy(r.context, sy(ay(r)))) || me.of();
    }, t.concat = function(e, r) {
      var n = ar(e);
      if (Lr(n))
        return globalThis.__DEV__ !== !1 && re.warn(38, n), n;
      var i = ar(r), a;
      return Lr(i) ? a = new t(function(o) {
        return n.request(o, function(s) {
          return i.request(s) || me.of();
        }) || me.of();
      }) : a = new t(function(o, s) {
        return n.request(o, function(u) {
          return i.request(u, s) || me.of();
        }) || me.of();
      }), Object.assign(a, { left: n, right: i });
    }, t.prototype.split = function(e, r, n) {
      return this.concat(t.split(e, r, n || new t(Ls)));
    }, t.prototype.concat = function(e) {
      return t.concat(this, e);
    }, t.prototype.request = function(e, r) {
      throw Fe(39);
    }, t.prototype.onError = function(e, r) {
      if (r && r.error)
        return r.error(e), !1;
      throw e;
    }, t.prototype.setOnError = function(e) {
      return this.onError = e, this;
    }, t;
  }()
), cy = et.from, ti = et.split, Ka = et.execute;
function fy(t) {
  var e, r = t[Symbol.asyncIterator]();
  return e = {
    next: function() {
      return r.next();
    }
  }, e[Symbol.asyncIterator] = function() {
    return this;
  }, e;
}
function ly(t) {
  var e = null, r = null, n = !1, i = [], a = [];
  function o(l) {
    if (!r) {
      if (a.length) {
        var d = a.shift();
        if (Array.isArray(d) && d[0])
          return d[0]({ value: l, done: !1 });
      }
      i.push(l);
    }
  }
  function s(l) {
    r = l;
    var d = a.slice();
    d.forEach(function(y) {
      y[1](l);
    }), !e || e();
  }
  function u() {
    n = !0;
    var l = a.slice();
    l.forEach(function(d) {
      d[0]({ value: void 0, done: !0 });
    }), !e || e();
  }
  e = function() {
    e = null, t.removeListener("data", o), t.removeListener("error", s), t.removeListener("end", u), t.removeListener("finish", u), t.removeListener("close", u);
  }, t.on("data", o), t.on("error", s), t.on("end", u), t.on("finish", u), t.on("close", u);
  function f() {
    return new Promise(function(l, d) {
      if (r)
        return d(r);
      if (i.length)
        return l({ value: i.shift(), done: !1 });
      if (n)
        return l({ value: void 0, done: !0 });
      a.push([l, d]);
    });
  }
  var c = {
    next: function() {
      return f();
    }
  };
  return bn && (c[Symbol.asyncIterator] = function() {
    return this;
  }), c;
}
function dy(t) {
  var e = !1, r = {
    next: function() {
      return e ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (e = !0, new Promise(function(n, i) {
        t.then(function(a) {
          n({ value: a, done: !1 });
        }).catch(i);
      }));
    }
  };
  return bn && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
function Fs(t) {
  var e = {
    next: function() {
      return t.read();
    }
  };
  return bn && (e[Symbol.asyncIterator] = function() {
    return this;
  }), e;
}
function hy(t) {
  return !!t.body;
}
function py(t) {
  return !!t.getReader;
}
function yy(t) {
  return !!(bn && t[Symbol.asyncIterator]);
}
function my(t) {
  return !!t.stream;
}
function gy(t) {
  return !!t.arrayBuffer;
}
function vy(t) {
  return !!t.pipe;
}
function by(t) {
  var e = t;
  if (hy(t) && (e = t.body), yy(e))
    return fy(e);
  if (py(e))
    return Fs(e.getReader());
  if (my(e))
    return Fs(e.stream().getReader());
  if (gy(e))
    return dy(e.arrayBuffer());
  if (vy(e))
    return ly(e);
  throw new Error("Unknown body type for responseIterator. Please pass a streamable response.");
}
var Tn = Symbol();
function ll(t) {
  return t.extensions ? Array.isArray(t.extensions[Tn]) : !1;
}
function dl(t) {
  return t.hasOwnProperty("graphQLErrors");
}
var Ey = function(t) {
  var e = Ne(Ne(Ne([], t.graphQLErrors, !0), t.clientErrors, !0), t.protocolErrors, !0);
  return t.networkError && e.push(t.networkError), e.map(function(r) {
    return Ee(r) && r.message || "Error message not found.";
  }).join(`
`);
}, Ke = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r) {
      var n = r.graphQLErrors, i = r.protocolErrors, a = r.clientErrors, o = r.networkError, s = r.errorMessage, u = r.extraInfo, f = t.call(this, s) || this;
      return f.name = "ApolloError", f.graphQLErrors = n || [], f.protocolErrors = i || [], f.clientErrors = a || [], f.networkError = o || null, f.message = s || Ey(f), f.extraInfo = u, f.cause = Ne(Ne(Ne([
        o
      ], n || [], !0), i || [], !0), a || [], !0).find(function(c) {
        return !!c;
      }) || null, f.__proto__ = e.prototype, f;
    }
    return e;
  }(Error)
), js = Object.prototype.hasOwnProperty;
function wy(t, e) {
  return ot(this, void 0, void 0, function() {
    var r, n, i, a, o, s, u, f, c, l, d, y, m, v, b, g, _, w, A, P, C, B, L, Y;
    return st(this, function(G) {
      switch (G.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
          r = new TextDecoder("utf-8"), n = (Y = t.headers) === null || Y === void 0 ? void 0 : Y.get("content-type"), i = "boundary=", a = n?.includes(i) ? n?.substring(n?.indexOf(i) + i.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", o = `\r
--`.concat(a), s = "", u = by(t), f = !0, G.label = 1;
        case 1:
          return f ? [4, u.next()] : [3, 3];
        case 2:
          for (c = G.sent(), l = c.value, d = c.done, y = typeof l == "string" ? l : r.decode(l), m = s.length - o.length + 1, f = !d, s += y, v = s.indexOf(o, m); v > -1; ) {
            if (b = void 0, B = [
              s.slice(0, v),
              s.slice(v + o.length)
            ], b = B[0], s = B[1], g = b.indexOf(`\r
\r
`), _ = _y(b.slice(0, g)), w = _["content-type"], w && w.toLowerCase().indexOf("application/json") === -1)
              throw new Error("Unsupported patch content type: application/json is required.");
            if (A = b.slice(g), A) {
              if (P = hl(t, A), Object.keys(P).length > 1 || "data" in P || "incremental" in P || "errors" in P || "payload" in P)
                if (iy(P)) {
                  if (C = {}, "payload" in P) {
                    if (Object.keys(P).length === 1 && P.payload === null)
                      return [
                        2
                        /*return*/
                      ];
                    C = D({}, P.payload);
                  }
                  "errors" in P && (C = D(D({}, C), { extensions: D(D({}, "extensions" in C ? C.extensions : null), (L = {}, L[Tn] = P.errors, L)) })), e(C);
                } else
                  e(P);
              else if (
                // If the chunk contains only a "hasNext: false", we can call
                // observer.complete() immediately.
                Object.keys(P).length === 1 && "hasNext" in P && !P.hasNext
              )
                return [
                  2
                  /*return*/
                ];
            }
            v = s.indexOf(o);
          }
          return [3, 1];
        case 3:
          return [
            2
            /*return*/
          ];
      }
    });
  });
}
function _y(t) {
  var e = {};
  return t.split(`
`).forEach(function(r) {
    var n = r.indexOf(":");
    if (n > -1) {
      var i = r.slice(0, n).trim().toLowerCase(), a = r.slice(n + 1).trim();
      e[i] = a;
    }
  }), e;
}
function hl(t, e) {
  if (t.status >= 300) {
    var r = function() {
      try {
        return JSON.parse(e);
      } catch {
        return e;
      }
    };
    fl(t, r(), "Response not successful: Received status code ".concat(t.status));
  }
  try {
    return JSON.parse(e);
  } catch (i) {
    var n = i;
    throw n.name = "ServerParseError", n.response = t, n.statusCode = t.status, n.bodyText = e, n;
  }
}
function Sy(t, e) {
  t.result && t.result.errors && t.result.data && e.next(t.result), e.error(t);
}
function Oy(t) {
  return function(e) {
    return e.text().then(function(r) {
      return hl(e, r);
    }).then(function(r) {
      return !Array.isArray(r) && !js.call(r, "data") && !js.call(r, "errors") && fl(e, r, "Server response was missing for query '".concat(Array.isArray(t) ? t.map(function(n) {
        return n.operationName;
      }) : t.operationName, "'.")), r;
    });
  };
}
var Xa = function(t, e) {
  var r;
  try {
    r = JSON.stringify(t);
  } catch (i) {
    var n = Fe(42, e, i.message);
    throw n.parseError = i, n;
  }
  return r;
}, Ty = {
  includeQuery: !0,
  includeExtensions: !1,
  preserveHeaderCase: !1
}, Ry = {
  // headers are case insensitive (https://stackoverflow.com/a/5259004)
  accept: "*/*",
  // The content-type header describes the type of the body of the request, and
  // so it typically only is sent with requests that actually have bodies. One
  // could imagine that Apollo Client would remove this header when constructing
  // a GET request (which has no body), but we historically have not done that.
  // This means that browsers will preflight all Apollo Client requests (even
  // GET requests). Apollo Server's CSRF prevention feature (introduced in
  // AS3.7) takes advantage of this fact and does not block requests with this
  // header. If you want to drop this header from GET requests, then you should
  // probably replace it with a `apollo-require-preflight` header, or servers
  // with CSRF prevention enabled might block your GET request. See
  // https://www.apollographql.com/docs/apollo-server/security/cors/#preventing-cross-site-request-forgery-csrf
  // for more details.
  "content-type": "application/json"
}, Py = {
  method: "POST"
}, Ay = {
  http: Ty,
  headers: Ry,
  options: Py
}, My = function(t, e) {
  return e(t);
};
function ky(t, e) {
  for (var r = [], n = 2; n < arguments.length; n++)
    r[n - 2] = arguments[n];
  var i = {}, a = {};
  r.forEach(function(l) {
    i = D(D(D({}, i), l.options), { headers: D(D({}, i.headers), l.headers) }), l.credentials && (i.credentials = l.credentials), a = D(D({}, a), l.http);
  }), i.headers && (i.headers = Cy(i.headers, a.preserveHeaderCase));
  var o = t.operationName, s = t.extensions, u = t.variables, f = t.query, c = { operationName: o, variables: u };
  return a.includeExtensions && (c.extensions = s), a.includeQuery && (c.query = e(f, ct)), {
    options: i,
    body: c
  };
}
function Cy(t, e) {
  if (!e) {
    var r = {};
    return Object.keys(Object(t)).forEach(function(a) {
      r[a.toLowerCase()] = t[a];
    }), r;
  }
  var n = {};
  Object.keys(Object(t)).forEach(function(a) {
    n[a.toLowerCase()] = {
      originalName: a,
      value: t[a]
    };
  });
  var i = {};
  return Object.keys(n).forEach(function(a) {
    i[n[a].originalName] = n[a].value;
  }), i;
}
var Iy = function(t) {
  if (!t && typeof fetch > "u")
    throw Fe(40);
}, xy = function(t, e) {
  var r = t.getContext(), n = r.uri;
  return n || (typeof e == "function" ? e(t) : e || "/graphql");
};
function Dy(t, e) {
  var r = [], n = function(l, d) {
    r.push("".concat(l, "=").concat(encodeURIComponent(d)));
  };
  if ("query" in e && n("query", e.query), e.operationName && n("operationName", e.operationName), e.variables) {
    var i = void 0;
    try {
      i = Xa(e.variables, "Variables map");
    } catch (l) {
      return { parseError: l };
    }
    n("variables", i);
  }
  if (e.extensions) {
    var a = void 0;
    try {
      a = Xa(e.extensions, "Extensions map");
    } catch (l) {
      return { parseError: l };
    }
    n("extensions", a);
  }
  var o = "", s = t, u = t.indexOf("#");
  u !== -1 && (o = t.substr(u), s = t.substr(0, u));
  var f = s.indexOf("?") === -1 ? "?" : "&", c = s + f + r.join("&") + o;
  return { newURI: c };
}
var qs = We(function() {
  return fetch;
}), Ny = function(t) {
  t === void 0 && (t = {});
  var e = t.uri, r = e === void 0 ? "/graphql" : e, n = t.fetch, i = t.print, a = i === void 0 ? My : i, o = t.includeExtensions, s = t.preserveHeaderCase, u = t.useGETForQueries, f = t.includeUnusedVariables, c = f === void 0 ? !1 : f, l = Qe(t, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
  globalThis.__DEV__ !== !1 && Iy(n || qs);
  var d = {
    http: { includeExtensions: o, preserveHeaderCase: s },
    options: l.fetchOptions,
    credentials: l.credentials,
    headers: l.headers
  };
  return new et(function(y) {
    var m = xy(y, r), v = y.getContext(), b = {};
    if (v.clientAwareness) {
      var g = v.clientAwareness, _ = g.name, w = g.version;
      _ && (b["apollographql-client-name"] = _), w && (b["apollographql-client-version"] = w);
    }
    var A = D(D({}, b), v.headers), P = {
      http: v.http,
      options: v.fetchOptions,
      credentials: v.credentials,
      headers: A
    };
    if (vr(["client"], y.query)) {
      var C = nl(y.query);
      if (!C)
        return ei(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
      y.query = C;
    }
    var B = ky(y, a, Ay, d, P), L = B.options, Y = B.body;
    Y.variables && !c && (Y.variables = uy(Y.variables, y.query));
    var G;
    !L.signal && typeof AbortController < "u" && (G = new AbortController(), L.signal = G.signal);
    var J = function(V) {
      return V.kind === "OperationDefinition" && V.operation === "mutation";
    }, z = function(V) {
      return V.kind === "OperationDefinition" && V.operation === "subscription";
    }, ee = z(lt(y.query)), x = vr(["defer"], y.query);
    if (u && !y.query.definitions.some(J) && (L.method = "GET"), x || ee) {
      L.headers = L.headers || {};
      var M = "multipart/mixed;";
      ee && x && globalThis.__DEV__ !== !1 && re.warn(41), ee ? M += "boundary=graphql;subscriptionSpec=1.0,application/json" : x && (M += "deferSpec=20220824,application/json"), L.headers.accept = M;
    }
    if (L.method === "GET") {
      var N = Dy(m, Y), j = N.newURI, q = N.parseError;
      if (q)
        return ei(q);
      m = j;
    } else
      try {
        L.body = Xa(Y, "Payload");
      } catch (V) {
        return ei(V);
      }
    return new me(function(V) {
      var O = n || We(function() {
        return fetch;
      }) || qs, E = V.next.bind(V);
      return O(m, L).then(function(R) {
        var I;
        y.setContext({ response: R });
        var U = (I = R.headers) === null || I === void 0 ? void 0 : I.get("content-type");
        return U !== null && /^multipart\/mixed/i.test(U) ? wy(R, E) : Oy(y)(R).then(E);
      }).then(function() {
        G = void 0, V.complete();
      }).catch(function(R) {
        G = void 0, Sy(R, V);
      }), function() {
        G && G.abort();
      };
    });
  });
}, pl = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r) {
      r === void 0 && (r = {});
      var n = t.call(this, Ny(r).request) || this;
      return n.options = r, n;
    }
    return e;
  }(et)
);
const { toString: $s, hasOwnProperty: Ly } = Object.prototype, Bs = Function.prototype.toString, Za = /* @__PURE__ */ new Map();
function pe(t, e) {
  try {
    return eo(t, e);
  } finally {
    Za.clear();
  }
}
function eo(t, e) {
  if (t === e)
    return !0;
  const r = $s.call(t), n = $s.call(e);
  if (r !== n)
    return !1;
  switch (r) {
    case "[object Array]":
      if (t.length !== e.length)
        return !1;
    // Fall through to object case...
    case "[object Object]": {
      if (Vs(t, e))
        return !0;
      const i = Us(t), a = Us(e), o = i.length;
      if (o !== a.length)
        return !1;
      for (let s = 0; s < o; ++s)
        if (!Ly.call(e, i[s]))
          return !1;
      for (let s = 0; s < o; ++s) {
        const u = i[s];
        if (!eo(t[u], e[u]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return t.name === e.name && t.message === e.message;
    case "[object Number]":
      if (t !== t)
        return e !== e;
    // Fall through to shared +a === +b case...
    case "[object Boolean]":
    case "[object Date]":
      return +t == +e;
    case "[object RegExp]":
    case "[object String]":
      return t == `${e}`;
    case "[object Map]":
    case "[object Set]": {
      if (t.size !== e.size)
        return !1;
      if (Vs(t, e))
        return !0;
      const i = t.entries(), a = r === "[object Map]";
      for (; ; ) {
        const o = i.next();
        if (o.done)
          break;
        const [s, u] = o.value;
        if (!e.has(s) || a && !eo(u, e.get(s)))
          return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    // Buffer, in Node.js.
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      t = new Uint8Array(t), e = new Uint8Array(e);
    // Fall through...
    case "[object DataView]": {
      let i = t.byteLength;
      if (i === e.byteLength)
        for (; i-- && t[i] === e[i]; )
          ;
      return i === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const i = Bs.call(t);
      return i !== Bs.call(e) ? !1 : !qy(i, jy);
    }
  }
  return !1;
}
function Us(t) {
  return Object.keys(t).filter(Fy, t);
}
function Fy(t) {
  return this[t] !== void 0;
}
const jy = "{ [native code] }";
function qy(t, e) {
  const r = t.length - e.length;
  return r >= 0 && t.indexOf(e, r) === r;
}
function Vs(t, e) {
  let r = Za.get(t);
  if (r) {
    if (r.has(e))
      return !0;
  } else
    Za.set(t, r = /* @__PURE__ */ new Set());
  return r.add(e), !1;
}
function yl(t, e, r, n) {
  var i = e.data, a = Qe(e, ["data"]), o = r.data, s = Qe(r, ["data"]);
  return pe(a, s) && Yr(lt(t).selectionSet, i, o, {
    fragmentMap: Yt(Gt(t)),
    variables: n
  });
}
function Yr(t, e, r, n) {
  if (e === r)
    return !0;
  var i = /* @__PURE__ */ new Set();
  return t.selections.every(function(a) {
    if (i.has(a) || (i.add(a), !Or(a, n.variables)) || Ws(a))
      return !0;
    if (ht(a)) {
      var o = nt(a), s = e && e[o], u = r && r[o], f = a.selectionSet;
      if (!f)
        return pe(s, u);
      var c = Array.isArray(s), l = Array.isArray(u);
      if (c !== l)
        return !1;
      if (c && l) {
        var d = s.length;
        if (u.length !== d)
          return !1;
        for (var y = 0; y < d; ++y)
          if (!Yr(f, s[y], u[y], n))
            return !1;
        return !0;
      }
      return Yr(f, s, u, n);
    } else {
      var m = En(a, n.fragmentMap);
      if (m)
        return Ws(m) ? !0 : Yr(
          m.selectionSet,
          // Notice that we reuse the same aResult and bResult values here,
          // since the fragment ...spread does not specify a field name, but
          // consists of multiple fields (within the fragment's selection set)
          // that should be applied to the current result value(s).
          e,
          r,
          n
        );
    }
  });
}
function Ws(t) {
  return !!t.directives && t.directives.some($y);
}
function $y(t) {
  return t.name.value === "nonreactive";
}
var ml = kt ? WeakMap : Map, gl = Oo ? WeakSet : Set, Fo = new Tr(), zs = !1;
function vl() {
  zs || (zs = !0, globalThis.__DEV__ !== !1 && re.warn(52));
}
function bl(t, e, r) {
  return Fo.withValue(!0, function() {
    var n = lr(t, e, r, !1);
    return Object.isFrozen(t) && Qt(n), n;
  });
}
function By(t, e) {
  if (e.has(t))
    return e.get(t);
  var r = Array.isArray(t) ? [] : /* @__PURE__ */ Object.create(null);
  return e.set(t, r), r;
}
function lr(t, e, r, n, i) {
  var a, o = r.knownChanged, s = By(t, r.mutableTargets);
  if (Array.isArray(t)) {
    for (var u = 0, f = Array.from(t.entries()); u < f.length; u++) {
      var c = f[u], l = c[0], d = c[1];
      if (d === null) {
        s[l] = null;
        continue;
      }
      var y = lr(d, e, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", "[").concat(l, "]") : void 0);
      o.has(y) && o.add(s), s[l] = y;
    }
    return o.has(s) ? s : t;
  }
  for (var m = 0, v = e.selections; m < v.length; m++) {
    var b = v[m], g = void 0;
    if (n && o.add(s), b.kind === Te.FIELD) {
      var _ = nt(b), w = b.selectionSet;
      if (g = s[_] || t[_], g === void 0)
        continue;
      if (w && g !== null) {
        var y = lr(t[_], w, r, n, globalThis.__DEV__ !== !1 ? "".concat(i || "", ".").concat(_) : void 0);
        o.has(y) && (g = y);
      }
      globalThis.__DEV__ === !1 && (s[_] = g), globalThis.__DEV__ !== !1 && (n && _ !== "__typename" && // either the field is not present in the memo object
      // or it has a `get` descriptor, not a `value` descriptor
      // => it is a warning accessor and we can overwrite it
      // with another accessor
      !(!((a = Object.getOwnPropertyDescriptor(s, _)) === null || a === void 0) && a.value) ? Object.defineProperty(s, _, Uy(_, g, i || "", r.operationName, r.operationType)) : (delete s[_], s[_] = g));
    }
    if (b.kind === Te.INLINE_FRAGMENT && (!b.typeCondition || r.cache.fragmentMatches(b, t.__typename)) && (g = lr(t, b.selectionSet, r, n, i)), b.kind === Te.FRAGMENT_SPREAD) {
      var A = b.name.value, P = r.fragmentMap[A] || (r.fragmentMap[A] = r.cache.lookupFragment(A));
      re(P, 47, A);
      var C = $h(b);
      C !== "mask" && (g = lr(t, P.selectionSet, r, C === "migrate", i));
    }
    o.has(g) && o.add(s);
  }
  return "__typename" in t && !("__typename" in s) && (s.__typename = t.__typename), Object.keys(s).length !== Object.keys(t).length && o.add(s), o.has(s) ? s : t;
}
function Uy(t, e, r, n, i) {
  var a = function() {
    return Fo.getValue() || (globalThis.__DEV__ !== !1 && re.warn(48, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(t).replace(/^\./, "")), a = function() {
      return e;
    }), e;
  };
  return {
    get: function() {
      return a();
    },
    set: function(o) {
      a = function() {
        return o;
      };
    },
    enumerable: !0,
    configurable: !0
  };
}
function El(t, e, r, n) {
  if (!r.fragmentMatches)
    return globalThis.__DEV__ !== !1 && vl(), t;
  var i = e.definitions.filter(function(o) {
    return o.kind === Te.FRAGMENT_DEFINITION;
  });
  typeof n > "u" && (re(i.length === 1, 49, i.length), n = i[0].name.value);
  var a = i.find(function(o) {
    return o.name.value === n;
  });
  return re(!!a, 50, n), t == null || pe(t, {}) ? t : bl(t, a.selectionSet, {
    operationType: "fragment",
    operationName: a.name.value,
    fragmentMap: Yt(Gt(e)),
    cache: r,
    mutableTargets: new ml(),
    knownChanged: new gl()
  });
}
function Vy(t, e, r) {
  var n;
  if (!r.fragmentMatches)
    return globalThis.__DEV__ !== !1 && vl(), t;
  var i = Tt(e);
  return re(i, 51), t == null ? t : bl(t, i.selectionSet, {
    operationType: i.operation,
    operationName: (n = i.name) === null || n === void 0 ? void 0 : n.value,
    fragmentMap: Yt(Gt(e)),
    cache: r,
    mutableTargets: new ml(),
    knownChanged: new gl()
  });
}
var wl = (
  /** @class */
  function() {
    function t() {
      this.assumeImmutableResults = !1, this.getFragmentDoc = Er(Hh, {
        max: Ze["cache.fragmentQueryDocuments"] || 1e3,
        cache: un
      });
    }
    return t.prototype.lookupFragment = function(e) {
      return null;
    }, t.prototype.batch = function(e) {
      var r = this, n = typeof e.optimistic == "string" ? e.optimistic : e.optimistic === !1 ? null : void 0, i;
      return this.performTransaction(function() {
        return i = e.update(r);
      }, n), i;
    }, t.prototype.recordOptimisticTransaction = function(e, r) {
      this.performTransaction(e, r);
    }, t.prototype.transformDocument = function(e) {
      return e;
    }, t.prototype.transformForLink = function(e) {
      return e;
    }, t.prototype.identify = function(e) {
    }, t.prototype.gc = function() {
      return [];
    }, t.prototype.modify = function(e) {
      return !1;
    }, t.prototype.readQuery = function(e, r) {
      return r === void 0 && (r = !!e.optimistic), this.read(D(D({}, e), { rootId: e.id || "ROOT_QUERY", optimistic: r }));
    }, t.prototype.watchFragment = function(e) {
      var r = this, n = e.fragment, i = e.fragmentName, a = e.from, o = e.optimistic, s = o === void 0 ? !0 : o, u = Qe(e, ["fragment", "fragmentName", "from", "optimistic"]), f = this.getFragmentDoc(n, i), c = typeof a > "u" || typeof a == "string" ? a : this.identify(a), l = !!e[Symbol.for("apollo.dataMasking")];
      if (globalThis.__DEV__ !== !1) {
        var d = i || Uf(n).name.value;
        c || globalThis.__DEV__ !== !1 && re.warn(1, d);
      }
      var y = D(D({}, u), { returnPartialData: !0, id: c, query: f, optimistic: s }), m;
      return new me(function(v) {
        return r.watch(D(D({}, y), { immediate: !0, callback: function(b) {
          var g = l ? El(b.result, n, r, i) : b.result;
          if (
            // Always ensure we deliver the first result
            !(m && yl(
              f,
              { data: m.result },
              { data: g },
              // TODO: Fix the type on WatchFragmentOptions so that TVars
              // extends OperationVariables
              e.variables
            ))
          ) {
            var _ = {
              data: g,
              complete: !!b.complete
            };
            b.missing && (_.missing = On(b.missing.map(function(w) {
              return w.missing;
            }))), m = D(D({}, b), { result: g }), v.next(_);
          }
        } }));
      });
    }, t.prototype.readFragment = function(e, r) {
      return r === void 0 && (r = !!e.optimistic), this.read(D(D({}, e), { query: this.getFragmentDoc(e.fragment, e.fragmentName), rootId: e.id, optimistic: r }));
    }, t.prototype.writeQuery = function(e) {
      var r = e.id, n = e.data, i = Qe(e, ["id", "data"]);
      return this.write(Object.assign(i, {
        dataId: r || "ROOT_QUERY",
        result: n
      }));
    }, t.prototype.writeFragment = function(e) {
      var r = e.id, n = e.data, i = e.fragment, a = e.fragmentName, o = Qe(e, ["id", "data", "fragment", "fragmentName"]);
      return this.write(Object.assign(o, {
        query: this.getFragmentDoc(i, a),
        dataId: r,
        result: n
      }));
    }, t.prototype.updateQuery = function(e, r) {
      return this.batch({
        update: function(n) {
          var i = n.readQuery(e), a = r(i);
          return a == null ? i : (n.writeQuery(D(D({}, e), { data: a })), a);
        }
      });
    }, t.prototype.updateFragment = function(e, r) {
      return this.batch({
        update: function(n) {
          var i = n.readFragment(e), a = r(i);
          return a == null ? i : (n.writeFragment(D(D({}, e), { data: a })), a);
        }
      });
    }, t;
  }()
);
globalThis.__DEV__ !== !1 && (wl.prototype.getMemoryInternals = op);
var _l = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r, n, i, a) {
      var o, s = t.call(this, r) || this;
      if (s.message = r, s.path = n, s.query = i, s.variables = a, Array.isArray(s.path)) {
        s.missing = s.message;
        for (var u = s.path.length - 1; u >= 0; --u)
          s.missing = (o = {}, o[s.path[u]] = s.missing, o);
      } else
        s.missing = s.path;
      return s.__proto__ = e.prototype, s;
    }
    return e;
  }(Error)
), Pe = Object.prototype.hasOwnProperty;
function or(t) {
  return t == null;
}
function Sl(t, e) {
  var r = t.__typename, n = t.id, i = t._id;
  if (typeof r == "string" && (e && (e.keyObject = or(n) ? or(i) ? void 0 : { _id: i } : { id: n }), or(n) && !or(i) && (n = i), !or(n)))
    return "".concat(r, ":").concat(typeof n == "number" || typeof n == "string" ? n : JSON.stringify(n));
}
var Ol = {
  dataIdFromObject: Sl,
  addTypename: !0,
  resultCaching: !0,
  // Thanks to the shouldCanonizeResults helper, this should be the only line
  // you have to change to reenable canonization by default in the future.
  canonizeResults: !1
};
function Wy(t) {
  return Rt(Ol, t);
}
function Tl(t) {
  var e = t.canonizeResults;
  return e === void 0 ? Ol.canonizeResults : e;
}
function zy(t, e) {
  return he(e) ? t.get(e.__ref, "__typename") : e && e.__typename;
}
var Rl = /^[_a-z][_0-9a-z]*/i;
function mt(t) {
  var e = t.match(Rl);
  return e ? e[0] : t;
}
function to(t, e, r) {
  return Ee(e) ? Se(e) ? e.every(function(n) {
    return to(t, n, r);
  }) : t.selections.every(function(n) {
    if (ht(n) && Or(n, r)) {
      var i = nt(n);
      return Pe.call(e, i) && (!n.selectionSet || to(n.selectionSet, e[i], r));
    }
    return !0;
  }) : !1;
}
function Nt(t) {
  return Ee(t) && !he(t) && !Se(t);
}
function Qy() {
  return new yt();
}
function Pl(t, e) {
  var r = Yt(Gt(t));
  return {
    fragmentMap: r,
    lookupFragment: function(n) {
      var i = r[n];
      return !i && e && (i = e.lookup(n)), i || null;
    }
  };
}
var Hr = /* @__PURE__ */ Object.create(null), ri = function() {
  return Hr;
}, Qs = /* @__PURE__ */ Object.create(null), wr = (
  /** @class */
  function() {
    function t(e, r) {
      var n = this;
      this.policies = e, this.group = r, this.data = /* @__PURE__ */ Object.create(null), this.rootIds = /* @__PURE__ */ Object.create(null), this.refs = /* @__PURE__ */ Object.create(null), this.getFieldValue = function(i, a) {
        return Qt(he(i) ? n.get(i.__ref, a) : i && i[a]);
      }, this.canRead = function(i) {
        return he(i) ? n.has(i.__ref) : typeof i == "object";
      }, this.toReference = function(i, a) {
        if (typeof i == "string")
          return jt(i);
        if (he(i))
          return i;
        var o = n.policies.identify(i)[0];
        if (o) {
          var s = jt(o);
          return a && n.merge(o, i), s;
        }
      };
    }
    return t.prototype.toObject = function() {
      return D({}, this.data);
    }, t.prototype.has = function(e) {
      return this.lookup(e, !0) !== void 0;
    }, t.prototype.get = function(e, r) {
      if (this.group.depend(e, r), Pe.call(this.data, e)) {
        var n = this.data[e];
        if (n && Pe.call(n, r))
          return n[r];
      }
      if (r === "__typename" && Pe.call(this.policies.rootTypenamesById, e))
        return this.policies.rootTypenamesById[e];
      if (this instanceof at)
        return this.parent.get(e, r);
    }, t.prototype.lookup = function(e, r) {
      if (r && this.group.depend(e, "__exists"), Pe.call(this.data, e))
        return this.data[e];
      if (this instanceof at)
        return this.parent.lookup(e, r);
      if (this.policies.rootTypenamesById[e])
        return /* @__PURE__ */ Object.create(null);
    }, t.prototype.merge = function(e, r) {
      var n = this, i;
      he(e) && (e = e.__ref), he(r) && (r = r.__ref);
      var a = typeof e == "string" ? this.lookup(i = e) : e, o = typeof r == "string" ? this.lookup(i = r) : r;
      if (o) {
        re(typeof i == "string", 2);
        var s = new yt(Hy).merge(a, o);
        if (this.data[i] = s, s !== a && (delete this.refs[i], this.group.caching)) {
          var u = /* @__PURE__ */ Object.create(null);
          a || (u.__exists = 1), Object.keys(o).forEach(function(f) {
            if (!a || a[f] !== s[f]) {
              u[f] = 1;
              var c = mt(f);
              c !== f && !n.policies.hasKeyArgs(s.__typename, c) && (u[c] = 1), s[f] === void 0 && !(n instanceof at) && delete s[f];
            }
          }), u.__typename && !(a && a.__typename) && // Since we return default root __typename strings
          // automatically from store.get, we don't need to dirty the
          // ROOT_QUERY.__typename field if merged.__typename is equal
          // to the default string (usually "Query").
          this.policies.rootTypenamesById[i] === s.__typename && delete u.__typename, Object.keys(u).forEach(function(f) {
            return n.group.dirty(i, f);
          });
        }
      }
    }, t.prototype.modify = function(e, r) {
      var n = this, i = this.lookup(e);
      if (i) {
        var a = /* @__PURE__ */ Object.create(null), o = !1, s = !0, u = {
          DELETE: Hr,
          INVALIDATE: Qs,
          isReference: he,
          toReference: this.toReference,
          canRead: this.canRead,
          readField: function(f, c) {
            return n.policies.readField(typeof f == "string" ? {
              fieldName: f,
              from: c || jt(e)
            } : f, { store: n });
          }
        };
        if (Object.keys(i).forEach(function(f) {
          var c = mt(f), l = i[f];
          if (l !== void 0) {
            var d = typeof r == "function" ? r : r[f] || r[c];
            if (d) {
              var y = d === ri ? Hr : d(Qt(l), D(D({}, u), { fieldName: c, storeFieldName: f, storage: n.getStorage(e, f) }));
              if (y === Qs)
                n.group.dirty(e, f);
              else if (y === Hr && (y = void 0), y !== l && (a[f] = y, o = !0, l = y, globalThis.__DEV__ !== !1)) {
                var m = function(P) {
                  if (n.lookup(P.__ref) === void 0)
                    return globalThis.__DEV__ !== !1 && re.warn(3, P), !0;
                };
                if (he(y))
                  m(y);
                else if (Array.isArray(y))
                  for (var v = !1, b = void 0, g = 0, _ = y; g < _.length; g++) {
                    var w = _[g];
                    if (he(w)) {
                      if (v = !0, m(w))
                        break;
                    } else if (typeof w == "object" && w) {
                      var A = n.policies.identify(w)[0];
                      A && (b = w);
                    }
                    if (v && b !== void 0) {
                      globalThis.__DEV__ !== !1 && re.warn(4, b);
                      break;
                    }
                  }
              }
            }
            l !== void 0 && (s = !1);
          }
        }), o)
          return this.merge(e, a), s && (this instanceof at ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0;
      }
      return !1;
    }, t.prototype.delete = function(e, r, n) {
      var i, a = this.lookup(e);
      if (a) {
        var o = this.getFieldValue(a, "__typename"), s = r && n ? this.policies.getStoreFieldName({ typename: o, fieldName: r, args: n }) : r;
        return this.modify(e, s ? (i = {}, i[s] = ri, i) : ri);
      }
      return !1;
    }, t.prototype.evict = function(e, r) {
      var n = !1;
      return e.id && (Pe.call(this.data, e.id) && (n = this.delete(e.id, e.fieldName, e.args)), this instanceof at && this !== r && (n = this.parent.evict(e, r) || n), (e.fieldName || n) && this.group.dirty(e.id, e.fieldName || "__exists")), n;
    }, t.prototype.clear = function() {
      this.replace(null);
    }, t.prototype.extract = function() {
      var e = this, r = this.toObject(), n = [];
      return this.getRootIdSet().forEach(function(i) {
        Pe.call(e.policies.rootTypenamesById, i) || n.push(i);
      }), n.length && (r.__META = { extraRootIds: n.sort() }), r;
    }, t.prototype.replace = function(e) {
      var r = this;
      if (Object.keys(this.data).forEach(function(a) {
        e && Pe.call(e, a) || r.delete(a);
      }), e) {
        var n = e.__META, i = Qe(e, ["__META"]);
        Object.keys(i).forEach(function(a) {
          r.merge(a, i[a]);
        }), n && n.extraRootIds.forEach(this.retain, this);
      }
    }, t.prototype.retain = function(e) {
      return this.rootIds[e] = (this.rootIds[e] || 0) + 1;
    }, t.prototype.release = function(e) {
      if (this.rootIds[e] > 0) {
        var r = --this.rootIds[e];
        return r || delete this.rootIds[e], r;
      }
      return 0;
    }, t.prototype.getRootIdSet = function(e) {
      return e === void 0 && (e = /* @__PURE__ */ new Set()), Object.keys(this.rootIds).forEach(e.add, e), this instanceof at ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e;
    }, t.prototype.gc = function() {
      var e = this, r = this.getRootIdSet(), n = this.toObject();
      r.forEach(function(o) {
        Pe.call(n, o) && (Object.keys(e.findChildRefIds(o)).forEach(r.add, r), delete n[o]);
      });
      var i = Object.keys(n);
      if (i.length) {
        for (var a = this; a instanceof at; )
          a = a.parent;
        i.forEach(function(o) {
          return a.delete(o);
        });
      }
      return i;
    }, t.prototype.findChildRefIds = function(e) {
      if (!Pe.call(this.refs, e)) {
        var r = this.refs[e] = /* @__PURE__ */ Object.create(null), n = this.data[e];
        if (!n)
          return r;
        var i = /* @__PURE__ */ new Set([n]);
        i.forEach(function(a) {
          he(a) && (r[a.__ref] = !0), Ee(a) && Object.keys(a).forEach(function(o) {
            var s = a[o];
            Ee(s) && i.add(s);
          });
        });
      }
      return this.refs[e];
    }, t.prototype.makeCacheKey = function() {
      return this.group.keyMaker.lookupArray(arguments);
    }, t;
  }()
), Al = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = null), this.caching = e, this.parent = r, this.d = null, this.resetCaching();
    }
    return t.prototype.resetCaching = function() {
      this.d = this.caching ? Zf() : null, this.keyMaker = new it(kt);
    }, t.prototype.depend = function(e, r) {
      if (this.d) {
        this.d(ni(e, r));
        var n = mt(r);
        n !== r && this.d(ni(e, n)), this.parent && this.parent.depend(e, r);
      }
    }, t.prototype.dirty = function(e, r) {
      this.d && this.d.dirty(
        ni(e, r),
        // When storeFieldName === "__exists", that means the entity identified
        // by dataId has either disappeared from the cache or was newly added,
        // so the result caching system would do well to "forget everything it
        // knows" about that object. To achieve that kind of invalidation, we
        // not only dirty the associated result cache entry, but also remove it
        // completely from the dependency graph. For the optimism implementation
        // details, see https://github.com/benjamn/optimism/pull/195.
        r === "__exists" ? "forget" : "setDirty"
      );
    }, t;
  }()
);
function ni(t, e) {
  return e + "#" + t;
}
function Ys(t, e) {
  yr(t) && t.group.depend(e, "__exists");
}
(function(t) {
  var e = (
    /** @class */
    function(r) {
      Ue(n, r);
      function n(i) {
        var a = i.policies, o = i.resultCaching, s = o === void 0 ? !0 : o, u = i.seed, f = r.call(this, a, new Al(s)) || this;
        return f.stump = new Yy(f), f.storageTrie = new it(kt), u && f.replace(u), f;
      }
      return n.prototype.addLayer = function(i, a) {
        return this.stump.addLayer(i, a);
      }, n.prototype.removeLayer = function() {
        return this;
      }, n.prototype.getStorage = function() {
        return this.storageTrie.lookupArray(arguments);
      }, n;
    }(t)
  );
  t.Root = e;
})(wr || (wr = {}));
var at = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r, n, i, a) {
      var o = t.call(this, n.policies, a) || this;
      return o.id = r, o.parent = n, o.replay = i, o.group = a, i(o), o;
    }
    return e.prototype.addLayer = function(r, n) {
      return new e(r, this, n, this.group);
    }, e.prototype.removeLayer = function(r) {
      var n = this, i = this.parent.removeLayer(r);
      return r === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(a) {
        var o = n.data[a], s = i.lookup(a);
        s ? o ? o !== s && Object.keys(o).forEach(function(u) {
          pe(o[u], s[u]) || n.group.dirty(a, u);
        }) : (n.group.dirty(a, "__exists"), Object.keys(s).forEach(function(u) {
          n.group.dirty(a, u);
        })) : n.delete(a);
      }), i) : i === this.parent ? this : i.addLayer(this.id, this.replay);
    }, e.prototype.toObject = function() {
      return D(D({}, this.parent.toObject()), this.data);
    }, e.prototype.findChildRefIds = function(r) {
      var n = this.parent.findChildRefIds(r);
      return Pe.call(this.data, r) ? D(D({}, n), t.prototype.findChildRefIds.call(this, r)) : n;
    }, e.prototype.getStorage = function() {
      for (var r = this.parent; r.parent; )
        r = r.parent;
      return r.getStorage.apply(
        r,
        // @ts-expect-error
        arguments
      );
    }, e;
  }(wr)
), Yy = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r) {
      return t.call(this, "EntityStore.Stump", r, function() {
      }, new Al(r.group.caching, r.group)) || this;
    }
    return e.prototype.removeLayer = function() {
      return this;
    }, e.prototype.merge = function(r, n) {
      return this.parent.merge(r, n);
    }, e;
  }(at)
);
function Hy(t, e, r) {
  var n = t[r], i = e[r];
  return pe(n, i) ? n : i;
}
function yr(t) {
  return !!(t instanceof wr && t.group.caching);
}
function Gy(t) {
  return Ee(t) ? Se(t) ? t.slice(0) : D({ __proto__: Object.getPrototypeOf(t) }, t) : t;
}
var Hs = (
  /** @class */
  function() {
    function t() {
      this.known = new (Oo ? WeakSet : Set)(), this.pool = new it(kt), this.passes = /* @__PURE__ */ new WeakMap(), this.keysByJSON = /* @__PURE__ */ new Map(), this.empty = this.admit({});
    }
    return t.prototype.isKnown = function(e) {
      return Ee(e) && this.known.has(e);
    }, t.prototype.pass = function(e) {
      if (Ee(e)) {
        var r = Gy(e);
        return this.passes.set(r, e), r;
      }
      return e;
    }, t.prototype.admit = function(e) {
      var r = this;
      if (Ee(e)) {
        var n = this.passes.get(e);
        if (n)
          return n;
        var i = Object.getPrototypeOf(e);
        switch (i) {
          case Array.prototype: {
            if (this.known.has(e))
              return e;
            var a = e.map(this.admit, this), o = this.pool.lookupArray(a);
            return o.array || (this.known.add(o.array = a), globalThis.__DEV__ !== !1 && Object.freeze(a)), o.array;
          }
          case null:
          case Object.prototype: {
            if (this.known.has(e))
              return e;
            var s = Object.getPrototypeOf(e), u = [s], f = this.sortedKeys(e);
            u.push(f.json);
            var c = u.length;
            f.sorted.forEach(function(y) {
              u.push(r.admit(e[y]));
            });
            var o = this.pool.lookupArray(u);
            if (!o.object) {
              var l = o.object = Object.create(s);
              this.known.add(l), f.sorted.forEach(function(y, m) {
                l[y] = u[c + m];
              }), globalThis.__DEV__ !== !1 && Object.freeze(l);
            }
            return o.object;
          }
        }
      }
      return e;
    }, t.prototype.sortedKeys = function(e) {
      var r = Object.keys(e), n = this.pool.lookupArray(r);
      if (!n.keys) {
        r.sort();
        var i = JSON.stringify(r);
        (n.keys = this.keysByJSON.get(i)) || this.keysByJSON.set(i, n.keys = { sorted: r, json: i });
      }
      return n.keys;
    }, t;
  }()
);
function Gs(t) {
  return [
    t.selectionSet,
    t.objectOrReference,
    t.context,
    // We split out this property so we can pass different values
    // independently without modifying options.context itself.
    t.context.canonizeResults
  ];
}
var Jy = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.knownResults = new (kt ? WeakMap : Map)(), this.config = Rt(e, {
        addTypename: e.addTypename !== !1,
        canonizeResults: Tl(e)
      }), this.canon = e.canon || new Hs(), this.executeSelectionSet = Er(function(n) {
        var i, a = n.context.canonizeResults, o = Gs(n);
        o[3] = !a;
        var s = (i = r.executeSelectionSet).peek.apply(i, o);
        return s ? a ? D(D({}, s), {
          // If we previously read this result without canonizing it, we can
          // reuse that result simply by canonizing it now.
          result: r.canon.admit(s.result)
        }) : s : (Ys(n.context.store, n.enclosingRef.__ref), r.execSelectionSetImpl(n));
      }, {
        max: this.config.resultCacheMaxSize || Ze["inMemoryCache.executeSelectionSet"] || 5e4,
        keyArgs: Gs,
        // Note that the parameters of makeCacheKey are determined by the
        // array returned by keyArgs.
        makeCacheKey: function(n, i, a, o) {
          if (yr(a.store))
            return a.store.makeCacheKey(n, he(i) ? i.__ref : i, a.varString, o);
        }
      }), this.executeSubSelectedArray = Er(function(n) {
        return Ys(n.context.store, n.enclosingRef.__ref), r.execSubSelectedArrayImpl(n);
      }, {
        max: this.config.resultCacheMaxSize || Ze["inMemoryCache.executeSubSelectedArray"] || 1e4,
        makeCacheKey: function(n) {
          var i = n.field, a = n.array, o = n.context;
          if (yr(o.store))
            return o.store.makeCacheKey(i, a, o.varString);
        }
      });
    }
    return t.prototype.resetCanon = function() {
      this.canon = new Hs();
    }, t.prototype.diffQueryAgainstStore = function(e) {
      var r = e.store, n = e.query, i = e.rootId, a = i === void 0 ? "ROOT_QUERY" : i, o = e.variables, s = e.returnPartialData, u = s === void 0 ? !0 : s, f = e.canonizeResults, c = f === void 0 ? this.config.canonizeResults : f, l = this.config.cache.policies;
      o = D(D({}, Ao(Bf(n))), o);
      var d = jt(a), y = this.executeSelectionSet({
        selectionSet: lt(n).selectionSet,
        objectOrReference: d,
        enclosingRef: d,
        context: D({ store: r, query: n, policies: l, variables: o, varString: ft(o), canonizeResults: c }, Pl(n, this.config.fragments))
      }), m;
      if (y.missing && (m = [
        new _l(Ky(y.missing), y.missing, n, o)
      ], !u))
        throw m[0];
      return {
        result: y.result,
        complete: !m,
        missing: m
      };
    }, t.prototype.isFresh = function(e, r, n, i) {
      if (yr(i.store) && this.knownResults.get(e) === n) {
        var a = this.executeSelectionSet.peek(
          n,
          r,
          i,
          // If result is canonical, then it could only have been previously
          // cached by the canonizing version of executeSelectionSet, so we can
          // avoid checking both possibilities here.
          this.canon.isKnown(e)
        );
        if (a && e === a.result)
          return !0;
      }
      return !1;
    }, t.prototype.execSelectionSetImpl = function(e) {
      var r = this, n = e.selectionSet, i = e.objectOrReference, a = e.enclosingRef, o = e.context;
      if (he(i) && !o.policies.rootTypenamesById[i.__ref] && !o.store.has(i.__ref))
        return {
          result: this.canon.empty,
          missing: "Dangling reference to missing ".concat(i.__ref, " object")
        };
      var s = o.variables, u = o.policies, f = o.store, c = f.getFieldValue(i, "__typename"), l = [], d, y = new yt();
      this.config.addTypename && typeof c == "string" && !u.rootIdsByTypename[c] && l.push({ __typename: c });
      function m(w, A) {
        var P;
        return w.missing && (d = y.merge(d, (P = {}, P[A] = w.missing, P))), w.result;
      }
      var v = new Set(n.selections);
      v.forEach(function(w) {
        var A, P;
        if (Or(w, s))
          if (ht(w)) {
            var C = u.readField({
              fieldName: w.name.value,
              field: w,
              variables: o.variables,
              from: i
            }, o), B = nt(w);
            C === void 0 ? Io.added(w) || (d = y.merge(d, (A = {}, A[B] = "Can't find field '".concat(w.name.value, "' on ").concat(he(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), A))) : Se(C) ? C.length > 0 && (C = m(r.executeSubSelectedArray({
              field: w,
              array: C,
              enclosingRef: a,
              context: o
            }), B)) : w.selectionSet ? C != null && (C = m(r.executeSelectionSet({
              selectionSet: w.selectionSet,
              objectOrReference: C,
              enclosingRef: he(C) ? C : a,
              context: o
            }), B)) : o.canonizeResults && (C = r.canon.pass(C)), C !== void 0 && l.push((P = {}, P[B] = C, P));
          } else {
            var L = En(w, o.lookupFragment);
            if (!L && w.kind === Te.FRAGMENT_SPREAD)
              throw Fe(10, w.name.value);
            L && u.fragmentMatches(L, c) && L.selectionSet.selections.forEach(v.add, v);
          }
      });
      var b = On(l), g = { result: b, missing: d }, _ = o.canonizeResults ? this.canon.admit(g) : Qt(g);
      return _.result && this.knownResults.set(_.result, n), _;
    }, t.prototype.execSubSelectedArrayImpl = function(e) {
      var r = this, n = e.field, i = e.array, a = e.enclosingRef, o = e.context, s, u = new yt();
      function f(c, l) {
        var d;
        return c.missing && (s = u.merge(s, (d = {}, d[l] = c.missing, d))), c.result;
      }
      return n.selectionSet && (i = i.filter(o.store.canRead)), i = i.map(function(c, l) {
        return c === null ? null : Se(c) ? f(r.executeSubSelectedArray({
          field: n,
          array: c,
          enclosingRef: a,
          context: o
        }), l) : n.selectionSet ? f(r.executeSelectionSet({
          selectionSet: n.selectionSet,
          objectOrReference: c,
          enclosingRef: he(c) ? c : a,
          context: o
        }), l) : (globalThis.__DEV__ !== !1 && Xy(o.store, n, c), c);
      }), {
        result: o.canonizeResults ? this.canon.admit(i) : i,
        missing: s
      };
    }, t;
  }()
);
function Ky(t) {
  try {
    JSON.stringify(t, function(e, r) {
      if (typeof r == "string")
        throw r;
      return r;
    });
  } catch (e) {
    return e;
  }
}
function Xy(t, e, r) {
  if (!e.selectionSet) {
    var n = /* @__PURE__ */ new Set([r]);
    n.forEach(function(i) {
      Ee(i) && (re(
        !he(i),
        11,
        zy(t, i),
        e.name.value
      ), Object.values(i).forEach(n.add, n));
    });
  }
}
var jo = new Tr(), Js = /* @__PURE__ */ new WeakMap();
function mr(t) {
  var e = Js.get(t);
  return e || Js.set(t, e = {
    vars: /* @__PURE__ */ new Set(),
    dep: Zf()
  }), e;
}
function Ks(t) {
  mr(t).vars.forEach(function(e) {
    return e.forgetCache(t);
  });
}
function Zy(t) {
  mr(t).vars.forEach(function(e) {
    return e.attachCache(t);
  });
}
function em(t) {
  var e = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Set(), n = function(a) {
    if (arguments.length > 0) {
      if (t !== a) {
        t = a, e.forEach(function(u) {
          mr(u).dep.dirty(n), tm(u);
        });
        var o = Array.from(r);
        r.clear(), o.forEach(function(u) {
          return u(t);
        });
      }
    } else {
      var s = jo.getValue();
      s && (i(s), mr(s).dep(n));
    }
    return t;
  };
  n.onNextChange = function(a) {
    return r.add(a), function() {
      r.delete(a);
    };
  };
  var i = n.attachCache = function(a) {
    return e.add(a), mr(a).vars.add(n), n;
  };
  return n.forgetCache = function(a) {
    return e.delete(a);
  }, n;
}
function tm(t) {
  t.broadcastWatches && t.broadcastWatches();
}
var Xs = /* @__PURE__ */ Object.create(null);
function qo(t) {
  var e = JSON.stringify(t);
  return Xs[e] || (Xs[e] = /* @__PURE__ */ Object.create(null));
}
function Zs(t) {
  var e = qo(t);
  return e.keyFieldsFn || (e.keyFieldsFn = function(r, n) {
    var i = function(o, s) {
      return n.readField(s, o);
    }, a = n.keyObject = $o(t, function(o) {
      var s = $t(
        n.storeObject,
        o,
        // Using context.readField to extract paths from context.storeObject
        // allows the extraction to see through Reference objects and respect
        // custom read functions.
        i
      );
      return s === void 0 && r !== n.storeObject && Pe.call(r, o[0]) && (s = $t(r, o, kl)), re(s !== void 0, 5, o.join("."), r), s;
    });
    return "".concat(n.typename, ":").concat(JSON.stringify(a));
  });
}
function eu(t) {
  var e = qo(t);
  return e.keyArgsFn || (e.keyArgsFn = function(r, n) {
    var i = n.field, a = n.variables, o = n.fieldName, s = $o(t, function(f) {
      var c = f[0], l = c.charAt(0);
      if (l === "@") {
        if (i && Be(i.directives)) {
          var d = c.slice(1), y = i.directives.find(function(g) {
            return g.name.value === d;
          }), m = y && wn(y, a);
          return m && $t(
            m,
            // If keyPath.length === 1, this code calls extractKeyPath with an
            // empty path, which works because it uses directiveArgs as the
            // extracted value.
            f.slice(1)
          );
        }
        return;
      }
      if (l === "$") {
        var v = c.slice(1);
        if (a && Pe.call(a, v)) {
          var b = f.slice(0);
          return b[0] = v, $t(a, b);
        }
        return;
      }
      if (r)
        return $t(r, f);
    }), u = JSON.stringify(s);
    return (r || u !== "{}") && (o += ":" + u), o;
  });
}
function $o(t, e) {
  var r = new yt();
  return Ml(t).reduce(function(n, i) {
    var a, o = e(i);
    if (o !== void 0) {
      for (var s = i.length - 1; s >= 0; --s)
        o = (a = {}, a[i[s]] = o, a);
      n = r.merge(n, o);
    }
    return n;
  }, /* @__PURE__ */ Object.create(null));
}
function Ml(t) {
  var e = qo(t);
  if (!e.paths) {
    var r = e.paths = [], n = [];
    t.forEach(function(i, a) {
      Se(i) ? (Ml(i).forEach(function(o) {
        return r.push(n.concat(o));
      }), n.length = 0) : (n.push(i), Se(t[a + 1]) || (r.push(n.slice(0)), n.length = 0));
    });
  }
  return e.paths;
}
function kl(t, e) {
  return t[e];
}
function $t(t, e, r) {
  return r = r || kl, Cl(e.reduce(function n(i, a) {
    return Se(i) ? i.map(function(o) {
      return n(o, a);
    }) : i && r(i, a);
  }, t));
}
function Cl(t) {
  return Ee(t) ? Se(t) ? t.map(Cl) : $o(Object.keys(t).sort(), function(e) {
    return $t(t, e);
  }) : t;
}
function ro(t) {
  return t.args !== void 0 ? t.args : t.field ? wn(t.field, t.variables) : null;
}
var rm = function() {
}, tu = function(t, e) {
  return e.fieldName;
}, ru = function(t, e, r) {
  var n = r.mergeObjects;
  return n(t, e);
}, nu = function(t, e) {
  return e;
}, nm = (
  /** @class */
  function() {
    function t(e) {
      this.config = e, this.typePolicies = /* @__PURE__ */ Object.create(null), this.toBeAdded = /* @__PURE__ */ Object.create(null), this.supertypeMap = /* @__PURE__ */ new Map(), this.fuzzySubtypes = /* @__PURE__ */ new Map(), this.rootIdsByTypename = /* @__PURE__ */ Object.create(null), this.rootTypenamesById = /* @__PURE__ */ Object.create(null), this.usingPossibleTypes = !1, this.config = D({ dataIdFromObject: Sl }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies);
    }
    return t.prototype.identify = function(e, r) {
      var n, i = this, a = r && (r.typename || ((n = r.storeObject) === null || n === void 0 ? void 0 : n.__typename)) || e.__typename;
      if (a === this.rootTypenamesById.ROOT_QUERY)
        return ["ROOT_QUERY"];
      var o = r && r.storeObject || e, s = D(D({}, r), { typename: a, storeObject: o, readField: r && r.readField || function() {
        var l = Bo(arguments, o);
        return i.readField(l, {
          store: i.cache.data,
          variables: l.variables
        });
      } }), u, f = a && this.getTypePolicy(a), c = f && f.keyFn || this.config.dataIdFromObject;
      return Fo.withValue(!0, function() {
        for (; c; ) {
          var l = c(D(D({}, e), o), s);
          if (Se(l))
            c = Zs(l);
          else {
            u = l;
            break;
          }
        }
      }), u = u ? String(u) : void 0, s.keyObject ? [u, s.keyObject] : [u];
    }, t.prototype.addTypePolicies = function(e) {
      var r = this;
      Object.keys(e).forEach(function(n) {
        var i = e[n], a = i.queryType, o = i.mutationType, s = i.subscriptionType, u = Qe(i, ["queryType", "mutationType", "subscriptionType"]);
        a && r.setRootTypename("Query", n), o && r.setRootTypename("Mutation", n), s && r.setRootTypename("Subscription", n), Pe.call(r.toBeAdded, n) ? r.toBeAdded[n].push(u) : r.toBeAdded[n] = [u];
      });
    }, t.prototype.updateTypePolicy = function(e, r) {
      var n = this, i = this.getTypePolicy(e), a = r.keyFields, o = r.fields;
      function s(u, f) {
        u.merge = typeof f == "function" ? f : f === !0 ? ru : f === !1 ? nu : u.merge;
      }
      s(i, r.merge), i.keyFn = // Pass false to disable normalization for this typename.
      a === !1 ? rm : Se(a) ? Zs(a) : typeof a == "function" ? a : i.keyFn, o && Object.keys(o).forEach(function(u) {
        var f = n.getFieldPolicy(e, u, !0), c = o[u];
        if (typeof c == "function")
          f.read = c;
        else {
          var l = c.keyArgs, d = c.read, y = c.merge;
          f.keyFn = // Pass false to disable argument-based differentiation of
          // field identities.
          l === !1 ? tu : Se(l) ? eu(l) : typeof l == "function" ? l : f.keyFn, typeof d == "function" && (f.read = d), s(f, y);
        }
        f.read && f.merge && (f.keyFn = f.keyFn || tu);
      });
    }, t.prototype.setRootTypename = function(e, r) {
      r === void 0 && (r = e);
      var n = "ROOT_" + e.toUpperCase(), i = this.rootTypenamesById[n];
      r !== i && (re(!i || i === e, 6, e), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[r] = n, this.rootTypenamesById[n] = r);
    }, t.prototype.addPossibleTypes = function(e) {
      var r = this;
      this.usingPossibleTypes = !0, Object.keys(e).forEach(function(n) {
        r.getSupertypeSet(n, !0), e[n].forEach(function(i) {
          r.getSupertypeSet(i, !0).add(n);
          var a = i.match(Rl);
          (!a || a[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i));
        });
      });
    }, t.prototype.getTypePolicy = function(e) {
      var r = this;
      if (!Pe.call(this.typePolicies, e)) {
        var n = this.typePolicies[e] = /* @__PURE__ */ Object.create(null);
        n.fields = /* @__PURE__ */ Object.create(null);
        var i = this.supertypeMap.get(e);
        !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(o, s) {
          if (o.test(e)) {
            var u = r.supertypeMap.get(s);
            u && u.forEach(function(f) {
              return i.add(f);
            });
          }
        })), i && i.size && i.forEach(function(o) {
          var s = r.getTypePolicy(o), u = s.fields, f = Qe(s, ["fields"]);
          Object.assign(n, f), Object.assign(n.fields, u);
        });
      }
      var a = this.toBeAdded[e];
      return a && a.length && a.splice(0).forEach(function(o) {
        r.updateTypePolicy(e, o);
      }), this.typePolicies[e];
    }, t.prototype.getFieldPolicy = function(e, r, n) {
      if (e) {
        var i = this.getTypePolicy(e).fields;
        return i[r] || n && (i[r] = /* @__PURE__ */ Object.create(null));
      }
    }, t.prototype.getSupertypeSet = function(e, r) {
      var n = this.supertypeMap.get(e);
      return !n && r && this.supertypeMap.set(e, n = /* @__PURE__ */ new Set()), n;
    }, t.prototype.fragmentMatches = function(e, r, n, i) {
      var a = this;
      if (!e.typeCondition)
        return !0;
      if (!r)
        return !1;
      var o = e.typeCondition.name.value;
      if (r === o)
        return !0;
      if (this.usingPossibleTypes && this.supertypeMap.has(o))
        for (var s = this.getSupertypeSet(r, !0), u = [s], f = function(m) {
          var v = a.getSupertypeSet(m, !1);
          v && v.size && u.indexOf(v) < 0 && u.push(v);
        }, c = !!(n && this.fuzzySubtypes.size), l = !1, d = 0; d < u.length; ++d) {
          var y = u[d];
          if (y.has(o))
            return s.has(o) || (l && globalThis.__DEV__ !== !1 && re.warn(7, r, o), s.add(o)), !0;
          y.forEach(f), c && // Start checking fuzzy subtypes only after exhausting all
          // non-fuzzy subtypes (after the final iteration of the loop).
          d === u.length - 1 && // We could wait to compare fragment.selectionSet to result
          // after we verify the supertype, but this check is often less
          // expensive than that search, and we will have to do the
          // comparison anyway whenever we find a potential match.
          to(e.selectionSet, n, i) && (c = !1, l = !0, this.fuzzySubtypes.forEach(function(m, v) {
            var b = r.match(m);
            b && b[0] === r && f(v);
          }));
        }
      return !1;
    }, t.prototype.hasKeyArgs = function(e, r) {
      var n = this.getFieldPolicy(e, r, !1);
      return !!(n && n.keyFn);
    }, t.prototype.getStoreFieldName = function(e) {
      var r = e.typename, n = e.fieldName, i = this.getFieldPolicy(r, n, !1), a, o = i && i.keyFn;
      if (o && r)
        for (var s = {
          typename: r,
          fieldName: n,
          field: e.field || null,
          variables: e.variables
        }, u = ro(e); o; ) {
          var f = o(u, s);
          if (Se(f))
            o = eu(f);
          else {
            a = f || n;
            break;
          }
        }
      return a === void 0 && (a = e.field ? Sp(e.field, e.variables) : $f(n, ro(e))), a === !1 ? n : n === mt(a) ? a : n + ":" + a;
    }, t.prototype.readField = function(e, r) {
      var n = e.from;
      if (n) {
        var i = e.field || e.fieldName;
        if (i) {
          if (e.typename === void 0) {
            var a = r.store.getFieldValue(n, "__typename");
            a && (e.typename = a);
          }
          var o = this.getStoreFieldName(e), s = mt(o), u = r.store.getFieldValue(n, o), f = this.getFieldPolicy(e.typename, s, !1), c = f && f.read;
          if (c) {
            var l = iu(this, n, e, r, r.store.getStorage(he(n) ? n.__ref : n, o));
            return jo.withValue(this.cache, c, [
              u,
              l
            ]);
          }
          return u;
        }
      }
    }, t.prototype.getReadFunction = function(e, r) {
      var n = this.getFieldPolicy(e, r, !1);
      return n && n.read;
    }, t.prototype.getMergeFunction = function(e, r, n) {
      var i = this.getFieldPolicy(e, r, !1), a = i && i.merge;
      return !a && n && (i = this.getTypePolicy(n), a = i && i.merge), a;
    }, t.prototype.runMergeFunction = function(e, r, n, i, a) {
      var o = n.field, s = n.typename, u = n.merge;
      return u === ru ? Il(i.store)(e, r) : u === nu ? r : (i.overwrite && (e = void 0), u(e, r, iu(
        this,
        // Unlike options.readField for read functions, we do not fall
        // back to the current object if no foreignObjOrRef is provided,
        // because it's not clear what the current object should be for
        // merge functions: the (possibly undefined) existing object, or
        // the incoming object? If you think your merge function needs
        // to read sibling fields in order to produce a new value for
        // the current field, you might want to rethink your strategy,
        // because that's a recipe for making merge behavior sensitive
        // to the order in which fields are written into the cache.
        // However, readField(name, ref) is useful for merge functions
        // that need to deduplicate child objects and references.
        void 0,
        {
          typename: s,
          fieldName: o.name.value,
          field: o,
          variables: i.variables
        },
        i,
        a || /* @__PURE__ */ Object.create(null)
      )));
    }, t;
  }()
);
function iu(t, e, r, n, i) {
  var a = t.getStoreFieldName(r), o = mt(a), s = r.variables || n.variables, u = n.store, f = u.toReference, c = u.canRead;
  return {
    args: ro(r),
    field: r.field || null,
    fieldName: o,
    storeFieldName: a,
    variables: s,
    isReference: he,
    toReference: f,
    storage: i,
    cache: t.cache,
    canRead: c,
    readField: function() {
      return t.readField(Bo(arguments, e, s), n);
    },
    mergeObjects: Il(n.store)
  };
}
function Bo(t, e, r) {
  var n = t[0], i = t[1], a = t.length, o;
  return typeof n == "string" ? o = {
    fieldName: n,
    // Default to objectOrReference only when no second argument was
    // passed for the from parameter, not when undefined is explicitly
    // passed as the second argument.
    from: a > 1 ? i : e
  } : (o = D({}, n), Pe.call(o, "from") || (o.from = e)), globalThis.__DEV__ !== !1 && o.from === void 0 && globalThis.__DEV__ !== !1 && re.warn(8, xf(Array.from(t))), o.variables === void 0 && (o.variables = r), o;
}
function Il(t) {
  return function(r, n) {
    if (Se(r) || Se(n))
      throw Fe(9);
    if (Ee(r) && Ee(n)) {
      var i = t.getFieldValue(r, "__typename"), a = t.getFieldValue(n, "__typename"), o = i && a && i !== a;
      if (o)
        return n;
      if (he(r) && Nt(n))
        return t.merge(r.__ref, n), r;
      if (Nt(r) && he(n))
        return t.merge(r, n.__ref), n;
      if (Nt(r) && Nt(n))
        return D(D({}, r), n);
    }
    return n;
  };
}
function ii(t, e, r) {
  var n = "".concat(e).concat(r), i = t.flavors.get(n);
  return i || t.flavors.set(n, i = t.clientOnly === e && t.deferred === r ? t : D(D({}, t), { clientOnly: e, deferred: r })), i;
}
var im = (
  /** @class */
  function() {
    function t(e, r, n) {
      this.cache = e, this.reader = r, this.fragments = n;
    }
    return t.prototype.writeToStore = function(e, r) {
      var n = this, i = r.query, a = r.result, o = r.dataId, s = r.variables, u = r.overwrite, f = Tt(i), c = Qy();
      s = D(D({}, Ao(f)), s);
      var l = D(D({ store: e, written: /* @__PURE__ */ Object.create(null), merge: function(y, m) {
        return c.merge(y, m);
      }, variables: s, varString: ft(s) }, Pl(i, this.fragments)), { overwrite: !!u, incomingById: /* @__PURE__ */ new Map(), clientOnly: !1, deferred: !1, flavors: /* @__PURE__ */ new Map() }), d = this.processSelectionSet({
        result: a || /* @__PURE__ */ Object.create(null),
        dataId: o,
        selectionSet: f.selectionSet,
        mergeTree: { map: /* @__PURE__ */ new Map() },
        context: l
      });
      if (!he(d))
        throw Fe(12, a);
      return l.incomingById.forEach(function(y, m) {
        var v = y.storeObject, b = y.mergeTree, g = y.fieldNodeSet, _ = jt(m);
        if (b && b.map.size) {
          var w = n.applyMerges(b, _, v, l);
          if (he(w))
            return;
          v = w;
        }
        if (globalThis.__DEV__ !== !1 && !l.overwrite) {
          var A = /* @__PURE__ */ Object.create(null);
          g.forEach(function(B) {
            B.selectionSet && (A[B.name.value] = !0);
          });
          var P = function(B) {
            return A[mt(B)] === !0;
          }, C = function(B) {
            var L = b && b.map.get(B);
            return !!(L && L.info && L.info.merge);
          };
          Object.keys(v).forEach(function(B) {
            P(B) && !C(B) && am(_, v, B, l.store);
          });
        }
        e.merge(m, v);
      }), e.retain(d.__ref), d;
    }, t.prototype.processSelectionSet = function(e) {
      var r = this, n = e.dataId, i = e.result, a = e.selectionSet, o = e.context, s = e.mergeTree, u = this.cache.policies, f = /* @__PURE__ */ Object.create(null), c = n && u.rootTypenamesById[n] || Qa(i, a, o.fragmentMap) || n && o.store.get(n, "__typename");
      typeof c == "string" && (f.__typename = c);
      var l = function() {
        var w = Bo(arguments, f, o.variables);
        if (he(w.from)) {
          var A = o.incomingById.get(w.from.__ref);
          if (A) {
            var P = u.readField(D(D({}, w), { from: A.storeObject }), o);
            if (P !== void 0)
              return P;
          }
        }
        return u.readField(w, o);
      }, d = /* @__PURE__ */ new Set();
      this.flattenFields(
        a,
        i,
        // This WriteContext will be the default context value for fields returned
        // by the flattenFields method, but some fields may be assigned a modified
        // context, depending on the presence of @client and other directives.
        o,
        c
      ).forEach(function(w, A) {
        var P, C = nt(A), B = i[C];
        if (d.add(A), B !== void 0) {
          var L = u.getStoreFieldName({
            typename: c,
            fieldName: A.name.value,
            field: A,
            variables: w.variables
          }), Y = au(s, L), G = r.processFieldValue(
            B,
            A,
            // Reset context.clientOnly and context.deferred to their default
            // values before processing nested selection sets.
            A.selectionSet ? ii(w, !1, !1) : w,
            Y
          ), J = void 0;
          A.selectionSet && (he(G) || Nt(G)) && (J = l("__typename", G));
          var z = u.getMergeFunction(c, A.name.value, J);
          z ? Y.info = {
            // TODO Check compatibility against any existing childTree.field?
            field: A,
            typename: c,
            merge: z
          } : ou(s, L), f = w.merge(f, (P = {}, P[L] = G, P));
        } else globalThis.__DEV__ !== !1 && !w.clientOnly && !w.deferred && !Io.added(A) && // If the field has a read function, it may be a synthetic field or
        // provide a default value, so its absence from the written data should
        // not be cause for alarm.
        !u.getReadFunction(c, A.name.value) && globalThis.__DEV__ !== !1 && re.error(13, nt(A), i);
      });
      try {
        var y = u.identify(i, {
          typename: c,
          selectionSet: a,
          fragmentMap: o.fragmentMap,
          storeObject: f,
          readField: l
        }), m = y[0], v = y[1];
        n = n || m, v && (f = o.merge(f, v));
      } catch (w) {
        if (!n)
          throw w;
      }
      if (typeof n == "string") {
        var b = jt(n), g = o.written[n] || (o.written[n] = []);
        if (g.indexOf(a) >= 0 || (g.push(a), this.reader && this.reader.isFresh(i, b, a, o)))
          return b;
        var _ = o.incomingById.get(n);
        return _ ? (_.storeObject = o.merge(_.storeObject, f), _.mergeTree = no(_.mergeTree, s), d.forEach(function(w) {
          return _.fieldNodeSet.add(w);
        })) : o.incomingById.set(n, {
          storeObject: f,
          // Save a reference to mergeTree only if it is not empty, because
          // empty MergeTrees may be recycled by maybeRecycleChildMergeTree and
          // reused for entirely different parts of the result tree.
          mergeTree: fn(s) ? void 0 : s,
          fieldNodeSet: d
        }), b;
      }
      return f;
    }, t.prototype.processFieldValue = function(e, r, n, i) {
      var a = this;
      return !r.selectionSet || e === null ? globalThis.__DEV__ !== !1 ? sl(e) : e : Se(e) ? e.map(function(o, s) {
        var u = a.processFieldValue(o, r, n, au(i, s));
        return ou(i, s), u;
      }) : this.processSelectionSet({
        result: e,
        selectionSet: r.selectionSet,
        context: n,
        mergeTree: i
      });
    }, t.prototype.flattenFields = function(e, r, n, i) {
      i === void 0 && (i = Qa(r, e, n.fragmentMap));
      var a = /* @__PURE__ */ new Map(), o = this.cache.policies, s = new it(!1);
      return function u(f, c) {
        var l = s.lookup(
          f,
          // Because we take inheritedClientOnly and inheritedDeferred into
          // consideration here (in addition to selectionSet), it's possible for
          // the same selection set to be flattened more than once, if it appears
          // in the query with different @client and/or @directive configurations.
          c.clientOnly,
          c.deferred
        );
        l.visited || (l.visited = !0, f.selections.forEach(function(d) {
          if (Or(d, n.variables)) {
            var y = c.clientOnly, m = c.deferred;
            if (
              // Since the presence of @client or @defer on this field can only
              // cause clientOnly or deferred to become true, we can skip the
              // forEach loop if both clientOnly and deferred are already true.
              !(y && m) && Be(d.directives) && d.directives.forEach(function(g) {
                var _ = g.name.value;
                if (_ === "client" && (y = !0), _ === "defer") {
                  var w = wn(g, n.variables);
                  (!w || w.if !== !1) && (m = !0);
                }
              }), ht(d)
            ) {
              var v = a.get(d);
              v && (y = y && v.clientOnly, m = m && v.deferred), a.set(d, ii(n, y, m));
            } else {
              var b = En(d, n.lookupFragment);
              if (!b && d.kind === Te.FRAGMENT_SPREAD)
                throw Fe(14, d.name.value);
              b && o.fragmentMatches(b, i, r, n.variables) && u(b.selectionSet, ii(n, y, m));
            }
          }
        }));
      }(e, n), a;
    }, t.prototype.applyMerges = function(e, r, n, i, a) {
      var o, s = this;
      if (e.map.size && !he(n)) {
        var u = (
          // Items in the same position in different arrays are not
          // necessarily related to each other, so when incoming is an array
          // we process its elements as if there was no existing data.
          !Se(n) && // Likewise, existing must be either a Reference or a StoreObject
          // in order for its fields to be safe to merge with the fields of
          // the incoming object.
          (he(r) || Nt(r)) ? r : void 0
        ), f = n;
        u && !a && (a = [he(u) ? u.__ref : u]);
        var c, l = function(d, y) {
          return Se(d) ? typeof y == "number" ? d[y] : void 0 : i.store.getFieldValue(d, String(y));
        };
        e.map.forEach(function(d, y) {
          var m = l(u, y), v = l(f, y);
          if (v !== void 0) {
            a && a.push(y);
            var b = s.applyMerges(d, m, v, i, a);
            b !== v && (c = c || /* @__PURE__ */ new Map(), c.set(y, b)), a && re(a.pop() === y);
          }
        }), c && (n = Se(f) ? f.slice(0) : D({}, f), c.forEach(function(d, y) {
          n[y] = d;
        }));
      }
      return e.info ? this.cache.policies.runMergeFunction(r, n, e.info, i, a && (o = i.store).getStorage.apply(o, a)) : n;
    }, t;
  }()
), xl = [];
function au(t, e) {
  var r = t.map;
  return r.has(e) || r.set(e, xl.pop() || { map: /* @__PURE__ */ new Map() }), r.get(e);
}
function no(t, e) {
  if (t === e || !e || fn(e))
    return t;
  if (!t || fn(t))
    return e;
  var r = t.info && e.info ? D(D({}, t.info), e.info) : t.info || e.info, n = t.map.size && e.map.size, i = n ? /* @__PURE__ */ new Map() : t.map.size ? t.map : e.map, a = { info: r, map: i };
  if (n) {
    var o = new Set(e.map.keys());
    t.map.forEach(function(s, u) {
      a.map.set(u, no(s, e.map.get(u))), o.delete(u);
    }), o.forEach(function(s) {
      a.map.set(s, no(e.map.get(s), t.map.get(s)));
    });
  }
  return a;
}
function fn(t) {
  return !t || !(t.info || t.map.size);
}
function ou(t, e) {
  var r = t.map, n = r.get(e);
  n && fn(n) && (xl.push(n), r.delete(e));
}
var su = /* @__PURE__ */ new Set();
function am(t, e, r, n) {
  var i = function(l) {
    var d = n.getFieldValue(l, r);
    return typeof d == "object" && d;
  }, a = i(t);
  if (a) {
    var o = i(e);
    if (o && !he(a) && !pe(a, o) && !Object.keys(a).every(function(l) {
      return n.getFieldValue(o, l) !== void 0;
    })) {
      var s = n.getFieldValue(t, "__typename") || n.getFieldValue(e, "__typename"), u = mt(r), f = "".concat(s, ".").concat(u);
      if (!su.has(f)) {
        su.add(f);
        var c = [];
        !Se(a) && !Se(o) && [a, o].forEach(function(l) {
          var d = n.getFieldValue(l, "__typename");
          typeof d == "string" && !c.includes(d) && c.push(d);
        }), globalThis.__DEV__ !== !1 && re.warn(15, u, s, c.length ? "either ensure all objects of type " + c.join(" and ") + " have an ID or a custom merge function, or " : "", f, D({}, a), D({}, o));
      }
    }
  }
}
var Dl = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r) {
      r === void 0 && (r = {});
      var n = t.call(this) || this;
      return n.watches = /* @__PURE__ */ new Set(), n.addTypenameTransform = new el(Io), n.assumeImmutableResults = !0, n.makeVar = em, n.txCount = 0, n.config = Wy(r), n.addTypename = !!n.config.addTypename, n.policies = new nm({
        cache: n,
        dataIdFromObject: n.config.dataIdFromObject,
        possibleTypes: n.config.possibleTypes,
        typePolicies: n.config.typePolicies
      }), n.init(), n;
    }
    return e.prototype.init = function() {
      var r = this.data = new wr.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching
      });
      this.optimisticData = r.stump, this.resetResultCache();
    }, e.prototype.resetResultCache = function(r) {
      var n = this, i = this.storeReader, a = this.config.fragments;
      this.storeWriter = new im(this, this.storeReader = new Jy({
        cache: this,
        addTypename: this.addTypename,
        resultCacheMaxSize: this.config.resultCacheMaxSize,
        canonizeResults: Tl(this.config),
        canon: r ? void 0 : i && i.canon,
        fragments: a
      }), a), this.maybeBroadcastWatch = Er(function(o, s) {
        return n.broadcastWatch(o, s);
      }, {
        max: this.config.resultCacheMaxSize || Ze["inMemoryCache.maybeBroadcastWatch"] || 5e3,
        makeCacheKey: function(o) {
          var s = o.optimistic ? n.optimisticData : n.data;
          if (yr(s)) {
            var u = o.optimistic, f = o.id, c = o.variables;
            return s.makeCacheKey(
              o.query,
              // Different watches can have the same query, optimistic
              // status, rootId, and variables, but if their callbacks are
              // different, the (identical) result needs to be delivered to
              // each distinct callback. The easiest way to achieve that
              // separation is to include c.callback in the cache key for
              // maybeBroadcastWatch calls. See issue #5733.
              o.callback,
              ft({ optimistic: u, id: f, variables: c })
            );
          }
        }
      }), (/* @__PURE__ */ new Set([this.data.group, this.optimisticData.group])).forEach(function(o) {
        return o.resetCaching();
      });
    }, e.prototype.restore = function(r) {
      return this.init(), r && this.data.replace(r), this;
    }, e.prototype.extract = function(r) {
      return r === void 0 && (r = !1), (r ? this.optimisticData : this.data).extract();
    }, e.prototype.read = function(r) {
      var n = r.returnPartialData, i = n === void 0 ? !1 : n;
      try {
        return this.storeReader.diffQueryAgainstStore(D(D({}, r), { store: r.optimistic ? this.optimisticData : this.data, config: this.config, returnPartialData: i })).result || null;
      } catch (a) {
        if (a instanceof _l)
          return null;
        throw a;
      }
    }, e.prototype.write = function(r) {
      try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, r);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.modify = function(r) {
      if (Pe.call(r, "id") && !r.id)
        return !1;
      var n = r.optimistic ? this.optimisticData : this.data;
      try {
        return ++this.txCount, n.modify(r.id || "ROOT_QUERY", r.fields);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.diff = function(r) {
      return this.storeReader.diffQueryAgainstStore(D(D({}, r), { store: r.optimistic ? this.optimisticData : this.data, rootId: r.id || "ROOT_QUERY", config: this.config }));
    }, e.prototype.watch = function(r) {
      var n = this;
      return this.watches.size || Zy(this), this.watches.add(r), r.immediate && this.maybeBroadcastWatch(r), function() {
        n.watches.delete(r) && !n.watches.size && Ks(n), n.maybeBroadcastWatch.forget(r);
      };
    }, e.prototype.gc = function(r) {
      var n;
      ft.reset(), ct.reset(), this.addTypenameTransform.resetCache(), (n = this.config.fragments) === null || n === void 0 || n.resetCaches();
      var i = this.optimisticData.gc();
      return r && !this.txCount && (r.resetResultCache ? this.resetResultCache(r.resetResultIdentities) : r.resetResultIdentities && this.storeReader.resetCanon()), i;
    }, e.prototype.retain = function(r, n) {
      return (n ? this.optimisticData : this.data).retain(r);
    }, e.prototype.release = function(r, n) {
      return (n ? this.optimisticData : this.data).release(r);
    }, e.prototype.identify = function(r) {
      if (he(r))
        return r.__ref;
      try {
        return this.policies.identify(r)[0];
      } catch (n) {
        globalThis.__DEV__ !== !1 && re.warn(n);
      }
    }, e.prototype.evict = function(r) {
      if (!r.id) {
        if (Pe.call(r, "id"))
          return !1;
        r = D(D({}, r), { id: "ROOT_QUERY" });
      }
      try {
        return ++this.txCount, this.optimisticData.evict(r, this.data);
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches();
      }
    }, e.prototype.reset = function(r) {
      var n = this;
      return this.init(), ft.reset(), r && r.discardWatches ? (this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch.forget(i);
      }), this.watches.clear(), Ks(this)) : this.broadcastWatches(), Promise.resolve();
    }, e.prototype.removeOptimistic = function(r) {
      var n = this.optimisticData.removeLayer(r);
      n !== this.optimisticData && (this.optimisticData = n, this.broadcastWatches());
    }, e.prototype.batch = function(r) {
      var n = this, i = r.update, a = r.optimistic, o = a === void 0 ? !0 : a, s = r.removeOptimistic, u = r.onWatchUpdated, f, c = function(d) {
        var y = n, m = y.data, v = y.optimisticData;
        ++n.txCount, d && (n.data = n.optimisticData = d);
        try {
          return f = i(n);
        } finally {
          --n.txCount, n.data = m, n.optimisticData = v;
        }
      }, l = /* @__PURE__ */ new Set();
      return u && !this.txCount && this.broadcastWatches(D(D({}, r), { onWatchUpdated: function(d) {
        return l.add(d), !1;
      } })), typeof o == "string" ? this.optimisticData = this.optimisticData.addLayer(o, c) : o === !1 ? c(this.data) : c(), typeof s == "string" && (this.optimisticData = this.optimisticData.removeLayer(s)), u && l.size ? (this.broadcastWatches(D(D({}, r), { onWatchUpdated: function(d, y) {
        var m = u.call(this, d, y);
        return m !== !1 && l.delete(d), m;
      } })), l.size && l.forEach(function(d) {
        return n.maybeBroadcastWatch.dirty(d);
      })) : this.broadcastWatches(r), f;
    }, e.prototype.performTransaction = function(r, n) {
      return this.batch({
        update: r,
        optimistic: n || n !== null
      });
    }, e.prototype.transformDocument = function(r) {
      return this.addTypenameToDocument(this.addFragmentsToDocument(r));
    }, e.prototype.fragmentMatches = function(r, n) {
      return this.policies.fragmentMatches(r, n);
    }, e.prototype.lookupFragment = function(r) {
      var n;
      return ((n = this.config.fragments) === null || n === void 0 ? void 0 : n.lookup(r)) || null;
    }, e.prototype.broadcastWatches = function(r) {
      var n = this;
      this.txCount || this.watches.forEach(function(i) {
        return n.maybeBroadcastWatch(i, r);
      });
    }, e.prototype.addFragmentsToDocument = function(r) {
      var n = this.config.fragments;
      return n ? n.transform(r) : r;
    }, e.prototype.addTypenameToDocument = function(r) {
      return this.addTypename ? this.addTypenameTransform.transformDocument(r) : r;
    }, e.prototype.broadcastWatch = function(r, n) {
      var i = r.lastDiff, a = this.diff(r);
      n && (r.optimistic && typeof n.optimistic == "string" && (a.fromOptimisticTransaction = !0), n.onWatchUpdated && n.onWatchUpdated.call(this, r, a, i) === !1) || (!i || !pe(i.result, a.result)) && r.callback(r.lastDiff = a, i);
    }, e;
  }(wl)
);
globalThis.__DEV__ !== !1 && (Dl.prototype.getMemoryInternals = ap);
var se;
(function(t) {
  t[t.loading = 1] = "loading", t[t.setVariables = 2] = "setVariables", t[t.fetchMore = 3] = "fetchMore", t[t.refetch = 4] = "refetch", t[t.poll = 6] = "poll", t[t.ready = 7] = "ready", t[t.error = 8] = "error";
})(se || (se = {}));
function Lt(t) {
  return t ? t < 7 : !1;
}
var uu = Object.assign, om = Object.hasOwnProperty, gr = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r) {
      var n = r.queryManager, i = r.queryInfo, a = r.options, o = this, s = e.inactiveOnCreation.getValue();
      o = t.call(this, function(g) {
        s && (n.queries.set(o.queryId, i), s = !1);
        try {
          var _ = g._subscription._observer;
          _ && !_.error && (_.error = sm);
        } catch {
        }
        var w = !o.observers.size;
        o.observers.add(g);
        var A = o.last;
        return A && A.error ? g.error && g.error(A.error) : A && A.result && g.next && g.next(o.maskResult(A.result)), w && o.reobserve().catch(function() {
        }), function() {
          o.observers.delete(g) && !o.observers.size && o.tearDownQuery();
        };
      }) || this, o.observers = /* @__PURE__ */ new Set(), o.subscriptions = /* @__PURE__ */ new Set(), o.dirty = !1, o.queryInfo = i, o.queryManager = n, o.waitForOwnResult = ai(a.fetchPolicy), o.isTornDown = !1, o.subscribeToMore = o.subscribeToMore.bind(o), o.maskResult = o.maskResult.bind(o);
      var u = n.defaultOptions.watchQuery, f = u === void 0 ? {} : u, c = f.fetchPolicy, l = c === void 0 ? "cache-first" : c, d = a.fetchPolicy, y = d === void 0 ? l : d, m = a.initialFetchPolicy, v = m === void 0 ? y === "standby" ? l : y : m;
      o.options = D(D({}, a), {
        // Remember the initial options.fetchPolicy so we can revert back to this
        // policy when variables change. This information can also be specified
        // (or overridden) by providing options.initialFetchPolicy explicitly.
        initialFetchPolicy: v,
        // This ensures this.options.fetchPolicy always has a string value, in
        // case options.fetchPolicy was not provided.
        fetchPolicy: y
      }), o.queryId = i.queryId || n.generateQueryId();
      var b = Tt(o.query);
      return o.queryName = b && b.name && b.name.value, o;
    }
    return Object.defineProperty(e.prototype, "query", {
      // The `query` computed property will always reflect the document transformed
      // by the last run query. `this.options.query` will always reflect the raw
      // untransformed query to ensure document transforms with runtime conditionals
      // are run on the original document.
      get: function() {
        return this.lastQuery || this.options.query;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "variables", {
      // Computed shorthand for this.options.variables, preserved for
      // backwards compatibility.
      /**
       * An object containing the variables that were provided for the query.
       */
      get: function() {
        return this.options.variables;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.result = function() {
      var r = this;
      return new Promise(function(n, i) {
        var a = {
          next: function(s) {
            n(s), r.observers.delete(a), r.observers.size || r.queryManager.removeQuery(r.queryId), setTimeout(function() {
              o.unsubscribe();
            }, 0);
          },
          error: i
        }, o = r.subscribe(a);
      });
    }, e.prototype.resetDiff = function() {
      this.queryInfo.resetDiff();
    }, e.prototype.getCurrentFullResult = function(r) {
      r === void 0 && (r = !0);
      var n = this.getLastResult(!0), i = this.queryInfo.networkStatus || n && n.networkStatus || se.ready, a = D(D({}, n), { loading: Lt(i), networkStatus: i }), o = this.options.fetchPolicy, s = o === void 0 ? "cache-first" : o;
      if (
        // These fetch policies should never deliver data from the cache, unless
        // redelivering a previously delivered result.
        !(ai(s) || // If this.options.query has @client(always: true) fields, we cannot
        // trust diff.result, since it was read from the cache without running
        // local resolvers (and it's too late to run resolvers now, since we must
        // return a result synchronously).
        this.queryManager.getDocumentInfo(this.query).hasForcedResolvers)
      ) if (this.waitForOwnResult)
        this.queryInfo.updateWatch();
      else {
        var u = this.queryInfo.getDiff();
        (u.complete || this.options.returnPartialData) && (a.data = u.result), pe(a.data, {}) && (a.data = void 0), u.complete ? (delete a.partial, u.complete && a.networkStatus === se.loading && (s === "cache-first" || s === "cache-only") && (a.networkStatus = se.ready, a.loading = !1)) : a.partial = !0, a.networkStatus === se.ready && (a.error || a.errors) && (a.networkStatus = se.error), globalThis.__DEV__ !== !1 && !u.complete && !this.options.partialRefetch && !a.loading && !a.data && !a.error && Nl(u.missing);
      }
      return r && this.updateLastResult(a), a;
    }, e.prototype.getCurrentResult = function(r) {
      return r === void 0 && (r = !0), this.maskResult(this.getCurrentFullResult(r));
    }, e.prototype.isDifferentFromLastResult = function(r, n) {
      if (!this.last)
        return !0;
      var i = this.queryManager.getDocumentInfo(this.query), a = this.queryManager.dataMasking, o = a ? i.nonReactiveQuery : this.query, s = a || i.hasNonreactiveDirective ? !yl(o, this.last.result, r, this.variables) : !pe(this.last.result, r);
      return s || n && !pe(this.last.variables, n);
    }, e.prototype.getLast = function(r, n) {
      var i = this.last;
      if (i && i[r] && (!n || pe(i.variables, this.variables)))
        return i[r];
    }, e.prototype.getLastResult = function(r) {
      return this.getLast("result", r);
    }, e.prototype.getLastError = function(r) {
      return this.getLast("error", r);
    }, e.prototype.resetLastResults = function() {
      delete this.last, this.isTornDown = !1;
    }, e.prototype.resetQueryStoreErrors = function() {
      this.queryManager.resetErrors(this.queryId);
    }, e.prototype.refetch = function(r) {
      var n, i = {
        // Always disable polling for refetches.
        pollInterval: 0
      }, a = this.options.fetchPolicy;
      if (a === "no-cache" ? i.fetchPolicy = "no-cache" : i.fetchPolicy = "network-only", globalThis.__DEV__ !== !1 && r && om.call(r, "variables")) {
        var o = Bf(this.query), s = o.variableDefinitions;
        (!s || !s.some(function(u) {
          return u.variable.name.value === "variables";
        })) && globalThis.__DEV__ !== !1 && re.warn(
          21,
          r,
          ((n = o.name) === null || n === void 0 ? void 0 : n.value) || o
        );
      }
      return r && !pe(this.options.variables, r) && (i.variables = this.options.variables = D(D({}, this.options.variables), r)), this.queryInfo.resetLastWrite(), this.reobserve(i, se.refetch);
    }, e.prototype.fetchMore = function(r) {
      var n = this, i = D(D({}, r.query ? r : D(D(D(D({}, this.options), { query: this.options.query }), r), { variables: D(D({}, this.options.variables), r.variables) })), {
        // The fetchMore request goes immediately to the network and does
        // not automatically write its result to the cache (hence no-cache
        // instead of network-only), because we allow the caller of
        // fetchMore to provide an updateQuery callback that determines how
        // the data gets written to the cache.
        fetchPolicy: "no-cache"
      });
      i.query = this.transformDocument(i.query);
      var a = this.queryManager.generateQueryId();
      this.lastQuery = r.query ? this.transformDocument(this.options.query) : i.query;
      var o = this.queryInfo, s = o.networkStatus;
      o.networkStatus = se.fetchMore, i.notifyOnNetworkStatusChange && this.observe();
      var u = /* @__PURE__ */ new Set(), f = r?.updateQuery, c = this.options.fetchPolicy !== "no-cache";
      return c || re(f, 22), this.queryManager.fetchQuery(a, i, se.fetchMore).then(function(l) {
        if (n.queryManager.removeQuery(a), o.networkStatus === se.fetchMore && (o.networkStatus = s), c)
          n.queryManager.cache.batch({
            update: function(m) {
              var v = r.updateQuery;
              v ? m.updateQuery({
                query: n.query,
                variables: n.variables,
                returnPartialData: !0,
                optimistic: !1
              }, function(b) {
                return v(b, {
                  fetchMoreResult: l.data,
                  variables: i.variables
                });
              }) : m.writeQuery({
                query: i.query,
                variables: i.variables,
                data: l.data
              });
            },
            onWatchUpdated: function(m) {
              u.add(m.query);
            }
          });
        else {
          var d = n.getLast("result"), y = f(d.data, {
            fetchMoreResult: l.data,
            variables: i.variables
          });
          n.reportResult(D(D({}, d), { networkStatus: s, loading: Lt(s), data: y }), n.variables);
        }
        return n.maskResult(l);
      }).finally(function() {
        c && !u.has(n.query) && n.reobserveCacheFirst();
      });
    }, e.prototype.subscribeToMore = function(r) {
      var n = this, i = this.queryManager.startGraphQLSubscription({
        query: r.document,
        variables: r.variables,
        context: r.context
      }).subscribe({
        next: function(a) {
          var o = r.updateQuery;
          o && n.updateQuery(function(s, u) {
            return o(s, D({ subscriptionData: a }, u));
          });
        },
        error: function(a) {
          if (r.onError) {
            r.onError(a);
            return;
          }
          globalThis.__DEV__ !== !1 && re.error(23, a);
        }
      });
      return this.subscriptions.add(i), function() {
        n.subscriptions.delete(i) && i.unsubscribe();
      };
    }, e.prototype.setOptions = function(r) {
      return this.reobserve(r);
    }, e.prototype.silentSetOptions = function(r) {
      var n = Rt(this.options, r || {});
      uu(this.options, n);
    }, e.prototype.setVariables = function(r) {
      return pe(this.variables, r) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = r, this.observers.size ? this.reobserve({
        // Reset options.fetchPolicy to its original value.
        fetchPolicy: this.options.initialFetchPolicy,
        variables: r
      }, se.setVariables) : Promise.resolve());
    }, e.prototype.updateQuery = function(r) {
      var n = this.queryManager, i = n.cache.diff({
        query: this.options.query,
        variables: this.variables,
        returnPartialData: !0,
        optimistic: !1
      }), a = i.result, o = i.complete, s = r(a, {
        variables: this.variables,
        complete: !!o,
        previousData: a
      });
      s && (n.cache.writeQuery({
        query: this.options.query,
        data: s,
        variables: this.variables
      }), n.broadcastQueries());
    }, e.prototype.startPolling = function(r) {
      this.options.pollInterval = r, this.updatePolling();
    }, e.prototype.stopPolling = function() {
      this.options.pollInterval = 0, this.updatePolling();
    }, e.prototype.applyNextFetchPolicy = function(r, n) {
      if (n.nextFetchPolicy) {
        var i = n.fetchPolicy, a = i === void 0 ? "cache-first" : i, o = n.initialFetchPolicy, s = o === void 0 ? a : o;
        a === "standby" || (typeof n.nextFetchPolicy == "function" ? n.fetchPolicy = n.nextFetchPolicy(a, {
          reason: r,
          options: n,
          observable: this,
          initialFetchPolicy: s
        }) : r === "variables-changed" ? n.fetchPolicy = s : n.fetchPolicy = n.nextFetchPolicy);
      }
      return n.fetchPolicy;
    }, e.prototype.fetch = function(r, n, i) {
      var a = this.queryManager.getOrCreateQuery(this.queryId);
      return a.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(a, r, n, i);
    }, e.prototype.updatePolling = function() {
      var r = this;
      if (!this.queryManager.ssrMode) {
        var n = this, i = n.pollingInfo, a = n.options.pollInterval;
        if (!a || !this.hasObservers()) {
          i && (clearTimeout(i.timeout), delete this.pollingInfo);
          return;
        }
        if (!(i && i.interval === a)) {
          re(a, 24);
          var o = i || (this.pollingInfo = {});
          o.interval = a;
          var s = function() {
            var f, c;
            r.pollingInfo && (!Lt(r.queryInfo.networkStatus) && !(!((c = (f = r.options).skipPollAttempt) === null || c === void 0) && c.call(f)) ? r.reobserve({
              // Most fetchPolicy options don't make sense to use in a polling context, as
              // users wouldn't want to be polling the cache directly. However, network-only and
              // no-cache are both useful for when the user wants to control whether or not the
              // polled results are written to the cache.
              fetchPolicy: r.options.initialFetchPolicy === "no-cache" ? "no-cache" : "network-only"
            }, se.poll).then(u, u) : u());
          }, u = function() {
            var f = r.pollingInfo;
            f && (clearTimeout(f.timeout), f.timeout = setTimeout(s, f.interval));
          };
          u();
        }
      }
    }, e.prototype.updateLastResult = function(r, n) {
      n === void 0 && (n = this.variables);
      var i = this.getLastError();
      return i && this.last && !pe(n, this.last.variables) && (i = void 0), this.last = D({ result: this.queryManager.assumeImmutableResults ? r : sl(r), variables: n }, i ? { error: i } : null);
    }, e.prototype.reobserveAsConcast = function(r, n) {
      var i = this;
      this.isTornDown = !1;
      var a = (
        // Refetching uses a disposable Concast to allow refetches using different
        // options/variables, without permanently altering the options of the
        // original ObservableQuery.
        n === se.refetch || // The fetchMore method does not actually call the reobserve method, but,
        // if it did, it would definitely use a disposable Concast.
        n === se.fetchMore || // Polling uses a disposable Concast so the polling options (which force
        // fetchPolicy to be "network-only" or "no-cache") won't override the original options.
        n === se.poll
      ), o = this.options.variables, s = this.options.fetchPolicy, u = Rt(this.options, r || {}), f = a ? (
        // Disposable Concast fetches receive a shallow copy of this.options
        // (merged with newOptions), leaving this.options unmodified.
        u
      ) : uu(this.options, u), c = this.transformDocument(f.query);
      this.lastQuery = c, a || (this.updatePolling(), r && r.variables && !pe(r.variables, o) && // Don't mess with the fetchPolicy if it's currently "standby".
      f.fetchPolicy !== "standby" && // If we're changing the fetchPolicy anyway, don't try to change it here
      // using applyNextFetchPolicy. The explicit options.fetchPolicy wins.
      (f.fetchPolicy === s || // A `nextFetchPolicy` function has even higher priority, though,
      // so in that case `applyNextFetchPolicy` must be called.
      typeof f.nextFetchPolicy == "function") && (this.applyNextFetchPolicy("variables-changed", f), n === void 0 && (n = se.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = ai(f.fetchPolicy));
      var l = function() {
        i.concast === m && (i.waitForOwnResult = !1);
      }, d = f.variables && D({}, f.variables), y = this.fetch(f, n, c), m = y.concast, v = y.fromLink, b = {
        next: function(g) {
          pe(i.variables, d) && (l(), i.reportResult(g, d));
        },
        error: function(g) {
          pe(i.variables, d) && (dl(g) || (g = new Ke({ networkError: g })), l(), i.reportError(g, d));
        }
      };
      return !a && (v || !this.concast) && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = m, this.observer = b), m.addObserver(b), m;
    }, e.prototype.reobserve = function(r, n) {
      return Xp(this.reobserveAsConcast(r, n).promise.then(this.maskResult));
    }, e.prototype.resubscribeAfterError = function() {
      for (var r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      var i = this.last;
      this.resetLastResults();
      var a = this.subscribe.apply(this, r);
      return this.last = i, a;
    }, e.prototype.observe = function() {
      this.reportResult(
        // Passing false is important so that this.getCurrentResult doesn't
        // save the fetchMore result as this.lastResult, causing it to be
        // ignored due to the this.isDifferentFromLastResult check in
        // this.reportResult.
        this.getCurrentFullResult(!1),
        this.variables
      );
    }, e.prototype.reportResult = function(r, n) {
      var i = this.getLastError(), a = this.isDifferentFromLastResult(r, n);
      (i || !r.partial || this.options.returnPartialData) && this.updateLastResult(r, n), (i || a) && pr(this.observers, "next", this.maskResult(r));
    }, e.prototype.reportError = function(r, n) {
      var i = D(D({}, this.getLastResult()), { error: r, errors: r.graphQLErrors, networkStatus: se.error, loading: !1 });
      this.updateLastResult(i, n), pr(this.observers, "error", this.last.error = r);
    }, e.prototype.hasObservers = function() {
      return this.observers.size > 0;
    }, e.prototype.tearDownQuery = function() {
      this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(r) {
        return r.unsubscribe();
      }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0);
    }, e.prototype.transformDocument = function(r) {
      return this.queryManager.transform(r);
    }, e.prototype.maskResult = function(r) {
      return r && "data" in r ? D(D({}, r), { data: this.queryManager.maskOperation({
        document: this.query,
        data: r.data,
        fetchPolicy: this.options.fetchPolicy,
        id: this.queryId
      }) }) : r;
    }, e.prototype.resetNotifications = function() {
      this.cancelNotifyTimeout(), this.dirty = !1;
    }, e.prototype.cancelNotifyTimeout = function() {
      this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0);
    }, e.prototype.scheduleNotify = function() {
      var r = this;
      this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
        return r.notify();
      }, 0)));
    }, e.prototype.notify = function() {
      if (this.cancelNotifyTimeout(), this.dirty && (this.options.fetchPolicy == "cache-only" || this.options.fetchPolicy == "cache-and-network" || !Lt(this.queryInfo.networkStatus))) {
        var r = this.queryInfo.getDiff();
        r.fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst();
      }
      this.dirty = !1;
    }, e.prototype.reobserveCacheFirst = function() {
      var r = this.options, n = r.fetchPolicy, i = r.nextFetchPolicy;
      return n === "cache-and-network" || n === "network-only" ? this.reobserve({
        fetchPolicy: "cache-first",
        // Use a temporary nextFetchPolicy function that replaces itself with the
        // previous nextFetchPolicy value and returns the original fetchPolicy.
        nextFetchPolicy: function(a, o) {
          return this.nextFetchPolicy = i, typeof this.nextFetchPolicy == "function" ? this.nextFetchPolicy(a, o) : n;
        }
      }) : this.reobserve();
    }, e.inactiveOnCreation = new Tr(), e;
  }(me)
);
ul(gr);
function sm(t) {
  globalThis.__DEV__ !== !1 && re.error(25, t.message, t.stack);
}
function Nl(t) {
  globalThis.__DEV__ !== !1 && t && globalThis.__DEV__ !== !1 && re.debug(26, t);
}
function ai(t) {
  return t === "network-only" || t === "no-cache" || t === "standby";
}
var Ft = new (kt ? WeakMap : Map)();
function oi(t, e) {
  var r = t[e];
  typeof r == "function" && (t[e] = function() {
    return Ft.set(
      t,
      // The %1e15 allows the count to wrap around to 0 safely every
      // quadrillion evictions, so there's no risk of overflow. To be
      // clear, this is more of a pedantic principle than something
      // that matters in any conceivable practical scenario.
      (Ft.get(t) + 1) % 1e15
    ), r.apply(this, arguments);
  });
}
var si = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = e.generateQueryId()), this.queryId = r, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
      var n = this.cache = e.cache;
      Ft.has(n) || (Ft.set(n, 0), oi(n, "evict"), oi(n, "modify"), oi(n, "reset"));
    }
    return t.prototype.init = function(e) {
      var r = e.networkStatus || se.loading;
      return this.variables && this.networkStatus !== se.loading && !pe(this.variables, e.variables) && (r = se.setVariables), pe(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
        document: e.document,
        variables: e.variables,
        networkError: null,
        graphQLErrors: this.graphQLErrors || [],
        networkStatus: r
      }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this;
    }, t.prototype.resetDiff = function() {
      this.lastDiff = void 0;
    }, t.prototype.getDiff = function() {
      var e = this.getDiffOptions();
      if (this.lastDiff && pe(e, this.lastDiff.options))
        return this.lastDiff.diff;
      this.updateWatch(this.variables);
      var r = this.observableQuery;
      if (r && r.options.fetchPolicy === "no-cache")
        return { complete: !1 };
      var n = this.cache.diff(e);
      return this.updateLastDiff(n, e), n;
    }, t.prototype.updateLastDiff = function(e, r) {
      this.lastDiff = e ? {
        diff: e,
        options: r || this.getDiffOptions()
      } : void 0;
    }, t.prototype.getDiffOptions = function(e) {
      var r;
      return e === void 0 && (e = this.variables), {
        query: this.document,
        variables: e,
        returnPartialData: !0,
        optimistic: !0,
        canonizeResults: (r = this.observableQuery) === null || r === void 0 ? void 0 : r.options.canonizeResults
      };
    }, t.prototype.setDiff = function(e) {
      var r, n, i = this.lastDiff && this.lastDiff.diff;
      e && !e.complete && (!((r = this.observableQuery) === null || r === void 0) && r.getLastError()) || (this.updateLastDiff(e), pe(i && i.result, e && e.result) || (n = this.observableQuery) === null || n === void 0 || n.scheduleNotify());
    }, t.prototype.setObservableQuery = function(e) {
      e !== this.observableQuery && (this.observableQuery = e, e && (e.queryInfo = this));
    }, t.prototype.stop = function() {
      var e;
      if (!this.stopped) {
        this.stopped = !0, (e = this.observableQuery) === null || e === void 0 || e.resetNotifications(), this.cancel();
        var r = this.observableQuery;
        r && r.stopPolling();
      }
    }, t.prototype.cancel = function() {
      var e;
      (e = this.cancelWatch) === null || e === void 0 || e.call(this), this.cancelWatch = void 0;
    }, t.prototype.updateWatch = function(e) {
      var r = this;
      e === void 0 && (e = this.variables);
      var n = this.observableQuery;
      if (!(n && n.options.fetchPolicy === "no-cache")) {
        var i = D(D({}, this.getDiffOptions(e)), { watcher: this, callback: function(a) {
          return r.setDiff(a);
        } });
        (!this.lastWatch || !pe(i, this.lastWatch)) && (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i));
      }
    }, t.prototype.resetLastWrite = function() {
      this.lastWrite = void 0;
    }, t.prototype.shouldWrite = function(e, r) {
      var n = this.lastWrite;
      return !(n && // If cache.evict has been called since the last time we wrote this
      // data into the cache, there's a chance writing this result into
      // the cache will repair what was evicted.
      n.dmCount === Ft.get(this.cache) && pe(r, n.variables) && pe(e.data, n.result.data));
    }, t.prototype.markResult = function(e, r, n, i) {
      var a = this, o, s = new yt(), u = Be(e.errors) ? e.errors.slice(0) : [];
      if ((o = this.observableQuery) === null || o === void 0 || o.resetNotifications(), "incremental" in e && Be(e.incremental)) {
        var f = cl(this.getDiff().result, e);
        e.data = f;
      } else if ("hasNext" in e && e.hasNext) {
        var c = this.getDiff();
        e.data = s.merge(c.result, e.data);
      }
      this.graphQLErrors = u, n.fetchPolicy === "no-cache" ? this.updateLastDiff({ result: e.data, complete: !0 }, this.getDiffOptions(n.variables)) : i !== 0 && (io(e, n.errorPolicy) ? this.cache.performTransaction(function(l) {
        if (a.shouldWrite(e, n.variables))
          l.writeQuery({
            query: r,
            data: e.data,
            variables: n.variables,
            overwrite: i === 1
          }), a.lastWrite = {
            result: e,
            variables: n.variables,
            dmCount: Ft.get(a.cache)
          };
        else if (a.lastDiff && a.lastDiff.diff.complete) {
          e.data = a.lastDiff.diff.result;
          return;
        }
        var d = a.getDiffOptions(n.variables), y = l.diff(d);
        !a.stopped && pe(a.variables, n.variables) && a.updateWatch(n.variables), a.updateLastDiff(y, d), y.complete && (e.data = y.result);
      }) : this.lastWrite = void 0);
    }, t.prototype.markReady = function() {
      return this.networkError = null, this.networkStatus = se.ready;
    }, t.prototype.markError = function(e) {
      var r;
      return this.networkStatus = se.error, this.lastWrite = void 0, (r = this.observableQuery) === null || r === void 0 || r.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e;
    }, t;
  }()
);
function io(t, e) {
  e === void 0 && (e = "none");
  var r = e === "ignore" || e === "all", n = !zr(t);
  return !n && r && t.data && (n = !0), n;
}
var um = Object.prototype.hasOwnProperty, cu = /* @__PURE__ */ Object.create(null), cm = (
  /** @class */
  function() {
    function t(e) {
      var r = this;
      this.clientAwareness = {}, this.queries = /* @__PURE__ */ new Map(), this.fetchCancelFns = /* @__PURE__ */ new Map(), this.transformCache = new Ro(
        Ze["queryManager.getDocumentInfo"] || 2e3
        /* defaultCacheSizes["queryManager.getDocumentInfo"] */
      ), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new it(!1), this.noCacheWarningsByQueryId = /* @__PURE__ */ new Set();
      var n = new el(
        function(a) {
          return r.cache.transformDocument(a);
        },
        // Allow the apollo cache to manage its own transform caches
        { cache: !1 }
      );
      this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking;
      var i = e.documentTransform;
      this.documentTransform = i ? n.concat(i).concat(n) : n, this.defaultContext = e.defaultContext || /* @__PURE__ */ Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = /* @__PURE__ */ Object.create(null));
    }
    return t.prototype.stop = function() {
      var e = this;
      this.queries.forEach(function(r, n) {
        e.stopQueryNoBroadcast(n);
      }), this.cancelPendingFetches(Fe(27));
    }, t.prototype.cancelPendingFetches = function(e) {
      this.fetchCancelFns.forEach(function(r) {
        return r(e);
      }), this.fetchCancelFns.clear();
    }, t.prototype.mutate = function(e) {
      return ot(this, arguments, void 0, function(r) {
        var n, i, a, o, s, u, f, c = r.mutation, l = r.variables, d = r.optimisticResponse, y = r.updateQueries, m = r.refetchQueries, v = m === void 0 ? [] : m, b = r.awaitRefetchQueries, g = b === void 0 ? !1 : b, _ = r.update, w = r.onQueryUpdated, A = r.fetchPolicy, P = A === void 0 ? ((u = this.defaultOptions.mutate) === null || u === void 0 ? void 0 : u.fetchPolicy) || "network-only" : A, C = r.errorPolicy, B = C === void 0 ? ((f = this.defaultOptions.mutate) === null || f === void 0 ? void 0 : f.errorPolicy) || "none" : C, L = r.keepRootFields, Y = r.context;
        return st(this, function(G) {
          switch (G.label) {
            case 0:
              return re(c, 28), re(P === "network-only" || P === "no-cache", 29), n = this.generateMutationId(), c = this.cache.transformForLink(this.transform(c)), i = this.getDocumentInfo(c).hasClientExports, l = this.getVariables(c, l), i ? [4, this.localState.addExportedVariables(c, l, Y)] : [3, 2];
            case 1:
              l = G.sent(), G.label = 2;
            case 2:
              return a = this.mutationStore && (this.mutationStore[n] = {
                mutation: c,
                variables: l,
                loading: !0,
                error: null
              }), o = d && this.markMutationOptimistic(d, {
                mutationId: n,
                document: c,
                variables: l,
                fetchPolicy: P,
                errorPolicy: B,
                context: Y,
                updateQueries: y,
                update: _,
                keepRootFields: L
              }), this.broadcastQueries(), s = this, [2, new Promise(function(J, z) {
                return Zn(s.getObservableFromLink(c, D(D({}, Y), { optimisticResponse: o ? d : void 0 }), l, {}, !1), function(ee) {
                  if (zr(ee) && B === "none")
                    throw new Ke({
                      graphQLErrors: Ja(ee)
                    });
                  a && (a.loading = !1, a.error = null);
                  var x = D({}, ee);
                  return typeof v == "function" && (v = v(x)), B === "ignore" && zr(x) && delete x.errors, s.markMutationResult({
                    mutationId: n,
                    result: x,
                    document: c,
                    variables: l,
                    fetchPolicy: P,
                    errorPolicy: B,
                    context: Y,
                    update: _,
                    updateQueries: y,
                    awaitRefetchQueries: g,
                    refetchQueries: v,
                    removeOptimistic: o ? n : void 0,
                    onQueryUpdated: w,
                    keepRootFields: L
                  });
                }).subscribe({
                  next: function(ee) {
                    s.broadcastQueries(), (!("hasNext" in ee) || ee.hasNext === !1) && J(D(D({}, ee), { data: s.maskOperation({
                      document: c,
                      data: ee.data,
                      fetchPolicy: P,
                      id: n
                    }) }));
                  },
                  error: function(ee) {
                    a && (a.loading = !1, a.error = ee), o && s.cache.removeOptimistic(n), s.broadcastQueries(), z(ee instanceof Ke ? ee : new Ke({
                      networkError: ee
                    }));
                  }
                });
              })];
          }
        });
      });
    }, t.prototype.markMutationResult = function(e, r) {
      var n = this;
      r === void 0 && (r = this.cache);
      var i = e.result, a = [], o = e.fetchPolicy === "no-cache";
      if (!o && io(i, e.errorPolicy)) {
        if (qt(i) || a.push({
          result: i.data,
          dataId: "ROOT_MUTATION",
          query: e.document,
          variables: e.variables
        }), qt(i) && Be(i.incremental)) {
          var s = r.diff({
            id: "ROOT_MUTATION",
            // The cache complains if passed a mutation where it expects a
            // query, so we transform mutations and subscriptions to queries
            // (only once, thanks to this.transformCache).
            query: this.getDocumentInfo(e.document).asQuery,
            variables: e.variables,
            optimistic: !1,
            returnPartialData: !0
          }), u = void 0;
          s.result && (u = cl(s.result, i)), typeof u < "u" && (i.data = u, a.push({
            result: u,
            dataId: "ROOT_MUTATION",
            query: e.document,
            variables: e.variables
          }));
        }
        var f = e.updateQueries;
        f && this.queries.forEach(function(l, d) {
          var y = l.observableQuery, m = y && y.queryName;
          if (!(!m || !um.call(f, m))) {
            var v = f[m], b = n.queries.get(d), g = b.document, _ = b.variables, w = r.diff({
              query: g,
              variables: _,
              returnPartialData: !0,
              optimistic: !1
            }), A = w.result, P = w.complete;
            if (P && A) {
              var C = v(A, {
                mutationResult: i,
                queryName: g && fr(g) || void 0,
                queryVariables: _
              });
              C && a.push({
                result: C,
                dataId: "ROOT_QUERY",
                query: g,
                variables: _
              });
            }
          }
        });
      }
      if (a.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
        var c = [];
        if (this.refetchQueries({
          updateCache: function(l) {
            o || a.forEach(function(v) {
              return l.write(v);
            });
            var d = e.update, y = !ny(i) || qt(i) && !i.hasNext;
            if (d) {
              if (!o) {
                var m = l.diff({
                  id: "ROOT_MUTATION",
                  // The cache complains if passed a mutation where it expects a
                  // query, so we transform mutations and subscriptions to queries
                  // (only once, thanks to this.transformCache).
                  query: n.getDocumentInfo(e.document).asQuery,
                  variables: e.variables,
                  optimistic: !1,
                  returnPartialData: !0
                });
                m.complete && (i = D(D({}, i), { data: m.result }), "incremental" in i && delete i.incremental, "hasNext" in i && delete i.hasNext);
              }
              y && d(l, i, {
                context: e.context,
                variables: e.variables
              });
            }
            !o && !e.keepRootFields && y && l.modify({
              id: "ROOT_MUTATION",
              fields: function(v, b) {
                var g = b.fieldName, _ = b.DELETE;
                return g === "__typename" ? v : _;
              }
            });
          },
          include: e.refetchQueries,
          // Write the final mutation.result to the root layer of the cache.
          optimistic: !1,
          // Remove the corresponding optimistic layer at the same time as we
          // write the final non-optimistic result.
          removeOptimistic: e.removeOptimistic,
          // Let the caller of client.mutate optionally determine the refetching
          // behavior for watched queries after the mutation.update function runs.
          // If no onQueryUpdated function was provided for this mutation, pass
          // null instead of undefined to disable the default refetching behavior.
          onQueryUpdated: e.onQueryUpdated || null
        }).forEach(function(l) {
          return c.push(l);
        }), e.awaitRefetchQueries || e.onQueryUpdated)
          return Promise.all(c).then(function() {
            return i;
          });
      }
      return Promise.resolve(i);
    }, t.prototype.markMutationOptimistic = function(e, r) {
      var n = this, i = typeof e == "function" ? e(r.variables, { IGNORE: cu }) : e;
      return i === cu ? !1 : (this.cache.recordOptimisticTransaction(function(a) {
        try {
          n.markMutationResult(D(D({}, r), { result: { data: i } }), a);
        } catch (o) {
          globalThis.__DEV__ !== !1 && re.error(o);
        }
      }, r.mutationId), !0);
    }, t.prototype.fetchQuery = function(e, r, n) {
      return this.fetchConcastWithInfo(this.getOrCreateQuery(e), r, n).concast.promise;
    }, t.prototype.getQueryStore = function() {
      var e = /* @__PURE__ */ Object.create(null);
      return this.queries.forEach(function(r, n) {
        e[n] = {
          variables: r.variables,
          networkStatus: r.networkStatus,
          networkError: r.networkError,
          graphQLErrors: r.graphQLErrors
        };
      }), e;
    }, t.prototype.resetErrors = function(e) {
      var r = this.queries.get(e);
      r && (r.networkError = void 0, r.graphQLErrors = []);
    }, t.prototype.transform = function(e) {
      return this.documentTransform.transformDocument(e);
    }, t.prototype.getDocumentInfo = function(e) {
      var r = this.transformCache;
      if (!r.has(e)) {
        var n = {
          // TODO These three calls (hasClientExports, shouldForceResolvers, and
          // usesNonreactiveDirective) are performing independent full traversals
          // of the transformed document. We should consider merging these
          // traversals into a single pass in the future, though the work is
          // cached after the first time.
          hasClientExports: Fh(e),
          hasForcedResolvers: this.localState.shouldForceResolvers(e),
          hasNonreactiveDirective: vr(["nonreactive"], e),
          nonReactiveQuery: Bp(e),
          clientQuery: this.localState.clientQuery(e),
          serverQuery: rl([
            { name: "client", remove: !0 },
            { name: "connection" },
            { name: "nonreactive" },
            { name: "unmask" }
          ], e),
          defaultVars: Ao(Tt(e)),
          // Transform any mutation or subscription operations to query operations
          // so we can read/write them from/to the cache.
          asQuery: D(D({}, e), { definitions: e.definitions.map(function(i) {
            return i.kind === "OperationDefinition" && i.operation !== "query" ? D(D({}, i), { operation: "query" }) : i;
          }) })
        };
        r.set(e, n);
      }
      return r.get(e);
    }, t.prototype.getVariables = function(e, r) {
      return D(D({}, this.getDocumentInfo(e).defaultVars), r);
    }, t.prototype.watchQuery = function(e) {
      var r = this.transform(e.query);
      e = D(D({}, e), { variables: this.getVariables(r, e.variables) }), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
      var n = new si(this), i = new gr({
        queryManager: this,
        queryInfo: n,
        options: e
      });
      return i.lastQuery = r, gr.inactiveOnCreation.getValue() || this.queries.set(i.queryId, n), n.init({
        document: r,
        observableQuery: i,
        variables: i.variables
      }), i;
    }, t.prototype.query = function(e, r) {
      var n = this;
      r === void 0 && (r = this.generateQueryId()), re(e.query, 30), re(e.query.kind === "Document", 31), re(!e.returnPartialData, 32), re(!e.pollInterval, 33);
      var i = this.transform(e.query);
      return this.fetchQuery(r, D(D({}, e), { query: i })).then(function(a) {
        return a && D(D({}, a), { data: n.maskOperation({
          document: i,
          data: a.data,
          fetchPolicy: e.fetchPolicy,
          id: r
        }) });
      }).finally(function() {
        return n.stopQuery(r);
      });
    }, t.prototype.generateQueryId = function() {
      return String(this.queryIdCounter++);
    }, t.prototype.generateRequestId = function() {
      return this.requestIdCounter++;
    }, t.prototype.generateMutationId = function() {
      return String(this.mutationIdCounter++);
    }, t.prototype.stopQueryInStore = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
    }, t.prototype.stopQueryInStoreNoBroadcast = function(e) {
      var r = this.queries.get(e);
      r && r.stop();
    }, t.prototype.clearStore = function(e) {
      return e === void 0 && (e = {
        discardWatches: !0
      }), this.cancelPendingFetches(Fe(34)), this.queries.forEach(function(r) {
        r.observableQuery ? r.networkStatus = se.loading : r.stop();
      }), this.mutationStore && (this.mutationStore = /* @__PURE__ */ Object.create(null)), this.cache.reset(e);
    }, t.prototype.getObservableQueries = function(e) {
      var r = this;
      e === void 0 && (e = "active");
      var n = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
      return Array.isArray(e) && e.forEach(function(s) {
        if (typeof s == "string")
          i.set(s, s), a.set(s, !1);
        else if (hp(s)) {
          var u = ct(r.transform(s));
          i.set(u, fr(s)), a.set(u, !1);
        } else Ee(s) && s.query && o.add(s);
      }), this.queries.forEach(function(s, u) {
        var f = s.observableQuery, c = s.document;
        if (f) {
          if (e === "all") {
            n.set(u, f);
            return;
          }
          var l = f.queryName, d = f.options.fetchPolicy;
          if (d === "standby" || e === "active" && !f.hasObservers())
            return;
          (e === "active" || l && a.has(l) || c && a.has(ct(c))) && (n.set(u, f), l && a.set(l, !0), c && a.set(ct(c), !0));
        }
      }), o.size && o.forEach(function(s) {
        var u = Ba("legacyOneTimeQuery"), f = r.getOrCreateQuery(u).init({
          document: s.query,
          variables: s.variables
        }), c = new gr({
          queryManager: r,
          queryInfo: f,
          options: D(D({}, s), { fetchPolicy: "network-only" })
        });
        re(c.queryId === u), f.setObservableQuery(c), n.set(u, c);
      }), globalThis.__DEV__ !== !1 && a.size && a.forEach(function(s, u) {
        if (!s) {
          var f = i.get(u);
          f ? globalThis.__DEV__ !== !1 && re.warn(35, f) : globalThis.__DEV__ !== !1 && re.warn(36);
        }
      }), n;
    }, t.prototype.reFetchObservableQueries = function(e) {
      var r = this;
      e === void 0 && (e = !1);
      var n = [];
      return this.getObservableQueries(e ? "all" : "active").forEach(function(i, a) {
        var o = i.options.fetchPolicy;
        i.resetLastResults(), (e || o !== "standby" && o !== "cache-only") && n.push(i.refetch()), (r.queries.get(a) || i.queryInfo).setDiff(null);
      }), this.broadcastQueries(), Promise.all(n);
    }, t.prototype.startGraphQLSubscription = function(e) {
      var r = this, n = e.query, i = e.variables, a = e.fetchPolicy, o = e.errorPolicy, s = o === void 0 ? "none" : o, u = e.context, f = u === void 0 ? {} : u, c = e.extensions, l = c === void 0 ? {} : c;
      n = this.transform(n), i = this.getVariables(n, i);
      var d = function(m) {
        return r.getObservableFromLink(n, f, m, l).map(function(v) {
          a !== "no-cache" && (io(v, s) && r.cache.write({
            query: n,
            result: v.data,
            dataId: "ROOT_SUBSCRIPTION",
            variables: m
          }), r.broadcastQueries());
          var b = zr(v), g = ll(v);
          if (b || g) {
            var _ = {};
            if (b && (_.graphQLErrors = v.errors), g && (_.protocolErrors = v.extensions[Tn]), s === "none" || g)
              throw new Ke(_);
          }
          return s === "ignore" && delete v.errors, v;
        });
      };
      if (this.getDocumentInfo(n).hasClientExports) {
        var y = this.localState.addExportedVariables(n, i, f).then(d);
        return new me(function(m) {
          var v = null;
          return y.then(function(b) {
            return v = b.subscribe(m);
          }, m.error), function() {
            return v && v.unsubscribe();
          };
        });
      }
      return d(i);
    }, t.prototype.stopQuery = function(e) {
      this.stopQueryNoBroadcast(e), this.broadcastQueries();
    }, t.prototype.stopQueryNoBroadcast = function(e) {
      this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
    }, t.prototype.removeQuery = function(e) {
      var r;
      this.fetchCancelFns.delete(e), this.queries.has(e) && ((r = this.queries.get(e)) === null || r === void 0 || r.stop(), this.queries.delete(e));
    }, t.prototype.broadcastQueries = function() {
      this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
        var r;
        return (r = e.observableQuery) === null || r === void 0 ? void 0 : r.notify();
      });
    }, t.prototype.getLocalState = function() {
      return this.localState;
    }, t.prototype.getObservableFromLink = function(e, r, n, i, a) {
      var o = this, s;
      a === void 0 && (a = (s = r?.queryDeduplication) !== null && s !== void 0 ? s : this.queryDeduplication);
      var u, f = this.getDocumentInfo(e), c = f.serverQuery, l = f.clientQuery;
      if (c) {
        var d = this, y = d.inFlightLinkObservables, m = d.link, v = {
          query: c,
          variables: n,
          operationName: fr(c) || void 0,
          context: this.prepareContext(D(D({}, r), { forceFetch: !a })),
          extensions: i
        };
        if (r = v.context, a) {
          var b = ct(c), g = ft(n), _ = y.lookup(b, g);
          if (u = _.observable, !u) {
            var w = new xt([
              Ka(m, v)
            ]);
            u = _.observable = w, w.beforeNext(function A(P, C) {
              P === "next" && "hasNext" in C && C.hasNext ? w.beforeNext(A) : y.remove(b, g);
            });
          }
        } else
          u = new xt([
            Ka(m, v)
          ]);
      } else
        u = new xt([me.of({ data: {} })]), r = this.prepareContext(r);
      return l && (u = Zn(u, function(A) {
        return o.localState.runResolvers({
          document: l,
          remoteResult: A,
          context: r,
          variables: n
        });
      })), u;
    }, t.prototype.getResultsFromLink = function(e, r, n) {
      var i = e.lastRequestId = this.generateRequestId(), a = this.cache.transformForLink(n.query);
      return Zn(this.getObservableFromLink(a, n.context, n.variables), function(o) {
        var s = Ja(o), u = s.length > 0, f = n.errorPolicy;
        if (i >= e.lastRequestId) {
          if (u && f === "none")
            throw e.markError(new Ke({
              graphQLErrors: s
            }));
          e.markResult(o, a, n, r), e.markReady();
        }
        var c = {
          data: o.data,
          loading: !1,
          networkStatus: se.ready
        };
        return u && f === "none" && (c.data = void 0), u && f !== "ignore" && (c.errors = s, c.networkStatus = se.error), c;
      }, function(o) {
        var s = dl(o) ? o : new Ke({ networkError: o });
        throw i >= e.lastRequestId && e.markError(s), s;
      });
    }, t.prototype.fetchConcastWithInfo = function(e, r, n, i) {
      var a = this;
      n === void 0 && (n = se.loading), i === void 0 && (i = r.query);
      var o = this.getVariables(i, r.variables), s = this.defaultOptions.watchQuery, u = r.fetchPolicy, f = u === void 0 ? s && s.fetchPolicy || "cache-first" : u, c = r.errorPolicy, l = c === void 0 ? s && s.errorPolicy || "none" : c, d = r.returnPartialData, y = d === void 0 ? !1 : d, m = r.notifyOnNetworkStatusChange, v = m === void 0 ? !1 : m, b = r.context, g = b === void 0 ? {} : b, _ = Object.assign({}, r, {
        query: i,
        variables: o,
        fetchPolicy: f,
        errorPolicy: l,
        returnPartialData: y,
        notifyOnNetworkStatusChange: v,
        context: g
      }), w = function(L) {
        _.variables = L;
        var Y = a.fetchQueryByPolicy(e, _, n);
        return (
          // If we're in standby, postpone advancing options.fetchPolicy using
          // applyNextFetchPolicy.
          _.fetchPolicy !== "standby" && // The "standby" policy currently returns [] from fetchQueryByPolicy, so
          // this is another way to detect when nothing was done/fetched.
          Y.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", r), Y
        );
      }, A = function() {
        return a.fetchCancelFns.delete(e.queryId);
      };
      this.fetchCancelFns.set(e.queryId, function(L) {
        A(), setTimeout(function() {
          return P.cancel(L);
        });
      });
      var P, C;
      if (this.getDocumentInfo(_.query).hasClientExports)
        P = new xt(this.localState.addExportedVariables(_.query, _.variables, _.context).then(w).then(function(L) {
          return L.sources;
        })), C = !0;
      else {
        var B = w(_.variables);
        C = B.fromLink, P = new xt(B.sources);
      }
      return P.promise.then(A, A), {
        concast: P,
        fromLink: C
      };
    }, t.prototype.refetchQueries = function(e) {
      var r = this, n = e.updateCache, i = e.include, a = e.optimistic, o = a === void 0 ? !1 : a, s = e.removeOptimistic, u = s === void 0 ? o ? Ba("refetchQueries") : void 0 : s, f = e.onQueryUpdated, c = /* @__PURE__ */ new Map();
      i && this.getObservableQueries(i).forEach(function(d, y) {
        c.set(y, {
          oq: d,
          lastDiff: (r.queries.get(y) || d.queryInfo).getDiff()
        });
      });
      var l = /* @__PURE__ */ new Map();
      return n && this.cache.batch({
        update: n,
        // Since you can perform any combination of cache reads and/or writes in
        // the cache.batch update function, its optimistic option can be either
        // a boolean or a string, representing three distinct modes of
        // operation:
        //
        // * false: read/write only the root layer
        // * true: read/write the topmost layer
        // * string: read/write a fresh optimistic layer with that ID string
        //
        // When typeof optimistic === "string", a new optimistic layer will be
        // temporarily created within cache.batch with that string as its ID. If
        // we then pass that same string as the removeOptimistic option, we can
        // make cache.batch immediately remove the optimistic layer after
        // running the updateCache function, triggering only one broadcast.
        //
        // However, the refetchQueries method accepts only true or false for its
        // optimistic option (not string). We interpret true to mean a temporary
        // optimistic layer should be created, to allow efficiently rolling back
        // the effect of the updateCache function, which involves passing a
        // string instead of true as the optimistic option to cache.batch, when
        // refetchQueries receives optimistic: true.
        //
        // In other words, we are deliberately not supporting the use case of
        // writing to an *existing* optimistic layer (using the refetchQueries
        // updateCache function), since that would potentially interfere with
        // other optimistic updates in progress. Instead, you can read/write
        // only the root layer by passing optimistic: false to refetchQueries,
        // or you can read/write a brand new optimistic layer that will be
        // automatically removed by passing optimistic: true.
        optimistic: o && u || !1,
        // The removeOptimistic option can also be provided by itself, even if
        // optimistic === false, to remove some previously-added optimistic
        // layer safely and efficiently, like we do in markMutationResult.
        //
        // If an explicit removeOptimistic string is provided with optimistic:
        // true, the removeOptimistic string will determine the ID of the
        // temporary optimistic layer, in case that ever matters.
        removeOptimistic: u,
        onWatchUpdated: function(d, y, m) {
          var v = d.watcher instanceof si && d.watcher.observableQuery;
          if (v) {
            if (f) {
              c.delete(v.queryId);
              var b = f(v, y, m);
              return b === !0 && (b = v.refetch()), b !== !1 && l.set(v, b), b;
            }
            f !== null && c.set(v.queryId, { oq: v, lastDiff: m, diff: y });
          }
        }
      }), c.size && c.forEach(function(d, y) {
        var m = d.oq, v = d.lastDiff, b = d.diff, g;
        f && (b || (b = r.cache.diff(m.queryInfo.getDiffOptions())), g = f(m, b, v)), (!f || g === !0) && (g = m.refetch()), g !== !1 && l.set(m, g), y.indexOf("legacyOneTimeQuery") >= 0 && r.stopQueryNoBroadcast(y);
      }), u && this.cache.removeOptimistic(u), l;
    }, t.prototype.maskOperation = function(e) {
      var r, n, i, a = e.document, o = e.data;
      if (globalThis.__DEV__ !== !1) {
        var s = e.fetchPolicy, u = e.id, f = (r = Tt(a)) === null || r === void 0 ? void 0 : r.operation, c = ((n = f?.[0]) !== null && n !== void 0 ? n : "o") + u;
        this.dataMasking && s === "no-cache" && !Gh(a) && !this.noCacheWarningsByQueryId.has(c) && (this.noCacheWarningsByQueryId.add(c), globalThis.__DEV__ !== !1 && re.warn(
          37,
          (i = fr(a)) !== null && i !== void 0 ? i : "Unnamed ".concat(f ?? "operation")
        ));
      }
      return this.dataMasking ? Vy(o, a, this.cache) : o;
    }, t.prototype.maskFragment = function(e) {
      var r = e.data, n = e.fragment, i = e.fragmentName;
      return this.dataMasking ? El(r, n, this.cache, i) : r;
    }, t.prototype.fetchQueryByPolicy = function(e, r, n) {
      var i = this, a = r.query, o = r.variables, s = r.fetchPolicy, u = r.refetchWritePolicy, f = r.errorPolicy, c = r.returnPartialData, l = r.context, d = r.notifyOnNetworkStatusChange, y = e.networkStatus;
      e.init({
        document: a,
        variables: o,
        networkStatus: n
      });
      var m = function() {
        return e.getDiff();
      }, v = function(A, P) {
        P === void 0 && (P = e.networkStatus || se.loading);
        var C = A.result;
        globalThis.__DEV__ !== !1 && !c && !pe(C, {}) && Nl(A.missing);
        var B = function(L) {
          return me.of(D({ data: L, loading: Lt(P), networkStatus: P }, A.complete ? null : { partial: !0 }));
        };
        return C && i.getDocumentInfo(a).hasForcedResolvers ? i.localState.runResolvers({
          document: a,
          remoteResult: { data: C },
          context: l,
          variables: o,
          onlyRunForcedResolvers: !0
        }).then(function(L) {
          return B(L.data || void 0);
        }) : f === "none" && P === se.refetch && Array.isArray(A.missing) ? B(void 0) : B(C);
      }, b = s === "no-cache" ? 0 : n === se.refetch && u !== "merge" ? 1 : 2, g = function() {
        return i.getResultsFromLink(e, b, {
          query: a,
          variables: o,
          context: l,
          fetchPolicy: s,
          errorPolicy: f
        });
      }, _ = d && typeof y == "number" && y !== n && Lt(n);
      switch (s) {
        default:
        case "cache-first": {
          var w = m();
          return w.complete ? {
            fromLink: !1,
            sources: [v(w, e.markReady())]
          } : c || _ ? {
            fromLink: !0,
            sources: [v(w), g()]
          } : { fromLink: !0, sources: [g()] };
        }
        case "cache-and-network": {
          var w = m();
          return w.complete || c || _ ? {
            fromLink: !0,
            sources: [v(w), g()]
          } : { fromLink: !0, sources: [g()] };
        }
        case "cache-only":
          return {
            fromLink: !1,
            sources: [v(m(), e.markReady())]
          };
        case "network-only":
          return _ ? {
            fromLink: !0,
            sources: [v(m()), g()]
          } : { fromLink: !0, sources: [g()] };
        case "no-cache":
          return _ ? {
            fromLink: !0,
            // Note that queryInfo.getDiff() for no-cache queries does not call
            // cache.diff, but instead returns a { complete: false } stub result
            // when there is no queryInfo.diff already defined.
            sources: [v(e.getDiff()), g()]
          } : { fromLink: !0, sources: [g()] };
        case "standby":
          return { fromLink: !1, sources: [] };
      }
    }, t.prototype.getOrCreateQuery = function(e) {
      return e && !this.queries.has(e) && this.queries.set(e, new si(this, e)), this.queries.get(e);
    }, t.prototype.prepareContext = function(e) {
      e === void 0 && (e = {});
      var r = this.localState.prepareContext(e);
      return D(D(D({}, this.defaultContext), r), { clientAwareness: this.clientAwareness });
    }, t;
  }()
), fm = (
  /** @class */
  function() {
    function t(e) {
      var r = e.cache, n = e.client, i = e.resolvers, a = e.fragmentMatcher;
      this.selectionsToResolveCache = /* @__PURE__ */ new WeakMap(), this.cache = r, n && (this.client = n), i && this.addResolvers(i), a && this.setFragmentMatcher(a);
    }
    return t.prototype.addResolvers = function(e) {
      var r = this;
      this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(n) {
        r.resolvers = ks(r.resolvers, n);
      }) : this.resolvers = ks(this.resolvers, e);
    }, t.prototype.setResolvers = function(e) {
      this.resolvers = {}, this.addResolvers(e);
    }, t.prototype.getResolvers = function() {
      return this.resolvers || {};
    }, t.prototype.runResolvers = function(e) {
      return ot(this, arguments, void 0, function(r) {
        var n = r.document, i = r.remoteResult, a = r.context, o = r.variables, s = r.onlyRunForcedResolvers, u = s === void 0 ? !1 : s;
        return st(this, function(f) {
          return n ? [2, this.resolveDocument(n, i.data, a, o, this.fragmentMatcher, u).then(function(c) {
            return D(D({}, i), { data: c.result });
          })] : [2, i];
        });
      });
    }, t.prototype.setFragmentMatcher = function(e) {
      this.fragmentMatcher = e;
    }, t.prototype.getFragmentMatcher = function() {
      return this.fragmentMatcher;
    }, t.prototype.clientQuery = function(e) {
      return vr(["client"], e) && this.resolvers ? e : null;
    }, t.prototype.serverQuery = function(e) {
      return nl(e);
    }, t.prototype.prepareContext = function(e) {
      var r = this.cache;
      return D(D({}, e), {
        cache: r,
        // Getting an entry's cache key is useful for local state resolvers.
        getCacheKey: function(n) {
          return r.identify(n);
        }
      });
    }, t.prototype.addExportedVariables = function(e) {
      return ot(this, arguments, void 0, function(r, n, i) {
        return n === void 0 && (n = {}), i === void 0 && (i = {}), st(this, function(a) {
          return r ? [2, this.resolveDocument(r, this.buildRootValueFromCache(r, n) || {}, this.prepareContext(i), n).then(function(o) {
            return D(D({}, n), o.exportedVariables);
          })] : [2, D({}, n)];
        });
      });
    }, t.prototype.shouldForceResolvers = function(e) {
      var r = !1;
      return Xe(e, {
        Directive: {
          enter: function(n) {
            if (n.name.value === "client" && n.arguments && (r = n.arguments.some(function(i) {
              return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
            }), r))
              return bo;
          }
        }
      }), r;
    }, t.prototype.buildRootValueFromCache = function(e, r) {
      return this.cache.diff({
        query: $p(e),
        variables: r,
        returnPartialData: !0,
        optimistic: !1
      }).result;
    }, t.prototype.resolveDocument = function(e, r) {
      return ot(this, arguments, void 0, function(n, i, a, o, s, u) {
        var f, c, l, d, y, m, v, b, g, _, w;
        return a === void 0 && (a = {}), o === void 0 && (o = {}), s === void 0 && (s = function() {
          return !0;
        }), u === void 0 && (u = !1), st(this, function(A) {
          return f = lt(n), c = Gt(n), l = Yt(c), d = this.collectSelectionsToResolve(f, l), y = f.operation, m = y ? y.charAt(0).toUpperCase() + y.slice(1) : "Query", v = this, b = v.cache, g = v.client, _ = {
            fragmentMap: l,
            context: D(D({}, a), { cache: b, client: g }),
            variables: o,
            fragmentMatcher: s,
            defaultOperationType: m,
            exportedVariables: {},
            selectionsToResolve: d,
            onlyRunForcedResolvers: u
          }, w = !1, [2, this.resolveSelectionSet(f.selectionSet, w, i, _).then(function(P) {
            return {
              result: P,
              exportedVariables: _.exportedVariables
            };
          })];
        });
      });
    }, t.prototype.resolveSelectionSet = function(e, r, n, i) {
      return ot(this, void 0, void 0, function() {
        var a, o, s, u, f, c = this;
        return st(this, function(l) {
          return a = i.fragmentMap, o = i.context, s = i.variables, u = [n], f = function(d) {
            return ot(c, void 0, void 0, function() {
              var y, m;
              return st(this, function(v) {
                return !r && !i.selectionsToResolve.has(d) ? [
                  2
                  /*return*/
                ] : Or(d, s) ? ht(d) ? [2, this.resolveField(d, r, n, i).then(function(b) {
                  var g;
                  typeof b < "u" && u.push((g = {}, g[nt(d)] = b, g));
                })] : (Tp(d) ? y = d : (y = a[d.name.value], re(y, 19, d.name.value)), y && y.typeCondition && (m = y.typeCondition.name.value, i.fragmentMatcher(n, m, o)) ? [2, this.resolveSelectionSet(y.selectionSet, r, n, i).then(function(b) {
                  u.push(b);
                })] : [
                  2
                  /*return*/
                ]) : [
                  2
                  /*return*/
                ];
              });
            });
          }, [2, Promise.all(e.selections.map(f)).then(function() {
            return On(u);
          })];
        });
      });
    }, t.prototype.resolveField = function(e, r, n, i) {
      return ot(this, void 0, void 0, function() {
        var a, o, s, u, f, c, l, d, y, m = this;
        return st(this, function(v) {
          return n ? (a = i.variables, o = e.name.value, s = nt(e), u = o !== s, f = n[s] || n[o], c = Promise.resolve(f), (!i.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (l = n.__typename || i.defaultOperationType, d = this.resolvers && this.resolvers[l], d && (y = d[u ? o : s], y && (c = Promise.resolve(
            // In case the resolve function accesses reactive variables,
            // set cacheSlot to the current cache instance.
            jo.withValue(this.cache, y, [
              n,
              wn(e, a),
              i.context,
              { field: e, fragmentMap: i.fragmentMap }
            ])
          )))), [2, c.then(function(b) {
            var g, _;
            if (b === void 0 && (b = f), e.directives && e.directives.forEach(function(A) {
              A.name.value === "export" && A.arguments && A.arguments.forEach(function(P) {
                P.name.value === "as" && P.value.kind === "StringValue" && (i.exportedVariables[P.value.value] = b);
              });
            }), !e.selectionSet || b == null)
              return b;
            var w = (_ = (g = e.directives) === null || g === void 0 ? void 0 : g.some(function(A) {
              return A.name.value === "client";
            })) !== null && _ !== void 0 ? _ : !1;
            if (Array.isArray(b))
              return m.resolveSubSelectedArray(e, r || w, b, i);
            if (e.selectionSet)
              return m.resolveSelectionSet(e.selectionSet, r || w, b, i);
          })]) : [2, null];
        });
      });
    }, t.prototype.resolveSubSelectedArray = function(e, r, n, i) {
      var a = this;
      return Promise.all(n.map(function(o) {
        if (o === null)
          return null;
        if (Array.isArray(o))
          return a.resolveSubSelectedArray(e, r, o, i);
        if (e.selectionSet)
          return a.resolveSelectionSet(e.selectionSet, r, o, i);
      }));
    }, t.prototype.collectSelectionsToResolve = function(e, r) {
      var n = function(o) {
        return !Array.isArray(o);
      }, i = this.selectionsToResolveCache;
      function a(o) {
        if (!i.has(o)) {
          var s = /* @__PURE__ */ new Set();
          i.set(o, s), Xe(o, {
            Directive: function(u, f, c, l, d) {
              u.name.value === "client" && d.forEach(function(y) {
                n(y) && is(y) && s.add(y);
              });
            },
            FragmentSpread: function(u, f, c, l, d) {
              var y = r[u.name.value];
              re(y, 20, u.name.value);
              var m = a(y);
              m.size > 0 && (d.forEach(function(v) {
                n(v) && is(v) && s.add(v);
              }), s.add(u), m.forEach(function(v) {
                s.add(v);
              }));
            }
          });
        }
        return i.get(o);
      }
      return a(e);
    }, t;
  }()
), fu = !1, Ll = (
  /** @class */
  function() {
    function t(e) {
      var r = this, n;
      if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache)
        throw Fe(16);
      var i = e.uri, a = e.credentials, o = e.headers, s = e.cache, u = e.documentTransform, f = e.ssrMode, c = f === void 0 ? !1 : f, l = e.ssrForceFetchDelay, d = l === void 0 ? 0 : l, y = e.connectToDevTools, m = e.queryDeduplication, v = m === void 0 ? !0 : m, b = e.defaultOptions, g = e.defaultContext, _ = e.assumeImmutableResults, w = _ === void 0 ? s.assumeImmutableResults : _, A = e.resolvers, P = e.typeDefs, C = e.fragmentMatcher, B = e.name, L = e.version, Y = e.devtools, G = e.dataMasking, J = e.link;
      J || (J = i ? new pl({ uri: i, credentials: a, headers: o }) : et.empty()), this.link = J, this.cache = s, this.disableNetworkFetches = c || d > 0, this.queryDeduplication = v, this.defaultOptions = b || /* @__PURE__ */ Object.create(null), this.typeDefs = P, this.devtoolsConfig = D(D({}, Y), { enabled: (n = Y?.enabled) !== null && n !== void 0 ? n : y }), this.devtoolsConfig.enabled === void 0 && (this.devtoolsConfig.enabled = globalThis.__DEV__ !== !1), d && setTimeout(function() {
        return r.disableNetworkFetches = !1;
      }, d), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = wo, this.localState = new fm({
        cache: s,
        client: this,
        resolvers: A,
        fragmentMatcher: C
      }), this.queryManager = new cm({
        cache: this.cache,
        link: this.link,
        defaultOptions: this.defaultOptions,
        defaultContext: g,
        documentTransform: u,
        queryDeduplication: v,
        ssrMode: c,
        dataMasking: !!G,
        clientAwareness: {
          name: B,
          version: L
        },
        localState: this.localState,
        assumeImmutableResults: w,
        onBroadcast: this.devtoolsConfig.enabled ? function() {
          r.devToolsHookCb && r.devToolsHookCb({
            action: {},
            state: {
              queries: r.queryManager.getQueryStore(),
              mutations: r.queryManager.mutationStore || {}
            },
            dataWithOptimisticResults: r.cache.extract(!0)
          });
        } : void 0
      }), this.devtoolsConfig.enabled && this.connectToDevTools();
    }
    return t.prototype.connectToDevTools = function() {
      if (!(typeof window > "u")) {
        var e = window, r = Symbol.for("apollo.devtools");
        (e[r] = e[r] || []).push(this), e.__APOLLO_CLIENT__ = this, !fu && globalThis.__DEV__ !== !1 && (fu = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
          if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
            var n = window.navigator, i = n && n.userAgent, a = void 0;
            typeof i == "string" && (i.indexOf("Chrome/") > -1 ? a = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : i.indexOf("Firefox/") > -1 && (a = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), a && globalThis.__DEV__ !== !1 && re.log("Download the Apollo DevTools for a better development experience: %s", a);
          }
        }, 1e4));
      }
    }, Object.defineProperty(t.prototype, "documentTransform", {
      /**
       * The `DocumentTransform` used to modify GraphQL documents before a request
       * is made. If a custom `DocumentTransform` is not provided, this will be the
       * default document transform.
       */
      get: function() {
        return this.queryManager.documentTransform;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.stop = function() {
      this.queryManager.stop();
    }, t.prototype.watchQuery = function(e) {
      return this.defaultOptions.watchQuery && (e = Qr(this.defaultOptions.watchQuery, e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = D(D({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
    }, t.prototype.query = function(e) {
      return this.defaultOptions.query && (e = Qr(this.defaultOptions.query, e)), re(e.fetchPolicy !== "cache-and-network", 17), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = D(D({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
    }, t.prototype.mutate = function(e) {
      return this.defaultOptions.mutate && (e = Qr(this.defaultOptions.mutate, e)), this.queryManager.mutate(e);
    }, t.prototype.subscribe = function(e) {
      var r = this, n = this.queryManager.generateQueryId();
      return this.queryManager.startGraphQLSubscription(e).map(function(i) {
        return D(D({}, i), { data: r.queryManager.maskOperation({
          document: e.query,
          data: i.data,
          fetchPolicy: e.fetchPolicy,
          id: n
        }) });
      });
    }, t.prototype.readQuery = function(e, r) {
      return r === void 0 && (r = !1), this.cache.readQuery(e, r);
    }, t.prototype.watchFragment = function(e) {
      var r;
      return this.cache.watchFragment(D(D({}, e), (r = {}, r[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, r)));
    }, t.prototype.readFragment = function(e, r) {
      return r === void 0 && (r = !1), this.cache.readFragment(e, r);
    }, t.prototype.writeQuery = function(e) {
      var r = this.cache.writeQuery(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
    }, t.prototype.writeFragment = function(e) {
      var r = this.cache.writeFragment(e);
      return e.broadcast !== !1 && this.queryManager.broadcastQueries(), r;
    }, t.prototype.__actionHookForDevTools = function(e) {
      this.devToolsHookCb = e;
    }, t.prototype.__requestRaw = function(e) {
      return Ka(this.link, e);
    }, t.prototype.resetStore = function() {
      var e = this;
      return Promise.resolve().then(function() {
        return e.queryManager.clearStore({
          discardWatches: !1
        });
      }).then(function() {
        return Promise.all(e.resetStoreCallbacks.map(function(r) {
          return r();
        }));
      }).then(function() {
        return e.reFetchObservableQueries();
      });
    }, t.prototype.clearStore = function() {
      var e = this;
      return Promise.resolve().then(function() {
        return e.queryManager.clearStore({
          discardWatches: !0
        });
      }).then(function() {
        return Promise.all(e.clearStoreCallbacks.map(function(r) {
          return r();
        }));
      });
    }, t.prototype.onResetStore = function(e) {
      var r = this;
      return this.resetStoreCallbacks.push(e), function() {
        r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function(n) {
          return n !== e;
        });
      };
    }, t.prototype.onClearStore = function(e) {
      var r = this;
      return this.clearStoreCallbacks.push(e), function() {
        r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function(n) {
          return n !== e;
        });
      };
    }, t.prototype.reFetchObservableQueries = function(e) {
      return this.queryManager.reFetchObservableQueries(e);
    }, t.prototype.refetchQueries = function(e) {
      var r = this.queryManager.refetchQueries(e), n = [], i = [];
      r.forEach(function(o, s) {
        n.push(s), i.push(o);
      });
      var a = Promise.all(i);
      return a.queries = n, a.results = i, a.catch(function(o) {
        globalThis.__DEV__ !== !1 && re.debug(18, o);
      }), a;
    }, t.prototype.getObservableQueries = function(e) {
      return e === void 0 && (e = "active"), this.queryManager.getObservableQueries(e);
    }, t.prototype.extract = function(e) {
      return this.cache.extract(e);
    }, t.prototype.restore = function(e) {
      return this.cache.restore(e);
    }, t.prototype.addResolvers = function(e) {
      this.localState.addResolvers(e);
    }, t.prototype.setResolvers = function(e) {
      this.localState.setResolvers(e);
    }, t.prototype.getResolvers = function() {
      return this.localState.getResolvers();
    }, t.prototype.setLocalStateFragmentMatcher = function(e) {
      this.localState.setFragmentMatcher(e);
    }, t.prototype.setLink = function(e) {
      this.link = this.queryManager.link = e;
    }, Object.defineProperty(t.prototype, "defaultContext", {
      get: function() {
        return this.queryManager.defaultContext;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }()
);
globalThis.__DEV__ !== !1 && (Ll.prototype.getMemoryInternals = ip);
var Gr = /* @__PURE__ */ new Map(), ao = /* @__PURE__ */ new Map(), Fl = !0, ln = !1;
function jl(t) {
  return t.replace(/[\s,]+/g, " ").trim();
}
function lm(t) {
  return jl(t.source.body.substring(t.start, t.end));
}
function dm(t) {
  var e = /* @__PURE__ */ new Set(), r = [];
  return t.definitions.forEach(function(n) {
    if (n.kind === "FragmentDefinition") {
      var i = n.name.value, a = lm(n.loc), o = ao.get(i);
      o && !o.has(a) ? Fl && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || ao.set(i, o = /* @__PURE__ */ new Set()), o.add(a), e.has(a) || (e.add(a), r.push(n));
    } else
      r.push(n);
  }), D(D({}, t), { definitions: r });
}
function hm(t) {
  var e = new Set(t.definitions);
  e.forEach(function(n) {
    n.loc && delete n.loc, Object.keys(n).forEach(function(i) {
      var a = n[i];
      a && typeof a == "object" && e.add(a);
    });
  });
  var r = t.loc;
  return r && (delete r.startToken, delete r.endToken), t;
}
function pm(t) {
  var e = jl(t);
  if (!Gr.has(e)) {
    var r = oh(t, {
      experimentalFragmentVariables: ln,
      allowLegacyFragmentVariables: ln
    });
    if (!r || r.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    Gr.set(e, hm(dm(r)));
  }
  return Gr.get(e);
}
function Pt(t) {
  for (var e = [], r = 1; r < arguments.length; r++)
    e[r - 1] = arguments[r];
  typeof t == "string" && (t = [t]);
  var n = t[0];
  return e.forEach(function(i, a) {
    i && i.kind === "Document" ? n += i.loc.source.body : n += i, n += t[a + 1];
  }), pm(n);
}
function ym() {
  Gr.clear(), ao.clear();
}
function mm() {
  Fl = !1;
}
function gm() {
  ln = !0;
}
function vm() {
  ln = !1;
}
var sr = {
  gql: Pt,
  resetCaches: ym,
  disableFragmentWarnings: mm,
  enableExperimentalFragmentVariables: gm,
  disableExperimentalFragmentVariables: vm
};
(function(t) {
  t.gql = sr.gql, t.resetCaches = sr.resetCaches, t.disableFragmentWarnings = sr.disableFragmentWarnings, t.enableExperimentalFragmentVariables = sr.enableExperimentalFragmentVariables, t.disableExperimentalFragmentVariables = sr.disableExperimentalFragmentVariables;
})(Pt || (Pt = {}));
Pt.default = Pt;
var ui = { exports: {} }, lu;
function bm() {
  return lu || (lu = 1, function(t) {
    t.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, t.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, t.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(t.exports, vo);
  }(ui)), ui.exports;
}
var Re = bm();
const Em = /* @__PURE__ */ vn(Re), ql = /* @__PURE__ */ wh({
  __proto__: null,
  default: Em
}, [Re]);
var du = To ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";
function Uo() {
  re("createContext" in ql, 54);
  var t = Re.createContext[du];
  return t || (Object.defineProperty(Re.createContext, du, {
    value: t = Re.createContext({}),
    enumerable: !1,
    writable: !1,
    configurable: !0
  }), t.displayName = "ApolloContext"), t;
}
var wm = function(t) {
  var e = t.client, r = t.children, n = Uo(), i = Re.useContext(n), a = Re.useMemo(function() {
    return D(D({}, i), { client: e || i.client });
  }, [i, e]);
  return re(a.client, 55), Re.createElement(n.Provider, { value: a }, r);
};
function $l(t) {
  var e = Re.useContext(Uo()), r = t || e.client;
  return re(!!r, 58), r;
}
var hu = !1, _m = "useSyncExternalStore", Sm = ql[_m], Om = Sm || function(t, e, r) {
  var n = e();
  // DEVIATION: Using __DEV__
  globalThis.__DEV__ !== !1 && !hu && // DEVIATION: Not using Object.is because we know our snapshots will never
  // be exotic primitive values like NaN, which is !== itself.
  n !== e() && (hu = !0, globalThis.__DEV__ !== !1 && re.error(68));
  var i = Re.useState({
    inst: { value: n, getSnapshot: e }
  }), a = i[0].inst, o = i[1];
  return Yh ? Re.useLayoutEffect(function() {
    Object.assign(a, { value: n, getSnapshot: e }), ci(a) && o({ inst: a });
  }, [t, n, e]) : Object.assign(a, { value: n, getSnapshot: e }), Re.useEffect(function() {
    return ci(a) && o({ inst: a }), t(function() {
      ci(a) && o({ inst: a });
    });
  }, [t]), n;
};
function ci(t) {
  var e = t.value, r = t.getSnapshot;
  try {
    return e !== r();
  } catch {
    return !0;
  }
}
var rt;
(function(t) {
  t[t.Query = 0] = "Query", t[t.Mutation = 1] = "Mutation", t[t.Subscription = 2] = "Subscription";
})(rt || (rt = {}));
var wt;
function pu(t) {
  var e;
  switch (t) {
    case rt.Query:
      e = "Query";
      break;
    case rt.Mutation:
      e = "Mutation";
      break;
    case rt.Subscription:
      e = "Subscription";
      break;
  }
  return e;
}
function Bl(t) {
  wt || (wt = new Ro(
    Ze.parser || 1e3
    /* defaultCacheSizes.parser */
  ));
  var e = wt.get(t);
  if (e)
    return e;
  var r, n, i;
  re(!!t && !!t.kind, 70, t);
  for (var a = [], o = [], s = [], u = [], f = 0, c = t.definitions; f < c.length; f++) {
    var l = c[f];
    if (l.kind === "FragmentDefinition") {
      a.push(l);
      continue;
    }
    if (l.kind === "OperationDefinition")
      switch (l.operation) {
        case "query":
          o.push(l);
          break;
        case "mutation":
          s.push(l);
          break;
        case "subscription":
          u.push(l);
          break;
      }
  }
  re(!a.length || o.length || s.length || u.length, 71), re(
    o.length + s.length + u.length <= 1,
    72,
    t,
    o.length,
    u.length,
    s.length
  ), n = o.length ? rt.Query : rt.Mutation, !o.length && !s.length && (n = rt.Subscription);
  var d = o.length ? o : s.length ? s : u;
  re(d.length === 1, 73, t, d.length);
  var y = d[0];
  r = y.variableDefinitions || [], y.name && y.name.kind === "Name" ? i = y.name.value : i = "data";
  var m = { name: i, type: n, variables: r };
  return wt.set(t, m), m;
}
Bl.resetCache = function() {
  wt = void 0;
};
globalThis.__DEV__ !== !1 && Po("parser", function() {
  return wt ? wt.size : 0;
});
function Tm(t, e) {
  var r = Bl(t), n = pu(e), i = pu(r.type);
  re(
    r.type === e,
    74,
    n,
    n,
    i
  );
}
var Rm = Symbol.for("apollo.hook.wrappers");
function Pm(t, e, r) {
  var n = r.queryManager, i = n && n[Rm], a = i && i[t];
  return a ? a(e) : e;
}
var Am = Object.prototype.hasOwnProperty;
function yu() {
}
var Jr = Symbol();
function Ul(t, e) {
  return e === void 0 && (e = /* @__PURE__ */ Object.create(null)), Pm(
    "useQuery",
    // eslint-disable-next-line react-compiler/react-compiler
    Mm,
    $l(e && e.client)
  )(t, e);
}
function Mm(t, e) {
  var r = Cm(t, e), n = r.result, i = r.obsQueryFields;
  return Re.useMemo(function() {
    return D(D({}, n), i);
  }, [n, i]);
}
function km(t, e, r, n, i) {
  function a(l) {
    var d;
    Tm(e, rt.Query);
    var y = {
      client: t,
      query: e,
      observable: (
        // See if there is an existing observable that was used to fetch the same
        // data and if so, use it instead since it will contain the proper queryId
        // to fetch the result set. This is used during SSR.
        n && n.getSSRObservable(i()) || gr.inactiveOnCreation.withValue(!n, function() {
          return t.watchQuery(Vl(void 0, t, r, i()));
        })
      ),
      resultData: {
        // Reuse previousData from previous InternalState (if any) to provide
        // continuity of previousData even if/when the query or client changes.
        previousData: (d = l?.resultData.current) === null || d === void 0 ? void 0 : d.data
      }
    };
    return y;
  }
  var o = Re.useState(a), s = o[0], u = o[1];
  function f(l) {
    var d, y;
    Object.assign(s.observable, (d = {}, d[Jr] = l, d));
    var m = s.resultData;
    u(D(D({}, s), {
      // might be a different query
      query: l.query,
      resultData: Object.assign(m, {
        // We need to modify the previous `resultData` object as we rely on the
        // object reference in other places
        previousData: ((y = m.current) === null || y === void 0 ? void 0 : y.data) || m.previousData,
        current: void 0
      })
    }));
  }
  if (t !== s.client || e !== s.query) {
    var c = a(s);
    return u(c), [c, f];
  }
  return [s, f];
}
function Cm(t, e) {
  var r = $l(e.client), n = Re.useContext(Uo()).renderPromises, i = !!n, a = r.disableNetworkFetches, o = e.ssr !== !1 && !e.skip, s = e.partialRefetch, u = Nm(r, t, e, i), f = km(r, t, e, n, u), c = f[0], l = c.observable, d = c.resultData, y = f[1], m = u(l);
  Dm(
    d,
    // might get mutated during render
    l,
    // might get mutated during render
    r,
    e,
    m
  );
  var v = Re.useMemo(function() {
    return qm(l);
  }, [l]);
  xm(l, n, o);
  var b = Im(d, l, r, e, m, a, s, i, {
    onCompleted: e.onCompleted || yu,
    onError: e.onError || yu
  });
  return {
    result: b,
    obsQueryFields: v,
    observable: l,
    resultData: d,
    client: r,
    onQueryExecuted: y
  };
}
function Im(t, e, r, n, i, a, o, s, u) {
  var f = Re.useRef(u);
  Re.useEffect(function() {
    f.current = u;
  });
  var c = (s || a) && n.ssr === !1 && !n.skip ? (
    // If SSR has been explicitly disabled, and this function has been called
    // on the server side, return the default loading state.
    zl
  ) : n.skip || i.fetchPolicy === "standby" ? (
    // When skipping a query (ie. we're not querying for data but still want to
    // render children), make sure the `data` is cleared out and `loading` is
    // set to `false` (since we aren't loading anything).
    //
    // NOTE: We no longer think this is the correct behavior. Skipping should
    // not automatically set `data` to `undefined`, but instead leave the
    // previous data in place. In other words, skipping should not mandate that
    // previously received data is all of a sudden removed. Unfortunately,
    // changing this is breaking, so we'll have to wait until Apollo Client 4.0
    // to address this.
    Ql
  ) : void 0, l = t.previousData, d = Re.useMemo(function() {
    return c && Wl(c, l, e, r);
  }, [r, e, c, l]);
  return Om(Re.useCallback(function(y) {
    if (s)
      return function() {
      };
    var m = function() {
      var g = t.current, _ = e.getCurrentResult();
      g && g.loading === _.loading && g.networkStatus === _.networkStatus && pe(g.data, _.data) || oo(_, t, e, r, o, y, f.current);
    }, v = function(g) {
      if (b.current.unsubscribe(), b.current = e.resubscribeAfterError(m, v), !Am.call(g, "graphQLErrors"))
        throw g;
      var _ = t.current;
      (!_ || _ && _.loading || !pe(g, _.error)) && oo({
        data: _ && _.data,
        error: g,
        loading: !1,
        networkStatus: se.error
      }, t, e, r, o, y, f.current);
    }, b = { current: e.subscribe(m, v) };
    return function() {
      setTimeout(function() {
        return b.current.unsubscribe();
      });
    };
  }, [
    a,
    s,
    e,
    t,
    o,
    r
  ]), function() {
    return d || mu(t, e, f.current, o, r);
  }, function() {
    return d || mu(t, e, f.current, o, r);
  });
}
function xm(t, e, r) {
  e && r && (e.registerSSRObservable(t), t.getCurrentResult().loading && e.addObservableQueryPromise(t));
}
function Dm(t, e, r, n, i) {
  var a;
  e[Jr] && !pe(e[Jr], i) && (e.reobserve(Vl(e, r, n, i)), t.previousData = ((a = t.current) === null || a === void 0 ? void 0 : a.data) || t.previousData, t.current = void 0), e[Jr] = i;
}
function Nm(t, e, r, n) {
  r === void 0 && (r = {});
  var i = r.skip;
  r.ssr, r.onCompleted, r.onError;
  var a = r.defaultOptions, o = Qe(r, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
  return function(s) {
    var u = Object.assign(o, { query: e });
    return n && (u.fetchPolicy === "network-only" || u.fetchPolicy === "cache-and-network") && (u.fetchPolicy = "cache-first"), u.variables || (u.variables = {}), i ? (u.initialFetchPolicy = u.initialFetchPolicy || u.fetchPolicy || gu(a, t.defaultOptions), u.fetchPolicy = "standby") : u.fetchPolicy || (u.fetchPolicy = s?.options.initialFetchPolicy || gu(a, t.defaultOptions)), u;
  };
}
function Vl(t, e, r, n) {
  var i = [], a = e.defaultOptions.watchQuery;
  return a && i.push(a), r.defaultOptions && i.push(r.defaultOptions), i.push(Rt(t && t.options, n)), i.reduce(Qr);
}
function oo(t, e, r, n, i, a, o) {
  var s = e.current;
  s && s.data && (e.previousData = s.data), !t.error && Be(t.errors) && (t.error = new Ke({ graphQLErrors: t.errors })), e.current = Wl(jm(t, r, i), e.previousData, r, n), a(), Lm(t, s?.networkStatus, o);
}
function Lm(t, e, r) {
  if (!t.loading) {
    var n = Fm(t);
    Promise.resolve().then(function() {
      n ? r.onError(n) : t.data && e !== t.networkStatus && t.networkStatus === se.ready && r.onCompleted(t.data);
    }).catch(function(i) {
      globalThis.__DEV__ !== !1 && re.warn(i);
    });
  }
}
function mu(t, e, r, n, i) {
  return t.current || oo(e.getCurrentResult(), t, e, i, n, function() {
  }, r), t.current;
}
function gu(t, e) {
  var r;
  return t?.fetchPolicy || ((r = e?.watchQuery) === null || r === void 0 ? void 0 : r.fetchPolicy) || "cache-first";
}
function Fm(t) {
  return Be(t.errors) ? new Ke({ graphQLErrors: t.errors }) : t.error;
}
function Wl(t, e, r, n) {
  var i = t.data;
  t.partial;
  var a = Qe(t, ["data", "partial"]), o = D(D({ data: i }, a), { client: n, observable: r, variables: r.variables, called: t !== zl && t !== Ql, previousData: e });
  return o;
}
function jm(t, e, r) {
  return t.partial && r && !t.loading && (!t.data || Object.keys(t.data).length === 0) && e.options.fetchPolicy !== "cache-only" ? (e.refetch(), D(D({}, t), { loading: !0, networkStatus: se.refetch })) : t;
}
var zl = Qt({
  loading: !0,
  data: void 0,
  error: void 0,
  networkStatus: se.loading
}), Ql = Qt({
  loading: !1,
  data: void 0,
  error: void 0,
  networkStatus: se.ready
});
function qm(t) {
  return {
    refetch: t.refetch.bind(t),
    reobserve: t.reobserve.bind(t),
    fetchMore: t.fetchMore.bind(t),
    updateQuery: t.updateQuery.bind(t),
    startPolling: t.startPolling.bind(t),
    stopPolling: t.stopPolling.bind(t),
    subscribeToMore: t.subscribeToMore.bind(t)
  };
}
function Yl(t) {
  return new et(function(e, r) {
    return new me(function(n) {
      var i, a, o;
      try {
        i = r(e).subscribe({
          next: function(s) {
            if (s.errors ? o = t({
              graphQLErrors: s.errors,
              response: s,
              operation: e,
              forward: r
            }) : ll(s) && (o = t({
              protocolErrors: s.extensions[Tn],
              response: s,
              operation: e,
              forward: r
            })), o) {
              a = o.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.next(s);
          },
          error: function(s) {
            if (o = t({
              operation: e,
              networkError: s,
              //Network errors can return GraphQL errors on for example a 403
              graphQLErrors: s && s.result && s.result.errors || void 0,
              forward: r
            }), o) {
              a = o.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.error(s);
          },
          complete: function() {
            o || n.complete.bind(n)();
          }
        });
      } catch (s) {
        t({ networkError: s, operation: e, forward: r }), n.error(s);
      }
      return function() {
        i && i.unsubscribe(), a && i.unsubscribe();
      };
    });
  });
}
(function(t) {
  Ue(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.link = Yl(r), n;
  }
  return e.prototype.request = function(r, n) {
    return this.link.request(r, n);
  }, e;
})(et);
function $m(t) {
  return Ee(t) && "code" in t && "reason" in t;
}
function Bm(t) {
  var e;
  return Ee(t) && ((e = t.target) === null || e === void 0 ? void 0 : e.readyState) === WebSocket.CLOSED;
}
var Um = (
  /** @class */
  function(t) {
    Ue(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return n.client = r, n;
    }
    return e.prototype.request = function(r) {
      var n = this;
      return new me(function(i) {
        return n.client.subscribe(D(D({}, r), { query: ct(r.query) }), {
          next: i.next.bind(i),
          complete: i.complete.bind(i),
          error: function(a) {
            if (a instanceof Error)
              return i.error(a);
            var o = $m(a);
            return o || Bm(a) ? i.error(
              // reason will be available on clean closes
              new Error("Socket closed".concat(o ? " with event ".concat(a.code) : "").concat(o ? " ".concat(a.reason) : ""))
            ) : i.error(new Ke({
              graphQLErrors: Array.isArray(a) ? a : [a]
            }));
          }
          // casting around a wrong type in graphql-ws, which incorrectly expects `Sink<ExecutionResult>`
        });
      });
    }, e;
  }(et)
);
const Ce = [];
for (let t = 0; t < 256; ++t)
  Ce.push((t + 256).toString(16).slice(1));
function Vm(t, e = 0) {
  return (Ce[t[e + 0]] + Ce[t[e + 1]] + Ce[t[e + 2]] + Ce[t[e + 3]] + "-" + Ce[t[e + 4]] + Ce[t[e + 5]] + "-" + Ce[t[e + 6]] + Ce[t[e + 7]] + "-" + Ce[t[e + 8]] + Ce[t[e + 9]] + "-" + Ce[t[e + 10]] + Ce[t[e + 11]] + Ce[t[e + 12]] + Ce[t[e + 13]] + Ce[t[e + 14]] + Ce[t[e + 15]]).toLowerCase();
}
let fi;
const Wm = new Uint8Array(16);
function zm() {
  if (!fi) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    fi = crypto.getRandomValues.bind(crypto);
  }
  return fi(Wm);
}
const Qm = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), vu = { randomUUID: Qm };
function Hl(t, e, r) {
  if (vu.randomUUID && !t)
    return vu.randomUUID();
  t = t || {};
  const n = t.random ?? t.rng?.() ?? zm();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Vm(n);
}
const Ym = (t) => Yl(({ graphQLErrors: e, networkError: r }) => {
  e && typeof window < "u" && (e.forEach(({ message: n, locations: i, path: a, extensions: o }) => {
    console.error(`[GraphQL error]: Message: ${n}, Location: ${i}, Path: ${a}`, o), o && o.code === "invalid-jwt" && (t?.["invalid-jwt"]?.(), setTimeout(() => window.location.assign("/"), 3e3));
  }), r && console.log(`[Network error]: ${JSON.stringify(r)}`));
}), li = (t, e) => new pl({
  uri: t,
  headers: e.authToken ? {
    authorization: `Bearer ${e.authToken}`
  } : {
    "x-hasura-org-id": e.appId,
    "x-hasura-app-id": e.appId,
    "x-hasura-user-id": Hl(),
    "x-hasura-role": "anonymous"
  }
}), Hm = (t, e) => ti(
  ({ query: r }) => {
    const n = lt(r);
    return n.kind === "OperationDefinition" && n.operation === "subscription";
  },
  new Um(
    uh({
      url: String(process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT),
      connectionParams: {
        headers: e ? {
          authorization: `Bearer ${e}`
        } : {
          "x-hasura-org-id": t,
          "x-hasura-app-id": t,
          "x-hasura-user-id": Hl(),
          "x-hasura-role": "anonymous"
        }
      }
    })
  ),
  ti(
    ({ query: r }) => {
      const n = lt(r);
      return n.kind === "OperationDefinition" && n.operation === sh.QUERY || !1;
    },
    ti(
      ({ query: r }) => {
        const n = lt(r);
        return n.kind === "OperationDefinition" && (n.name?.value.startsWith("Ph") || n.name?.value.startsWith("PH_")) || !1;
      },
      li(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken: e, appId: t }),
      li(process.env.NEXT_PUBLIC_GRAPHQL_RH_ENDPOINT, { authToken: e, appId: t })
    ),
    li(process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT, { authToken: e, appId: t })
  )
), Gm = (t, e) => new Ll({
  link: cy([Ym(e), Hm(t.appId, t.authToken)]),
  cache: new Dl()
});
function Gl(t, e) {
  return function() {
    return t.apply(e, arguments);
  };
}
const { toString: Jm } = Object.prototype, { getPrototypeOf: Vo } = Object, Rn = /* @__PURE__ */ ((t) => (e) => {
  const r = Jm.call(e);
  return t[r] || (t[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ye = (t) => (t = t.toLowerCase(), (e) => Rn(e) === t), Pn = (t) => (e) => typeof e === t, { isArray: Jt } = Array, _r = Pn("undefined");
function Km(t) {
  return t !== null && !_r(t) && t.constructor !== null && !_r(t.constructor) && $e(t.constructor.isBuffer) && t.constructor.isBuffer(t);
}
const Jl = Ye("ArrayBuffer");
function Xm(t) {
  let e;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? e = ArrayBuffer.isView(t) : e = t && t.buffer && Jl(t.buffer), e;
}
const Zm = Pn("string"), $e = Pn("function"), Kl = Pn("number"), An = (t) => t !== null && typeof t == "object", eg = (t) => t === !0 || t === !1, Kr = (t) => {
  if (Rn(t) !== "object")
    return !1;
  const e = Vo(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}, tg = Ye("Date"), rg = Ye("File"), ng = Ye("Blob"), ig = Ye("FileList"), ag = (t) => An(t) && $e(t.pipe), og = (t) => {
  let e;
  return t && (typeof FormData == "function" && t instanceof FormData || $e(t.append) && ((e = Rn(t)) === "formdata" || // detect form-data instance
  e === "object" && $e(t.toString) && t.toString() === "[object FormData]"));
}, sg = Ye("URLSearchParams"), [ug, cg, fg, lg] = ["ReadableStream", "Request", "Response", "Headers"].map(Ye), dg = (t) => t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Rr(t, e, { allOwnKeys: r = !1 } = {}) {
  if (t === null || typeof t > "u")
    return;
  let n, i;
  if (typeof t != "object" && (t = [t]), Jt(t))
    for (n = 0, i = t.length; n < i; n++)
      e.call(null, t[n], n, t);
  else {
    const a = r ? Object.getOwnPropertyNames(t) : Object.keys(t), o = a.length;
    let s;
    for (n = 0; n < o; n++)
      s = a[n], e.call(null, t[s], s, t);
  }
}
function Xl(t, e) {
  e = e.toLowerCase();
  const r = Object.keys(t);
  let n = r.length, i;
  for (; n-- > 0; )
    if (i = r[n], e === i.toLowerCase())
      return i;
  return null;
}
const _t = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Zl = (t) => !_r(t) && t !== _t;
function so() {
  const { caseless: t } = Zl(this) && this || {}, e = {}, r = (n, i) => {
    const a = t && Xl(e, i) || i;
    Kr(e[a]) && Kr(n) ? e[a] = so(e[a], n) : Kr(n) ? e[a] = so({}, n) : Jt(n) ? e[a] = n.slice() : e[a] = n;
  };
  for (let n = 0, i = arguments.length; n < i; n++)
    arguments[n] && Rr(arguments[n], r);
  return e;
}
const hg = (t, e, r, { allOwnKeys: n } = {}) => (Rr(e, (i, a) => {
  r && $e(i) ? t[a] = Gl(i, r) : t[a] = i;
}, { allOwnKeys: n }), t), pg = (t) => (t.charCodeAt(0) === 65279 && (t = t.slice(1)), t), yg = (t, e, r, n) => {
  t.prototype = Object.create(e.prototype, n), t.prototype.constructor = t, Object.defineProperty(t, "super", {
    value: e.prototype
  }), r && Object.assign(t.prototype, r);
}, mg = (t, e, r, n) => {
  let i, a, o;
  const s = {};
  if (e = e || {}, t == null) return e;
  do {
    for (i = Object.getOwnPropertyNames(t), a = i.length; a-- > 0; )
      o = i[a], (!n || n(o, t, e)) && !s[o] && (e[o] = t[o], s[o] = !0);
    t = r !== !1 && Vo(t);
  } while (t && (!r || r(t, e)) && t !== Object.prototype);
  return e;
}, gg = (t, e, r) => {
  t = String(t), (r === void 0 || r > t.length) && (r = t.length), r -= e.length;
  const n = t.indexOf(e, r);
  return n !== -1 && n === r;
}, vg = (t) => {
  if (!t) return null;
  if (Jt(t)) return t;
  let e = t.length;
  if (!Kl(e)) return null;
  const r = new Array(e);
  for (; e-- > 0; )
    r[e] = t[e];
  return r;
}, bg = /* @__PURE__ */ ((t) => (e) => t && e instanceof t)(typeof Uint8Array < "u" && Vo(Uint8Array)), Eg = (t, e) => {
  const n = (t && t[Symbol.iterator]).call(t);
  let i;
  for (; (i = n.next()) && !i.done; ) {
    const a = i.value;
    e.call(t, a[0], a[1]);
  }
}, wg = (t, e) => {
  let r;
  const n = [];
  for (; (r = t.exec(e)) !== null; )
    n.push(r);
  return n;
}, _g = Ye("HTMLFormElement"), Sg = (t) => t.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, i) {
    return n.toUpperCase() + i;
  }
), bu = (({ hasOwnProperty: t }) => (e, r) => t.call(e, r))(Object.prototype), Og = Ye("RegExp"), ed = (t, e) => {
  const r = Object.getOwnPropertyDescriptors(t), n = {};
  Rr(r, (i, a) => {
    let o;
    (o = e(i, a, t)) !== !1 && (n[a] = o || i);
  }), Object.defineProperties(t, n);
}, Tg = (t) => {
  ed(t, (e, r) => {
    if ($e(t) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = t[r];
    if ($e(n)) {
      if (e.enumerable = !1, "writable" in e) {
        e.writable = !1;
        return;
      }
      e.set || (e.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Rg = (t, e) => {
  const r = {}, n = (i) => {
    i.forEach((a) => {
      r[a] = !0;
    });
  };
  return Jt(t) ? n(t) : n(String(t).split(e)), r;
}, Pg = () => {
}, Ag = (t, e) => t != null && Number.isFinite(t = +t) ? t : e;
function Mg(t) {
  return !!(t && $e(t.append) && t[Symbol.toStringTag] === "FormData" && t[Symbol.iterator]);
}
const kg = (t) => {
  const e = new Array(10), r = (n, i) => {
    if (An(n)) {
      if (e.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        e[i] = n;
        const a = Jt(n) ? [] : {};
        return Rr(n, (o, s) => {
          const u = r(o, i + 1);
          !_r(u) && (a[s] = u);
        }), e[i] = void 0, a;
      }
    }
    return n;
  };
  return r(t, 0);
}, Cg = Ye("AsyncFunction"), Ig = (t) => t && (An(t) || $e(t)) && $e(t.then) && $e(t.catch), td = ((t, e) => t ? setImmediate : e ? ((r, n) => (_t.addEventListener("message", ({ source: i, data: a }) => {
  i === _t && a === r && n.length && n.shift()();
}, !1), (i) => {
  n.push(i), _t.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  $e(_t.postMessage)
), xg = typeof queueMicrotask < "u" ? queueMicrotask.bind(_t) : typeof process < "u" && process.nextTick || td, $ = {
  isArray: Jt,
  isArrayBuffer: Jl,
  isBuffer: Km,
  isFormData: og,
  isArrayBufferView: Xm,
  isString: Zm,
  isNumber: Kl,
  isBoolean: eg,
  isObject: An,
  isPlainObject: Kr,
  isReadableStream: ug,
  isRequest: cg,
  isResponse: fg,
  isHeaders: lg,
  isUndefined: _r,
  isDate: tg,
  isFile: rg,
  isBlob: ng,
  isRegExp: Og,
  isFunction: $e,
  isStream: ag,
  isURLSearchParams: sg,
  isTypedArray: bg,
  isFileList: ig,
  forEach: Rr,
  merge: so,
  extend: hg,
  trim: dg,
  stripBOM: pg,
  inherits: yg,
  toFlatObject: mg,
  kindOf: Rn,
  kindOfTest: Ye,
  endsWith: gg,
  toArray: vg,
  forEachEntry: Eg,
  matchAll: wg,
  isHTMLForm: _g,
  hasOwnProperty: bu,
  hasOwnProp: bu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ed,
  freezeMethods: Tg,
  toObjectSet: Rg,
  toCamelCase: Sg,
  noop: Pg,
  toFiniteNumber: Ag,
  findKey: Xl,
  global: _t,
  isContextDefined: Zl,
  isSpecCompliantForm: Mg,
  toJSONObject: kg,
  isAsyncFn: Cg,
  isThenable: Ig,
  setImmediate: td,
  asap: xg
};
function oe(t, e, r, n, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = t, this.name = "AxiosError", e && (this.code = e), r && (this.config = r), n && (this.request = n), i && (this.response = i, this.status = i.status ? i.status : null);
}
$.inherits(oe, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: $.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const rd = oe.prototype, nd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((t) => {
  nd[t] = { value: t };
});
Object.defineProperties(oe, nd);
Object.defineProperty(rd, "isAxiosError", { value: !0 });
oe.from = (t, e, r, n, i, a) => {
  const o = Object.create(rd);
  return $.toFlatObject(t, o, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), oe.call(o, t.message, e, r, n, i), o.cause = t, o.name = t.name, a && Object.assign(o, a), o;
};
const Dg = null;
function uo(t) {
  return $.isPlainObject(t) || $.isArray(t);
}
function id(t) {
  return $.endsWith(t, "[]") ? t.slice(0, -2) : t;
}
function Eu(t, e, r) {
  return t ? t.concat(e).map(function(i, a) {
    return i = id(i), !r && a ? "[" + i + "]" : i;
  }).join(r ? "." : "") : e;
}
function Ng(t) {
  return $.isArray(t) && !t.some(uo);
}
const Lg = $.toFlatObject($, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function Mn(t, e, r) {
  if (!$.isObject(t))
    throw new TypeError("target must be an object");
  e = e || new FormData(), r = $.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, b) {
    return !$.isUndefined(b[v]);
  });
  const n = r.metaTokens, i = r.visitor || c, a = r.dots, o = r.indexes, u = (r.Blob || typeof Blob < "u" && Blob) && $.isSpecCompliantForm(e);
  if (!$.isFunction(i))
    throw new TypeError("visitor must be a function");
  function f(m) {
    if (m === null) return "";
    if ($.isDate(m))
      return m.toISOString();
    if (!u && $.isBlob(m))
      throw new oe("Blob is not supported. Use a Buffer instead.");
    return $.isArrayBuffer(m) || $.isTypedArray(m) ? u && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function c(m, v, b) {
    let g = m;
    if (m && !b && typeof m == "object") {
      if ($.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), m = JSON.stringify(m);
      else if ($.isArray(m) && Ng(m) || ($.isFileList(m) || $.endsWith(v, "[]")) && (g = $.toArray(m)))
        return v = id(v), g.forEach(function(w, A) {
          !($.isUndefined(w) || w === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Eu([v], A, a) : o === null ? v : v + "[]",
            f(w)
          );
        }), !1;
    }
    return uo(m) ? !0 : (e.append(Eu(b, v, a), f(m)), !1);
  }
  const l = [], d = Object.assign(Lg, {
    defaultVisitor: c,
    convertValue: f,
    isVisitable: uo
  });
  function y(m, v) {
    if (!$.isUndefined(m)) {
      if (l.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      l.push(m), $.forEach(m, function(g, _) {
        (!($.isUndefined(g) || g === null) && i.call(
          e,
          g,
          $.isString(_) ? _.trim() : _,
          v,
          d
        )) === !0 && y(g, v ? v.concat(_) : [_]);
      }), l.pop();
    }
  }
  if (!$.isObject(t))
    throw new TypeError("data must be an object");
  return y(t), e;
}
function wu(t) {
  const e = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function(n) {
    return e[n];
  });
}
function Wo(t, e) {
  this._pairs = [], t && Mn(t, this, e);
}
const ad = Wo.prototype;
ad.append = function(e, r) {
  this._pairs.push([e, r]);
};
ad.toString = function(e) {
  const r = e ? function(n) {
    return e.call(this, n, wu);
  } : wu;
  return this._pairs.map(function(i) {
    return r(i[0]) + "=" + r(i[1]);
  }, "").join("&");
};
function Fg(t) {
  return encodeURIComponent(t).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function od(t, e, r) {
  if (!e)
    return t;
  const n = r && r.encode || Fg;
  $.isFunction(r) && (r = {
    serialize: r
  });
  const i = r && r.serialize;
  let a;
  if (i ? a = i(e, r) : a = $.isURLSearchParams(e) ? e.toString() : new Wo(e, r).toString(n), a) {
    const o = t.indexOf("#");
    o !== -1 && (t = t.slice(0, o)), t += (t.indexOf("?") === -1 ? "?" : "&") + a;
  }
  return t;
}
class _u {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(e, r, n) {
    return this.handlers.push({
      fulfilled: e,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(e) {
    this.handlers[e] && (this.handlers[e] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(e) {
    $.forEach(this.handlers, function(n) {
      n !== null && e(n);
    });
  }
}
const sd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, jg = typeof URLSearchParams < "u" ? URLSearchParams : Wo, qg = typeof FormData < "u" ? FormData : null, $g = typeof Blob < "u" ? Blob : null, Bg = {
  isBrowser: !0,
  classes: {
    URLSearchParams: jg,
    FormData: qg,
    Blob: $g
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, zo = typeof window < "u" && typeof document < "u", co = typeof navigator == "object" && navigator || void 0, Ug = zo && (!co || ["ReactNative", "NativeScript", "NS"].indexOf(co.product) < 0), Vg = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Wg = zo && window.location.href || "http://localhost", zg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: zo,
  hasStandardBrowserEnv: Ug,
  hasStandardBrowserWebWorkerEnv: Vg,
  navigator: co,
  origin: Wg
}, Symbol.toStringTag, { value: "Module" })), De = {
  ...zg,
  ...Bg
};
function Qg(t, e) {
  return Mn(t, new De.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, i, a) {
      return De.isNode && $.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, e));
}
function Yg(t) {
  return $.matchAll(/\w+|\[(\w*)]/g, t).map((e) => e[0] === "[]" ? "" : e[1] || e[0]);
}
function Hg(t) {
  const e = {}, r = Object.keys(t);
  let n;
  const i = r.length;
  let a;
  for (n = 0; n < i; n++)
    a = r[n], e[a] = t[a];
  return e;
}
function ud(t) {
  function e(r, n, i, a) {
    let o = r[a++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), u = a >= r.length;
    return o = !o && $.isArray(i) ? i.length : o, u ? ($.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n, !s) : ((!i[o] || !$.isObject(i[o])) && (i[o] = []), e(r, n, i[o], a) && $.isArray(i[o]) && (i[o] = Hg(i[o])), !s);
  }
  if ($.isFormData(t) && $.isFunction(t.entries)) {
    const r = {};
    return $.forEachEntry(t, (n, i) => {
      e(Yg(n), i, r, 0);
    }), r;
  }
  return null;
}
function Gg(t, e, r) {
  if ($.isString(t))
    try {
      return (e || JSON.parse)(t), $.trim(t);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(t);
}
const Pr = {
  transitional: sd,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(e, r) {
    const n = r.getContentType() || "", i = n.indexOf("application/json") > -1, a = $.isObject(e);
    if (a && $.isHTMLForm(e) && (e = new FormData(e)), $.isFormData(e))
      return i ? JSON.stringify(ud(e)) : e;
    if ($.isArrayBuffer(e) || $.isBuffer(e) || $.isStream(e) || $.isFile(e) || $.isBlob(e) || $.isReadableStream(e))
      return e;
    if ($.isArrayBufferView(e))
      return e.buffer;
    if ($.isURLSearchParams(e))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
    let s;
    if (a) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Qg(e, this.formSerializer).toString();
      if ((s = $.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Mn(
          s ? { "files[]": e } : e,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return a || i ? (r.setContentType("application/json", !1), Gg(e)) : e;
  }],
  transformResponse: [function(e) {
    const r = this.transitional || Pr.transitional, n = r && r.forcedJSONParsing, i = this.responseType === "json";
    if ($.isResponse(e) || $.isReadableStream(e))
      return e;
    if (e && $.isString(e) && (n && !this.responseType || i)) {
      const o = !(r && r.silentJSONParsing) && i;
      try {
        return JSON.parse(e);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? oe.from(s, oe.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return e;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: De.classes.FormData,
    Blob: De.classes.Blob
  },
  validateStatus: function(e) {
    return e >= 200 && e < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
$.forEach(["delete", "get", "head", "post", "put", "patch"], (t) => {
  Pr.headers[t] = {};
});
const Jg = $.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Kg = (t) => {
  const e = {};
  let r, n, i;
  return t && t.split(`
`).forEach(function(o) {
    i = o.indexOf(":"), r = o.substring(0, i).trim().toLowerCase(), n = o.substring(i + 1).trim(), !(!r || e[r] && Jg[r]) && (r === "set-cookie" ? e[r] ? e[r].push(n) : e[r] = [n] : e[r] = e[r] ? e[r] + ", " + n : n);
  }), e;
}, Su = Symbol("internals");
function ur(t) {
  return t && String(t).trim().toLowerCase();
}
function Xr(t) {
  return t === !1 || t == null ? t : $.isArray(t) ? t.map(Xr) : String(t);
}
function Xg(t) {
  const e = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(t); )
    e[n[1]] = n[2];
  return e;
}
const Zg = (t) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());
function di(t, e, r, n, i) {
  if ($.isFunction(n))
    return n.call(this, e, r);
  if (i && (e = r), !!$.isString(e)) {
    if ($.isString(n))
      return e.indexOf(n) !== -1;
    if ($.isRegExp(n))
      return n.test(e);
  }
}
function ev(t) {
  return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, r, n) => r.toUpperCase() + n);
}
function tv(t, e) {
  const r = $.toCamelCase(" " + e);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(t, n + r, {
      value: function(i, a, o) {
        return this[n].call(this, e, i, a, o);
      },
      configurable: !0
    });
  });
}
let qe = class {
  constructor(e) {
    e && this.set(e);
  }
  set(e, r, n) {
    const i = this;
    function a(s, u, f) {
      const c = ur(u);
      if (!c)
        throw new Error("header name must be a non-empty string");
      const l = $.findKey(i, c);
      (!l || i[l] === void 0 || f === !0 || f === void 0 && i[l] !== !1) && (i[l || u] = Xr(s));
    }
    const o = (s, u) => $.forEach(s, (f, c) => a(f, c, u));
    if ($.isPlainObject(e) || e instanceof this.constructor)
      o(e, r);
    else if ($.isString(e) && (e = e.trim()) && !Zg(e))
      o(Kg(e), r);
    else if ($.isHeaders(e))
      for (const [s, u] of e.entries())
        a(u, s, n);
    else
      e != null && a(r, e, n);
    return this;
  }
  get(e, r) {
    if (e = ur(e), e) {
      const n = $.findKey(this, e);
      if (n) {
        const i = this[n];
        if (!r)
          return i;
        if (r === !0)
          return Xg(i);
        if ($.isFunction(r))
          return r.call(this, i, n);
        if ($.isRegExp(r))
          return r.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(e, r) {
    if (e = ur(e), e) {
      const n = $.findKey(this, e);
      return !!(n && this[n] !== void 0 && (!r || di(this, this[n], n, r)));
    }
    return !1;
  }
  delete(e, r) {
    const n = this;
    let i = !1;
    function a(o) {
      if (o = ur(o), o) {
        const s = $.findKey(n, o);
        s && (!r || di(n, n[s], s, r)) && (delete n[s], i = !0);
      }
    }
    return $.isArray(e) ? e.forEach(a) : a(e), i;
  }
  clear(e) {
    const r = Object.keys(this);
    let n = r.length, i = !1;
    for (; n--; ) {
      const a = r[n];
      (!e || di(this, this[a], a, e, !0)) && (delete this[a], i = !0);
    }
    return i;
  }
  normalize(e) {
    const r = this, n = {};
    return $.forEach(this, (i, a) => {
      const o = $.findKey(n, a);
      if (o) {
        r[o] = Xr(i), delete r[a];
        return;
      }
      const s = e ? ev(a) : String(a).trim();
      s !== a && delete r[a], r[s] = Xr(i), n[s] = !0;
    }), this;
  }
  concat(...e) {
    return this.constructor.concat(this, ...e);
  }
  toJSON(e) {
    const r = /* @__PURE__ */ Object.create(null);
    return $.forEach(this, (n, i) => {
      n != null && n !== !1 && (r[i] = e && $.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([e, r]) => e + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(e) {
    return e instanceof this ? e : new this(e);
  }
  static concat(e, ...r) {
    const n = new this(e);
    return r.forEach((i) => n.set(i)), n;
  }
  static accessor(e) {
    const n = (this[Su] = this[Su] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function a(o) {
      const s = ur(o);
      n[s] || (tv(i, o), n[s] = !0);
    }
    return $.isArray(e) ? e.forEach(a) : a(e), this;
  }
};
qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
$.reduceDescriptors(qe.prototype, ({ value: t }, e) => {
  let r = e[0].toUpperCase() + e.slice(1);
  return {
    get: () => t,
    set(n) {
      this[r] = n;
    }
  };
});
$.freezeMethods(qe);
function hi(t, e) {
  const r = this || Pr, n = e || r, i = qe.from(n.headers);
  let a = n.data;
  return $.forEach(t, function(s) {
    a = s.call(r, a, i.normalize(), e ? e.status : void 0);
  }), i.normalize(), a;
}
function cd(t) {
  return !!(t && t.__CANCEL__);
}
function Kt(t, e, r) {
  oe.call(this, t ?? "canceled", oe.ERR_CANCELED, e, r), this.name = "CanceledError";
}
$.inherits(Kt, oe, {
  __CANCEL__: !0
});
function fd(t, e, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? t(r) : e(new oe(
    "Request failed with status code " + r.status,
    [oe.ERR_BAD_REQUEST, oe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
function rv(t) {
  const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
  return e && e[1] || "";
}
function nv(t, e) {
  t = t || 10;
  const r = new Array(t), n = new Array(t);
  let i = 0, a = 0, o;
  return e = e !== void 0 ? e : 1e3, function(u) {
    const f = Date.now(), c = n[a];
    o || (o = f), r[i] = u, n[i] = f;
    let l = a, d = 0;
    for (; l !== i; )
      d += r[l++], l = l % t;
    if (i = (i + 1) % t, i === a && (a = (a + 1) % t), f - o < e)
      return;
    const y = c && f - c;
    return y ? Math.round(d * 1e3 / y) : void 0;
  };
}
function iv(t, e) {
  let r = 0, n = 1e3 / e, i, a;
  const o = (f, c = Date.now()) => {
    r = c, i = null, a && (clearTimeout(a), a = null), t.apply(null, f);
  };
  return [(...f) => {
    const c = Date.now(), l = c - r;
    l >= n ? o(f, c) : (i = f, a || (a = setTimeout(() => {
      a = null, o(i);
    }, n - l)));
  }, () => i && o(i)];
}
const dn = (t, e, r = 3) => {
  let n = 0;
  const i = nv(50, 250);
  return iv((a) => {
    const o = a.loaded, s = a.lengthComputable ? a.total : void 0, u = o - n, f = i(u), c = o <= s;
    n = o;
    const l = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: u,
      rate: f || void 0,
      estimated: f && s && c ? (s - o) / f : void 0,
      event: a,
      lengthComputable: s != null,
      [e ? "download" : "upload"]: !0
    };
    t(l);
  }, r);
}, Ou = (t, e) => {
  const r = t != null;
  return [(n) => e[0]({
    lengthComputable: r,
    total: t,
    loaded: n
  }), e[1]];
}, Tu = (t) => (...e) => $.asap(() => t(...e)), av = De.hasStandardBrowserEnv ? /* @__PURE__ */ ((t, e) => (r) => (r = new URL(r, De.origin), t.protocol === r.protocol && t.host === r.host && (e || t.port === r.port)))(
  new URL(De.origin),
  De.navigator && /(msie|trident)/i.test(De.navigator.userAgent)
) : () => !0, ov = De.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(t, e, r, n, i, a) {
      const o = [t + "=" + encodeURIComponent(e)];
      $.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), $.isString(n) && o.push("path=" + n), $.isString(i) && o.push("domain=" + i), a === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(t) {
      const e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
      return e ? decodeURIComponent(e[3]) : null;
    },
    remove(t) {
      this.write(t, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function sv(t) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(t);
}
function uv(t, e) {
  return e ? t.replace(/\/?\/$/, "") + "/" + e.replace(/^\/+/, "") : t;
}
function ld(t, e, r) {
  let n = !sv(e);
  return t && (n || r == !1) ? uv(t, e) : e;
}
const Ru = (t) => t instanceof qe ? { ...t } : t;
function At(t, e) {
  e = e || {};
  const r = {};
  function n(f, c, l, d) {
    return $.isPlainObject(f) && $.isPlainObject(c) ? $.merge.call({ caseless: d }, f, c) : $.isPlainObject(c) ? $.merge({}, c) : $.isArray(c) ? c.slice() : c;
  }
  function i(f, c, l, d) {
    if ($.isUndefined(c)) {
      if (!$.isUndefined(f))
        return n(void 0, f, l, d);
    } else return n(f, c, l, d);
  }
  function a(f, c) {
    if (!$.isUndefined(c))
      return n(void 0, c);
  }
  function o(f, c) {
    if ($.isUndefined(c)) {
      if (!$.isUndefined(f))
        return n(void 0, f);
    } else return n(void 0, c);
  }
  function s(f, c, l) {
    if (l in e)
      return n(f, c);
    if (l in t)
      return n(void 0, f);
  }
  const u = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (f, c, l) => i(Ru(f), Ru(c), l, !0)
  };
  return $.forEach(Object.keys(Object.assign({}, t, e)), function(c) {
    const l = u[c] || i, d = l(t[c], e[c], c);
    $.isUndefined(d) && l !== s || (r[c] = d);
  }), r;
}
const dd = (t) => {
  const e = At({}, t);
  let { data: r, withXSRFToken: n, xsrfHeaderName: i, xsrfCookieName: a, headers: o, auth: s } = e;
  e.headers = o = qe.from(o), e.url = od(ld(e.baseURL, e.url, e.allowAbsoluteUrls), t.params, t.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let u;
  if ($.isFormData(r)) {
    if (De.hasStandardBrowserEnv || De.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((u = o.getContentType()) !== !1) {
      const [f, ...c] = u ? u.split(";").map((l) => l.trim()).filter(Boolean) : [];
      o.setContentType([f || "multipart/form-data", ...c].join("; "));
    }
  }
  if (De.hasStandardBrowserEnv && (n && $.isFunction(n) && (n = n(e)), n || n !== !1 && av(e.url))) {
    const f = i && a && ov.read(a);
    f && o.set(i, f);
  }
  return e;
}, cv = typeof XMLHttpRequest < "u", fv = cv && function(t) {
  return new Promise(function(r, n) {
    const i = dd(t);
    let a = i.data;
    const o = qe.from(i.headers).normalize();
    let { responseType: s, onUploadProgress: u, onDownloadProgress: f } = i, c, l, d, y, m;
    function v() {
      y && y(), m && m(), i.cancelToken && i.cancelToken.unsubscribe(c), i.signal && i.signal.removeEventListener("abort", c);
    }
    let b = new XMLHttpRequest();
    b.open(i.method.toUpperCase(), i.url, !0), b.timeout = i.timeout;
    function g() {
      if (!b)
        return;
      const w = qe.from(
        "getAllResponseHeaders" in b && b.getAllResponseHeaders()
      ), P = {
        data: !s || s === "text" || s === "json" ? b.responseText : b.response,
        status: b.status,
        statusText: b.statusText,
        headers: w,
        config: t,
        request: b
      };
      fd(function(B) {
        r(B), v();
      }, function(B) {
        n(B), v();
      }, P), b = null;
    }
    "onloadend" in b ? b.onloadend = g : b.onreadystatechange = function() {
      !b || b.readyState !== 4 || b.status === 0 && !(b.responseURL && b.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, b.onabort = function() {
      b && (n(new oe("Request aborted", oe.ECONNABORTED, t, b)), b = null);
    }, b.onerror = function() {
      n(new oe("Network Error", oe.ERR_NETWORK, t, b)), b = null;
    }, b.ontimeout = function() {
      let A = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const P = i.transitional || sd;
      i.timeoutErrorMessage && (A = i.timeoutErrorMessage), n(new oe(
        A,
        P.clarifyTimeoutError ? oe.ETIMEDOUT : oe.ECONNABORTED,
        t,
        b
      )), b = null;
    }, a === void 0 && o.setContentType(null), "setRequestHeader" in b && $.forEach(o.toJSON(), function(A, P) {
      b.setRequestHeader(P, A);
    }), $.isUndefined(i.withCredentials) || (b.withCredentials = !!i.withCredentials), s && s !== "json" && (b.responseType = i.responseType), f && ([d, m] = dn(f, !0), b.addEventListener("progress", d)), u && b.upload && ([l, y] = dn(u), b.upload.addEventListener("progress", l), b.upload.addEventListener("loadend", y)), (i.cancelToken || i.signal) && (c = (w) => {
      b && (n(!w || w.type ? new Kt(null, t, b) : w), b.abort(), b = null);
    }, i.cancelToken && i.cancelToken.subscribe(c), i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
    const _ = rv(i.url);
    if (_ && De.protocols.indexOf(_) === -1) {
      n(new oe("Unsupported protocol " + _ + ":", oe.ERR_BAD_REQUEST, t));
      return;
    }
    b.send(a || null);
  });
}, lv = (t, e) => {
  const { length: r } = t = t ? t.filter(Boolean) : [];
  if (e || r) {
    let n = new AbortController(), i;
    const a = function(f) {
      if (!i) {
        i = !0, s();
        const c = f instanceof Error ? f : this.reason;
        n.abort(c instanceof oe ? c : new Kt(c instanceof Error ? c.message : c));
      }
    };
    let o = e && setTimeout(() => {
      o = null, a(new oe(`timeout ${e} of ms exceeded`, oe.ETIMEDOUT));
    }, e);
    const s = () => {
      t && (o && clearTimeout(o), o = null, t.forEach((f) => {
        f.unsubscribe ? f.unsubscribe(a) : f.removeEventListener("abort", a);
      }), t = null);
    };
    t.forEach((f) => f.addEventListener("abort", a));
    const { signal: u } = n;
    return u.unsubscribe = () => $.asap(s), u;
  }
}, dv = function* (t, e) {
  let r = t.byteLength;
  if (r < e) {
    yield t;
    return;
  }
  let n = 0, i;
  for (; n < r; )
    i = n + e, yield t.slice(n, i), n = i;
}, hv = async function* (t, e) {
  for await (const r of pv(t))
    yield* dv(r, e);
}, pv = async function* (t) {
  if (t[Symbol.asyncIterator]) {
    yield* t;
    return;
  }
  const e = t.getReader();
  try {
    for (; ; ) {
      const { done: r, value: n } = await e.read();
      if (r)
        break;
      yield n;
    }
  } finally {
    await e.cancel();
  }
}, Pu = (t, e, r, n) => {
  const i = hv(t, e);
  let a = 0, o, s = (u) => {
    o || (o = !0, n && n(u));
  };
  return new ReadableStream({
    async pull(u) {
      try {
        const { done: f, value: c } = await i.next();
        if (f) {
          s(), u.close();
          return;
        }
        let l = c.byteLength;
        if (r) {
          let d = a += l;
          r(d);
        }
        u.enqueue(new Uint8Array(c));
      } catch (f) {
        throw s(f), f;
      }
    },
    cancel(u) {
      return s(u), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, kn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", hd = kn && typeof ReadableStream == "function", yv = kn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((t) => (e) => t.encode(e))(new TextEncoder()) : async (t) => new Uint8Array(await new Response(t).arrayBuffer())), pd = (t, ...e) => {
  try {
    return !!t(...e);
  } catch {
    return !1;
  }
}, mv = hd && pd(() => {
  let t = !1;
  const e = new Request(De.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return t = !0, "half";
    }
  }).headers.has("Content-Type");
  return t && !e;
}), Au = 64 * 1024, fo = hd && pd(() => $.isReadableStream(new Response("").body)), hn = {
  stream: fo && ((t) => t.body)
};
kn && ((t) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((e) => {
    !hn[e] && (hn[e] = $.isFunction(t[e]) ? (r) => r[e]() : (r, n) => {
      throw new oe(`Response type '${e}' is not supported`, oe.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const gv = async (t) => {
  if (t == null)
    return 0;
  if ($.isBlob(t))
    return t.size;
  if ($.isSpecCompliantForm(t))
    return (await new Request(De.origin, {
      method: "POST",
      body: t
    }).arrayBuffer()).byteLength;
  if ($.isArrayBufferView(t) || $.isArrayBuffer(t))
    return t.byteLength;
  if ($.isURLSearchParams(t) && (t = t + ""), $.isString(t))
    return (await yv(t)).byteLength;
}, vv = async (t, e) => {
  const r = $.toFiniteNumber(t.getContentLength());
  return r ?? gv(e);
}, bv = kn && (async (t) => {
  let {
    url: e,
    method: r,
    data: n,
    signal: i,
    cancelToken: a,
    timeout: o,
    onDownloadProgress: s,
    onUploadProgress: u,
    responseType: f,
    headers: c,
    withCredentials: l = "same-origin",
    fetchOptions: d
  } = dd(t);
  f = f ? (f + "").toLowerCase() : "text";
  let y = lv([i, a && a.toAbortSignal()], o), m;
  const v = y && y.unsubscribe && (() => {
    y.unsubscribe();
  });
  let b;
  try {
    if (u && mv && r !== "get" && r !== "head" && (b = await vv(c, n)) !== 0) {
      let P = new Request(e, {
        method: "POST",
        body: n,
        duplex: "half"
      }), C;
      if ($.isFormData(n) && (C = P.headers.get("content-type")) && c.setContentType(C), P.body) {
        const [B, L] = Ou(
          b,
          dn(Tu(u))
        );
        n = Pu(P.body, Au, B, L);
      }
    }
    $.isString(l) || (l = l ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    m = new Request(e, {
      ...d,
      signal: y,
      method: r.toUpperCase(),
      headers: c.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: g ? l : void 0
    });
    let _ = await fetch(m);
    const w = fo && (f === "stream" || f === "response");
    if (fo && (s || w && v)) {
      const P = {};
      ["status", "statusText", "headers"].forEach((Y) => {
        P[Y] = _[Y];
      });
      const C = $.toFiniteNumber(_.headers.get("content-length")), [B, L] = s && Ou(
        C,
        dn(Tu(s), !0)
      ) || [];
      _ = new Response(
        Pu(_.body, Au, B, () => {
          L && L(), v && v();
        }),
        P
      );
    }
    f = f || "text";
    let A = await hn[$.findKey(hn, f) || "text"](_, t);
    return !w && v && v(), await new Promise((P, C) => {
      fd(P, C, {
        data: A,
        headers: qe.from(_.headers),
        status: _.status,
        statusText: _.statusText,
        config: t,
        request: m
      });
    });
  } catch (g) {
    throw v && v(), g && g.name === "TypeError" && /fetch/i.test(g.message) ? Object.assign(
      new oe("Network Error", oe.ERR_NETWORK, t, m),
      {
        cause: g.cause || g
      }
    ) : oe.from(g, g && g.code, t, m);
  }
}), lo = {
  http: Dg,
  xhr: fv,
  fetch: bv
};
$.forEach(lo, (t, e) => {
  if (t) {
    try {
      Object.defineProperty(t, "name", { value: e });
    } catch {
    }
    Object.defineProperty(t, "adapterName", { value: e });
  }
});
const Mu = (t) => `- ${t}`, Ev = (t) => $.isFunction(t) || t === null || t === !1, yd = {
  getAdapter: (t) => {
    t = $.isArray(t) ? t : [t];
    const { length: e } = t;
    let r, n;
    const i = {};
    for (let a = 0; a < e; a++) {
      r = t[a];
      let o;
      if (n = r, !Ev(r) && (n = lo[(o = String(r)).toLowerCase()], n === void 0))
        throw new oe(`Unknown adapter '${o}'`);
      if (n)
        break;
      i[o || "#" + a] = n;
    }
    if (!n) {
      const a = Object.entries(i).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = e ? a.length > 1 ? `since :
` + a.map(Mu).join(`
`) : " " + Mu(a[0]) : "as no adapter specified";
      throw new oe(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: lo
};
function pi(t) {
  if (t.cancelToken && t.cancelToken.throwIfRequested(), t.signal && t.signal.aborted)
    throw new Kt(null, t);
}
function ku(t) {
  return pi(t), t.headers = qe.from(t.headers), t.data = hi.call(
    t,
    t.transformRequest
  ), ["post", "put", "patch"].indexOf(t.method) !== -1 && t.headers.setContentType("application/x-www-form-urlencoded", !1), yd.getAdapter(t.adapter || Pr.adapter)(t).then(function(n) {
    return pi(t), n.data = hi.call(
      t,
      t.transformResponse,
      n
    ), n.headers = qe.from(n.headers), n;
  }, function(n) {
    return cd(n) || (pi(t), n && n.response && (n.response.data = hi.call(
      t,
      t.transformResponse,
      n.response
    ), n.response.headers = qe.from(n.response.headers))), Promise.reject(n);
  });
}
const md = "1.8.4", Cn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((t, e) => {
  Cn[t] = function(n) {
    return typeof n === t || "a" + (e < 1 ? "n " : " ") + t;
  };
});
const Cu = {};
Cn.transitional = function(e, r, n) {
  function i(a, o) {
    return "[Axios v" + md + "] Transitional option '" + a + "'" + o + (n ? ". " + n : "");
  }
  return (a, o, s) => {
    if (e === !1)
      throw new oe(
        i(o, " has been removed" + (r ? " in " + r : "")),
        oe.ERR_DEPRECATED
      );
    return r && !Cu[o] && (Cu[o] = !0, console.warn(
      i(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), e ? e(a, o, s) : !0;
  };
};
Cn.spelling = function(e) {
  return (r, n) => (console.warn(`${n} is likely a misspelling of ${e}`), !0);
};
function wv(t, e, r) {
  if (typeof t != "object")
    throw new oe("options must be an object", oe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(t);
  let i = n.length;
  for (; i-- > 0; ) {
    const a = n[i], o = e[a];
    if (o) {
      const s = t[a], u = s === void 0 || o(s, a, t);
      if (u !== !0)
        throw new oe("option " + a + " must be " + u, oe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new oe("Unknown option " + a, oe.ERR_BAD_OPTION);
  }
}
const Zr = {
  assertOptions: wv,
  validators: Cn
}, Je = Zr.validators;
let Ot = class {
  constructor(e) {
    this.defaults = e, this.interceptors = {
      request: new _u(),
      response: new _u()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(e, r) {
    try {
      return await this._request(e, r);
    } catch (n) {
      if (n instanceof Error) {
        let i = {};
        Error.captureStackTrace ? Error.captureStackTrace(i) : i = new Error();
        const a = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          n.stack ? a && !String(n.stack).endsWith(a.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + a) : n.stack = a;
        } catch {
        }
      }
      throw n;
    }
  }
  _request(e, r) {
    typeof e == "string" ? (r = r || {}, r.url = e) : r = e || {}, r = At(this.defaults, r);
    const { transitional: n, paramsSerializer: i, headers: a } = r;
    n !== void 0 && Zr.assertOptions(n, {
      silentJSONParsing: Je.transitional(Je.boolean),
      forcedJSONParsing: Je.transitional(Je.boolean),
      clarifyTimeoutError: Je.transitional(Je.boolean)
    }, !1), i != null && ($.isFunction(i) ? r.paramsSerializer = {
      serialize: i
    } : Zr.assertOptions(i, {
      encode: Je.function,
      serialize: Je.function
    }, !0)), r.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? r.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : r.allowAbsoluteUrls = !0), Zr.assertOptions(r, {
      baseUrl: Je.spelling("baseURL"),
      withXsrfToken: Je.spelling("withXSRFToken")
    }, !0), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = a && $.merge(
      a.common,
      a[r.method]
    );
    a && $.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete a[m];
      }
    ), r.headers = qe.concat(o, a);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (u = u && v.synchronous, s.unshift(v.fulfilled, v.rejected));
    });
    const f = [];
    this.interceptors.response.forEach(function(v) {
      f.push(v.fulfilled, v.rejected);
    });
    let c, l = 0, d;
    if (!u) {
      const m = [ku.bind(this), void 0];
      for (m.unshift.apply(m, s), m.push.apply(m, f), d = m.length, c = Promise.resolve(r); l < d; )
        c = c.then(m[l++], m[l++]);
      return c;
    }
    d = s.length;
    let y = r;
    for (l = 0; l < d; ) {
      const m = s[l++], v = s[l++];
      try {
        y = m(y);
      } catch (b) {
        v.call(this, b);
        break;
      }
    }
    try {
      c = ku.call(this, y);
    } catch (m) {
      return Promise.reject(m);
    }
    for (l = 0, d = f.length; l < d; )
      c = c.then(f[l++], f[l++]);
    return c;
  }
  getUri(e) {
    e = At(this.defaults, e);
    const r = ld(e.baseURL, e.url, e.allowAbsoluteUrls);
    return od(r, e.params, e.paramsSerializer);
  }
};
$.forEach(["delete", "get", "head", "options"], function(e) {
  Ot.prototype[e] = function(r, n) {
    return this.request(At(n || {}, {
      method: e,
      url: r,
      data: (n || {}).data
    }));
  };
});
$.forEach(["post", "put", "patch"], function(e) {
  function r(n) {
    return function(a, o, s) {
      return this.request(At(s || {}, {
        method: e,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: a,
        data: o
      }));
    };
  }
  Ot.prototype[e] = r(), Ot.prototype[e + "Form"] = r(!0);
});
let _v = class gd {
  constructor(e) {
    if (typeof e != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(a) {
      r = a;
    });
    const n = this;
    this.promise.then((i) => {
      if (!n._listeners) return;
      let a = n._listeners.length;
      for (; a-- > 0; )
        n._listeners[a](i);
      n._listeners = null;
    }), this.promise.then = (i) => {
      let a;
      const o = new Promise((s) => {
        n.subscribe(s), a = s;
      }).then(i);
      return o.cancel = function() {
        n.unsubscribe(a);
      }, o;
    }, e(function(a, o, s) {
      n.reason || (n.reason = new Kt(a, o, s), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(e) {
    if (this.reason) {
      e(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(e) : this._listeners = [e];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(e) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(e);
    r !== -1 && this._listeners.splice(r, 1);
  }
  toAbortSignal() {
    const e = new AbortController(), r = (n) => {
      e.abort(n);
    };
    return this.subscribe(r), e.signal.unsubscribe = () => this.unsubscribe(r), e.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let e;
    return {
      token: new gd(function(i) {
        e = i;
      }),
      cancel: e
    };
  }
};
function Sv(t) {
  return function(r) {
    return t.apply(null, r);
  };
}
function Ov(t) {
  return $.isObject(t) && t.isAxiosError === !0;
}
const ho = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ho).forEach(([t, e]) => {
  ho[e] = t;
});
function vd(t) {
  const e = new Ot(t), r = Gl(Ot.prototype.request, e);
  return $.extend(r, Ot.prototype, e, { allOwnKeys: !0 }), $.extend(r, e, null, { allOwnKeys: !0 }), r.create = function(i) {
    return vd(At(t, i));
  }, r;
}
const ce = vd(Pr);
ce.Axios = Ot;
ce.CanceledError = Kt;
ce.CancelToken = _v;
ce.isCancel = cd;
ce.VERSION = md;
ce.toFormData = Mn;
ce.AxiosError = oe;
ce.Cancel = ce.CanceledError;
ce.all = function(e) {
  return Promise.all(e);
};
ce.spread = Sv;
ce.isAxiosError = Ov;
ce.mergeConfig = At;
ce.AxiosHeaders = qe;
ce.formToJSON = (t) => ud($.isHTMLForm(t) ? new FormData(t) : t);
ce.getAdapter = yd.getAdapter;
ce.HttpStatusCode = ho;
ce.default = ce;
const {
  Axios: n0,
  AxiosError: i0,
  CanceledError: a0,
  isCancel: o0,
  CancelToken: s0,
  VERSION: u0,
  all: c0,
  Cancel: f0,
  isAxiosError: l0,
  spread: d0,
  toFormData: h0,
  AxiosHeaders: p0,
  HttpStatusCode: y0,
  formToJSON: m0,
  getAdapter: g0,
  mergeConfig: v0
} = ce;
var tt = {}, Fr = { exports: {} }, yi = {}, cr = {}, Iu;
function Tv() {
  if (Iu) return cr;
  Iu = 1, cr.byteLength = s, cr.toByteArray = f, cr.fromByteArray = d;
  for (var t = [], e = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, a = n.length; i < a; ++i)
    t[i] = n[i], e[n.charCodeAt(i)] = i;
  e[45] = 62, e[95] = 63;
  function o(y) {
    var m = y.length;
    if (m % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var v = y.indexOf("=");
    v === -1 && (v = m);
    var b = v === m ? 0 : 4 - v % 4;
    return [v, b];
  }
  function s(y) {
    var m = o(y), v = m[0], b = m[1];
    return (v + b) * 3 / 4 - b;
  }
  function u(y, m, v) {
    return (m + v) * 3 / 4 - v;
  }
  function f(y) {
    var m, v = o(y), b = v[0], g = v[1], _ = new r(u(y, b, g)), w = 0, A = g > 0 ? b - 4 : b, P;
    for (P = 0; P < A; P += 4)
      m = e[y.charCodeAt(P)] << 18 | e[y.charCodeAt(P + 1)] << 12 | e[y.charCodeAt(P + 2)] << 6 | e[y.charCodeAt(P + 3)], _[w++] = m >> 16 & 255, _[w++] = m >> 8 & 255, _[w++] = m & 255;
    return g === 2 && (m = e[y.charCodeAt(P)] << 2 | e[y.charCodeAt(P + 1)] >> 4, _[w++] = m & 255), g === 1 && (m = e[y.charCodeAt(P)] << 10 | e[y.charCodeAt(P + 1)] << 4 | e[y.charCodeAt(P + 2)] >> 2, _[w++] = m >> 8 & 255, _[w++] = m & 255), _;
  }
  function c(y) {
    return t[y >> 18 & 63] + t[y >> 12 & 63] + t[y >> 6 & 63] + t[y & 63];
  }
  function l(y, m, v) {
    for (var b, g = [], _ = m; _ < v; _ += 3)
      b = (y[_] << 16 & 16711680) + (y[_ + 1] << 8 & 65280) + (y[_ + 2] & 255), g.push(c(b));
    return g.join("");
  }
  function d(y) {
    for (var m, v = y.length, b = v % 3, g = [], _ = 16383, w = 0, A = v - b; w < A; w += _)
      g.push(l(y, w, w + _ > A ? A : w + _));
    return b === 1 ? (m = y[v - 1], g.push(
      t[m >> 2] + t[m << 4 & 63] + "=="
    )) : b === 2 && (m = (y[v - 2] << 8) + y[v - 1], g.push(
      t[m >> 10] + t[m >> 4 & 63] + t[m << 2 & 63] + "="
    )), g.join("");
  }
  return cr;
}
var jr = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
var xu;
function Rv() {
  return xu || (xu = 1, jr.read = function(t, e, r, n, i) {
    var a, o, s = i * 8 - n - 1, u = (1 << s) - 1, f = u >> 1, c = -7, l = r ? i - 1 : 0, d = r ? -1 : 1, y = t[e + l];
    for (l += d, a = y & (1 << -c) - 1, y >>= -c, c += s; c > 0; a = a * 256 + t[e + l], l += d, c -= 8)
      ;
    for (o = a & (1 << -c) - 1, a >>= -c, c += n; c > 0; o = o * 256 + t[e + l], l += d, c -= 8)
      ;
    if (a === 0)
      a = 1 - f;
    else {
      if (a === u)
        return o ? NaN : (y ? -1 : 1) * (1 / 0);
      o = o + Math.pow(2, n), a = a - f;
    }
    return (y ? -1 : 1) * o * Math.pow(2, a - n);
  }, jr.write = function(t, e, r, n, i, a) {
    var o, s, u, f = a * 8 - i - 1, c = (1 << f) - 1, l = c >> 1, d = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, y = n ? 0 : a - 1, m = n ? 1 : -1, v = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, o = c) : (o = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), o + l >= 1 ? e += d / u : e += d * Math.pow(2, 1 - l), e * u >= 2 && (o++, u /= 2), o + l >= c ? (s = 0, o = c) : o + l >= 1 ? (s = (e * u - 1) * Math.pow(2, i), o = o + l) : (s = e * Math.pow(2, l - 1) * Math.pow(2, i), o = 0)); i >= 8; t[r + y] = s & 255, y += m, s /= 256, i -= 8)
      ;
    for (o = o << i | s, f += i; f > 0; t[r + y] = o & 255, y += m, o /= 256, f -= 8)
      ;
    t[r + y - m] |= v * 128;
  }), jr;
}
var mi, Du;
function Pv() {
  if (Du) return mi;
  Du = 1;
  var t = {}.toString;
  return mi = Array.isArray || function(e) {
    return t.call(e) == "[object Array]";
  }, mi;
}
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var Nu;
function pn() {
  return Nu || (Nu = 1, function(t) {
    var e = Tv(), r = Rv(), n = Pv();
    t.Buffer = s, t.SlowBuffer = g, t.INSPECT_MAX_BYTES = 50, s.TYPED_ARRAY_SUPPORT = as.TYPED_ARRAY_SUPPORT !== void 0 ? as.TYPED_ARRAY_SUPPORT : i(), t.kMaxLength = a();
    function i() {
      try {
        var S = new Uint8Array(1);
        return S.__proto__ = { __proto__: Uint8Array.prototype, foo: function() {
          return 42;
        } }, S.foo() === 42 && // typed array instances can be augmented
        typeof S.subarray == "function" && // chrome 9-10 lack `subarray`
        S.subarray(1, 1).byteLength === 0;
      } catch {
        return !1;
      }
    }
    function a() {
      return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }
    function o(S, h) {
      if (a() < h)
        throw new RangeError("Invalid typed array length");
      return s.TYPED_ARRAY_SUPPORT ? (S = new Uint8Array(h), S.__proto__ = s.prototype) : (S === null && (S = new s(h)), S.length = h), S;
    }
    function s(S, h, p) {
      if (!s.TYPED_ARRAY_SUPPORT && !(this instanceof s))
        return new s(S, h, p);
      if (typeof S == "number") {
        if (typeof h == "string")
          throw new Error(
            "If encoding is specified then the first argument must be a string"
          );
        return l(this, S);
      }
      return u(this, S, h, p);
    }
    s.poolSize = 8192, s._augment = function(S) {
      return S.__proto__ = s.prototype, S;
    };
    function u(S, h, p, T) {
      if (typeof h == "number")
        throw new TypeError('"value" argument must not be a number');
      return typeof ArrayBuffer < "u" && h instanceof ArrayBuffer ? m(S, h, p, T) : typeof h == "string" ? d(S, h, p) : v(S, h);
    }
    s.from = function(S, h, p) {
      return u(null, S, h, p);
    }, s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype, s.__proto__ = Uint8Array, typeof Symbol < "u" && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
      value: null,
      configurable: !0
    }));
    function f(S) {
      if (typeof S != "number")
        throw new TypeError('"size" argument must be a number');
      if (S < 0)
        throw new RangeError('"size" argument must not be negative');
    }
    function c(S, h, p, T) {
      return f(h), h <= 0 ? o(S, h) : p !== void 0 ? typeof T == "string" ? o(S, h).fill(p, T) : o(S, h).fill(p) : o(S, h);
    }
    s.alloc = function(S, h, p) {
      return c(null, S, h, p);
    };
    function l(S, h) {
      if (f(h), S = o(S, h < 0 ? 0 : b(h) | 0), !s.TYPED_ARRAY_SUPPORT)
        for (var p = 0; p < h; ++p)
          S[p] = 0;
      return S;
    }
    s.allocUnsafe = function(S) {
      return l(null, S);
    }, s.allocUnsafeSlow = function(S) {
      return l(null, S);
    };
    function d(S, h, p) {
      if ((typeof p != "string" || p === "") && (p = "utf8"), !s.isEncoding(p))
        throw new TypeError('"encoding" must be a valid string encoding');
      var T = _(h, p) | 0;
      S = o(S, T);
      var F = S.write(h, p);
      return F !== T && (S = S.slice(0, F)), S;
    }
    function y(S, h) {
      var p = h.length < 0 ? 0 : b(h.length) | 0;
      S = o(S, p);
      for (var T = 0; T < p; T += 1)
        S[T] = h[T] & 255;
      return S;
    }
    function m(S, h, p, T) {
      if (h.byteLength, p < 0 || h.byteLength < p)
        throw new RangeError("'offset' is out of bounds");
      if (h.byteLength < p + (T || 0))
        throw new RangeError("'length' is out of bounds");
      return p === void 0 && T === void 0 ? h = new Uint8Array(h) : T === void 0 ? h = new Uint8Array(h, p) : h = new Uint8Array(h, p, T), s.TYPED_ARRAY_SUPPORT ? (S = h, S.__proto__ = s.prototype) : S = y(S, h), S;
    }
    function v(S, h) {
      if (s.isBuffer(h)) {
        var p = b(h.length) | 0;
        return S = o(S, p), S.length === 0 || h.copy(S, 0, 0, p), S;
      }
      if (h) {
        if (typeof ArrayBuffer < "u" && h.buffer instanceof ArrayBuffer || "length" in h)
          return typeof h.length != "number" || Ve(h.length) ? o(S, 0) : y(S, h);
        if (h.type === "Buffer" && n(h.data))
          return y(S, h.data);
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }
    function b(S) {
      if (S >= a())
        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
      return S | 0;
    }
    function g(S) {
      return +S != S && (S = 0), s.alloc(+S);
    }
    s.isBuffer = function(h) {
      return !!(h != null && h._isBuffer);
    }, s.compare = function(h, p) {
      if (!s.isBuffer(h) || !s.isBuffer(p))
        throw new TypeError("Arguments must be Buffers");
      if (h === p) return 0;
      for (var T = h.length, F = p.length, Q = 0, H = Math.min(T, F); Q < H; ++Q)
        if (h[Q] !== p[Q]) {
          T = h[Q], F = p[Q];
          break;
        }
      return T < F ? -1 : F < T ? 1 : 0;
    }, s.isEncoding = function(h) {
      switch (String(h).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;
        default:
          return !1;
      }
    }, s.concat = function(h, p) {
      if (!n(h))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (h.length === 0)
        return s.alloc(0);
      var T;
      if (p === void 0)
        for (p = 0, T = 0; T < h.length; ++T)
          p += h[T].length;
      var F = s.allocUnsafe(p), Q = 0;
      for (T = 0; T < h.length; ++T) {
        var H = h[T];
        if (!s.isBuffer(H))
          throw new TypeError('"list" argument must be an Array of Buffers');
        H.copy(F, Q), Q += H.length;
      }
      return F;
    };
    function _(S, h) {
      if (s.isBuffer(S))
        return S.length;
      if (typeof ArrayBuffer < "u" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(S) || S instanceof ArrayBuffer))
        return S.byteLength;
      typeof S != "string" && (S = "" + S);
      var p = S.length;
      if (p === 0) return 0;
      for (var T = !1; ; )
        switch (h) {
          case "ascii":
          case "latin1":
          case "binary":
            return p;
          case "utf8":
          case "utf-8":
          case void 0:
            return k(S).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return p * 2;
          case "hex":
            return p >>> 1;
          case "base64":
            return Oe(S).length;
          default:
            if (T) return k(S).length;
            h = ("" + h).toLowerCase(), T = !0;
        }
    }
    s.byteLength = _;
    function w(S, h, p) {
      var T = !1;
      if ((h === void 0 || h < 0) && (h = 0), h > this.length || ((p === void 0 || p > this.length) && (p = this.length), p <= 0) || (p >>>= 0, h >>>= 0, p <= h))
        return "";
      for (S || (S = "utf8"); ; )
        switch (S) {
          case "hex":
            return V(this, h, p);
          case "utf8":
          case "utf-8":
            return x(this, h, p);
          case "ascii":
            return j(this, h, p);
          case "latin1":
          case "binary":
            return q(this, h, p);
          case "base64":
            return ee(this, h, p);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return O(this, h, p);
          default:
            if (T) throw new TypeError("Unknown encoding: " + S);
            S = (S + "").toLowerCase(), T = !0;
        }
    }
    s.prototype._isBuffer = !0;
    function A(S, h, p) {
      var T = S[h];
      S[h] = S[p], S[p] = T;
    }
    s.prototype.swap16 = function() {
      var h = this.length;
      if (h % 2 !== 0)
        throw new RangeError("Buffer size must be a multiple of 16-bits");
      for (var p = 0; p < h; p += 2)
        A(this, p, p + 1);
      return this;
    }, s.prototype.swap32 = function() {
      var h = this.length;
      if (h % 4 !== 0)
        throw new RangeError("Buffer size must be a multiple of 32-bits");
      for (var p = 0; p < h; p += 4)
        A(this, p, p + 3), A(this, p + 1, p + 2);
      return this;
    }, s.prototype.swap64 = function() {
      var h = this.length;
      if (h % 8 !== 0)
        throw new RangeError("Buffer size must be a multiple of 64-bits");
      for (var p = 0; p < h; p += 8)
        A(this, p, p + 7), A(this, p + 1, p + 6), A(this, p + 2, p + 5), A(this, p + 3, p + 4);
      return this;
    }, s.prototype.toString = function() {
      var h = this.length | 0;
      return h === 0 ? "" : arguments.length === 0 ? x(this, 0, h) : w.apply(this, arguments);
    }, s.prototype.equals = function(h) {
      if (!s.isBuffer(h)) throw new TypeError("Argument must be a Buffer");
      return this === h ? !0 : s.compare(this, h) === 0;
    }, s.prototype.inspect = function() {
      var h = "", p = t.INSPECT_MAX_BYTES;
      return this.length > 0 && (h = this.toString("hex", 0, p).match(/.{2}/g).join(" "), this.length > p && (h += " ... ")), "<Buffer " + h + ">";
    }, s.prototype.compare = function(h, p, T, F, Q) {
      if (!s.isBuffer(h))
        throw new TypeError("Argument must be a Buffer");
      if (p === void 0 && (p = 0), T === void 0 && (T = h ? h.length : 0), F === void 0 && (F = 0), Q === void 0 && (Q = this.length), p < 0 || T > h.length || F < 0 || Q > this.length)
        throw new RangeError("out of range index");
      if (F >= Q && p >= T)
        return 0;
      if (F >= Q)
        return -1;
      if (p >= T)
        return 1;
      if (p >>>= 0, T >>>= 0, F >>>= 0, Q >>>= 0, this === h) return 0;
      for (var H = Q - F, fe = T - p, ve = Math.min(H, fe), be = this.slice(F, Q), xe = h.slice(p, T), _e = 0; _e < ve; ++_e)
        if (be[_e] !== xe[_e]) {
          H = be[_e], fe = xe[_e];
          break;
        }
      return H < fe ? -1 : fe < H ? 1 : 0;
    };
    function P(S, h, p, T, F) {
      if (S.length === 0) return -1;
      if (typeof p == "string" ? (T = p, p = 0) : p > 2147483647 ? p = 2147483647 : p < -2147483648 && (p = -2147483648), p = +p, isNaN(p) && (p = F ? 0 : S.length - 1), p < 0 && (p = S.length + p), p >= S.length) {
        if (F) return -1;
        p = S.length - 1;
      } else if (p < 0)
        if (F) p = 0;
        else return -1;
      if (typeof h == "string" && (h = s.from(h, T)), s.isBuffer(h))
        return h.length === 0 ? -1 : C(S, h, p, T, F);
      if (typeof h == "number")
        return h = h & 255, s.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? F ? Uint8Array.prototype.indexOf.call(S, h, p) : Uint8Array.prototype.lastIndexOf.call(S, h, p) : C(S, [h], p, T, F);
      throw new TypeError("val must be string, number or Buffer");
    }
    function C(S, h, p, T, F) {
      var Q = 1, H = S.length, fe = h.length;
      if (T !== void 0 && (T = String(T).toLowerCase(), T === "ucs2" || T === "ucs-2" || T === "utf16le" || T === "utf-16le")) {
        if (S.length < 2 || h.length < 2)
          return -1;
        Q = 2, H /= 2, fe /= 2, p /= 2;
      }
      function ve(rs, ns) {
        return Q === 1 ? rs[ns] : rs.readUInt16BE(ns * Q);
      }
      var be;
      if (F) {
        var xe = -1;
        for (be = p; be < H; be++)
          if (ve(S, be) === ve(h, xe === -1 ? 0 : be - xe)) {
            if (xe === -1 && (xe = be), be - xe + 1 === fe) return xe * Q;
          } else
            xe !== -1 && (be -= be - xe), xe = -1;
      } else
        for (p + fe > H && (p = H - fe), be = p; be >= 0; be--) {
          for (var _e = !0, kr = 0; kr < fe; kr++)
            if (ve(S, be + kr) !== ve(h, kr)) {
              _e = !1;
              break;
            }
          if (_e) return be;
        }
      return -1;
    }
    s.prototype.includes = function(h, p, T) {
      return this.indexOf(h, p, T) !== -1;
    }, s.prototype.indexOf = function(h, p, T) {
      return P(this, h, p, T, !0);
    }, s.prototype.lastIndexOf = function(h, p, T) {
      return P(this, h, p, T, !1);
    };
    function B(S, h, p, T) {
      p = Number(p) || 0;
      var F = S.length - p;
      T ? (T = Number(T), T > F && (T = F)) : T = F;
      var Q = h.length;
      if (Q % 2 !== 0) throw new TypeError("Invalid hex string");
      T > Q / 2 && (T = Q / 2);
      for (var H = 0; H < T; ++H) {
        var fe = parseInt(h.substr(H * 2, 2), 16);
        if (isNaN(fe)) return H;
        S[p + H] = fe;
      }
      return H;
    }
    function L(S, h, p, T) {
      return Me(k(h, S.length - p), S, p, T);
    }
    function Y(S, h, p, T) {
      return Me(ne(h), S, p, T);
    }
    function G(S, h, p, T) {
      return Y(S, h, p, T);
    }
    function J(S, h, p, T) {
      return Me(Oe(h), S, p, T);
    }
    function z(S, h, p, T) {
      return Me(ae(h, S.length - p), S, p, T);
    }
    s.prototype.write = function(h, p, T, F) {
      if (p === void 0)
        F = "utf8", T = this.length, p = 0;
      else if (T === void 0 && typeof p == "string")
        F = p, T = this.length, p = 0;
      else if (isFinite(p))
        p = p | 0, isFinite(T) ? (T = T | 0, F === void 0 && (F = "utf8")) : (F = T, T = void 0);
      else
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported"
        );
      var Q = this.length - p;
      if ((T === void 0 || T > Q) && (T = Q), h.length > 0 && (T < 0 || p < 0) || p > this.length)
        throw new RangeError("Attempt to write outside buffer bounds");
      F || (F = "utf8");
      for (var H = !1; ; )
        switch (F) {
          case "hex":
            return B(this, h, p, T);
          case "utf8":
          case "utf-8":
            return L(this, h, p, T);
          case "ascii":
            return Y(this, h, p, T);
          case "latin1":
          case "binary":
            return G(this, h, p, T);
          case "base64":
            return J(this, h, p, T);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return z(this, h, p, T);
          default:
            if (H) throw new TypeError("Unknown encoding: " + F);
            F = ("" + F).toLowerCase(), H = !0;
        }
    }, s.prototype.toJSON = function() {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    function ee(S, h, p) {
      return h === 0 && p === S.length ? e.fromByteArray(S) : e.fromByteArray(S.slice(h, p));
    }
    function x(S, h, p) {
      p = Math.min(S.length, p);
      for (var T = [], F = h; F < p; ) {
        var Q = S[F], H = null, fe = Q > 239 ? 4 : Q > 223 ? 3 : Q > 191 ? 2 : 1;
        if (F + fe <= p) {
          var ve, be, xe, _e;
          switch (fe) {
            case 1:
              Q < 128 && (H = Q);
              break;
            case 2:
              ve = S[F + 1], (ve & 192) === 128 && (_e = (Q & 31) << 6 | ve & 63, _e > 127 && (H = _e));
              break;
            case 3:
              ve = S[F + 1], be = S[F + 2], (ve & 192) === 128 && (be & 192) === 128 && (_e = (Q & 15) << 12 | (ve & 63) << 6 | be & 63, _e > 2047 && (_e < 55296 || _e > 57343) && (H = _e));
              break;
            case 4:
              ve = S[F + 1], be = S[F + 2], xe = S[F + 3], (ve & 192) === 128 && (be & 192) === 128 && (xe & 192) === 128 && (_e = (Q & 15) << 18 | (ve & 63) << 12 | (be & 63) << 6 | xe & 63, _e > 65535 && _e < 1114112 && (H = _e));
          }
        }
        H === null ? (H = 65533, fe = 1) : H > 65535 && (H -= 65536, T.push(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), T.push(H), F += fe;
      }
      return N(T);
    }
    var M = 4096;
    function N(S) {
      var h = S.length;
      if (h <= M)
        return String.fromCharCode.apply(String, S);
      for (var p = "", T = 0; T < h; )
        p += String.fromCharCode.apply(
          String,
          S.slice(T, T += M)
        );
      return p;
    }
    function j(S, h, p) {
      var T = "";
      p = Math.min(S.length, p);
      for (var F = h; F < p; ++F)
        T += String.fromCharCode(S[F] & 127);
      return T;
    }
    function q(S, h, p) {
      var T = "";
      p = Math.min(S.length, p);
      for (var F = h; F < p; ++F)
        T += String.fromCharCode(S[F]);
      return T;
    }
    function V(S, h, p) {
      var T = S.length;
      (!h || h < 0) && (h = 0), (!p || p < 0 || p > T) && (p = T);
      for (var F = "", Q = h; Q < p; ++Q)
        F += ue(S[Q]);
      return F;
    }
    function O(S, h, p) {
      for (var T = S.slice(h, p), F = "", Q = 0; Q < T.length; Q += 2)
        F += String.fromCharCode(T[Q] + T[Q + 1] * 256);
      return F;
    }
    s.prototype.slice = function(h, p) {
      var T = this.length;
      h = ~~h, p = p === void 0 ? T : ~~p, h < 0 ? (h += T, h < 0 && (h = 0)) : h > T && (h = T), p < 0 ? (p += T, p < 0 && (p = 0)) : p > T && (p = T), p < h && (p = h);
      var F;
      if (s.TYPED_ARRAY_SUPPORT)
        F = this.subarray(h, p), F.__proto__ = s.prototype;
      else {
        var Q = p - h;
        F = new s(Q, void 0);
        for (var H = 0; H < Q; ++H)
          F[H] = this[H + h];
      }
      return F;
    };
    function E(S, h, p) {
      if (S % 1 !== 0 || S < 0) throw new RangeError("offset is not uint");
      if (S + h > p) throw new RangeError("Trying to access beyond buffer length");
    }
    s.prototype.readUIntLE = function(h, p, T) {
      h = h | 0, p = p | 0, T || E(h, p, this.length);
      for (var F = this[h], Q = 1, H = 0; ++H < p && (Q *= 256); )
        F += this[h + H] * Q;
      return F;
    }, s.prototype.readUIntBE = function(h, p, T) {
      h = h | 0, p = p | 0, T || E(h, p, this.length);
      for (var F = this[h + --p], Q = 1; p > 0 && (Q *= 256); )
        F += this[h + --p] * Q;
      return F;
    }, s.prototype.readUInt8 = function(h, p) {
      return p || E(h, 1, this.length), this[h];
    }, s.prototype.readUInt16LE = function(h, p) {
      return p || E(h, 2, this.length), this[h] | this[h + 1] << 8;
    }, s.prototype.readUInt16BE = function(h, p) {
      return p || E(h, 2, this.length), this[h] << 8 | this[h + 1];
    }, s.prototype.readUInt32LE = function(h, p) {
      return p || E(h, 4, this.length), (this[h] | this[h + 1] << 8 | this[h + 2] << 16) + this[h + 3] * 16777216;
    }, s.prototype.readUInt32BE = function(h, p) {
      return p || E(h, 4, this.length), this[h] * 16777216 + (this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3]);
    }, s.prototype.readIntLE = function(h, p, T) {
      h = h | 0, p = p | 0, T || E(h, p, this.length);
      for (var F = this[h], Q = 1, H = 0; ++H < p && (Q *= 256); )
        F += this[h + H] * Q;
      return Q *= 128, F >= Q && (F -= Math.pow(2, 8 * p)), F;
    }, s.prototype.readIntBE = function(h, p, T) {
      h = h | 0, p = p | 0, T || E(h, p, this.length);
      for (var F = p, Q = 1, H = this[h + --F]; F > 0 && (Q *= 256); )
        H += this[h + --F] * Q;
      return Q *= 128, H >= Q && (H -= Math.pow(2, 8 * p)), H;
    }, s.prototype.readInt8 = function(h, p) {
      return p || E(h, 1, this.length), this[h] & 128 ? (255 - this[h] + 1) * -1 : this[h];
    }, s.prototype.readInt16LE = function(h, p) {
      p || E(h, 2, this.length);
      var T = this[h] | this[h + 1] << 8;
      return T & 32768 ? T | 4294901760 : T;
    }, s.prototype.readInt16BE = function(h, p) {
      p || E(h, 2, this.length);
      var T = this[h + 1] | this[h] << 8;
      return T & 32768 ? T | 4294901760 : T;
    }, s.prototype.readInt32LE = function(h, p) {
      return p || E(h, 4, this.length), this[h] | this[h + 1] << 8 | this[h + 2] << 16 | this[h + 3] << 24;
    }, s.prototype.readInt32BE = function(h, p) {
      return p || E(h, 4, this.length), this[h] << 24 | this[h + 1] << 16 | this[h + 2] << 8 | this[h + 3];
    }, s.prototype.readFloatLE = function(h, p) {
      return p || E(h, 4, this.length), r.read(this, h, !0, 23, 4);
    }, s.prototype.readFloatBE = function(h, p) {
      return p || E(h, 4, this.length), r.read(this, h, !1, 23, 4);
    }, s.prototype.readDoubleLE = function(h, p) {
      return p || E(h, 8, this.length), r.read(this, h, !0, 52, 8);
    }, s.prototype.readDoubleBE = function(h, p) {
      return p || E(h, 8, this.length), r.read(this, h, !1, 52, 8);
    };
    function R(S, h, p, T, F, Q) {
      if (!s.isBuffer(S)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (h > F || h < Q) throw new RangeError('"value" argument is out of bounds');
      if (p + T > S.length) throw new RangeError("Index out of range");
    }
    s.prototype.writeUIntLE = function(h, p, T, F) {
      if (h = +h, p = p | 0, T = T | 0, !F) {
        var Q = Math.pow(2, 8 * T) - 1;
        R(this, h, p, T, Q, 0);
      }
      var H = 1, fe = 0;
      for (this[p] = h & 255; ++fe < T && (H *= 256); )
        this[p + fe] = h / H & 255;
      return p + T;
    }, s.prototype.writeUIntBE = function(h, p, T, F) {
      if (h = +h, p = p | 0, T = T | 0, !F) {
        var Q = Math.pow(2, 8 * T) - 1;
        R(this, h, p, T, Q, 0);
      }
      var H = T - 1, fe = 1;
      for (this[p + H] = h & 255; --H >= 0 && (fe *= 256); )
        this[p + H] = h / fe & 255;
      return p + T;
    }, s.prototype.writeUInt8 = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 1, 255, 0), s.TYPED_ARRAY_SUPPORT || (h = Math.floor(h)), this[p] = h & 255, p + 1;
    };
    function I(S, h, p, T) {
      h < 0 && (h = 65535 + h + 1);
      for (var F = 0, Q = Math.min(S.length - p, 2); F < Q; ++F)
        S[p + F] = (h & 255 << 8 * (T ? F : 1 - F)) >>> (T ? F : 1 - F) * 8;
    }
    s.prototype.writeUInt16LE = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[p] = h & 255, this[p + 1] = h >>> 8) : I(this, h, p, !0), p + 2;
    }, s.prototype.writeUInt16BE = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 2, 65535, 0), s.TYPED_ARRAY_SUPPORT ? (this[p] = h >>> 8, this[p + 1] = h & 255) : I(this, h, p, !1), p + 2;
    };
    function U(S, h, p, T) {
      h < 0 && (h = 4294967295 + h + 1);
      for (var F = 0, Q = Math.min(S.length - p, 4); F < Q; ++F)
        S[p + F] = h >>> (T ? F : 3 - F) * 8 & 255;
    }
    s.prototype.writeUInt32LE = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[p + 3] = h >>> 24, this[p + 2] = h >>> 16, this[p + 1] = h >>> 8, this[p] = h & 255) : U(this, h, p, !0), p + 4;
    }, s.prototype.writeUInt32BE = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 4, 4294967295, 0), s.TYPED_ARRAY_SUPPORT ? (this[p] = h >>> 24, this[p + 1] = h >>> 16, this[p + 2] = h >>> 8, this[p + 3] = h & 255) : U(this, h, p, !1), p + 4;
    }, s.prototype.writeIntLE = function(h, p, T, F) {
      if (h = +h, p = p | 0, !F) {
        var Q = Math.pow(2, 8 * T - 1);
        R(this, h, p, T, Q - 1, -Q);
      }
      var H = 0, fe = 1, ve = 0;
      for (this[p] = h & 255; ++H < T && (fe *= 256); )
        h < 0 && ve === 0 && this[p + H - 1] !== 0 && (ve = 1), this[p + H] = (h / fe >> 0) - ve & 255;
      return p + T;
    }, s.prototype.writeIntBE = function(h, p, T, F) {
      if (h = +h, p = p | 0, !F) {
        var Q = Math.pow(2, 8 * T - 1);
        R(this, h, p, T, Q - 1, -Q);
      }
      var H = T - 1, fe = 1, ve = 0;
      for (this[p + H] = h & 255; --H >= 0 && (fe *= 256); )
        h < 0 && ve === 0 && this[p + H + 1] !== 0 && (ve = 1), this[p + H] = (h / fe >> 0) - ve & 255;
      return p + T;
    }, s.prototype.writeInt8 = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 1, 127, -128), s.TYPED_ARRAY_SUPPORT || (h = Math.floor(h)), h < 0 && (h = 255 + h + 1), this[p] = h & 255, p + 1;
    }, s.prototype.writeInt16LE = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[p] = h & 255, this[p + 1] = h >>> 8) : I(this, h, p, !0), p + 2;
    }, s.prototype.writeInt16BE = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 2, 32767, -32768), s.TYPED_ARRAY_SUPPORT ? (this[p] = h >>> 8, this[p + 1] = h & 255) : I(this, h, p, !1), p + 2;
    }, s.prototype.writeInt32LE = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 4, 2147483647, -2147483648), s.TYPED_ARRAY_SUPPORT ? (this[p] = h & 255, this[p + 1] = h >>> 8, this[p + 2] = h >>> 16, this[p + 3] = h >>> 24) : U(this, h, p, !0), p + 4;
    }, s.prototype.writeInt32BE = function(h, p, T) {
      return h = +h, p = p | 0, T || R(this, h, p, 4, 2147483647, -2147483648), h < 0 && (h = 4294967295 + h + 1), s.TYPED_ARRAY_SUPPORT ? (this[p] = h >>> 24, this[p + 1] = h >>> 16, this[p + 2] = h >>> 8, this[p + 3] = h & 255) : U(this, h, p, !1), p + 4;
    };
    function W(S, h, p, T, F, Q) {
      if (p + T > S.length) throw new RangeError("Index out of range");
      if (p < 0) throw new RangeError("Index out of range");
    }
    function Z(S, h, p, T, F) {
      return F || W(S, h, p, 4), r.write(S, h, p, T, 23, 4), p + 4;
    }
    s.prototype.writeFloatLE = function(h, p, T) {
      return Z(this, h, p, !0, T);
    }, s.prototype.writeFloatBE = function(h, p, T) {
      return Z(this, h, p, !1, T);
    };
    function X(S, h, p, T, F) {
      return F || W(S, h, p, 8), r.write(S, h, p, T, 52, 8), p + 8;
    }
    s.prototype.writeDoubleLE = function(h, p, T) {
      return X(this, h, p, !0, T);
    }, s.prototype.writeDoubleBE = function(h, p, T) {
      return X(this, h, p, !1, T);
    }, s.prototype.copy = function(h, p, T, F) {
      if (T || (T = 0), !F && F !== 0 && (F = this.length), p >= h.length && (p = h.length), p || (p = 0), F > 0 && F < T && (F = T), F === T || h.length === 0 || this.length === 0) return 0;
      if (p < 0)
        throw new RangeError("targetStart out of bounds");
      if (T < 0 || T >= this.length) throw new RangeError("sourceStart out of bounds");
      if (F < 0) throw new RangeError("sourceEnd out of bounds");
      F > this.length && (F = this.length), h.length - p < F - T && (F = h.length - p + T);
      var Q = F - T, H;
      if (this === h && T < p && p < F)
        for (H = Q - 1; H >= 0; --H)
          h[H + p] = this[H + T];
      else if (Q < 1e3 || !s.TYPED_ARRAY_SUPPORT)
        for (H = 0; H < Q; ++H)
          h[H + p] = this[H + T];
      else
        Uint8Array.prototype.set.call(
          h,
          this.subarray(T, T + Q),
          p
        );
      return Q;
    }, s.prototype.fill = function(h, p, T, F) {
      if (typeof h == "string") {
        if (typeof p == "string" ? (F = p, p = 0, T = this.length) : typeof T == "string" && (F = T, T = this.length), h.length === 1) {
          var Q = h.charCodeAt(0);
          Q < 256 && (h = Q);
        }
        if (F !== void 0 && typeof F != "string")
          throw new TypeError("encoding must be a string");
        if (typeof F == "string" && !s.isEncoding(F))
          throw new TypeError("Unknown encoding: " + F);
      } else typeof h == "number" && (h = h & 255);
      if (p < 0 || this.length < p || this.length < T)
        throw new RangeError("Out of range index");
      if (T <= p)
        return this;
      p = p >>> 0, T = T === void 0 ? this.length : T >>> 0, h || (h = 0);
      var H;
      if (typeof h == "number")
        for (H = p; H < T; ++H)
          this[H] = h;
      else {
        var fe = s.isBuffer(h) ? h : k(new s(h, F).toString()), ve = fe.length;
        for (H = 0; H < T - p; ++H)
          this[H + p] = fe[H % ve];
      }
      return this;
    };
    var K = /[^+\/0-9A-Za-z-_]/g;
    function te(S) {
      if (S = ie(S).replace(K, ""), S.length < 2) return "";
      for (; S.length % 4 !== 0; )
        S = S + "=";
      return S;
    }
    function ie(S) {
      return S.trim ? S.trim() : S.replace(/^\s+|\s+$/g, "");
    }
    function ue(S) {
      return S < 16 ? "0" + S.toString(16) : S.toString(16);
    }
    function k(S, h) {
      h = h || 1 / 0;
      for (var p, T = S.length, F = null, Q = [], H = 0; H < T; ++H) {
        if (p = S.charCodeAt(H), p > 55295 && p < 57344) {
          if (!F) {
            if (p > 56319) {
              (h -= 3) > -1 && Q.push(239, 191, 189);
              continue;
            } else if (H + 1 === T) {
              (h -= 3) > -1 && Q.push(239, 191, 189);
              continue;
            }
            F = p;
            continue;
          }
          if (p < 56320) {
            (h -= 3) > -1 && Q.push(239, 191, 189), F = p;
            continue;
          }
          p = (F - 55296 << 10 | p - 56320) + 65536;
        } else F && (h -= 3) > -1 && Q.push(239, 191, 189);
        if (F = null, p < 128) {
          if ((h -= 1) < 0) break;
          Q.push(p);
        } else if (p < 2048) {
          if ((h -= 2) < 0) break;
          Q.push(
            p >> 6 | 192,
            p & 63 | 128
          );
        } else if (p < 65536) {
          if ((h -= 3) < 0) break;
          Q.push(
            p >> 12 | 224,
            p >> 6 & 63 | 128,
            p & 63 | 128
          );
        } else if (p < 1114112) {
          if ((h -= 4) < 0) break;
          Q.push(
            p >> 18 | 240,
            p >> 12 & 63 | 128,
            p >> 6 & 63 | 128,
            p & 63 | 128
          );
        } else
          throw new Error("Invalid code point");
      }
      return Q;
    }
    function ne(S) {
      for (var h = [], p = 0; p < S.length; ++p)
        h.push(S.charCodeAt(p) & 255);
      return h;
    }
    function ae(S, h) {
      for (var p, T, F, Q = [], H = 0; H < S.length && !((h -= 2) < 0); ++H)
        p = S.charCodeAt(H), T = p >> 8, F = p % 256, Q.push(F), Q.push(T);
      return Q;
    }
    function Oe(S) {
      return e.toByteArray(te(S));
    }
    function Me(S, h, p, T) {
      for (var F = 0; F < T && !(F + p >= h.length || F >= S.length); ++F)
        h[F + p] = S[F];
      return F;
    }
    function Ve(S) {
      return S !== S;
    }
  }(yi)), yi;
}
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
var Lu;
function Ar() {
  return Lu || (Lu = 1, function(t, e) {
    var r = pn(), n = r.Buffer;
    function i(o, s) {
      for (var u in o)
        s[u] = o[u];
    }
    n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = r : (i(r, e), e.Buffer = a);
    function a(o, s, u) {
      return n(o, s, u);
    }
    a.prototype = Object.create(n.prototype), i(n, a), a.from = function(o, s, u) {
      if (typeof o == "number")
        throw new TypeError("Argument must not be a number");
      return n(o, s, u);
    }, a.alloc = function(o, s, u) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      var f = n(o);
      return s !== void 0 ? typeof u == "string" ? f.fill(s, u) : f.fill(s) : f.fill(0), f;
    }, a.allocUnsafe = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return n(o);
    }, a.allocUnsafeSlow = function(o) {
      if (typeof o != "number")
        throw new TypeError("Argument must be a number");
      return r.SlowBuffer(o);
    };
  }(Fr, Fr.exports)), Fr.exports;
}
const Av = {}, Mv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Av
}, Symbol.toStringTag, { value: "Module" })), Xt = /* @__PURE__ */ _h(Mv);
var gi = {}, vi, Fu;
function kv() {
  return Fu || (Fu = 1, vi = function(e) {
    return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
  }), vi;
}
var qr = { exports: {} }, ju;
function Cv() {
  return ju || (ju = 1, typeof Object.create == "function" ? qr.exports = function(e, r) {
    e.super_ = r, e.prototype = Object.create(r.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
  } : qr.exports = function(e, r) {
    e.super_ = r;
    var n = function() {
    };
    n.prototype = r.prototype, e.prototype = new n(), e.prototype.constructor = e;
  }), qr.exports;
}
var qu;
function In() {
  return qu || (qu = 1, function(t) {
    var e = Object.getOwnPropertyDescriptors || function(R) {
      for (var I = Object.keys(R), U = {}, W = 0; W < I.length; W++)
        U[I[W]] = Object.getOwnPropertyDescriptor(R, I[W]);
      return U;
    }, r = /%[sdj%]/g;
    t.format = function(E) {
      if (!A(E)) {
        for (var R = [], I = 0; I < arguments.length; I++)
          R.push(a(arguments[I]));
        return R.join(" ");
      }
      for (var I = 1, U = arguments, W = U.length, Z = String(E).replace(r, function(K) {
        if (K === "%%") return "%";
        if (I >= W) return K;
        switch (K) {
          case "%s":
            return String(U[I++]);
          case "%d":
            return Number(U[I++]);
          case "%j":
            try {
              return JSON.stringify(U[I++]);
            } catch {
              return "[Circular]";
            }
          default:
            return K;
        }
      }), X = U[I]; I < W; X = U[++I])
        g(X) || !L(X) ? Z += " " + X : Z += " " + a(X);
      return Z;
    }, t.deprecate = function(E, R) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return E;
      if (typeof process > "u")
        return function() {
          return t.deprecate(E, R).apply(this, arguments);
        };
      var I = !1;
      function U() {
        if (!I) {
          if (process.throwDeprecation)
            throw new Error(R);
          process.traceDeprecation ? console.trace(R) : console.error(R), I = !0;
        }
        return E.apply(this, arguments);
      }
      return U;
    };
    var n = {}, i;
    t.debuglog = function(E) {
      if (C(i) && (i = process.env.NODE_DEBUG || ""), E = E.toUpperCase(), !n[E])
        if (new RegExp("\\b" + E + "\\b", "i").test(i)) {
          var R = process.pid;
          n[E] = function() {
            var I = t.format.apply(t, arguments);
            console.error("%s %d: %s", E, R, I);
          };
        } else
          n[E] = function() {
          };
      return n[E];
    };
    function a(E, R) {
      var I = {
        seen: [],
        stylize: s
      };
      return arguments.length >= 3 && (I.depth = arguments[2]), arguments.length >= 4 && (I.colors = arguments[3]), b(R) ? I.showHidden = R : R && t._extend(I, R), C(I.showHidden) && (I.showHidden = !1), C(I.depth) && (I.depth = 2), C(I.colors) && (I.colors = !1), C(I.customInspect) && (I.customInspect = !0), I.colors && (I.stylize = o), f(I, E, I.depth);
    }
    t.inspect = a, a.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, a.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      // "name": intentionally not styling
      regexp: "red"
    };
    function o(E, R) {
      var I = a.styles[R];
      return I ? "\x1B[" + a.colors[I][0] + "m" + E + "\x1B[" + a.colors[I][1] + "m" : E;
    }
    function s(E, R) {
      return E;
    }
    function u(E) {
      var R = {};
      return E.forEach(function(I, U) {
        R[I] = !0;
      }), R;
    }
    function f(E, R, I) {
      if (E.customInspect && R && J(R.inspect) && // Filter out the util module, it's inspect function is special
      R.inspect !== t.inspect && // Also filter out any prototype objects using the circular check.
      !(R.constructor && R.constructor.prototype === R)) {
        var U = R.inspect(I, E);
        return A(U) || (U = f(E, U, I)), U;
      }
      var W = c(E, R);
      if (W)
        return W;
      var Z = Object.keys(R), X = u(Z);
      if (E.showHidden && (Z = Object.getOwnPropertyNames(R)), G(R) && (Z.indexOf("message") >= 0 || Z.indexOf("description") >= 0))
        return l(R);
      if (Z.length === 0) {
        if (J(R)) {
          var K = R.name ? ": " + R.name : "";
          return E.stylize("[Function" + K + "]", "special");
        }
        if (B(R))
          return E.stylize(RegExp.prototype.toString.call(R), "regexp");
        if (Y(R))
          return E.stylize(Date.prototype.toString.call(R), "date");
        if (G(R))
          return l(R);
      }
      var te = "", ie = !1, ue = ["{", "}"];
      if (v(R) && (ie = !0, ue = ["[", "]"]), J(R)) {
        var k = R.name ? ": " + R.name : "";
        te = " [Function" + k + "]";
      }
      if (B(R) && (te = " " + RegExp.prototype.toString.call(R)), Y(R) && (te = " " + Date.prototype.toUTCString.call(R)), G(R) && (te = " " + l(R)), Z.length === 0 && (!ie || R.length == 0))
        return ue[0] + te + ue[1];
      if (I < 0)
        return B(R) ? E.stylize(RegExp.prototype.toString.call(R), "regexp") : E.stylize("[Object]", "special");
      E.seen.push(R);
      var ne;
      return ie ? ne = d(E, R, I, X, Z) : ne = Z.map(function(ae) {
        return y(E, R, I, X, ae, ie);
      }), E.seen.pop(), m(ne, te, ue);
    }
    function c(E, R) {
      if (C(R))
        return E.stylize("undefined", "undefined");
      if (A(R)) {
        var I = "'" + JSON.stringify(R).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return E.stylize(I, "string");
      }
      if (w(R))
        return E.stylize("" + R, "number");
      if (b(R))
        return E.stylize("" + R, "boolean");
      if (g(R))
        return E.stylize("null", "null");
    }
    function l(E) {
      return "[" + Error.prototype.toString.call(E) + "]";
    }
    function d(E, R, I, U, W) {
      for (var Z = [], X = 0, K = R.length; X < K; ++X)
        j(R, String(X)) ? Z.push(y(
          E,
          R,
          I,
          U,
          String(X),
          !0
        )) : Z.push("");
      return W.forEach(function(te) {
        te.match(/^\d+$/) || Z.push(y(
          E,
          R,
          I,
          U,
          te,
          !0
        ));
      }), Z;
    }
    function y(E, R, I, U, W, Z) {
      var X, K, te;
      if (te = Object.getOwnPropertyDescriptor(R, W) || { value: R[W] }, te.get ? te.set ? K = E.stylize("[Getter/Setter]", "special") : K = E.stylize("[Getter]", "special") : te.set && (K = E.stylize("[Setter]", "special")), j(U, W) || (X = "[" + W + "]"), K || (E.seen.indexOf(te.value) < 0 ? (g(I) ? K = f(E, te.value, null) : K = f(E, te.value, I - 1), K.indexOf(`
`) > -1 && (Z ? K = K.split(`
`).map(function(ie) {
        return "  " + ie;
      }).join(`
`).substr(2) : K = `
` + K.split(`
`).map(function(ie) {
        return "   " + ie;
      }).join(`
`))) : K = E.stylize("[Circular]", "special")), C(X)) {
        if (Z && W.match(/^\d+$/))
          return K;
        X = JSON.stringify("" + W), X.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (X = X.substr(1, X.length - 2), X = E.stylize(X, "name")) : (X = X.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), X = E.stylize(X, "string"));
      }
      return X + ": " + K;
    }
    function m(E, R, I) {
      var U = E.reduce(function(W, Z) {
        return Z.indexOf(`
`) >= 0, W + Z.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return U > 60 ? I[0] + (R === "" ? "" : R + `
 `) + " " + E.join(`,
  `) + " " + I[1] : I[0] + R + " " + E.join(", ") + " " + I[1];
    }
    function v(E) {
      return Array.isArray(E);
    }
    t.isArray = v;
    function b(E) {
      return typeof E == "boolean";
    }
    t.isBoolean = b;
    function g(E) {
      return E === null;
    }
    t.isNull = g;
    function _(E) {
      return E == null;
    }
    t.isNullOrUndefined = _;
    function w(E) {
      return typeof E == "number";
    }
    t.isNumber = w;
    function A(E) {
      return typeof E == "string";
    }
    t.isString = A;
    function P(E) {
      return typeof E == "symbol";
    }
    t.isSymbol = P;
    function C(E) {
      return E === void 0;
    }
    t.isUndefined = C;
    function B(E) {
      return L(E) && ee(E) === "[object RegExp]";
    }
    t.isRegExp = B;
    function L(E) {
      return typeof E == "object" && E !== null;
    }
    t.isObject = L;
    function Y(E) {
      return L(E) && ee(E) === "[object Date]";
    }
    t.isDate = Y;
    function G(E) {
      return L(E) && (ee(E) === "[object Error]" || E instanceof Error);
    }
    t.isError = G;
    function J(E) {
      return typeof E == "function";
    }
    t.isFunction = J;
    function z(E) {
      return E === null || typeof E == "boolean" || typeof E == "number" || typeof E == "string" || typeof E == "symbol" || // ES6 symbol
      typeof E > "u";
    }
    t.isPrimitive = z, t.isBuffer = kv();
    function ee(E) {
      return Object.prototype.toString.call(E);
    }
    function x(E) {
      return E < 10 ? "0" + E.toString(10) : E.toString(10);
    }
    var M = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function N() {
      var E = /* @__PURE__ */ new Date(), R = [
        x(E.getHours()),
        x(E.getMinutes()),
        x(E.getSeconds())
      ].join(":");
      return [E.getDate(), M[E.getMonth()], R].join(" ");
    }
    t.log = function() {
      console.log("%s - %s", N(), t.format.apply(t, arguments));
    }, t.inherits = Cv(), t._extend = function(E, R) {
      if (!R || !L(R)) return E;
      for (var I = Object.keys(R), U = I.length; U--; )
        E[I[U]] = R[I[U]];
      return E;
    };
    function j(E, R) {
      return Object.prototype.hasOwnProperty.call(E, R);
    }
    var q = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    t.promisify = function(R) {
      if (typeof R != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (q && R[q]) {
        var I = R[q];
        if (typeof I != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(I, q, {
          value: I,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), I;
      }
      function I() {
        for (var U, W, Z = new Promise(function(te, ie) {
          U = te, W = ie;
        }), X = [], K = 0; K < arguments.length; K++)
          X.push(arguments[K]);
        X.push(function(te, ie) {
          te ? W(te) : U(ie);
        });
        try {
          R.apply(this, X);
        } catch (te) {
          W(te);
        }
        return Z;
      }
      return Object.setPrototypeOf(I, Object.getPrototypeOf(R)), q && Object.defineProperty(I, q, {
        value: I,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        I,
        e(R)
      );
    }, t.promisify.custom = q;
    function V(E, R) {
      if (!E) {
        var I = new Error("Promise was rejected with a falsy value");
        I.reason = E, E = I;
      }
      return R(E);
    }
    function O(E) {
      if (typeof E != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function R() {
        for (var I = [], U = 0; U < arguments.length; U++)
          I.push(arguments[U]);
        var W = I.pop();
        if (typeof W != "function")
          throw new TypeError("The last argument must be of type Function");
        var Z = this, X = function() {
          return W.apply(Z, arguments);
        };
        E.apply(this, I).then(
          function(K) {
            process.nextTick(X, null, K);
          },
          function(K) {
            process.nextTick(V, K, X);
          }
        );
      }
      return Object.setPrototypeOf(R, Object.getPrototypeOf(E)), Object.defineProperties(
        R,
        e(E)
      ), R;
    }
    t.callbackify = O;
  }(gi)), gi;
}
var bi, $u;
function bd() {
  if ($u) return bi;
  $u = 1;
  var t = Ar().Buffer, e = Xt, r = In();
  function n(i) {
    if (this.buffer = null, this.writable = !0, this.readable = !0, !i)
      return this.buffer = t.alloc(0), this;
    if (typeof i.pipe == "function")
      return this.buffer = t.alloc(0), i.pipe(this), this;
    if (i.length || typeof i == "object")
      return this.buffer = i, this.writable = !1, process.nextTick(function() {
        this.emit("end", i), this.readable = !1, this.emit("close");
      }.bind(this)), this;
    throw new TypeError("Unexpected data type (" + typeof i + ")");
  }
  return r.inherits(n, e), n.prototype.write = function(a) {
    this.buffer = t.concat([this.buffer, t.from(a)]), this.emit("data", a);
  }, n.prototype.end = function(a) {
    a && this.write(a), this.emit("end", a), this.emit("close"), this.writable = !1, this.readable = !1;
  }, bi = n, bi;
}
var Ei, Bu;
function Iv() {
  if (Bu) return Ei;
  Bu = 1;
  var t = pn().Buffer, e = pn().SlowBuffer;
  Ei = r;
  function r(a, o) {
    if (!t.isBuffer(a) || !t.isBuffer(o) || a.length !== o.length)
      return !1;
    for (var s = 0, u = 0; u < a.length; u++)
      s |= a[u] ^ o[u];
    return s === 0;
  }
  r.install = function() {
    t.prototype.equal = e.prototype.equal = function(o) {
      return r(this, o);
    };
  };
  var n = t.prototype.equal, i = e.prototype.equal;
  return r.restore = function() {
    t.prototype.equal = n, e.prototype.equal = i;
  }, Ei;
}
var wi, Uu;
function xv() {
  if (Uu) return wi;
  Uu = 1;
  function t(n) {
    var i = (n / 8 | 0) + (n % 8 === 0 ? 0 : 1);
    return i;
  }
  var e = {
    ES256: t(256),
    ES384: t(384),
    ES512: t(521)
  };
  function r(n) {
    var i = e[n];
    if (i)
      return i;
    throw new Error('Unknown algorithm "' + n + '"');
  }
  return wi = r, wi;
}
var _i, Vu;
function Dv() {
  if (Vu) return _i;
  Vu = 1;
  var t = Ar().Buffer, e = xv(), r = 128, n = 0, i = 32, a = 16, o = 2, s = a | i | n << 6, u = o | n << 6;
  function f(m) {
    return m.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function c(m) {
    if (t.isBuffer(m))
      return m;
    if (typeof m == "string")
      return t.from(m, "base64");
    throw new TypeError("ECDSA signature must be a Base64 string or a Buffer");
  }
  function l(m, v) {
    m = c(m);
    var b = e(v), g = b + 1, _ = m.length, w = 0;
    if (m[w++] !== s)
      throw new Error('Could not find expected "seq"');
    var A = m[w++];
    if (A === (r | 1) && (A = m[w++]), _ - w < A)
      throw new Error('"seq" specified length of "' + A + '", only "' + (_ - w) + '" remaining');
    if (m[w++] !== u)
      throw new Error('Could not find expected "int" for "r"');
    var P = m[w++];
    if (_ - w - 2 < P)
      throw new Error('"r" specified length of "' + P + '", only "' + (_ - w - 2) + '" available');
    if (g < P)
      throw new Error('"r" specified length of "' + P + '", max of "' + g + '" is acceptable');
    var C = w;
    if (w += P, m[w++] !== u)
      throw new Error('Could not find expected "int" for "s"');
    var B = m[w++];
    if (_ - w !== B)
      throw new Error('"s" specified length of "' + B + '", expected "' + (_ - w) + '"');
    if (g < B)
      throw new Error('"s" specified length of "' + B + '", max of "' + g + '" is acceptable');
    var L = w;
    if (w += B, w !== _)
      throw new Error('Expected to consume entire buffer, but "' + (_ - w) + '" bytes remain');
    var Y = b - P, G = b - B, J = t.allocUnsafe(Y + P + G + B);
    for (w = 0; w < Y; ++w)
      J[w] = 0;
    m.copy(J, w, C + Math.max(-Y, 0), C + P), w = b;
    for (var z = w; w < z + G; ++w)
      J[w] = 0;
    return m.copy(J, w, L + Math.max(-G, 0), L + B), J = J.toString("base64"), J = f(J), J;
  }
  function d(m, v, b) {
    for (var g = 0; v + g < b && m[v + g] === 0; )
      ++g;
    var _ = m[v + g] >= r;
    return _ && --g, g;
  }
  function y(m, v) {
    m = c(m);
    var b = e(v), g = m.length;
    if (g !== b * 2)
      throw new TypeError('"' + v + '" signatures must be "' + b * 2 + '" bytes, saw "' + g + '"');
    var _ = d(m, 0, b), w = d(m, b, m.length), A = b - _, P = b - w, C = 2 + A + 1 + 1 + P, B = C < r, L = t.allocUnsafe((B ? 2 : 3) + C), Y = 0;
    return L[Y++] = s, B ? L[Y++] = C : (L[Y++] = r | 1, L[Y++] = C & 255), L[Y++] = u, L[Y++] = A, _ < 0 ? (L[Y++] = 0, Y += m.copy(L, Y, 0, b)) : Y += m.copy(L, Y, _, b), L[Y++] = u, L[Y++] = P, w < 0 ? (L[Y++] = 0, m.copy(L, Y, b)) : m.copy(L, Y, b + w), L;
  }
  return _i = {
    derToJose: l,
    joseToDer: y
  }, _i;
}
var Si, Wu;
function Ed() {
  if (Wu) return Si;
  Wu = 1;
  var t = Iv(), e = Ar().Buffer, r = Xt, n = Dv(), i = In(), a = `"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`, o = "secret must be a string or buffer", s = "key must be a string or a buffer", u = "key must be a string, a buffer or an object", f = typeof r.createPublicKey == "function";
  f && (s += " or a KeyObject", o += "or a KeyObject");
  function c(z) {
    if (!e.isBuffer(z) && typeof z != "string" && (!f || typeof z != "object" || typeof z.type != "string" || typeof z.asymmetricKeyType != "string" || typeof z.export != "function"))
      throw v(s);
  }
  function l(z) {
    if (!e.isBuffer(z) && typeof z != "string" && typeof z != "object")
      throw v(u);
  }
  function d(z) {
    if (!e.isBuffer(z)) {
      if (typeof z == "string")
        return z;
      if (!f || typeof z != "object" || z.type !== "secret" || typeof z.export != "function")
        throw v(o);
    }
  }
  function y(z) {
    return z.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function m(z) {
    z = z.toString();
    var ee = 4 - z.length % 4;
    if (ee !== 4)
      for (var x = 0; x < ee; ++x)
        z += "=";
    return z.replace(/\-/g, "+").replace(/_/g, "/");
  }
  function v(z) {
    var ee = [].slice.call(arguments, 1), x = i.format.bind(i, z).apply(null, ee);
    return new TypeError(x);
  }
  function b(z) {
    return e.isBuffer(z) || typeof z == "string";
  }
  function g(z) {
    return b(z) || (z = JSON.stringify(z)), z;
  }
  function _(z) {
    return function(x, M) {
      d(M), x = g(x);
      var N = r.createHmac("sha" + z, M), j = (N.update(x), N.digest("base64"));
      return y(j);
    };
  }
  function w(z) {
    return function(x, M, N) {
      var j = _(z)(x, N);
      return t(e.from(M), e.from(j));
    };
  }
  function A(z) {
    return function(x, M) {
      l(M), x = g(x);
      var N = r.createSign("RSA-SHA" + z), j = (N.update(x), N.sign(M, "base64"));
      return y(j);
    };
  }
  function P(z) {
    return function(x, M, N) {
      c(N), x = g(x), M = m(M);
      var j = r.createVerify("RSA-SHA" + z);
      return j.update(x), j.verify(N, M, "base64");
    };
  }
  function C(z) {
    return function(x, M) {
      l(M), x = g(x);
      var N = r.createSign("RSA-SHA" + z), j = (N.update(x), N.sign({
        key: M,
        padding: r.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: r.constants.RSA_PSS_SALTLEN_DIGEST
      }, "base64"));
      return y(j);
    };
  }
  function B(z) {
    return function(x, M, N) {
      c(N), x = g(x), M = m(M);
      var j = r.createVerify("RSA-SHA" + z);
      return j.update(x), j.verify({
        key: N,
        padding: r.constants.RSA_PKCS1_PSS_PADDING,
        saltLength: r.constants.RSA_PSS_SALTLEN_DIGEST
      }, M, "base64");
    };
  }
  function L(z) {
    var ee = A(z);
    return function() {
      var M = ee.apply(null, arguments);
      return M = n.derToJose(M, "ES" + z), M;
    };
  }
  function Y(z) {
    var ee = P(z);
    return function(M, N, j) {
      N = n.joseToDer(N, "ES" + z).toString("base64");
      var q = ee(M, N, j);
      return q;
    };
  }
  function G() {
    return function() {
      return "";
    };
  }
  function J() {
    return function(ee, x) {
      return x === "";
    };
  }
  return Si = function(ee) {
    var x = {
      hs: _,
      rs: A,
      ps: C,
      es: L,
      none: G
    }, M = {
      hs: w,
      rs: P,
      ps: B,
      es: Y,
      none: J
    }, N = ee.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/i);
    if (!N)
      throw v(a, ee);
    var j = (N[1] || N[3]).toLowerCase(), q = N[2];
    return {
      sign: x[j](q),
      verify: M[j](q)
    };
  }, Si;
}
var Oi, zu;
function wd() {
  if (zu) return Oi;
  zu = 1;
  var t = pn().Buffer;
  return Oi = function(r) {
    return typeof r == "string" ? r : typeof r == "number" || t.isBuffer(r) ? r.toString() : JSON.stringify(r);
  }, Oi;
}
var Ti, Qu;
function Nv() {
  if (Qu) return Ti;
  Qu = 1;
  var t = Ar().Buffer, e = bd(), r = Ed(), n = Xt, i = wd(), a = In();
  function o(c, l) {
    return t.from(c, l).toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
  }
  function s(c, l, d) {
    d = d || "utf8";
    var y = o(i(c), "binary"), m = o(i(l), d);
    return a.format("%s.%s", y, m);
  }
  function u(c) {
    var l = c.header, d = c.payload, y = c.secret || c.privateKey, m = c.encoding, v = r(l.alg), b = s(l, d, m), g = v.sign(b, y);
    return a.format("%s.%s", b, g);
  }
  function f(c) {
    var l = c.secret || c.privateKey || c.key, d = new e(l);
    this.readable = !0, this.header = c.header, this.encoding = c.encoding, this.secret = this.privateKey = this.key = d, this.payload = new e(c.payload), this.secret.once("close", function() {
      !this.payload.writable && this.readable && this.sign();
    }.bind(this)), this.payload.once("close", function() {
      !this.secret.writable && this.readable && this.sign();
    }.bind(this));
  }
  return a.inherits(f, n), f.prototype.sign = function() {
    try {
      var l = u({
        header: this.header,
        payload: this.payload.buffer,
        secret: this.secret.buffer,
        encoding: this.encoding
      });
      return this.emit("done", l), this.emit("data", l), this.emit("end"), this.readable = !1, l;
    } catch (d) {
      this.readable = !1, this.emit("error", d), this.emit("close");
    }
  }, f.sign = u, Ti = f, Ti;
}
var Ri, Yu;
function Lv() {
  if (Yu) return Ri;
  Yu = 1;
  var t = Ar().Buffer, e = bd(), r = Ed(), n = Xt, i = wd(), a = In(), o = /^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;
  function s(g) {
    return Object.prototype.toString.call(g) === "[object Object]";
  }
  function u(g) {
    if (s(g))
      return g;
    try {
      return JSON.parse(g);
    } catch {
      return;
    }
  }
  function f(g) {
    var _ = g.split(".", 1)[0];
    return u(t.from(_, "base64").toString("binary"));
  }
  function c(g) {
    return g.split(".", 2).join(".");
  }
  function l(g) {
    return g.split(".")[2];
  }
  function d(g, _) {
    _ = _ || "utf8";
    var w = g.split(".")[1];
    return t.from(w, "base64").toString(_);
  }
  function y(g) {
    return o.test(g) && !!f(g);
  }
  function m(g, _, w) {
    if (!_) {
      var A = new Error("Missing algorithm parameter for jws.verify");
      throw A.code = "MISSING_ALGORITHM", A;
    }
    g = i(g);
    var P = l(g), C = c(g), B = r(_);
    return B.verify(C, P, w);
  }
  function v(g, _) {
    if (_ = _ || {}, g = i(g), !y(g))
      return null;
    var w = f(g);
    if (!w)
      return null;
    var A = d(g);
    return (w.typ === "JWT" || _.json) && (A = JSON.parse(A, _.encoding)), {
      header: w,
      payload: A,
      signature: l(g)
    };
  }
  function b(g) {
    g = g || {};
    var _ = g.secret || g.publicKey || g.key, w = new e(_);
    this.readable = !0, this.algorithm = g.algorithm, this.encoding = g.encoding, this.secret = this.publicKey = this.key = w, this.signature = new e(g.signature), this.secret.once("close", function() {
      !this.signature.writable && this.readable && this.verify();
    }.bind(this)), this.signature.once("close", function() {
      !this.secret.writable && this.readable && this.verify();
    }.bind(this));
  }
  return a.inherits(b, n), b.prototype.verify = function() {
    try {
      var _ = m(this.signature.buffer, this.algorithm, this.key.buffer), w = v(this.signature.buffer, this.encoding);
      return this.emit("done", _, w), this.emit("data", _), this.emit("end"), this.readable = !1, _;
    } catch (A) {
      this.readable = !1, this.emit("error", A), this.emit("close");
    }
  }, b.decode = v, b.isValid = y, b.verify = m, Ri = b, Ri;
}
var Hu;
function Qo() {
  if (Hu) return tt;
  Hu = 1;
  var t = Nv(), e = Lv(), r = [
    "HS256",
    "HS384",
    "HS512",
    "RS256",
    "RS384",
    "RS512",
    "PS256",
    "PS384",
    "PS512",
    "ES256",
    "ES384",
    "ES512"
  ];
  return tt.ALGORITHMS = r, tt.sign = t.sign, tt.verify = e.verify, tt.decode = e.decode, tt.isValid = e.isValid, tt.createSign = function(i) {
    return new t(i);
  }, tt.createVerify = function(i) {
    return new e(i);
  }, tt;
}
var Pi, Gu;
function _d() {
  if (Gu) return Pi;
  Gu = 1;
  var t = Qo();
  return Pi = function(e, r) {
    r = r || {};
    var n = t.decode(e, r);
    if (!n)
      return null;
    var i = n.payload;
    if (typeof i == "string")
      try {
        var a = JSON.parse(i);
        a !== null && typeof a == "object" && (i = a);
      } catch {
      }
    return r.complete === !0 ? {
      header: n.header,
      payload: i,
      signature: n.signature
    } : i;
  }, Pi;
}
var Ai, Ju;
function xn() {
  if (Ju) return Ai;
  Ju = 1;
  var t = function(e, r) {
    Error.call(this, e), Error.captureStackTrace && Error.captureStackTrace(this, this.constructor), this.name = "JsonWebTokenError", this.message = e, r && (this.inner = r);
  };
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, Ai = t, Ai;
}
var Mi, Ku;
function Sd() {
  if (Ku) return Mi;
  Ku = 1;
  var t = xn(), e = function(r, n) {
    t.call(this, r), this.name = "NotBeforeError", this.date = n;
  };
  return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Mi = e, Mi;
}
var ki, Xu;
function Od() {
  if (Xu) return ki;
  Xu = 1;
  var t = xn(), e = function(r, n) {
    t.call(this, r), this.name = "TokenExpiredError", this.expiredAt = n;
  };
  return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ki = e, ki;
}
var Ci, Zu;
function Fv() {
  if (Zu) return Ci;
  Zu = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, a = n * 365.25;
  Ci = function(c, l) {
    l = l || {};
    var d = typeof c;
    if (d === "string" && c.length > 0)
      return o(c);
    if (d === "number" && isFinite(c))
      return l.long ? u(c) : s(c);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(c)
    );
  };
  function o(c) {
    if (c = String(c), !(c.length > 100)) {
      var l = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        c
      );
      if (l) {
        var d = parseFloat(l[1]), y = (l[2] || "ms").toLowerCase();
        switch (y) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return d * a;
          case "weeks":
          case "week":
          case "w":
            return d * i;
          case "days":
          case "day":
          case "d":
            return d * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return d * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return d * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return d * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return d;
          default:
            return;
        }
      }
    }
  }
  function s(c) {
    var l = Math.abs(c);
    return l >= n ? Math.round(c / n) + "d" : l >= r ? Math.round(c / r) + "h" : l >= e ? Math.round(c / e) + "m" : l >= t ? Math.round(c / t) + "s" : c + "ms";
  }
  function u(c) {
    var l = Math.abs(c);
    return l >= n ? f(c, l, n, "day") : l >= r ? f(c, l, r, "hour") : l >= e ? f(c, l, e, "minute") : l >= t ? f(c, l, t, "second") : c + " ms";
  }
  function f(c, l, d, y) {
    var m = l >= d * 1.5;
    return Math.round(c / d) + " " + y + (m ? "s" : "");
  }
  return Ci;
}
var Ii, ec;
function Td() {
  if (ec) return Ii;
  ec = 1;
  var t = Fv();
  return Ii = function(e, r) {
    var n = r || Math.floor(Date.now() / 1e3);
    if (typeof e == "string") {
      var i = t(e);
      return typeof i > "u" ? void 0 : Math.floor(n + i / 1e3);
    } else return typeof e == "number" ? n + e : void 0;
  }, Ii;
}
var $r = { exports: {} }, xi, tc;
function Dn() {
  if (tc) return xi;
  tc = 1;
  const t = "2.0.0", e = 256, r = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991, n = 16, i = e - 6;
  return xi = {
    MAX_LENGTH: e,
    MAX_SAFE_COMPONENT_LENGTH: n,
    MAX_SAFE_BUILD_LENGTH: i,
    MAX_SAFE_INTEGER: r,
    RELEASE_TYPES: [
      "major",
      "premajor",
      "minor",
      "preminor",
      "patch",
      "prepatch",
      "prerelease"
    ],
    SEMVER_SPEC_VERSION: t,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  }, xi;
}
var Di, rc;
function Nn() {
  return rc || (rc = 1, Di = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {
  }), Di;
}
var nc;
function Mr() {
  return nc || (nc = 1, function(t, e) {
    const {
      MAX_SAFE_COMPONENT_LENGTH: r,
      MAX_SAFE_BUILD_LENGTH: n,
      MAX_LENGTH: i
    } = Dn(), a = Nn();
    e = t.exports = {};
    const o = e.re = [], s = e.safeRe = [], u = e.src = [], f = e.safeSrc = [], c = e.t = {};
    let l = 0;
    const d = "[a-zA-Z0-9-]", y = [
      ["\\s", 1],
      ["\\d", i],
      [d, n]
    ], m = (b) => {
      for (const [g, _] of y)
        b = b.split(`${g}*`).join(`${g}{0,${_}}`).split(`${g}+`).join(`${g}{1,${_}}`);
      return b;
    }, v = (b, g, _) => {
      const w = m(g), A = l++;
      a(b, A, g), c[b] = A, u[A] = g, f[A] = w, o[A] = new RegExp(g, _ ? "g" : void 0), s[A] = new RegExp(w, _ ? "g" : void 0);
    };
    v("NUMERICIDENTIFIER", "0|[1-9]\\d*"), v("NUMERICIDENTIFIERLOOSE", "\\d+"), v("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${d}*`), v("MAINVERSION", `(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})\\.(${u[c.NUMERICIDENTIFIER]})`), v("MAINVERSIONLOOSE", `(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})\\.(${u[c.NUMERICIDENTIFIERLOOSE]})`), v("PRERELEASEIDENTIFIER", `(?:${u[c.NUMERICIDENTIFIER]}|${u[c.NONNUMERICIDENTIFIER]})`), v("PRERELEASEIDENTIFIERLOOSE", `(?:${u[c.NUMERICIDENTIFIERLOOSE]}|${u[c.NONNUMERICIDENTIFIER]})`), v("PRERELEASE", `(?:-(${u[c.PRERELEASEIDENTIFIER]}(?:\\.${u[c.PRERELEASEIDENTIFIER]})*))`), v("PRERELEASELOOSE", `(?:-?(${u[c.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[c.PRERELEASEIDENTIFIERLOOSE]})*))`), v("BUILDIDENTIFIER", `${d}+`), v("BUILD", `(?:\\+(${u[c.BUILDIDENTIFIER]}(?:\\.${u[c.BUILDIDENTIFIER]})*))`), v("FULLPLAIN", `v?${u[c.MAINVERSION]}${u[c.PRERELEASE]}?${u[c.BUILD]}?`), v("FULL", `^${u[c.FULLPLAIN]}$`), v("LOOSEPLAIN", `[v=\\s]*${u[c.MAINVERSIONLOOSE]}${u[c.PRERELEASELOOSE]}?${u[c.BUILD]}?`), v("LOOSE", `^${u[c.LOOSEPLAIN]}$`), v("GTLT", "((?:<|>)?=?)"), v("XRANGEIDENTIFIERLOOSE", `${u[c.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), v("XRANGEIDENTIFIER", `${u[c.NUMERICIDENTIFIER]}|x|X|\\*`), v("XRANGEPLAIN", `[v=\\s]*(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:\\.(${u[c.XRANGEIDENTIFIER]})(?:${u[c.PRERELEASE]})?${u[c.BUILD]}?)?)?`), v("XRANGEPLAINLOOSE", `[v=\\s]*(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[c.XRANGEIDENTIFIERLOOSE]})(?:${u[c.PRERELEASELOOSE]})?${u[c.BUILD]}?)?)?`), v("XRANGE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAIN]}$`), v("XRANGELOOSE", `^${u[c.GTLT]}\\s*${u[c.XRANGEPLAINLOOSE]}$`), v("COERCEPLAIN", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?`), v("COERCE", `${u[c.COERCEPLAIN]}(?:$|[^\\d])`), v("COERCEFULL", u[c.COERCEPLAIN] + `(?:${u[c.PRERELEASE]})?(?:${u[c.BUILD]})?(?:$|[^\\d])`), v("COERCERTL", u[c.COERCE], !0), v("COERCERTLFULL", u[c.COERCEFULL], !0), v("LONETILDE", "(?:~>?)"), v("TILDETRIM", `(\\s*)${u[c.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", v("TILDE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAIN]}$`), v("TILDELOOSE", `^${u[c.LONETILDE]}${u[c.XRANGEPLAINLOOSE]}$`), v("LONECARET", "(?:\\^)"), v("CARETTRIM", `(\\s*)${u[c.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", v("CARET", `^${u[c.LONECARET]}${u[c.XRANGEPLAIN]}$`), v("CARETLOOSE", `^${u[c.LONECARET]}${u[c.XRANGEPLAINLOOSE]}$`), v("COMPARATORLOOSE", `^${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]})$|^$`), v("COMPARATOR", `^${u[c.GTLT]}\\s*(${u[c.FULLPLAIN]})$|^$`), v("COMPARATORTRIM", `(\\s*)${u[c.GTLT]}\\s*(${u[c.LOOSEPLAIN]}|${u[c.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", v("HYPHENRANGE", `^\\s*(${u[c.XRANGEPLAIN]})\\s+-\\s+(${u[c.XRANGEPLAIN]})\\s*$`), v("HYPHENRANGELOOSE", `^\\s*(${u[c.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[c.XRANGEPLAINLOOSE]})\\s*$`), v("STAR", "(<|>)?=?\\s*\\*"), v("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), v("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  }($r, $r.exports)), $r.exports;
}
var Ni, ic;
function Yo() {
  if (ic) return Ni;
  ic = 1;
  const t = Object.freeze({ loose: !0 }), e = Object.freeze({});
  return Ni = (n) => n ? typeof n != "object" ? t : n : e, Ni;
}
var Li, ac;
function Rd() {
  if (ac) return Li;
  ac = 1;
  const t = /^[0-9]+$/, e = (n, i) => {
    const a = t.test(n), o = t.test(i);
    return a && o && (n = +n, i = +i), n === i ? 0 : a && !o ? -1 : o && !a ? 1 : n < i ? -1 : 1;
  };
  return Li = {
    compareIdentifiers: e,
    rcompareIdentifiers: (n, i) => e(i, n)
  }, Li;
}
var Fi, oc;
function je() {
  if (oc) return Fi;
  oc = 1;
  const t = Nn(), { MAX_LENGTH: e, MAX_SAFE_INTEGER: r } = Dn(), { safeRe: n, safeSrc: i, t: a } = Mr(), o = Yo(), { compareIdentifiers: s } = Rd();
  class u {
    constructor(c, l) {
      if (l = o(l), c instanceof u) {
        if (c.loose === !!l.loose && c.includePrerelease === !!l.includePrerelease)
          return c;
        c = c.version;
      } else if (typeof c != "string")
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof c}".`);
      if (c.length > e)
        throw new TypeError(
          `version is longer than ${e} characters`
        );
      t("SemVer", c, l), this.options = l, this.loose = !!l.loose, this.includePrerelease = !!l.includePrerelease;
      const d = c.trim().match(l.loose ? n[a.LOOSE] : n[a.FULL]);
      if (!d)
        throw new TypeError(`Invalid Version: ${c}`);
      if (this.raw = c, this.major = +d[1], this.minor = +d[2], this.patch = +d[3], this.major > r || this.major < 0)
        throw new TypeError("Invalid major version");
      if (this.minor > r || this.minor < 0)
        throw new TypeError("Invalid minor version");
      if (this.patch > r || this.patch < 0)
        throw new TypeError("Invalid patch version");
      d[4] ? this.prerelease = d[4].split(".").map((y) => {
        if (/^[0-9]+$/.test(y)) {
          const m = +y;
          if (m >= 0 && m < r)
            return m;
        }
        return y;
      }) : this.prerelease = [], this.build = d[5] ? d[5].split(".") : [], this.format();
    }
    format() {
      return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
    }
    toString() {
      return this.version;
    }
    compare(c) {
      if (t("SemVer.compare", this.version, this.options, c), !(c instanceof u)) {
        if (typeof c == "string" && c === this.version)
          return 0;
        c = new u(c, this.options);
      }
      return c.version === this.version ? 0 : this.compareMain(c) || this.comparePre(c);
    }
    compareMain(c) {
      return c instanceof u || (c = new u(c, this.options)), s(this.major, c.major) || s(this.minor, c.minor) || s(this.patch, c.patch);
    }
    comparePre(c) {
      if (c instanceof u || (c = new u(c, this.options)), this.prerelease.length && !c.prerelease.length)
        return -1;
      if (!this.prerelease.length && c.prerelease.length)
        return 1;
      if (!this.prerelease.length && !c.prerelease.length)
        return 0;
      let l = 0;
      do {
        const d = this.prerelease[l], y = c.prerelease[l];
        if (t("prerelease compare", l, d, y), d === void 0 && y === void 0)
          return 0;
        if (y === void 0)
          return 1;
        if (d === void 0)
          return -1;
        if (d === y)
          continue;
        return s(d, y);
      } while (++l);
    }
    compareBuild(c) {
      c instanceof u || (c = new u(c, this.options));
      let l = 0;
      do {
        const d = this.build[l], y = c.build[l];
        if (t("build compare", l, d, y), d === void 0 && y === void 0)
          return 0;
        if (y === void 0)
          return 1;
        if (d === void 0)
          return -1;
        if (d === y)
          continue;
        return s(d, y);
      } while (++l);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(c, l, d) {
      if (c.startsWith("pre")) {
        if (!l && d === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (l) {
          const y = new RegExp(`^${this.options.loose ? i[a.PRERELEASELOOSE] : i[a.PRERELEASE]}$`), m = `-${l}`.match(y);
          if (!m || m[1] !== l)
            throw new Error(`invalid identifier: ${l}`);
        }
      }
      switch (c) {
        case "premajor":
          this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", l, d);
          break;
        case "preminor":
          this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", l, d);
          break;
        case "prepatch":
          this.prerelease.length = 0, this.inc("patch", l, d), this.inc("pre", l, d);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          this.prerelease.length === 0 && this.inc("patch", l, d), this.inc("pre", l, d);
          break;
        case "release":
          if (this.prerelease.length === 0)
            throw new Error(`version ${this.raw} is not a prerelease`);
          this.prerelease.length = 0;
          break;
        case "major":
          (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
          break;
        case "minor":
          (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
          break;
        case "patch":
          this.prerelease.length === 0 && this.patch++, this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const y = Number(d) ? 1 : 0;
          if (this.prerelease.length === 0)
            this.prerelease = [y];
          else {
            let m = this.prerelease.length;
            for (; --m >= 0; )
              typeof this.prerelease[m] == "number" && (this.prerelease[m]++, m = -2);
            if (m === -1) {
              if (l === this.prerelease.join(".") && d === !1)
                throw new Error("invalid increment argument: identifier already exists");
              this.prerelease.push(y);
            }
          }
          if (l) {
            let m = [l, y];
            d === !1 && (m = [l]), s(this.prerelease[0], l) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = m) : this.prerelease = m;
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${c}`);
      }
      return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
    }
  }
  return Fi = u, Fi;
}
var ji, sc;
function Zt() {
  if (sc) return ji;
  sc = 1;
  const t = je();
  return ji = (r, n, i = !1) => {
    if (r instanceof t)
      return r;
    try {
      return new t(r, n);
    } catch (a) {
      if (!i)
        return null;
      throw a;
    }
  }, ji;
}
var qi, uc;
function jv() {
  if (uc) return qi;
  uc = 1;
  const t = Zt();
  return qi = (r, n) => {
    const i = t(r, n);
    return i ? i.version : null;
  }, qi;
}
var $i, cc;
function qv() {
  if (cc) return $i;
  cc = 1;
  const t = Zt();
  return $i = (r, n) => {
    const i = t(r.trim().replace(/^[=v]+/, ""), n);
    return i ? i.version : null;
  }, $i;
}
var Bi, fc;
function $v() {
  if (fc) return Bi;
  fc = 1;
  const t = je();
  return Bi = (r, n, i, a, o) => {
    typeof i == "string" && (o = a, a = i, i = void 0);
    try {
      return new t(
        r instanceof t ? r.version : r,
        i
      ).inc(n, a, o).version;
    } catch {
      return null;
    }
  }, Bi;
}
var Ui, lc;
function Bv() {
  if (lc) return Ui;
  lc = 1;
  const t = Zt();
  return Ui = (r, n) => {
    const i = t(r, null, !0), a = t(n, null, !0), o = i.compare(a);
    if (o === 0)
      return null;
    const s = o > 0, u = s ? i : a, f = s ? a : i, c = !!u.prerelease.length;
    if (!!f.prerelease.length && !c) {
      if (!f.patch && !f.minor)
        return "major";
      if (f.compareMain(u) === 0)
        return f.minor && !f.patch ? "minor" : "patch";
    }
    const d = c ? "pre" : "";
    return i.major !== a.major ? d + "major" : i.minor !== a.minor ? d + "minor" : i.patch !== a.patch ? d + "patch" : "prerelease";
  }, Ui;
}
var Vi, dc;
function Uv() {
  if (dc) return Vi;
  dc = 1;
  const t = je();
  return Vi = (r, n) => new t(r, n).major, Vi;
}
var Wi, hc;
function Vv() {
  if (hc) return Wi;
  hc = 1;
  const t = je();
  return Wi = (r, n) => new t(r, n).minor, Wi;
}
var zi, pc;
function Wv() {
  if (pc) return zi;
  pc = 1;
  const t = je();
  return zi = (r, n) => new t(r, n).patch, zi;
}
var Qi, yc;
function zv() {
  if (yc) return Qi;
  yc = 1;
  const t = Zt();
  return Qi = (r, n) => {
    const i = t(r, n);
    return i && i.prerelease.length ? i.prerelease : null;
  }, Qi;
}
var Yi, mc;
function He() {
  if (mc) return Yi;
  mc = 1;
  const t = je();
  return Yi = (r, n, i) => new t(r, i).compare(new t(n, i)), Yi;
}
var Hi, gc;
function Qv() {
  if (gc) return Hi;
  gc = 1;
  const t = He();
  return Hi = (r, n, i) => t(n, r, i), Hi;
}
var Gi, vc;
function Yv() {
  if (vc) return Gi;
  vc = 1;
  const t = He();
  return Gi = (r, n) => t(r, n, !0), Gi;
}
var Ji, bc;
function Ho() {
  if (bc) return Ji;
  bc = 1;
  const t = je();
  return Ji = (r, n, i) => {
    const a = new t(r, i), o = new t(n, i);
    return a.compare(o) || a.compareBuild(o);
  }, Ji;
}
var Ki, Ec;
function Hv() {
  if (Ec) return Ki;
  Ec = 1;
  const t = Ho();
  return Ki = (r, n) => r.sort((i, a) => t(i, a, n)), Ki;
}
var Xi, wc;
function Gv() {
  if (wc) return Xi;
  wc = 1;
  const t = Ho();
  return Xi = (r, n) => r.sort((i, a) => t(a, i, n)), Xi;
}
var Zi, _c;
function Ln() {
  if (_c) return Zi;
  _c = 1;
  const t = He();
  return Zi = (r, n, i) => t(r, n, i) > 0, Zi;
}
var ea, Sc;
function Go() {
  if (Sc) return ea;
  Sc = 1;
  const t = He();
  return ea = (r, n, i) => t(r, n, i) < 0, ea;
}
var ta, Oc;
function Pd() {
  if (Oc) return ta;
  Oc = 1;
  const t = He();
  return ta = (r, n, i) => t(r, n, i) === 0, ta;
}
var ra, Tc;
function Ad() {
  if (Tc) return ra;
  Tc = 1;
  const t = He();
  return ra = (r, n, i) => t(r, n, i) !== 0, ra;
}
var na, Rc;
function Jo() {
  if (Rc) return na;
  Rc = 1;
  const t = He();
  return na = (r, n, i) => t(r, n, i) >= 0, na;
}
var ia, Pc;
function Ko() {
  if (Pc) return ia;
  Pc = 1;
  const t = He();
  return ia = (r, n, i) => t(r, n, i) <= 0, ia;
}
var aa, Ac;
function Md() {
  if (Ac) return aa;
  Ac = 1;
  const t = Pd(), e = Ad(), r = Ln(), n = Jo(), i = Go(), a = Ko();
  return aa = (s, u, f, c) => {
    switch (u) {
      case "===":
        return typeof s == "object" && (s = s.version), typeof f == "object" && (f = f.version), s === f;
      case "!==":
        return typeof s == "object" && (s = s.version), typeof f == "object" && (f = f.version), s !== f;
      case "":
      case "=":
      case "==":
        return t(s, f, c);
      case "!=":
        return e(s, f, c);
      case ">":
        return r(s, f, c);
      case ">=":
        return n(s, f, c);
      case "<":
        return i(s, f, c);
      case "<=":
        return a(s, f, c);
      default:
        throw new TypeError(`Invalid operator: ${u}`);
    }
  }, aa;
}
var oa, Mc;
function Jv() {
  if (Mc) return oa;
  Mc = 1;
  const t = je(), e = Zt(), { safeRe: r, t: n } = Mr();
  return oa = (a, o) => {
    if (a instanceof t)
      return a;
    if (typeof a == "number" && (a = String(a)), typeof a != "string")
      return null;
    o = o || {};
    let s = null;
    if (!o.rtl)
      s = a.match(o.includePrerelease ? r[n.COERCEFULL] : r[n.COERCE]);
    else {
      const y = o.includePrerelease ? r[n.COERCERTLFULL] : r[n.COERCERTL];
      let m;
      for (; (m = y.exec(a)) && (!s || s.index + s[0].length !== a.length); )
        (!s || m.index + m[0].length !== s.index + s[0].length) && (s = m), y.lastIndex = m.index + m[1].length + m[2].length;
      y.lastIndex = -1;
    }
    if (s === null)
      return null;
    const u = s[2], f = s[3] || "0", c = s[4] || "0", l = o.includePrerelease && s[5] ? `-${s[5]}` : "", d = o.includePrerelease && s[6] ? `+${s[6]}` : "";
    return e(`${u}.${f}.${c}${l}${d}`, o);
  }, oa;
}
var sa, kc;
function Kv() {
  if (kc) return sa;
  kc = 1;
  class t {
    constructor() {
      this.max = 1e3, this.map = /* @__PURE__ */ new Map();
    }
    get(r) {
      const n = this.map.get(r);
      if (n !== void 0)
        return this.map.delete(r), this.map.set(r, n), n;
    }
    delete(r) {
      return this.map.delete(r);
    }
    set(r, n) {
      if (!this.delete(r) && n !== void 0) {
        if (this.map.size >= this.max) {
          const a = this.map.keys().next().value;
          this.delete(a);
        }
        this.map.set(r, n);
      }
      return this;
    }
  }
  return sa = t, sa;
}
var ua, Cc;
function Ge() {
  if (Cc) return ua;
  Cc = 1;
  const t = /\s+/g;
  class e {
    constructor(M, N) {
      if (N = i(N), M instanceof e)
        return M.loose === !!N.loose && M.includePrerelease === !!N.includePrerelease ? M : new e(M.raw, N);
      if (M instanceof a)
        return this.raw = M.value, this.set = [[M]], this.formatted = void 0, this;
      if (this.options = N, this.loose = !!N.loose, this.includePrerelease = !!N.includePrerelease, this.raw = M.trim().replace(t, " "), this.set = this.raw.split("||").map((j) => this.parseRange(j.trim())).filter((j) => j.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const j = this.set[0];
        if (this.set = this.set.filter((q) => !v(q[0])), this.set.length === 0)
          this.set = [j];
        else if (this.set.length > 1) {
          for (const q of this.set)
            if (q.length === 1 && b(q[0])) {
              this.set = [q];
              break;
            }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let M = 0; M < this.set.length; M++) {
          M > 0 && (this.formatted += "||");
          const N = this.set[M];
          for (let j = 0; j < N.length; j++)
            j > 0 && (this.formatted += " "), this.formatted += N[j].toString().trim();
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(M) {
      const j = ((this.options.includePrerelease && y) | (this.options.loose && m)) + ":" + M, q = n.get(j);
      if (q)
        return q;
      const V = this.options.loose, O = V ? u[f.HYPHENRANGELOOSE] : u[f.HYPHENRANGE];
      M = M.replace(O, z(this.options.includePrerelease)), o("hyphen replace", M), M = M.replace(u[f.COMPARATORTRIM], c), o("comparator trim", M), M = M.replace(u[f.TILDETRIM], l), o("tilde trim", M), M = M.replace(u[f.CARETTRIM], d), o("caret trim", M);
      let E = M.split(" ").map((W) => _(W, this.options)).join(" ").split(/\s+/).map((W) => J(W, this.options));
      V && (E = E.filter((W) => (o("loose invalid filter", W, this.options), !!W.match(u[f.COMPARATORLOOSE])))), o("range list", E);
      const R = /* @__PURE__ */ new Map(), I = E.map((W) => new a(W, this.options));
      for (const W of I) {
        if (v(W))
          return [W];
        R.set(W.value, W);
      }
      R.size > 1 && R.has("") && R.delete("");
      const U = [...R.values()];
      return n.set(j, U), U;
    }
    intersects(M, N) {
      if (!(M instanceof e))
        throw new TypeError("a Range is required");
      return this.set.some((j) => g(j, N) && M.set.some((q) => g(q, N) && j.every((V) => q.every((O) => V.intersects(O, N)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(M) {
      if (!M)
        return !1;
      if (typeof M == "string")
        try {
          M = new s(M, this.options);
        } catch {
          return !1;
        }
      for (let N = 0; N < this.set.length; N++)
        if (ee(this.set[N], M, this.options))
          return !0;
      return !1;
    }
  }
  ua = e;
  const r = Kv(), n = new r(), i = Yo(), a = Fn(), o = Nn(), s = je(), {
    safeRe: u,
    t: f,
    comparatorTrimReplace: c,
    tildeTrimReplace: l,
    caretTrimReplace: d
  } = Mr(), { FLAG_INCLUDE_PRERELEASE: y, FLAG_LOOSE: m } = Dn(), v = (x) => x.value === "<0.0.0-0", b = (x) => x.value === "", g = (x, M) => {
    let N = !0;
    const j = x.slice();
    let q = j.pop();
    for (; N && j.length; )
      N = j.every((V) => q.intersects(V, M)), q = j.pop();
    return N;
  }, _ = (x, M) => (o("comp", x, M), x = C(x, M), o("caret", x), x = A(x, M), o("tildes", x), x = L(x, M), o("xrange", x), x = G(x, M), o("stars", x), x), w = (x) => !x || x.toLowerCase() === "x" || x === "*", A = (x, M) => x.trim().split(/\s+/).map((N) => P(N, M)).join(" "), P = (x, M) => {
    const N = M.loose ? u[f.TILDELOOSE] : u[f.TILDE];
    return x.replace(N, (j, q, V, O, E) => {
      o("tilde", x, j, q, V, O, E);
      let R;
      return w(q) ? R = "" : w(V) ? R = `>=${q}.0.0 <${+q + 1}.0.0-0` : w(O) ? R = `>=${q}.${V}.0 <${q}.${+V + 1}.0-0` : E ? (o("replaceTilde pr", E), R = `>=${q}.${V}.${O}-${E} <${q}.${+V + 1}.0-0`) : R = `>=${q}.${V}.${O} <${q}.${+V + 1}.0-0`, o("tilde return", R), R;
    });
  }, C = (x, M) => x.trim().split(/\s+/).map((N) => B(N, M)).join(" "), B = (x, M) => {
    o("caret", x, M);
    const N = M.loose ? u[f.CARETLOOSE] : u[f.CARET], j = M.includePrerelease ? "-0" : "";
    return x.replace(N, (q, V, O, E, R) => {
      o("caret", x, q, V, O, E, R);
      let I;
      return w(V) ? I = "" : w(O) ? I = `>=${V}.0.0${j} <${+V + 1}.0.0-0` : w(E) ? V === "0" ? I = `>=${V}.${O}.0${j} <${V}.${+O + 1}.0-0` : I = `>=${V}.${O}.0${j} <${+V + 1}.0.0-0` : R ? (o("replaceCaret pr", R), V === "0" ? O === "0" ? I = `>=${V}.${O}.${E}-${R} <${V}.${O}.${+E + 1}-0` : I = `>=${V}.${O}.${E}-${R} <${V}.${+O + 1}.0-0` : I = `>=${V}.${O}.${E}-${R} <${+V + 1}.0.0-0`) : (o("no pr"), V === "0" ? O === "0" ? I = `>=${V}.${O}.${E}${j} <${V}.${O}.${+E + 1}-0` : I = `>=${V}.${O}.${E}${j} <${V}.${+O + 1}.0-0` : I = `>=${V}.${O}.${E} <${+V + 1}.0.0-0`), o("caret return", I), I;
    });
  }, L = (x, M) => (o("replaceXRanges", x, M), x.split(/\s+/).map((N) => Y(N, M)).join(" ")), Y = (x, M) => {
    x = x.trim();
    const N = M.loose ? u[f.XRANGELOOSE] : u[f.XRANGE];
    return x.replace(N, (j, q, V, O, E, R) => {
      o("xRange", x, j, q, V, O, E, R);
      const I = w(V), U = I || w(O), W = U || w(E), Z = W;
      return q === "=" && Z && (q = ""), R = M.includePrerelease ? "-0" : "", I ? q === ">" || q === "<" ? j = "<0.0.0-0" : j = "*" : q && Z ? (U && (O = 0), E = 0, q === ">" ? (q = ">=", U ? (V = +V + 1, O = 0, E = 0) : (O = +O + 1, E = 0)) : q === "<=" && (q = "<", U ? V = +V + 1 : O = +O + 1), q === "<" && (R = "-0"), j = `${q + V}.${O}.${E}${R}`) : U ? j = `>=${V}.0.0${R} <${+V + 1}.0.0-0` : W && (j = `>=${V}.${O}.0${R} <${V}.${+O + 1}.0-0`), o("xRange return", j), j;
    });
  }, G = (x, M) => (o("replaceStars", x, M), x.trim().replace(u[f.STAR], "")), J = (x, M) => (o("replaceGTE0", x, M), x.trim().replace(u[M.includePrerelease ? f.GTE0PRE : f.GTE0], "")), z = (x) => (M, N, j, q, V, O, E, R, I, U, W, Z) => (w(j) ? N = "" : w(q) ? N = `>=${j}.0.0${x ? "-0" : ""}` : w(V) ? N = `>=${j}.${q}.0${x ? "-0" : ""}` : O ? N = `>=${N}` : N = `>=${N}${x ? "-0" : ""}`, w(I) ? R = "" : w(U) ? R = `<${+I + 1}.0.0-0` : w(W) ? R = `<${I}.${+U + 1}.0-0` : Z ? R = `<=${I}.${U}.${W}-${Z}` : x ? R = `<${I}.${U}.${+W + 1}-0` : R = `<=${R}`, `${N} ${R}`.trim()), ee = (x, M, N) => {
    for (let j = 0; j < x.length; j++)
      if (!x[j].test(M))
        return !1;
    if (M.prerelease.length && !N.includePrerelease) {
      for (let j = 0; j < x.length; j++)
        if (o(x[j].semver), x[j].semver !== a.ANY && x[j].semver.prerelease.length > 0) {
          const q = x[j].semver;
          if (q.major === M.major && q.minor === M.minor && q.patch === M.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return ua;
}
var ca, Ic;
function Fn() {
  if (Ic) return ca;
  Ic = 1;
  const t = Symbol("SemVer ANY");
  class e {
    static get ANY() {
      return t;
    }
    constructor(c, l) {
      if (l = r(l), c instanceof e) {
        if (c.loose === !!l.loose)
          return c;
        c = c.value;
      }
      c = c.trim().split(/\s+/).join(" "), o("comparator", c, l), this.options = l, this.loose = !!l.loose, this.parse(c), this.semver === t ? this.value = "" : this.value = this.operator + this.semver.version, o("comp", this);
    }
    parse(c) {
      const l = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR], d = c.match(l);
      if (!d)
        throw new TypeError(`Invalid comparator: ${c}`);
      this.operator = d[1] !== void 0 ? d[1] : "", this.operator === "=" && (this.operator = ""), d[2] ? this.semver = new s(d[2], this.options.loose) : this.semver = t;
    }
    toString() {
      return this.value;
    }
    test(c) {
      if (o("Comparator.test", c, this.options.loose), this.semver === t || c === t)
        return !0;
      if (typeof c == "string")
        try {
          c = new s(c, this.options);
        } catch {
          return !1;
        }
      return a(c, this.operator, this.semver, this.options);
    }
    intersects(c, l) {
      if (!(c instanceof e))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new u(c.value, l).test(this.value) : c.operator === "" ? c.value === "" ? !0 : new u(this.value, l).test(c.semver) : (l = r(l), l.includePrerelease && (this.value === "<0.0.0-0" || c.value === "<0.0.0-0") || !l.includePrerelease && (this.value.startsWith("<0.0.0") || c.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && c.operator.startsWith(">") || this.operator.startsWith("<") && c.operator.startsWith("<") || this.semver.version === c.semver.version && this.operator.includes("=") && c.operator.includes("=") || a(this.semver, "<", c.semver, l) && this.operator.startsWith(">") && c.operator.startsWith("<") || a(this.semver, ">", c.semver, l) && this.operator.startsWith("<") && c.operator.startsWith(">")));
    }
  }
  ca = e;
  const r = Yo(), { safeRe: n, t: i } = Mr(), a = Md(), o = Nn(), s = je(), u = Ge();
  return ca;
}
var fa, xc;
function jn() {
  if (xc) return fa;
  xc = 1;
  const t = Ge();
  return fa = (r, n, i) => {
    try {
      n = new t(n, i);
    } catch {
      return !1;
    }
    return n.test(r);
  }, fa;
}
var la, Dc;
function Xv() {
  if (Dc) return la;
  Dc = 1;
  const t = Ge();
  return la = (r, n) => new t(r, n).set.map((i) => i.map((a) => a.value).join(" ").trim().split(" ")), la;
}
var da, Nc;
function Zv() {
  if (Nc) return da;
  Nc = 1;
  const t = je(), e = Ge();
  return da = (n, i, a) => {
    let o = null, s = null, u = null;
    try {
      u = new e(i, a);
    } catch {
      return null;
    }
    return n.forEach((f) => {
      u.test(f) && (!o || s.compare(f) === -1) && (o = f, s = new t(o, a));
    }), o;
  }, da;
}
var ha, Lc;
function eb() {
  if (Lc) return ha;
  Lc = 1;
  const t = je(), e = Ge();
  return ha = (n, i, a) => {
    let o = null, s = null, u = null;
    try {
      u = new e(i, a);
    } catch {
      return null;
    }
    return n.forEach((f) => {
      u.test(f) && (!o || s.compare(f) === 1) && (o = f, s = new t(o, a));
    }), o;
  }, ha;
}
var pa, Fc;
function tb() {
  if (Fc) return pa;
  Fc = 1;
  const t = je(), e = Ge(), r = Ln();
  return pa = (i, a) => {
    i = new e(i, a);
    let o = new t("0.0.0");
    if (i.test(o) || (o = new t("0.0.0-0"), i.test(o)))
      return o;
    o = null;
    for (let s = 0; s < i.set.length; ++s) {
      const u = i.set[s];
      let f = null;
      u.forEach((c) => {
        const l = new t(c.semver.version);
        switch (c.operator) {
          case ">":
            l.prerelease.length === 0 ? l.patch++ : l.prerelease.push(0), l.raw = l.format();
          /* fallthrough */
          case "":
          case ">=":
            (!f || r(l, f)) && (f = l);
            break;
          case "<":
          case "<=":
            break;
          /* istanbul ignore next */
          default:
            throw new Error(`Unexpected operation: ${c.operator}`);
        }
      }), f && (!o || r(o, f)) && (o = f);
    }
    return o && i.test(o) ? o : null;
  }, pa;
}
var ya, jc;
function rb() {
  if (jc) return ya;
  jc = 1;
  const t = Ge();
  return ya = (r, n) => {
    try {
      return new t(r, n).range || "*";
    } catch {
      return null;
    }
  }, ya;
}
var ma, qc;
function Xo() {
  if (qc) return ma;
  qc = 1;
  const t = je(), e = Fn(), { ANY: r } = e, n = Ge(), i = jn(), a = Ln(), o = Go(), s = Ko(), u = Jo();
  return ma = (c, l, d, y) => {
    c = new t(c, y), l = new n(l, y);
    let m, v, b, g, _;
    switch (d) {
      case ">":
        m = a, v = s, b = o, g = ">", _ = ">=";
        break;
      case "<":
        m = o, v = u, b = a, g = "<", _ = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (i(c, l, y))
      return !1;
    for (let w = 0; w < l.set.length; ++w) {
      const A = l.set[w];
      let P = null, C = null;
      if (A.forEach((B) => {
        B.semver === r && (B = new e(">=0.0.0")), P = P || B, C = C || B, m(B.semver, P.semver, y) ? P = B : b(B.semver, C.semver, y) && (C = B);
      }), P.operator === g || P.operator === _ || (!C.operator || C.operator === g) && v(c, C.semver))
        return !1;
      if (C.operator === _ && b(c, C.semver))
        return !1;
    }
    return !0;
  }, ma;
}
var ga, $c;
function nb() {
  if ($c) return ga;
  $c = 1;
  const t = Xo();
  return ga = (r, n, i) => t(r, n, ">", i), ga;
}
var va, Bc;
function ib() {
  if (Bc) return va;
  Bc = 1;
  const t = Xo();
  return va = (r, n, i) => t(r, n, "<", i), va;
}
var ba, Uc;
function ab() {
  if (Uc) return ba;
  Uc = 1;
  const t = Ge();
  return ba = (r, n, i) => (r = new t(r, i), n = new t(n, i), r.intersects(n, i)), ba;
}
var Ea, Vc;
function ob() {
  if (Vc) return Ea;
  Vc = 1;
  const t = jn(), e = He();
  return Ea = (r, n, i) => {
    const a = [];
    let o = null, s = null;
    const u = r.sort((d, y) => e(d, y, i));
    for (const d of u)
      t(d, n, i) ? (s = d, o || (o = d)) : (s && a.push([o, s]), s = null, o = null);
    o && a.push([o, null]);
    const f = [];
    for (const [d, y] of a)
      d === y ? f.push(d) : !y && d === u[0] ? f.push("*") : y ? d === u[0] ? f.push(`<=${y}`) : f.push(`${d} - ${y}`) : f.push(`>=${d}`);
    const c = f.join(" || "), l = typeof n.raw == "string" ? n.raw : String(n);
    return c.length < l.length ? c : n;
  }, Ea;
}
var wa, Wc;
function sb() {
  if (Wc) return wa;
  Wc = 1;
  const t = Ge(), e = Fn(), { ANY: r } = e, n = jn(), i = He(), a = (l, d, y = {}) => {
    if (l === d)
      return !0;
    l = new t(l, y), d = new t(d, y);
    let m = !1;
    e: for (const v of l.set) {
      for (const b of d.set) {
        const g = u(v, b, y);
        if (m = m || g !== null, g)
          continue e;
      }
      if (m)
        return !1;
    }
    return !0;
  }, o = [new e(">=0.0.0-0")], s = [new e(">=0.0.0")], u = (l, d, y) => {
    if (l === d)
      return !0;
    if (l.length === 1 && l[0].semver === r) {
      if (d.length === 1 && d[0].semver === r)
        return !0;
      y.includePrerelease ? l = o : l = s;
    }
    if (d.length === 1 && d[0].semver === r) {
      if (y.includePrerelease)
        return !0;
      d = s;
    }
    const m = /* @__PURE__ */ new Set();
    let v, b;
    for (const L of l)
      L.operator === ">" || L.operator === ">=" ? v = f(v, L, y) : L.operator === "<" || L.operator === "<=" ? b = c(b, L, y) : m.add(L.semver);
    if (m.size > 1)
      return null;
    let g;
    if (v && b) {
      if (g = i(v.semver, b.semver, y), g > 0)
        return null;
      if (g === 0 && (v.operator !== ">=" || b.operator !== "<="))
        return null;
    }
    for (const L of m) {
      if (v && !n(L, String(v), y) || b && !n(L, String(b), y))
        return null;
      for (const Y of d)
        if (!n(L, String(Y), y))
          return !1;
      return !0;
    }
    let _, w, A, P, C = b && !y.includePrerelease && b.semver.prerelease.length ? b.semver : !1, B = v && !y.includePrerelease && v.semver.prerelease.length ? v.semver : !1;
    C && C.prerelease.length === 1 && b.operator === "<" && C.prerelease[0] === 0 && (C = !1);
    for (const L of d) {
      if (P = P || L.operator === ">" || L.operator === ">=", A = A || L.operator === "<" || L.operator === "<=", v) {
        if (B && L.semver.prerelease && L.semver.prerelease.length && L.semver.major === B.major && L.semver.minor === B.minor && L.semver.patch === B.patch && (B = !1), L.operator === ">" || L.operator === ">=") {
          if (_ = f(v, L, y), _ === L && _ !== v)
            return !1;
        } else if (v.operator === ">=" && !n(v.semver, String(L), y))
          return !1;
      }
      if (b) {
        if (C && L.semver.prerelease && L.semver.prerelease.length && L.semver.major === C.major && L.semver.minor === C.minor && L.semver.patch === C.patch && (C = !1), L.operator === "<" || L.operator === "<=") {
          if (w = c(b, L, y), w === L && w !== b)
            return !1;
        } else if (b.operator === "<=" && !n(b.semver, String(L), y))
          return !1;
      }
      if (!L.operator && (b || v) && g !== 0)
        return !1;
    }
    return !(v && A && !b && g !== 0 || b && P && !v && g !== 0 || B || C);
  }, f = (l, d, y) => {
    if (!l)
      return d;
    const m = i(l.semver, d.semver, y);
    return m > 0 ? l : m < 0 || d.operator === ">" && l.operator === ">=" ? d : l;
  }, c = (l, d, y) => {
    if (!l)
      return d;
    const m = i(l.semver, d.semver, y);
    return m < 0 ? l : m > 0 || d.operator === "<" && l.operator === "<=" ? d : l;
  };
  return wa = a, wa;
}
var _a, zc;
function Zo() {
  if (zc) return _a;
  zc = 1;
  const t = Mr(), e = Dn(), r = je(), n = Rd(), i = Zt(), a = jv(), o = qv(), s = $v(), u = Bv(), f = Uv(), c = Vv(), l = Wv(), d = zv(), y = He(), m = Qv(), v = Yv(), b = Ho(), g = Hv(), _ = Gv(), w = Ln(), A = Go(), P = Pd(), C = Ad(), B = Jo(), L = Ko(), Y = Md(), G = Jv(), J = Fn(), z = Ge(), ee = jn(), x = Xv(), M = Zv(), N = eb(), j = tb(), q = rb(), V = Xo(), O = nb(), E = ib(), R = ab(), I = ob(), U = sb();
  return _a = {
    parse: i,
    valid: a,
    clean: o,
    inc: s,
    diff: u,
    major: f,
    minor: c,
    patch: l,
    prerelease: d,
    compare: y,
    rcompare: m,
    compareLoose: v,
    compareBuild: b,
    sort: g,
    rsort: _,
    gt: w,
    lt: A,
    eq: P,
    neq: C,
    gte: B,
    lte: L,
    cmp: Y,
    coerce: G,
    Comparator: J,
    Range: z,
    satisfies: ee,
    toComparators: x,
    maxSatisfying: M,
    minSatisfying: N,
    minVersion: j,
    validRange: q,
    outside: V,
    gtr: O,
    ltr: E,
    intersects: R,
    simplifyRange: I,
    subset: U,
    SemVer: r,
    re: t.re,
    src: t.src,
    tokens: t.t,
    SEMVER_SPEC_VERSION: e.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: e.RELEASE_TYPES,
    compareIdentifiers: n.compareIdentifiers,
    rcompareIdentifiers: n.rcompareIdentifiers
  }, _a;
}
var Sa, Qc;
function ub() {
  return Qc || (Qc = 1, Sa = Zo().satisfies(process.version, ">=15.7.0")), Sa;
}
var Oa, Yc;
function cb() {
  return Yc || (Yc = 1, Oa = Zo().satisfies(process.version, ">=16.9.0")), Oa;
}
var Ta, Hc;
function kd() {
  if (Hc) return Ta;
  Hc = 1;
  const t = ub(), e = cb(), r = {
    ec: ["ES256", "ES384", "ES512"],
    rsa: ["RS256", "PS256", "RS384", "PS384", "RS512", "PS512"],
    "rsa-pss": ["PS256", "PS384", "PS512"]
  }, n = {
    ES256: "prime256v1",
    ES384: "secp384r1",
    ES512: "secp521r1"
  };
  return Ta = function(i, a) {
    if (!i || !a) return;
    const o = a.asymmetricKeyType;
    if (!o) return;
    const s = r[o];
    if (!s)
      throw new Error(`Unknown key type "${o}".`);
    if (!s.includes(i))
      throw new Error(`"alg" parameter for "${o}" key type must be one of: ${s.join(", ")}.`);
    if (t)
      switch (o) {
        case "ec":
          const u = a.asymmetricKeyDetails.namedCurve, f = n[i];
          if (u !== f)
            throw new Error(`"alg" parameter "${i}" requires curve "${f}".`);
          break;
        case "rsa-pss":
          if (e) {
            const c = parseInt(i.slice(-3), 10), { hashAlgorithm: l, mgf1HashAlgorithm: d, saltLength: y } = a.asymmetricKeyDetails;
            if (l !== `sha${c}` || d !== l)
              throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${i}.`);
            if (y !== void 0 && y > c >> 3)
              throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${i}.`);
          }
          break;
      }
  }, Ta;
}
var Ra, Gc;
function Cd() {
  if (Gc) return Ra;
  Gc = 1;
  var t = Zo();
  return Ra = t.satisfies(process.version, "^6.12.0 || >=8.0.0"), Ra;
}
var Pa, Jc;
function fb() {
  if (Jc) return Pa;
  Jc = 1;
  const t = xn(), e = Sd(), r = Od(), n = _d(), i = Td(), a = kd(), o = Cd(), s = Qo(), { KeyObject: u, createSecretKey: f, createPublicKey: c } = Xt, l = ["RS256", "RS384", "RS512"], d = ["ES256", "ES384", "ES512"], y = ["RS256", "RS384", "RS512"], m = ["HS256", "HS384", "HS512"];
  return o && (l.splice(l.length, 0, "PS256", "PS384", "PS512"), y.splice(y.length, 0, "PS256", "PS384", "PS512")), Pa = function(v, b, g, _) {
    typeof g == "function" && !_ && (_ = g, g = {}), g || (g = {}), g = Object.assign({}, g);
    let w;
    if (_ ? w = _ : w = function(Y, G) {
      if (Y) throw Y;
      return G;
    }, g.clockTimestamp && typeof g.clockTimestamp != "number")
      return w(new t("clockTimestamp must be a number"));
    if (g.nonce !== void 0 && (typeof g.nonce != "string" || g.nonce.trim() === ""))
      return w(new t("nonce must be a non-empty string"));
    if (g.allowInvalidAsymmetricKeyTypes !== void 0 && typeof g.allowInvalidAsymmetricKeyTypes != "boolean")
      return w(new t("allowInvalidAsymmetricKeyTypes must be a boolean"));
    const A = g.clockTimestamp || Math.floor(Date.now() / 1e3);
    if (!v)
      return w(new t("jwt must be provided"));
    if (typeof v != "string")
      return w(new t("jwt must be a string"));
    const P = v.split(".");
    if (P.length !== 3)
      return w(new t("jwt malformed"));
    let C;
    try {
      C = n(v, { complete: !0 });
    } catch (Y) {
      return w(Y);
    }
    if (!C)
      return w(new t("invalid token"));
    const B = C.header;
    let L;
    if (typeof b == "function") {
      if (!_)
        return w(new t("verify must be called asynchronous if secret or public key is provided as a callback"));
      L = b;
    } else
      L = function(Y, G) {
        return G(null, b);
      };
    return L(B, function(Y, G) {
      if (Y)
        return w(new t("error in secret or public key callback: " + Y.message));
      const J = P[2].trim() !== "";
      if (!J && G)
        return w(new t("jwt signature is required"));
      if (J && !G)
        return w(new t("secret or public key must be provided"));
      if (!J && !g.algorithms)
        return w(new t('please specify "none" in "algorithms" to verify unsigned tokens'));
      if (G != null && !(G instanceof u))
        try {
          G = c(G);
        } catch {
          try {
            G = f(typeof G == "string" ? Buffer.from(G) : G);
          } catch {
            return w(new t("secretOrPublicKey is not valid key material"));
          }
        }
      if (g.algorithms || (G.type === "secret" ? g.algorithms = m : ["rsa", "rsa-pss"].includes(G.asymmetricKeyType) ? g.algorithms = y : G.asymmetricKeyType === "ec" ? g.algorithms = d : g.algorithms = l), g.algorithms.indexOf(C.header.alg) === -1)
        return w(new t("invalid algorithm"));
      if (B.alg.startsWith("HS") && G.type !== "secret")
        return w(new t(`secretOrPublicKey must be a symmetric key when using ${B.alg}`));
      if (/^(?:RS|PS|ES)/.test(B.alg) && G.type !== "public")
        return w(new t(`secretOrPublicKey must be an asymmetric key when using ${B.alg}`));
      if (!g.allowInvalidAsymmetricKeyTypes)
        try {
          a(B.alg, G);
        } catch (x) {
          return w(x);
        }
      let z;
      try {
        z = s.verify(v, C.header.alg, G);
      } catch (x) {
        return w(x);
      }
      if (!z)
        return w(new t("invalid signature"));
      const ee = C.payload;
      if (typeof ee.nbf < "u" && !g.ignoreNotBefore) {
        if (typeof ee.nbf != "number")
          return w(new t("invalid nbf value"));
        if (ee.nbf > A + (g.clockTolerance || 0))
          return w(new e("jwt not active", new Date(ee.nbf * 1e3)));
      }
      if (typeof ee.exp < "u" && !g.ignoreExpiration) {
        if (typeof ee.exp != "number")
          return w(new t("invalid exp value"));
        if (A >= ee.exp + (g.clockTolerance || 0))
          return w(new r("jwt expired", new Date(ee.exp * 1e3)));
      }
      if (g.audience) {
        const x = Array.isArray(g.audience) ? g.audience : [g.audience];
        if (!(Array.isArray(ee.aud) ? ee.aud : [ee.aud]).some(function(j) {
          return x.some(function(q) {
            return q instanceof RegExp ? q.test(j) : q === j;
          });
        }))
          return w(new t("jwt audience invalid. expected: " + x.join(" or ")));
      }
      if (g.issuer && (typeof g.issuer == "string" && ee.iss !== g.issuer || Array.isArray(g.issuer) && g.issuer.indexOf(ee.iss) === -1))
        return w(new t("jwt issuer invalid. expected: " + g.issuer));
      if (g.subject && ee.sub !== g.subject)
        return w(new t("jwt subject invalid. expected: " + g.subject));
      if (g.jwtid && ee.jti !== g.jwtid)
        return w(new t("jwt jwtid invalid. expected: " + g.jwtid));
      if (g.nonce && ee.nonce !== g.nonce)
        return w(new t("jwt nonce invalid. expected: " + g.nonce));
      if (g.maxAge) {
        if (typeof ee.iat != "number")
          return w(new t("iat required when maxAge is specified"));
        const x = i(g.maxAge, ee.iat);
        if (typeof x > "u")
          return w(new t('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
        if (A >= x + (g.clockTolerance || 0))
          return w(new r("maxAge exceeded", new Date(x * 1e3)));
      }
      if (g.complete === !0) {
        const x = C.signature;
        return w(null, {
          header: B,
          payload: ee,
          signature: x
        });
      }
      return w(null, ee);
    });
  }, Pa;
}
var Aa, Kc;
function lb() {
  if (Kc) return Aa;
  Kc = 1;
  var t = 1 / 0, e = 9007199254740991, r = 17976931348623157e292, n = NaN, i = "[object Arguments]", a = "[object Function]", o = "[object GeneratorFunction]", s = "[object String]", u = "[object Symbol]", f = /^\s+|\s+$/g, c = /^[-+]0x[0-9a-f]+$/i, l = /^0b[01]+$/i, d = /^0o[0-7]+$/i, y = /^(?:0|[1-9]\d*)$/, m = parseInt;
  function v(k, ne) {
    for (var ae = -1, Oe = k ? k.length : 0, Me = Array(Oe); ++ae < Oe; )
      Me[ae] = ne(k[ae], ae, k);
    return Me;
  }
  function b(k, ne, ae, Oe) {
    for (var Me = k.length, Ve = ae + -1; ++Ve < Me; )
      if (ne(k[Ve], Ve, k))
        return Ve;
    return -1;
  }
  function g(k, ne, ae) {
    if (ne !== ne)
      return b(k, _, ae);
    for (var Oe = ae - 1, Me = k.length; ++Oe < Me; )
      if (k[Oe] === ne)
        return Oe;
    return -1;
  }
  function _(k) {
    return k !== k;
  }
  function w(k, ne) {
    for (var ae = -1, Oe = Array(k); ++ae < k; )
      Oe[ae] = ne(ae);
    return Oe;
  }
  function A(k, ne) {
    return v(ne, function(ae) {
      return k[ae];
    });
  }
  function P(k, ne) {
    return function(ae) {
      return k(ne(ae));
    };
  }
  var C = Object.prototype, B = C.hasOwnProperty, L = C.toString, Y = C.propertyIsEnumerable, G = P(Object.keys, Object), J = Math.max;
  function z(k, ne) {
    var ae = q(k) || j(k) ? w(k.length, String) : [], Oe = ae.length, Me = !!Oe;
    for (var Ve in k)
      B.call(k, Ve) && !(Me && (Ve == "length" || x(Ve, Oe))) && ae.push(Ve);
    return ae;
  }
  function ee(k) {
    if (!M(k))
      return G(k);
    var ne = [];
    for (var ae in Object(k))
      B.call(k, ae) && ae != "constructor" && ne.push(ae);
    return ne;
  }
  function x(k, ne) {
    return ne = ne ?? e, !!ne && (typeof k == "number" || y.test(k)) && k > -1 && k % 1 == 0 && k < ne;
  }
  function M(k) {
    var ne = k && k.constructor, ae = typeof ne == "function" && ne.prototype || C;
    return k === ae;
  }
  function N(k, ne, ae, Oe) {
    k = V(k) ? k : ue(k), ae = ae && !Oe ? K(ae) : 0;
    var Me = k.length;
    return ae < 0 && (ae = J(Me + ae, 0)), W(k) ? ae <= Me && k.indexOf(ne, ae) > -1 : !!Me && g(k, ne, ae) > -1;
  }
  function j(k) {
    return O(k) && B.call(k, "callee") && (!Y.call(k, "callee") || L.call(k) == i);
  }
  var q = Array.isArray;
  function V(k) {
    return k != null && R(k.length) && !E(k);
  }
  function O(k) {
    return U(k) && V(k);
  }
  function E(k) {
    var ne = I(k) ? L.call(k) : "";
    return ne == a || ne == o;
  }
  function R(k) {
    return typeof k == "number" && k > -1 && k % 1 == 0 && k <= e;
  }
  function I(k) {
    var ne = typeof k;
    return !!k && (ne == "object" || ne == "function");
  }
  function U(k) {
    return !!k && typeof k == "object";
  }
  function W(k) {
    return typeof k == "string" || !q(k) && U(k) && L.call(k) == s;
  }
  function Z(k) {
    return typeof k == "symbol" || U(k) && L.call(k) == u;
  }
  function X(k) {
    if (!k)
      return k === 0 ? k : 0;
    if (k = te(k), k === t || k === -1 / 0) {
      var ne = k < 0 ? -1 : 1;
      return ne * r;
    }
    return k === k ? k : 0;
  }
  function K(k) {
    var ne = X(k), ae = ne % 1;
    return ne === ne ? ae ? ne - ae : ne : 0;
  }
  function te(k) {
    if (typeof k == "number")
      return k;
    if (Z(k))
      return n;
    if (I(k)) {
      var ne = typeof k.valueOf == "function" ? k.valueOf() : k;
      k = I(ne) ? ne + "" : ne;
    }
    if (typeof k != "string")
      return k === 0 ? k : +k;
    k = k.replace(f, "");
    var ae = l.test(k);
    return ae || d.test(k) ? m(k.slice(2), ae ? 2 : 8) : c.test(k) ? n : +k;
  }
  function ie(k) {
    return V(k) ? z(k) : ee(k);
  }
  function ue(k) {
    return k ? A(k, ie(k)) : [];
  }
  return Aa = N, Aa;
}
var Ma, Xc;
function db() {
  if (Xc) return Ma;
  Xc = 1;
  var t = "[object Boolean]", e = Object.prototype, r = e.toString;
  function n(a) {
    return a === !0 || a === !1 || i(a) && r.call(a) == t;
  }
  function i(a) {
    return !!a && typeof a == "object";
  }
  return Ma = n, Ma;
}
var ka, Zc;
function hb() {
  if (Zc) return ka;
  Zc = 1;
  var t = 1 / 0, e = 17976931348623157e292, r = NaN, n = "[object Symbol]", i = /^\s+|\s+$/g, a = /^[-+]0x[0-9a-f]+$/i, o = /^0b[01]+$/i, s = /^0o[0-7]+$/i, u = parseInt, f = Object.prototype, c = f.toString;
  function l(_) {
    return typeof _ == "number" && _ == b(_);
  }
  function d(_) {
    var w = typeof _;
    return !!_ && (w == "object" || w == "function");
  }
  function y(_) {
    return !!_ && typeof _ == "object";
  }
  function m(_) {
    return typeof _ == "symbol" || y(_) && c.call(_) == n;
  }
  function v(_) {
    if (!_)
      return _ === 0 ? _ : 0;
    if (_ = g(_), _ === t || _ === -1 / 0) {
      var w = _ < 0 ? -1 : 1;
      return w * e;
    }
    return _ === _ ? _ : 0;
  }
  function b(_) {
    var w = v(_), A = w % 1;
    return w === w ? A ? w - A : w : 0;
  }
  function g(_) {
    if (typeof _ == "number")
      return _;
    if (m(_))
      return r;
    if (d(_)) {
      var w = typeof _.valueOf == "function" ? _.valueOf() : _;
      _ = d(w) ? w + "" : w;
    }
    if (typeof _ != "string")
      return _ === 0 ? _ : +_;
    _ = _.replace(i, "");
    var A = o.test(_);
    return A || s.test(_) ? u(_.slice(2), A ? 2 : 8) : a.test(_) ? r : +_;
  }
  return ka = l, ka;
}
var Ca, ef;
function pb() {
  if (ef) return Ca;
  ef = 1;
  var t = "[object Number]", e = Object.prototype, r = e.toString;
  function n(a) {
    return !!a && typeof a == "object";
  }
  function i(a) {
    return typeof a == "number" || n(a) && r.call(a) == t;
  }
  return Ca = i, Ca;
}
var Ia, tf;
function yb() {
  if (tf) return Ia;
  tf = 1;
  var t = "[object Object]";
  function e(d) {
    var y = !1;
    if (d != null && typeof d.toString != "function")
      try {
        y = !!(d + "");
      } catch {
      }
    return y;
  }
  function r(d, y) {
    return function(m) {
      return d(y(m));
    };
  }
  var n = Function.prototype, i = Object.prototype, a = n.toString, o = i.hasOwnProperty, s = a.call(Object), u = i.toString, f = r(Object.getPrototypeOf, Object);
  function c(d) {
    return !!d && typeof d == "object";
  }
  function l(d) {
    if (!c(d) || u.call(d) != t || e(d))
      return !1;
    var y = f(d);
    if (y === null)
      return !0;
    var m = o.call(y, "constructor") && y.constructor;
    return typeof m == "function" && m instanceof m && a.call(m) == s;
  }
  return Ia = l, Ia;
}
var xa, rf;
function mb() {
  if (rf) return xa;
  rf = 1;
  var t = "[object String]", e = Object.prototype, r = e.toString, n = Array.isArray;
  function i(o) {
    return !!o && typeof o == "object";
  }
  function a(o) {
    return typeof o == "string" || !n(o) && i(o) && r.call(o) == t;
  }
  return xa = a, xa;
}
var Da, nf;
function gb() {
  if (nf) return Da;
  nf = 1;
  var t = "Expected a function", e = 1 / 0, r = 17976931348623157e292, n = NaN, i = "[object Symbol]", a = /^\s+|\s+$/g, o = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, u = /^0o[0-7]+$/i, f = parseInt, c = Object.prototype, l = c.toString;
  function d(A, P) {
    var C;
    if (typeof P != "function")
      throw new TypeError(t);
    return A = _(A), function() {
      return --A > 0 && (C = P.apply(this, arguments)), A <= 1 && (P = void 0), C;
    };
  }
  function y(A) {
    return d(2, A);
  }
  function m(A) {
    var P = typeof A;
    return !!A && (P == "object" || P == "function");
  }
  function v(A) {
    return !!A && typeof A == "object";
  }
  function b(A) {
    return typeof A == "symbol" || v(A) && l.call(A) == i;
  }
  function g(A) {
    if (!A)
      return A === 0 ? A : 0;
    if (A = w(A), A === e || A === -1 / 0) {
      var P = A < 0 ? -1 : 1;
      return P * r;
    }
    return A === A ? A : 0;
  }
  function _(A) {
    var P = g(A), C = P % 1;
    return P === P ? C ? P - C : P : 0;
  }
  function w(A) {
    if (typeof A == "number")
      return A;
    if (b(A))
      return n;
    if (m(A)) {
      var P = typeof A.valueOf == "function" ? A.valueOf() : A;
      A = m(P) ? P + "" : P;
    }
    if (typeof A != "string")
      return A === 0 ? A : +A;
    A = A.replace(a, "");
    var C = s.test(A);
    return C || u.test(A) ? f(A.slice(2), C ? 2 : 8) : o.test(A) ? n : +A;
  }
  return Da = y, Da;
}
var Na, af;
function vb() {
  if (af) return Na;
  af = 1;
  const t = Td(), e = Cd(), r = kd(), n = Qo(), i = lb(), a = db(), o = hb(), s = pb(), u = yb(), f = mb(), c = gb(), { KeyObject: l, createSecretKey: d, createPrivateKey: y } = Xt, m = ["RS256", "RS384", "RS512", "ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "none"];
  e && m.splice(3, 0, "PS256", "PS384", "PS512");
  const v = {
    expiresIn: { isValid: function(C) {
      return o(C) || f(C) && C;
    }, message: '"expiresIn" should be a number of seconds or string representing a timespan' },
    notBefore: { isValid: function(C) {
      return o(C) || f(C) && C;
    }, message: '"notBefore" should be a number of seconds or string representing a timespan' },
    audience: { isValid: function(C) {
      return f(C) || Array.isArray(C);
    }, message: '"audience" must be a string or array' },
    algorithm: { isValid: i.bind(null, m), message: '"algorithm" must be a valid string enum value' },
    header: { isValid: u, message: '"header" must be an object' },
    encoding: { isValid: f, message: '"encoding" must be a string' },
    issuer: { isValid: f, message: '"issuer" must be a string' },
    subject: { isValid: f, message: '"subject" must be a string' },
    jwtid: { isValid: f, message: '"jwtid" must be a string' },
    noTimestamp: { isValid: a, message: '"noTimestamp" must be a boolean' },
    keyid: { isValid: f, message: '"keyid" must be a string' },
    mutatePayload: { isValid: a, message: '"mutatePayload" must be a boolean' },
    allowInsecureKeySizes: { isValid: a, message: '"allowInsecureKeySizes" must be a boolean' },
    allowInvalidAsymmetricKeyTypes: { isValid: a, message: '"allowInvalidAsymmetricKeyTypes" must be a boolean' }
  }, b = {
    iat: { isValid: s, message: '"iat" should be a number of seconds' },
    exp: { isValid: s, message: '"exp" should be a number of seconds' },
    nbf: { isValid: s, message: '"nbf" should be a number of seconds' }
  };
  function g(C, B, L, Y) {
    if (!u(L))
      throw new Error('Expected "' + Y + '" to be a plain object.');
    Object.keys(L).forEach(function(G) {
      const J = C[G];
      if (!J) {
        if (!B)
          throw new Error('"' + G + '" is not allowed in "' + Y + '"');
        return;
      }
      if (!J.isValid(L[G]))
        throw new Error(J.message);
    });
  }
  function _(C) {
    return g(v, !1, C, "options");
  }
  function w(C) {
    return g(b, !0, C, "payload");
  }
  const A = {
    audience: "aud",
    issuer: "iss",
    subject: "sub",
    jwtid: "jti"
  }, P = [
    "expiresIn",
    "notBefore",
    "noTimestamp",
    "audience",
    "issuer",
    "subject",
    "jwtid"
  ];
  return Na = function(C, B, L, Y) {
    typeof L == "function" ? (Y = L, L = {}) : L = L || {};
    const G = typeof C == "object" && !Buffer.isBuffer(C), J = Object.assign({
      alg: L.algorithm || "HS256",
      typ: G ? "JWT" : void 0,
      kid: L.keyid
    }, L.header);
    function z(M) {
      if (Y)
        return Y(M);
      throw M;
    }
    if (!B && L.algorithm !== "none")
      return z(new Error("secretOrPrivateKey must have a value"));
    if (B != null && !(B instanceof l))
      try {
        B = y(B);
      } catch {
        try {
          B = d(typeof B == "string" ? Buffer.from(B) : B);
        } catch {
          return z(new Error("secretOrPrivateKey is not valid key material"));
        }
      }
    if (J.alg.startsWith("HS") && B.type !== "secret")
      return z(new Error(`secretOrPrivateKey must be a symmetric key when using ${J.alg}`));
    if (/^(?:RS|PS|ES)/.test(J.alg)) {
      if (B.type !== "private")
        return z(new Error(`secretOrPrivateKey must be an asymmetric key when using ${J.alg}`));
      if (!L.allowInsecureKeySizes && !J.alg.startsWith("ES") && B.asymmetricKeyDetails !== void 0 && //KeyObject.asymmetricKeyDetails is supported in Node 15+
      B.asymmetricKeyDetails.modulusLength < 2048)
        return z(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${J.alg}`));
    }
    if (typeof C > "u")
      return z(new Error("payload is required"));
    if (G) {
      try {
        w(C);
      } catch (M) {
        return z(M);
      }
      L.mutatePayload || (C = Object.assign({}, C));
    } else {
      const M = P.filter(function(N) {
        return typeof L[N] < "u";
      });
      if (M.length > 0)
        return z(new Error("invalid " + M.join(",") + " option for " + typeof C + " payload"));
    }
    if (typeof C.exp < "u" && typeof L.expiresIn < "u")
      return z(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));
    if (typeof C.nbf < "u" && typeof L.notBefore < "u")
      return z(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));
    try {
      _(L);
    } catch (M) {
      return z(M);
    }
    if (!L.allowInvalidAsymmetricKeyTypes)
      try {
        r(J.alg, B);
      } catch (M) {
        return z(M);
      }
    const ee = C.iat || Math.floor(Date.now() / 1e3);
    if (L.noTimestamp ? delete C.iat : G && (C.iat = ee), typeof L.notBefore < "u") {
      try {
        C.nbf = t(L.notBefore, ee);
      } catch (M) {
        return z(M);
      }
      if (typeof C.nbf > "u")
        return z(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    if (typeof L.expiresIn < "u" && typeof C == "object") {
      try {
        C.exp = t(L.expiresIn, ee);
      } catch (M) {
        return z(M);
      }
      if (typeof C.exp > "u")
        return z(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));
    }
    Object.keys(A).forEach(function(M) {
      const N = A[M];
      if (typeof L[M] < "u") {
        if (typeof C[N] < "u")
          return z(new Error('Bad "options.' + M + '" option. The payload already has an "' + N + '" property.'));
        C[N] = L[M];
      }
    });
    const x = L.encoding || "utf8";
    if (typeof Y == "function")
      Y = Y && c(Y), n.createSign({
        header: J,
        privateKey: B,
        payload: C,
        encoding: x
      }).once("error", Y).once("done", function(M) {
        if (!L.allowInsecureKeySizes && /^(?:RS|PS)/.test(J.alg) && M.length < 256)
          return Y(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${J.alg}`));
        Y(null, M);
      });
    else {
      let M = n.sign({ header: J, payload: C, secret: B, encoding: x });
      if (!L.allowInsecureKeySizes && /^(?:RS|PS)/.test(J.alg) && M.length < 256)
        throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${J.alg}`);
      return M;
    }
  }, Na;
}
var La, of;
function bb() {
  return of || (of = 1, La = {
    decode: _d(),
    verify: fb(),
    sign: vb(),
    JsonWebTokenError: xn(),
    NotBeforeError: Sd(),
    TokenExpiredError: Od()
  }), La;
}
var Eb = bb();
const Id = /* @__PURE__ */ vn(Eb);
function ge(t) {
  console.warn("[react-ga]", t);
}
function po(t) {
  "@babel/helpers - typeof";
  return po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, po(t);
}
var wb = ["to", "target"];
function sf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sf(Object(r), !0).forEach(function(n) {
      es(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : sf(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function _b(t, e) {
  if (t == null) return {};
  var r = Sb(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Sb(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function Ob(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Tb(t, e) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
  }
}
function Rb(t, e, r) {
  return e && Tb(t.prototype, e), Object.defineProperty(t, "prototype", { writable: !1 }), t;
}
function Pb(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && yo(t, e);
}
function yo(t, e) {
  return yo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, yo(t, e);
}
function Ab(t) {
  var e = kb();
  return function() {
    var n = yn(t), i;
    if (e) {
      var a = yn(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return Mb(this, i);
  };
}
function Mb(t, e) {
  if (e && (po(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return xd(t);
}
function xd(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function kb() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function yn(t) {
  return yn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, yn(t);
}
function es(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
var cf = "_blank", Cb = 1, Mt = /* @__PURE__ */ function(t) {
  Pb(r, t);
  var e = Ab(r);
  function r() {
    var n;
    Ob(this, r);
    for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return n = e.call.apply(e, [this].concat(a)), es(xd(n), "handleClick", function(s) {
      var u = n.props, f = u.target, c = u.eventLabel, l = u.to, d = u.onClick, y = u.trackerNames, m = {
        label: c
      }, v = f !== cf, b = !(s.ctrlKey || s.shiftKey || s.metaKey || s.button === Cb);
      v && b ? (s.preventDefault(), r.trackLink(m, function() {
        window.location.href = l;
      }, y)) : r.trackLink(m, function() {
      }, y), d && d(s);
    }), n;
  }
  return Rb(r, [{
    key: "render",
    value: function() {
      var i = this.props, a = i.to, o = i.target, s = _b(i, wb), u = uf(uf({}, s), {}, {
        target: o,
        href: a,
        onClick: this.handleClick
      });
      return o === cf && (u.rel = "".concat(u.rel ? u.rel : "", " noopener noreferrer").trim()), delete u.eventLabel, delete u.trackerNames, /* @__PURE__ */ vo.createElement("a", u);
    }
  }]), r;
}(nh);
es(Mt, "trackLink", function() {
  ge("ga tracking not enabled");
});
Mt.propTypes = {
  eventLabel: Ct.string.isRequired,
  target: Ct.string,
  to: Ct.string,
  onClick: Ct.func,
  trackerNames: Ct.arrayOf(Ct.string)
};
Mt.defaultProps = {
  target: null,
  to: null,
  onClick: null,
  trackerNames: null
};
function Ib(t) {
  return typeof t == "string" && t.indexOf("@") !== -1;
}
var xb = "REDACTED (Potential Email Address)";
function Db(t) {
  return Ib(t) ? (ge("This arg looks like an email address, redacting."), xb) : t;
}
function qn(t) {
  return t && t.toString().replace(/^\s+|\s+$/g, "");
}
var Nb = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
function Lb(t) {
  return qn(t).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(e, r, n) {
    return r > 0 && r + e.length !== n.length && e.search(Nb) > -1 && n.charAt(r - 2) !== ":" && (n.charAt(r + e.length) !== "-" || n.charAt(r - 1) === "-") && n.charAt(r - 1).search(/[^\s-]/) < 0 ? e.toLowerCase() : e.substr(1).search(/[A-Z]|\../) > -1 ? e : e.charAt(0).toUpperCase() + e.substr(1);
  });
}
function Fb() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0, n = t || "";
  return e && (n = Lb(t)), r && (n = Db(n)), n;
}
function jb(t) {
  return t.substring(0, 1) === "/" ? t.substring(1) : t;
}
var ff = !1;
function qb(t) {
  if (!ff) {
    ff = !0;
    var e = "https://www.google-analytics.com/analytics.js";
    t && t.gaAddress ? e = t.gaAddress : t && t.debug && (e = "https://www.google-analytics.com/analytics_debug.js");
    var r = t && t.onerror;
    (function(n, i, a, o, s, u, f) {
      n.GoogleAnalyticsObject = s, n[s] = n[s] || function() {
        (n[s].q = n[s].q || []).push(arguments);
      }, n[s].l = 1 * /* @__PURE__ */ new Date(), u = i.createElement(a), f = i.getElementsByTagName(a)[0], u.async = 1, u.src = o, u.onerror = r, f.parentNode.insertBefore(u, f);
    })(window, document, "script", e, "ga");
  }
}
function Ae(t) {
  console.info("[react-ga]", t);
}
var Fa = [];
const mn = {
  calls: Fa,
  ga: function() {
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    Fa.push([].concat(r));
  },
  resetCalls: function() {
    Fa.length = 0;
  }
};
var $b = ["category", "action", "label", "value", "nonInteraction", "transport"];
function Bb(t, e) {
  if (t == null) return {};
  var r = Ub(t, e), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      n = a[i], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function Ub(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function lf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vb(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lf(Object(r), !0).forEach(function(n) {
      Wb(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : lf(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Wb(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Sr(t) {
  "@babel/helpers - typeof";
  return Sr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Sr(t);
}
function zb(t) {
  return Gb(t) || Hb(t) || Yb(t) || Qb();
}
function Qb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Yb(t, e) {
  if (t) {
    if (typeof t == "string") return mo(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set") return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return mo(t, e);
  }
}
function Hb(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
}
function Gb(t) {
  if (Array.isArray(t)) return mo(t);
}
function mo(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, n = new Array(e); r < e; r++)
    n[r] = t[r];
  return n;
}
var Dd = typeof window > "u" || typeof document > "u", ze = !1, Nd = !0, Ld = !1, Fd = !0, jd = !0, Bt = function() {
  var e;
  return Ld ? mn.ga.apply(mn, arguments) : Dd ? !1 : window.ga ? (e = window).ga.apply(e, arguments) : ge("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually");
};
function dt(t) {
  return Fb(t, Nd, jd);
}
function $n(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  var i = r[0];
  if (typeof Bt == "function") {
    if (typeof i != "string") {
      ge("ga command must be a string");
      return;
    }
    (Fd || !Array.isArray(t)) && Bt.apply(void 0, r), Array.isArray(t) && t.forEach(function(a) {
      Bt.apply(void 0, zb(["".concat(a, ".").concat(i)].concat(r.slice(1))));
    });
  }
}
function df(t, e) {
  if (!t) {
    ge("gaTrackingID is required in initialize()");
    return;
  }
  e && (e.debug && e.debug === !0 && (ze = !0), e.titleCase === !1 && (Nd = !1), e.redactEmail === !1 && (jd = !1), e.useExistingGa) || (e && e.gaOptions ? Bt("create", t, e.gaOptions) : Bt("create", t, "auto"));
}
function qd(t, e) {
  return Array.isArray(t) ? t.forEach(function(r) {
    if (Sr(r) !== "object") {
      ge("All configs must be an object");
      return;
    }
    df(r.trackingId, r);
  }) : df(t, e), !0;
}
function $d(t, e) {
  if (e && e.testMode === !0)
    Ld = !0;
  else {
    if (Dd)
      return;
    (!e || e.standardImplementation !== !0) && qb(e);
  }
  Fd = e && typeof e.alwaysSendToDefaultTracker == "boolean" ? e.alwaysSendToDefaultTracker : !0, qd(t, e);
}
function Le() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  return e.length > 0 && (Bt.apply(void 0, e), ze && (Ae("called ga('arguments');"), Ae("with arguments: ".concat(JSON.stringify(e))))), window.ga;
}
function Bd(t, e) {
  if (!t) {
    ge("`fieldsObject` is required in .set()");
    return;
  }
  if (Sr(t) !== "object") {
    ge("Expected `fieldsObject` arg to be an Object");
    return;
  }
  Object.keys(t).length === 0 && ge("empty `fieldsObject` given to .set()"), $n(e, "set", t), ze && (Ae("called ga('set', fieldsObject);"), Ae("with fieldsObject: ".concat(JSON.stringify(t))));
}
function er(t, e) {
  $n(e, "send", t), ze && (Ae("called ga('send', fieldObject);"), Ae("with fieldObject: ".concat(JSON.stringify(t))), Ae("with trackers: ".concat(JSON.stringify(e))));
}
function Ud(t, e, r) {
  if (!t) {
    ge("path is required in .pageview()");
    return;
  }
  var n = qn(t);
  if (n === "") {
    ge("path cannot be an empty string in .pageview()");
    return;
  }
  var i = {};
  if (r && (i.title = r), typeof Le == "function" && ($n(e, "send", Vb({
    hitType: "pageview",
    page: n
  }, i)), ze)) {
    Ae("called ga('send', 'pageview', path);");
    var a = "";
    r && (a = " and title: ".concat(r)), Ae("with path: ".concat(n).concat(a));
  }
}
function Vd(t, e) {
  if (!t) {
    ge("modalName is required in .modalview(modalName)");
    return;
  }
  var r = jb(qn(t));
  if (r === "") {
    ge("modalName cannot be an empty string or a single / in .modalview()");
    return;
  }
  if (typeof Le == "function") {
    var n = "/modal/".concat(r);
    $n(e, "send", "pageview", n), ze && (Ae("called ga('send', 'pageview', path);"), Ae("with path: ".concat(n)));
  }
}
function Wd() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.category, r = t.variable, n = t.value, i = t.label, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  if (typeof Le == "function") {
    if (!e || !r || typeof n != "number") {
      ge("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number");
      return;
    }
    var o = {
      hitType: "timing",
      timingCategory: dt(e),
      timingVar: dt(r),
      timingValue: n
    };
    i && (o.timingLabel = dt(i)), er(o, a);
  }
}
function zd() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = t.category, r = t.action, n = t.label, i = t.value, a = t.nonInteraction, o = t.transport, s = Bb(t, $b), u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
  if (typeof Le == "function") {
    if (!e || !r) {
      ge("args.category AND args.action are required in event()");
      return;
    }
    var f = {
      hitType: "event",
      eventCategory: dt(e),
      eventAction: dt(r)
    };
    n && (f.eventLabel = dt(n)), typeof i < "u" && (typeof i != "number" ? ge("Expected `args.value` arg to be a Number.") : f.eventValue = i), typeof a < "u" && (typeof a != "boolean" ? ge("`args.nonInteraction` must be a boolean.") : f.nonInteraction = a), typeof o < "u" && (typeof o != "string" ? ge("`args.transport` must be a string.") : (["beacon", "xhr", "image"].indexOf(o) === -1 && ge("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"), f.transport = o)), Object.keys(s).filter(function(c) {
      return c.substr(0, 9) === "dimension";
    }).forEach(function(c) {
      f[c] = s[c];
    }), Object.keys(s).filter(function(c) {
      return c.substr(0, 6) === "metric";
    }).forEach(function(c) {
      f[c] = s[c];
    }), er(f, u);
  }
}
function Qd(t, e) {
  var r = t.description, n = t.fatal;
  if (typeof Le == "function") {
    var i = {
      hitType: "exception"
    };
    r && (i.exDescription = dt(r)), typeof n < "u" && (typeof n != "boolean" ? ge("`args.fatal` must be a boolean.") : i.exFatal = n), er(i, e);
  }
}
var Yd = {
  /**
   * require:
   * GA requires a plugin
   * @param name {String} e.g. 'ecommerce' or 'myplugin'
   * @param options {Object} optional e.g {path: '/log', debug: true}
   * @param trackerName {String} optional e.g 'trackerName'
   */
  require: function(e, r, n) {
    if (typeof Le == "function") {
      if (!e) {
        ge("`name` is required in .require()");
        return;
      }
      var i = qn(e);
      if (i === "") {
        ge("`name` cannot be an empty string in .require()");
        return;
      }
      var a = n ? "".concat(n, ".require") : "require";
      if (r) {
        if (Sr(r) !== "object") {
          ge("Expected `options` arg to be an Object");
          return;
        }
        Object.keys(r).length === 0 && ge("Empty `options` given to .require()"), Le(a, i, r), ze && Ae("called ga('require', '".concat(i, "', ").concat(JSON.stringify(r)));
      } else
        Le(a, i), ze && Ae("called ga('require', '".concat(i, "');"));
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
  execute: function(e, r) {
    for (var n, i, a = arguments.length, o = new Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++)
      o[s - 2] = arguments[s];
    if (o.length === 1 ? n = o[0] : (i = o[0], n = o[1]), typeof Le == "function")
      if (typeof e != "string")
        ge("Expected `pluginName` arg to be a String.");
      else if (typeof r != "string")
        ge("Expected `action` arg to be a String.");
      else {
        var u = "".concat(e, ":").concat(r);
        n = n || null, i && n ? (Le(u, i, n), ze && (Ae("called ga('".concat(u, "');")), Ae('actionType: "'.concat(i, '" with payload: ').concat(JSON.stringify(n))))) : n ? (Le(u, n), ze && (Ae("called ga('".concat(u, "');")), Ae("with payload: ".concat(JSON.stringify(n))))) : (Le(u), ze && Ae("called ga('".concat(u, "');")));
      }
  }
};
function ts(t, e, r) {
  if (typeof e != "function") {
    ge("hitCallback function is required");
    return;
  }
  if (typeof Le == "function") {
    if (!t || !t.label) {
      ge("args.label is required in outboundLink()");
      return;
    }
    var n = {
      hitType: "event",
      eventCategory: "Outbound",
      eventAction: "Click",
      eventLabel: dt(t.label)
    }, i = !1, a = function() {
      i = !0, e();
    }, o = setTimeout(a, 250), s = function() {
      clearTimeout(o), i || e();
    };
    n.hitCallback = s, er(n, r);
  } else
    setTimeout(e, 0);
}
var Jb = mn;
const Kb = {
  initialize: $d,
  ga: Le,
  set: Bd,
  send: er,
  pageview: Ud,
  modalview: Vd,
  timing: Wd,
  event: zd,
  exception: Qd,
  plugin: Yd,
  outboundLink: ts,
  testModeAPI: mn
}, Xb = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  addTrackers: qd,
  default: Kb,
  event: zd,
  exception: Qd,
  ga: Le,
  initialize: $d,
  modalview: Vd,
  outboundLink: ts,
  pageview: Ud,
  plugin: Yd,
  send: er,
  set: Bd,
  testModeAPI: Jb,
  timing: Wd
}, Symbol.toStringTag, { value: "Module" }));
function hf(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function pf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hf(Object(r), !0).forEach(function(n) {
      Zb(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : hf(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Zb(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
Mt.origTrackLink = Mt.trackLink;
Mt.trackLink = ts;
var eE = Mt;
const tE = pf(pf({}, Xb), {}, {
  OutboundLink: eE
});
var en = { exports: {} }, rE = en.exports, yf;
function Bn() {
  return yf || (yf = 1, function(t, e) {
    (function(r, n) {
      t.exports = n();
    })(rE, function() {
      var r = 1e3, n = 6e4, i = 36e5, a = "millisecond", o = "second", s = "minute", u = "hour", f = "day", c = "week", l = "month", d = "quarter", y = "year", m = "date", v = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, _ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(x) {
        var M = ["th", "st", "nd", "rd"], N = x % 100;
        return "[" + x + (M[(N - 20) % 10] || M[N] || M[0]) + "]";
      } }, w = function(x, M, N) {
        var j = String(x);
        return !j || j.length >= M ? x : "" + Array(M + 1 - j.length).join(N) + x;
      }, A = { s: w, z: function(x) {
        var M = -x.utcOffset(), N = Math.abs(M), j = Math.floor(N / 60), q = N % 60;
        return (M <= 0 ? "+" : "-") + w(j, 2, "0") + ":" + w(q, 2, "0");
      }, m: function x(M, N) {
        if (M.date() < N.date()) return -x(N, M);
        var j = 12 * (N.year() - M.year()) + (N.month() - M.month()), q = M.clone().add(j, l), V = N - q < 0, O = M.clone().add(j + (V ? -1 : 1), l);
        return +(-(j + (N - q) / (V ? q - O : O - q)) || 0);
      }, a: function(x) {
        return x < 0 ? Math.ceil(x) || 0 : Math.floor(x);
      }, p: function(x) {
        return { M: l, y, w: c, d: f, D: m, h: u, m: s, s: o, ms: a, Q: d }[x] || String(x || "").toLowerCase().replace(/s$/, "");
      }, u: function(x) {
        return x === void 0;
      } }, P = "en", C = {};
      C[P] = _;
      var B = "$isDayjsObject", L = function(x) {
        return x instanceof z || !(!x || !x[B]);
      }, Y = function x(M, N, j) {
        var q;
        if (!M) return P;
        if (typeof M == "string") {
          var V = M.toLowerCase();
          C[V] && (q = V), N && (C[V] = N, q = V);
          var O = M.split("-");
          if (!q && O.length > 1) return x(O[0]);
        } else {
          var E = M.name;
          C[E] = M, q = E;
        }
        return !j && q && (P = q), q || !j && P;
      }, G = function(x, M) {
        if (L(x)) return x.clone();
        var N = typeof M == "object" ? M : {};
        return N.date = x, N.args = arguments, new z(N);
      }, J = A;
      J.l = Y, J.i = L, J.w = function(x, M) {
        return G(x, { locale: M.$L, utc: M.$u, x: M.$x, $offset: M.$offset });
      };
      var z = function() {
        function x(N) {
          this.$L = Y(N.locale, null, !0), this.parse(N), this.$x = this.$x || N.x || {}, this[B] = !0;
        }
        var M = x.prototype;
        return M.parse = function(N) {
          this.$d = function(j) {
            var q = j.date, V = j.utc;
            if (q === null) return /* @__PURE__ */ new Date(NaN);
            if (J.u(q)) return /* @__PURE__ */ new Date();
            if (q instanceof Date) return new Date(q);
            if (typeof q == "string" && !/Z$/i.test(q)) {
              var O = q.match(b);
              if (O) {
                var E = O[2] - 1 || 0, R = (O[7] || "0").substring(0, 3);
                return V ? new Date(Date.UTC(O[1], E, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, R)) : new Date(O[1], E, O[3] || 1, O[4] || 0, O[5] || 0, O[6] || 0, R);
              }
            }
            return new Date(q);
          }(N), this.init();
        }, M.init = function() {
          var N = this.$d;
          this.$y = N.getFullYear(), this.$M = N.getMonth(), this.$D = N.getDate(), this.$W = N.getDay(), this.$H = N.getHours(), this.$m = N.getMinutes(), this.$s = N.getSeconds(), this.$ms = N.getMilliseconds();
        }, M.$utils = function() {
          return J;
        }, M.isValid = function() {
          return this.$d.toString() !== v;
        }, M.isSame = function(N, j) {
          var q = G(N);
          return this.startOf(j) <= q && q <= this.endOf(j);
        }, M.isAfter = function(N, j) {
          return G(N) < this.startOf(j);
        }, M.isBefore = function(N, j) {
          return this.endOf(j) < G(N);
        }, M.$g = function(N, j, q) {
          return J.u(N) ? this[j] : this.set(q, N);
        }, M.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, M.valueOf = function() {
          return this.$d.getTime();
        }, M.startOf = function(N, j) {
          var q = this, V = !!J.u(j) || j, O = J.p(N), E = function(te, ie) {
            var ue = J.w(q.$u ? Date.UTC(q.$y, ie, te) : new Date(q.$y, ie, te), q);
            return V ? ue : ue.endOf(f);
          }, R = function(te, ie) {
            return J.w(q.toDate()[te].apply(q.toDate("s"), (V ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ie)), q);
          }, I = this.$W, U = this.$M, W = this.$D, Z = "set" + (this.$u ? "UTC" : "");
          switch (O) {
            case y:
              return V ? E(1, 0) : E(31, 11);
            case l:
              return V ? E(1, U) : E(0, U + 1);
            case c:
              var X = this.$locale().weekStart || 0, K = (I < X ? I + 7 : I) - X;
              return E(V ? W - K : W + (6 - K), U);
            case f:
            case m:
              return R(Z + "Hours", 0);
            case u:
              return R(Z + "Minutes", 1);
            case s:
              return R(Z + "Seconds", 2);
            case o:
              return R(Z + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, M.endOf = function(N) {
          return this.startOf(N, !1);
        }, M.$set = function(N, j) {
          var q, V = J.p(N), O = "set" + (this.$u ? "UTC" : ""), E = (q = {}, q[f] = O + "Date", q[m] = O + "Date", q[l] = O + "Month", q[y] = O + "FullYear", q[u] = O + "Hours", q[s] = O + "Minutes", q[o] = O + "Seconds", q[a] = O + "Milliseconds", q)[V], R = V === f ? this.$D + (j - this.$W) : j;
          if (V === l || V === y) {
            var I = this.clone().set(m, 1);
            I.$d[E](R), I.init(), this.$d = I.set(m, Math.min(this.$D, I.daysInMonth())).$d;
          } else E && this.$d[E](R);
          return this.init(), this;
        }, M.set = function(N, j) {
          return this.clone().$set(N, j);
        }, M.get = function(N) {
          return this[J.p(N)]();
        }, M.add = function(N, j) {
          var q, V = this;
          N = Number(N);
          var O = J.p(j), E = function(U) {
            var W = G(V);
            return J.w(W.date(W.date() + Math.round(U * N)), V);
          };
          if (O === l) return this.set(l, this.$M + N);
          if (O === y) return this.set(y, this.$y + N);
          if (O === f) return E(1);
          if (O === c) return E(7);
          var R = (q = {}, q[s] = n, q[u] = i, q[o] = r, q)[O] || 1, I = this.$d.getTime() + N * R;
          return J.w(I, this);
        }, M.subtract = function(N, j) {
          return this.add(-1 * N, j);
        }, M.format = function(N) {
          var j = this, q = this.$locale();
          if (!this.isValid()) return q.invalidDate || v;
          var V = N || "YYYY-MM-DDTHH:mm:ssZ", O = J.z(this), E = this.$H, R = this.$m, I = this.$M, U = q.weekdays, W = q.months, Z = q.meridiem, X = function(ie, ue, k, ne) {
            return ie && (ie[ue] || ie(j, V)) || k[ue].slice(0, ne);
          }, K = function(ie) {
            return J.s(E % 12 || 12, ie, "0");
          }, te = Z || function(ie, ue, k) {
            var ne = ie < 12 ? "AM" : "PM";
            return k ? ne.toLowerCase() : ne;
          };
          return V.replace(g, function(ie, ue) {
            return ue || function(k) {
              switch (k) {
                case "YY":
                  return String(j.$y).slice(-2);
                case "YYYY":
                  return J.s(j.$y, 4, "0");
                case "M":
                  return I + 1;
                case "MM":
                  return J.s(I + 1, 2, "0");
                case "MMM":
                  return X(q.monthsShort, I, W, 3);
                case "MMMM":
                  return X(W, I);
                case "D":
                  return j.$D;
                case "DD":
                  return J.s(j.$D, 2, "0");
                case "d":
                  return String(j.$W);
                case "dd":
                  return X(q.weekdaysMin, j.$W, U, 2);
                case "ddd":
                  return X(q.weekdaysShort, j.$W, U, 3);
                case "dddd":
                  return U[j.$W];
                case "H":
                  return String(E);
                case "HH":
                  return J.s(E, 2, "0");
                case "h":
                  return K(1);
                case "hh":
                  return K(2);
                case "a":
                  return te(E, R, !0);
                case "A":
                  return te(E, R, !1);
                case "m":
                  return String(R);
                case "mm":
                  return J.s(R, 2, "0");
                case "s":
                  return String(j.$s);
                case "ss":
                  return J.s(j.$s, 2, "0");
                case "SSS":
                  return J.s(j.$ms, 3, "0");
                case "Z":
                  return O;
              }
              return null;
            }(ie) || O.replace(":", "");
          });
        }, M.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, M.diff = function(N, j, q) {
          var V, O = this, E = J.p(j), R = G(N), I = (R.utcOffset() - this.utcOffset()) * n, U = this - R, W = function() {
            return J.m(O, R);
          };
          switch (E) {
            case y:
              V = W() / 12;
              break;
            case l:
              V = W();
              break;
            case d:
              V = W() / 3;
              break;
            case c:
              V = (U - I) / 6048e5;
              break;
            case f:
              V = (U - I) / 864e5;
              break;
            case u:
              V = U / i;
              break;
            case s:
              V = U / n;
              break;
            case o:
              V = U / r;
              break;
            default:
              V = U;
          }
          return q ? V : J.a(V);
        }, M.daysInMonth = function() {
          return this.endOf(l).$D;
        }, M.$locale = function() {
          return C[this.$L];
        }, M.locale = function(N, j) {
          if (!N) return this.$L;
          var q = this.clone(), V = Y(N, j, !0);
          return V && (q.$L = V), q;
        }, M.clone = function() {
          return J.w(this.$d, this);
        }, M.toDate = function() {
          return new Date(this.valueOf());
        }, M.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, M.toISOString = function() {
          return this.$d.toISOString();
        }, M.toString = function() {
          return this.$d.toUTCString();
        }, x;
      }(), ee = z.prototype;
      return G.prototype = ee, [["$ms", a], ["$s", o], ["$m", s], ["$H", u], ["$W", f], ["$M", l], ["$y", y], ["$D", m]].forEach(function(x) {
        ee[x[1]] = function(M) {
          return this.$g(M, x[0], x[1]);
        };
      }), G.extend = function(x, M) {
        return x.$i || (x(M, z, G), x.$i = !0), G;
      }, G.locale = Y, G.isDayjs = L, G.unix = function(x) {
        return G(1e3 * x);
      }, G.en = C[P], G.Ls = C, G.p = {}, G;
    });
  }(en)), en.exports;
}
var nE = Bn();
const Ut = /* @__PURE__ */ vn(nE);
/*! js-cookie v3.0.5 | MIT */
function Br(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      t[n] = r[n];
  }
  return t;
}
var iE = {
  read: function(t) {
    return t[0] === '"' && (t = t.slice(1, -1)), t.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
  },
  write: function(t) {
    return encodeURIComponent(t).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    );
  }
};
function go(t, e) {
  function r(i, a, o) {
    if (!(typeof document > "u")) {
      o = Br({}, e, o), typeof o.expires == "number" && (o.expires = new Date(Date.now() + o.expires * 864e5)), o.expires && (o.expires = o.expires.toUTCString()), i = encodeURIComponent(i).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
      var s = "";
      for (var u in o)
        o[u] && (s += "; " + u, o[u] !== !0 && (s += "=" + o[u].split(";")[0]));
      return document.cookie = i + "=" + t.write(a, i) + s;
    }
  }
  function n(i) {
    if (!(typeof document > "u" || arguments.length && !i)) {
      for (var a = document.cookie ? document.cookie.split("; ") : [], o = {}, s = 0; s < a.length; s++) {
        var u = a[s].split("="), f = u.slice(1).join("=");
        try {
          var c = decodeURIComponent(u[0]);
          if (o[c] = t.read(f, c), i === c)
            break;
        } catch {
        }
      }
      return i ? o[i] : o;
    }
  }
  return Object.create(
    {
      set: r,
      get: n,
      remove: function(i, a) {
        r(
          i,
          "",
          Br({}, a, {
            expires: -1
          })
        );
      },
      withAttributes: function(i) {
        return go(this.converter, Br({}, this.attributes, i));
      },
      withConverter: function(i) {
        return go(Br({}, this.converter, i), this.attributes);
      }
    },
    {
      attributes: { value: Object.freeze(e) },
      converter: { value: Object.freeze(t) }
    }
  );
}
var Ur = go(iE, { path: "/" });
class gt extends Error {
  constructor(e, r, n) {
    super(r), this.code = e, this.result = n;
  }
}
class aE extends gt {
  constructor(e, r) {
    super("E_INPUT", e, r);
  }
}
class oE extends gt {
  constructor(e, r) {
    super("E_SESSION", e, r);
  }
}
class sE extends gt {
  constructor(e, r) {
    super("E_NO_MODULE", e, r);
  }
}
class uE extends gt {
  constructor(e, r) {
    super("E_SEND_EMAIL", e, r);
  }
}
class cE extends gt {
  constructor(e, r) {
    super("E_PASSWORD", e, r);
  }
}
class fE extends gt {
  constructor(e, r) {
    super("E_NO_MEMBER", e, r);
  }
}
class lE extends gt {
  constructor(e, r) {
    super("E_BIND_DEVICE", e, r);
  }
}
class dE extends gt {
  constructor(e, r) {
    super("E_LOGIN_DEVICE", e, r);
  }
}
const b0 = (t) => {
  if (t >= 3600) {
    const e = t % 3600;
    return "HOURS:MINUTES:SECONDS".replace("HOURS", `${Math.floor(t / 3600)}`.padStart(2, "0")).replace("MINUTES", `${Math.floor(e / 60)}`.padStart(2, "0")).replace("SECONDS", `${Math.floor(e % 60)}`.padStart(2, "0"));
  } else
    return "MINUTES:SECONDS".replace("MINUTES", `${Math.floor(t / 60)}`.padStart(2, "0")).replace("SECONDS", `${Math.floor(t % 60)}`.padStart(2, "0"));
}, E0 = (t) => typeof t == "number" && `約 ${(t / 60).toFixed(0)} 分鐘`, w0 = async (t, e, r, n, i) => await ce.post(
  `${n}/sys/sign-url`,
  {
    operation: "putObject",
    params: {
      Key: t,
      ContentType: e.type
    }
  },
  {
    headers: { authorization: `Bearer ${r}` }
  }
).then((a) => a.data.result).then((a) => {
  const { query: o } = fh.parseUrl(a);
  return ce.put(a, e, {
    ...i,
    headers: {
      ...o,
      "Content-Type": e.type
    }
  });
}), _0 = (t) => t.response && t.response.data ? alert(t.response.data.message) : alert(t.message), S0 = (t) => t != null, O0 = (t, e) => {
  const r = (t || "#2d313a").replace("#", ""), n = parseInt(r.slice(0, 2), 16), i = parseInt(r.slice(2, 4), 16), a = parseInt(r.slice(4, 6), 16);
  return `rgba(${n}, ${i}, ${a}, ${e})`;
}, T0 = (t, e) => Ut(t).format(e || "YYYY/MM/DD HH:mm"), mf = (t) => (t.soldAt && Ut() < Ut(t.soldAt) ? t.salePrice : t.listPrice) || 0, R0 = (t) => t.filter((e) => e.publishedAt !== null).reduce(
  (e, r) => e === null || mf(r) < mf(e) ? r : e,
  null
), P0 = (t) => lh`
  @media (min-width: ${Dh}px) {
    ${t}
  }
`, gf = {
  phone: /^((?:\+|00)[17](?: |-)?|(?:\+|00)[1-9]\d{0,2}(?: |-)?|(?:\+|00)1-\d{3}(?: |-)?)?(0\d|\([0-9]{3}\)|[1-9]{0,3})(?:((?: |-)[0-9]{2}){4}|((?:[0-9]{2}){4})|((?: |-)[0-9]{3}(?: |-)[0-9]{4})|([0-9]{7}))$/,
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phoneBarCode: /^\/{1}[0-9A-Z+-.]{7}$/,
  citizenCode: /^[A-Z]{2}[0-9]{14}$/
}, A0 = (t) => {
  const e = [];
  return t.name.length === 0 && e.push("name"), (t.phone.length === 0 || !gf.phone?.test(t.phone)) && e.push("phone"), (t.email.length === 0 || !gf.email?.test(t.email)) && e.push("email"), e;
}, M0 = (t) => t.split("/").filter((r) => r !== "").join("_") || "_", k0 = (t) => !(t || "").replace(/<([^>]+?)([^>]*?)>(.*?)<\/\1>/gi, "").replace(/(<([^>]+)>)/gi, "").trim();
function hE(t, e, r) {
  const n = Math.min(t.length, e.length), i = [];
  for (let a = 0; a < n; a++) i[a] = r(t[a], e[a]);
  return i;
}
function pE(t, e) {
  return t + e;
}
function yE(t, e) {
  return t * e;
}
const C0 = (t, e = {}) => {
  const { applyOldRules: r = !1 } = e;
  if (typeof t != "string" && typeof t != "number") return !1;
  const n = [1, 2, 1, 2, 1, 2, 4, 1], i = t.toString();
  if (!/^\d{8}$/.test(i)) return !1;
  const o = 10, s = hE(
    n,
    i.split("").map((f) => parseInt(f, o)),
    yE
  ).map((f) => f % 10 + Math.floor(f / 10)).reduce(pE, 0), u = r ? 10 : 5;
  return s % u === 0 || parseInt(i.charAt(6), o) === 7 && (s + 1) % u === 0;
}, vf = (t, e, r) => {
  let n;
  switch (t) {
    case "E_INPUT":
      n = new aE(e, r);
      break;
    case "E_SESSION":
      n = new oE(e, r);
      break;
    case "E_NO_MODULE":
      n = new sE(e, r);
      break;
    case "E_SEND_EMAIL":
      n = new uE(e, r);
      break;
    case "E_PASSWORD":
      n = new cE(e, r);
      break;
    case "E_NO_MEMBER":
      n = new fE(e, r);
      break;
    case "E_BIND_DEVICE":
      n = new lE(e, r);
      break;
    case "E_LOGIN_DEVICE":
      n = new dE(e, r);
      break;
    default:
      n = new Error(e);
  }
  return n;
}, I0 = () => {
  const t = Ur.get("_fbc"), e = Ur.get("_fbp"), r = Ur.get("__eruid");
  let n = Ur.get("utm");
  n = n ? JSON.parse(n) : null;
  const i = {};
  return n && Object.assign(i, { utm: n }), r && Object.assign(i, { dmpId: r }), t && Object.assign(i, { fbc: t }), e && Object.assign(i, { fbp: e }), i;
}, x0 = (t, e, r) => {
  if (t != null)
    return e === "LSC" ? `${t} ${r || e}` : `NT$ ${t}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}, D0 = {
  unknown: ye({
    period: { id: "common.unknown.period", defaultMessage: "未知週期" }
  }),
  unit: ye({
    min: { id: "common.unit.min", defaultMessage: "分" },
    sec: { id: "common.unit.sec", defaultMessage: "秒" },
    hour: { id: "common.unit.hour", defaultMessage: "時" },
    day: { id: "common.unit.day", defaultMessage: "天" },
    week: { id: "common.unit.week", defaultMessage: "週" },
    month: { id: "common.unit.month", defaultMessage: "月" },
    monthWithQuantifier: { id: "common.unit.monthWithQuantifier", defaultMessage: "個月" },
    year: { id: "common.unit.year", defaultMessage: "年" }
  }),
  title: ye({
    podcastSubscription: { id: "common.title.podcast.subscribe", defaultMessage: "訂閱廣播頻道" }
  }),
  label: ye({
    listPrice: { id: "common.label.listPrice", defaultMessage: "定價" },
    free: { id: "common.label.free", defaultMessage: "免費" },
    firstPeriod: { id: "common.label.firstPeriod", defaultMessage: "首期" },
    fromSecondPeriod: { id: "common.label.fromSecondPeriod", defaultMessage: "第二期開始" },
    originalPrice: { id: "common.label.originalPrice", defaultMessage: "原價" },
    name: { id: "common.label.name", defaultMessage: "名稱" },
    or: { id: "common.label.or", defaultMessage: "或" },
    referrer: { id: "common.label.referrer", defaultMessage: "推薦人" },
    referrerEmail: { id: "common.label.referrerEmail", defaultMessage: "請輸入推薦人的註冊信箱" }
  }),
  ui: ye({
    uploadImage: { id: "common.ui.uploadImage", defaultMessage: "上傳圖片" },
    upload: { id: "common.ui.upload", defaultMessage: "上傳" },
    selectImage: { id: "common.ui.selectImage", defaultMessage: "選擇圖片" },
    save: { id: "common.ui.save", defaultMessage: "儲存" },
    cancel: { id: "common.ui.cancel", defaultMessage: "取消" },
    modify: { id: "common.ui.modify", defaultMessage: "更改" },
    add: { id: "common.ui.add", defaultMessage: "新增" },
    delete: { id: "common.ui.delete", defaultMessage: "刪除" }
  }),
  button: ye({
    allCategory: { id: "common.button.allCategory", defaultMessage: "全部分類" },
    add: { id: "common.button.add", defaultMessage: "新增" },
    subscribeNow: { id: "common.subscribe.now", defaultMessage: "立即訂閱" }
  }),
  content: ye({
    noPeriod: { id: "common.content.noPeriod", defaultMessage: "無使用期限" }
  }),
  text: ye({
    selfReferringIsNotAllowed: { id: "common.text.selfReferringIsNotAllowed", defaultMessage: "不可填寫自己的信箱" },
    notFoundMemberEmail: { id: "common.text.notFoundMemberEmail", defaultMessage: "找不到這個註冊信箱" },
    emailFormatError: { id: "common.text.emailFormatError", defaultMessage: "請輸入正確信箱格式" }
  })
}, N0 = {
  activity: {
    content: ye({
      remaining: { id: "product.activity.content.remaining", defaultMessage: "剩餘" }
    })
  },
  label: ye({
    availableForLimitTime: {
      id: "programPackage.label.availableForLimitTime",
      defaultMessage: "可觀看 {amount} {unit}"
    },
    voucherPlanPriceLabel: {
      id: "product.label.voucherPlanPriceLabel",
      defaultMessage: "1 份 {saleAmount} 張 "
    },
    voucherProductItem: {
      id: "product.label.voucherProductItem",
      defaultMessage: "{quantity} 份 {totalAmount} 張"
    }
  })
}, L0 = {
  label: ye({
    isExpired: { id: "project.label.isExpired", defaultMessage: "已結束" },
    isExpiredFunding: { id: "project.label.isExpiredFunding", defaultMessage: "專案結束" }
  }),
  text: ye({
    people: { id: "project.text.people", defaultMessage: "{count} {count, plural, one {人} other {人}}" },
    preOrderCountDownDays: {
      id: "project.text.preOrderCountDownDays",
      defaultMessage: "優惠倒數 {days} {days, plural, one {天} other {天}}"
    },
    fundingCountDownDays: {
      id: "project.text.fundingCountDownDays",
      defaultMessage: "募資倒數 {days} {days, plural, one {天} other {天}}"
    },
    totalParticipants: {
      id: "project.text.totalParticipants",
      defaultMessage: "已有 {count} {count, plural, one {人} other {人}}參與"
    }
  })
}, F0 = {
  ui: ye({
    createPage: { id: "craft.ui.createPage", defaultMessage: "建立頁面" },
    deleteAllBlock: { id: "craft.ui.deleteAllBlock", defaultMessage: "移除整個區塊" },
    deleteBlock: { id: "craft.ui.deleteBlock", defaultMessage: "移除區塊" },
    deletePage: { id: "craft.ui.deletePage", defaultMessage: "刪除頁面" },
    empty: { id: "craft.ui.empty", defaultMessage: "無" },
    image: { id: "craft.ui.image", defaultMessage: "圖片" },
    solidColor: { id: "craft.ui.solidColor", defaultMessage: "純色" }
  }),
  label: ye({
    emptyPage: { id: "craft.label.emptyPage", defaultMessage: "空白頁" },
    settings: { id: "craft.label.settings", defaultMessage: "基本設定" },
    pageEditor: { id: "craft.label.pageEditor", defaultMessage: "首頁 - 編輯頁面" },
    editPage: { id: "craft.label.editPage", defaultMessage: "編輯頁面" },
    choiceTemplate: { id: "craft.label.choiceTemplate", defaultMessage: "選擇版型" },
    pageName: { id: "craft.label.pageName", defaultMessage: "頁面名稱" },
    path: { id: "craft.label.urlPath", defaultMessage: "網址路徑" },
    url: { id: "craft.label.url", defaultMessage: "網址" },
    latestUpdatedAt: { id: "craft.label.latestUpdatedAt", defaultMessage: "最後修改時間" },
    publish: { id: "craft.label.publish", defaultMessage: "發佈" },
    columnAmount: { id: "craft.label.columnAmount", defaultMessage: "欄數" },
    scrollAmount: { id: "craft.label.scrollAmount", defaultMessage: "捲動數量" },
    ratio: { id: "craft.label.ratio", defaultMessage: "比例" },
    displayAmount: { id: "craft.label.displayAmount", defaultMessage: "資料顯示數量" },
    title: { id: "craft.label.title", defaultMessage: "標題" },
    titleContent: { id: "craft.label.titleContent", defaultMessage: "標題內容" },
    content: { id: "craft.label.content", defaultMessage: "內文" },
    imageSetting: { id: "craft.label.imageSetting", defaultMessage: "圖片設定" },
    imageStyle: { id: "craft.label.imageStyle", defaultMessage: "圖片樣式" },
    avatarSetting: { id: "craft.label.avatar", defaultMessage: "頭像設定" },
    titleStyle: { id: "craft.label.titleStyle", defaultMessage: "標題樣式" },
    paragraphStyle: { id: "craft.label.paragraphStyle", defaultMessage: "段落樣式" },
    paragraphContent: { id: "craft.label.paragraphContent", defaultMessage: "段落內容" },
    cardStyle: { id: "craft.label.cardStyle", defaultMessage: "卡片樣式" },
    margin: { id: "craft.label.margin", defaultMessage: "外距" },
    padding: { id: "craft.label.padding", defaultMessage: "內距" },
    buttonSetting: { id: "craft.label.buttonSetting", defaultMessage: "按鈕設定" },
    buttonStyle: { id: "craft.label.buttonStyle", defaultMessage: "按鈕樣式" },
    carouselSetting: { id: "craft.label.carouselSetting", defaultMessage: "輪播設定" },
    desktopDisplay: { id: "craft.label.desktopDisplay", defaultMessage: "電腦版顯示" },
    mobileDisplay: { id: "craft.label.mobileDisplay", defaultMessage: "手機版顯示" },
    link: { id: "craft.label.link", defaultMessage: "連結" },
    openNewTab: { id: "craft.label.openNewTab", defaultMessage: "另開分頁" },
    fontSize: { id: "craft.label.fontSize", defaultMessage: "字級" },
    lineHeight: { id: "craft.label.lineHeight", defaultMessage: "行高" },
    textAlign: { id: "craft.label.textAlign", defaultMessage: "對齊" },
    left: { id: "craft.label.left", defaultMessage: "左" },
    center: { id: "craft.label.center", defaultMessage: "中" },
    right: { id: "craft.label.right", defaultMessage: "右" },
    fontWeight: { id: "craft.label.fontWeight", defaultMessage: "字重" },
    lighter: { id: "craft.label.lighter", defaultMessage: "細" },
    normal: { id: "craft.label.normal", defaultMessage: "中" },
    bold: { id: "craft.label.bold", defaultMessage: "粗" },
    size: { id: "craft.label.size", defaultMessage: "尺寸" },
    large: { id: "craft.label.large", defaultMessage: "大" },
    middle: { id: "craft.label.middle", defaultMessage: "中" },
    small: { id: "craft.label.small", defaultMessage: "小" },
    width: { id: "craft.label.width", defaultMessage: "寬度" },
    buttonBlock: { id: "craft.label.buttonBlock", defaultMessage: "滿版" },
    variant: { id: "craft.label.variant", defaultMessage: "變化" },
    plainText: { id: "craft.label.plainText", defaultMessage: "純文字" },
    coloring: { id: "craft.label.coloring", defaultMessage: "填色" },
    background: { id: "craft.label.background", defaultMessage: "背景" },
    backgroundColor: { id: "craft.label.backgroundColor", defaultMessage: "底色" },
    none: { id: "craft.label.none", defaultMessage: "無樣式" },
    outline: { id: "craft.label.outline", defaultMessage: "線框" },
    color: { id: "craft.label.color", defaultMessage: "顏色" },
    containerComponent: { id: "craft.label.containerComponent", defaultMessage: "區塊元件" },
    desktopLayoutComponent: { id: "craft.label.desktopLayoutComponent", defaultMessage: "電腦版排版元件" },
    mobileLayoutComponent: { id: "craft.label.mobileLayoutComponent", defaultMessage: "手機版排版元件" },
    desktopCarouselComponent: { id: "craft.label.desktopCarouselComponent", defaultMessage: "電腦版輪播元件" },
    mobileCarouselComponent: { id: "craft.label.mobileCarouselComponent", defaultMessage: "手機版輪播元件" },
    allTemplate: { id: "craft.label.allTemplate", defaultMessage: "所有樣板" },
    cover: { id: "craft.label.cover", defaultMessage: "輪播" },
    programBlock: { id: "craft.label.programBlock", defaultMessage: "課程區塊" },
    activityBlock: { id: "craft.label.activityBlock", defaultMessage: "活動區塊" },
    podcastBlock: { id: "craft.label.podcastBlock", defaultMessage: "廣播區塊" },
    lecturerBlock: { id: "craft.label.lecturerBlock", defaultMessage: "講師區塊" },
    fundraisingBlock: { id: "craft.label.fundraisingBlock", defaultMessage: "講師區塊" },
    preOrderBlock: { id: "craft.label.preOrderBlock", defaultMessage: "預購專區" },
    statistics: { id: "craft.label.statisticsBlock", defaultMessage: "統計數字" },
    description: { id: "craft.label.description", defaultMessage: "描述" },
    feature: { id: "craft.label.feature", defaultMessage: "特色" },
    callToAction: { id: "craft.label.callToAction", defaultMessage: "行動呼籲" },
    referrerEvaluation: { id: "craft.label.referrerEvaluation", defaultMessage: "推薦評價" },
    partner: { id: "craft.label.partner", defaultMessage: "合作夥伴" },
    commonProblem: { id: "craft.label.commonProblem", defaultMessage: "常見問題" },
    imageBlock: { id: "craft.label.imageBlock", defaultMessage: "圖片區塊" },
    textBlock: { id: "craft.label.textBlock", defaultMessage: "文字區塊" },
    programSection: { id: "craft.label.programSection", defaultMessage: "課程區塊" },
    activitySection: { id: "craft.label.activitySection", defaultMessage: "活動區塊" },
    blockSetting: { id: "craft.label.blockSetting", defaultMessage: "區塊樣式" },
    dataDisplay: { id: "craft.label.dataDisplay", defaultMessage: "資料顯示" },
    addItem: { id: "craft.label.addItem", defaultMessage: "新增項目" },
    specifyDisplayItem: { id: "craft.label.specifyDisplayItem", defaultMessage: "指定顯示項目" },
    categorySelector: { id: "craft.label.categorySelector", defaultMessage: "分類選擇器" },
    categorySelectorEnabled: { id: "craft.label.categorySelectorEnabled", defaultMessage: "啟用分類選擇器" },
    defaultCategoryId: { id: "craft.label.defaultCategoryId", defaultMessage: "預設分類" },
    choiceData: { id: "craft.label.choiceData", defaultMessage: "選擇資料" },
    program: { id: "craft.label.program", defaultMessage: "課程" },
    activity: { id: "craft.label.activity", defaultMessage: "活動" },
    podcast: { id: "craft.label.podcast", defaultMessage: "廣播" },
    lecturer: { id: "craft.label.lecturer", defaultMessage: "講師" },
    fundraising: { id: "craft.label.fundraising", defaultMessage: "募資" },
    preOrder: { id: "craft.label.preOrder", defaultMessage: "預購" },
    newest: { id: "craft.label.newest", defaultMessage: "最新上架" },
    custom: { id: "craft.label.custom", defaultMessage: "自訂項目" },
    ruleOfSort: { id: "craft.label.ruleOfSort", defaultMessage: "排序規則" },
    recentWatched: { id: "program.ProgramCollectionSelector.recentWatched", defaultMessage: "依最後觀看時間" },
    publishedAt: { id: "program.ProgramCollectionSelector.publishedAt", defaultMessage: "依上架日期" },
    currentPrice: { id: "program.ProgramCollectionSelector.currentPrice", defaultMessage: "依產品價錢" },
    popular: { id: "craft.label.popular", defaultMessage: "依熱門程度" }
  }),
  text: ye({
    chooseCategories: {
      id: "craft.text.chooseCategories",
      defaultMessage: "選擇分類"
    },
    deleteWarning: {
      id: "craft.text.deleteWarning",
      defaultMessage: "刪除不可恢復，確定要刪除嗎？"
    },
    deletePageConfirmation: {
      id: "craft.text.deletePageConfirmation",
      defaultMessage: "頁面一經刪除即不可恢復，確定要刪除嗎？"
    },
    deletePageWarning: {
      id: "craft.text.deletePageWarning",
      defaultMessage: "請仔細確認是否真的要刪除頁面，因為一旦刪除就無法恢復。"
    },
    noPageName: {
      id: "craft.text.noPageName",
      defaultMessage: "尚未填寫頁面名稱"
    },
    noPath: {
      id: "craft.text.noPath",
      defaultMessage: "尚未填寫網址路徑"
    },
    notCompleteNotation: {
      id: "craft.text.notCompleteNotation",
      defaultMessage: "請填寫以下必填資料，填寫完畢即可由此發佈"
    },
    unpublishedNotation: {
      id: "craft.text.unpublishedNotation",
      defaultMessage: "因你的頁面未發佈，此頁面並不會顯示。"
    },
    publishedNotation: {
      id: "craft.text.publishedNotation",
      defaultMessage: "現在你的頁面已經發佈，此頁面將會顯示。"
    },
    boxModelInputWarning: {
      id: "craft.text.boxModelInputWarning",
      defaultMessage: "請填入以下格式，5;3;5;3"
    }
  })
}, j0 = {
  CertificateContent: ye({
    number: { id: "certificate.CertificateContent.number", defaultMessage: "證書編號：{number}" },
    expiredTime: { id: "certificate.CertificateContent.expiredTime", defaultMessage: "證書效期：{expiredTime} 止" },
    deliveredAt: {
      id: "certificate.CertificateContent.deliveredAt",
      defaultMessage: "發放日期：{deliveredAt}"
    },
    qualification: {
      id: "certificate.CertificateContent.qualification",
      defaultMessage: "學習時數"
    }
  })
}, q0 = {
  unit: ye({
    piece: { id: "checkout.piece", defaultMessage: "張" }
  }),
  form: {
    label: ye({
      cardNo: { id: "checkout.form.label.cardNo", defaultMessage: "卡號" },
      cardExp: { id: "checkout.form.label.cardExp", defaultMessage: "有效期" }
    })
  },
  coupon: ye({
    fromNow: { id: "checkout.coupon.fromNow", defaultMessage: "即日起" },
    noPeriod: { id: "checkout.coupon.noPeriod", defaultMessage: "無使用期限" }
  }),
  content: ye({
    discountDirectly: { id: "checkout.discount.directly", defaultMessage: "直接折抵" }
  }),
  title: ye({
    cart: { id: "checkout.title.cart", defaultMessage: "購物清單" },
    chooseCoupon: { id: "checkout.title.chooseCoupon", defaultMessage: "選擇折價券" },
    chooseMemberCard: { id: "checkout.title.chooseMemberCard", defaultMessage: "選擇會員卡" }
  }),
  label: ye({
    email: { id: "checkout.label.email", defaultMessage: "聯絡信箱" },
    phone: { id: "checkout.label.phone", defaultMessage: "手機" },
    name: { id: "checkout.label.name", defaultMessage: "姓名" },
    invoice: { id: "checkout.label.invoice", defaultMessage: "發票" },
    paymentMethodPlaceholder: { id: "checkout.label.paymentMethodPlaceholder", defaultMessage: "請選擇付款方式" },
    paymentMethod: { id: "checkout.label.paymentMethod", defaultMessage: "付款方式" },
    credit: { id: "checkout.label.credit", defaultMessage: "信用卡" },
    vacc: { id: "checkout.label.vacc", defaultMessage: "ATM轉帳" },
    cvs: { id: "checkout.label.cvs", defaultMessage: "超商付款" },
    instflag: { id: "checkout.label.instflag", defaultMessage: "信用卡分期" },
    unionpay: { id: "checkout.label.unionpay", defaultMessage: "銀聯卡支付" },
    webatm: { id: "checkout.label.webatm", defaultMessage: "WebATM" },
    barcode: { id: "checkout.label.barcode", defaultMessage: "超商條碼繳費" },
    androidpay: { id: "checkout.label.androidpay", defaultMessage: "Google Pay" },
    samsungpay: { id: "checkout.label.samsungpay", defaultMessage: "Samsung Pay" },
    creditred: { id: "checkout.label.creditred", defaultMessage: "信用卡紅利支付" },
    cvscom: { id: "checkout.label.cvscom", defaultMessage: "超商取貨付款" },
    cash: { id: "checkout.label.cash", defaultMessage: "現金" },
    bankTransfer: { id: "checkout.label.bankTransfer", defaultMessage: "銀行轉帳" },
    physicalCredit: { id: "checkout.label.physicalCredit", defaultMessage: "實體刷卡" },
    physicalRemoteCredit: { id: "checkout.label.physicalRemoteCredit", defaultMessage: "實體刷卡遠刷" },
    alipay: { id: "checkout.label.alipay", defaultMessage: "支付寶" },
    ezpay: { id: "checkout.label.ezpay", defaultMessage: "ezPay" },
    esumwallet: { id: "checkout.label.esumwallet", defaultMessage: "玉山 Wallet" },
    taiwanpay: { id: "checkout.label.taiwanpay", defaultMessage: "台灣 Pay" },
    linepay: { id: "checkout.label.linepay", defaultMessage: "Line Pay" },
    applepay: { id: "checkout.label.applepay", defaultMessage: "Apple Pay" },
    spgateway: { id: "checkout.label.spgateway", defaultMessage: "藍新" },
    physical: { id: "checkout.label.physical", defaultMessage: "實體" },
    spgateway2: { id: "checkout.label.spgateway2", defaultMessage: "藍新" },
    tappay: { id: "checkout.label.tappay", defaultMessage: "tappay" },
    paypal: { id: "checkout.label.paypal", defaultMessage: "PayPal - 限非台灣地區" },
    parenting: { id: "checkout.label.parenting", defaultMessage: "親子天下" },
    commonhealth: { id: "checkout.label.commonhealth", defaultMessage: "康健" },
    cw_commonhealth: { id: "checkout.label.cw_commonhealth", defaultMessage: "康健" },
    cw_parenting: { id: "checkout.label.cw_parenting", defaultMessage: "親子天下" },
    cw_cw: { id: "checkout.label.cw_cw", defaultMessage: "天下" },
    atome: { id: "checkout.label.atome", defaultMessage: "Atome" },
    groupBuying: { id: "checkout.label.groupBuying", defaultMessage: "多人同行揪團" },
    noDiscount: { id: "checkout.label.noDiscount", defaultMessage: "無折扣" },
    useCoupon: { id: "checkout.label.useCoupon", defaultMessage: "使用折價券" },
    useMemberCard: { id: "checkout.label.useMemberCard", defaultMessage: "使用會員卡" },
    groupBuyingRuleTitle: {
      id: "checkout.label.groupBuyingRuleTitle",
      defaultMessage: "多人同行揪團規定與退費說明"
    },
    groupBuyingPlan: {
      id: "checkout.label.groupBuyingTitle",
      defaultMessage: "你購買「{title}」多人同行 方案："
    },
    partnerEmail: {
      id: "checkout.label.partnerEmail",
      defaultMessage: "第{index}位同行者"
    },
    shippingInput: { id: "checkout.label.shippingInput", defaultMessage: "寄送資訊" },
    shippingMethod: { id: "checkout.label.shippingMethod", defaultMessage: "寄送方式" },
    selectStore: { id: "checkout.label.selectStore", defaultMessage: "選擇門市" },
    receiverName: { id: "checkout.label.receiverName", defaultMessage: "收件人姓名" },
    receiverPhone: { id: "checkout.label.receiverPhone", defaultMessage: "收件人電話" },
    specification: { id: "checkout.label.specification", defaultMessage: "商品規格與備註" },
    receiverAddress: { id: "checkout.label.receiverAddress", defaultMessage: "收件人地址" },
    electronicInvoice: { id: "checkout.label.electronicInvoice", defaultMessage: "個人" },
    donateInvoice: { id: "checkout.label.donateInvoice", defaultMessage: "捐贈" },
    uniformNumber: { id: "checkout.label.uniformNumber", defaultMessage: "統一編號" },
    hardcopyInvoice: { id: "checkout.label.hardcopyInvoice", defaultMessage: "個人" },
    hardcopyUniformNumberInvoice: { id: "checkout.label.hardcopyUniformNumberInvoice", defaultMessage: "公司" },
    sendToEmail: { id: "checkout.label.sendToEmail", defaultMessage: "寄送至電子信箱" },
    usePhoneBarCode: { id: "checkout.label.usePhoneBarCode", defaultMessage: "使用手機條碼" },
    citizenCode: { id: "checkout.label.citizenCode", defaultMessage: "自然人憑證條碼" },
    phoneBarCode: { id: "checkout.label.phoneBarCode", defaultMessage: "手機條碼" },
    uniformTitle: { id: "checkout.label.uniformTitle", defaultMessage: "發票抬頭" },
    postCode: { id: "checkout.label.postCode", defaultMessage: "郵遞區號" },
    approved: { id: "checkout.label.approved", defaultMessage: "我同意" },
    creditLastFour: { id: "checkout.label.creditLastFour", defaultMessage: "末四碼" }
  }),
  message: ye({
    phone: { id: "checkout.message.phone", defaultMessage: "手機" },
    errorName: { id: "checkout.message.errorName", defaultMessage: "請輸入姓名" },
    errorEmail: { id: "checkout.message.errorEmail", defaultMessage: "信箱格式錯誤" },
    emailText: { id: "checkout.message.email", defaultMessage: "請填寫電子信箱" },
    addressText: { id: "checkout.message.addressText", defaultMessage: "請輸入地址" },
    warningPayment: {
      id: "checkout.message.warningPayment",
      defaultMessage: "下一步將連至第三方金流服務進行付款，你所有的交易資訊皆獲得安全保護。"
    },
    warningEmail: {
      id: "checkout.message.warningEmail",
      defaultMessage: "請填寫真實資料，填寫後不可更改，僅供發票與相關聯繫使用。"
    },
    warningHardcopy: {
      id: "checkout.message.warningHardcopy",
      defaultMessage: "以下資訊只用於開立發票，資料填寫後不可更改。"
    },
    sameToShipping: { id: "checkout.message.sameToShipping", defaultMessage: "同寄送資訊" },
    errorPhone: { id: "checkout.message.errorPhone", defaultMessage: "手機格式錯誤" },
    phoneBarCodeText: {
      id: "checkout.message.phoneBarCode",
      defaultMessage: "長度 8 個字元，由斜線（/）加上 7 碼 +、-、.、數字及大寫字母組成"
    },
    citizenCodeText: {
      id: "checkout.message.citizenCode",
      defaultMessage: "長度 16 個字元，由 2 碼大寫字母加上 14 碼數字組成"
    },
    uniformNumberText: {
      id: "checkout.message.uniformNumberText",
      defaultMessage: "送出後無法更改，請務必確認"
    },
    uniformTitleText: { id: "checkout.message.uniformTitleText", defaultMessage: "請輸入發票抬頭" },
    uniformNumberRemark: {
      id: "checkout.message.uniformNumberRemark",
      defaultMessage: "備註：統編發票將直接寄送至您留下的電子信箱內"
    },
    notEnough: {
      id: "checkout.message.notEnough",
      defaultMessage: "不足"
    },
    notEnoughCoins: {
      id: "checkout.message.notEnoughCoins",
      defaultMessage: "代幣不足"
    }
  }),
  shipping: ye({
    sevenEleven: { id: "checkout.label.sevenEleven", defaultMessage: "7-11超商取貨" },
    familyMart: { id: "checkout.label.familyMart", defaultMessage: "全家超商取貨" },
    hiLife: { id: "checkout.label.hiLife", defaultMessage: "萊爾富超商取貨" },
    okMart: { id: "checkout.label.okMart", defaultMessage: "OK超商取貨" },
    sendByPost: { id: "checkout.label.sendByPost", defaultMessage: "郵寄" },
    homeDelivery: { id: "checkout.label.homeDelivery", defaultMessage: "宅配" },
    other: { id: "checkout.label.other", defaultMessage: "其他" }
  }),
  button: ye({
    reselectCoupon: { id: "checkout.button.reselectCoupon", defaultMessage: "重新選擇" },
    chooseCoupon: { id: "checkout.button.chooseCoupon.", defaultMessage: "選擇折價券" },
    cartSubmit: { id: "checkout.cart.cartSubmit", defaultMessage: "前往結帳" }
  }),
  placeholder: ye({
    enterCouponCode: { id: "checkout.placeholder.enterCouponCode", defaultMessage: "輸入折扣碼" },
    nameText: { id: "checkout.placeholder.nameText", defaultMessage: "真實姓名" }
  }),
  text: ye({
    groupBuyingRuleLink: {
      id: "checkout.text.groupBuyingRuleLink",
      defaultMessage: "規定與退費"
    },
    groupBuyingRule1: {
      id: "checkout.text.groupBuyingRule1",
      defaultMessage: " 選擇多人同行方案，僅會開立一張發票，無法另外提供多張發票。"
    },
    groupBuyingRule2: {
      id: "checkout.text.groupBuyingRule2",
      defaultMessage: "多人同行方案不得與其他優惠合併使用。"
    },
    groupBuyingRule3: {
      id: "checkout.text.groupBuyingRule3",
      defaultMessage: "多人同行方案於購買後 7 天內，只要所有人尚未使用，即可申請全額退費。"
    },
    groupBuyingRule4: {
      id: "checkout.text.groupBuyingRule4",
      defaultMessage: "退費時由多人同行方案的購買人向平台方提出申請，平台方也將統一退費給當初的購買人，將不分別退費。"
    },
    groupBuyingRule5: {
      id: "checkout.text.groupBuyingRule5",
      defaultMessage: "會員之間的項目轉讓，均屬會員的私人行為，平台方均不干涉。"
    },
    groupBuyingDescription1: {
      id: "checkout.text.groupBuyingDescription1",
      defaultMessage: "可於底下填寫同行者信箱帳號，將於完成付款後隨即開通，主揪者與同行者皆可在「我的主頁」內找到購買項目。"
    },
    groupBuyingDescription2: {
      id: "checkout.text.groupBuyingDescription2",
      defaultMessage: "請{warning}；若因填寫錯誤導致權益開通失敗，造成權益損失，{appName}恕不負責。"
    },
    groupBuyingDescriptionComfirmWarning: {
      id: "checkout.text.groupBuyingDescriptionComfirmWarning",
      defaultMessage: "務必確認同行者信箱帳號正確"
    },
    groupBuyingDescription3: {
      id: "checkout.text.groupBuyingDescription3",
      defaultMessage: "若本次未填寫同行者信箱，則會保留在後台的「我的揪團」，可以之後再指定開通給其他會員。"
    },
    groupBuyingDescription4: {
      id: "checkout.text.groupBuyingDescription4",
      defaultMessage: "注意事項：購買即同意以下多人同行揪團{modal}辦法。"
    },
    existingPartner: {
      id: "checkout.text.existingPartner",
      defaultMessage: "重複的同行者"
    },
    fillInPartnerEmail: {
      id: "checkout.text.fillInPartnerEmail",
      defaultMessage: "請填寫同行者在站上註冊的電子信箱"
    },
    invoiceDescription1: {
      id: "checkout.text.invoiceDescription1",
      defaultMessage: "你的發票姓名、手機、email 與您註冊時填寫的會員資料相同，中獎時會主動通知。"
    },
    invoiceDescription2: {
      id: "checkout.text.invoiceDescription2",
      defaultMessage: "若需要修改密碼、會員資料，"
    },
    invoiceDescription3: {
      id: "checkout.text.invoiceDescription3",
      defaultMessage: "請點此"
    },
    invoiceDescription4: {
      id: "checkout.text.invoiceDescription4",
      defaultMessage: "，登入後進行修改。"
    }
  })
}, mE = ye({
  SUCCESS: {
    id: "code.SUCCESS",
    defaultMessage: "成功"
  },
  E_INPUT: {
    id: "code.E_INPUT",
    defaultMessage: "輸入資料有誤"
  },
  E_USERNAME_EXISTS: {
    id: "code.E_USERNAME_EXISTS",
    defaultMessage: "使用者名稱已存在"
  },
  E_EMAIL_EXISTS: {
    id: "code.E_EMAIL_EXISTS",
    defaultMessage: "電子信箱已存在"
  },
  E_SEND_EMAIL: {
    id: "code.E_SEND_EMAIL",
    defaultMessage: "寄送信件失敗"
  },
  E_UNKNOWN: {
    id: "code.E_UNKNOWN",
    defaultMessage: "未知錯誤"
  },
  E_INSERT_QUEUE: {
    id: "code.E_INSERT_QUEUE",
    defaultMessage: "E_INSERT_QUEUE"
  },
  E_NO_MEMBER: {
    id: "code.E_NO_MEMBER",
    defaultMessage: "找不到該使用者"
  },
  E_NO_APP_HOST: {
    id: "code.E_NO_APP_HOST",
    defaultMessage: "E_NO_APP_HOST"
  },
  E_NO_ORDER: {
    id: "code.E_NO_ORDER",
    defaultMessage: "找不到該訂單"
  },
  E_NO_PAYMENT: {
    id: "code.E_NO_PAYMENT",
    defaultMessage: "找不到該付款紀錄"
  },
  E_NO_EMAIL: {
    id: "code.E_NO_EMAIL",
    defaultMessage: "找不到信箱"
  },
  E_PASSWORD: {
    id: "code.E_PASSWORD",
    defaultMessage: "密碼錯誤"
  },
  E_PROVIDER: {
    id: "code.E_PROVIDER",
    defaultMessage: "E_PROVIDER"
  },
  E_PROVIDER_TOKEN: {
    id: "code.E_PROVIDER_TOKEN",
    defaultMessage: "E_PROVIDER_TOKEN"
  },
  E_UPDATE_PASSWORD: {
    id: "code.E_UPDATE_PASSWORD",
    defaultMessage: "更新密碼錯誤"
  },
  E_CHECKOUT_ORDER: {
    id: "code.E_CHECKOUT_ORDER",
    defaultMessage: "結帳錯誤"
  },
  E_MPG_SERVICE: {
    id: "code.E_MPG_SERVICE",
    defaultMessage: "E_MPG_SERVICE"
  },
  E_SPGATEWAY_NOTIFY: {
    id: "code.E_SPGATEWAY_NOTIFY",
    defaultMessage: "E_SPGATEWAY_NOTIFY"
  },
  E_UPDATE_ORDER_STATUS: {
    id: "code.E_UPDATE_ORDER_STATUS",
    defaultMessage: "E_UPDATE_ORDER_STATUS"
  },
  E_LOGOUT: {
    id: "code.E_LOGOUT",
    defaultMessage: "登出錯誤"
  },
  E_DELIVER_PRODUCTS: {
    id: "code.E_DELIVER_PRODUCTS",
    defaultMessage: "E_DELIVER_PRODUCTS"
  },
  E_ISSUE_INVOICE: {
    id: "code.E_ISSUE_INVOICE",
    defaultMessage: "開立發票錯誤"
  },
  E_NO_CODE: {
    id: "code.E_NO_CODE",
    defaultMessage: "折價券序號有誤"
  },
  E_EXCHANGE_CODE: {
    id: "code.E_EXCHANGE_CODE",
    defaultMessage: "無法加入該折價券"
  },
  E_OUTDATED_CODE: {
    id: "code.E_OUTDATED_CODE",
    defaultMessage: "折價券已過期"
  },
  E_VALIDATE_CREDIT_CARD: {
    id: "code.E_VALIDATE_CREDIT_CARD",
    defaultMessage: "信用卡驗證錯誤"
  },
  E_SETUP_TPCLIENT: {
    id: "code.E_SETUP_TPCLIENT",
    defaultMessage: "E_SETUP_TPCLIENT"
  },
  E_BIND_CREDIT_CARD: {
    id: "code.E_BIND_CREDIT_CARD",
    defaultMessage: "綁定信用卡錯誤"
  },
  E_PAYPAL_EXEC: {
    id: "code.E_PAYPAL_EXEC",
    defaultMessage: "PAYPAL執行操作失敗"
  },
  E_PAYPAL_ORDER: {
    id: "code.E_PAYPAL_ORDER",
    defaultMessage: "PAYPAL建立付款失敗"
  },
  E_PAYPAL_CAPTURE: {
    id: "code.E_PAYPAL_CAPTURE",
    defaultMessage: "PAYPAL請款失敗"
  },
  E_NO_PAYMENT_METHOD: {
    id: "code.E_NO_PAYMENT_METHOD",
    defaultMessage: "找不到該付款方式"
  },
  E_INVALID_PAYMENT_METHOD: {
    id: "code.E_INVALID_PAYMENT_METHOD",
    defaultMessage: "該付款方式無效"
  },
  E_PAY_TPCLIENT: {
    id: "code.E_PAY_TPCLIENT",
    defaultMessage: "信用卡付款失敗請重新輸入卡號"
  },
  E_SIGN_URL: {
    id: "code.E_SIGN_URL",
    defaultMessage: "E_SIGN_URL"
  },
  E_ZOOM_SECRET: {
    id: "code.E_ZOOM_SECRET",
    defaultMessage: "E_ZOOM_SECRET"
  },
  E_LIST_ZOOM_USER: {
    id: "code.E_LIST_ZOOM_USER",
    defaultMessage: "E_LIST_ZOOM_USER"
  },
  E_HANDLE_TRIGGER: {
    id: "code.E_HANDLE_TRIGGER",
    defaultMessage: "E_HANDLE_TRIGGER"
  },
  E_GET_MEMBER: {
    id: "code.E_GET_MEMBER",
    defaultMessage: "無法取得使用者"
  },
  E_REGISTER_MEMBER: {
    id: "code.E_REGISTER_MEMBER",
    defaultMessage: "註冊使用者錯誤"
  },
  E_PAYMENT_GATEWAY: {
    id: "code.E_PAYMENT_GATEWAY",
    defaultMessage: "E_PAYMENT_GATEWAY"
  },
  E_RESET_PASSWORD_TOKEN: {
    id: "code.E_RESET_PASSWORD_TOKEN",
    defaultMessage: "連結已失效"
  },
  E_SETUP_PAYPAL: {
    id: "code.E_SETUP_PAYPAL",
    defaultMessage: "Paypal 環境設定失敗"
  },
  E_CW_SETUP: {
    id: "code.E_CW_SETUP",
    defaultMessage: "CW 環境設定失敗"
  },
  E_CW_SERVICE: {
    id: "code.E_CW_SERVICE",
    defaultMessage: "CW 導入付款頁失敗"
  },
  E_DUPLICATED_EXCHANGE: {
    id: "code.E_DUPLICATED_EXCHANGE",
    defaultMessage: "Discount already exchange"
  }
}), gE = new vh(), $0 = (t, e, r, n, i, a) => ({
  formatCurrency: (s) => {
    const u = i || r || "TWD";
    return u === "LSC" ? `${s} ${n || a || "Coins"}` : s.toLocaleString(t || navigator.language, {
      style: "currency",
      currency: u,
      maximumFractionDigits: e?.minorUnits || 0,
      minimumFractionDigits: 0
    }) || "";
  }
}), vE = (t) => {
  const e = {};
  return document.cookie.split(";").forEach(function(r) {
    const [n, i] = r.split("=");
    e[n.trim()] = i;
  }), e[t.trim()] || "";
}, B0 = (t) => {
  const [e, r] = t.split("_");
  return { type: e.split(/(?=[A-Z])/).join("_").toLowerCase(), target: r };
}, U0 = () => {
  const { formatMessage: t } = bh(), e = hh();
  return (n) => {
    try {
      e({
        title: n.responseCode ? `${t(mE[n.responseCode])}` : n.title,
        status: n.status || "success",
        duration: n.duration || 1500,
        position: n.position || "top"
      });
    } catch {
      alert(n.responseCode);
    }
  };
}, bE = gh.load(), bf = async () => {
  const e = await (await bE).get(), r = vE("fingerPrintId");
  return r.length > 0 ? r : e.visitorId;
}, Ef = async () => {
  try {
    const t = await ce.get("https://ipapi.co/json/");
    if (t.data?.error)
      throw new Error(t.data.reason);
    return {
      ip: t.data.ip,
      country: t.data.country_name,
      countryCode: t.data.country_code,
      error: null
    };
  } catch (t) {
    return { ip: null, country: null, countryCode: null, error: t };
  }
}, wf = (t) => {
  const e = Id.decode(t), r = {
    type: "object",
    properties: {
      sub: { type: "string" },
      orgId: { type: "string", nullable: !0 },
      appId: { type: "string" },
      name: { type: "string" },
      username: { type: "string" },
      email: { type: "string" },
      phoneNumber: { type: "string", nullable: !0 },
      role: { type: "string" },
      pictureUrl: { type: "string", nullable: !0 },
      permissions: { type: "array", items: { type: "string" }, default: [] },
      options: { type: "object", nullable: !0 },
      isFinishedSignUpProperty: { type: "boolean", nullable: !0 },
      isBusiness: { type: "boolean", nullable: !0, default: !1 },
      loggedInMembers: { type: "array", items: { type: "object", required: [] }, nullable: !0, default: [] }
    },
    required: []
  }, n = gE.compile(r);
  return n(e) ? e : (console.error(`validate error: ${n.errors?.join(`
`)}`), null);
}, Hd = {
  isAuthenticating: !window.AUTH_TOKEN,
  isAuthenticated: !1,
  currentUserRole: "anonymous",
  currentMemberId: null,
  authToken: null,
  currentMember: null,
  permissions: {},
  isFinishedSignUpProperty: !0
}, EE = () => {
  typeof window < "u" && (window.lodestar = window.lodestar || {});
}, Gd = gn(Hd), Jd = () => Af(Gd), wE = ({ appId: t, children: e }) => {
  const [r, n] = on(Hd.isAuthenticating), [i, a] = on(window.AUTH_TOKEN || null), o = dr(() => i ? wf(i) : null, [i]);
  sn(() => {
    if (o)
      try {
        const f = o?.phoneNumber ? ch(o.phoneNumber, "TW") : null, c = window;
        c.insider_object = {
          user: {
            gdpr_optin: !0,
            sms_optin: !0,
            email: o.email,
            phone_number: f?.isValid() ? f.number : o.phoneNumber,
            email_optin: !0
          }
        }, tE.set({ userId: o.sub });
      } catch (f) {
        process.env.NODE_ENV === "development" && console.error(f);
      }
  }, [o, window]);
  const s = ih(async () => {
    const f = await bf(), { ip: c, country: l, countryCode: d } = await Ef(), {
      data: { code: y, result: m }
    } = await ce.post(
      `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/refresh-token`,
      { appId: t, fingerPrintId: f, geoLocation: { ip: c, country: l, countryCode: d } },
      {
        method: "POST",
        withCredentials: !0
      }
    );
    y === "SUCCESS" ? a(m.authToken) : y === "E_NO_DEVICE" ? (a(null), alert("您已被登出，目前有其他裝置登入這組帳號")) : a(null), n(!1);
  }, [t]), u = o && {
    id: o.sub,
    name: o.name,
    username: o.username,
    email: o.email,
    pictureUrl: o.pictureUrl || null,
    role: o.role,
    options: o.options || {}
  };
  return EE(), typeof window < "u" && (window.lodestar.getCurrentMember = () => u, window.lodestar.getDataLayerByEvent = (f) => window.dataLayer.find((c) => c.event === f)), /* @__PURE__ */ Ie.jsx(
    Gd.Provider,
    {
      value: {
        isAuthenticating: r,
        isAuthenticated: !!i,
        currentUserRole: o?.role || "anonymous",
        currentMemberId: o?.sub || null,
        authToken: i,
        updateAuthToken: (f) => a(f),
        isFinishedSignUpProperty: !!o?.isFinishedSignUpProperty,
        currentMember: u,
        permissions: o?.permissions?.reduce((f, c) => (f[c] = !0, f), {}) || {},
        refreshToken: s,
        register: async (f) => ce.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/register`,
          {
            appId: f.appId || t,
            username: f.username,
            email: f.email,
            password: f.password,
            isBusiness: f.isBusiness ?? !1
          },
          { withCredentials: !0 }
        ).then(({ data: { code: c, message: l, result: d } }) => {
          if (c === "SUCCESS") {
            f.withoutLogin || a(d.authToken);
            try {
              const y = Id.decode(d.authToken)?.sub, m = sessionStorage.getItem("phone");
              m && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT && ce.post(
                process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT,
                {
                  query: `
                        mutation INSERT_MEMBER_PHONE_ONE($currentMemberId: String!, $phone: String!) {
                          insert_member_phone_one(object: { member_id: $currentMemberId, phone: $phone }) {
                            id
                          }
                        }
                    `,
                  variables: {
                    currentMemberId: y,
                    phone: m
                  }
                },
                { headers: { Authorization: `Bearer ${d.authToken}` } }
              );
              const v = JSON.parse(sessionStorage.getItem("categoryIds") || "[]"), b = JSON.parse(
                sessionStorage.getItem("memberProperties") || "[]"
              );
              v.length && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT && ce.post(
                process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT,
                {
                  query: `
                        mutation INSERT_MEMBER_CATEGORIES($memberProperties: [member_property_insert_input!]!, $data: [member_category_insert_input!]!) {
                          insert_member_property(objects: $memberProperties) {
                            affected_rows
                          }
                          insert_member_category(objects: $data) {
                            affected_rows
                          }
                        }
                      `,
                  variables: {
                    memberProperties: b.map((_) => ({
                      member_id: y,
                      property_id: _.propertyId,
                      value: _.value
                    })),
                    data: v.map((_, w) => ({
                      member_id: y,
                      category_id: _,
                      position: w
                    }))
                  }
                },
                { headers: { Authorization: `Bearer ${d.authToken}` } }
              );
              const g = sessionStorage.getItem("star");
              return g && process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT && ce.post(
                process.env.NEXT_PUBLIC_GRAPHQL_PH_ENDPOINT,
                {
                  query: `
                        mutation SET_MEMBER_STAR($memberId: String!, $star: numeric!) {
                          update_member(where: {id: {_eq: $memberId}}, _set: {star: $star}) {
                            affected_rows
                          }
                        }                      
                      `,
                  variables: {
                    memberId: y,
                    star: parseInt(g)
                  }
                },
                { headers: { Authorization: `Bearer ${d.authToken}` } }
              ), d.authToken;
            } catch {
            }
          } else
            throw a(null), new Error(c);
        }),
        login: async ({ account: f, password: c, accountLinkToken: l }) => {
          const d = await bf(), { ip: y, country: m, countryCode: v } = await Ef(), {
            data: { code: b, message: g, result: _ }
          } = await ce.post(
            `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/general-login`,
            { appId: t, account: f, password: c, fingerPrintId: d, geoLocation: { ip: y, country: m, countryCode: v } },
            { withCredentials: !0 }
          );
          if (b === "SUCCESS")
            a(_.authToken), l && _.authToken && window.location.assign(`/line-binding?accountLinkToken=${l}`);
          else if (b === "I_RESET_PASSWORD")
            window.location.assign(`/check-email?email=${f}&type=reset-password`);
          else
            throw a(null), vf(b, g, _);
          return { code: b };
        },
        socialLogin: async ({ provider: f, providerToken: c, accountLinkToken: l, isForceLogin: d }) => ce.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/social-login`,
          {
            appId: t,
            provider: f,
            providerToken: c,
            isForceLogin: d
          },
          { withCredentials: !0 }
        ).then(async ({ data: { code: y, message: m, result: v } }) => {
          if (y === "SUCCESS") {
            if (a(v.authToken), !wf(v.authToken))
              throw new Error("no auth token");
            l && v.authToken && window.location.assign(`/line-binding?accountLinkToken=${l}`);
          } else
            throw a(null), vf(y, m, v);
        }),
        switchMember: async ({ memberId: f }) => ce.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/switch-member`,
          {
            memberId: f
          },
          { withCredentials: !0, headers: { Authorization: "Bearer " + i } }
        ).then(({ data: { code: c, _: l, result: d } }) => {
          if (c === "SUCCESS")
            a(d.authToken);
          else
            throw new Error(c);
        }),
        logout: async () => {
          localStorage.clear(), typeof window < "u" && window.location.assign(
            `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/logout?redirect=${window.location.href}`
          );
        },
        sendSmsCode: async ({ phoneNumber: f }) => ce.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/sms/send-code`,
          {
            appId: t,
            phoneNumber: f
          },
          { withCredentials: !0 }
        ).then(({ data: { code: c } }) => {
          if (c !== "SUCCESS")
            throw new Error(c);
        }),
        verifySmsCode: async ({ phoneNumber: f, code: c }) => ce.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/sms/verify-code`,
          {
            appId: t,
            phoneNumber: f,
            code: c
          },
          { withCredentials: !0 }
        ).then(({ data: { code: l, _: d, result: y } }) => {
          if (l !== "SUCCESS" || !y?.codeValid)
            throw new Error(l);
        }),
        forceLogin: async ({ account: f, password: c, accountLinkToken: l }) => ce.post(
          `${process.env.NEXT_PUBLIC_API_BASE_ROOT}/auth/force-login`,
          { appId: t, account: f, password: c },
          { withCredentials: !0 }
        ).then(({ data: { code: d, result: y } }) => {
          if (d === "SUCCESS")
            a(y.authToken), l && y.authToken && typeof window < "u" && window.location.assign(`/line-binding?accountLinkToken=${l}`);
          else if (d === "I_RESET_PASSWORD" && typeof window < "u")
            window.location.assign(`/check-email?email=${f}&type=reset-password`);
          else
            throw a(null), new Error(d);
        }).catch((d) => {
          throw d;
        })
      },
      children: e
    }
  );
}, _E = ({ appId: t, children: e }) => {
  const { authToken: r } = Jd(), n = Gm(
    { appId: t, authToken: r },
    {
      "invalid-jwt": typeof window < "u" ? window.location.reload : () => {
      }
    }
  );
  return /* @__PURE__ */ Ie.jsx(wm, { client: n, children: /* @__PURE__ */ Ie.jsx(Ie.Fragment, { children: e }) });
}, Kd = {
  id: "",
  orgId: null,
  name: "",
  title: null,
  description: null,
  host: "",
  hosts: [],
  enabledModules: {},
  appPlanId: "",
  navs: [],
  settings: {},
  secrets: {},
  currencyId: "TWD",
  currencies: {},
  loading: !0,
  options: {
    video_duration: 0,
    watched_seconds: 0
  },
  endedAt: null
}, Xd = gn(Kd), Zd = () => Af(Xd), SE = ({ appId: t, children: e }) => {
  const { authToken: r, refreshToken: n } = Jd(), { data: i, loading: a, error: o, refetch: s } = Ul(
    Pt`
      query GET_APP($appId: String!) {
        currency {
          id
          name
          label
          unit
          minor_units
        }

        app_by_pk(id: $appId) {
          id
          org_id
          name
          title
          description
          app_modules {
            id
            module_id
          }
          app_plan_id
          app_navs(order_by: { position: asc }, where: { parent_id: { _is_null: true } }) {
            id
            block
            position
            label
            icon
            href
            external
            locale
            tag
            parent_id
            sub_app_navs(order_by: { position: asc }) {
              id
              block
              position
              label
              icon
              href
              external
              locale
              tag
              parent_id
            }
          }
          app_settings {
            key
            value
          }
          app_secrets {
            key
            value
          }
          app_hosts(order_by: { priority: asc }) {
            host
          }
          options
          ended_at
        }
      }
    `,
    {
      variables: { appId: t },
      context: { important: !0 }
    }
  ), u = dr(
    () => Object.fromEntries(i?.app_by_pk?.app_settings.map((l) => [l.key, l.value]) || []),
    [i?.app_by_pk?.app_settings]
  ), f = dr(
    () => Object.fromEntries(i?.app_by_pk?.app_secrets.map((l) => [l.key, l.value]) || []),
    [i?.app_by_pk?.app_secrets]
  ), c = dr(
    () => i?.app_by_pk ? {
      loading: a,
      error: o,
      refetch: s,
      id: i.app_by_pk.id,
      orgId: i.app_by_pk.org_id || null,
      name: i.app_by_pk.name || "",
      title: i.app_by_pk.title || null,
      description: i.app_by_pk.description || null,
      host: i.app_by_pk.app_hosts?.[0]?.host ?? (typeof window < "u" ? window.location.host : ""),
      hosts: i?.app_by_pk?.app_hosts.map((l) => l.host) || [],
      enabledModules: Object.fromEntries(i.app_by_pk.app_modules.map((l) => [l.module_id, !0]) || []),
      appPlanId: i?.app_by_pk.app_plan_id,
      navs: i.app_by_pk.app_navs.map((l) => ({
        id: l.id,
        block: l.block,
        position: l.position,
        label: l.label,
        icon: l.icon || null,
        href: l.href,
        external: l.external,
        locale: l.locale,
        tag: l.tag || null,
        parentId: l.parent_id || null,
        subNavs: l.sub_app_navs.map((d) => ({
          id: d.id,
          block: d.block,
          position: d.position,
          label: d.label,
          icon: d.icon || null,
          href: d.href,
          external: d.external,
          locale: d.locale,
          tag: d.tag || null,
          parentId: d.parent_id || null
        }))
      })),
      settings: u,
      secrets: f,
      currencyId: u.currency_id || "TWD",
      currencies: i?.currency.reduce(
        (l, d) => (l[d.id] = {
          id: d.id,
          name: d.id === "LSC" && u["coin.name"] ? u["coin.name"] : d.name,
          label: d.id === "LSC" && u["coin.label"] ? u["coin.label"] : d.label,
          unit: d.id === "LSC" && u["coin.unit"] ? u["coin.unit"] : d.unit,
          minorUnits: d.minor_units ? d.minor_units : 0
        }, l),
        {}
      ) || {},
      options: i.app_by_pk.options,
      endedAt: i.app_by_pk.ended_at || null
    } : Kd,
    [i?.app_by_pk, i?.currency, o, a, s, f, u]
  );
  return sn(() => {
    r || n?.();
  }, [t, r, n]), /* @__PURE__ */ Ie.jsx(Xd.Provider, { value: c, children: e });
};
var OE = ({ hex: t, preserve: e, shades: r }) => {
  const n = ((o) => {
    const s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(o) || [];
    try {
      let u = parseInt(s[1], 16), f = parseInt(s[2], 16), c = parseInt(s[3], 16);
      u /= 255, f /= 255, c /= 255;
      const l = Math.max(u, f, c), d = Math.min(u, f, c);
      let y, m = 0, v = (l + d) / 2;
      if (l == d) m = y = 0;
      else {
        const g = l - d;
        switch (y = v > 0.5 ? g / (2 - l - d) : g / (l + d), l) {
          case u:
            m = (f - c) / g + (f < c ? 6 : 0);
            break;
          case f:
            m = (c - u) / g + 2;
            break;
          case c:
            m = (u - f) / g + 4;
        }
        m /= 6;
      }
      const b = { h: 0, s: 0, l: 0 };
      return b.h = Math.round(360 * m), b.s = Math.round(100 * y), b.l = Math.round(100 * v), b;
    } catch {
      return console.log(o), { h: 0, s: 0, l: 0 };
    }
  })(t), i = {}, a = r.reduce((o, { name: s, lightness: u }) => {
    const { h: f, s: c, l } = n, d = (({ h: y, s: m, l: v }) => {
      v /= 100;
      const b = m * Math.min(v, 1 - v) / 100, g = (_) => {
        const w = (_ + y / 30) % 12, A = v - b * Math.max(Math.min(w - 3, 9 - w, 1), -1);
        return Math.round(255 * A).toString(16).padStart(2, "0");
      };
      return `#${g(0)}${g(8)}${g(4)}`;
    })({ h: f, s: c, l: u });
    return o[s] = d, e && (i[s] = Math.abs(l - u)), o;
  }, {});
  if (e) {
    const [o] = Object.keys(i).sort((s, u) => i[s] - i[u]);
    a[o] = t;
  }
  return a;
}, _f = (t) => {
  typeof t == "string" && (t = { colors: [t] }), typeof t == "object" && Array.isArray(t) && (t = { colors: t }), t = Object.assign({ colors: [], names: ["primary", "secondary", "tertiary", "quaternary", "quinary", "senary", "septenary", "octonary", "nonary", "denary"], preserve: !0, shades: [{ name: "50", lightness: 98 }, { name: "100", lightness: 95 }, { name: "200", lightness: 90 }, { name: "300", lightness: 82 }, { name: "400", lightness: 64 }, { name: "500", lightness: 46 }, { name: "600", lightness: 33 }, { name: "700", lightness: 24 }, { name: "800", lightness: 14 }, { name: "900", lightness: 7 }, { name: "950", lightness: 4 }] }, t);
  const { colors: e, names: r, preserve: n, shades: i } = t;
  return e === void 0 || r === void 0 || n === void 0 || i === void 0 ? {} : e.reduce((a, o, s) => {
    const u = r[s], f = OE({ hex: o, preserve: n, shades: i });
    return a[u] = f, a;
  }, {});
};
function we(t) {
  return t != null && typeof t == "object" && t["@@functional/placeholder"] === !0;
}
function St(t) {
  return function e(r) {
    return arguments.length === 0 || we(r) ? e : t.apply(this, arguments);
  };
}
function bt(t) {
  return function e(r, n) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return we(r) ? e : St(function(i) {
          return t(r, i);
        });
      default:
        return we(r) && we(n) ? e : we(r) ? St(function(i) {
          return t(i, n);
        }) : we(n) ? St(function(i) {
          return t(r, i);
        }) : t(r, n);
    }
  };
}
function eh(t) {
  return function e(r, n, i) {
    switch (arguments.length) {
      case 0:
        return e;
      case 1:
        return we(r) ? e : bt(function(a, o) {
          return t(r, a, o);
        });
      case 2:
        return we(r) && we(n) ? e : we(r) ? bt(function(a, o) {
          return t(a, n, o);
        }) : we(n) ? bt(function(a, o) {
          return t(r, a, o);
        }) : St(function(a) {
          return t(r, n, a);
        });
      default:
        return we(r) && we(n) && we(i) ? e : we(r) && we(n) ? bt(function(a, o) {
          return t(a, o, i);
        }) : we(r) && we(i) ? bt(function(a, o) {
          return t(a, n, o);
        }) : we(n) && we(i) ? bt(function(a, o) {
          return t(r, a, o);
        }) : we(r) ? St(function(a) {
          return t(a, n, i);
        }) : we(n) ? St(function(a) {
          return t(r, a, i);
        }) : we(i) ? St(function(a) {
          return t(r, n, a);
        }) : t(r, n, i);
    }
  };
}
function Vr(t, e) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Sf(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
var TE = /* @__PURE__ */ eh(function(e, r, n) {
  var i = {}, a;
  r = r || {}, n = n || {};
  for (a in r)
    Vr(a, r) && (i[a] = Vr(a, n) ? e(a, r[a], n[a]) : r[a]);
  for (a in n)
    Vr(a, n) && !Vr(a, i) && (i[a] = n[a]);
  return i;
}), RE = /* @__PURE__ */ eh(function t(e, r, n) {
  return TE(function(i, a, o) {
    return Sf(a) && Sf(o) ? t(e, a, o) : e(i, a, o);
  }, r, n);
}), PE = /* @__PURE__ */ bt(function(e, r) {
  return RE(function(n, i, a) {
    return a;
  }, e, r);
});
const AE = ({
  extendChakraTheme: t = {},
  children: e
}) => {
  const { settings: r } = Zd(), n = yh(
    PE(
      {
        components: {
          Button: {
            baseStyle: {
              fontWeight: "400",
              borderRadius: "2px",
              _focus: {
                boxShadow: "0"
              }
            },
            variants: {
              primary: {
                background: "primary.500",
                color: "#ffffff",
                _hover: {
                  background: "primary.300"
                }
              },
              outline: {
                border: "solid 1px",
                borderColor: "var(--gray)",
                color: "#585858",
                _hover: {
                  background: "transparent",
                  borderColor: r["theme.@primary-color"] || "#000000",
                  color: r["theme.@primary-color"] || "#000000"
                }
              },
              ghost: {
                _hover: {
                  color: "primary.400",
                  background: "transparent"
                }
              },
              link: {
                color: "primary.500"
              }
            }
          },
          CloseButton: {
            baseStyle: {
              _focus: {
                boxShadow: "0"
              }
            }
          },
          Divider: {
            baseStyle: {
              borderColor: "#e8e8e8"
            }
          },
          IconButton: {
            download: {
              background: "transparent"
            }
          },
          Input: {
            variants: {
              outline: () => ({
                field: {
                  borderColor: "var(--gray)",
                  _focus: {
                    borderColor: r["theme.@primary-color"]
                  }
                }
              })
            }
          },
          Select: {
            variants: {
              outline: () => ({
                field: {
                  borderColor: "#ccc"
                }
              })
            }
          },
          Textarea: {
            variants: {
              outline: () => ({
                borderColor: "var(--gray)"
              })
            }
          },
          Radio: {
            baseStyle: {
              _focus: {
                boxShadow: "none"
              }
            }
          },
          FormError: {
            baseStyle: {
              text: {
                color: "danger.500"
              }
            }
          },
          Menu: {
            baseStyle: {
              item: {
                _active: {
                  bg: `${r["theme.@primary-color"]}1a`
                },
                _focus: {
                  bg: `${r["theme.@primary-color"]}1a`
                }
              }
            }
          },
          Modal: {
            baseStyle: {
              dialog: {
                borderRadius: "2px"
              }
            }
          },
          Tooltip: {
            baseStyle: {
              bg: "#4a4a4a",
              borderRadius: "4px",
              fontWeight: "500",
              fontSize: "12px"
            }
          },
          Tabs: {
            baseStyle: {
              tab: {
                _focus: {
                  boxShadow: 0
                }
              }
            }
          }
        },
        colors: {
          ..._f(r["theme.@primary-color"] || "#2d313a"),
          danger: {
            ..._f("#ff7d62").primary
          },
          gray: {
            100: "rgba(0, 0, 0, 0.1)",
            200: "#f7f8f8",
            300: "#ececec",
            400: "#cdcece",
            500: "#cdcdcd",
            600: "#9b9b9b",
            700: "#585858",
            800: "#4a4a4a",
            900: "rgba(0, 0, 0, 0.45)"
          }
        }
      },
      t
    )
  ), i = Object.keys(r).filter((a) => a.split(".")[0] === "theme").map((a) => a.split(".")[1]).reduce(
    (a, o) => (a[o] = r[`theme.${o}`], a),
    {
      "@primary-color": "#2d313a"
    }
  );
  return /* @__PURE__ */ Ie.jsx(mh, { theme: n, children: e ? /* @__PURE__ */ Ie.jsx(dh, { theme: i, children: /* @__PURE__ */ Ie.jsx(Ie.Fragment, { children: e }) }) : null });
}, V0 = ph;
var tn = { exports: {} }, ME = tn.exports, Of;
function kE() {
  return Of || (Of = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Bn());
    })(ME, function(r) {
      function n(o) {
        return o && typeof o == "object" && "default" in o ? o : { default: o };
      }
      var i = n(r), a = { name: "zh-tw", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(o, s) {
        return s === "W" ? o + "週" : o + "日";
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" }, meridiem: function(o, s) {
        var u = 100 * o + s;
        return u < 600 ? "凌晨" : u < 900 ? "早上" : u < 1100 ? "上午" : u < 1300 ? "中午" : u < 1800 ? "下午" : "晚上";
      } };
      return i.default.locale(a, null, !0), a;
    });
  }(tn)), tn.exports;
}
kE();
var rn = { exports: {} }, CE = rn.exports, Tf;
function IE() {
  return Tf || (Tf = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Bn());
    })(CE, function(r) {
      function n(o) {
        return o && typeof o == "object" && "default" in o ? o : { default: o };
      }
      var i = n(r), a = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(o, s) {
        return s === "W" ? o + "周" : o + "日";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(o, s) {
        var u = 100 * o + s;
        return u < 600 ? "凌晨" : u < 900 ? "早上" : u < 1100 ? "上午" : u < 1300 ? "中午" : u < 1800 ? "下午" : "晚上";
      } };
      return i.default.locale(a, null, !0), a;
    });
  }(rn)), rn.exports;
}
IE();
var nn = { exports: {} }, xE = nn.exports, Rf;
function DE() {
  return Rf || (Rf = 1, function(t, e) {
    (function(r, n) {
      t.exports = n();
    })(xE, function() {
      return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(r) {
        var n = ["th", "st", "nd", "rd"], i = r % 100;
        return "[" + r + (n[(i - 20) % 10] || n[i] || n[0]) + "]";
      } };
    });
  }(nn)), nn.exports;
}
DE();
var an = { exports: {} }, NE = an.exports, Pf;
function LE() {
  return Pf || (Pf = 1, function(t, e) {
    (function(r, n) {
      t.exports = n(Bn());
    })(NE, function(r) {
      function n(o) {
        return o && typeof o == "object" && "default" in o ? o : { default: o };
      }
      var i = n(r), a = { name: "vi", weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), weekStart: 1, weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), ordinal: function(o) {
        return o;
      }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" } };
      return i.default.locale(a, null, !0), a;
    });
  }(an)), an.exports;
}
LE();
const ja = ["zh-tw", "zh-cn", "en-us", "vi", "acsi"], FE = {
  currentLanguage: "zh-tw",
  locale: "zh-tw"
}, jE = gn(FE), qE = ({ children: t }) => {
  const { enabledModules: e, settings: r } = Zd(), [n, i] = on("zh-tw"), [a, o] = on("zh-tw");
  Ut.locale("zh-tw"), sn(() => {
    const u = r.language || navigator.language.split("-")[0], f = localStorage.getItem("kolable.app.language");
    i(
      e.locale ? typeof f == "string" && ja.includes(f) ? f : ja.includes(u) ? u : "zh-tw" : "zh-tw"
    );
  }, [e, r]), sn(() => {
    switch (n) {
      case "zh-tw":
      case "acsi":
        o("zh-tw"), Ut.locale("zh-tw");
        break;
      default:
        o(n), Ut.locale("zh-tw");
    }
  }, [n]);
  let s = {};
  try {
    e.locale && (s = require(`../translations/locales/${n}.json`));
  } catch {
  }
  return /* @__PURE__ */ Ie.jsx(
    jE.Provider,
    {
      value: {
        currentLanguage: n,
        locale: a,
        setCurrentLanguage: (u) => {
          ja.includes(u) && (localStorage.setItem("kolable.app.language", u), i(u));
        }
      },
      children: /* @__PURE__ */ Ie.jsx(Eh, { defaultLocale: "zh-tw", locale: a, messages: s, children: t })
    }
  );
}, W0 = ({ appId: t, children: e, extend: r }) => {
  const n = gn({ appId: t });
  return /* @__PURE__ */ Ie.jsx(n.Provider, { value: { appId: t }, children: /* @__PURE__ */ Ie.jsx(wE, { appId: t, children: /* @__PURE__ */ Ie.jsx(_E, { appId: t, children: /* @__PURE__ */ Ie.jsx(SE, { appId: t, children: /* @__PURE__ */ Ie.jsx(qE, { children: /* @__PURE__ */ Ie.jsx(AE, { extendChakraTheme: r?.chakraTheme, children: e }) }) }) }) }) });
}, th = (t, e, r = !1) => {
  const n = e?.resource.filter((a) => a.id !== null).map((a) => {
    const o = a.id, [, s, u] = o.split(":");
    return {
      urn: o,
      id: u,
      type: s,
      title: a.name || "",
      owners: a.owners || [],
      price: a.price || 0,
      categories: a.categories || [],
      tags: a.tags || [],
      variants: a.variants || [],
      sku: a.sku || void 0,
      metaId: a.meta_id || void 0
    };
  }) || [], i = t.map((a) => n.find((s) => s.urn === a) ?? null);
  return r ? i.map((o) => o ? {
    ...o,
    products: n.filter((s) => s.metaId === o.urn && s.urn !== o.urn)
  } : null) : i;
}, z0 = async (t, e, r) => {
  const { data: n } = await t.query({
    query: rh,
    variables: { urns: e }
  });
  return th(e, n, r);
}, Q0 = (t, e = !1) => {
  const { data: r, loading: n } = Ul(
    rh,
    {
      variables: { urns: t }
    }
  ), i = dr(
    () => th(t, r, e),
    [r, t, e]
  );
  return {
    loading: n,
    resourceCollection: i
  };
}, rh = Pt`
  query GET_RESOURCE_COLLECTION($urns: [String!]!) {
    resource(where: { _or: [{ id: { _in: $urns } }, { meta_id: { _in: $urns } }] }) {
      id
      name
      price
      categories
      tags
      variants
      owners
      sku
      meta_id
    }
  }
`;
export {
  _E as ApiProvider,
  SE as AppProvider,
  AE as AppThemeProvider,
  wE as AuthProvider,
  Dh as BREAK_POINT,
  gt as BackendServerError,
  lE as BindDeviceError,
  KE as DESKTOP_BREAK_POINT,
  aE as InputError,
  qE as LanguageProvider,
  W0 as LodestarAppProvider,
  dE as LoginDeviceError,
  fE as NoMemberError,
  sE as NoModuleError,
  cE as PasswordError,
  uE as SendEmailError,
  oE as SessionError,
  JE as TABLET_BREAK_POINT,
  pE as add,
  j0 as certificateMessages,
  C0 as checkUniformNumber,
  q0 as checkoutMessages,
  mE as codeMessages,
  D0 as commonMessages,
  M0 as convertPathName,
  F0 as craftPageMessages,
  Gm as createApolloClient,
  x0 as currencyFormatter,
  T0 as dateFormatter,
  P0 as desktopViewMixin,
  E0 as durationFormatter,
  b0 as durationFullFormatter,
  Ef as fetchCurrentGeolocation,
  R0 as findCheapestPlan,
  vf as getBackendServerError,
  vE as getCookie,
  mf as getCurrentPrice,
  bf as getFingerPrintId,
  B0 as getResourceByProductId,
  z0 as getResourceCollection,
  I0 as getTrackingCookie,
  _0 as handleError,
  k0 as isHTMLString,
  yE as multiply,
  S0 as notEmpty,
  wf as parsePayload,
  N0 as productMessages,
  L0 as projectMessages,
  O0 as rgba,
  w0 as uploadFile,
  Zd as useApp,
  V0 as useAppTheme,
  Jd as useAuth,
  $0 as useCurrency,
  Q0 as useResourceCollection,
  U0 as useToastMessage,
  A0 as validateContactInfo,
  gf as validationRegExp,
  hE as zipWith
};
//# sourceMappingURL=index.es.js.map
