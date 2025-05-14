import { parentEntrySlot as c } from "./index.es191.js";
import { hasOwnProperty as d, arrayFromSet as f, maybeUnsubscribe as u } from "./index.es296.js";
const a = {
  setDirty: !0,
  dispose: !0,
  forget: !0
  // Fully remove parent Entry from LRU cache and computation graph
};
function g(y) {
  const r = /* @__PURE__ */ new Map();
  function s(n) {
    const e = c.getValue();
    if (e) {
      let t = r.get(n);
      t || r.set(n, t = /* @__PURE__ */ new Set()), e.dependOn(t);
    }
  }
  return s.dirty = function(e, t) {
    const o = r.get(e);
    if (o) {
      const i = t && d.call(a, t) ? t : "setDirty";
      f(o).forEach((p) => p[i]()), r.delete(e), u(o);
    }
  }, s;
}
export {
  g as dep
};
//# sourceMappingURL=index.es248.js.map
