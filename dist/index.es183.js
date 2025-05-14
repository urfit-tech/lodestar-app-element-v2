import { __exports as A } from "./index.es222.js";
import { __require as x } from "./index.es223.js";
import { __require as ee } from "./index.es224.js";
var C;
function ie() {
  return C ? A : (C = 1, function(o) {
    var F = Object.getOwnPropertyDescriptors || function(r) {
      for (var t = Object.keys(r), n = {}, u = 0; u < t.length; u++)
        n[t[u]] = Object.getOwnPropertyDescriptor(r, t[u]);
      return n;
    }, q = /%[sdj%]/g;
    o.format = function(e) {
      if (!h(e)) {
        for (var r = [], t = 0; t < arguments.length; t++)
          r.push(l(arguments[t]));
        return r.join(" ");
      }
      for (var t = 1, n = arguments, u = n.length, s = String(e).replace(q, function(f) {
        if (f === "%%") return "%";
        if (t >= u) return f;
        switch (f) {
          case "%s":
            return String(n[t++]);
          case "%d":
            return Number(n[t++]);
          case "%j":
            try {
              return JSON.stringify(n[t++]);
            } catch {
              return "[Circular]";
            }
          default:
            return f;
        }
      }), i = n[t]; t < u; i = n[++t])
        b(i) || !g(i) ? s += " " + i : s += " " + l(i);
      return s;
    }, o.deprecate = function(e, r) {
      if (typeof process < "u" && process.noDeprecation === !0)
        return e;
      if (typeof process > "u")
        return function() {
          return o.deprecate(e, r).apply(this, arguments);
        };
      var t = !1;
      function n() {
        if (!t) {
          if (process.throwDeprecation)
            throw new Error(r);
          process.traceDeprecation ? console.trace(r) : console.error(r), t = !0;
        }
        return e.apply(this, arguments);
      }
      return n;
    };
    var m = {}, E;
    o.debuglog = function(e) {
      if (p(E) && (E = process.env.NODE_DEBUG || ""), e = e.toUpperCase(), !m[e])
        if (new RegExp("\\b" + e + "\\b", "i").test(E)) {
          var r = process.pid;
          m[e] = function() {
            var t = o.format.apply(o, arguments);
            console.error("%s %d: %s", e, r, t);
          };
        } else
          m[e] = function() {
          };
      return m[e];
    };
    function l(e, r) {
      var t = {
        seen: [],
        stylize: H
      };
      return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), v(r) ? t.showHidden = r : r && o._extend(t, r), p(t.showHidden) && (t.showHidden = !1), p(t.depth) && (t.depth = 2), p(t.colors) && (t.colors = !1), p(t.customInspect) && (t.customInspect = !0), t.colors && (t.stylize = B), d(t, e, t.depth);
    }
    o.inspect = l, l.colors = {
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
    }, l.styles = {
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
    function B(e, r) {
      var t = l.styles[r];
      return t ? "\x1B[" + l.colors[t][0] + "m" + e + "\x1B[" + l.colors[t][1] + "m" : e;
    }
    function H(e, r) {
      return e;
    }
    function J(e) {
      var r = {};
      return e.forEach(function(t, n) {
        r[t] = !0;
      }), r;
    }
    function d(e, r, t) {
      if (e.customInspect && r && j(r.inspect) && // Filter out the util module, it's inspect function is special
      r.inspect !== o.inspect && // Also filter out any prototype objects using the circular check.
      !(r.constructor && r.constructor.prototype === r)) {
        var n = r.inspect(t, e);
        return h(n) || (n = d(e, n, t)), n;
      }
      var u = I(e, r);
      if (u)
        return u;
      var s = Object.keys(r), i = J(s);
      if (e.showHidden && (s = Object.getOwnPropertyNames(r)), w(r) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
        return P(r);
      if (s.length === 0) {
        if (j(r)) {
          var f = r.name ? ": " + r.name : "";
          return e.stylize("[Function" + f + "]", "special");
        }
        if (O(r))
          return e.stylize(RegExp.prototype.toString.call(r), "regexp");
        if (D(r))
          return e.stylize(Date.prototype.toString.call(r), "date");
        if (w(r))
          return P(r);
      }
      var c = "", a = !1, S = ["{", "}"];
      if (T(r) && (a = !0, S = ["[", "]"]), j(r)) {
        var X = r.name ? ": " + r.name : "";
        c = " [Function" + X + "]";
      }
      if (O(r) && (c = " " + RegExp.prototype.toString.call(r)), D(r) && (c = " " + Date.prototype.toUTCString.call(r)), w(r) && (c = " " + P(r)), s.length === 0 && (!a || r.length == 0))
        return S[0] + c + S[1];
      if (t < 0)
        return O(r) ? e.stylize(RegExp.prototype.toString.call(r), "regexp") : e.stylize("[Object]", "special");
      e.seen.push(r);
      var R;
      return a ? R = $(e, r, t, i, s) : R = s.map(function(Y) {
        return z(e, r, t, i, Y, a);
      }), e.seen.pop(), M(R, c, S);
    }
    function I(e, r) {
      if (p(r))
        return e.stylize("undefined", "undefined");
      if (h(r)) {
        var t = "'" + JSON.stringify(r).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return e.stylize(t, "string");
      }
      if (U(r))
        return e.stylize("" + r, "number");
      if (v(r))
        return e.stylize("" + r, "boolean");
      if (b(r))
        return e.stylize("null", "null");
    }
    function P(e) {
      return "[" + Error.prototype.toString.call(e) + "]";
    }
    function $(e, r, t, n, u) {
      for (var s = [], i = 0, f = r.length; i < f; ++i)
        k(r, String(i)) ? s.push(z(
          e,
          r,
          t,
          n,
          String(i),
          !0
        )) : s.push("");
      return u.forEach(function(c) {
        c.match(/^\d+$/) || s.push(z(
          e,
          r,
          t,
          n,
          c,
          !0
        ));
      }), s;
    }
    function z(e, r, t, n, u, s) {
      var i, f, c;
      if (c = Object.getOwnPropertyDescriptor(r, u) || { value: r[u] }, c.get ? c.set ? f = e.stylize("[Getter/Setter]", "special") : f = e.stylize("[Getter]", "special") : c.set && (f = e.stylize("[Setter]", "special")), k(n, u) || (i = "[" + u + "]"), f || (e.seen.indexOf(c.value) < 0 ? (b(t) ? f = d(e, c.value, null) : f = d(e, c.value, t - 1), f.indexOf(`
`) > -1 && (s ? f = f.split(`
`).map(function(a) {
        return "  " + a;
      }).join(`
`).substr(2) : f = `
` + f.split(`
`).map(function(a) {
        return "   " + a;
      }).join(`
`))) : f = e.stylize("[Circular]", "special")), p(i)) {
        if (s && u.match(/^\d+$/))
          return f;
        i = JSON.stringify("" + u), i.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.substr(1, i.length - 2), i = e.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), i = e.stylize(i, "string"));
      }
      return i + ": " + f;
    }
    function M(e, r, t) {
      var n = e.reduce(function(u, s) {
        return s.indexOf(`
`) >= 0, u + s.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return n > 60 ? t[0] + (r === "" ? "" : r + `
 `) + " " + e.join(`,
  `) + " " + t[1] : t[0] + r + " " + e.join(", ") + " " + t[1];
    }
    function T(e) {
      return Array.isArray(e);
    }
    o.isArray = T;
    function v(e) {
      return typeof e == "boolean";
    }
    o.isBoolean = v;
    function b(e) {
      return e === null;
    }
    o.isNull = b;
    function G(e) {
      return e == null;
    }
    o.isNullOrUndefined = G;
    function U(e) {
      return typeof e == "number";
    }
    o.isNumber = U;
    function h(e) {
      return typeof e == "string";
    }
    o.isString = h;
    function Z(e) {
      return typeof e == "symbol";
    }
    o.isSymbol = Z;
    function p(e) {
      return e === void 0;
    }
    o.isUndefined = p;
    function O(e) {
      return g(e) && _(e) === "[object RegExp]";
    }
    o.isRegExp = O;
    function g(e) {
      return typeof e == "object" && e !== null;
    }
    o.isObject = g;
    function D(e) {
      return g(e) && _(e) === "[object Date]";
    }
    o.isDate = D;
    function w(e) {
      return g(e) && (_(e) === "[object Error]" || e instanceof Error);
    }
    o.isError = w;
    function j(e) {
      return typeof e == "function";
    }
    o.isFunction = j;
    function V(e) {
      return e === null || typeof e == "boolean" || typeof e == "number" || typeof e == "string" || typeof e == "symbol" || // ES6 symbol
      typeof e > "u";
    }
    o.isPrimitive = V, o.isBuffer = x();
    function _(e) {
      return Object.prototype.toString.call(e);
    }
    function N(e) {
      return e < 10 ? "0" + e.toString(10) : e.toString(10);
    }
    var W = [
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
    function K() {
      var e = /* @__PURE__ */ new Date(), r = [
        N(e.getHours()),
        N(e.getMinutes()),
        N(e.getSeconds())
      ].join(":");
      return [e.getDate(), W[e.getMonth()], r].join(" ");
    }
    o.log = function() {
      console.log("%s - %s", K(), o.format.apply(o, arguments));
    }, o.inherits = ee(), o._extend = function(e, r) {
      if (!r || !g(r)) return e;
      for (var t = Object.keys(r), n = t.length; n--; )
        e[t[n]] = r[t[n]];
      return e;
    };
    function k(e, r) {
      return Object.prototype.hasOwnProperty.call(e, r);
    }
    var y = typeof Symbol < "u" ? Symbol("util.promisify.custom") : void 0;
    o.promisify = function(r) {
      if (typeof r != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (y && r[y]) {
        var t = r[y];
        if (typeof t != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, y, {
          value: t,
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), t;
      }
      function t() {
        for (var n, u, s = new Promise(function(c, a) {
          n = c, u = a;
        }), i = [], f = 0; f < arguments.length; f++)
          i.push(arguments[f]);
        i.push(function(c, a) {
          c ? u(c) : n(a);
        });
        try {
          r.apply(this, i);
        } catch (c) {
          u(c);
        }
        return s;
      }
      return Object.setPrototypeOf(t, Object.getPrototypeOf(r)), y && Object.defineProperty(t, y, {
        value: t,
        enumerable: !1,
        writable: !1,
        configurable: !0
      }), Object.defineProperties(
        t,
        F(r)
      );
    }, o.promisify.custom = y;
    function L(e, r) {
      if (!e) {
        var t = new Error("Promise was rejected with a falsy value");
        t.reason = e, e = t;
      }
      return r(e);
    }
    function Q(e) {
      if (typeof e != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function r() {
        for (var t = [], n = 0; n < arguments.length; n++)
          t.push(arguments[n]);
        var u = t.pop();
        if (typeof u != "function")
          throw new TypeError("The last argument must be of type Function");
        var s = this, i = function() {
          return u.apply(s, arguments);
        };
        e.apply(this, t).then(
          function(f) {
            process.nextTick(i, null, f);
          },
          function(f) {
            process.nextTick(L, f, i);
          }
        );
      }
      return Object.setPrototypeOf(r, Object.getPrototypeOf(e)), Object.defineProperties(
        r,
        F(e)
      ), r;
    }
    o.callbackify = Q;
  }(A), A);
}
export {
  ie as __require
};
//# sourceMappingURL=index.es183.js.map
