var w = Symbol.for("apollo.hook.wrappers");
function l(o, r, n) {
  var a = n.queryManager, p = a && a[w], e = p && p[o];
  return e ? e(r) : r;
}
export {
  l as wrapHook
};
//# sourceMappingURL=index.es201.js.map
