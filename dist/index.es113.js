import P from "./index.es114.js";
const { toString: C } = Object.prototype, { getPrototypeOf: h } = Object, y = /* @__PURE__ */ ((e) => (t) => {
  const r = C.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), l = (e) => (e = e.toLowerCase(), (t) => y(t) === e), w = (e) => (t) => typeof t === e, { isArray: u } = Array, p = w("undefined");
function D(e) {
  return e !== null && !p(e) && e.constructor !== null && !p(e.constructor) && c(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const b = l("ArrayBuffer");
function T(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && b(e.buffer), t;
}
const R = w("string"), c = w("function"), A = w("number"), g = (e) => e !== null && typeof e == "object", M = (e) => e === !0 || e === !1, m = (e) => {
  if (y(e) !== "object")
    return !1;
  const t = h(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, N = l("Date"), k = l("File"), U = l("Blob"), I = l("FileList"), V = (e) => g(e) && c(e.pipe), q = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || c(e.append) && ((t = y(e)) === "formdata" || // detect form-data instance
  t === "object" && c(e.toString) && e.toString() === "[object FormData]"));
}, H = l("URLSearchParams"), [_, z, J, K] = ["ReadableStream", "Request", "Response", "Headers"].map(l), $ = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function d(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), u(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let f;
    for (n = 0; n < i; n++)
      f = o[n], t.call(null, e[f], f, e);
  }
}
function x(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const a = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, B = (e) => !p(e) && e !== a;
function F() {
  const { caseless: e } = B(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && x(t, s) || s;
    m(t[o]) && m(n) ? t[o] = F(t[o], n) : m(n) ? t[o] = F({}, n) : u(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && d(arguments[n], r);
  return t;
}
const W = (e, t, r, { allOwnKeys: n } = {}) => (d(t, (s, o) => {
  r && c(s) ? e[o] = P(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), G = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Q = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, X = (e, t, r, n) => {
  let s, o, i;
  const f = {};
  if (t = t || {}, e == null) return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!n || n(i, e, t)) && !f[i] && (t[i] = e[i], f[i] = !0);
    e = r !== !1 && h(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Y = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Z = (e) => {
  if (!e) return null;
  if (u(e)) return e;
  let t = e.length;
  if (!A(t)) return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, j = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && h(Uint8Array)), v = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, ee = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, te = l("HTMLFormElement"), ne = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), S = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), re = l("RegExp"), E = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  d(r, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (n[o] = i || s);
  }), Object.defineProperties(e, n);
}, se = (e) => {
  E(e, (t, r) => {
    if (c(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (c(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, oe = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return u(e) ? n(e) : n(String(e).split(t)), r;
}, ie = () => {
}, ce = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function le(e) {
  return !!(e && c(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const fe = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (g(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = u(n) ? [] : {};
        return d(n, (i, f) => {
          const O = r(i, s + 1);
          !p(O) && (o[f] = O);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, ae = l("AsyncFunction"), ue = (e) => e && (g(e) || c(e)) && c(e.then) && c(e.catch), L = ((e, t) => e ? setImmediate : t ? ((r, n) => (a.addEventListener("message", ({ source: s, data: o }) => {
  s === a && o === r && n.length && n.shift()();
}, !1), (s) => {
  n.push(s), a.postMessage(r, "*");
}))(`axios@${Math.random()}`, []) : (r) => setTimeout(r))(
  typeof setImmediate == "function",
  c(a.postMessage)
), pe = typeof queueMicrotask < "u" ? queueMicrotask.bind(a) : typeof process < "u" && process.nextTick || L, me = {
  isArray: u,
  isArrayBuffer: b,
  isBuffer: D,
  isFormData: q,
  isArrayBufferView: T,
  isString: R,
  isNumber: A,
  isBoolean: M,
  isObject: g,
  isPlainObject: m,
  isReadableStream: _,
  isRequest: z,
  isResponse: J,
  isHeaders: K,
  isUndefined: p,
  isDate: N,
  isFile: k,
  isBlob: U,
  isRegExp: re,
  isFunction: c,
  isStream: V,
  isURLSearchParams: H,
  isTypedArray: j,
  isFileList: I,
  forEach: d,
  merge: F,
  extend: W,
  trim: $,
  stripBOM: G,
  inherits: Q,
  toFlatObject: X,
  kindOf: y,
  kindOfTest: l,
  endsWith: Y,
  toArray: Z,
  forEachEntry: v,
  matchAll: ee,
  isHTMLForm: te,
  hasOwnProperty: S,
  hasOwnProp: S,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: E,
  freezeMethods: se,
  toObjectSet: oe,
  toCamelCase: ne,
  noop: ie,
  toFiniteNumber: ce,
  findKey: x,
  global: a,
  isContextDefined: B,
  isSpecCompliantForm: le,
  toJSONObject: fe,
  isAsyncFn: ae,
  isThenable: ue,
  setImmediate: L,
  asap: pe
};
export {
  me as default
};
//# sourceMappingURL=index.es113.js.map
