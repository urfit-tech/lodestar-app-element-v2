import i from "./index.es85.js";
import S from "./index.es142.js";
const h = Symbol("internals");
function l(r) {
  return r && String(r).trim().toLowerCase();
}
function p(r) {
  return r === !1 || r == null ? r : i.isArray(r) ? r.map(p) : String(r);
}
function d(r) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; s = n.exec(r); )
    t[s[1]] = s[2];
  return t;
}
const A = (r) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());
function g(r, t, n, s, e) {
  if (i.isFunction(s))
    return s.call(this, t, n);
  if (e && (t = n), !!i.isString(t)) {
    if (i.isString(s))
      return t.indexOf(s) !== -1;
    if (i.isRegExp(s))
      return s.test(t);
  }
}
function E(r) {
  return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s);
}
function H(r, t) {
  const n = i.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(r, s + n, {
      value: function(e, o, f) {
        return this[s].call(this, t, e, o, f);
      },
      configurable: !0
    });
  });
}
class b {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, s) {
    const e = this;
    function o(c, u, a) {
      const y = l(u);
      if (!y)
        throw new Error("header name must be a non-empty string");
      const m = i.findKey(e, y);
      (!m || e[m] === void 0 || a === !0 || a === void 0 && e[m] !== !1) && (e[m || u] = p(c));
    }
    const f = (c, u) => i.forEach(c, (a, y) => o(a, y, u));
    if (i.isPlainObject(t) || t instanceof this.constructor)
      f(t, n);
    else if (i.isString(t) && (t = t.trim()) && !A(t))
      f(S(t), n);
    else if (i.isHeaders(t))
      for (const [c, u] of t.entries())
        o(u, c, s);
    else
      t != null && o(n, t, s);
    return this;
  }
  get(t, n) {
    if (t = l(t), t) {
      const s = i.findKey(this, t);
      if (s) {
        const e = this[s];
        if (!n)
          return e;
        if (n === !0)
          return d(e);
        if (i.isFunction(n))
          return n.call(this, e, s);
        if (i.isRegExp(n))
          return n.exec(e);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = l(t), t) {
      const s = i.findKey(this, t);
      return !!(s && this[s] !== void 0 && (!n || g(this, this[s], s, n)));
    }
    return !1;
  }
  delete(t, n) {
    const s = this;
    let e = !1;
    function o(f) {
      if (f = l(f), f) {
        const c = i.findKey(s, f);
        c && (!n || g(s, s[c], c, n)) && (delete s[c], e = !0);
      }
    }
    return i.isArray(t) ? t.forEach(o) : o(t), e;
  }
  clear(t) {
    const n = Object.keys(this);
    let s = n.length, e = !1;
    for (; s--; ) {
      const o = n[s];
      (!t || g(this, this[o], o, t, !0)) && (delete this[o], e = !0);
    }
    return e;
  }
  normalize(t) {
    const n = this, s = {};
    return i.forEach(this, (e, o) => {
      const f = i.findKey(s, o);
      if (f) {
        n[f] = p(e), delete n[o];
        return;
      }
      const c = t ? E(o) : String(o).trim();
      c !== o && delete n[o], n[c] = p(e), s[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return i.forEach(this, (s, e) => {
      s != null && s !== !1 && (n[e] = t && i.isArray(s) ? s.join(", ") : s);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const s = new this(t);
    return n.forEach((e) => s.set(e)), s;
  }
  static accessor(t) {
    const s = (this[h] = this[h] = {
      accessors: {}
    }).accessors, e = this.prototype;
    function o(f) {
      const c = l(f);
      s[c] || (H(e, f), s[c] = !0);
    }
    return i.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
b.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
i.reduceDescriptors(b.prototype, ({ value: r }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => r,
    set(s) {
      this[n] = s;
    }
  };
});
i.freezeMethods(b);
export {
  b as default
};
//# sourceMappingURL=index.es99.js.map
