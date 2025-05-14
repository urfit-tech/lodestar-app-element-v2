import { WeakCache as i } from "./index.es72.js";
import { StrongCache as s } from "./index.es146.js";
var u = /* @__PURE__ */ new WeakSet();
function l(e) {
  e.size <= (e.max || -1) || u.has(e) || (u.add(e), setTimeout(function() {
    e.clean(), u.delete(e);
  }, 100));
}
var d = function(e, r) {
  var t = new i(e, r);
  return t.set = function(n, a) {
    var o = i.prototype.set.call(this, n, a);
    return l(this), o;
  }, t;
}, h = function(e, r) {
  var t = new s(e, r);
  return t.set = function(n, a) {
    var o = s.prototype.set.call(this, n, a);
    return l(this), o;
  }, t;
};
export {
  h as AutoCleanedStrongCache,
  d as AutoCleanedWeakCache
};
//# sourceMappingURL=index.es76.js.map
