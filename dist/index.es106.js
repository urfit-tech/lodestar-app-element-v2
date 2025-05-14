const { toString: f, hasOwnProperty: h } = Object.prototype, l = Function.prototype.toString, i = /* @__PURE__ */ new Map();
function b(e, t) {
  try {
    return u(e, t);
  } finally {
    i.clear();
  }
}
function u(e, t) {
  if (e === t)
    return !0;
  const n = f.call(e), g = f.call(t);
  if (n !== g)
    return !1;
  switch (n) {
    case "[object Array]":
      if (e.length !== t.length)
        return !1;
    // Fall through to object case...
    case "[object Object]": {
      if (j(e, t))
        return !0;
      const r = y(e), a = y(t), o = r.length;
      if (o !== a.length)
        return !1;
      for (let c = 0; c < o; ++c)
        if (!h.call(t, r[c]))
          return !1;
      for (let c = 0; c < o; ++c) {
        const s = r[c];
        if (!u(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return e.name === t.name && e.message === t.message;
    case "[object Number]":
      if (e !== e)
        return t !== t;
    // Fall through to shared +a === +b case...
    case "[object Boolean]":
    case "[object Date]":
      return +e == +t;
    case "[object RegExp]":
    case "[object String]":
      return e == `${t}`;
    case "[object Map]":
    case "[object Set]": {
      if (e.size !== t.size)
        return !1;
      if (j(e, t))
        return !0;
      const r = e.entries(), a = n === "[object Map]";
      for (; ; ) {
        const o = r.next();
        if (o.done)
          break;
        const [c, s] = o.value;
        if (!t.has(c) || a && !u(s, t.get(c)))
          return !1;
      }
      return !0;
    }
    case "[object Uint16Array]":
    case "[object Uint8Array]":
    // Buffer, in Node.js.
    case "[object Uint32Array]":
    case "[object Int32Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object ArrayBuffer]":
      e = new Uint8Array(e), t = new Uint8Array(t);
    // Fall through...
    case "[object DataView]": {
      let r = e.byteLength;
      if (r === t.byteLength)
        for (; r-- && e[r] === t[r]; )
          ;
      return r === -1;
    }
    case "[object AsyncFunction]":
    case "[object GeneratorFunction]":
    case "[object AsyncGeneratorFunction]":
    case "[object Function]": {
      const r = l.call(e);
      return r !== l.call(t) ? !1 : !A(r, p);
    }
  }
  return !1;
}
function y(e) {
  return Object.keys(e).filter(d, e);
}
function d(e) {
  return this[e] !== void 0;
}
const p = "{ [native code] }";
function A(e, t) {
  const n = e.length - t.length;
  return n >= 0 && e.indexOf(t, n) === n;
}
function j(e, t) {
  let n = i.get(e);
  if (n) {
    if (n.has(t))
      return !0;
  } else
    i.set(e, n = /* @__PURE__ */ new Set());
  return n.add(t), !1;
}
export {
  b as default,
  b as equal
};
//# sourceMappingURL=index.es106.js.map
