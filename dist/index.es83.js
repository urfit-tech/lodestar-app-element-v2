import { isNonNullObject as f } from "./index.es62.js";
function i(e) {
  var t = /* @__PURE__ */ new Set([e]);
  return t.forEach(function(r) {
    f(r) && c(r) === r && Object.getOwnPropertyNames(r).forEach(function(n) {
      f(r[n]) && t.add(r[n]);
    });
  }), e;
}
function c(e) {
  if (globalThis.__DEV__ !== !1 && !Object.isFrozen(e))
    try {
      Object.freeze(e);
    } catch (t) {
      if (t instanceof TypeError)
        return null;
      throw t;
    }
  return e;
}
function a(e) {
  return globalThis.__DEV__ !== !1 && i(e), e;
}
export {
  a as maybeDeepFreeze
};
//# sourceMappingURL=index.es83.js.map
