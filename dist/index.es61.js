import { __extends as c, __spreadArray as n } from "./index.es57.js";
import "./index.es103.js";
import "./index.es104.js";
import { isNonNullObject as f } from "./index.es63.js";
var g = function(t) {
  var e = n(n(n([], t.graphQLErrors, !0), t.clientErrors, !0), t.protocolErrors, !0);
  return t.networkError && e.push(t.networkError), e.map(function(o) {
    return f(o) && o.message || "Error message not found.";
  }).join(`
`);
}, w = (
  /** @class */
  function(t) {
    c(e, t);
    function e(o) {
      var s = o.graphQLErrors, E = o.protocolErrors, l = o.clientErrors, p = o.networkError, u = o.errorMessage, a = o.extraInfo, r = t.call(this, u) || this;
      return r.name = "ApolloError", r.graphQLErrors = s || [], r.protocolErrors = E || [], r.clientErrors = l || [], r.networkError = p || null, r.message = u || g(r), r.extraInfo = a, r.cause = n(n(n([
        p
      ], s || [], !0), E || [], !0), l || [], !0).find(function(i) {
        return !!i;
      }) || null, r.__proto__ = e.prototype, r;
    }
    return e;
  }(Error)
);
export {
  w as ApolloError
};
//# sourceMappingURL=index.es61.js.map
