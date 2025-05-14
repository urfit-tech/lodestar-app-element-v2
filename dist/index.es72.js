import { InvariantError as d, invariant as i } from "./index.es124.js";
import { version as c } from "./index.es125.js";
import u from "./index.es73.js";
import { stringifyForDisplay as g } from "./index.es78.js";
function e(n) {
  return function(r) {
    for (var o = [], t = 1; t < arguments.length; t++)
      o[t - 1] = arguments[t];
    if (typeof r == "number") {
      var a = r;
      r = f(a), r || (r = l(a, o), o = []);
    }
    n.apply(void 0, [r].concat(o));
  };
}
var E = Object.assign(function(r, o) {
  for (var t = [], a = 2; a < arguments.length; a++)
    t[a - 2] = arguments[a];
  r || i(r, f(o, t) || l(o, t));
}, {
  debug: e(i.debug),
  log: e(i.log),
  warn: e(i.warn),
  error: e(i.error)
});
function w(n) {
  for (var r = [], o = 1; o < arguments.length; o++)
    r[o - 1] = arguments[o];
  return new d(f(n, r) || l(n, r));
}
var v = Symbol.for("ApolloErrorMessageHandler_" + c);
function p(n) {
  if (typeof n == "string")
    return n;
  try {
    return g(n, 2).slice(0, 1e3);
  } catch {
    return "<non-serializable>";
  }
}
function f(n, r) {
  if (r === void 0 && (r = []), !!n)
    return u[v] && u[v](n, r.map(p));
}
function l(n, r) {
  if (r === void 0 && (r = []), !!n)
    return "An error occurred! For more details, see the full error text at https://go.apollo.dev/c/err#".concat(encodeURIComponent(JSON.stringify({
      version: c,
      message: n,
      args: r.map(p)
    })));
}
export {
  v as ApolloErrorMessageHandler,
  d as InvariantError,
  E as invariant,
  w as newInvariantError
};
//# sourceMappingURL=index.es72.js.map
