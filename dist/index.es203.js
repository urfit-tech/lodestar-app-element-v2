import "./index.es193.js";
import "./index.es194.js";
import { dep as s } from "./index.es207.js";
import { Slot as h } from "./index.es212.js";
import "./index.es213.js";
var p = new h(), c = /* @__PURE__ */ new WeakMap();
function a(r) {
  var t = c.get(r);
  return t || c.set(r, t = {
    vars: /* @__PURE__ */ new Set(),
    dep: s()
  }), t;
}
function w(r) {
  a(r).vars.forEach(function(t) {
    return t.forgetCache(r);
  });
}
function E(r) {
  a(r).vars.forEach(function(t) {
    return t.attachCache(r);
  });
}
function b(r) {
  var t = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), e = function(n) {
    if (arguments.length > 0) {
      if (r !== n) {
        r = n, t.forEach(function(f) {
          a(f).dep.dirty(e), v(f);
        });
        var d = Array.from(o);
        o.clear(), d.forEach(function(f) {
          return f(r);
        });
      }
    } else {
      var i = p.getValue();
      i && (u(i), a(i).dep(e));
    }
    return r;
  };
  e.onNextChange = function(n) {
    return o.add(n), function() {
      o.delete(n);
    };
  };
  var u = e.attachCache = function(n) {
    return t.add(n), a(n).vars.add(e), e;
  };
  return e.forgetCache = function(n) {
    return t.delete(n);
  }, e;
}
function v(r) {
  r.broadcastWatches && r.broadcastWatches();
}
export {
  p as cacheSlot,
  w as forgetCache,
  b as makeVar,
  E as recallCache
};
//# sourceMappingURL=index.es203.js.map
