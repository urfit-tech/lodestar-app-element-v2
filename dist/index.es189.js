var t, i;
function g() {
  if (i) return t;
  i = 1;
  var n = "[object String]", o = Object.prototype, e = o.toString, s = Array.isArray;
  function a(r) {
    return !!r && typeof r == "object";
  }
  function c(r) {
    return typeof r == "string" || !s(r) && a(r) && e.call(r) == n;
  }
  return t = c, t;
}
export {
  g as __require
};
//# sourceMappingURL=index.es189.js.map
