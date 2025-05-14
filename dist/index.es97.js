function u() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  var n = /* @__PURE__ */ Object.create(null);
  return e.forEach(function(t) {
    t && Object.keys(t).forEach(function(a) {
      var c = t[a];
      c !== void 0 && (n[a] = c);
    });
  }), n;
}
export {
  u as compact
};
//# sourceMappingURL=index.es97.js.map
