import { canUseAsyncIteratorSymbol as h } from "./index.es121.js";
function p(e) {
  var o = null, u = null, f = !1, a = [], i = [];
  function l(n) {
    if (!u) {
      if (i.length) {
        var r = i.shift();
        if (Array.isArray(r) && r[0])
          return r[0]({ value: n, done: !1 });
      }
      a.push(n);
    }
  }
  function c(n) {
    u = n;
    var r = i.slice();
    r.forEach(function(s) {
      s[1](n);
    }), !o || o();
  }
  function t() {
    f = !0;
    var n = i.slice();
    n.forEach(function(r) {
      r[0]({ value: void 0, done: !0 });
    }), !o || o();
  }
  o = function() {
    o = null, e.removeListener("data", l), e.removeListener("error", c), e.removeListener("end", t), e.removeListener("finish", t), e.removeListener("close", t);
  }, e.on("data", l), e.on("error", c), e.on("end", t), e.on("finish", t), e.on("close", t);
  function d() {
    return new Promise(function(n, r) {
      if (u)
        return r(u);
      if (a.length)
        return n({ value: a.shift(), done: !1 });
      if (f)
        return n({ value: void 0, done: !0 });
      i.push([n, r]);
    });
  }
  var v = {
    next: function() {
      return d();
    }
  };
  return h && (v[Symbol.asyncIterator] = function() {
    return this;
  }), v;
}
export {
  p as default
};
//# sourceMappingURL=index.es306.js.map
