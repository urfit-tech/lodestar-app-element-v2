import { __require as C } from "./index.es233.js";
import { __require as g } from "./index.es235.js";
import { __require as q } from "./index.es231.js";
var a, i;
function L() {
  if (i) return a;
  i = 1;
  const f = C(), m = g(), { safeRe: c, t: n } = q();
  return a = (r, t) => {
    if (r instanceof f)
      return r;
    if (typeof r == "number" && (r = String(r)), typeof r != "string")
      return null;
    t = t || {};
    let e = null;
    if (!t.rtl)
      e = r.match(t.includePrerelease ? c[n.COERCEFULL] : c[n.COERCE]);
    else {
      const u = t.includePrerelease ? c[n.COERCERTLFULL] : c[n.COERCERTL];
      let l;
      for (; (l = u.exec(r)) && (!e || e.index + e[0].length !== r.length); )
        (!e || l.index + l[0].length !== e.index + e[0].length) && (e = l), u.lastIndex = l.index + l[1].length + l[2].length;
      u.lastIndex = -1;
    }
    if (e === null)
      return null;
    const s = e[2], d = e[3] || "0", h = e[4] || "0", R = t.includePrerelease && e[5] ? `-${e[5]}` : "", x = t.includePrerelease && e[6] ? `+${e[6]}` : "";
    return m(`${s}.${d}.${h}${R}${x}`, t);
  }, a;
}
export {
  L as __require
};
//# sourceMappingURL=index.es257.js.map
