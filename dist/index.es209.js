var a = /* @__PURE__ */ new Map();
function c(t) {
  var n = a.get(t) || 1;
  return a.set(t, n + 1), "".concat(t, ":").concat(n, ":").concat(Math.random().toString(36).slice(2));
}
export {
  c as makeUniqueId
};
//# sourceMappingURL=index.es209.js.map
