import { __require as n } from "./index.es179.js";
var t, d;
function l() {
  if (d) return t;
  d = 1;
  var i = n();
  return t = function(c, r) {
    r = r || {};
    var a = i.decode(c, r);
    if (!a)
      return null;
    var e = a.payload;
    if (typeof e == "string")
      try {
        var u = JSON.parse(e);
        u !== null && typeof u == "object" && (e = u);
      } catch {
      }
    return r.complete === !0 ? {
      header: a.header,
      payload: e,
      signature: a.signature
    } : e;
  }, t;
}
export {
  l as __require
};
//# sourceMappingURL=index.es115.js.map
