var u = function(t, e) {
  var n = t.getContext(), r = n.uri;
  return r || (typeof e == "function" ? e(t) : e || "/graphql");
};
export {
  u as selectURI
};
//# sourceMappingURL=index.es221.js.map
