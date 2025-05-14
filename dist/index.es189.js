const l = () => /* @__PURE__ */ Object.create(null), { forEach: c, slice: h } = Array.prototype, { hasOwnProperty: k } = Object.prototype;
class o {
  constructor(e = !0, t = l) {
    this.weakness = e, this.makeData = t;
  }
  lookup(...e) {
    return this.lookupArray(e);
  }
  lookupArray(e) {
    let t = this;
    return c.call(e, (a) => t = t.getChildTrie(a)), k.call(t, "data") ? t.data : t.data = this.makeData(h.call(e));
  }
  peek(...e) {
    return this.peekArray(e);
  }
  peekArray(e) {
    let t = this;
    for (let a = 0, i = e.length; t && a < i; ++a) {
      const r = this.weakness && n(e[a]) ? t.weak : t.strong;
      t = r && r.get(e[a]);
    }
    return t && t.data;
  }
  getChildTrie(e) {
    const t = this.weakness && n(e) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map());
    let a = t.get(e);
    return a || t.set(e, a = new o(this.weakness, this.makeData)), a;
  }
}
function n(s) {
  switch (typeof s) {
    case "object":
      if (s === null)
        break;
    // Fall through to return true...
    case "function":
      return !0;
  }
  return !1;
}
export {
  o as Trie
};
//# sourceMappingURL=index.es189.js.map
