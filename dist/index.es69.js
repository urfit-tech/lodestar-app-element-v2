import { __extends as c, __spreadArray as n } from "./index.es65.js";
import "./index.es116.js";
import "./index.es117.js";
import { isNonNullObject as f } from "./index.es71.js";
var g = Symbol();
function O(r) {
  return r.extensions ? Array.isArray(r.extensions[g]) : !1;
}
function v(r) {
  return r.hasOwnProperty("graphQLErrors");
}
var m = function(r) {
  var e = n(n(n([], r.graphQLErrors, !0), r.clientErrors, !0), r.protocolErrors, !0);
  return r.networkError && e.push(r.networkError), e.map(function(t) {
    return f(t) && t.message || "Error message not found.";
  }).join(`
`);
}, w = (
  /** @class */
  function(r) {
    c(e, r);
    function e(t) {
      var s = t.graphQLErrors, a = t.protocolErrors, i = t.clientErrors, l = t.networkError, E = t.errorMessage, u = t.extraInfo, o = r.call(this, E) || this;
      return o.name = "ApolloError", o.graphQLErrors = s || [], o.protocolErrors = a || [], o.clientErrors = i || [], o.networkError = l || null, o.message = E || m(o), o.extraInfo = u, o.cause = n(n(n([
        l
      ], s || [], !0), a || [], !0), i || [], !0).find(function(p) {
        return !!p;
      }) || null, o.__proto__ = e.prototype, o;
    }
    return e;
  }(Error)
);
export {
  w as ApolloError,
  g as PROTOCOL_ERRORS_SYMBOL,
  O as graphQLResultHasProtocolErrors,
  v as isApolloError
};
//# sourceMappingURL=index.es69.js.map
