import { __require as C } from "./index.es260.js";
import { __require as E } from "./index.es285.js";
import { __require as G } from "./index.es286.js";
import { __require as L } from "./index.es287.js";
import { __require as O } from "./index.es277.js";
import { __require as x } from "./index.es278.js";
import { __require as y } from "./index.es282.js";
import { __require as A } from "./index.es281.js";
var q, d;
function F() {
  if (d) return q;
  d = 1;
  const h = C(), _ = E(), { ANY: v } = _, w = G(), g = L(), c = O(), p = x(), R = y(), S = A();
  return q = (s, i, b, u) => {
    s = new h(s, u), i = new w(i, u);
    let m, a, o, f, l;
    switch (b) {
      case ">":
        m = c, a = R, o = p, f = ">", l = ">=";
        break;
      case "<":
        m = p, a = S, o = c, f = "<", l = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (g(s, i, u))
      return !1;
    for (let n = 0; n < i.set.length; ++n) {
      const k = i.set[n];
      let t = null, e = null;
      if (k.forEach((r) => {
        r.semver === v && (r = new _(">=0.0.0")), t = t || r, e = e || r, m(r.semver, t.semver, u) ? t = r : o(r.semver, e.semver, u) && (e = r);
      }), t.operator === f || t.operator === l || (!e.operator || e.operator === f) && a(s, e.semver))
        return !1;
      if (e.operator === l && o(s, e.semver))
        return !1;
    }
    return !0;
  }, q;
}
export {
  F as __require
};
//# sourceMappingURL=index.es293.js.map
