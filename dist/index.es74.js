import { WeakCache as r } from "./index.es128.js";
var t = /* @__PURE__ */ new WeakSet();
function s(e) {
  e.size <= (e.max || -1) || t.has(e) || (t.add(e), setTimeout(function() {
    e.clean(), t.delete(e);
  }, 100));
}
var d = function(e, a) {
  var n = new r(e, a);
  return n.set = function(u, i) {
    var o = r.prototype.set.call(this, u, i);
    return s(this), o;
  }, n;
};
export {
  d as AutoCleanedWeakCache
};
//# sourceMappingURL=index.es74.js.map
