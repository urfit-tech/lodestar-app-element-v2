var r, e;
function b() {
  if (e) return r;
  e = 1;
  var t = "[object Boolean]", n = Object.prototype, i = n.toString;
  function a(o) {
    return o === !0 || o === !1 || s(o) && i.call(o) == t;
  }
  function s(o) {
    return !!o && typeof o == "object";
  }
  return r = a, r;
}
export {
  b as __require
};
//# sourceMappingURL=index.es185.js.map
