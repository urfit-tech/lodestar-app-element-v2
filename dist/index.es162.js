import { registerGlobalCache as O } from "./index.es98.js";
import { AutoCleanedStrongCache as b } from "./index.es116.js";
import { cacheSizes as S } from "./index.es117.js";
var l = Object.assign(function(r) {
  return JSON.stringify(r, p);
}, {
  reset: function() {
    n = new b(
      S.canonicalStringify || 1e3
      /* defaultCacheSizes.canonicalStringify */
    );
  }
});
globalThis.__DEV__ !== !1 && O("canonicalStringify", function() {
  return n.size;
});
var n;
l.reset();
function p(e, r) {
  if (r && typeof r == "object") {
    var t = Object.getPrototypeOf(r);
    if (t === Object.prototype || t === null) {
      var i = Object.keys(r);
      if (i.every(u))
        return r;
      var f = JSON.stringify(i), c = n.get(f);
      if (!c) {
        i.sort();
        var a = JSON.stringify(i);
        c = n.get(a) || i, n.set(f, c), n.set(a, c);
      }
      var o = Object.create(t);
      return c.forEach(function(g) {
        o[g] = r[g];
      }), o;
    }
  }
  return r;
}
function u(e, r, t) {
  return r === 0 || t[r - 1] <= e;
}
export {
  l as canonicalStringify
};
//# sourceMappingURL=index.es162.js.map
