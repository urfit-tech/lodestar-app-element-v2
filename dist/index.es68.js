const l = () => /* @__PURE__ */ Object.create(null), { forEach: h, slice: o } = Array.prototype, { hasOwnProperty: c } = Object.prototype;
class i {
  constructor(e = !0, t = l) {
    this.weakness = e, this.makeData = t;
  }
  lookup() {
    return this.lookupArray(arguments);
  }
  lookupArray(e) {
    let t = this;
    return h.call(e, (a) => t = t.getChildTrie(a)), c.call(t, "data") ? t.data : t.data = this.makeData(o.call(e));
  }
  peek() {
    return this.peekArray(arguments);
  }
  peekArray(e) {
    let t = this;
    for (let a = 0, s = e.length; t && a < s; ++a) {
      const r = t.mapFor(e[a], !1);
      t = r && r.get(e[a]);
    }
    return t && t.data;
  }
  remove() {
    return this.removeArray(arguments);
  }
  removeArray(e) {
    let t;
    if (e.length) {
      const a = e[0], s = this.mapFor(a, !1), r = s && s.get(a);
      r && (t = r.removeArray(o.call(e, 1)), !r.data && !r.weak && !(r.strong && r.strong.size) && s.delete(a));
    } else
      t = this.data, delete this.data;
    return t;
  }
  getChildTrie(e) {
    const t = this.mapFor(e, !0);
    let a = t.get(e);
    return a || t.set(e, a = new i(this.weakness, this.makeData)), a;
  }
  mapFor(e, t) {
    return this.weakness && u(e) ? this.weak || (t ? this.weak = /* @__PURE__ */ new WeakMap() : void 0) : this.strong || (t ? this.strong = /* @__PURE__ */ new Map() : void 0);
  }
}
function u(n) {
  switch (typeof n) {
    case "object":
      if (n === null)
        break;
    // Fall through to return true...
    case "function":
      return !0;
  }
  return !1;
}
export {
  i as Trie
};
//# sourceMappingURL=index.es68.js.map
