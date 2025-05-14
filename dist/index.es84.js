function o(n, e, f) {
  var t = [];
  n.forEach(function(r) {
    return r[e] && t.push(r);
  }), t.forEach(function(r) {
    return r[e](f);
  });
}
export {
  o as iterateObserversSafely
};
//# sourceMappingURL=index.es84.js.map
