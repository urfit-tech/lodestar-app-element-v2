import { __extends as p } from "./index.es65.js";
import { ApolloLink as f } from "./index.es66.js";
import { Observable as m } from "./index.es67.js";
import "./index.es68.js";
function l(c) {
  return new f(function(i, r) {
    return new m(function(n) {
      var o, e, u;
      try {
        o = r(i).subscribe({
          next: function(t) {
            if (t.errors && (u = c({
              graphQLErrors: t.errors,
              response: t,
              operation: i,
              forward: r
            }), u)) {
              e = u.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.next(t);
          },
          error: function(t) {
            if (u = c({
              operation: i,
              networkError: t,
              //Network errors can return GraphQL errors on for example a 403
              graphQLErrors: t && t.result && t.result.errors || void 0,
              forward: r
            }), u) {
              e = u.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n)
              });
              return;
            }
            n.error(t);
          },
          complete: function() {
            u || n.complete.bind(n)();
          }
        });
      } catch (t) {
        c({ networkError: t, operation: i, forward: r }), n.error(t);
      }
      return function() {
        o && o.unsubscribe(), e && o.unsubscribe();
      };
    });
  });
}
(function(c) {
  p(i, c);
  function i(r) {
    var n = c.call(this) || this;
    return n.link = l(r), n;
  }
  return i.prototype.request = function(r, n) {
    return this.link.request(r, n);
  }, i;
})(f);
export {
  l as onError
};
//# sourceMappingURL=index.es30.js.map
