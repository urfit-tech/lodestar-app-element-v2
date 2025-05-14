function l() {
}
const h = l, o = typeof WeakRef < "u" ? WeakRef : function(r) {
  return { deref: () => r };
}, d = typeof WeakMap < "u" ? WeakMap : Map, f = typeof FinalizationRegistry < "u" ? FinalizationRegistry : function() {
  return {
    register: l,
    unregister: l
  };
}, u = 10024;
class c {
  constructor(e = 1 / 0, t = h) {
    this.max = e, this.dispose = t, this.map = new d(), this.newest = null, this.oldest = null, this.unfinalizedNodes = /* @__PURE__ */ new Set(), this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
      const i = this.unfinalizedNodes.values();
      for (let s = 0; s < u; s++) {
        const n = i.next().value;
        if (!n)
          break;
        this.unfinalizedNodes.delete(n);
        const a = n.key;
        delete n.key, n.keyRef = new o(a), this.registry.register(a, n, n);
      }
      this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1;
    }, this.registry = new f(this.deleteNode.bind(this));
  }
  has(e) {
    return this.map.has(e);
  }
  get(e) {
    const t = this.getNode(e);
    return t && t.value;
  }
  getNode(e) {
    const t = this.map.get(e);
    if (t && t !== this.newest) {
      const { older: i, newer: s } = t;
      s && (s.older = i), i && (i.newer = s), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = s);
    }
    return t;
  }
  set(e, t) {
    let i = this.getNode(e);
    return i ? i.value = t : (i = {
      key: e,
      value: t,
      newer: null,
      older: this.newest
    }, this.newest && (this.newest.newer = i), this.newest = i, this.oldest = this.oldest || i, this.scheduleFinalization(i), this.map.set(e, i), this.size++, i.value);
  }
  clean() {
    for (; this.oldest && this.size > this.max; )
      this.deleteNode(this.oldest);
  }
  deleteNode(e) {
    e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
    const t = e.key || e.keyRef && e.keyRef.deref();
    this.dispose(e.value, t), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), t && this.map.delete(t);
  }
  delete(e) {
    const t = this.map.get(e);
    return t ? (this.deleteNode(t), !0) : !1;
  }
  scheduleFinalization(e) {
    this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize));
  }
}
export {
  c as WeakCache
};
//# sourceMappingURL=index.es241.js.map
