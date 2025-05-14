import { Trie as w } from "./index.es143.js";
import { Entry as K } from "./index.es144.js";
import { parentEntrySlot as j } from "./index.es145.js";
import { StrongCache as z } from "./index.es146.js";
let d;
function E(...u) {
  return (d || (d = new w(typeof WeakMap == "function"))).lookupArray(u);
}
const i = /* @__PURE__ */ new Set();
function O(u, { max: f = Math.pow(2, 16), keyArgs: l, makeCacheKey: o = E, normalizeResult: a, subscribe: c, cache: p = z } = /* @__PURE__ */ Object.create(null)) {
  const r = typeof p == "function" ? new p(f, (e) => e.dispose()) : p, n = function() {
    const e = o.apply(null, l ? l.apply(null, arguments) : arguments);
    if (e === void 0)
      return u.apply(null, arguments);
    let t = r.get(e);
    t || (r.set(e, t = new K(u)), t.normalizeResult = a, t.subscribe = c, t.forget = () => r.delete(e));
    const m = t.recompute(Array.prototype.slice.call(arguments));
    return r.set(e, t), i.add(r), j.hasValue() || (i.forEach((b) => b.clean()), i.clear()), m;
  };
  Object.defineProperty(n, "size", {
    get: () => r.size,
    configurable: !1,
    enumerable: !1
  }), Object.freeze(n.options = {
    max: f,
    keyArgs: l,
    makeCacheKey: o,
    normalizeResult: a,
    subscribe: c,
    cache: r
  });
  function s(e) {
    const t = e && r.get(e);
    t && t.setDirty();
  }
  n.dirtyKey = s, n.dirty = function() {
    s(o.apply(null, arguments));
  };
  function y(e) {
    const t = e && r.get(e);
    if (t)
      return t.peek();
  }
  n.peekKey = y, n.peek = function() {
    return y(o.apply(null, arguments));
  };
  function g(e) {
    return e ? r.delete(e) : !1;
  }
  return n.forgetKey = g, n.forget = function() {
    return g(o.apply(null, arguments));
  }, n.makeCacheKey = o, n.getKey = l ? function() {
    return o.apply(null, l.apply(null, arguments));
  } : o, Object.freeze(n);
}
export {
  w as KeyTrie,
  E as defaultMakeCacheKey,
  O as wrap
};
//# sourceMappingURL=index.es70.js.map
