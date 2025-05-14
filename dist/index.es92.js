var e, t;
function c() {
  if (t) return e;
  t = 1;
  var o = "[object Number]", n = Object.prototype, i = n.toString;
  function u(r) {
    return !!r && typeof r == "object";
  }
  function b(r) {
    return typeof r == "number" || u(r) && i.call(r) == o;
  }
  return e = b, e;
}
export {
  c as __require
};
//# sourceMappingURL=index.es92.js.map
