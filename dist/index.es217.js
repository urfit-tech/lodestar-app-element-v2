var s, i;
function u() {
  if (i) return s;
  i = 1;
  class r {
    constructor() {
      this.max = 1e3, this.map = /* @__PURE__ */ new Map();
    }
    get(e) {
      const t = this.map.get(e);
      if (t !== void 0)
        return this.map.delete(e), this.map.set(e, t), t;
    }
    delete(e) {
      return this.map.delete(e);
    }
    set(e, t) {
      if (!this.delete(e) && t !== void 0) {
        if (this.map.size >= this.max) {
          const a = this.map.keys().next().value;
          this.delete(a);
        }
        this.map.set(e, t);
      }
      return this;
    }
  }
  return s = r, s;
}
export {
  u as __require
};
//# sourceMappingURL=index.es217.js.map
