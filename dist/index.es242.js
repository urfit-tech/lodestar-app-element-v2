import { canUseAsyncIteratorSymbol as u } from "./index.es75.js";
function f(t) {
  var e = !1, r = {
    next: function() {
      return e ? Promise.resolve({
        value: void 0,
        done: !0
      }) : (e = !0, new Promise(function(n, o) {
        t.then(function(a) {
          n({ value: a, done: !1 });
        }).catch(o);
      }));
    }
  };
  return u && (r[Symbol.asyncIterator] = function() {
    return this;
  }), r;
}
export {
  f as default
};
//# sourceMappingURL=index.es242.js.map
