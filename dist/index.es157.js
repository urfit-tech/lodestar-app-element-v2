import "./index.es108.js";
import { Observable as s } from "./index.es107.js";
function x(f, a, l) {
  return new s(function(n) {
    var t = {
      // Normally we would initialize promiseQueue to Promise.resolve(), but
      // in this case, for backwards compatibility, we need to be careful to
      // invoke the first callback synchronously.
      then: function(r) {
        return new Promise(function(e) {
          return e(r());
        });
      }
    };
    function c(r, e) {
      return function(o) {
        if (r) {
          var i = function() {
            return n.closed ? (
              /* will be swallowed */
              0
            ) : r(o);
          };
          t = t.then(i, i).then(function(u) {
            return n.next(u);
          }, function(u) {
            return n.error(u);
          });
        } else
          n[e](o);
      };
    }
    var m = {
      next: c(a, "next"),
      error: c(l, "error"),
      complete: function() {
        t.then(function() {
          return n.complete();
        });
      }
    }, p = f.subscribe(m);
    return function() {
      return p.unsubscribe();
    };
  });
}
export {
  x as asyncMap
};
//# sourceMappingURL=index.es157.js.map
