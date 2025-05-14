import { parentEntrySlot as f } from "./index.es147.js";
import { maybeUnsubscribe as c, arrayFromSet as d } from "./index.es216.js";
const n = [], S = 100;
function r(e, t) {
  if (!e)
    throw new Error(t || "assertion failure");
}
function p(e, t) {
  const i = e.length;
  return (
    // Unknown values are not equal to each other.
    i > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    i === t.length && // The underlying value or exception must be the same.
    e[i - 1] === t[i - 1]
  );
}
function C(e) {
  switch (e.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return e[0];
    case 2:
      throw e[1];
  }
}
function m(e) {
  return e.slice(0);
}
class o {
  constructor(t) {
    this.fn = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++o.count;
  }
  peek() {
    if (this.value.length === 1 && !s(this))
      return a(this), this.value[0];
  }
  // This is the most important method of the Entry API, because it
  // determines whether the cached this.value can be returned immediately,
  // or must be recomputed. The overall performance of the caching system
  // depends on the truth of the following observations: (1) this.dirty is
  // usually false, (2) this.dirtyChildren is usually null/empty, and thus
  // (3) valueGet(this.value) is usually returned without recomputation.
  recompute(t) {
    return r(!this.recomputing, "already recomputing"), a(this), s(this) ? E(this, t) : C(this.value);
  }
  setDirty() {
    this.dirty || (this.dirty = !0, g(this), c(this));
  }
  dispose() {
    this.setDirty(), b(this), h(this, (t, i) => {
      t.setDirty(), D(t, this);
    });
  }
  forget() {
    this.dispose();
  }
  dependOn(t) {
    t.add(this), this.deps || (this.deps = n.pop() || /* @__PURE__ */ new Set()), this.deps.add(t);
  }
  forgetDeps() {
    this.deps && (d(this.deps).forEach((t) => t.delete(this)), this.deps.clear(), n.push(this.deps), this.deps = null);
  }
}
o.count = 0;
function a(e) {
  const t = f.getValue();
  if (t)
    return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), s(e) ? y(t, e) : V(t, e), t;
}
function E(e, t) {
  return b(e), f.withValue(e, z, [e, t]), O(e, t) && P(e), C(e.value);
}
function z(e, t) {
  e.recomputing = !0;
  const { normalizeResult: i } = e;
  let u;
  i && e.value.length === 1 && (u = m(e.value)), e.value.length = 0;
  try {
    if (e.value[0] = e.fn.apply(null, t), i && u && !p(u, e.value))
      try {
        e.value[0] = i(e.value[0], u[0]);
      } catch {
      }
  } catch (l) {
    e.value[1] = l;
  }
  e.recomputing = !1;
}
function s(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size);
}
function P(e) {
  e.dirty = !1, !s(e) && v(e);
}
function g(e) {
  h(e, y);
}
function v(e) {
  h(e, V);
}
function h(e, t) {
  const i = e.parents.size;
  if (i) {
    const u = d(e.parents);
    for (let l = 0; l < i; ++l)
      t(u[l], e);
  }
}
function y(e, t) {
  r(e.childValues.has(t)), r(s(t));
  const i = !s(e);
  if (!e.dirtyChildren)
    e.dirtyChildren = n.pop() || /* @__PURE__ */ new Set();
  else if (e.dirtyChildren.has(t))
    return;
  e.dirtyChildren.add(t), i && g(e);
}
function V(e, t) {
  r(e.childValues.has(t)), r(!s(t));
  const i = e.childValues.get(t);
  i.length === 0 ? e.childValues.set(t, m(t.value)) : p(i, t.value) || e.setDirty(), w(e, t), !s(e) && v(e);
}
function w(e, t) {
  const i = e.dirtyChildren;
  i && (i.delete(t), i.size === 0 && (n.length < S && n.push(i), e.dirtyChildren = null));
}
function b(e) {
  e.childValues.size > 0 && e.childValues.forEach((t, i) => {
    D(e, i);
  }), e.forgetDeps(), r(e.dirtyChildren === null);
}
function D(e, t) {
  t.parents.delete(e), e.childValues.delete(t), w(e, t);
}
function O(e, t) {
  if (typeof e.subscribe == "function")
    try {
      c(e), e.unsubscribe = e.subscribe.apply(null, t);
    } catch {
      return e.setDirty(), !1;
    }
  return !0;
}
export {
  o as Entry
};
//# sourceMappingURL=index.es146.js.map
