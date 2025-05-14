import t from "./index.es123.js";
import E from "./index.es134.js";
function p(i) {
  return t.isPlainObject(i) || t.isArray(i);
}
function h(i) {
  return t.endsWith(i, "[]") ? i.slice(0, -2) : i;
}
function O(i, e, s) {
  return i ? i.concat(e).map(function(o, d) {
    return o = h(o), !s && d ? "[" + o + "]" : o;
  }).join(s ? "." : "") : e;
}
function T(i) {
  return t.isArray(i) && !i.some(p);
}
const S = t.toFlatObject(t, {}, null, function(e) {
  return /^is[A-Z]/.test(e);
});
function W(i, e, s) {
  if (!t.isObject(i))
    throw new TypeError("target must be an object");
  e = e || new FormData(), s = t.toFlatObject(s, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(n, u) {
    return !t.isUndefined(u[n]);
  });
  const B = s.metaTokens, o = s.visitor || j, d = s.dots, m = s.indexes, w = (s.Blob || typeof Blob < "u" && Blob) && t.isSpecCompliantForm(e);
  if (!t.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(r) {
    if (r === null) return "";
    if (t.isDate(r))
      return r.toISOString();
    if (!w && t.isBlob(r))
      throw new E("Blob is not supported. Use a Buffer instead.");
    return t.isArrayBuffer(r) || t.isTypedArray(r) ? w && typeof Blob == "function" ? new Blob([r]) : Buffer.from(r) : r;
  }
  function j(r, n, u) {
    let c = r;
    if (r && !u && typeof r == "object") {
      if (t.endsWith(n, "{}"))
        n = B ? n : n.slice(0, -2), r = JSON.stringify(r);
      else if (t.isArray(r) && T(r) || (t.isFileList(r) || t.endsWith(n, "[]")) && (c = t.toArray(r)))
        return n = h(n), c.forEach(function(b, x) {
          !(t.isUndefined(b) || b === null) && e.append(
            // eslint-disable-next-line no-nested-ternary
            m === !0 ? O([n], x, d) : m === null ? n : n + "[]",
            l(b)
          );
        }), !1;
    }
    return p(r) ? !0 : (e.append(O(u, n, d), l(r)), !1);
  }
  const a = [], F = Object.assign(S, {
    defaultVisitor: j,
    convertValue: l,
    isVisitable: p
  });
  function A(r, n) {
    if (!t.isUndefined(r)) {
      if (a.indexOf(r) !== -1)
        throw Error("Circular reference detected in " + n.join("."));
      a.push(r), t.forEach(r, function(c, f) {
        (!(t.isUndefined(c) || c === null) && o.call(
          e,
          c,
          t.isString(f) ? f.trim() : f,
          n,
          F
        )) === !0 && A(c, n ? n.concat(f) : [f]);
      }), a.pop();
    }
  }
  if (!t.isObject(i))
    throw new TypeError("data must be an object");
  return A(i), e;
}
export {
  W as default
};
//# sourceMappingURL=index.es133.js.map
