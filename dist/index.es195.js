function n() {
}
class l {
  constructor(t = 1 / 0, e = n) {
    this.max = t, this.dispose = e, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
  }
  has(t) {
    return this.map.has(t);
  }
  get(t) {
    const e = this.getNode(t);
    return e && e.value;
  }
  get size() {
    return this.map.size;
  }
  getNode(t) {
    const e = this.map.get(t);
    if (e && e !== this.newest) {
      const { older: s, newer: i } = e;
      i && (i.older = s), s && (s.newer = i), e.older = this.newest, e.older.newer = e, e.newer = null, this.newest = e, e === this.oldest && (this.oldest = i);
    }
    return e;
  }
  set(t, e) {
    let s = this.getNode(t);
    return s ? s.value = e : (s = {
      key: t,
      value: e,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = s), this.newest = s, this.oldest = this.oldest || s, this.map.set(t, s), s.value);
  }
  clean() {
    for (; this.oldest && this.map.size > this.max; )
      this.delete(this.oldest.key);
  }
  delete(t) {
    const e = this.map.get(t);
    return e ? (e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.map.delete(t), this.dispose(e.value, t), !0) : !1;
  }
}
export {
  l as StrongCache
};
//# sourceMappingURL=index.es195.js.map
