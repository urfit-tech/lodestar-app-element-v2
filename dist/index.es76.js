import u from "./index.es71.js";
function f(e) {
  return u.matchAll(/\w+|\[(\w*)]/g, e).map((o) => o[0] === "[]" ? "" : o[1] || o[0]);
}
function y(e) {
  const o = {}, r = Object.keys(e);
  let i;
  const n = r.length;
  let c;
  for (i = 0; i < n; i++)
    c = r[i], o[c] = e[c];
  return o;
}
function m(e) {
  function o(r, i, n, c) {
    let s = r[c++];
    if (s === "__proto__") return !0;
    const t = Number.isFinite(+s), l = c >= r.length;
    return s = !s && u.isArray(n) ? n.length : s, l ? (u.hasOwnProp(n, s) ? n[s] = [n[s], i] : n[s] = i, !t) : ((!n[s] || !u.isObject(n[s])) && (n[s] = []), o(r, i, n[s], c) && u.isArray(n[s]) && (n[s] = y(n[s])), !t);
  }
  if (u.isFormData(e) && u.isFunction(e.entries)) {
    const r = {};
    return u.forEachEntry(e, (i, n) => {
      o(f(i), n, r, 0);
    }), r;
  }
  return null;
}
export {
  m as default
};
//# sourceMappingURL=index.es76.js.map
