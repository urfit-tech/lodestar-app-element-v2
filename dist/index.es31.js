import { __extends as s, __assign as a } from "./index.es92.js";
import { ApolloError as l } from "./index.es112.js";
import { Observable as f } from "./index.es107.js";
import "./index.es108.js";
import { print as p } from "./index.es137.js";
import { ApolloLink as m } from "./index.es101.js";
import { isNonNullObject as u } from "./index.es113.js";
function d(t) {
  return u(t) && "code" in t && "reason" in t;
}
function h(t) {
  var r;
  return u(t) && ((r = t.target) === null || r === void 0 ? void 0 : r.readyState) === WebSocket.CLOSED;
}
var A = (
  /** @class */
  function(t) {
    s(r, t);
    function r(i) {
      var e = t.call(this) || this;
      return e.client = i, e;
    }
    return r.prototype.request = function(i) {
      var e = this;
      return new f(function(o) {
        return e.client.subscribe(a(a({}, i), { query: p(i.query) }), {
          next: o.next.bind(o),
          complete: o.complete.bind(o),
          error: function(n) {
            if (n instanceof Error)
              return o.error(n);
            var c = d(n);
            return c || h(n) ? o.error(
              // reason will be available on clean closes
              new Error("Socket closed".concat(c ? " with event ".concat(n.code) : "").concat(c ? " ".concat(n.reason) : ""))
            ) : o.error(new l({
              graphQLErrors: Array.isArray(n) ? n : [n]
            }));
          }
          // casting around a wrong type in graphql-ws, which incorrectly expects `Sink<ExecutionResult>`
        });
      });
    }, r;
  }(m)
);
export {
  A as GraphQLWsLink
};
//# sourceMappingURL=index.es31.js.map
