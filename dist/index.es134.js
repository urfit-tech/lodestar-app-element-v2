var i = Object.prototype.toString;
function n(t) {
  return u(t);
}
function u(t, r) {
  switch (i.call(t)) {
    case "[object Array]": {
      if (r = r || /* @__PURE__ */ new Map(), r.has(t))
        return r.get(t);
      var c = t.slice(0);
      return r.set(t, c), c.forEach(function(e, f) {
        c[f] = u(e, r);
      }), c;
    }
    case "[object Object]": {
      if (r = r || /* @__PURE__ */ new Map(), r.has(t))
        return r.get(t);
      var o = Object.create(Object.getPrototypeOf(t));
      return r.set(t, o), Object.keys(t).forEach(function(e) {
        o[e] = u(t[e], r);
      }), o;
    }
    default:
      return t;
  }
}
export {
  n as cloneDeep
};
//# sourceMappingURL=index.es134.js.map
