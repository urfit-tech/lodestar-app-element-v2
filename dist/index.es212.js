let t = null;
const a = {};
let y = 1;
const h = () => class {
  constructor() {
    this.id = [
      "slot",
      y++,
      Date.now(),
      Math.random().toString(36).slice(2)
    ].join(":");
  }
  hasValue() {
    for (let e = t; e; e = e.parent)
      if (this.id in e.slots) {
        const n = e.slots[this.id];
        if (n === a)
          break;
        return e !== t && (t.slots[this.id] = n), !0;
      }
    return t && (t.slots[this.id] = a), !1;
  }
  getValue() {
    if (this.hasValue())
      return t.slots[this.id];
  }
  withValue(e, n, l, o) {
    const f = {
      __proto__: null,
      [this.id]: e
    }, i = t;
    t = { parent: i, slots: f };
    try {
      return n.apply(o, l);
    } finally {
      t = i;
    }
  }
  // Capture the current context and wrap a callback function so that it
  // reestablishes the captured context when called.
  static bind(e) {
    const n = t;
    return function() {
      const l = t;
      try {
        return t = n, e.apply(this, arguments);
      } finally {
        t = l;
      }
    };
  }
  // Immediately run a callback function without any captured context.
  static noContext(e, n, l) {
    if (t) {
      const o = t;
      try {
        return t = null, e.apply(l, n);
      } finally {
        t = o;
      }
    } else
      return e.apply(l, n);
  }
};
function u(s) {
  try {
    return s();
  } catch {
  }
}
const r = "@wry/context:Slot", d = (
  // Prefer globalThis when available.
  // https://github.com/benjamn/wryware/issues/347
  u(() => globalThis) || // Fall back to global, which works in Node.js and may be converted by some
  // bundlers to the appropriate identifier (window, self, ...) depending on the
  // bundling target. https://github.com/endojs/endo/issues/576#issuecomment-1178515224
  u(() => global) || // Otherwise, use a dummy host that's local to this module. We used to fall
  // back to using the Array constructor as a namespace, but that was flagged in
  // https://github.com/benjamn/wryware/issues/347, and can be avoided.
  /* @__PURE__ */ Object.create(null)
), c = d, b = c[r] || // Earlier versions of this package stored the globalKey property on the Array
// constructor, so we check there as well, to prevent Slot class duplication.
Array[r] || function(s) {
  try {
    Object.defineProperty(c, r, {
      value: s,
      enumerable: !1,
      writable: !1,
      // When it was possible for globalHost to be the Array constructor (a
      // legacy Slot dedup strategy), it was important for the property to be
      // configurable:true so it could be deleted. That does not seem to be as
      // important when globalHost is the global object, but I don't want to
      // cause similar problems again, and configurable:true seems safest.
      // https://github.com/endojs/endo/issues/576#issuecomment-1178274008
      configurable: !0
    });
  } finally {
    return s;
  }
}(h());
export {
  b as Slot
};
//# sourceMappingURL=index.es212.js.map
