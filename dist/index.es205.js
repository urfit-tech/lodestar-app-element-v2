import e from "./index.es123.js";
import n from "./index.es133.js";
import r from "./index.es206.js";
function c(o, i) {
  return n(o, new r.classes.URLSearchParams(), Object.assign({
    visitor: function(t, s, f, a) {
      return r.isNode && e.isBuffer(t) ? (this.append(s, t.toString("base64")), !1) : a.defaultVisitor.apply(this, arguments);
    }
  }, i));
}
export {
  c as default
};
//# sourceMappingURL=index.es205.js.map
