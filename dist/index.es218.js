function a(r) {
  var t, n = r[Symbol.asyncIterator]();
  return t = {
    next: function() {
      return n.next();
    }
  }, t[Symbol.asyncIterator] = function() {
    return this;
  }, t;
}
export {
  a as default
};
//# sourceMappingURL=index.es218.js.map
